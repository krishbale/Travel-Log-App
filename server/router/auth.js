const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
router.use(cookieParser());

require('../DB/conn');
const User = require('../models/userSchema');

// router.get("/", (req,res) => {
//     res.send(`Hello world from the server router js`)
// });
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
        if(!userLogin){
            res.status(422).json({"message" : "TRY Again with valid Credentials"})
            console.log('Not valid Credentials')
        }else if(userLogin){
            


            const isMatch = await bcrypt.compare(password, userLogin.password)
            if(!isMatch){
                res.status(422).json({"message" : "Try again with valid passwords"})

            }else{
               
                const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            })
            
            res.json(userLogin)
            
            }
            
            }
            } catch(err){
                console.log(err)
               
            
        }
    });
    //about us page
    router.get('/about' ,authenticate,(req, res)=>{
        console.log('hello my about');
        res.send(req.rootUser);


    });
    //contact and home
    router.get('/getdata' ,authenticate,(req, res)=>{
        console.log('hello my about');
   
        res.send(req.rootUser);


    });
    //contact message
    router.post('/contact' ,authenticate,async(req, res)=>{
        try{
            const {name ,email,phone,message} = req.body;
            if(!name || !email || !phone || !message){
                return res.json({"error":"please fill the field properly"})
                
            }
            const userContact =  await User.findOne({_id:req.userID});
            if(userContact){
                const userMessage = await userContact.addMessage(name,email,phone,message)
                await userContact.save();
                res.status(201).json({message:"Message send successfully"})
            }
            
        }catch(e){
            console.log(e);
        }
      
       
   
      


    });
 


    router.get('/logout' ,(req, res)=>{
     
        res.clearCookie('jwtoken',{ path:'/' });
        res.status(200).send('User Logout')


    })

 



module.exports = router;