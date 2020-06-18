'use strict'
/* globals require */
/////////////
require(['globals',
		'modules/game',
		'proto/gun',
		'modules/pintar-bola-inicial'], (globals,
			game,
			Gun,
			pintarBolaInicio) => {
	globals.nave.pintarNaveInicio()
	pintarBolaInicio()
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

		for (let ball of globals.balls.getBalls()) {
			
			ball.arrancar(x, y)
		}
		for (const gun of globals.guns) {
			gun.disparar()
		}
	}

	document.onkeydown = function tecla(event) {
		if (event.key === 'p') {
			game.config.pause = !game.config.pause
		}
		if (event.code === 'Space') {
			for (const gun of globals.guns) {
				gun.disparar()
			}
			for (let ball of globals.balls.getBalls()) {
			
				ball.arrancar(globals.mouse.x, globals.mouse.y, game, globals.nave)
			}
		}
		if (event.key === 'l') {
			globals.balls.clonarRandom()
		}
		if (event.key === 'm') {
			globals.nave.setWidthType(globals.widthTypes.L)
		}
		if (event.key === 'n') {
			globals.nave.setWidthType(globals.widthTypes.S)
		}
		if (event.key === 'b') {
			globals.nave.setWidthType(globals.widthTypes.M)
		}
		if (event.key === 'v') {
			if (globals.guns.length === 0) {
				const init = globals.nave.pos.x + 10
				const arma = document.createElement('div')
				arma.classList.add('gun')
				globals.guns.push(new Gun({
					shots: 5,
					pos: {
						x: init,
						y: 0,
						init: init,
					},
					size: {
						w: 5,
						h: 20,
					},
					activo: false,
					$el: arma,
				}))
			}
			else if (globals.guns.length === 1) {
				const init = globals.nave.pos.x + globals.nave.size.w - 10
				const arma = document.createElement('div')
				arma.classList.add('gun')
				globals.guns.push(new Gun({
					shots: 5,
					pos: {
						x: init,
						y: 0,
						init: init,
					},
					size: {
						w: 5,
						h: 20,
					},
					activo: false,
					$el: arma,
				}))
			}
		}
	}
})
