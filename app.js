const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

// DB config
const db = require("./config/keys").MongoURI;

//connect to mongo

mongoose
  .connect(db, { useNewUrlParser: true })

  .then(() => console.log("Connected to mongodb successfully............!"))

  .catch(err => console.log(err));

const app = express();

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS")
  next();
});
//routing paths
const users = require("./routes/users");
const events = require("./routes/events");
const admin = require("./routes/admin");
const organizations = require("./routes/organizations");

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);
app.use("/organizations", organizations);
app.use("/events", events);
app.use("/admin", admin);
app.use("/images",express.static(path.join("images")));

// Index Route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});



// Start Server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
