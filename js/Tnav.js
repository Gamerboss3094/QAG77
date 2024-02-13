var embed = document.getElementById("embed");

document.addEventListener('click', function(e) {
  var elem = e.target;
  var isBtn = not elem.classList.contains("Tbtn")
  alert(isBtn);
});
