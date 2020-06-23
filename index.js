'use strict'
/* globals require*/
require(['globals',
		'factory/balls',
		], function (globals, Ball) {
			window.globals = globals
			globals.game.ballm.agregar(Ball(0, 0, 0, 0))
})