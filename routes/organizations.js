const express = require("express");
const router = express.Router();
const Organization = require("../models/organization");
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
const nodemailer = require("nodemailer");
const config = require("../config/keys");

// Authenticate
router.post("/authOrg", (req, res, next) => {
  const email = req.body.username;
  const password = req.body.password;


  Organization.getOrganizationByEmail(email, (err, organization) => {
    if (err) throw err;
    if (!organization) {
      return res.json({ success: false, msg: "Organization not found" });
    }
    console.log(
      "Organization is found..................................................."
    );
    Organization.comparePassword(password, organization.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        console.log(
          "Organization is found.............password match......................................"
        );

        //genare the token and pass it with responce json
        const token = jwt.sign(organization.toJSON(), config.secret, {
          //jwt.sign(payload, secretOrPrivateKey, [options, callback])
          //payload could be an object literal, buffer or string representing valid JSON.
          //payload cannot be a plain string but it can
          expiresIn: 604800 //this token is expires after 1 week
        });

        res.json({
          success: true,
          token: "JWT " + token,
          organization: {
            id: Organization._id,
            name: Organization.name,
            email: Organization.email,
            password: Organization.password,
            address: Organization.address,
            contact: Organization.contact,
            regNo: Organization.regNo
          }
        });
      } else {
        return res.json({ success: false, msg: "Wrong password" });
      }
    });
  });

  
});



router.get("/getallorganizations", (req, res) => {
  Organization.find().then(organizations => {
    res.json(organizations);
  });
});

//count of organizations
router.get("/organizationcount", (req, res) => {
  Organization.find().count().then(organizations => {
    res.json(organizations);
  });
});

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
      Organization: 'studentenrolmentnsbm@gmail.com',
      pass: 'studentenrolmentnsbm123'
    }
  });

  var mailOptions = {
    from: 'studentenrolmentnsbm@gmail.com',
    to: req.body.email,
    subject: 'Login Credentials - iVolunteer.com',
    html: '<h4>Dear ' + req.body.name + '</h4><p>Please use the login credentials given below to login to our website.</p><center>Organizationname :- '+ req.body.email +'<br>Password :- '+ password +'</center><br><p>For furhter clarification and assistance please contact us via support@ivolunteer.com</p><p>Best Regards</p><p>Team iVolunteer</p>'
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
