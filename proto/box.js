/* globals boxes, powers, PowerUp, container, powerUps, */
window.Box = class Box {
	constructor(options) {
		Object.assign(this, options)
	}
	golpear() {

		if (this.power.tipo > 1) {

			const $el = document.createElement('div')
			container.appendChild($el)
			$el.classList.add('power')
			powers.push(new PowerUp({
				pos: {
					x: this.pos.x + this.size.w / 2,
					y: this.pos.y + this.size.h,
				},
				size: {
					w: 5,
					h: 5,
				},
				tipo: this.power.tipo,
				index: 0,
				$el,
				caracter: this.power.caracter,
			}))
		}
		this.borrar()
	}
	borrar() {

		const clear = boxes.indexOf(this)
		boxes.splice(clear, 1)

		for (let i = 0; i < boxes.length; i += 1) {
		
			boxes[i].index = i
		}

		return this.$el.remove()
	}
}

function randomOf(list) {

	const ix = Math.floor(Math.random() * list.length)
	return list[ix]
}

window.randomPowerUp = function randomPowerUp() {

	return randomOf(powerUps)
}