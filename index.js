'use strict'
/* globals require*/
require(['globals',
		'factory/balls'], function (globals, NewBall) {
			globals.balls.push(NewBall(0, 0, 0, 0))
})