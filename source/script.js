// scroll indicator

var hasScrolled = false;

window.onscroll = function()
{
	hasScrolled = true;
	document.getElementById('scroll-indicator').style.visibility = "hidden";
}

if (document.documentElement.scrollWidth > 1500)
{
	setTimeout(function()
	{
		if (!hasScrolled)
		{
			document.getElementById('scroll-indicator').style.visibility = "visible";
		}
	},
	4000);
}

// project progress

window.onload = function()
{
	const colorActive = "#a2fad8";
	const colorBackburner = "#e8b66b";
	const colorHiatus = "#943b63";

	var projects = document.getElementById("progress").children;

	for (var i = 0; i < projects.length; i++)
	{
		if (projects[i].className != "project") {
			break;
		}

		var completion = projects[i].getAttribute("completion");
		var color = colorActive;
		if (projects[i].getAttribute("status") == "backburner") {
			color = colorBackburner;
		} else if (projects[i].getAttribute("status") == "hiatus") {
			color = colorHiatus;
		}

		projects[i].style.borderColor = color;
		projects[i].style.background = ( //          \/ convert % into degrees
				"conic-gradient("+color+" "+completion*3.6+"deg, var(--color-fg) 0deg");
		projects[i].setAttribute("title", projects[i].getAttribute("status"));

		var text = projects[i].querySelector(".text");
		text.textContent += "\n("+completion+"%)";
	}
}

// chattable

var chattableCSS = `

:root {
	--notification-sfx: url("https://files.catbox.moe/fswekd.wav");
}

@font-face {
	font-family: caskaydiaCove;
	src: url("https://files.catbox.moe/crddlv.woff2");
}

body {
	font-family: caskaydiaCove;
	font-size: 16px;
	background: black;
	color: white;
}

.allMessages {
	border: solid 1px gray;
	border-left, border-right: solid 2px gray;
	/*border-bottom: 0;*/
}

#top_banner {
	background: orange;
	font-family: caskaydiaCove;
}

#timestamp {
	height: 1em;
	width: 30%;
	margin: 0;
	margin-left: auto;
	border: 1px solid gray;
}

#input {
	border: 3px solid gray;
	border-radius: 0;
	background: black;
	color: white;
}

#input:empty::before {
	color: gray;
	content: "meow";
}
`

window.addEventListener("load", function() {
	document.getElementById("chattable").contentWindow.postMessage(chattableCSS, "*");
});
