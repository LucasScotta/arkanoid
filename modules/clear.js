'use strict'
/*globals define*/
define(['globals',], function(globals) {

	function clearPowers() {

		for (let i = globals.powers.length - 1; i > -1; i -= 1) {
			globals.powers[i].$el.remove()
			globals.powers.splice(i, 1)
		}
		globals.game.nave.setWidthType(globals.widthTypes.M)
	}
	function clearGuns() {
		for (let i = globals.guns.length - 1; i > -1; i -= 1) {
			globals.guns[i].clearGun()
		}
	}
	function clearBalls() {
			globals.game.ballm.reset()
	}
	function clear () {
		clearBalls()
		clearGuns()
		clearPowers()
	}

	function clearAll () {
		clearGuns()
		clearPowers()
		globals.game.boxm.reset()
	}
	return {
		clear: clear,
		clearAll: clearAll
	}
})