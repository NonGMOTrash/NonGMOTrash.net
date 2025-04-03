// GENERATE DOCUMENT OUTLINE

const outline = document.getElementById("outline");
const headers = document.querySelectorAll("h1, h2");

if (headers.length > 1)
{
	for (var i = 0; i < headers.length; i++)
	{
		headers[i].id = "header-" + i.toString();
	}

	const outlineItems = document.createElement("div");
	outlineItems.classList.add("items");
	outline.appendChild(outlineItems);

	for (var i = 0; i < headers.length; i++)
	{
		const element = document.createElement("a");
		if (i != 0) {
			element.innerText = headers[i].innerText;
			//if (headers[i].innerText.length > 30) {
			//	element.style.transform = "scaleX(0.85)";
			//	element.style.left = "-1.8rem"; // i have no idea why this is necessary
			//}
		} else {
			element.innerText = "Intro";
		}
		element.href = "#header-" + i.toString();

		outlineItems.appendChild(element);
	}

	var textWidth = outlineItems.getBoundingClientRect().width;
	textWidth = 0;
	outline.style.setProperty("--item-width", String(textWidth+11)+"px");

} else {
	outline.style.display = "none";
}

// INSERT FOOTER BUTTONS
document.getElementById("footer").innerHTML = `
		<p>
			<a href="../../index.html">read some more?</a>
			//
			<a href="../../../index.html">go home</a>
		</p>
	`;

