'use strict'
/* globals define*/
define(['globals',], function (globals) {
	return class PowerUp {
		constructor(options) {
			Object.assign(this, options)
			this.pintar()
		}
		activar() {
			throw new Error('falta implementar')
		}
		/**
		 * Agranda la nave y no deja que las bolas se peguen a ella.
		 */
		agrandar() {

			game.nave.setWidthType(globals.widthTypes.L)
			this.despegar()
		}
		/**
		 * Achica la nave y no deja que las bolas se peguen a ella.
		 */
		achicar() {

			game.nave.setWidthType(globals.widthTypes.S)
			this.despegar()
		}
		/**
		 * Hace que las bolas no se peguen al tocar la nave.
		 */
		despegar() {
			for (let ball of game.ballm.getBalls()) {
				ball.despegar()
				if (ball.config.dirX === 0 && ball.config.dirY === 0) {

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