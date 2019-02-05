/**
 * @fileoverview Starts the API for the application.
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const mongoose = require('./db/mongoose');
const events = require('./routes/api/events');
const scheduleUpdates = require('./tasks/scheduleUpdates');

const app = express();

// Middleware
app.use(express.json());

// Bypass cors problem in development
if (process.env.NODE_ENV !== 'production') app.use(cors());

// Use Routes
app.use('/api/events', events);

// Serve static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'public')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}!`));

scheduleUpdates();
