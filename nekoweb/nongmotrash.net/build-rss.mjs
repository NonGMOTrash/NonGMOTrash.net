import { readFileSync, writeFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import sizeOf from "image-size";

const homepageDom = new JSDOM(readFileSync("./index.html", "utf8"));
const homepage = homepageDom.window.document;

function makeLinkAbsolute(relativeLink)
{
	if (relativeLink[0] == "." || relativeLink[0] == "/")
	{
		relativeLink.slice(1);
	}
	if (relativeLink.substring(0, 8) != "https://")
	{
		return "https://nongmotrash.net/" + relativeLink;
	}
	
	return relativeLink;
}

var RSS = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
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
	var link = makeLinkAbsolute(entry.getAttribute("href"));
	var guid = entries.length - i;
	var date = new Date(Date.parse(entry.querySelector("p.news-date").getAttribute("date"))).toUTCString();
	var imgElement = entry.querySelector("img");
	var imgUrl = imgElement.getAttribute("src");
	const imgBuffer = readFileSync(imgUrl);
	var imgDimensions = sizeOf(imgBuffer); 
	var imgWidth = imgDimensions.width;
	var imgHeight = imgDimensions.height;
	imgUrl = makeLinkAbsolute(imgUrl);
	var title = entry.querySelector("h1").textContent;
	title = title.trim();
	var description = entry.querySelector("p.news-description").textContent;
	description = description.trim();

	RSS += "\r\n<item>";
	RSS += "\r\n	<link>"+link+"</link>";
	RSS += "\r\n	<guid isPermaLink='false'>"+guid+"</guid>";
	RSS += "\r\n	<title>"+title+"</title>";
	RSS += "\r\n	<pubDate>"+date+"</pubDate>";
	RSS += "\r\n	<description>"+description+"</description>";
	RSS += '\r\n	<media:thumbnail url="'+imgUrl+'" width="'+imgWidth+'" height="'+imgHeight+'"/>';
	RSS += "\r\n</item>";
}

RSS += "\r\n</channel>";
RSS += "\r\n</rss>";

writeFileSync("./rss.xml", RSS, "utf8");
