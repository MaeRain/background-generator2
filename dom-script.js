var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("#gradient");
var button = document.getElementById("#button");

function setGradient() {
    body.style.background = "linear-gradient(to right, "
        +color1.value
        + ", " 
        + color2.value 
        + ")";
    
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Start of my -stackoverflows- code

//function randomGradient() {
//  //Caching randomly generated Color
//	var randomColor1 = getRandomColor();
//	var randomColor2 = getRandomColor();
//	body.style.background = 
//	"linear-gradient(to "
//	+ direction 
//	+ ", "
//	+ randomColor1
//	+ ", " 
//	+ randomColor2
//  //Added fixed so bottom and top gradients won't be repeated
//	+ ") fixed";
//}
//function getRandomColor() {
//    var letters = '0123456789ABCDEF';
//    var color = '#';
//    for (var i = 0; i < 6; i++) {
//    color += letters[Math.floor(Math.random() * 16)];
//  }
//  return color;
//}

//button.addEventListener("click", getRandomColor);

//ONLINE SOLUTION

//function setGradient() {
//	body.style.background = 
//	"linear-gradient(to "
//	+ direction
//	+ ", " 
//	+ color1.value 
//	+ ", " 
//	+ color2.value 
//  //Added fixed so bottom and top gradients won't be repeated
//	+ ") fixed";
//
//	css.textContent = body.style.background + ";";
//}
//
//function randomGradient() {
//  //Caching randomly generated Color
//	var randomColor1 = getRandomColor();
//	var randomColor2 = getRandomColor();
//
//	body.style.background = 
//	"linear-gradient(to "
//	+ randomColor1
//	+ ", " 
//	+ randomColor2
//	+ ")";
//
//	css.textContent = body.style.background + ";";
//
//  //Making the input button color match
//	color1.value = randomColor1;
//	color2.value = randomColor2;
//}
//
//function getRandomColor() {
//  var letters = '0123456789ABCDEF';
//  var color = '#';
//  for (var i = 0; i < 6; i++) {
//    color += letters[Math.floor(Math.random() * 16)];
//  }
//  return color;
//}









