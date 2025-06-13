var arr1 = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png'];

var index1 = Math.floor((Math.random()*6));
var index2 = Math.floor((Math.random()*6));

document.querySelectorAll(".dice_image")[0].setAttribute("src", arr1[index1]);

document.querySelectorAll(".dice_image")[1].setAttribute("src", arr1[index2]);

var player1 = arr1[index1];
var player2 = arr1[index2];

if(Number(player1[13]) > Number(player2[13])){
    document.querySelector("h1").textContent = "Player 1 Won! 🚩";
}else if(Number(player1[13]) < Number(player2[13])){
    document.querySelector("h1").textContent = "Player 2 Won! 🚩";
}else{
    document.querySelector("h1").textContent = "It's A Tie! 🚩";
}