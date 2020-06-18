'use strict'
/*globals define*/
define(['proto/ball',], (Ball) => {
	return (x, y, dirX, dirY) => new Ball({
		pos: {
			x: x,
			y: y,
		},
		config: {
			ballDirX: dirX,
			ballDirY: dirY,
		},
		vel: {
			r: 5,
			a: Math.PI,
		},
		size : {
			w: 15,
			h: 15,
		},
		goma: false,
	})
})