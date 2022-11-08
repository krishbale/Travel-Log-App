const mongoose = require('mongoose');
const dotenv = require("dotenv");
const express = require('express');

const app = express();
dotenv.config({ path:'./config.env' });

require('./DB/conn');
app.use(express.json());
// const User = require('./models/userSchema');
app.use(require('./router/auth'));
//we link the router file to make our link easy
const PORT = process.env.PORT;



//Middleware
const midddleware = (req, res, next) => {
console.log("Hello my middleware");
next();

}


// app.get("/", (req,res) => {
//     res.send(`Hello world from the server app.js`)
// })
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

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${ PORT }`);
})
