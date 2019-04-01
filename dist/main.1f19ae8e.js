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
})({"node_modules/lax.js/lib/lax.min.js":[function(require,module,exports) {
"use strict";function _slicedToArray(t,a){return _arrayWithHoles(t)||_iterableToArrayLimit(t,a)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,a){var e=[],n=!0,r=!1,o=void 0;try{for(var l,i=t[Symbol.iterator]();!(n=(l=i.next()).done)&&(e.push(l.value),!a||e.length!==a);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return e}function _arrayWithHoles(t){if(Array.isArray(t))return t}!function(){var lax=function(){for(var lax={elements:[]},lastY=0,currentBreakpoint="default",breakpointsSeparator="_",transformFns={"data-lax-opacity":function(t,a){t.opacity=a},"data-lax-translate":function(t,a){t.transform+=" translate(".concat(a,"px, ").concat(a,"px)")},"data-lax-translate-x":function(t,a){t.transform+=" translateX(".concat(a,"px)")},"data-lax-translate-y":function(t,a){t.transform+=" translateY(".concat(a,"px)")},"data-lax-scale":function(t,a){t.transform+=" scale(".concat(a,")")},"data-lax-scale-x":function(t,a){t.transform+=" scaleX(".concat(a,")")},"data-lax-scale-y":function(t,a){t.transform+=" scaleY(".concat(a,")")},"data-lax-skew":function(t,a){t.transform+=" skew(".concat(a,"deg, ").concat(a,"deg)")},"data-lax-skew-x":function(t,a){t.transform+=" skewX(".concat(a,"deg)")},"data-lax-skew-y":function(t,a){t.transform+=" skewY(".concat(a,"deg)")},"data-lax-rotate":function(t,a){t.transform+=" rotate(".concat(a,"deg)")},"data-lax-brightness":function(t,a){t.filter+=" brightness(".concat(a,"%)")},"data-lax-contrast":function(t,a){t.filter+=" contrast(".concat(a,"%)")},"data-lax-hue-rotate":function(t,a){t.filter+=" hue-rotate(".concat(a,"deg)")},"data-lax-blur":function(t,a){t.filter+=" blur(".concat(a,"px)")},"data-lax-invert":function(t,a){t.filter+="  invert(".concat(a,"%)")},"data-lax-saturate":function(t,a){t.filter+="  saturate(".concat(a,"%)")},"data-lax-grayscale":function(t,a){t.filter+="  grayscale(".concat(a,"%)")},"data-lax-bg-pos":function(t,a){t.backgroundPosition="".concat(a,"px ").concat(a,"px")},"data-lax-bg-pos-x":function(t,a){t.backgroundPositionX="".concat(a,"px")},"data-lax-bg-pos-y":function(t,a){t.backgroundPositionY="".concat(a,"px")}},_crazy="",i=0;i<20;i++)_crazy+=" "+5*i+" "+47*i%360+", ";function intrp(t,a){for(var e=0;t[e][0]<=a&&void 0!==t[e+1];)e+=1;var n=t[e][0],r=void 0===t[e-1]?n:t[e-1][0],o=t[e][1],l=void 0===t[e-1]?o:t[e-1][1];return Math.min(Math.max((a-r)/(n-r),0),1)*(o-l)+l}function fnOrVal(s){return"("===s[0]?eval(s):parseFloat(s)}return lax.presets={linger:function(t){return{"data-lax-translate-y":"(vh*0.7) 0, 0 200, -500 0"}},lazy:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-y":"(vh) 0, (-elh) ".concat(t)}},eager:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-y":"(vh) 0, (-elh) -".concat(t)}},slalom:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:50;return{"data-lax-translate-x":"vh ".concat(t,", (vh*0.8) ").concat(-t,", (vh*0.6) ").concat(t,", (vh*0.4) ").concat(-t,", (vh*0.2) ").concat(t,", (vh*0) ").concat(-t,", (-elh) ").concat(t)}},crazy:function(t){return{"data-lax-hue-rotate":"".concat(_crazy," | loop=20")}},spin:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:360;return{"data-lax-rotate":"(vh) 0, (-elh) ".concat(t)}},spinRev:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:360;return{"data-lax-rotate":"(vh) 0, (-elh) ".concat(-t)}},spinIn:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:360;return{"data-lax-rotate":"vh ".concat(t,", (vh*0.5) 0")}},spinOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:360;return{"data-lax-rotate":"(vh*0.5) 0, -elh ".concat(t)}},blurInOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:40;return{"data-lax-blur":"(vh) ".concat(t,", (vh*0.8) 0, (vh*0.2) 0, 0 ").concat(t)}},blurIn:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:40;return{"data-lax-blur":"(vh) ".concat(t,", (vh*0.7) 0")}},blurOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:40;return{"data-lax-blur":"(vh*0.3) 0, 0 ".concat(t)}},fadeInOut:function(){return{"data-lax-opacity":"(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0"}},fadeIn:function(){return{"data-lax-opacity":"(vh) 0, (vh*0.7) 1"}},fadeOut:function(){return{"data-lax-opacity":"(vh*0.3) 1, 0 0"}},driftLeft:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-x":"vh ".concat(t,", -elh ").concat(-t)}},driftRight:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-x":"vh ".concat(-t,", -elh ").concat(t)}},leftToRight:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;return{"data-lax-translate-x":"vh 0, -elh (vw*".concat(t,")")}},rightToLeft:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;return{"data-lax-translate-x":"vh 0, -elh (vw*".concat(-t,")")}},zoomInOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:.2;return{"data-lax-scale":"(vh) ".concat(t,", (vh*0.8) 1, (vh*0.2) 1, -elh ").concat(t)}},zoomIn:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:.2;return{"data-lax-scale":"(vh) ".concat(t,", (vh*0.7) 1")}},zoomOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:.2;return{"data-lax-scale":"(vh*0.3) 1, -elh ".concat(t)}},speedy:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:30;return{"data-lax-skew-x":"(vh) ".concat(t,", -elh ").concat(-t)}},swing:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:30;return{"data-lax-skew-y":"(vh) ".concat(t,", -elh ").concat(-t)}}},lax.addPreset=function(t,a){lax.presets[t]=a},lax.setup=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};lax.breakpoints=t.breakpoints||{},lax.selector=t.selector||".lax",lax.populateElements()},lax.removeElement=function(a){var t=this.elements.findIndex(function(t){return t.el=a});-1<t&&this.elements.splice(t,1)},lax.addElement=function(l){for(var n={el:l,originalStyle:{transform:l.style.transform,filter:l.style.filter},transforms:{}},t=[],a=0;a<l.attributes.length;a++){-1<(i=l.attributes[a]).name.indexOf("data-lax-preset")&&t.push(i)}var e=function(){i=t[a];var o=(c=i.name.split(breakpointsSeparator))[1]?"".concat(breakpointsSeparator).concat(c[1]):"";i.value.split(" ").forEach(function(t){var a=t.split("-"),e=lax.presets[a[0]];if(e){var n=e(a[1]);for(var r in n)l.setAttribute("".concat(r).concat(o),n[r])}else console.log("lax error: preset ".concat(a[0]," is not defined"))}),l.setAttribute("data-lax-anchor","self"),l.attributes.removeNamedItem(i.name)};for(a=0;a<t.length;a++){e()}if(!(l.attributes["data-lax-use-gpu"]&&"false"===l.attributes["data-lax-use-gpu"].value)&&(l.style["backface-visibility"]="hidden",l.style["-webkit-backface-visibility"]="hidden"),l.attributes["data-lax-use-gpu"]&&l.attributes.removeNamedItem("data-lax-use-gpu"),n.optimise=!1,l.attributes["data-lax-optimize"]&&"true"===l.attributes["data-lax-optimize"].value){n.optimise=!0;var r=l.getBoundingClientRect();l.setAttribute("data-lax-opacity","".concat(-r.height-1," 0, ").concat(-r.height," 1, ").concat(window.innerHeight," 1, ").concat(window.innerHeight+1," 0")),l.attributes.removeNamedItem("data-lax-optimize")}for(a=0;a<l.attributes.length;a++){var i;if(!((i=l.attributes[a]).name.indexOf("data-lax")<0)){var c,o=(c=i.name.split(breakpointsSeparator))[0].split("-"),s=c[1]||"default";if("lax"===o[1])if("data-lax-anchor"===i.name){n["data-lax-anchor"]="self"===i.value?l:document.querySelector(i.value);var u=n["data-lax-anchor"].getBoundingClientRect();n.anchorTop=Math.floor(u.top)+window.scrollY}else{var d,f;!function(){var t=_slicedToArray(i.value.replace(new RegExp("-vw","g"),-window.innerWidth).replace(new RegExp("-vh","g"),-window.innerHeight).replace(new RegExp("-elh","g"),-l.clientHeight).replace(new RegExp("-elw","g"),-l.clientWidth).replace(new RegExp("vw","g"),window.innerWidth).replace(new RegExp("vh","g"),window.innerHeight).replace(new RegExp("elh","g"),l.clientHeight).replace(new RegExp("elw","g"),l.clientWidth).replace(/\s+/g," ").split("|"),2),a=t[0],e=t[1],r={};e&&e.split(" ").forEach(function(t){var a=_slicedToArray(t.split("="),2),e=a[0],n=a[1];r[e]=e&&fnOrVal(n)}),d=c[0],f=a.split(",").map(function(t){return t.trim().split(" ").map(fnOrVal)}).sort(function(t,a){return t[0]-a[0]}),n.transforms[d]||(n.transforms[d]={}),n.transforms[d][s]={valueMap:f,options:r}}()}}}var v=l.attributes["data-lax-sprite-data"]&&l.attributes["data-lax-sprite-data"].value;if(v){n.spriteData=v.split(",").map(function(t){return parseInt(t)}),l.style.height=n.spriteData[1]+"px",l.style.width=n.spriteData[0]+"px";var p=l.attributes["data-lax-sprite-image"]&&l.attributes["data-lax-sprite-image"].value;p&&(l.style.backgroundImage="url(".concat(p,")"))}lax.elements.push(n),lax.updateElement(n)},lax.populateElements=function(){lax.elements=[],document.querySelectorAll(lax.selector).forEach(this.addElement),currentBreakpoint=lax.getCurrentBreakPoint()},lax.getCurrentBreakPoint=function(){var t="default",a=window.innerWidth;for(var e in lax.breakpoints){if(!(parseFloat(lax.breakpoints[e])<=a))break;t=e}return t},lax.updateElement=function(t){var a=t.originalStyle,e=t.anchorTop,n=t.transforms,r=t.spriteData,o=t.el,l=e?e-lastY:lastY,i={transform:a.transform,filter:a.filter};for(var c in n){var s=n[c][currentBreakpoint]||n[c].default;if(s){var u=l;s.options.offset&&(u+=s.options.offset),s.options.speed&&(u*=s.options.speed),s.options.loop&&(u%=s.options.loop);var d=transformFns[c],f=intrp(s.valueMap,u);d&&d(i,f)}}if(r){var v=_slicedToArray(r,5),p=v[0],h=v[1],x=v[2],g=v[3],m=v[4],b=Math.floor(lastY/m)%x,y=b%g,w=Math.floor(b/g);i.backgroundPosition="-".concat(y*p,"px -").concat(w*h,"px")}if(0===i.opacity)o.style.opacity=0;else for(var k in i)o.style[k]=i[k]},lax.update=function(t){lastY!==t&&(lastY=t,lax.elements.forEach(lax.updateElement))},lax}();"undefined"!=typeof module&&void 0!==module.exports?module.exports=lax:window.lax=lax}();
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _lax = _interopRequireDefault(require("lax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  _lax.default.setup(); // init


  var updateLax = function updateLax() {
    _lax.default.update(window.scrollY);

    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

window.onscroll = function () {
  progressBar();
};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = winScroll / height * 100;
  document.querySelector(".battery-level").style.height = scrolled + "%";
  console.log(scrolled);

  if (scrolled > 25 && scrolled < 75) {
    document.querySelector(".battery-level").style.backgroundColor = "orange";
  } else if (scrolled > 75) {
    document.querySelector(".battery-level").style.backgroundColor = "green";
  } else {
    document.querySelector(".battery-level").style.backgroundColor = "red";
  }
}
},{"lax.js":"node_modules/lax.js/lib/lax.min.js"}],"../../../../../../../Users/adeekah/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54089" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../Users/adeekah/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map