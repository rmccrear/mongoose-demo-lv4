// Cats Model

// import mongoose from "mongoose";
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {type: String},
  artist: {type: String}, 
  year: {type: Number}
});

const Book = mongoose.model("Book", bookSchema);

// default export
module.exports = Book;
