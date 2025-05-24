# [nongmotrash.net](https://nongmotrash.net)

this is my personal website, hosted on [nekoweb](https://nekoweb.org) as well as github pages as a backup. if you're making your own site, feel free to copy any code u like!! i don't mind... although credit would be appreciated :]

# credits

i made pretty much the entire site, except for the things i didn't. check the [credits page](https://nongmotrash.net/credits)

# how i made it

this is kinda just a basic technical overview. i'm *far* from a professional web developer, and i'm mostly learning as i go along, so a lot of things are done in a very unconvential way. i used no static site builder or frameworks or libraries, pretty much the entire site is just raw HTML / CSS / JS. i originally only deployed the site using [github pages](https://pages.github.com/) for free, but i eventually bought a custom domain and started also deploying to nekoweb (via [deploy2nekoweb](https://deploy.nekoweb.org/)) because i really like the community and wanted to be involved in it.

because i wanted to start from the basics, i didn't use any web frameworks or anything. i've had some people tell me this is very weird, but honestly, i think it's probably for the best. the web is pretty bloated in general, and these are just fairly simple static webpages, so using a framework kinda seems overkill.

i also write and organize my code in a bit of a strange way... each subdirectory is for a different page on the site, with all the code and assets for that page going in that directory. i like this way of organization... also, i made a special stylesheet called `global.css` that essentially serves as a base style for (almost) all of the pages. most pages have 2 stylesheets then, `global.css` and `style.css` that's the styling for that page specifically. `style.css` is imported 2nd, so that it can override any rules defined in `global.css` as needed. in general i found this to be extremely helpful on cutting down on repeated code.

## things i'd change

- use css grids over flexboxes (most of the time). i didn't learn them until i was nearly finished and i think they are better than flexboxes in most situations
- use a static site generator for the `writings` and `links` pages
- use typescript instead of javascript
- use SCSS
- stop nesting css rules, i think it's kinda 


i probably *will* rewrite this site for a third time some day, but that day is not today.


