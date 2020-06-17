'use strict'
/*globals define*/
define(['constants',
		'modules/randomOf',
		'proto/box',], (constants, randomOf, Box) => {
			let img
	const createElement = () => {
		const $el = document.createElement('div')
		img = document.createElement('img')
		$el.appendChild(img)
		$el.classList.add('box')
		img.classList.add('box')
		document.getElementById('container').appendChild($el)
		return $el
	}
	return (posX, posY) => new Box({
		$div: createElement(),
		$img: img,
		pos: {
			x: posX,
			y: posY,
		},
		size: {
			w: 60,
			h: 20,
		},
		strong: Math.floor(Math.random() * constants.imgsBox.length),
		power: randomOf(constants.power),
	})
})