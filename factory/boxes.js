'use strict'
/*globals define*/
define(['util/randomOf',
		'proto/box',
		'modules/bloques',], (randomOf, Box, powers) => {
	return (x, y) => new Box({
		pos: {
			x: x,
			y: y,
		},
		size : {
			w: 60,
			h: 20,
		},
		power: randomOf(Object.values(powers)),
	})
})