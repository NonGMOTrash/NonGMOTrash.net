var tick;
var tick_vol = 0;

window.onload = function() {
	tick = document.getElementById("tick");
	document.getElementById("time").style.color = "White";
	updateTime();
	setInterval(updateTime, 1000);
}

function updateTime() {
	var endTime = new Date("Jan 1, 2122").getTime();
	var currentTime = new Date().getTime();
	var time = (endTime - currentTime) / 1000; // /1000 because it's in milliseconds

	var years = Math.floor(time / 31557600);
	time -= years * 31557600;
	var months = Math.floor(time / 2629800);
	time -= months * 2629800;
	var days = Math.floor(time / 86400);
	time -= days * 86400;
	var hours = Math.floor(time / 3600);
	time -= hours * 3600;
	var minutes = Math.floor(time / 60);
	time -= minutes * 60;
	var seconds = Math.round(time);

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes ;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (days < 10) {
		days = "0" + days;
	}
	if (months < 10) {
		months = "0" + months;
	}

	document.getElementById("time").innerText = years + "y " + months + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";
	
	// tick
	tick_vol = Math.min(tick_vol + 0.0075, 1);
	tick.volume = tick_vol;
	tick.play();
}
