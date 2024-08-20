// NAVIGATION

// var imagesBtn = document.getElementById("imagesBtn");
// var videosBtn = document.getElementById("videosBtn");
// var imagesTab = document.getElementById("imagesTab");
// var videosTab = document.getElementById("videosTab");
//
// imagesBtn.onclick = function() {
// 	imagesTab.display = "block";
// 	videosTab.display = "none";
// 	console.log("images");
// }
// videosBtn.onclick = function() {
// 	imagesTab.display = "none";
// 	videosTab.display = "block";
// }


// IMAGES

var pic = document.getElementsByClassName("pic")[0];
var picTitle = document.getElementsByClassName("title")[0];

document.querySelectorAll("img").forEach(function(img) {
	img.onclick = function() {
		pic.src = img.src;
		picTitle.innerText = img.title;
	}
})
