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
		ballDirX: 0,
		ballDirY: 0,
		lifes: 3,
		level: 1,
		pause: false,
	},
	/**
	 * El nombre lo dice todo
	 */
	perder: function (ball, $ball) {

		const naveLeft   = nave.pos.x
		const naveY 	 = nave.pos.y
		const naveWidth  = nave.size
		const mapaX 	 = this.pos.x
		const mapaY 	 = this.pos.y
		const mapaWidth = this.size.w
		const mapaHeight = this.size.h
		const mapaBorder = this.size.b
		ballRect = $ball.getBoundingClientRect()
		this.config.ballDirX = 0
		this.config.ballDirY = 0
		this.config.lifes -= 1

		if (this.config.lifes > 0) {


			ball.pos.x = ballInicial
			ball.pos.y = nave.pos.y - ball.size.w - 1
			nave.$el.style.left = `${nave.pos.x}px`
			ball.$el.style.left = `${ball.pos.x}px`
			ball.$el.style.top  = `${ball.pos.y}px`
			console.log(`Perdiste una vida, quedan ${game.config.lifes}`)
		}
		else {
			if (confirm('Reiniciar?')) {

				nave.pos.x = naveInicial
				ball.pos.x = ballInicial
				ball.pos.y = nave.pos.y - ball.size.w - 1
				ball.$el.style.left = `${ball.pos.x}px`
				ball.$el.style.top  = `${ball.pos.y}px`
			}
		}
	},
	ganar: function (ball, $ball) {

		this.config.level += 1

		if (this.config.level <= 6) {

			ball.pos.x = nave.pos.x + nave.size.w / 2
			ball.pos.y = nave.pos.y - ball.size.w - 1
			this.config.ballDirY = 0
			this.config.ballDirX = 0
			blocks(this.config.level)
			console.log(`Pasaste al nivel: ${this.config.level}`)
		}
		if (this.config.level === 7) {
			this.config.level += 1
			console.log(`Felicitaciones, terminaste un juego en desarrollo... Manco asqueroso`)
			return this.config.pause = true
		}
	}
}