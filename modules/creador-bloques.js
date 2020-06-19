'use strict'
/*globals define*/
define(['globals',
		'constants',
		'factory/boxes'
], (
	globals,
	constants,
	newBox,) => {
	let k
	k = 0
	let posX = globals.game.pos.x + globals.game.size.b * 2
	let posY = globals.game.pos.y + globals.game.size.b * 2

	for (let i = 0; i < globals.game.config.level + 3; i += 1) {
		
		for (let j = 0; j <= 8; j += 1) {
			globals.boxes[k] = newBox(posX, posY)
			globals.boxes[k].$img.src = constants.imgsBox[globals.boxes[k].strong]
			globals.boxes[k].$div.style.left = posX + 'px'
			globals.boxes[k].$div.style.top = posY + 'px'
			posX += 75
			k += 1
			if (j === 8) {

				posX = globals.game.pos.x + globals.game.size.b * 2
				posY += 40
			}
		}
	}
})