document.querySelector('.reload-icon').addEventListener('click', function() {
  this.classList.add('spin-animation');
  setTimeout(function() {
    document.querySelector('.reload-icon').classList.remove('spin-animation');
  }, 500);
  gameLogic();
});

function gameLogic() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  var msg = '';
  if (randomNumber1 === randomNumber2) {
    msg = '🏳️ Draw! 🏳️';
  } else if (randomNumber1 > randomNumber2) {
    msg = '🚩 Player 1 Wins!';
  } else {
    msg = 'Player 2 Wins! 🚩';
  }
  document.querySelector('h1').textContent = msg;
}
