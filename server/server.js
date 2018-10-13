/**
 * @fileoverview Starts the API for the application.
 */

const express = require('express');

const mongoose = require('./db/mongoose');
const events = require('./routes/api/events');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Use Routes
app.use('/api/events', events);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}!`));
