var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true,
  },
  zip:{
    type:Number,
    required:true,
    minLength: 5,
    maxLength: 5
  },
  description: {
    type: String,
    required:true,
    maxLength: 250
  },
  pickup: {
    type:String,
    required: true,
    maxLength:150
  },
  picture: {
    type:String
  }
})

var Share = mongoose.model('Share', shareSchema);

module.exports = Share;
