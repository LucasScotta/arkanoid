'use strict'
/*globals define*/
define(['util/randomOf',
		'proto/box',
		'modules/bloques',], (randomOf, Box, powers) => {
	return (posX, posY) => new Box({
		pos: {
			x: posX,
			y: posY,
		},
		size: {
			w: 60,
			h: 20,
		},
		power: randomOf(Object.values(powers)),
	})
})