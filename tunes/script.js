var allCategories = [
	"adhd", "attack-on-titan"
];

function ShowCategory(category)
{
	for (let i = 0; i < allCategories.length; i++)
	{
		document.getElementById(allCategories[i]).style.display = "none";
	}

	document.getElementById(category).style.display = "block";
}
