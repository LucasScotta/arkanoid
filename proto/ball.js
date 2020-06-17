'use strict'
/* globals define*/
define([
	'globals',
	'modules/game',
	'modules/nave',
	'factory/balls',
], (
	globals,
	game,
	nave,
	NewBall,
) => {
	return class Ball {
		constructor (options) {
			Object.assign(this, options)
		}
		/**
		 * retorna si la bola golpea de arriba o abajo en una caja
		 */
		estaTocandoDeArribaYAbajo(box) {

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
		}
		/**
		 * retorna si la bola golpea de costado en una caja
		 */
		estaTocandoDeIzquierdaYDerecha(box) {

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
		}
		/**
		 * retorna si la bola golpea algun borde de costado del mapa
		 */
		tocaBordeCostados(game) {

			const mapBorder = game.size.b
			const mapRight = game.pos.x + game.size.w
			const mapLeft = game.pos.x
			const r = this.pos.x + this.size.w
			const l = this.pos.x

			return  r >= mapRight - mapBorder
				||	l <= mapLeft + mapBorder
		}
		/**
		 * retorna si la bola golpea de el borde superior del mapa
		 */
		tocaBordeSuperior(game) {

			const mapBorder = game.size.b
			const mapTop = game.pos.y
			const t = this.pos.y

			return t <= mapTop + mapBorder
		}
		/**
		 * retorna si la bola golpea en el borde inferior del mapa
		 */
		tocaBordeInferior(game) {

			const mapBorder = game.size.b
			const mapBottom = game.pos.y + game.size.h
			const b = this.pos.y + this.size.h

			return b >= mapBottom - mapBorder
		}
		/**
		 * retorna si la bola golpea la division izquierda de la nave
		 */
		estaTocandoDerecha(nave) {

			const naveWidth = nave.size.w
			const naveRight = nave.pos.x + naveWidth
			const b = this.pos.y + this.size.h
			const r = this.pos.x + this.size.w
			const l = this.pos.x

			return  b === nave.pos.y
				&&	l <=  naveRight
				&&	r >	  naveRight - nave.size.w / 3
		}
		/**
		 * retorna si la bola golpea la division derecha de la nave
		 */
		estaTocandoIzquierda(nave) {

			const naveLeft = nave.pos.x
			const naveWidth = nave.size.w
			const b = this.pos.y + this.size.h
			const r = this.pos.x + this.size.w
			const l = this.pos.x

			return  b === nave.pos.y
				&&	r >=  naveLeft
				&&	l <   naveLeft + naveWidth / 3
		}
		/**
		 * retorna si la bola golpea la division del medio de la nave
		 */
		estaTocandoMedio(nave) {

			const naveRight = nave.pos.x + nave.size.w
			const naveLeft  = nave.pos.x
			const naveWidth = nave.size.w
			const b = this.pos.y + this.size.h
			const r = this.pos.x + this.size.w
			const l = this.pos.x

			return  b === nave.pos.y
				&&	r <=  naveRight - naveWidth / 3
				&&	l >=  naveLeft  + naveWidth / 3
		}
		/**
		 * Cambia la direccion de la bola en Y contrariamente y en X hacia la derecha
		 */
		rebotarDerecha() {

			this.config.ballDirY *= -1
			this.config.ballDirX  = 1
		}
		/**
		 * Cambia la direccion de la bola en Y contrariamente y en X hacia la izquierda
		 */
		rebotarIzquierda() {

			this.config.ballDirY *= -1
			this.config.ballDirX  = -1
		}
		/**
		 * Cambia la direccion de la bola en Y contrariamente
		 */
		rebotarMedio() {

			this.config.ballDirY *= -1
		}
		/**
		 * Esta funcion hace que la bola se mueva por el mapa sumandole la direccion
		 */
		mover() {

			if (game.config.level < 7) {
				this.pos.x += this.config.ballDirX
				this.pos.y += this.config.ballDirY
				this.$el.style.left = `${this.pos.x}px`
				this.$el.style.top = `${this.pos.y}px`
			}
		}
		/**
		 * Se encarga de que la bola se mueva correctamente al estar pegada a la nave.
		 * Puede ser al comenzar el juego o al tener activada la propiedad 'goma' de este
		 * objeto
		 */
		moverInicio() {

			let x = globals.mouse.x
			let y = globals.mouse.y
			const mapWidth  = game.size.w
			const mapHeight = game.size.h
			const mapBorder = game.size.b
			const mapLeft   = game.pos.x
			const mapTop    = game.pos.y
			const mapRight  = game.pos.x + mapWidth
			const mapBottom = game.pos.y + mapHeight
			const ballWidth = this.size.w

			if (this.config.ballDirX === 0 && this.config.ballDirY === 0
			&&  x >= mapLeft   + mapBorder + nave.size.w / 2
			&&  x <= mapRight  - mapBorder - nave.size.w / 2
			&&  y >= mapTop    + mapBorder
			&&  y <= mapBottom - mapBorder
			&&	game.config.level < 7) {
				this.pos.x = x - ballWidth / 2 - 0.5
				this.$el.style.left = `${this.pos.x}px`
			}
		}
		/**
		 * Da vuelta la direccion de la bola en Y
		 */
		rebotarVerticalmente() {

			this.config.ballDirY *= -1
		}
		/**
		 * Da vuelta la direccion de la bola en X
		 */
		rebotarHorizontalmente() {

			this.config.ballDirX *= -1
		}
		/**
		 * Funciona unicamente antes de comenzar el nivel, al empezar el juego, al
		 * pasar de nivel, o al perder todas las vidas y reiniciar el juego del nivel 1.
		 * Comienza el juego
		 */
		arrancar(x, y) {

			const mapTop    = game.pos.y
			const mapRight  = game.pos.x + game.size.w
			const mapBottom = game.pos.y + game.size.h
			const mapLeft   = game.pos.x
			const mapBorder = game.size.b
			const mapWidth  = game.size.w

			if (this.config.ballDirY === 0 && this.config.ballDirX === 0
			&&	x <= mapRight - mapBorder
			&& 	x >= mapTop + mapBorder
			&&  y <= mapBottom - mapBorder
			&&	y >= mapTop + mapBorder) {

				if (this.pos.x <= mapLeft + mapBorder + mapWidth / 2) {

					this.config.ballDirX = -1
					this.config.ballDirY = -1
				}
				else {

					this.config.ballDirX =  1
					this.config.ballDirY = -1
				}
			}
		}
		/**
		 * Agrega una bola tomando el X e Y de este objeto
		 */
		agregarBall() {
			globals.balls.push(NewBall(this.pos.x, this.pos.y,
				this.config.ballDirX * -1, this.config.ballDirY * -1))
		}
		/**
		 * Hace que la bola no rebote al golpear contra la nave
		 */
		noRebota() {

			this.pos.y = nave.pos.y - 16
			this.config.ballDirX = 0
			this.config.ballDirY = 0
		}
		/**
		 * Cambia la propiedad goma por verdadero para que no rebote la bola al tocar la nave
		 */
		pegar() {
			if (this.goma) this.despegar()
			else this.goma = true
		}
		/**
		 * Cambia la propiedad goma por verdadero para que rebote la bola al tocar la nave
		 */
		despegar() {

			this.goma = false
		}
		clearBall() {
			globals.balls.splice(globals.balls.indexOf(this), 1)
			this.$el.remove()
		}
		/**
		 * update...
		 */
		update() {

			// Bola golpeando contra los bordes
			if (this.tocaBordeCostados(game)) {

				this.rebotarHorizontalmente()
			}

			if (this.tocaBordeSuperior(game)) {

				this.rebotarVerticalmente()
			}

			if (this.tocaBordeInferior(game)) {

				this.config.ballDirY = 0
				this.config.ballDirX = 0
				return game.perder(this, this.$el)
			}

			// Bola golpeando las cajas:
			for (const box of globals.boxes) {
			// Si esta tocando de arriba/abajo en una caja, rebota verticalmente
				const golpeV = this.estaTocandoDeArribaYAbajo(box)
			// Si esta tocando de derecha/izquierda en una caja, rebota horizontalmente (funciona a medias)
				const golpeH = this.estaTocandoDeIzquierdaYDerecha(box)
				if (golpeV) {
					this.rebotarVerticalmente()
					this.pos.y += this.config.ballDirY
				}
				if (golpeH) {
					this.rebotarHorizontalmente()
					this.pos.x += this.config.ballDirX
				}
				if (golpeV || golpeH) box.golpear()
			}

			//Rebotes de bola contra la nave:
			//1 => ----[--]
			if (this.estaTocandoDerecha(nave)) {

				if (this.goma) this.noRebota()
				else this.rebotarDerecha()
			}

			//2 => [--]----
			if (this.estaTocandoIzquierda(nave)) {

				if (this.goma) this.noRebota()
				else this.rebotarIzquierda()
			}

			//3 --[--]--
			if (this.estaTocandoMedio(nave)) {

				if (this.goma) this.noRebota()
				else this.rebotarMedio()
			}

			//mover la bola
			this.mover()
		}
	}
})