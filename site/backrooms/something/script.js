// SETUP YT PLAYER

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('yt-player', {
		height: '0',
		width: '0',
		videoId: 'mzgYj_qCHLg',
		playerVars: {
			'playsinline': 1
		},
		events: {}
	});
}

// ACTUAL FUNCTIONALITY

document.getElementById("close").addEventListener("click", function(){
	document.getElementById("content").style.display = "none";
	player.playVideo();
})

document.getElementById("reach").addEventListener("click", function(){
	document.body.style.background = "pink";
	document.getElementById("something").src = "MEWO.webp";
	document.getElementById("close").style.display = "none";
	document.getElementById("reach").style.display = "none";
	var audio = new Audio('meow.mp3');
	audio.play();
})
