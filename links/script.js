var o = 0;

function scroll() {
	
}
setInterval(function() {
	o += 4;
	document.body.style.backgroundPosition = o + "px " + o + "px";
}, 1000/60);