(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{203:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("在此章节中，我们学习在实际应用中将会遇到的常见错误代码。")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("你可能在使用第三方的库（如：google analytics），但是你并没有 "),a("code",[t._v("declare")]),t._v(" 的声明。在没有声明它们之前，TypeScript 试图避免错误和使用变量。因此在使用一些额外的库时，你需要明确的声明使用的任何变量（"),a("router-link",{attrs:{to:"./../typings/ambient.html"}},[t._v("如何修复它")]),t._v("）。")],1),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("你可能把第三方的库做为模块（"),a("router-link",{attrs:{to:"./../project/modules.html"}},[t._v("移步模块")]),t._v("）来使用，并且没有一个与之对应的环境声明文件（"),a("router-link",{attrs:{to:"./../typings/ambient.html"}},[t._v("更多声明文件信息")]),t._v("）。")],1),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("请查看"),a("router-link",{attrs:{to:"./../project/modules.html"}},[t._v("模块")]),t._v("章节")],1),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),t._m(8),a("p",[t._v("TypeScript 正在保护你免受 JavaScript 代码的侵害，取而代之，使用类型保护：")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("修复：")]),t._v(" "),t._m(12)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"常见的-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的-error","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见的 Error")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ts2304"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts2304","aria-hidden":"true"}},[this._v("#")]),this._v(" TS2304")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("code",[this._v("Cannot find name ga")]),this._v(", "),s("code",[this._v("Cannot find name $")]),this._v(", "),s("code",[this._v("Cannot find module jquery")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ts2307"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts2307","aria-hidden":"true"}},[this._v("#")]),this._v(" TS2307")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("code",[this._v("Cannot find module 'underscore'")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ts1148"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts1148","aria-hidden":"true"}},[this._v("#")]),this._v(" TS1148")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("code",[this._v("Cannot compile modules unless the '--module' flag provided")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"捕获不能有类型注解的简短变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获不能有类型注解的简短变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 捕获不能有类型注解的简短变量")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("something")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("e")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 捕获不能有类型注解的简短变量")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("something")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("e")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 捕获不能有类型注解的简短变量")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// do...")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"接口-elementclass-不能同时扩展-component-和-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口-elementclass-不能同时扩展-component-和-component","aria-hidden":"true"}},[this._v("#")]),this._v(" 接口 "),s("code",[this._v("ElementClass")]),this._v(" 不能同时扩展 "),s("code",[this._v("Component")]),this._v(" 和 "),s("code",[this._v("Component")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当在编译上下文中同时含有两个 "),s("code",[this._v("react.d.ts")]),this._v("（"),s("code",[this._v("@types/react/index.d.ts")]),this._v("）会发生这种情况。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("删除 "),a("code",[t._v("node_modules")]),t._v(" 和任何 "),a("code",[t._v("package-lock")]),t._v("（或者 "),a("code",[t._v("yarn lock")]),t._v("），然后再一次 "),a("code",[t._v("npm insta")]),t._v("；")]),t._v(" "),a("li",[t._v("如果这不能工作，查找无效的模块（你所使用的所用用到了 "),a("code",[t._v("react.d.ts")]),t._v(" 模块应该做为 "),a("code",[t._v("peerDependency")]),t._v(" 而不是做为 "),a("code",[t._v("dependency")]),t._v(" 使用）并且把这个报告给相关模块。")])])}],!1,null,null,null);s.default=e.exports}}]);