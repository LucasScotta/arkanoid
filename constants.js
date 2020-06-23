'use strict'
/*globals define*/
define(['globals',], (globals) => {
	return {
		naveInicial: parseInt(globals.game.nave.pos.x),
		ballInicial: parseInt(globals.game.ballm.getFirst().pos.x),
	}
})