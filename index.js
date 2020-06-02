///////////////////////////////////////////////////////////////////////////////
// Bola + alto y ancho, nave + alto y ancho , mapa(container) + borde y cajas.
const $balls = document.getElementsByClassName('ball')
const balls = [
	{
		pos: {
			x: 0,
			y: 0,
		},
		vel: {
			r: 5,
			a: Math.PI,
		},
	},
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
let color = 'pink'
///////////////////////////////////////////////////////////////////////////////
// Config juego

let pause = false
let start = 0
let lifes = 3
let level = 6

///////////////////////////////////////////////////////////////////////////////
// Tipos de bloques
const bloques = {
	normal: {tipo: 1},
	multiplicador: {tipo: 2, caracter: 'Ⓜ'},
	goma: {tipo: 3, caracter: 'Ⓖ'},
	disparo: {tipo: 4, caracter: 'Ⓓ'},
	agrandador: {tipo: 5, caracter: 'Ⓐ'},
	achichador: {tipo: 6, caracter: '①'}, 
}

//Tipos de powerUps
const powerUps = [
	bloques.normal,
	bloques.multiplicador,
	bloques.goma,
	bloques.disparo,
	bloques.agrandador,
	bloques.achichador,
]

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