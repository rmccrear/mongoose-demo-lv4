// index.js
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const app = express();
const port = 3000;

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

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

  // 1. get the email and password from req.body

  // 2. get the user from database by email

  // 3. compare password to see if it matches the one stored in DB

  // 4. if correct, mint a token containing the 
  //    - name
  //    - email
  //    - role

  // fake data to use for the jwt
  const userData = {
    name: "Alice",
    email: "alice@bobstore.com",
    role: "admin"
  };

  const token = jwt.sign(userData, JWT_SECRET);
  console.log(token);

  const data = {
    token: token
  };
  res.json(data);
})

app.get('/dashboard', (req, res) => {


});

app.get('/admin', (req, res) => {
  const headers = req.headers;
  const authHeader = headers.authorization;
  console.log(authHeader);
  if (!jwt) {
    return res.status(401).json({ message: "no auth header in headers" })
  }
  const token = authHeader.split(" ")[1];
  let decoded;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "invalid token"
    });
  }

  const role = decoded.role;
  // in middleware, you could store this on req.role
  //    req.role = decoded.role
  //    next()
  if (role === 'admin') {
    res.json({
      decoded
    });
  } else {
    res.status(401).json({
      message: "you are not an Administrator"
    });
  }
});





app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
