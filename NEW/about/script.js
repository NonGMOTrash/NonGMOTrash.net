function toggleSection(sectionId)
{
	let section = document.getElementById(sectionId);
	let sectionHeight = section.getBoundingClientRect().height;

	console.log(sectionHeight);
	if (sectionHeight > 0)
	{
		section.style.maxHeight = "0px";
	}
	else
	{
		section.style.maxHeight = "100%";
		// small issue: if the section is on the shorter side, there will appear to be a delay when closing the seciton bc it starts from 100% down rather than from the bottom of the content
	}
}
