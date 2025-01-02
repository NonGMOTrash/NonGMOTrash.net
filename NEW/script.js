// scroll indicator

var hasScrolled = false;

window.onscroll = function()
{
	hasScrolled = true;
	document.getElementById('scroll-indicator').style.display = "none";
}

setTimeout(
	function()
	{
		if (!hasScrolled)
		{
			document.getElementById('scroll-indicator').style.display = "block";
		}
	},
	10000
);

// chattable

chattable.initialize({
	stylesheet: "chattable.css"
});
