//CONTROLLERS
var db = require('../models/index');

// HOMEPAGE
app.get('/movies', function(req, res) {
  db.Movie.find({}, function(err, movies) {
    if(err) {
      console.log(err);
      res.redirect('404');
    } else {
      res.render('index', {movies: movies});
    }
  })
});

//NEW
app.get('/movies/add', function(req, res) {
  res.render('addMovie');
});

app.post('/movies/', function(req, res) {
  db.Movie.create(req.body.movie, function(err, movie) {
    if(err) {
      console.log(err);
      res.redirect('404');
    } else {
      res.redirect('/movies');
    }
  });
});

// EDIT
app.get('/movies/:id/edit', function(req, res) {
  db.Movie.findById(req.params.id, function(err, movie) {
    if(err) {
      res.redirect('404')
    } else {
      res.render('edit', movie);
    }
  });
});

app.put('/movies/:id', function(req, res) {
  db.Movie.findByIdAndUpdate(req.params.id, req.body.movie, function(err, movie) {
    if(err) {
      res.redirect('404');
    } else {
      res.redirect('/movies', {movies: movies})
    }
  })
})

// DELETE
app.delete('/movies/:id', function(req, res) {
  db.Movie.findByIdAndRemove(req.params.id, function(err, movie) {
    if(err){
      res.redirect('404');
    } else {
      res.redirect('/movies');
    }
  });
});
