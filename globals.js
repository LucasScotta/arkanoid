'use strict'
/*globals define*/
define(['proto/ball-manager'], (BallManager) => ({
	balls:  new BallManager(),
	boxes:  [],
	guns:   [],
	powers: [],
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