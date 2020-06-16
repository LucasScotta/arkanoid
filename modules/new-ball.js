/*globals define*/
define(['globals',
		'factory/ball'], function(globals, newBall) {
	globals.balls.push(newBall())
})