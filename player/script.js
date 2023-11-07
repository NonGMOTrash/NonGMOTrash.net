var playing = false;
var song_name;
var music;
var text;
var cat;

window.addEventListener('load', function () {
	// starts on page load
	song_name = window.name; // this is a hacky way to pass in the song name
	
	music = document.getElementById("music");
	text = document.getElementById("text");
	cat = document.getElementById("cat");
	
	music.src = song_name;

	text.textContent = "[click to play]";
	SetScrolling("120%", 4000);
	
	if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
		ToggleMusic();
	}
	
	// special
	if (song_name == "my_burden.ogg") {
		cat.style.visibility = "hidden";
	}
})

function ToggleMusic() {
	playing = !playing;
	
	if (playing) {
		music.play();
		cat.src = "cat_vibe.gif";
		
		if (song_name == "macroblank.ogg") {
			text.textContent = "[now playing: Macroblank - あなたを許すのは難しい]";
			SetScrolling("428%", 7000);
		} else if (song_name == "yoki_house.ogg") {
			text.textContent = "[now playing: Camellia, Temmie Chang & Toby Fox - Yoki's House]";
			SetScrolling("765%", 11000);
		} else if (song_name == "downwell_shop.ogg") {
			text.textContent = "[now playing: Eirik Suhrke - Mochi Yasan]";
			SetScrolling("440%", 8500);
		} else if (song_name == "greenroom.ogg") {
			text.textContent = "[now playing: Toby Fox - Green Room]";
			SetScrolling("380%", 6600);
		} else if (song_name == "my_burden.ogg") {
			text.textContent = "[now playing: NightMargin - My Burden Is Light]";
			SetScrolling("500%", 9700);
		} else if (song_name == "spagonia.ogg") {
			text.textContent = "[now playing: Tomoya Ohtani(?) - Spagonia (Day)]";
			SetScrolling("490%", 9400);
		} else if (song_name == "flipside.ogg") {
			text.textContent = "[now playing: Naoko Mitome(?) - Flipside]";
			SetScrolling("470%", 8000);
		} else if (song_name == "scrybes.ogg") {
			text.textContent = "[now playing: Jonah Senzel - The Four Scrybes]";
			SetScrolling("485%", 8400);
		} else if (song_name == "viridian_city.ogg") {
			text.textContent = "[now playing: Junichi Masuda - Viridian City (Mario's Mystery Meat Ver)]";
			SetScrolling("800%", 12500);
		} else if (song_name == "dadshop.ogg") {
			text.textContent = "[now playing: Pedro Silva - I Think My Dad Shops Here]";
			SetScrolling("515%", 8050);
		} else if (song_name == "dorito.ogg") {
			text.textContent = "[now playing: Coda - Dorito Dust]";
			SetScrolling("318%", 6000);
		} else if (song_name == "faint_glow.ogg") {
			text.textContent = "[now playing: Toby Fox - Faint Glow]";
			SetScrolling("321%", 6100);
		}
		
	} else {
		music.pause();
		text.textContent = "[click to play]";
		cat.src = "cat_sleep.png";
		SetScrolling("120%", 2500);
	}
}

function SetScrolling(distance, duration) {
	var anim = [ // getting this scrolling to work made me want to die
		{ offset: 0, transform: "translate(115%, 0)" },
		{ offset: 1, transform: "translate(-"+distance+", 0)" }
	];
	
	text.animate(anim, { duration: duration, iterations: Infinity });
}

