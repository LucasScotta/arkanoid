'use strict'
/*globals define*/
define(['globals',], function(globals) {

	function clearPowers() {
		globals.game.powerm.reset()
		
		globals.game.nave.setWidthType(globals.widthTypes.M)
	}
	function clearGuns() {
		globals.game.nave.gun.restartGun()
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
	globals.clear = clear
	globals.clearAll = clearAll
	return {
		clear: clear,
		clearAll: clearAll
	}
})