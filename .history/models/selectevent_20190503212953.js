const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcryptjs');
 

// Schema
const SlEventSchema = mongoose.Schema({
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
  }

  

});

const Event = module.exports = mongoose.model('Event', EventSchema);

 
module.exports.getEventById = function(id, callback){
  Event.findById(id, callback);
}

module.exports.getEventByEventname = function(eventname, callback){
  const query = {eventname: eventname}
  Event.findOne(query, callback);
}
 
 
