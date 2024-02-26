var FSbtn = document.getElementById("FSbtn");
var embed = document.getElementById("embed");

FSbtn.addEventListener('click', enterFullscreen);

function enterFullscreen() {
  embed.requestFullscreen();
}