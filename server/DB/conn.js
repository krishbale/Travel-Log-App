const session = require('express-session');
const mongoose = require('mongoose');


  const DB = process.env.DATABASE;
//Connecting to the database
mongoose.connect(DB, {
    useNewUrlParser:true,
   
    useUnifiedTopology:true,
    
}).then(() => {
    console.log("connection succesfull")
}).catch((err) => {
    console.log(err)
})
