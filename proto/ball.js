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

		if (t === boxRect.bottom
		&&	r >	  boxRect.left
		&&	l <	  boxRect.right
		||	b === boxRect.top
		&&	r >	  boxRect.left
		&&	l <	  boxRect.right) return true
		else return false
	},
	
	estaTocandoDeIzquierdaYDerecha: function ($box) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const boxRect = $box.getBoundingClientRect()

		if (r === boxRect.left
		&&	t <=  boxRect.bottom
		&&	b >=  boxRect.top
		||	l === boxRect.right
		&&	t <=  boxRect.bottom
		&&	b >=  boxRect.top) return true
		else return false

	},
	estaTocandoIzquierda: function (nave) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const naveRect = nave.getBoundingClientRect()

		if (b === naveRect.top
		&&	l <=  naveRect.right
		&&	r >	  naveRect.right - naveRect.width / 3) return true
		else return false
	},
	tocaBordeCostados: function (rect, borde) {
		const r = this.pos.x + this.size.w
		const l = this.pos.x

		if (r >= rect.right - borde
		||	l <= rect.left + borde) return true
		else return false
	},
	tocaBordeSuperior: function (rect, borde) {
		const t = this.pos.y

		if (t <= rect.top + borde) return true
		else return false
	},
	tocaBordeInferior: function (rect, borde) {
		const b = this.pos.y + this.size.h

		if (b >= rect.bottom - borde) return true
		else return false
	},
	estaTocandoDerecha: function (nave) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const naveRect = nave.getBoundingClientRect()

		if (b === naveRect.top
		&&	r >=  naveRect.left
		&&	l <   naveRect.left + naveRect.width / 3) return true
		else return false
	},
	estaTocandoMedio: function (nave) {

		const t = this.pos.y
		const b = this.pos.y + this.size.h
		const r = this.pos.x + this.size.w
		const l = this.pos.x
		const naveRect = nave.getBoundingClientRect()

		if (b === naveRect.top
		&&	r <=  naveRect.right - naveRect.width / 3
		&&	l >=  naveRect.left  + naveRect.width / 3) return true
		else return false
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