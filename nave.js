const nave = {
	$el: $nave,
	size: {
		w: 100,
		h: 15,
	},
	pos: {
		x: game.size.w / 2 - naveWidth / 2,
		y: game.pos.y + game.size.h - 40,
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
	mover: function (x, y) {

		const mapTop = game.pos.y
		const mapRight = game.pos.x + game.size.w
		const mapBottom = game.pos.y + game.size.h
		const mapLeft = game.pos.x
		const mapBorder = game.size.b

		if (x <= mapRight
		&&	x >= mapLeft
		&&	y <= mapBottom
		&&	y >= mapTop
		&&	game.config.lifes > 0
		&&	game.config.level < 7) {
			if (game.config.ballDirX === 0 && game.config.ballDirY === 0) {

				if (x <= mapLeft + mapBorder + this.size.w / 2) {

					if(x <= mapLeft + mapBorder + $balls[0].getBoundingClientRect().width / 2) balls[0].pos.x = mapLeft + mapBorder
					else balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2

					this.pos.x = mapLeft + mapBorder
					this.$el.style.left = mapLeft + mapBorder + 'px'
				}
				else if (x >= mapRight - mapBorder - this.size.w / 2) {

					if (x >= mapRight - mapBorder - $balls[0].getBoundingClientRect().width / 2) balls[0].pos.x = mapRight - mapBorder - $balls[0].getBoundingClientRect().width
					else balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2

					this.pos.x = mapRight - mapBorder - this.size.w
					this.$el.style.left = mapRight - mapBorder - this.size.w + 'px'
				}
				else {

					balls[0].pos.x = x - $balls[0].getBoundingClientRect().width / 2
					this.pos.x = x - this.size.w / 2
					this.$el.style.left = x - this.size.w / 2 + 'px'
				}
			}
			else {

				if (x >= mapRight -  mapBorder - this.size.w / 2) {

					x = mapRight - this.size.w - mapBorder
					this.pos.x = x
					this.$el.style.left = `${x}px`
				}
				else if (x <= mapLeft + this.size.w / 2 + mapBorder) {

					x = mapLeft + mapBorder
					this.pos.x = x
					this.$el.style.left = `${x}px`
				}
				else {

					x -= this.size.w / 2
					this.pos.x = x
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