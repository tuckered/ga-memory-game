var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [];
var cardOne = cards [0];
cardsInPlay.push("queen");
console.log("user flipped queen");
var cardTwo = cards [2];
cardsInPlay.push("king");
console.log("user flipped king");

if (cardsInPlay.length === 2) {
	//Do something
} else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You've found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.");
}

