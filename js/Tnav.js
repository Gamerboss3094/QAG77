var embed = document.getElementById("embed");

document.addEventListener('click', function(evt) {
  let element = evt.target;
  alert(`${element.textContent}`);
});
