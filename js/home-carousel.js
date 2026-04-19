/**
 * Homepage carousel: auto-advance, pause on hover/focus, respects prefers-reduced-motion.
 */
(function () {
  function init(root) {
    var track = root.querySelector("[data-carousel-track]");
    var slides = root.querySelectorAll(".carousel-slide");
    var prevBtn = root.querySelector("[data-carousel-prev]");
    var nextBtn = root.querySelector("[data-carousel-next]");
    var dots = root.querySelectorAll("[data-carousel-dot]");
    var live = root.querySelector("[data-carousel-live]");
    var n = slides.length;
    if (!track || n === 0) return;

    var idx = 0;
    var timer = null;
    var interval = parseInt(root.getAttribute("data-interval") || "7000", 10);
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function setPaused(on) {
      if (on) root.classList.add("is-paused");
      else root.classList.remove("is-paused");
    }

    function apply() {
      track.style.transform = "translateX(" + -idx * 100 + "%)";
      for (var i = 0; i < slides.length; i++) {
        slides[i].setAttribute("aria-hidden", i === idx ? "false" : "true");
      }
      for (var d = 0; d < dots.length; d++) {
        dots[d].setAttribute("aria-current", d === idx ? "true" : "false");
      }
      if (live) {
        var label = slides[idx].getAttribute("data-slide-label");
        if (label) live.textContent = label;
      }
    }

    function next() {
      idx = (idx + 1) % n;
      apply();
    }

    function prev() {
      idx = (idx - 1 + n) % n;
      apply();
    }

    function start() {
      stop();
      if (!reduceMotion) timer = setInterval(next, interval);
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        prev();
        start();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        next();
        start();
      });
    }
    for (var di = 0; di < dots.length; di++) {
      (function (i) {
        dots[i].addEventListener("click", function () {
          idx = i;
          apply();
          start();
        });
      })(di);
    }

    root.addEventListener("mouseenter", function () {
      stop();
      setPaused(true);
    });
    root.addEventListener("mouseleave", function () {
      setPaused(false);
      start();
    });
    root.addEventListener("focusin", function () {
      stop();
      setPaused(true);
    });
    root.addEventListener("focusout", function (e) {
      if (!root.contains(e.relatedTarget)) {
        setPaused(false);
        start();
      }
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stop();
        setPaused(true);
      } else {
        setPaused(false);
        start();
      }
    });

    var mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    function onReduceChange(e) {
      reduceMotion = e.matches;
      if (reduceMotion) stop();
      else start();
    }
    if (mql.addEventListener) mql.addEventListener("change", onReduceChange);
    else if (mql.addListener) mql.addListener(onReduceChange);

    apply();
    start();
  }

  function boot() {
    var roots = document.querySelectorAll("[data-home-carousel]");
    for (var i = 0; i < roots.length; i++) init(roots[i]);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
