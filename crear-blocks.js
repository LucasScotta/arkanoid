function blocks(level) {

	const divBlock = []
	const rect = container.getBoundingClientRect()
	let contX = rect.left + 20
	let contY = rect.top + 15
	let divN = 2

	for (let i = -1; i < level; i += 1) {

		divBlock[i] = []

		for (let j = 0; j < 7; j += 1) {

			divBlock[i][j] = document.createElement('div')
			container.appendChild(divBlock[i][j])

			divBlock[i][j].right = rect.right
			divBlock[i][j].classList.add('box')
			container.children[divN].style.left = contX + 'px'
			container.children[divN].style.top = contY + 'px'
			contX += 100
			divN += 1

			if (j === 6) {
				contY += 55
				contX -= rect.width
			}
		}
	}
}

blocks(level)

function clearBlocks() {

	while (boxes.length > 0) {

		boxes[0].remove()
	}
}