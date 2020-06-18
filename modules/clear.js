'use strict'
/*globals define*/
define(['globals',], function(globals) {

	function clearBlocks() {
		let i = 0
		while (globals.boxes.length > 0) {

			globals.boxes[i].borrar()
		}
	}

	function clearPowers() {

		for (let i = globals.powers.length - 1; i > -1; i -= 1) {
			globals.powers[i].$el.remove()
			globals.powers.splice(i, 1)
		}
		globals.nave.setWidthType(globals.widthTypes.M)
	}
	function clearGuns() {
		for (let i = globals.guns.length - 1; i > -1; i -= 1) {
			globals.guns[i].clearGun()
		}
	}
	function clearBalls() {
			globals.balls.reset()
	}
	function clear () {
		clearBalls()
		clearGuns()
		clearPowers()
	}

	function clearAll () {
		clearGuns()
		clearPowers()
		clearBlocks()
	}
	return {
		clear: clear,
		clearAll: clearAll
	}
})