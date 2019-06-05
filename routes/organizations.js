const express = require("express");
const router = express.Router();
const Organization = require("../models/organization");
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
const nodemailer = require("nodemailer");
const bcrypt=require("bcryptjs")
const config = require("../config/keys");
const multer=require("multer");
const orgAuth=require("../middleware/orgAuth");

// Image validation
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

        const token=jwt.sign({id:organization.id},'this_is_a_secret_string',{expiresIn:"1h"})
        res.send({
          successOrg:true,
        token:token,
        expiresIn:3600,
        userId:organization._id,
        organization: {
          id: organization._id,
          name: organization.name,
          email: organization.email,
          password: organization.password,
          address: organization.address,
          contact: organization.contact,
          regNo: organization.regNo
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
})

module.exports = router
router.put("/editaccess", function(req, res, next) {
  Organization.findByIdAndUpdate(req.body.id, {blocked: !req.body.blocked}, function(err, post) {
    if (err) {
      res.json({ success: false});
    } else {
      res.json({ success: true});
    }
  });
});

router.get("/getmyOrganization",orgAuth,async (req,res,next)=>{
  try{
    const org=await Organization.findById(req.userData.OrgId)
    res.json(org)
  }
  catch(e){
    res.status(401).send(e);
  }

router.put("/updateMyOrganization",orgAuth,multer({storage:storage}).single("image"),async (req,res,next)=>{
  let imagePath=req.body.image


  if(req.file){

      const url=req.protocol+'://'+req.get("host");  
      imagePath=url+"/images/"+ req.file.filename 
 
  }

  let updatedOrg=({
    //req.body mean the value is post using text field or other
      name: req.body.name,
      about: req.body.about,
      email: req.body.email,
      address:req.body.address,
      contact:req.body.contact,
      image: imagePath,
    });

    // Event.findById(req.params.id)
    // .then(event => console.log(event).then(() => res.json({ sucess: true })))
    // .catch(err => res.status(404).json({ sucess: false }));
    
    Organization.updateOne({_id:req.userData.OrgId},updatedOrg).then(result=>{
      if(result.nModified>0){
          res.status(200).json({message:'Update Successful!'})
      }
  }).catch(err => res.status(404).json({ sucess: false }));
})
  
})

module.exports = router;
