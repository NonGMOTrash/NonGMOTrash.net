document.getElementById("banana").addEventListener("click", Banana)

function Banana() {
	document.body.style.backgroundImage = "url('banana.gif')";
	document.getElementById("music").src = "banana.webm";
	document.getElementById("music").play();
}
