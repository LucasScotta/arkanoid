console.log('inicio update')

function update() {

	for (let i = 0; i < balls.length; i += 1) {

		updateBall(balls[i], $balls[i])
	}
}

function updateBall(ball, $ball) {

	naveAncho = naveRect.width
	const ballRect = $ball.getBoundingClientRect()
	naveRect       = nave.getBoundingClientRect()
	const ballIzq  = ball.pos.x
	const ballDer  = ball.pos.x + ballRect.width
	const ballAba  = ball.pos.y + ballRect.height
	const ballArr  = ball.pos.y
	const bordeIzq = containerRect.left   + contBorde
	const bordeDer = containerRect.right  - contBorde
	const bordeAba = containerRect.bottom - contBorde
	const bordeArr = containerRect.top    + contBorde
	if (mouse.b) {

		moverNave(mouse.x, mouse.y)
		mouse.b = false
	}

// Bola golpeando contra los bordes
	if (ballDer >= bordeDer
	||	ballIzq <= bordeIzq) ballDirX *= -1

	if (ballArr <= bordeArr) ballDirY *= -1

	if (ballAba >= bordeAba) return perder(ball, $ball)

// Bola golpeando las cajas:
	for (let box of boxes) {

		if (ball.estaTocandoDeArribaYAbajo(box)) {
// Si esta tocando de arriba o abajo rebota verticalmente
			ball.rebotarVerticalmente()
			return box.remove()
		}

		if (ball.estaTocandoDeIzquierdaYDerecha(box)) {

			ball.rebotarHorizontalmente()
			return box.remove()
		}
	}

//Rebotes de bola contra la nave:
//1 => ----[--]
	if (ballAba === naveRect.top
	&&	ballIzq <=	naveRect.right
	&&	ballDer >	naveRect.right - naveRect.width / 3) {

		ballDirX  =  1
		ballDirY *= -1
	}

//2 => [--]----
	if (ballAba === naveRect.top
	&&	ballDer >=  naveRect.left
	&&	ballIzq <   naveRect.left + naveRect.width / 3) {

		ballDirX  = -1
		ballDirY *= -1
	}

//3 --[--]--
	if (ballAba === naveRect.top
	&&	ballDer <=	naveRect.right - naveRect.width / 3
	&&	ballIzq >=	naveRect.left  + naveRect.width / 3) {

		ballDirX = vel.r * Math.cos(vel.a)
		ballDirY = vel.r * Math.sin(vel.a)
	}

	if (boxes.length === 0) {

		return ganar(ball, $ball)
	}

//mover la bola
	ball.pos.x += ballDirX
	ball.pos.y += ballDirY
	$ball.style.left = `${ball.pos.x}px`
	$ball.style.top = `${ball.pos.y}px`
}

function perder(ball, $ball) {

	ballRect = $ball.getBoundingClientRect()
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
// let timer = 
setInterval(loop, time)
// function aumentarVelocidad() {

// 	time -= 2
// 	clearInterval(timer)
// 	timer = setInterval(loop, time)
// }