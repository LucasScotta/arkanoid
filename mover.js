/////////////
nave.pintarNaveInicio()
balls[0].pos.x = nave.pos.x + nave.size.w / 2
balls[0].pos.y = nave.pos.y - nave.size.h - 1

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