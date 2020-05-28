const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// create a users collection in mongo DB
mongoose.model("users", userSchema);
