'use strict'
/* globals require*/
require(['proto/game',
		'mover',], function (Game, coord) {
	const mouse = {
		x: 0,
		y: 0,
		b: false,
	}
	window.mouse = mouse
	const game = new Game()

	window.game = game
	game.addBall()

	document.onmousemove = (event) => {
		coord.mover(mouse, event)
	}
	document.onclick = () => {
		coord.click(game)
	}
	document.onkeypress = (event) => {
		coord.tecla(game, event)
	}

	function update() {
		
		for (const ball of game.ballm.getBalls()) {
			ball.moverInicio(game, mouse)
			ball.update(game, mouse)
		}
		
		if (mouse.b) {
			game.nave.mover(mouse, game)
			mouse.b = false
		}


		for (const power of game.powerm.getItems()) {
			power.update(game, game.nave)
		}

		if (game.boxm.estaVacio()) {
			return game.ganar()
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