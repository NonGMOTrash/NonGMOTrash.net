window.onload = function() {

	let heart = document.getElementById("heart");
	let games = document.getElementById("games");
	let music = document.getElementById("music");
	let shows = document.getElementById("shows");

	document.addEventListener("mousemove", updateHeart);

	function updateHeart(e) {
		var x = e.clientX;
		var y = e.clientY;
		document.getElementById('heart').style.left  = x-96+"px";
		document.getElementById('heart').style.top  = y-96+"px";

		console.log(games.matches(':hover'));
		if (games.matches(':hover') || music.matches(':hover') || shows.matches(':hover')) {
			heart.style.visibility = "visible";
		} else {
			heart.style.visibility = "hidden";
		}
	}

}

