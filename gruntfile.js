module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				//separator: ';',
			},
			dist: {
				src: [
					'js/vendor/*.js',
					'js/components/**/model/*.js',
					'js/components/**/collection/*.js',
					'js/components/**/view/*.js'
				],
				dest: 'static/compiled.js',
			},
		},

		sass: {
		    dist: {
				options: {
					style: 'compressed'
				},
				files: {
		        	'static/compiled.css': 'scss/compiled.scss',
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', [
		'concat',
		'sass'
	]);

};