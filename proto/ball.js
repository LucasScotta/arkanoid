const ballProto = {
}

function initBall(ball) {
	ball.__proto__ = ballProto
	return ball
}