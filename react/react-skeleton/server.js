var express = require('express');
var app = express();
var React = require('react');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.get('/server',function(req,res){
  var Greeter= React.createFactory(require('./public/js/components.js'));
  var reactHml=React.renderToString(Greeter,{});
  res.write(reactHml);
});

app.listen(8976, function() {
  console.log('Listening on port 8976');
});