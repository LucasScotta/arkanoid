'use strict'
/* globals require*/
require(['globals',
		'constants',
		'factory/powers'], function (globals, constants, powerUp) {
	return class Box {
		constructor(options) {
			Object.assign(this, options)
		}
		golpear() {

			if (this.strong > 0) {
				this.strong -= 1
				this.$img.src = constants.imgsBox[this.strong]
			}
			else {
				if (this.power) {

					const power = powerUp(this.pos.x + this.size.w / 2 - 15, this.pos.y + this.size.h)
					globals.game.powerm.agregar(power)
				}
				this.borrar()
			}
		}
		/**
		 * Borra la caja
		 */
		borrar() {
			this.$div.remove()
		}
	}
})