const audio = new Audio();
const sounds = [
	"vine_boom.mp3",
	"explosion.mp3",
	"sans.mp3",
	"pot_buster.ogg",
	"grrr.ogg",
	"killsound.wav",
	"player_death.wav"
];
function FunnySound() {
	var i = Math.floor(Math.random() * sounds.length);
	audio.src = sounds[i];
	audio.play();
}

function Backrooms() {
	var backrooms_count = 14;
	var i = Math.floor(Math.random() * backrooms_count) + 1;
	window.location.href = "./backrooms/"+i+"/index.html";
}

const music = new Audio("music.ogg");
const hscroll = [ // getting this scrolling to work made me want to die
	{ offset: 0, transform: "translate(0, 0)" },
	{ offset: 0.5, transform: "translate(-120%, 0)" },
	{ offset: 0.500001, transform: "translate(120%, 0)" },
	{ offset: 1, transform: "translate(0, 0)" }
];
const hscrollBig = [
	{ offset: 0, transform: "translate(0, 0)" },
	{ offset: 0.5, transform: "translate(-428%, 0)" },
	{ offset: 0.500001, transform: "translate(428%, 0)" },
	{ offset: 1, transform: "translate(0, 0)" }
];
var playing = false;

player_text.animate(hscroll, { duration: 4000, iterations: Infinity });

function ToggleMusic() {
	playing = !playing;
	
	var player_text = document.getElementById("player_text");
	var player_cat = document.getElementById("player_cat");
	
	if (playing) {
		music.play();
		player_text.textContent = "[now playing: Macroblank - あなたを許すのは難しい]";
		player_text.animate(hscrollBig, { duration: 13000, iterations: Infinity });
		player_cat.src = "cat_vibe.gif";
	} else {
		music.pause();
		player_text.textContent = "[click to play]";
		player_text.animate(hscroll, { duration: 4000, iterations: Infinity });
		player_cat.src = "cat_sleep.png";
		
	}
}