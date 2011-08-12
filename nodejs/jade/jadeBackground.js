var jade = require('jade');
var fs = require('fs');
var DIR = '/home/jose/Dropbox/wallpapers/simple'
var nombres = ['jose', 'pedro'];
fs.readdir(DIR, function(err, files) {
    if (err) throw err;
	console.log(files);
	console.log(files.length);
    var stream = fs.createWriteStream("salida.txt");
    jade.renderFile('background-1.jade', {
        locals: {
            n: files
        }
    }, function(err, salida) {
        stream.write(salida);
    });
});
