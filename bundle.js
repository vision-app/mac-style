/*! Packed by Vusion. */
/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"vusion-icon-font.ttf?668b0dc995332903a6a707e84a16b188\") format(\"truetype\"),\n\turl(\"vusion-icon-font.eot?668b0dc995332903a6a707e84a16b188#iefix\") format(\"embedded-opentype\"),\n\turl(\"vusion-icon-font.woff?668b0dc995332903a6a707e84a16b188\") format(\"woff\"),\n\turl(\"vusion-icon-font.svg?668b0dc995332903a6a707e84a16b188#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"vusion-icon-font.ttf?668b0dc995332903a6a707e84a16b188\") format(\"truetype\"),\n\turl(\"vusion-icon-font.eot?668b0dc995332903a6a707e84a16b188#iefix\") format(\"embedded-opentype\"),\n\turl(\"vusion-icon-font.woff?668b0dc995332903a6a707e84a16b188\") format(\"woff\"),\n\turl(\"vusion-icon-font.svg?668b0dc995332903a6a707e84a16b188#vusion-icon-font\") format(\"svg\");\n}"});
                                }(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory();
	else
		root["Library"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	 __webpack_require__(163)()// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 194);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(14)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}

/**
 * Check if value is primitive
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' ||
  // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});

/**
 * Simple bind, faster than native
 */
function bind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn;
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop(a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) {
  return false;
};

/**
 * Return same value
 */
var identity = function (_) {
  return _;
};

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys(modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
  if (a === b) {
    return true;
  }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

/**
 * Ensure a function is called only once.
 */
function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = ['component', 'directive', 'filter'];

var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = {}.watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    function Set() {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };
    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check
var formatComponentName = noop;

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }
    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) {
        res += str;
      }
      if (n > 1) {
        str += str;
      }
      n >>= 1;
    }
    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned;
}

function cloneVNodes(vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res;
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;
    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    // notify change
    ob.dep.notify();
    return result;
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter, shallow) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    "production" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    "production" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  if (!from) {
    return to;
  }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }
  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (false) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) {
    extend(ret, childVal);
  }
  return ret;
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Validate component names
 */
function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options, vm) {
  var props = options.props;
  if (!props) {
    return;
  }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : { type: val };
    }
  } else if (false) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject(options, vm) {
  var inject = options.inject;
  if (!inject) {
    return;
  }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
    }
  } else if (false) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) {
    return assets[id];
  }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/*  */

function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (false) {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isType(type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type);
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true;
    }
  }
  /* istanbul ignore next */
  return false;
}

/*  */

function handleError(err, vm, info) {
  if (vm) {
    var cur = vm;
    while (cur = cur.$parent) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) {
              return;
            }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (false) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
// PhantomJS
MessageChannel.toString() === '[object MessageChannelConstructor]')) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) {
      setTimeout(noop);
    }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask(fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res;
  });
}

function nextTick(cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}

/*  */

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if (!isA && !isObject(val) || Object.isFrozen(val)) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns) {
  function invoker() {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, vm) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "production" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return;
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res;
}

/*  */

function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }
  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node;
}

function resolveAsyncComponent(factory, baseCtor, context) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject( false ? "timeout (" + res.timeout + "ms)" : null);
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}

/*  */

function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

/*  */

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}

/*  */

/*  */

function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (!fn) {
      vm._events[event] = null;
      return vm;
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break;
        }
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, "event handler for \"" + event + "\"");
        }
      }
    }
    return vm;
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
  var slots = {};
  if (!children) {
    return slots;
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}

function resolveScopedSlots(fns, // see flow/vnode
res) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res;
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle(vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
      , vm.$options._parentElm, vm.$options._refElm);
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  parentVnode.data.scopedSlots || // has new scoped slots
  vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, hook + " hook");
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) {
    return a.id - b.id;
  });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false ? expOrFn.toString() : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }
  this.value = this.lazy ? undefined : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value;
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown() {
  var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);
  observerState.shouldConvert = true;
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData(data, vm) {
  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
    sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {
      if (methods[key] == null) {
        warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
      }
      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }
      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, keyOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (false) {
    dataDef.set = function (newData) {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/*  */

function initProvide(vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject).filter(function (key) {
      /* istanbul ignore next */
      return Object.getOwnPropertyDescriptor(inject, key).enumerable;
    }) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (false) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }
    return result;
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    ret._isVList = true;
  }
  return ret;
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (false) {
        warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes);
  } else {
    return nodes;
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes(eventKeyCode, key, builtInAlias, eventKeyName) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1;
    } else {
      return keyCodes !== eventKeyCode;
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }
  return data;
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data;
}

/*  */

function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    return resolveSlots(children, parent);
  };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }
    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init(vnode, hydrating, parentElm, refElm) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },

  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }
    return;
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent, // activeInstance in lifecycle state
parentElm, refElm) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options);
}

function mergeHooks(data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1(one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  };
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    "production" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  }
  // warn against non-primitive key
  if (false) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) {
      applyNS(vnode, ns);
    }
    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender(vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || slot[0] && slot[0].elm) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode;
  };
}

/*  */

var uid$1 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

function Vue$3(options) {
  if (false) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}

/*  */

function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}

/*  */

function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (false) {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/*  */

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed() {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include(val) {
      pruneCache(this, function (name) {
        return matches(val, name);
      });
    },
    exclude: function exclude(val) {
      pruneCache(this, function (name) {
        return !matches(val, name);
      });
    }
  },

  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
      // not included
      include && (!name || !matches(include, name)) ||
      // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
      // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || slot && slot[0];
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};
  configDef.get = function () {
    return config;
  };
  if (false) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
});

Vue$3.version = '2.5.13';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};

/*  */

function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */
  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }
  if (isObject(value)) {
    return stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */
  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }
      res += stringified;
    }
  }
  return res;
}

function stringifyObject(value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }
      res += key;
    }
  }
  return res;
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isPreTag = function (tag) {
  return tag === 'pre';
};

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }
    return selected;
  } else {
    return el;
  }
}

/*  */

function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm;
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setAttribute(node, key, val) {
  node.setAttribute(key, val);
}

var nodeOps = Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) {
      map[key] = i;
    }
  }
  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove() {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;
  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }
      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }
      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope(vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }
      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }
      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    }
    // assert node match
    if (false) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true /* hydrating */);
      }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (false) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(vnode, insertedVnodeQueue,
        // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];

/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && !el.__ieph) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters(exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) {
        inSingle = false;
      }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) {
        inDouble = false;
      }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) {
        inTemplateString = false;
      }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) {
        inRegex = false;
      }
    } else if (c === 0x7C && // pipe
    exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break; // "
        case 0x27:
          inSingle = true;break; // '
        case 0x60:
          inTemplateString = true;break; // `
        case 0x28:
          paren++;break; // (
        case 0x29:
          paren--;break; // )
        case 0x5B:
          square++;break; // [
        case 0x5D:
          square--;break; // ]
        case 0x7B:
          curly++;break; // {
        case 0x7D:
          curly--;break; // }
      }
      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0;
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') {
            break;
          }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression;
}

function wrapFilter(exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return "_f(\"" + filter + "\")(" + exp + ")";
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return "_f(\"" + name + "\")(" + exp + "," + args;
  }
}

/*  */

function baseWarn(msg) {
  console.error("[Vue compiler]: " + msg);
}

function pluckModuleFunction(modules, key) {
  return modules ? modules.map(function (m) {
    return m[key];
  }).filter(function (_) {
    return _;
  }) : [];
}

function addProp(el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr(el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr(el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective(el, name, rawName, value, arg, modifiers) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler(el, name, value, modifiers, important, warn) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (false) {
    warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = { value: value };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr(el, name, getStatic) {
  var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue);
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue);
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr(el, name, removeFromMap) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break;
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val;
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel(el, value, modifiers) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: "(" + value + ")",
    expression: "\"" + value + "\"",
    callback: "function (" + baseValueExpression + ") {" + assignment + "}"
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode(value, assignment) {
  var res = parseModel(value);
  if (res.key === null) {
    return value + "=" + assignment;
  } else {
    return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel(val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      };
    } else {
      return {
        exp: val,
        key: null
      };
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  };
}

function next() {
  return str.charCodeAt(++index$1);
}

function eof() {
  return index$1 >= len;
}

function isStringStart(chr) {
  return chr === 0x22 || chr === 0x27;
}

function parseBracket(chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue;
    }
    if (chr === 0x5B) {
      inBracket++;
    }
    if (chr === 0x5D) {
      inBracket--;
    }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break;
    }
  }
}

function parseString(chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break;
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model(el, dir, _warn) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false;
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false;
  } else if (false) {
    warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
  }

  // ensure runtime directive metadata
  return true;
}

function genCheckboxModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
  addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
}

function genRadioModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
  addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + genAssignmentCode(value, assignment);
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel(el, value, modifiers) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  if (false) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    if (value$1) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally');
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', "(" + value + ")");
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler(handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler() {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
}

function add$1(event, handler, once$$1, capture, passive) {
  handler = withMacroTask(handler);
  if (once$$1) {
    handler = createOnceHandler(handler, event, capture);
  }
  target$1.addEventListener(event, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}

function remove$2(event, handler, capture, _target) {
  (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }
      if (cur === oldProps[key]) {
        continue;
      }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}
  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false;
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }
  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle ? extend(data.staticStyle, style) : style;
}

// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res;
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition(def) {
  if (!def) {
    return;
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res;
  } else if (typeof def === 'string') {
    return autoCssTransition(def);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

/*  */

function enter(vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return;
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [attrs, klass, events, domProps, style, transition];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) {
      return;
    }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render(h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return;
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) {
      return c.tag || isAsyncPlaceholder(c);
    });
    /* istanbul ignore if */
    if (!children.length) {
      return;
    }

    // warn multiple elements
    if (false) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode;

    // warn invalid mode
    if (false) {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) {
      return d.name === 'show';
    })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) &&
    // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }
        var delayedLeave;
        var performLeave = function () {
          delayedLeave();
        };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },

  beforeUpdate: function beforeUpdate() {
    // force removing pass
    this.__patch__(this._vnode, this.kept, false, // hydrating
    true // removeOnly (!important avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove;
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (false) {
      console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
  if (false) {
    console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
  }
}, 0);

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});

function parseText(text, delimiters) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return;
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while (match = tagRE.exec(text)) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push("_s(" + exp + ")");
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  };
}

/*  */

function transformNode(el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData(el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + el.staticClass + ",";
  }
  if (el.classBinding) {
    data += "class:" + el.classBinding + ",";
  }
  return data;
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1(el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1(el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + el.staticStyle + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + el.styleBinding + "),";
  }
  return data;
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode(html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent;
  }
};

/*  */

var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp("^<" + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) {
  return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};

function decodeAttr(value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) {
    return decodingMap[match];
  });
}

function parseHTML(html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue;
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue;
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue;
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue;
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue;
        }
      }

      var text = void 0,
          rest = void 0,
          next = void 0;
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) {
            break;
          }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return '';
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {
        options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
      }
      break;
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance(n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag() {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }

  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') {
          delete args[3];
        }
        if (args[4] === '') {
          delete args[4];
        }
        if (args[5] === '') {
          delete args[5];
        }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag(tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) {
      start = index;
    }
    if (end == null) {
      end = index;
    }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false) {
          options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

function createASTElement(tag, attrs, parent) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  };
}

/**
 * Convert HTML string to AST.
 */
function parse(template, options) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce(msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement(element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start(tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints(el) {
        if (false) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {
          warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) {
          // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end() {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars(text) {
      if (!currentParent) {
        if (false) {
          if (text === template) {
            warnOnce('Component template requires a root element, rather than just text.');
          } else if (text = text.trim()) {
            warnOnce("text \"" + text + "\" outside root element will be ignored.");
          }
        }
        return;
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
        return;
      }
      var children = currentParent.children;
      text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
      // only preserve whitespace if its not right after a starting tag
      : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment(text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root;
}

function processPre(el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs(el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement(element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey(el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef(el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor(el) {
  var exp;
  if (exp = getAndRemoveAttr(el, 'v-for')) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (false) {
      warn$2("Invalid v-for expression: " + exp);
    }
  }
}

function parseFor(exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) {
    return;
  }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res;
}

function processIf(el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions(el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {
    warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
  }
}

function findPrevElement(children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i];
    } else {
      if (false) {
        warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
      }
      children.pop();
    }
  }
}

function addIfCondition(el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce(el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot(el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {
      warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (false) {
        warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", true);
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
      /* istanbul ignore if */
      if (false) {
        warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", true);
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent(el) {
  var binding;
  if (binding = getBindingAttr(el, 'is')) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs(el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) {
        // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') {
              name = 'innerHTML';
            }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(el, "update:" + camelize(name), genAssignmentCode(value, "$event"));
          }
        }
        if (isProp || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) {
        // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else {
        // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (false) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor(el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}

function parseModifiers(name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) {
      ret[m.slice(1)] = true;
    });
    return ret;
  }
}

function makeAttrsMap(attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (false) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map;
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag(el) {
  return el.tag === 'script' || el.tag === 'style';
}

function isForbiddenTag(el) {
  return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug(attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res;
}

function checkForAliasModel(el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode(el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0;
    }
  }
}

function cloneASTElement(el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent);
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [klass$1, style$1, model$2];

/*  */

function text(el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', "_s(" + dir.value + ")");
  }
}

/*  */

function html(el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', "_s(" + dir.value + ")");
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize(root, options) {
  if (!root) {
    return;
  }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1(keys) {
  return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
}

function markStatic$1(node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
      return;
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots(node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
      node.staticRoot = true;
      return;
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic(node) {
  if (node.type === 2) {
    // expression
    return false;
  }
  if (node.type === 3) {
    // text
    return true;
  }
  return !!(node.pre || !node.hasBindings && // no dynamic bindings
  !node.if && !node.for && // not v-if or v-for or v-else
  !isBuiltInTag(node.tag) && // not a built-in
  isPlatformReservedTag(node.tag) && // not a component
  !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
}

function isDirectChildOfTemplateFor(node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false;
    }
    if (node.for) {
      return true;
    }
  }
  return false;
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) {
  return "if(" + condition + ")return null;";
};

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers(events, isNative, warn) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + genHandler(name, events[name]) + ",";
  }
  return res.slice(0, -1) + '}';
}

function genHandler(name, handler) {
  if (!handler) {
    return 'function(){}';
  }

  if (Array.isArray(handler)) {
    return "[" + handler.map(function (handler) {
      return genHandler(name, handler);
    }).join(',') + "]";
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value;
    }
    /* istanbul ignore if */
    return "function($event){" + handler.value + "}"; // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = handler.modifiers;
        genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
          return !modifiers[keyModifier];
        }).map(function (keyModifier) {
          return "$event." + keyModifier + "Key";
        }).join('||'));
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath ? handler.value + '($event)' : isFunctionExpression ? "(" + handler.value + ")($event)" : handler.value;
    /* istanbul ignore if */
    return "function($event){" + code + handlerCode + "}";
  }
}

function genKeyFilter(keys) {
  return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
}

function genFilterCode(key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return "$event.keyCode!==" + keyVal;
  }
  var code = keyCodes[key];
  return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(code) + "," + "$event.key)";
}

/*  */

function on(el, dir) {
  if (false) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) {
    return "_g(" + code + "," + dir.value + ")";
  };
}

/*  */

function bind$1(el, dir) {
  el.wrapData = function (code) {
    return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState(options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) {
    return !isReservedTag(el.tag);
  };
  this.onceId = 0;
  this.staticRenderFns = [];
};

function generate(ast, options) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: "with(this){return " + code + "}",
    staticRenderFns: state.staticRenderFns
  };
}

function genElement(el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state);
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state);
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state);
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0';
  } else if (el.tag === 'slot') {
    return genSlot(el, state);
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code;
  }
}

// hoist static sub-trees out
function genStatic(el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
  return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
}

// v-once
function genOnce(el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break;
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn("v-once can only be used inside v-for that is keyed. ");
      return genElement(el, state);
    }
    return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
  } else {
    return genStatic(el, state);
  }
}

function genIf(el, state, altGen, altEmpty) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}

function genIfConditions(conditions, state, altGen, altEmpty) {
  if (!conditions.length) {
    return altEmpty || '_e()';
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
  } else {
    return "" + genTernaryExp(condition.block);
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp(el) {
    return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
  }
}

function genFor(el, state, altGen, altHelper) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
  var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

  if (false) {
    state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
}

function genData$2(el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) {
    data += dirs + ',';
  }

  // key
  if (el.key) {
    data += "key:" + el.key + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + el.ref + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + el.tag + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + genProps(el.attrs) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + genProps(el.props) + "},";
  }
  // event handlers
  if (el.events) {
    data += genHandlers(el.events, false, state.warn) + ",";
  }
  if (el.nativeEvents) {
    data += genHandlers(el.nativeEvents, true, state.warn) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + el.slotTarget + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += genScopedSlots(el.scopedSlots, state) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data;
}

function genDirectives(el, state) {
  var dirs = el.directives;
  if (!dirs) {
    return;
  }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']';
  }
}

function genInlineTemplate(el, state) {
  var ast = el.children[0];
  if (false) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
      return "function(){" + code + "}";
    }).join(',') + "]}";
  }
}

function genScopedSlots(slots, state) {
  return "scopedSlots:_u([" + Object.keys(slots).map(function (key) {
    return genScopedSlot(key, slots[key], state);
  }).join(',') + "])";
}

function genScopedSlot(key, el, state) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state);
  }
  var fn = "function(" + String(el.slotScope) + "){" + "return " + (el.tag === 'template' ? el.if ? el.if + "?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}";
  return "{key:" + key + ",fn:" + fn + "}";
}

function genForScopedSlot(key, el, state) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
  var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key, el, state) + '})';
}

function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
      return (altGenElement || genElement)(el$1, state);
    }
    var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
    var gen = altGenNode || genNode;
    return "[" + children.map(function (c) {
      return gen(c, state);
    }).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children, maybeComponent) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue;
    }
    if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return needsNormalization(c.block);
    })) {
      res = 2;
      break;
    }
    if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return maybeComponent(c.block);
    })) {
      res = 1;
    }
  }
  return res;
}

function needsNormalization(el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
}

function genNode(node, state) {
  if (node.type === 1) {
    return genElement(node, state);
  }if (node.type === 3 && node.isComment) {
    return genComment(node);
  } else {
    return genText(node);
  }
}

function genText(text) {
  return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
  : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
}

function genComment(comment) {
  return "_e(" + JSON.stringify(comment.text) + ")";
}

function genSlot(el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? "," + children : '');
  var attrs = el.attrs && "{" + el.attrs.map(function (a) {
    return camelize(a.name) + ":" + a.value;
  }).join(',') + "}";
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')';
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName, el, state) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
}

function genProps(props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
    }
  }
  return res.slice(0, -1);
}

// #3895, #4268
function transformSpecialNewlines(text) {
  return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors(ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors;
}

function checkNode(node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, "v-for=\"" + value + "\"", errors);
          } else if (onRE.test(name)) {
            checkEvent(value, name + "=\"" + value + "\"", errors);
          } else {
            checkExpression(value, name + "=\"" + value + "\"", errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent(exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
  }
  checkExpression(exp, text, errors);
}

function checkFor(node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier(ident, type, text, errors) {
  if (typeof ident === 'string') {
    try {
      new Function("var " + ident + "=_");
    } catch (e) {
      errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
    }
  }
}

function checkExpression(exp, text, errors) {
  try {
    new Function("return " + exp);
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim());
    } else {
      errors.push("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n");
    }
  }
}

/*  */

function createFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop;
  }
}

function createCompileToFunctionFn(compile) {
  var cache = Object.create(null);

  return function compileToFunctions(template, options, vm) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (false) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
        }
      }
    }

    // check cache
    var key = options.delimiters ? String(options.delimiters) + template : template;
    if (cache[key]) {
      return cache[key];
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
          return "- " + e;
        }).join('\n') + '\n', vm);
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) {
          return tip(msg, vm);
        });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors);
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
          var err = ref.err;
          var code = ref.code;

          return err.toString() + " in\n\n" + code + "\n";
        }).join('\n'), vm);
      }
    }

    return cache[key] = res;
  };
}

/*  */

function createCompilerCreator(baseCompile) {
  return function createCompiler(baseOptions) {
    function compile(template, options) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled;
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    };
  };
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile(template, options) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  };
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode(href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0;
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML;
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (el, hydrating) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
    return this;
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {
            warn("Template element not found or is empty: " + options.template, this);
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {
          warn('invalid template option:' + template, this);
        }
        return this;
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {
        mark('compile end');
        measure("vue " + this._name + " compile", 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating);
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3), __webpack_require__(8).setImmediate))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".yVnsoIEWL98WMbA1{margin:-10px}.yVnsoIEWL98WMbA1 ._20ohRY5oIUSZOs3j{padding:10px}.yVnsoIEWL98WMbA1:after,.yVnsoIEWL98WMbA1:before{display:block;content:\".\";clear:both;height:0;visibility:hidden}.yVnsoIEWL98WMbA1[gap^=none]{margin-top:0;margin-bottom:0}.yVnsoIEWL98WMbA1[gap^=none] ._20ohRY5oIUSZOs3j{padding-top:0;padding-bottom:0}.yVnsoIEWL98WMbA1[gap$=none]{margin-left:0;margin-right:0}.yVnsoIEWL98WMbA1[gap$=none] ._20ohRY5oIUSZOs3j{padding-left:0;padding-right:0}.yVnsoIEWL98WMbA1[gap^=small]{margin-top:-5px;margin-bottom:-5px}.yVnsoIEWL98WMbA1[gap^=small] ._20ohRY5oIUSZOs3j{padding-top:5px;padding-bottom:5px}.yVnsoIEWL98WMbA1[gap$=small]{margin-left:-5px;margin-right:-5px}.yVnsoIEWL98WMbA1[gap$=small] ._20ohRY5oIUSZOs3j{padding-left:5px;padding-right:5px}.yVnsoIEWL98WMbA1[gap^=large]{margin-top:-15px;margin-bottom:-15px}.yVnsoIEWL98WMbA1[gap^=large] ._20ohRY5oIUSZOs3j{padding-top:15px;padding-bottom:15px}.yVnsoIEWL98WMbA1[gap$=large]{margin-left:-15px;margin-right:-15px}.yVnsoIEWL98WMbA1[gap$=large] ._20ohRY5oIUSZOs3j{padding-left:15px;padding-right:15px}", ""]);

// exports
exports.locals = {
	"root": "yVnsoIEWL98WMbA1",
	"column": "_20ohRY5oIUSZOs3j"
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".yVnsoIEWL98WMbA1{margin:-10px}.yVnsoIEWL98WMbA1 ._20ohRY5oIUSZOs3j{padding:10px}.yVnsoIEWL98WMbA1:after,.yVnsoIEWL98WMbA1:before{display:block;content:\".\";clear:both;height:0;visibility:hidden}.yVnsoIEWL98WMbA1[gap^=none]{margin-top:0;margin-bottom:0}.yVnsoIEWL98WMbA1[gap^=none] ._20ohRY5oIUSZOs3j{padding-top:0;padding-bottom:0}.yVnsoIEWL98WMbA1[gap$=none]{margin-left:0;margin-right:0}.yVnsoIEWL98WMbA1[gap$=none] ._20ohRY5oIUSZOs3j{padding-left:0;padding-right:0}.yVnsoIEWL98WMbA1[gap^=small]{margin-top:-5px;margin-bottom:-5px}.yVnsoIEWL98WMbA1[gap^=small] ._20ohRY5oIUSZOs3j{padding-top:5px;padding-bottom:5px}.yVnsoIEWL98WMbA1[gap$=small]{margin-left:-5px;margin-right:-5px}.yVnsoIEWL98WMbA1[gap$=small] ._20ohRY5oIUSZOs3j{padding-left:5px;padding-right:5px}.yVnsoIEWL98WMbA1[gap^=large]{margin-top:-15px;margin-bottom:-15px}.yVnsoIEWL98WMbA1[gap^=large] ._20ohRY5oIUSZOs3j{padding-top:15px;padding-bottom:15px}.yVnsoIEWL98WMbA1[gap$=large]{margin-left:-15px;margin-right:-15px}.yVnsoIEWL98WMbA1[gap$=large] ._20ohRY5oIUSZOs3j{padding-left:15px;padding-right:15px}", ""]);

// exports
exports.locals = {
	"root": "yVnsoIEWL98WMbA1",
	"column": "_20ohRY5oIUSZOs3j"
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "transparent.571faf43fc825a36.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(9);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-button.vue/index.js
/* harmony default export */ var u_button_vue = ({
    name: 'u-button'
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-0d6a5eec","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-button.vue/index.html
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_0d6a5eec___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_button_vue = (esExports);
// CONCATENATED MODULE: ./src/u-button.vue/index.js
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_css__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(u_button_vue, template_compiler___id___data_v_0d6a5eec___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_button_vue, __vue_template_functional__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ var src_u_button_vue = (Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-emitter.vue/index.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _broadcast = function _broadcast(condition, eventName) {
    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
    }

    this.$children.forEach(function ($child) {
        if (condition($child)) $child.$emit.apply($child, [eventName].concat(params));else _broadcast.apply($child, [condition, eventName].concat(params));
    });
};

/* harmony default export */ var u_emitter_vue = ({
    name: 'u-emitter',
    methods: {
        dispatch: function dispatch(condition, eventName) {
            var _$parent;

            if (typeof condition === 'string') {
                var name = condition;
                condition = function condition($parent) {
                    return $parent.$options.name === name;
                };
            }

            var $parent = this.$parent || this.$root;
            while ($parent && !condition($parent)) {
                $parent = $parent.$parent;
            }
            for (var _len2 = arguments.length, params = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                params[_key2 - 2] = arguments[_key2];
            }

            $parent && (_$parent = $parent).$emit.apply(_$parent, [eventName].concat(_toConsumableArray(params)));
        },
        broadcast: function broadcast(condition, eventName) {
            if (typeof condition === 'string') {
                var name = condition;
                condition = function condition($child) {
                    return $child.$options.name === name;
                };
            }

            for (var _len3 = arguments.length, params = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                params[_key3 - 2] = arguments[_key3];
            }

            _broadcast.apply(this, [condition, eventName].concat(params));
        }
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-emitter.vue/index.js
var u_emitter_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* template functional */
var u_emitter_vue___vue_template_functional__ = false
/* styles */
var u_emitter_vue___vue_css__ = null
/* scopeId */
var u_emitter_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_emitter_vue___vue_module_identifier__ = null
var u_emitter_vue_Component = u_emitter_vue_normalizeComponent(u_emitter_vue, __vue_html__, u_emitter_vue___vue_template_functional__, u_emitter_vue___vue_css__, u_emitter_vue___vue_scopeId__, u_emitter_vue___vue_module_identifier__)
/* harmony default export */ var src_u_emitter_vue = (u_emitter_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-field.vue/index.js


/* harmony default export */ var u_field_vue = ({
    name: 'u-field',
    isField: true,
    mixins: [src_u_emitter_vue],
    data: function data() {
        return {
            formItemVM: undefined
        };
    },
    created: function created() {
        var _this = this;

        this.dispatch(function ($parent) {
            return $parent.$options.name === 'u-form-item' || $parent.$options.isField;
        }, 'add-field-vm', this);
        this.$on('input', function (value) {
            return _this.formItemVM && _this.formItemVM.$emit('input', value);
        });
        this.$on('change', function ($event) {
            return _this.formItemVM && _this.formItemVM.$emit('change', $event);
        });
        this.$on('focus', function () {
            return _this.formItemVM && _this.formItemVM.$emit('focus');
        });
        this.$on('blur', function () {
            return _this.formItemVM && _this.formItemVM.$emit('blur');
        });
    },
    destroyed: function destroyed() {
        this.formItemVM && this.formItemVM.$emit('remove-field-vm', this);
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-field.vue/index.js
var u_field_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_field_vue___vue_html__ = null
/* template functional */
var u_field_vue___vue_template_functional__ = false
/* styles */
var u_field_vue___vue_css__ = null
/* scopeId */
var u_field_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_field_vue___vue_module_identifier__ = null
var u_field_vue_Component = u_field_vue_normalizeComponent(u_field_vue, u_field_vue___vue_html__, u_field_vue___vue_template_functional__, u_field_vue___vue_css__, u_field_vue___vue_scopeId__, u_field_vue___vue_module_identifier__)
/* harmony default export */ var src_u_field_vue = (u_field_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-list-view.vue/index.js


/* harmony default export */ var u_list_view_vue = ({
    name: 'u-list-view',
    groupName: 'u-list-view-group',
    childName: 'u-list-view-item',
    mixins: [src_u_field_vue],
    props: {
        data: Array,
        value: null,
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        collapsible: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            ChildComponent: this.$options.childName,
            groupVMs: [],
            itemVMs: [],
            selectedVM: undefined
        };
    },

    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value: function value(_value, oldValue) {
            this.watchValue(_value);
        },
        selectedVM: function selectedVM(_selectedVM, oldVM) {
            this.$emit('change', {
                value: _selectedVM ? _selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                item: _selectedVM ? _selectedVM.item : undefined,
                itemVM: _selectedVM
            });
        },

        // This method just run once after pushing many itemVMs
        itemVMs: function itemVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        }
    },
    created: function created() {
        var _this = this;

        this.$on('add-group-vm', function (groupVM) {
            groupVM.parentVM = _this;
            _this.groupVMs.push(groupVM);
        });
        this.$on('remove-group-vm', function (groupVM) {
            groupVM.parentVM = undefined;
            _this.groupVMs.splice(_this.groupVMs.indexOf(groupVM), 1);
        });
        this.$on('add-item-vm', function (itemVM) {
            itemVM.parentVM = _this;
            _this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', function (itemVM) {
            itemVM.parentVM = undefined;
            _this.itemVMs.splice(_this.itemVMs.indexOf(itemVM), 1);
        });
        // @TODO: Suggest to add a nextTick option in Vue.js
        // Must trigger `value` watcher at next tick.
        // If not, itemVMs have not been pushed.
        this.$nextTick(function () {
            return _this.watchValue(_this.value);
        });
    },

    methods: {
        watchValue: function watchValue(value) {
            if (this.multiple) this.itemVMs.forEach(function (itemVM) {
                return itemVM.currentSelected = value && value.includes(itemVM.value);
            });else {
                if (this.selectedVM && this.selectedVM.value === value) return;
                if (value === undefined) this.selectedVM = undefined;else {
                    this.selectedVM = this.itemVMs.find(function (itemVM) {
                        return itemVM.value === value;
                    });
                    this.selectedVM && this.selectedVM.groupVM && this.selectedVM.groupVM.toggle(true);
                }
            }
        },
        select: function select(itemVM) {
            if (this.readonly || this.disabled) return;

            var oldValue = this.value;

            var cancel = false;
            this.$emit('before-select', {
                value: itemVM && itemVM.value,
                oldValue: oldValue,
                item: itemVM && itemVM.item,
                itemVM: itemVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            if (this.multiple) {
                itemVM.currentSelected = !itemVM.currentSelected;
                var itemVMs = this.itemVMs.filter(function (itemVM) {
                    return itemVM.currentSelected;
                });
                var value = itemVMs.map(function (itemVM) {
                    return itemVM.value;
                });
                var items = itemVMs.map(function (itemVM) {
                    return itemVM.item;
                });

                this.$emit('input', value);
                this.$emit('update:value', value);
                this.$emit('select', {
                    value: value,
                    oldValue: oldValue,
                    items: items,
                    itemVMs: itemVMs
                });
            } else {
                if (this.cancelable && this.selectedVM === itemVM) this.selectedVM = undefined;else this.selectedVM = itemVM;

                var _value2 = this.selectedVM && this.selectedVM.value;
                var item = this.selectedVM && this.selectedVM.item;

                this.$emit('input', _value2);
                this.$emit('update:value', _value2);
                this.$emit('select', {
                    value: _value2,
                    oldValue: oldValue,
                    item: item,
                    itemVM: this.selectedVM
                });
            }
        },
        onToggle: function onToggle(groupVM, expanded) {
            this.$emit('toggle', {
                expanded: expanded,
                groupVM: groupVM
            });
        },
        toggleAll: function toggleAll(expanded) {
            this.groupVMs.forEach(function (groupVM) {
                return groupVM.toggle(expanded);
            });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-7586c19d","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-list-view.vue/index.html
var u_list_view_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled}},[_vm._l((_vm.data),function(item){return (_vm.data)?_c(_vm.ChildComponent,{key:item.value,tag:"component",attrs:{"value":item.value,"disabled":item.disabled || _vm.disabled,"item":item}},[_vm._v(_vm._s(item[_vm.field]))]):_vm._e()}),_vm._t("default")],2)}
var u_list_view_vue_staticRenderFns = []
var u_list_view_vue_esExports = { render: u_list_view_vue_render, staticRenderFns: u_list_view_vue_staticRenderFns }
/* harmony default export */ var src_u_list_view_vue = (u_list_view_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-list-view.vue/index.js
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(15);
  this['$style'] = cssModules['$style']

}
var u_list_view_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_list_view_vue___vue_template_functional__ = false
/* styles */
var u_list_view_vue___vue_css__ = injectStyle
/* scopeId */
var u_list_view_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_list_view_vue___vue_module_identifier__ = null
var u_list_view_vue_Component = u_list_view_vue_normalizeComponent(u_list_view_vue, src_u_list_view_vue, u_list_view_vue___vue_template_functional__, u_list_view_vue___vue_css__, u_list_view_vue___vue_scopeId__, u_list_view_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_list_view_vue = (u_list_view_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-capsules.vue/index.js


const Capsules = {
    name: 'u-capsules',
    childName: 'u-capsule',
    mixins: [proto_ui_vusion_src_u_list_view_vue]
};

/* harmony default export */ var u_capsules_vue = (Capsules);
// CONCATENATED MODULE: ./src/u-capsules.vue/index.js
var u_capsules_vue_cssModules = {};
function u_capsules_vue_injectStyle (ssrContext) {
u_capsules_vue_cssModules['$style'] = __webpack_require__(12);
  this['$style'] = u_capsules_vue_cssModules['$style']

}
var u_capsules_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_capsules_vue___vue_html__ = null
/* template functional */
var u_capsules_vue___vue_template_functional__ = false
/* styles */
var u_capsules_vue___vue_css__ = u_capsules_vue_injectStyle
/* scopeId */
var u_capsules_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_capsules_vue___vue_module_identifier__ = null
var u_capsules_vue_Component = u_capsules_vue_normalizeComponent(u_capsules_vue, u_capsules_vue___vue_html__, u_capsules_vue___vue_template_functional__, u_capsules_vue___vue_css__, u_capsules_vue___vue_scopeId__, u_capsules_vue___vue_module_identifier__)
/* harmony default export */ var src_u_capsules_vue = (u_capsules_vue_Component.exports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/base/utils/event.js
var event_event = {
    on: function on(element, type, listener) {
        if (element.addEventListener) element.addEventListener(type, listener, false);else if (element.attachEvent) element.attachEvent('on' + type, listener);else element['on' + type] = listener;

        return function () {
            return event_event.off(element, type, listener);
        };
    },
    off: function off(element, type, listener) {
        if (element.removeEventListener) element.removeEventListener(type, listener, false);else if (element.detachEvent) element.detachEvent('on' + type, listener);else element['on' + type] = null;
    },
    once: function once(el, type, listener) {
        var fn = function fn() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            listener.apply(this, args);
            event_event.off(el, type, fn);
        };
        event_event.on(el, type, fn);
    }
};

/* harmony default export */ var utils_event = (event_event);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/base/directives.js


var href = {
    bind: function bind(el, binding) {
        el.bindingValue = binding.value;
        el.addEventListener('click', function (e) {
            return location.href = el.bindingValue;
        });
    },
    componentUpdated: function componentUpdated(el, binding) {
        el.bindingValue = binding.value;
    }
};

var to = {
    bind: function bind(el, binding, vnode) {
        var $router = vnode.componentInstance.$router;
        if (!$router) return console.warn('[proto-ui] Cannot find vue router.');

        el.bindingValue = binding.value;
        el.addEventListener('click', function (e) {
            return $router.push(el.bindingValue);
        });
    },
    componentUpdated: function componentUpdated(el, binding) {
        el.bindingValue = binding.value;
    }
};

var ellipsisTitle = {
    update: function update(el, binding, vnode) {
        var mouseenterHandler = function mouseenterHandler(e) {
            // 此处如果判断已存在title属性则不添加的话，会导致在u-select中场景下value不发生变化，text发生变化的title不会更新值
            var style = getComputedStyle(el);
            var title = binding.value || el.innerText;
            if (style.overflow === 'hidden' && style.textOverflow === 'ellipsis' && style.whiteSpace === 'nowrap' && el.scrollWidth > el.offsetWidth) el.setAttribute('title', title);
        };
        el.mouseenterHandler = mouseenterHandler;
        utils_event.on(el, 'mouseenter', mouseenterHandler);
    },
    unbind: function unbind(el, binding) {
        utils_event.off(el, 'mouseenter', el.mouseenterHandler);
    }
};

var repeatClick = {
    bind: function bind(el, binding, vnode) {
        var wait = +binding.arg || 400;
        var interval = 100;
        var handler = vnode.context[binding.expression];
        var pressing = false;
        var timeout = void 0;

        var fn = function fn() {
            if (!pressing) return;

            handler();
            timeout = setTimeout(fn, interval);
        };

        utils_event.on(el, 'mousedown', function (e) {
            if (e.button !== 0) return;

            utils_event.once(document, 'mouseup', function () {
                return pressing = false;
            });
            clearTimeout(timeout);
            pressing = true;
            handler();
            timeout = setTimeout(fn, wait);
        });
    }
};
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-list-view-item.vue/index.js



/* harmony default export */ var u_list_view_item_vue = ({
    name: 'u-list-view-item',
    parentName: 'u-list-view',
    groupName: 'u-list-view-group',
    mixins: [src_u_emitter_vue],
    directives: { ellipsisTitle: ellipsisTitle },
    props: {
        value: null,
        disabled: { type: Boolean, default: false },
        item: Object
    },
    data: function data() {
        return {
            currentSelected: false,
            parentVM: undefined
        };
    },

    computed: {
        selected: function selected() {
            return this.parentVM.selectedVM === this;
        }
    },
    created: function created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
        this.dispatch(this.$options.groupName, 'add-item-vm', this);
    },
    destroyed: function destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
        this.dispatch(this.$options.groupName, 'remove-item-vm', this);
    },

    methods: {
        select: function select() {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled) return;

            var cancel = false;
            this.$emit('before-select', {
                value: this.value,
                item: this.item,
                itemVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.parentVM.select(this);
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-67ef7b73","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-list-view-item.vue/index.html
var u_list_view_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.root,attrs:{"selected":_vm.selected || _vm.currentSelected,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled},on:{"click":function($event){_vm.select()}}},[_vm._t("default")],2)}
var u_list_view_item_vue_staticRenderFns = []
var u_list_view_item_vue_esExports = { render: u_list_view_item_vue_render, staticRenderFns: u_list_view_item_vue_staticRenderFns }
/* harmony default export */ var src_u_list_view_item_vue = (u_list_view_item_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-list-view-item.vue/index.js
var u_list_view_item_vue_cssModules = {};
function u_list_view_item_vue_injectStyle (ssrContext) {
u_list_view_item_vue_cssModules['$style'] = __webpack_require__(19);
  this['$style'] = u_list_view_item_vue_cssModules['$style']

}
var u_list_view_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_list_view_item_vue___vue_template_functional__ = false
/* styles */
var u_list_view_item_vue___vue_css__ = u_list_view_item_vue_injectStyle
/* scopeId */
var u_list_view_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_list_view_item_vue___vue_module_identifier__ = null
var u_list_view_item_vue_Component = u_list_view_item_vue_normalizeComponent(u_list_view_item_vue, src_u_list_view_item_vue, u_list_view_item_vue___vue_template_functional__, u_list_view_item_vue___vue_css__, u_list_view_item_vue___vue_scopeId__, u_list_view_item_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_list_view_item_vue = (u_list_view_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-capsule.vue/index.js


/* harmony default export */ var u_capsule_vue = ({
    name: 'u-capsule',
    parentName: 'u-capsules',
    mixins: [proto_ui_vusion_src_u_list_view_item_vue],
    props: {
        title: String
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-ba0f073a","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-capsule.vue/index.html
var u_capsule_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.$style.root},[_c('div',{class:_vm.$style.button,attrs:{"selected":_vm.selected || _vm.currentSelected,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled},on:{"click":function($event){_vm.select()}}},[_vm._t("default")],2),_c('div',{class:_vm.$style.title},[_vm._v(_vm._s(_vm.title))])])}
var u_capsule_vue_staticRenderFns = []
var u_capsule_vue_esExports = { render: u_capsule_vue_render, staticRenderFns: u_capsule_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_ba0f073a___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_capsule_vue = (u_capsule_vue_esExports);
// CONCATENATED MODULE: ./src/u-capsule.vue/index.js
var u_capsule_vue_cssModules = {};
function u_capsule_vue_injectStyle (ssrContext) {
u_capsule_vue_cssModules['$style'] = __webpack_require__(17);
  this['$style'] = u_capsule_vue_cssModules['$style']

}
var u_capsule_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_capsule_vue___vue_template_functional__ = false
/* styles */
var u_capsule_vue___vue_css__ = u_capsule_vue_injectStyle
/* scopeId */
var u_capsule_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_capsule_vue___vue_module_identifier__ = null
var u_capsule_vue_Component = u_capsule_vue_normalizeComponent(u_capsule_vue, template_compiler___id___data_v_ba0f073a___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_capsule_vue, u_capsule_vue___vue_template_functional__, u_capsule_vue___vue_css__, u_capsule_vue___vue_scopeId__, u_capsule_vue___vue_module_identifier__)
/* harmony default export */ var src_u_capsule_vue = (u_capsule_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-color-picker.vue/index.js
/* harmony default export */ var u_color_picker_vue = ({
    name: 'u-color-picker',
    props: {
        value: { type: String, default: '#000000' }
    },
    data() {
        return {
            currentValue: this.value
        };
    },
    watch: {
        value(value) {
            this.currentValue = this.value;
        },
        currentValue(value, oldValue) {
            this.$emit('change', {
                value,
                oldValue
            });
        }
    },
    methods: {
        onInput(value) {
            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('update:value', value);
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-dccb3d1c","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-color-picker.vue/index.html
var u_color_picker_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-popover',{attrs:{"trigger":"click","content":"内容","placement":"top-start"}},[_c('span',{class:_vm.$style.root},[_c('span',{class:_vm.$style.color,style:({ backgroundColor: _vm.currentValue })})]),_c('u-pallette',{class:_vm.$style.pallette,attrs:{"slot":"body","value":_vm.currentValue},on:{"input":_vm.onInput},slot:"body"},[_vm._t("default")],2)],1)}
var u_color_picker_vue_staticRenderFns = []
var u_color_picker_vue_esExports = { render: u_color_picker_vue_render, staticRenderFns: u_color_picker_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_dccb3d1c___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_color_picker_vue = (u_color_picker_vue_esExports);
// CONCATENATED MODULE: ./src/u-color-picker.vue/index.js
var u_color_picker_vue_cssModules = {};
function u_color_picker_vue_injectStyle (ssrContext) {
u_color_picker_vue_cssModules['$style'] = __webpack_require__(21);
  this['$style'] = u_color_picker_vue_cssModules['$style']

}
var u_color_picker_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_color_picker_vue___vue_template_functional__ = false
/* styles */
var u_color_picker_vue___vue_css__ = u_color_picker_vue_injectStyle
/* scopeId */
var u_color_picker_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_color_picker_vue___vue_module_identifier__ = null
var u_color_picker_vue_Component = u_color_picker_vue_normalizeComponent(u_color_picker_vue, template_compiler___id___data_v_dccb3d1c___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_color_picker_vue, u_color_picker_vue___vue_template_functional__, u_color_picker_vue___vue_css__, u_color_picker_vue___vue_scopeId__, u_color_picker_vue___vue_module_identifier__)
/* harmony default export */ var src_u_color_picker_vue = (u_color_picker_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-collapse.vue/index.js
/* harmony default export */ var u_collapse_vue = ({
    name: 'u-collapse',
    childName: 'u-collapse-item',
    props: {
        disabled: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false }
    },
    data() {
        return {
            itemVMs: []
        };
    },
    created() {
        this.$on('add-item-vm', itemVM => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', itemVM => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
    },
    methods: {
        toggle(toggledVM) {
            this.accordion && this.itemVMs.forEach(itemVM => itemVM !== toggledVM && (itemVM.currentExpanded = false));
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-5b40b532","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-collapse.vue/index.html
var u_collapse_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_collapse_vue_staticRenderFns = []
var u_collapse_vue_esExports = { render: u_collapse_vue_render, staticRenderFns: u_collapse_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_5b40b532___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_collapse_vue = (u_collapse_vue_esExports);
// CONCATENATED MODULE: ./src/u-collapse.vue/index.js
var u_collapse_vue_cssModules = {};
function u_collapse_vue_injectStyle (ssrContext) {
u_collapse_vue_cssModules['$style'] = __webpack_require__(23);
  this['$style'] = u_collapse_vue_cssModules['$style']

}
var u_collapse_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_collapse_vue___vue_template_functional__ = false
/* styles */
var u_collapse_vue___vue_css__ = u_collapse_vue_injectStyle
/* scopeId */
var u_collapse_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_collapse_vue___vue_module_identifier__ = null
var u_collapse_vue_Component = u_collapse_vue_normalizeComponent(u_collapse_vue, template_compiler___id___data_v_5b40b532___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_collapse_vue, u_collapse_vue___vue_template_functional__, u_collapse_vue___vue_css__, u_collapse_vue___vue_scopeId__, u_collapse_vue___vue_module_identifier__)
/* harmony default export */ var src_u_collapse_vue = (u_collapse_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-collapse-item.vue/index.js


/* harmony default export */ var u_collapse_item_vue = ({
    name: 'u-collapse-item',
    parentName: 'u-collapse',
    mixins: [src_u_emitter_vue],
    props: {
        title: String,
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data() {
        return {
            currentExpanded: this.expanded,
            parentVM: undefined
        };
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        }
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
    methods: {
        toggle() {
            if (this.disabled || this.parentVM.disabled) return;

            this.currentExpanded = !this.currentExpanded;

            this.$emit('update:expanded', this.currentExpanded);
            this.parentVM.toggle(this);
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-06df65e9","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-collapse-item.vue/index.html
var u_collapse_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"expanded":_vm.currentExpanded}},[_c('div',{class:_vm.$style.head,on:{"click":function($event){_vm.toggle()}}},[_c('span',[_vm._v(_vm._s(_vm.title))]),_c('span',{class:_vm.$style.expander,attrs:{"expanded":_vm.currentExpanded}}),_c('span',{class:_vm.$style.extra},[_vm._t("extra")],2)]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentExpanded),expression:"currentExpanded"}],class:_vm.$style.body},[_vm._t("default")],2)])}
var u_collapse_item_vue_staticRenderFns = []
var u_collapse_item_vue_esExports = { render: u_collapse_item_vue_render, staticRenderFns: u_collapse_item_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_06df65e9___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_collapse_item_vue = (u_collapse_item_vue_esExports);
// CONCATENATED MODULE: ./src/u-collapse-item.vue/index.js
var u_collapse_item_vue_cssModules = {};
function u_collapse_item_vue_injectStyle (ssrContext) {
u_collapse_item_vue_cssModules['$style'] = __webpack_require__(25);
  this['$style'] = u_collapse_item_vue_cssModules['$style']

}
var u_collapse_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_collapse_item_vue___vue_template_functional__ = false
/* styles */
var u_collapse_item_vue___vue_css__ = u_collapse_item_vue_injectStyle
/* scopeId */
var u_collapse_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_collapse_item_vue___vue_module_identifier__ = null
var u_collapse_item_vue_Component = u_collapse_item_vue_normalizeComponent(u_collapse_item_vue, template_compiler___id___data_v_06df65e9___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_collapse_item_vue, u_collapse_item_vue___vue_template_functional__, u_collapse_item_vue___vue_css__, u_collapse_item_vue___vue_scopeId__, u_collapse_item_vue___vue_module_identifier__)
/* harmony default export */ var src_u_collapse_item_vue = (u_collapse_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-badge.vue/index.js
/* harmony default export */ var u_badge_vue = ({
    name: 'u-badge',
    props: {
        value: [Number, String],
        max: { type: Number, default: 99 }
    },
    computed: {
        currentValue: function currentValue() {
            if (typeof this.value !== 'number') return this.value;else return this.value > this.max ? this.max + '+' : this.value;
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-1a84bfcc","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-badge.vue/index.html
var u_badge_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default"),(_vm.currentValue)?_c('span',{class:_vm.$style.value},[_vm._v(_vm._s(_vm.currentValue))]):_vm._e()],2)}
var u_badge_vue_staticRenderFns = []
var u_badge_vue_esExports = { render: u_badge_vue_render, staticRenderFns: u_badge_vue_staticRenderFns }
/* harmony default export */ var src_u_badge_vue = (u_badge_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-badge.vue/index.js
var u_badge_vue_cssModules = {};
function u_badge_vue_injectStyle (ssrContext) {
u_badge_vue_cssModules['$style'] = __webpack_require__(29);
  this['$style'] = u_badge_vue_cssModules['$style']

}
var u_badge_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_badge_vue___vue_template_functional__ = false
/* styles */
var u_badge_vue___vue_css__ = u_badge_vue_injectStyle
/* scopeId */
var u_badge_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_badge_vue___vue_module_identifier__ = null
var u_badge_vue_Component = u_badge_vue_normalizeComponent(u_badge_vue, src_u_badge_vue, u_badge_vue___vue_template_functional__, u_badge_vue___vue_css__, u_badge_vue___vue_scopeId__, u_badge_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_badge_vue = (u_badge_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-block.vue/index.js
/* harmony default export */ var u_block_vue = ({
    name: 'u-block'
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-5ed13894","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-block.vue/index.html
var u_block_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_block_vue_staticRenderFns = []
var u_block_vue_esExports = { render: u_block_vue_render, staticRenderFns: u_block_vue_staticRenderFns }
/* harmony default export */ var src_u_block_vue = (u_block_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-block.vue/index.js
var u_block_vue_cssModules = {};
function u_block_vue_injectStyle (ssrContext) {
u_block_vue_cssModules['$style'] = __webpack_require__(31);
  this['$style'] = u_block_vue_cssModules['$style']

}
var u_block_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_block_vue___vue_template_functional__ = false
/* styles */
var u_block_vue___vue_css__ = u_block_vue_injectStyle
/* scopeId */
var u_block_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_block_vue___vue_module_identifier__ = null
var u_block_vue_Component = u_block_vue_normalizeComponent(u_block_vue, src_u_block_vue, u_block_vue___vue_template_functional__, u_block_vue___vue_css__, u_block_vue___vue_scopeId__, u_block_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_block_vue = (u_block_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-link.vue/index.js
/* harmony default export */ var u_link_vue = ({
    name: 'u-link',
    props: {
        href: { type: String },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        disabled: { type: Boolean }
    },
    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        }
    },
    methods: {
        onClick: function onClick(e) {
            if (this.disabled) return e.preventDefault();

            this.$emit('click', e);
            // 先执行事件，再执行to，最后判断href
            this.navigate();
        },
        navigate: function navigate() {
            if (this.to === undefined) return;

            if (!this.$router) return console.warn('[proto-ui]', 'Cannot find vue-router.');

            var cancel = false;
            this.$emit('before-navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            var $router = this.$router;

            var _$router$resolve = $router.resolve(this.to, this.$route, this.append),
                location = _$router$resolve.location;

            this.replace ? $router.replace(location) : $router.push(location);

            this.$emit('navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append
            });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-64f0b461","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-link.vue/index.html
var u_link_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',_vm._g({class:_vm.$style.root,attrs:{"href":_vm.href,"disabled":_vm.disabled},on:{"click":_vm.onClick}},_vm.listeners),[_vm._t("default")],2)}
var u_link_vue_staticRenderFns = []
var u_link_vue_esExports = { render: u_link_vue_render, staticRenderFns: u_link_vue_staticRenderFns }
/* harmony default export */ var src_u_link_vue = (u_link_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-link.vue/index.js
var u_link_vue_cssModules = {};
function u_link_vue_injectStyle (ssrContext) {
u_link_vue_cssModules['$style'] = __webpack_require__(35);
  this['$style'] = u_link_vue_cssModules['$style']

}
var u_link_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_link_vue___vue_template_functional__ = false
/* styles */
var u_link_vue___vue_css__ = u_link_vue_injectStyle
/* scopeId */
var u_link_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_link_vue___vue_module_identifier__ = null
var u_link_vue_Component = u_link_vue_normalizeComponent(u_link_vue, src_u_link_vue, u_link_vue___vue_template_functional__, u_link_vue___vue_css__, u_link_vue___vue_scopeId__, u_link_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_link_vue = (u_link_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-button.vue/index.js


/* harmony default export */ var proto_ui_vusion_src_u_button_vue = ({
    name: 'u-button',
    mixins: [proto_ui_vusion_src_u_link_vue]
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-button.vue/index.js
var u_button_vue_cssModules = {};
function u_button_vue_injectStyle (ssrContext) {
u_button_vue_cssModules['$style'] = __webpack_require__(33);
  this['$style'] = u_button_vue_cssModules['$style']

}
var u_button_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_button_vue___vue_html__ = null
/* template functional */
var u_button_vue___vue_template_functional__ = false
/* styles */
var u_button_vue___vue_css__ = u_button_vue_injectStyle
/* scopeId */
var u_button_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_button_vue___vue_module_identifier__ = null
var u_button_vue_Component = u_button_vue_normalizeComponent(proto_ui_vusion_src_u_button_vue, u_button_vue___vue_html__, u_button_vue___vue_template_functional__, u_button_vue___vue_css__, u_button_vue___vue_scopeId__, u_button_vue___vue_module_identifier__)
/* harmony default export */ var node_modules_proto_ui_vusion_src_u_button_vue = (u_button_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-checkbox.vue/index.js


/* harmony default export */ var u_checkbox_vue = ({
    name: 'u-checkbox',
    parentName: 'u-checkboxes',
    mixins: [src_u_field_vue],
    props: {
        value: { type: Boolean, default: false },
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            parentVM: undefined,
            currentValue: this.value
        };
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        }
    },
    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        },
        currentValue: function currentValue(value, oldValue) {
            this.$emit('change', { value: value, oldValue: oldValue });
        }
    },
    created: function created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed: function destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },

    methods: {
        onFocus: function onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.$emit('blur', e);
        },
        check: function check() {
            if (this.readonly || this.disabled) return;

            var oldValue = this.currentValue;
            var value = !this.currentValue;

            if (this.parentVM && !this.parentVM.canCheck({
                value: value,
                oldValue: oldValue,
                label: this.label,
                itemVM: this
            })) return;

            var cancel = false;
            this.$emit('before-check', {
                value: value,
                oldValue: oldValue,
                label: this.label,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentValue = value;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('check', { value: value, oldValue: oldValue });

            this.parentVM && this.parentVM.onCheck({
                value: value,
                oldValue: oldValue,
                label: this.label,
                itemVM: this
            });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-44fbd7ac","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-checkbox.vue/index.html
var u_checkbox_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',_vm._g({class:_vm.$style.root,attrs:{"disabled":_vm.disabled,"tabindex":"0"},on:{"click":function($event){_vm.check()},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();_vm.check()},"focus":_vm.onFocus,"blur":_vm.onBlur}},_vm.listeners),[_c('span',{class:_vm.$style.box,attrs:{"status":String(_vm.currentValue),"disabled":_vm.disabled}}),_vm._t("default")],2)}
var u_checkbox_vue_staticRenderFns = []
var u_checkbox_vue_esExports = { render: u_checkbox_vue_render, staticRenderFns: u_checkbox_vue_staticRenderFns }
/* harmony default export */ var src_u_checkbox_vue = (u_checkbox_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-checkbox.vue/index.js
var u_checkbox_vue_cssModules = {};
function u_checkbox_vue_injectStyle (ssrContext) {
u_checkbox_vue_cssModules['$style'] = __webpack_require__(37);
  this['$style'] = u_checkbox_vue_cssModules['$style']

}
var u_checkbox_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_checkbox_vue___vue_template_functional__ = false
/* styles */
var u_checkbox_vue___vue_css__ = u_checkbox_vue_injectStyle
/* scopeId */
var u_checkbox_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_checkbox_vue___vue_module_identifier__ = null
var u_checkbox_vue_Component = u_checkbox_vue_normalizeComponent(u_checkbox_vue, src_u_checkbox_vue, u_checkbox_vue___vue_template_functional__, u_checkbox_vue___vue_css__, u_checkbox_vue___vue_scopeId__, u_checkbox_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_checkbox_vue = (u_checkbox_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-checkbox--0.vue/index.js


/* harmony default export */ var u_checkbox__0_vue = ({
    name: 'u-checkbox--0',
    mixins: [proto_ui_vusion_src_u_checkbox_vue],

    watch: {
        currentValue: function currentValue(value) {
            this.watchValue(value);
        }
    },
    created: function created() {
        var _this = this;

        this.$nextTick(function () {
            return _this.watchValue(_this.value);
        });
    },

    methods: {
        watchValue: function watchValue(value) {
            this.$refs.checkbox.indeterminate = value === null;
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-6f0cf656","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-checkbox--0.vue/index.html
var u_checkbox__0_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',_vm._g({class:_vm.$style.root,attrs:{"disabled":_vm.disabled,"tabindex":"0"},on:{"click":function($event){$event.preventDefault();_vm.check()},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();_vm.check()},"focus":_vm.onFocus,"blur":_vm.onBlur}},_vm.listeners),[_c('input',{ref:"checkbox",class:_vm.$style.box,attrs:{"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":_vm.currentValue}}),_vm._t("default")],2)}
var u_checkbox__0_vue_staticRenderFns = []
var u_checkbox__0_vue_esExports = { render: u_checkbox__0_vue_render, staticRenderFns: u_checkbox__0_vue_staticRenderFns }
/* harmony default export */ var src_u_checkbox__0_vue = (u_checkbox__0_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-checkbox--0.vue/index.js
var u_checkbox__0_vue_cssModules = {};
function u_checkbox__0_vue_injectStyle (ssrContext) {
u_checkbox__0_vue_cssModules['$style'] = __webpack_require__(39);
  this['$style'] = u_checkbox__0_vue_cssModules['$style']

}
var u_checkbox__0_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_checkbox__0_vue___vue_template_functional__ = false
/* styles */
var u_checkbox__0_vue___vue_css__ = u_checkbox__0_vue_injectStyle
/* scopeId */
var u_checkbox__0_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_checkbox__0_vue___vue_module_identifier__ = null
var u_checkbox__0_vue_Component = u_checkbox__0_vue_normalizeComponent(u_checkbox__0_vue, src_u_checkbox__0_vue, u_checkbox__0_vue___vue_template_functional__, u_checkbox__0_vue___vue_css__, u_checkbox__0_vue___vue_scopeId__, u_checkbox__0_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_checkbox__0_vue = (u_checkbox__0_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-checkboxes.vue/index.js


/* harmony default export */ var u_checkboxes_vue = ({
    name: 'u-checkboxes',
    childName: 'u-checkbox',
    mixins: [src_u_field_vue],
    props: {
        value: { type: Array, default: function _default() {
                return [];
            }
        },
        min: { type: Number, default: 0 },
        max: { type: Number, default: Infinity },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentValue: this.value,
            itemVMs: []
        };
    },
    created: function created() {
        var _this = this;

        this.$on('add-item-vm', function (itemVM) {
            itemVM.parentVM = _this;
            _this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', function (itemVM) {
            itemVM.parentVM = undefined;
            _this.itemVMs.splice(_this.itemVMs.indexOf(itemVM), 1);
        });

        this.$nextTick(function () {
            return _this.watchValue(_this.value);
        });
    },

    watch: {
        value: function value(_value) {
            this.watchValue(_value);
        },
        currentValue: function currentValue(value, oldValue) {
            this.$emit('change', {
                value: value,
                oldValue: oldValue
            });
        }
    },
    methods: {
        watchValue: function watchValue(value) {
            this.currentValue = value;
            this.itemVMs.forEach(function (itemVM) {
                return itemVM.currentValue = value.includes(itemVM.label);
            });
        },
        canCheck: function canCheck($event) {
            if (this.readonly || this.disabled) return false;

            var value = $event.value;
            var label = $event.itemVM.label;
            if (value && !this.currentValue.includes(label)) {
                var length = this.currentValue.length + 1;
                return this.min <= length && length <= this.max;
            } else if (!value && this.currentValue.includes(label)) {
                var _length = this.currentValue.length - 1;
                return this.min <= _length && _length <= this.max;
            }
        },
        onCheck: function onCheck($event) {
            var value = $event.value;
            var label = $event.itemVM.label;

            if (value && !this.currentValue.includes(label)) this.currentValue.push(label);else if (!value && this.currentValue.includes(label)) this.currentValue.splice(this.currentValue.indexOf(label), 1);

            this.$emit('input', this.currentValue);
            this.$emit('update:value', this.currentValue);
            this.$emit('check', {
                value: this.currentValue,
                itemVM: $event.itemVM
            });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-3a440550","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-checkboxes.vue/index.html
var u_checkboxes_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_checkboxes_vue_staticRenderFns = []
var u_checkboxes_vue_esExports = { render: u_checkboxes_vue_render, staticRenderFns: u_checkboxes_vue_staticRenderFns }
/* harmony default export */ var src_u_checkboxes_vue = (u_checkboxes_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-checkboxes.vue/index.js
var u_checkboxes_vue_cssModules = {};
function u_checkboxes_vue_injectStyle (ssrContext) {
u_checkboxes_vue_cssModules['$style'] = __webpack_require__(41);
  this['$style'] = u_checkboxes_vue_cssModules['$style']

}
var u_checkboxes_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_checkboxes_vue___vue_template_functional__ = false
/* styles */
var u_checkboxes_vue___vue_css__ = u_checkboxes_vue_injectStyle
/* scopeId */
var u_checkboxes_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_checkboxes_vue___vue_module_identifier__ = null
var u_checkboxes_vue_Component = u_checkboxes_vue_normalizeComponent(u_checkboxes_vue, src_u_checkboxes_vue, u_checkboxes_vue___vue_template_functional__, u_checkboxes_vue___vue_css__, u_checkboxes_vue___vue_scopeId__, u_checkboxes_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_checkboxes_vue = (u_checkboxes_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-circular-progress.vue/index.js
/* harmony default export */ var u_circular_progress_vue = ({
    name: 'u-circular-progress',
    props: {
        percent: { type: Number, default: 0 }
    },
    data: function data() {
        return {
            radius: 45
        };
    },

    computed: {
        strokeDasharray: function strokeDasharray() {
            return 2 * Math.PI * this.radius * this.percent * 0.01 + 'px 1000px';
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-62dc9844","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-circular-progress.vue/index.html
var u_circular_progress_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('svg',{class:_vm.$style.svg,attrs:{"viewBox":"0 0 100 100"}},[_c('g',{attrs:{"transform":"translate(50, 50) rotate(-90)"}},[_c('circle',{class:_vm.$style.track,attrs:{"cx":"0","cy":"0","r":_vm.radius}}),_c('circle',{class:_vm.$style.trail,style:({ strokeDasharray: _vm.strokeDasharray }),attrs:{"cx":"0","cy":"0","r":_vm.radius}})])]),_c('div',{class:_vm.$style.text},[_vm._t("default",[_vm._v(_vm._s(_vm.percent + '%'))])],2)])}
var u_circular_progress_vue_staticRenderFns = []
var u_circular_progress_vue_esExports = { render: u_circular_progress_vue_render, staticRenderFns: u_circular_progress_vue_staticRenderFns }
/* harmony default export */ var src_u_circular_progress_vue = (u_circular_progress_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-circular-progress.vue/index.js
var u_circular_progress_vue_cssModules = {};
function u_circular_progress_vue_injectStyle (ssrContext) {
u_circular_progress_vue_cssModules['$style'] = __webpack_require__(43);
  this['$style'] = u_circular_progress_vue_cssModules['$style']

}
var u_circular_progress_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_circular_progress_vue___vue_template_functional__ = false
/* styles */
var u_circular_progress_vue___vue_css__ = u_circular_progress_vue_injectStyle
/* scopeId */
var u_circular_progress_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_circular_progress_vue___vue_module_identifier__ = null
var u_circular_progress_vue_Component = u_circular_progress_vue_normalizeComponent(u_circular_progress_vue, src_u_circular_progress_vue, u_circular_progress_vue___vue_template_functional__, u_circular_progress_vue___vue_css__, u_circular_progress_vue___vue_scopeId__, u_circular_progress_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_circular_progress_vue = (u_circular_progress_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-collapse-transition.vue/index.js
/* harmony default export */ var u_collapse_transition_vue = ({
    name: 'u-collapse-transition',
    functional: true,
    render: function render(h, _ref) {
        var children = _ref.children;

        var old = {};

        return h('transition', {
            on: {
                beforeEnter: function beforeEnter(el) {
                    old.paddingTop = el.style.paddingTop;
                    old.paddingBottom = el.style.paddingBottom;

                    el.style.height = '0';
                    el.style.paddingTop = 0;
                    el.style.paddingBottom = 0;
                },
                enter: function enter(el) {
                    old.overflow = el.style.overflow;

                    el.style.height = el.scrollHeight ? el.scrollHeight + 'px' : '';
                    el.style.paddingTop = old.paddingTop;
                    el.style.paddingBottom = old.paddingBottom;

                    el.style.overflow = 'hidden';
                },
                afterEnter: function afterEnter(el) {
                    el.style.height = '';
                    el.style.overflow = old.overflow;
                },
                beforeLeave: function beforeLeave(el) {
                    old.paddingTop = el.style.paddingTop;
                    old.paddingBottom = el.style.paddingBottom;
                    old.overflow = el.style.overflow;

                    el.style.height = el.scrollHeight + 'px';
                    el.style.overflow = 'hidden';
                },
                leave: function leave(el) {
                    if (el.scrollHeight) {
                        el.style.height = 0;
                        el.style.paddingTop = 0;
                        el.style.paddingBottom = 0;
                    }
                },
                afterLeave: function afterLeave(el) {
                    el.style.height = '';
                    el.style.overflow = old.overflow;
                    el.style.paddingTop = old.paddingTop;
                    el.style.paddingBottom = old.paddingBottom;
                }
            }
        }, children);
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-collapse-transition.vue/index.js
var u_collapse_transition_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_collapse_transition_vue___vue_html__ = null
/* template functional */
var u_collapse_transition_vue___vue_template_functional__ = false
/* styles */
var u_collapse_transition_vue___vue_css__ = null
/* scopeId */
var u_collapse_transition_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_collapse_transition_vue___vue_module_identifier__ = null
var u_collapse_transition_vue_Component = u_collapse_transition_vue_normalizeComponent(u_collapse_transition_vue, u_collapse_transition_vue___vue_html__, u_collapse_transition_vue___vue_template_functional__, u_collapse_transition_vue___vue_css__, u_collapse_transition_vue___vue_scopeId__, u_collapse_transition_vue___vue_module_identifier__)
/* harmony default export */ var src_u_collapse_transition_vue = (u_collapse_transition_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-combo-slider.vue/index.js


/* harmony default export */ var u_combo_slider_vue = ({
    name: 'u-combo-slider',
    mixins: [src_u_field_vue],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1 },
        fixed: { type: Number, default: 4 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentValue: this.value
        };
    },

    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        },
        currentValue: function currentValue(_currentValue, oldValue) {
            this.$emit('change', {
                value: _currentValue,
                oldValue: oldValue
            });
        }
    },
    methods: {
        onInput: function onInput(value) {
            if (this.currentValue === value) return;

            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('update:value', value);
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-45a6c867","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-combo-slider.vue/index.html
var u_combo_slider_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('u-slider',{class:_vm.$style.slider,attrs:{"value":_vm.currentValue,"min":_vm.min,"max":_vm.max,"step":_vm.step,"fixed":_vm.fixed,"readonly":_vm.readonly,"disabled":_vm.disabled},on:{"input":_vm.onInput}}),_c('u-number-input',{class:_vm.$style.input,attrs:{"value":_vm.currentValue,"min":_vm.min,"max":_vm.max,"step":_vm.step || 1,"fixed":_vm.fixed,"readonly":_vm.readonly,"disabled":_vm.disabled},on:{"input":_vm.onInput}}),_vm._t("default")],2)}
var u_combo_slider_vue_staticRenderFns = []
var u_combo_slider_vue_esExports = { render: u_combo_slider_vue_render, staticRenderFns: u_combo_slider_vue_staticRenderFns }
/* harmony default export */ var src_u_combo_slider_vue = (u_combo_slider_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-combo-slider.vue/index.js
var u_combo_slider_vue_cssModules = {};
function u_combo_slider_vue_injectStyle (ssrContext) {
u_combo_slider_vue_cssModules['$style'] = __webpack_require__(45);
  this['$style'] = u_combo_slider_vue_cssModules['$style']

}
var u_combo_slider_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_combo_slider_vue___vue_template_functional__ = false
/* styles */
var u_combo_slider_vue___vue_css__ = u_combo_slider_vue_injectStyle
/* scopeId */
var u_combo_slider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_combo_slider_vue___vue_module_identifier__ = null
var u_combo_slider_vue_Component = u_combo_slider_vue_normalizeComponent(u_combo_slider_vue, src_u_combo_slider_vue, u_combo_slider_vue___vue_template_functional__, u_combo_slider_vue___vue_css__, u_combo_slider_vue___vue_scopeId__, u_combo_slider_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_combo_slider_vue = (u_combo_slider_vue_Component.exports);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/base/utils/style.js
var getPosition = function getPosition(el) {
    var doc = el && el.ownerDocument;
    var docElem = doc.documentElement;
    var body = doc.body;

    var box = el.getBoundingClientRect ? el.getBoundingClientRect() : { left: 0, top: 0 };

    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var clientTop = docElem.clientTop || body.clientTop || 0;

    return { left: box.left - clientLeft, top: box.top - clientTop };
};

var getSize = function getSize(el) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'outside';

    if (mode === 'inside') return { width: el.clientWidth, height: el.clientHeight };else if (mode === 'center') return { width: (el.clientWidth + el.offsetWidth) / 2, height: (el.offsetHeight + el.clientHeight) / 2 };else if (mode === 'outside') return { width: el.offsetWidth, height: el.offsetHeight };
};

var getDimension = function getDimension(el, mode) {
    return Object.assign(getSize(el, mode), getPosition(el));
};

var isInRect = function isInRect(position, dimension) {
    if (!position || !dimension) return false;

    return position.left > dimension.left && position.left < dimension.left + dimension.width && position.top > dimension.top && position.top < dimension.top + dimension.height;
};

var style_getComputedStyle = function getComputedStyle(el, property) {
    var computedStyle = el.currentStyle || window.getComputedStyle(el, null);
    return property ? computedStyle[property] : computedStyle;
};
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-draggable.vue/manager.js
/* harmony default export */ var manager = ({
    dragging: false,
    value: undefined,
    proxy: undefined,
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    startX: 0,
    startY: 0,
    dragX: 0,
    dragY: 0,
    startLeft: 0,
    startTop: 0,
    dragLeft: 0,
    dragTop: 0,
    droppable: undefined,
    droppables: []
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-draggable.vue/index.js




/* harmony default export */ var u_draggable_vue = ({
    name: 'u-draggable',
    props: {
        value: null,
        transfer: { type: [String, Element], default: 'clone' },
        immediate: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        constraint: Function
    },
    render: function render() {
        return this.$slots.default && this.$slots.default[0];
    },

    watch: {
        disabled: function disabled(_disabled) {
            this.watchDisabled(_disabled);
        }
    },
    mounted: function mounted() {
        var _this = this;

        // 创建VNode
        /* eslint-disable consistent-this */
        var parentVM = this;
        this.childVM = new vue_esm["a" /* default */]({
            name: 'u-draggable-child',
            render: function render(h) {
                return parentVM.$slots.transfer && parentVM.$slots.transfer[0];
            }
        });
        this.childVM.parentVM = parentVM;
        this.childVM.$mount();

        this.$nextTick(function () {
            return _this.watchDisabled(_this.disabled);
        });
        this.$el.addEventListener('mousedown', this.onMouseDown);
    },
    updated: function updated() {
        this.childVM.$forceUpdate();
    },
    destroyed: function destroyed() {
        this.childVM && this.childVM.destroy && this.childVM.destroy();
        this.childVM = undefined;
    },

    methods: {
        watchDisabled: function watchDisabled(disabled) {
            if (disabled) this.$el.removeAttribute && this.$el.removeAttribute('draggable');else this.$el.setAttribute && this.$el.setAttribute('draggable', 'draggable');
        },
        getTransferEl: function getTransferEl() {
            var transferEl = void 0;
            var sourceEl = this.$el;

            if (this.$slots.transfer) transferEl = this.childVM.$el;else if (this.transfer instanceof Element) transferEl = this.transfer;else if (this.transfer === 'self') transferEl = sourceEl;else if (this.transfer === 'clone') transferEl = sourceEl.cloneNode(true);

            if (this.$slots.transfer || this.transfer === 'clone') {
                this.setTransferFixed(transferEl, getPosition(sourceEl));
                var size = getSize(sourceEl);
                transferEl.style.width = size.width + 'px';
                transferEl.style.height = size.height + 'px';
                sourceEl.parentElement.appendChild(transferEl);
            }

            transferEl && this.initTransfer(transferEl);
            return transferEl;
        },
        initTransfer: function initTransfer(transfer) {
            // 如果position为static，则设置为relative，保证可以移动
            if (style_getComputedStyle(transfer, 'position') === 'static') transfer.style.position = 'relative';
        },
        setTransferFixed: function setTransferFixed(transfer) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { left: 0, top: 0 };

            transfer.style.left = position.left + 'px';
            transfer.style.top = position.top + 'px';
            transfer.style.zIndex = '9999';
            transfer.style.position = 'fixed';
            transfer.style.display = '';
        },
        onMouseDown: function onMouseDown(e) {
            if (this.disabled) return;

            e.preventDefault();

            Object.assign(manager, {
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                startX: e.clientX,
                startY: e.clientY,
                dragX: 0,
                dragY: 0
            });

            window.addEventListener('mousemove', this.onMouseMove);
            window.addEventListener('mouseup', this.onMouseUp);

            this.immediate && this.onMouseMoveStart(e);
        },
        onMouseMove: function onMouseMove(e) {
            e.preventDefault();

            Object.assign(manager, {
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                dragX: e.clientX - manager.startX,
                dragY: e.clientY - manager.startY
            });

            manager.dragging === false ? this.onMouseMoveStart(e) : this.onMouseMoving(e);
        },
        onMouseMoveStart: function onMouseMoveStart(e, override) {
            var transferEl = this.getTransferEl();

            // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
            // 获取初始的left和top值
            var style = transferEl ? window.getComputedStyle(transferEl) : {};
            style = { left: style.left, top: style.top };
            if (!style.left || style.left === 'auto') style.left = '0px';
            if (!style.top || style.top === 'auto') style.top = '0px';
            style.left = +style.left.slice(0, -2);
            style.top = +style.top.slice(0, -2);

            Object.assign(manager, {
                dragging: true,
                transferEl: transferEl,
                value: this.value,
                startLeft: style.left,
                startTop: style.top,
                droppable: undefined
            });

            manager.left = manager.startLeft;
            manager.top = manager.startTop;

            !override && this.dragStart();
        },
        onMouseMoving: function onMouseMoving(e) {
            // 拖拽约束
            var next = (this.constraint || this.defaultConstraint)(manager);

            // 设置位置
            if (manager.transferEl) {
                manager.transferEl.style.left = next.left + 'px';
                manager.transferEl.style.top = next.top + 'px';
            }

            // 更新当前位置
            manager.left = next.left;
            manager.top = next.top;

            this.drag();
            if (!manager.dragging) return;

            // for Droppable
            var pointEl = null;
            if (manager.transferEl) {
                manager.transferEl.style.display = 'none';
                pointEl = document.elementFromPoint(e.clientX, e.clientY);
                manager.transferEl.style.display = '';
            } else pointEl = document.elementFromPoint(e.clientX, e.clientY);

            var pointDroppable = null;
            // while (pointEl) {
            pointDroppable = manager.droppables.find(function (droppable) {
                return droppable.$el && droppable.$el.contains(pointEl);
            });

            // if (pointDroppable)
            //     break;
            // else
            //     pointEl = pointEl.parentElement;
            // }

            if (manager.droppable !== pointDroppable) {
                manager.droppable && manager.droppable.dragLeave(this);
                if (!manager.dragging) return;
                pointDroppable && pointDroppable.dragEnter(this);
                manager.droppable = pointDroppable;
            }

            // dragEnter之后也要dragOver
            pointDroppable && pointDroppable.dragOver(this);
        },
        onMouseUp: function onMouseUp(e) {
            window.removeEventListener('mousemove', this.onMouseMove);
            window.removeEventListener('mouseup', this.onMouseUp);

            if (manager.dragging) {
                manager.droppable && manager.droppable.drop(this);
                this.cancel();
            }
        },
        defaultConstraint: function defaultConstraint(params) {
            return {
                left: params.startLeft + params.dragX,
                top: params.startTop + params.dragY
            };
        },
        cancel: function cancel() {
            this.dragEnd();

            Object.assign(manager, {
                dragging: false,
                value: undefined,
                transferEl: undefined,
                range: undefined,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                startX: 0,
                startY: 0,
                dragX: 0,
                dragY: 0,
                startLeft: 0,
                startTop: 0,
                left: 0,
                top: 0,
                droppable: undefined
            });
        },
        dragStart: function dragStart() {
            var sourceEl = this.$el;
            sourceEl.setAttribute('draggable-source', 'draggable-source');
            manager.transferEl && manager.transferEl.setAttribute('draggable-transfer', 'draggable-transfer');

            var cancel = false;
            this.$emit('dragstart', Object.assign({
                originVM: this,
                sourceEl: sourceEl,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, manager));

            if (cancel) return this.cancel();
        },
        drag: function drag() {
            this.$emit('drag', Object.assign({
                originVM: this,
                sourceEl: this.$el
            }, manager));
        },
        dragEnd: function dragEnd() {
            var sourceEl = this.$el;
            sourceEl && sourceEl.removeAttribute('draggable-source');

            this.$emit('dragend', Object.assign({
                originVM: this,
                sourceEl: sourceEl
            }, manager));

            if (manager.transferEl) {
                if (this.$slots.transfer || this.transfer === 'clone') manager.transferEl.parentElement.removeChild(manager.transferEl);

                manager.transferEl.removeAttribute('draggable-transfer');
            }
        }
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-draggable.vue/index.js
var u_draggable_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_draggable_vue___vue_html__ = null
/* template functional */
var u_draggable_vue___vue_template_functional__ = false
/* styles */
var u_draggable_vue___vue_css__ = null
/* scopeId */
var u_draggable_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_draggable_vue___vue_module_identifier__ = null
var u_draggable_vue_Component = u_draggable_vue_normalizeComponent(u_draggable_vue, u_draggable_vue___vue_html__, u_draggable_vue___vue_template_functional__, u_draggable_vue___vue_css__, u_draggable_vue___vue_scopeId__, u_draggable_vue___vue_module_identifier__)
/* harmony default export */ var src_u_draggable_vue = (u_draggable_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-dragger.vue/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





/* harmony default export */ var u_dragger_vue = ({
    name: 'u-dragger',
    mixins: [src_u_draggable_vue],
    props: {
        axis: { type: String, default: 'both', validator: function validator(value) {
                return ['both', 'horizontal', 'vertical'].includes(value);
            } },
        grid: { type: Object, default: function _default() {
                return { x: 0, y: 0 };
            } },
        range: [String, Object],
        rangeMode: { type: String, default: 'inside', validator: function validator(value) {
                return ['inside', 'center', 'outside'].includes(value);
            } },
        transfer: { type: [String, Element], default: 'self' }
    },
    methods: {
        getRange: function getRange(transferEl) {
            var range = void 0;

            if (_typeof(this.range) === 'object') range = this.range;else if (this.range === 'offset-parent') {
                if (style_getComputedStyle(transferEl, 'position') !== 'absolute') transferEl.style.position = 'absolute';

                var offsetParent = transferEl.offsetParent;
                range = Object.assign({ left: 0, top: 0 }, getSize(offsetParent, this.rangeMode));
            } else if (this.range === 'window') {
                if (style_getComputedStyle(transferEl, 'position') !== 'fixed') transferEl.style.position = 'fixed';

                range = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
            }

            if (range) {
                if (range.width !== undefined && range.height !== undefined) {
                    range.right = range.left + range.width;
                    range.bottom = range.top + range.height;
                } else if (range.right !== undefined && range.bottom !== undefined) {
                    range.width = range.right - range.left;
                    range.height = range.bottom - range.top;
                }
            }

            return range;
        },
        onMouseMoveStart: function onMouseMoveStart(e) {
            var transferEl = this.getTransferEl();

            // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
            // 获取初始的left和top值
            var style = transferEl ? window.getComputedStyle(transferEl) : {};
            style = { left: style.left, top: style.top };
            if (!style.left || style.left === 'auto') style.left = '0px';
            if (!style.top || style.top === 'auto') style.top = '0px';
            style.left = +style.left.slice(0, -2);
            style.top = +style.top.slice(0, -2);

            if (transferEl) {
                manager.range = this.getRange(transferEl);

                var dimension = getDimension(transferEl);

                if (this.axis === 'both' || this.axis === 'horizontal') {
                    if (!(dimension.left <= e.clientX && e.clientX < dimension.left + dimension.width)) style.left += e.clientX - dimension.left - dimension.width / 2;
                    transferEl.style.left = style.left + 'px';
                }
                if (this.axis === 'both' || this.axis === 'vertical') {
                    if (!(dimension.top <= e.clientY && e.clientY < dimension.top + dimension.height)) style.top += e.clientY - dimension.top - dimension.height / 2;
                    transferEl.style.top = style.top + 'px';
                }
            }

            Object.assign(manager, {
                dragging: true,
                transferEl: transferEl,
                value: this.value,
                startLeft: style.left,
                startTop: style.top,
                droppable: undefined
            });

            manager.left = manager.startLeft;
            manager.top = manager.startTop;

            this.dragStart();
        },
        defaultConstraint: function defaultConstraint(params) {
            var next = {
                left: params.startLeft + params.dragX,
                top: params.startTop + params.dragY
            };

            // 范围约束
            if (params.range) {
                if (this.rangeMode === 'inside') {
                    next.left = Math.min(Math.max(params.range.left, next.left), params.range.right - manager.transferEl.offsetWidth);
                    next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom - manager.transferEl.offsetHeight);
                } else if (this.rangeMode === 'center') {
                    next.left = Math.min(Math.max(params.range.left, next.left), params.range.right);
                    next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom);
                } else if (this.rangeMode === 'outside') {
                    next.left = Math.min(Math.max(params.range.left - manager.transferEl.offsetWidth, next.left), params.range.right);
                    next.top = Math.min(Math.max(params.range.top - manager.transferEl.offsetHeight, next.top), params.range.bottom);
                }
            }

            // 网格约束
            var grid = this.grid;
            grid.x && (next.left = Math.round(next.left / grid.x) * grid.x);
            grid.y && (next.top = Math.round(next.top / grid.y) * grid.y);

            // 轴向约束
            if (this.axis === 'vertical') next.left = params.startLeft;
            if (this.axis === 'horizontal') next.top = params.startTop;

            return next;
        }
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-dragger.vue/index.js
var u_dragger_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_dragger_vue___vue_html__ = null
/* template functional */
var u_dragger_vue___vue_template_functional__ = false
/* styles */
var u_dragger_vue___vue_css__ = null
/* scopeId */
var u_dragger_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_dragger_vue___vue_module_identifier__ = null
var u_dragger_vue_Component = u_dragger_vue_normalizeComponent(u_dragger_vue, u_dragger_vue___vue_html__, u_dragger_vue___vue_template_functional__, u_dragger_vue___vue_css__, u_dragger_vue___vue_scopeId__, u_dragger_vue___vue_module_identifier__)
/* harmony default export */ var src_u_dragger_vue = (u_dragger_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-droppable.vue/index.js



/* harmony default export */ var u_droppable_vue = ({
    name: 'u-droppable',
    props: {
        disabled: { type: Boolean, default: false }
    },
    render: function render() {
        return this.$slots.default && this.$slots.default[0];
    },

    watch: {
        disabled: function disabled(_disabled) {
            this.watchDisabled(_disabled);
        }
    },
    created: function created() {
        var _this = this;

        manager.droppables.push(this);
        this.$nextTick(function () {
            return _this.watchDisabled(_this.disabled);
        });
    },
    destroyed: function destroyed() {
        manager.droppables.splice(manager.droppables.indexOf(this), 1);
    },

    methods: {
        watchDisabled: function watchDisabled(disabled) {
            if (disabled) this.$el.removeAttribute && this.$el.removeAttribute('droppable');else this.$el.setAttribute && this.$el.setAttribute('droppable', 'droppable');
        },
        dragEnter: function dragEnter(originVM) {
            var targetEl = this.$el;
            targetEl.setAttribute('droppable-target', 'droppable-target');

            var cancel = false;
            this.$emit('dragenter', Object.assign({
                originVM: originVM,
                sourceEl: originVM.$el,
                targetEl: targetEl,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, manager));

            if (cancel) return originVM.cancel();
        },
        dragLeave: function dragLeave(originVM) {
            var targetEl = this.$el;
            targetEl.removeAttribute('droppable-target');

            var cancel = false;
            this.$emit('dragleave', Object.assign({
                originVM: originVM,
                sourceEl: originVM.$el,
                targetEl: targetEl,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, manager));

            if (cancel) return originVM.cancel();
        },
        dragOver: function dragOver(originVM) {
            var targetEl = this.$el;
            var dimension = getDimension(targetEl);

            var cancel = false;
            this.$emit('dragover', Object.assign({
                originVM: originVM,
                sourceEl: originVM.$el,
                targetEl: targetEl,
                ratioX: (manager.clientX - dimension.left) / dimension.width,
                ratioY: (manager.clientY - dimension.top) / dimension.height,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            }, manager));

            if (cancel) return originVM.cancel();
        },
        drop: function drop(originVM) {
            var targetEl = this.$el;
            targetEl.removeAttribute('droppable-target');
            var dimension = getDimension(targetEl);

            this.$emit('drop', Object.assign({
                originVM: originVM,
                sourceEl: originVM.$el,
                targetEl: targetEl,
                ratioX: (manager.clientX - dimension.left) / dimension.width,
                ratioY: (manager.clientY - dimension.top) / dimension.height
            }, manager));
        }
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-droppable.vue/index.js
var u_droppable_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_droppable_vue___vue_html__ = null
/* template functional */
var u_droppable_vue___vue_template_functional__ = false
/* styles */
var u_droppable_vue___vue_css__ = null
/* scopeId */
var u_droppable_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_droppable_vue___vue_module_identifier__ = null
var u_droppable_vue_Component = u_droppable_vue_normalizeComponent(u_droppable_vue, u_droppable_vue___vue_html__, u_droppable_vue___vue_template_functional__, u_droppable_vue___vue_css__, u_droppable_vue___vue_scopeId__, u_droppable_vue___vue_module_identifier__)
/* harmony default export */ var src_u_droppable_vue = (u_droppable_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-form.vue/index.js
/* harmony default export */ var u_form_vue = ({
    name: 'u-form',
    props: {
        model: Object,
        rules: Object,
        layout: { type: String, default: 'block' },
        labelSize: { type: String, default: 'normal' }
    },
    data: function data() {
        return {
            // @TODO: Optimize
            state: '',
            itemVMs: []
        };
    },
    created: function created() {
        var _this = this;

        this.$on('add-item-vm', function (itemVM) {
            itemVM.parentVM = _this;
            _this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', function (itemVM) {
            itemVM.parentVM = undefined;
            _this.itemVMs.splice(_this.itemVMs.indexOf(itemVM), 1);
        });
        this.$on('validate-item-vm', function () {
            _this.state = _this.getState();
            _this.$emit('validate', {
                valid: _this.state === 'success'
            });
        });
    },

    methods: {
        validate: function validate() {
            var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return Promise.all(this.itemVMs.map(function (itemVM) {
                return itemVM.validate('submit', silent).catch(function (errors) {
                    return errors;
                });
            })).then(function (results) {
                if (results.some(function (result) {
                    return !!result;
                })) throw new Error(results);
            });
        },
        getState: function getState() {
            var STATE_LEVEL = {
                '': 3,
                validating: 2,
                error: 1,
                success: 0
            };

            var state = 'success';
            this.itemVMs.forEach(function (itemVM) {
                if (itemVM.currentRules && STATE_LEVEL[itemVM.state] > STATE_LEVEL[state]) state = itemVM.state;
            });

            return state;
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-39fe9c2b","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-form.vue/index.html
var u_form_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"layout":_vm.layout},on:{"submit":function($event){$event.preventDefault();}}},[_vm._t("default")],2)}
var u_form_vue_staticRenderFns = []
var u_form_vue_esExports = { render: u_form_vue_render, staticRenderFns: u_form_vue_staticRenderFns }
/* harmony default export */ var src_u_form_vue = (u_form_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-form.vue/index.js
var u_form_vue_cssModules = {};
function u_form_vue_injectStyle (ssrContext) {
u_form_vue_cssModules['$style'] = __webpack_require__(47);
  this['$style'] = u_form_vue_cssModules['$style']

}
var u_form_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_form_vue___vue_template_functional__ = false
/* styles */
var u_form_vue___vue_css__ = u_form_vue_injectStyle
/* scopeId */
var u_form_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_form_vue___vue_module_identifier__ = null
var u_form_vue_Component = u_form_vue_normalizeComponent(u_form_vue, src_u_form_vue, u_form_vue___vue_template_functional__, u_form_vue___vue_css__, u_form_vue___vue_scopeId__, u_form_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_form_vue = (u_form_vue_Component.exports);
// EXTERNAL MODULE: ./node_modules/vusion-async-validator/dist/bundle.js
var bundle = __webpack_require__(51);
var bundle_default = /*#__PURE__*/__webpack_require__.n(bundle);

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-form-item.vue/index.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ var u_form_item_vue = ({
    name: 'u-form-item',
    mixins: [src_u_emitter_vue],
    props: {
        name: String,
        label: String,
        title: String,
        rules: Array,
        message: String,
        required: { type: Boolean, default: false },
        labelSize: String
    },
    data: function data() {
        return {
            value: undefined,
            state: '',
            color: '',
            currentMessage: '',
            inputing: false,
            parentVM: undefined
        };
    },

    computed: {
        currentRules: function currentRules() {
            return this.rules || this.parentVM && this.parentVM.rules && this.parentVM.rules[this.name];
        },
        currentRequired: function currentRequired() {
            return this.required || this.currentRules && this.currentRules.some(function (rule) {
                return rule.required;
            });
        },
        currentLabelSize: function currentLabelSize() {
            return this.labelSize || this.parentVM && this.parentVM.labelSize || 'auto';
        }
    },
    created: function created() {
        var _this = this;

        this.dispatch('u-form', 'add-item-vm', this);
        this.$on('add-field-vm', function (fieldVM) {
            fieldVM.formItemVM = _this;
            _this.value = fieldVM.value;
        });
        this.$on('remove-field-vm', function (fieldVM) {
            return fieldVM.formItemVM = undefined;
        });
        this.$on('input', this.onInput);
        this.$on('change', this.onChange);
        this.$on('focus', this.onFocus);
        this.$on('blur', this.onBlur);
    },
    destroyed: function destroyed() {
        this.dispatch('u-form', 'remove-item-vm', this);
    },

    methods: {
        onInput: function onInput(value) {
            var _this2 = this;

            this.inputing = true;
            this.value = value;
            this.$nextTick(function () {
                _this2.validate('input').catch(function (errors) {
                    return errors;
                });
                _this2.inputing = false;
            });
        },
        onChange: function onChange($event) {
            this.value = $event.value;
            !this.inputing && this.validate('submit', true).catch(function (errors) {
                return errors;
            });
        },
        onFocus: function onFocus() {
            this.color = this.state = '';
            this.currentMessage = this.message;
        },
        onBlur: function onBlur() {
            var _this3 = this;

            this.$nextTick(function () {
                return _this3.validate('blur').catch(function (errors) {
                    return errors;
                });
            });
        },
        validate: function validate() {
            var _this4 = this;

            var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'submit';
            var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var rules = this.currentRules;
            rules = rules && rules.filter(function (rule) {
                return (rule.trigger + '+submit').includes(trigger);
            });
            if (!rules || !rules.length) {
                this.dispatch('u-form', 'validate-item-vm', true);
                return Promise.resolve();
            }

            this.state = 'validating';
            if (!silent) this.color = this.state;

            var name = this.name || 'field';
            var validator = new bundle_default.a(_defineProperty({}, name, rules));

            return new Promise(function (resolve, reject) {
                validator.validate(_defineProperty({}, name, _this4.value), { firstFields: true }, function (errors, fields) {
                    _this4.state = errors ? 'error' : 'success';
                    if (!silent) {
                        _this4.color = _this4.state;
                        _this4.currentMessage = errors ? errors[0].message : _this4.message;
                    }

                    _this4.dispatch('u-form', 'validate-item-vm', !errors);
                    errors ? reject(errors) : resolve();
                });
            });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-6ebfecb6","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-form-item.vue/index.html
var u_form_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"label-size":_vm.currentLabelSize}},[_c('label',{directives:[{name:"show",rawName:"v-show",value:(_vm.label || _vm.title || _vm.currentLabelSize !== 'auto'),expression:"label || title || currentLabelSize !== 'auto'"}],class:_vm.$style.label,attrs:{"required":_vm.currentRequired}},[_vm._v(_vm._s(_vm.label || _vm.title))]),_c('div',{class:_vm.$style.field},[_vm._t("default"),(_vm.currentMessage)?_c('span',{class:_vm.$style.message,attrs:{"color":_vm.color}},[_vm._v(_vm._s(_vm.currentMessage))]):_vm._e()],2)])}
var u_form_item_vue_staticRenderFns = []
var u_form_item_vue_esExports = { render: u_form_item_vue_render, staticRenderFns: u_form_item_vue_staticRenderFns }
/* harmony default export */ var src_u_form_item_vue = (u_form_item_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-form-item.vue/index.js
var u_form_item_vue_cssModules = {};
function u_form_item_vue_injectStyle (ssrContext) {
u_form_item_vue_cssModules['$style'] = __webpack_require__(49);
  this['$style'] = u_form_item_vue_cssModules['$style']

}
var u_form_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_form_item_vue___vue_template_functional__ = false
/* styles */
var u_form_item_vue___vue_css__ = u_form_item_vue_injectStyle
/* scopeId */
var u_form_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_form_item_vue___vue_module_identifier__ = null
var u_form_item_vue_Component = u_form_item_vue_normalizeComponent(u_form_item_vue, src_u_form_item_vue, u_form_item_vue___vue_template_functional__, u_form_item_vue___vue_css__, u_form_item_vue___vue_scopeId__, u_form_item_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_form_item_vue = (u_form_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-grid-layout.vue/index.js
/* harmony default export */ var u_grid_layout_vue = ({
    name: 'u-grid-layout',
    props: {
        repeat: { type: Number, default: 12 }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-5476ebfa","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-grid-layout.vue/index.html
var u_grid_layout_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_grid_layout_vue_staticRenderFns = []
var u_grid_layout_vue_esExports = { render: u_grid_layout_vue_render, staticRenderFns: u_grid_layout_vue_staticRenderFns }
/* harmony default export */ var src_u_grid_layout_vue = (u_grid_layout_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-grid-layout.vue/index.js
var u_grid_layout_vue_cssModules = {};
function u_grid_layout_vue_injectStyle (ssrContext) {
u_grid_layout_vue_cssModules['$style'] = __webpack_require__(53);
  this['$style'] = u_grid_layout_vue_cssModules['$style']

}
var u_grid_layout_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_grid_layout_vue___vue_template_functional__ = false
/* styles */
var u_grid_layout_vue___vue_css__ = u_grid_layout_vue_injectStyle
/* scopeId */
var u_grid_layout_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_grid_layout_vue___vue_module_identifier__ = null
var u_grid_layout_vue_Component = u_grid_layout_vue_normalizeComponent(u_grid_layout_vue, src_u_grid_layout_vue, u_grid_layout_vue___vue_template_functional__, u_grid_layout_vue___vue_css__, u_grid_layout_vue___vue_scopeId__, u_grid_layout_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_grid_layout_vue = (u_grid_layout_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-grid-layout-column.vue/index.js
var breakpoints = [{ name: 'Huge', width: 1440 }, { name: 'Large', width: 1200 }, { name: 'Medium', width: 960 }, { name: 'Small', width: 768 }, { name: 'Mini', width: 480 }];

/* harmony default export */ var u_grid_layout_column_vue = ({
    name: 'u-grid-layout-column',
    props: {
        column: String,
        span: Number,
        pull: Number,
        push: Number,
        offset: Number,
        mediaMini: Number,
        mediaSmall: Number,
        mediaMedium: Number,
        mediaLarge: Number,
        mediaHuge: Number
    },
    data: function data() {
        return {
            parentVM: this.$parent,
            currentSpan: this.span
        };
    },
    created: function created() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },
    destroyed: function destroyed() {
        window.removeEventListener('resize', this.onResize);
    },

    computed: {
        stack: function stack() {
            var _this = this;

            return breakpoints.map(function (point) {
                return { name: point.name, width: point.width, span: _this['media' + point.name] };
            }).filter(function (point) {
                return point.span !== undefined;
            });
        },
        commonStyle: function commonStyle() {
            var left = this.push ? this.getPercent(this.push) : 'auto';
            var right = this.pull ? this.getPercent(this.pull) : 'auto';
            var marginLeft = this.getPercent(this.offset);
            return { right: right, left: left, marginLeft: marginLeft };
        },
        responsiveStyle: function responsiveStyle() {
            var width = this.currentSpan ? this.getPercent(this.currentSpan) : 'auto';
            return { width: width };
        }
    },
    watch: {
        currentSpan: function currentSpan(span, oldSpan) {
            this.$emit('responsive', {
                span: span,
                oldSpan: oldSpan
            });
        }
    },
    methods: {
        getPercent: function getPercent(numerator, denominator) {
            denominator = denominator || this.parentVM.repeat;
            return numerator / denominator * 100 + '%';
        },
        onResize: function onResize() {
            var stack = this.stack;
            if (!stack.length) return;

            var span = this.span;
            var width = window.innerWidth;
            stack.forEach(function (point, index) {
                if (width <= point.width && point.span !== undefined) span = point.span;
            });
            this.currentSpan = span;
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-d517a98e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-grid-layout-column.vue/index.html
var u_grid_layout_column_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,style:([_vm.commonStyle, _vm.responsiveStyle])},[_vm._t("default")],2)}
var u_grid_layout_column_vue_staticRenderFns = []
var u_grid_layout_column_vue_esExports = { render: u_grid_layout_column_vue_render, staticRenderFns: u_grid_layout_column_vue_staticRenderFns }
/* harmony default export */ var src_u_grid_layout_column_vue = (u_grid_layout_column_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-grid-layout-column.vue/index.js
var u_grid_layout_column_vue_cssModules = {};
function u_grid_layout_column_vue_injectStyle (ssrContext) {
u_grid_layout_column_vue_cssModules['$style'] = __webpack_require__(55);
  this['$style'] = u_grid_layout_column_vue_cssModules['$style']

}
var u_grid_layout_column_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_grid_layout_column_vue___vue_template_functional__ = false
/* styles */
var u_grid_layout_column_vue___vue_css__ = u_grid_layout_column_vue_injectStyle
/* scopeId */
var u_grid_layout_column_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_grid_layout_column_vue___vue_module_identifier__ = null
var u_grid_layout_column_vue_Component = u_grid_layout_column_vue_normalizeComponent(u_grid_layout_column_vue, src_u_grid_layout_column_vue, u_grid_layout_column_vue___vue_template_functional__, u_grid_layout_column_vue___vue_css__, u_grid_layout_column_vue___vue_scopeId__, u_grid_layout_column_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_grid_layout_column_vue = (u_grid_layout_column_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-grid-layout-row.vue/index.js
/* harmony default export */ var u_grid_layout_row_vue = ({
    name: 'u-grid-layout-row',
    props: {
        repeat: { type: Number, default: 12 }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-3bace9f2","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-grid-layout-row.vue/index.html
var u_grid_layout_row_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_grid_layout_row_vue_staticRenderFns = []
var u_grid_layout_row_vue_esExports = { render: u_grid_layout_row_vue_render, staticRenderFns: u_grid_layout_row_vue_staticRenderFns }
/* harmony default export */ var src_u_grid_layout_row_vue = (u_grid_layout_row_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-grid-layout-row.vue/index.js
var u_grid_layout_row_vue_cssModules = {};
function u_grid_layout_row_vue_injectStyle (ssrContext) {
u_grid_layout_row_vue_cssModules['$style'] = __webpack_require__(57);
  this['$style'] = u_grid_layout_row_vue_cssModules['$style']

}
var u_grid_layout_row_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_grid_layout_row_vue___vue_template_functional__ = false
/* styles */
var u_grid_layout_row_vue___vue_css__ = u_grid_layout_row_vue_injectStyle
/* scopeId */
var u_grid_layout_row_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_grid_layout_row_vue___vue_module_identifier__ = null
var u_grid_layout_row_vue_Component = u_grid_layout_row_vue_normalizeComponent(u_grid_layout_row_vue, src_u_grid_layout_row_vue, u_grid_layout_row_vue___vue_template_functional__, u_grid_layout_row_vue___vue_css__, u_grid_layout_row_vue___vue_scopeId__, u_grid_layout_row_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_grid_layout_row_vue = (u_grid_layout_row_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-icon.vue/index.js
/* harmony default export */ var u_icon_vue = ({
    name: 'u-icon'
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-1c722d40","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-icon.vue/index.html
var u_icon_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:_vm.$style.root})}
var u_icon_vue_staticRenderFns = []
var u_icon_vue_esExports = { render: u_icon_vue_render, staticRenderFns: u_icon_vue_staticRenderFns }
/* harmony default export */ var src_u_icon_vue = (u_icon_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-icon.vue/index.js
var u_icon_vue_cssModules = {};
function u_icon_vue_injectStyle (ssrContext) {
u_icon_vue_cssModules['$style'] = __webpack_require__(59);
  this['$style'] = u_icon_vue_cssModules['$style']

}
var u_icon_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_icon_vue___vue_template_functional__ = false
/* styles */
var u_icon_vue___vue_css__ = u_icon_vue_injectStyle
/* scopeId */
var u_icon_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_icon_vue___vue_module_identifier__ = null
var u_icon_vue_Component = u_icon_vue_normalizeComponent(u_icon_vue, src_u_icon_vue, u_icon_vue___vue_template_functional__, u_icon_vue___vue_css__, u_icon_vue___vue_scopeId__, u_icon_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_icon_vue = (u_icon_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-input.vue/index.js


/* harmony default export */ var u_input_vue = ({
    name: 'u-input',
    mixins: [src_u_field_vue],
    props: {
        value: { type: [String, Number] },
        color: { type: String }
    },
    data: function data() {
        return {
            focused: false,
            currentValue: this.value,
            compositionInputing: false
        };
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners.input;
            delete listeners.change;
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        }
    },
    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        },
        currentValue: function currentValue(value, oldValue) {
            this.$emit('change', { value: value, oldValue: oldValue });
        }
    },
    methods: {
        onInput: function onInput(e) {
            if (!this.compositionInputing) {
                this.currentValue = e.target.value;
                this.$emit('input', this.currentValue);
                this.$emit('update:value', this.currentValue);
            }
        },
        onFocus: function onFocus(e) {
            this.focused = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.focused = false;
            this.$emit('blur', e);
        },
        focus: function focus() {
            this.$refs.input.focus();
        },
        blur: function blur() {
            this.$refs.blur.blur();
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-02551073","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-input.vue/index.html
var u_input_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.$style.root,attrs:{"focus":_vm.focused,"color":_vm.color || this.formItemVM && this.formItemVM.color}},[_c('input',_vm._g(_vm._b({ref:"input",class:_vm.$style.input,domProps:{"value":_vm.currentValue},on:{"input":_vm.onInput,"focus":_vm.onFocus,"blur":_vm.onBlur,"compositionstart":function($event){_vm.compositionInputing = true},"compositionend":function($event){_vm.compositionInputing = false}}},'input',_vm.$attrs,false),_vm.listeners)),_vm._t("default")],2)}
var u_input_vue_staticRenderFns = []
var u_input_vue_esExports = { render: u_input_vue_render, staticRenderFns: u_input_vue_staticRenderFns }
/* harmony default export */ var src_u_input_vue = (u_input_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-input.vue/index.js
var u_input_vue_cssModules = {};
function u_input_vue_injectStyle (ssrContext) {
u_input_vue_cssModules['$style'] = __webpack_require__(61);
  this['$style'] = u_input_vue_cssModules['$style']

}
var u_input_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_input_vue___vue_template_functional__ = false
/* styles */
var u_input_vue___vue_css__ = u_input_vue_injectStyle
/* scopeId */
var u_input_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_input_vue___vue_module_identifier__ = null
var u_input_vue_Component = u_input_vue_normalizeComponent(u_input_vue, src_u_input_vue, u_input_vue___vue_template_functional__, u_input_vue___vue_css__, u_input_vue___vue_scopeId__, u_input_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_input_vue = (u_input_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-label.vue/index.js
/* harmony default export */ var u_label_vue = ({
    name: 'u-label'
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-785d929d","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-label.vue/index.html
var u_label_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._g({class:_vm.$style.root},_vm.$listeners),[_vm._t("default")],2)}
var u_label_vue_staticRenderFns = []
var u_label_vue_esExports = { render: u_label_vue_render, staticRenderFns: u_label_vue_staticRenderFns }
/* harmony default export */ var src_u_label_vue = (u_label_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-label.vue/index.js
var u_label_vue_cssModules = {};
function u_label_vue_injectStyle (ssrContext) {
u_label_vue_cssModules['$style'] = __webpack_require__(63);
  this['$style'] = u_label_vue_cssModules['$style']

}
var u_label_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_label_vue___vue_template_functional__ = false
/* styles */
var u_label_vue___vue_css__ = u_label_vue_injectStyle
/* scopeId */
var u_label_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_label_vue___vue_module_identifier__ = null
var u_label_vue_Component = u_label_vue_normalizeComponent(u_label_vue, src_u_label_vue, u_label_vue___vue_template_functional__, u_label_vue___vue_css__, u_label_vue___vue_scopeId__, u_label_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_label_vue = (u_label_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-linear-layout.vue/index.js
/* harmony default export */ var u_linear_layout_vue = ({
    name: 'u-linear-layout',
    props: {
        direction: { default: 'horizontal', validator: function validator(value) {
                return ['horizontal', 'vertical'].includes(value);
            } }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-498ec67b","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-linear-layout.vue/index.html
var u_linear_layout_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"direction":_vm.direction}},[_vm._t("default")],2)}
var u_linear_layout_vue_staticRenderFns = []
var u_linear_layout_vue_esExports = { render: u_linear_layout_vue_render, staticRenderFns: u_linear_layout_vue_staticRenderFns }
/* harmony default export */ var src_u_linear_layout_vue = (u_linear_layout_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-linear-layout.vue/index.js
var u_linear_layout_vue_cssModules = {};
function u_linear_layout_vue_injectStyle (ssrContext) {
u_linear_layout_vue_cssModules['$style'] = __webpack_require__(65);
  this['$style'] = u_linear_layout_vue_cssModules['$style']

}
var u_linear_layout_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_linear_layout_vue___vue_template_functional__ = false
/* styles */
var u_linear_layout_vue___vue_css__ = u_linear_layout_vue_injectStyle
/* scopeId */
var u_linear_layout_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_linear_layout_vue___vue_module_identifier__ = null
var u_linear_layout_vue_Component = u_linear_layout_vue_normalizeComponent(u_linear_layout_vue, src_u_linear_layout_vue, u_linear_layout_vue___vue_template_functional__, u_linear_layout_vue___vue_css__, u_linear_layout_vue___vue_scopeId__, u_linear_layout_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_linear_layout_vue = (u_linear_layout_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-linear-progress.vue/index.js
/* harmony default export */ var u_linear_progress_vue = ({
    name: 'u-linear-progress',
    props: {
        percent: { type: Number, default: 0 }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-1a3ec9be","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-linear-progress.vue/index.html
var u_linear_progress_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{class:_vm.$style.track},[_c('div',{class:_vm.$style.trail,style:({ width: _vm.percent + '%' })})]),_vm._t("default")],2)}
var u_linear_progress_vue_staticRenderFns = []
var u_linear_progress_vue_esExports = { render: u_linear_progress_vue_render, staticRenderFns: u_linear_progress_vue_staticRenderFns }
/* harmony default export */ var src_u_linear_progress_vue = (u_linear_progress_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-linear-progress.vue/index.js
var u_linear_progress_vue_cssModules = {};
function u_linear_progress_vue_injectStyle (ssrContext) {
u_linear_progress_vue_cssModules['$style'] = __webpack_require__(67);
  this['$style'] = u_linear_progress_vue_cssModules['$style']

}
var u_linear_progress_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_linear_progress_vue___vue_template_functional__ = false
/* styles */
var u_linear_progress_vue___vue_css__ = u_linear_progress_vue_injectStyle
/* scopeId */
var u_linear_progress_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_linear_progress_vue___vue_module_identifier__ = null
var u_linear_progress_vue_Component = u_linear_progress_vue_normalizeComponent(u_linear_progress_vue, src_u_linear_progress_vue, u_linear_progress_vue___vue_template_functional__, u_linear_progress_vue___vue_css__, u_linear_progress_vue___vue_scopeId__, u_linear_progress_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_linear_progress_vue = (u_linear_progress_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-list-view-divider.vue/index.js
/* harmony default export */ var u_list_view_divider_vue = ({
    name: 'u-list-view-divider'
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-1afa462e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-list-view-divider.vue/index.html
var u_list_view_divider_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root})}
var u_list_view_divider_vue_staticRenderFns = []
var u_list_view_divider_vue_esExports = { render: u_list_view_divider_vue_render, staticRenderFns: u_list_view_divider_vue_staticRenderFns }
/* harmony default export */ var src_u_list_view_divider_vue = (u_list_view_divider_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-list-view-divider.vue/index.js
var u_list_view_divider_vue_cssModules = {};
function u_list_view_divider_vue_injectStyle (ssrContext) {
u_list_view_divider_vue_cssModules['$style'] = __webpack_require__(69);
  this['$style'] = u_list_view_divider_vue_cssModules['$style']

}
var u_list_view_divider_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_list_view_divider_vue___vue_template_functional__ = false
/* styles */
var u_list_view_divider_vue___vue_css__ = u_list_view_divider_vue_injectStyle
/* scopeId */
var u_list_view_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_list_view_divider_vue___vue_module_identifier__ = null
var u_list_view_divider_vue_Component = u_list_view_divider_vue_normalizeComponent(u_list_view_divider_vue, src_u_list_view_divider_vue, u_list_view_divider_vue___vue_template_functional__, u_list_view_divider_vue___vue_css__, u_list_view_divider_vue___vue_scopeId__, u_list_view_divider_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_list_view_divider_vue = (u_list_view_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-list-view-group.vue/index.js


/* harmony default export */ var u_list_view_group_vue = ({
    name: 'u-list-view-group',
    parentName: 'u-list-view',
    childName: 'u-list-view-item',
    mixins: [src_u_emitter_vue],
    props: {
        title: String,
        collapsible: { type: Boolean, default: undefined },
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            parentVM: undefined,
            itemVMs: [],
            currentExpanded: this.expanded
        };
    },

    computed: {
        currentCollapsible: function currentCollapsible() {
            return this.collapsible === undefined && this.parentVM ? this.parentVM.collapsible : this.collapsible;
        }
    },
    created: function created() {
        var _this = this;

        this.$on('add-item-vm', function (itemVM) {
            itemVM.groupVM = _this;
            _this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', function (itemVM) {
            itemVM.groupVM = undefined;
            _this.itemVMs.splice(_this.itemVMs.indexOf(itemVM), 1);
        });
        this.dispatch(this.$options.parentName, 'add-group-vm', this);
    },
    destroyed: function destroyed() {
        this.dispatch(this.$options.parentName, 'remove-group-vm', this);
    },

    methods: {
        toggle: function toggle(expanded) {
            var _this2 = this;

            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled) return;

            var oldExpanded = this.currentExpanded;

            if (expanded === undefined) expanded = !this.currentExpanded;

            if (expanded === oldExpanded) return;

            var cancel = false;
            this.$emit('before-toggle', {
                expanded: expanded,
                node: this.node,
                nodeVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded);

            if (this.parentVM.accordion) {
                this.parentVM.groupVMs.forEach(function (groupVM) {
                    if (groupVM !== _this2) {
                        groupVM.currentExpanded = false;
                        groupVM.$emit('update:expanded', false);
                    }
                });
            }

            this.$emit('toggle', {
                expanded: expanded,
                groupVM: this
            });

            this.parentVM.onToggle({
                expanded: expanded,
                groupVM: this
            });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-8049a962","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-list-view-group.vue/index.html
var u_list_view_group_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('div',{class:_vm.$style.head,on:{"click":function($event){_vm.parentVM.expandTrigger === 'click' && _vm.toggle()}}},[_c('div',{class:_vm.$style.title},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),(_vm.currentCollapsible)?_c('span',{class:_vm.$style.expander,attrs:{"expanded":_vm.currentExpanded},on:{"click":function($event){_vm.parentVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), _vm.toggle())}}}):_vm._e(),_c('span',{class:_vm.$style.extra},[_vm._t("extra")],2)]),_c('u-collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentCollapsible ? _vm.currentExpanded : true),expression:"currentCollapsible ? currentExpanded : true"}],class:_vm.$style.body},[_vm._t("default")],2)])],1)}
var u_list_view_group_vue_staticRenderFns = []
var u_list_view_group_vue_esExports = { render: u_list_view_group_vue_render, staticRenderFns: u_list_view_group_vue_staticRenderFns }
/* harmony default export */ var src_u_list_view_group_vue = (u_list_view_group_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-list-view-group.vue/index.js
var u_list_view_group_vue_cssModules = {};
function u_list_view_group_vue_injectStyle (ssrContext) {
u_list_view_group_vue_cssModules['$style'] = __webpack_require__(71);
  this['$style'] = u_list_view_group_vue_cssModules['$style']

}
var u_list_view_group_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_list_view_group_vue___vue_template_functional__ = false
/* styles */
var u_list_view_group_vue___vue_css__ = u_list_view_group_vue_injectStyle
/* scopeId */
var u_list_view_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_list_view_group_vue___vue_module_identifier__ = null
var u_list_view_group_vue_Component = u_list_view_group_vue_normalizeComponent(u_list_view_group_vue, src_u_list_view_group_vue, u_list_view_group_vue___vue_template_functional__, u_list_view_group_vue___vue_css__, u_list_view_group_vue___vue_scopeId__, u_list_view_group_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_list_view_group_vue = (u_list_view_group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-navbar.vue/index.js


/* harmony default export */ var u_navbar_vue = ({
    name: 'u-navbar',
    childName: 'u-navbar-item',
    mixins: [proto_ui_vusion_src_u_list_view_vue],
    props: {
        router: { type: Boolean, default: true }
    },
    created: function created() {
        var _this = this;

        this.$on('select', function (_ref) {
            var itemVM = _ref.itemVM;
            return _this.router && itemVM.navigate();
        });
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-28b6a492","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-navbar.vue/index.html
var u_navbar_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled}},[_c('div',{class:_vm.$style.left},[_vm._t("left")],2),_c('nav',{class:_vm.$style.middle},[_vm._t("default")],2),_c('div',{class:_vm.$style.right},[_vm._t("right")],2)])}
var u_navbar_vue_staticRenderFns = []
var u_navbar_vue_esExports = { render: u_navbar_vue_render, staticRenderFns: u_navbar_vue_staticRenderFns }
/* harmony default export */ var src_u_navbar_vue = (u_navbar_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-navbar.vue/index.js
var u_navbar_vue_cssModules = {};
function u_navbar_vue_injectStyle (ssrContext) {
u_navbar_vue_cssModules['$style'] = __webpack_require__(73);
  this['$style'] = u_navbar_vue_cssModules['$style']

}
var u_navbar_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_navbar_vue___vue_template_functional__ = false
/* styles */
var u_navbar_vue___vue_css__ = u_navbar_vue_injectStyle
/* scopeId */
var u_navbar_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_navbar_vue___vue_module_identifier__ = null
var u_navbar_vue_Component = u_navbar_vue_normalizeComponent(u_navbar_vue, src_u_navbar_vue, u_navbar_vue___vue_template_functional__, u_navbar_vue___vue_css__, u_navbar_vue___vue_scopeId__, u_navbar_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_navbar_vue = (u_navbar_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-navbar-divider.vue/index.js


/* harmony default export */ var u_navbar_divider_vue = ({
    name: 'u-navbar-divider',
    mixins: [proto_ui_vusion_src_u_list_view_divider_vue]
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-navbar-divider.vue/index.js
var u_navbar_divider_vue_cssModules = {};
function u_navbar_divider_vue_injectStyle (ssrContext) {
u_navbar_divider_vue_cssModules['$style'] = __webpack_require__(75);
  this['$style'] = u_navbar_divider_vue_cssModules['$style']

}
var u_navbar_divider_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_navbar_divider_vue___vue_html__ = null
/* template functional */
var u_navbar_divider_vue___vue_template_functional__ = false
/* styles */
var u_navbar_divider_vue___vue_css__ = u_navbar_divider_vue_injectStyle
/* scopeId */
var u_navbar_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_navbar_divider_vue___vue_module_identifier__ = null
var u_navbar_divider_vue_Component = u_navbar_divider_vue_normalizeComponent(u_navbar_divider_vue, u_navbar_divider_vue___vue_html__, u_navbar_divider_vue___vue_template_functional__, u_navbar_divider_vue___vue_css__, u_navbar_divider_vue___vue_scopeId__, u_navbar_divider_vue___vue_module_identifier__)
/* harmony default export */ var src_u_navbar_divider_vue = (u_navbar_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-router-item.vue/index.js
/* harmony default export */ var u_router_item_vue = ({
    name: 'u-router-item',
    props: {
        href: String,
        to: [String, Object],
        replace: { type: Boolean, default: false },
        exact: { type: Boolean, default: false }
    },
    computed: {
        active: function active() {
            if (this.to === undefined) return;

            if (!this.$router) return console.warn('[proto-ui] Cannot find vue router.');

            var current = this.$route;
            var location = this.$router.resolve(this.to).location;

            return this.exact ? location.path === current.path : current.path.startsWith(location.path);
        }
    },
    methods: {
        navigate: function navigate() {
            if (this.href) {
                if (this.target === '_blank') return window.open(this.href, this.target);else return location.href = this.href;
            }

            if (this.to === undefined) return;

            if (!this.$router) return console.warn('[proto-ui] Cannot find vue router.');

            var cancel = false;
            this.$emit('before-navigate', {
                to: this.to,
                replace: this.replace,
                exact: this.exact,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            var $router = this.$router;
            this.replace ? $router.replace(this.to) : $router.push(this.to);

            this.$emit('navigate', {
                to: this.to,
                replace: this.replace,
                exact: this.exact
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-router-item.vue/index.js
var u_router_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_router_item_vue___vue_html__ = null
/* template functional */
var u_router_item_vue___vue_template_functional__ = false
/* styles */
var u_router_item_vue___vue_css__ = null
/* scopeId */
var u_router_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_router_item_vue___vue_module_identifier__ = null
var u_router_item_vue_Component = u_router_item_vue_normalizeComponent(u_router_item_vue, u_router_item_vue___vue_html__, u_router_item_vue___vue_template_functional__, u_router_item_vue___vue_css__, u_router_item_vue___vue_scopeId__, u_router_item_vue___vue_module_identifier__)
/* harmony default export */ var src_u_router_item_vue = (u_router_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-navbar-item.vue/index.js



/* harmony default export */ var u_navbar_item_vue = ({
    name: 'u-navbar-item',
    parentName: 'u-navbar',
    mixins: [proto_ui_vusion_src_u_list_view_item_vue, src_u_router_item_vue]
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-20030f99","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-navbar-item.vue/index.html
var u_navbar_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.$style.root,attrs:{"selected":_vm.parentVM.router ? _vm.active : _vm.selected || _vm.currentSelected,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled},on:{"click":function($event){_vm.select()}}},[_vm._t("default")],2)}
var u_navbar_item_vue_staticRenderFns = []
var u_navbar_item_vue_esExports = { render: u_navbar_item_vue_render, staticRenderFns: u_navbar_item_vue_staticRenderFns }
/* harmony default export */ var src_u_navbar_item_vue = (u_navbar_item_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-navbar-item.vue/index.js
var u_navbar_item_vue_cssModules = {};
function u_navbar_item_vue_injectStyle (ssrContext) {
u_navbar_item_vue_cssModules['$style'] = __webpack_require__(77);
  this['$style'] = u_navbar_item_vue_cssModules['$style']

}
var u_navbar_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_navbar_item_vue___vue_template_functional__ = false
/* styles */
var u_navbar_item_vue___vue_css__ = u_navbar_item_vue_injectStyle
/* scopeId */
var u_navbar_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_navbar_item_vue___vue_module_identifier__ = null
var u_navbar_item_vue_Component = u_navbar_item_vue_normalizeComponent(u_navbar_item_vue, src_u_navbar_item_vue, u_navbar_item_vue___vue_template_functional__, u_navbar_item_vue___vue_css__, u_navbar_item_vue___vue_scopeId__, u_navbar_item_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_navbar_item_vue = (u_navbar_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-number-input.vue/index.js



/* harmony default export */ var u_number_input_vue = ({
    name: 'u-number-input',
    mixins: [src_u_field_vue],
    directives: { repeatClick: repeatClick },
    props: {
        // 只能传入数字
        value: { type: Number, default: 0 },
        // 只能传入数字或空字符串
        // value: { type: [Number, String], default: '', validator: (value) => !isNaN(value) && value !== null },
        min: { type: Number, default: -Infinity },
        max: { type: Number, default: Infinity },
        step: { type: Number, default: 1 },
        fixed: { type: Number, default: 4 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentValue: this.value
        };
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners.input;
            delete listeners.change;
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        }
    },
    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        },
        currentValue: function currentValue(value, oldValue) {
            this.$emit('change', { value: value, oldValue: oldValue });
        }
    },
    methods: {
        fix: function fix(value) {
            if (isNaN(value) || value === '' || value === null) return this.currentValue;else {
                value = +(+value).toFixed(this.fixed);
                return Math.min(Math.max(this.min, value), this.max);
            }
        },
        input: function input(value) {
            if (this.readonly || this.disabled) return;

            value = this.fix(value);
            if (this.currentValue === value) return;

            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('update:value', value);
        },
        increase: function increase() {
            this.input(+(+this.currentValue + this.step).toFixed(this.fixed));
        },
        decrease: function decrease() {
            this.input(+(+this.currentValue - this.step).toFixed(this.fixed));
        },
        onBlur: function onBlur(e) {
            this.$refs.input.currentValue = this.currentValue;
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-0908a8a6","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-number-input.vue/index.html
var u_number_input_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-input',_vm._g({ref:"input",class:_vm.$style.root,attrs:{"value":_vm.currentValue,"readonly":_vm.readonly,"disabled":_vm.disabled},on:{"input":_vm.input,"blur":_vm.onBlur},nativeOn:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key)){ return null; }_vm.increase($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key)){ return null; }_vm.decrease($event)}]}},_vm.listeners),[_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],class:_vm.$style.button,attrs:{"role":"up","tabindex":"0"},on:{"keydown":function($event){$event.preventDefault();}}}),_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],class:_vm.$style.button,attrs:{"role":"down","tabindex":"0"},on:{"keydown":function($event){$event.preventDefault();}}}),_vm._t("default")],2)}
var u_number_input_vue_staticRenderFns = []
var u_number_input_vue_esExports = { render: u_number_input_vue_render, staticRenderFns: u_number_input_vue_staticRenderFns }
/* harmony default export */ var src_u_number_input_vue = (u_number_input_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-number-input.vue/index.js
var u_number_input_vue_cssModules = {};
function u_number_input_vue_injectStyle (ssrContext) {
u_number_input_vue_cssModules['$style'] = __webpack_require__(79);
  this['$style'] = u_number_input_vue_cssModules['$style']

}
var u_number_input_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_number_input_vue___vue_template_functional__ = false
/* styles */
var u_number_input_vue___vue_css__ = u_number_input_vue_injectStyle
/* scopeId */
var u_number_input_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_number_input_vue___vue_module_identifier__ = null
var u_number_input_vue_Component = u_number_input_vue_normalizeComponent(u_number_input_vue, src_u_number_input_vue, u_number_input_vue___vue_template_functional__, u_number_input_vue___vue_css__, u_number_input_vue___vue_scopeId__, u_number_input_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_number_input_vue = (u_number_input_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-pagination.vue/index.js
/* harmony default export */ var u_pagination_vue = ({
    name: 'u-pagination',
    props: {
        total: { type: Number, default: 11, validator: function validator(value) {
                return Number.isInteger(value) && value >= 0;
            } },
        page: { type: Number, default: 1, validator: function validator(value) {
                return Number.isInteger(value) && value > 0;
            } },
        side: { type: Number, default: 2, validator: function validator(value) {
                return Number.isInteger(value) && value > 0;
            } },
        around: { type: Number, default: 5, validator: function validator(value) {
                return Number.isInteger(value) && value > 0 && value % 2 === 1;
            } },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentPage: this.page
        };
    },

    watch: {
        page: function page(_page) {
            this.currentPage = _page;
        },
        currentPage: function currentPage(page, oldPage) {
            this.$emit('change', { page: page, oldPage: oldPage });
        }
    },
    computed: {
        pages: function pages() {
            var pages = [];

            var part = this.around >> 1;
            var start = this.currentPage - part;
            var end = start + this.around - 1;
            if (start < 1) {
                end += 1 - start;
                start = 1;
            } else if (end > this.total) {
                start -= end - this.total;
                end = this.total;
            }

            start = Math.max(1, Math.min(start, this.total - this.side + 1));
            end = Math.min(this.total, Math.max(end, this.side));

            var page = 1;
            while (page <= this.total) {
                if (page <= this.side || page >= start && page <= end || page > this.total - this.side) pages.push(page);else {
                    pages.push(undefined);

                    if (page < start) page = start - 1;
                    if (page > end) page = this.total - this.side;
                }

                page++;
            }

            return pages;
        }
    },
    methods: {
        select: function select(page) {
            if (this.readonly || this.disabled) return;

            if (page < 1 || page > this.total || page === this.currentPage) return;

            var oldPage = this.currentPage;

            var cancel = false;
            this.$emit('before-select', {
                page: page,
                oldPage: oldPage,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentPage = page;

            this.$emit('update:page', page);
            this.$emit('select', {
                page: page,
                oldPage: oldPage
            });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-acd4567e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-pagination.vue/index.html
var u_pagination_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('li',{class:_vm.$style.item,attrs:{"role":"prev","disabled":_vm.currentPage <= 1},on:{"click":function($event){_vm.select(_vm.currentPage - 1)}}}),_vm._l((_vm.pages),function(page){return [(page)?_c('li',{class:_vm.$style.item,attrs:{"selected":_vm.currentPage === page},on:{"click":function($event){_vm.select(page)}}},[_vm._v(_vm._s(page))]):_c('li',{class:_vm.$style.item,attrs:{"role":"blank"}},[_vm._v("...")])]}),_c('li',{class:_vm.$style.item,attrs:{"role":"next","disabled":_vm.currentPage >= _vm.total},on:{"click":function($event){_vm.select(_vm.currentPage + 1)}}})],2)}
var u_pagination_vue_staticRenderFns = []
var u_pagination_vue_esExports = { render: u_pagination_vue_render, staticRenderFns: u_pagination_vue_staticRenderFns }
/* harmony default export */ var src_u_pagination_vue = (u_pagination_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-pagination.vue/index.js
var u_pagination_vue_cssModules = {};
function u_pagination_vue_injectStyle (ssrContext) {
u_pagination_vue_cssModules['$style'] = __webpack_require__(81);
  this['$style'] = u_pagination_vue_cssModules['$style']

}
var u_pagination_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_pagination_vue___vue_template_functional__ = false
/* styles */
var u_pagination_vue___vue_css__ = u_pagination_vue_injectStyle
/* scopeId */
var u_pagination_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_pagination_vue___vue_module_identifier__ = null
var u_pagination_vue_Component = u_pagination_vue_normalizeComponent(u_pagination_vue, src_u_pagination_vue, u_pagination_vue___vue_template_functional__, u_pagination_vue___vue_css__, u_pagination_vue___vue_scopeId__, u_pagination_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_pagination_vue = (u_pagination_vue_Component.exports);
// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(83);

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-popper.vue/index.js




/* harmony default export */ var u_popper_vue = ({
    name: 'u-popper',
    props: {
        placement: {
            type: String, default: 'bottom-start',
            validator: function validator(value) {
                return (/^(top|bottom|left|right)(-start|-end)?$/.test(value)
                );
            }
        },
        trigger: { type: String, default: 'click', validator: function validator(value) {
                return ['click', 'hover', 'right-click', 'double-click', 'manual'].includes(value);
            } },
        reference: Object,
        open: { type: Boolean, default: false },
        offset: { type: Number, default: 0 },
        escapeWithReference: { type: Boolean, default: false },
        hoverDelay: { type: Number, default: 0 },
        boundariesElement: { default: 'scrollParent' },
        arrowElement: { type: String, default: '[u-arrow]' },
        appendTo: { type: String, default: 'body', validator: function validator(value) {
                return ['body', 'reference'].includes(value);
            } },
        options: {
            type: Object,
            default: function _default() {
                return {
                    modifiers: {}
                };
            }
        },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentOpen: this.open
        };
    },

    watch: {
        open: function open(value) {
            this.currentOpen = value;
        },
        currentOpen: function currentOpen(value) {
            // 不直接用样式的显隐，而用popper的create和destroy，popper有可能是从不同的地方触发的，reference对象会变
            value ? this.createPopper() : this.destroyPopper();
        }
    },
    render: function render() {
        return this.$slots.default && this.$slots.default[0];
    },
    mounted: function mounted() {
        var _this = this;

        // 创建VNode
        /* eslint-disable consistent-this */
        var parentVM = this;
        this.childVM = new vue_esm["a" /* default */]({
            name: 'u-popper-child',
            render: function render(h) {
                return parentVM.$slots.popper && parentVM.$slots.popper[0];
            }
        });
        this.childVM.parentVM = parentVM;
        this.childVM.$mount();

        var referenceEl = this.$el;
        var popperEl = this.childVM.$el;

        // 绑定事件
        var offEvents = this.offEvents = [];
        if (this.trigger === 'click') offEvents.push(utils_event.on(referenceEl, 'click', function () {
            return _this.toggle(true);
        }));else if (this.trigger === 'hover') {
            offEvents.push(utils_event.on(referenceEl, 'mouseenter', function () {
                setTimeout(function () {
                    return _this.toggle(true);
                }, _this.hoverDelay);
            }));
            offEvents.push(utils_event.on(document, 'mouseover', function (e) {
                !referenceEl.contains(e.target) && !popperEl.contains(e.target) && _this.toggle(false);
            }));
        } else if (this.trigger === 'double-click') offEvents.push(utils_event.on(referenceEl, 'dblclick', function () {
            return _this.toggle(true);
        }));else if (this.trigger === 'right-click') {
            offEvents.push(utils_event.on(referenceEl, 'contextmenu', function (e) {
                e.preventDefault();
                _this.toggle(true);
            }));
        }
        offEvents.push(utils_event.on(document, 'mousedown', function (e) {
            !popperEl.contains(e.target) && _this.toggle(false);
        }));

        this.currentOpen && this.createPopper();
    },
    updated: function updated() {
        this.childVM.$forceUpdate();
    },
    destroyed: function destroyed() {
        this.destroyPopper();

        // 取消绑定事件
        this.offEvents.forEach(function (off) {
            return off();
        });

        this.childVM && this.childVM.destroy && this.childVM.destroy();
        this.childVM = undefined;
    },

    methods: {
        getOptions: function getOptions() {
            var options = Object.assign({}, this.options, {
                placement: this.placement
            });

            options.modifiers.offset = this.offset;
            options.escapeWithReference = this.escapeWithReference;

            options.modifiers.arrow = { element: this.arrowElement };
            options.modifiers.preventOverflow = { boundariesElement: this.boundariesElement };

            return options;
        },
        createPopper: function createPopper() {
            var referenceEl = this.$el;
            var popperEl = this.childVM.$el;
            if (this.appendTo === 'body') document.body.appendChild(popperEl);else if (this.appendTo === 'reference') referenceEl.appendChild(popperEl);

            var options = this.getOptions();
            this.popper = new popper["a" /* default */](referenceEl, popperEl, options);
        },
        update: function update() {
            this.popper && this.popper.update();
        },
        destroyPopper: function destroyPopper() {
            var referenceEl = this.$el;
            var popperEl = this.childVM.$el;
            if (this.appendTo === 'body') popperEl.parentElement === document.body && document.body.removeChild(popperEl);else if (this.appendTo === 'reference') popperEl.parentElement === referenceEl && referenceEl.removeChild(popperEl);

            this.popper && this.popper.destroy();
            this.popper = undefined;
        },
        toggle: function toggle(open) {
            if (this.disabled) return;

            var oldOpen = this.currentOpen;

            if (open === undefined) open = !this.currentOpen;

            if (open === oldOpen) return;

            var cancel = false;
            this.$emit('before-toggle', {
                open: open,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentOpen = open;
            this.$emit('update:open', open);
            this.$emit('toggle', {
                open: open
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-popper.vue/index.js
var u_popper_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_popper_vue___vue_html__ = null
/* template functional */
var u_popper_vue___vue_template_functional__ = false
/* styles */
var u_popper_vue___vue_css__ = null
/* scopeId */
var u_popper_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_popper_vue___vue_module_identifier__ = null
var u_popper_vue_Component = u_popper_vue_normalizeComponent(u_popper_vue, u_popper_vue___vue_html__, u_popper_vue___vue_template_functional__, u_popper_vue___vue_css__, u_popper_vue___vue_scopeId__, u_popper_vue___vue_module_identifier__)
/* harmony default export */ var src_u_popper_vue = (u_popper_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-radio.vue/index.js


/* harmony default export */ var u_radio_vue = ({
    name: 'u-radio',
    parentName: 'u-radios',
    mixins: [src_u_field_vue],
    props: {
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            parentVM: undefined
        };
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        },
        selected: function selected() {
            return this.parentVM.selectedVM === this;
        },
        currentDisabled: function currentDisabled() {
            return this.disabled || this.parentVM && this.parentVM.disabled;
        }
    },
    created: function created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed: function destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },

    methods: {
        onFocus: function onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.$emit('blur', e);
        },
        select: function select() {
            if (this.readonly || this.disabled) return;
            if (this.parentVM && (this.parentVM.readonly || this.parentVM.disabled)) return;

            var cancel = false;
            this.$emit('before-select', {
                label: this.label,
                itemVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.parentVM && this.parentVM.select(this);
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-62c24c24","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-radio.vue/index.html
var u_radio_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',_vm._g({class:_vm.$style.root,attrs:{"disabled":_vm.currentDisabled,"tabindex":"0"},on:{"click":function($event){_vm.select()},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();_vm.select()},"focus":_vm.onFocus,"blur":_vm.onBlur}},_vm.listeners),[_c('span',{class:_vm.$style.radio,attrs:{"selected":_vm.selected,"disabled":_vm.currentDisabled}}),_vm._t("default")],2)}
var u_radio_vue_staticRenderFns = []
var u_radio_vue_esExports = { render: u_radio_vue_render, staticRenderFns: u_radio_vue_staticRenderFns }
/* harmony default export */ var src_u_radio_vue = (u_radio_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-radio.vue/index.js
var u_radio_vue_cssModules = {};
function u_radio_vue_injectStyle (ssrContext) {
u_radio_vue_cssModules['$style'] = __webpack_require__(84);
  this['$style'] = u_radio_vue_cssModules['$style']

}
var u_radio_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_radio_vue___vue_template_functional__ = false
/* styles */
var u_radio_vue___vue_css__ = u_radio_vue_injectStyle
/* scopeId */
var u_radio_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_radio_vue___vue_module_identifier__ = null
var u_radio_vue_Component = u_radio_vue_normalizeComponent(u_radio_vue, src_u_radio_vue, u_radio_vue___vue_template_functional__, u_radio_vue___vue_css__, u_radio_vue___vue_scopeId__, u_radio_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_radio_vue = (u_radio_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-radio--0.vue/index.js


/* harmony default export */ var u_radio__0_vue = ({
    name: 'u-radio--0',
    mixins: [proto_ui_vusion_src_u_radio_vue]
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-0981f7c8","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-radio--0.vue/index.html
var u_radio__0_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',_vm._g({class:_vm.$style.root,attrs:{"disabled":_vm.currentDisabled,"tabindex":"0"},on:{"click":function($event){$event.preventDefault();_vm.select()},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();_vm.select()},"focus":_vm.onFocus,"blur":_vm.onBlur}},_vm.listeners),[_c('input',{class:_vm.$style.radio,attrs:{"type":"radio","name":_vm.parentVM && _vm.parentVM.name,"disabled":_vm.currentDisabled},domProps:{"checked":_vm.selected}}),_vm._t("default")],2)}
var u_radio__0_vue_staticRenderFns = []
var u_radio__0_vue_esExports = { render: u_radio__0_vue_render, staticRenderFns: u_radio__0_vue_staticRenderFns }
/* harmony default export */ var src_u_radio__0_vue = (u_radio__0_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-radio--0.vue/index.js
var u_radio__0_vue_cssModules = {};
function u_radio__0_vue_injectStyle (ssrContext) {
u_radio__0_vue_cssModules['$style'] = __webpack_require__(86);
  this['$style'] = u_radio__0_vue_cssModules['$style']

}
var u_radio__0_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_radio__0_vue___vue_template_functional__ = false
/* styles */
var u_radio__0_vue___vue_css__ = u_radio__0_vue_injectStyle
/* scopeId */
var u_radio__0_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_radio__0_vue___vue_module_identifier__ = null
var u_radio__0_vue_Component = u_radio__0_vue_normalizeComponent(u_radio__0_vue, src_u_radio__0_vue, u_radio__0_vue___vue_template_functional__, u_radio__0_vue___vue_css__, u_radio__0_vue___vue_scopeId__, u_radio__0_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_radio__0_vue = (u_radio__0_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-radios.vue/index.js


/* harmony default export */ var u_radios_vue = ({
    name: 'u-radios',
    childName: 'u-radio',
    mixins: [src_u_field_vue],
    props: {
        value: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            itemVMs: [],
            selectedVM: undefined
        };
    },

    watch: {
        value: function value(_value, oldValue) {
            this.watchValue(_value);
        },
        selectedVM: function selectedVM(_selectedVM, oldVM) {
            this.$emit('change', {
                value: _selectedVM ? _selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                item: _selectedVM ? _selectedVM.item : undefined,
                itemVM: _selectedVM
            });
        },
        itemVMs: function itemVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        }
    },
    created: function created() {
        var _this = this;

        this.$on('add-item-vm', function (itemVM) {
            itemVM.parentVM = _this;
            _this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', function (itemVM) {
            itemVM.parentVM = undefined;
            _this.itemVMs.splice(_this.itemVMs.indexOf(itemVM), 1);
        });

        this.$nextTick(function () {
            return _this.watchValue(_this.value);
        });
    },

    methods: {
        watchValue: function watchValue(value) {
            if (this.selectedVM && this.selectedVM.label === value) return;
            if (value === undefined) this.selectedVM = undefined;else this.selectedVM = this.itemVMs.find(function (itemVM) {
                return itemVM.label === value;
            });
        },
        select: function select(itemVM) {
            if (this.readonly || this.disabled) return;

            var oldValue = this.value;

            var cancel = false;
            this.$emit('before-select', {
                value: itemVM && itemVM.label,
                oldValue: oldValue,
                itemVM: itemVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            if (this.cancelable && this.selectedVM === itemVM) this.selectedVM = undefined;else this.selectedVM = itemVM;

            var value = this.selectedVM && this.selectedVM.label;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('select', {
                value: value,
                oldValue: oldValue,
                itemVM: this.selectedVM
            });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-0d9a4d02","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-radios.vue/index.html
var u_radios_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_radios_vue_staticRenderFns = []
var u_radios_vue_esExports = { render: u_radios_vue_render, staticRenderFns: u_radios_vue_staticRenderFns }
/* harmony default export */ var src_u_radios_vue = (u_radios_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-radios.vue/index.js
var u_radios_vue_cssModules = {};
function u_radios_vue_injectStyle (ssrContext) {
u_radios_vue_cssModules['$style'] = __webpack_require__(88);
  this['$style'] = u_radios_vue_cssModules['$style']

}
var u_radios_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_radios_vue___vue_template_functional__ = false
/* styles */
var u_radios_vue___vue_css__ = u_radios_vue_injectStyle
/* scopeId */
var u_radios_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_radios_vue___vue_module_identifier__ = null
var u_radios_vue_Component = u_radios_vue_normalizeComponent(u_radios_vue, src_u_radios_vue, u_radios_vue___vue_template_functional__, u_radios_vue___vue_css__, u_radios_vue___vue_scopeId__, u_radios_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_radios_vue = (u_radios_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-render.vue/index.js
/* harmony default export */ var u_render_vue = ({
    name: 'u-render',
    functional: true,
    props: {
        vnode: null
    },
    render: function render(h, context) {
        return context.props.vnode || context.children;
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-render.vue/index.js
var u_render_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_render_vue___vue_html__ = null
/* template functional */
var u_render_vue___vue_template_functional__ = false
/* styles */
var u_render_vue___vue_css__ = null
/* scopeId */
var u_render_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_render_vue___vue_module_identifier__ = null
var u_render_vue_Component = u_render_vue_normalizeComponent(u_render_vue, u_render_vue___vue_html__, u_render_vue___vue_template_functional__, u_render_vue___vue_css__, u_render_vue___vue_scopeId__, u_render_vue___vue_module_identifier__)
/* harmony default export */ var src_u_render_vue = (u_render_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-sample.vue/index.js
/* harmony default export */ var u_sample_vue = ({
    name: 'u-sample'
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-00ceaa51","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-sample.vue/index.html
var u_sample_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_sample_vue_staticRenderFns = []
var u_sample_vue_esExports = { render: u_sample_vue_render, staticRenderFns: u_sample_vue_staticRenderFns }
/* harmony default export */ var src_u_sample_vue = (u_sample_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-sample.vue/index.js
var u_sample_vue_cssModules = {};
function u_sample_vue_injectStyle (ssrContext) {
u_sample_vue_cssModules['$style'] = __webpack_require__(90);
  this['$style'] = u_sample_vue_cssModules['$style']

}
var u_sample_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_sample_vue___vue_template_functional__ = false
/* styles */
var u_sample_vue___vue_css__ = u_sample_vue_injectStyle
/* scopeId */
var u_sample_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sample_vue___vue_module_identifier__ = null
var u_sample_vue_Component = u_sample_vue_normalizeComponent(u_sample_vue, src_u_sample_vue, u_sample_vue___vue_template_functional__, u_sample_vue___vue_css__, u_sample_vue___vue_scopeId__, u_sample_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_sample_vue = (u_sample_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-select.vue/index.js



/* harmony default export */ var u_select_vue = ({
    name: 'u-select',
    childName: 'u-select-item',
    mixins: [proto_ui_vusion_src_u_list_view_vue],
    directives: { ellipsisTitle: ellipsisTitle },
    props: {
        value: null,
        data: Array,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        size: String
    },
    created: function created() {
        var _this = this;

        this.$on('select', function () {
            _this.$refs.popper.toggle(false);
        });
    },

    methods: {
        watchValue: function watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value) return;
            if (value === undefined) this.selectedVM = this.itemVMs[0];else this.selectedVM = this.itemVMs.find(function (itemVM) {
                return itemVM.value === value;
            });
        },
        onToggle: function onToggle($event) {
            this.$emit('toggle', $event);
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-d4db1eba","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-select.vue/index.html
var u_select_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-popper',{ref:"popper",attrs:{"disabled":_vm.readonly || _vm.disabled,"append-to":"reference"},on:{"toggle":function($event){_vm.onToggle($event)}}},[_c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled,"size":_vm.size}},[_c('span',{directives:[{name:"ellipsis-title",rawName:"v-ellipsis-title"}],class:_vm.$style.text},[_c('u-render',{attrs:{"vnode":_vm.selectedVM && _vm.selectedVM.$slots.default}})],1)]),_c('ul',{class:_vm.$style.popper,attrs:{"slot":"popper","size":_vm.size},on:{"click":function($event){$event.stopPropagation();}},slot:"popper"},[_vm._l((_vm.data),function(item){return (_vm.data)?_c(_vm.ChildComponent,{key:item.value,tag:"component",attrs:{"value":item.value,"disabled":item.disabled || _vm.disabled,"item":item,"field":_vm.field}},[_vm._v(_vm._s(item[_vm.field]))]):_vm._e()}),_vm._t("default")],2)])}
var u_select_vue_staticRenderFns = []
var u_select_vue_esExports = { render: u_select_vue_render, staticRenderFns: u_select_vue_staticRenderFns }
/* harmony default export */ var src_u_select_vue = (u_select_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-select.vue/index.js
var u_select_vue_cssModules = {};
function u_select_vue_injectStyle (ssrContext) {
u_select_vue_cssModules['$style'] = __webpack_require__(92);
  this['$style'] = u_select_vue_cssModules['$style']

}
var u_select_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_select_vue___vue_template_functional__ = false
/* styles */
var u_select_vue___vue_css__ = u_select_vue_injectStyle
/* scopeId */
var u_select_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_select_vue___vue_module_identifier__ = null
var u_select_vue_Component = u_select_vue_normalizeComponent(u_select_vue, src_u_select_vue, u_select_vue___vue_template_functional__, u_select_vue___vue_css__, u_select_vue___vue_scopeId__, u_select_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_select_vue = (u_select_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-select-divider.vue/index.js


/* harmony default export */ var u_select_divider_vue = ({
    name: 'u-select-divider',
    mixins: [proto_ui_vusion_src_u_list_view_divider_vue]
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-select-divider.vue/index.js
var u_select_divider_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_select_divider_vue___vue_html__ = null
/* template functional */
var u_select_divider_vue___vue_template_functional__ = false
/* styles */
var u_select_divider_vue___vue_css__ = null
/* scopeId */
var u_select_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_select_divider_vue___vue_module_identifier__ = null
var u_select_divider_vue_Component = u_select_divider_vue_normalizeComponent(u_select_divider_vue, u_select_divider_vue___vue_html__, u_select_divider_vue___vue_template_functional__, u_select_divider_vue___vue_css__, u_select_divider_vue___vue_scopeId__, u_select_divider_vue___vue_module_identifier__)
/* harmony default export */ var src_u_select_divider_vue = (u_select_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-select-group.vue/index.js


/* harmony default export */ var u_select_group_vue = ({
    name: 'u-select-group',
    mixins: [proto_ui_vusion_src_u_list_view_group_vue]
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-select-group.vue/index.js
var u_select_group_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_select_group_vue___vue_html__ = null
/* template functional */
var u_select_group_vue___vue_template_functional__ = false
/* styles */
var u_select_group_vue___vue_css__ = null
/* scopeId */
var u_select_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_select_group_vue___vue_module_identifier__ = null
var u_select_group_vue_Component = u_select_group_vue_normalizeComponent(u_select_group_vue, u_select_group_vue___vue_html__, u_select_group_vue___vue_template_functional__, u_select_group_vue___vue_css__, u_select_group_vue___vue_scopeId__, u_select_group_vue___vue_module_identifier__)
/* harmony default export */ var src_u_select_group_vue = (u_select_group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-select-item.vue/index.js


/* harmony default export */ var u_select_item_vue = ({
    name: 'u-select-item',
    parentName: 'u-select',
    mixins: [proto_ui_vusion_src_u_list_view_item_vue],
    props: {
        field: String
    },
    created: function created() {
        var popperChildVM = this.$parent;
        while (popperChildVM.$options.name !== 'u-popper-child') {
            popperChildVM = popperChildVM.$parent;
        }if (popperChildVM && popperChildVM.parentVM) {
            this.parentVM = popperChildVM.parentVM.$parent;
            this.parentVM.$emit('add-item-vm', this);
        }
    },
    destroyed: function destroyed() {
        this.parentVM && this.parentVM.$emit('remove-item-vm', this);
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-select-item.vue/index.js
var u_select_item_vue_cssModules = {};
function u_select_item_vue_injectStyle (ssrContext) {
u_select_item_vue_cssModules['$style'] = __webpack_require__(94);
  this['$style'] = u_select_item_vue_cssModules['$style']

}
var u_select_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_select_item_vue___vue_html__ = null
/* template functional */
var u_select_item_vue___vue_template_functional__ = false
/* styles */
var u_select_item_vue___vue_css__ = u_select_item_vue_injectStyle
/* scopeId */
var u_select_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_select_item_vue___vue_module_identifier__ = null
var u_select_item_vue_Component = u_select_item_vue_normalizeComponent(u_select_item_vue, u_select_item_vue___vue_html__, u_select_item_vue___vue_template_functional__, u_select_item_vue___vue_css__, u_select_item_vue___vue_scopeId__, u_select_item_vue___vue_module_identifier__)
/* harmony default export */ var src_u_select_item_vue = (u_select_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-sidebar.vue/index.js


/* harmony default export */ var u_sidebar_vue = ({
    name: 'u-sidebar',
    groupName: 'u-sidebar-group',
    childName: 'u-sidebar-item',
    mixins: [proto_ui_vusion_src_u_list_view_vue],
    props: {
        router: { type: Boolean, default: true }
    },
    created: function created() {
        var _this = this;

        this.$on('select', function (_ref) {
            var itemVM = _ref.itemVM;
            return _this.router && itemVM.navigate();
        });
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-sidebar.vue/index.js
var u_sidebar_vue_cssModules = {};
function u_sidebar_vue_injectStyle (ssrContext) {
u_sidebar_vue_cssModules['$style'] = __webpack_require__(96);
  this['$style'] = u_sidebar_vue_cssModules['$style']

}
var u_sidebar_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_sidebar_vue___vue_html__ = null
/* template functional */
var u_sidebar_vue___vue_template_functional__ = false
/* styles */
var u_sidebar_vue___vue_css__ = u_sidebar_vue_injectStyle
/* scopeId */
var u_sidebar_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sidebar_vue___vue_module_identifier__ = null
var u_sidebar_vue_Component = u_sidebar_vue_normalizeComponent(u_sidebar_vue, u_sidebar_vue___vue_html__, u_sidebar_vue___vue_template_functional__, u_sidebar_vue___vue_css__, u_sidebar_vue___vue_scopeId__, u_sidebar_vue___vue_module_identifier__)
/* harmony default export */ var src_u_sidebar_vue = (u_sidebar_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-sidebar-divider.vue/index.js


/* harmony default export */ var u_sidebar_divider_vue = ({
    name: 'u-sidebar-divider',
    mixins: [proto_ui_vusion_src_u_list_view_divider_vue]
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-sidebar-divider.vue/index.js
var u_sidebar_divider_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_sidebar_divider_vue___vue_html__ = null
/* template functional */
var u_sidebar_divider_vue___vue_template_functional__ = false
/* styles */
var u_sidebar_divider_vue___vue_css__ = null
/* scopeId */
var u_sidebar_divider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sidebar_divider_vue___vue_module_identifier__ = null
var u_sidebar_divider_vue_Component = u_sidebar_divider_vue_normalizeComponent(u_sidebar_divider_vue, u_sidebar_divider_vue___vue_html__, u_sidebar_divider_vue___vue_template_functional__, u_sidebar_divider_vue___vue_css__, u_sidebar_divider_vue___vue_scopeId__, u_sidebar_divider_vue___vue_module_identifier__)
/* harmony default export */ var src_u_sidebar_divider_vue = (u_sidebar_divider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-sidebar-group.vue/index.js


/* harmony default export */ var u_sidebar_group_vue = ({
    name: 'u-sidebar-group',
    parentName: 'u-sidebar',
    childName: 'u-sidebar-item',
    mixins: [proto_ui_vusion_src_u_list_view_group_vue]
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-sidebar-group.vue/index.js
var u_sidebar_group_vue_cssModules = {};
function u_sidebar_group_vue_injectStyle (ssrContext) {
u_sidebar_group_vue_cssModules['$style'] = __webpack_require__(98);
  this['$style'] = u_sidebar_group_vue_cssModules['$style']

}
var u_sidebar_group_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_sidebar_group_vue___vue_html__ = null
/* template functional */
var u_sidebar_group_vue___vue_template_functional__ = false
/* styles */
var u_sidebar_group_vue___vue_css__ = u_sidebar_group_vue_injectStyle
/* scopeId */
var u_sidebar_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sidebar_group_vue___vue_module_identifier__ = null
var u_sidebar_group_vue_Component = u_sidebar_group_vue_normalizeComponent(u_sidebar_group_vue, u_sidebar_group_vue___vue_html__, u_sidebar_group_vue___vue_template_functional__, u_sidebar_group_vue___vue_css__, u_sidebar_group_vue___vue_scopeId__, u_sidebar_group_vue___vue_module_identifier__)
/* harmony default export */ var src_u_sidebar_group_vue = (u_sidebar_group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-sidebar-item.vue/index.js



/* harmony default export */ var u_sidebar_item_vue = ({
    name: 'u-sidebar-item',
    parentName: 'u-sidebar',
    groupName: 'u-sidebar-group',
    mixins: [proto_ui_vusion_src_u_list_view_item_vue, src_u_router_item_vue],
    watch: {
        active: function active(_active) {
            this.watchActive(_active);
        }
    },
    created: function created() {
        var _this = this;

        this.$nextTick(function () {
            return _this.watchActive(_this.active);
        });
    },

    methods: {
        watchActive: function watchActive(active) {
            active && this.groupVM && this.groupVM.toggle(true);
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-546ee96a","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-sidebar-item.vue/index.html
var u_sidebar_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.$style.root,attrs:{"selected":_vm.parentVM.router ? _vm.active : _vm.selected || _vm.currentSelected,"readonly":_vm.parentVM.readonly,"disabled":_vm.disabled || _vm.parentVM.disabled},on:{"click":function($event){_vm.select()}}},[_vm._t("default")],2)}
var u_sidebar_item_vue_staticRenderFns = []
var u_sidebar_item_vue_esExports = { render: u_sidebar_item_vue_render, staticRenderFns: u_sidebar_item_vue_staticRenderFns }
/* harmony default export */ var src_u_sidebar_item_vue = (u_sidebar_item_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-sidebar-item.vue/index.js
var u_sidebar_item_vue_cssModules = {};
function u_sidebar_item_vue_injectStyle (ssrContext) {
u_sidebar_item_vue_cssModules['$style'] = __webpack_require__(100);
  this['$style'] = u_sidebar_item_vue_cssModules['$style']

}
var u_sidebar_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_sidebar_item_vue___vue_template_functional__ = false
/* styles */
var u_sidebar_item_vue___vue_css__ = u_sidebar_item_vue_injectStyle
/* scopeId */
var u_sidebar_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_sidebar_item_vue___vue_module_identifier__ = null
var u_sidebar_item_vue_Component = u_sidebar_item_vue_normalizeComponent(u_sidebar_item_vue, src_u_sidebar_item_vue, u_sidebar_item_vue___vue_template_functional__, u_sidebar_item_vue___vue_css__, u_sidebar_item_vue___vue_scopeId__, u_sidebar_item_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_sidebar_item_vue = (u_sidebar_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-slider.vue/index.js


/* harmony default export */ var u_slider_vue = ({
    name: 'u-slider',
    mixins: [src_u_field_vue],
    props: {
        value: { type: Number, default: 0 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1 },
        fixed: { type: Number, default: 4 }
    },
    data: function data() {
        return {
            currentValue: this.value,
            grid: { x: 0, y: 0 },
            handleEl: undefined
        };
    },

    watch: {
        value: function value(_value) {
            this.currentValue = _value;
            this.handleEl.style.left = this.percent + '%';
        },
        currentValue: function currentValue(value, oldValue) {
            value = +value;

            this.$emit('change', {
                value: value,
                oldValue: oldValue
            });
        }
    },
    computed: {
        percent: {
            get: function get() {
                return (this.currentValue - this.min) / (this.max - this.min) * 100;
            },
            set: function set(percent) {
                var value = +this.min + (this.max - this.min) * percent / 100;
                if (this.step) value = Math.round(value / this.step) * this.step;
                var isOutOfRange = this.isOutOfRange(value);
                if (isOutOfRange) this.currentValue = isOutOfRange;
                value = +value.toFixed(this.fixed);

                this.currentValue = value;
                this.$emit('input', value);
                this.$emit('update:value', value);
            }
        }
    },
    mounted: function mounted() {
        this.handleEl = this.$refs.handle;
        this.handleEl.style.left = this.percent + '%';
    },

    methods: {
        onDragStart: function onDragStart($event) {
            this.grid.x = this.step / (this.max - this.min) * $event.range.width;
            this.percent = $event.left / $event.range.width * 100;
        },
        onDrag: function onDrag($event) {
            this.percent = $event.left / $event.range.width * 100;
        },
        isOutOfRange: function isOutOfRange(value) {
            var min = +this.min;
            var max = +this.max;

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
            return value < min && min || value > max && max;
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-3a353a08","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-slider.vue/index.html
var u_slider_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('u-dragger',{attrs:{"disabled":_vm.readonly || _vm.disabled,"transfer":_vm.handleEl,"immediate":"","axis":"horizontal","grid":_vm.grid,"range":"offset-parent","range-mode":"center"},on:{"dragstart":function($event){_vm.onDragStart($event)},"drag":function($event){_vm.onDrag($event)}}},[_c('div',{class:_vm.$style.body},[_c('div',{class:_vm.$style.track},[_c('div',{class:_vm.$style.trail,style:({ width: _vm.percent + '%' })})]),_c('div',{ref:"handle",class:_vm.$style.handle})])])],1)}
var u_slider_vue_staticRenderFns = []
var u_slider_vue_esExports = { render: u_slider_vue_render, staticRenderFns: u_slider_vue_staticRenderFns }
/* harmony default export */ var src_u_slider_vue = (u_slider_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-slider.vue/index.js
var u_slider_vue_cssModules = {};
function u_slider_vue_injectStyle (ssrContext) {
u_slider_vue_cssModules['$style'] = __webpack_require__(102);
  this['$style'] = u_slider_vue_cssModules['$style']

}
var u_slider_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_slider_vue___vue_template_functional__ = false
/* styles */
var u_slider_vue___vue_css__ = u_slider_vue_injectStyle
/* scopeId */
var u_slider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_slider_vue___vue_module_identifier__ = null
var u_slider_vue_Component = u_slider_vue_normalizeComponent(u_slider_vue, src_u_slider_vue, u_slider_vue___vue_template_functional__, u_slider_vue___vue_css__, u_slider_vue___vue_scopeId__, u_slider_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_slider_vue = (u_slider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-switch.vue/index.js


/* harmony default export */ var u_switch_vue = ({
    name: 'u-switch',
    mixins: [src_u_field_vue],
    props: {
        value: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            currentValue: this.value
        };
    },

    computed: {
        listeners: function listeners() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        }
    },
    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        },
        currentValue: function currentValue(value, oldValue) {
            this.$emit('change', { value: value, oldValue: oldValue });
        }
    },
    methods: {
        onFocus: function onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.$emit('blur', e);
        },
        toggle: function toggle() {
            if (this.readonly || this.disabled) return;

            var oldValue = this.currentValue;
            var value = !this.currentValue;

            var cancel = false;
            this.$emit('before-toggle', {
                value: value,
                oldValue: oldValue,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentValue = value;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('toggle', { value: value, oldValue: oldValue });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-38d9d24a","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-switch.vue/index.html
var u_switch_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',_vm._g({class:_vm.$style.root,attrs:{"checked":_vm.currentValue,"disabled":_vm.disabled,"tabindex":"0"},on:{"click":function($event){_vm.toggle()},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();_vm.toggle()},"focus":_vm.onFocus,"blur":_vm.onBlur}},_vm.listeners),[_c('span',{class:_vm.$style.button}),_c('span',{class:_vm.$style.text},[_vm._t("default")],2)])}
var u_switch_vue_staticRenderFns = []
var u_switch_vue_esExports = { render: u_switch_vue_render, staticRenderFns: u_switch_vue_staticRenderFns }
/* harmony default export */ var src_u_switch_vue = (u_switch_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-switch.vue/index.js
var u_switch_vue_cssModules = {};
function u_switch_vue_injectStyle (ssrContext) {
u_switch_vue_cssModules['$style'] = __webpack_require__(104);
  this['$style'] = u_switch_vue_cssModules['$style']

}
var u_switch_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_switch_vue___vue_template_functional__ = false
/* styles */
var u_switch_vue___vue_css__ = u_switch_vue_injectStyle
/* scopeId */
var u_switch_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_switch_vue___vue_module_identifier__ = null
var u_switch_vue_Component = u_switch_vue_normalizeComponent(u_switch_vue, src_u_switch_vue, u_switch_vue___vue_template_functional__, u_switch_vue___vue_css__, u_switch_vue___vue_scopeId__, u_switch_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_switch_vue = (u_switch_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-tab.vue/index.js



/* harmony default export */ var u_tab_vue = ({
    name: 'u-tab',
    parentName: 'u-tabs',
    mixins: [src_u_emitter_vue, src_u_router_item_vue],
    props: {
        title: String,
        value: null,
        hidden: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            parentVM: undefined
        };
    },

    computed: {
        selected: function selected() {
            if (this.parentVM) return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        }
    },
    created: function created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed: function destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-41322afe","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-tab.vue/index.html
var u_tab_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected),expression:"selected"}]},[_vm._t("default")],2)}
var u_tab_vue_staticRenderFns = []
var u_tab_vue_esExports = { render: u_tab_vue_render, staticRenderFns: u_tab_vue_staticRenderFns }
/* harmony default export */ var src_u_tab_vue = (u_tab_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-tab.vue/index.js
var u_tab_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_tab_vue___vue_template_functional__ = false
/* styles */
var u_tab_vue___vue_css__ = null
/* scopeId */
var u_tab_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tab_vue___vue_module_identifier__ = null
var u_tab_vue_Component = u_tab_vue_normalizeComponent(u_tab_vue, src_u_tab_vue, u_tab_vue___vue_template_functional__, u_tab_vue___vue_css__, u_tab_vue___vue_scopeId__, u_tab_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_tab_vue = (u_tab_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-tabs.vue/index.js
/* harmony default export */ var u_tabs_vue = ({
    name: 'u-tabs',
    childName: 'u-tab',
    props: {
        value: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        closable: { type: Boolean, default: false },
        router: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            itemVMs: [],
            selectedVM: undefined
        };
    },

    watch: {
        value: function value(_value) {
            this.watchValue(_value);
        },
        itemVMs: function itemVMs() {
            // this.selectedVM = undefined;
            this.watchValue(this.value);
        },
        selectedVM: function selectedVM(_selectedVM, oldVM) {
            this.$emit('change', {
                value: _selectedVM ? _selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                item: _selectedVM ? _selectedVM.item : undefined,
                itemVM: _selectedVM
            });
        }
    },
    created: function created() {
        var _this = this;

        this.$on('add-item-vm', function (itemVM) {
            itemVM.parentVM = _this;
            _this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', function (itemVM) {
            itemVM.parentVM = undefined;
            _this.itemVMs.splice(_this.itemVMs.indexOf(itemVM), 1);
        });
        this.$nextTick(function () {
            return _this.watchValue(_this.value);
        });
    },

    methods: {
        watchValue: function watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value) return;
            if (value === undefined) this.selectedVM = this.itemVMs[0];else this.selectedVM = this.itemVMs.find(function (itemVM) {
                return itemVM.value === value;
            });
        },
        select: function select(itemVM) {
            if (this.readonly || this.disabled || itemVM.disabled) return;

            var oldValue = this.value;

            var cancel = false;
            this.$emit('before-select', {
                value: itemVM && itemVM.value,
                oldValue: oldValue,
                itemVM: itemVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.selectedVM = itemVM;

            var value = this.selectedVM && this.selectedVM.value;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('select', {
                value: value,
                oldValue: oldValue,
                itemVM: this.selectedVM
            });

            this.router && itemVM.navigate();
        },
        close: function close(itemVM) {
            if (this.readonly || this.disabled || itemVM.disabled) return;

            var oldValue = this.value;

            var cancel = false;
            this.$emit('before-close', {
                value: itemVM && itemVM.value,
                oldValue: oldValue,
                itemVM: itemVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            itemVM.parentVM = undefined;
            var index = this.itemVMs.indexOf(itemVM);
            this.itemVMs.splice(index, 1);

            cancel = false;
            this.$emit('close', {
                value: itemVM && itemVM.value,
                oldValue: oldValue,
                itemVM: itemVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            if (this.selectedVM === itemVM) {
                this.selectedVM = this.itemVMs[index] || this.itemVMs[index - 1];
                var value = this.selectedVM && this.selectedVM.value;
                this.$emit('input', value);
                this.$emit('update:value', value);
            }
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-2e825436","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-tabs.vue/index.html
var u_tabs_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"disabled":_vm.disabled}},[_c('ul',{class:_vm.$style.head},[_vm._l((_vm.itemVMs),function(itemVM){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!itemVM.hidden),expression:"!itemVM.hidden"}],class:_vm.$style.item,attrs:{"title":itemVM.title,"selected":_vm.router ? itemVM.active : itemVM === _vm.selectedVM,"disabled":itemVM.disabled || _vm.disabled},on:{"click":function($event){_vm.select(itemVM)}}},[_c('span',{class:_vm.$style.title},[_c('u-render',{attrs:{"vnode":itemVM.$slots.title}},[_vm._v(_vm._s(itemVM.title))])],1),(_vm.closable)?_c('span',{class:_vm.$style.close,on:{"click":function($event){$event.stopPropagation();_vm.close(itemVM)}}}):_vm._e()])}),_c('span',{class:_vm.$style.extra},[_vm._t("extra")],2)],2),_c('div',{class:_vm.$style.body},[_vm._t("default")],2)])}
var u_tabs_vue_staticRenderFns = []
var u_tabs_vue_esExports = { render: u_tabs_vue_render, staticRenderFns: u_tabs_vue_staticRenderFns }
/* harmony default export */ var src_u_tabs_vue = (u_tabs_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-tabs.vue/index.js
var u_tabs_vue_cssModules = {};
function u_tabs_vue_injectStyle (ssrContext) {
u_tabs_vue_cssModules['$style'] = __webpack_require__(106);
  this['$style'] = u_tabs_vue_cssModules['$style']

}
var u_tabs_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_tabs_vue___vue_template_functional__ = false
/* styles */
var u_tabs_vue___vue_css__ = u_tabs_vue_injectStyle
/* scopeId */
var u_tabs_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tabs_vue___vue_module_identifier__ = null
var u_tabs_vue_Component = u_tabs_vue_normalizeComponent(u_tabs_vue, src_u_tabs_vue, u_tabs_vue___vue_template_functional__, u_tabs_vue___vue_css__, u_tabs_vue___vue_scopeId__, u_tabs_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_tabs_vue = (u_tabs_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-textarea.vue/index.js


/* harmony default export */ var u_textarea_vue = ({
    name: 'u-textarea',
    mixins: [proto_ui_vusion_src_u_input_vue]
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-6e3bc7be","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-textarea.vue/index.html
var u_textarea_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.$style.root,attrs:{"focus":_vm.focused,"color":_vm.color || this.formItemVM && this.formItemVM.color}},[_c('textarea',_vm._g(_vm._b({ref:"input",class:_vm.$style.input,domProps:{"value":_vm.currentValue},on:{"input":_vm.onInput,"focus":_vm.onFocus,"blur":_vm.onBlur,"compositionstart":function($event){_vm.compositionInputing = true},"compositionend":function($event){_vm.compositionInputing = false}}},'textarea',_vm.$attrs,false),_vm.listeners)),_vm._t("default")],2)}
var u_textarea_vue_staticRenderFns = []
var u_textarea_vue_esExports = { render: u_textarea_vue_render, staticRenderFns: u_textarea_vue_staticRenderFns }
/* harmony default export */ var src_u_textarea_vue = (u_textarea_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-textarea.vue/index.js
var u_textarea_vue_cssModules = {};
function u_textarea_vue_injectStyle (ssrContext) {
u_textarea_vue_cssModules['$style'] = __webpack_require__(108);
  this['$style'] = u_textarea_vue_cssModules['$style']

}
var u_textarea_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_textarea_vue___vue_template_functional__ = false
/* styles */
var u_textarea_vue___vue_css__ = u_textarea_vue_injectStyle
/* scopeId */
var u_textarea_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_textarea_vue___vue_module_identifier__ = null
var u_textarea_vue_Component = u_textarea_vue_normalizeComponent(u_textarea_vue, src_u_textarea_vue, u_textarea_vue___vue_template_functional__, u_textarea_vue___vue_css__, u_textarea_vue___vue_scopeId__, u_textarea_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_textarea_vue = (u_textarea_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-tree-view.vue/index.js


var walk = function walk(rootVM, func) {
    var queue = [];
    queue = queue.concat(rootVM.nodeVMs);
    var nodeVM = void 0;
    while (nodeVM = queue.shift()) {
        queue = queue.concat(nodeVM.nodeVMs);
        var result = func(nodeVM);
        if (result !== undefined) return result;
    }
};

var find = function find(rootVM, func) {
    return walk(rootVM, function (nodeVM) {
        if (func(nodeVM)) return nodeVM;
    });
};

/* harmony default export */ var u_tree_view_vue = ({
    name: 'u-tree-view',
    childName: 'u-tree-view-node',
    mixins: [src_u_field_vue],
    props: {
        data: Array,
        value: null,
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        checkable: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data: function data() {
        return {
            ChildComponent: this.$options.childName, // easy for SubComponent inheriting
            nodeVMs: [],
            selectedVM: undefined
        };
    },

    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value: function value(_value, oldValue) {
            this.watchValue(_value);
        },
        selectedVM: function selectedVM(_selectedVM, oldVM) {
            this.$emit('change', {
                value: _selectedVM ? _selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                item: _selectedVM ? _selectedVM.item : undefined,
                itemVM: _selectedVM
            });
        },

        // This method just run once after pushing many nodeVMs
        nodeVMs: function nodeVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        }
    },
    created: function created() {
        var _this = this;

        this.$on('add-node-vm', function (nodeVM) {
            nodeVM.rootVM = _this;
            _this.nodeVMs.push(nodeVM);
        });
        this.$on('remove-node-vm', function (nodeVM) {
            nodeVM.rootVM = undefined;
            _this.nodeVMs.splice(_this.nodeVMs.indexOf(nodeVM), 1);
        });
        // @TODO: Suggest to add a nextTick option in Vue.js
        // Must trigger `value` watcher at next tick.
        // If not, nodeVMs have not been pushed.
        this.$nextTick(function () {
            return _this.watchValue(_this.value);
        });
    },

    methods: {
        watchValue: function watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value) return;
            if (value === undefined) this.selectedVM = undefined;else {
                this.selectedVM = find(this, function (nodeVM) {
                    return nodeVM.value === value;
                });
                if (this.selectedVM) {
                    var nodeVM = this.selectedVM.parentVM;
                    while (nodeVM !== this.rootVM) {
                        nodeVM.currentExpanded = true;
                        nodeVM = nodeVM.parentVM;
                    }
                }
            }
        },
        select: function select(nodeVM) {
            if (this.readonly || this.disabled) return;

            var oldValue = this.value;

            var cancel = false;
            this.$emit('before-select', {
                value: nodeVM && nodeVM.value,
                oldValue: oldValue,
                node: nodeVM && nodeVM.node,
                nodeVM: nodeVM,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            if (this.cancelable && this.selectedVM === nodeVM) this.selectedVM = undefined;else this.selectedVM = nodeVM;

            var value = this.selectedVM && this.selectedVM.value;
            var node = this.selectedVM && this.selectedVM.node;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('select', {
                value: value,
                oldValue: oldValue,
                node: node,
                nodeVM: this.selectedVM
            });
        },
        onToggle: function onToggle(nodeVM, expanded) {
            this.$emit('toggle', {
                expanded: expanded,
                node: nodeVM.node,
                nodeVM: nodeVM
            });
        },
        toggleAll: function toggleAll(expanded) {
            walk(this, function (nodeVM) {
                return nodeVM.toggle(expanded);
            });
        },
        onCheck: function onCheck(nodeVM, checked, oldChecked) {
            this.$emit('check', {
                checked: checked,
                oldChecked: oldChecked,
                node: nodeVM.node,
                nodeVM: nodeVM
            });
        },
        checkAll: function checkAll(checked) {
            this.nodeVMs.forEach(function (nodeVM) {
                return nodeVM.check(checked);
            });
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-8be342c6","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-tree-view.vue/index.html
var u_tree_view_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"readonly":_vm.readonly,"disabled":_vm.disabled}},[_vm._l((_vm.data),function(node){return (_vm.data)?_c(_vm.ChildComponent,{key:node.key,tag:"component",attrs:{"text":node[_vm.field],"value":node.value,"expanded":node.expanded,"checked":node.checked,"disabled":node.disabled,"data":node.children,"node":node},on:{"update:expanded":function($event){_vm.$set(node, "expanded", $event)},"update:checked":function($event){_vm.$set(node, "checked", $event)}}}):_vm._e()}),_vm._t("default")],2)}
var u_tree_view_vue_staticRenderFns = []
var u_tree_view_vue_esExports = { render: u_tree_view_vue_render, staticRenderFns: u_tree_view_vue_staticRenderFns }
/* harmony default export */ var src_u_tree_view_vue = (u_tree_view_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-tree-view.vue/index.js
var u_tree_view_vue_cssModules = {};
function u_tree_view_vue_injectStyle (ssrContext) {
u_tree_view_vue_cssModules['$style'] = __webpack_require__(110);
  this['$style'] = u_tree_view_vue_cssModules['$style']

}
var u_tree_view_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_tree_view_vue___vue_template_functional__ = false
/* styles */
var u_tree_view_vue___vue_css__ = u_tree_view_vue_injectStyle
/* scopeId */
var u_tree_view_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tree_view_vue___vue_module_identifier__ = null
var u_tree_view_vue_Component = u_tree_view_vue_normalizeComponent(u_tree_view_vue, src_u_tree_view_vue, u_tree_view_vue___vue_template_functional__, u_tree_view_vue___vue_css__, u_tree_view_vue___vue_scopeId__, u_tree_view_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_tree_view_vue = (u_tree_view_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-tree-view-node.vue/index.js


/* harmony default export */ var u_tree_view_node_vue = ({
    name: 'u-tree-view-node',
    rootName: 'u-tree-view',
    mixins: [src_u_emitter_vue],
    props: {
        data: Array,
        text: String,
        value: null,
        expanded: { type: Boolean, default: false },
        checked: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        node: Object
    },
    data: function data() {
        return {
            nodeVMs: [],
            currentExpanded: this.expanded,
            currentChecked: this.checked,
            parentVM: undefined,
            rootVM: undefined
        };
    },

    computed: {
        selected: function selected() {
            return this.rootVM.selectedVM === this;
        }
    },
    watch: {
        expanded: function expanded(_expanded) {
            this.currentExpanded = _expanded;
        },
        checked: function checked(_checked) {
            this.currentChecked = _checked;
        }
    },
    created: function created() {
        var _this = this;

        this.dispatch(this.$options.name, 'add-node-vm', this);
        !this.parentVM && this.dispatch(this.$options.rootName, 'add-node-vm', this);

        this.$on('add-node-vm', function (nodeVM) {
            nodeVM.rootVM = _this.rootVM;
            nodeVM.parentVM = _this;
            _this.nodeVMs.push(nodeVM);
        });
        this.$on('remove-node-vm', function (nodeVM) {
            nodeVM.rootVM = undefined;
            nodeVM.parentVM = undefined;
            _this.nodeVMs.splice(_this.nodeVMs.indexOf(nodeVM), 1);
        });
    },
    destroyed: function destroyed() {
        this.dispatch(this.$options.rootName, 'remove-node-vm', this);
        this.dispatch(this.$options.name, 'remove-node-vm', this);
    },

    methods: {
        select: function select() {
            if (this.disabled || this.rootVM.readonly || this.rootVM.disabled) return;

            var cancel = false;
            this.$emit('before-select', {
                value: this.value,
                node: this.node,
                nodeVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.rootVM.select(this);
        },
        toggle: function toggle(expanded) {
            var _this2 = this;

            if (this.disabled || this.rootVM.readonly || this.rootVM.disabled) return;

            var oldExpanded = this.currentExpanded;

            if (expanded === undefined) expanded = !this.currentExpanded;

            if (expanded === oldExpanded) return;

            var cancel = false;
            this.$emit('before-toggle', {
                expanded: expanded,
                node: this.node,
                nodeVM: this,
                preventDefault: function preventDefault() {
                    return cancel = true;
                }
            });
            if (cancel) return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded);

            if (this.rootVM.accordion) {
                (this.parentVM || this.rootVM).nodeVMs.forEach(function (nodeVM) {
                    if (nodeVM !== _this2) {
                        nodeVM.currentExpanded = false;
                        nodeVM.$emit('update:expanded', false);
                    }
                });
            }

            this.$emit('toggle', {
                expanded: expanded,
                node: this.node,
                nodeVM: this
            });

            this.rootVM.onToggle(this, expanded);
        },
        check: function check(checked) {
            var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'up+down';

            var oldChecked = this.currentChecked;
            this.currentChecked = checked;
            this.$emit('update:checked', checked);

            // down
            if (direction.includes('down')) {
                this.nodeVMs.forEach(function (nodeVM) {
                    nodeVM.check(checked, 'down');
                });
            }

            // up
            var parentVM = this.parentVM;
            if (direction.includes('up') && parentVM) {
                var count = 0;
                parentVM.nodeVMs.forEach(function (nodeVM) {
                    if (nodeVM.currentChecked) count++;else if (nodeVM.currentChecked === null) count += 0.5;
                });

                if (count === 0) parentVM.check(false, 'up');else if (count === parentVM.nodeVMs.length) parentVM.check(true, 'up');else parentVM.check(null, 'up');
            }

            if (direction === 'up+down') {
                this.$emit('check', {
                    checked: checked,
                    oldChecked: oldChecked,
                    node: this.node,
                    nodeVM: this
                });

                this.rootVM.onCheck(this, checked, oldChecked);
            }
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-7539bc3c","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./node_modules/proto-ui.vusion/src/u-tree-view-node.vue/index.html
var u_tree_view_node_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{class:_vm.$style.item,attrs:{"selected":_vm.selected,"readonly":_vm.rootVM.readonly,"disabled":_vm.disabled || _vm.rootVM.disabled,"tabindex":_vm.disabled || _vm.rootVM.readonly || _vm.rootVM.disabled ? -1 : 0},on:{"click":function($event){_vm.select(), _vm.rootVM.expandTrigger === 'click' && _vm.toggle()},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.select()},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key)){ return null; }if('button' in $event && $event.button !== 0){ return null; }_vm.toggle(false)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key)){ return null; }if('button' in $event && $event.button !== 2){ return null; }_vm.toggle(true)}]}},[_c('div',{class:_vm.$style.back}),(_vm.data || _vm.nodeVMs.length)?_c('div',{class:_vm.$style.expander,attrs:{"expanded":_vm.currentExpanded},on:{"click":function($event){_vm.rootVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), _vm.toggle())}}}):_vm._e(),_c('div',{class:_vm.$style.text},[(_vm.rootVM.checkable)?_c('u-checkbox',{attrs:{"value":_vm.currentChecked},on:{"check":function($event){_vm.check($event.value)}},nativeOn:{"click":function($event){$event.stopPropagation();}}}):_vm._e(),_c('u-tree-view-text',{attrs:{"data":_vm.data,"text":_vm.text,"value":_vm.value,"expanded":_vm.currentExpanded,"checked":_vm.currentChecked,"disabled":_vm.disabled,"node":_vm.node}})],1)]),_c('u-collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentExpanded),expression:"currentExpanded"}],class:_vm.$style.list},[_vm._l((_vm.data),function(node){return (_vm.data)?_c('u-tree-view-node',{key:node.key,attrs:{"text":node[_vm.rootVM.field],"value":node.value,"expanded":node.expanded,"checked":node.checked,"disabled":node.disabled,"data":node.children,"node":node},on:{"update:expanded":function($event){_vm.$set(node, "expanded", $event)},"update:checked":function($event){_vm.$set(node, "checked", $event)}}}):_vm._e()}),_vm._t("default")],2)])],1)}
var u_tree_view_node_vue_staticRenderFns = []
var u_tree_view_node_vue_esExports = { render: u_tree_view_node_vue_render, staticRenderFns: u_tree_view_node_vue_staticRenderFns }
/* harmony default export */ var src_u_tree_view_node_vue = (u_tree_view_node_vue_esExports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-tree-view-node.vue/index.js
var u_tree_view_node_vue_cssModules = {};
function u_tree_view_node_vue_injectStyle (ssrContext) {
u_tree_view_node_vue_cssModules['$style'] = __webpack_require__(112);
  this['$style'] = u_tree_view_node_vue_cssModules['$style']

}
var u_tree_view_node_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_tree_view_node_vue___vue_template_functional__ = false
/* styles */
var u_tree_view_node_vue___vue_css__ = u_tree_view_node_vue_injectStyle
/* scopeId */
var u_tree_view_node_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tree_view_node_vue___vue_module_identifier__ = null
var u_tree_view_node_vue_Component = u_tree_view_node_vue_normalizeComponent(u_tree_view_node_vue, src_u_tree_view_node_vue, u_tree_view_node_vue___vue_template_functional__, u_tree_view_node_vue___vue_css__, u_tree_view_node_vue___vue_scopeId__, u_tree_view_node_vue___vue_module_identifier__)
/* harmony default export */ var proto_ui_vusion_src_u_tree_view_node_vue = (u_tree_view_node_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./node_modules/proto-ui.vusion/src/u-tree-view-text.vue/index.js
/* harmony default export */ var u_tree_view_text_vue = ({
    name: 'u-tree-view-text',
    props: {
        data: Array,
        text: String,
        value: null,
        expanded: { type: Boolean, default: false },
        checked: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        node: Object
    },
    render: function render(h) {
        var rootVM = this.$parent.rootVM;
        if (rootVM.$scopedSlots.text) {
            return rootVM.$scopedSlots.text({
                data: this.data,
                text: this.text,
                value: this.value,
                expanded: this.expanded,
                checked: this.checked,
                disabled: this.disabled,
                node: this.node
            });
        } else if (rootVM.$slots.text) return rootVM.$slots.text[0];else return h('span', this.text);
    }
});
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/u-tree-view-text.vue/index.js
var u_tree_view_text_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_tree_view_text_vue___vue_html__ = null
/* template functional */
var u_tree_view_text_vue___vue_template_functional__ = false
/* styles */
var u_tree_view_text_vue___vue_css__ = null
/* scopeId */
var u_tree_view_text_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tree_view_text_vue___vue_module_identifier__ = null
var u_tree_view_text_vue_Component = u_tree_view_text_vue_normalizeComponent(u_tree_view_text_vue, u_tree_view_text_vue___vue_html__, u_tree_view_text_vue___vue_template_functional__, u_tree_view_text_vue___vue_css__, u_tree_view_text_vue___vue_scopeId__, u_tree_view_text_vue___vue_module_identifier__)
/* harmony default export */ var src_u_tree_view_text_vue = (u_tree_view_text_vue_Component.exports);
// CONCATENATED MODULE: ./node_modules/proto-ui.vusion/src/index.js



























































// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-combo-slider.vue/index.js


/* harmony default export */ var lib_src_u_combo_slider_vue = (proto_ui_vusion_src_u_combo_slider_vue);
// CONCATENATED MODULE: ./src/u-combo-slider.vue/index.js
var src_u_combo_slider_vue_cssModules = {};
function src_u_combo_slider_vue_injectStyle (ssrContext) {
src_u_combo_slider_vue_cssModules['$style'] = __webpack_require__(27);
  this['$style'] = src_u_combo_slider_vue_cssModules['$style']

}
var src_u_combo_slider_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_combo_slider_vue___vue_html__ = null
/* template functional */
var src_u_combo_slider_vue___vue_template_functional__ = false
/* styles */
var src_u_combo_slider_vue___vue_css__ = src_u_combo_slider_vue_injectStyle
/* scopeId */
var src_u_combo_slider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_combo_slider_vue___vue_module_identifier__ = null
var src_u_combo_slider_vue_Component = src_u_combo_slider_vue_normalizeComponent(lib_src_u_combo_slider_vue, u_combo_slider_vue___vue_html__, src_u_combo_slider_vue___vue_template_functional__, src_u_combo_slider_vue___vue_css__, src_u_combo_slider_vue___vue_scopeId__, src_u_combo_slider_vue___vue_module_identifier__)
/* harmony default export */ var src_u_combo_slider_vue_0 = (src_u_combo_slider_vue_Component.exports);
// EXTERNAL MODULE: ./node_modules/safer-eval/lib/browser.js
var browser = __webpack_require__(118);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-data-view-node.vue/index.js



const rawTypeRE = /^\[object (\w+)]$/;
const specialTypeRE = /^\[native \w+ (.*)\]$/;

const isPlainObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
const isPrimitive = data => {
    if (data === null || data === undefined) return true;
    const type = typeof data;
    return type === 'string' || type === 'number' || type === 'boolean';
};

/* harmony default export */ var u_data_view_node_vue = ({
    name: 'u-data-view-node',
    rootName: 'u-data-view',
    mixins: [src_u_emitter_vue],
    props: {
        property: String,
        value: null,
        expanded: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data() {
        return {
            currentExpanded: this.expanded,
            editing: false,
            currentValue: this.value,
            editingValue: '',
            nodeVMs: [],
            parentVM: undefined,
            rootVM: undefined,
            textareaStyle: {}
        };
    },
    computed: {
        valueType() {
            const type = typeof this.currentValue;

            if (this.currentValue === null || this.currentValue === undefined) return 'null';else if (type === 'boolean' || type === 'number' || this.currentValue === Infinity) return 'literal';else if (specialTypeRE.test(this.currentValue)) return 'native';else if (type === 'string' && !rawTypeRE.test(this.currentValue)) return 'string';
        },
        formattedValue() {
            const type = typeof this.currentValue;

            if (this.currentValue === null) return 'null';else if (this.currentValue === undefined) return 'undefined';else if (type === 'number' && isNaN(this.currentValue)) return 'NaN';else if (this.currentValue === Infinity) return 'Infinity';else if (Array.isArray(this.currentValue)) return 'Array[' + this.currentValue.length + ']';else if (isPlainObject(this.currentValue)) return 'Object' + (Object.keys(this.currentValue).length ? '' : ' (empty)');else if (this.currentValueType === 'native') return specialTypeRE.exec(this.currentValue)[1];else if (type === 'string') {
                const typeMatch = this.currentValue.match(rawTypeRE);
                if (typeMatch) return typeMatch[1];else return JSON.stringify(this.currentValue);
            } else if (type === 'function') return 'Function';else return this.currentValue;
        },
        keys() {
            if (Array.isArray(this.currentValue) || isPlainObject(this.currentValue)) return Object.keys(this.currentValue);
        }
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
        value(value) {
            this.currentValue = value;
        }
    },
    created() {
        this.dispatch(this.$options.name, 'add-node-vm', this);
        !this.parentVM && this.dispatch(this.$options.rootName, 'add-node-vm', this);

        this.$on('add-node-vm', nodeVM => {
            nodeVM.rootVM = this.rootVM;
            nodeVM.parentVM = this;
            this.nodeVMs.push(nodeVM);
        });
        this.$on('remove-node-vm', nodeVM => {
            nodeVM.rootVM = undefined;
            nodeVM.parentVM = undefined;
            this.nodeVMs.splice(this.nodeVMs.indexOf(nodeVM), 1);
        });
    },
    destroyed() {
        this.dispatch(this.$options.rootName, 'remove-node-vm', this);
        this.dispatch(this.$options.name, 'remove-node-vm', this);
    },
    methods: {
        toggle(expanded) {
            // if (this.disabled || this.rootVM.readonly || this.rootVM.disabled)
            //     return;

            const oldExpanded = this.currentExpanded;

            if (expanded === undefined) expanded = !this.currentExpanded;

            if (expanded === oldExpanded) return;

            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                // node: this.node,
                nodeVM: this,
                preventDefault: () => cancel = true
            });
            if (cancel) return;

            this.currentExpanded = expanded;

            this.$emit('update:expanded', expanded);
            this.$emit('toggle', {
                expanded,
                // node: this.node,
                nodeVM: this
            });

            // this.rootVM.toggle(this, expanded);
        },
        edit() {
            if (this.readonly || this.disabled) return;

            this.editing = true;

            // isPrimitive(this.currentValue) ? this.currentValue :
            this.editingValue = JSON.stringify(this.currentValue, (key, value) => {
                if (value === undefined) return '__vusion__undefined__';else if (typeof value === 'number' && isNaN(value)) return '__vusion__NaN__';else if (value === Infinity) return '__vusion__Infinity__';
                return value;
            }).replace(/"__vusion__undefined__"/g, 'undefined').replace(/"__vusion__NaN__"/g, 'NaN').replace(/"__vusion__Infinity__"/g, 'Infinity');

            this.$nextTick(() => {
                this.resizeTextarea(this.$refs.textarea);
                this.$refs.textarea.select();
            });
        },
        change() {
            this.editing = false;
            try {
                const newValue = browser_default()(this.editingValue);
                this.$emit('input', newValue);

                const $event = {
                    property: this.property,
                    oldValue: this.currentValue,
                    newValue,
                    nodeVM: this
                };
                this.$emit('change', $event);
                this.rootVM.change($event);
            } catch (e) {}
        },
        resizeTextarea(textareaEl) {
            textareaEl.style.width = '3px';
            textareaEl.style.height = '3px';
            textareaEl.style.width = textareaEl.scrollWidth - 3 + 'px';
            textareaEl.style.height = textareaEl.scrollHeight + 'px';
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-3bfddd01","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-data-view-node.vue/index.html
var u_data_view_node_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{class:_vm.$style.item,attrs:{"disabled":_vm.disabled}},[(_vm.keys)?_c('div',{class:_vm.$style.expander,attrs:{"expanded":_vm.currentExpanded},on:{"click":function($event){_vm.toggle()}}}):_vm._e(),(_vm.property)?_c('span',{class:_vm.$style.property,on:{"click":function($event){_vm.toggle()}}},[_vm._v(_vm._s(_vm.property))]):_vm._e(),(_vm.property)?_c('span',{class:_vm.$style.colon,on:{"click":function($event){_vm.toggle()}}},[_vm._v(": ")]):_vm._e(),_c('span',{class:_vm.$style.value},[_c('span',{class:_vm.$style.text,attrs:{"type":_vm.valueType,"editing":_vm.editing},on:{"dblclick":function($event){_vm.edit()}}},[_vm._v(_vm._s(_vm.formattedValue))]),(_vm.editing)?_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.editingValue),expression:"editingValue"}],ref:"textarea",class:_vm.$style.textarea,style:(_vm.textareaStyle),attrs:{"autofocus":""},domProps:{"value":(_vm.editingValue)},on:{"click":function($event){$event.stopPropagation();},"input":[function($event){if($event.target.composing){ return; }_vm.editingValue=$event.target.value},function($event){_vm.resizeTextarea($event.target)}],"blur":function($event){_vm.change()},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.change()}}}):_vm._e()])]),(_vm.currentExpanded)?_c('div',{class:_vm.$style.list},_vm._l((_vm.keys),function(subKey){return (_vm.keys)?_c('u-data-view-node',{key:subKey,attrs:{"property":subKey,"readonly":_vm.readonly,"disabled":_vm.disabled},model:{value:(_vm.currentValue[subKey]),callback:function ($$v) {_vm.$set(_vm.currentValue, subKey, $$v)},expression:"currentValue[subKey]"}}):_vm._e()})):_vm._e(),_vm._t("default")],2)}
var u_data_view_node_vue_staticRenderFns = []
var u_data_view_node_vue_esExports = { render: u_data_view_node_vue_render, staticRenderFns: u_data_view_node_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_3bfddd01___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_data_view_node_vue = (u_data_view_node_vue_esExports);
// CONCATENATED MODULE: ./src/u-data-view-node.vue/index.js
var u_data_view_node_vue_cssModules = {};
function u_data_view_node_vue_injectStyle (ssrContext) {
u_data_view_node_vue_cssModules['$style'] = __webpack_require__(116);
  this['$style'] = u_data_view_node_vue_cssModules['$style']

}
var u_data_view_node_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_data_view_node_vue___vue_template_functional__ = false
/* styles */
var u_data_view_node_vue___vue_css__ = u_data_view_node_vue_injectStyle
/* scopeId */
var u_data_view_node_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_data_view_node_vue___vue_module_identifier__ = null
var u_data_view_node_vue_Component = u_data_view_node_vue_normalizeComponent(u_data_view_node_vue, template_compiler___id___data_v_3bfddd01___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_data_view_node_vue, u_data_view_node_vue___vue_template_functional__, u_data_view_node_vue___vue_css__, u_data_view_node_vue___vue_scopeId__, u_data_view_node_vue___vue_module_identifier__)
/* harmony default export */ var src_u_data_view_node_vue = (u_data_view_node_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-data-view.vue/index.js


/* harmony default export */ var u_data_view_vue = ({
    name: 'u-data-view',
    childName: 'u-data-view-node',
    mixins: [src_u_data_view_node_vue],
    created() {
        this.$on('add-node-vm', nodeVM => {
            nodeVM.rootVM = this;
            this.nodeVMs.push(nodeVM);
        });
        this.$on('remove-node-vm', nodeVM => {
            nodeVM.rootVM = undefined;
            this.nodeVMs.splice(this.nodeVMs.indexOf(nodeVM), 1);
        });
    },
    methods: {
        change($event) {
            this.$emit('change', $event);
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-68a4ec1e","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-data-view.vue/index.html
var u_data_view_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._l((_vm.keys),function(subKey){return (_vm.keys)?_c('u-data-view-node',{key:subKey,attrs:{"property":subKey,"readonly":_vm.readonly,"disabled":_vm.disabled},model:{value:(_vm.value[subKey]),callback:function ($$v) {_vm.$set(_vm.value, subKey, $$v)},expression:"value[subKey]"}}):_vm._e()}),_vm._t("default")],2)}
var u_data_view_vue_staticRenderFns = []
var u_data_view_vue_esExports = { render: u_data_view_vue_render, staticRenderFns: u_data_view_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_68a4ec1e___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_data_view_vue = (u_data_view_vue_esExports);
// CONCATENATED MODULE: ./src/u-data-view.vue/index.js
var u_data_view_vue_cssModules = {};
function u_data_view_vue_injectStyle (ssrContext) {
u_data_view_vue_cssModules['$style'] = __webpack_require__(114);
  this['$style'] = u_data_view_vue_cssModules['$style']

}
var u_data_view_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_data_view_vue___vue_template_functional__ = false
/* styles */
var u_data_view_vue___vue_css__ = u_data_view_vue_injectStyle
/* scopeId */
var u_data_view_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_data_view_vue___vue_module_identifier__ = null
var u_data_view_vue_Component = u_data_view_vue_normalizeComponent(u_data_view_vue, template_compiler___id___data_v_68a4ec1e___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_data_view_vue, u_data_view_vue___vue_template_functional__, u_data_view_vue___vue_css__, u_data_view_vue___vue_scopeId__, u_data_view_vue___vue_module_identifier__)
/* harmony default export */ var src_u_data_view_vue = (u_data_view_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-input.vue/index.js


/* harmony default export */ var lib_src_u_input_vue = (proto_ui_vusion_src_u_input_vue);
// CONCATENATED MODULE: ./src/u-input.vue/index.js
var src_u_input_vue_cssModules = {};
function src_u_input_vue_injectStyle (ssrContext) {
src_u_input_vue_cssModules['$style'] = __webpack_require__(121);
  this['$style'] = src_u_input_vue_cssModules['$style']

}
var src_u_input_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_input_vue___vue_html__ = null
/* template functional */
var src_u_input_vue___vue_template_functional__ = false
/* styles */
var src_u_input_vue___vue_css__ = src_u_input_vue_injectStyle
/* scopeId */
var src_u_input_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_input_vue___vue_module_identifier__ = null
var src_u_input_vue_Component = src_u_input_vue_normalizeComponent(lib_src_u_input_vue, u_input_vue___vue_html__, src_u_input_vue___vue_template_functional__, src_u_input_vue___vue_css__, src_u_input_vue___vue_scopeId__, src_u_input_vue___vue_module_identifier__)
/* harmony default export */ var src_u_input_vue_0 = (src_u_input_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-label.vue/index.js
/* harmony default export */ var lib_src_u_label_vue = ({
    name: 'u-label',
    props: {
        title: String
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-ddbc45ac","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-label.vue/index.html
var template_compiler___id___data_v_ddbc45ac___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_label_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.$style.root},[_vm._t("default"),_c('div',{class:_vm.$style.title},[_vm._v(_vm._s(_vm.title))])],2)}
var template_compiler___id___data_v_ddbc45ac___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_label_vue_staticRenderFns = []
var template_compiler___id___data_v_ddbc45ac___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_label_vue_esExports = { render: template_compiler___id___data_v_ddbc45ac___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_label_vue_render, staticRenderFns: template_compiler___id___data_v_ddbc45ac___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_label_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_ddbc45ac___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_label_vue = (template_compiler___id___data_v_ddbc45ac___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_label_vue_esExports);
// CONCATENATED MODULE: ./src/u-label.vue/index.js
var src_u_label_vue_cssModules = {};
function src_u_label_vue_injectStyle (ssrContext) {
src_u_label_vue_cssModules['$style'] = __webpack_require__(123);
  this['$style'] = src_u_label_vue_cssModules['$style']

}
var src_u_label_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var src_u_label_vue___vue_template_functional__ = false
/* styles */
var src_u_label_vue___vue_css__ = src_u_label_vue_injectStyle
/* scopeId */
var src_u_label_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_label_vue___vue_module_identifier__ = null
var src_u_label_vue_Component = src_u_label_vue_normalizeComponent(lib_src_u_label_vue, template_compiler___id___data_v_ddbc45ac___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_label_vue, src_u_label_vue___vue_template_functional__, src_u_label_vue___vue_css__, src_u_label_vue___vue_scopeId__, src_u_label_vue___vue_module_identifier__)
/* harmony default export */ var src_u_label_vue_0 = (src_u_label_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-linear-layout.vue/index.js


/* harmony default export */ var lib_src_u_linear_layout_vue = (proto_ui_vusion_src_u_linear_layout_vue);
// CONCATENATED MODULE: ./src/u-linear-layout.vue/index.js
var src_u_linear_layout_vue_cssModules = {};
function src_u_linear_layout_vue_injectStyle (ssrContext) {
src_u_linear_layout_vue_cssModules['$style'] = __webpack_require__(125);
  this['$style'] = src_u_linear_layout_vue_cssModules['$style']

}
var src_u_linear_layout_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_linear_layout_vue___vue_html__ = null
/* template functional */
var src_u_linear_layout_vue___vue_template_functional__ = false
/* styles */
var src_u_linear_layout_vue___vue_css__ = src_u_linear_layout_vue_injectStyle
/* scopeId */
var src_u_linear_layout_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_linear_layout_vue___vue_module_identifier__ = null
var src_u_linear_layout_vue_Component = src_u_linear_layout_vue_normalizeComponent(lib_src_u_linear_layout_vue, u_linear_layout_vue___vue_html__, src_u_linear_layout_vue___vue_template_functional__, src_u_linear_layout_vue___vue_css__, src_u_linear_layout_vue___vue_scopeId__, src_u_linear_layout_vue___vue_module_identifier__)
/* harmony default export */ var src_u_linear_layout_vue_0 = (src_u_linear_layout_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-link.vue/index.js


/* harmony default export */ var lib_src_u_link_vue = (proto_ui_vusion_src_u_link_vue);
// CONCATENATED MODULE: ./src/u-link.vue/index.js
var src_u_link_vue_cssModules = {};
function src_u_link_vue_injectStyle (ssrContext) {
src_u_link_vue_cssModules['$style'] = __webpack_require__(127);
  this['$style'] = src_u_link_vue_cssModules['$style']

}
var src_u_link_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_link_vue___vue_html__ = null
/* template functional */
var src_u_link_vue___vue_template_functional__ = false
/* styles */
var src_u_link_vue___vue_css__ = src_u_link_vue_injectStyle
/* scopeId */
var src_u_link_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_link_vue___vue_module_identifier__ = null
var src_u_link_vue_Component = src_u_link_vue_normalizeComponent(lib_src_u_link_vue, u_link_vue___vue_html__, src_u_link_vue___vue_template_functional__, src_u_link_vue___vue_css__, src_u_link_vue___vue_scopeId__, src_u_link_vue___vue_module_identifier__)
/* harmony default export */ var src_u_link_vue_0 = (src_u_link_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-list-view.vue/index.js


/* harmony default export */ var lib_src_u_list_view_vue = (proto_ui_vusion_src_u_list_view_vue);
// CONCATENATED MODULE: ./src/u-list-view.vue/index.js
var src_u_list_view_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_list_view_vue___vue_html__ = null
/* template functional */
var src_u_list_view_vue___vue_template_functional__ = false
/* styles */
var src_u_list_view_vue___vue_css__ = null
/* scopeId */
var src_u_list_view_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_list_view_vue___vue_module_identifier__ = null
var src_u_list_view_vue_Component = src_u_list_view_vue_normalizeComponent(lib_src_u_list_view_vue, u_list_view_vue___vue_html__, src_u_list_view_vue___vue_template_functional__, src_u_list_view_vue___vue_css__, src_u_list_view_vue___vue_scopeId__, src_u_list_view_vue___vue_module_identifier__)
/* harmony default export */ var src_u_list_view_vue_0 = (src_u_list_view_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-list-view-group.vue/index.js


/* harmony default export */ var lib_src_u_list_view_group_vue = (proto_ui_vusion_src_u_list_view_group_vue);
// CONCATENATED MODULE: ./src/u-list-view-group.vue/index.js
var src_u_list_view_group_vue_cssModules = {};
function src_u_list_view_group_vue_injectStyle (ssrContext) {
src_u_list_view_group_vue_cssModules['$style'] = __webpack_require__(129);
  this['$style'] = src_u_list_view_group_vue_cssModules['$style']

}
var src_u_list_view_group_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_list_view_group_vue___vue_html__ = null
/* template functional */
var src_u_list_view_group_vue___vue_template_functional__ = false
/* styles */
var src_u_list_view_group_vue___vue_css__ = src_u_list_view_group_vue_injectStyle
/* scopeId */
var src_u_list_view_group_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_list_view_group_vue___vue_module_identifier__ = null
var src_u_list_view_group_vue_Component = src_u_list_view_group_vue_normalizeComponent(lib_src_u_list_view_group_vue, u_list_view_group_vue___vue_html__, src_u_list_view_group_vue___vue_template_functional__, src_u_list_view_group_vue___vue_css__, src_u_list_view_group_vue___vue_scopeId__, src_u_list_view_group_vue___vue_module_identifier__)
/* harmony default export */ var src_u_list_view_group_vue_0 = (src_u_list_view_group_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-list-view-item.vue/index.js


/* harmony default export */ var lib_src_u_list_view_item_vue = (proto_ui_vusion_src_u_list_view_item_vue);
// CONCATENATED MODULE: ./src/u-list-view-item.vue/index.js
var src_u_list_view_item_vue_cssModules = {};
function src_u_list_view_item_vue_injectStyle (ssrContext) {
src_u_list_view_item_vue_cssModules['$style'] = __webpack_require__(131);
  this['$style'] = src_u_list_view_item_vue_cssModules['$style']

}
var src_u_list_view_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_list_view_item_vue___vue_html__ = null
/* template functional */
var src_u_list_view_item_vue___vue_template_functional__ = false
/* styles */
var src_u_list_view_item_vue___vue_css__ = src_u_list_view_item_vue_injectStyle
/* scopeId */
var src_u_list_view_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_list_view_item_vue___vue_module_identifier__ = null
var src_u_list_view_item_vue_Component = src_u_list_view_item_vue_normalizeComponent(lib_src_u_list_view_item_vue, u_list_view_item_vue___vue_html__, src_u_list_view_item_vue___vue_template_functional__, src_u_list_view_item_vue___vue_css__, src_u_list_view_item_vue___vue_scopeId__, src_u_list_view_item_vue___vue_module_identifier__)
/* harmony default export */ var src_u_list_view_item_vue_0 = (src_u_list_view_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-number-input.vue/index.js


/* harmony default export */ var lib_src_u_number_input_vue = (proto_ui_vusion_src_u_number_input_vue);
// CONCATENATED MODULE: ./src/u-number-input.vue/index.js
var src_u_number_input_vue_cssModules = {};
function src_u_number_input_vue_injectStyle (ssrContext) {
src_u_number_input_vue_cssModules['$style'] = __webpack_require__(133);
  this['$style'] = src_u_number_input_vue_cssModules['$style']

}
var src_u_number_input_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_number_input_vue___vue_html__ = null
/* template functional */
var src_u_number_input_vue___vue_template_functional__ = false
/* styles */
var src_u_number_input_vue___vue_css__ = src_u_number_input_vue_injectStyle
/* scopeId */
var src_u_number_input_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_number_input_vue___vue_module_identifier__ = null
var src_u_number_input_vue_Component = src_u_number_input_vue_normalizeComponent(lib_src_u_number_input_vue, u_number_input_vue___vue_html__, src_u_number_input_vue___vue_template_functional__, src_u_number_input_vue___vue_css__, src_u_number_input_vue___vue_scopeId__, src_u_number_input_vue___vue_module_identifier__)
/* harmony default export */ var src_u_number_input_vue_0 = (src_u_number_input_vue_Component.exports);
// CONCATENATED MODULE: ./src/u-pallette.vue/Color.js
class Color {
    // r, g, b, a
    constructor(r = 0, g = 0, b = 0, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;

        // 将hsv也缓存下来好了，省事
        /* eslint-disable new-cap */
        Object.assign(this, Color.RGB2HSV(this.r, this.g, this.b));
    }

    toArray() {
        return [this.r, this.g, this.b, this.a];
    }

    // toString() {
    //     Just use default
    // }

    toHEX(alpha) {
        const fix = num => (num.length === 1 ? '0' + num : num).toUpperCase();

        return '#' + fix(this.r.toString(16)) + fix(this.g.toString(16)) + fix(this.b.toString(16));
    }

    getRGB() {
        return { r: this.r, g: this.g, b: this.b };
    }

    setRGB(r, g, b) {
        Object.assign(this, { r, g, b }, Color.RGB2HSV(r, g, b));
    }

    toRGB() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    toRGBA() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    getHSV() {
        /* eslint-disable new-cap */
        // return Color.RGB2HSV(this.r, this.g, this.b);
        return { h: this.h, s: this.s, v: this.v };
    }

    // toHSV()
    // CSS不支持，先不做了。其实就两句话的事

    setHSV(h, s, v) {
        Object.assign(this, { h, s, v }, Color.HSV2RGB(h, s, v));
    }

    getHSL() {
        /* eslint-disable new-cap */
        // const hsv = Color.RGB2HSV(this.r, this.g, this.b);
        return Color.HSV2HSL(this.h, this.s, this.v);
    }

    setHSL(h, s, l) {
        //
    }

    toHSL() {
        const hsl = this.getHSL();
        return `hsl(${hsl.h}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%)`;
    }

    toHSLA() {
        const hsl = this.getHSL();
        return `hsl(${hsl.h}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%, ${this.a})`;
    }

    static fromHEX(value) {
        value = value.trim().slice(1);
        if (value.length !== 6 && value.length !== 3) throw new SyntaxError('Unexpected length of hex number');else if (value.length === 3) value = `${value[0]}${value[0]}${value[1]}${value[1]}${value[2]}${value[2]}`;

        return new Color(parseInt(value.slice(0, 2), 16), parseInt(value.slice(2, 4), 16), parseInt(value.slice(4, 6), 16));
    }

    static fromRGB(value) {
        value = value.trim().slice(4, -1);
        const arr = value.split(',').map(num => +num);
        if (arr.length !== 4) throw new SyntaxError('Unexpected params of rgba function');

        return new Color(...arr);
    }

    static fromRGBA(value) {
        value = value.trim().slice(5, -1);
        const arr = value.split(',').map(num => +num);
        if (arr.length !== 4) throw new SyntaxError('Unexpected params of rgba function');

        return new Color(...arr);
    }

    /** @TODO: fromHSL */

    static parse(value) {
        value = value.trim();
        return Color['from' + this.checkFormat(value)](value);
    }

    static checkFormat(value) {
        if (value[0] === '#') return 'HEX';else if (value.startsWith('rgba(')) return 'RGBA';else if (value.startsWith('rgb(')) return 'RGB';else if (value.startsWith('hsla(')) return 'HSLA';else if (value.startsWith('hsl(')) return 'HSL';else return 'NAME';
    }

    /**
     * Converts an RGB color value to HSV. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
     *
     * @param   Number  r       The red, [0, 255]
     * @param   Number  g       The green, [0, 255]
     * @param   Number  b       The blue, [0, 255]
     * @return  Object          The HSV representation
     */
    static RGB2HSV(r, g, b) {
        r = r / 255;
        g = g / 255;
        b = b / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        let h;
        const v = max;
        const d = max - min;
        const s = max === 0 ? 0 : d / max;

        if (max === min) h = 0; // achromatic
        else {
                if (max === r) h = (g - b) / d + (g < b ? 6 : 0);else if (max === g) h = (b - r) / d + 2;else if (max === b) h = (r - g) / d + 4;
                h /= 6;
            }

        return { h: h * 360 >> 0, s: s * 100 >> 0, v: v * 100 >> 0 };
    }

    /**
     * Converts an HSV color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
     * returns r, g, and b in the set [0, 255].
     *
     * @param   Number  h       The hue, [0, 360]
     * @param   Number  s       The saturation, [0, 100]
     * @param   Number  v       The value, [0, 100]
     * @return  Object          The RGB representation
     */
    static HSV2RGB(h, s, v) {
        h = h / 360;
        s = s / 100;
        v = v / 100;

        let r, g, b;

        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);

        /* eslint-disable chai-friendly/no-unused-expressions, no-sequences */
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;break;
            case 1:
                r = q, g = v, b = p;break;
            case 2:
                r = p, g = v, b = t;break;
            case 3:
                r = p, g = q, b = v;break;
            case 4:
                r = t, g = p, b = v;break;
            case 5:
                r = v, g = p, b = q;break;
        }

        return { r: r * 255 >> 0, g: g * 255 >> 0, b: b * 255 >> 0 };
    }

    static HSV2HSL(h, s, v) {
        return {
            h,
            s: s * v / ((h = (2 - s) * v) < 1 ? h : 2 - h) >> 0 || 0,
            l: h / 2 >> 0
        };
    }

    static HSL2HSV(h, s, l) {
        s = s / 100;
        l = l / 100;
        let smin = s;
        const lmin = Math.max(l, 0.01);

        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        const v = (l + s) / 2;
        const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);

        return {
            h,
            s: sv * 100 >> 0,
            v: v * 100 >> 0
        };
    }
}

Color.TYPES = ['HEX', 'RGBA', 'RGB', 'HSLA', 'HSL', 'HSVA', 'HSV', 'NAME'];

/* harmony default export */ var u_pallette_vue_Color = (Color);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-pallette.vue/index.js



/* harmony default export */ var u_pallette_vue = ({
    name: 'u-pallette',
    mixins: [src_u_field_vue],
    props: {
        value: { type: String, default: '#000000' },
        // @TODO:
        format: { type: String, default: 'hex,rgba', validator: value => ['name,hex,rgba', 'name,hex,hsla', 'hex,rgba', 'hex,hsla', 'rgba', 'hsla'].includes(value.toLowerCase()) },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data() {
        return {
            color: u_pallette_vue_Color.parse(this.value),
            grid: { x: 1, y: 1 },
            handleEl: undefined
        };
    },
    computed: {
        hueColor() {
            const color = new u_pallette_vue_Color();
            color.setHSV(this.color.h, 100, 100);
            return color;
        }
    },
    watch: {
        value(value, oldValue) {
            const color = u_pallette_vue_Color.parse(this.value);
            if (color.toRGBA() === this.color.toRGBA()) return;

            this.color = color;
            this.handleEl.style.left = this.color.s + '%';
            this.handleEl.style.top = this.color.v + '%';

            this.$emit('change', {
                value,
                oldValue
            });
        }
    },
    mounted() {
        this.handleEl = this.$refs.handle;
        this.handleEl.style.left = this.color.s + '%';
        this.handleEl.style.top = this.color.v + '%';
    },
    methods: {
        onDrag($event) {
            this.color.setHSV(this.color.h, $event.left / $event.range.width * 100, (1 - $event.top / $event.range.height) * 100);
            this.onInput();
        },
        setHEX(hex) {
            const color = u_pallette_vue_Color.fromHEX(hex);
            this.color.setRGB(color.r, color.g, color.b);
        },
        setHue(hue) {
            this.color.setHSV(hue, this.color.s, this.color.v);
        },
        onInput() {
            let value;
            if (this.format === 'hex,rgba') {
                if (this.color.a) value = this.color.toHEX();else value = this.color.toRGBA();
            }

            this.$emit('input', value);
            this.$emit('update:value', value);
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-f294846a","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-pallette.vue/index.html
var u_pallette_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('u-dragger',{attrs:{"disabled":_vm.readonly || _vm.disabled,"transfer":_vm.handleEl,"immediate":"","range":"offset-parent","range-mode":"center"},on:{"dragstart":function($event){_vm.onDrag($event)},"drag":function($event){_vm.onDrag($event)}}},[_c('div',{class:_vm.$style.sv,style:({ background: _vm.hueColor.toRGB() })},[_c('div',{ref:"handle",class:_vm.$style.handle})])]),_c('div',{class:_vm.$style.bar},[_c('div',{class:_vm.$style.dropper}),_c('div',{class:_vm.$style.sliders},[_c('u-pallette-slider',{style:({ background: "linear-gradient(to right, red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)" }),attrs:{"min":0,"max":360,"value":_vm.color.h},on:{"input":function($event){_vm.setHue($event), _vm.onInput()}}}),_c('u-pallette-slider',{style:({ background: ("linear-gradient(to right, " + (("rgba(" + (_vm.color.r) + ", " + (_vm.color.g) + ", " + (_vm.color.b) + ", 0)")) + ", " + (_vm.color.toRGB()) + ")") }),attrs:{"min":0,"max":1,"step":0.01,"fixed":2},on:{"input":function($event){_vm.onInput()}},model:{value:(_vm.color.a),callback:function ($$v) {_vm.$set(_vm.color, "a", $$v)},expression:"color.a"}})],1),_c('div',{class:_vm.$style.color,style:({ backgroundColor: _vm.color.toRGBA() })})]),_c('div',{class:_vm.$style.inputs},[_c('u-label',{attrs:{"title":"Hex"}},[_c('u-input',{class:_vm.$style.input,attrs:{"role":"hex","value":_vm.color.toHEX()},on:{"input":function($event){_vm.setHEX($event), _vm.onInput()}}})],1),_c('u-label',{attrs:{"title":"R"}},[_c('u-number-input',{class:_vm.$style.input,attrs:{"min":0,"max":255,"value":_vm.color.r},on:{"input":function($event){_vm.color.setRGB($event, _vm.color.g, _vm.color.b), _vm.onInput()}}})],1),_c('u-label',{attrs:{"title":"G"}},[_c('u-number-input',{class:_vm.$style.input,attrs:{"min":0,"max":255,"value":_vm.color.g},on:{"input":function($event){_vm.color.setRGB(_vm.color.r, $event, _vm.color.b), _vm.onInput()}}})],1),_c('u-label',{attrs:{"title":"B"}},[_c('u-number-input',{class:_vm.$style.input,attrs:{"min":0,"max":255,"value":_vm.color.b},on:{"input":function($event){_vm.color.setRGB(_vm.color.r, _vm.color.g, $event), _vm.onInput()}}})],1),_c('u-label',{attrs:{"title":"A"}},[_c('u-number-input',{class:_vm.$style.input,attrs:{"min":0,"max":1,"step":0.1},on:{"input":function($event){_vm.onInput()}},model:{value:(_vm.color.a),callback:function ($$v) {_vm.$set(_vm.color, "a", $$v)},expression:"color.a"}})],1)],1)],1)}
var u_pallette_vue_staticRenderFns = []
var u_pallette_vue_esExports = { render: u_pallette_vue_render, staticRenderFns: u_pallette_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_f294846a___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_pallette_vue = (u_pallette_vue_esExports);
// CONCATENATED MODULE: ./src/u-pallette.vue/index.js
var u_pallette_vue_cssModules = {};
function u_pallette_vue_injectStyle (ssrContext) {
u_pallette_vue_cssModules['$style'] = __webpack_require__(135);
  this['$style'] = u_pallette_vue_cssModules['$style']

}
var u_pallette_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_pallette_vue___vue_template_functional__ = false
/* styles */
var u_pallette_vue___vue_css__ = u_pallette_vue_injectStyle
/* scopeId */
var u_pallette_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_pallette_vue___vue_module_identifier__ = null
var u_pallette_vue_Component = u_pallette_vue_normalizeComponent(u_pallette_vue, template_compiler___id___data_v_f294846a___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_pallette_vue, u_pallette_vue___vue_template_functional__, u_pallette_vue___vue_css__, u_pallette_vue___vue_scopeId__, u_pallette_vue___vue_module_identifier__)
/* harmony default export */ var src_u_pallette_vue = (u_pallette_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-slider.vue/index.js


/* harmony default export */ var lib_src_u_slider_vue = (proto_ui_vusion_src_u_slider_vue);
// CONCATENATED MODULE: ./src/u-slider.vue/index.js
var src_u_slider_vue_cssModules = {};
function src_u_slider_vue_injectStyle (ssrContext) {
src_u_slider_vue_cssModules['$style'] = __webpack_require__(139);
  this['$style'] = src_u_slider_vue_cssModules['$style']

}
var src_u_slider_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_slider_vue___vue_html__ = null
/* template functional */
var src_u_slider_vue___vue_template_functional__ = false
/* styles */
var src_u_slider_vue___vue_css__ = src_u_slider_vue_injectStyle
/* scopeId */
var src_u_slider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_slider_vue___vue_module_identifier__ = null
var src_u_slider_vue_Component = src_u_slider_vue_normalizeComponent(lib_src_u_slider_vue, u_slider_vue___vue_html__, src_u_slider_vue___vue_template_functional__, src_u_slider_vue___vue_css__, src_u_slider_vue___vue_scopeId__, src_u_slider_vue___vue_module_identifier__)
/* harmony default export */ var src_u_slider_vue_0 = (src_u_slider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-pallette-slider.vue/index.js


/* harmony default export */ var u_pallette_slider_vue = ({
    name: 'u-pallette-slider',
    mixins: [src_u_slider_vue_0]
});
// CONCATENATED MODULE: ./src/u-pallette-slider.vue/index.js
var u_pallette_slider_vue_cssModules = {};
function u_pallette_slider_vue_injectStyle (ssrContext) {
u_pallette_slider_vue_cssModules['$style'] = __webpack_require__(137);
  this['$style'] = u_pallette_slider_vue_cssModules['$style']

}
var u_pallette_slider_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_pallette_slider_vue___vue_html__ = null
/* template functional */
var u_pallette_slider_vue___vue_template_functional__ = false
/* styles */
var u_pallette_slider_vue___vue_css__ = u_pallette_slider_vue_injectStyle
/* scopeId */
var u_pallette_slider_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_pallette_slider_vue___vue_module_identifier__ = null
var u_pallette_slider_vue_Component = u_pallette_slider_vue_normalizeComponent(u_pallette_slider_vue, u_pallette_slider_vue___vue_html__, u_pallette_slider_vue___vue_template_functional__, u_pallette_slider_vue___vue_css__, u_pallette_slider_vue___vue_scopeId__, u_pallette_slider_vue___vue_module_identifier__)
/* harmony default export */ var src_u_pallette_slider_vue = (u_pallette_slider_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-pane.vue/index.js
/* harmony default export */ var u_pane_vue = ({
    name: 'u-pane',
    props: {
        title: String
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-1b3e9ebc","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-pane.vue/index.html
var u_pane_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[(_vm.title)?_c('div',{class:_vm.$style.head},[_vm._t("head",[_c('span',{class:_vm.$style.title},[_vm._v(_vm._s(_vm.title))]),_c('span',{class:_vm.$style.extra},[_vm._t("extra")],2)])],2):_vm._e(),_c('div',{class:_vm.$style.body},[_vm._t("default")],2),_c('div',{class:_vm.$style.foot},[_vm._t("foot")],2)])}
var u_pane_vue_staticRenderFns = []
var u_pane_vue_esExports = { render: u_pane_vue_render, staticRenderFns: u_pane_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_1b3e9ebc___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_pane_vue = (u_pane_vue_esExports);
// CONCATENATED MODULE: ./src/u-pane.vue/index.js
var u_pane_vue_cssModules = {};
function u_pane_vue_injectStyle (ssrContext) {
u_pane_vue_cssModules['$style'] = __webpack_require__(141);
  this['$style'] = u_pane_vue_cssModules['$style']

}
var u_pane_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_pane_vue___vue_template_functional__ = false
/* styles */
var u_pane_vue___vue_css__ = u_pane_vue_injectStyle
/* scopeId */
var u_pane_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_pane_vue___vue_module_identifier__ = null
var u_pane_vue_Component = u_pane_vue_normalizeComponent(u_pane_vue, template_compiler___id___data_v_1b3e9ebc___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_pane_vue, u_pane_vue___vue_template_functional__, u_pane_vue___vue_css__, u_pane_vue___vue_scopeId__, u_pane_vue___vue_module_identifier__)
/* harmony default export */ var src_u_pane_vue = (u_pane_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-pane-item.vue/index.js
/* harmony default export */ var u_pane_item_vue = ({
    name: 'u-pane-item',
    props: {
        label: String
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-2d09b0e4","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-pane-item.vue/index.html
var u_pane_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[(_vm.label)?_c('span',{class:_vm.$style.label},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('span',{class:_vm.$style.field},[_vm._t("default")],2)])}
var u_pane_item_vue_staticRenderFns = []
var u_pane_item_vue_esExports = { render: u_pane_item_vue_render, staticRenderFns: u_pane_item_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_2d09b0e4___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_pane_item_vue = (u_pane_item_vue_esExports);
// CONCATENATED MODULE: ./src/u-pane-item.vue/index.js
var u_pane_item_vue_cssModules = {};
function u_pane_item_vue_injectStyle (ssrContext) {
u_pane_item_vue_cssModules['$style'] = __webpack_require__(143);
  this['$style'] = u_pane_item_vue_cssModules['$style']

}
var u_pane_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_pane_item_vue___vue_template_functional__ = false
/* styles */
var u_pane_item_vue___vue_css__ = u_pane_item_vue_injectStyle
/* scopeId */
var u_pane_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_pane_item_vue___vue_module_identifier__ = null
var u_pane_item_vue_Component = u_pane_item_vue_normalizeComponent(u_pane_item_vue, template_compiler___id___data_v_2d09b0e4___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_pane_item_vue, u_pane_item_vue___vue_template_functional__, u_pane_item_vue___vue_css__, u_pane_item_vue___vue_scopeId__, u_pane_item_vue___vue_module_identifier__)
/* harmony default export */ var src_u_pane_item_vue = (u_pane_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-popover.vue/index.js
/* harmony default export */ var u_popover_vue = ({
    name: 'u-popover',
    props: {
        trigger: { type: String, default: 'click', validator: value => ['click', 'hover', 'right-click', 'double-click', 'manual'].includes(value) },
        open: { type: Boolean, default: false },
        placement: {
            type: String, default: 'bottom-start',
            validator: value => /^(top|bottom|left|right)(-start|-end)?$/.test(value)
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-18c08cdb","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-popover.vue/index.html
var u_popover_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-popper',{ref:"popper",attrs:{"trigger":_vm.trigger,"placement":_vm.placement,"open":_vm.open}},[_vm._t("default"),_c('div',{class:_vm.$style.body,attrs:{"slot":"popper"},slot:"popper"},[_c('span',{class:_vm.$style.arrow}),_vm._t("body")],2)],2)}
var u_popover_vue_staticRenderFns = []
var u_popover_vue_esExports = { render: u_popover_vue_render, staticRenderFns: u_popover_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_18c08cdb___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_popover_vue = (u_popover_vue_esExports);
// CONCATENATED MODULE: ./src/u-popover.vue/index.js
var u_popover_vue_cssModules = {};
function u_popover_vue_injectStyle (ssrContext) {
u_popover_vue_cssModules['$style'] = __webpack_require__(145);
  this['$style'] = u_popover_vue_cssModules['$style']

}
var u_popover_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_popover_vue___vue_template_functional__ = false
/* styles */
var u_popover_vue___vue_css__ = u_popover_vue_injectStyle
/* scopeId */
var u_popover_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_popover_vue___vue_module_identifier__ = null
var u_popover_vue_Component = u_popover_vue_normalizeComponent(u_popover_vue, template_compiler___id___data_v_18c08cdb___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_popover_vue, u_popover_vue___vue_template_functional__, u_popover_vue___vue_css__, u_popover_vue___vue_scopeId__, u_popover_vue___vue_module_identifier__)
/* harmony default export */ var src_u_popover_vue = (u_popover_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-ruler.vue/index.js
/* harmony default export */ var u_ruler_vue = ({
    name: 'u-ruler',
    props: {
        width: { type: Number, default: 200 },
        height: { type: Number, default: 200 },
        step: { type: Number, default: 10 }
    },
    computed: {
        scalesX() {
            const scales = [];
            for (let i = 0; i <= this.width; i += this.step) scales.push(i);
            return scales;
        },
        scalesY() {
            const scales = [];
            for (let i = 0; i <= this.height; i += this.step) scales.push(i);
            return scales;
        }
    },
    methods: {
        getSize(scale) {
            if (scale % (this.step * 10) === 0) return 'full';else if (scale % (this.step * 5) === 0) return 'large';else return 'normal';
        }
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-39a6d62c","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-ruler.vue/index.html
var u_ruler_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,style:({ width: _vm.width + 21 + 'px', height: _vm.height + 21 + 'px' })},[_c('div',{class:_vm.$style['axis-x']},_vm._l((_vm.scalesX),function(scale){return _c('div',{key:scale,class:_vm.$style['scale-x'],style:({ left: scale + 'px' }),attrs:{"size":_vm.getSize(scale)}},[(_vm.getSize(scale) === 'full')?_c('span',{class:_vm.$style['number-x']},[_vm._v(_vm._s(scale))]):_vm._e()])})),_c('div',{class:_vm.$style['axis-y']},_vm._l((_vm.scalesY),function(scale){return _c('div',{key:scale,class:_vm.$style['scale-y'],style:({ top: scale + 'px' }),attrs:{"size":_vm.getSize(scale)}},[(_vm.getSize(scale) === 'full')?_c('span',{class:_vm.$style['number-y']},[_vm._v(_vm._s(scale))]):_vm._e()])})),_c('div',{class:_vm.$style.corner}),_c('div',{class:_vm.$style.body},[_vm._t("default")],2)])}
var u_ruler_vue_staticRenderFns = []
var u_ruler_vue_esExports = { render: u_ruler_vue_render, staticRenderFns: u_ruler_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_39a6d62c___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_ruler_vue = (u_ruler_vue_esExports);
// CONCATENATED MODULE: ./src/u-ruler.vue/index.js
var u_ruler_vue_cssModules = {};
function u_ruler_vue_injectStyle (ssrContext) {
u_ruler_vue_cssModules['$style'] = __webpack_require__(147);
  this['$style'] = u_ruler_vue_cssModules['$style']

}
var u_ruler_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_ruler_vue___vue_template_functional__ = false
/* styles */
var u_ruler_vue___vue_css__ = u_ruler_vue_injectStyle
/* scopeId */
var u_ruler_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_ruler_vue___vue_module_identifier__ = null
var u_ruler_vue_Component = u_ruler_vue_normalizeComponent(u_ruler_vue, template_compiler___id___data_v_39a6d62c___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_ruler_vue, u_ruler_vue___vue_template_functional__, u_ruler_vue___vue_css__, u_ruler_vue___vue_scopeId__, u_ruler_vue___vue_module_identifier__)
/* harmony default export */ var src_u_ruler_vue = (u_ruler_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-select.vue/index.js
/* harmony default export */ var lib_src_u_select_vue = ({
    name: 'u-select'
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-d5511094","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-select.vue/index.html
var template_compiler___id___data_v_d5511094___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('select',{class:_vm.$style.root},[_vm._t("default")],2)}
var template_compiler___id___data_v_d5511094___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_vue_staticRenderFns = []
var template_compiler___id___data_v_d5511094___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_vue_esExports = { render: template_compiler___id___data_v_d5511094___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_vue_render, staticRenderFns: template_compiler___id___data_v_d5511094___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_d5511094___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_vue = (template_compiler___id___data_v_d5511094___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_vue_esExports);
// CONCATENATED MODULE: ./src/u-select.vue/index.js
var src_u_select_vue_cssModules = {};
function src_u_select_vue_injectStyle (ssrContext) {
src_u_select_vue_cssModules['$style'] = __webpack_require__(149);
  this['$style'] = src_u_select_vue_cssModules['$style']

}
var src_u_select_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var src_u_select_vue___vue_template_functional__ = false
/* styles */
var src_u_select_vue___vue_css__ = src_u_select_vue_injectStyle
/* scopeId */
var src_u_select_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_select_vue___vue_module_identifier__ = null
var src_u_select_vue_Component = src_u_select_vue_normalizeComponent(lib_src_u_select_vue, template_compiler___id___data_v_d5511094___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_vue, src_u_select_vue___vue_template_functional__, src_u_select_vue___vue_css__, src_u_select_vue___vue_scopeId__, src_u_select_vue___vue_module_identifier__)
/* harmony default export */ var src_u_select_vue_0 = (src_u_select_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-select-item.vue/index.js
/* harmony default export */ var lib_src_u_select_item_vue = ({
    name: 'u-select-item'
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-66c9acfa","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-select-item.vue/index.html
var u_select_item_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('option',{class:_vm.$style.root},[_vm._t("default")],2)}
var u_select_item_vue_staticRenderFns = []
var u_select_item_vue_esExports = { render: u_select_item_vue_render, staticRenderFns: u_select_item_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_66c9acfa___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_item_vue = (u_select_item_vue_esExports);
// CONCATENATED MODULE: ./src/u-select-item.vue/index.js
var src_u_select_item_vue_cssModules = {};
function src_u_select_item_vue_injectStyle (ssrContext) {
src_u_select_item_vue_cssModules['$style'] = __webpack_require__(151);
  this['$style'] = src_u_select_item_vue_cssModules['$style']

}
var src_u_select_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var src_u_select_item_vue___vue_template_functional__ = false
/* styles */
var src_u_select_item_vue___vue_css__ = src_u_select_item_vue_injectStyle
/* scopeId */
var src_u_select_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_select_item_vue___vue_module_identifier__ = null
var src_u_select_item_vue_Component = src_u_select_item_vue_normalizeComponent(lib_src_u_select_item_vue, template_compiler___id___data_v_66c9acfa___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_select_item_vue, src_u_select_item_vue___vue_template_functional__, src_u_select_item_vue___vue_css__, src_u_select_item_vue___vue_scopeId__, src_u_select_item_vue___vue_module_identifier__)
/* harmony default export */ var src_u_select_item_vue_0 = (src_u_select_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-tab-view.vue/index.js


/* harmony default export */ var u_tab_view_vue = ({
    name: 'u-tab-view',
    childName: 'u-tab-view-item',
    mixins: [proto_ui_vusion_src_u_tabs_vue]
});
// CONCATENATED MODULE: ./src/u-tab-view.vue/index.js
var u_tab_view_vue_cssModules = {};
function u_tab_view_vue_injectStyle (ssrContext) {
u_tab_view_vue_cssModules['$style'] = __webpack_require__(153);
  this['$style'] = u_tab_view_vue_cssModules['$style']

}
var u_tab_view_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_tab_view_vue___vue_html__ = null
/* template functional */
var u_tab_view_vue___vue_template_functional__ = false
/* styles */
var u_tab_view_vue___vue_css__ = u_tab_view_vue_injectStyle
/* scopeId */
var u_tab_view_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tab_view_vue___vue_module_identifier__ = null
var u_tab_view_vue_Component = u_tab_view_vue_normalizeComponent(u_tab_view_vue, u_tab_view_vue___vue_html__, u_tab_view_vue___vue_template_functional__, u_tab_view_vue___vue_css__, u_tab_view_vue___vue_scopeId__, u_tab_view_vue___vue_module_identifier__)
/* harmony default export */ var src_u_tab_view_vue = (u_tab_view_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-tab-view-item.vue/index.js


/* harmony default export */ var u_tab_view_item_vue = ({
    name: 'u-tab-view-item',
    parentName: 'u-tab-view',
    mixins: [proto_ui_vusion_src_u_tab_vue]
});
// CONCATENATED MODULE: ./src/u-tab-view-item.vue/index.js
var u_tab_view_item_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_tab_view_item_vue___vue_html__ = null
/* template functional */
var u_tab_view_item_vue___vue_template_functional__ = false
/* styles */
var u_tab_view_item_vue___vue_css__ = null
/* scopeId */
var u_tab_view_item_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_tab_view_item_vue___vue_module_identifier__ = null
var u_tab_view_item_vue_Component = u_tab_view_item_vue_normalizeComponent(u_tab_view_item_vue, u_tab_view_item_vue___vue_html__, u_tab_view_item_vue___vue_template_functional__, u_tab_view_item_vue___vue_css__, u_tab_view_item_vue___vue_scopeId__, u_tab_view_item_vue___vue_module_identifier__)
/* harmony default export */ var src_u_tab_view_item_vue = (u_tab_view_item_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-tabs.vue/index.js


/* harmony default export */ var lib_src_u_tabs_vue = (proto_ui_vusion_src_u_tabs_vue);
// CONCATENATED MODULE: ./src/u-tabs.vue/index.js
var src_u_tabs_vue_cssModules = {};
function src_u_tabs_vue_injectStyle (ssrContext) {
src_u_tabs_vue_cssModules['$style'] = __webpack_require__(155);
  this['$style'] = src_u_tabs_vue_cssModules['$style']

}
var src_u_tabs_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_tabs_vue___vue_html__ = null
/* template functional */
var src_u_tabs_vue___vue_template_functional__ = false
/* styles */
var src_u_tabs_vue___vue_css__ = src_u_tabs_vue_injectStyle
/* scopeId */
var src_u_tabs_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_tabs_vue___vue_module_identifier__ = null
var src_u_tabs_vue_Component = src_u_tabs_vue_normalizeComponent(lib_src_u_tabs_vue, u_tabs_vue___vue_html__, src_u_tabs_vue___vue_template_functional__, src_u_tabs_vue___vue_css__, src_u_tabs_vue___vue_scopeId__, src_u_tabs_vue___vue_module_identifier__)
/* harmony default export */ var src_u_tabs_vue_0 = (src_u_tabs_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-titlebar.vue/index.js
/* harmony default export */ var u_titlebar_vue = ({
    name: 'u-titlebar',
    props: {
        title: String
    }
});
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-17086575","preserveWhitespace":false,"buble":{"transforms":{"stripWithFunctional":false}}}!./src/u-titlebar.vue/index.html
var u_titlebar_vue_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('div',{class:_vm.$style.title},[_vm._v(_vm._s(_vm.title))]),_c('div',{class:_vm.$style.body},[_vm._t("default")],2)])}
var u_titlebar_vue_staticRenderFns = []
var u_titlebar_vue_esExports = { render: u_titlebar_vue_render, staticRenderFns: u_titlebar_vue_staticRenderFns }
/* harmony default export */ var template_compiler___id___data_v_17086575___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_titlebar_vue = (u_titlebar_vue_esExports);
// CONCATENATED MODULE: ./src/u-titlebar.vue/index.js
var u_titlebar_vue_cssModules = {};
function u_titlebar_vue_injectStyle (ssrContext) {
u_titlebar_vue_cssModules['$style'] = __webpack_require__(157);
  this['$style'] = u_titlebar_vue_cssModules['$style']

}
var u_titlebar_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* template functional */
var u_titlebar_vue___vue_template_functional__ = false
/* styles */
var u_titlebar_vue___vue_css__ = u_titlebar_vue_injectStyle
/* scopeId */
var u_titlebar_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var u_titlebar_vue___vue_module_identifier__ = null
var u_titlebar_vue_Component = u_titlebar_vue_normalizeComponent(u_titlebar_vue, template_compiler___id___data_v_17086575___preserveWhitespace__false__buble____transforms____stripWithFunctional__false____src_u_titlebar_vue, u_titlebar_vue___vue_template_functional__, u_titlebar_vue___vue_css__, u_titlebar_vue___vue_scopeId__, u_titlebar_vue___vue_module_identifier__)
/* harmony default export */ var src_u_titlebar_vue = (u_titlebar_vue_Component.exports);
// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/babel-loader/lib!./src/u-tree-view-node.vue/index.js


/* harmony default export */ var lib_src_u_tree_view_node_vue = (proto_ui_vusion_src_u_tree_view_node_vue);
// CONCATENATED MODULE: ./src/u-tree-view-node.vue/index.js
var src_u_tree_view_node_vue_cssModules = {};
function src_u_tree_view_node_vue_injectStyle (ssrContext) {
src_u_tree_view_node_vue_cssModules['$style'] = __webpack_require__(159);
  this['$style'] = src_u_tree_view_node_vue_cssModules['$style']

}
var src_u_tree_view_node_vue_normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var u_tree_view_node_vue___vue_html__ = null
/* template functional */
var src_u_tree_view_node_vue___vue_template_functional__ = false
/* styles */
var src_u_tree_view_node_vue___vue_css__ = src_u_tree_view_node_vue_injectStyle
/* scopeId */
var src_u_tree_view_node_vue___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_u_tree_view_node_vue___vue_module_identifier__ = null
var src_u_tree_view_node_vue_Component = src_u_tree_view_node_vue_normalizeComponent(lib_src_u_tree_view_node_vue, u_tree_view_node_vue___vue_html__, src_u_tree_view_node_vue___vue_template_functional__, src_u_tree_view_node_vue___vue_css__, src_u_tree_view_node_vue___vue_scopeId__, src_u_tree_view_node_vue___vue_module_identifier__)
/* harmony default export */ var src_u_tree_view_node_vue_0 = (src_u_tree_view_node_vue_Component.exports);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Button", function() { return src_u_button_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Capsules", function() { return src_u_capsules_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Capsule", function() { return src_u_capsule_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Collapse", function() { return src_u_collapse_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return src_u_collapse_item_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return src_u_color_picker_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ComboSlider", function() { return src_u_combo_slider_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DataView", function() { return src_u_data_view_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DataViewNode", function() { return src_u_data_view_node_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Input", function() { return src_u_input_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Label", function() { return src_u_label_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "LinearLayout", function() { return src_u_linear_layout_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Link", function() { return src_u_link_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListView", function() { return src_u_list_view_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListViewGroup", function() { return src_u_list_view_group_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListViewItem", function() { return src_u_list_view_item_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NumberInput", function() { return src_u_number_input_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Pallette", function() { return src_u_pallette_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PalletteSlider", function() { return src_u_pallette_slider_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Pane", function() { return src_u_pane_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PaneItem", function() { return src_u_pane_item_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Popover", function() { return src_u_popover_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Ruler", function() { return src_u_ruler_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Select", function() { return src_u_select_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SelectItem", function() { return src_u_select_item_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Slider", function() { return src_u_slider_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabView", function() { return src_u_tab_view_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabViewItem", function() { return src_u_tab_view_item_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return src_u_tabs_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Titlebar", function() { return src_u_titlebar_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TreeViewNode", function() { return src_u_tree_view_node_vue_0; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CollapseTransition", function() { return src_u_collapse_transition_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListViewDivider", function() { return proto_ui_vusion_src_u_list_view_divider_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tab", function() { return proto_ui_vusion_src_u_tab_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TreeView", function() { return proto_ui_vusion_src_u_tree_view_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TreeViewText", function() { return src_u_tree_view_text_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Render", function() { return src_u_render_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Draggable", function() { return src_u_draggable_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Droppable", function() { return src_u_droppable_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Dragger", function() { return src_u_dragger_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GridLayout", function() { return proto_ui_vusion_src_u_grid_layout_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GridLayoutRow", function() { return proto_ui_vusion_src_u_grid_layout_row_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GridLayoutColumn", function() { return proto_ui_vusion_src_u_grid_layout_column_vue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Popper", function() { return src_u_popper_vue; });




































/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4fc626b8", content, true);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2oEqf5bIhhqPKKxU{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block}", ""]);

// exports
exports.locals = {
	"root": "_2oEqf5bIhhqPKKxU"
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d34a7fae", content, true);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1yyUcT6qvQm0jZ61{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border:1px solid #c5c5c5}", ""]);

// exports
exports.locals = {
	"root": "_1yyUcT6qvQm0jZ61"
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("b8799158", content, true);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3IolPDy-QBqqVyiI{display:inline-block;cursor:default}._3IolPDy-QBqqVyiI+._3IolPDy-QBqqVyiI{margin-left:-1px}._3D7Di64NnCQh691I{text-align:center}._1dxVxp2A41rVPbIf{color:#666;border:1px solid #d5d5d5;border-bottom-color:#bbb;background-image:-webkit-gradient(linear,left top,left bottom,from(#fdfdfd),to(#f0f0f0));background-image:-webkit-linear-gradient(top,#fdfdfd,#f0f0f0);background-image:-o-linear-gradient(top,#fdfdfd,#f0f0f0);background-image:linear-gradient(180deg,#fdfdfd,#f0f0f0);min-width:46px;padding:0 8px;height:24px;text-align:center}._1dxVxp2A41rVPbIf:active{-webkit-box-shadow:inset 0 1px .5px #ecebed;box-shadow:inset 0 1px .5px #ecebed;background-image:-webkit-gradient(linear,left top,left bottom,from(#e3e4e5),to(#d4d4d5));background-image:-webkit-linear-gradient(top,#e3e4e5,#d4d4d5);background-image:-o-linear-gradient(top,#e3e4e5,#d4d4d5);background-image:linear-gradient(180deg,#e3e4e5,#d4d4d5)}._1dxVxp2A41rVPbIf[selected]{position:relative;-webkit-box-shadow:none;box-shadow:none;background:#69696b;border-color:#686a6c;border-bottom:#606366;color:#fff}._3IolPDy-QBqqVyiI:first-child ._1dxVxp2A41rVPbIf{border-top-left-radius:4px;border-bottom-left-radius:4px}._3IolPDy-QBqqVyiI:last-child ._1dxVxp2A41rVPbIf{border-top-right-radius:4px;border-bottom-right-radius:4px}", ""]);

// exports
exports.locals = {
	"root": "_3IolPDy-QBqqVyiI",
	"title": "_3D7Di64NnCQh691I",
	"button": "_1dxVxp2A41rVPbIf"
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5faceeb5", content, true);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".CYueLLIFc_uXKUqH{cursor:default;padding:4px 12px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.CYueLLIFc_uXKUqH:hover{background:#eee}.CYueLLIFc_uXKUqH[readonly]{cursor:default;background:none}.CYueLLIFc_uXKUqH[selected]{background:#419bf9;color:#fff}.CYueLLIFc_uXKUqH[disabled]{cursor:not-allowed;background:none;color:#ccc}.CYueLLIFc_uXKUqH[selected][disabled]{background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "CYueLLIFc_uXKUqH"
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4d700a06", content, true);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1X6WZ99R78S6hf0k{position:relative;display:inline-block;border:1px solid #c5c5c5;border-radius:3px;vertical-align:-7px}._1FYc0qHJ1MF71aYY{display:block;width:26px;height:14px;margin:3px;border-radius:2px}.PCO6-ih2c8Rjh3HU[class]{border:none}", ""]);

// exports
exports.locals = {
	"root": "_1X6WZ99R78S6hf0k",
	"color": "_1FYc0qHJ1MF71aYY",
	"pallette": "PCO6-ih2c8Rjh3HU"
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3d6424c3", content, true);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1VFAnCqkq7cMp6C0{border:1px solid #c5c5c5}", ""]);

// exports
exports.locals = {
	"root": "_1VFAnCqkq7cMp6C0"
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8c9db8fa", content, true);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3IO5zo9ZYWJI6JGT{overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ZqRH4wRoyojKv_La{background:#eee;border-bottom:1px solid #c5c5c5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:2px 0;height:25px;overflow:hidden}._3NVKRK01LWtubKnH{float:left;display:inline-block;width:20px;height:20px;text-align:center}._3NVKRK01LWtubKnH:before{color:#6e6e6e;font:10px/20px Hiragino Sans GB,sans-serif;content:\"\\25B6\\FE0E\"}._3NVKRK01LWtubKnH[expanded]:before{content:\"\\25BC\"}._3IO5zo9ZYWJI6JGT[disabled] ._3NVKRK01LWtubKnH{color:#ccc}.dtk8opD_68-NZjtN{float:right;line-height:0}.CwpvqFpQjeCtpaka{overflow:auto;background:#fff;border-bottom:1px solid #c5c5c5}._3IO5zo9ZYWJI6JGT:last-child{margin-bottom:-1px}", ""]);

// exports
exports.locals = {
	"root": "_3IO5zo9ZYWJI6JGT",
	"head": "ZqRH4wRoyojKv_La",
	"expander": "_3NVKRK01LWtubKnH",
	"extra": "dtk8opD_68-NZjtN",
	"body": "CwpvqFpQjeCtpaka"
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d070c702", content, true);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2Or4cLrzImwPboSI[class]{display:inline-block;width:160px}._2xC9Y9XTEw62LB3X[class]{margin-left:10px;width:60px}._2Or4cLrzImwPboSI[class]{width:100px}._2xC9Y9XTEw62LB3X[class]{margin-left:8px;width:40px}", ""]);

// exports
exports.locals = {
	"root": "_2VUmd3-2ukW5huhV",
	"slider": "_2Or4cLrzImwPboSI",
	"input": "_2xC9Y9XTEw62LB3X"
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("66385bae", content, true);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._33cbwbq6McQaxZtv{position:relative;display:inline-block}.uYomIFWFC3Mg2EGg{display:inline-block;line-height:18px;min-width:18px;font-size:12px;padding:0 6px;border-radius:100px;background:#f55;color:#fff}._33cbwbq6McQaxZtv[corner] .uYomIFWFC3Mg2EGg{position:absolute;-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);right:0;top:-9px}._33cbwbq6McQaxZtv[dot] .uYomIFWFC3Mg2EGg{width:6px;height:6px;font-size:0;min-width:auto;padding:0;top:-3px}", ""]);

// exports
exports.locals = {
	"root": "_33cbwbq6McQaxZtv",
	"value": "uYomIFWFC3Mg2EGg"
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6ec542a1", content, true);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._29fKgqt-3rNRrr-v{padding:5px;background:#aaa;color:#fff;text-align:center;overflow:hidden}._29fKgqt-3rNRrr-v[size$=auto]{width:auto}._29fKgqt-3rNRrr-v[size^=auto]{height:auto}._29fKgqt-3rNRrr-v[size$=mini]{width:16px}._29fKgqt-3rNRrr-v[size^=mini]{height:16px}._29fKgqt-3rNRrr-v[size$=small]{width:32px}._29fKgqt-3rNRrr-v[size^=small]{height:32px}._29fKgqt-3rNRrr-v[size$=normal]{width:64px}._29fKgqt-3rNRrr-v[size^=normal]{height:64px}._29fKgqt-3rNRrr-v[size$=large]{width:128px}._29fKgqt-3rNRrr-v[size^=large]{height:128px}._29fKgqt-3rNRrr-v[color=primary]{background:#419bf9}._29fKgqt-3rNRrr-v[color=success]{background:$brand-success}._29fKgqt-3rNRrr-v[color=warning]{background:$brand-warning}._29fKgqt-3rNRrr-v[color=error]{background:#f55}._29fKgqt-3rNRrr-v[inline]{display:inline-block}", ""]);

// exports
exports.locals = {
	"root": "_29fKgqt-3rNRrr-v"
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("64d5b09f", content, true);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2OhSe756uf0mEUjZ{-webkit-appearance:none;margin:0;border:none;overflow:visible;font:inherit;text-transform:none;text-decoration:none;cursor:default;background:none;display:inline-block;text-align:center;padding:0 12px;height:20px;line-height:18px;background:#fff;color:#252525;border:1px solid #c5c5c5}._2OhSe756uf0mEUjZ:hover{text-decoration:none;color:#419bf9;border-color:#419bf9}._2OhSe756uf0mEUjZ:focus{outline:none;text-decoration:none}._2OhSe756uf0mEUjZ:active{background:#eee}._2OhSe756uf0mEUjZ[disabled]{cursor:not-allowed;background:#fff;border-color:#ccc;color:#ccc}", ""]);

// exports
exports.locals = {
	"root": "_2OhSe756uf0mEUjZ"
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0e445a69", content, true);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3n3oRakGWwzZw2Nl{color:#419bf9}._3n3oRakGWwzZw2Nl:hover{text-decoration:underline}._3n3oRakGWwzZw2Nl[disabled]{cursor:not-allowed;color:#ccc;text-decoration:none}", ""]);

// exports
exports.locals = {
	"root": "_3n3oRakGWwzZw2Nl"
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("ab11b3e6", content, true);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._4cu3gzhXcLqMjixx{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}._4cu3gzhXcLqMjixx:focus{outline:none}._4cu3gzhXcLqMjixx[disabled]{cursor:not-allowed;color:#ccc}._3NphvxOj_rpfHWO-{display:inline-block;width:18px;height:18px;line-height:16px;background:#fff;border:1px solid #c5c5c5;margin-right:5px;text-align:center}._3NphvxOj_rpfHWO-[status=false]:before{font-family:Devanagari MT,Gujarati MT,monospace;content:\"\\2713\";color:transparent}._3NphvxOj_rpfHWO-[status=true]:before{font-family:Devanagari MT,Gujarati MT,monospace;content:\"\\2713\";color:#419bf9}._3NphvxOj_rpfHWO-[status=null]:before{content:\"\\25A0\";color:#419bf9}._3NphvxOj_rpfHWO-[disabled]{background:#eee}", ""]);

// exports
exports.locals = {
	"root": "_4cu3gzhXcLqMjixx",
	"box": "_3NphvxOj_rpfHWO-"
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("dd9e956c", content, true);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".NYmfw9XhvgVueYy_{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._2eQTzRXGtrLTiMVO{margin-right:4px;margin-bottom:2px;vertical-align:middle}.NYmfw9XhvgVueYy_:focus{outline:none}.NYmfw9XhvgVueYy_[disabled]{color:#ccc;cursor:not-allowed}", ""]);

// exports
exports.locals = {
	"root": "NYmfw9XhvgVueYy_",
	"box": "_2eQTzRXGtrLTiMVO"
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("41151820", content, true);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3sdxrKAoaDH36S2L>*+*{margin-left:40px}", ""]);

// exports
exports.locals = {
	"root": "_3sdxrKAoaDH36S2L"
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("cae62478", content, true);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2iZbYjEtqdI95dVs{display:inline-block;position:relative;width:100px;height:100px}._1go9QfpUeSn5aTTd{width:100%;height:100%}.uO5rPB3Y-sZJ-mid{fill:none;stroke-width:6px;stroke:#eee}._1V5EwlFz2QpO-rRc{fill:none;stroke-width:6px;stroke:#419bf9;-webkit-transition:stroke .6s ease,stroke-dasharray .6s ease;-o-transition:stroke .6s ease,stroke-dasharray .6s ease;transition:stroke .6s ease,stroke-dasharray .6s ease}._2IpI1CanVrVsoSsU{position:absolute;top:0;left:0;right:0;text-align:center;line-height:100px;font-size:18px;color:#666}", ""]);

// exports
exports.locals = {
	"root": "_2iZbYjEtqdI95dVs",
	"svg": "_1go9QfpUeSn5aTTd",
	"track": "uO5rPB3Y-sZJ-mid",
	"trail": "_1V5EwlFz2QpO-rRc",
	"text": "_2IpI1CanVrVsoSsU"
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("160c1032", content, true);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3dCc2J2087Sy8cQr[class]{display:inline-block;width:160px}._1sj3F6MCEqKuP7Xl[class]{margin-left:10px;width:60px}", ""]);

// exports
exports.locals = {
	"root": "nVqrUmFXVVJntKbr",
	"slider": "_3dCc2J2087Sy8cQr",
	"input": "_1sj3F6MCEqKuP7Xl"
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("112edc42", content, true);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Q9e16kDx_3oksoYw[layout=block]>*+*{margin-top:20px}.Q9e16kDx_3oksoYw[layout=inline]>*{display:inline-block}.Q9e16kDx_3oksoYw[layout=inline]>*+*{margin-left:20px}", ""]);

// exports
exports.locals = {
	"root": "Q9e16kDx_3oksoYw"
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("bad2f94e", content, true);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2a_ukYgXLpUe8tm9{display:inline-block;padding-right:5px}._2a_ukYgXLpUe8tm9[required]:after{content:\"*\";color:#f55}.qxO0WLSCEbT8aULX{display:inline-block;position:relative}._3VBSMmR9CKjU6Z5p{margin-left:5px;padding:0 5px;background:#eee}._3VBSMmR9CKjU6Z5p[color=error]{background:#f55;color:#fff}._1isTYjraS6wDCTNW[placement=bottom] ._3VBSMmR9CKjU6Z5p{position:absolute;top:100%;left:0;margin-left:0}._1isTYjraS6wDCTNW[label-size$=normal] ._2a_ukYgXLpUe8tm9{width:80px}._1isTYjraS6wDCTNW[label-size$=normal] .qxO0WLSCEbT8aULX{max-width:calc(100% - 80px)}._1isTYjraS6wDCTNW[layout=block] .qxO0WLSCEbT8aULX{vertical-align:top}", ""]);

// exports
exports.locals = {
	"root": "_1isTYjraS6wDCTNW",
	"label": "_2a_ukYgXLpUe8tm9",
	"field": "qxO0WLSCEbT8aULX",
	"message": "_3VBSMmR9CKjU6Z5p"
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["async-validator"] = factory();else root["AsyncValidator"] = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 3);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {
        /* unused harmony export warning */
        /* harmony export (immutable) */__webpack_exports__["d"] = format;
        /* harmony export (immutable) */__webpack_exports__["e"] = isEmptyValue;
        /* unused harmony export isEmptyObject */
        /* harmony export (immutable) */__webpack_exports__["a"] = asyncMap;
        /* harmony export (immutable) */__webpack_exports__["b"] = complementError;
        /* harmony export (immutable) */__webpack_exports__["c"] = deepMerge;
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        var formatRegExp = /%[sdj%]/g;

        var warning = function warning() {};

        // don't print warning message when in production env or node runtime
        if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
          warning = function warning(type, errors) {
            if (typeof console !== 'undefined' && console.warn) {
              if (errors.every(function (e) {
                return typeof e === 'string';
              })) {
                console.warn(type, errors);
              }
            }
          };
        }

        function format() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var i = 1;
          var f = args[0];
          var len = args.length;
          if (typeof f === 'function') {
            return f.apply(null, args.slice(1));
          }
          if (typeof f === 'string') {
            var str = String(f).replace(formatRegExp, function (x) {
              if (x === '%%') {
                return '%';
              }
              if (i >= len) {
                return x;
              }
              switch (x) {
                case '%s':
                  return String(args[i++]);
                case '%d':
                  return Number(args[i++]);
                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }
                  break;
                default:
                  return x;
              }
            });
            for (var arg = args[i]; i < len; arg = args[++i]) {
              str += ' ' + arg;
            }
            return str;
          }
          return f;
        }

        function isNativeStringType(type) {
          return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
        }

        function isEmptyValue(value, type) {
          if (value === undefined || value === null) {
            return true;
          }
          if (type === 'array' && Array.isArray(value) && !value.length) {
            return true;
          }
          if (isNativeStringType(type) && typeof value === 'string' && !value) {
            return true;
          }
          return false;
        }

        function isEmptyObject(obj) {
          return Object.keys(obj).length === 0;
        }

        function asyncParallelArray(arr, func, callback) {
          var results = [];
          var total = 0;
          var arrLength = arr.length;

          function count(errors) {
            results.push.apply(results, errors);
            total++;
            if (total === arrLength) {
              callback(results);
            }
          }

          arr.forEach(function (a) {
            func(a, count);
          });
        }

        function asyncSerialArray(arr, func, callback) {
          var index = 0;
          var arrLength = arr.length;

          function next(errors) {
            if (errors && errors.length) {
              callback(errors);
              return;
            }
            var original = index;
            index = index + 1;
            if (original < arrLength) {
              func(arr[original], next);
            } else {
              callback([]);
            }
          }

          next([]);
        }

        function flattenObjArr(objArr) {
          var ret = [];
          Object.keys(objArr).forEach(function (k) {
            ret.push.apply(ret, objArr[k]);
          });
          return ret;
        }

        function asyncMap(objArr, option, func, callback) {
          if (option.first) {
            var flattenArr = flattenObjArr(objArr);
            return asyncSerialArray(flattenArr, func, callback);
          }
          var firstFields = option.firstFields || [];
          if (firstFields === true) {
            firstFields = Object.keys(objArr);
          }
          var objArrKeys = Object.keys(objArr);
          var objArrLength = objArrKeys.length;
          var total = 0;
          var results = [];
          var next = function next(errors) {
            results.push.apply(results, errors);
            total++;
            if (total === objArrLength) {
              callback(results);
            }
          };
          objArrKeys.forEach(function (key) {
            var arr = objArr[key];
            if (firstFields.indexOf(key) !== -1) {
              asyncSerialArray(arr, func, next);
            } else {
              asyncParallelArray(arr, func, next);
            }
          });
        }

        function complementError(rule) {
          return function (oe) {
            if (oe && (typeof oe === 'undefined' ? 'undefined' : _typeof(oe)) === 'object') {
              oe.field = oe.field || rule.fullField;
              return oe;
            }
            return {
              message: typeof oe === 'string' ? oe : undefined,
              field: oe.field || rule.fullField
            };
          };
        }

        function deepMerge(target, source) {
          if (source) {
            for (var s in source) {
              if (source.hasOwnProperty(s)) {
                var value = source[s];
                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
                  target[s] = _extends({}, target[s], value);
                } else {
                  target[s] = value;
                }
              }
            }
          }
          return target;
        }
        /* WEBPACK VAR INJECTION */
      }).call(__webpack_exports__, __webpack_require__(5));

      /***/
    },
    /* 1 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__required__ = __webpack_require__(2);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__whitespace__ = __webpack_require__(8);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(9);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__(10);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__enum__ = __webpack_require__(11);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__pattern__ = __webpack_require__(12);

      /* harmony default export */__webpack_exports__["a"] = {
        required: __WEBPACK_IMPORTED_MODULE_0__required__["a" /* default */],
        whitespace: __WEBPACK_IMPORTED_MODULE_1__whitespace__["a" /* default */],
        type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
        range: __WEBPACK_IMPORTED_MODULE_3__range__["a" /* default */],
        enum: __WEBPACK_IMPORTED_MODULE_4__enum__["a" /* default */],
        pattern: __WEBPACK_IMPORTED_MODULE_5__pattern__["a" /* default */]
      };

      /***/
    },
    /* 2 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      /**
       *  Rule for validating required fields.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function required(rule, value, source, errors, options, type) {
        if (rule.required && (!source.hasOwnProperty(rule.field) || __WEBPACK_IMPORTED_MODULE_0__util__["e" /* isEmptyValue */](value, type || rule.type))) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.required, rule.fullField));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = required;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(4);

      /***/
    },
    /* 4 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__validator___ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(26);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      /**
       *  Encapsulates a validation schema.
       *
       *  @param descriptor An object declaring validation rules
       *  for this schema.
       */
      function Schema(descriptor) {
        this.rules = null;
        this._messages = __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* messages */];
        this.define(descriptor);
      }

      Schema.prototype = {
        messages: function messages(_messages) {
          if (_messages) {
            this._messages = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* deepMerge */])(Object(__WEBPACK_IMPORTED_MODULE_2__messages__["b" /* newMessages */])(), _messages);
          }
          return this._messages;
        },
        define: function define(rules) {
          if (!rules) {
            throw new Error('Cannot configure a schema with no rules');
          }
          if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
            throw new Error('Rules must be an object');
          }
          this.rules = {};
          var z = void 0;
          var item = void 0;
          for (z in rules) {
            if (rules.hasOwnProperty(z)) {
              item = rules[z];
              this.rules[z] = Array.isArray(item) ? item : [item];
            }
          }
        },
        validate: function validate(source_) {
          var _this = this;

          var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var oc = arguments[2];

          var source = source_;
          var options = o;
          var callback = oc;
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          if (!this.rules || Object.keys(this.rules).length === 0) {
            if (callback) {
              callback();
            }
            return;
          }
          function complete(results) {
            var i = void 0;
            var field = void 0;
            var errors = [];
            var fields = {};

            function add(e) {
              if (Array.isArray(e)) {
                errors = errors.concat.apply(errors, e);
              } else {
                errors.push(e);
              }
            }

            for (i = 0; i < results.length; i++) {
              add(results[i]);
            }
            if (!errors.length) {
              errors = null;
              fields = null;
            } else {
              for (i = 0; i < errors.length; i++) {
                field = errors[i].field;
                fields[field] = fields[field] || [];
                fields[field].push(errors[i]);
              }
            }
            callback(errors, fields);
          }

          if (options.messages) {
            var messages = this.messages();
            if (messages === __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* messages */]) {
              messages = Object(__WEBPACK_IMPORTED_MODULE_2__messages__["b" /* newMessages */])();
            }
            Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* deepMerge */])(messages, options.messages);
            options.messages = messages;
          } else {
            options.messages = this.messages();
          }
          var arr = void 0;
          var value = void 0;
          var series = {};
          var keys = options.keys || Object.keys(this.rules);
          keys.forEach(function (z) {
            arr = _this.rules[z];
            value = source[z];
            arr.forEach(function (r) {
              var rule = r;
              if (typeof rule.transform === 'function') {
                if (source === source_) {
                  source = _extends({}, source);
                }
                value = source[z] = rule.transform(value);
              }
              if (typeof rule === 'function') {
                rule = {
                  validator: rule
                };
              } else {
                rule = _extends({}, rule);
              }
              rule.validator = _this.getValidationMethod(rule);
              rule.field = z;
              rule.fullField = rule.fullField || z;
              rule.type = _this.getType(rule);
              if (!rule.validator) {
                return;
              }
              series[z] = series[z] || [];
              series[z].push({
                rule: rule,
                value: value,
                source: source,
                field: z
              });
            });
          });
          var errorFields = {};
          Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* asyncMap */])(series, options, function (data, doIt) {
            var rule = data.rule;
            var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
            deep = deep && (rule.required || !rule.required && data.value);
            rule.field = data.field;
            function addFullfield(key, schema) {
              return _extends({}, schema, {
                fullField: rule.fullField + '.' + key
              });
            }

            function cb() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

              var errors = e;
              if (!Array.isArray(errors)) {
                errors = [errors];
              }
              if (errors.length) {
                errors = errors.map(function (error) {
                  return true;
                });
              }
              if (errors.length && rule.message) {
                errors = [].concat(rule.message);
              }

              errors = errors.map(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* complementError */])(rule));

              if (options.first && errors.length) {
                errorFields[rule.field] = 1;
                return doIt(errors);
              }
              if (!deep) {
                doIt(errors);
              } else {
                // if rule is required but the target object
                // does not exist fail at the rule level and don't
                // go deeper
                if (rule.required && !data.value) {
                  if (rule.message) {
                    errors = [].concat(rule.message).map(Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* complementError */])(rule));
                  } else if (options.error) {
                    errors = [options.error(rule, Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */])(options.messages.required, rule.field))];
                  } else {
                    errors = [];
                  }
                  return doIt(errors);
                }

                var fieldsSchema = {};
                if (rule.defaultField) {
                  for (var k in data.value) {
                    if (data.value.hasOwnProperty(k)) {
                      fieldsSchema[k] = rule.defaultField;
                    }
                  }
                }
                fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
                for (var f in fieldsSchema) {
                  if (fieldsSchema.hasOwnProperty(f)) {
                    var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
                    fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
                  }
                }
                var schema = new Schema(fieldsSchema);
                schema.messages(options.messages);
                if (data.rule.options) {
                  data.rule.options.messages = options.messages;
                  data.rule.options.error = options.error;
                }
                schema.validate(data.value, data.rule.options || options, function (errs) {
                  doIt(errs && errs.length ? errors.concat(errs) : errs);
                });
              }
            }

            var res = rule.validator(rule, data.value, cb, data.source, options);
            if (res && res.then) {
              res.then(function () {
                return cb();
              }, function (e) {
                return cb(e);
              });
            }
          }, function (results) {
            complete(results);
          });
        },
        getType: function getType(rule) {
          if (rule.type === undefined && rule.pattern instanceof RegExp) {
            rule.type = 'pattern';
          }
          if (typeof rule.validator !== 'function' && rule.type && !__WEBPACK_IMPORTED_MODULE_1__validator___["a" /* default */].hasOwnProperty(rule.type)) {
            throw new Error(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */])('Unknown rule type %s', rule.type));
          }
          return rule.type || 'string';
        },
        getValidationMethod: function getValidationMethod(rule) {
          if (typeof rule.validator === 'function') {
            return rule.validator;
          }
          var keys = Object.keys(rule);
          var messageIndex = keys.indexOf('message');
          if (messageIndex !== -1) {
            keys.splice(messageIndex, 1);
          }
          if (keys.length === 1 && keys[0] === 'required') {
            return __WEBPACK_IMPORTED_MODULE_1__validator___["a" /* default */].required;
          }
          return __WEBPACK_IMPORTED_MODULE_1__validator___["a" /* default */][this.getType(rule)] || false;
        }
      };

      Schema.register = function register(type, validator) {
        if (typeof validator !== 'function') {
          throw new Error('Cannot register a validator by type, validator is not a function');
        }
        __WEBPACK_IMPORTED_MODULE_1__validator___["a" /* default */][type] = validator;
      };

      Schema.messages = __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* messages */];

      /* harmony default export */__webpack_exports__["default"] = Schema;

      /***/
    },
    /* 5 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(7);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__method__ = __webpack_require__(13);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(14);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__boolean__ = __webpack_require__(15);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__regexp__ = __webpack_require__(16);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__integer__ = __webpack_require__(17);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__float__ = __webpack_require__(18);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__array__ = __webpack_require__(19);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__object__ = __webpack_require__(20);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__enum__ = __webpack_require__(21);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__pattern__ = __webpack_require__(22);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__date__ = __webpack_require__(23);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__required__ = __webpack_require__(24);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__type__ = __webpack_require__(25);

      /* harmony default export */__webpack_exports__["a"] = {
        string: __WEBPACK_IMPORTED_MODULE_0__string__["a" /* default */],
        method: __WEBPACK_IMPORTED_MODULE_1__method__["a" /* default */],
        number: __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */],
        boolean: __WEBPACK_IMPORTED_MODULE_3__boolean__["a" /* default */],
        regexp: __WEBPACK_IMPORTED_MODULE_4__regexp__["a" /* default */],
        integer: __WEBPACK_IMPORTED_MODULE_5__integer__["a" /* default */],
        float: __WEBPACK_IMPORTED_MODULE_6__float__["a" /* default */],
        array: __WEBPACK_IMPORTED_MODULE_7__array__["a" /* default */],
        object: __WEBPACK_IMPORTED_MODULE_8__object__["a" /* default */],
        enum: __WEBPACK_IMPORTED_MODULE_9__enum__["a" /* default */],
        pattern: __WEBPACK_IMPORTED_MODULE_10__pattern__["a" /* default */],
        date: __WEBPACK_IMPORTED_MODULE_11__date__["a" /* default */],
        url: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
        hex: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
        email: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
        required: __WEBPACK_IMPORTED_MODULE_12__required__["a" /* default */]
      };

      /***/
    },
    /* 7 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Performs validation for string types.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function string(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string') && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, 'string');
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string')) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].pattern(rule, value, source, errors, options);
            if (rule.whitespace === true) {
              __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].whitespace(rule, value, source, errors, options);
            }
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = string;

      /***/
    },
    /* 8 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      /**
       *  Rule for validating whitespace.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function whitespace(rule, value, source, errors, options) {
        if (/^\s+$/.test(value) || value === '') {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.whitespace, rule.fullField));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = whitespace;

      /***/
    },
    /* 9 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__required__ = __webpack_require__(2);
      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      /* eslint max-len:0 */

      var pattern = {
        // http://emailregex.com/
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
      };

      var types = {
        integer: function integer(value) {
          return types.number(value) && parseInt(value, 10) === value;
        },
        float: function float(value) {
          return types.number(value) && !types.integer(value);
        },
        array: function array(value) {
          return Array.isArray(value);
        },
        regexp: function regexp(value) {
          if (value instanceof RegExp) {
            return true;
          }
          try {
            return !!new RegExp(value);
          } catch (e) {
            return false;
          }
        },
        date: function date(value) {
          return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
        },
        number: function number(value) {
          if (isNaN(value)) {
            return false;
          }
          return typeof value === 'number';
        },
        object: function object(value) {
          return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
        },
        method: function method(value) {
          return typeof value === 'function';
        },
        email: function email(value) {
          return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
        },
        url: function url(value) {
          return typeof value === 'string' && !!value.match(pattern.url);
        },
        hex: function hex(value) {
          return typeof value === 'string' && !!value.match(pattern.hex);
        }
      };

      /**
       *  Rule for validating the type of a value.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function type(rule, value, source, errors, options) {
        if (rule.required && value === undefined) {
          Object(__WEBPACK_IMPORTED_MODULE_1__required__["a" /* default */])(rule, value, source, errors, options);
          return;
        }
        var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
        var ruleType = rule.type;
        if (custom.indexOf(ruleType) > -1) {
          if (!types[ruleType](value)) {
            errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.types[ruleType], rule.fullField, rule.type));
          }
          // straight typeof check
        } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.types[ruleType], rule.fullField, rule.type));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = type;

      /***/
    },
    /* 10 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      /**
       *  Rule for validating minimum and maximum allowed values.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function range(rule, value, source, errors, options) {
        var len = typeof rule.len === 'number';
        var min = typeof rule.min === 'number';
        var max = typeof rule.max === 'number';
        var val = value;
        var key = null;
        var num = typeof value === 'number';
        var str = typeof value === 'string';
        var arr = Array.isArray(value);
        if (num) {
          key = 'number';
        } else if (str) {
          key = 'string';
        } else if (arr) {
          key = 'array';
        }
        // if the value is not of a supported type for range validation
        // the validation rule rule should use the
        // type property to also test for a particular type
        if (!key) {
          return false;
        }
        if (str || arr) {
          val = value.length;
        }
        if (len) {
          if (val !== rule.len) {
            errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].len, rule.fullField, rule.len));
          }
        } else if (min && !max && val < rule.min) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].min, rule.fullField, rule.min));
        } else if (max && !min && val > rule.max) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].max, rule.fullField, rule.max));
        } else if (min && max && (val < rule.min || val > rule.max)) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].range, rule.fullField, rule.min, rule.max));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = range;

      /***/
    },
    /* 11 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      var ENUM = 'enum';

      /**
       *  Rule for validating a value exists in an enumerable list.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function enumerable(rule, value, source, errors, options) {
        rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
        if (rule[ENUM].indexOf(value) === -1) {
          errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
        }
      }

      /* harmony default export */__webpack_exports__["a"] = enumerable;

      /***/
    },
    /* 12 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

      /**
       *  Rule for validating a regular expression pattern.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param source The source object being validated.
       *  @param errors An array of errors that this rule may add
       *  validation errors to.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function pattern(rule, value, source, errors, options) {
        if (rule.pattern) {
          if (rule.pattern instanceof RegExp) {
            // if a RegExp instance is passed, reset `lastIndex` in case its `global`
            // flag is accidentally set to `true`, which in a validation scenario
            // is not necessary and the result might be misleading
            rule.pattern.lastIndex = 0;
            if (!rule.pattern.test(value)) {
              errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
            }
          } else if (typeof rule.pattern === 'string') {
            var _pattern = new RegExp(rule.pattern);
            if (!_pattern.test(value)) {
              errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
            }
          }
        }
      }

      /* harmony default export */__webpack_exports__["a"] = pattern;

      /***/
    },
    /* 13 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a function.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function method(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = method;

      /***/
    },
    /* 14 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a number.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function number(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = number;

      /***/
    },
    /* 15 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__rule___ = __webpack_require__(1);

      /**
       *  Validates a boolean.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function boolean(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = boolean;

      /***/
    },
    /* 16 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates the regular expression type.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function regexp(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value)) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = regexp;

      /***/
    },
    /* 17 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a number is an integer.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function integer(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = integer;

      /***/
    },
    /* 18 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a number is a floating point number.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function floatFn(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = floatFn;

      /***/
    },
    /* 19 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates an array.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function array(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'array') && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, 'array');
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'array')) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = array;

      /***/
    },
    /* 20 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates an object.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function object(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value !== undefined) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = object;

      /***/
    },
    /* 21 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      var ENUM = 'enum';

      /**
       *  Validates an enumerable list.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function enumerable(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (value) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */][ENUM](rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = enumerable;

      /***/
    },
    /* 22 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      /**
       *  Validates a regular expression pattern.
       *
       *  Performs validation when a rule only contains
       *  a pattern property but is not declared as a string type.
       *
       *  @param rule The validation rule.
       *  @param value The value of the field on the source object.
       *  @param callback The callback function.
       *  @param source The source object being validated.
       *  @param options The validation options.
       *  @param options.messages The validation messages.
       */
      function pattern(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string') && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string')) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].pattern(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = pattern;

      /***/
    },
    /* 23 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      function date(rule, value, callback, source, options) {
        // console.log('integer rule called %j', rule);
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        // console.log('validate on %s value', value);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value)) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
            if (value) {
              __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value.getTime(), source, errors, options);
            }
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = date;

      /***/
    },
    /* 24 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      function required(rule, value, callback, source, options) {
        var errors = [];
        var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
        __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, type);
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = required;

      /***/
    },
    /* 25 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);

      function type(rule, value, callback, source, options) {
        var ruleType = rule.type;
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, ruleType) && !rule.required) {
            return callback();
          }
          __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, ruleType);
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, ruleType)) {
            __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      }

      /* harmony default export */__webpack_exports__["a"] = type;

      /***/
    },
    /* 26 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["b"] = newMessages;
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return messages;
      });
      function newMessages() {
        return {
          default: 'Validation error on field %s',
          required: '%s is required',
          enum: '%s must be one of %s',
          whitespace: '%s cannot be empty',
          date: {
            format: '%s date %s is invalid for format %s',
            parse: '%s date could not be parsed, %s is invalid ',
            invalid: '%s date %s is invalid'
          },
          types: {
            string: '%s is not a %s',
            method: '%s is not a %s (function)',
            array: '%s is not an %s',
            object: '%s is not an %s',
            number: '%s is not a %s',
            date: '%s is not a %s',
            boolean: '%s is not a %s',
            integer: '%s is not an %s',
            float: '%s is not a %s',
            regexp: '%s is not a valid %s',
            email: '%s is not a valid %s',
            url: '%s is not a valid %s',
            hex: '%s is not a valid %s'
          },
          string: {
            len: '%s must be exactly %s characters',
            min: '%s must be at least %s characters',
            max: '%s cannot be longer than %s characters',
            range: '%s must be between %s and %s characters'
          },
          number: {
            len: '%s must equal %s',
            min: '%s cannot be less than %s',
            max: '%s cannot be greater than %s',
            range: '%s must be between %s and %s'
          },
          array: {
            len: '%s must be exactly %s in length',
            min: '%s cannot be less than %s in length',
            max: '%s cannot be greater than %s in length',
            range: '%s must be between %s and %s in length'
          },
          pattern: {
            mismatch: '%s value %s does not match pattern %s'
          },
          clone: function clone() {
            var cloned = JSON.parse(JSON.stringify(this));
            cloned.clone = this.clone;
            return cloned;
          }
        };
      }

      var messages = newMessages();

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("25893c08", content, true);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".yVnsoIEWL98WMbA1{margin:-10px}.yVnsoIEWL98WMbA1 ._20ohRY5oIUSZOs3j{padding:10px}.yVnsoIEWL98WMbA1:after,.yVnsoIEWL98WMbA1:before{display:block;content:\".\";clear:both;height:0;visibility:hidden}.yVnsoIEWL98WMbA1[gap^=none]{margin-top:0;margin-bottom:0}.yVnsoIEWL98WMbA1[gap^=none] ._20ohRY5oIUSZOs3j{padding-top:0;padding-bottom:0}.yVnsoIEWL98WMbA1[gap$=none]{margin-left:0;margin-right:0}.yVnsoIEWL98WMbA1[gap$=none] ._20ohRY5oIUSZOs3j{padding-left:0;padding-right:0}.yVnsoIEWL98WMbA1[gap^=small]{margin-top:-5px;margin-bottom:-5px}.yVnsoIEWL98WMbA1[gap^=small] ._20ohRY5oIUSZOs3j{padding-top:5px;padding-bottom:5px}.yVnsoIEWL98WMbA1[gap$=small]{margin-left:-5px;margin-right:-5px}.yVnsoIEWL98WMbA1[gap$=small] ._20ohRY5oIUSZOs3j{padding-left:5px;padding-right:5px}.yVnsoIEWL98WMbA1[gap^=large]{margin-top:-15px;margin-bottom:-15px}.yVnsoIEWL98WMbA1[gap^=large] ._20ohRY5oIUSZOs3j{padding-top:15px;padding-bottom:15px}.yVnsoIEWL98WMbA1[gap$=large]{margin-left:-15px;margin-right:-15px}.yVnsoIEWL98WMbA1[gap$=large] ._20ohRY5oIUSZOs3j{padding-left:15px;padding-right:15px}", ""]);

// exports
exports.locals = {
	"root": "yVnsoIEWL98WMbA1",
	"column": "_20ohRY5oIUSZOs3j"
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("415b297c", content, true);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.i(__webpack_require__(5), undefined);

// module
exports.push([module.i, "._1MvW1WYjgR87Zrar{float:left;position:relative}", ""]);

// exports
exports.locals = {
	"root": "_1MvW1WYjgR87Zrar " + __webpack_require__(5).locals["column"] + ""
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("693036e6", content, true);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.i(__webpack_require__(6), undefined);

// module
exports.push([module.i, "._2Y3WQ0CsIijsqOl4:after,._2Y3WQ0CsIijsqOl4:before{display:block;content:\".\";clear:both;height:0;visibility:hidden}._2Y3WQ0CsIijsqOl4[type=flex]{display:-webkit-box;display:-ms-flexbox;display:flex}._2Y3WQ0CsIijsqOl4[justify=start]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}._2Y3WQ0CsIijsqOl4[justify=center]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}._2Y3WQ0CsIijsqOl4[justify=end]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}._2Y3WQ0CsIijsqOl4[justify=space-between]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._2Y3WQ0CsIijsqOl4[justify=space-around]{-ms-flex-pack:distribute;justify-content:space-around}._2Y3WQ0CsIijsqOl4[alignment=start]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}._2Y3WQ0CsIijsqOl4[alignment=center]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}._2Y3WQ0CsIijsqOl4[alignment=end]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}._2Y3WQ0CsIijsqOl4[alignment=baseline]{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}._2Y3WQ0CsIijsqOl4[alignment=stretch]{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}", ""]);

// exports
exports.locals = {
	"root": "_2Y3WQ0CsIijsqOl4 " + __webpack_require__(6).locals["row"] + ""
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("b1f44fba", content, true);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._28WbZHwOvC0G9Yq4[name=arrow-up]:before{content:\"\\F104\"}._28WbZHwOvC0G9Yq4[name=arrow-down]:before,._28WbZHwOvC0G9Yq4[name=arrow-up]:before{font-family:vusion-icon-font;font-style:normal;font-weight:400;font-variant:normal;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}._28WbZHwOvC0G9Yq4[name=arrow-down]:before{content:\"\\F105\"}._28WbZHwOvC0G9Yq4[name=arrow-left]:before{content:\"\\F106\"}._28WbZHwOvC0G9Yq4[name=arrow-left]:before,._28WbZHwOvC0G9Yq4[name=arrow-right]:before{font-family:vusion-icon-font;font-style:normal;font-weight:400;font-variant:normal;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}._28WbZHwOvC0G9Yq4[name=arrow-right]:before{content:\"\\F107\"}", ""]);

// exports
exports.locals = {
	"root": "_28WbZHwOvC0G9Yq4"
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("f06ea1be", content, true);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2U-iW8HZF8ZrkUkL{display:inline-block;position:relative;padding:0 8px;background:#fff;border:1px solid #c5c5c5;height:20px;width:100px;line-height:18px}._2U-iW8HZF8ZrkUkL:after{content:\"\\3000\";display:inline-block;vertical-align:middle;height:100%}.m9V0Hhod6gsMIeYR{position:absolute;left:0;top:0;margin:0;padding:inherit;width:100%;height:100%;font:inherit;color:inherit;line-height:inherit;background:inherit;border:none;border-radius:0;cursor:inherit}._2U-iW8HZF8ZrkUkL[focus]{outline:none;border-color:#419bf9}.m9V0Hhod6gsMIeYR:focus{outline:none}._2U-iW8HZF8ZrkUkL[color=error]{border-color:#f55}._2U-iW8HZF8ZrkUkL[disabled]{cursor:not-allowed;background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "_2U-iW8HZF8ZrkUkL",
	"input": "m9V0Hhod6gsMIeYR"
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("06c7e68a", content, true);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1L203Top-Cw4UvGA{padding:2px 6px;font-size:12px;background:#eee}._1L203Top-Cw4UvGA[color=primary]{color:#fff;background:#419bf9}", ""]);

// exports
exports.locals = {
	"root": "_1L203Top-Cw4UvGA"
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("69077cae", content, true);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._18ZomyIdd18eKY6f[direction=horizontal]>*+*{margin-left:20px}._18ZomyIdd18eKY6f[direction=vertical]>*+*{margin-top:20px}._18ZomyIdd18eKY6f[alignment=left]{text-align:left}._18ZomyIdd18eKY6f[alignment=center]{text-align:center}._18ZomyIdd18eKY6f[alignment=right]{text-align:right}._18ZomyIdd18eKY6f[justify=start]{text-align:left}._18ZomyIdd18eKY6f[justify=center]{text-align:center}._18ZomyIdd18eKY6f[justify=end]{text-align:right}._18ZomyIdd18eKY6f[type=flex]{display:-webkit-box;display:-ms-flexbox;display:flex;text-align:inherit}._18ZomyIdd18eKY6f[direction=vertical]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}._18ZomyIdd18eKY6f[justify=start]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}._18ZomyIdd18eKY6f[justify=center]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}._18ZomyIdd18eKY6f[justify=end]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}._18ZomyIdd18eKY6f[justify=space-between]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._18ZomyIdd18eKY6f[justify=space-around]{-ms-flex-pack:distribute;justify-content:space-around}._18ZomyIdd18eKY6f[alignment=start]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}._18ZomyIdd18eKY6f[alignment=center]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}._18ZomyIdd18eKY6f[alignment=end]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}._18ZomyIdd18eKY6f[alignment=baseline]{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}._18ZomyIdd18eKY6f[alignment=stretch]{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}", ""]);

// exports
exports.locals = {
	"root": "_18ZomyIdd18eKY6f"
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("315b203a", content, true);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2jVV0Ft53WsLCKAS{overflow:hidden;height:12px;line-height:12px;background:#eee}.aWGAhVNLA4CdV3OK{width:0;height:100%;float:left;background:#419bf9;font-size:12px;color:#fff;-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}", ""]);

// exports
exports.locals = {
	"root": "QO5KEYkyyzIUe1YR",
	"track": "_2jVV0Ft53WsLCKAS",
	"trail": "aWGAhVNLA4CdV3OK"
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0081569e", content, true);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1FULU4HrrgumrYu-{margin:9px 0;height:1px;background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "_1FULU4HrrgumrYu-"
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1885154d", content, true);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2lATRiRelyOgFSWt{position:relative}.kXRaAtWa3CQ3h_VY{padding:2px 4px;background:#ddd}._3REYYoyg99p7lH9F{overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}._3wPpQpwS9zPVFdtG{position:absolute;right:0;top:0;z-index:1;width:26px;height:26px;line-height:24px;text-align:center}._3wPpQpwS9zPVFdtG:before{content:\"\\25B8\"}._3wPpQpwS9zPVFdtG[expanded]:before{content:\"\\25BE\"}._2lATRiRelyOgFSWt[disabled] ._3wPpQpwS9zPVFdtG{color:#ccc}.VUCSqUna7jKnnWO5{float:right}", ""]);

// exports
exports.locals = {
	"root": "_2lATRiRelyOgFSWt",
	"head": "kXRaAtWa3CQ3h_VY",
	"text": "_3REYYoyg99p7lH9F",
	"body": "VH8qCzwT3mD-7fxT",
	"expander": "_3wPpQpwS9zPVFdtG",
	"extra": "VUCSqUna7jKnnWO5"
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("b2c59690", content, true);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2IugO89WIym8DFU-{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._2vsH4kUuZmUBr5z7{-webkit-box-flex:1;-ms-flex:auto;flex:auto;margin:0 50px}._2IugO89WIym8DFU-[alignment=center] ._2vsH4kUuZmUBr5z7{text-align:center}._2IugO89WIym8DFU-[alignment=right] ._2vsH4kUuZmUBr5z7{text-align:right}", ""]);

// exports
exports.locals = {
	"root": "_2IugO89WIym8DFU-",
	"left": "_1dsXMb2CITkDWNr7",
	"middle": "_2vsH4kUuZmUBr5z7",
	"right": "_1qsV7xl89KoWrqox"
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("f5f7aa18", content, true);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._10kpxEL0L1eLr6M_{display:inline-block;margin:0 30px;height:20px;width:1px;background:#ddd;vertical-align:-4px}", ""]);

// exports
exports.locals = {
	"root": "_10kpxEL0L1eLr6M_"
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2442a5b2", content, true);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3lrWBq-1x0eG_CBE{display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;text-align:center;font-size:16px;padding:0 4px;height:60px;line-height:60px}._3lrWBq-1x0eG_CBE+._3lrWBq-1x0eG_CBE{margin-left:30px}._3lrWBq-1x0eG_CBE:hover{color:#419bf9}._3lrWBq-1x0eG_CBE[readonly]{cursor:default}._3lrWBq-1x0eG_CBE[selected]{color:#419bf9}._3lrWBq-1x0eG_CBE[disabled]{cursor:not-allowed;color:#ccc}", ""]);

// exports
exports.locals = {
	"root": "_3lrWBq-1x0eG_CBE"
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("158d3c01", content, true);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2L0Z0_UGynwcoimL{position:absolute;right:1px;height:14px;line-height:14px;padding:0 4px;cursor:pointer;background:#eee}._2L0Z0_UGynwcoimL:hover{background:#ddd}._2L0Z0_UGynwcoimL:focus{outline:none}._2L0Z0_UGynwcoimL:active{background:#ccc}._2L0Z0_UGynwcoimL[role=up]{top:1px}._2L0Z0_UGynwcoimL[role=up]:before{font-family:vusion-icon-font;font-style:normal;font-weight:400;font-variant:normal;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;content:\"\\F102\"}._2L0Z0_UGynwcoimL[role=down]{bottom:1px}._2L0Z0_UGynwcoimL[role=down]:before{font-family:vusion-icon-font;font-style:normal;font-weight:400;font-variant:normal;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;content:\"\\F103\"}._3_Sgx2ruLDM6pllV[readonly] ._2L0Z0_UGynwcoimL{background:#eee;cursor:default}._3_Sgx2ruLDM6pllV[disabled] ._2L0Z0_UGynwcoimL{background:#eee;color:#ccc;cursor:not-allowed}", ""]);

// exports
exports.locals = {
	"root": "_3_Sgx2ruLDM6pllV",
	"button": "_2L0Z0_UGynwcoimL"
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a23486c6", content, true);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".pup1lSj6AHbWRX-Y{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:0}._1Mqrq5F62lhtpmr2{display:inline-block;text-decoration:none;padding:0 10px;min-width:32px;height:32px;line-height:32px;font-size:12px;text-align:center;background:#eee;color:#252525}._1Mqrq5F62lhtpmr2:hover{color:#419bf9}._1Mqrq5F62lhtpmr2[selected]{background:#419bf9;color:#fff}._1Mqrq5F62lhtpmr2[disabled]{cursor:not-allowed;color:#ccc}._1Mqrq5F62lhtpmr2[role=prev]:before{content:\"\\2039\"}._1Mqrq5F62lhtpmr2[role=next]:before{content:\"\\203A\"}._1Mqrq5F62lhtpmr2[role=blank]{background:none;color:#252525}.pup1lSj6AHbWRX-Y[disabled]{cursor:not-allowed}.pup1lSj6AHbWRX-Y[disabled] ._1Mqrq5F62lhtpmr2{color:#ccc}.pup1lSj6AHbWRX-Y[disabled] ._1Mqrq5F62lhtpmr2[selected]{background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "pup1lSj6AHbWRX-Y",
	"item": "_1Mqrq5F62lhtpmr2"
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE10$1() && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("914bd8fc", content, true);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3wtoiky-y-7ewLgb{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}._3wtoiky-y-7ewLgb:focus{outline:none}._3wtoiky-y-7ewLgb[disabled]{cursor:not-allowed;color:#ccc}._1jmKNT-ObG85VJB2{display:inline-block;width:18px;height:18px;border-radius:100px;line-height:16px;background:#fff;border:1px solid #c5c5c5;margin-right:5px;text-align:center}._1jmKNT-ObG85VJB2:before{display:inline-block;content:\"\\2713\";width:10px;height:10px;border-radius:100px;color:transparent;overflow:hidden}._1jmKNT-ObG85VJB2[selected]:before{background:#419bf9}._1jmKNT-ObG85VJB2[disabled]{background:#eee}", ""]);

// exports
exports.locals = {
	"root": "_3wtoiky-y-7ewLgb",
	"radio": "_1jmKNT-ObG85VJB2"
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("76859156", content, true);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".XMEdBZrgREbhHk-4{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.EPGMIynnZWVpD5Yu{margin-right:4px;margin-bottom:3px;vertical-align:middle}.XMEdBZrgREbhHk-4:focus{outline:none}.XMEdBZrgREbhHk-4[disabled]{color:#ccc;cursor:not-allowed}", ""]);

// exports
exports.locals = {
	"root": "XMEdBZrgREbhHk-4",
	"radio": "EPGMIynnZWVpD5Yu"
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2369e2b0", content, true);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3bSsNP6AF7xg5KC_>*+*{margin-left:40px}", ""]);

// exports
exports.locals = {
	"root": "_3bSsNP6AF7xg5KC_"
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a6869880", content, true);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".vlDAY35fWSiRIS04[color=primary]{color:#419bf9}", ""]);

// exports
exports.locals = {
	"root": "vlDAY35fWSiRIS04"
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2ab5199d", content, true);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".BPqrJaNYR7A8CTiC{display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;height:20px;padding:0 12px;background:#fff;border:1px solid #c5c5c5;width:100px;max-width:100%}.BPqrJaNYR7A8CTiC:before{content:\"\\3000\";letter-spacing:-20px;line-height:30px}.BPqrJaNYR7A8CTiC:after{position:absolute;content:\"\\25BE\";right:10px;top:0;line-height:28px}.BPqrJaNYR7A8CTiC[disabled]{cursor:not-allowed;background:#ddd}._1W9DwTtnlEhTQPZu{float:left;width:100%;line-height:30px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}._7tzfBRyM1rzaGPks{width:100px;max-height:180px;overflow:auto;background:#fff;border:1px solid #c5c5c5;z-index:1050}", ""]);

// exports
exports.locals = {
	"root": "BPqrJaNYR7A8CTiC",
	"text": "_1W9DwTtnlEhTQPZu",
	"popper": "_7tzfBRyM1rzaGPks"
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("63242c4e", content, true);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".KZq9lwbj-IfK4lO7{cursor:default;padding:4px 12px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.KZq9lwbj-IfK4lO7:hover{background:#eee}.KZq9lwbj-IfK4lO7[readonly]{cursor:default;background:none}.KZq9lwbj-IfK4lO7[selected]{background:#419bf9;color:#fff}.KZq9lwbj-IfK4lO7[disabled]{cursor:not-allowed;background:none;color:#ccc}.KZq9lwbj-IfK4lO7[selected][disabled]{background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "KZq9lwbj-IfK4lO7"
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1327dc64", content, true);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3yeoclcJual-kVY3{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:$sidebar-background-color}", ""]);

// exports
exports.locals = {
	"root": "_3yeoclcJual-kVY3"
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("f0cddafa", content, true);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2FhivVZ2pUcs9h0S{position:relative}._3czCoTbuoafLuACP{font-size:12px;color:#999;padding-left:10px;line-height:32px}._14_fXN04qkEg9EEn{overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}._1jZHbresj0HQ0jNQ{position:absolute;right:0;top:0;z-index:1;width:26px;height:26px;line-height:32px;text-align:center}._1jZHbresj0HQ0jNQ:before{content:\"\\25B8\"}._1jZHbresj0HQ0jNQ[expanded]:before{content:\"\\25BE\"}._2FhivVZ2pUcs9h0S[disabled] ._1jZHbresj0HQ0jNQ{color:#ccc}", ""]);

// exports
exports.locals = {
	"root": "_2FhivVZ2pUcs9h0S",
	"head": "_3czCoTbuoafLuACP",
	"text": "_14_fXN04qkEg9EEn",
	"expander": "_1jZHbresj0HQ0jNQ"
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1d336051", content, true);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".zEkNe5ya8KcIlonS{cursor:default;height:32px;line-height:32px;padding-left:20px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.zEkNe5ya8KcIlonS:hover{color:#419bf9}.zEkNe5ya8KcIlonS[readonly]{cursor:default}.zEkNe5ya8KcIlonS[selected]{background-color:#419bf9;color:#fff}.zEkNe5ya8KcIlonS[disabled]{cursor:not-allowed;background:none;color:#ccc}.zEkNe5ya8KcIlonS[selected][disabled]{background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "zEkNe5ya8KcIlonS"
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2ca8cc58", content, true);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2drFADMlZB1yESnv{vertical-align:1px}._2_OITHgl_7nJnb7k{position:relative;margin:0 10px;padding:6px 0}._1OXpyrN5Gj4aLf0Z{overflow:hidden;height:8px;background:#eee}._3EoVLlM5px9HDWC5{float:left;height:100%;background:#419bf9}._3pEVkesh5wxwg9iR{position:absolute;left:0;top:0;margin-left:-10px;width:20px;height:20px;background:#fff;border:1px solid #ddd;border-radius:100px}._2drFADMlZB1yESnv[disabled]{cursor:not-allowed}._2drFADMlZB1yESnv[disabled] ._3EoVLlM5px9HDWC5{background:#ccc}", ""]);

// exports
exports.locals = {
	"root": "_2drFADMlZB1yESnv",
	"body": "_2_OITHgl_7nJnb7k",
	"track": "_1OXpyrN5Gj4aLf0Z",
	"trail": "_3EoVLlM5px9HDWC5",
	"handle": "_3pEVkesh5wxwg9iR"
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("528fb6ee", content, true);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._129z7tLX5PNB0KBq{display:inline-block;position:relative;line-height:22px;height:22px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;width:44px;border-radius:100px;background:#c5c5c5;color:#fff}._129z7tLX5PNB0KBq:focus{outline:none}._3c-KUkbSWB9JUiok{position:absolute;left:2px;top:2px;border-radius:100px;width:18px;height:18px;background:#fff}._1UYqAB0d1wcrbYr6{display:block;text-align:right;margin:0 5px}._129z7tLX5PNB0KBq[checked]{background:#419bf9}._129z7tLX5PNB0KBq[checked] ._3c-KUkbSWB9JUiok{left:24px}._129z7tLX5PNB0KBq[checked] ._1UYqAB0d1wcrbYr6{text-align:left}._129z7tLX5PNB0KBq[width=wide]{width:54px}._129z7tLX5PNB0KBq[width=wide][checked] ._3c-KUkbSWB9JUiok{left:34px}._129z7tLX5PNB0KBq[disabled]{cursor:not-allowed;background:#eee}", ""]);

// exports
exports.locals = {
	"root": "_129z7tLX5PNB0KBq",
	"button": "_3c-KUkbSWB9JUiok",
	"text": "_1UYqAB0d1wcrbYr6"
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2429d2cf", content, true);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._19w3MgY9MILXQ_cY{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:32px;border-bottom:1px solid #c5c5c5}._3zMrdLiss4-V-jN6{cursor:default;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;height:30px;line-height:30px;padding:0 20px;border:1px solid transparent;border-bottom:none;margin-bottom:-1px}._3zMrdLiss4-V-jN6:hover{background:#eee}._3zMrdLiss4-V-jN6[selected]{background:#fff;border-color:#c5c5c5;color:#419bf9;border-bottom-color:transparent;padding-bottom:1px}._3zMrdLiss4-V-jN6[disabled]{background:none;color:#ccc;cursor:not-allowed}._3zMrdLiss4-V-jN6[selected][disabled]{background:#fff}.qKCbv6oBhI_qC4Wy:before{display:inline-block;content:\"\\2715\"}.qKCbv6oBhI_qC4Wy:hover{color:#666}._3HY3rUuYPlo4IEIy{margin-top:10px}._28xk6v0DctFThbxl{float:right}", ""]);

// exports
exports.locals = {
	"root": "_2XIyLVlnmxs80bcR",
	"head": "_19w3MgY9MILXQ_cY",
	"item": "_3zMrdLiss4-V-jN6",
	"close": "qKCbv6oBhI_qC4Wy",
	"body": "_3HY3rUuYPlo4IEIy",
	"extra": "_28xk6v0DctFThbxl"
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("cd53cb6e", content, true);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3kPFfcqU3DrFV2lZ{display:inline-block;position:relative;padding:4px 8px;background:#fff;border:1px solid #c5c5c5;height:20px;width:320px;height:120px}._3kPFfcqU3DrFV2lZ:after{content:\"\\3000\"}._3mgR7zfRw5VtgQsW{position:absolute;left:0;top:0;margin:0;padding:inherit;width:100%;height:100%;font:inherit;color:inherit;line-height:inherit;background:inherit;border:none;border-radius:0;cursor:inherit;resize:none}._3kPFfcqU3DrFV2lZ[focus]{outline:none;border-color:#419bf9}._3mgR7zfRw5VtgQsW:focus{outline:none}._3mgR7zfRw5VtgQsW[color=error]{border-color:#f55}._3mgR7zfRw5VtgQsW[disabled]{cursor:not-allowed;background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "_3kPFfcqU3DrFV2lZ",
	"input": "_3mgR7zfRw5VtgQsW"
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("681b0896", content, true);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3ro9Z_ZjVnCwgoUU{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-x:hidden;overflow-y:auto;background:#fff;border:1px solid #c5c5c5}", ""]);

// exports
exports.locals = {
	"root": "_3ro9Z_ZjVnCwgoUU"
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5841a3ae", content, true);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".c8T-k8hezByF-rV7{cursor:default;margin-left:20px}._3Uz1ZAlAKkhSryNB{position:relative}.BI2FMNIAdrFWPqCz{position:absolute;left:-10000px;right:-10000px;height:100%}._24iOhsztVomOO-RG{position:absolute;z-index:1;width:30px;height:30px;line-height:28px;text-align:center;margin-left:-20px}._24iOhsztVomOO-RG:before{content:\"\\25B8\"}._24iOhsztVomOO-RG[expanded]:before{content:\"\\25BE\"}._7O3xmEsGXyo13_Tf{position:relative;padding:4px 12px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}._3Uz1ZAlAKkhSryNB:hover .BI2FMNIAdrFWPqCz{background:#eee}._3Uz1ZAlAKkhSryNB:focus{outline:none}._3Uz1ZAlAKkhSryNB:focus .BI2FMNIAdrFWPqCz{background:#eee}._3Uz1ZAlAKkhSryNB[readonly]{cursor:default}._3Uz1ZAlAKkhSryNB[readonly] .BI2FMNIAdrFWPqCz{background:none}._3Uz1ZAlAKkhSryNB[selected] .BI2FMNIAdrFWPqCz{background:#419bf9}._3Uz1ZAlAKkhSryNB[selected] ._7O3xmEsGXyo13_Tf,._3Uz1ZAlAKkhSryNB[selected] ._24iOhsztVomOO-RG{color:#fff}._3Uz1ZAlAKkhSryNB[disabled]{cursor:not-allowed;color:#ccc}._3Uz1ZAlAKkhSryNB[disabled] .BI2FMNIAdrFWPqCz{background:none}._3Uz1ZAlAKkhSryNB[selected][disabled] .BI2FMNIAdrFWPqCz{background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "c8T-k8hezByF-rV7",
	"item": "_3Uz1ZAlAKkhSryNB",
	"back": "BI2FMNIAdrFWPqCz",
	"expander": "_24iOhsztVomOO-RG",
	"text": "_7O3xmEsGXyo13_Tf"
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6ae2dc57", content, true);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3OTsM5IYKmB3jD8W{background:#fff;border:1px solid #c5c5c5;overflow-x:auto}", ""]);

// exports
exports.locals = {
	"root": "_3OTsM5IYKmB3jD8W"
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5a299950", content, true);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2f2yg9FyDEZLnhme{font-family:Menlo,Consolas,monospace;margin-left:20px;cursor:default}._1WKwMVW1VBvHOTQL{white-space:nowrap}._1WKwMVW1VBvHOTQL[disabled]{opacity:.6}._1Umukl-k7oaOvp0A{color:#891391}._2pDEbV7bke9bjEbK{display:inline-block;position:relative}._1OAovmBhm6yvDNVI[type=null]{color:gray}._1OAovmBhm6yvDNVI[type=string]{color:#c41916}._1OAovmBhm6yvDNVI[type=literal]{color:#1d00cf}._1OAovmBhm6yvDNVI[editing]{visibility:hidden}._4qIG80Io_HN3yZP2{position:absolute;top:-1px;left:-4px;z-index:1;outline:none;border:1px solid #bbb;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.15);box-shadow:0 2px 4px rgba(0,0,0,.15);font-family:Menlo,Consolas,monospace;line-height:inherit;-webkit-box-sizing:content-box;box-sizing:content-box;resize:none;padding:0 3px;white-space:nowrap;overflow:hidden}._4qIG80Io_HN3yZP2[role=back]{line-height:1}._2Ivdpzd0gM99IIKa{position:absolute;z-index:1;width:20px;height:20px;text-align:center;margin-left:-20px;color:#6e6e6e;font:10px/20px Hiragino Sans GB,sans-serif}._2Ivdpzd0gM99IIKa:before{content:\"\\25B6\\FE0E\"}._2Ivdpzd0gM99IIKa[expanded]:before{content:\"\\25BC\"}", ""]);

// exports
exports.locals = {
	"root": "_2f2yg9FyDEZLnhme",
	"item": "_1WKwMVW1VBvHOTQL",
	"property": "_1Umukl-k7oaOvp0A",
	"value": "_2pDEbV7bke9bjEbK",
	"text": "_1OAovmBhm6yvDNVI",
	"textarea": "_4qIG80Io_HN3yZP2",
	"expander": "_2Ivdpzd0gM99IIKa"
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* @copyright 2017 Commenthol
* @license MIT
*/



var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var _require = __webpack_require__(119),
    createContext = _require.createContext,
    allow = _require.allow;

/**
* reuse saferEval context
* @class
* @example
* const {SaferEval} = require('safer-eval')
* const safer = new SaferEval()
* let res1 = safer.runInContext('new Date('1970-01-01')')
* let res2 = safer.runInContext('new Date('1970-07-01')')
*/

var SaferEval = function () {
  /**
  * @param {Object} [context] - allowed context
  */
  function SaferEval(context) {
    _classCallCheck(this, SaferEval);

    // define disallowed objects in context
    var __context = createContext();
    // apply "allowed" context vars
    allow(context, __context);

    this._context = __context;
  }

  /**
  * @param {String} code - a string containing javascript code
  * @return {Any} evaluated code
  */

  _createClass(SaferEval, [{
    key: 'runInContext',
    value: function runInContext(code) {
      if (typeof code !== 'string') {
        throw new TypeError('not a string');
      }
      var __context = this._context;

      var src = '';
      // set local scope vars from each context property
      Object.keys(__context).forEach(function (key) {
        src += 'var ' + key + ' = __context[\'' + key + '\'];\n';
      });
      src += 'return ' + code + ';\n';

      return Function('__context', src).call(null, __context); // eslint-disable-line
    }
  }]);

  return SaferEval;
}();

/**
* A safer approach for eval. (Browser)
*
* This might not be as safe as the nodeJs version as there is no real sandboxing
* available in the browser.
*
* **Warning: This function might be harmful - so you are warned!**
*
* `context` allows the definition of passed in Objects into the sandbox.
* Take care, injected `code` can overwrite those passed context props!
* Check the tests under "harmful context"!
*
* @static
* @throws Error
* @param {String} code - a string containing javascript code
* @param {Object} [context] - define globals, properties for evaluation context
* @param {Object} [opts] - options
* @param {Object} [opts.freeze=true] - freeze all native objects
* @return {Any} evaluated code
* @example
* var code = `{d: new Date('1970-01-01'), b: function () { return navigator.userAgent }`
* var res = saferEval(code, {navigator: window.navigator})
* // => toString.call(res.d) = '[object Date]'
* // => toString.call(res.b) = '[object Function]'
*/

function saferEval(code, context) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return new SaferEval(context).runInContext(code);
}

module.exports = saferEval;
module.exports.SaferEval = SaferEval;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var clones = __webpack_require__(120);

var hasWindow = typeof window !== 'undefined';
exports.hasWindow = hasWindow;

var hasGlobal = typeof global !== 'undefined';
exports.hasGlobal = hasGlobal;

/**
* create a fresh context where nearly nothing is allowed
* @private
*/
exports.createContext = function () {
  // protection might not be complete!
  var context = {
    // disallowed
    global: undefined,
    process: undefined,
    module: undefined,
    require: undefined,
    document: undefined,
    window: undefined,
    Window: undefined,
    // no evil...
    eval: undefined,
    Function: undefined
  };

  // locally define all potential global vars
  if (hasGlobal) {
    Object.keys(global).forEach(function (key) {
      context[key] = undefined;
    });
    cloneFunctions(context);
    context.Buffer = _protect('Buffer');
    context.console = clones(console, console); // console needs special treatment
  }
  if (hasWindow) {
    Object.keys(window).forEach(function (key) {
      context[key] = undefined;
    });

    cloneFunctions(context);
    protectBuiltInObjects(context);
    context.console = clones(console, console); // console needs special treatment
  }

  return context;
};

/**
* Apply allowed context properties
* @private
*/
exports.allow = function (context, newContext) {
  Object.keys(context || {}).forEach(function (key) {
    newContext[key] = context[key]; // this is harmful - objects can be overwritten
  });
};

/**
* clone global functions
* @private
*/
function cloneFunctions(context) {
  ;['clearImmediate', 'clearInterval', 'clearTimeout'].forEach(function (str) {
    try {
      var fn = new Function('return ' + str)(); // eslint-disable-line no-new-func
      context[str] = fn ? function () {
        return fn.apply(null, [].slice.call(arguments));
      } : undefined;
    } catch (e) {}
  });['setImmediate', 'setInterval', 'setTimeout'].forEach(function (str) {
    try {
      var fn = new Function('return ' + str)(); // eslint-disable-line no-new-func
      context[str] = fn ? function (f) {
        if (typeof f === 'function') {
          return fn.apply(null, [].slice.call(arguments));
        } else {
          throw new Error(str + ' requires function as argument');
        }
      } : undefined;
    } catch (e) {}
  });
}

/**
* wraps up build-in objects using a cloned copy
* protect object against overwriting
* @private
*/
function protectBuiltInObjects(context) {
  ;['Object', 'Boolean', 'Symbol', 'Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError', 'Number', 'Math', 'Date', 'String', 'RegExp', 'Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'Map', 'Set', 'WeakMap', 'WeakSet', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'Reflect', 'Proxy', 'Intl', 'Buffer'].forEach(function (str) {
    try {
      context[str] = _protect(str);
      new context[str](); // eslint-disable-line no-new
    } catch (e) {}
  });
}

/**
* @private
*/
function _protect(str) {
  try {
    var type = new Function('return ' + str)(); // eslint-disable-line no-new-func
    return type ? clones.classes(type) : undefined;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

/**
* @copyright 2017 commenthol
* @license MIT
*/

module.exports = clones;

/**
* A Deep-Clone of object `source`
*
* @static
* @param {Object} source - clone source
* @param {Object} [bind] - bind functions to this context
* @return {Any} deep clone of `source`
* @example
* const clones = require('clones')
*
* const source = [
*   {a: {b: 1}},
*   {c: {d: 2}},
*   '3',
*   function () { return 4 }
* ]
* // adding circularities
* source[0].a.e = source[0].a
*
* const dest = clones(source)
* // => [{ a: { b: 1, e: [Circular] } },
* //     { c: { d: 2 } },
* //     '3',
* //     [Function] ]
*/
function clones(source, bind, target) {
  var opts = {
    bind: bind,
    visited: [],
    cloned: []
  };
  return _clone(opts, source, target);
}

/**
* clones prototype function / class
* @static
* @param {Object} source - clone source
* @return {Any} deep clone of `source`
* @example
* const clones = require('clones')
* // clone built in `Array`
* const C = clones.classes(Array)
*
* let c = new C(1,2,3)
* // => [1, 2, 3]
* c.reverse()
* // => [3, 2, 1]
*/
clones.classes = function (source) {
  var target = function target(a, b, c, d, e, f, g, h, i) {
    try {
      return new (Function.prototype.bind.apply(source, [null].concat([].slice.call(arguments))))();
    } catch (e) {
      // Safari throws TypeError for typed Arrays
      return new source(a, b, c, d, e, f, g, h, i); // eslint-disable-line new-cap
    }
  };
  return clones(source, source, target);
};

/**
* Recursively clone source
*
* @static
* @private
* @param {Object} opts - options
* @param {Object} [opts.bind] - optional bind for function clones
* @param {Array} opts.visited - visited references to detect circularities
* @param {Array} opts.cloned - visited references of clones to assign circularities
* @param {Any} source - The object to clone
* @return {Any} deep clone of `source`
*/
function _clone(opts, source, target) {
  var type = toType(source);
  switch (type) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Null':
    case 'Undefined':
    case 'Symbol':
    case 'DOMPrototype': // (browser)
    case 'process':
      // (node) cloning this is not a good idea
      target = source;
      break;
    case 'Function':
      if (!target) {
        var _bind = opts.bind === null ? null : opts.bind || source;
        if (opts.wrapFn) {
          target = function target() {
            return source.apply(_bind, arguments);
          };
        } else {
          target = source.bind(_bind);
        }
      }
      target = _props(opts, source, target);
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      target = new source.constructor(source);
      break;
    case 'Array':
      target = source.map(function (item) {
        return _clone(opts, item);
      });
      target = _props(opts, source, target);
      break;
    case 'Date':
      target = new Date(source);
      break;
    case 'Error':
    case 'EvalError':
    case 'InternalError':
    case 'RangeError':
    case 'ReferenceError':
    case 'SyntaxError':
    case 'TypeError':
    case 'URIError':
      target = new source.constructor(source.message);
      target = _props(opts, source, target);
      target.stack = source.stack;
      break;
    case 'RegExp':
      var flags = source.flags || (source.global ? 'g' : '') + (source.ignoreCase ? 'i' : '') + (source.multiline ? 'm' : '');
      target = new RegExp(source.source, flags);
      break;
    case 'Buffer':
      target = new source.constructor(source);
      break;
    case 'Window': // clone of global object
    case 'global':
      opts.wrapFn = true;
      target = _props(opts, source, target || {});
      break;
    case 'Math':
    case 'JSON':
    case 'Console':
    case 'Navigator':
    case 'Screen':
    case 'Object':
      target = _props(opts, source, target || {});
      break;
    default:
      if (/^HTML/.test(type)) {
        // handle HTMLElements
        if (source.cloneNode) {
          target = source.cloneNode(true);
        } else {
          target = source;
        }
      } else if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') {
        // handle other object based types
        target = _props(opts, source, target || {});
      } else {
        // anything else should be a primitive
        target = source;
      }
  }
  return target;
}

/**
* Clone property while cloning circularities
*
* @static
* @private
* @param {Object} opts - options
* @param {Any} source - source object
* @param {Any} [target] - target object
* @returns {Any} target
*/
function _props(opts, source, target) {
  var idx = opts.visited.indexOf(source); // check for circularities
  if (idx === -1) {
    opts.visited.push(source);
    opts.cloned.push(target);
    Object.getOwnPropertyNames(source).forEach(function (key) {
      if (key === 'prototype') {
        target[key] = Object.create(source[key]);
        Object.getOwnPropertyNames(source[key]).forEach(function (p) {
          if (p !== 'constructor') {
            _descriptor(opts, source[key], target[key], p);
            // } else {
            //   target[key][p] = target
            //   Safari may throw here with TypeError: Attempted to assign to readonly property.
          }
        });
      } else {
        _descriptor(opts, source, target, key);
      }
    });
    opts.visited.pop();
    opts.cloned.pop();
  } else {
    target = opts.cloned[idx]; // add reference of circularity
  }
  return target;
}

/**
* assign descriptor with property `key` from source to target
* @private
*/
function _descriptor(opts, source, target, key) {
  var desc = Object.getOwnPropertyDescriptor(source, key);
  if (desc) {
    if (desc.writable) {
      desc.value = _clone(opts, desc.value);
    }
    try {
      Object.defineProperty(target, key, desc);
    } catch (e) {
      // Safari throws with TypeError:
      //  Attempting to change access mechanism for an unconfigurable property.
      //  Attempting to change value of a readonly property.
      if (!'Attempting to change'.indexOf(e.message)) {
        throw e;
      }
    }
  }
}

/**
* @private
*/
function toType(o) {
  return toString.call(o).replace(/^\[[a-z]+ (.*)\]$/, '$1');
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1f863e98", content, true);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1TaDPIajbKZuNlLB{display:inline-block;position:relative;padding:0 8px;background:#fff;border:1px solid #c5c5c5;height:20px;width:100px;line-height:18px}._1TaDPIajbKZuNlLB:after{content:\"\\3000\";display:inline-block;vertical-align:middle;height:100%}._1vUCRJZkdsUUGV50{position:absolute;left:0;top:0;margin:0;padding:inherit;width:100%;height:100%;font:inherit;color:inherit;line-height:inherit;background:inherit;border:none;border-radius:0;cursor:inherit}._1TaDPIajbKZuNlLB[focus]{outline:none;border-color:#419bf9}._1vUCRJZkdsUUGV50:focus{outline:none}._1TaDPIajbKZuNlLB[color=error]{border-color:#f55}._1TaDPIajbKZuNlLB[disabled]{cursor:not-allowed;background:#ddd}._1TaDPIajbKZuNlLB{padding:0 3px}", ""]);

// exports
exports.locals = {
	"root": "_1TaDPIajbKZuNlLB",
	"input": "_1vUCRJZkdsUUGV50"
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2f8629fa", content, true);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".-rav0f6VsA0PAz9U{display:inline-block}._3OdaIIMpZBK5BsJs{text-align:center;font-size:10px}", ""]);

// exports
exports.locals = {
	"root": "-rav0f6VsA0PAz9U",
	"title": "_3OdaIIMpZBK5BsJs"
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("891dd3f4", content, true);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3xsEjof9T8-pt7VL[direction=horizontal]>*+*{margin-left:20px}._3xsEjof9T8-pt7VL[direction=vertical]>*+*{margin-top:20px}._3xsEjof9T8-pt7VL[alignment=left]{text-align:left}._3xsEjof9T8-pt7VL[alignment=center]{text-align:center}._3xsEjof9T8-pt7VL[alignment=right]{text-align:right}._3xsEjof9T8-pt7VL[justify=start]{text-align:left}._3xsEjof9T8-pt7VL[justify=center]{text-align:center}._3xsEjof9T8-pt7VL[justify=end]{text-align:right}._3xsEjof9T8-pt7VL[type=flex]{display:-webkit-box;display:-ms-flexbox;display:flex;text-align:inherit}._3xsEjof9T8-pt7VL[direction=vertical]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}._3xsEjof9T8-pt7VL[justify=start]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}._3xsEjof9T8-pt7VL[justify=center]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}._3xsEjof9T8-pt7VL[justify=end]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}._3xsEjof9T8-pt7VL[justify=space-between]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._3xsEjof9T8-pt7VL[justify=space-around]{-ms-flex-pack:distribute;justify-content:space-around}._3xsEjof9T8-pt7VL[alignment=start]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}._3xsEjof9T8-pt7VL[alignment=center]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}._3xsEjof9T8-pt7VL[alignment=end]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}._3xsEjof9T8-pt7VL[alignment=baseline]{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}._3xsEjof9T8-pt7VL[alignment=stretch]{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}._3xsEjof9T8-pt7VL[direction=horizontal]>*+*{margin-left:8px}._3xsEjof9T8-pt7VL[direction=vertical]>*+*{margin-top:8px}._3xsEjof9T8-pt7VL[direction=horizontal][gap=small]>*+*{margin-left:4px}._3xsEjof9T8-pt7VL[direction=vertical][gap=small]>*+*{margin-top:4px}._3xsEjof9T8-pt7VL[direction=horizontal][gap=large]>*+*{margin-left:16px}._3xsEjof9T8-pt7VL[direction=vertical][gap=large]>*+*{margin-top:16px}", ""]);

// exports
exports.locals = {
	"root": "_3xsEjof9T8-pt7VL"
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7819f05a", content, true);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1D2H8Ql2NVnaUIEi{color:#419bf9}._1D2H8Ql2NVnaUIEi:hover{text-decoration:underline}._1D2H8Ql2NVnaUIEi[disabled]{cursor:not-allowed;color:#ccc;text-decoration:none}._1D2H8Ql2NVnaUIEi{color:#4e78cc}", ""]);

// exports
exports.locals = {
	"root": "_1D2H8Ql2NVnaUIEi"
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("b752ea48", content, true);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".oJLtUvXh_yM96JSt{position:relative}._1I_ilvFkuJyfxMLc{background:#ddd}._19OPZHaiHbIigepF{overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}._3LwnEUkjponMn5eR{position:absolute;right:0;top:0;z-index:1;width:26px;height:26px;line-height:24px}._3LwnEUkjponMn5eR:before{content:\"\\25B8\"}._3LwnEUkjponMn5eR[expanded]:before{content:\"\\25BE\"}._2NoicPbwcFSiw3WG{float:right}._1I_ilvFkuJyfxMLc{background:#eee;border-bottom:1px solid #c5c5c5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:2px 4px;height:25px;overflow:hidden}._3LwnEUkjponMn5eR,.Yh5lBx_EhLwUi1I2{display:inline-block}._3LwnEUkjponMn5eR{position:static;float:left;margin-left:-4px;width:20px;height:20px;line-height:1;text-align:center}._3LwnEUkjponMn5eR:before{color:#6e6e6e;font:10px/20px Hiragino Sans GB,sans-serif;content:\"\\25B6\\FE0E\"}._3LwnEUkjponMn5eR[expanded]:before{content:\"\\25BC\"}.oJLtUvXh_yM96JSt[disabled] ._3LwnEUkjponMn5eR{color:#ccc}._3vgl3fAcbGUHiRHz{border-bottom:1px solid #c5c5c5}.oJLtUvXh_yM96JSt:last-child{margin-bottom:-1px}", ""]);

// exports
exports.locals = {
	"root": "oJLtUvXh_yM96JSt",
	"head": "_1I_ilvFkuJyfxMLc",
	"text": "_19OPZHaiHbIigepF",
	"body": "_3vgl3fAcbGUHiRHz",
	"expander": "_3LwnEUkjponMn5eR",
	"extra": "_2NoicPbwcFSiw3WG",
	"title": "Yh5lBx_EhLwUi1I2"
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c44c05fc", content, true);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".fLmAz8KGRPQA__Be{cursor:default;padding:4px 12px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.fLmAz8KGRPQA__Be:hover{background:#eee}.fLmAz8KGRPQA__Be[readonly]{cursor:default;background:none}.fLmAz8KGRPQA__Be[selected]{background:#419bf9;color:#fff}.fLmAz8KGRPQA__Be[disabled]{cursor:not-allowed;background:none;color:#ccc}.fLmAz8KGRPQA__Be[selected][disabled]{background:#ddd}.fLmAz8KGRPQA__Be{padding:0 4px}", ""]);

// exports
exports.locals = {
	"root": "fLmAz8KGRPQA__Be"
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("50b415bf", content, true);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1vO83om0CTDGHT17{position:absolute;right:1px;height:14px;line-height:14px;padding:0 4px;cursor:pointer;background:#eee}._1vO83om0CTDGHT17:hover{background:#ddd}._1vO83om0CTDGHT17:focus{outline:none}._1vO83om0CTDGHT17:active{background:#ccc}._1vO83om0CTDGHT17[role=up]{top:1px}._1vO83om0CTDGHT17[role=up]:before{font-family:vusion-icon-font;font-style:normal;font-weight:400;font-variant:normal;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;content:\"\\F102\"}._1vO83om0CTDGHT17[role=down]{bottom:1px}._1vO83om0CTDGHT17[role=down]:before{font-family:vusion-icon-font;font-style:normal;font-weight:400;font-variant:normal;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;content:\"\\F103\"}._2K_7MNtHF3n3BYtK[readonly] ._1vO83om0CTDGHT17{background:#eee;cursor:default}._2K_7MNtHF3n3BYtK[disabled] ._1vO83om0CTDGHT17{background:#eee;color:#ccc;cursor:not-allowed}._2K_7MNtHF3n3BYtK{width:60px}._1vO83om0CTDGHT17{display:none;right:0;padding:0 1px;height:9px;line-height:9px;font-size:9px;background:#fff;color:#999;border-left:1px solid #c5c5c5}._2K_7MNtHF3n3BYtK:hover ._1vO83om0CTDGHT17{display:block}._2K_7MNtHF3n3BYtK[focus] ._1vO83om0CTDGHT17{display:none}._1vO83om0CTDGHT17:hover{background:#fff}._1vO83om0CTDGHT17:active{background:#eee}._1vO83om0CTDGHT17[role=up]{top:0}._1vO83om0CTDGHT17[role=down]{bottom:0}", ""]);

// exports
exports.locals = {
	"root": "_2K_7MNtHF3n3BYtK",
	"button": "_1vO83om0CTDGHT17"
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("65ba44d0", content, true);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".VOOvi3twVbfmiBLB{display:inline-block;border:1px solid #c5c5c5;padding:8px;border-radius:4px}._3ibSCD6KyDCvMD85{position:relative;overflow:hidden;background:#f09;width:200px;height:150px;border-radius:2px}._3ibSCD6KyDCvMD85:after,._3ibSCD6KyDCvMD85:before{content:\"\";display:block;position:absolute;left:0;right:0;top:0;bottom:0}._3ibSCD6KyDCvMD85:before{background:-webkit-gradient(linear,left top,right top,from(#fff),to(hsla(0,0%,100%,0)));background:-webkit-linear-gradient(left,#fff,hsla(0,0%,100%,0));background:-o-linear-gradient(left,#fff,hsla(0,0%,100%,0));background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}._3ibSCD6KyDCvMD85:after{background:-webkit-gradient(linear,left bottom,left top,from(#000),to(transparent));background:-webkit-linear-gradient(bottom,#000,transparent);background:-o-linear-gradient(bottom,#000,transparent);background:linear-gradient(0deg,#000,transparent);-webkit-box-shadow:inset 0 0 2px rgba(0,0,0,.5);box-shadow:inset 0 0 2px rgba(0,0,0,.5)}.HHRgd1Vadt-jCE3c{position:absolute;z-index:5;margin-left:-5px;margin-top:-5px;width:10px;height:10px;border:1px solid #fff;border-radius:100%;-webkit-box-shadow:0 0 1px rgba(0,0,0,.5),inset 0 0 1px rgba(0,0,0,.5);box-shadow:0 0 1px rgba(0,0,0,.5),inset 0 0 1px rgba(0,0,0,.5)}._7cLbt6uSK9QnfMvC{margin-top:4px}.t5suF4vr8lCpeyKx{display:inline-block;width:24px;height:24px;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:0 0 2px rgba(0,0,0,.15);box-shadow:0 0 2px rgba(0,0,0,.15);color:#666;vertical-align:top;text-align:center;font-size:14px;line-height:22px;cursor:default}.t5suF4vr8lCpeyKx:before{font-family:vusion-icon-font;font-style:normal;font-weight:400;font-variant:normal;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;content:\"\\F101\"}.t5suF4vr8lCpeyKx:active{background:#eee}._33-uzDNzZXbQlxkq{display:inline-block;width:144px;margin:0 4px}._33-uzDNzZXbQlxkq>*+*{margin-top:4px}._13dTAYuiMdGRInwm{display:inline-block;position:relative;width:24px;height:24px;border-radius:2px;-webkit-box-shadow:inset 0 0 2px rgba(0,0,0,.5);box-shadow:inset 0 0 2px rgba(0,0,0,.5)}._13dTAYuiMdGRInwm:before{content:\"\";display:block;position:absolute;width:100%;height:100%;z-index:-1;background:url(" + __webpack_require__(7) + ")}._3ERF-gJz_cSaCNUg[class]{width:30px;margin-left:6px;padding-right:0}._3ERF-gJz_cSaCNUg[class][role=hex]{margin-left:0;width:56px}", ""]);

// exports
exports.locals = {
	"root": "VOOvi3twVbfmiBLB",
	"sv": "_3ibSCD6KyDCvMD85",
	"handle": "HHRgd1Vadt-jCE3c",
	"bar": "_7cLbt6uSK9QnfMvC",
	"dropper": "t5suF4vr8lCpeyKx",
	"sliders": "_33-uzDNzZXbQlxkq",
	"color": "_13dTAYuiMdGRInwm",
	"input": "_3ERF-gJz_cSaCNUg"
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("712f55a3", content, true);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1clK016pTbIxyYBm{vertical-align:1px}._3605wMxSeWU1G0Fm{position:relative;margin:0 10px;padding:6px 0}.qlyRJtZ55XsGKBMe{height:8px;background:#eee}._1ZK8L_mUjRJSOisp{float:left;height:100%;background:#419bf9}._1kaUCHRFNTaFDUFn{position:absolute;left:0;top:0;margin-left:-10px;width:20px;height:20px;background:#fff;border:1px solid #ddd;border-radius:100px}._1clK016pTbIxyYBm[disabled]{cursor:not-allowed}._1clK016pTbIxyYBm[disabled] ._1ZK8L_mUjRJSOisp{background:#ccc}._1clK016pTbIxyYBm{vertical-align:2px}._3605wMxSeWU1G0Fm{margin:0 6px;padding:4px 0}.qlyRJtZ55XsGKBMe{height:4px;background:#ccc;border-radius:100px;overflow:hidden}._1kaUCHRFNTaFDUFn{margin-left:-6px;width:12px;height:12px;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.5);box-shadow:0 0 2px 0 rgba(0,0,0,.5);border:none}._1clK016pTbIxyYBm{position:relative;border-radius:2px;-webkit-box-shadow:inset 0 0 2px rgba(0,0,0,.5);box-shadow:inset 0 0 2px rgba(0,0,0,.5)}._1clK016pTbIxyYBm:before{content:\"\";display:block;position:absolute;width:100%;height:100%;z-index:-1;background:url(" + __webpack_require__(7) + ") 0}._3605wMxSeWU1G0Fm{display:block;margin:0 3px;padding:0}.qlyRJtZ55XsGKBMe{height:10px;border-radius:0;background:none}._1ZK8L_mUjRJSOisp{background:none}._1kaUCHRFNTaFDUFn{margin-left:-2px;margin-top:1px;width:4px;height:8px;border-radius:1px;background:#eee;-webkit-box-shadow:0 0 1px 0 rgba(0,0,0,.5);box-shadow:0 0 1px 0 rgba(0,0,0,.5)}", ""]);

// exports
exports.locals = {
	"root": "_1clK016pTbIxyYBm",
	"body": "_3605wMxSeWU1G0Fm",
	"track": "qlyRJtZ55XsGKBMe",
	"trail": "_1ZK8L_mUjRJSOisp",
	"handle": "_1kaUCHRFNTaFDUFn"
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0182b9cf", content, true);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".YzLfnxPq_xHH2uFt{vertical-align:1px}._1XxuxTfrnpwrJoDO{position:relative;margin:0 10px;padding:6px 0}._2KnVXUSBSuAEUhE8{height:8px;background:#eee}._16Qzr_HTrir0W4Ps{float:left;height:100%;background:#419bf9}._25TTbMJDNAp3OpNA{position:absolute;left:0;top:0;margin-left:-10px;width:20px;height:20px;background:#fff;border:1px solid #ddd;border-radius:100px}.YzLfnxPq_xHH2uFt[disabled]{cursor:not-allowed}.YzLfnxPq_xHH2uFt[disabled] ._16Qzr_HTrir0W4Ps{background:#ccc}.YzLfnxPq_xHH2uFt{vertical-align:2px}._1XxuxTfrnpwrJoDO{margin:0 6px;padding:4px 0}._2KnVXUSBSuAEUhE8{height:4px;background:#ccc;border-radius:100px;overflow:hidden}._25TTbMJDNAp3OpNA{margin-left:-6px;width:12px;height:12px;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.5);box-shadow:0 0 2px 0 rgba(0,0,0,.5);border:none}", ""]);

// exports
exports.locals = {
	"root": "YzLfnxPq_xHH2uFt",
	"body": "_1XxuxTfrnpwrJoDO",
	"track": "_2KnVXUSBSuAEUhE8",
	"trail": "_16Qzr_HTrir0W4Ps",
	"handle": "_25TTbMJDNAp3OpNA"
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8ad82f24", content, true);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".jPwsjdn-bGFg5M9D:last-child{border-bottom:none}._3fq-YeHlJnBPlIk0{font-size:12px;color:#777;line-height:1;padding:6px 8px;background:#eee}._23u_wqwxlSwVTmbs{float:right;margin-top:-4px;margin-right:-4px}._16VGIjtEdkilulu8{padding:8px}", ""]);

// exports
exports.locals = {
	"root": "jPwsjdn-bGFg5M9D",
	"head": "_3fq-YeHlJnBPlIk0",
	"extra": "_23u_wqwxlSwVTmbs",
	"body": "_16VGIjtEdkilulu8",
	"foot": "aXumf8J8Hocee5Qf"
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5a3851a6", content, true);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2u44EyYPdrMYujdz+._2u44EyYPdrMYujdz{margin-top:6px}._37lwTDqCD8q7GozJ{width:60px}._1yjEYiIWxGJJVrWa,._37lwTDqCD8q7GozJ{display:inline-block}", ""]);

// exports
exports.locals = {
	"root": "_2u44EyYPdrMYujdz",
	"label": "_37lwTDqCD8q7GozJ",
	"field": "_1yjEYiIWxGJJVrWa"
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6598f07e", content, true);

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1ZIMUxgjZ8_Tn3Ex{z-index:1050;display:inline-block;background:#fff;border:1px solid #c5c5c5;border-radius:5px;-webkit-box-shadow:0 2px 14px rgba(0,0,0,.3);box-shadow:0 2px 14px rgba(0,0,0,.3)}._1ZIMUxgjZ8_Tn3Ex[x-placement^=bottom]{margin-top:10px;margin-left:-29px}._19G9IHZdfPOPJP4k,._19G9IHZdfPOPJP4k:after{display:block;position:absolute;border:10px solid transparent}._19G9IHZdfPOPJP4k:after{border-width:9px}._1ZIMUxgjZ8_Tn3Ex[x-placement^=bottom] ._19G9IHZdfPOPJP4k{top:-10px;border-top-width:0;border-bottom-color:#c5c5c5}._1ZIMUxgjZ8_Tn3Ex[x-placement^=bottom] ._19G9IHZdfPOPJP4k:after{content:\"\";top:1px;left:-9px;border-top-width:0;border-bottom-color:#fff}._1ZIMUxgjZ8_Tn3Ex[x-placement=bottom-start] ._19G9IHZdfPOPJP4k{left:36px}", ""]);

// exports
exports.locals = {
	"body": "_1ZIMUxgjZ8_Tn3Ex",
	"arrow": "_19G9IHZdfPOPJP4k"
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3464f140", content, true);

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2L8qf65Ci_BzMyvK{position:relative;border-left:1px solid #999;border-top:1px solid #999}.m1d4mqBO4L8iCtuz{left:19px;top:0;height:20px;width:calc(100% - 19px);border-bottom:1px solid #999}.m1d4mqBO4L8iCtuz,.Mg9QxCjkIh6jx3m4{position:absolute;overflow:hidden;background:#fff}.Mg9QxCjkIh6jx3m4{left:0;top:19px;width:20px;height:calc(100% - 19px);border-right:1px solid #999}.nUsx93LBwzRJKZ75{background:#fff;border-right:1px solid #999;border-bottom:1px solid #999}._2RKMOvZUMtXCCM2l{position:absolute;bottom:0;height:5px;border-left:1px solid #999}._2RKMOvZUMtXCCM2l[size=large]{height:8px}._2RKMOvZUMtXCCM2l[size=full]{height:20px}.N-cGQbWCJ4ce5Gjx{position:absolute;right:0;width:5px;border-top:1px solid #999}.N-cGQbWCJ4ce5Gjx[size=large]{width:8px}.N-cGQbWCJ4ce5Gjx[size=full]{width:20px}._2b2vXf_QlS7sHIWe{font-size:10px;margin-left:2px}._35v2-mZg79vnDmFB{font-size:10px;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;margin-top:2px}.nUsx93LBwzRJKZ75{position:absolute;left:0;top:0;height:20px;width:20px}._1-TGWdenguhIA9k1{position:relative;margin-left:20px;margin-top:20px;width:calc(100% - 20px);height:calc(100% - 20px)}", ""]);

// exports
exports.locals = {
	"root": "_2L8qf65Ci_BzMyvK",
	"axis-x": "m1d4mqBO4L8iCtuz",
	"axis-y": "Mg9QxCjkIh6jx3m4",
	"corner": "nUsx93LBwzRJKZ75",
	"scale-x": "_2RKMOvZUMtXCCM2l",
	"scale-y": "N-cGQbWCJ4ce5Gjx",
	"number-x": "_2b2vXf_QlS7sHIWe",
	"number-y": "_35v2-mZg79vnDmFB",
	"body": "_1-TGWdenguhIA9k1"
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d9551c52", content, true);

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._13Y_8MDis-v8KIgK{width:100px;height:20px;vertical-align:middle;margin-bottom:1px;background:#fff;border-color:#c5c5c5}._13Y_8MDis-v8KIgK:focus{outline:none;border-color:#419bf9}", ""]);

// exports
exports.locals = {
	"root": "_13Y_8MDis-v8KIgK"
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d88cb2aa", content, true);

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2ULpbLzfiMGziq4q{font-family:Arial Black}", ""]);

// exports
exports.locals = {
	"root": "_2ULpbLzfiMGziq4q"
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1677fcda", content, true);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".W6Z8z9UI6t0n6eBR{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:32px;border-bottom:1px solid #c5c5c5}._12-mP0Jg0LMigs-S{cursor:default;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;height:30px;line-height:30px;padding:0 20px;border:1px solid transparent;border-bottom:none;margin-bottom:-1px}._12-mP0Jg0LMigs-S:hover{background:#eee}._12-mP0Jg0LMigs-S[selected]{background:#fff;border-color:#c5c5c5;color:#419bf9;border-bottom-color:transparent;padding-bottom:1px}._12-mP0Jg0LMigs-S[disabled]{background:none;color:#ccc;cursor:not-allowed}._12-mP0Jg0LMigs-S[selected][disabled]{background:#fff}._3yNcWgXYnFL4oO0H:before{display:inline-block}._3yNcWgXYnFL4oO0H:hover{color:#666}.Gv4EZ_DRvnER7itI{margin-top:10px}._2TtXNzw1RvMYm-qr{float:right}.W6Z8z9UI6t0n6eBR{background:$background-color-dark;border-top:1px solid #c5c5c5;height:26px;border-left:1px solid #c5c5c5;border-right:1px solid #c5c5c5;margin-left:-1px;margin-right:-1px;white-space:nowrap;overflow-x:auto;overflow-y:hidden}.W6Z8z9UI6t0n6eBR::-webkit-scrollbar{width:2px;height:2px;background:none}.W6Z8z9UI6t0n6eBR::-webkit-scrollbar-track{background:#fff}.W6Z8z9UI6t0n6eBR::-webkit-scrollbar-thumb{background:rgba(0,0,0,.3)}._12-mP0Jg0LMigs-S{position:relative;border-top:none;margin-right:-1px;padding:0 30px;height:24px;line-height:24px;background:#eee;border-color:#c5c5c5}._12-mP0Jg0LMigs-S:first-of-type{border-left:none}._12-mP0Jg0LMigs-S[selected]{color:inherit;padding-bottom:0}._3yNcWgXYnFL4oO0H{display:none;position:absolute;left:4px;top:4px;width:16px;height:16px;line-height:16px;text-align:center;color:#666;border-radius:2px}._3yNcWgXYnFL4oO0H:before{content:\"\\2715\"}._3yNcWgXYnFL4oO0H:hover{background:#ddd}._3yNcWgXYnFL4oO0H:active{background:#ccc}._12-mP0Jg0LMigs-S:hover ._3yNcWgXYnFL4oO0H{display:block}", ""]);

// exports
exports.locals = {
	"root": "uXQuWQumLBYOxM8M",
	"head": "W6Z8z9UI6t0n6eBR",
	"item": "_12-mP0Jg0LMigs-S",
	"close": "_3yNcWgXYnFL4oO0H",
	"body": "Gv4EZ_DRvnER7itI",
	"extra": "_2TtXNzw1RvMYm-qr"
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1b4eeac0", content, true);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._15ZKHX0KCQld7BTT{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:32px;border-bottom:1px solid #c5c5c5}._2EuEYeV-h3fT5OvU{cursor:default;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;height:30px;line-height:30px;padding:0 20px;border:1px solid transparent;border-bottom:none;margin-bottom:-1px}._2EuEYeV-h3fT5OvU:hover{background:#eee}._2EuEYeV-h3fT5OvU[selected]{background:#fff;border-color:#c5c5c5;color:#419bf9;border-bottom-color:transparent;padding-bottom:1px}._2EuEYeV-h3fT5OvU[disabled]{color:#ccc;cursor:not-allowed}._2EuEYeV-h3fT5OvU[selected][disabled]{background:#fff}._18l-P964yFPNJwAg:before{display:inline-block;content:\"\\2715\"}._18l-P964yFPNJwAg:hover{color:#666}._2D9u6faOuiTr20gw{margin-top:10px}._1-dz4IiX07HvXBDT{float:right}._15ZKHX0KCQld7BTT{background:$background-color-dark;border-top:1px solid #c5c5c5;height:30px}._2EuEYeV-h3fT5OvU{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;border:none;background:#eee;border-left:1px solid #c5c5c5;border-right:1px solid #c5c5c5;margin-right:-1px;height:28px;line-height:28px}._2EuEYeV-h3fT5OvU:active{background:#aaa}._2EuEYeV-h3fT5OvU[selected]{position:relative;padding-bottom:0;border-color:#357ac8;background:#419bf9;color:#fff}._2EuEYeV-h3fT5OvU[disabled]{background:none}._2EuEYeV-h3fT5OvU[selected][disabled]{background:none;border-color:#c5c5c5}._2EuEYeV-h3fT5OvU:first-child{border-left:0}._2D9u6faOuiTr20gw{padding:0}", ""]);

// exports
exports.locals = {
	"root": "_1HemYyQ0zdBPXkus",
	"head": "_15ZKHX0KCQld7BTT",
	"item": "_2EuEYeV-h3fT5OvU",
	"close": "_18l-P964yFPNJwAg",
	"body": "_2D9u6faOuiTr20gw",
	"extra": "_1-dz4IiX07HvXBDT"
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("02d61473", content, true);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1ur5ns5PX7_xrHwF{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-app-region:drag;height:72px;border-top:1px solid #f5f4f5;border-bottom:1px solid #acaaac;background-image:-webkit-gradient(linear,left top,left bottom,from(#e9e7e9),to(#d2d0d2));background-image:-webkit-linear-gradient(top,#e9e7e9,#d2d0d2);background-image:-o-linear-gradient(top,#e9e7e9,#d2d0d2);background-image:linear-gradient(180deg,#e9e7e9,#d2d0d2);color:#3b393b;padding:0 8px}._3KWp7rrt_gPoD1lQ{font-size:13px;line-height:24px;text-align:center}", ""]);

// exports
exports.locals = {
	"root": "_1ur5ns5PX7_xrHwF",
	"title": "_3KWp7rrt_gPoD1lQ"
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2eb33720", content, true);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2Q686l_ni10t9SYn{cursor:default;margin-left:20px}._3-2VLoCSBTwktVuM{position:relative}._3R8yYeeX6Y5RtJuX{position:absolute;left:-10000px;right:-10000px;height:100%}._18B0K3qSTDw-ueBA{position:absolute;z-index:1;width:30px;height:30px;line-height:28px;text-align:center;margin-left:-20px}._18B0K3qSTDw-ueBA:before{content:\"\\25B8\"}._18B0K3qSTDw-ueBA[expanded]:before{content:\"\\25BE\"}.Li_kP9NAyqJQmBeJ{position:relative;padding:4px 12px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}._3-2VLoCSBTwktVuM:hover ._3R8yYeeX6Y5RtJuX{background:#eee}._3-2VLoCSBTwktVuM:focus{outline:none}._3-2VLoCSBTwktVuM:focus ._3R8yYeeX6Y5RtJuX{background:#eee}._3-2VLoCSBTwktVuM[readonly]{cursor:default}._3-2VLoCSBTwktVuM[readonly] ._3R8yYeeX6Y5RtJuX{background:none}._3-2VLoCSBTwktVuM[selected] ._3R8yYeeX6Y5RtJuX{background:#419bf9}._3-2VLoCSBTwktVuM[selected] ._18B0K3qSTDw-ueBA,._3-2VLoCSBTwktVuM[selected] .Li_kP9NAyqJQmBeJ{color:#fff}._3-2VLoCSBTwktVuM[disabled]{cursor:not-allowed;color:#ccc}._3-2VLoCSBTwktVuM[disabled] ._3R8yYeeX6Y5RtJuX{background:none}._3-2VLoCSBTwktVuM[selected][disabled] ._3R8yYeeX6Y5RtJuX{background:#ddd}._18B0K3qSTDw-ueBA{width:20px;height:100%;vertical-align:middle;color:#6e6e6e;font:10px/20px Hiragino Sans GB,sans-serif}._18B0K3qSTDw-ueBA:before{content:\"\\25B6\\FE0E\"}._18B0K3qSTDw-ueBA[expanded]:before{content:\"\\25BC\"}._18B0K3qSTDw-ueBA:after{display:inline-block;content:\"\";height:100%;vertical-align:middle}.Li_kP9NAyqJQmBeJ{padding:0}", ""]);

// exports
exports.locals = {
	"root": "_2Q686l_ni10t9SYn",
	"item": "_3-2VLoCSBTwktVuM",
	"back": "_3R8yYeeX6Y5RtJuX",
	"expander": "_18B0K3qSTDw-ueBA",
	"text": "Li_kP9NAyqJQmBeJ"
};

/***/ }),
/* 161 */,
/* 162 */,
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig || window.ICON_FONT_STYLE;
    return style.styleContent || '';
}

function addStyle(fontConfig) {
    var styleTag = document.createElement('style'), headElement = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type = 'text/css';
    if (headElement) {
        headElement.appendChild(styleTag);
    } else {
        window.addEventListener('load', function () {
            headElement.appendChild(styleTag);
        });
    }
}

function updateStyle(fontConfig) {
    var styleTag = document.getElementById(styleId);
    if (!styleTag) {
        addStyle(fontConfig);
    } else {
        styleTag.innerHTML = createStyleContent(fontConfig);
    }
}

module.exports = function() {
    if (window.HAS_CREATE_FONT_STYLE) {
        return;
    }
    addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if (false) {
    window.ICON_FONT_STYLE.update = updateStyle;
}


/***/ }),
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Button"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Capsules", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Capsules"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Capsule", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Capsule"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Collapse"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["CollapseItem"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["ColorPicker"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ComboSlider", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["ComboSlider"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataView", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["DataView"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataViewNode", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["DataViewNode"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Input"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Label"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LinearLayout", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["LinearLayout"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Link"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["ListView"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ListViewGroup", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["ListViewGroup"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ListViewItem", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["ListViewItem"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["NumberInput"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Pallette", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Pallette"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PalletteSlider", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["PalletteSlider"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Pane", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Pane"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PaneItem", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["PaneItem"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Popover"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Ruler", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Ruler"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Select"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectItem", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["SelectItem"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Slider"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["TabView"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TabViewItem", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["TabViewItem"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Tabs"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Titlebar", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Titlebar"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TreeViewNode", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["TreeViewNode"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CollapseTransition", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["CollapseTransition"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ListViewDivider", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["ListViewDivider"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Tab"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TreeView", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["TreeView"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TreeViewText", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["TreeViewText"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Render"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Draggable"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Droppable"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dragger", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Dragger"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GridLayout", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["GridLayout"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GridLayoutRow", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["GridLayoutRow"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GridLayoutColumn", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["GridLayoutColumn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["Popper"]; });


/***/ })
/******/ ]);
});