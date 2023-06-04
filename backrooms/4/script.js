var o = 0;

function Activate() {
	document.getElementById("prize").style.display = "none";
	document.getElementById("bridgets").style.display = "inline";
    document.body.style.backgroundImage = "url('bridget.png')";
	
	function test() {
		o += 10;
		document.body.style.backgroundPosition = o + "px " + o + "px";
    }
    
	setInterval(test, 1000/60);
}