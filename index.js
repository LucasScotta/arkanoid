'use strict'
/* globals require*/
require(['globals',
		'factory/balls',
		], function (globals, NewBall) {
			globals.balls.agregar(NewBall(0, 0, 0, 0))
})