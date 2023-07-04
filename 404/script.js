function Funny() {
	// loaded assets, comense funny
	document.getElementById("funny").style.display = "none";
	document.getElementById("video").style.display = "block";
	document.getElementById("video").style.width = "950px";
	document.getElementById("video").play();
	
	document.getElementById("video").addEventListener("ended", function() {
		window.location.href = "https://nongmotrash.github.io/home/";
	});
}