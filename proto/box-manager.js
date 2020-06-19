/*globals define*/
define(['proto/manager-base'], (ManagerBase) => {
	return class BoxManager extends ManagerBase {
		reset() {
			for (const box of this.getItems()) {
				box.borrar()
			}
			super.reset()
		}
	}
})