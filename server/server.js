/**
 * @fileoverview Starts the API for the application.
 */

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to Mongo
