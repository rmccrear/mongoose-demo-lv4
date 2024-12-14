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

// this will create a user
app.post('/register', async (req, res) => {
  const user = {
    name: "testuser"
  }
  res.json(user);
});

// this will check if you are logged in
// if so, it will return a jwt
// the jwt will contain your name, email, and role
// so we can later verify it is you.
app.post('/login', async (req, res) => {
  const data = {
    token: "this is your token"
  };
  res.json(data);
})






app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
