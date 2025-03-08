// SECTION SWITCHING

var sections = [
	document.getElementById("digital"),
	document.getElementById("pixel"),
	document.getElementById("traditional"),
	document.getElementById("drawabox"),
	document.getElementById("images"),
	document.getElementById("videos"),
	document.getElementById("photos")
]

var buttons = [
	document.getElementById("digital-button"),
	document.getElementById("pixel-button"),
	document.getElementById("traditional-button"),
	document.getElementById("drawabox-button"),
	document.getElementById("images-button"),
	document.getElementById("videos-button"),
	document.getElementById("photos-button")
]

function switchSection(section) {
	for (var i = 0; i < sections.length; i++)
	{
		if (sections[i].id == section) {
			sections[i].style.display = "flex";
			buttons[i].style.textDecoration = "underline";

		}
		else {
			sections[i].style.display = "none";
			buttons[i].style.textDecoration = "none";
		}
	}
}

switchSection("digital");

// IMAGE POPUPS

var popup = document.getElementById("popup");
var popupImg = popup.querySelector("img");
var popupH = popup.querySelector("h1");
var popupP = popup.querySelector("p");

var imgs = document.querySelectorAll("img");
var images = []; // filtered to only the actual artwork 

for (var i = 0; i < imgs.length; i++) {
	thisImage = imgs[i];
	if (thisImage.getAttribute("description") != null) {
		images.push(thisImage);
		var thisIndex = images.length-1;
		//thisImage.addEventListener("click", function() { clickedImage=thisImage;popupImage(); } );
		thisImage.onclick = popupImage.bind(thisImage, thisIndex);
	}
}

function popupImage(imgIndex) {
	thisImage = images[imgIndex];

	popupImg.src = thisImage.src;
	popupImg.classList = thisImage.classList;

	popupH.innerHTML = thisImage.title;

	popupP.innerHTML = thisImage.getAttribute("date"); 
	if (thisImage.getAttribute("description") != "")
	{
		popupP.innerHTML += " • " + thisImage.getAttribute("description");
	}

	popup.style.display = "flex";
}

popup.addEventListener("click", function() {
	popup.style.display = "none";
});
