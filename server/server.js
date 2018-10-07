/**
 * @fileoverview Starts the API for the application.
 */

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}!`));
