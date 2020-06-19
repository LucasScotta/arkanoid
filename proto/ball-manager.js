'use strict'
/*globals define*/
define([
	'util/randomOf',],
	(randomOf) => {
	return class BallManager {
		constructor() {
			this.balls = []
		}
		agregar(ball) {
			this.balls.push(ball)
		}
		remover(ball) {
			const index = this.balls.indexOf(ball)
			if (index >= 0) {
				this.balls.splice(index, 1)
				ball.remove()
			}
		}
		estaVacio() {
			return this.balls.length === 0
		}
		getBalls() {
			return this.balls
		}
		getRandom() {
			return randomOf(this.balls)
		}
		clonarRandom() {
			const ball = this.balls.getRandom()
			const clon = ball.clonar()
			this.balls.agregar(clon)
		}
		getFirst() {
			return this.balls[0]
		}
		reset() {
			for (const ball of this.balls) {
				ball.remove()
			}
			this.balls.length = 0
		}
	}
})