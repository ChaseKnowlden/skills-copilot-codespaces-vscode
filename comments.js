// Create web server

// Import express
const express = require('express');

// Import body-parser
const bodyParser = require('body-parser');

// Import cors
const cors = require('cors');

// Import mongoose
const mongoose = require('mongoose');

// Import routes
const comments = require('./routes/api/comments');

// Create express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/comments', comments);

// Set port
const port = process.env.PORT || 5000;

// Listen
app.listen(port, () => console.log(`Server started on port ${port}`));