var FSbtn = document.getElementById("FSbtn");
var embed = document.getElementById("embed");

FSbtn.addEventListener('click', enterFullscreen);
document.addEventListener('fullscreenchange', function(e){
  alert("e");
});

function enterFullscreen(e) {
  alert("fullscreen enabled");
  embed.requestFullscreen();
}