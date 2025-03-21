window.onload = function() {
	var bg = document.getElementById("bg");
	var mainline = document.getElementById("mainline");
}

function setBg(background) {
	if (background == "teralite") {
		bg.style.backgroundImage = "url(bg-teralite.png)";
		bg.style.opacity = 100;
		bg.classList.add("pixel");
	} else if (background == "arcade") {
		bg.style.backgroundImage = "url(bg-arcade.png)";
		bg.style.opacity = 100;
		bg.classList.add("pixel");
	} else {
		bg.style.opacity = 0;
	}

	console.log(bg.style.backgroundImage);
}

window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
	if (scroll > mainline.childElementCount * 100) {
		setBg("arcade");
	} else {
		setBg("");
	}
});
