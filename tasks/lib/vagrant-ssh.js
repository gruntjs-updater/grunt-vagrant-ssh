'use strict';

var exec = require( 'child_process' ).exec;
var path = require( 'path' );
var fs = require( 'fs' );

exports.init = function( grunt ) {

	exports.runVagrantCommands = function( dir, commands, flags, callback ) {
		var command = 'cd ' + dir + ' && vagrant ssh -c "' + commands.join( ' && ' ) + '" -- ' + flags.join( ' ' );
		exec( command, function( error, stdout, stderror ) {
			console.log( 'here' );
		} );
	};

	exports.pathContainsVagrantFile = function( dir ) {
		dir = path.normalize( dir + '/Vagrantfile' );
		return fs.existsSync( dir );
	};

	return exports;
};