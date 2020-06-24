'use strict'
/* globals require */
/////////////
require(['globals',], (globals) => {
	document.onmousemove = function mover(event) {

		event.preventDefault()

		globals.mouse.x = event.x
		globals.mouse.y = event.y
		globals.mouse.b = true

	}

	// 

	document.onclick = function(event) {

		const x = event.x
		const y = event.y

		for (let ball of game.ballm.getBalls()) {
			
			ball.arrancar(x, y, game)
		}
			game.nave.gun.disparar(game)
	}

	document.onkeydown = function tecla(event) {
		if (event.key === 'p') {
			game.config.pause = !game.config.pause
		}
		if (event.code === 'Space') {

			game.nave.gun.disparar(game)
			
			for (let ball of game.ballm.getBalls()) {
			
				ball.arrancar(globals.mouse.x, globals.mouse.y, game, game.nave)
			}
		}
		if (event.key === 'l') {
			game.ballm.clonarRandom()
		}
		if (event.key === 'm') {
			game.nave.setWidthType(widthTypes.L)
		}
		if (event.key === 'n') {
			game.nave.setWidthType(widthTypes.S)
		}
		if (event.key === 'b') {
			game.nave.setWidthType(globals.widthTypes.M)
		}
		if (event.key === 'v') {
			game.nave.gun.shots += 5
		}
	}
})
