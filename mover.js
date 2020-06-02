/////////////
nave.style.left = container.getBoundingClientRect().width / 2 - nave.getBoundingClientRect().width / 2 + 'px'
nave.style.top = container.getBoundingClientRect().bottom - 40 + 'px'
balls[0].pos.x = nave.getBoundingClientRect().left + nave.getBoundingClientRect().width / 2
balls[0].pos.y = nave.getBoundingClientRect().top - $balls[0].getBoundingClientRect().height - 1
const cont = container.getBoundingClientRect()
let navePoss = parseInt(nave.style.left)

document.onmousemove = function mover(event) {

	event.preventDefault()
	if(!pause) {
	mouse.x = event.x
	mouse.y = event.y
	mouse.b = true
	}
}

function moverNave(x, y) {

	navePoss = parseInt(nave.style.left)
	if (x <= cont.right
	&&	x >= cont.left
	&&	y <= cont.bottom
	&&	y >= cont.top
	&&	lifes > 0
	&&	level < 7) {

		if (ballDirX === 0 && ballDirY === 0) {

			if (x <= cont.left + contBorde + naveRect.width / 2) {

				if(x <= cont.left + contBorde + $balls[0].getBoundingClientRect().width / 2) balls[0].pos.x = cont.left + contBorde
				else balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2

				nave.style.left = cont.left + contBorde + 'px'
			}
			else if (x >= cont.right - contBorde - naveRect.width / 2) {

				if (x >= cont.right - contBorde - $balls[0].getBoundingClientRect().width / 2) balls[0].pos.x = cont.right - contBorde - $balls[0].getBoundingClientRect().width
				else balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2

				nave.style.left = cont.right - contBorde - naveRect.width + 'px'
			}
			else {

				balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2
				nave.style.left = x - naveRect.width / 2 + 'px'
			}
		}
		else {

			if (x >= cont.right -  contBorde - naveAncho / 2) {

				x = cont.right - naveAncho - contBorde
				nave.style.left = `${x}px`
			}
			else if (x <= cont.left + naveAncho / 2 + contBorde) {

				x = cont.left + contBorde
				nave.style.left = `${x}px`
			}
			else {

				x -= naveAncho / 2
				nave.style.left = `${x}px`
			}
		}
	}
}

// 

document.onclick = function(event) {

	const x = event.x
	const y = event.y

	if (ballDirY === 0 && ballDirX === 0
	&&	x <= cont.bottom - contBorde
	&& 	x >= cont.top + contBorde
	&&  y <= cont.right - contBorde
	&&	y >= cont.left + contBorde) {

		if (balls[0].pos.x <= naveRect.left + naveRect.width / 2) {

			ballDirX = -1
			ballDirY = -1
		}
		else {

			ballDirX = 1
			ballDirY = -1
		}
	}
}

document.onkeydown = function tecla(event) {

		if (event.key === 'p') {

		pause = !pause
	}
	return

	navePoss = parseInt(nave.style.left)

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

			nave.style.left = `${navePoss}px`
		}

		if (event.key === 'a' || event.key === 'A') {

			if (navePoss <= cont.left + contBorde) navePoss = cont.left + contBorde
			else navePoss -= 20

		}
		nave.style.left = `${navePoss}px`
	}

}