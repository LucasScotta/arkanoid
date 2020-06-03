'use non-strict';

function hasUseStrict() {

	'use strict';

	return this === undefined
}

const ballProto = {
	size : {
			w: 15,
			h: 15,
		},
	estaTocandoDeArribaYAbajo: function ($box) {

		const l = this.pos.x
		const r = this.pos.x + this.size.w
		const b = this.pos.y + this.size.h
		const t = this.pos.y
		const boxRect  = $box.getBoundingClientRect()

		return t === boxRect.bottom
		&&	r >	  boxRect.left
		&&	l <	  boxRect.right
		||	b === boxRect.top
		&&	r >	  boxRect.left
		&&	l <	  boxRect.right
	},
	
	estaTocandoDeIzquierdaYDerecha: function ($box) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const boxRect = $box.getBoundingClientRect()

		return r === boxRect.left
		&&	t <=  boxRect.bottom
		&&	b >=  boxRect.top
		||	l === boxRect.right
		&&	t <=  boxRect.bottom
		&&	b >=  boxRect.top
	},
	/**
	 * retorna si la bola golpea el borde del mapa
	 *
	 * @param {} rect 
	 */
	tocaBordeCostados: function (rect, borde) {
		const r = this.pos.x + this.size.w
		const l = this.pos.x

		return r >= rect.right - borde
		||	l <= rect.left + borde
	},
	tocaBordeSuperior: function (rect, borde) {
		const t = this.pos.y

		return t <= rect.top + borde
	},
	tocaBordeInferior: function (rect, borde) {
		const b = this.pos.y + this.size.h

		return b >= rect.bottom - borde
	},
	estaTocandoIzquierda: function (nave) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const naveRect = nave.getBoundingClientRect()

		return b === naveRect.top
		&&	l <=  naveRect.right
		&&	r >	  naveRect.right - naveRect.width / 3
	},
	estaTocandoDerecha: function (nave) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const naveRect = nave.getBoundingClientRect()

		return b === naveRect.top
		&&	r >=  naveRect.left
		&&	l <   naveRect.left + naveRect.width / 3
	},
	estaTocandoMedio: function (nave) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const naveRect = nave.getBoundingClientRect()

		return b === naveRect.top
		&&	r <=  naveRect.right - naveRect.width / 3
		&&	l >=  naveRect.left  + naveRect.width / 3
	},
	rebotarDerecha: function () {

		ballDirY *= -1
		ballDirX  = 1
	},
	rebotarIzquierda: function () {

		ballDirY *= -1
		ballDirX  = -1
	},
	rebotarMedio: function () {

		ballDirY *= -1
	},
	mover: function () {

		this.pos.x += ballDirX
		this.pos.y += ballDirY
		this.$el.style.left = `${this.pos.x}px`
		this.$el.style.top = `${this.pos.y}px`
	},
	rebotarVerticalmente: function () {

		ballDirY *= -1
	},
	rebotarHorizontalmente: function () {

		ballDirX *= -1
	},
}

function initBall(ball) {
	ball.__proto__ = ballProto
	return ball
}