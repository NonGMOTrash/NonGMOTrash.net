var on = false;
var howlers = document.getElementById("howlers");
var dark = document.getElementById("dark");
var count = 0;

if (navigator.getAutoplayPolicy("mediaelement") == "allowed") {
	Toggle();
}

function Toggle() {
	on = !on;
	
	if (on) {
		howlers.src = "howlers.gif";
		document.title = "[on]";
		document.getElementById("music").play();
		dark.style.display = "none";
	} else {
		howlers.src = "howlers.webp";
		document.title = "[off]";
		document.getElementById("music").pause();
		dark.style.display = "block";
		
		count++;
		if (count == 10) {
			window.location.href = "../uboa/index.html";
		}
	}
}