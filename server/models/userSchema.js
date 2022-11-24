const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    roles:[
        {
            type:String,
            default:'writer'
        },

    ],

    date:{
        type:Date,
        Default:Date.now
    },
   
    tokens:[
        {
            token:{
                type:String,
                required:true

            }

        }
       
    ],
   

})




 //securing the password
 //hashing the password
 userSchema.pre('save', async function(next)  {
    
    if ( this.isModified('password'))
    {
        this.password=  await bcrypt.hash(this.password,12);
    }
    next();

 })
// we are generating auth token
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRECT_KEY);
        this.tokens = this.tokens.concat({token:token}); 
         await this.save();
         return token;


    }catch(err){
        console.log(err)
    }
}

//store the message

//storing the travel logs




 const User = mongoose.model('USER',userSchema);
 module.exports= User;