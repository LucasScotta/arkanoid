const nave = {
	size: {
		w: 100,
		h: 15,
	},
	alargar: function () {

		return this.w += 50
	},
	achicar: function () {

		return this.w -= 50
	}
}