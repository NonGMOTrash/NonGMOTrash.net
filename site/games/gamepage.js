let downloadPopup = document.getElementById("download-popup");

let openTime = 0;

function downloadClicked()
{
	downloadPopup.showModal();
	openTime = Date.now();
};

document.addEventListener("click", function()
{
	if (Date.now() - openTime < 10)
	{
		return;
	}

	const rect = downloadPopup.getBoundingClientRect();
	const clickInDialog = (
		rect.top <= event.clientY && // event is the click
		rect.bottom >= event.clientY &&
		rect.left <= event.clientX &&
		rect.right >= event.clientX
	)

	if (!clickInDialog)
	{
		downloadPopup.close();
		open = false;
	}
});
