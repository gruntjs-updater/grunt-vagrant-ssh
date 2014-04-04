'use strict';

var exec = require( 'child_process' ).exec;
var path = require( 'path' );
var fs = require( 'fs' );

exports.init = function( grunt ) {

	exports.run = function( data, callback ) {
		var command = 'vagrant ssh -c "' + data.commands.join( ' && ' ) + '" -- ' + data.flags.join( ' ' );
		exec( command, { cwd: data.path }, function( error, stdout, stderror ) {
			if( error ) {
				if( stderror.indexOf( 'VM must be running to open SSH connection' ) > -1 ) {
					grunt.warn( 'Please start vagrant in the directory ' + data.path + ' before trying to run vagrantssh...' );
				} else if( stderror.indexOf( 'A Vagrant environment is required to run this command' ) > -1 ) {
					grunt.warn( 'Vagrant was not found in the specified path: ' + data.path + '...' );
				}

				if( typeof data.callback === 'function' ) {
					data.callback( grunt, false );
				}

				return callback();
			}

			if( typeof data.callback === 'function' ) {
				data.callback( grunt, stdout );
			}
			return callback();
		} );
	};

	return exports;
};