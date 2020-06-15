/* globals define*/
define(['modules/game',
		'modules/nave',
		'modules/width-types',
		'proto/box',
		'modules/powers',
		'modules/balls',
		'modules/guns',
		'proto/gun'], function (game, nave, widthTypes, randomOf, powers, balls, guns, Gun) {
window.bloques = {
	multiplicador: {
		tipo: 2,
		caracter: 'Ⓐ',
		/**
		 * Elije una bola random, toma su posicion y agrega otra bola.
		 */
		activar: function () {
			randomOf(balls).agregarBall()
			this.despegar()
		}
	},
	goma: {
		tipo: 3,
		caracter: 'Ⓖ',
		/**
		 * Hace que cuando toque la nave una bola quede pegada a ella.
		 */
		activar: function () {
			for (let ball of balls) {

				ball.pegar()
			}
		}
	},
	disparo: {
		tipo: 4,
		caracter: 'Ⓓ',
		/**
		 * Le da 5 disparos al jugador, los cuales salen de la nave de uno en uno
		 * nunca podra haber mas de 1 disparo en la pantalla.
		 */
		activar: function () {
			if (guns.length === 0) {
				const init = nave.pos.x + 10
				const arma = document.createElement('div')
				arma.classList.add('gun')
				guns.push(new Gun({
					shots: 5,
					pos: {
						x: init,
						y: 0,
						init: init,
					},
					size: {
						w: 5,
						h: 20,
					},
					activo: false,
					$el: arma,
				}))
			}
			else if (guns.length === 1) {
				const init = nave.pos.x + nave.size.w - 10
				const arma = document.createElement('div')
				arma.classList.add('gun')
				guns.push(new Gun({
					shots: 5,
					pos: {
						x: init,
						y: 0,
						init: init,
					},
					size: {
						w: 5,
						h: 20,
					},
					activo: false,
					$el: arma,
				}))
			}
			this.despegar()
		}
	},
	agrandador: {
		tipo: 5,
		caracter: 'Ⓔ',
		/**
		 * Agranda la nave a 150px.
		 */
		activar: function () {
			this.agrandar()
		}
	},
	achichador: {
		tipo: 6,
		caracter: 'Ⓒ',
		/**
		 * Achica la nave a 50px.
		 */
		activar: function () {
			this.achicar()
		}
	},
}
window.PowerUp = class PowerUp {
	constructor(options) {
		Object.assign(this, options)
	}
	activar() {
		throw new Error('falta implementar')
	}
	/**
	 * Agranda la nave y no deja que las bolas se peguen a ella.
	 */
	agrandar() {

		nave.setWidthType(widthTypes.L)
		this.despegar()
	}
	/**
	 * Achica la nave y no deja que las bolas se peguen a ella.
	 */
	achicar() {

		nave.setWidthType(widthTypes.S)
		this.despegar()
	}
	/**
	 * Hace que las bolas no se peguen al tocar la nave.
	 */
	despegar() {
		for (let ball of balls) {
			ball.despegar()
			if (ball.config.dirX === 0&& ball.config.dirY === 0) {

				ball.config.dirX = 1
				ball.config.dirY = -1
			}
		}
	}
	/**
	 * Hace caer los powerUps cuando estan en pantalla
	 */
	update(i) {

		if (this.tocaBordeInferior()) {

			this.$el.remove()
			powers.splice(powers.indexOf(this), 1)
			return i - 1
		}
		else if (this.tocaNave()) {

			this.activar()
			this.$el.remove()
			powers.splice(powers.indexOf(this), 1)
			return i - 1
		}
		else {
			this.$el.style.left = `${this.pos.x}px`
			this.$el.style.top  = `${this.pos.y}px`
			this.pos.y += 2
		}
	}
	/**
	 * Borra el powerUp cuando llega a la punta del mapa
	 */
	tocaBordeInferior() {

		const mapBottom = game.pos.y + game.size.h
		const mapBorder = game.size.b
		return  this.pos.y + this.size.h >= mapBottom - mapBorder
	}
	/**
	 * Aplica el powerUp en cuestion cuando toca la nave
	 */
	tocaNave() {

		const powerL = this.pos.x
		const powerT = this.pos.y
		const powerB = this.pos.y + this.size.h
		const powerR = this.pos.x + this.size.w
		const naveR  = nave.pos.x + nave.size.w
		const naveB  = nave.pos.y + nave.size.h
		const naveT  = nave.pos.y
		const naveL  = nave.pos.x
		return (powerB >= naveT
			&&	powerT <= naveB
			&&	powerR >= naveL
			&&	powerL <= naveR)
	}
}
})