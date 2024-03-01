var refresh = document.getElementById("refresh");
var embed = document.getElementById("embed");

refresh.onclick = function(e) {
  embed.contentWindow.location.refresh();
}