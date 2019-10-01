const express = require("express");
const path = require("path");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
require('dotenv').config()
const logger = require("morgan");


const app = express();



require("dotenv").config();

// Use morgan logger for logging requests
app.use(logger("dev"));

// Express middleware
app.use(express.urlencoded({ extended: false })); // Bodyparser
app.use(express.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
require("./routes/api/user")(app);

// Models
// Requiring the `User` model for accessing the `users` collection
var User = require("./models/User");
const db = require("./config/keys").SECRET_OR_KEY;

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/stylsdb", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log("There was an issue with the db connection" + err)); 

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", "build", "index.html"));
  });
  
}

// Send every other request to the React app
// Define any API routes before this runs

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
