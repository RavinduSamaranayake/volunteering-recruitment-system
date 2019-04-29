const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/keys');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,  //req.body mean the value is post using text field or other
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
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
