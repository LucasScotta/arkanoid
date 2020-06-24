'use strict'
/*globals define*/
define(() => {

	return class ManagerBase {
		constructor() {
			this.items = []
		}
		agregar(item) {
			this.items.push(item)
		}
		remover(item) {
			const index = this.items.indexOf(item)
			const existe = index >= 0
			if (existe) {
				this.items.splice(index, 1)
			}
			return existe
		}
		estaVacio() {
			return this.items.length === 0
		}
		getItems() {
			return this.items
		}
		getItem(index) {
			return this.items[index]
		}
		reset() {
			this.items.length = 0
		}
	}
})
