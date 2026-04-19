/**
 * Client-side filter for the Search page (no network calls).
 */
(function () {
  function normalise(s) {
    return (s || "").toLowerCase().trim();
  }

  function init() {
    var input = document.getElementById("site-search");
    var list = document.getElementById("search-results");
    if (!input || !list) return;

    var items = Array.prototype.slice.call(list.querySelectorAll("[data-search]"));
    var count = document.getElementById("search-count");

    function render() {
      var q = normalise(input.value);
      var visible = 0;
      for (var i = 0; i < items.length; i++) {
        var hay = normalise(items[i].getAttribute("data-search"));
        var show = !q || hay.indexOf(q) !== -1;
        items[i].hidden = !show;
        if (show) visible++;
      }
      if (count) {
        count.textContent = String(visible);
      }
    }

    input.addEventListener("input", render);
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
