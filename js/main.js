console.log("Up and running!");
 /*
 Navigate to the main.js file in Sublime.

Create four variables that simulate the cards in your game.

They should be string types.
Two should have a value of "queen", and the other two should have a value of "king".
They will represent your cards (e.g., "queen" card).
Name your variables cardOne, cardTwo, cardThree, and cardFour.
Here's an example of one card:

  var cardOne = "queen";
Now we'll use console.log() to display the value of two cards, which will represent the cards that the user has flipped over.

Use console.log() to display the values of two cards (you can pick which two cards you'd like to display).
Here's what this should look like:

  console.log("User flipped " + cardOne);
Notice how we use string concatenation (+) to add the human-readable text "User flipped " with the value of a variable.
After saving any changes to main.js, open your index.html file in Sublime Text, and then open the file in Chrome. 
After the web page loads, you can go to View > Developer > Developer Tools and click on the console panel. You should see two messages displayed in the console! 
*/

/*
rank	suit	cardImage
"queen"	"hearts"	"images/queen-of-hearts.png"
"queen"	"diamonds"	"images/queen-of-diamonds.png"
"king"	"hearts"	"images/king-of-hearts.png"
"king"	"diamonds"	"images/king-of-diamonds.png"
*/

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];
var cardsInPlay = [];
var flipCard= function(cardId){
	/*var card0ne = cards[0];
	cardsInPlay.push(card0ne);
	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);*/
	console.log("User flipped "+cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	

}
var checkForMath = function(){
	if (cardsInPlay.length === 2){
		//console.log("User flipped "+cardsInPlay[0]);
		//console.log("User flipped "+cardsInPlay[1]);
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		}
		else
			alert("Sorry try again...");
	}	
}

flipCard(0);


