(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d8a5f608"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/fun_fact/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,o,r,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{attrs:{id:"gamePlay"}},[n("div",{attrs:{id:"gameTop"}},[n("h1",{staticClass:"gameTitle animate-text"},[e._v("Fun Fact!")]),n("button",{staticClass:"explainButton",on:{click:function(t){e.explain=!0}}},[e._v("Instructions")]),n("transition",{attrs:{name:"fade",appear:""}},[e.explain?n("div",{staticClass:"modal-overlay",on:{click:function(t){e.explain=!1}}}):e._e()]),n("transition",{attrs:{name:"slide",appear:""}},[e.explain?n("div",{staticClass:"instructions"},[n("h1",[e._v("Welcome to Fun Fact!")]),n("p",[e._v("Click a topic and read a fun fact."),n("br"),e._v("Click the button from the same category to get a different fact or pick a different category!"),n("br"),e._v("Enjoy!")]),n("button",{staticClass:"explainButton",on:{click:function(t){e.explain=!1}}},[e._v("OK")])]):e._e()])],1),n("div",{staticClass:"card",attrs:{id:"topics"}},[n("h3",{staticClass:"categoryTitle"},[e._v("Categories")]),n("ul",[n("li",[n("button",{on:{click:function(t){return e.catFact()}}},[e._v("Cats")])]),n("li",[n("button",{on:{click:function(t){return e.dogFact()}}},[e._v("Dogs")])]),n("li",[n("button",{on:{click:function(t){return e.goatFact()}}},[e._v("Goats")])])])]),e._m(0),n("div",{staticStyle:{display:"none"},attrs:{id:"responses"}},[n("ul",[n("li",[n("button",{on:{click:function(t){return e.goBack()}}},[e._v("Back")])])])])]),e._m(1)])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"card",staticStyle:{display:"none"},attrs:{id:"fact"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("a",{attrs:{href:"https://www.linkedin.com/in/addyson-hangstefer-1081b7168?original_referer=https%3A%2F%2Fduckduckgo.com%2F"}},[e._v("My Linkedin")])])}],p={name:"Home",components:{},data:function(){return{explain:!1,catFacts:["When cats climb a tree, they cant go back down it head first. This is because their claws are facing the same way, instead, they have to go back down backward.","A group of cats is called a clowder.","A cat kneading is an act of contentment and adoration.","Both cats and humans have identical regions in the brain responsible for emotion.","Cats sleep an average of 15 hours a day.","Cats only use their meows to talk to humans, not each other.","There are 44 recognized breeds of cats.","Cats can recognize your voice. So, they are simply ignoring you.","Cats can move both ears independently and around 180 degrees."],dogFacts:["A dogs nose print is unique, much like a persons fingerprint.","The name Collie means black. (Collies once tended black-faced sheep.)","There are over 75 million pet dogs in the U.S. more than in any other country.","All puppies are born deaf.","Dogs belong to the Canidae family. The term is derived from the Latin term ‘canis’, which means dog. Although they come in various sizes, those that are categorized as canids typically have upright ears and tails, long muzzles, and teeth capable of tearing through flesh and cracking bones.","Apple and pear seeds contain arsenic, which may be deadly to dogs.","Dogs have sweat glands in between their paws.","Dogs have three eyelids. The third lid, called a nictitating membrane or “haw,” keeps the eye lubricated and protected."],goatFacts:["Goats don’t graze on grass. Get a goat to clean up the grass of your beautiful lawn and it will devour all the shrubs but grass! This is because they are browsers and they prefer eating fruits, shoots, leaves, shrubs and plants.","It is a popular belief that goats eat tin cans. Thats not true. Because they are browsers, they end up chewing anything that distantly looking like wooden vegetation and plants and these include labels on tin cans, paper and cardboard boxes.","Goats are pretty good swimmers!","Goats have little appendages of flesh hanging from their neck called wattles.","The life span of a goat is about 15 years.","Around the world, more people drink goat milk than cow milk.","Goats use the sneeze sound as an alarm. They use a sneeze to warn each other of danger, whether real or imagined.","Race horses are often given a goat friend so they will not be lonely in the stall."]}},computed:{},methods:{goBack:function(){document.getElementById("gameTop").style.display="block",document.getElementById("topics").style.display="block",document.getElementById("fact").style.display="none",document.getElementById("responses").style.display="none",document.querySelector(".explainButton").style.display="inline-block"},catFact:function(){var e=this.catFacts[Math.floor(Math.random()*this.catFacts.length)];return document.getElementById("fact").innerHTML="<h3 style=text-decoration:underline>Did you know:</h3>"+e,document.querySelector(".explainButton").style.display="none",document.getElementById("topics").style.display="none",document.getElementById("responses").style.display="block",document.getElementById("fact").style.display="block",e},dogFact:function(){var e=this.dogFacts[Math.floor(Math.random()*this.dogFacts.length)];return document.getElementById("fact").innerHTML="<h3 style=text-decoration:underline>Did you know:</h3>"+e,document.querySelector(".explainButton").style.display="none",document.getElementById("topics").style.display="none",document.getElementById("responses").style.display="block",document.getElementById("fact").style.display="block",e},goatFact:function(){var e=this.goatFacts[Math.floor(Math.random()*this.goatFacts.length)];return document.getElementById("fact").innerHTML="<h3 style=text-decoration:underline>Did you know:</h3>"+e,document.querySelector(".explainButton").style.display="none",document.getElementById("topics").style.display="none",document.getElementById("responses").style.display="block",document.getElementById("fact").style.display="block",e},beef:function(){alert("There is no beef! In fact go find your own beef OK!")},tellMore:function(){alert("Still working on this option.")}}},f=p,y=(n("cccb"),Object(i["a"])(f,d,h,!1,null,null,null)),m=y.exports;a["a"].use(u["a"]);var g=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],b=new u["a"]({routes:g}),v=b,k=n("2f62");a["a"].use(k["a"]);var w=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:v,store:w,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.9c07787f.js.map