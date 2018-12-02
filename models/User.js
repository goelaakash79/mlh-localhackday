const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  // topic: {
  //   type: String,
  //   required: true
  // },
  // type: {
  //   type: String,
  //   required: true
  // },
  // location: {
  //   type: String,
  //   required: true
  // },
  // date: {
  //   type: String,
  //   required: true
  // }
});

module.exports = User = mongoose.model('User', UserSchema);
