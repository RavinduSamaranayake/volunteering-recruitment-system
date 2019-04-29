const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
 

// User Schema
const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique : true 
  },
  username: {
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true,
   
  },
  address: {
    type: String,
    required: true
  },
  address2: {
    type: String, 
  },
  cntctmob: {
    type: String, 
  },
  cntctfix: {
    type: String,
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
  },
  ulevel: {
    type: String,
    required: true
  },
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}


module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
