//framework
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//database
var mongoose = require('mongoose');
var db = require('./models');

app = express();

//get them working
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

require('./controllers/index');

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
