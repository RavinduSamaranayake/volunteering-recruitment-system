const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const config = require('../config/keys');
const multer=require("multer");
const passport = require('passport');
const User = require('../models/user');



const MIME_TYPE_MAP ={
  'image/png':'png',
  'image/jpeg':'jpg',
  'image/jpg':'jpg'
}

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
      const isValid=MIME_TYPE_MAP[file.mimetype];
      let error=new Error("Inavalid mime type");
      if(isValid){
          error=null;
      }
      cb(error,"images")
  },
  filename:(req,file,cb)=>{
      const name=file.originalname.toLowerCase().split(' ').join('-');
      const ext=MIME_TYPE_MAP[file.mimetype];
      cb(null,name + '-' +Date.now() + '.' +ext);
  }
})

//@route POST events/addevent
//@desc create a Event
//@access public
router.post('/addevent',multer({storage:storage}).single("image"),(req, res, next) => {
  const url=req.protocol+'://'+req.get("host");

  console.log(res.user)
  let newEvent = new Event({
  //req.body mean the value is post using text field or other
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time:req.body.time,
    type:req.body.type,
    attendees: req.body.attendees,
    rating: req.body.rating,
    image: url+"/images/"+req.file.filename,
    organization: req.body.organization
  });

  console.log(newEvent);
  //  newEvent.save().then(event => res.json({success: true, msg:'Event added' ,event: event}))
  //                 .catch(err => res.status(404).json({success: false, msg:'Add event fail'}));
  newEvent.save().then(createdEvent=>{
        res.status(201).json({
            message:'Event added Successfully',
            event:{
                ...createdEvent,
                id:createdEvent._id,
            }
        })
    });

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

router.delete('/delevent/:id',(req,res) => {
    Event.findById(req.params.id)
       .then(event => event.remove().then(()=>res.json({sucess: true})))
       .catch(err => res.status(404).json({sucess:false}));
  });
  

module.exports = router;