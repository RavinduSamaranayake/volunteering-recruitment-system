const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcryptjs');
 

// Schema
const SelectEventSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
    //index: true 
  },
  userid: {
    type: String,
    required: true,
    index: true  
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
    type: String,
    required: true
  }

  

});

SelectEventSchema.index({ _id: 1, userid: 1 }, { unique: true });//set the composite primary key

const SelectEvent = module.exports = mongoose.model('SelectEvent', SelectEventSchema);

 
module.exports.getSelectEventById = function(id, callback){
    SelectEvent.findById(id, callback);
  }
  
  module.exports.getSelectEventByEventname = function(eventname, callback){
    const query = {eventname: eventname}
    SelectEvent.findOne(query, callback);
  }

  module.exports.getEventByUserid = function(userid, callback){
    const query = {userid: userid}
    SelectEvent.find(query, callback);
  }

  //get the upcomming events using future dates
  module.exports.getUpcommingevents = function(userid , callback){
    const query = {userid: userid,
                   date: {
                    $gte: Date.now() //for get the dates which are upcomming from today
                   // $lt: Date.now()
                  // $gte: new Date(2019,05,28)
                  }

                }

    SelectEvent.find(query , callback);
   
  }

  //get the  events history using past dates
  
  module.exports.getEventsHistory = function(userid , callback){
    const query = {userid: userid,
                   date: {
                    $lt: Date.now() //for get the dates which are upcomming from today
                    
                  
                  }

                }
    
    SelectEvent.find(query , callback);
   
  }
 
