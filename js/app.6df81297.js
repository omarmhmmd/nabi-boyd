(function(t){function e(e){for(var o,r,s=e[0],u=e[1],c=e[2],h=0,d=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/nabiboyd-com/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},"07fc":function(t,e,n){"use strict";var o=n("1794"),i=n.n(o);i.a},1794:function(t,e,n){},"1d0d":function(t,e,n){"use strict";var o=n("3cc5"),i=n.n(o);i.a},"2d5b":function(t,e,n){},"3cc5":function(t,e,n){},"54d8":function(t,e,n){"use strict";var o=n("2d5b"),i=n.n(o);i.a},"564b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-nabi"),n("router-view"),n("app-boyd")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nabi"}},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"menuOption",on:{mouseenter:function(e){return t.hoverImage()},mouseover:function(e){return t.mouseover("N","NABIBOYD")},mouseleave:function(e){return t.mouseleave("N")}}},[n("div",{staticClass:"letter"},[t._v(t._s(t.letterN))]),n("div",{staticClass:"menuChoice menuChoice-mobile-home"},[t._v(t._s(t.optionN))])])]),n("router-link",{attrs:{to:"/work"}},[n("div",{staticClass:"menuOption",on:{mouseenter:function(e){return t.hoverImage()},mouseover:function(e){return t.mouseover("A","WORK")},mouseleave:function(e){return t.mouseleave("A","WORK")}}},[n("div",{staticClass:"letter"},[t._v(t._s(t.letterA))]),n("div",{staticClass:"menuChoice"},[t._v(t._s(t.optionA))])])]),n("router-link",{attrs:{to:"/info"}},[n("div",{staticClass:"menuOption",on:{mouseenter:function(e){return t.hoverImage()},mouseover:function(e){return t.mouseover("B","ABOUT")},mouseleave:function(e){return t.mouseleave("B","ABOUT")}}},[n("div",{staticClass:"letter"},[t._v(t._s(t.letterB))]),n("div",{staticClass:"menuChoice"},[t._v(t._s(t.optionB))])])]),n("router-link",{attrs:{to:"/contact"}},[n("div",{staticClass:"menuOption",on:{mouseenter:function(e){return t.hoverImage()},mouseover:function(e){return t.mouseover("I","CONTACT")},mouseleave:function(e){return t.mouseleave("I","CONTACT")}}},[n("div",{staticClass:"letter"},[t._v(t._s(t.letterI))]),n("div",{staticClass:"menuChoice menuChoice-mobile-contact"},[t._v(t._s(t.optionI))])])])],1)},u=[],c={data:function(){return{letterN:"N",optionN:"",letterA:"A",optionA:"",letterB:"B",optionB:"",letterI:"I",optionI:""}},methods:{hoverImage:function(){this.$root.$emit("hoverImage")},mouseover:function(t,e){"NABIBOYD"==e?(this.letterN="",this.optionN=e):"WORK"==e?(this.letterA="",this.optionA=e,this.hoverIn(e)):"ABOUT"==e?(this.letterB="",this.optionB=e,this.hoverIn(e)):"CONTACT"==e&&(this.letterI="",this.optionI=e,this.hoverIn(e))},mouseleave:function(t,e){"N"==t?(this.letterN=t,this.optionN=""):"A"==t?(this.letterA=t,this.optionA="",this.hoverOut(e)):"B"==t?(this.letterB=t,this.optionB="",this.hoverOut(e)):"I"==t&&(this.letterI=t,this.optionI="",this.hoverOut(e))}}},l=c,h=(n("1d0d"),n("2877")),d=Object(h["a"])(l,s,u,!1,null,null,null),v=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"boyd"}},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"menuOption",on:{mouseenter:function(e){return t.hoverImage()},mouseover:function(e){return t.mouseover("B","NABIBOYD")},mouseleave:function(e){return t.mouseleave("B","NABIBOYD")}}},[n("div",{staticClass:"letter"},[t._v(t._s(t.letterB))]),n("div",{staticClass:"menuChoice menuChoice-mobile-home"},[t._v(t._s(t.optionB))])])]),n("router-link",{attrs:{to:"/work"}},[n("div",{staticClass:"menuOption",on:{mouseenter:function(e){return t.hoverImage()},mouseover:function(e){return t.mouseover("O","WORK")},mouseleave:function(e){return t.mouseleave("O","WORK")}}},[n("div",{staticClass:"letter"},[t._v(t._s(t.letterO))]),n("div",{staticClass:"menuChoice"},[t._v(t._s(t.optionO))])])]),n("router-link",{attrs:{to:"/info"}},[n("div",{staticClass:"menuOption",on:{mouseenter:function(e){return t.hoverImage()},mouseover:function(e){return t.mouseover("Y","ABOUT")},mouseleave:function(e){return t.mouseleave("Y","ABOUT")}}},[n("div",{staticClass:"letter"},[t._v(t._s(t.letterY))]),n("div",{staticClass:"menuChoice"},[t._v(t._s(t.optionY))])])]),n("router-link",{attrs:{to:"/contact"}},[n("div",{staticClass:"menuOption",on:{mouseenter:function(e){return t.hoverImage()},mouseover:function(e){return t.mouseover("D","CONTACT")},mouseleave:function(e){return t.mouseleave("D","CONTACT")}}},[n("div",{staticClass:"letter"},[t._v(t._s(t.letterD))]),n("div",{staticClass:"menuChoice menuChoice-mobile-contact"},[t._v(t._s(t.optionD))])])])],1)},p=[],f={data:function(){return{letterB:"B",optionB:"",letterO:"O",optionO:"",letterY:"Y",optionY:"",letterD:"D",optionD:""}},mounted:function(){},methods:{hoverImage:function(){this.$root.$emit("hoverImage")},mouseover:function(t,e){"NABIBOYD"==e?(this.letterB="",this.optionB=e):"WORK"==e?(this.letterO="",this.optionO=e,this.hoverIn(e)):"ABOUT"==e?(this.letterY="",this.optionY=e,this.hoverIn(e)):"CONTACT"==e&&(this.letterD="",this.optionD=e,this.hoverIn(e))},mouseleave:function(t,e){"B"==t?(this.letterB=t,this.optionB=""):"O"==t?(this.letterO=t,this.optionO="",this.hoverOut(e)):"Y"==t?(this.letterY=t,this.optionY="",this.hoverOut(e)):"D"==t&&(this.letterD=t,this.optionD="",this.hoverOut(e))}}},g=f,_=Object(h["a"])(g,m,p,!1,null,null,null),O=_.exports,b={data:function(){return{}},methods:{},components:{appNabi:v,appBoyd:O}},L=b,G=(n("034f"),n("80d8"),Object(h["a"])(L,a,r,!1,null,null,null)),C=G.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu"}},[n("img",{attrs:{id:"menu-img",src:t.selectedImage}}),n("div",{attrs:{id:"menu-nav"}},[n("router-link",{attrs:{to:"/work"}},[n("div",{attrs:{id:"WORK"}},[t._v("work")])]),n("router-link",{attrs:{to:"/info"}},[n("div",{attrs:{id:"INFO"}},[t._v("ABOUT")])]),n("router-link",{attrs:{to:"/contact"}},[n("div",{attrs:{id:"CONTACT"}},[t._v("contact")])]),t._m(0)],1)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{target:"_blank",href:"https://www.instagram.com/nabiboyd/"}},[n("div",[t._v("@nabiboyd")])])}],B={data:function(){return{images:["./images/LOG/LOG_001.jpg","./images/LOG/LOG_002.jpg","./images/LOG/LOG_003.jpg","./images/LOG/LOG_004.jpg","./images/LOG/LOG_005.jpg","./images/LOG/LOG_006.jpg","./images/LOG/LOG_007.jpg","./images/LOG/LOG_008.jpg","./images/LOG/LOG_009.jpg","./images/LOG/LOG_010.jpg","./images/LOG/LOG_011.jpg","./images/LOG/LOG_012.jpg","./images/LOG/LOG_013.jpg","./images/LOG/LOG_014.jpg","./images/LOG/LOG_015.jpg","./images/LOG/LOG_016.jpg","./images/LOG/LOG_017.jpg","./images/LOG/LOG_018.jpg","./images/LOG/LOG_019.jpg","./images/LOG/LOG_020.jpg","./images/LOG/LOG_021.jpg","./images/LOG/LOG_022.jpg","./images/LOG/LOG_023.jpg","./images/LOG/LOG_024.jpg","./images/LOG/LOG_025.jpg","./images/LOG/LOG_026.jpg","./images/LOG/LOG_027.jpg","./images/LOG/LOG_028.jpg","./images/LOG/LOG_029.jpg","./images/LOG/LOG_030.jpg","./images/LOG/LOG_031.jpg","./images/LOG/LOG_032.jpg","./images/LOG/LOG_033.jpg","./images/LOG/LOG_034.jpg","./images/LOG/LOG_035.jpg"],selectedImage:""}},created:function(){var t=this,e=Math.floor(Math.random()*this.images.length);this.selectedImage=this.images[e];var n=window.matchMedia("(max-width: 800px)");console.log(n),n.matches?(this.interval=setInterval(function(){return t.changeImage()},2500),console.log("match")):console.log("no match")},methods:{changeImage:function(t){var e=Math.floor(Math.random()*this.images.length);console.log(e),this.selectedImage=this.images[e]}},mounted:function(){var t=this;this.$root.$on("hoverImage",function(){var e=Math.floor(Math.random()*t.images.length);console.log(e),t.selectedImage=t.images[e]})}},y=B,A=(n("efa6"),Object(h["a"])(y,w,j,!1,null,null,null)),I=A.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contact-container"}},[n("div",{attrs:{id:"contact"}},[n("a",{attrs:{target:"_blank",href:"https://www.google.com/maps/place/Nabi+Boyd/@34.0184119,-118.4826625,15z/data=!4m5!3m4!1s0x0:0x8db0979805b32c93!8m2!3d34.0181629!4d-118.4790576"}},[n("div",{attrs:{id:"address"}},[n("div",{attrs:{id:"text"}},[n("span",[t._v("NABI BOYD")])]),n("div",[n("span",[t._v("1804 14th St., Suite 7")])]),n("div",[n("span",[t._v("Santa Monica, CA")])])])]),n("a",{attrs:{href:"mailto: info@nabiboyd.com"}},[n("div",{attrs:{id:"email"}},[n("span",[t._v("info@nabiboyd.com")])])]),n("a",{attrs:{target:"_blank",href:"https://www.instagram.com/nabiboyd/"}},[n("div",{attrs:{id:"instagram"}},[n("span",[t._v("@nabiboyd")])])])])])}],T={},x=T,S=(n("610c"),Object(h["a"])(x,k,N,!1,null,null,null)),E=S.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"info-container"}},[n("div",{attrs:{id:"info-nest"}},[n("div",[n("span",[t._v("NABI BOYD")]),t._v(" is a multi-disciplinary design office based in Santa Monica, California.\n      After years of working for distinguished architects and designers with projects ranging from\n      residential and cultural buildings to product and furniture design, we started Nabi Boyd in 2018.\n      We are currently working on residential and commercial projects located in Santa Barbara, Los Angeles,\n      and Ventura.\n    ")]),n("br"),n("div",[n("span",[t._v("Mora Nabi")]),t._v(" was born in Kabul, Afghanistan and grew up in the San Francisco Bay Area.\n      She holds a Masters of Architecture from "),n("a",{attrs:{target:"_blank",href:"http://www.aud.ucla.edu/"}},[t._v("UCLA")]),t._v(" and\n      Bachelor of Arts in Architecture from "),n("a",{attrs:{target:"_blank",href:"https://ced.berkeley.edu/academics/architecture"}},[t._v("UC Berkeley")]),t._v(".\n      Mora previously worked in the offices of "),n("a",{attrs:{target:"_blank",href:"https://www.foga.com/"}},[t._v("Gehry Partners")]),t._v(" and\n      "),n("a",{attrs:{target:"_blank",href:"https://www.ball-nogues.com/"}},[t._v("Ball-Nogues Studio.")])]),n("br"),n("div",[n("span",[t._v("Sean Boyd")]),t._v(" grew up in Carpinteria, California. He holds a Masters of Architecture from "),n("a",{attrs:{target:"_blank",href:"http://www.aud.ucla.edu/"}},[t._v("UCLA")]),t._v("\n      and a Bachelor of Arts in English Literature from "),n("a",{attrs:{target:"_blank",href:"https://ced.berkeley.edu/academics/architecture"}},[t._v("UC Berkeley")]),t._v(".\n      Sean previously worked in the office of "),n("a",{attrs:{target:"_blank",href:"http://glform.com/"}},[t._v("Greg Lynn FORM")]),t._v(" where he led building and design projects for Nike, Swarovski, and Google among others.\n    ")])])])}],D={data:function(){return{}},methods:{}},$=D,R=(n("07fc"),Object(h["a"])($,M,Y,!1,null,null,null)),U=R.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"work"}},[n("div",{attrs:{id:"coming-soon"}},[t._v("\n    COMING SOON\n  ")])])}],W={data:function(){return{selectedImage:""}}},F=W,H=(n("f702"),Object(h["a"])(F,P,K,!1,null,"574ef0d5",null)),z=H.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"project-page"}},[o("div",{attrs:{id:"image-container"}},[o("img",{attrs:{src:n("97a7"),alt:""}})]),o("div",{attrs:{id:"page-width"}},[o("div",{attrs:{id:"header"}},[o("h1",[t._v("NABIBOYD")]),o("h1",[o("img",{attrs:{src:n("e946"),alt:""}})])]),o("div",{attrs:{id:"footer"}},[o("h1",[t._v("SHEPARD MESA HOUSE")]),o("h2",[t._v("5/6")])])]),o("div",{attrs:{id:"data-box"}},[o("div",{attrs:{id:"data"}},[o("div",{staticClass:"data-column"},[o("div",[o("h1",{staticClass:"data-type"},[t._v("CLIENT")]),o("h2",[t._v("Private")])]),o("div",[o("h1",{staticClass:"data-type"},[t._v("YEAR")]),o("h2",[t._v("2016-2019")])]),o("div",[o("h1",{staticClass:"data-type"},[t._v("TYPE")]),o("h2",[t._v("Single Family")])]),o("div",[o("h1",{staticClass:"data-type"},[t._v("LOCATION")]),o("h2",[t._v("Carpinteria, CA")])]),o("div",[o("h1",{staticClass:"data-type"},[t._v("SITE AREA")]),o("h2",[t._v("38,000 sf")])]),o("div",[o("h1",{staticClass:"data-type"},[t._v("FLOOR AREA")]),o("h2",[t._v("1,800 sf")])])])]),o("div",{attrs:{id:"info"}},[o("h2",{attrs:{id:"description"}},[t._v("\n        Shepard Mesa House is a new single family home situated on a steep Cherimoya orchard in the foothills\n        of Carpinteria designed for a family of four.  The neighborhood consists of dispersed homes along a single\n        road leading up and around the crown of the hill with steep slopes on all sides.\n\n        Sited diagonally to the contours of the hill, the house slopes with the natural fall of the land with the\n        program gathered under a single gabled roof above.  The house is organized across three levels which correspond to the slope of the land.\n\n        "),o("br"),o("br"),t._v("\n        The experience of moving through the site and house is synchronized--one gets the experience of being both inside the orchard and above it.\n        Bedrooms are located at the lower elevations where they are nestled into the working orchard around them.  At this elevation, the cherimoya trees\n        provide the most privacy as the coastal hills peek out above and through them.  The main space on the upper tier opens up to the downslope and affords\n        the most expansive views.  Neighboring homes are just out of sight as the view stretches out across the valley to the backside of Rincon Mountain.\n      ")])])])])}],q={data:function(){return{}}},Q=q,X=(n("54d8"),Object(h["a"])(Q,J,V,!1,null,null,null)),Z=X.exports,tt=[{path:"/",component:I},{path:"/contact",component:E},{path:"/info",component:U},{path:"/work",component:z},{path:"/project",component:Z}];o["a"].use(i["a"]);var et=new i["a"]({routes:tt,mode:"hash"});new o["a"]({el:"#app",router:et,render:function(t){return t(C)}})},"610c":function(t,e,n){"use strict";var o=n("564b"),i=n.n(o);i.a},"64a9":function(t,e,n){},"7a72":function(t,e,n){},"80d8":function(t,e,n){"use strict";var o=n("9198"),i=n.n(o);i.a},9198:function(t,e,n){},"97a7":function(t,e,n){t.exports=n.p+"img/005.a0f14037.jpg"},e946:function(t,e,n){t.exports=n.p+"img/arrow.bd770652.svg"},efa6:function(t,e,n){"use strict";var o=n("7a72"),i=n.n(o);i.a},f702:function(t,e,n){"use strict";var o=n("fc5a"),i=n.n(o);i.a},fc5a:function(t,e,n){}});
//# sourceMappingURL=app.6df81297.js.map