const ballProto = {
	size : {
			w: 15,
			h: 15,
		},
	/**
	 * retorna si la bola golpea de arriba o abajo en una caja
	 */
	estaTocandoDeArribaYAbajo: function ($box) {

		const l = this.pos.x
		const r = this.pos.x + this.size.w
		const b = this.pos.y + this.size.h
		const t = this.pos.y
		const boxRect  = $box.getBoundingClientRect()

		return  t === boxRect.bottom
			&&	r >	  boxRect.left
			&&	l <	  boxRect.right
			||	b === boxRect.top
			&&	r >	  boxRect.left
			&&	l <	  boxRect.right
	},
	/**
	 * retorna si la bola golpea de costado en una caja
	 */
	estaTocandoDeIzquierdaYDerecha: function ($box) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const boxRect = $box.getBoundingClientRect()

		return  r === boxRect.left
			&&	t <=  boxRect.bottom
			&&	b >=  boxRect.top
			||	l === boxRect.right
			&&	t <=  boxRect.bottom
			&&	b >=  boxRect.top
	},
	/**
	 * retorna si la bola golpea algun borde de costado del mapa
	 */
	tocaBordeCostados: function (rect, borde) {

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
	tocaBordeSuperior: function (rect, borde) {

		const mapTop = game.pos.y
		const t = this.pos.y

		return t <= mapTop + mapBorder
	},
	/**
	 * retorna si la bola golpea en el borde inferior del mapa
	 */
	tocaBordeInferior: function (rect, borde) {

		const mapBottom = game.pos.y + game.size.h
		const b = this.pos.y + this.size.h

		return b >= mapBottom - mapBorder
	},
	/**
	 * retorna si la bola golpea la division izquierda de la nave
	 */
	estaTocandoIzquierda: function ($nave) {


		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const naveRect = $nave.getBoundingClientRect()

		return  b === nave.pos.y
			&&	l <=  naveRect.right
			&&	r >	  naveRect.right - nave.size.w / 3
	},
	/**
	 * retorna si la bola golpea la division derecha de la nave
	 */
	estaTocandoDerecha: function ($nave) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const naveRect = $nave.getBoundingClientRect()

		return  b === nave.pos.y
			&&	r >=  naveRect.left
			&&	l <   naveRect.left + nave.size.w / 3
	},
	/**
	 * retorna si la bola golpea la division del medio de la nave
	 */
	estaTocandoMedio: function ($nave) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const naveRect = $nave.getBoundingClientRect()

		return  b === nave.pos.y
			&&	r <=  naveRect.right - nave.size.w / 3
			&&	l >=  naveRect.left  + nave.size.w / 3
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
	arrancar: function (x, y) {

		const mapTop = game.pos.y
		const mapRight = game.pos.x + game.size.w
		const mapBottom = game.pos.y + game.size.h
		const mapLeft = game.pos.x
		const naveWidth = nave.size.w

		if (game.config.ballDirY === 0 && game.config.ballDirX === 0
		&&	x <= mapRight - mapBorder
		&& 	x >= mapTop + mapBorder
		&&  y <= mapBottom - mapBorder
		&&	y >= mapTop + mapBorder) {

			if (balls[0].pos.x <= naveRect.left + naveWidth / 2) {

				game.config.ballDirX = -1
				game.config.ballDirY = -1
			}
			else {

				game.config.ballDirX = 1
				game.config.ballDirY = -1
			}
		}
	},
}

function initBall(ball) {
	ball.__proto__ = ballProto
	return ball
}