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
	
}

function initBox(box) {

	box.__proto__ = boxProto
	return box
}

function randomPowerUp () {

	const ix = Math.floor(Math.random() * powerUps.length)
	return powerUps[ix]
}