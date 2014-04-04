var _ = require( 'underscore' );

module.exports = function( grunt ) {
	'use strict';
	var vagrantssh = require( './lib/vagrant-ssh.js').init( grunt );

	grunt.registerMultiTask( 'vagrantssh', 'Perform shell commands without the need to vagrant SSH', function() {
		var scope = this;
		var defaultOptions = {
			path: './',
			commands: [],
			flags: [ '-t', '-A' ],
			callback: function( grunt, output ) {
				grunt.log.writeln( 'Output: ' + output );
			}
		};
		var data = _.extend( defaultOptions, scope.data );

		// now attempt running the command
		vagrantssh.run( data, scope.async() );
	} );
};