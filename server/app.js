const mongoose = require('mongoose');
const express = require('express');
const app = express();
const DB = 'mongodb+srv://krishz70:eBtgNzvezUFtLeta@cluster0.q5biylg.mongodb.net/mernstack?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser:true,
   
    useUnifiedTopology:true,
    
}).then(() => {
    console.log("connection succesfull")
}).catch((err) => {
    console.log(err)
})

//Middleware
const midddleware = (req, res, next) => {
console.log("Hello my middleware");
next();

}

app.get("/", (req,res) => {
    res.send(`Hello world from the server`)
})
app.get("/about",midddleware, (req,res) => {
    console.log("Hello my about")
    res.send(`Hello world from the about`)
})
app.get("/contact", (req,res) => {
    res.send(`Hello world from the contact`)
})
app.get("/signin", (req,res) => {
    res.send(`Hello world from the signin`)
})
app.get("/signup", (req,res) => {
    res.send(`Hello world from the signup`)
})

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})
