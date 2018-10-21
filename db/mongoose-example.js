/**
 * @fileoverview Connects to the database, an exports access to the database to other files.
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://path-to-database', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

module.exports = mongoose;
