'use strict'
/* globals require*/
require(['modules/game',
		'modules/creador-bloques'], function (game, blocks) {

blocks(game.config.level)
})