function update() {

	for (let i = 0; i < balls.length; i += 1) {

		updateBall(balls[i], $balls[i])
	}
}

function updateBall(ball, $ball) {

	if (mouse.b) {

		nave.mover(mouse.x, mouse.y)
		ball.moverInicio(mouse.x, mouse.y)
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

// Si esta tocando de arriba/abajo en una caja, rebota verticalmente
			ball.rebotarVerticalmente()
			return borrarBox(box)
		}
// Si esta tocando de derecha/izquierda en una caja, rebota horizontalmente (funciona a medias)
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

		return game.ganar(ball, $ball)
	}

//mover la bola
	ball.mover($ball, ball)
	
}

function loop() {

	if (!game.config.pause) update()
}

let time = 5
setInterval(loop, time)