var FSbtn = document.getElementById("FSbtn");
var embed = document.getElementById('embed');

function fullscreen() {
  embed.requestFullscreen();
}

FSbtn.addEventListener("click", fullscreen, false);
document.addEventListener('fullscreenchange', fullscreen, false);