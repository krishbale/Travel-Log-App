const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema(
    {  
        _id:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'User'
        }, 
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true
    },
    message: {
        type:String,
        required:true
    },
});

const Message = mongoose.model('MSG',messageSchema);


module.exports= Message;