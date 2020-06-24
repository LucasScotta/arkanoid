'use strict'
/*globals define*/
define(['globals',], function(globals) {

	function clearPowers() {
		game.powerm.reset()
		
		game.nave.setWidthType(globals.widthTypes.M)
	}
	function clearGuns() {
		game.nave.gun.restartGun()
	}
	function clearBalls() {
		game.ballm.reset()
	}
	function clear () {
		clearBalls()
		clearGuns()
		clearPowers()
	}

	function clearAll () {
		clearGuns()
		clearPowers()
		game.boxm.reset()
	}
	globals.clear = clear
	globals.clearAll = clearAll
	return {
		clear: clear,
		clearAll: clearAll
	}
})