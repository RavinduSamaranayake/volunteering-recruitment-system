const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const config = require('../config/keys');



//@route POST events/addevent
//@desc create a Event
//@access public
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

  newEvent.save().then(event => res.json({success: true, msg:'Event added' ,event: event}))
                 .catch(err => res.status(404).json({success: false, msg:'Add event fail'}));
 

});
 

//@route GET events/allevents
//@desc Get All items
//@access public

router.get('/allevents',(req,res) => {
    Event.find()
      .then(events => res.json(events))
  });
  
//@route DELETE events/delevent/id
//@desc Delete a Item
//@access public

router.delete('/:id',(req,res) => {
    E.findById(req.params.id)
       .then(Event => Event.remove().then(()=>res.json({sucess: true})))
       .catch(err => res.status(404).json({sucess:false}));
  });
  

module.exports = router;
