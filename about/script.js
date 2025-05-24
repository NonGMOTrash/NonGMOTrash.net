// SECTION TOGGLES

function toggleSection(sectionId)
{
	// console.log(sectionId);
	if (sectionId === "")
	{
		return;
	}

	let section = document.getElementById(sectionId);
	let sectionHeight = section.getBoundingClientRect().height;

	if (sectionHeight > 0)
	{
		section.style.maxHeight = "0px";
	}
	else
	{
		section.style.maxHeight = "130%";
		// TODO: this value should be dynamically chosen based on the height of the section. if the section is too short, closing it will have a weird delay because it starts from 130% down, rather than the bottom of the section. and if the section is longer than 130%, then the bottom will be cut off :(
	}
}

// opens the correct section and scrolls down when using has links (i.e. nongmotrash/about#follow-me)
if (window.location.hash !== "")
{
	toggleSection((window.location.hash).slice(1)); // slice() is needed to remove the first character (#) from the beginning
	setTimeout(function()
	{
		document.getElementById("content").scrollTop += 200;
	}, 500);
}


// HANDELING POLAROID ONCLICK

var activePolaroid = "";

function polaroidClicked(polaroid)
{
	let thisPolaroid = document.getElementById(polaroid);

	if (document.documentElement.scrollWidth > 1200 || activePolaroid === polaroid)
	{
		window.location = "./favs/"+polaroid+"/index.html";
	}
	else
	{
		thisPolaroid.focus();
		activePolaroid = polaroid;
	}
}

