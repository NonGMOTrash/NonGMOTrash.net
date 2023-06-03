mari = document.getElementById("mari");

function Teleport() {
	var xMult = Math.random() < 0.5 ? -1 : 1;
	var yMult = Math.random() < 0.5 ? -1 : 1;
	
	mari.position = "relative";
	mari.style.transform += "translateX("+ Math.random() * 451 * xMult + "px)";
	mari.style.transform += "translateY("+ Math.random() * 451 * yMult + "px)";
	console.log("!");
}