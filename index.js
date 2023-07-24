function randomDiceNumber() {
    var random = Math.floor(Math.random()*6)+1;
    return random;
}
var player1 = randomDiceNumber();
var player2 = randomDiceNumber();
document.querySelector(".img1").setAttribute("src", "images/dice"+player1+".png")
document.querySelector(".img2").setAttribute("src", "images/dice"+player2+".png")
if(player1 > player2)
{
    document.querySelector("h1").innerText = "Player 1 Win"
} else if(player2 > player1) {
    document.querySelector("h1").innerText = "Player 2 Win"

} else {
    document.querySelector("h1").innerText = "Its A Draw"
}