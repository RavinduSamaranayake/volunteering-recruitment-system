const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const SelectEvent = require("../models/selectevent");

//@route POST events/addevent
//@desc create a Event
//@access public
router.post("/addevent", (req, res, next) => {
  let newEvent = new Event({
    name: req.body.name, //req.body mean the value is post using text field or other
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    attendees: req.body.attendees,
    rating: req.body.rating,
    image: req.body.image,
    organization: req.body.organization
  });

  newEvent
    .save()
    .then(event =>
      res.json({ success: true, msg: "Event added", event: event })
    )
    .catch(err =>
      res.status(404).json({ success: false, msg: "Add event fail" })
    );
});

//@route GET events/allevents
//@desc Get All items
//@access public

router.get("/allevents", (req, res) => {
  Event.find().then(events => res.json(events));
});

//get events count
router.get("/alleventcount", (req, res) => {
  Event.find().count().then(eventscount => res.json(eventscount));
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
    status: req.body.status
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
  const query = {orgID: req.params.id}
  Event.find(query).then(events => res.json(events));
});

router.get("/geteventbyid/:id", (req, res) => {
  Event.findById(req.params.id).then(events => res.json(events));
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
      return res.json({ success: false, msg: "event not found" });
    }
  });
})
module.exports = router;
