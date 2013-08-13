module.exports = function(grunt) {		  	
  	
  	var SRC_JS = "src/js/";
  	var DEST_JS = "web/assets/js/";
  	var SRC_CSS = "src/css/";
  	var DEST_CSS = "web/assets/css/";
  	
	grunt.initConfig({
		// check JS with JSlint
		pkg: grunt.file.readJSON("package.json"),
		
		jshint: {
		    files: [
		    	SRC_JS + "!(**disabled)/!(**disabled)/!(*boilerplate).js",
		    	SRC_JS + "!(**libs)/!(*boilerplate).js",
		    	SRC_JS + "Main.js"
		    ],
		    options: {
		    	curly: true,
		    	eqeqeq: true,
		    	immed: true,
		    	latedef: true,
		    	newcap: true,
		    	noarg: true,
		    	sub: true,
		    	undef: true,
		    	eqnull: true,
		    	browser: true,
		    	unused:false,
		    	globals: {
		    		$: true,
		    		jQuery: true,
		    		Modernizr: true,
		    		console: true,
		    		alert: true,
		    		App: true,
		    		Backbone: true,
		    		_: true
		    	}
		    }
		    
		},
		
		concat: {
			options: {
			      banner: "/*! /////////////////////////\n* Generated by <%= pkg.name %> - <%= grunt.template.today('yyyy-mm-dd hh:mm') %>  \n* DO NOT MODIFY DIRECTLY, look for source files in "+ SRC_JS +". \n/////////////////////////*/\n\n\n"
			},
			scripts: {
				src: [
				    SRC_JS + "libs/underscore.js",
				    SRC_JS + "libs/backbone.js",
					SRC_JS + "Main.js",
				    SRC_JS + "models/!(*boilerplate).js",
				    SRC_JS + "collections/!(*boilerplate).js",
				    SRC_JS + "views/!(*boilerplate).js",
				 	SRC_JS + "views/**/!(*boilerplate).js"
					//SRC_JS + "!(**disabled)/!(**disabled)/!(*boilerplate).js",
					//SRC_JS + "!(**disabled)/!(*boilerplate).js",
					
				],
				dest: DEST_JS  + "scripts.min.js"
			}
		},
		
		watch: {
		
		  scripts: {
	        files: [
	        	//SRC_JS + "!(modernizr*).js",
				SRC_JS + "**/*.js",
	        	SRC_JS + "models/!(*boilerplate).js",
	        	SRC_JS + "collections/!(*boilerplate).js",
	        	SRC_JS + "views/!(*boilerplate).js",
				SRC_JS + "views/**/!(*boilerplate).js"
	        	
	        ],
	        tasks: ["scripts"]
	      },
	      
		},
		
	
			  
	});
  	
	grunt.loadNpmTasks("grunt-contrib-watch");
  	grunt.loadNpmTasks("grunt-contrib-jshint");
  	grunt.loadNpmTasks("grunt-contrib-concat");

	
	//grunt default will lint script and concat script files, minify modernizr, compile less for dev
  	grunt.registerTask("default", ["jshint", "concat","watch"]);
  	// this task lints and compiles script files only
  	grunt.registerTask("scripts", ["jshint","concat"]);
};