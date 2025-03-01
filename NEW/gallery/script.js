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

console.log(buttons);

function switchSection(section) {
	for (var i = 0; i < sections.length; i++)
	{
		if (sections[i].id == section) {
			sections[i].style.display = "block";
			buttons[i].style.textDecoration = "underline";


		}
		else {
			sections[i].style.display = "none";
			buttons[i].style.textDecoration = "none";
		}
	}
}

switchSection("digital");

// WIP code to automatically create title and description elements for images.... maybe not worth the effort
			//
			//for (var j = 0; j < sections[i].children.length; j++) {
			//
			//	var title = document.createElement("p");
			//	title.classList.add("title");
			//	title.textContent = sections[i].getAttribute("title");
			//	sections[i].children[j].appendChild(title);
			//
			//	var desc = document.createElement("p");
			//	desc.classList.add("description")
			//	desc.textContent = sections[i].getAttribute("date") + " • " + sections[i].getAttribute("description");
			//	sections[i].children[j].appendChild(desc);
			//
			//}
