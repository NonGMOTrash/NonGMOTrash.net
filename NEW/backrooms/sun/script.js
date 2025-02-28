function MySon() {
	document.getElementById("sun").style.display = "none";
	document.getElementById("son").style.display = "block";
	document.getElementById("video").play();
	document.getElementById("video").addEventListener("ended", Warp);
}

function Warp() {
	document.getElementById("son").style.display = "none";
	window.location.href = "../skyrim/index.html";
}