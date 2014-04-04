# grunt-vagrant-ssh 0.1.0

> Perform shell commands without the need to vagrant SSH.

## Getting Started
This plugins requires Grunt `-0.4.0` and Vagrant.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command

```shell
npm install grunt-vagrant-ssh
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-vagrant-ssh');
```

## Using grunt-vagrant-ssh

### Sample `Gruntfile.js`

```js
'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		vagrantssh: {
			addfile: {
				path: './.vvv/',
				commands: [
					'echo "testing" > /tmp/test.txt',
					'cat /tmp/test.txt'
				],
				flags: [ '-t', '-A' ],
				callback: function( grunt, output ) {
					grunt.log.writeln( 'Output: ' + output );
				}
			},
			removefile: {
				path: './.vvv/',
				commands: [
					'rm -rf /tmp/test.txt',
					'cat /tmp/test.txt'
				],
				flags: [ '-t', '-A' ],
				callback: function( grunt, output ) {
					grunt.log.writeln( 'Output: ' + output );
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-vagrant-ssh');
	grunt.registerTask('addfile', ['vagrantssh:addfile']);
	grunt.registerTask('removefile', ['vagrantssh:removefile']);
};
```

### Options

These options can be used to configure each batch of shell commands run through vagrant ssh.

#### path

Type: `String`
Default: `./`

Represents the directory where vagrant is setup to run. This can be relative or absolute.

#### commmands

Type: `Array`
Default: `[]`

Each value in this array represents a shell command that will be run on your vagrant box.

#### flags

Type: `Array`
Default: `[ '-t', '-A' ]`

Represents the SSH command line flags that will be append to the SSH request.

#### callback

Type: `Function`
Default:

```js
function( grunt, output ) {
	grunt.log.writeln( 'Output: ' + output );
}
```

Represents the callback that will be used when vagrantssh has finished executing the command or returns an error.