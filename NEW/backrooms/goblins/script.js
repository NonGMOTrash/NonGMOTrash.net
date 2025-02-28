let wait = setTimeout(boo, 20000);

function boo() {
	document.body.style.backgroundImage = 'url(the_goblin.jpg)';
	document.body.style.backgroundRepeat = "fixed";
	document.body.style.backgroundSize = "100%";
	document.getElementById("vibeo").hidden = true;
	document.getElementById("proposition").hidden = false;
}
