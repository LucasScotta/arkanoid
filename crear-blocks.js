/* globals game, container, boxes, randomPowerUp, Box, powers, nave, widthTypes*/
let k
function blocks(level) {

	k = 0
	let posX = game.pos.x + game.size.b * 2
	let posY = game.pos.y + game.size.b * 2

	for (let i = 0; i < level + 3; i += 1) {
		
		for (let j = 0; j <= 8; j += 1) {

			const $el = document.createElement('div')
			container.appendChild($el)
			$el.classList.add('box')
			boxes[k] = new Box({
				pos: {
					x: posX,
					y: posY,
				},
				size: {
					w: 60,
					h: 20,
				},
				$el,
				index: k,
				power: randomPowerUp(),
			})
			boxes[k].$el.style.left = posX + 'px'
			boxes[k].$el.style.top = posY + 'px'
			posX += 75
			k += 1
			if (j === 8) {

				posX = game.pos.x + game.size.b * 2
				posY += 40
			}
		}
	}
}

blocks(game.config.level)

const clearBlocks = function clearBlocks() {
	let i = 0
	while (boxes.length > 0) {

		boxes[i].borrar()
	}
}

const clearPowers = function clearPowers() {

	for (let i = powers.length - 1; i > -1; i -= 1) {
		powers[i].$el.remove()
		powers.splice(i, 1)
	}
	nave.setWidth(widthTypes.M.w)
}

window.clear = function clear () {

	clearBlocks()
	clearPowers()
}