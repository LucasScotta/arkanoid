'use strict'
/*globals define*/
define(['proto/ball-manager',
	'proto/nave',], (BallManager, Nave) => ({
	balls:  new BallManager(),
	boxes:  [],
	guns:   [],
	powers: [],
	nave: new Nave(),
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
}))