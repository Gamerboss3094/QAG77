// Pause on focus lost
const POFL = {
	canPause: function() {
		if(simulation.onTitlePage === false) {
			if(simulation.isTextLogOpen === true) {
				if(m.alive === true) {
					if(simulation.paused === false) {
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	},
	pause: function() {
		if(POFL.canPause()) {
			simulation.paused = true;
			build.pauseGrid();
		}
	}
}
document.body.onblur = POFL.pause;