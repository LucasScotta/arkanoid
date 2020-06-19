'use strict'
/*globals define*/
define(['globals',], function(globals) {

	function clearPowers() {
		globals.game.powerm.reset()
		
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