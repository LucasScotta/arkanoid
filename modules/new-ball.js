'use strict'
/*globals define*/
define(['globals',
		'factory/balls'], function(globals, newBall) {
	globals.balls.push(newBall())
})