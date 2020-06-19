'use strict'
/* globals define*/
define(function () {
	const setupElement = () => {
		const naveImg = document.createElement('img')
		naveImg.style.width = `100px`
		naveImg.style.height = `15px`
		naveImg.style.borderRadius = '1em'
		naveImg.src = 'img/nave.png'
		const $el = document.getElementById('nave')
		$el.appendChild(naveImg)
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
			this.$el.style.left  = `${this.pos.x}px`
		}
		/**
		 * Reinicia los powerUps de la nave
		 */
		reiniciar() {

			return this.size.w = 100
		}
		/**
		 * Mueve la nave al mover el mouse y guarda las coordenadas de la misma en X/Y de este
		 * mismo objeto
		 */
		mover(x, y) {

			const mapTop = this.game.pos.y
			const mapBorder = this.game.size.b
			const mapRight = this.game.pos.x + this.game.size.w
			const mapBottom = this.game.pos.y + this.game.size.h
			const mapLeft = this.game.pos.x

			if (x <= mapRight  - mapBorder
			&&	x >= mapLeft   + mapBorder
			&&	y <= mapBottom - mapBorder
			&&	y >= mapTop    + mapBorder
			&& this.game.config.level < 7) {

				if (x >= mapRight -  mapBorder - this.size.w / 2) {

					x = mapRight - this.size.w - mapBorder
					this.pos.x = x
					this.$el.style.left = `${x}px`
				}
				else if (x <= mapLeft + this.size.w / 2 + mapBorder) {

					x = mapLeft + mapBorder
					this.pos.x = x
					this.$el.style.left = `${x}px`
				}
				else {

					x -= this.size.w / 2
					this.pos.x = x
					this.$el.style.left = `${x}px`
				}
			}
		}
		/**
		 * Pinta la nave al inicio del juego, despues de ganar y al perder una vida
		 */
		pintarNaveInicio() {

			this.pos.x = this.game.pos.x + this.game.size.b + this.game.size.w / 2
			this.pos.y = this.pos.y - 1
			this.$el.style.left = `${this.pos.x}px`
			this.$el.style.top = `${this.pos.y}px`
		}
	}
})