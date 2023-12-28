require('dotenv').config({ path: './config.env' })
const mongoose = require('mongoose')
const DB = process.env.DATABASE

async function connectDB () {
  try {
    await mongoose.connect(DB, {
    })
    console.log('Connection successful')
    mongoose.set('strictQuery', false) // Setting this after successful connection
  } catch (err) {
    console.log(DB)
    console.error('Connection failed', err)
  }
}

connectDB()
