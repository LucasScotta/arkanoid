'use strict'
/* globals require, define*/
define('img/box', () => [
	'img/0.png',
	'img/1.png',
	'img/2.png',
	'img/3.png',
	'img/4.png',
	'img/5.png',
	'img/6.png',
	'img/7.png',
	])

require(['proto/game',
		'globals',
		'mover',], function (Game, globals, cord) {
	let mouse = {
		x: 0,
		y: 0,
		b: false,
	}
	window.raton = mouse
	const game = new Game()

	window.juego = game
	game.start()

	document.onmousemove = () => {
		cord.mover(mouse)
	}
	document.onclick = () => {
		cord.click(game, mouse)
	}
	document.onkeydown = () => {
		cord.tecla(game, mouse)
	}

	function update() {
		
		for (const ball of game.ballm.getBalls()) {
			ball.moverInicio(game, mouse)
			ball.update(game, mouse, globals)
		}
		
		if (mouse.b) {
			game.nave.mover(mouse, game)
			mouse.b = false
		}


		for (const power of game.powerm.getItems()) {
			power.update(game, game.nave)
		}

		if (game.boxm.estaVacio()) {
			return game.ganar(globals)
		}
		game.nave.gun.update(game)
		window.juego = game
	}

	function loop() {

		if (!game.config.pause) update()
	}

	let time = 5
	setInterval(loop, time)
})