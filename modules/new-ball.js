/*globals define*/
define(['globals',
		'proto/ball'], function(globals, Ball) {
	const imgBalls = 'img/ball.png'
	const newBallDiv = document.createElement('div')
	const newBallImg = document.createElement('img')
	newBallDiv.appendChild(newBallImg)
	newBallImg.classList.add('ball')
	newBallImg.src = imgBalls
	globals.balls.push(new Ball({
	$el: newBallDiv,
	$img: newBallImg,
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
	}))
	document.getElementById('container').appendChild(newBallDiv)
})