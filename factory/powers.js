'use strict'
/*globals define*/
define(['proto/power-up',
		'proto/nave-width-types'], (PowerUp, NAVE_WIDTH_TYPES) => {
	const createElement = (caracter) => {
		const $el = document.createElement('div')
		$el.innerText = caracter
		$el.classList.add('power')
		document.getElementById('container').appendChild($el)
		return $el
	}
	return (x, y, caracter, game) => {
		const power = {
			pos: {
				x: x,
				y: y,
			},
			size: {
				w: 15,
				h: 25,
			},
			$el: createElement(caracter),
			activar: function() {
			throw new Error('falta implementar')
			},
			/**
			 * Agranda la nave y no deja que las bolas se peguen a ella.
			 */
			agrandar: function() {

				game.nave.setWidthType(NAVE_WIDTH_TYPES.L)
				this.despegar()
			},
			/**
			 * Hace que las bolas no se peguen al tocar la nave.
			 */
			despegar: function() {
				for (let ball of game.ballm.getBalls()) {
					ball.despegar()
					if (ball.config.dirX === 0 && ball.config.dirY === 0) {

						ball.config.dirX = 1
						ball.config.dirY = -1
					}
				}
			},
			pintar: function() {
				this.$el.style.left = `${this.pos.x}px`
				this.$el.style.top  = `${this.pos.y}px`
			},
		}
		return new PowerUp(power)
	}
})