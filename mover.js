/* globals nave, mouse, balls, game, $balls */
/////////////
nave.pintarNaveInicio()
pintarBolaInicio()
window.ballInicial = parseInt(balls[0].pos.x)
document.onmousemove = function mover(event) {

	event.preventDefault()

	mouse.x = event.x
	mouse.y = event.y
	mouse.b = true

}

// 

document.onclick = function(event) {

	const x = event.x
	const y = event.y
	balls[0].arrancar(x, y, game, nave)
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