'use strict'
/*globals define*/
define([
	'factory/balls',
	'proto/ball-manager',
	'proto/box-manager',
	'proto/power-up-manager',
	'proto/nave',
	'factory/boxes',
	'proto/nave-width-types',
	], (ballFactory, BallManager, BoxManager, PowerUpManager, Nave, boxFactory, NAVE_WIDTH_TYPES) => {
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
			this.initLvl(this.config.level)
		}
		/**
		 *
		 */
		addBall() {
			const ball = ballFactory(0, 0, 0, 0)
			this.nave.addBall(ball)
			this.ballm.agregar(ball)
		}
		initLvl(level) {
			let posX = this.pos.x + this.size.b * 2
			let posY = this.pos.y + this.size.b * 2

			for (let i = 0; i < level + 3; i += 1) {
				
				for (let j = 0; j <= 8; j += 1) {
					const box = boxFactory(posX, posY, this, NAVE_WIDTH_TYPES)
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
		perder(ball, mouse) {

			this.ballm.remover(ball)

			if (this.ballm.estaVacio()) {
				this.clearAll()
				this.config.lifes -= 1
				if (this.config.lifes > 0) {

					this.nave.reset(this)
					this.nave.mover(mouse, this)
					this.addBall()
					console.log(`Perdiste una vida, quedan ${this.config.lifes}`)
				}
				else {
					if (confirm('Reiniciar?')) {

						this.config.level = 0
						this.clearCheat()
						this.addBall()
						this.config.lifes = 3
						this.nave.pintar()
						this.nave.mover(mouse, this)
					}
				}
			}		}
		/**
		 * El nombre lo dice todo
		 */
		ganar() {

			this.config.level += 1

			if (this.config.level <= 6) {

				this.clearAll()
				this.initLvl(this.config.level)
				this.addBall()
				this.nave.size.w = 100

				console.log(`Pasaste al nivel: ${this.config.level}`)
			}
			if (this.config.level === 7) {
				this.clearAll()
				this.config.level += 1
				console.log(`Felicitaciones, terminaste un juego en desarrollo... Manco asqueroso`)
			}
		}
		clearPowers() {
			this.powerm.reset()
			this.nave.setWidthType(NAVE_WIDTH_TYPES.M)
		}
		clearGuns() {
			this.nave.gun.restartGun()
		}
		clearBalls() {
			this.ballm.reset()
		}
		clearAll () {
			this.clearBalls()
			this.clearGuns()
			this.clearPowers()
		}
		clearCheat () {
			this.clearGuns()
			this.clearPowers()
			this.boxm.reset()
		}
	}
})
