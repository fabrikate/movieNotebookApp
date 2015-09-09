var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema ({
  title: String,
  artwork: String,
  year: Number,
  academyAward: [String],
  rottenTomatoRate: Number,
  favorite: Boolean
})

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
