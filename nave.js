const nave = {
	size: {
		w: 100,
		h: 15,
	},
	alargar: function () {

		return this.size.w += 50
	},
	achicar: function () {

		return this.size.w -= 50
	}
}