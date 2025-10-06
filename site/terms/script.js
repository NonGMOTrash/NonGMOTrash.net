var button_accept;
button_accept = document.getElementById("button_accept");
var button_no;
button_no = document.getElementById("button_no");

function Swap() {
	button_accept.innerHTML = "no";
	button_no.innerHTML = "accept";
	console.log("swap");
}

function Unswap() {
	button_accept.innerHTML = "accept";
	button_no.innerHTML = "no";
	console.log("unswap");
}

function Escape() {
	window.location.href = "../index.html";
}
