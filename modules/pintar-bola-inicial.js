'use strict'
/*globals define*/
define([
	'globals',], (globals) => {
		const ball = globals.balls.getFirst()
	ball.pos.x = globals.game.nave.pos.x + globals.game.nave.size.w / 2
	ball.pos.y = globals.game.nave.pos.y - ball.size.h - 1

	ball.$el.style.left = `${ball.pos.x}px`
	ball.$el.style.top  = `${ball.pos.y}px`
})