var _ = require( 'underscore' );

module.exports = function( grunt ) {
	'use strict';
	var vagrantssh = require( './lib/vagrant-ssh.js').init( grunt );

	grunt.registerMultiTask( 'vagrantssh', 'Perform shell commands without the need to vagrant SSH', function() {
		var scope = this;
		var defaultOptions = {
			path: './',
			commands: [],
			flags: [ '-t', '-A' ]
		};
		var data = _.extend( defaultOptions, scope.data );

		// make sure the path that was specified contains a valid Vagrantfile first
		if( ! vagrantssh.pathContainsVagrantFile( data.path  ) ) {
			grunt.warn( 'Vagrant was not found in your specified path: ' + data.path );
			return;
		}

		// now attempt running the command
		vagrantssh.runVagrantCommands( data.path, data.commands, data.flags );
	} );
};