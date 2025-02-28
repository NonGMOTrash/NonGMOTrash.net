var mari = document.getElementById("mari");
var clicks = 0;

function Teleport() {
	clicks += 1;
	if (clicks == 4) {
		mari.src = "door.png";
	}
	if (clicks == 5) {
		window.location.href = "../tree/index.html";
		return;
	}
	
	var xMult = Math.random() < 0.5 ? -1 : 1; // random 1 / -1
	var yMult = Math.random() < 0.5 ? -1 : 1;
	
	/*
	mari.position = "relative";
	mari.style.transform += "translateX("+ Math.random() * 451 * xMult + "px)";
	mari.style.transform += "translateY("+ Math.random() * 451 * yMult + "px)";
	*/
	
	mari.style.left = String(Math.random() * 451 * xMult) + "px";
	mari.style.top = String(Math.random() * 451 * yMult) + "px";
	
	if (parseInt(mari.style.top) <= -160) {
			mari.style.top = "-160px";
	}
}