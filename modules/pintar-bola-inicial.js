'use strict'
/*globals define*/
define([
	'globals',
	'modules/nave'], (globals, nave) => {
		const ball = globals.balls.getFirst()
	ball.pos.x = nave.pos.x + nave.size.w / 2
	ball.pos.y = nave.pos.y - ball.size.h - 1

	ball.$el.style.left = `${ball.pos.x}px`
	ball.$el.style.top  = `${ball.pos.y}px`
})