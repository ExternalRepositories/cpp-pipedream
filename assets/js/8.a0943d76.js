(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{43:function(t,a,r){"use strict";r.r(a);var s=r(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"piped-ptr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped-ptr","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("piped::ptr")])]),t._v(" "),r("h2",{attrs:{id:"piped/ptrhpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" T"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("piped")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("A transparent pointer wrapper. This functions as an "),r("code",[t._v("option_type")]),t._v(", i.e. implements unary "),r("code",[t._v("*")]),t._v(", and is bool-convertible.")]),t._v(" "),r("p",[t._v("This is nice for three primary reasons:")]),t._v(" "),r("ul",[r("li",[t._v("Simple, debug-optional, cross-platform "),r("code",[t._v("nullptr")]),t._v("-check")]),t._v(" "),r("li",[t._v("Default "),r("code",[t._v("nullptr")]),t._v(" initialization!")]),t._v(" "),r("li",[t._v("All of "),r("code",[t._v("ptr<T>")]),t._v(", "),r("code",[t._v("const ptr<T>")]),t._v(", "),r("code",[t._v("ptr<const T>")]),t._v(", and "),r("code",[t._v("const ptr<const T>")]),t._v(" act exactly as you'd expect.")])]),t._v(" "),r("p",[t._v('You may be asking, "why check for nullptr?  Won\'t it just crash anyway?" Note the following will probably not crash:')]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do things not referencing instance data members")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nC "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("c "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nc"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("This may lead to unobvious errors elsewhere if you're not checking "),r("code",[t._v("this")]),t._v(" pointers in your debugger. "),r("code",[t._v("ptr<T>")]),t._v(", with debugging enabled, will cause an abort at the point you do "),r("code",[t._v("c->foo()")]),t._v(".")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"#ptr-default"}},[r("tt",[t._v("ptr()=default")])],1)]),t._v(" "),r("td",[t._v("Default-initialize to "),r("code",[t._v("nullptr")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#ptr-T-stp"}},[r("tt",[t._v("ptr(T *p)")])],1)]),t._v(" "),r("td",[t._v("Default convert from "),r("code",[t._v("T*")]),t._v("a.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#ptr-const-ptr-ampp-default"}},[r("tt",[t._v("ptr(const ptr &p)=default")])],1)]),t._v(" "),r("td",[t._v("Copy.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#S-ptr-const-ptr-S-ampp"}},[r("tt",[t._v("ptr(const ptr< S > &p)")])],1)]),t._v(" "),r("td",[t._v("Handle "),r("code",[t._v("ptr<T>")]),t._v(" to "),r("code",[t._v("ptr<const T>")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#operator-st-const"}},[r("tt",[t._v("operator *() const")])],1)]),t._v(" "),r("td",[t._v("Return a reference.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#operator-st"}},[r("tt",[t._v("operator *()")])],1)]),t._v(" "),r("td",[t._v("Non-const.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#operator-const"}},[r("tt",[t._v("operator->() const")])],1)]),t._v(" "),r("td",[t._v("Dereference.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#operator"}},[r("tt",[t._v("operator->()")])],1)]),t._v(" "),r("td",[t._v("Non-const.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#operator-bool"}},[r("tt",[t._v("operator bool()")])],1)]),t._v(" "),r("td",[r("code",[t._v("true")]),t._v(" if pointer is not "),r("code",[t._v("nullptr")]),t._v(".")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#is-null"}},[r("tt",[t._v("is_null()")])],1)]),t._v(" "),r("td",[t._v("Non-operator, affirmative check for "),r("code",[t._v("nullptr")]),t._v(".")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#get-const"}},[r("tt",[t._v("get() const")])],1)]),t._v(" "),r("td",[t._v("Non-cast-operator conversion to pointer.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#get"}},[r("tt",[t._v("get()")])],1)]),t._v(" "),r("td",[t._v("Non-const.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#operator-const-T-st-const"}},[r("tt",[t._v("operator const T *() const")])],1)]),t._v(" "),r("td",[t._v("Cast operator to "),r("code",[t._v("T*")]),t._v(".")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#operator-T-st"}},[r("tt",[t._v("operator T *()")])],1)]),t._v(" "),r("td",[t._v("Non-const.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#operator-const-ptr-ampp"}},[r("tt",[t._v("operator=(const ptr &p)")])],1)]),t._v(" "),r("td",[t._v("Assign from "),r("code",[t._v("const ptr<T>")]),t._v(". "),r("code",[t._v("T")]),t._v("'s const-ness is orthogonal.")])])])]),t._v(" "),r("h1",{attrs:{id:"Members"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Members","aria-hidden":"true"}},[t._v("#")]),t._v(" Members")]),t._v(" "),r("h2",{attrs:{id:"ptr-default"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ptr-default","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("ptr()=default")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-2","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ptr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Default-initialize to "),r("code",[t._v("nullptr")])]),t._v(" "),r("h2",{attrs:{id:"ptr-T-stp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ptr-T-stp","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("ptr(T *p)")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-3","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ptr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Default convert from "),r("code",[t._v("T*")]),t._v("a.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th"),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("p")])]),t._v(" "),r("td",[r("code",[t._v("T *")])]),t._v(" "),r("td")])])]),t._v(" "),r("h2",{attrs:{id:"ptr-const-ptr-ampp-default"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ptr-const-ptr-ampp-default","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("ptr(const ptr &p)=default")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-4","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ptr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ptr "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Copy.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th"),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("p")])]),t._v(" "),r("td",[r("code",[t._v("[object Object]")])]),t._v(" "),r("td")])])]),t._v(" "),r("h2",{attrs:{id:"S-ptr-const-ptr-S-ampp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#S-ptr-const-ptr-S-ampp","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<S,> ptr(const ptr< S > &p)")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-5","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" S undefined"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" undefined"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\npiped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ptr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" S "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Handle "),r("code",[t._v("ptr<T>")]),t._v(" to "),r("code",[t._v("ptr<const T>")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th"),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("p")])]),t._v(" "),r("td",[r("code",[t._v("[object Object]")])]),t._v(" "),r("td")])])]),t._v(" "),r("h2",{attrs:{id:"operator-st-const"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator-st-const","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("operator *() const")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-6","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("T"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Return a reference.")]),t._v(" "),r("h2",{attrs:{id:"operator-st"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator-st","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("operator *()")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-7","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("T"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-6","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Non-const.")]),t._v(" "),r("h2",{attrs:{id:"operator-const"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator-const","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("operator->() const")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-8","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("T"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-7","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Dereference.")]),t._v(" "),r("h2",{attrs:{id:"operator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("operator->()")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-9","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("T"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-8","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Non-const.")]),t._v(" "),r("h2",{attrs:{id:"operator-bool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator-bool","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("operator bool()")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-10","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-9","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[r("code",[t._v("true")]),t._v(" if pointer is not "),r("code",[t._v("nullptr")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"is-null"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#is-null","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("is_null()")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-11","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-10","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Non-operator, affirmative check for "),r("code",[t._v("nullptr")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"get-const"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-const","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("get() const")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-12","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("T"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-11","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Non-cast-operator conversion to pointer.")]),t._v(" "),r("h2",{attrs:{id:"get"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("get()")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-13","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("T"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-12","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Non-const.")]),t._v(" "),r("h2",{attrs:{id:"operator-const-T-st-const"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator-const-T-st-const","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("operator const T *() const")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-14"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-14","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-13","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Cast operator to "),r("code",[t._v("T*")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"operator-T-st"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator-T-st","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("operator T *()")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-15"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-15","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-14"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-14","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Non-const.")]),t._v(" "),r("h2",{attrs:{id:"operator-const-ptr-ampp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator-const-ptr-ampp","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("operator=(const ptr &p)")])]),t._v(" "),r("h3",{attrs:{id:"piped/ptrhpp-16"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#piped/ptrhpp-16","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<piped/ptr.hpp>")])]),t._v(" "),r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" piped"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ptr"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" T "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ptr "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"Description-15"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#Description-15","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Assign from "),r("code",[t._v("const ptr<T>")]),t._v(". "),r("code",[t._v("T")]),t._v("'s const-ness is orthogonal.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th"),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("p")])]),t._v(" "),r("td",[r("code",[t._v("[object Object]")])]),t._v(" "),r("td")])])])])},[],!1,null,null,null);a.default=e.exports}}]);