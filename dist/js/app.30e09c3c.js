(function(t){function e(e){for(var n,s,i=e[0],l=e[1],u=e[2],c=0,f=[];c<i.length;c++)s=i[c],a[s]&&f.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4cff983f"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t),o=function(e){l.onerror=l.onload=null,clearTimeout(u);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,r[1](s)}a[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"13a6":function(t,e,r){},"46d7":function(t,e,r){"use strict";var n=r("9ec9"),a=r.n(n);a.a},"5c48":function(t,e,r){},"7c55":function(t,e,r){"use strict";var n=r("5c48"),a=r.n(n);a.a},"9ec9":function(t,e,r){},c2c6:function(t,e,r){"use strict";var n=r("13a6"),a=r.n(n);a.a},cd49:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("router-view")],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"border fixed split-nav"},[r("div",{staticClass:"nav-brand"},[r("h3",[r("a",{attrs:{href:"#"}},[t._v("Paper Different")])])]),r("div",{staticClass:"collapsible"},[r("input",{attrs:{id:"collapsible1",type:"checkbox",name:"collapsible1"}}),r("button",[r("label",{attrs:{for:"collapsible1"}},[r("div",{staticClass:"bar1"}),r("div",{staticClass:"bar2"}),r("div",{staticClass:"bar3"})])]),r("div",{staticClass:"collapsible-body"},[r("ul",{staticClass:"inline"},[r("li",[r("a",{attrs:{href:"https://github.com/hubingliang/paper-different"}},[t._v("Github")])])])])])])}],s=(r("7c55"),r("2877")),i={},l=Object(s["a"])(i,a,o,!1,null,null,null),u=l.exports,c=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"translate"},[r("article",{staticClass:"article"},[r("p",{ref:"result",staticClass:"text-lead"},[t._v(t._s(t.result?t.result:"Paper Different"))]),r("div",{staticClass:"row flex-center"},[r("button",{on:{click:t.translate}},[t._v("Translate")]),r("button",{on:{click:t.copy}},[t._v("Copy")])])]),r("div",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"no-resize input",attrs:{placeholder:"No resize"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),t._m(0)])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"footer"},[t._v("Made by "),r("a",{attrs:{href:"http://brownhu.site"}},[t._v("BrownHu")])])}],v=r("d225"),h=r("b0b4"),b=r("308d"),d=r("6bb5"),_=r("4e2b"),m=r("9ab4"),g=r("60a3"),j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],w=function(t){function e(){return Object(v["a"])(this,e),Object(b["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(_["a"])(e,t),e}(g["c"]);m["a"]([Object(g["b"])()],w.prototype,"msg",void 0),w=m["a"]([g["a"]],w);var k=w,O=k,C=(r("c2c6"),Object(s["a"])(O,j,y,!1,null,"68359123",null)),x=C.exports,E=r("8c1a"),P=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(b["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.result="",t.input="",t}return Object(_["a"])(e,t),Object(h["a"])(e,[{key:"copy",value:function(){var t=this.$refs.result;this.$copyText(this.result,t)}},{key:"translate",value:function(){var t=this,e=Object(E["setCORS"])("http://cors-anywhere.herokuapp.com/");e(this.input,{to:"zh",tld:"cn"}).then(function(e){console.log(e.text),t.result=e.text}).catch(function(t){console.error(t)})}}]),e}(g["c"]);P=m["a"]([Object(g["a"])({components:{HelloWorld:x}})],P);var $=P,T=$,S=(r("46d7"),Object(s["a"])(T,p,f,!1,null,"161707e9",null)),M=S.exports;n["default"].use(c["a"]);var z=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),D=r("2f62");n["default"].use(D["a"]);var L=new D["a"].Store({state:{},mutations:{},actions:{}}),N=r("4eb5"),F=r.n(N);n["default"].config.productionTip=!1,n["default"].use(F.a),new n["default"]({router:z,store:L,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.30e09c3c.js.map