(function(t){function e(e){for(var r,i,c=e[0],o=e[1],l=e[2],f=0,p=[];f<c.length;f++)i=c[f],n[i]&&p.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"1eb1":function(t,e,a){},"5c48":function(t,e,a){},"7c55":function(t,e,a){"use strict";var r=a("5c48"),n=a.n(r);n.a},a4f2:function(t,e,a){},ccf7:function(t,e,a){"use strict";var r=a("a4f2"),n=a.n(r);n.a},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("input",{staticClass:"modal-state",attrs:{id:"modal-1",type:"checkbox"}}),t._m(0),t._m(1),a("router-view")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal"},[a("label",{staticClass:"modal-bg",attrs:{for:"modal-1"}}),a("div",{staticClass:"modal-body"},[a("label",{staticClass:"btn-close",attrs:{for:"modal-1"}},[t._v("X")]),a("h4",{staticClass:"modal-title"},[t._v("Modal Title")]),a("h5",{staticClass:"modal-subtitle"},[t._v("Modal Subtitle")]),a("p",{staticClass:"modal-text"},[t._v("This is an example of modal which is implemented with pure CSS! :D")]),a("label",{attrs:{for:"modal-1"}},[t._v("Nice!")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"border fixed split-nav"},[a("div",{staticClass:"nav-brand"},[a("h3",[a("a",{attrs:{href:"/"}},[t._v("Paper Diff")])])]),a("div",{staticClass:"collapsible"},[a("input",{attrs:{id:"collapsible1",type:"checkbox",name:"collapsible1"}}),a("button",[a("label",{attrs:{for:"collapsible1"}},[a("div",{staticClass:"bar1"}),a("div",{staticClass:"bar2"}),a("div",{staticClass:"bar3"})])]),a("div",{staticClass:"collapsible-body"},[a("ul",{staticClass:"inline"},[a("li",[a("a",{attrs:{href:"/support"}},[t._v("Support Me")])]),a("li",[a("a",{attrs:{href:"https://github.com/hubingliang/paper-different"}},[t._v("Github")])])])])])])}],i=(a("7c55"),a("2877")),c={},o=Object(i["a"])(c,n,s,!1,null,null,null),l=o.exports,u=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"translate"},[a("article",{staticClass:"article"},[a("p",{ref:"result",staticClass:"text-lead"},[t._v(t._s(t.result?t.result:"Paper Diff"))]),a("div",{staticClass:"row flex-center"},[a("button",{on:{click:t.translate}},[t._v("降重")]),a("button",{on:{click:t.copy}},[t._v("复制结果")])])]),a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"no-resize input border-4",attrs:{placeholder:"需要降重的内容......"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),t._m(0)])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"footer"},[t._v("\n    Made by\n    "),a("a",{attrs:{href:"http://brownhu.site"}},[t._v("BrownHu")])])}],d=a("d225"),b=a("b0b4"),h=a("308d"),v=a("6bb5"),m=a("4e2b"),_=a("9ab4"),y=a("60a3"),C=a("8c1a"),g=function(t){function e(){var t;return Object(d["a"])(this,e),t=Object(h["a"])(this,Object(v["a"])(e).apply(this,arguments)),t.result="",t.input="",t}return Object(m["a"])(e,t),Object(b["a"])(e,[{key:"copy",value:function(){var t=this.$refs.result;this.$copyText(this.result,t)}},{key:"translate",value:function(){var t=this,e=Object(C["setCORS"])("http://cors-anywhere.herokuapp.com/");this.result="...",e(this.input,{to:"en",tld:"cn"}).then(function(a){e(a.text,{to:"ja",tld:"cn"}).then(function(a){e(a.text,{to:"zh",tld:"cn"}).then(function(e){t.result=e.text}).catch(function(t){console.error(t)})}).catch(function(t){console.error(t)})}).catch(function(t){console.error(t)})}}]),e}(y["b"]);g=_["a"]([y["a"]],g);var w=g,j=w,x=(a("ffb6"),Object(i["a"])(j,f,p,!1,null,"2aea0db8",null)),O=x.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"support"},[a("div",{staticClass:"card",staticStyle:{width:"20rem"}},[a("img",{staticClass:"img",attrs:{src:"/img/wechatPay.jpg",alt:"wechat"}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-subtitle"},[t._v("Support Paper Diff !")]),a("p",{staticClass:"card-text"},[t._v("Thank you very much for supporting Paper Diff!!!! I will improve the rest of the website.\n      🙏🙏🙏🙏")])])])])}],k=function(t){function e(){return Object(d["a"])(this,e),Object(h["a"])(this,Object(v["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(y["b"]);k=_["a"]([y["a"]],k);var $=k,M=$,T=(a("ccf7"),Object(i["a"])(M,S,P,!1,null,"3b6eff92",null)),E=T.exports;r["default"].use(u["a"]);var D=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Translate",component:O},{path:"/support",name:"Support",component:E}]}),z=a("2f62");r["default"].use(z["a"]);var J=new z["a"].Store({state:{},mutations:{},actions:{}}),N=a("4eb5"),B=a.n(N);r["default"].config.productionTip=!1,r["default"].use(B.a),new r["default"]({router:D,store:J,render:function(t){return t(l)}}).$mount("#app")},ffb6:function(t,e,a){"use strict";var r=a("1eb1"),n=a.n(r);n.a}});
//# sourceMappingURL=app.afbf2004.js.map