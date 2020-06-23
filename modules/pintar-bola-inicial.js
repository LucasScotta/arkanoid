'use strict'
/*globals define*/
define([
	'globals',], (globals) => {
		const ball = globals.game.ballm.getFirst()
	ball.pos.x = globals.game.nave.pos.x + globals.game.nave.size.w / 2
	ball.pos.y = globals.game.nave.pos.y - ball.size.h - 1

	ball.pintar()
})