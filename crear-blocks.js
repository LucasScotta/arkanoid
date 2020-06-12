/* globals require, boxes, randomPowerUp, Box, powers, widthTypes, balls, imgsBox , guns, */
require(['game',
		'nave',], function (game, nave) {
let k
function blocks(level) {

	k = 0
	let posX = game.pos.x + game.size.b * 2
	let posY = game.pos.y + game.size.b * 2

	for (let i = 0; i < level + 3; i += 1) {
		
		for (let j = 0; j <= 8; j += 1) {
			const div = document.createElement('div')
			const img = document.createElement('img')
			div.appendChild(img)
			div.classList.add('box')
			img.classList.add('box')
			boxes[k] = new Box({
				pos: {
					x: posX,
					y: posY,
				},
				size: {
					w: 60,
					h: 20,
				},
				strong: Math.floor(Math.random() * imgsBox.length),
				$div: div,
				$img: img,
				index: k,
				power: randomPowerUp(),
			})
			boxes[k].$img.src = imgsBox[boxes[k].strong]
			document.getElementById('container').appendChild(div)
			boxes[k].$div.style.left = posX + 'px'
			boxes[k].$div.style.top = posY + 'px'
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
	nave.setWidthType(widthTypes.M)
}
const clearGuns = function clearGuns() {
	for (let i = guns.length - 1; i > -1; i -= 1) {
		guns[i].clearGun()
	}
}
const clearBalls = function clearBalls() {

	for (let i = balls.length - 1; i > -1; i -= 1) {
		balls[i].clearBall()
	}
}
window.clear = function clear () {
	clearBalls()
	clearGuns()
	clearPowers()
}

window.clearAll = function clearAll () {
	clearGuns()
	clearPowers()
	clearBlocks()
}
})