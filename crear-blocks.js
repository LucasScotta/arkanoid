let k
function blocks(level) {

	k = 0
	const divBlock = []
	widthMap = game.size.w
	let posX = game.pos.x + game.size.b * 2
	let posY = game.pos.y + game.size.b * 2

	for (let i = 0; i < level + 3; i += 1) {

		divBlock[i] = []
		for (let j = 0; j <= 8; j += 1) {
			divBlock[i][j] = document.createElement('div')
			container.appendChild(divBlock[i][j])
			divBlock[i][j].classList.add('box')
			const r = randomPowerUp()
			boxes[k] = {
				pos: {
					x: posX,
					y: posY,
				},
				size: {
					w: 60,
					h: 20,
				},
				$el: $boxes[k],
				index: k,
				power: r,
			}
			initBox(boxes[k])
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

function clearBlocks() {

	let i = 0
	
	while (boxes.length > 0) {

		boxes[i].borrar()
	}
}