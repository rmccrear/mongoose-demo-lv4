// Cats Model

// import mongoose from "mongoose";
const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
  name: {type: String},
  breed: {type: String}, 
  hasOwner: {type: Boolean}
});

const Cat = mongoose.model("Cat", catSchema);

// default export
module.exports = Cat;
