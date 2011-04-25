var cradle=require('cradle');
var db=new (cradle.Connection)().database('startwars');
db.create();
var miClosure=function(pre){
	return function(err,res){
	console.log(pre+res.id);
	//Se le añade un dato
	db.merge(res.id,{malote:true},function(err,res){
	  //No se hace nada ;)		
	});
	};
}
/*
db.save({
force:"dark",name:'Darth Vader'},miClosure("El id es:")		
);
*/
db.view('application/searchname', function (err, res) {
    res.forEach(function (row) {
        console.log(row.name + " is on the " );
	console.dir(row);
    });
});

//console.dir(a);

