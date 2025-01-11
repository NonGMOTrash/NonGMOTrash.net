window.onload = function() {
	var bg = document.getElementById("bg");
	var mainline = document.getElementById("mainline");
}

function setBg(background) {
	if (background == "teralite") {
		bg.src = "bg-teralite.png";
		bg.style.opacity = 100;
		bg.classList.add("pixel");
	} else if (background == "arcade") {
		bg.src = "bg-arcade.png";
		bg.style.opacity = 100;
		bg.classList.add("pixel");
	} else {
		bg.style.opacity = 0;
	}
}

window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
	if (scroll > mainline.childElementCount * 100) {
		setBg("arcade");
	} else {
		setBg("");
	}
	console.log(transitioning);
});
