var React= require('react');
var component = require('./public/js/components.js');

var app=React.createFactory(component);
console.log(app);
var reactHml=React.renderToString(app({}));
console.log(reactHml);