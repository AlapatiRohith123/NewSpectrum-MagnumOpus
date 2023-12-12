const express=require("express");
const mongoose=require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const multer = require('multer');
mongoose.connect("mongodb+srv://rohith123:1.....m@cluster0.qttl3mr.mongodb.net/NewSpectrum?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
  
const contactSchema = {
    Name:String,
    Email: String,
    Username:String,
    Password:String,
    Gender:String,
    Role: String,
};
  
const users = mongoose.model("users", contactSchema);
  
const app = express();

app.use(logger('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post("/users", async (req, res)=> {
    console.log(req.body);
    const user = new users({
        Name: req.body.Name,
        Email: req.body.Email,
        Username: req.body.Username,
        Password: req.body.Password,
        Gender: req.body.Gender,
        Role: req.body.Role,
    });
    users.findOne({$or: [{Email: req.body.Email},{Username: req.body.Username}]})
    .then(async (docs)=>{
        console.log(docs);
        if(!docs)
        {
            try {
                await user.save();
                //res.send("Success");
                res.json({
                    success: true,
                    message: ""
                });
            } 
            catch (err){
                throw err;
            }
        }
        else
        {
            res.json({
                success: false,
                message: "Username or Email already exist"
            });
        }
    })
    .catch((err)=>{
        console.log(err);
    });
    //console.log(exist);
});

app.post("/login", (req,res)=>{
    users.findOne({$or: [{Email: req.body.Username_Email},{Username: req.body.Username_Email}]})
    .then((docs)=>{
        if(!docs)
        {
            res.json({
                success: false,
                message: "Username or Email is incorrect"
            });
        }
        else if(docs.Password!=req.body.Password)
        {
            res.json({
                success: false,
                message: "Password is incorrect"
            });
        }
        else
        {
            res.json({
                success: true,
                Email: docs.Email,
                message: docs.Role
            });
        }
    })
})

const problemSchema={
    Field:String,
    Heading:String,
    Problem:String,
    LastDate:Date,
    Email: String,
    Solutions: [
        {
            solHeading: String,
            Solution: String,
            solEmail: String,
            Filename: String,
            File: Buffer
        }
    ]
}

const problems = mongoose.model("problems", problemSchema);

app.post("/postProblem", async (req, res)=> {
    console.log(req.body);
    const problem = new problems({
        Field: req.body.Field,
        Heading: req.body.Heading,
        Problem: req.body.Problem,
        LastDate: req.body.LastDate,
        Email: req.body.Email
    });
    try {
        await problem.save();
        //res.send("Success");
        res.json({
            success: true,
            message: "Successfully posted the problem"
        });
    } 
    catch (err){
        res.json({
            success: false,
            message: "Error in posting the problem"
        });
        throw err;
    }
}
);

// app.get("/getAllProblems", async (req, res)=> {
//     //console.log(req.query.Email);
//     problems.find({Email: {$ne: req.query.Email}})
//     .then((docs)=>{
//         // console.log(docs);
//         let result=docs.map((doc)=>{
//             users.findOne({Email: doc.Email})
//             .then((subdoc)=>{
//                 // console.log(subdoc);
//                 let name=subdoc.Name;
//                 delete doc.Email;
//                 doc.Name=name;
//                 console.log(doc);
//                 return doc;
//             })
//         })
//         //console.log(result);
//         res.json(result);
//     })
// }
// );

app.get("/getAllProblems", async (req, res) => {
    try {
      const docs = await problems.find({ Email: { $ne: req.query.Email } });
  
      const result = [];
  
      for (const doc of docs) {
        const subdoc = await users.findOne({ Email: doc.Email });
  
        if (subdoc) {
          const name = subdoc.Name;
          const modifiedDoc = { ...doc.toObject(), Name: name }; // Create a new object with the modified "Name" property
          delete modifiedDoc.Email;
          result.push(modifiedDoc);
        }
      }
  
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/postSolution", upload.single('File'), async (req, res)=> {
    console.log(req.file);
    console.log(req.body);
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const objectToPush = {
        solHeading: req.body.Heading,
        Solution: req.body.Solution,
        solEmail: req.body.Email,
        Filename: req.file.originalname,
        File: req.file.buffer
    };
    try{
        // Use the $push operator to push the object into the array
        const update = {
            $push: {
                Solutions: objectToPush,
            },
        };
        const result = await problems.updateOne({_id: req.body.currentQue}, update);
        res.json({message: "Successful"})
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
}
);

app.get("/getFullProblem",async (req, res)=> {
    const result=await problems.findOne({_id: req.query.currentQue});
    res.json(result);
}
);

// app.get("/downloadFile/:id", async (req, res)=>{
//     const {id}=req.params;
//     console.log(id);
//     const result=await problems.find({Solutions: {$elemMatch: {_id: id}}});
//     console.log(result);
//     let file;
//     for(var i of result[0].Solutions)
//     {
//         console.log(i._id);
//         if(i._id==id)
//         {
//             file=i.File;
//             break;
//         }
//     }
//     res.setHeader('Content-Disposition', `attachment; filename="${i.Filename}"`);
//     res.setHeader('Content-Type', 'application/octet-stream');
//     res.send(file);
// });

app.listen(8000, function(){
    console.log("App is running on Port 8000");
});