const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const bcrypt = require('bcryptjs');

// Schema
const EventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
    //required: true
  },
  date: {
    type: Date,
    required: true
  },

  time: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  
  attendees: {
    type: String
    //required: true
  },
  rating: {
    type: String
    //required: true
  },
  image: {
    type: String
    //required: true
  },
  organization: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
});

const Event = (module.exports = mongoose.model("Event", EventSchema));

module.exports.getEventById = function(id, callback) {
  Event.findById(id, callback);
};

module.exports.getEventByEventname = function(eventname, callback) {
  const query = { eventname: eventname };
  Event.findOne(query, callback);
};
