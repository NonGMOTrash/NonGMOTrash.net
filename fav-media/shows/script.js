function updateDescription(game) {
	switch(game) {
		case "arcane":
			document.getElementById("thoughts").innerHTML = "Arcane<br>currently my favorite show, with the caveot that it has only 1 season. the thought of a league of legends tv show might sound horrific, but like, trust me!! its actually really good. like, borderline perfect in my opinion - literally 0 major problems. the only thing i don't like is the some of the music (imagine dragons 😠), but the multiple plotlines and characters are all superb and woven together extremely well.";
			break;
		case "atla":
			document.getElementById("thoughts").innerHTML = "Avatar: The Last Airbender<br>a close second for my favorite show. i personally see this as the architypical 'perfect story.' it's very well rounded which is something i really appreciate, with the world building especially being particularly strong, but every aspect is great. the only complanit is i think the first few episodes don't make the <i>best</i> first impression.. it's not terrible, but it comes off as a little kidish. amazing show though.";
			break;
		case "paranoia_agent":
			document.getElementById("thoughts").innerHTML = "Paranoia Agent<br>very strange show. i absolutely love the premise but the execution admitedly isn't the best? the first few epsidoes are spot on, but it slows down in the middle and the ending is a bit weird / underwhelming in my opinion. but even if it feels kind of 'bad,' there's a lot about this show that really resonated with me so i feel like it deserves to be included here.";
			break;
	}
}
