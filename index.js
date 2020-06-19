'use strict'
/* globals require*/
require(['globals',
		'factory/balls',
		], function (globals, NewBall) {
			globals.game.ballm.agregar(NewBall(0, 0, 0, 0))
})