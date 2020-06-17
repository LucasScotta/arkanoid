'use strict'
/* globals define*/
define('modules/game',[
		'globals',
		'constants',
		'modules/new-ball',
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
	perder: function (ball, $ball) {

		if (globals.balls.length === 1) {
			clear.clear()
			this.config.lifes -= 1
			if (this.config.lifes > 0) {

				NewBall(constants.ballInicial, this.nave.pos.y - ball.size.w - 1, 0, 0)
				this.nave.pos.x = constants.naveInicial
				this.nave.$el.style.left = `${this.nave.pos.x}px`
				this.nave.$el.style.top  = `${this.nave.pos.y}px`
				globals.balls[0].$el.style.left = `${ball.pos.x}px`
				globals.balls[0].$el.style.top  = `${ball.pos.y}px`
				this.nave.mover(globals.mouse.x, globals.mouse.y)
				console.log(`Perdiste una vida, quedan ${this.config.lifes}`)
			}
			else {
				if (confirm('Reiniciar?')) {

					this.config.level = 0
					clear.clearAll()
					
					NewBall(constants.ballInicial, this.nave.pos.y - ball.size.w - 1, 0, 0)
					this.config.lifes = 3
					this.nave.pos.x = constants.naveInicial
					this.nave.$el.style.left = `${this.nave.pos.x}px`
					this.nave.$el.style.top  = `${this.nave.pos.y}px`
					globals.balls[0].$el.style.left = `${ball.pos.x}px`
					globals.balls[0].$el.style.top  = `${ball.pos.y}px`
					this.nave.mover(globals.mouse.x, globals.mouse.y)
				}
			}
		}
		else {
			globals.balls.splice(globals.balls.indexOf(ball), 1)
			$ball.remove()
		}
	},
	/**
	 * El nombre lo dice todo
	 */
	ganar: function (ball) {

		this.config.level += 1

		if (this.config.level <= 6) {

			clear.clearAll()
			NewBall(this.nave.pos.x + this.nave.size.w / 2, 0 ,0)
			globals.balls[0].$el.style.left = `${ball.pos.x}px`
			globals.balls[0].$el.style.top  = `${ball.pos.y}px`
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