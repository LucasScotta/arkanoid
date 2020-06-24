'use strict'
/*globals define*/
define(['util/randomOf',
		'proto/box',], (randomOf, Box) => {
	return (x, y, game) => {
		const powers = {
			multiplicador: {
				tipo: 2,
				caracter: 'Ⓐ',
				/**
				 * Elije una bola random, toma su posicion y agrega otra bola.
				 */
				activar: function () {
					game.ballm.clonarRandom()
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
					for (let ball of game.ballm.getBalls()) {

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
					game.nave.gun.shots += 5
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
		return new Box({
			pos: {
				x: x,
				y: y,
			},
			size : {
				w: 60,
				h: 20,
			},
			power: randomOf(Object.values(powers)),
		})
	}
})