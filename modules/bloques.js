'use strict'
/*globals define*/
define([
	'globals',
	], 
	(globals) => {
	return {
		multiplicador: {
			tipo: 2,
			caracter: 'Ⓐ',
			/**
			 * Elije una bola random, toma su posicion y agrega otra bola.
			 */
			activar: function () {
				globals.game.ballm.clonarRandom()
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
				for (let ball of globals.game.ballm.getBalls()) {

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
				globals.game.nave.gun.shots += 5
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