/* globals $nave, naveWidth, require */
require(['modules/mouse',
	'game',], function (mouse, game) {
window.widthTypes = {
	S: {
		w: 60,
	},
	M: {
		w: 100,
	},
	L: {
		w: 140,
	},
}
const naveImg = document.createElement('img')
naveImg.style.width = `100px`
naveImg.style.height = `15px`
naveImg.style.borderRadius = '1em'
naveImg.src = 'img/nave.png'
$nave.appendChild(naveImg)
const nave = {
	$el: $nave,
	size: {
		w: 100,
		h: 15,
	},
	pos: {
		x: game.size.w / 2 - naveWidth / 2,
		y: game.pos.y + game.size.h - 40,
	},
	/**
	 * Alarga o achica la nave segun corresponda
	 */
	setWidthType: function (widthType) {

		this.pos.x -= (widthType.w - this.size.w) / 2
		this.size.w = widthType.w
		if (this.pos.x + this.size.w >= game.pos.x + game.size.w - game.size.b) {
			this.pos.x = game.pos.x + game.size.w - game.size.b - this.size.w
		}
		else if(this.pos.x <= game.pos.x + game.size.b) {
			this.pos.x = game.pos.x + game.size.b
		}
		this.$el.style.width = `${this.size.w}px`
		this.$el.style.left  = `${this.pos.x}px`
	},
	/**
	 * Reinicia los powerUps de la nave
	 */
	reiniciar: function () {

		return this.size.w = 100
	},
	/**
	 * Mueve la nave al mover el mouse y guarda las coordenadas de la misma en X/Y de este
	 * mismo objeto
	 */
	mover: function (x, y) {

		const mapTop = game.pos.y
		const mapBorder = game.size.b
		const mapRight = game.pos.x + game.size.w
		const mapBottom = game.pos.y + game.size.h
		const mapLeft = game.pos.x

		if (x <= mapRight  - mapBorder
		&&	x >= mapLeft   + mapBorder
		&&	y <= mapBottom - mapBorder
		&&	y >= mapTop    + mapBorder
		&& game.config.level < 7) {

			if (x >= mapRight -  mapBorder - this.size.w / 2) {

				x = mapRight - this.size.w - mapBorder
				this.pos.x = x
				this.$el.style.left = `${x}px`
			}
			else if (x <= mapLeft + this.size.w / 2 + mapBorder) {

				x = mapLeft + mapBorder
				this.pos.x = x
				this.$el.style.left = `${x}px`
			}
			else {

				x -= this.size.w / 2
				this.pos.x = x
				this.$el.style.left = `${x}px`
			}
		}
	},
	/**
	 * Pinta la nave al inicio del juego, despues de ganar y al perder una vida
	 */
	pintarNaveInicio: function () {

		mouse.x = game.pos.x + game.size.b + game.size.w / 2
		mouse.y = this.pos.y - 1
		this.$el.style.left = `${this.pos.x}px`
		this.$el.style.top = `${this.pos.y}px`
	},
}

window.naveInicial = parseInt(nave.pos.x)
})