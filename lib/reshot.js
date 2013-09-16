#!/usr/bin/env node

var exec = require('child_process').exec;
var webshot = require('webshot');
var argv = process.argv.slice(2);
var url = argv[0];
var filename_string = argv[0].replace(/\//g,'_').replace(/\./g,'_');

var cwd = '';
exec('pwd', function(err, stdout, stderr) {
    cwd = stdout;

   console.log(cwd);
	if(typeof argv[0] !== 'undefined'){
		var options = [
			{
			  screenSize: {
			    width: 320,
			    height: 480
			  }
			},
			{
			  screenSize: {
			    width: 480,
			  	height: 320
			  }
			},
			{
			  screenSize: {
			    width: 1024,
			  	height: 768
			  }
			},
			{
			  screenSize: {
			    width: 768,
			  	height: 1024
			  }
			},
			{
			  screenSize: {
			    width: 1280,
			  	height: 768
			  }
			}]
		for (var i = 0; i < options.length; i++) {
			options[i]

			webshot(argv[0], filename_string+'_'+options[i].screenSize.width+'x'+options[i].screenSize.height+'.jpeg', options[i], function(err) {
			});	
		};
		
	}
});
