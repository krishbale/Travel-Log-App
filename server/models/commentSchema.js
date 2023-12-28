const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
  {
    logid: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'LOG'
    },

    comments:
        {
          type: String

        }
  },
  {
    timestamps: true
  }
)
const Comment = mongoose.model('COMMENT', commentSchema)
module.exports = Comment
