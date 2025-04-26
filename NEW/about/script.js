function toggleSection(sectionId)
{
	console.log(sectionId);
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

toggleSection((window.location.hash).slice(1)); // slice() is needed to remove the first character (#) from the beginning

