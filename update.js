/* globals require, $balls, boxes,*/
require(['modules/mouse',
		'game',
		'modules/nave',
		'modules/powers',
		'modules/balls',
		'modules/guns'], function (mouse, game, nave, powers, balls, guns) {
function update() {
	
	for (const ball of balls) {
		ball.moverInicio(mouse.x, mouse.y)
		ball.update()
	}
	
	if (mouse.b) {
		nave.mover(mouse.x, mouse.y)
		mouse.b = false
	}


	for (const power of powers) {
		power.update()
	}

	if (boxes.length === 0) {
		return game.ganar(balls[0], $balls[0])
	}
	for (const gun of guns) {
		gun.update()
	}
}

function loop() {

	if (!game.config.pause) update()
}

let time = 5
setInterval(loop, time)
})