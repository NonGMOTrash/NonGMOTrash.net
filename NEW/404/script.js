var loose;
var letter;
var portal;

var hasFallen = false;

loose = document.getElementById("loose");
letter = document.getElementById("letter");
portal = document.getElementById("portal");

loose.onclick = function()
{
	if (!hasFallen) {
		letter.animate(
			[
				{ transform: 'rotate(4deg) translate(0, 0)' },
				{ transform: 'rotate(4deg) translate(0%, 500%)' }
			],
			{
				duration: 1000,
				easing: "ease-in",
				fill: "forwards"
			}
		);

		hasFallen = true;

	}
}

portal.onclick = function()
{
	if (hasFallen)
	{
		window.location.href = "../backrooms/index.html";
	}
}

setTimeout(function() {
	portal.style.pointerEvents = "auto";
}, 500);


