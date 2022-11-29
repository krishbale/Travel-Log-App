const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const likeSchema = new mongoose.Schema({
logid:{

    type:mongoose.SchemaTypes.ObjectId,
    ref:'LOG'
},

likes:
    {
         type:Number,  

    },
})

    const Like = mongoose.model('LIKE',likeSchema);
    module.exports= Like;