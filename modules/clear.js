/*globals define*/
define(['globals',
		'modules/nave',
		'modules/width-types',], function(globals, nave, widthTypes) {

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
		nave.setWidthType(widthTypes.M)
	}
	function clearGuns() {
		for (let i = globals.guns.length - 1; i > -1; i -= 1) {
			globals.guns[i].clearGun()
		}
	}
	function clearBalls() {

		for (let i = globals.balls.length - 1; i > -1; i -= 1) {
			globals.balls[i].clearBall()
		}
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