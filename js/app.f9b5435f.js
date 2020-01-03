(function(e){function t(t){for(var n,s,u=t[0],o=t[1],l=t[2],f=0,p=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&p.push(c[s][0]),c[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var o=r[u];0!==c[o]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},c={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/undefined/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var i=o;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e623"),r("e379"),r("5dc8"),r("37e1");var n=r("2b0e"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-screen bg-gray-200"},[r("div",{staticClass:"mx-auto flex justify-center items-center pt-20"},[r("div",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 mx-auto"},[e._m(0),r("currency-selector"),e.hasSelectedCurrency?r("rates"):r("alert",{attrs:{message:"please select a currency"}})],1)])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"mb-2"},[r("h1",{staticClass:"text-2xl"},[e._v("Vurex")]),r("small",{staticClass:"mt-0 text-gray-600"},[e._v("Select a currency from the list and check the rates")])])}],s=r("2f62"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-3 my-2 rounded relative border",class:e.resolveType,attrs:{role:"alert"}},[r("span",{staticClass:"block sm:inline"},[e._v(e._s(e.message))])])},o=[],l={name:"alert",props:{message:{required:!0,type:String},type:{type:String,default:"info"}},computed:{resolveType:function(){switch(this.type){case"danger":return["bg-red-100","border-red-500","text-red-700"];case"info":default:return["bg-teal-100","border-teal-500","text-teal-700"]}}}},i=l,f=r("2877"),p=Object(f["a"])(i,u,o,!1,null,null,null),d=p.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inline-block relative w-full mb-2"},[r("select",{staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",on:{change:function(t){return e.changeSelectedCurrency(t.target.value)}}},[r("option",{attrs:{disabled:"",selected:""}},[e._v("Currency")]),e._l(e.currencies,(function(e){return r("currency-selector-item",{key:e.symbol,attrs:{currency:e}})}))],2),r("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])},b=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("option",{domProps:{value:e.currency.symbol}},[e._v(e._s(e.currency.name))])},m=[],v={name:"currency-selector-item",props:{currency:{required:!0,type:Object}}},g=v,O=Object(f["a"])(g,h,m,!1,null,null,null),j=O.exports,w={name:"currency-selector",components:{CurrencySelectorItem:j},methods:Object(s["b"])({changeSelectedCurrency:"changeSelectedCurrency"}),computed:Object(s["d"])({currencies:function(e){var t=e.currencies;return t}})},x=w,C=Object(f["a"])(x,y,b,!1,null,null,null),_=C.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.hasRates?r("div",{staticClass:"my-2 mx-auto w-2/3"},[r("div",{staticClass:"overflow-auto h-64 px-2"},e._l(e.rates,(function(e){return r("rate",{key:e.currency,attrs:{rate:e}})})),1)]):r("alert",{attrs:{message:"No rates for the selected currency",type:"danger"}})},P=[],k=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-between py-1"},[r("div",{staticClass:"flex-grow text-left"},[e._v("1 "+e._s(e.rate.currency))]),r("div",{staticClass:"flex-grow text-right"},[e._v(e._s(e.formattedValue))])])},E=[];function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(k["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={name:"rate",props:{rate:{required:!0,type:Object}},computed:$({formattedValue:function(){return new Intl.NumberFormat("it-IT",{style:"currency",currency:this.currency.symbol,maximumSignificantDigits:4}).format(this.rate.value)}},Object(s["d"])({currency:function(e){var t=e.selectedCurrency;return t}}))},T=M,q=Object(f["a"])(T,R,E,!1,null,null,null),I=q.exports;function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){Object(k["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J={name:"rates",components:{Alert:d,Rate:I},computed:A({},Object(s["c"])({hasRates:"hasRates"}),{},Object(s["d"])({rates:function(e){var t=e.rates;return t}}))},L=J,N=Object(f["a"])(L,S,P,!1,null,null,null),z=N.exports,B={name:"vurex",components:{Alert:d,CurrencySelector:_,Rates:z},beforeMount:function(){this.fetch()},methods:Object(s["b"])({fetch:"fetchCurrencies"}),computed:Object(s["c"])({hasSelectedCurrency:"hasSelectedCurrency"})},F=B,G=(r("df3d"),Object(f["a"])(F,c,a,!1,null,null,null)),H=G.exports,K=(r("7db0"),r("d81d"),r("4e82"),r("b0c0"),r("bc3a")),Q=r.n(K);n["a"].use(s["a"]);var U=new s["a"].Store({state:{currencies:[],selectedCurrency:{},rates:[]},mutations:{updateCurrencies:function(e,t){e.currencies=Object.keys(t).map((function(e){return{symbol:e,name:t[e]}})).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}))},updateRates:function(e,t){e.rates=Object.keys(t).map((function(e){return{currency:e,value:t[e]}})).sort((function(e,t){return e.currency>t.currency?1:t.currency>e.currency?-1:0}))},setSelectedCurrency:function(e,t){return e.selectedCurrency=e.currencies.find((function(e){return e.symbol===t}))},cleanRates:function(e){return e.rates={}}},actions:{fetchCurrencies:function(e){var t=e.commit;Q.a.get("https://openexchangerates.org/api/currencies.json?prettyprint=true&show_alternative=false&show_inactive=false").then((function(e){var r=e.data;return t("updateCurrencies",r)}))},fetchRates:function(e){var t=e.state,r=e.commit,n="https://api.exchangeratesapi.io/latest?base=".concat(t.selectedCurrency.symbol);Q.a.get(n).then((function(e){var t=e.data.rates;return r("updateRates",t)})).catch((function(){return r("cleanRates")}))},changeSelectedCurrency:function(e,t){var r=e.commit,n=e.dispatch;r("setSelectedCurrency",t),n("fetchRates")}},getters:{hasRates:function(e){return e.rates.length>0},hasSelectedCurrency:function(e){return Object.keys(e.selectedCurrency).length>0}}});n["a"].config.productionTip=!1,new n["a"]({store:U,render:function(e){return e(H)}}).$mount("#app")},"75f8":function(e,t,r){},df3d:function(e,t,r){"use strict";var n=r("75f8"),c=r.n(n);c.a}});
//# sourceMappingURL=app.f9b5435f.js.map