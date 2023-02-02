const deck = [];
const suits = ['\u2665', '\u2666', '\u2660', '\u2663'];
const values = ['Ass', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Bube', 'Dame', 'König'];

for (let suit in suits) {
  for (let value in values) {
    deck.push(suits[suit] + ' ' + values[value]);
  }
}

const hand = [];

for (let i = 0; i < 7; i++) {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let card = deck[randomIndex];
  hand.push(card);
  deck.splice(randomIndex, 1);
}

console.log(hand);
