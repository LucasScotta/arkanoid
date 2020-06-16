'use strict'
/*globals define*/
define([
	'globals',
	'modules/nave'], (globals, nave) => {

	globals.balls[0].pos.x = nave.pos.x + nave.size.w / 2
	globals.balls[0].pos.y = nave.pos.y - globals.balls[0].size.h - 1

	globals.balls[0].$el.style.left = `${globals.balls[0].pos.x}px`
	globals.balls[0].$el.style.top  = `${globals.balls[0].pos.y}px`
})