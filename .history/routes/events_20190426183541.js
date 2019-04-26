const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const config = require('../config/keys');

// Register
router.post('/addevent', (req, res, next) => {
  let newEvent = new Event({
    name: req.body.name,  //req.body mean the value is post using text field or other
    title: req.params
description
:
"Read the values and add appropriate values"
date
:
2019-04-28T18:30:00.000+00:00
attendees
:
Object
rating
:
"rating of the event"
image
:
"a way to store an image"
organization
:
"hosting organization id"
  });

  User.addUser(newUser, (err, user) => {  //call the addUser function in User model
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    console.log("User is found...................................................")
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        console.log("User is found.............password match......................................")

        //genare the token and pass it with responce json
        const token = jwt.sign(user.toJSON(), config.secret, {  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
                                                                //payload could be an object literal, buffer or string representing valid JSON.
                                                                //payload cannot be a plain string but it can 
          expiresIn: 604800 //this token is expires after 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});


module.exports = router;
