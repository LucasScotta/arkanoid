/*globals define*/
define([
	'modules/randomOf',
	'modules/balls',
	'modules/guns',
	'modules/nave',
	'proto/gun',
	], 
	(randomOf,
		balls,
		guns,
		nave,
		Gun,) => {
	return {
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
})