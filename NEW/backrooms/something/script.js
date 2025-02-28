document.getElementById("close").addEventListener("click", function(){
	document.getElementById("content").style.display = "none";
	var audio = new Audio('my_time.webm');
	audio.play();
})

document.getElementById("reach").addEventListener("click", function(){
	document.getElementById("something").src = "MEWO.webp";
	document.getElementById("close").style.display = "none";
	document.getElementById("reach").style.display = "none";
	var audio = new Audio('meow.mp3');
	audio.play();
})
