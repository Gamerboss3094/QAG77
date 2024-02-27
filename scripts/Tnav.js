var embed = document.getElementById('embed');

function enable(elem) {
  [...document.getElementsByClassName('Tact')].forEach(x => {
    x.classList.replace('Tact', 'Tin');
  });
  elem.classList.replace('Tin', 'Tact');
}

document.addEventListener('click', function(e) {
  var elem = e.target;
  var isBtn = elem.classList.contains('Tbtn');
  var isAct = elem.classList.contains('Tact');
  if(isBtn && !isAct) {
    $("#embed").attr("src",elem.dataset.url);
    $("#favicon").attr("href","img/favicons/favicon.ico");
    enable(elem);
  }
});