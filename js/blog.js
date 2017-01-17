
//http://devinstestblog2090.blogspot.com/feeds/posts/default
var url = 'http://punahoufrc2090.blogspot.com/feeds/posts/default';
var div = document.getElementById("blog-div");
feednami.setPublicApiKey('6e18b2484f28c3f1dff3223b466f38f0e24bb9a0ab53f0581f626354496f1450');
feednami.load(url)
  .then(feed => {
    for (var k = 0; k < feed.entries.length; k++) {
      var entry = feed.entries[k];
      displayEntry(entry);
    }
})

function displayEntry(entry) {
  var container = document.createElement("div");
  container.className = "blogpost"
  var title = document.createElement("b");
  title.className = "blog-title";
  title.innerHTML = entry.title;
  container.appendChild(title);
  container.appendChild(document.createElement("br"));
  var author = document.createElement("b");
  author.className = "blog-authorline";
  author.innerHTML = "By " + entry.author;
  container.appendChild(author);
  container.appendChild(document.createElement("hr"));
  var text = document.createElement("p");
  text.innerHTML = entry.description;
  container.appendChild(text);
  document.getElementById("page-content").appendChild(container);
  document.getElementById("loading").innerHTML = "";


}
