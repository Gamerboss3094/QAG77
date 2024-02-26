var FSbtn = document.getElementById("FSbtn");
var embed = document.getElementById("embed");

FSbtn.addEventListener('click', enterFullscreen);
document.addEventListener('fullscreenchange', enterFullscreen)

function enterFullscreen() {
  embed.requestFullscreen();
}