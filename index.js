const express = require("express"); // access the express lib. share files
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express(); // generate new app

app.use(bodyParser.json());

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
require("./routes/billingRoutes")(app);

// for prod running
if (orocess.env.NODE_ENV === "production") {
  // express will serve up production assets
  // like our main.js or main.css files
  app.use(express.static("client/build"));

  // express will serve up the index.htmo files
  // if it soesn;t recognize the route
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000; // inject env variable at run timeout

app.listen(PORT);
