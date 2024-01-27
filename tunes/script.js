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

function Play(songTitle, songUrl)
{
	SCM.play({title:songTitle,url:songUrl});
}

function Exit() // have to murder SCM player
{
	console.log()
}
