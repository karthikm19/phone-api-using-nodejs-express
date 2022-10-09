const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Use Body Parser
app.use(bodyParser.json());

// Import routes
const phonesRoute = require('./routes/phones');
app.use('/phones', phonesRoute);

// Home routes
app.get("/", (req, res) => {
    res.send('A simple API to get Phones list and details');
});

// Database connection
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log('Error: ', err, process.env.DB_CONNECTION));

// Listen
app.listen(port, () => {
    console.log(`Phone API is listening on http://localhost:${port}`);
});