/* globals define*/
define('modules/game',[
		'modules/mouse',
		'index',
		'crear-blocks',
		'modules/balls',
		'crear-blocks',
		'crear-blocks',
		'mover',
		'modules/naveInicial'], function (mouse, ballN, clearAll,
								balls, clear, blocks, ballInicial, naveInicial) {
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

		if (balls.length === 1) {
			clear()
			this.config.lifes -= 1
			if (this.config.lifes > 0) {

				ballN()
				balls[0].pos.x = ballInicial
				balls[0].pos.y = this.nave.pos.y - ball.size.w - 1
				this.nave.pos.x = naveInicial
				this.nave.$el.style.left = `${this.nave.pos.x}px`
				this.nave.$el.style.top  = `${this.nave.pos.y}px`
				balls[0].$el.style.left = `${ball.pos.x}px`
				balls[0].$el.style.top  = `${ball.pos.y}px`
				this.nave.mover(mouse.x, mouse.y)
				console.log(`Perdiste una vida, quedan ${this.config.lifes}`)
			}
			else {
				if (confirm('Reiniciar?')) {

					this.config.level = 0
					clearAll()
					
					ballN()
					this.config.lifes = 3
					balls[0].pos.x = ballInicial
					balls[0].pos.y = this.nave.pos.y - ball.size.w - 1
					this.nave.pos.x = naveInicial
					this.nave.$el.style.left = `${this.nave.pos.x}px`
					this.nave.$el.style.top  = `${this.nave.pos.y}px`
					balls[0].$el.style.left = `${ball.pos.x}px`
					balls[0].$el.style.top  = `${ball.pos.y}px`
					this.nave.mover(mouse.x, mouse.y)
				}
			}
		}
		else {
			balls.splice(balls.indexOf(ball), 1)
			$ball.remove()
		}
	},
	/**
	 * El nombre lo dice todo
	 */
	ganar: function (ball) {

		clear()
		this.config.level += 1

		if (this.config.level <= 6) {

			ballN()
			balls[0].pos.x = this.nave.pos.x + this.nave.size.w / 2
			balls[0].pos.y = this.nave.pos.y - ball.size.w - 1
			balls[0].$el.style.left = `${ball.pos.x}px`
			balls[0].$el.style.top  = `${ball.pos.y}px`
			balls[0].config.ballDirY = 0
			balls[0].config.ballDirX = 0
			blocks(this.config.level)
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