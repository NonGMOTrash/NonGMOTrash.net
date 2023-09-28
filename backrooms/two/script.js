var clicks = 0;

function Two() {
	clicks++;
	
	if (clicks == 1) {
		document.body.style.backgroundImage = "url('earthbound_bg.gif')";
		document.title = "battle time";
		var audio = new Audio('music.ogg');
		audio.play();
		document.getElementById("song").style.display = "block";
	}
	
	var audio = new Audio('youch.ogg');
	audio.play();
	
	if (clicks == 21) {
		window.location.href = "../radio/index.html";
	}
}

