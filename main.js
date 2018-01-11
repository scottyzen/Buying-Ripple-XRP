const tips = [
  "From your coinbase account, you can also buy Bitcoin ( BTC ), Litecoin ( LTC ) and Bitcoin Cash ( BCH ).",
  "Buying and selling anything based on 'tips' is the best way to lose money. Do your own research.",
  "Altcoins and Bitcoin often move in opposite directions of each other ( but not always ).",
  "Never invest more than you can afford to lose"
];

let tipElement = document.querySelector(".quick-tip p");

function changeTip() {
  tipElement.innerHTML = tips[Math.floor(Math.random() * tips.length - 1) + 1];
}

function getRandomTip() {
  changeTip();
  tipElement.style.display = "block";
  setTimeout(() => {
    tipElement.style.display = "none";
  }, 11500);
  // and schedule a repeat
  setTimeout(getRandomTip, 12000);
}

getRandomTip();
