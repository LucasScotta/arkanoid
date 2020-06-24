'use strict'
/*globals define*/
define(['proto/power-up',], (PowerUp) => {
	const createElement = (caracter) => {
		const $el = document.createElement('div')
		$el.innerText = caracter
		$el.classList.add('power')
		document.getElementById('container').appendChild($el)
		return $el
	}
	return (x, y, caracter, game, globals) => {
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

				game.nave.setWidthType(globals.widthTypes.L)
				this.despegar()
			},
			/**
			 * Achica la nave y no deja que las bolas se peguen a ella.
			 */
			achicar: function() {

				game.nave.setWidthType(globals.widthTypes.S)
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