window.addEventListener("load", () => {
  const it = document.createNodeIterator(document, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = it.nextNode())) {
    if (node.textContent == "I'm not a robot") {
      node.textContent = "I'm a robot";
    }
  }
});
