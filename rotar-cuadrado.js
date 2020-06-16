/* globals require*/
require(['globals'], function (globals) {
let rotacion = 0

function rotarHorario() {

	rotacion += 10
	return rotar(rotacion)
}

function rotarAntiHorario() {

	rotacion -= 10
	return rotar(rotacion)
}

function rotar(angulo) {

	for (let i = 0; i < globals.boxes.length; i += 1) {

		globals.boxes[i].style.transform = `rotate(${angulo}deg)`
	}
}

document.onkeyup = function apretarTecla(event) {

	if (event.key === 'ArrowRight') return rotarHorario()

	if (event.key === 'ArrowLeft') return rotarAntiHorario()
}
})