var clicks = 0;

function Two() {
	clicks++;
	
	if (clicks == 1) {
		document.body.style.backgroundImage = "url('earthbound_bg.gif')";
		document.title = "battle time";
		var audio = new Audio("music.ogg");
		audio.play();
		document.getElementById("reveal").style.display = "block";
	}
	
	var youch = new Audio("youch.ogg");
	youch.play();
	
	if (clicks == 21) {
		window.location.href = "../radio/index.html";
	}
}

