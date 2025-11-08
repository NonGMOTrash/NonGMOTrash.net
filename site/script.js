// SCROLL INDICATOR

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

// MY JS WARNING

/*                       js-warning was taken */
document.getElementById("nongmotrash-js-warning").style.display = "none";

// PROJECT PROGRESS PIE CHARTS

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

