'use strict'
/* globals define*/
define('modules/game',[
		'globals',
		'constants',
		'factory/balls',
		'modules/clear',], function (
			globals,
			constants,
			NewBall, 
			clear) {
	return {
	pos: {
		x: 0,
		y: 0,
	},
	size: {
		w: 700,
		h: 700,
		b: 10,
	},
	config: {
		lifes: 3,
		level: 1,
		pause: false,
	},
	/**
	 * El nombre lo dice todo
	 */
	perder: function (ball) {

		if (globals.game.ballm.estaVacio()) {
			clear.clear()
			this.config.lifes -= 1
			if (this.config.lifes > 0) {

				const primerBall = NewBall(constants.ballInicial, globals.game.nave.pos.y - ball.size.w - 1, 0, 0)
				globals.game.nave.pos.x = constants.naveInicial
				globals.game.nave.$el.style.left = `${globals.game.nave.pos.x}px`
				globals.game.nave.$el.style.top  = `${globals.game.nave.pos.y}px`
				primerBall.$el.style.left = `${primerBall.pos.x}px`
				primerBall.$el.style.top  = `${primerBall.pos.y}px`
				globals.game.nave.mover(globals.mouse.x, globals.mouse.y)
				console.log(`Perdiste una vida, quedan ${this.config.lifes}`)
			}
			else {
				if (confirm('Reiniciar?')) {

					this.config.level = 0
					clear.clearAll()
					
					const primerBall = NewBall(constants.ballInicial, globals.game.nave.pos.y - ball.size.w - 1, 0, 0)
					this.config.lifes = 3
					globals.game.nave.pos.x = constants.naveInicial
					globals.game.nave.$el.style.left = `${globals.game.nave.pos.x}px`
					globals.game.nave.$el.style.top  = `${globals.game.nave.pos.y}px`
					primerBall.$el.style.left = `${primerBall.pos.x}px`
					primerBall.$el.style.top  = `${primerBall.pos.y}px`
					globals.game.nave.mover(globals.mouse.x, globals.mouse.y)
				}
			}
		}
		else {
			globals.game.ballm.remover(ball)
		}
	},
	/**
	 * El nombre lo dice todo
	 */
	ganar: function () {

		this.config.level += 1

		if (this.config.level <= 6) {

			clear.clearAll()
			const primerBall = NewBall(globals.game.nave.pos.x + globals.game.nave.size.w / 2, 0 ,0)
			primerBall.$el.style.left = `${primerBall.pos.x}px`
			primerBall.$el.style.top  = `${primerBall.pos.y}px`
			globals.game.nave.size.w = 100

			console.log(`Pasaste al nivel: ${this.config.level}`)
		}
		if (this.config.level === 7) {

			this.config.level += 1
			console.log(`Felicitaciones, terminaste un juego en desarrollo... Manco asqueroso`)
		}
	}
}
})