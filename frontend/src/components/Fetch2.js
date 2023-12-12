const mongoose = require('mongoose')

const url = `mongodb+srv://rohith234:2.....m@cluster0.qttl3mr.mongodb.net/NewSpectrum?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

    // Mountain model
const peak = mongoose.model('Users', {

    username: { type: String },
    email: { type: String },
    /* height: { type: Number }, */
    password: { type: String }

});


peak.find( function (err, docs) {
    if (err){
        console.log(err);
        mongoose.disconnect();
    }
    else{
        console.log("result : ", docs);
        mongoose.disconnect();
    }
});