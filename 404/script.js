function Funny() {
	// loaded assets, comense funny
	document.getElementById("funny").src = "cat.gif";
	document.getElementById("funny").style.width = "800px";
	document.getElementById("sfx").play();
	
	window.setTimeout(function() {
		window.location.href = "https://nongmotrash.github.io/";
	}, 2300);
}