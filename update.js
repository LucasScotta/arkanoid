function update() {

	for (let i = 0; i < balls.length; i += 1) {

		updateBall(balls[i], $balls[i])
	}
}

function updateBall(ball, $ball) {

	if (mouse.b) {

		moverNave(mouse.x, mouse.y)
		mouse.b = false
	}

// Bola golpeando contra los bordes
	if (ball.tocaBordeCostados()) {

		ball.rebotarHorizontalmente()
	}

	if (ball.tocaBordeSuperior()) {

		ball.rebotarVerticalmente()
	}

	if (ball.tocaBordeInferior()) {
		return game.perder(ball, $ball)
	}

// Bola golpeando las cajas:
	for (let box of boxes) {

		if (ball.estaTocandoDeArribaYAbajo(box)) {
// Si esta tocando de arriba o abajo rebota verticalmente
			ball.rebotarVerticalmente()
			return borrarBox(box)
		}

		if (ball.estaTocandoDeIzquierdaYDerecha(box)) {

			ball.rebotarHorizontalmente()
			return borrarBox(box)
		}
	}

//Rebotes de bola contra la $nave:
//1 => ----[--]
	if (ball.estaTocandoDerecha($nave)) {

		ball.rebotarDerecha()
	}

//2 => [--]----
	if (ball.estaTocandoIzquierda($nave)) {

		ball.rebotarIzquierda()
	}

//3 --[--]--
	if (ball.estaTocandoMedio($nave)) {

		ball.rebotarMedio()
	}

	if (boxes.length === 0) {

		return ganar(ball, $ball)
	}

//mover la bola
	ball.mover($ball, ball)
	
}

function ganar(ball, $ball) {

	game.config.level += 1

	if (game.config.level <= 6) {

	ball.pos.x = nave.pos.x + nave.size.w / 2
	ball.pos.y = nave.pos.y - ballRect.height - 1
	game.config.ballDirY = 0
	game.config.ballDirX = 0
	blocks(game.config.level)
	console.log(`Pasaste al nivel: ${game.config.level}`)
	}
	if (game.config.level === 7) {
		game.config.level += 1
		console.log(`Felicitaciones, terminaste un juego en desarrollo... Manco asqueroso`)
	}
}

function loop() {

	if (!game.config.pause) update()
}

let time = 5
setInterval(loop, time)