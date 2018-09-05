(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{197:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"声明空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明空间","aria-hidden":"true"}},[a._v("#")]),a._v(" 声明空间")]),a._v(" "),t("p",[a._v("在 TypeScript 里存在两种声明空间：类型声明空间与变量声明空间。这些概念，将会在下文中和大家探讨。")]),a._v(" "),t("h2",{attrs:{id:"类型声明空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型声明空间","aria-hidden":"true"}},[a._v("#")]),a._v(" 类型声明空间")]),a._v(" "),t("p",[a._v("类型声明空间包含用来当做类型注解的内容，例如以下的一些类型声明：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{attrs:{class:"token class-name"}},[a._v("Bar")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("type")]),a._v(" Bas "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("这意味着，你能将 "),t("code",[a._v("Foo")]),a._v(", "),t("code",[a._v("Bar")]),a._v(", "),t("code",[a._v("Bas")]),a._v(" 做为类型注解使用，例如：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("let")]),a._v(" foo"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Foo"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("let")]),a._v(" bar"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Bar"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("let")]),a._v(" bas"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Bas"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("注意，尽管你定义了 "),t("code",[a._v("interface Bar")]),a._v("，你并不能够将它做为一个变量使用，因为它没有在变量声明空间起作用，如下所示：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" \bBar "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("const")]),a._v(" bar "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" Bar"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),t("span",{attrs:{class:"token comment"}},[a._v("// Error: \"cannot find name 'Bar'\"")]),a._v("\n")])])]),t("p",[a._v("提示 "),t("code",[a._v("cannot find name 'Bar'")]),a._v(" 的原因是名称 "),t("code",[a._v("Bar")]),a._v(' 并未定义在变量声明空间。这将带领我们进入下一个主题 "变量声明空间"。')]),a._v(" "),t("h2",{attrs:{id:"变量声明空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量声明空间","aria-hidden":"true"}},[a._v("#")]),a._v(" 变量声明空间")]),a._v(" "),t("p",[a._v("变量声明空间包含可用作变量的内容，我们可以注意到，让 "),t("code",[a._v("Class Foo")]),a._v(" 提供了一个类型 "),t("code",[a._v("Foo")]),a._v(" 到类型声明空间。猜猜发生了什么，它同样提供了一个变量 "),t("code",[a._v("Foo")]),a._v(" 到变量声明空间，如下所示：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("const")]),a._v(" someVar "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" Foo"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("const")]),a._v(" someOtherVar "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{attrs:{class:"token number"}},[a._v("123")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("这很棒，尤其是当你想把一个类来当做变量传递时。")]),a._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("我们并不能使用一些像 "),t("code",[a._v("interface")]),a._v(" 这类只能用于类型声明空间的内容，来当做变量使用。")])]),a._v(" "),t("p",[a._v("与此相似，一些像你用 "),t("code",[a._v("var")]),a._v(" 声明的变量，也仅能在变量声明空间使用，不能用作类型注解。")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("const")]),a._v(" foo "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{attrs:{class:"token number"}},[a._v("123")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("let")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("var")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" foo"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{attrs:{class:"token comment"}},[a._v("// ERROR: \"cannot find name 'foo'\"")]),a._v("\n")])])]),t("p",[a._v("提示 "),t("code",[a._v("cannot find name")]),a._v(" 的原因是，名称 "),t("code",[a._v("foo")]),a._v(" 没有定义在类型声明空间里。")])])}],!1,null,null,null);s.default=e.exports}}]);