'use strict'
/*globals define*/
define([
	'proto/ball',
	'proto/ball-manager',
	'proto/box-manager',
	'proto/power-up-manager',
	'proto/nave',
	], (NewBall, BallManager, BoxManager, PowerUpManager, Nave) => {
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
		 * El nombre lo dice todo
		 */
		perder(ball, globals) {

			if (this.ballm.estaVacio()) {
				globals.clear()
				this.config.lifes -= 1
				if (this.config.lifes > 0) {

					const primerBall = NewBall()
					this.nave.$el.style.left = `${this.nave.pos.x}px`
					this.nave.$el.style.top  = `${this.nave.pos.y}px`
					primerBall.$el.style.left = `${primerBall.pos.x}px`
					primerBall.$el.style.top  = `${primerBall.pos.y}px`
					this.nave.mover(globals.mouse.x, globals.mouse.y)
					console.log(`Perdiste una vida, quedan ${this.config.lifes}`)
				}
				else {
					if (confirm('Reiniciar?')) {

						this.config.level = 0
						globals.clearAll()
						
						const primerBall = NewBall()
						this.config.lifes = 3
						this.nave.$el.style.left = `${this.nave.pos.x}px`
						this.nave.$el.style.top  = `${this.nave.pos.y}px`
						primerBall.$el.style.left = `${primerBall.pos.x}px`
						primerBall.$el.style.top  = `${primerBall.pos.y}px`
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
				const primerBall = NewBall(this.nave.pos.x + this.nave.size.w / 2, 0 ,0)
				primerBall.$el.style.left = `${primerBall.pos.x}px`
				primerBall.$el.style.top  = `${primerBall.pos.y}px`
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