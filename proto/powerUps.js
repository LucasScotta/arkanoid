'use strict'
/* globals define*/
define(['globals',
		'modules/game',
		'modules/nave',], function (globals, game, nave) {
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

			nave.setWidthType(globals.widthTypes.L)
			this.despegar()
		}
		/**
		 * Achica la nave y no deja que las bolas se peguen a ella.
		 */
		achicar() {

			nave.setWidthType(globals.widthTypes.S)
			this.despegar()
		}
		/**
		 * Hace que las bolas no se peguen al tocar la nave.
		 */
		despegar() {
			for (let ball of globals.balls.getBalls()) {
				ball.despegar()
				if (ball.config.dirX === 0&& ball.config.dirY === 0) {

					ball.config.dirX = 1
					ball.config.dirY = -1
				}
			}
		}
		/**
		 * Hace caer los powerUps cuando estan en pantalla
		 */
		update(i) {

			if (this.tocaBordeInferior()) {

				this.$el.remove()
				globals.powers.splice(globals.powers.indexOf(this), 1)
				return i - 1
			}
			else if (this.tocaNave()) {

				this.activar()
				this.$el.remove()
				globals.powers.splice(globals.powers.indexOf(this), 1)
				return i - 1
			}
			else {
				this.$el.style.left = `${this.pos.x}px`
				this.$el.style.top  = `${this.pos.y}px`
				this.pos.y += 2
			}
		}
		/**
		 * Borra el powerUp cuando llega a la punta del mapa
		 */
		tocaBordeInferior() {

			const mapBottom = game.pos.y + game.size.h
			const mapBorder = game.size.b
			return  this.pos.y + this.size.h >= mapBottom - mapBorder
		}
		/**
		 * Aplica el powerUp en cuestion cuando toca la nave
		 */
		tocaNave() {

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