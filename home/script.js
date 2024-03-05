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

var lastUpdate = new Date("2024-3-3").getTime();
var currentDay = new Date().getTime();
var days = Math.floor(Math.abs((currentDay - lastUpdate) / DAY))
var dayCount = document.getElementById("day-count");
dayCount.textContent = days + " DAY";
if (days !== 1) {
	dayCount.textContent = dayCount.textContent + "S";
}

// GREETING

var greetingText;
var greetingImg;

greetingText = document.getElementById("greeting-text");
greetingImg = document.getElementById("greeting-img");

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var hour = today.getHours();

console.log("hour:"+hour+" day:"+day+" month:"+month);

if (month === 7 && day === 3) {
	// air conditioning appreciation day
	greetingText.textContent = "i fucking love air conditioning";
	greetingImg.src = "time_air.png";
} else if (month === 7 && day === 4) {
	// 4th of july
	greetingText.textContent = "merica";
	greetingImg.src = "time_4th.gif";
} else if (month === 8 && day === 31) {
	// halloween
	greetingText.textContent = "have a sPoOkY hAlLoWeEn";
	greetingImg.src = "time_halloween.gif";
} else if (month === 11 && day === 23) {
	// thanksgiving
	greetingText.textContent = "happy free bird day";
	greetingImg.src = "time_thanksgiving.gif";
} else if (month === 12 && day === 25) {
	// xmas
	greetingText.textContent = "merry christmas";
	greetingImg.src = "time_christmas.gif";
} else if (hour >= 23 || hour < 6) {
	// night
	greetingText.textContent = "..shouldn't you be asleep? :þ";
	greetingImg.src = "time_night.gif";
} else if (hour >= 6 && hour < 11) {
	// morning
	greetingText.textContent = "good morning! (*´▽｀)ゞ";
	greetingImg.src = "time_morning.gif";
} else {
	// afternoon
	greetingText.textContent = "good afternoon ᐛ";
	greetingImg.src = "time_afternoon.gif";
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

