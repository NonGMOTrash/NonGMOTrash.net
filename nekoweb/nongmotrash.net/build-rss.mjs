import { readFileSync, writeFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const homepageDom = new JSDOM(readFileSync("./index.html", "utf8"));
const homepage = homepageDom.window.document;

var RSS = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>

<title>NonGMOTrash</title>
<link>https://nongmotrash.net</link>
<description>
	updates on the site, as well as all of my projects. anything that goes in the "news" section goes here.
</description>
`

var entries = homepage.getElementsByClassName("news-entry");

for (var i = 0; i < entries.length; i++)
{
	var entry = entries[i];
	console.log(entry);
	var guid = entry.getAttribute("href");
	if (guid[0] == ".")
	{
		guid = "https://nongmotrash.net" + guid.slice(1);
	}
	var date = new Date(Date.parse(entry.querySelector("p.news-date").getAttribute("date"))).toUTCString();
	var imgUrl = entry.querySelector("img").getAttribute("src");
	imgUrl = "https://nongmotrash.net/" + imgUrl;
	var imgSize = 1; // WIP
	var title = entry.querySelector("h1").textContent;
	title = title.trim();
	var description = entry.querySelector("p.news-description").textContent;
	description = description.trim();

	RSS += "\r\n<item>";
	RSS += "\r\n	<guid>"+guid+"</guid>";
	RSS += "\r\n	<title>"+title+"</title>";
	RSS += "\r\n	<pubDate>"+date+"</pubDate>";
	RSS += "\r\n	<description>"+description+"</description>";
	RSS += '\r\n	<enclosure url="'+imgUrl+'" type="image/png" length="'+imgSize.toString()+'" />';
	RSS += "\r\n</item>";
}

RSS += "\r\n</channel>";
RSS += "\r\n</rss>";

writeFileSync("./rss.xml", RSS, "utf8");
