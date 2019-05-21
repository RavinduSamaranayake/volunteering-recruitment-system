const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcryptjs');
 

// Schema
const SelectEventSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true 
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    //required: true
  },
  date: {
    type: Date,
    required: true
  },
  attendees: {
    type: String,
    //required: true
  },
  rating: {
    type: String,
    //required: true
  },
  image: {
    type: String,
    //required: true
  },
  organization: {
    type: String,
    required: true
  },
  status: {

  }

  

});

const SelectEvent = module.exports = mongoose.model('SelectEvent', SelectEventSchema);

 
module.exports.getSelectEventById = function(id, callback){
    SelectEvent.findById(id, callback);
  }
  
  module.exports.getSelectEventByEventname = function(eventname, callback){
    const query = {eventname: eventname}
    SelectEvent.findOne(query, callback);
  }
   
 
