'use strict'
/* globals require*/
require(['globals',
	'modules/creador-bloques'], function (globals, blocks) {

blocks(globals.game.config.level)
})