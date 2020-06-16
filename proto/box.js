/* globals require*/
require(['modules/powers',
		'modules/imgs-box',
		'modules/boxes',
		'proto/powerUps',
		'modules/power-ups',
		'modules/randomOf'], function (powers, imgsBox, boxes, PowerUp, powerUps, randomOf) {
window.Box = class Box {
	constructor(options) {
		Object.assign(this, options)
	}
	golpear() {

		if (this.strong > 0) {
			this.strong -= 1
			this.$img.src = imgsBox[this.strong]
		}
		else {
			if (this.power) {

				const $el = document.createElement('div')
				$el.innerText = this.power.caracter
				document.getElementById('container').appendChild($el)
				$el.classList.add('power')
				const power = {
					pos: {
						x: this.pos.x + this.size.w / 2- 15 ,
						y: this.pos.y + this.size.h,
					},
					size: {
						w: 15,
						h: 25,
					},
					index: 0,
					$el: $el,
				}
				Object.assign(power, this.power)
				powers.push(new PowerUp(power))
			}
			this.borrar()
		}
	}
	/**
	 * Borra una caja y cambia la propiedad 'index' de las restantes para que el for del que
	 * viene no falle.
	 */
	borrar() {

		boxes.splice(boxes.indexOf(this), 1)

		for (let i = 0; i < boxes.length; i += 1) {
		
			boxes[i].index = i
		}

		this.$div.remove()
	}
}

/**
 * retorna un powerUp random
 */
window.randomPowerUp = function randomPowerUp() {

	return randomOf(powerUps)
}
})