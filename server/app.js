const mongoose = require('mongoose');
const dotenv = require("dotenv");
const express = require('express');

const app = express();
dotenv.config({ path:'./config.env' });

require('./DB/conn');
app.use(express.json());
const User = require('./models/userSchema');

app.use(require('./router/auth'));
//we link the router file to make our link easy
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${ PORT }`);
})
