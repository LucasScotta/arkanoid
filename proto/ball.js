const ballProto = {
	__proto__: proto2,
	estaTocandoDeArribaYAbajo: function ($box) {

		const l = this.pos.x
		const r = this.pos.x + this.size.w
		const b = this.pos.y + this.size.h
		const t = this.pos.y
		const boxRect  = $box.getBoundingClientRect()

		if (t ===  boxRect.bottom
		&&	r >	  boxRect.left
		&&	l <	  boxRect.right
		||	b === boxRect.top
		&&	r >	  boxRect.left
		&&	l <	  boxRect.right) {

			return true
		}
		else return false
	},
	
	estatocandoDeIzquierdaYDerecha: function ($box) {

		const l = this.pos.x
		const r = this.pos.x + this.size.w
		const b = this.pos.y + this.size.h
		const t = this.pos.y
		const boxRecto = $box.getBoundingClientRect()

		if (r === boxRect.left
		&&	t <=  boxRect.bottom
		&&	b >=	boxRect.top
		||	l === boxRect.right
		&&	t <=	boxRect.bottom
		&&	b >=	boxRect.top) {

			return true
		}
		else return false

	},
}
function proto2() {

}
function initBall(ball) {
	ball.__proto__ = ballProto
	return ball
}