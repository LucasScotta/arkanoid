/* globals mouse, balls, $balls, nave, game, boxes, powers*/
function update() {
	
	for (const ball of balls) {
		ball.moverInicio(mouse.x, mouse.y)
		ball.update()
	}
	
	if (mouse.b) {
		nave.mover(mouse.x, mouse.y)
		mouse.b = false
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