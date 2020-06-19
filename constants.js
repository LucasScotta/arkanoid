'use strict'
/*globals define*/
define(['globals',
		'modules/potenciadores',], (globals, bloques) => {
	return {
		imgsBox: [
		'img/0.png',
		'img/1.png',
		'img/2.png',
		'img/3.png',
		'img/4.png',
		'img/5.png',
		'img/6.png',
		'img/7.png',
		],
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