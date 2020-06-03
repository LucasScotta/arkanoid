const ballProto = {
	__proto__: proto2,
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
		&&	l <	  boxRect.right) {

			return true
		}
		else return false
	},
	
	estaTocandoDeIzquierdaYDerecha: function ($box) {

		const l = this.pos.x
		const r = this.pos.x + this.size.w
		const b = this.pos.y + this.size.h
		const t = this.pos.y
		const boxRect = $box.getBoundingClientRect()

		if (r === boxRect.left
		&&	t <=  boxRect.bottom
		&&	b >=  boxRect.top
		||	l === boxRect.right
		&&	t <=  boxRect.bottom
		&&	b >=  boxRect.top) return true
		else return false

	},
	rebotarVerticalmente: function () {

		ballDirY *= -1
	},
	rebotarHorizontalmente: function () {

		ballDirX *= -1
	},
	estaTocandoIzquierda: function (nave) {

		const l = this.pos.x
		const r = this.pos.x + this.size.w
		const b = this.pos.y + this.size.h
		const t = this.pos.y
		const NaveRect = nave.getBoundingClientRect()

		if (b === naveRect.top
		&&	l <=  naveRect.right
		&&	r >	  naveRect.right - naveRect.width / 3) return true
		else return false
	},
	estaTocandoDerecha: function (nave) {

		const l = this.pos.x
		const r = this.pos.x + this.size.w
		const b = this.pos.y + this.size.h
		const t = this.pos.y
		const NaveRect = nave.getBoundingClientRect()

		if (b === naveRect.top
		&&	r >=  naveRect.left
		&&	l <   naveRect.left + naveRect.width / 3) return true
		else return false
	},
	estaTocandoMedio: function (nave) {

		const l = this.pos.x
		const r = this.pos.x + this.size.w
		const b = this.pos.y + this.size.h
		const t = this.pos.y
		const NaveRect = nave.getBoundingClientRect()

		if (b === naveRect.top
		&&	r <=	naveRect.right - naveRect.width / 3
		&&	l >=	naveRect.left  + naveRect.width / 3) return true
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

		ball.pos.x += ballDirX
		ball.pos.y += ballDirY
		$ball.style.left = `${ball.pos.x}px`
		$ball.style.top = `${ball.pos.y}px`
	},
}

function proto2() {

}

function initBall(ball) {
	ball.__proto__ = ballProto
	return ball
}