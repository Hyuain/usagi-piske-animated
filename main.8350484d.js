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
})({"Kxyk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var style = "/*\n** \u4F60\u597D\u5440\uFF0C\u73B0\u5728\u6211\u8981\u753B\u4E00\u5E45\n** \u53EF\u7231\u7684\u5C0F\u5154 Usagi \u548C\u5C0F\u9E1F Piske \n** \u628A\u4ED6\u4EEC\u9001\u7ED9\u4F60\uFF0C\u5E0C\u671B\u4F60\u559C\u6B22\u54E6\n*/\n\n.usagi-container {\n  width: 27rem;\n  height: 19rem;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -23rem;\n  overflow:hidden;\n}\n\n/*\n** \u6211\u4EEC\u5148\u6765\u753B\u4E00\u4E0B Usagi \u5927\u5934\n*/\n\n.usagi {\n  border: .8rem solid #512300;\n  width: 27rem;\n  height: 25rem;\n  position: absolute;\n  bottom: -15rem;\n  right: 0;\n  border-bottom: none;\n  border-radius: 11rem;\n  background-color: #f5b4c0;\n  transition: transform 0.5s;\n}\n\n/*\n** \u518D\u7ED9\u5979\u52A0\u4E0A\u4E24\u53EA\u5927\u8033\u6735\n*/\n\n.usagi .ear {\n  border: .8rem solid #512300;\n  height: 7.2rem;\n  width: 4.6rem;\n  background-color: #f5b4c0;\n  position: absolute;\n  border-bottom: none;\n}\n\n.usagi .ear.left {\n  top: -7.1rem;\n  left: 50%;\n  margin-left: -5.5rem;\n  transform: rotate(-3deg);\n  border-top-left-radius: 3.7rem 7.5rem;\n  border-top-right-radius: 2.7rem 3.8rem;\n}\n\n.usagi .ear.right {\n  top: -7rem;\n  left: 50%;\n  margin-left: 1.7rem;\n  transform: rotate(6deg);\n  border-top-left-radius: 2.6rem 4rem;\n  border-top-right-radius: 2.7rem 3.8rem;\n}\n\n.usagi .ear.left::after,\n.usagi .ear.right::after {\n  content: '';\n  width: 2.9rem;\n  height: 1rem;\n  position: absolute;\n  top: 5.8rem;\n  left: 1%;\n  background-color: #f5b4c0;\n}\n\n/*\n** \u518D\u753B\u4E00\u4E2A\u767D\u767D\u7684\u5C0F\u8138\n*/\n\n.usagi .face {\n  background-color: #fff;\n  height: 10rem;\n  width: 6.4rem;\n  border-radius: 50%;\n  position: absolute;\n  top: 3.6rem;\n  left: 50%;\n  margin-left: -3.2rem;\n}\n\n/*\n** \u773C\u775B\u6BD4\u8F83\u7B80\u5355\uFF0C\u5148\u753B\u4E00\u4E0B\u773C\u775B\u5427~\n*/\n\n.usagi .eye::before,\n.usagi .eye::after {\n  content: '';\n  background-color: #512300;\n  border-radius: 50%;\n  width: 2rem;\n  height: 1.1rem;\n  position: absolute;\n  top: 3.3rem;\n  left: 50%;\n}\n\n.usagi .eye::before {\n  margin-left: -4rem;\n  transform: rotate(-22deg);\n}\n\n.usagi .eye::after {\n  margin-left: 2rem;\n  transform: rotate(22deg);\n}\n\n/*\n** \u7136\u540E\u753B\u9F3B\u5B50\n*/\n\n.usagi .nose {\n  background-color: #512300;\n  border-radius: 50%;\n  width: 1.6rem;\n  height: .9rem;\n  position: absolute;\n  top: .3rem;\n  left: 50%;\n  margin-left: -.8rem;\n}\n\n.usagi .nose::after {\n  content: '';\n  background-color: #512300;\n  width: .8rem;\n  height: 1.9rem;\n  position: absolute;\n  top: .3rem;\n  left: 50%;\n  margin-left: -.4rem;\n}\n\n/*\n** \u7136\u540E\u662F\u52A0\u4E0A\u5634\u5DF4\n*/\n\n.usagi .mouth.upper::before,\n.usagi .mouth.upper::after {\n  content: '';\n  border: .8rem solid #512300;\n  border-top: none;\n  border-radius: 50%;\n  width: 2.4rem;\n  height: 2.3rem;\n  position: absolute;\n  top: 1.3rem;\n  left: 50%;\n  z-index: 1;\n}\n\n.usagi .mouth.upper::before {\n  border-left: none;\n  margin-left: -2rem;\n  transform: rotate(25deg);\n}\n\n.usagi .mouth.upper::after {\n  border-right: none;\n  margin-left: -.4rem;\n  transform: rotate(-25deg);\n}\n\n.usagi .mouth.lower {\n  border: .8rem solid #512300;\n  background-color: #f5b4c0;\n  width: 2.6rem;\n  height: 2.6rem;\n  position: absolute;\n  top: 3.2rem;\n  left: 50%;\n  margin-left: -1.3rem;\n  border-top: none;\n  border-radius: 0 0 50% 50%;\n}\n\n/*\n** \u6700\u540E\u62B9\u4E0A\u816E\u7EA2\uFF0CUsagi \u5C31\u5B8C\u6210\u5566~\n*/\n\n.usagi .flush::before,\n.usagi .flush::after {\n  content: '';\n  background-color: #f3a1ae;\n  width: 5.3rem;\n  height: 3.7rem;\n  border-radius: 50%;\n  position: absolute;\n  top: 4.4rem;\n  left: 50%;\n}\n\n.usagi .flush::before {\n  margin-left: -9.8rem;\n}\n\n.usagi .flush::after {\n  margin-left: 4.5rem;\n}\n\n/*\n** \u90A3\u6211\u4EEC\u63A5\u7740\u6765\u753B Piske \u54AF\n*/\n\n.piske-container {\n  width: 18.2rem;\n  height: 19rem;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: 4rem;\n  overflow:hidden;\n}\n\n.piske {\n  border: .6rem solid #3f180d;\n  background-color: #fff;\n  width: 18.2rem;\n  height: 17rem;\n  position: absolute;\n  left: 0;\n  bottom: -6.6rem;\n  border-bottom: none;\n  border-radius: 50% 50% 0 0;\n  transition: transform 0.5s;\n}\n\n/*\n** Piske \u7684\u773C\u775B\u66F4\u5706\u4E00\u4E9B\uFF0C\u5C11\u4E86\u51E0\u5206\u6175\u61D2\n*/\n\n.piske .eye::before,\n.piske .eye::after {\n  content: '';\n  background-color: #3f180d;\n  border-radius: 50%;\n  width: 1.2rem;\n  height: 1.2rem;\n  position: absolute;\n  top: 4.5rem;\n  left: 50%;\n}\n\n.piske .eye::before {\n  margin-left: -3.2rem;\n}\n\n.piske .eye::after {\n  margin-left: 2rem;\n}\n\n/*\n** \u63A5\u7740\u662F Piske \u7684\u7075\u9B42\n*/\n\n.piske .mouth::before,\n.piske .mouth::after {\n  content: '';\n  border: .6rem solid #3f180d;\n  background-color: #fdd924;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.piske .mouth::before {\n  width: 3rem;\n  height: 2.3rem;\n  border-radius: 3rem;\n  top: 3.5rem;\n}\n\n.piske .mouth::after {\n  width: 2.6rem;\n  height: 2.6rem;\n  border-radius: 3rem;\n  position: absolute;\n  top: 5.4rem;\n}\n\n/*\n** \u540C\u6837\u7ED9\u4ED6\u4E5F\u52A0\u4E0A\u816E\u7EA2\n*/\n\n.piske .flush::before,\n.piske .flush::after {\n  content: '';\n  background-color: #f3a1ae;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  position: absolute;\n  top: 5.5rem;\n  left: 50%;\n}\n\n.piske .flush::before {\n  margin-left: -6.4rem;\n}\n\n.piske .flush::after {\n  margin-left: 3.9rem;\n}\n\n/*\n** \u6478\u4E00\u4E0B\u4ED6\u4EEC\u5C31\u4F1A\u5BB3\u7F9E\u5730\u8EB2\u8D77\u6765\n*/\n\n.usagi-container:hover>.usagi {\n  transform: translateY(25%);\n  transition: transform 0.5s;\n}\n\n.piske-container:hover>.piske {\n  transform: translateY(24%);\n  transition: transform 0.5s;\n}\n\n/*\n** \u8FD9\u6837\u6211\u4EEC\u5C31\u753B\u5B8C\u5566\uFF0C\u4E0D\u77E5\u9053\u4F60\u559C\u6B22\u5417\n** \u6211\u4EEC\u4E0B\u6B21\u518D\u89C1\u5566\uFF0C\u62DC\u62DC~\n*/";
var _default = style;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _draw = _interopRequireDefault(require("./draw.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = document.querySelector('#style');
var text = document.querySelector('#text');
var textContainer = document.querySelector('#text-container');
var btnPlayPause = document.querySelector('#btnPlayPause');
var btnSlow = document.querySelector('#btnSlow');
var btnNormal = document.querySelector('#btnNormal');
var btnFast = document.querySelector('#btnFast');
var player = {
  n: 0,
  styleText: '',
  timerId: undefined,
  intervalTime: 100,
  playState: 0,
  init: function init() {
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    btnPlayPause.onclick = function () {
      if (player.playState === 1) {
        player.pause();
      } else {
        player.play();
      }
    };

    btnSlow.onclick = function () {
      player.btnDeactivate();
      btnSlow.classList.add('activated');
      player.slow();
    };

    btnNormal.onclick = function () {
      player.btnDeactivate();
      btnNormal.classList.add('activated');
      player.normal();
    };

    btnFast.onclick = function () {
      player.btnDeactivate();
      btnFast.classList.add('activated');
      player.fast();
    };
  },
  btnDeactivate: function btnDeactivate() {
    btnSlow.classList.remove('activated');
    btnNormal.classList.remove('activated');
    btnFast.classList.remove('activated');
  },
  run: function run() {
    if (_draw.default[player.n] === '\n') {
      player.styleText += '<br>';
    } else if (_draw.default[player.n] === ' ') {
      player.styleText += '&nbsp';
    } else {
      player.styleText += _draw.default[player.n];
    }

    style.innerHTML = _draw.default.substring(0, player.n + 1);
    text.innerHTML = player.styleText;
    textContainer.scrollTop = textContainer.scrollHeight;
    player.n++;

    if (player.n >= _draw.default.length) {
      clearInterval(player.timerId);
    }
  },
  play: function play() {
    if (player.n < _draw.default.length) {
      player.timerId = setInterval(player.run, player.intervalTime);
      player.playState = 1;
      btnPlayPause.innerHTML = btnPlayPause.innerHTML.replace('play', 'pause');
    }
  },
  pause: function pause() {
    player.playState = 0;
    btnPlayPause.innerHTML = btnPlayPause.innerHTML.replace('pause', 'play');
    clearInterval(player.timerId);
  },
  slow: function slow() {
    player.pause();
    player.intervalTime = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.intervalTime = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.intervalTime = 0;
    player.play();
  }
};
player.init();
},{"./draw.js":"Kxyk"}]},{},["epB2"], null)
//# sourceMappingURL=main.8350484d.js.map