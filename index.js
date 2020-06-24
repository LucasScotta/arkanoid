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
		b: true,
	}
	window.raton = mouse
	const game = new Game()
	function clearPowers(game) {
		game.powerm.reset()
		
		game.nave.setWidthType(globals.widthTypes.M)
	}
	function clearGuns(game) {
		game.nave.gun.restartGun()
	}
	function clearBalls(game) {
		game.ballm.reset()
	}
	function clearAll (game) {
		clearBalls(game)
		clearGuns(game)
		clearPowers(game)
	}

	function clearCheat (game) {
		clearGuns(game)
		clearPowers(game)
		game.boxm.reset(game)
	}

	const clear = {
		All: clearAll,
		Cheat: clearCheat,
	}
	window.juego = game
	game.start(clear)

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
			ball.update(game, mouse, clear, globals)
		}
		
		if (mouse.b) {
			game.nave.mover(mouse, game)
			globals.mouse.b = false
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