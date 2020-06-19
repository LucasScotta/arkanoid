'use strict'
/*globals define*/
/**
 * Retorna el index de una lista
 */
define(
	(list) => {

		const ix = Math.floor(Math.random() * list.length)
	return list[ix]
})