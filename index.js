'use strict'
/* globals require, define*/
define('img/box', [
	'img/0.png',
	'img/1.png',
	'img/2.png',
	'img/3.png',
	'img/4.png',
	'img/5.png',
	'img/6.png',
	'img/7.png',
	])

require(['globals',], function (globals) {
	window.globals = globals
	globals.game.start()
})