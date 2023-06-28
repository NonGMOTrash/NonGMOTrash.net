// MUSIC PLAYER

const music = new Audio("music.ogg");
music.loop = true;
const hscrollClick = [ // getting this scrolling to work made me want to die
	{ offset: 0, transform: "translate(0, 0)" },
	{ offset: 0.5, transform: "translate(-120%, 0)" },
	{ offset: 0.500001, transform: "translate(120%, 0)" },
	{ offset: 1, transform: "translate(0, 0)" }
];
const hscrollPlaying = [
	{ offset: 0, transform: "translate(0, 0)" },
	{ offset: 0.5, transform: "translate(-428%, 0)" },
	{ offset: 0.500001, transform: "translate(428%, 0)" },
	{ offset: 1, transform: "translate(0, 0)" }
];
var playing = false;

player_text.animate(hscrollClick, { duration: 4000, iterations: Infinity });
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
	ToggleMusic();
}

function ToggleMusic() {
	playing = !playing;
	
	var player_text = document.getElementById("player_text");
	var player_cat = document.getElementById("player_cat");
	
	if (playing) {
		music.play();
		player_text.textContent = "[now playing: Camellia, Temmie Chang & Toby Fox - Yoki's House - Dweller's Empty Path OST]";
		player_text.animate(hscrollPlaying, { duration: 13000, iterations: Infinity });
		player_cat.src = "cat_vibe.gif";
	} else {
		music.pause();
		player_text.textContent = "[click to play]";
		player_text.animate(hscrollClick, { duration: 4000, iterations: Infinity });
		player_cat.src = "cat_sleep.png";
		
	}
}