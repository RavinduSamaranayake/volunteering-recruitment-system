const express = require("express");
const router = express.Router();
const Organization = require("../models/organization");

const randomstring = require("randomstring");
const nodemailer = require("nodemailer");

router.get("/getallorganizations", (req, res) => {
  Organization.find().then(organizations => {
    res.json(organizations);
  });
});

//cou

router.get("/getorganizationbyid/:id", (req, res) => {
  Organization.findById(req.params.id).then(organization => {
    res.json(organization);
  });
});

router.post("/addorganization", (req, res) => {
  const password = randomstring.generate(8);
  let newOrg = new Organization({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    regNo: req.body.regNo,
    password: password
  });

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'studentenrolmentnsbm@gmail.com',
      pass: 'studentenrolmentnsbm123'
    }
  });

  var mailOptions = {
    from: 'studentenrolmentnsbm@gmail.com',
    to: req.body.email,
    subject: 'Login Credentials - iVolunteer.com',
    html: '<h4>Dear ' + req.body.name + '</h4><p>Please use the login credentials given below to login to our website.</p><center>Username :- '+ req.body.email +'<br>Password :- '+ password +'</center><br><p>For furhter clarification and assistance please contact us via support@ivolunteer.com</p><p>Best Regards</p><p>Team iVolunteer</p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send(error)
    } 
    else {
      console.log('Email sent: ' + info.response);
      Organization.addOrg(newOrg, err => {
        if(err){
          res.send(err)
        }
      });
    }
  });
});

router.put("/editaccess", function(req, res, next) {
  Organization.findByIdAndUpdate(req.body.id, {blocked: !req.body.blocked}, function(err, post) {
    if (err) {
      res.json({ success: false});
    } else {
      res.json({ success: true});
    }
  });
});

module.exports = router;
