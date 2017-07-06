var links = document.getElementsByTagName("li");
for (var i = 0;i<links.length;i++) {
  if (String(links[i].innerHTML).valueOf() === '<a href="/tips"><span>Tips</span></a>'.valueOf()) {
    links[i].innerHTML = '<a href="/discuss"><span>Discuss</span></a>';
  };
  if (String(links[i].innerHTML).valueOf() === '<a href="/tips">Tips</a>'.valueOf()) {
    links[i].innerHTML = '<a href="/discuss">Discuss</a>'
  }
}
