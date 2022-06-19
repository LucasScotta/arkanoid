'use strict'
/* globals define*/
define([], function () {
	const createElement = (caracter) => {
		const $el = document.createElement('div')
		$el.innerText = caracter
		$el.classList.add('power')
		document.getElementById('container').appendChild($el)
		return $el
	}
	return class PowerUp {
		constructor(options) {
			if (typeof options.power !== 'object') {
				throw new Error(`Esperaba un Power y me diste ${typeof options.power}`)
			}
			if (typeof options.power.activar !== 'function') {
				throw new Error('Esperaba una funcion')
			}
			Object.assign(this, options)
			this.$el = createElement(options.power.caracter)
			this.pintar()
		}
		activar() {
			return this.power.activar()
		}
		/**
		 * Hace caer los powerUps cuando estan en pantalla
		 */
		update(game, nave) {

			if (this.tocaBordeInferior(game)) {

				this.borrar()
				return game.powerm.remover(this)
			}
			else if (this.toca(nave)) {
				this.activar()
				this.borrar()
				return game.powerm.remover(this)
			}
			else {
				this.pintar()
				this.pos.y += 2
			}
		}
		pintar() {
			this.$el.style.left = `${this.pos.x}px`
			this.$el.style.top  = `${this.pos.y}px`
		}
		borrar() {
			this.$el.remove()
		}
		/**
		 * Borra el powerUp cuando llega a la punta del mapa
		 */
		tocaBordeInferior(game) {

			const mapBottom = game.pos.y + game.size.h
			const mapBorder = game.size.b
			return  this.pos.y + this.size.h >= mapBottom - mapBorder
		}
		/**
		 * Aplica el powerUp en cuestion cuando toca la nave
		 */
		toca(nave) {
			const powerL = this.pos.x
			const powerT = this.pos.y
			const powerB = this.pos.y + this.size.h
			const powerR = this.pos.x + this.size.w
			const naveR  = nave.pos.x + nave.size.w
			const naveB  = nave.pos.y + nave.size.h
			const naveT  = nave.pos.y
			const naveL  = nave.pos.x
			return (powerB >= naveT
				&&	powerT <= naveB
				&&	powerR >= naveL
				&&	powerL <= naveR)
		}
	}
})
