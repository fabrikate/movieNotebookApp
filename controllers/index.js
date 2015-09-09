//CONTROLLERS
app.get('/', function(req, res) {
  res.redirect('/movies');
});

require('./movies');

app.get('*', function(req, res) {
  res.render('404');
});
