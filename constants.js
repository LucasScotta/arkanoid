'use strict'
/*globals define*/
define(['globals',
		'modules/potenciadores',], (globals, bloques) => {
	return {
		power: [
		bloques.multiplicador,
		bloques.goma,
		bloques.disparo,
		bloques.agrandador,
		bloques.achichador,
		],
		naveInicial: parseInt(globals.game.nave.pos.x),
		ballInicial: parseInt(globals.game.ballm.getFirst().pos.x),
	}
})