// create a random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// select one of the dice images at random
var randomDiceImage = "dice" + randomNumber1 + ".png";

// change source of images
var randomImageSource = "images/" + randomDiceImage;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// display who won based on higher number
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
