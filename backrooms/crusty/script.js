var clicked = false;
var activated = false;

function BigMode() {
	if (activated) {
		window.location.href = "../crusty_video/index.html";
	}
	if (clicked) {
		return;
	}
	clicked = true;
	
	document.getElementById("skele").src = "skeletons.gif";
	document.title = "so funny";
	var audio = new Audio("laugh.mp3");
	audio.play();
	
	activated = true;
	setTimeout(Continue, 5500);
}

function Continue() {
	activated = false;
	document.title = "SO FUNNY";
	document.getElementById("why").style.display = "block";
	document.getElementById("skele").src = "pe.jpg";
}