///////////////////////////////////////////////////////////////////////////////
// Bola + alto y ancho, nave + alto y ancho , mapa(container) + borde y cajas.
const $balls = document.getElementsByClassName('ball')
const balls = [
	initBall({
		$el : $balls[0],
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

const nave = document.getElementById('nave')
nave.style.width = `100px`
nave.style.height = `15px`
let naveRect = nave.getBoundingClientRect()
let naveLeft = parseInt(nave.style.left)
let naveWidth = parseInt(nave.style.width)
let naveTop = parseInt(nave.style.top)
let naveAncho = naveRect.width

const container = document.getElementById('container')
container.style.border = `10px solid black`
const contBorde = parseInt(container.style.border)
const containerRect = container.getBoundingClientRect()

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

let dirX
let dirY
let ballDirX = 0
let ballDirY = 0
///////////////////////////////////////////////////////////////////////////////
// Config juego

let pause = false
let start = 0
let lifes = 3
let level = 6

///////////////////////////////////////////////////////////////////////////////

const newBall = {
	pos : {
		x: nave.getBoundingClientRect().left + nave.getBoundingClientRect().width / 2,
		y: nave.getBoundingClientRect().top,
	},
	vel: {
		r: 1,
		a: Math.PI * 1.6,
	},
}

console.log('fin index')