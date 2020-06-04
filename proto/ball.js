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
		const r = this.pos.x + this.size.w
		const l = this.pos.x

		return  r >= rect.right - borde
			||	l <= rect.left + borde
	},
	/**
	 * retorna si la bola golpea de el borde superior del mapa
	 */
	tocaBordeSuperior: function (rect, borde) {
		const t = this.pos.y

		return t <= rect.top + borde
	},
	/**
	 * retorna si la bola golpea en el borde inferior del mapa
	 */
	tocaBordeInferior: function (rect, borde) {
		const b = this.pos.y + this.size.h

		return b >= rect.bottom - borde
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

		return  b === naveRect.top
			&&	l <=  naveRect.right
			&&	r >	  naveRect.right - naveRect.width / 3
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

		return  b === naveRect.top
			&&	r >=  naveRect.left
			&&	l <   naveRect.left + naveRect.width / 3
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

		return  b === naveRect.top
			&&	r <=  naveRect.right - naveRect.width / 3
			&&	l >=  naveRect.left  + naveRect.width / 3
	},
	/**
	 * Cambia la direccion de la bola en Y contrariamente y en X hacia la derecha
	 */
	rebotarDerecha: function () {

		ballDirY *= -1
		ballDirX  = 1
	},
	/**
	 * Cambia la direccion de la bola en Y contrariamente y en X hacia la izquierda
	 */
	rebotarIzquierda: function () {

		ballDirY *= -1
		ballDirX  = -1
	},
	/**
	 * Cambia la direccion de la bola en Y contrariamente
	 */
	rebotarMedio: function () {

		ballDirY *= -1
	},
	/**
	 * Esta funcion hace que la bola se mueva por el mapa sumandole la direccion a
	 * la bola
	 */
	mover: function () {

		this.pos.x += ballDirX
		this.pos.y += ballDirY
		this.$el.style.left = `${this.pos.x}px`
		this.$el.style.top = `${this.pos.y}px`
	},
	/**
	 * Da vuelta la direccion de la bola en Y
	 */
	rebotarVerticalmente: function () {

		ballDirY *= -1
	},
	/**
	 * Da vuelta la direccion de la bola en X
	 */
	rebotarHorizontalmente: function () {

		ballDirX *= -1
	},
	arrancar: function (x, y, cont, contBorde, naveRect) {

		if (ballDirY === 0 && ballDirX === 0
		&&	x <= cont.bottom - contBorde
		&& 	x >= cont.top + contBorde
		&&  y <= cont.right - contBorde
		&&	y >= cont.left + contBorde) {

			if (balls[0].pos.x <= naveRect.left + naveRect.width / 2) {

				ballDirX = -1
				ballDirY = -1
			}
			else {

				ballDirX = 1
				ballDirY = -1
			}
		}
	},
}

function initBall(ball) {
	ball.__proto__ = ballProto
	return ball
}