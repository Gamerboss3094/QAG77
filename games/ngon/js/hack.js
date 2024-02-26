var hackMenu = document.createElement('span');
hackMenu.id = "hack-menu";
hackMenu.classList.add('hide');
document.body.appendChild(hackMenu);
const hackUI = [];
hackUI[0] = '<a class="h3">Hacks</a><p style="margin-bottom: 5px; margin-top: 4px;"><button onclick="setUI(1)">Level</button><button onclick="setUI(2)">Mob</button><button onclick = "setUI(3)">Movement</button></p><p style="margin-top: 5px; margin-bottom: 5px;"><button onclick="setUI(4);">Physics</button><button onclick="setUI(5);">Player</button><button onclick="setUI(6);">Tech</button></p><p style="margin-top: 5px; margin-bottom: 0px;"><button onclick="lore.unlockTesting();">Enable Test Mode</button></p>'
hackUI[1] = '<a class="h3">Level Hacks</a><p style="margin-bottom: 5px; margin-top: 4px;"><button onclick="for(let i = 0;i<7;i++){tech.giveTech(`undefined`)};for(let i = 0;i<100;i++){tech.giveTech(`missile-bot`)};for(let i = 0; i<13;i++){level.nextLevel()}">Lore</button><button onclick="level.nextLevel();">Next Level</button></p><p style="margin-top: 5px; margin-bottom: 0px;"><button onclick="setUI(0);">&lt; Back</button></p>';
hackUI[2] = '<a class="h3">Mob Hacks</a><p style="margin-bottom: 5px; margin-top: 4px;"><button onclick="for (let i = 0, len = mob.length; i < len; i++) mob[i].death()">Clear Mobs</button></p><p style="margin-top: 5px; margin-bottom: 0px;"><button onclick="setUI(0);">&lt; Back</button></p>';
hackUI[3] = '<a class="h3">Movement Hacks</a><p style="margin-bottom: 5px; margin-top: 4px;"><button onclick="setInterval(`if(input.up) player.force.y -= player.mass * simulation.g;`, 1);m.FxAir *= 20; console.log(`fly!!!!!!!!!!!`)">Jetpack</button><button onclick="hight = parseInt(prompt(`to which degree?`));if(hight !=`NaN`){m.jumpForce = m.jumpForce*hight}">Set Jump Height</button><button onclick="m.Fx *= parseFloat(prompt(`what multiplier`))">Set Speed</button></p><p style="margin-top: 5px; margin-bottom: 0px;"><button onclick="setUI(0);">&lt; Back</button><button onclick="engine.timing.timeScale *= parseFloat(prompt(`what multiplier`));console.log(`done`)">Timer</button></p>';
hackUI[4] = '<a class="h3">Physics Hacks</a><p style="margin-bottom: 5px; margin-top: 4px;"><button onclick="confirm(`are you sure you want to do this?`) && eval(`setInterval(b.explosion, ` + parseFloat(prompt(`how many seconds inbetween explosions?`))*1000 + `, simulation.mouseInGame, ` + parseInt(prompt(`how big of an explosion?`)) + `)`)">God Of Destruction</button></p><p style="margin-top: 5px; margin-bottom: 0px;"><button onclick="setUI(0);">&lt; Back</button></p>';
hackUI[5] = '<a class="h3">Player Hacks</a><p style="margin-bottom: 5px; margin-top: 4px;"><button onclick="for (let i = 0, len = b.inventory.length; i < len; i++) {const target = b.guns[b.inventory[i]];if (target.ammo !== Infinity) {target.ammo = Infinity;}};simulation.updateGunHUD();">Infinite Ammo</button><button onclick="b.giveGuns(prompt(`what gun?`));for (let i = 0, len = b.inventory.length; i < len; i++) {const target = b.guns[b.inventory[i]]; if (target.ammo !== Infinity) {target.ammo = Infinity;}};simulation.updateGunHUD();">Give Gun</button><button onclick="m.health = m.maxHealth;">Full HP</button></p><p style="margin-bottom: 5px; margin-top: 4px;"><button onclick="m.energy = m.maxEnergy;">Full Energy</button><button onclick="m.maxHealth = parseFloat(prompt(`health?`)); m.health = m.maxHealth;">Set Max HP</button><button onclick="m.maxEnergy = parseFloat(prompt(`energy?`)); m.energy = m.maxEnergy;">Set Max Energy</button></p><p style="margin-top: 5px; margin-bottom: 0px;"><button onclick="setUI(0);">&lt; Back</button><button onclick="m.setField(prompt(`what field?`));">Set Field</button></p>';
hackUI[6] = '<a class="h3">Tech Hacks</a><p style="margin-bottom: 5px; margin-top: 4px;"><button onclick="hexxotech = prompt(`What tech?`); hexxonumb = prompt(`How much tech would you like?`);hexxotimes = 0; while (hexxotimes <= hexxonumb - 1){tech.giveTech(hexxotech); hexxotimes = hexxotimes + 1;}">Give Tech</button><button onclick="tech.removeTech(prompt(`what tech?`));">Remove Tech</button></p><p style="margin-top: 5px; margin-bottom: 0px;"><button onclick="setUI(0);">&lt; Back</button></p>';
function setUI(menu) {
  hackMenu.innerHTML = hackUI[menu];
}

document.addEventListener('keydown', function(event) {
  if(event.keyCode == 222) {
    if(hackMenu.classList.contains('hide')) {
      hackMenu.classList.remove('hide');
      setUI(0);
    } else {
      hackMenu.classList.add('hide');
    }
  }
});