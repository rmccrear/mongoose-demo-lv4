// index.js
const express = require('express');
const mongoose = require('mongoose');
const Cat = require("./models/cats"); 


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





app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});