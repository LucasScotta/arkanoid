/* globals boxes */
const bloques = {
	normal: {tipo: 1},
	multiplicador: {tipo: 2, caracter: 'Ⓜ'},
	goma: {tipo: 3, caracter: 'Ⓖ'},
	disparo: {tipo: 4, caracter: 'Ⓓ'},
	agrandador: {tipo: 5, caracter: 'Ⓐ'},
	achichador: {tipo: 6, caracter: '①'}, 
} 

const powerUps = [
	bloques.normal,
	bloques.multiplicador,
	bloques.goma,
	bloques.disparo,
	bloques.agrandador,
	bloques.achichador,
]

const boxProto = {
	borrar: function () {

		boxes.splice(this.index, 1)

		for (let i = 0; i < boxes.length; i += 1) {
		
			boxes[i].index = i
		}

		return this.$el.remove()
	},
}

window.initBox = function initBox(box) {

	box.__proto__ = boxProto
	return box
}

function randomOf(list) {

	const ix = Math.floor(Math.random() * list.length)
	return list[ix]
}

window.randomPowerUp = function randomPowerUp() {

	return randomOf(powerUps)
}