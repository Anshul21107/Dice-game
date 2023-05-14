// image1 

var randomNumber = Math.floor(Math.random()*6) +1;
var random_image = "Dice" +randomNumber +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",random_image);

// image2

var randomNumber2 = Math.floor(Math.random()*6) +1;
var random_image2 = "Dice" +randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",random_image2);

// condition 

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 won!";
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Won!🚩";
}
else {
    document.querySelector("h1").innerHTML="🚩 Draw 🚩";
}