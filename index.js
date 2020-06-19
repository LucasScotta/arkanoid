'use strict'
/* globals require*/
require(['globals',
		'factory/balls',
		], function (globals, NewBall) {
			window.globals = globals
			globals.game.ballm.agregar(NewBall(0, 0, 0, 0))
})