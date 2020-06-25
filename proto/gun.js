'use strict'
/* globals define*/
define([],
	() => {
	const setUp = () => {
		const arma = document.createElement('div')
		arma.classList.add('gun')
		return arma
	}
	return class Gun {
		constructor(options) {
			Object.assign(this, options)
			this.$el = setUp()
			this.shots = 0
		}
		/**
		 * Hace pum
		 */
		disparar(game) {
			if (this.shots > 0 && !this.activo) {
				this.pos.x = game.nave.pos.x + game.nave.size.w / 2
				this.pos.y = game.nave.pos.y
				document.getElementById('container').appendChild(this.$el)
				this.activo = true
			}
		}
		addShots() {
			this.shots += 5
		}
		restartGun() {
			this.shots = 0
			this.clearGun()
		}
		/**
		 * Saca los disparos del juego y los lleva a 0
		 */
		clearGun() {
			this.$el.remove()
		}
		/**
		 * Elimina el arma al quedarse sin disparos o descuenta un disparo
		 */
		clearShot() {
			this.shots -= 1
			this.activo = false
			this.clearGun()
		}
		/**
		 * retorna si el disparo toca el borde superior de la pantalla
		 */
		shotHitBorder(game) {
			const top = game.pos.y + game.size.b
			const disparoT = this.pos.y
			return disparoT <= top
		}
		/**
		 * retorna si el disparo toca una caja
		 */
		shotHit(box) {
			const disparoT = this.pos.y
			const disparoR = this.pos.x + this.size.w
			const disparoL = this.pos.x
			const boxT = box.pos.y
			const boxB = box.pos.y + box.size.h
			const boxL = box.pos.x
			const boxR = box.pos.x + box.size.w
			return disparoT <= boxB && disparoT >= boxT && disparoR >= boxL && disparoL <= boxR
		}
		pintar() {
			this.$el.style.left = `${this.pos.x}px`
			this.$el.style.top  = `${this.pos.y}px`
		}
		reiniciarPosicion(game) {
			this.pos.x = game.nave.pos.x + game.nave.size.w / 2
			this.pos.y = game.nave.pos.y
		}
		/**
		 * update...
		 */
		update(game) {
			if (this.activo) {
				this.pintar()
				this.pos.y -= 6
				for (const box of game.boxm.getItems()) {
					if (this.shotHit(box)) {
						box.golpear(game)
						this.clearShot()
					}
				}

				if (this.shotHitBorder(game)) {
						this.clearShot()
					}
			}
			else {
				this.reiniciarPosicion(game)
			}
		}
	}
})