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
		level: 5,
		pause: false,
	},
	/**
	 * El nombre lo dice todo
	 */
	perder: function (ball, $ball) {


		const naveLeft = nave.pos.x
		const naveY = nave.pos.y
		const naveWidth = nave.size
		ballRect = $ball.getBoundingClientRect()
		this.config.ballDirX = 0
		this.config.ballDirY = 0
		this.config.lifes -= 1
		if (this.config.lifes > 0) {

			ball.pos.x = naveLeft + nave.size.w / 2
			ball.pos.y = naveY - ball.size.w - 1
			console.log(`Te queda(n) ${this.config.lifes} vidas.`)
		}

		else {
			if (confirm('Volver a empezar?')) {

				clearBlocks()

				nave.pos.x = this.size.w / 2 - nave.size.w / 2
				nave.pos.y = this.size.h - 40
				$nave.style.left = this.size.w / 2 - nave.size.w / 2 + 'px'
				$nave.style.top = this.size.h - 40 + 'px'
				this.config.lifes = 3
				this.config.ballDirX = 0
				this.config.ballDirY = 0
				ball.pos.x = naveLeft + nave.size.w / 2
				ball.pos.y = nave.pos.y - ballRect.height - 1
				balls[0].pos.x = nave.pos.x + nave.size.w / 2
				balls[0].pos.y = nave.pos.y - nave.size.h - 1
				this.config.level = 1
				blocks(this.config.level)
			}
			else console.log('exit')
		}
	}
}