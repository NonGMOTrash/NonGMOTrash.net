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
