'use strict'
/*globals define*/
define(function () {
	return function deepClone(obj) {
		return JSON.parse(JSON.stringify(obj))
	}
})