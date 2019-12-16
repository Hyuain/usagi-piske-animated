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
var style = "/*\n** \u4F60\u597D\u5440\uFF0C\u73B0\u5728\u6211\u8981\u753B\u4E00\u5E45\n** \u53EF\u7231\u7684\u5C0F\u5154 Usagi \u548C\u5C0F\u9E1F Piske \n** \u628A\u4ED6\u4EEC\u9001\u7ED9\u4F60\uFF0C\u5E0C\u671B\u4F60\u559C\u6B22\u54E6\n*/\n\n.usagi-container {\n    width: 270px;\n    height: 190px;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    margin-left: -230px;\n    overflow:hidden;\n}\n\n/*\n** \u6211\u4EEC\u5148\u6765\u753B\u4E00\u4E0B Usagi \u5927\u5934\n*/\n\n.usagi {\n    border: 8px solid #512300;\n    width: 270px;\n    height: 250px;\n    position: absolute;\n    bottom: -150px;\n    right: 0;\n    border-bottom: none;\n    border-radius: 110px;\n    background-color: #f5b4c0;\n    transition: transform 0.5s;\n}\n\n/*\n** \u518D\u7ED9\u5979\u52A0\u4E0A\u4E24\u53EA\u5927\u8033\u6735\n*/\n\n.usagi .ear {\n    border: 8px solid #512300;\n    height: 72px;\n    width: 46px;\n    background-color: #f5b4c0;\n    position: absolute;\n    border-bottom: none;\n}\n\n.usagi .ear.left {\n    top: -71px;\n    left: 50%;\n    margin-left: -55px;\n    transform: rotate(-3deg);\n    border-top-left-radius: 37px 75px;\n    border-top-right-radius: 27px 38px;\n}\n\n.usagi .ear.right {\n    top: -70px;\n    left: 50%;\n    margin-left: 17px;\n    transform: rotate(6deg);\n    border-top-left-radius: 26px 40px;\n    border-top-right-radius: 27px 38px;\n}\n\n.usagi .ear.left::after, .usagi .ear.right::after {\n    content: '';\n    width: 29px;\n    height: 10px;\n    position: absolute;\n    top: 58px;\n    left: 1%;\n    background-color: #f5b4c0;\n}\n\n/*\n** \u518D\u753B\u4E00\u4E2A\u767D\u767D\u7684\u5C0F\u8138\n*/\n\n.usagi .face {\n    background-color: #fff;\n    height: 100px;\n    width: 64px;\n    border-radius: 50%;\n    position: absolute;\n    top: 36px;\n    left: 50%;\n    margin-left: -32px;\n}\n\n/*\n** \u773C\u775B\u6BD4\u8F83\u7B80\u5355\uFF0C\u5148\u753B\u4E00\u4E0B\u773C\u775B\u5427~\n*/\n\n.usagi .eye::before, .usagi .eye::after {\n    content: '';\n    background-color: #512300;\n    border-radius: 50%;\n    width: 20px;\n    height: 11px;\n    position: absolute;\n    top: 33px;\n    left: 50%;\n}\n\n.usagi .eye::before {\n    margin-left: -40px;\n    transform: rotate(-22deg);\n}\n\n.usagi .eye::after {\n    margin-left: 20px;\n    transform: rotate(22deg);\n}\n\n/*\n** \u7136\u540E\u753B\u9F3B\u5B50\n*/\n\n.usagi .nose {\n    background-color: #512300;\n    border-radius: 50%;\n    width: 16px;\n    height: 9px;\n    position: absolute;\n    top: 3px;\n    left: 50%;\n    margin-left: -8px;\n}\n\n.usagi .nose::after {\n    content: '';\n    background-color: #512300;\n    width: 8px;\n    height: 19px;\n    position: absolute;\n    top: 3px;\n    left: 50%;\n    margin-left: -4px;\n}\n\n/*\n** \u7136\u540E\u662F\u52A0\u4E0A\u5634\u5DF4\n*/\n\n.usagi .mouth.upper::before, .usagi .mouth.upper::after {\n    content: '';\n    border: 8px solid #512300;\n    border-top: none;\n    border-radius: 50%;\n    width: 24px;\n    height: 23px;\n    position: absolute;\n    top: 13px;\n    left: 50%;\n    z-index: 1;\n}\n\n.usagi .mouth.upper::before {\n    border-left: none;\n    margin-left: -20px;\n    transform: rotate(25deg);\n}\n\n.usagi .mouth.upper::after {\n    border-right: none;\n    margin-left: -4px;\n    transform: rotate(-25deg);\n}\n\n.usagi .mouth.lower {\n    border: 8px solid #512300;\n    background-color: #f5b4c0;\n    width: 26px;\n    height: 26px;\n    position: absolute;\n    top: 32px;\n    left: 50%;\n    margin-left: -13px;\n    border-top: none;\n    border-radius: 0 0 50% 50%;\n}\n\n/*\n** \u6700\u540E\u62B9\u4E0A\u816E\u7EA2\uFF0CUsagi \u5C31\u5B8C\u6210\u5566~\n*/\n\n.usagi .flush::before {\n    content: '';\n    background-color: #f3a1ae;\n    width: 53px;\n    height: 37px;\n    border-radius: 50%;\n    position: absolute;\n    top: 44px;\n    left: 50%;\n    margin-left: -98px;\n}\n\n.usagi .flush::after {\n    content: '';\n    background-color: #f3a1ae;\n    width: 53px;\n    height: 37px;\n    border-radius: 50%;\n    position: absolute;\n    top: 44px;\n    left: 50%;\n    margin-left: 45px;\n}\n\n/*\n** \u90A3\u6211\u4EEC\u63A5\u7740\u6765\u753B Piske \u54AF\n*/\n\n.piske-container {\n    width: 182px;\n    height: 190px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: 40px;\n    overflow:hidden;\n}\n\n.piske {\n    border: 6px solid #3f180d;\n    background-color: #fff;\n    width: 182px;\n    height: 170px;\n    position: absolute;\n    left: 0;\n    bottom: -66px;\n    border-bottom: none;\n    border-radius: 50% 50% 0 0;\n    transition: transform 0.5s;\n}\n\n/*\n** Piske \u7684\u773C\u775B\u66F4\u5706\u4E00\u4E9B\uFF0C\u5C11\u4E86\u51E0\u5206\u6175\u61D2\n*/\n\n.piske .eye::before, .piske .eye::after {\n    content: '';\n    background-color: #3f180d;\n    border-radius: 50%;\n    width: 12px;\n    height: 12px;\n    position: absolute;\n    top: 45px;\n    left: 50%;\n}\n\n.piske .eye::before {\n    margin-left: -32px;\n}\n\n.piske .eye::after {\n    margin-left: 20px;\n}\n\n/*\n** \u63A5\u7740\u662F Piske \u7684\u7075\u9B42\n*/\n\n.piske .mouth::before, .piske .mouth::after {\n    content: '';\n    border: 6px solid #3f180d;\n    background-color: #fdd924;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.piske .mouth::before {\n    width: 30px;\n    height: 23px;\n    border-radius: 30px;\n    top: 35px;\n}\n\n.piske .mouth::after {\n    width: 26px;\n    height: 26px;\n    border-radius: 30px;\n    position: absolute;\n    top: 54px;\n}\n\n/*\n** \u540C\u6837\u7ED9\u4ED6\u4E5F\u52A0\u4E0A\u816E\u7EA2\n*/\n\n.piske .flush::before, .piske .flush::after {\n    content: '';\n    background-color: #f3a1ae;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    position: absolute;\n    top: 55px;\n    left: 50%;\n}\n\n.piske .flush::before {\n    margin-left: -64px;\n}\n\n.piske .flush::after {\n    margin-left: 39px;\n}\n\n/*\n** \u6478\u4E00\u4E0B\u4ED6\u4EEC\u5C31\u4F1A\u5BB3\u7F9E\u5730\u8EB2\u8D77\u6765\n*/\n\n.usagi-container:hover>.usagi {\n    transform: translateY(25%);\n    transition: transform 0.5s;\n}\n\n.piske-container:hover>.piske {\n    transform: translateY(24%);\n    transition: transform 0.5s;\n}\n\n/*\n** \u6700\u540E\u6211\u4EEC\u8BA9\u624B\u673A\u4E0A\u4E5F\u80FD\u5BB9\u7EB3\u4E0B\u4ED6\u4FE9\u7684\u5927\u5934\n** \u8FD9\u4E00\u6B65\u5728\u5927\u5C4F\u8BBE\u5907\u4E0A\u770B\u6CA1\u6709\u53D8\u5316\u54E6\n**\n** \u8FD9\u6837\u6211\u4EEC\u5C31\u753B\u5B8C\u5566\uFF0C\u4E0D\u77E5\u9053\u4F60\u559C\u6B22\u5417\n** \u6211\u4EEC\u4E0B\u6B21\u518D\u89C1\u5566\uFF0C\u62DC\u62DC~\n*/";
var _default = style;
exports.default = _default;
},{}],"yo8J":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var style = "\n\n@media (max-width: 500px) {\n    .usagi-container {\n        width: calc(0.7*270px);\n        height: calc(0.7*190px);\n        position: absolute;\n        bottom: calc(0.7*0px);\n        left: 50%;\n        margin-left: calc(0.7*-230px);\n        overflow: hidden;\n    }\n    .usagi {\n        width: calc(0.7*270px);\n        height: calc(0.7*250px);\n        position: absolute;\n        bottom: calc(0.7*-150px);\n        right: 0;\n        border: calc(0.7*8px) solid #512300;\n        border-bottom: none;\n        border-radius: calc(0.7*110px);\n        background-color: #f5b4c0;\n        transition: transform 0.5s;\n    }\n    .usagi .ear {\n        border: calc(0.7*8px) solid #512300;\n        height: calc(0.7*72px);\n        width: calc(0.7*46px);\n        background-color: #f5b4c0;\n        position: absolute;\n        border-bottom: none;\n    }\n    .usagi .ear.left {\n        top: calc(0.7*-71px);\n        left: 50%;\n        margin-left: calc(0.7*-55px);\n        transform: rotate(-3deg);\n        border-top-left-radius: calc(0.7*37px) calc(0.7*75px);\n        border-top-right-radius: calc(0.7*27px) calc(0.7*38px);\n    }\n    .usagi .ear.right {\n        top: calc(0.7*-70px);\n        left: 50%;\n        margin-left: calc(0.7*17px);\n        transform: rotate(6deg);\n        border-top-left-radius: calc(0.7*26px) calc(0.7*40px);\n        border-top-right-radius: calc(0.7*27px) calc(0.7*38px);\n    }\n    .usagi .ear.left::after, .usagi .ear.right::after {\n        content: '';\n        width: calc(0.7*29px);\n        height: calc(0.7*10px);\n        position: absolute;\n        top: calc(0.7*58px);\n        left: 1%;\n        background-color: #f5b4c0;\n    }\n    .usagi .face {\n        background-color: #fff;\n        height: calc(0.7*100px);\n        width: calc(0.7*64px);\n        border-radius: 50%;\n        position: absolute;\n        top: calc(0.7*36px);\n        left: 50%;\n        margin-left: calc(0.7*-32px);\n    }\n    .usagi .eye::before, .usagi .eye::after {\n        content: '';\n        background-color: #512300;\n        border-radius: 50%;\n        width: calc(0.7*20px);\n        height: calc(0.7*11px);\n        position: absolute;\n        top: calc(0.7*33px);\n        left: 50%;\n    }\n    .usagi .eye::before {\n        margin-left: calc(0.7*-40px);\n        transform: rotate(-22deg);\n    }\n    .usagi .eye::after {\n        margin-left: calc(0.7*20px);\n        transform: rotate(22deg);\n    }\n    .usagi .nose {\n        background-color: #512300;\n        border-radius: 50%;\n        width: calc(0.7*16px);\n        height: calc(0.7*9px);\n        position: absolute;\n        top: calc(0.7*3px);\n        left: 50%;\n        margin-left: calc(0.7*-8px);\n    }\n    .usagi .nose::after {\n        content: '';\n        background-color: #512300;\n        width: calc(0.7*8px);\n        height: calc(0.7*19px);\n        position: absolute;\n        top: calc(0.7*3px);\n        left: 50%;\n        margin-left: calc(0.7*-4px);\n    }\n    .usagi .mouth.upper::before, .usagi .mouth.upper::after {\n        content: '';\n        border: calc(0.7*8px) solid #512300;\n        border-top: none;\n        border-radius: 50%;\n        width: calc(0.7*24px);\n        height: calc(0.7*23px);\n        position: absolute;\n        top: calc(0.7*13px);\n        left: 50%;\n        z-index: 1;\n    }\n    .usagi .mouth.upper::before {\n        border-left: none;\n        margin-left: calc(0.7*-20px);\n        transform: rotate(25deg);\n    }\n    .usagi .mouth.upper::after {\n        border-right: none;\n        margin-left: calc(0.7*-4px);\n        transform: rotate(-25deg);\n    }\n    .usagi .mouth.lower {\n        border: calc(0.7*8px) solid #512300;\n        background-color: #f5b4c0;\n        width: calc(0.7*26px);\n        height: calc(0.7*26px);\n        position: absolute;\n        top: calc(0.7*32px);\n        left: 50%;\n        margin-left: calc(0.7*-13px);\n        border-top: none;\n        border-radius: 0 0 50% 50%;\n    }\n    .usagi .flush::before {\n        content: '';\n        background-color: #f3a1ae;\n        width: calc(0.7*53px);\n        height: calc(0.7*37px);\n        border-radius: 50%;\n        position: absolute;\n        top: calc(0.7*44px);\n        left: 50%;\n        margin-left: calc(0.7*-98px);\n    }\n    .usagi .flush::after {\n        content: '';\n        background-color: #f3a1ae;\n        width: calc(0.7*53px);\n        height: calc(0.7*37px);\n        border-radius: 50%;\n        position: absolute;\n        top: calc(0.7*44px);\n        left: 50%;\n        margin-left: calc(0.7*45px);\n    }\n    .piske-container {\n        width: calc(0.7*182px);\n        height: calc(0.7*190px);\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        margin-left: calc(0.7*40px);\n        overflow: hidden;\n    }\n    .piske {\n        border: calc(0.7*6px) solid #3f180d;\n        background-color: #fff;\n        width: calc(0.7*182px);\n        height: calc(0.7*170px);\n        position: absolute;\n        left: 0;\n        bottom: calc(0.7*-66px);\n        border-bottom: none;\n        border-radius: 50% 50% 0 0;\n        transition: transform 0.5s;\n    }\n    .piske .eye::before, .piske .eye::after {\n        content: '';\n        background-color: #3f180d;\n        border-radius: 50%;\n        width: calc(0.7*12px);\n        height: calc(0.7*12px);\n        position: absolute;\n        top: calc(0.7*45px);\n        left: 50%;\n    }\n    .piske .eye::before {\n        margin-left: calc(0.7*-32px);\n    }\n    .piske .eye::after {\n        margin-left: calc(0.7*20px);\n    }\n    .piske .mouth::before, .piske .mouth::after {\n        content: '';\n        border: calc(0.7*6px) solid #3f180d;\n        background-color: #fdd924;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n    .piske .mouth::before {\n        width: calc(0.7*30px);\n        height: calc(0.7*23px);\n        border-radius: calc(0.7*30px);\n        top: calc(0.7*35px);\n    }\n    .piske .mouth::after {\n        width: calc(0.7*26px);\n        height: calc(0.7*26px);\n        border-radius: calc(0.7*30px);\n        position: absolute;\n        top: calc(0.7*54px);\n    }\n    .piske .flush::before, .piske .flush::after {\n        content: '';\n        background-color: #f3a1ae;\n        width: calc(0.7*25px);\n        height: calc(0.7*25px);\n        border-radius: 50%;\n        position: absolute;\n        top: calc(0.7*55px);\n        left: 50%;\n    }\n    .piske .flush::before {\n        margin-left: calc(0.7*-64px);\n    }\n    .piske .flush::after {\n        margin-left: calc(0.7*39px);\n    }\n    .usagi-container:hover>.usagi {\n        transform: translateY(25%);\n        transition: transform 0.5s;\n    }\n    .piske-container:hover>.piske {\n        transform: translateY(24%);\n        transition: transform 0.5s;\n    }\n}\n";
var _default = style;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _draw = _interopRequireDefault(require("./draw.js"));

var _drawMobile = _interopRequireDefault(require("./draw-mobile.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = document.querySelector('#style');
var text = document.querySelector('#text');
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
    text.scrollTop = text.scrollHeight;
    player.n++;

    if (player.n >= _draw.default.length) {
      style.innerHTML = _draw.default + _drawMobile.default;
      clearInterval(player.timerId);
      return;
    }
  },
  play: function play() {
    player.timerId = setInterval(player.run, player.intervalTime);
    player.playState = 1;
    btnPlayPause.innerHTML = btnPlayPause.innerHTML.replace('play', 'pause');
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
},{"./draw.js":"Kxyk","./draw-mobile.js":"yo8J"}]},{},["epB2"], null)
//# sourceMappingURL=main.f6eef389.js.map