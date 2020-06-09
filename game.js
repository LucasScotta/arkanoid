/* globals nave, ballInicial, naveInicial, clearBlocks, blocks, clearPowers, clearBalls, balls*/
const game = {
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

		clearPowers()
		this.config.ballDirX = 0
		this.config.ballDirY = 0
		this.config.lifes -= 1

		if (this.config.lifes > 0) {


			ball.pos.x = ballInicial
			ball.pos.y = nave.pos.y - ball.size.w - 1
			nave.pos.x = naveInicial
			nave.$el.style.left = `${nave.pos.x}px`
			nave.$el.style.top  = `${nave.pos.y}px`
			ball.$el.style.left = `${ball.pos.x}px`
			ball.$el.style.top  = `${ball.pos.y}px`
			console.log(`Perdiste una vida, quedan ${game.config.lifes}`)
		}
		else {
			if (confirm('Reiniciar?')) {

				clearPowers()
				this.config.level = 0
				clearBlocks()
				this.config.lifes = 3
				ball.pos.x = ballInicial
				ball.pos.y = nave.pos.y - ball.size.w - 1
				nave.pos.x = naveInicial
				nave.$el.style.left = `${nave.pos.x}px`
				nave.$el.style.top  = `${nave.pos.y}px`
				ball.$el.style.left = `${ball.pos.x}px`
				ball.$el.style.top  = `${ball.pos.y}px`
			}
		}
	},
	/**
	 * El nombre lo dice todo
	 */
	ganar: function (ball) {

		clearPowers()
		this.config.level += 1

		if (this.config.level <= 6) {

			ball.pos.x = nave.pos.x + nave.size.w / 2
			ball.pos.y = nave.pos.y - ball.size.w - 1
			ball.$el.style.left = `${ball.pos.x}px`
			ball.$el.style.top  = `${ball.pos.y}px`
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
}