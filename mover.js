/* globals nave, mouse, balls, game, randomOf, widthTypes */
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

	for (let ball of balls) {
		
		ball.arrancar(x, y, game, nave)
	}
}

document.onkeydown = function tecla(event) {
	if (event.key === 'p') {
		game.config.pause = !game.config.pause
	}
	if (event.code === 'Space') {
		for (let ball of balls) {
		
			ball.arrancar(mouse.x, mouse.y, game, nave)
		}
	}
	if (event.key === 'l') {
			randomOf(balls).agregarBall()
	}
	if (event.key === 'm') {
		nave.setWidthType(widthTypes.L)
	}
	if (event.key === 'n') {
		nave.setWidthType(widthTypes.S)
	}
	if (event.key === 'b') {
		nave.setWidthType(widthTypes.M)
	}
	if (event.key === 'v') {
		nave.activarGun()
	}
}

function pintarBolaInicio() {

	balls[0].pos.x = nave.pos.x + nave.size.w / 2
	balls[0].pos.y = nave.pos.y - balls[0].size.h - 1

	balls[0].$el.style.left = `${balls[0].pos.x}px`
	balls[0].$el.style.top  = `${balls[0].pos.y}px`
}