/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"vusion-icon-font.ttf?668b0dc995332903a6a707e84a16b188\") format(\"truetype\"),\n\turl(\"vusion-icon-font.eot?668b0dc995332903a6a707e84a16b188#iefix\") format(\"embedded-opentype\"),\n\turl(\"vusion-icon-font.woff?668b0dc995332903a6a707e84a16b188\") format(\"woff\"),\n\turl(\"vusion-icon-font.svg?668b0dc995332903a6a707e84a16b188#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"vusion-icon-font.ttf?668b0dc995332903a6a707e84a16b188\") format(\"truetype\"),\n\turl(\"vusion-icon-font.eot?668b0dc995332903a6a707e84a16b188#iefix\") format(\"embedded-opentype\"),\n\turl(\"vusion-icon-font.woff?668b0dc995332903a6a707e84a16b188\") format(\"woff\"),\n\turl(\"vusion-icon-font.svg?668b0dc995332903a6a707e84a16b188#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonpLibrary([9],{

/***/ 163:
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-6a78bcdf","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!/Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=template&index=0!/Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vue-markdown-html-loader?{"wrapper":"u-article","markdownIt":{"langPrefix":"lang-","html":true},"markdownItPlugins":[[null,"link_converter","link_open",null],[null,"link_converter","link_close",null]]}!./src/u-collapse.vue/README.md
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("Collapse")]),_c('h2',[_vm._v("Examples")]),_c('h3',[_vm._v("Basic")]),_c('div',{staticClass:"u-example"},[_c('u-collapse',[_c('u-collapse-item',{attrs:{"title":"Test"}},[_vm._v("abc")]),_c('u-collapse-item',{attrs:{"title":"Test"}},[_vm._v("abc")]),_c('u-collapse-item',{attrs:{"title":"Test"}},[_vm._v("abc")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-collapse")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-collapse-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Test\"")]),_vm._v(">")]),_vm._v("abc"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-collapse-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-collapse-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Test\"")]),_vm._v(">")]),_vm._v("abc"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-collapse-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-collapse-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Test\"")]),_vm._v(">")]),_vm._v("abc"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-collapse-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-collapse")]),_vm._v(">")]),_vm._v("\n")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var README = (esExports);
// CONCATENATED MODULE: ./src/u-collapse.vue/README.md
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  README,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var u_collapse_vue_README = __webpack_exports__["default"] = (Component.exports);


/***/ })

});