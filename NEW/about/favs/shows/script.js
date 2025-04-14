function updateDescription(game) {
	switch(game) {
		case "arcane":
			document.getElementById("thoughts").innerHTML = "Arcane<br>currently my favorite show, with the caveot that it has only 1 season. the thought of a league of legends tv show might sound horrific, but trust me!! its actually really good. like, borderline perfect in my opinion - it's hard to find anything that isn't brilliantly well done. the only thing i don't like is the use of the music at times (imagine dragons 😠😠😠), but the multiple plotlines and characters are all great and i was impressed by how well everything was woven together. genuinely feels like 2-3 shows in one.";
			break;
		case "atla":
			document.getElementById("thoughts").innerHTML = "Avatar: The Last Airbender<br>a close second for my favorite show. i personally see this as the architypical 'perfect story.' it doens't do anything particularly unique, it's just well executed. i really appreciate stories that are really well rounded like this, though the world building stands out to me as particularly strong. the only complanit is i think the first few episodes don't make the <i>best</i> first impression.. it's not terrible, but it comes off as a little kidish. amazing show though.";
			break;
		case "paranoia_agent":
			document.getElementById("thoughts").innerHTML = "Paranoia Agent<br>very strange show. i absolutely love the premise but the execution admitedly isn't the best? the first few epsidoes are spot on, but it slows down in the middle and the ending is a bit weird / underwhelming in my opinion. but even if it feels kind of 'bad,' there's a lot about this show that really resonated with me so i feel like it deserves to be included here.";
			break;
	}
}
