var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//background: linear-gradient(to right, #ff0000, #eeff00);
let temp = "background: linear-gradient(to right, #ff0000, #eeff00);";
let hex1 = temp.split("#")[1];
let hex2 = temp.split("#")[2];

color1.value = "#"+hex1.slice(0,6);
color2.value = "#"+hex2.slice(0,6);

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);