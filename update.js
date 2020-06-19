'use strict'
/* globals require*/
require(['globals',], function (globals) {
	function update() {
		
		for (const ball of globals.game.ballm.getBalls()) {
			ball.moverInicio(globals)
			ball.update(globals)
		}
		
		if (globals.mouse.b) {
			globals.game.nave.mover(globals.mouse.x, globals.mouse.y)
			globals.mouse.b = false
		}


		for (const power of globals.powers) {
			power.update()
		}

		if (globals.boxes.length === 0) {
			return globals.game.ganar(globals.game.ballm.getFirst())
		}
		for (const gun of globals.guns) {
			gun.update()
		}
	}

	function loop() {

		if (!globals.game.config.pause) update()
	}

	let time = 5
	setInterval(loop, time)
})