var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.listen(8976, function() {
  console.log('Listening on port 8976');
});