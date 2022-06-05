const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  sub_title: {
    type: String,
    required: true
  },
  details:{
      type:String,
      required: true
  },
  post_author:{
      type: String,
      required: true
  }
});



module.exports = mongoose.model('News', newsSchema);
