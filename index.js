// index.js
const express = require('express');
const mongoose = require('mongoose');
const Song = require("./models/songs"); 
const Cat = require("./models/cats"); 
const Book = require("./models/books");


require('dotenv').config();
const app = express();
const port = 3000;

const MONGO_DB_URI = process.env.MONGO_DB_URI;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/cats', async (req, res) => {
  // get the data from the request
  const data = req.body;

  // instantiate a new cat
  const myCat = new Cat({
    name: data.name,
    breed: data.breed,
    hasOwner: data.hasOwner
  }); 

  // save to the database
  const savedCat = await myCat.save();
  console.log(savedCat)

  // return the cat object back 
  res.json(savedCat);
});

app.post("/books", async (req, res) => {
  const myBook = new Book( {
      title: "Recursion",
      artist: "Blake Crouch",
      year: 2019
  })
  // save to the database
  const savedBook = await myBook.save();
  console.log(savedBook)

  // return the cat object back 
  res.json(savedBook);
});

app.post('/songs', async (req, res) => {
  const favSong = new Song({
      title: "La Mer",
      artist: "Claude Debussy",
      genre: "classical",
  });

  //save to database
  const savedSong = await favSong.save();
  console.log(savedSong)

  //return the song object back
  res.json(savedSong);

});








app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});