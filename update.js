'use strict'
/* globals require*/
require(['globals',
		'modules/game',
		'modules/nave',], function (globals, game, nave) {
	function update() {
		
		for (const ball of globals.balls.getBalls()) {
			ball.moverInicio(globals.mouse.x, globals.mouse.y)
			ball.update()
		}
		
		if (globals.mouse.b) {
			nave.mover(globals.mouse.x, globals.mouse.y)
			globals.mouse.b = false
		}


		for (const power of globals.powers) {
			power.update()
		}

		if (globals.boxes.length === 0) {
			return game.ganar(globals.balls.getFirst())
		}
		for (const gun of globals.guns) {
			gun.update()
		}
	}

	function loop() {

		if (!game.config.pause) update()
	}

	let time = 5
	setInterval(loop, time)
})