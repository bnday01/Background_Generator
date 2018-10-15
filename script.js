var css = document.querySelector("h3");
var color1Left = document.getElementById("leftInput");
var color2Right = document.getElementById("rightInput");
var body = document.querySelector("body");
var button = document.querySelector("button");


function setColors(){
	body.style.background = "linear-gradient(to right," + color1Left.value + "," + color2Right.value + ")";
}
function seth3Text(){
	css.textContent = body.style.background + ";";
}
			//Hex
function setRandomColor(){

	let subset = [48,49,50,51,52,53,54,55,56,57,65,67,66,68,69,70];
	let str = "#";

	for (var i = 0; i < 6 ; i++) {
		str += String.fromCharCode(subset[Math.floor(Math.random() * subset.length)]);
	}
	return str;
}

setColors();
seth3Text();
color1Left.addEventListener("input", function(){
	setColors();
	seth3Text();
});

color2Right.addEventListener("input", function(){
	setColors();
	seth3Text();
});
button.addEventListener("click", function(){
	color1Left.value = setRandomColor();
	color2Right.value = setRandomColor();
	setColors();
	seth3Text();
});



