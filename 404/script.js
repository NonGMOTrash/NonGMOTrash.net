function Funny() {
	document.getElementById("funny").src = "cat.gif";
	document.getElementById("funny").style.width = "800px";
	var sound = new Audio("cat.mp3");
	sound.play();
	
	window.setTimeout(function() {
		window.location.href = "https://nongmotrash.github.io/";
	}, 2150);
}