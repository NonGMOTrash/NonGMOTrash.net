// NAVIGATION

var imagesBtn = document.getElementById("imagesBtn");
var videosBtn = document.getElementById("videosBtn");
var imagesTab = document.getElementById("imagesTab");
var videosTab = document.getElementById("videosTab");

videosTab.style.display = "none";

imagesBtn.onclick = function() {
	imagesTab.style.display = "block";
	videosTab.style.display = "none";
	console.log("images");
}
videosBtn.onclick = function() {
	imagesTab.style.display = "none";
	videosTab.style.display = "block";
}


// IMAGES

var pic = document.getElementsByClassName("pic")[0];
var picTitle = document.getElementsByClassName("title")[0];
var scrapsList = document.getElementById("scraps").children;

for (const scrap of scrapsList) {
	scrap.onclick = function() {
		pic.src = scrap.src;
		picTitle.innerText = scrap.title;
	}
}

window.addEventListener('scroll', function() {
	if (pageYOffset*0.0001 > 1 || pageYOffset*0.0001 < 0.2) {
		return;
	} else {
		pic.style.transform = 'scale('+pageYOffset*0.0001+');';
	}
});
