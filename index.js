var path = require("path");

var glob = require("glob");
var copyFile = require('fast-copy-file');
var mkdirp = require('mkdirp');

var dest = path.normalize(__dirname + "/./_photos/");
var src = path.normalize(__dirname + "/./_export/");

mkdirp(dest, function (err) {
	
	if (err) throw err;
	
	glob("**/*.+(jpg|jpeg|png|mov|gif)", { 
		nocase: true,
		cwd: src
	}, function(err, files){
		
		for(var i = 0; i < files.length; i++) {
			
			var from = src + files[i];
			var fileName = files[i].split("/").pop();
			var to = dest + fileName;
			
			copyFile(from, to, function (err) {
				if (err) throw err;
				
				console.log("copied", from, to);
			});
			
		}
		
	});

});