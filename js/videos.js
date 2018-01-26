//https://www.youtube.com/feeds/videos.xml?playlist_id=PLm7Fmr93fupPfPDZ-_ZJDZ1gQvW16W-gZ
viewVid("https://www.youtube.com/feeds/videos.xml?playlist_id=PLm7Fmr93fupNcZROjhDipflsGkxy4P0xY");
//<iframe width="560" height="315" src="https://www.youtube.com/embed/p33FsCkoBko" frameborder="0" allowfullscreen></iframe>
function viewVid(url) {
  feednami.setPublicApiKey('6e18b2484f28c3f1dff3223b466f38f0e24bb9a0ab53f0581f626354496f1450');
  feednami.load(url)
    .then(feed => {
      for (var k = 0; k < feed.entries.length; k++) {
        var entry = feed.entries[k];
        displayEntry(entry);
        console.log(entry);
      }
  })
  document.getElementById("loading").innerHTML = "";
}

function displayEntry(entry) {
  var e = document.createElement("iframe");
  e.src = entry.link.replace('watch?v=', 'embed/');
  e.frameborder = '0';
  document.getElementById("page-content").appendChild(e);
}
