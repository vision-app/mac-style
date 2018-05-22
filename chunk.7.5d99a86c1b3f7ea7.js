webpackJsonpLibrary([7],{232:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("DataView（数据视图）")]),a("h2",[s._v("示例")]),a("h3",[s._v("最简形式")]),a("div",{staticClass:"u-example"},[a("u-data-view-node",{attrs:{value:{test1:null,test2:void 0,test5:"string",test6:[1,2,"abc"],number:{test4:123,test3:1/0,test4:NaN}},expanded:!0}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{\n    test1: null,\n    test2: undefined,\n    test5: 'string',\n    test6: [1, 2, 'abc'],\n    number: {\n        test4: 123,\n        test3: Infinity,\n        test4: NaN,\n    }\n}\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":expanded")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-data-view",[a("u-data-view-node",{attrs:{value:{test1:null,test2:void 0,test5:"string",test6:[1,2,"abc"],number:{test4:123,test3:1/0,test4:NaN}},expanded:!0}}),a("u-data-view-node",{attrs:{value:{},expanded:!0}}),a("u-data-view-node",{attrs:{value:[1,2,3],expanded:!0}}),a("u-data-view-node",{attrs:{value:[],expanded:!0}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{\n        test1: null,\n        test2: undefined,\n        test5: 'string',\n        test6: [1, 2, 'abc'],\n        number: {\n            test4: 123,\n            test3: Infinity,\n            test4: NaN,\n        }\n    }\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":expanded")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"{}"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":expanded")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"[1, 2, 3]"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":expanded")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"[]"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":expanded")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view-node")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view")]),s._v(">")]),s._v("\n")])]),a("div",{staticClass:"u-example"},[a("u-data-view",{attrs:{value:{test1:null,test2:void 0,test5:"string",test6:[1,2,"abc"],number:{test4:123,test3:1/0,test4:NaN}}}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{\n    test1: null,\n    test2: undefined,\n    test5: 'string',\n    test6: [1, 2, 'abc'],\n    number: {\n        test4: 123,\n        test3: Infinity,\n        test4: NaN,\n    }\n}\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("只读和禁用")]),a("div",{staticClass:"u-example"},[a("u-data-view",{attrs:{readonly:"",value:{test1:null,test2:void 0,test5:"string",test6:[1,2,"abc"],number:{test4:123,test3:1/0,test4:NaN}}}}),a("u-data-view",{attrs:{disabled:"",value:{test1:null,test2:void 0,test5:"string",test6:[1,2,"abc"],number:{test4:123,test3:1/0,test4:NaN}}}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{\n    test1: null,\n    test2: undefined,\n    test5: 'string',\n    test6: [1, 2, 'abc'],\n    number: {\n        test4: 123,\n        test3: Infinity,\n        test4: NaN,\n    }\n}\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{\n    test1: null,\n    test2: undefined,\n    test5: 'string',\n    test6: [1, 2, 'abc'],\n    number: {\n        test4: 123,\n        test3: Infinity,\n        test4: NaN,\n    }\n}\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-data-view")]),s._v(">")]),s._v("\n")])])])},staticRenderFns:[]},e=a(0)(null,n,!1,null,null,null);t.default=e.exports}});