const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const logSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },

    descriptions: {
      type: String,
      required: true
    },

    budgets: {
      type: Number,
      required: true
    },

    days: {
      type: Number,
      required: true
    }

  },
  {
    timestamps: true
  }
)
logSchema.plugin(AutoIncrement, {
  inc_field: 'ticket',
  id: 'ticketNums',
  start_seq: 500
})

const Log = mongoose.model('LOG', logSchema)

module.exports = Log
