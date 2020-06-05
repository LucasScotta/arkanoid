/////////////
nave.pintarNaveInicio()
pintarBolaInicio()
document.onmousemove = function mover(event) {

	event.preventDefault()

	mouse.x = event.x
	mouse.y = event.y
	mouse.b = true

}

function moverNave(x, y) {

	nave.mover(x, y)
}

// 

document.onclick = function(event) {

	const x = event.x
	const y = event.y
	balls[0].arrancar(x, y)
}

document.onkeydown = function tecla(event) {

		if (event.key === 'p') {

		game.config.pause = !game.config.pause
	}
}

function pintarBolaInicio() {

	const ball = balls[0]
	const $ball = $balls[0]
	ball.pos.x = nave.pos.x + nave.size.w / 2
	ball.pos.y = nave.pos.y - ball.size.h - 1

	$ball.style.left = `${ball.pos.x}px`
	$ball.style.top  = `${ball.pos.y}px`
}