const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'author'],
    required: true
  },

  date: {
    type: Date,
    Default: Date.now
  },

  tokens: [
    {
      token: {
        type: String,
        required: true

      }

    }

  ]

})

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12)
  }
  next()
})

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id, role: this.role }, process.env.SECRECT_KEY)
    this.tokens = this.tokens.concat({ token })
    await this.save()
    return token
  } catch (err) {
    console.log(err)
  }
}

const User = mongoose.model('USER', userSchema)
module.exports = User
