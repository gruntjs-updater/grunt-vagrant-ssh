'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			},
		},
		watch: {
			all: {
				files: ['<%= jshint.all %>'],
				tasks: ['jshint']
			},
		},
		vagrantssh: {
			test: {
				commands: [
					'cd /srv/www/',
					'echo "testing" > ./test-vagrant-ssh.txt'
					'cd /',
					'cat /srv/www/test-vagrant-ssh.txt'
				]
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'vagrantssh:']);
};