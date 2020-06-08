/* globals initBall, game */
///////////////////////////////////////////////////////////////////////////////
// Bola + alto y ancho, nave + alto y ancho , mapa(container) + borde y cajas.
const $balls = document.getElementsByClassName('ball')
window.balls = [
	initBall({
		$el: $balls[0],
		pos: {
			x: 0,
			y: 0,
		},
		vel: {
			r: 5,
			a: Math.PI,
		},
	}),
]

const $nave = document.getElementById('nave')
$nave.style.width = `100px`
$nave.style.height = `15px`
window.naveWidth = parseInt($nave.style.width)
window.container = document.getElementById('container')
window.mapBorder = game.size.b
window.$boxes = document.getElementsByClassName('box')
window.boxes = []
window.powerUps = []
///////////////////////////////////////////////////////////////////////////////

// Config bola

window.mouse = {
	x: 0,
	y: 0,
	b: false,
}

// const vel = {
//   r: 1,
//   a: Math.PI * 1.5,
// }

///////////////////////////////////////////////////////////////////////////////