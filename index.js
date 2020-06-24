'use strict'
/* globals require*/
require(['proto/game',
		'globals',
		'mover',], function (Game, globals, coord) {
	let mouse = {
		x: 0,
		y: 0,
		b: false,
	}
	window.raton = mouse
	const game = new Game()

	window.juego = game
	game.addBall()

	document.onmousemove = (event) => {
		coord.mover(mouse, event)
	}
	document.onclick = () => {
		coord.click(game, mouse)
	}
	document.onkeypress = (event) => {
		coord.tecla(game, event)
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