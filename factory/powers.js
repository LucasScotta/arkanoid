/*globals define*/
define(['proto/powerUps',], (Power) => {
	const createElement = () => {
		const $el = document.createElement('div')
		$el.innerText = this.power.caracter
		$el.classList.add('power')
		document.getElementById('container').appendChild($el)
		return $el
	}
	return (x, y) => new Power({
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