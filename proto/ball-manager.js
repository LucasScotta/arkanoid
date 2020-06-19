'use strict'
/*globals define*/
define([
	'util/randomOf',
	'proto/manager-base'],
	(randomOf, ManagerBase) => {
	return class BallManager extends ManagerBase {
		constructor() {
			super()
		}
		getBalls() {
			return this.getItems()
		}
		getRandom() {
			return randomOf(this.getItems())
		}
		clonarRandom() {
			const ball = this.getRandom()
			const clon = ball.clonar()
			this.agregar(clon)
		}
		getFirst() {
			return this.getItem(0)
		}
		reset() {
			for (const item of this.getItems()) {
				item.remove()
			}
			super.reset()
		}
		remover(ball) {
			if (super.remover(ball)) ball.remove()
		}

	}
})