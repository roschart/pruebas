var app = require('express').createServer();
var cradle=require('cradle');

app.get('/', function(req, res){
  res.send('hello world');
  console.log(req);
  //console.log(res);
});
 
app.listen(3000);
