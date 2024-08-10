// WELCOME TEXT

const hscrollWelcome = [
	{ offset: 0, transform: "translate(100%, 0)" },
	{ offset: 1, transform: "translate(-100%, 0)" }
];
const textRainbow = [
	{ offset: 0 / 7, color: "#ff0000" },
	{ offset: 1 / 7, color: "#ff00de" },
	{ offset: 2 / 7, color: "#2b00ff" },
	{ offset: 3 / 7, color: "#00baff" },
	{ offset: 4 / 7, color: "#00ff53" },
	{ offset: 5 / 7, color: "#d4ff00" },
	{ offset: 6 / 7, color: "#ff6300" },
	{ offset: 7 / 7, color: "#ff0000" }
];

// UPDATE DAY COUNTER

const DAY = 1000 * 60 * 60 * 24;

var lastUpdate = new Date("2024-8-9").getTime();
var currentDay = new Date().getTime();
var days = Math.floor(Math.abs((currentDay - lastUpdate) / DAY))
var dayCount = document.getElementById("day-count");
dayCount.textContent = days + " DAY";
if (days !== 1) {
	dayCount.textContent = dayCount.textContent + "S";
}

// FUNNY SOUND BUTTON

const sounds = [
	"vine_boom.mp3",
	"explosion.mp3",
	"sans.mp3",
	"pot_buster.ogg",
	"grrr.ogg",
	"killsound.ogg",
	"player_death.ogg"
];
function FunnySound() {
	var i = Math.floor(Math.random() * sounds.length);
	var audio = new Audio();
	audio.src = sounds[i];
	audio.play();
}

// BACKROOMS BUTTON

function Backrooms() {
	var backrooms_count = 14;
	var i = Math.floor(Math.random() * backrooms_count) + 1;
	window.location.href = "./backrooms/"+i+"/index.html";
}

