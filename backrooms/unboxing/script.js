var box = document.getElementById("box");
var box_num = 1;

function Open() {
	switch (box_num) {
		case 1:
			box.src = "potemkin_unboxing.gif";
			document.getElementById("header").textContent = "you're gonna live to regret";
			document.getElementById("buttons").style.display = "none";
			break;
		case 2:
			box.src = "box_music_open.png";
			var audio = new Audio('megalovania.ogg');
			audio.play();
			document.getElementById("header").textContent = "(from R3 Music Box on youtube)";
			document.getElementById("buttons").style.display = "none";
			break;
		case 3:
			box.src = "ringpop.png";
			document.getElementById("header").textContent = "will you marry me 🥺";
			document.getElementById("buttons").style.display = "none";
			break;
		case 4:
			box.src = "funny_cat.png";
			document.getElementById("header").textContent = "funny cat";
			document.getElementById("buttons").style.display = "none";
			break;
		case 5:
			box.src = "fnaf.gif";
			var audio = new Audio('jumpscare.ogg');
			audio.play();
			document.getElementById("header").textContent = "jumpscare";
			document.getElementById("buttons").style.display = "none";
			window.setTimeout(function() { window.location.href = "../hallway/deeper/index.html"; }, 2200);
			break;
		case 6:
			box.src = "goblins.png";
			document.getElementById("header").textContent = "do not disturb the goblins";
			document.getElementById("buttons").style.display = "none";
			
			setTimeout(function () {
				window.location.href = "../goblins/index.html";
			}, 4000);
			
			break;
	}
}

function Discard() {
	document.getElementById("header").textContent = "ok";
	document.getElementById("buttons").style.display = "none";
}

function Next() {
	box_num += 1;
	if (box_num == 7) {
		box_num = 1;
	}
	
	switch (box_num) {
		case 1:
			box.src = "box_metal.png";
			break;
		case 2:
			box.src = "box_music.png";
			break;
		case 3:
			box.src = "box_ring.png";
			break;
		case 4:
			box.src = "box_cat.png";
			break;
		case 5:
			box.src = "box_chest.png";
			break;
		case 6:
			box.src = "box_clash.png";
			break;
	}
}