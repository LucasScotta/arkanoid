'use strict'
/*globals define*/
define(['proto/ball',], (Ball) => {
	const createElement = () => {
		const imgBalls = 'img/ball.png'
		const $el = document.createElement('div')
		const newBallImg = document.createElement('img')
		newBallImg.src = imgBalls
		$el.appendChild(newBallImg)
		newBallImg.classList.add('ball')
		document.getElementById('container').appendChild($el)
		return $el
	}
	return (x, y, dirX, dirY) => new Ball({
		$el: createElement(),
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