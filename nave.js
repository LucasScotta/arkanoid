const nave = {
	$el: $nave,
	size: {
		w: 100,
		h: 15,
	},
	pos: {
		x: container.getBoundingClientRect().width / 2 - $nave.getBoundingClientRect().width / 2,
		y: container.getBoundingClientRect().bottom - 40,
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
	 * Reinicia los powerUps de la nave
	 */
	reiniciar: function () {

		return this.size.w = 100
	},
	/**
	 * Mueve la nave al mover el mouse
	 */
	mover: function (cont, contBorde, x, y) {
		if (x <= cont.right
		&&	x >= cont.left
		&&	y <= cont.bottom
		&&	y >= cont.top
		&&	game.config.lifes > 0
		&&	game.config.level < 7) {
			if (game.config.ballDirX === 0 && game.config.ballDirY === 0) {

				if (x <= cont.left + contBorde + this.size.w / 2) {

					if(x <= cont.left + contBorde + $balls[0].getBoundingClientRect().width / 2) balls[0].pos.x = cont.left + contBorde
					else balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2

					this.$el.style.left = cont.left + contBorde + 'px'
				}
				else if (x >= cont.right - contBorde - this.size.w / 2) {

					if (x >= cont.right - contBorde - $balls[0].getBoundingClientRect().width / 2) balls[0].pos.x = cont.right - contBorde - $balls[0].getBoundingClientRect().width
					else balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2

					this.$el.style.left = cont.right - contBorde - this.size.w + 'px'
				}
				else {

					balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2
					this.$el.style.left = x - this.size.w / 2 + 'px'
				}
			}
			else {

				if (x >= cont.right -  contBorde - this.size.w / 2) {

					x = cont.right - this.size.w - contBorde
					this.$el.style.left = `${x}px`
				}
				else if (x <= cont.left + this.size.w / 2 + contBorde) {

					x = cont.left + contBorde
					this.$el.style.left = `${x}px`
				}
				else {

					x -= this.size.w / 2
					this.$el.style.left = `${x}px`
				}
			}
		}
	},
	/**
	 * Pinta la nave al inicio del juego, despues de ganar y al perder una vida
	 */
	 pintarNaveInicio: function () {
	 	
	 	this.$el.style.left = `${this.pos.x}px`
	 	this.$el.style.top = `${this.pos.y}px`
	 },
}