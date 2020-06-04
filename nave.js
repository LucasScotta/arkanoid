const nave = {
	size: {
		w: 100,
		h: 15,
	},
	pos: {
		x: 0,
		y: 0,
	},
	/**
	 * Alarga la nave al agarrar el powerUp 'alargar'
	 */
	alargar: function () {

		return this.size.w += 50
	},
	/**
	 * Achica la nave al agarrar el powerUp 'achicar'
	 */
	achicar: function () {

		return this.size.w -= 50
	},
	/**
	 * Mueve la nave al mover el mouse
	 */
	mover: function (cont, contBorde, x, y, naveRect, $nave) {
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

					$nave.style.left = cont.left + contBorde + 'px'
				}
				else if (x >= cont.right - contBorde - naveRect.width / 2) {

					if (x >= cont.right - contBorde - $balls[0].getBoundingClientRect().width / 2) balls[0].pos.x = cont.right - contBorde - $balls[0].getBoundingClientRect().width
					else balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2

					$nave.style.left = cont.right - contBorde - naveRect.width + 'px'
				}
				else {

					balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2
					$nave.style.left = x - naveRect.width / 2 + 'px'
				}
			}
			else {

				if (x >= cont.right -  contBorde - this.size.w / 2) {

					x = cont.right - this.size.w - contBorde
					$nave.style.left = `${x}px`
				}
				else if (x <= cont.left + this.size.w / 2 + contBorde) {

					x = cont.left + contBorde
					$nave.style.left = `${x}px`
				}
				else {

					x -= this.size.w / 2
					$nave.style.left = `${x}px`
				}
			}
		}
	},
	/**
	 * Reinicia los powerUps de la nave
	 */
	reiniciar: function () {

		return this.size.w = 100
	},
}