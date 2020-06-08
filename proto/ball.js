/* globals mapBorder, game, mouse, boxes, nave, */
const ballProto = {
	size : {
			w: 15,
			h: 15,
		},
	/**
	 * retorna si la bola golpea de arriba o abajo en una caja
	 */
	estaTocandoDeArribaYAbajo: function (box) {

		const l = this.pos.x
		const r = this.pos.x + this.size.w
		const b = this.pos.y + this.size.h
		const t = this.pos.y
		const bL = box.pos.x
		const bR = box.pos.x + box.size.w
		const bB = box.pos.y + box.size.h
		const bT = box.pos.y

		return  t === bB
			&&	r >=  bL
			&&	l <=  bR
			||	b === bT
			&&	r >=  bL
			&&	l <=  bR
	},
	/**
	 * retorna si la bola golpea de costado en una caja
	 */
	estaTocandoDeIzquierdaYDerecha: function (box) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const bL = box.pos.x
		const bR = box.pos.x + box.size.w
		const bB = box.pos.y + box.size.h
		const bT = box.pos.y

		return  r === bL
			&&	t <=  bB
			&&	b >=  bT
			||	l === bR
			&&	t <=  bB
			&&	b >=  bT
	},
	/**
	 * retorna si la bola golpea algun borde de costado del mapa
	 */
	tocaBordeCostados: function (game) {

		const mapRight = game.pos.x + game.size.w
		const mapLeft = game.pos.x
		const r = this.pos.x + this.size.w
		const l = this.pos.x

		return  r >= mapRight - mapBorder
			||	l <= mapLeft + mapBorder
	},
	/**
	 * retorna si la bola golpea de el borde superior del mapa
	 */
	tocaBordeSuperior: function (game) {

		const mapTop = game.pos.y
		const t = this.pos.y

		return t <= mapTop + mapBorder
	},
	/**
	 * retorna si la bola golpea en el borde inferior del mapa
	 */
	tocaBordeInferior: function (game) {

		const mapBottom = game.pos.y + game.size.h
		const b = this.pos.y + this.size.h

		return b >= mapBottom - mapBorder
	},
	/**
	 * retorna si la bola golpea la division izquierda de la nave
	 */
	estaTocandoDerecha: function (nave) {

		const naveWidth = nave.size.w
		const naveRight = nave.pos.x + naveWidth
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x

		return  b === nave.pos.y
			&&	l <=  naveRight
			&&	r >	  naveRight - nave.size.w / 3
	},
	/**
	 * retorna si la bola golpea la division derecha de la nave
	 */
	estaTocandoIzquierda: function (nave) {

		const naveLeft = nave.pos.x
		const naveWidth = nave.size.w
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x

		return  b === nave.pos.y
			&&	r >=  naveLeft
			&&	l <   naveLeft + naveWidth / 3
	},
	/**
	 * retorna si la bola golpea la division del medio de la nave
	 */
	estaTocandoMedio: function (nave) {

		const naveRight = nave.pos.x + nave.size.w
		const naveLeft  = nave.pos.x
		const naveWidth = nave.size.w
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x

		return  b === nave.pos.y
			&&	r <=  naveRight - naveWidth / 3
			&&	l >=  naveLeft  + naveWidth / 3
	},
	/**
	 * Cambia la direccion de la bola en Y contrariamente y en X hacia la derecha
	 */
	rebotarDerecha: function () {

		game.config.ballDirY *= -1
		game.config.ballDirX  = 1
	},
	/**
	 * Cambia la direccion de la bola en Y contrariamente y en X hacia la izquierda
	 */
	rebotarIzquierda: function () {

		game.config.ballDirY *= -1
		game.config.ballDirX  = -1
	},
	/**
	 * Cambia la direccion de la bola en Y contrariamente
	 */
	rebotarMedio: function () {

		game.config.ballDirY *= -1
	},
	/**
	 * Esta funcion hace que la bola se mueva por el mapa sumandole la direccion
	 */
	mover: function () {

			this.pos.x += game.config.ballDirX
			this.pos.y += game.config.ballDirY
			this.$el.style.left = `${this.pos.x}px`
			this.$el.style.top = `${this.pos.y}px`
	},
	moverInicio: function () {

		let x = mouse.x
		const mapWidth  = game.size.w
		const mapHeight = game.size.h
		const mapBorder = game.size.b
		const mapLeft   = game.pos.x
		const mapTop    = game.pos.y
		const mapRight  = game.pos.x + mapWidth
		const mapBottom = game.pos.y + mapHeight
		const ballWidth = this.size.w

		if (game.config.ballDirX === 0 && game.config.ballDirY === 0
		&&  mouse.x >= mapLeft   + mapBorder
		&&  mouse.x <= mapRight  - mapBorder
		&&  mouse.y >= mapTop    + mapBorder
		&&  mouse.y <= mapBottom - mapBorder) {
			if (x <= mapLeft + mapBorder) {

				x = mapLeft + mapBorder
				this.pos.x = x
				this.$el.style.left = `${this.pos.x}px`
			}
			else if (x >= mapRight - mapBorder - ballWidth) {

				x = mapRight - mapBorder - ballWidth
				this.pos.x = x
				this.$el.style.left = `${this.pos.x}px`
			}
			else {

				this.pos.x = x
				this.$el.style.left = `${this.pos.x}px`
			}
		}
	},
	/**
	 * Da vuelta la direccion de la bola en Y
	 */
	rebotarVerticalmente: function () {

		game.config.ballDirY *= -1
	},
	/**
	 * Da vuelta la direccion de la bola en X
	 */
	rebotarHorizontalmente: function () {

		game.config.ballDirX *= -1
	},
	/**
	 * Funciona unicamente antes de comenzar el nivel, al empezar el juego, al
	 * pasar de nivel, o al perder todas las vidas y reiniciar el juego del nivel 1.
	 * Comienza el juego
	 */
	arrancar: function (x, y, game, nave) {

		const mapTop    = game.pos.y
		const mapRight  = game.pos.x + game.size.w
		const mapBottom = game.pos.y + game.size.h
		const mapLeft   = game.pos.x
		const mapBorder = game.size.b
		const naveWidth = nave.size.w

		if (game.config.ballDirY === 0 && game.config.ballDirX === 0
		&&	x <= mapRight - mapBorder
		&& 	x >= mapTop + mapBorder
		&&  y <= mapBottom - mapBorder
		&&	y >= mapTop + mapBorder) {

			if (this.pos.x <= mapLeft + mapBorder + naveWidth / 2) {

				game.config.ballDirX = -1
				game.config.ballDirY = -1
			}
			else {

				game.config.ballDirX =  1
				game.config.ballDirY = -1
			}
		}
	},
	update: function () {

		// Bola golpeando contra los bordes
		if (this.tocaBordeCostados(game)) {

			this.rebotarHorizontalmente()
		}

		if (this.tocaBordeSuperior(game)) {

			this.rebotarVerticalmente()
		}

		if (this.tocaBordeInferior(game)) {
			return game.perder(this, this.$el)
		}

		// Bola golpeando las cajas:
		for (let box of boxes) {

			if (this.estaTocandoDeArribaYAbajo(box)) {
		// Si esta tocando de arriba/abajo en una caja, rebota verticalmente
				this.rebotarVerticalmente()
				return box.borrar()
			}
			if (this.estaTocandoDeIzquierdaYDerecha(box)) {
		// Si esta tocando de derecha/izquierda en una caja, rebota horizontalmente (funciona a medias)
				this.rebotarHorizontalmente()
				return box.borrar()
			}
		}

		//Rebotes de bola contra la $nave:
		//1 => ----[--]
		if (this.estaTocandoDerecha(nave)) {

			this.rebotarDerecha()
		}

		//2 => [--]----
		if (this.estaTocandoIzquierda(nave)) {

			this.rebotarIzquierda()
		}

		//3 --[--]--
		if (this.estaTocandoMedio(nave)) {

			this.rebotarMedio()
		}

		//mover la bola
		this.mover()
	},
}

window.initBall = function initBall(ball) {
	ball.__proto__ = ballProto
	return ball
}