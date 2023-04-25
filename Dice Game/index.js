//RANDOM NUMEBR & IMAGE PLAYER 1
var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);
//RANDOM NUMBER & IMAGE PLAYER 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
//TEXT CHANGE BASE ON WINNER
if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML ="🏆 Player 1 won";
} else if (randomNumber < randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 2 won 🏆";
} else {
    document.querySelector("h1").innerHTML ="OOPS!";
}