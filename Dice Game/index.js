function diceValue(n,x) {
    if (n == 1) {
      document.querySelectorAll(".image")[x].setAttribute("src", "images/dice1.png");
    } else if (n == 2) {
      document.querySelectorAll(".image")[x].setAttribute("src", "images/dice2.png");
    } else if (n == 3) {
      document.querySelectorAll(".image")[x].setAttribute("src", "images/dice3.png");
    } else if (n == 4) {
      document.querySelectorAll(".image")[x].setAttribute("src", "iamges/dice4.png");
    } else if (n == 5) {
      document.querySelectorAll(".image")[x].setAttribute("src", "images/dice5.png");
    } else if (n == 6) {
      document.querySelectorAll(".image")[x].setAttribute("src", "images/dice6.png");
    }
  }

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
diceValue(randomNumber1,0);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
diceValue(randomNumber2,1);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins! ";
} else {
  document.querySelector("h1").innerHTML = "Match Ties ";
}
