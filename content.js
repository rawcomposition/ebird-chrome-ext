function modifyLinks() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (link.textContent === "Bar Charts") {
      const href = link.getAttribute("href");
      if (href && href.startsWith("/barchart?r=")) {
        const rValue = href.split("=")[1].split("&")[0];
        const newHref = `/targets?r1=${rValue}&bmo=1&emo=12&r2=world&t2=life&mediaType=`;
        link.setAttribute("href", newHref);
        link.textContent = "Targets";
        link.target = "_blank";
      }
    }
  });
}

// Modify links on initial page load
modifyLinks();

// Observer for dynamically added <a> tags
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      modifyLinks();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
