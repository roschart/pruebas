var jade=require('jade');
var nombres=['jose', 'pedro'];
jade.renderFile('prueba.jade', {locals : {n:nombres}},function(err,salida){
	console.log(salida);
});
