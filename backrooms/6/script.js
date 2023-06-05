var clicked = false;

function Sex() {
	if (clicked) {
		return;
	}
	clicked = true;
	
	document.getElementById("heavy").src = "sex.gif";
	document.getElementById("sex").play();
	document.title = "no means no";
	
	window.setTimeout(function() { window.location.href = "../7/index.html"; }, 5000);
}