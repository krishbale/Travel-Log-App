const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../DB/conn');
const User = require('../models/userSchema');

router.get("/", (req,res) => {
    res.send(`Hello world from the server router js`)
});
//using promisees

// router.post('/register' ,  (req, res) =>  {
//     const { name , email , phone , work , password , cpassword } = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword ){
    
//         return res.status(422).json({error: "please fill the field properly "})
//     }
//     User.findOne({ email:email }).then((userExist => {
//         if(userExist){
//             return res.status(422).json({error: "E-mail already exists. "})   
//         }
//         const user = new User({ name , email, phone ,work , password , cpassword })
//         user.save().then(()=>{
//              res.status(201).json({ "message":"user registered successfully" })

//         }).catch((err) => {
//             res.status(500).json({"error":"Failed to register the user"})
//         })
//     })).catch((err)=>{
//         console.log(err);
//     })

// })
//using Async -Await

router.post('/register' , async (req, res) =>  {
    const { name , email , phone , work , password , cpassword } = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword ){
    
        return res.status(422).json({error: "please fill the field properly "})
    }

    try{
      const userExist =  await User.findOne({ email:email })
      if(userExist){
        return res.status(422).json({error: "E-mail already exists. "})   
                     }else if(password!=cpassword){
                         return res.status(422).json({error: "passwords are not matching "})  
                     }else {
                        const user = new User({ name , email, phone , work , password , cpassword })
                        //yaha pe
                        await  user.save()
                            res.json({message: "User registered successfully "}) 
                     }
    }catch(err){
        console.log(err);
    }
 })

 //login route
 router.post('/signin', async (req,res) => {
   
   
    try{
        const { email , password } = req.body;
        if(!email||!password){
            return res.status(422).json({error: "please fill the field properly "})
    
        }
        
        const userLogin = await User.findOne({email:email})
        //console.log(userlogin)
      
        if(userLogin){
            


            const isMatch = await bcrypt.compare(password, userLogin.password)
            if(!isMatch){
                res.status(400).json({ error :"Invalid Credentials  pass" });

            }else{
                res.json({ message:"user signin successfully"})
                const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            })
            }
            
            }else{
                res.json({ message:"Invalid Credentials email"})

            }
            } catch(err){
                console.log(err)
            
        }
    });

 



module.exports = router;