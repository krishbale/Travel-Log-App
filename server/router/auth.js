const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
router.use(cookieParser());
var mongo = require('mongodb').MongoClient;
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')
(session)

const User = require('../models/userSchema');
const Log = require('../models/logSchema');
const Message = require('../models/messageSchema');
const Comment = require('../models/commentSchema');
const Like = require('../models/likeSchema');


router.post('/register' , async (req, res) =>  {
    const { username , password,roles } = req.body;

    if(!username  || !password ){
    
        return res.status(422).json({error: "please fill the field properly "})
    }

    try{
      const userExist =  await User.findOne({ username:username })
      if(userExist){
        return res.status(422).json({error: "Choose another username "}) 
                     }else {
                        const user = new User({ username , password ,roles })
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
        const { username , password, } = req.body;
        if(!username||!password){
            return res.status(422).json({error: "please fill the field properly "})
    
        }
        
        const userLogin = await User.findOne({username:username})
        if(!userLogin){
            res.status(422).json({"message" : "Not a Valid Credentials"})
            console.log('Not valid Credentials')
        }else if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)
            if(!isMatch){
                res.status(422).json({"message" : "Try again with valid passwords"})
            }else{
                const userSession = { username:userLogin.username } //creating user session to keep user logged in also in refresh
                req.session.user = userSession //attach user session to session objects from express-session

        //token generation
            const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            })
            res.status(200)
            .json({
                message:"user login successfull",
                roles:userLogin.roles,
                success:true,userSession
            });
            }
            
            }
            } catch(err){
                console.log(err)
               
            
        }
    });
  
    router.get('/getdata' ,authenticate,(req, res)=>{
        res.send(req.rootUser);
    });

    router.get('/getlog',authenticate,async(req,res) =>{
        const log = await Log.find({ userid:req.userID })
        res.send(log);

        
    });

    router.get('/getlikes/:id',authenticate,async(req,res) =>{
        const { id } = req.params;
        
      const likes = await Like.find({ "log" : id}) 
      console.log(likes)
      res.json(likes) ;


        
    });
    router.get('/getcomments/:id',authenticate,async(req,res) =>{
        const { id } = req.params;
     
        const comments = await Comment.find({ "logid":id })
        console.log(comments);
        res.json(comments)

        
    });

    //public log i

   

    // });  //contact message
    router.post('/contact' ,authenticate,async(req, res)=>{
      
 
        try{
            const {name ,email,phone,message} = req.body;
            if(!name || !email || !phone || !message){
                return res.json({"error":"please fill the field properly"})
                
            }

            const user = req.rootUser;
             const contact = await new Message({name,email,phone,message,_id:user._id})
             await contact.save()
            
            
            if(contact){
            
             
                res.status(201).json({ message:"Message send successfully"})
            } else{
                res.status(400).json({ message:"Message send Unsuccessfull"})
            }
            
        }catch(e){
            console.log(e);
        }
    });

    router.post('/createlog',authenticate,async(req,res)=>{
        const { title, descriptions ,days, budgets } = req.body;
        if(!title || !descriptions|| ! days|| !budgets){
            return res.json({"error":"please fill the field properly"})
        }
        try{
            const user = req.rootUser;
            const log = new Log({title, descriptions ,days, budgets, userid: user._id})
            await log.save();
             res.json({msg:"log created successfully"})
        }catch(e){
            console.log(e);
        }
    }),
    router.post('/comments/:id',authenticate,async(req,res)=>{
        const { comments  } = req.body;
        const {  id } = req.params;
        if(!comments){
            return res.status(422).json({"error":"please fill the comments field properly"})
        }else{
            console.log(comments,id)
            
        }
        try{
           
            const cmt = new Comment({ comments,logid: id})
            await cmt.save();
            if(!cmt){
                res.json({msg:"not successfull"})
            }else{
                res.json({msg:"comment created successfully"})

            }
           

        }catch(e){
            console.log(e)

        }
    })
    router.put('/likes/:id',authenticate,async(req,res)=>{
        const {likes} = req.body;
        const { id } = req.params;
        try{
           
            const doc = await Like.findOneAndUpdate(
                {
                "logid":id,
                },
                {

                    $set:{
                        "likes":likes+1,
                        "logid":id
                    },
                   
                },
                {
                    upsert:true
                }
              
              

            
      
            )
            if(!doc){
             
                res.json({msg:"unable to register  likes"})

            }else{
               
                    res.json({msg:"like  registered on the database"})
                
            }

        }catch(e){
            console.log(e);

        }
    })

    
    router.put('/updatelog/:id',authenticate,async(req,res)=>{
        const {title,descriptions,days,budgets} = req.body;
        const { id } = req.params;

       
        try{
            const doc = await Log.findOneAndUpdate({
                 "_id":id},
            {
                $set: {
                    "title": title,
                    "descriptions": descriptions,
                    "days": days,
                    "budgets": budgets,
                    
                }
            }
            )
            if(!doc){
                console.error(error)
            }
    
        }catch(e){
            console.log(e)
        }
        
        res.status(201).json({message:"put route"})

    })
    router.put('/deletelog/:id',authenticate,async(req,res)=>{
        const { id } = req.params;
        try{
            const doc = await Log.findByIdAndRemove({
            
                _id:id},
            )
            if(!doc){
                console.log("failed")
            }
        }catch(e){
            console.log(e)  
        }
        res.status(201).json({message:"content deleted"})
    })
    router.get('/isAuth',async(req,res)=>{
            if(req.session.user){
                return res.status(200).json(req.session.user)
            }else{
                res.status(401).json({msg:"nosession"})
            }
    })
    router.get('/logout',authenticate,(req, res)=>{
      console.log('logout server');
      res.clearCookie('jwtoken',{path:'/'})
      res.clearCookie('session-id',{path:'/'}) 
      res.status(200).send('session Timeout , signing off')



    })

 



module.exports = router;