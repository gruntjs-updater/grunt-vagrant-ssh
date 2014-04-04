'use strict';

module.exports = function( grunt ) {
	grunt.initConfig( {
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			},
		},
		vagrantssh: {
			test: {
				path: '/Users/carldanley/Sites/vagrant/.vvv/',
				commands: [
					'cd /srv/www/',
					'echo "testing" > ./test-vagrant-ssh.txt',
					'cd /',
					'cat /srv/www/test-vagrant-ssh.txt'
				]
			}
		}
	} );

	grunt.loadTasks( 'tasks' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.registerTask( 'default', [ 'jshint', 'vagrantssh:test' ] );
};