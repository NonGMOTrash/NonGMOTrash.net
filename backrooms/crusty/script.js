var clicked = false;
var laughing = false;

function BigMode() {
	if (clicked) {
		window.location.href = "../crusty_video/index.html";
	}
	if (clicked) {
		return;
	}
	laughing = true;

	document.getElementById("skele").style.display = "none";
	document.getElementById("video").style.display = "block";
	document.getElementById("video").play();
	document.title = "so funny";
	
	clicked = true;
	setTimeout(Continue, 5600);
}

function Continue() {
	console.log("!");
	laughing = false;
	document.title = "SO FUNNY";
	document.getElementById("video").style.display = "none";
	document.getElementById("why").style.display = "block";
	document.getElementById("pe").style.display = "block";
}
