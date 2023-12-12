const mongoose = require('mongoose');
/* mongoose.set('strictQuery', true);*/
const url="mongodb+srv://rohith234:2.....m@cluster0.qttl3mr.mongodb.net/NewSpectrum?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser:true}).then(console.log('Database Connected'));

const db=mongoose.connection;
db.once('open', async()=>{
    const collection = db.collection('Users');
    const data = await collection.find({}).toArray();
    console.log(data);
});