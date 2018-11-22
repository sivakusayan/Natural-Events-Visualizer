/**
 * @fileoverview Connects to the database, an exports access to the database to other files.
 */
const mongoose = require('mongoose');

const key = require('../constants/DB_KEY');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

mongoose.connect(`mongodb://${key}`, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

module.exports = mongoose;
