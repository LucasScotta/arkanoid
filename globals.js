'use strict'
/*globals define*/
define([
	'proto/ball-manager',
	'proto/nave',
	'proto/game',
], (BallManager, Nave, Game) => {
	const game = new Game()
	return {
		balls:  new BallManager(),
		boxes:  [],
		guns:   [],
		powers: [],
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