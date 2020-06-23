'use strict'
/*globals define*/
define([
	'factory/balls',
	'proto/ball-manager',
	'proto/box-manager',
	'proto/power-up-manager',
	'proto/nave',
	'factory/boxes',
	], (ballFactory, BallManager, BoxManager, PowerUpManager, Nave, boxFactory) => {
		/**
		 * Clase principal del proyecto.
		 */
	return class Game {
		constructor() {
			this.pos = {
				x: 0,
				y: 0,
			}
			this.size = {
				w: 700,
				h: 700,
				b: 10,
			}
			this.config = {
				lifes: 3,
				level: 1,
				pause: false,
			}
			this.nave = new Nave(this)
			this.ballm = new BallManager()
			this.boxm = new BoxManager()
			this.powerm = new PowerUpManager()
		}
		/**
		 *
		 */
		start() {
			this.ballm.agregar(ballFactory(0, 0, 0, 0))
		}
		initLvl() {
			let posX = this.pos.x + this.size.b * 2
			let posY = this.pos.y + this.size.b * 2

			for (let i = 0; i < this.config.level + 3; i += 1) {
				
				for (let j = 0; j <= 8; j += 1) {
					const box = boxFactory(posX, posY)
					this.boxm.agregar(box)
					posX += 75
					if (j === 8) {

						posX = this.pos.x + this.size.b * 2
						posY += 40
					}
				}
			}
		}
		/**
		 * El nombre lo dice todo
		 */
		perder(ball, globals) {

			if (this.ballm.estaVacio()) {
				globals.clear()
				this.config.lifes -= 1
				if (this.config.lifes > 0) {

					const primerBall = ballFactory(0, 0, 0, 0)
					this.nave.pintar()
					primerBall.pintar()
					this.nave.mover(globals.mouse.x, globals.mouse.y)
					console.log(`Perdiste una vida, quedan ${this.config.lifes}`)
				}
				else {
					if (confirm('Reiniciar?')) {

						this.config.level = 0
						globals.clearAll()
						
						const primerBall = ballFactory(0, 0, 0, 0)
						this.config.lifes = 3
						this.nave.pintar()
						primerBall.pintar()
						this.nave.mover(globals.mouse.x, globals.mouse.y)
					}
				}
			}
			else {
				this.ballm.remover(ball)
			}
		}
		/**
		 * El nombre lo dice todo
		 */
		ganar(globals) {

			this.config.level += 1

			if (this.config.level <= 6) {

				globals.clearAll()
				const primerBall = ballFactory(this.nave.pos.x + this.nave.size.w / 2, 0 ,0)
				primerBall.pintar()
				this.nave.size.w = 100

				console.log(`Pasaste al nivel: ${this.config.level}`)
			}
			if (this.config.level === 7) {

				this.config.level += 1
				console.log(`Felicitaciones, terminaste un juego en desarrollo... Manco asqueroso`)
			}
		}
	}
})