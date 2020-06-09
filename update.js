/* globals mouse, balls, $balls, nave, game, boxes, powers*/
function update() {
	
	if (mouse.b) {
		nave.mover(mouse.x, mouse.y)
		balls[0].moverInicio(mouse.x, mouse.y)
		mouse.b = false
	}

	for (const ball of balls) {
		ball.update()
	}

	for (let i = 0; i < powers.length; i += 1) {
		powers[i].update(i)
	}

	if (boxes.length === 0) {
		return game.ganar(balls[0], $balls[0])
	}
}

function loop() {

	if (!game.config.pause) update()
}

let time = 5
setInterval(loop, time)