const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// Schema
const OrganizationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String
    // required: true
  },
  address: {
    type: String
    // required: true
  },
  password: {
    type: String,
    required: true
  },
  regNo: {
    type: String,
    required: true
  }
});

const Organization = (module.exports = mongoose.model(
  "Organization",
  OrganizationSchema
));

module.exports.getOrganizationById = function(id, callback){
  Organization.findById(id, callback);
}

module.exports.getOrganizationByOrganizationname = function(Organizationname, callback){
  const query = {Organizationname: Organizationname}
  Organization.findOne(query, callback);
}

module.exports.getOrganizationByEmail = function(email, callback){
  const query = {email: email}
  Organization.findOne(query, callback);
}

module.exports.addOrg = function(newOrg, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newOrg.password, salt, (err, hash) => {
      if(err) throw err;
      newOrg.password = hash;
      newOrg.save(callback);
    });
  });
}


module.exports.comparePassword = function(OrganizationPassword, hash, callback){
  bcrypt.compare(OrganizationPassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

