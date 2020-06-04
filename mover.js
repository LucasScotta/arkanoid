/////////////
nave.pintarNaveInicio()
balls[0].pos.x = $nave.getBoundingClientRect().left + $nave.getBoundingClientRect().width / 2
balls[0].pos.y = $nave.getBoundingClientRect().top - $balls[0].getBoundingClientRect().height - 1
const cont = container.getBoundingClientRect()
let navePoss = parseInt($nave.style.left)

document.onmousemove = function mover(event) {

	event.preventDefault()

	mouse.x = event.x
	mouse.y = event.y
	mouse.b = true

}

function moverNave(x, y) {

	navePoss = parseInt($nave.style.left)
	nave.mover(cont, contBorde, x, y, naveRect)
}

// 

document.onclick = function(event) {

	const x = event.x
	const y = event.y
	balls[0].arrancar(x, y, cont, contBorde, naveRect)
}

document.onkeydown = function tecla(event) {

		if (event.key === 'p') {

		game.config.pause = !game.config.pause
	}
}