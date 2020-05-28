const express = require("express"); // access the express lib. share files
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express(); // generate new app

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//const authRoutes =
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; // inject env variable at run timeout

app.listen(PORT);
