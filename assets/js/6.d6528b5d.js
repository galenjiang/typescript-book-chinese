(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("TypeScript 是一种专注于帮助开发人员的编程语言，当错误出现时，它会提供尽可能提供非常有用的错误信息。这对于那些信任使用者的编译器来说，可能会导致轻微的信息量过载，而不会那么实用。")]),t._v(" "),a("p",[t._v("让我们来看一个在 IDE 中的例子：")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("TypeScript 错误信息分为两类：简洁和详细。")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("简洁的错误信息是为了提供一个编译器描述的错误号以及一些相关的信息，一个简洁的错误信息类似于如下所示：")]),t._v(" "),t._m(5),a("p",[t._v("然而，它没有提供更深层次的信息，如为什么这个错误会发生。这就是详细错误所需要的原因。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("详细的错误信息类似于如下所示：")]),t._v(" "),t._m(7),a("p",[t._v("详细的错误信息是为了指导使用者知道为什么一些错误（在这个例子里是类型不兼容）会发生。第一行与简洁的错误信息相同，后跟一些详细的信息。你应该阅读这些详细信息，因为对于开发者的一些疑问，它都给出了问答：")]),t._v(" "),t._m(8),a("p",[t._v("所以，最根本的原因是：")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("这能够帮助开发者修复 bar 属性的 bug（它们忘记了调用这个函数）。")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("IDE 通常会在详细的错误提示之后显示简洁版本，如下所示：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/ide.png"),alt:"ide"}}),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"解读-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解读-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" 解读 Errors")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" SomethingComplex "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("takeSomethingComplex")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SomethingComplex"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getBar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'some bar'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 一个可能会出现的错误使用")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fail "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" getBar\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("takeSomethingComplex")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fail"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 在这里 TypeScript 会报错")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这个简单的例子，演示了一个常见的程序设计错误，它调用函数失败（"),s("code",[this._v("bar: getBar")]),this._v(" 应该是 "),s("code",[this._v("bar: getBar()")]),this._v("）。幸运的是，一旦不符合类型要求，TypeScript 将会捕捉到这个错误。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"错误分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误分类","aria-hidden":"true"}},[this._v("#")]),this._v(" 错误分类")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"简洁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简洁","aria-hidden":"true"}},[this._v("#")]),this._v(" 简洁")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("TS2345")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Argument "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'{ foo: number; bar: () => string; }'")]),t._v(" is not assignable to parameter "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'SomethingComplex'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"详细"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详细","aria-hidden":"true"}},[this._v("#")]),this._v(" 详细")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ts"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nArgument "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'{ foo: number; bar: () => string; }'")]),t._v(" is not assignable to parameter "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'SomethingComplex'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  Types "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" property "),a("span",{attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" are incompatible"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    Type "),a("span",{attrs:{class:"token string"}},[t._v("'() => string'")]),t._v(" is not assignable to "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("ERROR")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Argument "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'{ foo: number; bar: () => string; }'")]),t._v(" is not assignable to parameter "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'SomethingComplex'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{attrs:{class:"token constant"}},[t._v("WHY")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("CAUSE")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ERROR")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Types "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" property "),a("span",{attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" are incompatible"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{attrs:{class:"token constant"}},[t._v("WHY")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("CAUSE")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ERROR")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Type "),a("span",{attrs:{class:"token string"}},[t._v("'() => string'")]),t._v(" is not assignable to "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在属性 "),s("code",[this._v("bar")])]),this._v(" "),s("li",[this._v("函数 "),s("code",[this._v("() => string")]),this._v(" 它应该是一个字符串。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在-ide-中怎么提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-ide-中怎么提示","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 IDE 中怎么提示")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("你通常可能只会阅读「为什么」的详细信息；")]),this._v(" "),s("li",[this._v("当你想寻找相同的错误时（使用 "),s("code",[this._v("TSXXX")]),this._v(" 错误编号，或者部分错误信息），使用简洁的版本。")])])}],!1,null,null,null);s.default=e.exports}}]);