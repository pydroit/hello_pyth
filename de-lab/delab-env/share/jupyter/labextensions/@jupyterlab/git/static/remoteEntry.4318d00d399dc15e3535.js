var _JUPYTERLAB;(()=>{"use strict";var e,t,a,r,l,n,o,i,u,d,f,c,s,p,b,h,m,v,y,g,j,w,P,S={3922:(e,t,a)=>{var r={"./index":()=>Promise.all([a.e(786),a.e(631),a.e(671),a.e(271),a.e(60),a.e(456),a.e(918),a.e(69)]).then((()=>()=>a(8081))),"./extension":()=>Promise.all([a.e(786),a.e(631),a.e(671),a.e(271),a.e(60),a.e(456),a.e(918),a.e(69)]).then((()=>()=>a(8081))),"./style":()=>a.e(747).then((()=>()=>a(9747)))},l=(e,t)=>(a.R=t,t=a.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,t),n=(e,t)=>{if(a.S){var r="default",l=a.S[r];if(l&&l!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[r]=e,a.I(r,t)}};a.d(t,{get:()=>l,init:()=>n})}},E={};function k(e){var t=E[e];if(void 0!==t)return t.exports;var a=E[e]={id:e,exports:{}};return S[e].call(a.exports,a,a.exports,k),a.exports}k.m=S,k.c=E,k.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return k.d(t,{a:t}),t},k.d=(e,t)=>{for(var a in t)k.o(t,a)&&!k.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((t,a)=>(k.f[a](e,t),t)),[])),k.u=e=>e+"."+{27:"96eaab30453ba73d0911",60:"da6b264bb4419cdc1197",69:"6374f7d6f5f3a1e80ebc",114:"7a53699f2c5e25018b7f",266:"f5969d5282ba774e6e2e",271:"fdc43801676b18da771f",392:"30cd86f4511418b00146",405:"838b1225c63f6e3433aa",456:"4c4ec9b3c1ad620bed03",471:"5cc5bccd2f6fd6af1968",631:"4a2f1508bef5d86d24aa",671:"2c8dabea5db331b77f68",728:"f20d7c944ae8efb80133",747:"1378beb1a8550ab6d391",778:"a451397cccf24c873beb",786:"644a8dcbf912d5cee2c7",872:"d8cdcee24c56688c0c87",918:"2861da6d5f581ea7d186",946:"5f943a556448076627b6"}[e]+".js?v="+{27:"96eaab30453ba73d0911",60:"da6b264bb4419cdc1197",69:"6374f7d6f5f3a1e80ebc",114:"7a53699f2c5e25018b7f",266:"f5969d5282ba774e6e2e",271:"fdc43801676b18da771f",392:"30cd86f4511418b00146",405:"838b1225c63f6e3433aa",456:"4c4ec9b3c1ad620bed03",471:"5cc5bccd2f6fd6af1968",631:"4a2f1508bef5d86d24aa",671:"2c8dabea5db331b77f68",728:"f20d7c944ae8efb80133",747:"1378beb1a8550ab6d391",778:"a451397cccf24c873beb",786:"644a8dcbf912d5cee2c7",872:"d8cdcee24c56688c0c87",918:"2861da6d5f581ea7d186",946:"5f943a556448076627b6"}[e],k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@jupyterlab/git:",k.l=(a,r,l,n)=>{if(e[a])e[a].push(r);else{var o,i;if(void 0!==l)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==t+l){o=f;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,k.nc&&o.setAttribute("nonce",k.nc),o.setAttribute("data-webpack",t+l),o.src=a),e[a]=[r];var c=(t,r)=>{o.onerror=o.onload=null,clearTimeout(s);var l=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),l&&l.forEach((e=>e(r))),t)return t(r)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=c.bind(null,o.onerror),o.onload=c.bind(null,o.onload),i&&document.head.appendChild(o)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},t={};k.I=(a,r)=>{r||(r=[]);var l=t[a];if(l||(l=t[a]={}),!(r.indexOf(l)>=0)){if(r.push(l),e[a])return e[a];k.o(k.S,a)||(k.S[a]={});var n=k.S[a],o="@jupyterlab/git",i=(e,t,a,r)=>{var l=n[e]=n[e]||{},i=l[t];(!i||!i.loaded&&(!r!=!i.eager?r:o>i.from))&&(l[t]={get:a,from:o,eager:!!r})},u=[];return"default"===a&&(i("@jupyterlab/git","0.41.0",(()=>Promise.all([k.e(786),k.e(631),k.e(671),k.e(271),k.e(60),k.e(456),k.e(918),k.e(69)]).then((()=>()=>k(8081))))),i("@lumino/collections","1.9.2",(()=>Promise.all([k.e(266),k.e(918)]).then((()=>()=>k(9266))))),i("@lumino/polling","1.11.1",(()=>Promise.all([k.e(114),k.e(60)]).then((()=>()=>k(3114))))),i("@material-ui/core","4.12.4",(()=>Promise.all([k.e(786),k.e(471),k.e(631),k.e(271),k.e(456)]).then((()=>()=>k(7471))))),i("@material-ui/icons","4.11.3",(()=>Promise.all([k.e(786),k.e(778),k.e(271)]).then((()=>()=>k(3778))))),i("diff-match-patch","1.0.5",(()=>k.e(27).then((()=>()=>k(2027))))),i("react-virtualized-auto-sizer","1.0.7",(()=>Promise.all([k.e(271),k.e(728)]).then((()=>()=>k(1728))))),i("react-window","1.8.7",(()=>Promise.all([k.e(405),k.e(271),k.e(872)]).then((()=>()=>k(9405))))),i("typestyle","2.4.0",(()=>k.e(946).then((()=>()=>k(9946)))))),e[a]=u.length?Promise.all(u).then((()=>e[a]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var t=k.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=a[1]?t(a[1]):[];return a[2]&&(r.length++,r.push.apply(r,t(a[2]))),a[3]&&(r.push([]),r.push.apply(r,t(a[3]))),r},r=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var l=e[r],n=(typeof l)[0];if(r>=t.length)return"u"==n;var o=t[r],i=(typeof o)[0];if(n!=i)return"o"==n&&"n"==i||"s"==i||"u"==n;if("o"!=n&&"u"!=n&&l!=o)return l<o;r++}},l=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var r=1,n=1;n<e.length;n++)r--,a+="u"==(typeof(i=e[n]))[0]?"-":(r>0?".":"")+(r=2,i);return a}var o=[];for(n=1;n<e.length;n++){var i=e[n];o.push(0===i?"not("+u()+")":1===i?"("+u()+" || "+u()+")":2===i?o.pop()+" "+o.pop():l(i))}return u();function u(){return o.pop().replace(/^\((.+)\)$/,"$1")}},n=(e,t)=>{if(0 in e){t=a(t);var r=e[0],l=r<0;l&&(r=-r-1);for(var o=0,i=1,u=!0;;i++,o++){var d,f,c=i<e.length?(typeof e[i])[0]:"";if(o>=t.length||"o"==(f=(typeof(d=t[o]))[0]))return!u||("u"==c?i>r&&!l:""==c!=l);if("u"==f){if(!u||"u"!=c)return!1}else if(u)if(c==f)if(i<=r){if(d!=e[i])return!1}else{if(l?d>e[i]:d<e[i])return!1;d!=e[i]&&(u=!1)}else if("s"!=c&&"n"!=c){if(l||i<=r)return!1;u=!1,i--}else{if(i<=r||f<c!=l)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,i--)}}var s=[],p=s.pop.bind(s);for(o=1;o<e.length;o++){var b=e[o];s.push(1==b?p()|p():2==b?p()&p():b?n(b,t):!p())}return!!p()},o=(e,t)=>{var a=k.S[e];if(!a||!k.o(a,t))throw new Error("Shared module "+t+" doesn't exist in shared scope "+e);return a},i=(e,t)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&a[t]},u=(e,t)=>{var a=e[t];return Object.keys(a).reduce(((e,t)=>!e||!a[e].loaded&&r(e,t)?t:e),0)},d=(e,t,a,r)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+l(r)+")",f=(e,t,a,r)=>{var l=u(e,a);return n(r,l)||"undefined"!=typeof console&&console.warn&&console.warn(d(e,a,l,r)),b(e[a][l])},c=(e,t,a)=>{var l=e[t];return(t=Object.keys(l).reduce(((e,t)=>!n(a,t)||e&&!r(e,t)?e:t),0))&&l[t]},s=(e,t,a,r)=>{var n=e[a];return"No satisfying version ("+l(r)+") of shared module "+a+" found in shared scope "+t+".\nAvailable versions: "+Object.keys(n).map((e=>e+" from "+n[e].from)).join(", ")},p=(e,t,a,r)=>{"undefined"!=typeof console&&console.warn&&console.warn(s(e,t,a,r))},b=e=>(e.loaded=1,e.get()),m=(h=e=>function(t,a,r,l){var n=k.I(t);return n&&n.then?n.then(e.bind(e,t,k.S[t],a,r,l)):e(t,k.S[t],a,r,l)})(((e,t,a,r)=>(o(e,a),b(c(t,a,r)||p(t,e,a,r)||i(t,a))))),v=h(((e,t,a,r)=>(o(e,a),f(t,0,a,r)))),y=h(((e,t,a,r,l)=>t&&k.o(t,a)?f(t,0,a,r):l())),g=h(((e,t,a,r,l)=>{var n=t&&k.o(t,a)&&c(t,a,r);return n?b(n):l()})),j={},w={6271:()=>v("default","react",[1,17,0,1]),1526:()=>v("default","@lumino/coreutils",[1,1,11,0]),1840:()=>v("default","@lumino/signaling",[1,1,10,0]),4456:()=>v("default","react-dom",[1,17,0,1]),8918:()=>v("default","@lumino/algorithm",[1,1,9,0]),40:()=>v("default","@jupyterlab/translation",[1,3,6,0,,"alpha",5]),189:()=>v("default","@jupyterlab/services",[1,6,6,0,,"alpha",5]),393:()=>v("default","@jupyterlab/statusbar",[1,3,6,0,,"alpha",5]),737:()=>g("default","react-window",[1,1,8,5],(()=>k.e(405).then((()=>()=>k(9405))))),1096:()=>m("default","@jupyterlab/nbformat",[1,3,6,0,,"alpha",5]),1562:()=>v("default","@jupyterlab/codeeditor",[1,3,6,0,,"alpha",5]),1926:()=>g("default","typestyle",[1,2,0,1],(()=>k.e(946).then((()=>()=>k(9946))))),2049:()=>v("default","@jupyterlab/apputils",[1,3,6,0,,"alpha",5]),2720:()=>v("default","@lumino/messaging",[1,1,10,0]),3572:()=>v("default","@jupyterlab/coreutils",[1,5,6,0,,"alpha",5]),3708:()=>g("default","diff-match-patch",[1,1,0,4],(()=>k.e(27).then((()=>()=>k(2027))))),3992:()=>v("default","@lumino/widgets",[1,1,33,0]),4076:()=>v("default","@jupyterlab/docmanager",[1,3,6,0,,"alpha",5]),4810:()=>y("default","@material-ui/icons",[1,4,5,1],(()=>k.e(778).then((()=>()=>k(3778))))),5236:()=>v("default","@jupyterlab/mainmenu",[1,3,6,0,,"alpha",5]),5658:()=>v("default","@lumino/properties",[1,1,8,0]),5918:()=>v("default","@jupyterlab/codemirror",[1,3,6,0,,"alpha",5]),6057:()=>v("default","@lumino/commands",[1,1,19,0]),6078:()=>g("default","@lumino/polling",[1,1,3,3],(()=>k.e(114).then((()=>()=>k(3114))))),6101:()=>m("default","@jupyterlab/docregistry",[1,3,6,0,,"alpha",5]),6393:()=>y("default","@material-ui/core",[1,4,8,2],(()=>k.e(471).then((()=>()=>k(7471))))),6625:()=>g("default","@lumino/polling",[1,1,9,0],(()=>k.e(114).then((()=>()=>k(3114))))),6694:()=>v("default","@lumino/dragdrop",[1,1,13,0]),7894:()=>v("default","@jupyterlab/application",[1,3,6,0,,"alpha",5]),7993:()=>v("default","@jupyterlab/ui-components",[1,3,6,0,,"alpha",5]),8196:()=>g("default","react-virtualized-auto-sizer",[1,1,0,2],(()=>k.e(392).then((()=>()=>k(1728))))),8216:()=>v("default","@jupyterlab/statedb",[1,3,6,0,,"alpha",5]),8374:()=>v("default","@jupyterlab/rendermime",[1,3,6,0,,"alpha",5]),8681:()=>v("default","codemirror",[1,5,0,0]),8867:()=>m("default","@jupyterlab/outputarea",[1,3,6,0,,"alpha",5]),8908:()=>g("default","@lumino/collections",[1,1,2,3],(()=>k.e(266).then((()=>()=>k(9266))))),9268:()=>v("default","@jupyterlab/filebrowser",[1,3,6,0,,"alpha",5]),9520:()=>v("default","@lumino/domutils",[1,1,8,0]),9762:()=>v("default","@jupyterlab/settingregistry",[1,3,6,0,,"alpha",5])},P={60:[1526,1840],69:[40,189,393,737,1096,1562,1926,2049,2720,3572,3708,3992,4076,4810,5236,5658,5918,6057,6078,6101,6393,6625,6694,7894,7993,8196,8216,8374,8681,8867,8908,9268,9520,9762],271:[6271],456:[4456],918:[8918]},k.f.consumes=(e,t)=>{k.o(P,e)&&P[e].forEach((e=>{if(k.o(j,e))return t.push(j[e]);var a=t=>{j[e]=0,k.m[e]=a=>{delete k.c[e],a.exports=t()}},r=t=>{delete j[e],k.m[e]=a=>{throw delete k.c[e],t}};try{var l=w[e]();l.then?t.push(j[e]=l.then(a).catch(r)):a(l)}catch(e){r(e)}}))},(()=>{var e={30:0};k.f.j=(t,a)=>{var r=k.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(271|456|60|918)$/.test(t))e[t]=0;else{var l=new Promise(((a,l)=>r=e[t]=[a,l]));a.push(r[2]=l);var n=k.p+k.u(t),o=new Error;k.l(n,(a=>{if(k.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var l=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+l+": "+n+")",o.name="ChunkLoadError",o.type=l,o.request=n,r[1](o)}}),"chunk-"+t,t)}};var t=(t,a)=>{var r,l,[n,o,i]=a,u=0;if(n.some((t=>0!==e[t]))){for(r in o)k.o(o,r)&&(k.m[r]=o[r]);i&&i(k)}for(t&&t(a);u<n.length;u++)l=n[u],k.o(e,l)&&e[l]&&e[l][0](),e[l]=0},a=self.webpackChunk_jupyterlab_git=self.webpackChunk_jupyterlab_git||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),k.nc=void 0;var x=k(3922);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlab/git"]=x})();