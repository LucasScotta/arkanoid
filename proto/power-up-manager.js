/*globals define*/
define(['proto/manager-base'],(ManagerBase) => {
	return class PowerUpManager extends ManagerBase {
		reset() {
			for (const power of this.getItems()) {
				power.borrar()
			}
			super.reset()
		}
	}
})