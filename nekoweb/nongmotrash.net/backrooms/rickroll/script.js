var count = 0;

function Thing() {
	document.getElementById("thing").src = "rickroll.gif";
	var rickroll = new Audio("rickroll.mp3");
	rickroll.play();
	
	count++;
	if (count == 2) {
		document.title = "AHHHHHHHHHHH";
	} else if (count == 8) {
		window.location.href = "../bridget/index.html";
	}
}