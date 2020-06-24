'use strict'
/*globals define*/
define(['proto/power-up',], (PowerUp) => {
	const createElement = (caracter) => {
		const $el = document.createElement('div')
		$el.innerText = caracter
		$el.classList.add('power')
		document.getElementById('container').appendChild($el)
		return $el
	}
	return (x, y, caracter) => new PowerUp({
		pos: {
			x: x,
			y: y,
		},
		size: {
			w: 15,
			h: 25,
		},
		$el: createElement(caracter),
	})
})