/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"vusion-icon-font.ttf?668b0dc995332903a6a707e84a16b188\") format(\"truetype\"),\n\turl(\"vusion-icon-font.eot?668b0dc995332903a6a707e84a16b188#iefix\") format(\"embedded-opentype\"),\n\turl(\"vusion-icon-font.woff?668b0dc995332903a6a707e84a16b188\") format(\"woff\"),\n\turl(\"vusion-icon-font.svg?668b0dc995332903a6a707e84a16b188#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"vusion-icon-font.ttf?668b0dc995332903a6a707e84a16b188\") format(\"truetype\"),\n\turl(\"vusion-icon-font.eot?668b0dc995332903a6a707e84a16b188#iefix\") format(\"embedded-opentype\"),\n\turl(\"vusion-icon-font.woff?668b0dc995332903a6a707e84a16b188\") format(\"woff\"),\n\turl(\"vusion-icon-font.svg?668b0dc995332903a6a707e84a16b188#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonpLibrary([7],{

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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: /Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/template-compiler?{"id":"data-v-4b9be030","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!/Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=template&index=0!/Users/yusen/Projects/GitHub/Vusion/vusion-cli/node_modules/vue-markdown-html-loader?{"wrapper":"u-article","markdownIt":{"langPrefix":"lang-","html":true},"markdownItPlugins":[[null,"link_converter","link_open",null],[null,"link_converter","link_close",null]]}!./src/u-data-view.vue/README.md
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("DataView（数据视图）")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("最简形式")]),_c('div',{staticClass:"u-example"},[_c('u-data-view-node',{attrs:{"value":{
    test1: null,
    test2: undefined,
    test5: 'string',
    test6: [1, 2, 'abc'],
    number: {
        test4: 123,
        test3: Infinity,
        test4: NaN,
    }
},"expanded":true}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n    test1: null,\n    test2: undefined,\n    test5: 'string',\n    test6: [1, 2, 'abc'],\n    number: {\n        test4: 123,\n        test3: Infinity,\n        test4: NaN,\n    }\n}\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":expanded")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('u-data-view',[_c('u-data-view-node',{attrs:{"value":{
        test1: null,
        test2: undefined,
        test5: 'string',
        test6: [1, 2, 'abc'],
        number: {
            test4: 123,
            test3: Infinity,
            test4: NaN,
        }
    },"expanded":true}}),_c('u-data-view-node',{attrs:{"value":{},"expanded":true}}),_c('u-data-view-node',{attrs:{"value":[1, 2, 3],"expanded":true}}),_c('u-data-view-node',{attrs:{"value":[],"expanded":true}})],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n        test1: null,\n        test2: undefined,\n        test5: 'string',\n        test6: [1, 2, 'abc'],\n        number: {\n            test4: 123,\n            test3: Infinity,\n            test4: NaN,\n        }\n    }\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":expanded")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{}\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":expanded")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"[1, 2, 3]\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":expanded")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"[]\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":expanded")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view-node")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('div',{staticClass:"u-example"},[_c('u-data-view',{attrs:{"value":{
    test1: null,
    test2: undefined,
    test5: 'string',
    test6: [1, 2, 'abc'],
    number: {
        test4: 123,
        test3: Infinity,
        test4: NaN,
    }
}}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n    test1: null,\n    test2: undefined,\n    test5: 'string',\n    test6: [1, 2, 'abc'],\n    number: {\n        test4: 123,\n        test3: Infinity,\n        test4: NaN,\n    }\n}\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("只读和禁用")]),_c('div',{staticClass:"u-example"},[_c('u-data-view',{attrs:{"readonly":"","value":{
    test1: null,
    test2: undefined,
    test5: 'string',
    test6: [1, 2, 'abc'],
    number: {
        test4: 123,
        test3: Infinity,
        test4: NaN,
    }
}}}),_c('u-data-view',{attrs:{"disabled":"","value":{
    test1: null,
    test2: undefined,
    test5: 'string',
    test6: [1, 2, 'abc'],
    number: {
        test4: 123,
        test3: Infinity,
        test4: NaN,
    }
}}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n    test1: null,\n    test2: undefined,\n    test5: 'string',\n    test6: [1, 2, 'abc'],\n    number: {\n        test4: 123,\n        test3: Infinity,\n        test4: NaN,\n    }\n}\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n    test1: null,\n    test2: undefined,\n    test5: 'string',\n    test6: [1, 2, 'abc'],\n    number: {\n        test4: 123,\n        test3: Infinity,\n        test4: NaN,\n    }\n}\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-data-view")]),_vm._v(">")]),_vm._v("\n")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var README = (esExports);
// CONCATENATED MODULE: ./src/u-data-view.vue/README.md
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

/* harmony default export */ var u_data_view_vue_README = __webpack_exports__["default"] = (Component.exports);


/***/ })

});