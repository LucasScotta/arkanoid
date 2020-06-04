console.log('inicio update')

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
	if (ball.tocaBordeCostados(containerRect, contBorde)) {

		ball.rebotarHorizontalmente()
	}

	if (ball.tocaBordeSuperior(containerRect, contBorde)) {

		ball.rebotarVerticalmente()
	}

	if (ball.tocaBordeInferior(containerRect, contBorde)) {
		return perder(ball, $ball)
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

//Rebotes de bola contra la nave:
//1 => ----[--]
	if (ball.estaTocandoIzquierda(nave)) {

		ball.rebotarDerecha()
	}

//2 => [--]----
	if (ball.estaTocandoDerecha(nave)) {

		ball.rebotarIzquierda()
	}

//3 --[--]--
	if (ball.estaTocandoMedio(nave)) {

		ball.rebotarMedio()
	}

	if (boxes.length === 0) {

		return ganar(ball, $ball)
	}

//mover la bola
	ball.mover($ball, ball)
	
}

function perder(ball, $ball) {

	ballRect = $ball.getBoundingClientRect()
	naveRect = nave.getBoundingClientRect()
	ballDirX = 0
	ballDirY = 0
	lifes -= 1
	if (lifes > 0) {

		ball.pos.x = naveRect.left + naveRect.width / 2
		ball.pos.y = naveRect.top - ballRect.height - 1
		console.log(`Te queda(n) ${lifes} vidas.`)
	}

	else {
		if (confirm('Volver a empezar?')) {

			clearBlocks()

			nave.style.left = containerRect.width / 2 - naveRect.width / 2 + 'px'
			nave.style.top = containerRect.bottom - 40 + 'px'
			lifes = 3
			ballDirX = 0
			ballDirY = 0
			naveRect = nave.getBoundingClientRect()
			ball.pos.x = naveRect.left + naveRect.width / 2
			ball.pos.y = naveRect.top - ballRect.height - 1

			level = 1
			blocks(level)
		}
		else console.log('exit')
	}
}

function ganar(ball, $ball) {

	ballRect = $ball.getBoundingClientRect()
	level += 1

	if (level <= 6) {

	ball.pos.x = nave.getBoundingClientRect().left + nave.getBoundingClientRect().width / 2
	ball.pos.y = nave.getBoundingClientRect().top  - ballRect.height - 1
	ballDirY = 0
	ballDirX = 0
	blocks(level)
	console.log(`Pasaste al nivel: ${level}`)
	}
	if (level === 7) {
		level += 1
		console.log(`Felicitaciones, terminaste un juego en desarrollo... Manco asqueroso`)
	}
}

function loop() {

	if (!pause) update()
}

let time = 5
setInterval(loop, time)