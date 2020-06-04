const mongoose = require("mongoose");

const { Schema } = mongoose;

const recipientSchema = new Schema({
  eamil: String,
  responded: { type: Boolean, default: false }
});

// subdocument
module.exports = recipientSchema;
