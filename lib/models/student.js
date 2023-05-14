const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['placed', 'not_placed'],
    required: true
  },
  dsaFinalScore: {
    type: Number,
    required: true
  },
  reactFinalScore: {
    type: Number,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  result: {
    type: String,
    enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'],
    required: true
  }
});
module.exports = mongoose.model('student', StudentSchema);