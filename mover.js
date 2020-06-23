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

		for (let ball of globals.game.ballm.getBalls()) {
			
			ball.arrancar(x, y, globals.game)
		}
			globals.game.nave.gun.disparar(globals.game)
	}

	document.onkeydown = function tecla(event) {
		if (event.key === 'p') {
			globals.game.config.pause = !globals.game.config.pause
		}
		if (event.code === 'Space') {

			globals.game.nave.gun.disparar(globals.game)
			
			for (let ball of globals.game.ballm.getBalls()) {
			
				ball.arrancar(globals.mouse.x, globals.mouse.y, globals.game, globals.game.nave)
			}
		}
		if (event.key === 'l') {
			globals.game.ballm.clonarRandom()
		}
		if (event.key === 'm') {
			globals.game.nave.setWidthType(globals.widthTypes.L)
		}
		if (event.key === 'n') {
			globals.game.nave.setWidthType(globals.widthTypes.S)
		}
		if (event.key === 'b') {
			globals.game.nave.setWidthType(globals.widthTypes.M)
		}
		if (event.key === 'v') {
			globals.game.nave.gun.shots += 5
		}
	}
})
