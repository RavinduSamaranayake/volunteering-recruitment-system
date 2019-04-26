const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const config = require('../config/keys');

// Add event
router.post('/addevent', (req, res, next) => {
  let newEvent = new Event({
    name: req.body.name,  //req.body mean the value is post using text field or other
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    attendees: req.body.attendees,
    rating: req.body.rating,
    image: req.body.image,
    organization: req.body.organization
  });

  Event.addEvent(newEvent, (err, event) => {  //call the addUser function in User model
    if(err){
      res.json({success: false, msg:'Add event fail'});
    } else {
      res.json({success: true, msg:'Event added'});
    }
  });

});
 
 


module.exports = router;
