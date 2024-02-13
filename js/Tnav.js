var embed = document.getElementById("embed");

document.addEventListener('click', function(e) {
  var elem = e.target;
  var isBtn = elem.classList.contains("Tbtn");
  var isAct = elem.classList.contains("Tact");
  if(isBtn === true && isAct === false) {
    embed.src = elem.url;
  }
});
