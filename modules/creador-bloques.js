/*globals define*/
define(['globals',
		'modules/game',
		'proto/box',
		'modules/randomOf',
		'modules/potenciadores',
		'modules/imgs-box'
], (
	globals,
	game,
	Box,
	randomOf,
	powerUps,
	imgsBox) => {
	let k
	k = 0
	let posX = game.pos.x + game.size.b * 2
	let posY = game.pos.y + game.size.b * 2

	for (let i = 0; i < game.config.level + 3; i += 1) {
		
		for (let j = 0; j <= 8; j += 1) {
			const div = document.createElement('div')
			const img = document.createElement('img')
			div.appendChild(img)
			div.classList.add('box')
			img.classList.add('box')
			globals.boxes[k] = new Box({
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
				power: randomOf(powerUps),
			})
			globals.boxes[k].$img.src = imgsBox[globals.boxes[k].strong]
			document.getElementById('container').appendChild(div)
			globals.boxes[k].$div.style.left = posX + 'px'
			globals.boxes[k].$div.style.top = posY + 'px'
			posX += 75
			k += 1
			if (j === 8) {

				posX = game.pos.x + game.size.b * 2
				posY += 40
			}
		}
	}
})