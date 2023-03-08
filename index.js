var img1Random = Math.floor(Math.random() * 6) + 1; // 1-6
var img2Random = Math.floor(Math.random() * 6) + 1; // 1-6

var img1 = "images/dice" + img1Random + ".png"; // images/dice1.png-images/dice6.png
var img2 = "images/dice" + img2Random + ".png"; // images/dice1.png-images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", img1);
document.querySelectorAll("img")[1].setAttribute("src", img2);

if (img1Random > img2Random) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
}
else if (img1Random < img2Random) {
    document.querySelector("h1").innerText = "🚩 Player 2 Wins!";
}
else {
    document.querySelector("h1").innerText = "Draw!";
}