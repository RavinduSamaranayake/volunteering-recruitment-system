const express = require("express");
const router = express.Router();


const config = require('../config/keys');
const multer=require("multer");
const passport = require('passport');
const User = require('../models/user');



const Event = require("../models/event");
const SelectEvent = require("../models/selectevent");


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

router.put("/updateEvent/:id",multer({storage:storage}).single("image"),(req,res)=>{
  let imagePath=req.body.image
  console.log(req.file); 

  if(req.file){
    console.log("empty")
      const url=req.protocol+'://'+req.get("host");  
      imagePath=url+"/images/"+ req.file.filename 
 
  }

  let updatedEvent=({
    //req.body mean the value is post using text field or other
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      time:req.body.time,
      type:req.body.type,
      attendees: req.body.attendees,
      rating: req.body.rating,
      image: imagePath,
      organization: req.body.organization
    });
    console.log(req.params.id);
    // Event.findById(req.params.id)
    // .then(event => console.log(event).then(() => res.json({ sucess: true })))
    // .catch(err => res.status(404).json({ sucess: false }));
    
    Event.updateOne({_id:req.params.id},updatedEvent).then(result=>{
      if(result.nModified>0){
          res.status(200).json({message:'Update Successful!'})
      }
  }).catch(err => res.status(404).json({ sucess: false }));
})
//@route GET events/allevents
//@desc Get All items
//@access public

router.get("/allevents", (req, res) => {
  Event.find().then(events => res.json(events));
});

//@route DELETE events/delevent/id
//@desc Delete a Item
//@access public

router.delete("/delevent/:id", (req, res) => {
  Event.findById(req.params.id)
    .then(event => event.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

//select events........................

//@route POST events/addselected
//@desc create a Event
//@access public
router.post("/addselected", (req, res, next) => {
  let newSelectEvent = new SelectEvent({
    _id: req.body._id,
    userid: req.body.userid, //req.body mean the value is post using text field or other
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    attendees: req.body.attendees,
    rating: req.body.rating,
    image: req.body.image,
    organization: req.body.organization,
    status: "selected"
  });

  newSelectEvent
    .save()
    .then(event =>
      res.json({ success: true, msg: "Selected event added", event: event })
    )
    .catch(err => res.json({ success: false, msg: "Add event fail" }));
});




//@route GET events/allselectevents
//@desc Get All items
//@access public

router.get("/allselectevents/:userid", (req, res) => {
  const userid = req.params.userid;
  const query = { userid: userid };
  SelectEvent.find(query).then(slctevents => res.json(slctevents));
});

//@route DELETE events/delslctevent/id
//@desc Delete a Item
//@access public

router.delete("/delslctevent/:id", (req, res) => {
  SelectEvent.findById(req.params.id)
    .then(event => event.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

//@route GET events/allselectevents
//@desc Get All items
//@access public

router.get("/allselect/upcomming/:userid", (req, res) => {
  const userid = req.params.userid;
  //const query = {userid: userid}
  SelectEvent.getUpcommingevents(userid, (err, slctevents) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json(slctevents);
    }
  });
});

router.get("/allselect/history/:userid", (req, res) => {
  const userid = req.params.userid;
  //const query = {userid: userid}
  SelectEvent.getEventsHistory(userid, (err, slctevents) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json(slctevents);
    }
  });
});

router.get("/selecteventbyorg/:id", (req, res) => {
  const query = {organization: req.params.id}
  Event.find(query).then(events => res.json(events));
});

router.get("/geteventbyid/:id", (req, res) => {
  Event.findById(req.params.id).then(events => res.json(events));
});
module.exports = router;

