'use strict'
/*globals define*/
define([
	'proto/game',],
	(Game) => {
	const game = new Game()
	return {
		game: game,
		mouse: {
			x: 0,
			y: 0,
			b: false,
		},
		widthTypes: {
			S: {
				w: 60,
			},
			M: {
				w: 100,
			},
			L: {
				w: 140,
			},
		},
	}
})