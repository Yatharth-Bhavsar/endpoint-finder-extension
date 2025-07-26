chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "sendLinks") {
    const endpointsList = document.getElementById("endpointsList");
    endpointsList.innerHTML = "";

    request.links.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link;
      a.textContent = link;
      a.target = "_blank";
      li.appendChild(a);
      endpointsList.appendChild(li);
    });

    // Search filtering
    const search = document.getElementById("search");
    search.addEventListener("input", () => {
      const term = search.value.toLowerCase();
      Array.from(endpointsList.children).forEach(li => {
        const link = li.textContent.toLowerCase();
        li.style.display = link.includes(term) ? "" : "none";
      });
    });
  }
});

// Ask for links when popup loads
chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getLinks" });
});
