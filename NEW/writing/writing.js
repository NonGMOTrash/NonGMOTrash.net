window.onload = function(){
	// GENERATE DOCUMENT OUTLINE

	const headers = document.querySelectorAll("h1, h2");

	for (var i = 0; i < headers.length; i++)
	{
		headers[i].id = "header-" + i.toString();
	}

	const outline = document.getElementById("outline");
	for (var i = 0; i < headers.length; i++)
	{
		const element = document.createElement("a");
		element.innerText = i.toString() + ". ";
		if (i != 0) {
			element.innerText += headers[i].innerText;
		} else {
			element.innerText += "Intro";
		}
		element.href = "#header-" + i.toString();

		outline.appendChild(element);
	}

	// INSERT FOOTER BUTTONS
	document.getElementById("footer").innerHTML = `
		<p>
			<a href="../index.html">read some more?</a>
			//
			<a href="../../index.html">go home</a>
		</p>
	`;
}

