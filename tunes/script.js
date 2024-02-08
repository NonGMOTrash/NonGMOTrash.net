var allCategories = [
	"adhd", "attack-on-titan", "chiptune"
];

function ShowCategory(category)
{
	for (let i = 0; i < allCategories.length; i++)
	{
		document.getElementById(allCategories[i]).style.display = "none";
	}

	document.getElementById(category).style.display = "block";
}

function Play(songTitle, songID)
{
	document.getElementById("song-source").src = "https://docs.google.com/uc?export=download&id=1vFNQ7u17O9RDrL_j5wbYTu8NtkEEYHRJ";
	document.getElementById("song").play();
}
