var links = document.getElementsByTagName("li"); // Gets all "li" elements, including the tips button
for (var i = 0;i<links.length;i++) {
  if (String(links[i].innerHTML).valueOf() === '<a href="/tips"><span>Tips</span></a>'.valueOf()) { // If the HTML of an li element matches the HTML of the li element for the tips button on the new nav bar...
    links[i].innerHTML = '<a href="/discuss"><span>Discuss</span></a>'; // change that li element's HTML to the HTML for an li element of a button that leads to the discussion forums
  };
  if (String(links[i].innerHTML).valueOf() === '<a href="/tips">Tips</a>'.valueOf()) {
    links[i].innerHTML = '<a href="/discuss">Discuss</a>' // works for pages still with the old nav bar too
  }
}
