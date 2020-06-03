const boxProto = {
}

function initBox(box) {
	box.__proto__ = boxProto
	return box
}