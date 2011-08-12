var fs=require('fs');
var DIR='/home/jose/Dropbox/wallpapers/simple'
fs.readdir(DIR, function(err,files){
	if (err) throw err;
	var stream=fs.createWriteStream("salida.txt");
	stream.write("toma del frasco\n");
	stream.write("carrasco");
});
