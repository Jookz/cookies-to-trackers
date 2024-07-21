const elements = document.querySelectorAll(
  "h1, h2, h3, h4, h5, span, p, li, a, td, caption, article, div, em, button"
);

elements.forEach((element) => {
  element.innerHTML = element.innerHTML
    .replace(/cookies/gi, (matched) => {
      return matched.charAt(0) === "C" ? "Trackers" : "trackers";
    })
    .replace(/cookie/gi, (matched) => {
      return matched.charAt(0) === "C" ? "Tracker" : "tracker";
    });
});
