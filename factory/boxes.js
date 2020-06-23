'use strict'
/*globals define*/
define(['constants',
		'util/randomOf',
		'proto/box',], (constants, randomOf, Box) => {
	return (posX, posY) => new Box({
		pos: {
			x: posX,
			y: posY,
		},
		size: {
			w: 60,
			h: 20,
		},
		power: randomOf(constants.power),
	})
})