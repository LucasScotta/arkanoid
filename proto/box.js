'use strict'
/* globals define*/
define(['factory/powers'], function (powerUpFactory) {

	const setUp = () => {
		const $el = document.createElement('div')
		$el.classList.add('box')
		document.getElementById('container').appendChild($el)
		return $el
	}
	const MAX_TIPO = 8
	return class Box {
		constructor(options) {
			Object.assign(this, options)
			this.$el = setUp()
			this.strong = Math.floor(Math.random() * MAX_TIPO)
			this.pintar()
		}
		pintar() {
			this.$el.setAttribute('data-tipo', this.strong)
			this.$el.style.left = `${this.pos.x}px`
			this.$el.style.top = `${this.pos.y}px`
		}
		golpear(game) {

			if (this.strong > 0) {
				this.strong -= 1
				this.pintar()
			}
			else {
				if (this.power) {

					const power = powerUpFactory(this.pos.x + this.size.w / 2 - 15, this.pos.y + this.size.h,this.power, game)
					game.powerm.agregar(power)
				}
				this.borrar(game)
			}
		}
		/**
		 * Borra la caja
		 */
		borrar(game) {
			game.boxm.remover(this)
			this.$el.remove()
		}
	}
})