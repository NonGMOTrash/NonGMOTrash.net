window.onload = function() {

	let heart = document.getElementById("heart");

	document.addEventListener("mousemove", updateHeart);

	function updateHeart(e) {
		var x = e.clientX;
		var y = e.clientY;
		document.getElementById('heart').style.left  = x-96+"px";
		document.getElementById('heart').style.top  = y-96+"px";

		console.log(heart.style.display);
	}

	document.getElementById("games").addEventListener("mouseover", show);
	document.getElementById("games").addEventListener("mouseout", hide);

	function show() {
		heart.style.display = "fixed";
		console.log("!");
	}

	function hide() {
		heart.style.display = "none";
	}

}


