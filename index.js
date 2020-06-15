/* globals require*/
///////////////////////////////////////////////////////////////////////////////
// Bola + alto y ancho, nave + alto y ancho , mapa(container) + borde y cajas.
require(['game',
		'modules/balls',
		'proto/ball'], function (game, balls, Ball) {
window.colors = ['green', 'yellow', 'black']
const imgBalls = 'img/ball.png'
const $nave = document.getElementById('nave')
$nave.style.width = `100px`
$nave.style.height = `15px`
window.naveWidth = parseInt($nave.style.width)
window.mapBorder = game.size.b
const ballN = function ballN() {
	const newBallDiv = document.createElement('div')
	const newBallImg = document.createElement('img')
	newBallDiv.appendChild(newBallImg)
	newBallImg.classList.add('ball')
	newBallImg.src = imgBalls
	balls.push(new Ball({
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
}
ballN()
///////////////////////////////////////////////////////////////////////////////



// const vel = {
//   r: 1,
//   a: Math.PI * 1.5,
// }

///////////////////////////////////////////////////////////////////////////////
})