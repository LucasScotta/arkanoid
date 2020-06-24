'use strict'
/* globals define*/
define(['proto/gun',
	],
	(Gun) => {
	const setupElement = () => {
		const $el = document.getElementById('nave')
		return $el
	}
	return class Nave {
		constructor(game) {
			this.$el = setupElement()
			this.size = {
				w: 100,
				h: 15,
			}
			this.pos = {
				x: game.size.w / 2 - this.size.w / 2,
				y: game.pos.y + game.size.h - 40,
			}
			this.game = game
			this.gun = new Gun({
				pos: {
					x: this.pos.x,
					y: this.pos.y,
				},
				size: {
					w: 5,
					h: 20,
				},
			})
			this.pintar()
		}
		pintar() {
			this.$el.style.left  = `${this.pos.x}px`
			this.$el.style.top = `${this.pos.y}px`
		}
		/**
		 * Alarga o achica la nave segun corresponda
		 */
		setWidthType(widthType) {

			this.pos.x -= (widthType.w - this.size.w) / 2
			this.size.w = widthType.w
			if (this.pos.x + this.size.w >= this.game.pos.x + this.game.size.w - this.game.size.b) {
				this.pos.x = this.game.pos.x + this.game.size.w - this.game.size.b - this.size.w
			}
			else if(this.pos.x <= this.game.pos.x + this.game.size.b) {
				this.pos.x = this.game.pos.x + this.game.size.b
			}
			this.$el.style.width = `${this.size.w}px`
			this.pintar()
		}
		/**
		 * Reinicia los powerUps de la nave
		 */
		reiniciar() {

			return this.size.w = 100
		}
		addBall(ball) {
			const x = this.pos.x + this.size.w / 2
			const y = this.pos.y - 2
			ball.setPoss(x, y)
		}
		/**
		 * Mueve la nave al mover el mouse y guarda las coordenadas de la misma en X/Y de este
		 * mismo objeto
		 */
		mover(mouse, game) {
			let x = mouse.x
			const mapBorder = game.size.b
			const mapRight = game.pos.x + game.size.w
			const mapLeft = game.pos.x

			if (game.config.level < 7) {

				if (x >= mapRight -  mapBorder - this.size.w / 2) {

					x = mapRight - this.size.w - mapBorder
					this.pos.x = x
					this.pintar()
				}
				else if (x <= mapLeft + this.size.w / 2 + mapBorder) {

					x = mapLeft + mapBorder
					this.pos.x = x
					this.pintar()
				}
				else {

					x -= this.size.w / 2
					this.pos.x = x
					this.pintar()
				}
			}
		}
		/**
		 * Pinta la nave al inicio del juego, despues de ganar y al perder una vida
		 */
		pintarNaveInicio(game) {

			this.pos.x = game.pos.x + game.size.b + game.size.w / 2
			this.pos.y = this.pos.y - 1
			this.pintar()
		}
	}
})