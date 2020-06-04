const nave = {
	size: {
		w: 100,
		h: 15,
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
	mover: function () {

	},
	/**
	 * Reinicia los powerUps de la nave
	 */
	reiniciar: function () {

		return this.size.w = 100
	},
}