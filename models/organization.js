const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
