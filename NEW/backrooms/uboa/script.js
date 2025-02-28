var o = 0;

function Activate() {
	document.getElementById("alert").style.display = "none";
	document.getElementById("memes").style.display = "inline";
	
	function scroll() {
		o += 1;
		document.body.style.backgroundPosition = o + "px " + o + "px";
    }
	setInterval(scroll, 1000/60);
}