/* globals boxes, powers, PowerUp, container, powerUps, colors, */
window.Box = class Box {
	constructor(options) {
		Object.assign(this, options)
	}
	golpear() {

		if (this.strong > 0) {
			this.strong -= 1
			this.$el.style.backgroundColor = colors[this.strong]
		}
		else {
			if (this.power) {

				const $el = document.createElement('div')
				$el.innerText = this.power.caracter
				container.appendChild($el)
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

		const clear = boxes.indexOf(this)
		boxes.splice(clear, 1)

		for (let i = 0; i < boxes.length; i += 1) {
		
			boxes[i].index = i
		}

		this.$el.remove()
	}
}

/**
 * Retorna el index de una lista
 */
function randomOf(list) {

	const ix = Math.floor(Math.random() * list.length)
	return list[ix]
}

/**
 * retorna un powerUp random
 */
window.randomPowerUp = function randomPowerUp() {

	return randomOf(powerUps)
}