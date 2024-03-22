var upd = document.getElementById('updClickArea');
var updCSS = document.getElementById('updateCSS');
const outdated = {
	title: 'Update Available!',
	text: 'Newest Version: ' + LV.full + '\n Current Version: ' + CV.full,
	icon: 'warning',
	buttons: {
		cancel: 'Close',
		update: {
      text: 'Update',
      value: 'update'
    }
	}
}
const updated = {
	title: 'You are up to date!',
	text: 'Newest Version: ' + LV.full + '\n Current Version: ' + CV.full,
	icon: 'success'
}

function updDis() {
	if(updateAvailable()) {
		if(!updCSS.href.includes('css/outdated.css')) {
			updCSS.href = 'css/outdated.css';
		}
	} else {
		if(!updCSS.href.includes('css/updated.css')) {
			updCSS.href = 'css/updated.css';
		}
	}
}

function promptAuto() {
	if(updateAvailable()) {
		swal(outdated).then((value) => {
    	if(value === 'update') {
      	location.href = 'https://github.com/Gamerboss3094/QAG77/releases/latest';
    	}
  	});
	}
}
function promptManual() {
	if(updateAvailable()) {
		swal(outdated).then((value) => {
    	if(value === 'update') {
      	location.href = 'https://github.com/Gamerboss3094/QAG77/releases/latest';
    	}
  	});
	} else {
		swal(updated);
	}
}

promptAuto();

setInterval(updDis, 5);

upd.onclick = function() {
	promptManual();
}