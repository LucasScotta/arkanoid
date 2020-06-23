'use strict'
/* globals define*/
define(['globals',], function (globals) {
	return class PowerUp {
		constructor(options) {
			Object.assign(this, options)
		}
		activar() {
			throw new Error('falta implementar')
		}
		/**
		 * Agranda la nave y no deja que las bolas se peguen a ella.
		 */
		agrandar() {

			globals.game.nave.setWidthType(globals.widthTypes.L)
			this.despegar()
		}
		/**
		 * Achica la nave y no deja que las bolas se peguen a ella.
		 */
		achicar() {

			globals.game.nave.setWidthType(globals.widthTypes.S)
			this.despegar()
		}
		/**
		 * Hace que las bolas no se peguen al tocar la nave.
		 */
		despegar() {
			for (let ball of globals.game.ballm.getBalls()) {
				ball.despegar()
				if (ball.config.dirX === 0&& ball.config.dirY === 0) {

					ball.config.dirX = 1
					ball.config.dirY = -1
				}
			}
		}
		pintar() {
			this.$el.style.left = `${this.pos.x}px`
			this.$el.style.top  = `${this.pos.y}px`
		}
		/**
		 * Hace caer los powerUps cuando estan en pantalla
		 */
		update(i) {

			if (this.tocaBordeInferior()) {

				this.borrar()
				globals.game.powerm.remover(this)
				return i - 1
			}
			else if (this.tocaNave()) {

				this.activar()
				this.borrar()
				globals.game.powerm.remover(this)
				return i - 1
			}
			else {
				this.pintar()
				this.pos.y += 2
			}
		}
		borrar() {
			this.$el.remove()
		}
		/**
		 * Borra el powerUp cuando llega a la punta del mapa
		 */
		tocaBordeInferior() {

			const mapBottom = globals.game.pos.y + globals.game.size.h
			const mapBorder = globals.game.size.b
			return  this.pos.y + this.size.h >= mapBottom - mapBorder
		}
		/**
		 * Aplica el powerUp en cuestion cuando toca la nave
		 */
		tocaNave() {
			const nave = globals.game.nave
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