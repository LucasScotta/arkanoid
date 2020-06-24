'use strict'
/* globals define*/
define(['globals',
		'img/box',
		'factory/powers'], function (globals, imgsBox, powerUp) {

	const setUp = () => {
		const $el = document.createElement('div')
		$el.classList.add('box')
		document.getElementById('container').appendChild($el)
		return $el
	}

	return class Box {
		constructor(options) {
			Object.assign(this, options)
			this.$el = setUp()
			this.strong = Math.floor(Math.random() * imgsBox.length)
			this.pintar()
		}
		pintar() {
			this.$el.style.backgroundImage = `url(${imgsBox[this.strong]})`
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

					const power = powerUp(this.pos.x + this.size.w / 2 - 15, this.pos.y + this.size.h, this.power.caracter)
					game.powerm.agregar(power)
				}
				this.borrar()
			}
		}
		/**
		 * Borra la caja
		 */
		borrar() {
			this.$el.remove()
		}
	}
})