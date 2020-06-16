/*globals define*/
define([
	'modules/balls',
	'modules/nave'], (balls, nave) => {

	balls[0].pos.x = nave.pos.x + nave.size.w / 2
	balls[0].pos.y = nave.pos.y - balls[0].size.h - 1

	balls[0].$el.style.left = `${balls[0].pos.x}px`
	balls[0].$el.style.top  = `${balls[0].pos.y}px`
})