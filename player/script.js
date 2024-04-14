var playing = false;
var song_name;
var music;
var text;
var cat;
var noSongMsg = "click to play";

window.addEventListener('load', function () {
	// starts on page load
	song_name = window.name; // this is a hacky way to pass in the song name
	
	music = document.getElementById("music");
	text = document.getElementById("text");
	cat = document.getElementById("cat");
	
	music.src = song_name;

	SetTitle(noSongMsg)
	
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
		
		if (song_name == "macroblank.ogg") { SetTitle("now playing: あなたを許すのは難しい - Macroblank") }
		else if (song_name == "yoki_house.ogg") { SetTitle("now playing: Yoki's House - Dweller's Empty Path OST - Camellia, Temmie Chang & Toby Fox") }
		else if (song_name == "downwell_shop.ogg") { SetTitle("now playing: Mochi Yasan - Eirik Suhrke") }
		else if (song_name == "greenroom.ogg") { SetTitle("now playing: Green Room - Toby Fox") }
		else if (song_name == "my_burden.ogg") { SetTitle("now playing: My Burden Is Light - NightMargin") }
		else if (song_name == "spagonia.ogg") { SetTitle("now playing: Tomoya Ohtani(?) - Spagonia (Day)") }
		else if (song_name == "flipside.ogg") { SetTitle("now playing: Naoko Mitome(?) - Flipside") }
		else if (song_name == "scrybes.ogg") { SetTitle("now playing: The Four Scrybes - Jonah Senzel") }
		else if (song_name == "viridian_city.ogg") { SetTitle("now playing: Viridian City (Mario's Mystery Meat Ver) - Junichi Masuda"); }
		else if (song_name == "dadshop.ogg") { SetTitle("now playing: I Think My Dad Shops Here - OMORI OST- Pedro Silva") }
		else if (song_name == "dorito.ogg") { SetTitle("now playing: Dorito Dust - Coda") }
		else if (song_name == "faint_glow.ogg") { SetTitle("now playing: Faint Glow - Toby Fox") }
		else if (song_name == "cheap_shop.ogg") { SetTitle("now playing: Cheap Shop - Anamanaguchi") }
		else {
			SetTitle(window.name);
		}
		
	} else {
		music.pause();
		SetTitle(noSongMsg);
		cat.src = "cat_sleep.png";
	}
}

function SetTitle(title) {
	text.textContent = title;

	var width = text.scrollWidth + 12;
	var anim = [ // getting this scrolling to work drove me to the brink of my sanity
		{ offset: 0, transform: "translate("+110+"px, 0)" },
		{ offset: 1, transform: "translate(-"+width+"px, 0)" }
	];

	text.animate(anim, { duration: 25*width, iterations: Infinity });
}
