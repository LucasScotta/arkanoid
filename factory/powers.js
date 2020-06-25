'use strict'
/*globals define*/
define(['proto/power-up',
		'proto/nave-width-types'], (PowerUp) => {
	
	return (x, y, power) => {
		const options = {
			pos: {
				x: x,
				y: y,
			},
			size: {
				w: 15,
				h: 25,
			},
			power: power,
		}
		return new PowerUp(options)
	}
})