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

		pause = !pause
	}
	return

	navePoss = parseInt($nave.style.left)

	if (event.code === "Space" && ballDirX === 0 && ballDirY === 0) {

		if (balls[0].pos.x <= naveRect.left + naveRect.width / 2) {

			ballDirX = -1
			ballDirY = -1
		}
		else {

			ballDirX = 1
			ballDirY = -1
		}
	}

	if (ballDirX != 0 && ballDirY != 0) {

		if (event.key === 'd' || event.key === 'D') {

			if (navePoss >= cont.right - contBorde - naveRect.width) navePoss = cont.right - contBorde - naveRect.width
			else navePoss += 20

			$nave.style.left = `${navePoss}px`
		}

		if (event.key === 'a' || event.key === 'A') {

			if (navePoss <= cont.left + contBorde) navePoss = cont.left + contBorde
			else navePoss -= 20

		}
		$nave.style.left = `${navePoss}px`
	}

}