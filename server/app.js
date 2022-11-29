const mongoose = require('mongoose');
const dotenv = require("dotenv");
const express = require('express');
const session = require('express-session')

const app = express();
dotenv.config({ path:'./config.env' });

require('./DB/conn');
app.use(express.json());
const User = require('./models/userSchema');

const MongoDBStore = require('connect-mongodb-session')
(session)

//we link the router file to make our link easy
const PORT = process.env.PORT;
const DB = process.env.DATABASE;

const MAX_AGE = 1000 * 60 * 60 * 24 // 3hrs
//connecting to the settin up connect -mongodb-session store
const MongoDBstore = new MongoDBStore({
    uri:DB,
    collection:'mySessions',
})
app.use(session({
    secret:'a1s2d3f4g5h6',
    name:'session-id',//cookies name to be put in "key" field in postman
    store:MongoDBstore,
    cookie:{
        maxAge:MAX_AGE,
        sameSite:false,
        secure:false, // to turn on just in productions


    },
    resave:true,
    saveUninitialized:false,
}))
const loginrouter = (require('./router/auth'));
app.use('/api',loginrouter)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${ PORT }`);
})
