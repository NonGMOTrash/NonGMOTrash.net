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
		videoId: 'czTksCF6X8Y',
		playerVars: {
			'playsinline': 1
		},
		events: {}
	});
}

var vid = document.getElementById("vid");
var vid_src = document.getElementById("vid-src");

function Pizza()
{
	vid_src.src = "hypno.webm";
	vid.load();
	document.title = "ooooo u love pizza";
	vid.style.cursor = "auto";
	player.playVideo();
}
