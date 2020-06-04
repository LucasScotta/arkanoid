function blocks(level) {

	const divBlock = []
	let mapX = game.pos.x + 20
	let mapY = game.pos.y + 15
	let divN = 2

	for (let i = -1; i < level; i += 1) {

		divBlock[i] = []

		for (let j = 0; j < 7; j += 1) {

			divBlock[i][j] = document.createElement('div')
			container.appendChild(divBlock[i][j])

			divBlock[i][j].right = game.size.w
			divBlock[i][j].classList.add('box')
			container.children[divN].style.left = mapX + 'px'
			container.children[divN].style.top = mapY + 'px'
			mapX += 100
			divN += 1

			if (j === 6) {
				mapY += 55
				mapX -= game.size.w
			}
		}
	}
}

blocks(game.config.level)

function clearBlocks() {

	while (boxes.length > 0) {

		boxes[0].remove()
	}
}