/* globals $nave, game, naveWidth, mouse */
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
	 * Mueve la nave al mover el mouse y guarda las coordenadas de la misma en X/Y de este
	 * mismo objeto
	 */
	mover: function (x, y) {

		const mapTop = game.pos.y
		const mapBorder = game.size.b
		const mapRight = game.pos.x + game.size.w
		const mapBottom = game.pos.y + game.size.h
		const mapLeft = game.pos.x

		if (x <= mapRight  - mapBorder
		&&	x >= mapLeft   + mapBorder
		&&	y <= mapBottom - mapBorder
		&&	y >= mapTop    + mapBorder
		&& game.config.level < 7) {

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
	},
	/**
	 * Pinta la nave al inicio del juego, despues de ganar y al perder una vida
	 */
	 pintarNaveInicio: function () {

	 	mouse.x = game.pos.x + game.size.b + game.size.w / 2
	 	mouse.y = this.pos.y - 1
	 	this.$el.style.left = `${this.pos.x}px`
	 	this.$el.style.top = `${this.pos.y}px`
	 },
}

const naveInicial = parseInt(nave.pos.x)