
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"QvaY":[function(require,module,exports) {
// switch theme
var switcher = document.querySelector('#theme-switcher');
var doc = document.firstElementChild;
switcher.addEventListener('input', function (e) {
  setTheme(e.target.value);
});

var setTheme = function setTheme(theme) {
  return doc.setAttribute('color-scheme', theme);
}; // hamburger menu


var hamburgerBtn = document.querySelector('#hamBtn');
var toggleMenu = document.querySelector('#menuToggle'); // const ham = document.querySelector('.ham')

hamburgerBtn.addEventListener('click', function () {
  toggleMenu.classList.toggle('menu-active');
});

document.onclick = function (e) {
  if (e.target.id !== 'hamBtn' && e.target.id !== 'menuToggle') {
    toggleMenu.classList.add('menu-active');
    hamburgerBtn.classList.remove('active');
  }
}; // MARQUEE ANIMATION
// thanks @Coding_Journey tutorial for marquee elements setup


var root = document.documentElement;
var marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
var allMarqueeContent = document.querySelectorAll("ul.marquee-content");

var marqueeContent = function marqueeContent() {
  allMarqueeContent.forEach(function (marquee) {
    root.style.setProperty("--marquee-elements", marquee.children.length);

    for (var i = 0; i < marqueeElementsDisplayed; i++) {
      marquee.appendChild(marquee.children[i].cloneNode(true));
    }

    return marquee;
  });
};

marqueeContent(); // GSAP scroll trigger marquee elements

gsap.registerPlugin(ScrollTrigger);
gsap.to("#scroll1", {
  scrollTrigger: {
    trigger: "#scroll1",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom top",
    ease: "power2"
  },
  xPercent: -20
});
gsap.to("#scroll2", {
  scrollTrigger: {
    trigger: "#scroll2",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom top",
    ease: "power1"
  },
  xPercent: -30
});
gsap.to("#scroll3", {
  scrollTrigger: {
    trigger: "#scroll3",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom top",
    ease: "power2",
    toggleActions: "restart"
  },
  xPercent: -20
}); // image animation

gsap.to(".img-2", {
  scrollTrigger: {
    trigger: ".img-3",
    start: "top bottom",
    end: "top 20px",
    scrub: true
  },
  x: "200px"
});
gsap.to(".img-3", {
  scrollTrigger: {
    trigger: ".img-3",
    start: "top bottom",
    end: "top 20px",
    scrub: true
  },
  x: "-200px"
});
gsap.to(".img-5", {
  scrollTrigger: {
    trigger: ".img-5",
    start: "top bottom",
    end: "top 10px",
    scrub: true
  },
  x: "110px"
});
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/js.29c550a7.js.map