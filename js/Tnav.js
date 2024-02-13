var embed = document.getElementById("embed");

function enable(elem) {
  [...document.getElementsByClassName('Tact')].forEach(x => {
    x.classList.remove('Tact');
  });
  elem.classList.add('Tact');
}

document.addEventListener('click', function(e) {
  var elem = e.target;
  var isBtn = elem.classList.contains("Tbtn");
  var isAct = elem.classList.contains("Tact");
  if(isBtn === true && isAct === false) {
    embed.src = elem.name;
    enable(elem)
  }
});