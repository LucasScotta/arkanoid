'use strict'
/*globals define*/
define(['proto/ball',], (Ball) => {
	/*
	
	
	*/
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
	return () => new Ball({
		$el: createElement(),
		pos: {
			x: 0,
			y: 0,
		},
		config: {
			ballDirX: 0,
			ballDirY: 0,
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