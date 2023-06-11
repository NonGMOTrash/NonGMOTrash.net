var on = false;
var howlers = document.getElementById("howlers");

function Toggle() {
	on = !on;
	
	if (on) {
		howlers.src = "howlers.gif";
		document.title = "[on]";
		document.getElementById("music").play();
	} else {
		howlers.src = "howlers.png";
		document.title = "[off]";
		document.getElementById("music").pause();
	}
}