'use strict'
/* globals define*/
define(['globals',], function (globals) {
window.Gun = class Gun {
	constructor(options) {
		Object.assign(this, options)
	}
	/**
	 * Hace pum
	 */
	disparar() {
		if (this.shots > 0 && !this.activo) {
			if (globals.guns.indexOf(this) === 0) {
				this.pos.x = globals.game.nave.pos.x + 10
				this.pos.y = globals.game.nave.pos.y
			}
			else {
				this.pos.x = globals.game.nave.pos.x + globals.game.nave.size.w - 10
				this.pos.y = globals.game.nave.pos.y
			}
			document.getElementById('container').appendChild(this.$el)
			this.activo = true
		}
	}
	/**
	 * Saca los disparos del juego y los lleva a 0
	 */
	clearGun() {
		this.$el.remove()
		globals.guns.splice(globals.guns.indexOf(this), 1)
	}
		/**
	 * Elimina el arma al quedarse sin disparos o descuenta un disparo
	 */
	clearShot() {
		this.shots -= 1
		this.activo = false
		this.$el.remove()
		if (this.shots === 0) this.clearGun()
	}
	/**
	 * retorna si el disparo toca el borde superior de la pantalla
	 */
	disparoTocaBorde() {
		const top = globals.game.pos.y + globals.game.size.b
		const disparoT = this.pos.y
		return disparoT <= top
	}
	/**
	 * retorna si el disparo toca una caja
	 */
	disparoToca(box) {
		const disparoT = this.pos.y
		const disparoR = this.pos.x + this.size.w
		const disparoL = this.pos.x
		const boxB = box.pos.y + box.size.h
		const boxL = box.pos.x
		const boxR = box.pos.x + box.size.w
		return disparoT === boxB && disparoR >= boxL && disparoL <= boxR
	}
	pintar() {
		this.$el.style.left = `${this.pos.x}px`
		this.$el.style.top  = `${this.pos.y}px`
	}
	/**
	 * update...
	 */
	update() {
		if (this.activo) {
			this.pintar()
			this.pos.y -= 2
			for (const box of globals.game.boxm.getItems()) {
				if (this.disparoToca(box)) {
					box.golpear()
					this.clearShot()
				}
			}

			if (this.disparoTocaBorde()) {
					this.clearShot()
				}
		}
		else {
			if (globals.guns.indexOf(this) === 0) {
				this.pos.x = globals.game.nave.pos.x + 10
				this.pos.y = globals.game.nave.pos.y
			}
			else {
				this.pos.x = globals.game.nave.pos.x + globals.game.nave.size.w - 10
				this.pos.y = globals.game.nave.pos.y
			}
		}
	}
}
})