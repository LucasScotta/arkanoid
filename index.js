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
		'globals',], function (Game, globals) {
	window.game = new Game()
	game.start()
	function update() {
		
		for (const ball of game.ballm.getBalls()) {
			ball.moverInicio(game, globals)
			ball.update(game)
		}
		
		if (globals.mouse.b) {
			game.nave.mover(globals.mouse.x, globals.mouse.y)
			globals.mouse.b = false
		}


		for (const power of game.powerm.getItems()) {
			power.update()
		}

		if (game.boxm.estaVacio()) {
			return game.ganar(globals)
		}
		game.nave.gun.update(globals.game)
	}

	function loop() {

		if (!game.config.pause) update()
	}

	let time = 5
	setInterval(loop, time)
})