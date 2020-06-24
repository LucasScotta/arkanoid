'use strict'
/* globals define */
/////////////
define(['proto/nave-width-types'], (NAVE_WIDHT_TYPES) => {

	const mover = (mouse, event) => {
		mouse.x = event.x
		mouse.y = event.y
		mouse.b = true
		return mouse
	}

	// 

	const click = (game, mouse) => {
		for (let ball of game.ballm.getBalls()) {
			ball.arrancar(game)
		}
		game.nave.gun.disparar(game)
	}

	const tecla = (game, event) => {
		if (event.key === 'p') {
			return game.config.pause = !game.config.pause
		}
		if (event.code === 'Space') {

			game.nave.gun.disparar(game)
			
			for (let ball of game.ballm.getBalls()) {
			
				ball.arrancar(game, game.nave)
			}
		}
		if (event.key === 'l') {
			return game.ballm.clonarRandom()
		}
		if (event.key === 'm') {
			return game.nave.setWidthType(NAVE_WIDHT_TYPES.L)
		}
		if (event.key === 'n') {
			return game.nave.setWidthType(NAVE_WIDHT_TYPES.S)
		}
		if (event.key === 'b') {
			return game.nave.setWidthType(NAVE_WIDHT_TYPES.M)
		}
		if (event.key === 'v') {
			return game.nave.gun.shots += 5
		}
	}
	return {
		mover: mover,
		click: click,
		tecla: tecla,
	}
})
