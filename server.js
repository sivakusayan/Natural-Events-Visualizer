/**
 * @fileoverview Starts the API for the application.
 */

const express = require('express');
const cors = require('cors');

const mongoose = require('./db/mongoose');
const events = require('./routes/api/events');
const scheduleUpdates = require('./tasks/scheduleUpdates');

const app = express();

// Middleware
app.use(express.json());
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Temporarily enable for testing REMOVE IN PRODUCTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.use(cors());

// Use Routes
app.use('/api/events', events);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}!`));

scheduleUpdates();
