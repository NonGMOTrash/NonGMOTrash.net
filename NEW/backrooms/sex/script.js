var clicked = false;

function Sex() {
	if (clicked) {
		return;
	}
	clicked = true;
	
	document.getElementById("heavy").style.display = "none";
	document.getElementById("video").style.display = "block";
	document.getElementById("video").play();
	document.title = "no means no";
	
	window.setTimeout(function() { window.location.href = "../society/index.html"; }, 5000);
}
