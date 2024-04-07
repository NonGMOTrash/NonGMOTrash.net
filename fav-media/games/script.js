function updateDescription(game) {
	switch(game) {
		case "omori":
			document.getElementById("thoughts").innerHTML = "OMORI<br>my favorite game, with a few asterisks. its definitely is not the kind of game i'd just recomend to almost anyone, as it has some pretty major problems... i don't really think it's the 'best' game i've played, but it's still my favorite, if that makes since. the gameplay is mediocre, the illustrated art is amazing but the pixel art is just okay (maybe borderline good), the music is amazing, but what really makes it my favorite is just the story. the characters actually aren't the best in my opinion (the dialogue can be weird at times), but the overall concept and the way it was portrayed really spoke to me. i cried like a baby at the end, hehe... i think about this game a lot. it seems so close to perfection, and yet so flawed.";
			break;
		case "deltarune":
			document.getElementById("thoughts").innerHTML = "deltarune<br>i remember initially being somewhat unimpressed with chapter 1 (and i still kind of am), but chapter 2 was INCREDIBLE, almost perfect in my opinion. if toby and his crew can keep up that level of quality, this will easily be my new favorite game. this is one of the few RPGs that isn't head back by it's gameplay, the combat system is fairly good (although still not amazing), and i think the plot and especially the characters extremely compelling. this is my most anticipated game (and it will probably remain so for another 5ish years lol)";
			break;
		case "undertale":
			document.getElementById("thoughts").innerHTML = "UNDERTALE<br>my childhood favorite. in hindsight, i don't think it's nearly as good as deltarune, but i still is a very important game to me personally. if i haven't played it, there's a good chance i wouldn't have ever started making games. it's what made me realize that games were art, if you'll excuse me being a little pretentious.";
			break;
		case "strive":
			document.getElementById("thoughts").innerHTML = "GUILTY GEAR -STRIVE-<br>it all started when at a friends house when my friend showed me potemkin... ahhh im crap at this game but i love it. one of the best looking games i have ever seen, i adore literally every single character both aesthetically and mechanically, and it plays very well. i can understand why fans of previous titles are a bit let down by strive, and i hope they maybe try to bring back some of the old complexity later down the line, but strive is still has a ton of depth i think.";
			break;
		case "tf2":
			document.getElementById("thoughts").innerHTML = "Team Fortress 2<br>my favorite multiplayer shooter by lightyears. it has a ton of depth while being very easy (and fun) to pick up and play. it's extremely well designed; all 9 classes and their interactions are well thought out, as were (for the most part) the plethora of unlockable weapons. the loadout system is amazing in this game; alternative weapons somehow completely change the way you play while simultaneously still feeling true to the class wielding them. i still have a vague sliver of hope for some kind of tf3 like CS, but even if that never happens i'll be content to play with my friends on community servers away from all the bots.";
			break;
	}
}
