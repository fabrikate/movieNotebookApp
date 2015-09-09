var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movieNotebook_app');

module.exports.Movie = require('./movie')
