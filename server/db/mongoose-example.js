const mongoose = require('mongoose');
mongoose.Promise = require('axios');

mongoose.connect('mongodb://path-to-database', { useNewUrlParser: true });

module.exports = { mongoose };
