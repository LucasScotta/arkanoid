'use strict'
/*globals define*/
define(['globals',
		'constants',
		'factory/boxes'
], (
	globals,
	constants,
	newBox,) => {
	let posX = globals.game.pos.x + globals.game.size.b * 2
	let posY = globals.game.pos.y + globals.game.size.b * 2

	for (let i = 0; i < globals.game.config.level + 3; i += 1) {
		
		for (let j = 0; j <= 8; j += 1) {
			const box = newBox(posX, posY)
			box.$img.src = constants.imgsBox[box.strong]
			box.$div.style.left = posX + 'px'
			box.$div.style.top = posY + 'px'
			globals.game.boxm.agregar(box)
			posX += 75
			if (j === 8) {

				posX = globals.game.pos.x + globals.game.size.b * 2
				posY += 40
			}
		}
	}
})