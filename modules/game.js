/* globals define*/
define(['modules/mouse',
		'modules/nave',
		'index.js',
		'crear-blocks',
		'modules/balls',
		'crear-blocks',
		'crear-blocks',
		'mover',
		'modules/nave'], function (mouse, nave, ballN, clearAll,
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
				balls[0].pos.y = nave.pos.y - ball.size.w - 1
				nave.pos.x = naveInicial
				nave.$el.style.left = `${nave.pos.x}px`
				nave.$el.style.top  = `${nave.pos.y}px`
				balls[0].$el.style.left = `${ball.pos.x}px`
				balls[0].$el.style.top  = `${ball.pos.y}px`
				nave.mover(mouse.x, mouse.y)
				console.log(`Perdiste una vida, quedan ${this.config.lifes}`)
			}
			else {
				if (confirm('Reiniciar?')) {

					this.config.level = 0
					clearAll()
					
					ballN()
					this.config.lifes = 3
					balls[0].pos.x = ballInicial
					balls[0].pos.y = nave.pos.y - ball.size.w - 1
					nave.pos.x = naveInicial
					nave.$el.style.left = `${nave.pos.x}px`
					nave.$el.style.top  = `${nave.pos.y}px`
					balls[0].$el.style.left = `${ball.pos.x}px`
					balls[0].$el.style.top  = `${ball.pos.y}px`
					nave.mover(mouse.x, mouse.y)
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
			balls[0].pos.x = nave.pos.x + nave.size.w / 2
			balls[0].pos.y = nave.pos.y - ball.size.w - 1
			balls[0].$el.style.left = `${ball.pos.x}px`
			balls[0].$el.style.top  = `${ball.pos.y}px`
			balls[0].config.ballDirY = 0
			balls[0].config.ballDirX = 0
			blocks(this.config.level)
			nave.size.w = 100

			console.log(`Pasaste al nivel: ${this.config.level}`)
		}
		if (this.config.level === 7) {

			this.config.level += 1
			console.log(`Felicitaciones, terminaste un juego en desarrollo... Manco asqueroso`)
		}
	}
}})