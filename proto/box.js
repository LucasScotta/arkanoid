'use strict'
/* globals require*/
require(['globals',
		'constants',
		'factory/powers'], function (globals, constants, PowerUp) {
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

					const power = NewPower(this.pos.x + this.size.w / 2- 15, this.pos.y + this.size.h)
					}
					Object.assign(power, this.power)
					globals.powers.push(PowerUp())
				}
				this.borrar()
			}
		}
		/**
		 * Borra una caja y cambia la propiedad 'index' de las restantes para que el for del que
		 * viene no falle.
		 */
		borrar() {

			globals.boxes.splice(globals.boxes.indexOf(this), 1)

			for (let i = 0; i < globals.boxes.length; i += 1) {
			
				globals.boxes[i].index = i
			}

			this.$div.remove()
		}
	}
})