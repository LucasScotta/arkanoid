///////////////////////////////////////////////////////////////////////////////
// Bola + alto y ancho, nave + alto y ancho , mapa(container) + borde y cajas.
const $balls = document.getElementsByClassName('ball')
const balls = [
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
let naveRect = $nave.getBoundingClientRect()
const naveWidth = parseInt($nave.style.width)
const container = document.getElementById('container')
const mapBorder = game.size.b

const boxes = document.getElementsByClassName('box')

///////////////////////////////////////////////////////////////////////////////

// Config bola

const mouse = {
	x: 0,
	y: 0,
	b: false,
}

const pos = {
	x: 0,
	y: 0,
}

const vel = {
  r: 1,
  a: Math.PI * 1.5,
}

///////////////////////////////////////////////////////////////////////////////