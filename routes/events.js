const express = require("express");
const router = express.Router();
const orgAuth=require("../middleware/orgAuth");


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

router.post('/addevent',orgAuth,multer({storage:storage}).single("image"),(req, res, next) => {
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
    organization: req.userData.OrgId
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

router.put("/updateEvent/:id",orgAuth,multer({storage:storage}).single("image"),(req,res)=>{
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

// get all available events filter by current data
router.get("/allevents", (req, res) => {
  const query = {
   date: {
      $gte: Date.now() //for get the dates which are upcomming from today
    }
  };
  Event.find(query)
  .populate("organization","name")
  .then(events => 
    res.json(events));
  
});

//get available events count
router.get("/alleventcount", (req, res) => {
  const query = {
    date: {
       $gte: Date.now() //for get the dates whigch are upcomming from today
     }
   };
  Event.find(query).count().then(eventscount => res.json(eventscount));
});


//@route DELETE events/delevent/id
//@desc Delete a Item
//@access public

router.delete("/delevent/:id",orgAuth, (req, res) => {
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
    _id: req.body.id,
    eventid: req.body.eventid, //req.body mean the value is post using text field or other
    userid: req.body.userid,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    attendees: req.body.attendees,
    rating: req.body.rating,
    image: req.body.image,
    organization: req.body.organization,
    status: req.body.status,
    participation: false
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

//@route GET events/upcommingevents
//@desc Get All items
//@access public

router.get("/allselect/upcomming/:userid", (req, res) => {
  const userid = req.params.userid;
  SelectEvent.getUpcommingevents(userid, (err, slctevents) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json(slctevents);
    }
  });
});

//get upcomming events count
router.get("/allselect/upcommingcount/:userid", (req, res) => {
  const userid = req.params.userid;
  const query = {
    userid: userid,
    date: {
      $gte: Date.now() //for get the dates which are upcomming from today
       
    }
  };

  SelectEvent.find(query).count().then(eventscount => res.json(eventscount));
});

//@route GET events/history
//@desc Get All items
//@access public

router.get("/allselect/history/:userid", (req, res) => {
  const userid = req.params.userid;
  SelectEvent.getEventsHistory(userid, (err, slctevents) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json(slctevents);
    }
  });
});


//get event history count
router.get("/allselect/historycount/:userid", (req, res) => {
  const userid = req.params.userid;
  const query = {
    userid: userid,
    date: {
      $lt: Date.now() //for get the dates which are past from today
    }
  };

  SelectEvent.find(query).count().then(eventscount => res.json(eventscount));
  
});

router.get("/selecteventbyorg/:id", (req, res) => {
  const query = {organization: req.params.id}
  Event.find(query)
  .populate("organization","username")
  .then(events =>{
     res.json(events)
     console.log(events)
  }
     );
});

router.get("/geteventbyid/:id", (req, res) => {
  Event.findById(req.params.id).
  populate("organization","name")
  .then(events => res.json(events));
});

// check the user event select or not
router.post("/checkgoing", (req, res, next) => {
  const eventid = req.body.eventid;
  const userid = req.body.userid;

  SelectEvent.getEventByIdUid(eventid, userid, (err, event) => {
    if (err) throw err;
    if (!event) {
      return res.json({ success: false, msg: "event not found" });
    }else{
      return res.json({ success: true, msg: "event found" });
    }
  });
});

module.exports = router;

