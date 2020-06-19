/*globals define*/
define(['proto/power-up',], (PowerUp) => {
	const createElement = () => {
		const $el = document.createElement('div')
		$el.innerText = this.power.caracter
		$el.classList.add('power')
		document.getElementById('container').appendChild($el)
		return $el
	}
	return (x, y) => new PowerUp({
		pos: {
			x: x,
			y: y,
		},
		size: {
			w: 15,
			h: 25,
		},
		index: 0,
		$el: createElement(),
	})
})