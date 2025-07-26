// GENERATE DOCUMENT OUTLINE

const outline = document.getElementById("outline");
const headers = document.querySelectorAll("h1, h2");
const headerIds = [];
let addedElements = false;

// GENERATE OUTLINE
generateOutline();

function generateOutline()
{
	if (headers.length > 1)
	{
		for (var i = 0; i < headers.length; i++)
		{
			if (!headers[i].id)
			{
				headers[i].id = "header-" + i.toString();
			}
			headerIds[i] = headers[i].id;
		}

		const outlineItems = document.createElement("div");
		outlineItems.classList.add("items");
		outline.appendChild(outlineItems);

		for (var i = 0; i < headers.length; i++)
		{
			var element;
			if (addedElements === false)
			{
				element = document.createElement("a");
			}
			else
			{
				element = outlineItems.children[i];
			}

			if (i != 0) {
				element.innerText = headers[i].innerText;

				if (headers[i].tagName === "H2")
				{
					element.style.fontSize = "1rem";
					element.style.textIndent = "1rem";
				}

				if (headers[i].innerText.length > 33) {
					element.style.transform = "scaleX(0.825)";
					element.style.left = "-2.1rem"; // i have no idea why this line is necessary
				}
			} else {
				element.innerText = "Intro";
			}
			element.href = "#" + headerIds[i];

			outlineItems.appendChild(element);
		}

		var textWidth = outlineItems.getBoundingClientRect().width;
		outline.style.setProperty("--item-width", String(textWidth+11)+"px");

		addedElements = true;

	} else {
		outline.style.display = "none";
	}
}

window.addEventListener("resize", generateOutline);

// INSERT FOOTER BUTTONS
document.getElementById("footer").innerHTML = `
	<p>
		<a href="../../index.html">read some more?</a>
		//
		<a href="../../../index.html">go home</a>
	</p>
`;

