chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getLinks") {
    const anchors = document.querySelectorAll("a");
    const links = new Set();

    const currentHost = window.location.host;

    anchors.forEach(a => {
      const href = a.href;
      try {
        const url = new URL(href);
        if (url.host === currentHost && url.protocol.startsWith("http")) {
          links.add(url.href);
        }
      } catch (e) {
        // Ignore invalid URLs
      }
    });

    chrome.runtime.sendMessage({
      action: "sendLinks",
      links: Array.from(links)
    });
  }
});
