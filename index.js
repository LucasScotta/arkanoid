/* globals Ball, game */
///////////////////////////////////////////////////////////////////////////////
// Bola + alto y ancho, nave + alto y ancho , mapa(container) + borde y cajas.
const $balls = document.getElementsByClassName('ball')
window.colors = ['green', 'yellow', 'black']
window.imgsBox = [
'/home/lucas/Desktop/codigo/js/mayo/arka-html-js/img/0.png',
'/home/lucas/Desktop/codigo/js/mayo/arka-html-js/img/1.png',
'/home/lucas/Desktop/codigo/js/mayo/arka-html-js/img/2.png',
'/home/lucas/Desktop/codigo/js/mayo/arka-html-js/img/3.png',
`/home/lucas/Desktop/codigo/js/mayo/arka-html-js/img/4.png`,
'/home/lucas/Desktop/codigo/js/mayo/arka-html-js/img/5.png',
'/home/lucas/Desktop/codigo/js/mayo/arka-html-js/img/6.png',
'/home/lucas/Desktop/codigo/js/mayo/arka-html-js/img/7.png',]
window.imgBalls = '/home/lucas/Desktop/codigo/js/mayo/arka-html-js/img/ball.png'
const $nave = document.getElementById('nave')
$nave.style.width = `100px`
$nave.style.height = `15px`
window.naveWidth = parseInt($nave.style.width)
const container = document.getElementById('container')
window.mapBorder = game.size.b
const balls = []
window.boxes = []
window.powers = []
window.guns = []
window.ballN = function ballN() {
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
	container.appendChild(newBallDiv)
}
ballN()
///////////////////////////////////////////////////////////////////////////////



// const vel = {
//   r: 1,
//   a: Math.PI * 1.5,
// }

///////////////////////////////////////////////////////////////////////////////