const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
    /*     date: Date, */
    Name:String,
    Email: String,
    Feedback: String
  });
  const Feedbacks = mongoose.model("FeedBacks", FeedbackSchema);
  module.exports = Feedbacks;