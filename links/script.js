var o = 0;

function scroll() {
	
}
setInterval(function() {
	o += 4;
	document.body.style.backgroundPosition = 0 + "px " + o + "px";
}, 1000/60);