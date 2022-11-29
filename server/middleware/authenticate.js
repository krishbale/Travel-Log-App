const jwt = require("jsonwebtoken");
const Log = require("../models/logSchema");
const User = require('../models/userSchema');



const authentication = async (req,res,next)=>{
    
    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRECT_KEY);
        const rootUser = await User.findOne({ _id:verifyToken._id, "tokens.token": token})
      
   
   
        if(!rootUser){
            throw new Error('User not found');
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

        
  
    
     }catch(e){
        res.status(401).send('Unauthorized:NO token provided');
        console.log(e);

    }
    
   
}
module.exports = authentication;