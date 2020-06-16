/*globals define*/
define(['modules/boxes',
		'modules/powers',
		'modules/nave',
		'modules/width-types',
		'modules/guns',
		'modules/balls',], function(boxes, powers, nave, widthTypes, guns, balls) {

	function clearBlocks() {
		let i = 0
		while (boxes.length > 0) {

			boxes[i].borrar()
		}
	}

	function clearPowers() {

		for (let i = powers.length - 1; i > -1; i -= 1) {
			powers[i].$el.remove()
			powers.splice(i, 1)
		}
		nave.setWidthType(widthTypes.M)
	}
	function clearGuns() {
		for (let i = guns.length - 1; i > -1; i -= 1) {
			guns[i].clearGun()
		}
	}
	function clearBalls() {

		for (let i = balls.length - 1; i > -1; i -= 1) {
			balls[i].clearBall()
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