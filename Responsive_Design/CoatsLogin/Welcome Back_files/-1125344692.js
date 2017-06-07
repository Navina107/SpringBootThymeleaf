/*
 RequireJS 2.1.11 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ea){function I(b){return"[object Function]"===O.call(b)}function J(b){return"[object Array]"===O.call(b)}function x(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function W(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function u(b,c){return ia.call(b,c)}function n(b,c){return u(b,c)&&b[c]}function D(b,c){for(var d in b)if(u(b,d)&&c(b[d],d))break}function X(b,c,d,h){c&&D(c,function(c,f){if(d||!u(b,f))!h||"object"!==typeof c||!c||J(c)||I(c)||c instanceof
RegExp?b[f]=c:(b[f]||(b[f]={}),X(b[f],c,d,h))});return b}function w(b,c){return function(){return c.apply(b,arguments)}}function fa(b){throw b;}function ga(b){if(!b)return b;var c=ea;x(b.split("."),function(b){c=c[b]});return c}function E(b,c,d,f){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=f;d&&(c.originalError=d);return c}function ja(b){function c(a,e,b){var g,p,c,d,f,l,h,K=e&&e.split("/");p=K;var q=m.map,k=q&&q["*"];if(a&&"."===a.charAt(0))if(e){p=K.slice(0,
K.length-1);a=a.split("/");e=a.length-1;m.nodeIdCompat&&T.test(a[e])&&(a[e]=a[e].replace(T,""));p=a=p.concat(a);d=p.length;for(e=0;e<d;e++)if(c=p[e],"."===c)p.splice(e,1),e-=1;else if(".."===c)if(1!==e||".."!==p[2]&&".."!==p[0])0<e&&(p.splice(e-1,2),e-=2);else break;a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if(b&&q&&(K||k)){p=a.split("/");e=p.length;a:for(;0<e;e-=1){d=p.slice(0,e).join("/");if(K)for(c=K.length;0<c;c-=1)if(b=n(q,K.slice(0,c).join("/")))if(b=n(b,d)){g=b;f=e;break a}!l&&
k&&n(k,d)&&(l=n(k,d),h=e)}!g&&l&&(g=l,f=h);g&&(p.splice(0,f,g),a=p.join("/"))}return(g=n(m.pkgs,a))?g:a}function d(a){B&&x(document.getElementsByTagName("script"),function(e){if(e.getAttribute("data-requiremodule")===a&&e.getAttribute("data-requirecontext")===l.contextName)return e.parentNode.removeChild(e),!0})}function h(a){var e=n(m.paths,a);if(e&&J(e)&&1<e.length)return e.shift(),l.require.undef(a),l.require([a]),!0}function v(a){var e,b=a?a.indexOf("!"):-1;-1<b&&(e=a.substring(0,b),a=a.substring(b+
1,a.length));return[e,a]}function q(a,e,b,g){var p,d,f=null,h=e?e.name:null,m=a,q=!0,k="";a||(q=!1,a="_@r"+(O+=1));a=v(a);f=a[0];a=a[1];f&&(f=c(f,h,g),d=n(r,f));a&&(f?k=d&&d.normalize?d.normalize(a,function(a){return c(a,h,g)}):c(a,h,g):(k=c(a,h,g),a=v(k),f=a[0],k=a[1],b=!0,p=l.nameToUrl(k)));b=!f||d||b?"":"_unnormalized"+(R+=1);return{prefix:f,name:k,parentMap:e,unnormalized:!!b,url:p,originalName:m,isDefine:q,id:(f?f+"!"+k:k)+b}}function s(a){var e=a.id,b=n(k,e);b||(b=k[e]=new l.Module(a));return b}
function t(a,e,b){var g=a.id,p=n(k,g);if(!u(r,g)||p&&!p.defineEmitComplete)if(p=s(a),p.error&&"error"===e)b(p.error);else p.on(e,b);else"defined"===e&&b(r[g])}function y(a,e){var b=a.requireModules,g=!1;if(e)e(a);else if(x(b,function(e){if(e=n(k,e))e.error=a,e.events.error&&(g=!0,e.emit("error",a))}),!g)f.onError(a)}function z(){U.length&&(ka.apply(C,[C.length,0].concat(U)),U=[])}function A(a){delete k[a];delete Y[a]}function H(a,e,b){var g=a.map.id;a.error?a.emit("error",a.error):(e[g]=!0,x(a.depMaps,
function(g,c){var d=g.id,f=n(k,d);!f||a.depMatched[c]||b[d]||(n(e,d)?(a.defineDep(c,r[d]),a.check()):H(f,e,b))}),b[g]=!0)}function F(){var a,e,b=(a=1E3*m.waitSeconds)&&l.startTime+a<(new Date).getTime(),g=[],c=[],f=!1,k=!0;if(!Z){Z=!0;D(Y,function(a){var l=a.map,m=l.id;if(a.enabled&&(l.isDefine||c.push(a),!a.error))if(!a.inited&&b)h(m)?f=e=!0:(g.push(m),d(m));else if(!a.inited&&a.fetched&&l.isDefine&&(f=!0,!l.prefix))return k=!1});if(b&&g.length)return a=E("timeout","Load timeout for modules: "+g,
null,g),a.contextName=l.contextName,y(a);k&&x(c,function(a){H(a,{},{})});b&&!e||!f||!B&&!ha||$||($=setTimeout(function(){$=0;F()},50));Z=!1}}function G(a){u(r,a[0])||s(q(a[0],null,!0)).init(a[1],a[2])}function M(a){a=a.currentTarget||a.srcElement;var e=l.onScriptLoad;a.detachEvent&&!aa?a.detachEvent("onreadystatechange",e):a.removeEventListener("load",e,!1);e=l.onScriptError;a.detachEvent&&!aa||a.removeEventListener("error",e,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function N(){var a;
for(z();C.length;){a=C.shift();if(null===a[0])return y(E("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));G(a)}}var Z,ba,l,P,$,m={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},k={},Y={},ca={},C=[],r={},V={},da={},O=1,R=1;P={require:function(a){return a.require?a.require:a.require=l.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?r[a.map.id]=a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?
a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return n(m.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};ba=function(a){this.events=n(ca,a.id)||{};this.map=a;this.shim=n(m.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};ba.prototype={init:function(a,e,b,g){g=g||{};if(!this.inited){this.factory=e;if(b)this.on("error",b);else this.events.error&&(b=w(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=
b;this.inited=!0;this.ignore=g.ignore;g.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;l.startTime=(new Date).getTime();var a=this.map;if(this.shim)l.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],w(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;V[a]||(V[a]=!0,l.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var g=this.exports,p=this.factory;if(!this.inited)this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(I(p)){if(this.events.error&&this.map.isDefine||f.onError!==fa)try{g=l.execCb(c,p,b,g)}catch(d){a=d}else g=l.execCb(c,p,b,g);this.map.isDefine&&void 0===g&&((b=this.module)?
g=b.exports:this.usingExports&&(g=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",y(this.error=a)}else g=p;this.exports=g;if(this.map.isDefine&&!this.ignore&&(r[c]=g,f.onResourceLoad))f.onResourceLoad(l,this.map,this.depMaps);A(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}},callPlugin:function(){var a=
this.map,b=a.id,d=q(a.prefix);this.depMaps.push(d);t(d,"defined",w(this,function(g){var p,d;d=n(da,this.map.id);var h=this.map.name,S=this.map.parentMap?this.map.parentMap.name:null,v=l.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(g.normalize&&(h=g.normalize(h,function(a){return c(a,S,!0)})||""),g=q(a.prefix+"!"+h,this.map.parentMap),t(g,"defined",w(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=n(k,g.id)){this.depMaps.push(g);
if(this.events.error)d.on("error",w(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=l.nameToUrl(d),this.load()):(p=w(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),p.error=w(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];D(k,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&A(a.map.id)});y(a)}),p.fromText=w(this,function(g,c){var d=a.name,h=q(d),S=Q;c&&(g=c);S&&(Q=!1);s(h);u(m.config,b)&&(m.config[d]=m.config[b]);try{f.exec(g)}catch(k){return y(E("fromtexteval",
"fromText eval for "+b+" failed: "+k,k,[b]))}S&&(Q=!0);this.depMaps.push(h);l.completeLoad(d);v([d],p)}),g.load(a.name,v,p,m))}));l.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){Y[this.map.id]=this;this.enabling=this.enabled=!0;x(this.depMaps,w(this,function(a,b){var c,g;if("string"===typeof a){a=q(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=n(P,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;t(a,"defined",w(this,function(a){this.defineDep(b,
a);this.check()}));this.errback&&t(a,"error",w(this,this.errback))}c=a.id;g=k[c];u(P,c)||!g||g.enabled||l.enable(a,this)}));D(this.pluginMaps,w(this,function(a){var b=n(k,a.id);b&&!b.enabled&&l.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){x(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};l={config:m,contextName:b,registry:k,defined:r,urlFetched:V,defQueue:C,Module:ba,makeModuleMap:q,
nextTick:f.nextTick,onError:y,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=m.shim,c={paths:!0,bundles:!0,config:!0,map:!0};D(a,function(a,b){c[b]?(m[b]||(m[b]={}),X(m[b],a,!0,!0)):m[b]=a});a.bundles&&D(a.bundles,function(a,b){x(a,function(a){a!==b&&(da[a]=b)})});a.shim&&(D(a.shim,function(a,c){J(a)&&(a={deps:a});!a.exports&&!a.init||a.exportsFn||(a.exportsFn=l.makeShimExports(a));b[c]=a}),m.shim=b);a.packages&&x(a.packages,function(a){var b;a=
"string"===typeof a?{name:a}:a;b=a.name;a.location&&(m.paths[b]=a.location);m.pkgs[b]=a.name+"/"+(a.main||"main").replace(la,"").replace(T,"")});D(k,function(a,b){a.inited||a.map.unnormalized||(a.map=q(b))});(a.deps||a.callback)&&l.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ea,arguments));return b||a.exports&&ga(a.exports)}},makeRequire:function(a,e){function h(g,c,d){var m,n;e.enableBuildCallback&&c&&I(c)&&(c.__requireJsBuild=!0);if("string"===
typeof g){if(I(c))return y(E("requireargs","Invalid require call"),d);if(a&&u(P,g))return P[g](k[a.id]);if(f.get)return f.get(l,g,a,h);m=q(g,a,!1,!0);m=m.id;return u(r,m)?r[m]:y(E("notloaded",'Module name "'+m+'" has not been loaded yet for context: '+b+(a?"":". Use require([])")))}N();l.nextTick(function(){N();n=s(q(null,a));n.skipMap=e.skipMap;n.init(g,c,d,{enabled:!0});F()});return h}e=e||{};X(h,{isBrowser:B,toUrl:function(b){var e,d=b.lastIndexOf("."),f=b.split("/")[0];-1!==d&&("."!==f&&".."!==
f||1<d)&&(e=b.substring(d,b.length),b=b.substring(0,d));return l.nameToUrl(c(b,a&&a.id,!0),e,!0)},defined:function(b){return u(r,q(b,a,!1,!0).id)},specified:function(b){b=q(b,a,!1,!0).id;return u(r,b)||u(k,b)}});a||(h.undef=function(b){z();var c=q(b,a,!0),e=n(k,b);d(b);delete r[b];delete V[c.url];delete ca[b];W(C,function(a,c){a[0]===b&&C.splice(c,1)});e&&(e.events.defined&&(ca[b]=e.events),A(b))});return h},enable:function(a){n(k,a.id)&&s(a).enable()},completeLoad:function(a){var b,c,d=n(m.shim,
a)||{},f=d.exports;for(z();C.length;){c=C.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);G(c)}c=n(k,a);if(!b&&!u(r,a)&&c&&!c.inited)if(!m.enforceDefine||f&&ga(f))G([a,d.deps||[],d.exportsFn]);else return h(a)?void 0:y(E("nodefine","No define call for "+a,null,[a]));F()},nameToUrl:function(a,b,c){var d,h,k;(d=n(m.pkgs,a))&&(a=d);if(d=n(da,a))return l.nameToUrl(d,b,c);if(f.jsExtRegExp.test(a))d=a+(b||"");else{d=m.paths;a=a.split("/");for(h=a.length;0<h;h-=1)if(k=a.slice(0,h).join("/"),
k=n(d,k)){J(k)&&(k=k[0]);a.splice(0,h,k);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":m.baseUrl)+d}return m.urlArgs?d+((-1===d.indexOf("?")?"?":"\x26")+m.urlArgs):d},load:function(a,b){f.load(l,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ma.test((a.currentTarget||a.srcElement).readyState))L=null,a=M(a),l.completeLoad(a.id)},onScriptError:function(a){var b=M(a);if(!h(b.id))return y(E("scripterror",
"Script error for: "+b.id,a,[b.id]))}};l.require=l.makeRequire();return l}function na(){if(L&&"interactive"===L.readyState)return L;W(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return L=b});return L}var f,z,A,F,M,G,L,N,s,R,oa=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,pa=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,T=/\.js$/,la=/^\.\//;z=Object.prototype;var O=z.toString,ia=z.hasOwnProperty,ka=Array.prototype.splice,B=!("undefined"===typeof window||"undefined"===
typeof navigator||!window.document),ha=!B&&"undefined"!==typeof importScripts,ma=B&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,aa="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),H={},t={},U=[],Q=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(I(requirejs))return;t=requirejs;requirejs=void 0}"undefined"===typeof require||I(require)||(t=require,require=void 0);f=requirejs=function(b,c,d,h){var v,q="_";J(b)||"string"===typeof b||(v=
b,J(c)?(b=c,c=d,d=h):b=[]);v&&v.context&&(q=v.context);(h=n(H,q))||(h=H[q]=f.s.newContext(q));v&&h.configure(v);return h.require(b,c,d)};f.config=function(b){return f(b)};f.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=f);f.version="2.1.11";f.jsExtRegExp=/^\/|:|\?|\.js$/;f.isBrowser=B;z=f.s={contexts:H,newContext:ja};f({});x(["toUrl","undef","defined","specified"],function(b){f[b]=function(){var c=H._;return c.require[b].apply(c,arguments)}});
B&&(A=z.head=document.getElementsByTagName("head")[0],F=document.getElementsByTagName("base")[0])&&(A=z.head=F.parentNode);f.onError=fa;f.createNode=function(b,c,d){c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};f.load=function(b,c,d){var h=b&&b.config||{};if(B)return h=f.createNode(h,c,d),h.setAttribute("data-requirecontext",b.contextName),h.setAttribute("data-requiremodule",
c),!h.attachEvent||h.attachEvent.toString&&0>h.attachEvent.toString().indexOf("[native code")||aa?(h.addEventListener("load",b.onScriptLoad,!1),h.addEventListener("error",b.onScriptError,!1)):(Q=!0,h.attachEvent("onreadystatechange",b.onScriptLoad)),h.src=d,N=h,F?A.insertBefore(h,F):A.appendChild(h),N=null,h;if(ha)try{importScripts(d),b.completeLoad(c)}catch(n){b.onError(E("importscripts","importScripts failed for "+c+" at "+d,n,[c]))}};B&&!t.skipDataMain&&W(document.getElementsByTagName("script"),
function(b){A||(A=b.parentNode);if(M=b.getAttribute("data-main"))return s=M,t.baseUrl||(G=s.split("/"),s=G.pop(),R=G.length?G.join("/")+"/":"./",t.baseUrl=R),s=s.replace(T,""),f.jsExtRegExp.test(s)&&(s=M),t.deps=t.deps?t.deps.concat(s):[s],!0});define=function(b,c,d){var f,n;"string"!==typeof b&&(d=c,c=b,b=null);J(c)||(d=c,c=null);!c&&I(d)&&(c=[],d.length&&(d.toString().replace(oa,"").replace(pa,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));Q&&(f=
N||na())&&(b||(b=f.getAttribute("data-requiremodule")),n=H[f.getAttribute("data-requirecontext")]);(n?n.defQueue:U).push([b,c,d])};define.amd={jQuery:!0};f.exec=function(b){return eval(b)};f(t)}})(this);

"undefined"===typeof require.config&&(require.config=function(a){this.configObject=a},require.getConfig=function(){return this.configObject});
require.config({baseUrl:"/redesign/global/js",config:{moment:{noGlobal:!0},text:{}},map:{"*":{css:"requirePlugins/require-css/css"}},paths:{"adyen-encrypt":"adyen/adyen.encrypt","aes-crypto":"aes-crypto",AlertDialog:"component/AlertDialog/AlertDialog",AmazonHelpUrls:"util/AmazonHelpUrls",backbone:"backbone",BCPLocale:"BCPLocale",billing:"evernoteClient/Billing","binary-utils":"../../../web-frontend/binary-utils",businessEmailInviteBox:"businessEmailInviteBox","market-cart":"cart",CarrierBillingExperimentHelper:"CarrierBillingExperimentHelper",
checkout:"evernoteClient/Checkout",classnames:"classnames/classnames",clipboard:"clipboard","classnames-dedupe":"classnames/classnames-dedupe","cnc-trie":"../../ClipNCiteAction/Trie","cnc-common-selector":"../../ClipNCiteAction/CommonSelector","cnc-notebook-selector":"../../ClipNCiteAction/NotebookSelector","cnc-tag-selector":"../../ClipNCiteAction/TagSelector",collapse:"collapse",common:"../../../web-frontend/common","contacts-autocomplete":"evernoteClient/Contacts.autocomplete",cookies:"../../../web-frontend/cookies",
"customize-sponsor":"evernoteClient/customize_sponsor",dataTableRequest:"evernoteClient/JQueryDataTableRequest",dataTableResponse:"evernoteClient/JQueryDataTableResponse",DateUtil:"DateUtil",decrypt:"decrypt",diacritics:"../../../web-frontend/diacritics",DismissableBanner:"component/DismissableBanner/DismissableBanner",domReady:"requirePlugins/domReady",easyXDM:"easyXDM/easyXDM.min",EmailInputBase:"component/EmailInput",EmailInput:"component/EmailInput/EmailInput",EmailInputApp:"component/EmailInput/EmailInputApp",
EventEmitter:"node/EventEmitter",SingleEmailInput:"component/EmailInput/SingleEmailInput",BulkEmailInput:"component/EmailInput/BulkEmailInput",emailParser:"emailParser/emailParser","en-locale":"en-locale",enquire:"enquire",EnforceAuthentication:"component/EnforceAuthentication/EnforceAuthentication",es6:"../../../web-frontend/es6",EvernoteAdyenEncrypt:"EvernoteAdyenEncrypt",ClipboardWithTooltip:"ClipboardWithTooltip",EvernoteTextField:"reactComponents/EvernoteTextField/EvernoteTextField",EvernoteTextFieldBase:"reactComponents/EvernoteTextField",
EvernoteTextFieldCallback:"reactComponents/EvernoteTextField/Callback",EvernoteTextFieldError:"reactComponents/EvernoteTextField/Error",EvernoteTextFieldFormat:"reactComponents/EvernoteTextField/Format",EvernoteTextFieldValidate:"reactComponents/EvernoteTextField/Validate",experiment:"experiment",FapiaoInput:"component/FapiaoInput/FapiaoInput",fieldValidator:"fieldvalidator","first-launch":"first-launch",flip:"jquery.flip.min",FluxDispatcher:"react-dispatcher-2.0.2","ga-util":"../../../web-frontend/ga-util",
"go-premium-dialog":"GoPremiumDialog/go-premium-dialog",googleConnect:"googleConnect",GoogleTagManager:"component/GoogleTagManager/GoogleTagManager",hashtable:"hashtable",hashset:"hashset",header:"../../../web-frontend/header",heap:"heap",helpIconFix:"helpiconfix",i18n:"evernoteClient/i18n2",ImageGalleryBase:"component/ImageGallery",imageGallery:"component/ImageGallery/imageGallery",Immutable:"immutable.min",IncentiveTimeUnit:"util/IncentiveTimeUnit",IncentiveType:"util/IncentiveType",internalTestingWarning:"../../../web-frontend/internalTestingWarning",
"interwindow-message-queue":"../../../web-frontend/interwindow-message-queue",jquery:"basejs/jquery-1.8.0","jquery-autoresize":"jquery/autoresize.jquery.min","jquery-fileupload":"file-upload/jquery.fileupload","jquery-iframe-transport":"file-upload/jquery.iframe-transport","jquery-jcrop":"jcrop/jquery.Jcrop","jquery-ui":"jquery/ui/jquery-ui-1.9.2.custom.min","jquery-form":"jquery/jquery.form","jquery-serializeObject":"jquery/jquery.serializeObject","jquery-tap":"jquery/jquery.tap",jqueryENDatatables:"jquery.evernote_dataTables.min",
json2:"json2/json2.min",jsonrpc:"jsonrpc-1.3.1/jsonrpc",keyCode:"../../../web-frontend/keyCode",KeyHandler:"KeyHandlerPlugins",layout:"../../../web-frontend/layout",LightboxBase:"component/Lightbox",lightbox:"component/Lightbox/lightbox",linkedNotebooksHelper:"linked-notebooks",LoadingButton:"reactComponents/LoadingButton/LoadingButton",LoadingDialog:"reactComponents/LoadingDialog/LoadingDialog","local-storage":"../../../web-frontend/local-storage",LocationUtil:"util/LocationUtil",lodash:"lodash",
logoHeader:"../../../web-frontend/logoHeader",lozenge:"lozenge/lozenge",manageSponsor:"evernoteClient/manageSponsorUsers2","market-yxbj-messaging":"marketYXBJMessaging",MarketCartSummary:"component/MarketCartSummary/MarketCartSummary",MarketCheckoutSuccessTrackingBase:"component/MarketCheckoutSuccessTracking",MarketCheckoutSuccessTracking:"component/MarketCheckoutSuccessTracking/MarketCheckoutSuccessTracking","message-queue":"../../../web-frontend/message-queue","mobile-checkout-flow":"mobile-checkout-flow",
mobservable:"mobservable/mobservable",moment:"moment/moment","moment-lang":"moment/lang","moment-l10n":"moment/moment-l10n",NativeEventEmitter:"NativeEventEmitter",paginate:"paginate",PaymentMethodSelector:"component/PaymentMethodSelector/PaymentMethodSelector",paymentProvider:"../../../web-frontend/paymentProvider","parse-util":"emailParser/parse-util","parse-names":"parse-names","password-strength":"password-strength",pdf:"pdf","pdf-compatibility":"pdf-compatibility","pdf-renderer":"pdf-renderer",
"pdf-worker":"pdf-worker",plurr:"vendor/plurr",preconditions:"../../../web-frontend/preconditions","presentationMode-banner":"../../../web-frontend/presentationMode-banner","presentationMode-viewAsPresentationDialog":"../../../web-frontend/presentationMode-viewAsPresentationDialog",PromiseUtil:"PromiseUtil","quick-register":"quick-register",react:"vendor/react-with-addons-15.1.0","react-addons-css-transition-group":"vendor/reactCSSTransitionGroupProxy","react-dom":"vendor/react-dom-15.1.0","react-dom/server":"vendor/react-dom-server-15.1.0",
"react-infinite":"vendor/react-infinite-0.9.2-patched","react-router":"react-router-0.13.3.min","react-redux":"vendor/react-redux-4.4.5","recent-contacts":"recent-contacts",redux:"vendor/redux-3.5.2","redux-thunk":"vendor/redux-thunk-2.1.0",RegistrationCheckModule:"../../modules/RegistrationCheck/RegistrationCheckModule","registration-helper":"registration-helper",resolve:"requirePlugins/requirejs-promise",responsiveTables:"responsiveTables/responsive-tables",ScrollToTopButton:"component/ScrollToTopButton/ScrollToTopButton",
security:"security",settingsSidebarDeviceAlerter:"settingsSidebarDeviceAlerter",SecuritySettingsApp:"../../secure/SecuritySettingsAction/SecuritySettingsApp",Serial:"Serial",SelectBox:"SelectBox/SelectBox",SelectorBuilder:"SelectorBuilder",SharingMenuBase:"component/SharingMenu",SharingMenu:"component/SharingMenu/SharingMenu",SimplePortal:"reactComponents/SimplePortal/SimplePortal",sjcl:"sjcl","shared-notebooks":"shared-notebooks","shared-notes":"shared-notes",simpledateformat:"simpledateformat",
skuPeriod:"../../../web-frontend/skuPeriod",sponsorCheckout:"evernoteClient/SponsorCheckout","sponsor-uri-check":"evernoteClient/sponsor_uri_check",Stopwatch:"Stopwatch",stringAffixer:"../../../web-frontend/stringAffixer",StripesFieldModifier:"StripesUtils/StripesFieldModifier",templates:"icanhaz",text:"requirePlugins/text",textext:"textExt_1.3.0",Toasts:"component/Toasts/Toasts","exponential-counter":"../../../web-frontend/exponential-counter",touchswipe:"touchswipe",tinycarousel:"jquery.tinycarousel",
tsort:"tinysort_1.3.27.min",underscore:"underscore",UserAddressSelector:"component/UserAddressSelector/UserAddressSelector",velocity:"velocity",WindowUtil:"WindowUtil","zero-clipboard":"zero-clipboard/zero-clipboard",ebh:"../../business/BusinessHomeAction",IphoneBusinessHomePresenter:"../../business/BusinessHomeAction/js/redesign/ios/iphone/IphoneBusinessHomePresenter",EbhIpadBusinessHomePresenter:"../../business/BusinessHomeAction/js/redesign/ios/ipad/IpadBusinessHomePresenter",IosHeaderPresenter:"../../business/BusinessHomeAction/js/redesign/ios/IosHeaderPresenter",
IosNotebookListPresenter:"../../business/BusinessHomeAction/js/redesign/ios/IosNotebookListPresenter",IosNotebookListElementPresenter:"../../business/BusinessHomeAction/js/redesign/ios/IosNotebookListElementPresenter",IosNotebookDetailPresenter:"../../business/BusinessHomeAction/js/redesign/ios/IosNotebookDetailPresenter",UserNamePresenter:"../../business/BusinessHomeAction/js/redesign/user/UserNamePresenter",NotebookJoinedBadgePresenter:"../../business/BusinessHomeAction/js/redesign/notebook/NotebookJoinedBadgePresenter",
EbhIpadNotebookDetailLightboxPresenter:"../../business/BusinessHomeAction/js/redesign/ios/ipad/IpadNotebookDetailLightboxPresenter",EbhIpadHeaderPresenter:"../../business/BusinessHomeAction/js/redesign/ios/ipad/IpadHeaderPresenter",EbhIphoneHeaderPresenter:"../../business/BusinessHomeAction/js/redesign/ios/iphone/IphoneHeaderPresenter",EbhIphoneHeaderNotebookListPresenter:"../../business/BusinessHomeAction/js/redesign/ios/iphone/IphoneHeaderNotebookListPresenter",EbhIphoneHeaderNotebookDetailPresenter:"../../business/BusinessHomeAction/js/redesign/ios/iphone/IphoneHeaderNotebookDetailPresenter",
EbhIosBusinessHomePresenter:"../../business/BusinessHomeAction/js/redesign/ios/IosBusinessHomePresenter",EbhNotebookListEmptyStateItemPresenter:"../../business/BusinessHomeAction/js/redesign/ios/IosNotebookListEmptyStateItemPresenter",EbhAndroidBusinessHomePresenter:"../../business/BusinessHomeAction/js/redesign/android/AndroidBusinessHomePresenter",EbhAndroidNotebookDetailPresenter:"../../business/BusinessHomeAction/js/redesign/android/AndroidNotebookDetailPresenter",EbhAndroidNotebookListViewPresenter:"../../business/BusinessHomeAction/js/redesign/android/AndroidNotebookListViewPresenter",
EbhAndroidNotebookListItemsPresenter:"../../business/BusinessHomeAction/js/redesign/android/AndroidNotebookListItemsPresenter",EbhAndroidNotebookListItemPresenter:"../../business/BusinessHomeAction/js/redesign/android/AndroidNotebookListItemPresenter",EbhAndroidNotebookListEmptyPresenter:"../../business/BusinessHomeAction/js/redesign/android/AndroidNotebookListEmptyPresenter",EbhAndroidPhoneBusinessHomePresenter:"../../business/BusinessHomeAction/js/redesign/android/phone/AndroidPhoneBusinessHomePresenter",
EbhAndroidPhoneNotebookDetailViewPresenter:"../../business/BusinessHomeAction/js/redesign/android/phone/AndroidPhoneNotebookDetailViewPresenter",EbhAndroidTabletBusinessHomePresenter:"../../business/BusinessHomeAction/js/redesign/android/tablet/AndroidTabletBusinessHomePresenter",EbhAndroidTabletNotebookDetailLightboxPresenter:"../../business/BusinessHomeAction/js/redesign/android/tablet/AndroidTabletNotebookDetailLightboxPresenter",EbhWebclientBusinessHomePresenter:"../../business/BusinessHomeAction/js/redesign/webclient/WebclientBusinessHomePresenter",
EbhWebclientNotebookListItemsPresenter:"../../business/BusinessHomeAction/js/redesign/webclient/WebclientNotebookListItemsPresenter",EbhWebclientNotebookListItemPresenter:"../../business/BusinessHomeAction/js/redesign/webclient/WebclientNotebookListItemPresenter",EbhWebclientNotebookListItemPlaceholderPresenter:"../../business/BusinessHomeAction/js/redesign/webclient/WebclientNotebookListItemPlaceholderPresenter",EbhWebclientNotebookListEmptyPresenter:"../../business/BusinessHomeAction/js/redesign/webclient/WebclientNotebookListEmptyPresenter",
EbhData:"../../business/BusinessHomeAction/js/BusinessHome.EbhData",EbhEventManager:"../../business/BusinessHomeAction/js/BusinessHome.EbhEventManager",EbhLinkedNotebook:"../../business/BusinessHomeAction/js/BusinessHome.LinkedNotebook",EbhListLazyLoader:"../../business/BusinessHomeAction/js/BusinessHome.ListLazyLoader",EbhNote:"../../business/BusinessHomeAction/js/BusinessHome.Note",EbhNotebook:"../../business/BusinessHomeAction/js/BusinessHome.Notebook",EbhPluralizer:"../../business/BusinessHomeAction/js/BusinessHome.Pluralizer",
EbhSharedNotebook:"../../business/BusinessHomeAction/js/BusinessHome.SharedNotebook",EbhScrollLoader:"../../business/BusinessHomeAction/js/BusinessHome.ScrollLoader",EbhTenaciousRequest:"../../business/BusinessHomeAction/js/BusinessHome.TenaciousRequest",EbhUser:"../../business/BusinessHomeAction/js/BusinessHome.User",EbhUtil:"../../business/BusinessHomeAction/js/BusinessHome.Util",Profiler:"../../business/BusinessHomeAction/js/Profiler",EbhAbstractPresenter:"../../business/BusinessHomeAction/js/redesign/EbhAbstractPresenter",
EbhMinimalUserPresenter:"../../business/BusinessHomeAction/js/redesign/MinimalUserPresenter",EbhModel:"../../business/BusinessHomeAction/js/framework/Model",EbhNotebookTestPresenter:"../../business/BusinessHomeAction/js/redesign/NotebookTestPresenter",EbhPresenter:"../../business/BusinessHomeAction/js/framework/Presenter",EbhRedesignNotebookPresenter:"../../business/BusinessHomeAction/js/redesign/NotebookPresenter",EbhRedesignUserPresenter:"../../business/BusinessHomeAction/js/redesign/UserPresenter",
EbhSearchPresenter:"../../business/BusinessHomeAction/js/BusinessHome.SearchPresenter",EbhNotebookPresenter:"../../business/BusinessHomeAction/js/BusinessHome.NotebookPresenter",EbhUserPresenter:"../../business/BusinessHomeAction/js/BusinessHome.UserPresenter",EbhNotePreviewManager:"../../business/BusinessHomeAction/js/BusinessHome.NotePreviewManager",EbhSortManager:"../../business/BusinessHomeAction/js/BusinessHome.SortManager",EbhTourPresenter:"../../business/BusinessHomeAction/js/BusinessHome.TourPresenter",
EbhInviteToBusinessManager:"../../business/BusinessHomeAction/js/BusinessHome.InviteToBusinessManager",EbhToastManager:"../../business/BusinessHomeAction/js/BusinessHome.ToastManager",EbhContinueSetupPresenter:"../../business/BusinessHomeAction/js/redesign/continueSetup/ContinueSetupPresenter",EbhAbstractCardPresenter:"../../business/BusinessHomeAction/js/redesign/summary/AbstractCardPresenter",EbhActiveUserPresenter:"../../business/BusinessHomeAction/js/redesign/summary/ActiveUserPresenter",EbhAdditionalActiveUsersPresenter:"../../business/BusinessHomeAction/js/redesign/summary/AdditionalActiveUsersPresenter",
EbhBizSumNotebookNamePresenter:"../../business/BusinessHomeAction/js/redesign/summary/NotebookNamePresenter",EbhBizSumUserNamePresenter:"../../business/BusinessHomeAction/js/redesign/summary/SummaryUserNamePresenter",EbhBusinessSummaryAnalytics:"../../business/BusinessHomeAction/js/redesign/summary/Analytics",EbhBusinessSummaryModel:"../../business/BusinessHomeAction/js/redesign/summary/models/BusinessSummaryModel",EbhBusinessSummaryPresenter:"../../business/BusinessHomeAction/js/redesign/summary/BusinessSummaryPresenter",
EbhBusinessSummaryHeaderPresenter:"../../business/BusinessHomeAction/js/redesign/summary/BusinessSummaryHeaderPresenter",EbhCardGridPresenter:"../../business/BusinessHomeAction/js/redesign/summary/CardGridPresenter",EbhEducationCardPresenter:"../../business/BusinessHomeAction/js/redesign/summary/EducationCardPresenter",EbhFeedbackPresenter:"../../business/BusinessHomeAction/js/redesign/summary/FeedbackPresenter",EbhNewUserListPresenter:"../../business/BusinessHomeAction/js/redesign/summary/NewUserListPresenter",
EbhNewUserListEmptyStatePresenter:"../../business/BusinessHomeAction/js/redesign/summary/NewUserListEmptyStatePresenter",EbhNewUserListElementPresenter:"../../business/BusinessHomeAction/js/redesign/summary/NewUserListElementPresenter",EbhNoteCardPresenter:"../../business/BusinessHomeAction/js/redesign/summary/NoteCardPresenter",EbhRecommendedNote:"../../business/BusinessHomeAction/js/redesign/summary/models/RecommendedNote",EbhRecommendedNotebook:"../../business/BusinessHomeAction/js/redesign/summary/models/RecommendedNotebook",
EbhRecommendedNotebookListPresenter:"../../business/BusinessHomeAction/js/redesign/summary/RecommendedNotebookListPresenter",EbhRecommendedNotebookListElementPresenter:"../../business/BusinessHomeAction/js/redesign/summary/RecommendedNotebookListElementPresenter",EbhRelatedContentCardPresenter:"../../business/BusinessHomeAction/js/redesign/summary/RelatedContentCardPresenter",BusinessCheckoutSingleCountry:"../../modules/BusinessCheckoutSingleCountry/BusinessCheckoutSingleCountry",BusinessCheckoutReseller:"../../modules/BusinessCheckoutReseller/BusinessCheckoutReseller",
BusinessCheckoutMultiCountry:"../../modules/BusinessCheckoutMultiCountry/BusinessCheckoutMultiCountry",BusinessCheckoutFreeMultiCountry:"../../business/BusinessCheckoutAction/FreeTrialMultiCountry",BusinessCheckoutPromotionMultiCountry:"../../business/BusinessCheckoutAction/PromotionMultiCountry",BusinessCheckoutForm:"../../business/BusinessCheckoutAction/BusinessCheckoutForm",BusinessCheckoutActionSingleform:"../../business/BusinessCheckoutAction/Singleform",BusinessDiscountOfferCheckoutActionResources:"../../business/BusinessDiscountOfferCheckoutAction/",
BusinessDiscountOfferCheckoutActionApp:"../../business/BusinessDiscountOfferCheckoutAction/App",BusinessDiscountOfferCheckoutActionField:"../../business/BusinessDiscountOfferCheckoutAction/Field",BusinessDiscountOfferCheckoutActionCheckoutApp:"../../business/BusinessDiscountOfferCheckoutAction/CheckoutApp",BusinessDiscountOfferCheckoutActionCheckoutMode:"../../business/BusinessDiscountOfferCheckoutAction/CheckoutMode",BusinessDiscountOfferCheckoutActionScreen:"../../business/BusinessDiscountOfferCheckoutAction/Screen",
BusinessDiscountOfferCheckoutActionCheckoutScreen:"../../business/BusinessDiscountOfferCheckoutAction/CheckoutScreen",BusinessDiscountOfferCheckoutActionOfferExpiredScreen:"../../business/BusinessDiscountOfferCheckoutAction/OfferExpiredScreen",BusinessDiscountOfferCheckoutActionErrorScreen:"../../business/BusinessDiscountOfferCheckoutAction/ErrorScreen",BusinessDiscountOfferCheckoutActionAlreadyInABusinessScreen:"../../business/BusinessDiscountOfferCheckoutAction/AlreadyInABusinessScreen",BusinessDiscountOfferCheckoutActionHeading:"../../business/BusinessDiscountOfferCheckoutAction/Heading",
BusinessDiscountOfferCheckoutActionBusinessInformation:"../../business/BusinessDiscountOfferCheckoutAction/BusinessInformation",BusinessDiscountOfferCheckoutActionAccountSelector:"../../business/BusinessDiscountOfferCheckoutAction/AccountSelector",BusinessDiscountOfferCheckoutActionBillingInformationCollector:"../../business/BusinessDiscountOfferCheckoutAction/BillingInformationCollector",BusinessDiscountOfferCheckoutActionSummary:"../../business/BusinessDiscountOfferCheckoutAction/Summary",BusinessDiscountOfferCheckoutActionFinePrint:"../../business/BusinessDiscountOfferCheckoutAction/FinePrint",
BusinessDiscountOfferCheckoutActionEvernoteBusinessAgreement:"../../business/BusinessDiscountOfferCheckoutAction/EvernoteBusinessAgreement",AdminBusinessDiscountDealsActionResources:"../../business/BusinessDiscountDealsAction",AdminBusinessDiscountDealsActionApp:"../../business/BusinessDiscountDealsAction/BusinessDiscountDealsApp",AdminBusinessDiscountDealsActionModel:"../../business/BusinessDiscountDealsAction/BusinessDiscountDealsModel",AdminBusinessDiscountDealsActionPage:"../../business/BusinessDiscountDealsAction/BusinessDiscountDealsPage",
AdminBusinessDiscountDealsActionDealTable:"../../business/BusinessDiscountDealsAction/DealTable",AdminBusinessDiscountDealsActionDealCreator:"../../business/BusinessDiscountDealsAction/DealCreator",AdminBusinessDiscountDealsActionDealFilter:"../../business/BusinessDiscountDealsAction/DealFilter",AdminBusinessDiscountDealsActionDealSorter:"../../business/BusinessDiscountDealsAction/DealSorter",AdminBusinessDiscountDealsActionOfferCreator:"../../business/BusinessDiscountDealsAction/OfferCreator",AdminBusinessDiscountDealsActionOfferTable:"../../business/BusinessDiscountDealsAction/OfferTable",
AdminBusinessDiscountDealsActionDateInput:"../../business/BusinessDiscountDealsAction/DateInput",AdminBusinessDiscountDealsActionDealRow:"../../business/BusinessDiscountDealsAction/DealRow",AdminBusinessDiscountDealsActionOfferRow:"../../business/BusinessDiscountDealsAction/OfferRow",AdminBusinessDiscountDealsActionDealTab:"../../business/BusinessDiscountDealsAction/DealTab",AdminBusinessDiscountDealsActionOfferTab:"../../business/BusinessDiscountDealsAction/OfferTab",AdminBusinessDiscountDealsActionOfferTabModeSelector:"../../business/BusinessDiscountDealsAction/OfferTabModeSelector",
AdminUnapprovedDiscountWarningDialog:"../../business/BusinessDiscountDealsAction/UnapprovedDiscountWarningDialog",CurrencyDropdown:"../../business/BusinessDiscountDealsAction/CurrencyDropdown",BackToSchoolEmailActionApp:"../../BackToSchoolEmailAction/BackToSchoolEmailApp",BackToSchoolEmailActionPage:"../../BackToSchoolEmailAction/BackToSchoolEmailPage",BackToSchoolEmailActionModel:"../../BackToSchoolEmailAction/BackToSchoolEmailModel",BackToSchoolEmailScreen:"../../BackToSchoolEmailAction/BackToSchoolEmailScreen",
BackToSchoolEmailInputScreen:"../../BackToSchoolEmailAction/InputScreen",BackToSchoolEmailSuccessScreen:"../../BackToSchoolEmailAction/SuccessScreen",BackToSchoolEmailErrorScreen:"../../BackToSchoolEmailAction/ErrorScreen",BackToSchoolEmailField:"../../BackToSchoolEmailAction/Field",BackToSchoolEmailAreaOfStudy:"../../BackToSchoolEmailAction/AreaOfStudy",BackToSchoolEmailServiceLevelErrorScreen:"../../BackToSchoolEmailAction/errorScreens/ServiceLevelErrorScreen",BackToSchoolEmailGenericErrorScreen:"../../BackToSchoolEmailAction/errorScreens/GenericErrorScreen",
BackToSchoolEmailEducationEmailUnavailableErrorScreen:"../../BackToSchoolEmailAction/errorScreens/EducationEmailUnavailableErrorScreen",BackToSchoolEmailUserIdMismatchErrorScreen:"../../BackToSchoolEmailAction/errorScreens/UserIdMismatchErrorScreen",BackToSchoolEmailExpiredUrlErrorScreen:"../../BackToSchoolEmailAction/errorScreens/ExpiredUrlErrorScreen",BackToSchoolEmailIncentiveDisabledErrorScreen:"../../BackToSchoolEmailAction/errorScreens/IncentiveDisabledErrorScreen",BackToSchoolVerificationActionApp:"../../BackToSchoolVerificationAction/BackToSchoolVerificationApp",
BackToSchoolEmailAnalytics:"../../BackToSchoolEmailAction/Analytics",BackToSchoolSupportToolApp:"../../admin/BackToSchoolSupportToolAction/App",BackToSchoolSupportToolAppService:"../../admin/BackToSchoolSupportToolAction/Service",BackToSchoolSupportToolAppPage:"../../admin/BackToSchoolSupportToolAction/Page",BackToSchoolSupportToolAppWhitelist:"../../admin/BackToSchoolSupportToolAction/Whitelist",BackToSchoolSupportToolAppEmailLookupModule:"../../admin/BackToSchoolSupportToolAction/EmailLookupModule",
BusinessServiceClient:"../../../web-frontend/BusinessServiceClient",ENThriftClient:"../../../web-frontend/ENThriftClient",NoteStoreClient:"../../../web-frontend/NoteStoreClient",UserStoreClient:"../../../web-frontend/UserStoreClient",UtilityStoreClient:"../../../web-frontend/UtilityStoreClient",RealTimeMessageService:"../../../web-frontend/RealTimeMessageService",ThriftEndpointBuilderConfig:"../../../web-frontend/ThriftEndpointBuilderConfig",ThriftClientFactory:"../../../web-frontend/ThriftClientFactory",
Errors:"../../../web-frontend/Errors",Limits:"../../../web-frontend/Limits",Types:"../../../web-frontend/Types",BusinessService:"../../../web-frontend/BusinessService",NoteStore:"../../../web-frontend/NoteStore",Utility:"../../../web-frontend/Utility",MessageStore:"../../../web-frontend/MessageStore",NoteAttributesMultiton:"multiton/NoteAttributesMultiton",NotebookMultiton:"multiton/NotebookMultiton",NoteMetadataMultiton:"multiton/NoteMetadataMultiton",UserMultiton:"multiton/UserMultiton",MultitonInternal:"multiton/internal",
MultitonInternalRichNoteMetadata:"multiton/internal/RichNoteMetadata",MultitonInternalRichNoteAttributes:"multiton/internal/RichNoteAttributes",MultitonInternalRichNotebook:"multiton/internal/RichNotebook",MultitonInternalRichBusinessTrash:"multiton/internal/RichBusinessTrash",MultitonInternalRichUser:"multiton/internal/RichUser",MultitonInternalUtil:"multiton/internal/MultitonUtil",MultitonInternalAbstractMultiton:"multiton/internal/AbstractMultiton",ProgressTracker:"component/ProgressTracker/ProgressTracker",
enforceAuthentication:"component/EnforceAuthentication",fapiaoInput:"component/FapiaoInput",marketCartSummary:"component/MarketCartSummary",paymentMethod:"component/PaymentMethodSelector",seriousConfirmation:"component/SeriousConfirmation",userAddress:"component/UserAddressSelector",ReactComponentsBase:"reactComponents",BulkEmailInputTextArea:"reactComponents/BulkEmailInput/BulkEmailInput",DropdownMenu:"reactComponents/DropdownMenu/DropdownMenu",DropdownMenuOption:"reactComponents/DropdownMenu/DropdownMenuOption",
Checkbox:"reactComponents/Checkbox/Checkbox",Dropdown:"reactComponents/Dropdown/Dropdown",DropdownTypeahead:"reactComponents/DropdownTypeahead/DropdownTypeahead",EvernoteFooter:"reactComponents/EvernoteFooter/EvernoteFooter",EvernoteHeader:"reactComponents/EvernoteHeader/EvernoteHeader",MenuOption:"reactComponents/Dropdown/MenuOption","jquery-datepicker-base":"reactComponents/Datepicker/jquery-ui-datepicker","jquery-ui-datepicker":"reactComponents/Datepicker/jquery-ui-datepicker/widgets/datepicker",
"jquery-ui-datepicker-l10n":"reactComponents/Datepicker/jquery-ui-datepicker/jquery-ui-datepicker-l10n",Datepicker:"reactComponents/Datepicker/Datepicker",SearchBar:"reactComponents/SearchBar/SearchBar",enPropTypes:"../../../web-frontend/enPropTypes",Typeahead:"reactComponents/Typeahead/Typeahead",LozengeTypeahead:"reactComponents/LozengeTypeahead/LozengeTypeahead",LozengeComponent:"reactComponents/LozengeTypeahead/LozengeComponent",LozengeAutocompleteComponent:"reactComponents/LozengeTypeahead/Autocomplete",
SharePermissionsSummary:"reactComponents/SharePermissionsSummary/SharePermissionsSummary",NotebookShareRecipientList:"reactComponents/sharingAndPermissions/NotebookShareRecipientList",NotebookShareRecipient:"reactComponents/sharingAndPermissions/NotebookShareRecipient",ChangeNotebookPermissionsDropdown:"reactComponents/sharingAndPermissions/ChangeNotebookPermissionsDropdown",ShareRecipientsSummary:"../../business/common/reactComponents/ShareRecipientsSummary/ShareRecipientsSummary",TSPBillingInformationApp:"../../business/TSPBillingInformationAction/TSPBillingInformationApp",
TSPBillingInformationTracker:"../../business/TSPBillingInformationAction/Tracker",TSPBillingTypeComponent:"../../business/TSPBillingInformationAction/BillingTypeComponent",InvoiceSeatCountChangeDialog:"../../business/common/component/InvoiceSeatCountChangeDialog/InvoiceSeatCountChangeDialog",AddUsersApp:"../../business/AddUsersAction/AddUsersApp",AddUsersAnalytics:"../../business/AddUsersAction/Analytics",AddUsersAutoApproveDomainManager:"../../business/AddUsersAction/AddUsersAutoApproveDomainManager",
AutoApproveDomainAdder:"../../business/AddUsersAction/AutoApproveDomainAdder",AutoApproveDomain:"../../business/AddUsersAction/AutoApproveDomain",AutoApproveDomainList:"../../business/AddUsersAction/AutoApproveDomainList",AutoApproveDomainModel:"../../business/AddUsersAction/AutoApproveDomainModel",BusinessSetupAutoApproveDomainApp:"../../business/BusinessSetupEmailDomainAction/BusinessSetupAutoApproveDomainApp",BusinessSetupAutoApproveDomainAdder:"../../business/BusinessSetupEmailDomainAction/BusinessSetupAutoApproveDomainAdder",
BusinessSetupAutoApproveDomainManager:"../../business/BusinessSetupEmailDomainAction/BusinessSetupAutoApproveDomainManager",BusinessSetupConfirmationAddressAdder:"../../business/BusinessSetupEmailDomainAction/BusinessSetupConfirmationAddressAdder",AccountSettingsActionBase:"../../business/AccountSettingsAction",AccountSettingsActionApp:"../../business/AccountSettingsAction/App",AccountSettingsActionAnalytics:"../../business/AccountSettingsAction/AccountSettingsAnalytics",AccountSettingsActionLimitReachedNotification:"../../business/AccountSettingsAction/LimitReachedNotification",
BillingInformation:"../../business/BillingInformationAction",BillingInformationApp:"../../business/BillingInformationAction/BillingInformationApp",BillingInformationCalloutBox:"../../business/BillingInformationAction/BillingInformationCalloutBox",BillingInformationModel:"../../business/BillingInformationAction/BillingInformationModel",BillingInformationPage:"../../business/BillingInformationAction/BillingInformationPage",BillingInformationAnalytics:"../../business/BillingInformationAction/Analytics",
BillingHistory:"../../business/BillingHistoryAction",BillingHistoryApp:"../../business/BillingHistoryAction/BillingHistoryApp",BillingHistoryAnalytics:"../../business/BillingHistoryAction/BillingHistoryAnalytics",BillingHistoryModel:"../../business/BillingHistoryAction/BillingHistoryModel",BillingHistoryPage:"../../business/BillingHistoryAction/BillingHistoryPage",BillingHistoryHeaderRow:"../../business/BillingHistoryAction/BillingHistoryHeaderRow",BillingHistoryRow:"../../business/BillingHistoryAction/BillingHistoryRow",
BillingHistoryTable:"../../business/BillingHistoryAction/BillingHistoryTable",ExportToSalesforce:"../../ExportToSalesforceAction",ExportToSalesforceApp:"../../ExportToSalesforceAction/ExportToSalesforceApp",ExportToSalesforceCreateContactScreen:"../../ExportToSalesforceAction/ExportToSalesforceCreateContactScreen",ExportToSalesforceDuplicateScreen:"../../ExportToSalesforceAction/ExportToSalesforceDuplicateScreen",ExportToSalesforceErrorScreen:"../../ExportToSalesforceAction/ExportToSalesforceErrorScreen",
ExportToSalesforceLandingScreen:"../../ExportToSalesforceAction/ExportToSalesforceLandingScreen",ExportToSalesforceModel:"../../ExportToSalesforceAction/ExportToSalesforceModel",ExportToSalesforcePage:"../../ExportToSalesforceAction/ExportToSalesforcePage",ExportToSalesforceSuccessScreen:"../../ExportToSalesforceAction/ExportToSalesforceSuccessScreen",ManageNoteSharing:"../../business/ManageNoteSharingAction",ManageNoteSharingApp:"../../business/ManageNoteSharingAction/ManageNoteSharingApp",ManageNoteSharingAnalytics:"../../business/ManageNoteSharingAction/Analytics",
ManageNoteSharingCancelConfirmDialog:"../../business/ManageNoteSharingAction/ManageNoteSharingCancelConfirmDialog",ManageNoteSharingCheckbox:"../../business/ManageNoteSharingAction/ManageNoteSharingCheckbox",ManageNoteSharingConfirmStopSharingLightbox:"../../business/ManageNoteSharingAction/ManageNoteSharingConfirmStopSharingLightbox",ManageNoteSharingDropDownMenu:"../../business/ManageNoteSharingAction/ManageNoteSharingDropDownMenu",ManageNoteSharingHeader:"../../business/ManageNoteSharingAction/ManageNoteSharingHeader",
ManageNoteSharingModel:"../../business/ManageNoteSharingAction/ManageNoteSharingModel",ManageNoteSharingNoteRow:"../../business/ManageNoteSharingAction/ManageNoteSharingNoteRow",ManageNoteSharingNotesList:"../../business/ManageNoteSharingAction/ManageNoteSharingNotesList",ManageNoteSharingNoteShareRelationships:"../../business/ManageNoteSharingAction/ManageNoteSharingNoteShareRelationships",ManageNoteSharingPage:"../../business/ManageNoteSharingAction/ManageNoteSharingPage",ManageNoteSharingRecipient:"../../business/ManageNoteSharingAction/ManageNoteSharingRecipient",
ManageNoteSharingRecipientList:"../../business/ManageNoteSharingAction/ManageNoteSharingRecipientList",ManageNoteSharingSearchFilters:"../../business/ManageNoteSharingAction/ManageNoteSharingSearchFilters",ManageNoteSharingUnrecoverableErrorDialog:"../../business/ManageNoteSharingAction/ManageNoteSharingUnrecoverableErrorDialog",ManageTags:"../../business/ManageTagsAction",ManageTagsApp:"../../business/ManageTagsAction/ManageTagsApp",ManageTagsActionDropdown:"../../business/ManageTagsAction/ManageTagsActionDropdown",
ManageTagsActionHeader:"../../business/ManageTagsAction/ManageTagsActionHeader",ManageTagsContainer:"../../business/ManageTagsAction/ManageTagsContainer",ManageTagsDeleteDialog:"../../business/ManageTagsAction/ManageTagsDeleteDialog",ManageTagsHeader:"../../business/ManageTagsAction/ManageTagsHeader",ManageTagsLightBox:"../../business/ManageTagsAction/ManageTagsLightBox",ManageTagsMenuOption:"../../business/ManageTagsAction/ManageTagsMenuOption",ManageTagsMergeDialog:"../../business/ManageTagsAction/ManageTagsMergeDialog",
ManageTagsModel:"../../business/ManageTagsAction/ManageTagsModel",ManageTagsPage:"../../business/ManageTagsAction/ManageTagsPage",ManageTagsRenameDialog:"../../business/ManageTagsAction/ManageTagsRenameDialog",ManageTagsSearchBar:"../../business/ManageTagsAction/ManageTagsSearchBar",ManageTagsSortByDropdown:"../../business/ManageTagsAction/ManageTagsSortByDropdown",ManageTagsTagSorter:"../../business/ManageTagsAction/ManageTagsTagSorter",ManageTrash:"../../business/ManageTrashAction",ManageTrashApp:"../../business/ManageTrashAction/ManageTrashApp",
ManageTrashAnalytics:"../../business/ManageTrashAction/ManageTrashAnalytics",ManageTrashHeader:"../../business/ManageTrashAction/ManageTrashHeader",ManageTrashMenuOption:"../../business/ManageTrashAction/ManageTrashMenuOption",ManageTrashNoteList:"../../business/ManageTrashAction/ManageTrashNoteList",ManageTrashNoteRow:"../../business/ManageTrashAction/ManageTrashNoteRow",ManageTrashPage:"../../business/ManageTrashAction/ManageTrashPage",ManageTrashSortByDropdown:"../../business/ManageTrashAction/ManageTrashSortByDropdown",
ManageTrashUtil:"../../business/ManageTrashAction/ManageTrashUtil",ManageUsers:"../../business/ManageUsersAction",ManageUsersActionDropdown:"../../business/ManageUsersAction/ManageUsersActionDropdown",ManageUsersActiveTab:"../../business/ManageUsersAction/ManageUsersActiveTab",ManageUsersAnalytics:"../../business/ManageUsersAction/Analytics",ManageUsersApp:"../../business/ManageUsersAction/ManageUsersApp",ManageUsersApproveDenyLightbox:"../../business/ManageUsersAction/ManageUsersApproveDenyLightbox",
ManageUsersChangeEmailLightbox:"../../business/ManageUsersAction/ManageUsersChangeEmailLightbox",ManageUsersCheckbox:"../../business/ManageUsersAction/ManageUsersCheckbox",ManageUsersDeactivatedTab:"../../business/ManageUsersAction/ManageUsersDeactivatedTab",ManageUsersHeader:"../../business/ManageUsersAction/ManageUsersHeader",ManageUsersLightbox:"../../business/ManageUsersAction/ManageUsersLightbox",ManageUsersMenuOption:"../../business/ManageUsersAction/ManageUsersMenuOption",ManageUsersModel:"../../business/ManageUsersAction/ManageUsersModel",
ManageUsersPage:"../../business/ManageUsersAction/ManageUsersPage",ManageUsersPendingRow:"../../business/ManageUsersAction/ManageUsersPendingRow",ManageUsersRequestedRow:"../../business/ManageUsersAction/ManageUsersRequestedRow",ManageUsersRequestedTab:"../../business/ManageUsersAction/ManageUsersRequestedTab",ManageUsersSearchFilters:"../../business/ManageUsersAction/ManageUsersSearchFilters",ManageUsersSortDropdown:"../../business/ManageUsersAction/ManageUsersSortDropdown",ManageUsersTab:"../../business/ManageUsersAction/ManageUsersTab",
ManageUsersTabBar:"../../business/ManageUsersAction/ManageUsersTabBar",ManageUsersUserRow:"../../business/ManageUsersAction/ManageUsersUserRow",ManageUsersWireframeButton:"../../business/ManageUsersAction/ManageUsersWireframeButton",BusinessAccessHistory:"../../business/BusinessAccessHistoryAction",BusinessAccessHistoryApp:"../../business/BusinessAccessHistoryAction/BusinessAccessHistoryApp",BusinessAccessHistoryHeader:"../../business/BusinessAccessHistoryAction/BusinessAccessHistoryHeader",BusinessAccessHistoryDatepickerDropdown:"../../business/BusinessAccessHistoryAction/BusinessAccessHistoryDatepickerDropdown",
BusinessAccessHistoryModel:"../../business/BusinessAccessHistoryAction/BusinessAccessHistoryModel",BusinessAccessHistoryPage:"../../business/BusinessAccessHistoryAction/BusinessAccessHistoryPage",BusinessAccessHistoryRow:"../../business/BusinessAccessHistoryAction/BusinessAccessHistoryRow",BusinessAccessHistoryTable:"../../business/BusinessAccessHistoryAction/BusinessAccessHistoryTable",BusinessAccessHistoryDisplayUtil:"../../business/BusinessAccessHistoryAction/BusinessAccessHistoryDisplayUtil",
BobMigrationToolApp:"../../business/BobMigrationToolAction/App",BobMigrationToolAppService:"../../business/BobMigrationToolAction/Service",BobMigrationToolAppPage:"../../business/BobMigrationToolAction/Page",BobMigrationToolAppAccountMigrationModule:"../../business/BobMigrationToolAction/AccountMigrationModule",MarketDispatcher:"market/flux/dispatcher/MarketDispatcher",MarketConstants:"market/flux/constants/MarketConstants",MarketUtils:"market/flux/utils/MarketUtils",MarketChangeListener:"market/analytics/ChangeListener",
MarketClickListener:"market/analytics/ClickListener",MarketSubmitListener:"market/analytics/SubmitListener",MarketTrackingInfo:"market/analytics/TrackingInfo",MarketEETracker:"market/analytics/EcommerceTracking",MarketEEDocumentTrackingParser:"market/analytics/DocumentTrackingParser",AddToCartButtonStore:"market/flux/stores/AddToCartButtonStore",CatalogStore:"market/flux/stores/CatalogStore",SelectedVariantStore:"market/flux/stores/SelectedVariantStore",StringStore:"market/flux/stores/StringStore",
VariantQuantityStore:"market/flux/stores/VariantQuantityStore",VariantSelectorStore:"market/flux/stores/VariantSelectorStore",CartStore:"market/flux/stores/CartStore",FormSubmitRouterStore:"market/flux/stores/FormSubmitRouterStore",ExperimentStore:"market/flux/stores/ExperimentStore",CatalogActions:"market/flux/actions/CatalogActions",VariantSelectorActions:"market/flux/actions/VariantSelectorActions",StringActions:"market/flux/actions/StringActions",CartActions:"market/flux/actions/CartActions",
FormSubmitRouterActions:"market/flux/actions/FormSubmitRouterActions",ExperimentActions:"market/flux/actions/ExperimentActions",ScrollHandler:"market/flux/mixins/ScrollHandlerMixin",ReactVariantSelector:"market/flux/components/VariantSelector.react",ReactAddToCartButton:"market/flux/components/AddToCartButton.react",ReactAddToCartForm:"market/flux/components/AddToCartForm.react",ReactPriceDisplay:"market/flux/components/PriceDisplay.react",ReactVariantQuantitySelector:"market/flux/components/VariantQuantitySelector.react",
ReactVariantStatus:"market/flux/components/VariantStatus.react",ReactCatalogRouter:"market/flux/components/CatalogRouter.react",ReactMarketCatalog:"market/flux/components/MarketCatalog.react",ReactCatalogNav:"market/flux/components/CatalogNav.react",ReactProductImpressionsWindow:"market/flux/components/ProductImpressionsWindow.react",ReactProductList:"market/flux/components/ProductList.react",ReactProductListItem:"market/flux/components/ProductListItem.react",ReactMarketModal:"market/flux/components/MarketModal.react",
ReactFormSubmitRouter:"market/flux/routers/FormSubmitRouter.react",VariantSelectorRoute:"market/flux/routes/VariantSelectorRoute.react",CartRoute:"market/flux/routes/CartRoute.react",ReactHeaderCTAButton:"market/flux/components/HeaderCTAButton.react",VariantSelector:"market/flux/VariantSelector",notouch:"market/notouch",EMApp:"market/App",EMHero:"market/ProductHero",EMImage:"market/responsiveImage",EMImageViewer:"market/ImageViewer",EMLink:"market/smartLink",EMMustacheImageFilter:"market/mustacheVariantImageFilter",
EMOtherProducts:"market/otherProducts",EMOverflowGrid:"market/overflowGrid",EMPremiumBadge:"market/PremiumBadge",EMProductInfo:"market/ProductInfo",EMResponsive:"market/responsiveLayout",EMSocial:"market/Social",EMVariantDisplayName:"market/variantDisplayName",EMYouku:"market/youku",EMYoutube:"market/video",EMVariantSelector:"market/EM_VariantSelector",lastDayToShip:"market/lastDayToShip",cxApiLoader:"market/cxApiLoader",EMTimeTracking:"market/TimeTracking",EMUtils:"market/utils",EMCarouselBuilder:"market/carouselBuilder",
ManageNotebooksAdmin:"../../business/ManageNotebooksAction/NotebooksAdmin",ManageNotebooksPresenter:"../../business/ManageNotebooksAction/NotebookPresenter",ManageNotebooks:"../../business/ManageNotebooksAction",ManageNotebooksApp:"../../business/ManageNotebooksAction/ManageNotebooksApp",ManageNotebooksActions:"../../business/ManageNotebooksAction/ManageNotebooksActions",ManageNotebooksAnalytics:"../../business/ManageNotebooksAction/Analytics",ManageNotebooksHeader:"../../business/ManageNotebooksAction/ManageNotebooksHeader",
ManageNotebooksList:"../../business/ManageNotebooksAction/ManageNotebooksList",ManageNotebooksModel:"../../business/ManageNotebooksAction/ManageNotebooksModel",ManageNotebooksPage:"../../business/ManageNotebooksAction/ManageNotebooksPage",ManageNotebooksRow:"../../business/ManageNotebooksAction/ManageNotebooksRow",ManageNotebooksSearchFilters:"../../business/ManageNotebooksAction/ManageNotebooksSearchFilters",ManageNotebooksShareRelationships:"../../business/ManageNotebooksAction/ManageNotebooksShareRelationships",
ManageNotebooksNotebookPrivilegeLevelConverter:"../../business/ManageNotebooksAction/NotebookPrivilegeLevelConverter",ManageNotebooksDialogChangeNotebookPrivilegeList:"../../business/ManageNotebooksAction/dialog/ChangeNotebookPrivilegeList",ManageNotebooksConfirmRemoveShareRelationshipDialog:"../../business/ManageNotebooksAction/dialog/ConfirmRemoveShareRelationshipDialog",ManageNotebooksChangeContactDialog:"../../business/ManageNotebooksAction/dialog/ChangeContactDialog",ManageNotebooksPublishDialog:"../../business/ManageNotebooksAction/dialog/PublishDialog",
ManageNotebooksShareNotebookDialog:"../../business/ManageNotebooksAction/dialog/ShareNotebookDialog",ManageNotebooksShareNotebookBulkConfirmDialogContent:"../../business/ManageNotebooksAction/dialog/ShareNotebookConfirmDialogContent",ManageNotebooksDeselectUserNotebookDialog:"../../business/ManageNotebooksAction/dialog/DeselectUserNotebookDialog",ManageNotebooksShowNotebookTitleList:"../../business/ManageNotebooksAction/dialog/ShowNotebookTitleList",AppStoreType:"../../MultitierCheckoutAction/js/AppStoreType",
MultitierPromotion:"util/MultitierPromotion",MultitierCheckoutApp:"../../MultitierCheckoutAction/js/MultitierCheckoutApp",tierExperimentVariables:"../../../web-frontend/tierExperimentVariables",TierSelectionTracker:"../../MultitierCheckoutAction/js/TierSelectionTracker",TierSelectionComponent:"../../MultitierCheckoutAction/js/TierSelectionComponent",experimentalTierSelectionComponent:"../../../web-frontend/experimentalTierSelectionComponent",tiersMasTiersBanner:"../../../web-frontend/tiersMasTiersBanner",
ImageryTierSelectionComponent:"../../MultitierCheckoutAction/js/ImageryTierSelectionComponent",BasicTierComponent:"../../MultitierCheckoutAction/js/BasicTierComponent",CheckoutComponent:"../../MultitierCheckoutAction/js/CheckoutComponent",CheckoutInfoPane:"../../MultitierCheckoutAction/js/CheckoutInfoPane",PaymentMethodForm:"../../MultitierCheckoutAction/js/PaymentMethodForm",plusInterstitialComponent:"../../../web-frontend/plusInterstitialComponent",BusinessPackageDescriptionComponent:"component/BusinessPackageDescription/BusinessPackageDescriptionComponent",
ReceiptComponent:"component/ReceiptComponent/ReceiptComponent",CheckoutReceiptComponent:"component/CheckoutReceiptComponent/CheckoutReceiptComponent",CheckoutDescriptionComponent:"component/CheckoutDescriptionComponent/CheckoutDescriptionComponent",IncentiveRibbonComponent:"component/IncentiveRibbonComponent/IncentiveRibbonComponent",SimpleTierConfirmComponent:"component/SimpleTierConfirmComponent/SimpleTierConfirmComponent",TierConfirmComponent:"component/TierConfirmComponent/TierConfirmComponent",
CancelVendorBadComponent:"component/CancelVendorBadComponent/CancelVendorBadComponent",GenericConfirmation:"component/GenericConfirmation/GenericConfirmation",NewCreditCardComponent:"component/NewCreditCardComponent/NewCreditCardComponent",NewAddressComponent:"component/NewAddressComponent/NewAddressComponent",ShortAddressComponent:"component/ShortAddressComponent/ShortAddressComponent",BrazilTaxIdComponent:"component/BrazilTaxIdComponent/BrazilTaxIdComponent",InvalidPromotionComponent:"component/InvalidPromotionComponent/InvalidPromotionComponent",
UpdateClientPromptComponent:"component/UpdateClientPromptComponent/UpdateClientPromptComponent",CheckoutTracker:"../../MultitierCheckoutAction/js/CheckoutTracker",AlipayPaymentInProgressApp:"../../AlipayPaymentInProgressAction/AlipayPaymentInProgressApp",MultitierActivateApp:"../../MultitierActivateAction/MultitierActivateApp",MultitierCancelConfirmApp:"../../MultitierCancelConfirmAction/MultitierCancelConfirmApp",MultitierStyleSkin:"util/MultitierStyleSkin",MultitierAfterConfirmHandler:"util/MultitierAfterConfirmHandler",
UniversalAfterConfirmHandler:"util/UniversalAfterConfirmHandler",VisaPromotionApp:"../../VisaPromotionAction/VisaPromotionApp",VisaPromotionSinglePaneComponent:"../../VisaPromotionAction/VisaPromotionSinglePaneComponent",VisaPromotionDoublePaneComponent:"../../VisaPromotionAction/VisaPromotionDoublePaneComponent",VisaPromotionConstants:"../../VisaPromotionAction/VisaPromotionConstants",VisaPromotionCheckoutComponent:"../../VisaPromotionAction/VisaPromotionCheckoutComponent",VisaPromotionInfoComponent:"../../VisaPromotionAction/VisaPromotionInfoComponent",
VisaPromotionWarningModal:"../../VisaPromotionAction/VisaPromotionWarningModal",VisaPromotionTracker:"../../VisaPromotionAction/VisaPromotionTracker",DebugModeMenuComponent:"../../VisaPromotionAction/DebugModeMenuComponent",VisaSuccessComponent:"../../VisaSuccessAction/VisaSuccessComponent",OneClickCheckoutApp:"../../OneClickCheckoutAction/js/OneClickCheckoutApp",OneClickCheckoutComponent:"../../OneClickCheckoutAction/js/OneClickCheckoutComponent",OneClickCheckoutMainComponent:"../../OneClickCheckoutAction/js/OneClickCheckoutMainComponent",
MagicMoneyBanner:"component/MagicMoneyBanner/MagicMoneyBanner",NativeEventEmitterApp:"../../test/NativeEventEmitterAction/NativeEventEmitterApp",AnalyticsPitStopApp:"../../AnalyticsPitStopAction/AnalyticsPitStopApp",AddNewPaymentMethodModal:"../../UpdateBillingAction/AddNewPaymentMethodModal",FocusEditorSaveAnimationView:"focus/editor/SaveAnimation/SaveAnimation",FocusNotesViewComponent:"focus/NotesView/NotesView",FocusTagsDrawerView:"focus/drawer/TagsDrawer/TagsDrawer",OnboardingSurveySelectorComponent:"focus/OnboardingSurvey/OnboardingSurveySelectorComponent",
SecondClientIntroFlow:"focus/SecondClientIntroFlow/SecondClientIntroFlow",EvernoteDragUtil:"focus/dragging/EvernoteDragUtil",SimpleDropArea:"focus/dragging/SimpleDropArea",ToggleButtonComponent:"focus/ToggleButtonComponent/ToggleButtonComponent",FocusBusinessFleTooltip:"focus/tooltip/BusinessFleTooltip",focusBusinessJoinFleDialog:"../../../web-frontend/focusBusinessJoinFleDialog",focusClipperButton:"../../../web-frontend/focusClipperButton",focusCommunicationTooltip:"../../../web-frontend/focusCommunicationTooltip",
focusCommunicationTooltipDock:"../../../web-frontend/focusCommunicationTooltipDock",focusFleChecklistModals:"../../../web-frontend/focusFleChecklistModals",focusFleTooltip:"../../../web-frontend/focusFleTooltip",focusNewUserIncentiveBanner:"../../../web-frontend/focusNewUserIncentiveBanner",focusNewUserIncentiveDialog:"../../../web-frontend/focusNewUserIncentiveDialog","focus-NotesView-AutomationTags":"focus/NotesView/AutomationTags","focus-NotesView-EmptyState":"focus/NotesView/EmptyState","focus-NotesView-Menu-Selector":"focus/NotesView/Menu/Selector",
"focus-NotesView-Menu-SelectorOption":"focus/NotesView/Menu/SelectorOption","focus-NotesView-Menu-Toggle":"focus/NotesView/Menu/Toggle","focus-NotesView-NotesList-AvatarCircles-AvatarCircles":"focus/NotesView/NotesList/AvatarCircles/AvatarCircles","focus-NotesView-NotesList-AvatarCircles-FallbackImg":"focus/NotesView/NotesList/AvatarCircles/FallbackImg","focus-NotesView-NotesList-HoverIcon":"focus/NotesView/NotesList/HoverIcon","focus-NotesView-NotesList-HoverOptions":"focus/NotesView/NotesList/HoverOptions",
"focus-NotesView-NotesList-Note":"focus/NotesView/NotesList/Note","focus-NotesView-NotesViewSubheader":"focus/NotesView/NotesViewSubheader","focus-NotesView-RemindersList-NotebookReminders":"focus/NotesView/RemindersList/NotebookReminders","focus-NotesView-RemindersList-QuickReminderCreator":"focus/NotesView/RemindersList/QuickReminderCreator","focus-NotesView-RemindersList-Reminder":"focus/NotesView/RemindersList/Reminder","focus-NotesView-RemindersList-RemindersList":"focus/NotesView/RemindersList/RemindersList",
"focus-NotesView-ScrollWindow":"focus/NotesView/ScrollWindow","focus-FleChecklist":"focus/FleChecklist/FleChecklist","focus-drawer-BusinessToggle":"focus/drawer/BusinessToggle","focus-drawer-Filter":"focus/drawer/Filter","focus-drawer-HelpIllustration":"focus/drawer/HelpIllustration","focus-drawer-HierarchyFilterMap":"focus/drawer/HierarchyFilterMap","focus-drawer-LoadingSpinner":"focus/drawer/LoadingSpinner","focus-drawer-TagsDrawer-Tag":"focus/drawer/TagsDrawer/Tag","focus-drawer-TagsDrawer-TagHeader":"focus/drawer/TagsDrawer/TagHeader",
"focus-drawer-TagsDrawer-TagInput":"focus/drawer/TagsDrawer/TagInput","focus-drawer-TagsDrawer-TagSelectable":"focus/drawer/TagsDrawer/TagSelectable","focus-drawer-TagsDrawer-TagsList":"focus/drawer/TagsDrawer/TagsList","focus-editor-SaveAnimation-Icon":"focus/editor/SaveAnimation/Icon","focus-editor-SaveAnimation-IconState":"focus/editor/SaveAnimation/IconState","focus-tooltip-ButtonTooltip":"focus/tooltip/ButtonTooltip","focus-tooltip-Direction":"focus/tooltip/Direction","focus-tooltip-WithTooltip":"focus/tooltip/WithTooltip",
"GnomeChoice-app":"gnome-choice/app",ChoiceScreenOffer:"gnome-choice/ChoiceScreenOffer","GnomeChoice-InfoPageComponent":"gnome-choice/InfoPageComponent","GnomeChoice-ChoicePageComponent":"gnome-choice/ChoicePageComponent","GnomeChoice-ManageDevicesPageComponent":"gnome-choice/ManageDevicesPageComponent","GnomeChoice-BackButtonComponent":"gnome-choice/BackButtonComponent","GnomeChoice-ConfirmRevokePageComponent":"gnome-choice/ConfirmRevokePageComponent","GnomeChoice-ConfirmRevokeCurrentPageComponent":"gnome-choice/ConfirmRevokeCurrentPageComponent",
"GnomeChoice-OfflineComponent":"gnome-choice/OfflineComponent","GnomeChoice-util":"gnome-choice/util",GnomeChoiceTracker:"gnome-choice/GnomeChoiceTracker","GnomeTiers-GnomeTierSelectionComponent":"gnome-tiers/GnomeTierSelectionComponent","GnomeTiers-GnomeTierSelectionComponentDesktop":"gnome-tiers/GnomeTierSelectionComponentDesktop","GnomeTiers-GnomeTierSelectionComponentMobile":"gnome-tiers/GnomeTierSelectionComponentMobile","GnomeTiers-util":"gnome-tiers/util","UserDevice-app":"user-device/app",
"UserDevice-AlertsContainer":"user-device/AlertsContainer","UserDevice-AlertsComponent":"user-device/AlertsComponent","UserDevice-DeviceListContainer":"user-device/DeviceListContainer","UserDevice-DeviceListComponent":"user-device/DeviceListComponent","UserDevice-UpgradeContainer":"user-device/UpgradeContainer","UserDevice-UpgradeComponent":"user-device/UpgradeComponent","UserDevice-actions":"user-device/actions","UserDevice-reducer":"user-device/reducer"},shim:{billing:["jquery"],checkout:["jquery"],
collapse:["jquery"],"customize-sponsor":["jquery"],dataTableRequest:["jquery"],dataTableResponse:["jquery"],decrypt:{exports:"ENCrypt",init:function(){return this.ENCrypt}},"jquery-autoresize":["jquery"],"jquery-ui":["jquery"],"jquery-form":["jquery"],"jquery-serializeObject":["jquery"],jqueryENDatatables:["jquery","dataTableRequest","dataTableResponse"],jsonrpc:["json2"],"password-strength":["jquery"],react:["es6"],"react-infinite":["react"],sponsorCheckout:["jquery"],"sponsor-uri-check":["jquery"],
textext:["jquery","json2"],tinycarousel:["jquery"],tsort:["jquery"]},waitSeconds:62});"function"===typeof require.getConfig&&(module.exports=require.getConfig(),require.getConfig=void 0,require.config=void 0);var Evernote;Evernote||(Evernote={});

(function(r,Kc){function zb(a){var b=ya[a]={};c.each(a.split(I),function(a,c){b[c]=!0});return b}function za(a,b,d){if(void 0===d&&1===a.nodeType)if(d="data-"+b.replace(Ab,"-$1").toLowerCase(),d=a.getAttribute(d),"string"===typeof d){try{d="true"===d?!0:"false"===d?!1:"null"===d?null:+d+""===d?+d:Bb.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=void 0;return d}function la(a){for(var b in a)if(("data"!==b||!c.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function T(){return!1}function X(){return!0}
function Y(a){return!a||!a.parentNode||11===a.parentNode.nodeType}function Aa(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}function Ba(a,b,d){b=b||0;if(c.isFunction(b))return c.grep(a,function(a,c){return!!b.call(a,c,a)===d});if(b.nodeType)return c.grep(a,function(a,c){return a===b===d});if("string"===typeof b){var e=c.grep(a,function(a){return 1===a.nodeType});if(Cb.test(b))return c.filter(b,e,!d);b=c.filter(b,e)}return c.grep(a,function(a,e){return 0<=c.inArray(a,b)===d})}function Ca(a){var b=
Da.split("|");a=a.createDocumentFragment();if(a.createElement)for(;b.length;)a.createElement(b.pop());return a}function Db(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function Ea(a,b){if(1===b.nodeType&&c.hasData(a)){var d,e,f;e=c._data(a);var g=c._data(b,e),h=e.events;if(h)for(d in delete g.handle,g.events={},h)for(e=0,f=h[d].length;e<f;e++)c.event.add(b,d,h[d][e]);g.data&&(g.data=c.extend({},g.data))}}function Fa(a,b){var d;1===b.nodeType&&(b.clearAttributes&&
b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),d=b.nodeName.toLowerCase(),"object"===d?(b.parentNode&&(b.outerHTML=a.outerHTML),c.support.html5Clone&&a.innerHTML&&!c.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===d&&Ga.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===d?b.selected=a.defaultSelected:"input"===d||"textarea"===d?b.defaultValue=a.defaultValue:"script"===d&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(c.expando))}
function U(a){return"undefined"!==typeof a.getElementsByTagName?a.getElementsByTagName("*"):"undefined"!==typeof a.querySelectorAll?a.querySelectorAll("*"):[]}function Ha(a){Ga.test(a.type)&&(a.defaultChecked=a.checked)}function Ia(a,b){if(b in a)return b;for(var d=b.charAt(0).toUpperCase()+b.slice(1),c=b,f=Ja.length;f--;)if(b=Ja[f]+d,b in a)return b;return c}function $(a,b){a=b||a;return"none"===c.css(a,"display")||!c.contains(a.ownerDocument,a)}function Ka(a,b){for(var d,e,f=[],g=0,h=a.length;g<
h;g++)d=a[g],d.style&&(f[g]=c._data(d,"olddisplay"),b?(f[g]||"none"!==d.style.display||(d.style.display=""),""===d.style.display&&$(d)&&(f[g]=c._data(d,"olddisplay",La(d.nodeName)))):(e=u(d,"display"),f[g]||"none"===e||c._data(d,"olddisplay",e)));for(g=0;g<h;g++)d=a[g],!d.style||b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none");return a}function Ma(a,b,d){return(a=Eb.exec(b))?Math.max(0,a[1]-(d||0))+(a[2]||"px"):b}function Na(a,b,d,e){b=d===(e?"border":"content")?
4:"width"===b?1:0;for(var f=0;4>b;b+=2)"margin"===d&&(f+=c.css(a,d+O[b],!0)),e?("content"===d&&(f-=parseFloat(u(a,"padding"+O[b]))||0),"margin"!==d&&(f-=parseFloat(u(a,"border"+O[b]+"Width"))||0)):(f+=parseFloat(u(a,"padding"+O[b]))||0,"padding"!==d&&(f+=parseFloat(u(a,"border"+O[b]+"Width"))||0));return f}function Oa(a,b,d){var e="width"===b?a.offsetWidth:a.offsetHeight,f=!0,g=c.support.boxSizing&&"border-box"===c.css(a,"boxSizing");if(0>=e){e=u(a,b);if(0>e||null==e)e=a.style[b];if(aa.test(e))return e;
f=g&&(c.support.boxSizingReliable||e===a.style[b]);e=parseFloat(e)||0}return e+Na(a,b,d||(g?"border":"content"),f)+"px"}function La(a){if(ma[a])return ma[a];var b=c("\x3c"+a+"\x3e").appendTo(q.body),d=b.css("display");b.remove();if("none"===d||""===d)P=q.body.appendChild(P||c.extend(q.createElement("iframe"),{frameBorder:0,width:0,height:0})),Z&&P.createElement||(Z=(P.contentWindow||P.contentDocument).document,Z.write("\x3c!doctype html\x3e\x3chtml\x3e\x3cbody\x3e"),Z.close()),b=Z.body.appendChild(Z.createElement(a)),
d=u(b,"display"),q.body.removeChild(P);return ma[a]=d}function na(a,b,d,e){var f;if(c.isArray(b))c.each(b,function(b,c){d||Fb.test(a)?e(a,c):na(a+"["+("object"===typeof c?b:"")+"]",c,d,e)});else if(d||"object"!==c.type(b))e(a,b);else for(f in b)na(a+"["+f+"]",b[f],d,e)}function Pa(a){return function(b,d){"string"!==typeof b&&(d=b,b="*");var e,f,g=b.toLowerCase().split(I),h=0,k=g.length;if(c.isFunction(d))for(;h<k;h++)e=g[h],(f=/^\+/.test(e))&&(e=e.substr(1)||"*"),e=a[e]=a[e]||[],e[f?"unshift":"push"](d)}}
function ba(a,b,d,c,f,g){f=f||b.dataTypes[0];g=g||{};g[f]=!0;var h;f=a[f];for(var k=0,l=f?f.length:0,m=a===oa;k<l&&(m||!h);k++)h=f[k](b,d,c),"string"===typeof h&&(!m||g[h]?h=void 0:(b.dataTypes.unshift(h),h=ba(a,b,d,c,h,g)));!m&&h||g["*"]||(h=ba(a,b,d,c,"*",g));return h}function Qa(a,b){var d,e,f=c.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((f[d]?a:e||(e={}))[d]=b[d]);e&&c.extend(!0,a,e)}function Ra(){try{return new r.XMLHttpRequest}catch(a){}}function Sa(){setTimeout(function(){ca=void 0},
0);return ca=c.now()}function Gb(a,b){c.each(b,function(b,c){for(var f=(Q[b]||[]).concat(Q["*"]),g=0,h=f.length;g<h&&!f[g].call(a,b,c);g++);})}function Ta(a,b,d){var e=0,f=da.length,g=c.Deferred().always(function(){delete h.elem}),h=function(){for(var b=ca||Sa(),b=Math.max(0,k.startTime+k.duration-b),c=1-(b/k.duration||0),d=0,e=k.tweens.length;d<e;d++)k.tweens[d].run(c);g.notifyWith(a,[k,c,b]);if(1>c&&e)return b;g.resolveWith(a,[k]);return!1},k=g.promise({elem:a,props:c.extend({},b),opts:c.extend(!0,
{specialEasing:{}},d),originalProperties:b,originalOptions:d,startTime:ca||Sa(),duration:d.duration,tweens:[],createTween:function(b,d,e){b=c.Tween(a,k.opts,b,d,k.opts.specialEasing[b]||k.opts.easing);k.tweens.push(b);return b},stop:function(b){for(var c=0,d=b?k.tweens.length:0;c<d;c++)k.tweens[c].run(1);b?g.resolveWith(a,[k,b]):g.rejectWith(a,[k,b]);return this}});d=k.props;for(Hb(d,k.opts.specialEasing);e<f;e++)if(b=da[e].call(k,a,d,k.opts))return b;Gb(k,d);c.isFunction(k.opts.start)&&k.opts.start.call(a,
k);c.fx.timer(c.extend(h,{anim:k,queue:k.opts.queue,elem:a}));return k.progress(k.opts.progress).done(k.opts.done,k.opts.complete).fail(k.opts.fail).always(k.opts.always)}function Hb(a,b){var d,e,f,g,h;for(d in a)if(e=c.camelCase(d),f=b[e],g=a[d],c.isArray(g)&&(f=g[1],g=a[d]=g[0]),d!==e&&(a[e]=g,delete a[d]),(h=c.cssHooks[e])&&"expand"in h)for(d in g=h.expand(g),delete a[e],g)d in a||(a[d]=g[d],b[d]=f);else b[e]=f}function C(a,b,c,e,f){return new C.prototype.init(a,b,c,e,f)}function ea(a,b){for(var c,
e={height:a},f=0;4>f;f+=2-b)c=O[f],e["margin"+c]=e["padding"+c]=a;b&&(e.opacity=e.width=a);return e}function Ua(a){return c.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var Va,fa,q=r.document,Ib=r.location,Jb=r.navigator,Kb=r.jQuery,Lb=r.$,Wa=Array.prototype.push,x=Array.prototype.slice,Xa=Array.prototype.indexOf,Mb=Object.prototype.toString,pa=Object.prototype.hasOwnProperty,Ya=String.prototype.trim,c=function(a,b){return new c.fn.init(a,b,Va)},ga=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
Za=/\S/,I=/\s+/,Nb=Za.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,Ob=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,$a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Pb=/^[\],:{}\s]*$/,Qb=/(?:^|:|,)(?:\s*\[)+/g,Rb=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,Sb=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,Tb=/^-ms-/,Ub=/-([\da-z])/gi,Vb=function(a,b){return(b+"").toUpperCase()},ha=function(){q.addEventListener?(q.removeEventListener("DOMContentLoaded",ha,!1),c.ready()):"complete"===q.readyState&&(q.detachEvent("onreadystatechange",
ha),c.ready())},ab={};c.fn=c.prototype={constructor:c,init:function(a,b,d){var e;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("string"===typeof a){e="\x3c"===a.charAt(0)&&"\x3e"===a.charAt(a.length-1)&&3<=a.length?[null,a,null]:Ob.exec(a);if(!e||!e[1]&&b)return!b||b.jquery?(b||d).find(a):this.constructor(b).find(a);if(e[1])return a=(b=b instanceof c?b[0]:b)&&b.nodeType?b.ownerDocument||b:q,a=c.parseHTML(e[1],a,!0),$a.test(e[1])&&c.isPlainObject(b)&&this.attr.call(a,
b,!0),c.merge(this,a);if((b=q.getElementById(e[2]))&&b.parentNode){if(b.id!==e[2])return d.find(a);this.length=1;this[0]=b}this.context=q;this.selector=a;return this}if(c.isFunction(a))return d.ready(a);void 0!==a.selector&&(this.selector=a.selector,this.context=a.context);return c.makeArray(a,this)},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return x.call(this)},get:function(a){return null==a?this.toArray():0>a?this[this.length+a]:this[a]},pushStack:function(a,
b,d){a=c.merge(this.constructor(),a);a.prevObject=this;a.context=this.context;"find"===b?a.selector=this.selector+(this.selector?" ":"")+d:b&&(a.selector=this.selector+"."+b+"("+d+")");return a},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.ready.promise().done(a);return this},eq:function(a){a=+a;return-1===a?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(x.apply(this,arguments),"slice",
x.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:Wa,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a,b,d,e,f,g=arguments[0]||{},h=1,k=arguments.length,l=!1;"boolean"===typeof g&&(l=g,g=arguments[1]||{},h=2);"object"===typeof g||c.isFunction(g)||(g={});k===h&&(g=this,--h);for(;h<k;h++)if(null!=(a=arguments[h]))for(b in a)d=
g[b],e=a[b],g!==e&&(l&&e&&(c.isPlainObject(e)||(f=c.isArray(e)))?(f?(f=!1,d=d&&c.isArray(d)?d:[]):d=d&&c.isPlainObject(d)?d:{},g[b]=c.extend(l,d,e)):void 0!==e&&(g[b]=e));return g};c.extend({noConflict:function(a){r.$===c&&(r.$=Lb);a&&r.jQuery===c&&(r.jQuery=Kb);return c},isReady:!1,readyWait:1,holdReady:function(a){a?c.readyWait++:c.ready(!0)},ready:function(a){if(!0===a?!--c.readyWait:!c.isReady){if(!q.body)return setTimeout(c.ready,1);c.isReady=!0;!0!==a&&0<--c.readyWait||(fa.resolveWith(q,[c]),
c.fn.trigger&&c(q).trigger("ready").off("ready"))}},isFunction:function(a){return"function"===c.type(a)},isArray:Array.isArray||function(a){return"array"===c.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):ab[Mb.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!pa.call(a,"constructor")&&!pa.call(a.constructor.prototype,
"isPrototypeOf"))return!1}catch(b){return!1}for(var d in a);return void 0===d||pa.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw Error(a);},parseHTML:function(a,b,d){var e;if(!a||"string"!==typeof a)return null;"boolean"===typeof b&&(d=b,b=0);b=b||q;if(e=$a.exec(a))return[b.createElement(e[1])];e=c.buildFragment([a],b,d?null:[]);return c.merge([],(e.cacheable?c.clone(e.fragment):e.fragment).childNodes)},parseJSON:function(a){if(!a||"string"!==typeof a)return null;
a=c.trim(a);if(r.JSON&&r.JSON.parse)return r.JSON.parse(a);if(Pb.test(a.replace(Rb,"@").replace(Sb,"]").replace(Qb,"")))return(new Function("return "+a))();c.error("Invalid JSON: "+a)},parseXML:function(a){var b,d;if(!a||"string"!==typeof a)return null;try{r.DOMParser?(d=new DOMParser,b=d.parseFromString(a,"text/xml")):(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a))}catch(e){b=void 0}b&&b.documentElement&&!b.getElementsByTagName("parsererror").length||c.error("Invalid XML: "+
a);return b},noop:function(){},globalEval:function(a){a&&Za.test(a)&&(r.execScript||function(a){r.eval.call(r,a)})(a)},camelCase:function(a){return a.replace(Tb,"ms-").replace(Ub,Vb)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var e,f=0,g=a.length,h=void 0===g||c.isFunction(a);if(d)if(h)for(e in a){if(!1===b.apply(a[e],d))break}else for(;f<g&&!1!==b.apply(a[f++],d););else if(h)for(e in a){if(!1===b.call(a[e],e,a[e]))break}else for(;f<
g&&!1!==b.call(a[f],f,a[f++]););return a},trim:Ya?function(a){return null==a?"":Ya.call(a)}:function(a){return null==a?"":a.toString().replace(Nb,"")},makeArray:function(a,b){var d,e=b||[];null!=a&&(d=c.type(a),null==a.length||"string"===d||"function"===d||"regexp"===d||c.isWindow(a)?Wa.call(e,a):c.merge(e,a));return e},inArray:function(a,b,c){var e;if(b){if(Xa)return Xa.call(b,a,c);e=b.length;for(c=c?0>c?Math.max(0,e+c):c:0;c<e;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=
b.length,e=a.length,f=0;if("number"===typeof c)for(;f<c;f++)a[e++]=b[f];else for(;void 0!==b[f];)a[e++]=b[f++];a.length=e;return a},grep:function(a,b,c){var e,f=[],g=0,h=a.length;for(c=!!c;g<h;g++)e=!!b(a[g],g),c!==e&&f.push(a[g]);return f},map:function(a,b,d){var e,f,g=[],h=0,k=a.length;if(a instanceof c||void 0!==k&&"number"===typeof k&&(0<k&&a[0]&&a[k-1]||0===k||c.isArray(a)))for(;h<k;h++)e=b(a[h],h,d),null!=e&&(g[g.length]=e);else for(f in a)e=b(a[f],f,d),null!=e&&(g[g.length]=e);return g.concat.apply([],
g)},guid:1,proxy:function(a,b){var d,e;"string"===typeof b&&(d=a[b],b=a,a=d);if(c.isFunction(a))return e=x.call(arguments,2),d=function(){return a.apply(b,e.concat(x.call(arguments)))},d.guid=a.guid=a.guid||d.guid||c.guid++,d},access:function(a,b,d,e,f,g,h){var k,l=null==d,m=0,p=a.length;if(d&&"object"===typeof d){for(m in d)c.access(a,b,m,d[m],1,g,e);f=1}else if(void 0!==e){k=void 0===h&&c.isFunction(e);l&&(k?(k=b,b=function(a,b,d){return k.call(c(a),d)}):(b.call(a,e),b=null));if(b)for(;m<p;m++)b(a[m],
d,k?e.call(a[m],m,b(a[m],d)):e,h);f=1}return f?a:l?b.call(a):p?b(a[0],d):g},now:function(){return(new Date).getTime()}});c.ready.promise=function(a){if(!fa)if(fa=c.Deferred(),"complete"===q.readyState||"loading"!==q.readyState&&q.addEventListener)setTimeout(c.ready,1);else if(q.addEventListener)q.addEventListener("DOMContentLoaded",ha,!1),r.addEventListener("load",c.ready,!1);else{q.attachEvent("onreadystatechange",ha);r.attachEvent("onload",c.ready);var b=!1;try{b=null==r.frameElement&&q.documentElement}catch(d){}b&&
b.doScroll&&function f(){if(!c.isReady){try{b.doScroll("left")}catch(a){return setTimeout(f,50)}c.ready()}}()}return fa.promise(a)};c.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){ab["[object "+b+"]"]=b.toLowerCase()});Va=c(q);var ya={};c.Callbacks=function(a){a="string"===typeof a?ya[a]||zb(a):c.extend({},a);var b,d,e,f,g,h,k=[],l=!a.once&&[],m=function(c){b=a.memory&&c;d=!0;h=f||0;f=0;g=k.length;for(e=!0;k&&h<g;h++)if(!1===k[h].apply(c[0],c[1])&&a.stopOnFalse){b=
!1;break}e=!1;k&&(l?l.length&&m(l.shift()):b?k=[]:p.disable())},p={add:function(){if(k){var d=k.length;(function t(b){c.each(b,function(b,d){!c.isFunction(d)||a.unique&&p.has(d)?d&&d.length&&t(d):k.push(d)})})(arguments);e?g=k.length:b&&(f=d,m(b))}return this},remove:function(){k&&c.each(arguments,function(a,b){for(var d;-1<(d=c.inArray(b,k,d));)k.splice(d,1),e&&(d<=g&&g--,d<=h&&h--)});return this},has:function(a){return-1<c.inArray(a,k)},empty:function(){k=[];return this},disable:function(){k=l=
b=void 0;return this},disabled:function(){return!k},lock:function(){l=void 0;b||p.disable();return this},locked:function(){return!l},fireWith:function(a,b){b=b||[];b=[a,b.slice?b.slice():b];!k||d&&!l||(e?l.push(b):m(b));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!d}};return p};c.extend({Deferred:function(a){var b=[["resolve","done",c.Callbacks("once memory"),"resolved"],["reject","fail",c.Callbacks("once memory"),"rejected"],["notify","progress",c.Callbacks("memory")]],
d="pending",e={state:function(){return d},always:function(){f.done(arguments).fail(arguments);return this},then:function(){var a=arguments;return c.Deferred(function(d){c.each(b,function(b,e){var m=e[0],p=a[b];f[e[1]](c.isFunction(p)?function(){var a=p.apply(this,arguments);if(a&&c.isFunction(a.promise))a.promise().done(d.resolve).fail(d.reject).progress(d.notify);else d[m+"With"](this===f?d:this,[a])}:d[m])});a=null}).promise()},promise:function(a){return"object"===typeof a?c.extend(a,e):e}},f={};
e.pipe=e.then;c.each(b,function(a,c){var k=c[2],l=c[3];e[c[1]]=k.add;l&&k.add(function(){d=l},b[a^1][2].disable,b[2][2].lock);f[c[0]]=k.fire;f[c[0]+"With"]=k.fireWith});e.promise(f);a&&a.call(f,f);return f},when:function(a){var b=0,d=x.call(arguments),e=d.length,f=1!==e||a&&c.isFunction(a.promise)?e:0,g=1===f?a:c.Deferred(),h=function(a,b,c){return function(d){b[a]=this;c[a]=1<arguments.length?x.call(arguments):d;c===k?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},k,l,m;if(1<e)for(k=Array(e),l=Array(e),
m=Array(e);b<e;b++)d[b]&&c.isFunction(d[b].promise)?d[b].promise().done(h(b,m,d)).fail(g.reject).progress(h(b,l,k)):--f;f||g.resolveWith(m,d);return g.promise()}});c.support=function(){var a,b,d,e,f,g,h,k=q.createElement("div");k.setAttribute("className","t");k.innerHTML="  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";b=k.getElementsByTagName("*");d=k.getElementsByTagName("a")[0];d.style.cssText="top:1px;float:left;opacity:.5";if(!b||
!b.length||!d)return{};e=q.createElement("select");f=e.appendChild(q.createElement("option"));b=k.getElementsByTagName("input")[0];a={leadingWhitespace:3===k.firstChild.nodeType,tbody:!k.getElementsByTagName("tbody").length,htmlSerialize:!!k.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:"/a"===d.getAttribute("href"),opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:"on"===b.value,optSelected:f.selected,getSetAttribute:"t"!==k.className,
enctype:!!q.createElement("form").enctype,html5Clone:"\x3c:nav\x3e\x3c/:nav\x3e"!==q.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===q.compatMode,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1};b.checked=!0;a.noCloneChecked=b.cloneNode(!0).checked;e.disabled=!0;a.optDisabled=!f.disabled;try{delete k.test}catch(l){a.deleteExpando=!1}!k.addEventListener&&
k.attachEvent&&k.fireEvent&&(k.attachEvent("onclick",d=function(){a.noCloneEvent=!1}),k.cloneNode(!0).fireEvent("onclick"),k.detachEvent("onclick",d));b=q.createElement("input");b.value="t";b.setAttribute("type","radio");a.radioValue="t"===b.value;b.setAttribute("checked","checked");b.setAttribute("name","t");k.appendChild(b);d=q.createDocumentFragment();d.appendChild(k.lastChild);a.checkClone=d.cloneNode(!0).cloneNode(!0).lastChild.checked;a.appendChecked=b.checked;d.removeChild(b);d.appendChild(k);
if(k.attachEvent)for(g in{submit:!0,change:!0,focusin:!0})b="on"+g,h=b in k,h||(k.setAttribute(b,"return;"),h="function"===typeof k[b]),a[g+"Bubbles"]=h;c(function(){var b,c,d,e=q.getElementsByTagName("body")[0];e&&(b=q.createElement("div"),b.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",e.insertBefore(b,e.firstChild),c=q.createElement("div"),b.appendChild(c),c.innerHTML="\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
d=c.getElementsByTagName("td"),d[0].style.cssText="padding:0;margin:0;border:0;display:none",h=0===d[0].offsetHeight,d[0].style.display="",d[1].style.display="none",a.reliableHiddenOffsets=h&&0===d[0].offsetHeight,c.innerHTML="",c.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",a.boxSizing=4===c.offsetWidth,a.doesNotIncludeMarginInBodyOffset=1!==e.offsetTop,r.getComputedStyle&&
(a.pixelPosition="1%"!==(r.getComputedStyle(c,null)||{}).top,a.boxSizingReliable="4px"===(r.getComputedStyle(c,null)||{width:"4px"}).width,d=q.createElement("div"),d.style.cssText=c.style.cssText="padding:0;margin:0;border:0;display:block;overflow:hidden;",d.style.marginRight=d.style.width="0",c.style.width="1px",c.appendChild(d),a.reliableMarginRight=!parseFloat((r.getComputedStyle(d,null)||{}).marginRight)),"undefined"!==typeof c.style.zoom&&(c.innerHTML="",c.style.cssText="padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1",
a.inlineBlockNeedsLayout=3===c.offsetWidth,c.style.display="block",c.style.overflow="visible",c.innerHTML="\x3cdiv\x3e\x3c/div\x3e",c.firstChild.style.width="5px",a.shrinkWrapBlocks=3!==c.offsetWidth,b.style.zoom=1),e.removeChild(b))});d.removeChild(k);b=d=e=f=b=d=k=null;return a}();var Bb=/^(?:\{.*\}|\[.*\])$/,Ab=/([A-Z])/g;c.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(c.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},
hasData:function(a){a=a.nodeType?c.cache[a[c.expando]]:a[c.expando];return!!a&&!la(a)},data:function(a,b,d,e){if(c.acceptData(a)){var f=c.expando,g="string"===typeof b,h=a.nodeType,k=h?c.cache:a,l=h?a[f]:a[f]&&f;if(l&&k[l]&&(e||k[l].data)||!g||void 0!==d){l||(h?a[f]=l=c.deletedIds.pop()||++c.uuid:l=f);k[l]||(k[l]={},h||(k[l].toJSON=c.noop));if("object"===typeof b||"function"===typeof b)e?k[l]=c.extend(k[l],b):k[l].data=c.extend(k[l].data,b);a=k[l];e||(a.data||(a.data={}),a=a.data);void 0!==d&&(a[c.camelCase(b)]=
d);g?(d=a[b],null==d&&(d=a[c.camelCase(b)])):d=a;return d}}},removeData:function(a,b,d){if(c.acceptData(a)){var e,f,g,h=a.nodeType,k=h?c.cache:a,l=h?a[c.expando]:c.expando;if(k[l]){if(b&&(e=d?k[l]:k[l].data)){c.isArray(b)||(b in e?b=[b]:(b=c.camelCase(b),b=b in e?[b]:b.split(" ")));f=0;for(g=b.length;f<g;f++)delete e[b[f]];if(!(d?la:c.isEmptyObject)(e))return}if(!d&&(delete k[l].data,!la(k[l])))return;h?c.cleanData([a],!0):c.support.deleteExpando||k!=k.window?delete k[l]:k[l]=null}}},_data:function(a,
b,d){return c.data(a,b,d,!0)},acceptData:function(a){var b=a.nodeName&&c.noData[a.nodeName.toLowerCase()];return!b||!0!==b&&a.getAttribute("classid")===b}});c.fn.extend({data:function(a,b){var d,e,f,g,h,k=this[0],l=0,m=null;if(void 0===a){if(this.length&&(m=c.data(k),1===k.nodeType&&!c._data(k,"parsedAttrs"))){f=k.attributes;for(h=f.length;l<h;l++)g=f[l].name,0===g.indexOf("data-")&&(g=c.camelCase(g.substring(5)),za(k,g,m[g]));c._data(k,"parsedAttrs",!0)}return m}if("object"===typeof a)return this.each(function(){c.data(this,
a)});d=a.split(".",2);d[1]=d[1]?"."+d[1]:"";e=d[1]+"!";return c.access(this,function(b){if(void 0===b)return m=this.triggerHandler("getData"+e,[d[0]]),void 0===m&&k&&(m=c.data(k,a),m=za(k,a,m)),void 0===m&&d[1]?this.data(d[0]):m;d[1]=b;this.each(function(){var f=c(this);f.triggerHandler("setData"+e,d);c.data(this,a,b);f.triggerHandler("changeData"+e,d)})},null,b,1<arguments.length,null,!1)},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){var e;
if(a)return b=(b||"fx")+"queue",e=c._data(a,b),d&&(!e||c.isArray(d)?e=c._data(a,b,c.makeArray(d)):e.push(d)),e||[]},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),e=d.shift(),f=c._queueHooks(a,b),g=function(){c.dequeue(a,b)};"inprogress"===e&&(e=d.shift());e&&("fx"===b&&d.unshift("inprogress"),delete f.stop,e.call(a,g,f));!d.length&&f&&f.empty.fire()},_queueHooks:function(a,b){var d=b+"queueHooks";return c._data(a,d)||c._data(a,d,{empty:c.Callbacks("once memory").add(function(){c.removeData(a,
b+"queue",!0);c.removeData(a,d,!0)})})}});c.fn.extend({queue:function(a,b){var d=2;"string"!==typeof a&&(b=a,a="fx",d--);return arguments.length<d?c.queue(this[0],a):void 0===b?this:this.each(function(){var d=c.queue(this,a,b);c._queueHooks(this,a);"fx"===a&&"inprogress"!==d[0]&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;return this.queue(b||"fx",function(b,c){var f=setTimeout(b,a);c.stop=function(){clearTimeout(f)}})},
clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var d,e=1,f=c.Deferred(),g=this,h=this.length,k=function(){--e||f.resolveWith(g,[g])};"string"!==typeof a&&(b=a,a=void 0);for(a=a||"fx";h--;)(d=c._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(k));k();return f.promise(b)}});var y,bb,cb,db=/[\t\r\n]/g,Xb=/\r/g,Yb=/^(?:button|input)$/i,Zb=/^(?:button|input|object|select|textarea)$/i,$b=/^a(?:rea|)$/i,eb=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
fb=c.support.getSetAttribute;c.fn.extend({attr:function(a,b){return c.access(this,c.attr,a,b,1<arguments.length)},removeAttr:function(a){return this.each(function(){c.removeAttr(this,a)})},prop:function(a,b){return c.access(this,c.prop,a,b,1<arguments.length)},removeProp:function(a){a=c.propFix[a]||a;return this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})},addClass:function(a){var b,d,e,f,g,h,k;if(c.isFunction(a))return this.each(function(b){c(this).addClass(a.call(this,b,this.className))});
if(a&&"string"===typeof a)for(b=a.split(I),d=0,e=this.length;d<e;d++)if(f=this[d],1===f.nodeType)if(f.className||1!==b.length){g=" "+f.className+" ";h=0;for(k=b.length;h<k;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");f.className=c.trim(g)}else f.className=a;return this},removeClass:function(a){var b,d,e,f,g,h,k;if(c.isFunction(a))return this.each(function(b){c(this).removeClass(a.call(this,b,this.className))});if(a&&"string"===typeof a||void 0===a)for(b=(a||"").split(I),h=0,k=this.length;h<k;h++)if(e=
this[h],1===e.nodeType&&e.className){d=(" "+e.className+" ").replace(db," ");f=0;for(g=b.length;f<g;f++)for(;-1<d.indexOf(" "+b[f]+" ");)d=d.replace(" "+b[f]+" "," ");e.className=a?c.trim(d):""}return this},toggleClass:function(a,b){var d=typeof a,e="boolean"===typeof b;return c.isFunction(a)?this.each(function(d){c(this).toggleClass(a.call(this,d,this.className,b),b)}):this.each(function(){if("string"===d)for(var f,g=0,h=c(this),k=b,l=a.split(I);f=l[g++];)k=e?k:!h.hasClass(f),h[k?"addClass":"removeClass"](f);
else if("undefined"===d||"boolean"===d)this.className&&c._data(this,"__className__",this.className),this.className=this.className||!1===a?"":c._data(this,"__className__")||""})},hasClass:function(a){a=" "+a+" ";for(var b=0,c=this.length;b<c;b++)if(1===this[b].nodeType&&-1<(" "+this[b].className+" ").replace(db," ").indexOf(a))return!0;return!1},val:function(a){var b,d,e,f=this[0];if(arguments.length)return e=c.isFunction(a),this.each(function(d){var f=c(this);1===this.nodeType&&(d=e?a.call(this,d,
f.val()):a,null==d?d="":"number"===typeof d?d+="":c.isArray(d)&&(d=c.map(d,function(a){return null==a?"":a+""})),b=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,d,"value")||(this.value=d))});if(f){if((b=c.valHooks[f.type]||c.valHooks[f.nodeName.toLowerCase()])&&"get"in b&&void 0!==(d=b.get(f,"value")))return d;d=f.value;return"string"===typeof d?d.replace(Xb,""):null==d?"":d}}});c.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;
return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,d,e=a.selectedIndex,f=[],g=a.options,h="select-one"===a.type;if(0>e)return null;a=h?e:0;for(d=h?e+1:g.length;a<d;a++)if(b=g[a],!(!b.selected||(c.support.optDisabled?b.disabled:null!==b.getAttribute("disabled"))||b.parentNode.disabled&&c.nodeName(b.parentNode,"optgroup"))){b=c(b).val();if(h)return b;f.push(b)}return h&&!f.length&&g.length?c(g[e]).val():f},set:function(a,b){var d=c.makeArray(b);c(a).find("option").each(function(){this.selected=
0<=c.inArray(c(this).val(),d)});d.length||(a.selectedIndex=-1);return d}}},attrFn:{},attr:function(a,b,d,e){var f,g,h=a.nodeType;if(a&&3!==h&&8!==h&&2!==h){if(e&&c.isFunction(c.fn[b]))return c(a)[b](d);if("undefined"===typeof a.getAttribute)return c.prop(a,b,d);if(e=1!==h||!c.isXMLDoc(a))b=b.toLowerCase(),g=c.attrHooks[b]||(eb.test(b)?bb:y);if(void 0!==d)if(null===d)c.removeAttr(a,b);else{if(g&&"set"in g&&e&&void 0!==(f=g.set(a,d,b)))return f;a.setAttribute(b,""+d);return d}else{if(g&&"get"in g&&
e&&null!==(f=g.get(a,b)))return f;f=a.getAttribute(b);return null===f?void 0:f}}},removeAttr:function(a,b){var d,e,f,g,h=0;if(b&&1===a.nodeType)for(e=b.split(I);h<e.length;h++)if(f=e[h])d=c.propFix[f]||f,(g=eb.test(f))||c.attr(a,f,""),a.removeAttribute(fb?f:d),g&&d in a&&(a[d]=!1)},attrHooks:{type:{set:function(a,b){if(Yb.test(a.nodeName)&&a.parentNode)c.error("type property can't be changed");else if(!c.support.radioValue&&"radio"===b&&c.nodeName(a,"input")){var d=a.value;a.setAttribute("type",b);
d&&(a.value=d);return b}}},value:{get:function(a,b){return y&&c.nodeName(a,"button")?y.get(a,b):b in a?a.value:null},set:function(a,b,d){if(y&&c.nodeName(a,"button"))return y.set(a,b,d);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,b,d){var e,f,g;
g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g){if(g=1!==g||!c.isXMLDoc(a))b=c.propFix[b]||b,f=c.propHooks[b];return void 0!==d?f&&"set"in f&&void 0!==(e=f.set(a,d,b))?e:a[b]=d:f&&"get"in f&&null!==(e=f.get(a,b))?e:a[b]}},propHooks:{tabIndex:{get:function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?parseInt(b.value,10):Zb.test(a.nodeName)||$b.test(a.nodeName)&&a.href?0:void 0}}}});bb={get:function(a,b){var d,e=c.prop(a,b);return!0===e||"boolean"!==typeof e&&(d=a.getAttributeNode(b))&&!1!==
d.nodeValue?b.toLowerCase():void 0},set:function(a,b,d){!1===b?c.removeAttr(a,d):(b=c.propFix[d]||d,b in a&&(a[b]=!0),a.setAttribute(d,d.toLowerCase()));return d}};fb||(cb={name:!0,id:!0,coords:!0},y=c.valHooks.button={get:function(a,b){var c;return(c=a.getAttributeNode(b))&&(cb[b]?""!==c.value:c.specified)?c.value:void 0},set:function(a,b,c){var e=a.getAttributeNode(c);e||(e=q.createAttribute(c),a.setAttributeNode(e));return e.value=b+""}},c.each(["width","height"],function(a,b){c.attrHooks[b]=c.extend(c.attrHooks[b],
{set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}})}),c.attrHooks.contenteditable={get:y.get,set:function(a,b,c){""===b&&(b="false");y.set(a,b,c)}});c.support.hrefNormalized||c.each(["href","src","width","height"],function(a,b){c.attrHooks[b]=c.extend(c.attrHooks[b],{get:function(a){a=a.getAttribute(b,2);return null===a?void 0:a}})});c.support.style||(c.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||void 0},set:function(a,b){return a.style.cssText=""+b}});c.support.optSelected||
(c.propHooks.selected=c.extend(c.propHooks.selected,{get:function(a){if(a=a.parentNode)a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex;return null}}));c.support.enctype||(c.propFix.enctype="encoding");c.support.checkOn||c.each(["radio","checkbox"],function(){c.valHooks[this]={get:function(a){return null===a.getAttribute("value")?"on":a.value}}});c.each(["radio","checkbox"],function(){c.valHooks[this]=c.extend(c.valHooks[this],{set:function(a,b){if(c.isArray(b))return a.checked=0<=c.inArray(c(a).val(),
b)}})});var qa=/^(?:textarea|input|select)$/i,gb=/^([^\.]*|)(?:\.(.+)|)$/,ac=/(?:^|\s)hover(\.\S+|)\b/,bc=/^key/,cc=/^(?:mouse|contextmenu)|click/,hb=/^(?:focusinfocus|focusoutblur)$/,ib=function(a){return c.event.special.hover?a:a.replace(ac,"mouseenter$1 mouseleave$1")};c.event={add:function(a,b,d,e,f){var g,h,k,l,m,p,n,q,t;if(3!==a.nodeType&&8!==a.nodeType&&b&&d&&(g=c._data(a))){d.handler&&(n=d,d=n.handler,f=n.selector);d.guid||(d.guid=c.guid++);k=g.events;k||(g.events=k={});h=g.handle;h||(g.handle=
h=function(a){return"undefined"===typeof c||a&&c.event.triggered===a.type?void 0:c.event.dispatch.apply(h.elem,arguments)},h.elem=a);b=c.trim(ib(b)).split(" ");for(g=0;g<b.length;g++)l=gb.exec(b[g])||[],m=l[1],p=(l[2]||"").split(".").sort(),t=c.event.special[m]||{},m=(f?t.delegateType:t.bindType)||m,t=c.event.special[m]||{},l=c.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:f,namespace:p.join(".")},n),q=k[m],q||(q=k[m]=[],q.delegateCount=0,t.setup&&!1!==t.setup.call(a,e,p,h)||
(a.addEventListener?a.addEventListener(m,h,!1):a.attachEvent&&a.attachEvent("on"+m,h))),t.add&&(t.add.call(a,l),l.handler.guid||(l.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,l):q.push(l),c.event.global[m]=!0;a=null}},global:{},remove:function(a,b,d,e,f){var g,h,k,l,m,p,n,q,t,r,u=c.hasData(a)&&c._data(a);if(u&&(n=u.events)){b=c.trim(ib(b||"")).split(" ");for(g=0;g<b.length;g++)if(h=gb.exec(b[g])||[],k=l=h[1],h=h[2],k){q=c.event.special[k]||{};k=(e?q.delegateType:q.bindType)||k;t=n[k]||[];
m=t.length;h=h?new RegExp("(^|\\.)"+h.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(p=0;p<t.length;p++)r=t[p],!f&&l!==r.origType||d&&d.guid!==r.guid||h&&!h.test(r.namespace)||e&&e!==r.selector&&("**"!==e||!r.selector)||(t.splice(p--,1),r.selector&&t.delegateCount--,q.remove&&q.remove.call(a,r));0===t.length&&m!==t.length&&(q.teardown&&!1!==q.teardown.call(a,h,u.handle)||c.removeEvent(a,k,u.handle),delete n[k])}else for(k in n)c.event.remove(a,k+b[g],d,e,!0);c.isEmptyObject(n)&&(delete u.handle,
c.removeData(a,"events",!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(a,b,d,e){if(!d||3!==d.nodeType&&8!==d.nodeType){var f,g,h,k,l,m,p=a.type||a;h=[];if(!hb.test(p+c.event.triggered)&&(0<=p.indexOf("!")&&(p=p.slice(0,-1),f=!0),0<=p.indexOf(".")&&(h=p.split("."),p=h.shift(),h.sort()),d&&!c.event.customEvent[p]||c.event.global[p]))if(a="object"===typeof a?a[c.expando]?a:new c.Event(p,a):new c.Event(p),a.type=p,a.isTrigger=!0,a.exclusive=f,a.namespace=h.join("."),a.namespace_re=
a.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=0>p.indexOf(":")?"on"+p:"",d){if(a.result=void 0,a.target||(a.target=d),b=null!=b?c.makeArray(b):[],b.unshift(a),k=c.event.special[p]||{},!k.trigger||!1!==k.trigger.apply(d,b)){m=[[d,k.bindType||p]];if(!e&&!k.noBubble&&!c.isWindow(d)){l=k.delegateType||p;f=hb.test(l+p)?d:d.parentNode;for(g=d;f;f=f.parentNode)m.push([f,l]),g=f;g===(d.ownerDocument||q)&&m.push([g.defaultView||g.parentWindow||r,l])}for(g=0;g<m.length&&!a.isPropagationStopped();g++)f=
m[g][0],a.type=m[g][1],(l=(c._data(f,"events")||{})[a.type]&&c._data(f,"handle"))&&l.apply(f,b),(l=h&&f[h])&&c.acceptData(f)&&!1===l.apply(f,b)&&a.preventDefault();a.type=p;e||a.isDefaultPrevented()||k._default&&!1!==k._default.apply(d.ownerDocument,b)||"click"===p&&c.nodeName(d,"a")||!c.acceptData(d)||!h||!d[p]||("focus"===p||"blur"===p)&&0===a.target.offsetWidth||c.isWindow(d)||((g=d[h])&&(d[h]=null),c.event.triggered=p,d[p](),c.event.triggered=void 0,g&&(d[h]=g));return a.result}}else for(g in d=
c.cache,d)d[g].events&&d[g].events[p]&&c.event.trigger(a,b,d[g].handle.elem,!0)}},dispatch:function(a){a=c.event.fix(a||r.event);var b,d,e,f,g,h,k,l=(c._data(this,"events")||{})[a.type]||[],m=l.delegateCount,p=[].slice.call(arguments),n=!a.exclusive&&!a.namespace,q=c.event.special[a.type]||{},t=[];p[0]=a;a.delegateTarget=this;if(!q.preDispatch||!1!==q.preDispatch.call(this,a)){if(m&&(!a.button||"click"!==a.type))for(e=c(this),e.context=this,d=a.target;d!=this;d=d.parentNode||this)if(!0!==d.disabled||
"click"!==a.type){g={};h=[];e[0]=d;for(b=0;b<m;b++)f=l[b],k=f.selector,void 0===g[k]&&(g[k]=e.is(k)),g[k]&&h.push(f);h.length&&t.push({elem:d,matches:h})}l.length>m&&t.push({elem:this,matches:l.slice(m)});for(b=0;b<t.length&&!a.isPropagationStopped();b++)for(e=t[b],a.currentTarget=e.elem,d=0;d<e.matches.length&&!a.isImmediatePropagationStopped();d++)if(f=e.matches[d],n||!a.namespace&&!f.namespace||a.namespace_re&&a.namespace_re.test(f.namespace))a.data=f.data,a.handleObj=f,f=((c.event.special[f.origType]||
{}).handle||f.handler).apply(e.elem,p),void 0!==f&&(a.result=f,!1===f&&(a.preventDefault(),a.stopPropagation()));q.postDispatch&&q.postDispatch.call(this,a);return a.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:["char","charCode","key","keyCode"],filter:function(a,b){null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode);
return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f=b.button,g=b.fromElement;null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||q,e=c.documentElement,c=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0));!a.relatedTarget&&g&&(a.relatedTarget=
g===a.target?b.toElement:g);a.which||void 0===f||(a.which=f&1?1:f&2?3:f&4?2:0);return a}},fix:function(a){if(a[c.expando])return a;var b,d,e=a,f=c.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=c.Event(e);for(b=g.length;b;)d=g[--b],a[d]=e[d];a.target||(a.target=e.srcElement||q);3===a.target.nodeType&&(a.target=a.target.parentNode);a.metaKey=!!a.metaKey;return f.filter?f.filter(a,e):a},special:{ready:{setup:c.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},
blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,d){c.isWindow(this)&&(this.onbeforeunload=d)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,d,e){a=c.extend(new c.Event,d,{type:a,isSimulated:!0,originalEvent:{}});e?c.event.trigger(a,null,b):c.event.dispatch.call(b,a);a.isDefaultPrevented()&&d.preventDefault()}};c.event.handle=c.event.dispatch;c.removeEvent=q.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,
c,!1)}:function(a,b,c){b="on"+b;a.detachEvent&&("undefined"===typeof a[b]&&(a[b]=null),a.detachEvent(b,c))};c.Event=function(a,b){if(!(this instanceof c.Event))return new c.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||!1===a.returnValue||a.getPreventDefault&&a.getPreventDefault()?X:T):this.type=a;b&&c.extend(this,b);this.timeStamp=a&&a.timeStamp||c.now();this[c.expando]=!0};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=
X;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=X;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=X;this.stopPropagation()},isDefaultPrevented:T,isPropagationStopped:T,isImmediatePropagationStopped:T};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={delegateType:b,
bindType:b,handle:function(a){var e,f=a.relatedTarget,g=a.handleObj;if(!f||f!==this&&!c.contains(this,f))a.type=g.origType,e=g.handler.apply(this,arguments),a.type=b;return e}}});c.support.submitBubbles||(c.event.special.submit={setup:function(){if(c.nodeName(this,"form"))return!1;c.event.add(this,"click._submit keypress._submit",function(a){a=a.target;(a=c.nodeName(a,"input")||c.nodeName(a,"button")?a.form:void 0)&&!c._data(a,"_submit_attached")&&(c.event.add(a,"submit._submit",function(a){a._submit_bubble=
!0}),c._data(a,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&c.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(c.nodeName(this,"form"))return!1;c.event.remove(this,"._submit")}});c.support.changeBubbles||(c.event.special.change={setup:function(){if(qa.test(this.nodeName)){if("checkbox"===this.type||"radio"===this.type)c.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&
(this._just_changed=!0)}),c.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1);c.event.simulate("change",this,a,!0)});return!1}c.event.add(this,"beforeactivate._change",function(a){a=a.target;qa.test(a.nodeName)&&!c._data(a,"_change_attached")&&(c.event.add(a,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||c.event.simulate("change",this.parentNode,a,!0)}),c._data(a,"_change_attached",!0))})},handle:function(a){var b=a.target;
if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){c.event.remove(this,"._change");return qa.test(this.nodeName)}});c.support.focusinBubbles||c.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){c.event.simulate(b,a.target,c.event.fix(a),!0)};c.event.special[b]={setup:function(){0===d++&&q.addEventListener(a,e,!0)},teardown:function(){0===--d&&q.removeEventListener(a,e,!0)}}});
c.fn.extend({on:function(a,b,d,e,f){var g,h;if("object"===typeof a){"string"!==typeof b&&(d=d||b,b=void 0);for(h in a)this.on(h,b,d,a[h],f);return this}null==d&&null==e?(e=b,d=b=void 0):null==e&&("string"===typeof b?(e=d,d=void 0):(e=d,d=b,b=void 0));if(!1===e)e=T;else if(!e)return this;1===f&&(g=e,e=function(a){c().off(a);return g.apply(this,arguments)},e.guid=g.guid||(g.guid=c.guid++));return this.each(function(){c.event.add(this,a,e,d,b)})},one:function(a,b,c,e){return this.on(a,b,c,e,1)},off:function(a,
b,d){var e;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,c(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if("object"===typeof a){for(e in a)this.off(e,b,a[e]);return this}if(!1===b||"function"===typeof b)d=b,b=void 0;!1===d&&(d=T);return this.each(function(){c.event.remove(this,a,d,b)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,d){c(this.context).on(a,this.selector,
b,d);return this},die:function(a,b){c(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,e){return this.on(b,a,c,e)},undelegate:function(a,b,c){return 1==arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return c.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,d=a.guid||c.guid++,e=0,f=function(d){var f=(c._data(this,"lastToggle"+
a.guid)||0)%e;c._data(this,"lastToggle"+a.guid,f+1);d.preventDefault();return b[f].apply(this,arguments)||!1};for(f.guid=d;e<b.length;)b[e++].guid=d;return this.click(f)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){c.fn[b]=function(a,c){null==c&&
(c=a,a=null);return 0<arguments.length?this.on(b,null,a,c):this.trigger(b)};bc.test(b)&&(c.event.fixHooks[b]=c.event.keyHooks);cc.test(b)&&(c.event.fixHooks[b]=c.event.mouseHooks)});(function(a,b){function d(a,b,c,d){for(var e=0,f=b.length;e<f;e++)v(a,b[e],c,d)}function e(a,b,c,e,f,g){var h,k=w.setFilters[b.toLowerCase()];k||v.error(b);!a&&(h=f)||d(a||"*",e,h=[],f);return 0<h.length?k(h,c,g):[]}function f(a,c,f,g,h){for(var k,l,m,n,p,q,r,t=0,N=h.length,w=V.POS,u=new RegExp("^"+w.source+"(?!"+s+")",
"i"),Wb=function(){for(var a=1,c=arguments.length-2;a<c;a++)arguments[a]===b&&(k[a]=b)};t<N;t++){w.exec("");a=h[t];n=[];m=0;for(p=g;k=w.exec(a);)if(l=w.lastIndex=k.index+k[0].length,l>m){r=a.slice(m,k.index);m=l;q=[c];ia.test(r)&&(p&&(q=p),p=g);if(l=G.test(r))r=r.slice(0,-5).replace(ia,"$\x26*");1<k.length&&k[0].replace(u,Wb);p=e(r,k[1],k[2],q,p,l)}p?(n=n.concat(p),(r=a.slice(m))&&")"!==r?ia.test(r)?d(r,n,f,g):v(r,c,f,g?g.concat(p):p):D.apply(f,n)):v(a,c,f,g)}return 1===N?f:v.uniqueSort(f)}function g(a,
b,c){var d=b.dir,e=B++;a||(a=function(a){return a===c});return b.first?function(b,c){for(;b=b[d];)if(1===b.nodeType)return a(b,c)&&b}:function(b,c){for(var f,g=e+"."+m,h=g+"."+l;b=b[d];)if(1===b.nodeType){if((f=b[z])===h)return b.sizset;if("string"===typeof f&&0===f.indexOf(g)){if(b.sizset)return b}else{b[z]=h;if(a(b,c))return b.sizset=!0,b;b.sizset=!1}}}}function h(a,b){return a?function(c,d){var e=b(c,d);return e&&a(!0===e?c:e,d)}:b}function k(a){return function(b,c){for(var d,e=0;d=a[e];e++)if(d(b,
c))return!0;return!1}}var l,m,p,n,q,t=a.document,r=t.documentElement,u=!1,C=!0,B=0,W=[].slice,D=[].push,z=("sizcache"+Math.random()).replace(".",""),s="[\\x20\\t\\r\\n\\f]",H="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w","w#"),H="\\["+s+"*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)"+s+"*(?:([*^$|!~]?\x3d)"+s+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+H+")|)|)"+s+"*\\]",J=s+"*([\\x20\\t\\r\\n\\f\x3e+~])"+s+"*",N="(?\x3d[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+H+"|"+":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?\x3d[^\\[]*\\]))|(?:,(?\x3d[^\\(]*\\))))*))\\)|)".replace(2,
7)+"|[^\\\\(),])+",ra=new RegExp("^"+s+"+|((?:^|[^\\\\])(?:\\\\.)*)"+s+"+$","g"),ia=new RegExp("^"+J),x=new RegExp(N+"?(?\x3d"+s+"*,|$)","g"),jb=new RegExp("^(?:(?!,)(?:(?:^|,)"+s+"*"+N+")*?|"+s+"*(.*?))(\\)|$)"),dc=new RegExp(N.slice(19,-6)+"\\x20\\t\\r\\n\\f\x3e+~])+|"+J,"g"),ec=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,sa=/[\x20\t\r\n\f]*[+~]/,G=/:not\($/,fc=/h\d/i,A=/input|select|textarea|button/i,E=/\\(?!\\)/g,V={ID:/^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,CLASS:/^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,NAME:/^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
TAG:new RegExp("^("+"(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+H),PSEUDO:RegExp("^:((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?\x3d[^\\[]*\\]))|(?:,(?\x3d[^\\(]*\\))))*))\\)|)"),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+s+"*(even|odd|(([+-]|)(\\d*)n|)"+s+"*(?:([+-]|)"+s+"*(\\d+)|))"+s+"*\\)|)","i"),POS:RegExp(":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?\x3d[^-]|$)","ig"),needsContext:new RegExp("^"+
s+"*[\x3e+~]|:(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?\x3d[^-]|$)","i")},y={},K=[],I={},F=[],H=function(a){a.sizzleFilter=!0;return a},J=function(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}},N=function(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}},L=function(a){var b=!1,c=t.createElement("div");try{b=a(c)}catch(d){}return b},O=L(function(a){a.innerHTML="\x3cselect\x3e\x3c/select\x3e";a=typeof a.lastChild.getAttribute("multiple");
return"boolean"!==a&&"string"!==a}),R=L(function(a){a.id=z+0;a.innerHTML="\x3ca name\x3d'"+z+"'\x3e\x3c/a\x3e\x3cdiv name\x3d'"+z+"'\x3e\x3c/div\x3e";r.insertBefore(a,r.firstChild);var b=t.getElementsByName&&t.getElementsByName(z).length===2+t.getElementsByName(z+0).length;q=!t.getElementById(z);r.removeChild(a);return b}),S=L(function(a){a.appendChild(t.createComment(""));return 0===a.getElementsByTagName("*").length}),T=L(function(a){a.innerHTML="\x3ca href\x3d'#'\x3e\x3c/a\x3e";return a.firstChild&&
"undefined"!==typeof a.firstChild.getAttribute&&"#"===a.firstChild.getAttribute("href")}),P=L(function(a){a.innerHTML="\x3cdiv class\x3d'hidden e'\x3e\x3c/div\x3e\x3cdiv class\x3d'hidden'\x3e\x3c/div\x3e";if(!a.getElementsByClassName||0===a.getElementsByClassName("e").length)return!1;a.lastChild.className="e";return 1!==a.getElementsByClassName("e").length}),v=function(a,b,c,d){c=c||[];b=b||t;var e,f,g,h,k=b.nodeType;if(1!==k&&9!==k)return[];if(!a||"string"!==typeof a)return c;g=M(b);if(!g&&!d&&(e=
ec.exec(a)))if(h=e[1])if(9===k)if((f=b.getElementById(h))&&f.parentNode){if(f.id===h)return c.push(f),c}else return c;else{if(b.ownerDocument&&(f=b.ownerDocument.getElementById(h))&&Y(b,f)&&f.id===h)return c.push(f),c}else{if(e[2])return D.apply(c,W.call(b.getElementsByTagName(a),0)),c;if((h=e[3])&&P&&b.getElementsByClassName)return D.apply(c,W.call(b.getElementsByClassName(h),0)),c}return U(a,b,c,d,g)},w=v.selectors={cacheLength:50,match:V,order:["ID","TAG"],attrHandle:{},createPseudo:H,find:{ID:q?
function(a,b,c){if("undefined"!==typeof b.getElementById&&!c)return(a=b.getElementById(a))&&a.parentNode?[a]:[]}:function(a,c,d){if("undefined"!==typeof c.getElementById&&!d)return(c=c.getElementById(a))?c.id===a||"undefined"!==typeof c.getAttributeNode&&c.getAttributeNode("id").value===a?[c]:b:[]},TAG:S?function(a,b){if("undefined"!==typeof b.getElementsByTagName)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if("*"===a){for(var d,e=[],f=0;d=c[f];f++)1===d.nodeType&&
e.push(d);return e}return c}},relative:{"\x3e":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){a[1]=a[1].replace(E,"");a[3]=(a[4]||a[5]||"").replace(E,"");"~\x3d"===a[2]&&(a[3]=" "+a[3]+" ");return a.slice(0,4)},CHILD:function(a){a[1]=a[1].toLowerCase();"nth"===a[1]?(a[2]||v.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*("even"===a[2]||"odd"===a[2])),a[4]=+(a[6]+a[7]||"odd"===a[2])):a[2]&&v.error(a[0]);return a},
PSEUDO:function(a){var b,c=a[4];if(V.CHILD.test(a[0]))return null;c&&(b=jb.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1));a.splice(2,3,c||a[3]);return a}},filter:{ID:q?function(a){a=a.replace(E,"");return function(b){return b.getAttribute("id")===a}}:function(a){a=a.replace(E,"");return function(b){return(b="undefined"!==typeof b.getAttributeNode&&b.getAttributeNode("id"))&&b.value===a}},TAG:function(a){if("*"===a)return function(){return!0};a=a.replace(E,"").toLowerCase();
return function(b){return b.nodeName&&b.nodeName.toLowerCase()===a}},CLASS:function(a){var b=y[a];b||(b=y[a]=new RegExp("(^|"+s+")"+a+"("+s+"|$)"),K.push(a),K.length>w.cacheLength&&delete y[K.shift()]);return function(a){return b.test(a.className||"undefined"!==typeof a.getAttribute&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){d=v.attr(d,a);var e=d+"";if(null==d)return"!\x3d"===b;switch(b){case "\x3d":return e===c;case "!\x3d":return e!==c;case "^\x3d":return c&&0===e.indexOf(c);
case "*\x3d":return c&&-1<e.indexOf(c);case "$\x3d":return c&&e.substr(e.length-c.length)===c;case "~\x3d":return-1<(" "+e+" ").indexOf(c);case "|\x3d":return e===c||e.substr(0,c.length+1)===c+"-"}}:function(b){return null!=v.attr(b,a)}},CHILD:function(a,b,c,d){if("nth"===a){var e=B++;return function(a){var b,f=0,g=a;if(1===c&&0===d)return!0;if((b=a.parentNode)&&(b[z]!==e||!a.sizset)){for(g=b.firstChild;g&&(1!==g.nodeType||(g.sizset=++f,g!==a));g=g.nextSibling);b[z]=e}a=a.sizset-d;return 0===c?0===
a:0===a%c&&0<=a/c}}return function(b){var c=b;switch(a){case "only":case "first":for(;c=c.previousSibling;)if(1===c.nodeType)return!1;if("first"===a)return!0;c=b;case "last":for(;c=c.nextSibling;)if(1===c.nodeType)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=w.pseudos[a]||w.pseudos[a.toLowerCase()];e||v.error("unsupported pseudo: "+a);return e.sizzleFilter?e(b,c,d):e}},pseudos:{not:H(function(a,b,c){var d=X(a.replace(ra,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return!1===
a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return!0===a.selected},parent:function(a){return!w.pseudos.empty(a)},empty:function(a){var b;for(a=a.firstChild;a;){if("@"<a.nodeName||3===(b=a.nodeType)||4===b)return!1;a=a.nextSibling}return!0},contains:H(function(a){return function(b){return-1<(b.textContent||b.innerText||
Q(b)).indexOf(a)}}),has:H(function(a){return function(b){return 0<v(a,b).length}}),header:function(a){return fc.test(a.nodeName)},text:function(a){var b,c;return"input"===a.nodeName.toLowerCase()&&"text"===(b=a.type)&&(null==(c=a.getAttribute("type"))||c.toLowerCase()===b)},radio:J("radio"),checkbox:J("checkbox"),file:J("file"),password:J("password"),image:J("image"),submit:N("submit"),reset:N("reset"),button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===
b},input:function(a){return A.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&!(!a.type&&!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){b=a.pop();return c?a:[b]},even:function(a,b,c){b=[];c=c?1:0;for(var d=a.length;c<d;c+=2)b.push(a[c]);return b},odd:function(a,b,c){b=[];c=c?0:1;for(var d=a.length;c<d;c+=2)b.push(a[c]);return b},
lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){b=a.splice(+b,1);return c?a:b}}};w.setFilters.nth=w.setFilters.eq;w.filters=w.pseudos;T||(w.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}});R&&(w.order.push("NAME"),w.find.NAME=function(a,b){if("undefined"!==typeof b.getElementsByName)return b.getElementsByName(a)});P&&(w.order.splice(1,0,"CLASS"),w.find.CLASS=
function(a,b,c){if("undefined"!==typeof b.getElementsByClassName&&!c)return b.getElementsByClassName(a)});try{W.call(r.childNodes,0)[0].nodeType}catch(Z){W=function(a){for(var b,c=[];b=this[a];a++)c.push(b);return c}}var M=v.isXML=function(a){return(a=a&&(a.ownerDocument||a).documentElement)?"HTML"!==a.nodeName:!1},Y=v.contains=r.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:r.contains?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b.parentNode;return a===
d||!!(d&&1===d.nodeType&&c.contains&&c.contains(d))}:function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1},Q=v.getText=function(a){var b,c="",d=0;if(b=a.nodeType)if(1===b||9===b||11===b){if("string"===typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=Q(a)}else{if(3===b||4===b)return a.nodeValue}else for(;b=a[d];d++)c+=Q(b);return c};v.attr=function(a,b){var c;(c=M(a))||(b=b.toLowerCase());return w.attrHandle[b]?w.attrHandle[b](a):O||c?a.getAttribute(b):(c=
a.getAttributeNode(b))?"boolean"===typeof a[b]?a[b]?b:null:c.specified?c.value:null:null};v.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};[0,0].sort(function(){return C=0});r.compareDocumentPosition?p=function(a,b){return a===b?(u=!0,0):(a.compareDocumentPosition&&b.compareDocumentPosition?a.compareDocumentPosition(b)&4:a.compareDocumentPosition)?-1:1}:(p=function(a,b){if(a===b)return u=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,
e=[],f=[];c=a.parentNode;d=b.parentNode;var g=c;if(c===d)return n(a,b);if(!c)return-1;if(!d)return 1;for(;g;)e.unshift(g),g=g.parentNode;for(g=d;g;)f.unshift(g),g=g.parentNode;c=e.length;d=f.length;for(g=0;g<c&&g<d;g++)if(e[g]!==f[g])return n(e[g],f[g]);return g===c?n(a,f[g],-1):n(e[g],b,1)},n=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});v.uniqueSort=function(a){var b,c=1;if(p&&(u=C,a.sort(p),u))for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);
return a};var X=v.compile=function(a,b,c){var d,e,f=I[a];if(f&&f.context===b)return f;var l,m,f=[];d=0;for(var n=jb.exec(a),p=!n.pop()&&!n.pop(),q=p&&a.match(x)||[""],r=w.preFilter,s=w.filter,N=!c&&b!==t;null!=(m=q[d])&&p;d++)for(f.push(l=[]),N&&(m=" "+m);m;){p=!1;if(n=ia.exec(m))m=m.slice(n[0].length),p=l.push({part:n.pop().replace(ra," "),captures:n});for(e in s)!(n=V[e].exec(m))||r[e]&&!(n=r[e](n,b,c))||(m=m.slice(n.shift().length),p=l.push({part:e,captures:n}));if(!p)break}p||v.error(a);for(e=
0;d=f[e];e++){l=f;m=e;n=b;p=c;r=q=void 0;for(s=0;q=d[s];s++)w.relative[q.part]?r=g(r,w.relative[q.part],n):(q.captures.push(n,p),r=h(r,w.filter[q.part].apply(null,q.captures)));l[m]=r}f=I[a]=k(f);f.context=b;f.runs=f.dirruns=0;F.push(a);F.length>w.cacheLength&&delete I[F.shift()];return f};v.matches=function(a,b){return v(a,null,null,b)};v.matchesSelector=function(a,b){return 0<v(b,null,null,[a]).length};var U=function(a,b,c,d,e){a=a.replace(ra,"$1");var g,h,k,n,p,q,r=a.match(x);h=a.match(dc);k=b.nodeType;
if(V.POS.test(a))return f(a,b,c,d,r);if(d)g=W.call(d,0);else if(r&&1===r.length){if(1<h.length&&9===k&&!e&&(r=V.ID.exec(h[0]))){b=w.find.ID(r[1],b,e)[0];if(!b)return c;a=a.slice(h.shift().length)}d=(r=sa.exec(h[0]))&&!r.index&&b.parentNode||b;q=h.pop();n=q.split(":not")[0];h=0;for(k=w.order.length;h<k;h++)if(p=w.order[h],r=V[p].exec(n))if(g=w.find[p]((r[1]||"").replace(E,""),d,e),null!=g){n===q&&((a=a.slice(0,a.length-q.length)+n.replace(V[p],""))||D.apply(c,W.call(g,0)));break}}if(a)for(e=X(a,b,
e),m=e.dirruns++,null==g&&(g=w.find.TAG("*",sa.test(a)&&b.parentNode||b)),h=0;a=g[h];h++)l=e.runs++,e(a,b)&&c.push(a);return c};t.querySelectorAll&&function(){var a,b=U,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=r.matchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||r.oMatchesSelector||r.msMatchesSelector;L(function(a){a.innerHTML="\x3cselect\x3e\x3coption selected\x3e\x3c/option\x3e\x3c/select\x3e";a.querySelectorAll("[selected]").length||e.push("\\["+
s+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)");a.querySelectorAll(":checked").length||e.push(":checked")});L(function(a){a.innerHTML="\x3cp test\x3d''\x3e\x3c/p\x3e";a.querySelectorAll("[test^\x3d'']").length&&e.push("[*^$]\x3d"+s+"*(?:\"\"|'')");a.innerHTML="\x3cinput type\x3d'hidden'\x3e";a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")});e=e.length&&new RegExp(e.join("|"));U=function(a,d,f,g,h){if(!(g||h||e&&e.test(a)))if(9===d.nodeType)try{return D.apply(f,
W.call(d.querySelectorAll(a),0)),f}catch(k){}else if(1===d.nodeType&&"object"!==d.nodeName.toLowerCase()){var l=d.getAttribute("id"),m=l||z,n=sa.test(a)&&d.parentNode||d;l?m=m.replace(c,"\\$\x26"):d.setAttribute("id",m);try{return D.apply(f,W.call(n.querySelectorAll(a.replace(x,"[id\x3d'"+m+"'] $\x26")),0)),f}catch(p){}finally{l||d.removeAttribute("id")}}return b(a,d,f,g,h)};g&&(L(function(b){a=g.call(b,"div");try{g.call(b,"[test!\x3d'']:sizzle"),f.push(w.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),
v.matchesSelector=function(b,c){c=c.replace(d,"\x3d'$1']");if(!(M(b)||f.test(c)||e&&e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&11!==b.document.nodeType)return h}catch(k){}return 0<v(c,null,null,[b]).length})}();v.attr=c.attr;c.find=v;c.expr=v.selectors;c.expr[":"]=c.expr.pseudos;c.unique=v.uniqueSort;c.text=v.getText;c.isXMLDoc=v.isXML;c.contains=v.contains})(r);var gc=/Until$/,hc=/^(?:parents|prev(?:Until|All))/,Cb=/^.[^:#\[\.,]*$/,kb=c.expr.match.needsContext,ic={children:!0,contents:!0,
next:!0,prev:!0};c.fn.extend({find:function(a){var b,d,e,f,g,h,k=this;if("string"!==typeof a)return c(a).filter(function(){b=0;for(d=k.length;b<d;b++)if(c.contains(k[b],this))return!0});h=this.pushStack("","find",a);b=0;for(d=this.length;b<d;b++)if(e=h.length,c.find(a,this[b],h),0<b)for(f=e;f<h.length;f++)for(g=0;g<e;g++)if(h[g]===h[f]){h.splice(f--,1);break}return h},has:function(a){var b,d=c(a,this),e=d.length;return this.filter(function(){for(b=0;b<e;b++)if(c.contains(this,d[b]))return!0})},not:function(a){return this.pushStack(Ba(this,
a,!1),"not",a)},filter:function(a){return this.pushStack(Ba(this,a,!0),"filter",a)},is:function(a){return!!a&&("string"===typeof a?kb.test(a)?0<=c(a,this.context).index(this[0]):0<c.filter(a,this).length:0<this.filter(a).length)},closest:function(a,b){for(var d,e=0,f=this.length,g=[],h=kb.test(a)||"string"!==typeof a?c(a,b||this.context):0;e<f;e++)for(d=this[e];d&&d.ownerDocument&&d!==b&&11!==d.nodeType;){if(h?-1<h.index(d):c.find.matchesSelector(d,a)){g.push(d);break}d=d.parentNode}g=1<g.length?
c.unique(g):g;return this.pushStack(g,"closest",a)},index:function(a){return a?"string"===typeof a?c.inArray(this[0],c(a)):c.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var d="string"===typeof a?c(a,b):c.makeArray(a&&a.nodeType?[a]:a),e=c.merge(this.get(),d);return this.pushStack(Y(d[0])||Y(e[0])?e:c.unique(e))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});c.fn.andSelf=c.fn.addBack;c.each({parent:function(a){return(a=
a.parentNode)&&11!==a.nodeType?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return Aa(a,"nextSibling")},prev:function(a){return Aa(a,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling((a.parentNode||
{}).firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.merge([],a.childNodes)}},function(a,b){c.fn[a]=function(d,e){var f=c.map(this,b,d);gc.test(a)||(e=d);e&&"string"===typeof e&&(f=c.filter(e,f));f=1<this.length&&!ic[a]?c.unique(f):f;1<this.length&&hc.test(a)&&(f=f.reverse());return this.pushStack(f,a,x.call(arguments).join(","))}});c.extend({filter:function(a,b,d){d&&(a=":not("+a+")");
return 1===b.length?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){var e=[];for(a=a[b];a&&9!==a.nodeType&&(void 0===d||1!==a.nodeType||!c(a).is(d));)1===a.nodeType&&e.push(a),a=a[b];return e},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var Da="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",jc=/ jQuery\d+="(?:null|\d+)"/g,
ta=/^\s+/,lb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,mb=/<([\w:]+)/,kc=/<tbody/i,lc=/<|&#?\w+;/,mc=/<(?:script|style|link)/i,nc=/<(?:script|object|embed|option|style)/i,ua=new RegExp("\x3c(?:"+Da+")[\\s/\x3e]","i"),Ga=/^(?:checkbox|radio)$/,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,oc=/\/(java|ecma)script/i,pc=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,B={option:[1,"\x3cselect multiple\x3d'multiple'\x3e","\x3c/select\x3e"],legend:[1,"\x3cfieldset\x3e","\x3c/fieldset\x3e"],
thead:[1,"\x3ctable\x3e","\x3c/table\x3e"],tr:[2,"\x3ctable\x3e\x3ctbody\x3e","\x3c/tbody\x3e\x3c/table\x3e"],td:[3,"\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e","\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],col:[2,"\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e","\x3c/colgroup\x3e\x3c/table\x3e"],area:[1,"\x3cmap\x3e","\x3c/map\x3e"],_default:[0,"",""]},ob=Ca(q),va=ob.appendChild(q.createElement("div"));B.optgroup=B.option;B.tbody=B.tfoot=B.colgroup=B.caption=B.thead;B.th=B.td;c.support.htmlSerialize||
(B._default=[1,"X\x3cdiv\x3e","\x3c/div\x3e"]);c.fn.extend({text:function(a){return c.access(this,function(a){return void 0===a?c.text(this):this.empty().append((this[0]&&this[0].ownerDocument||q).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapAll(a.call(this,b))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=
a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return c.isFunction(a)?this.each(function(b){c(this).wrapInner(a.call(this,b))}):this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){var b=c.isFunction(a);return this.each(function(d){c(this).wrapAll(b?a.call(this,d):a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,
!0,function(a){1!==this.nodeType&&11!==this.nodeType||this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){1!==this.nodeType&&11!==this.nodeType||this.insertBefore(a,this.firstChild)})},before:function(){if(!Y(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=c.clean(arguments);return this.pushStack(c.merge(a,this),"before",this.selector)}},after:function(){if(!Y(this[0]))return this.domManip(arguments,
!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=c.clean(arguments);return this.pushStack(c.merge(this,a),"after",this.selector)}},remove:function(a,b){for(var d,e=0;null!=(d=this[e]);e++)if(!a||c.filter(a,[d]).length)b||1!==d.nodeType||(c.cleanData(d.getElementsByTagName("*")),c.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)for(1===a.nodeType&&c.cleanData(a.getElementsByTagName("*"));a.firstChild;)a.removeChild(a.firstChild);
return this},clone:function(a,b){a=null==a?!1:a;b=null==b?a:b;return this.map(function(){return c.clone(this,a,b)})},html:function(a){return c.access(this,function(a){var d=this[0]||{},e=0,f=this.length;if(void 0===a)return 1===d.nodeType?d.innerHTML.replace(jc,""):void 0;if(!("string"!==typeof a||mc.test(a)||!c.support.htmlSerialize&&ua.test(a)||!c.support.leadingWhitespace&&ta.test(a)||B[(mb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(lb,"\x3c$1\x3e\x3c/$2\x3e");try{for(;e<f;e++)d=this[e]||
{},1===d.nodeType&&(c.cleanData(d.getElementsByTagName("*")),d.innerHTML=a);d=0}catch(g){}}d&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(!Y(this[0])){if(c.isFunction(a))return this.each(function(b){var d=c(this),e=d.html();d.replaceWith(a.call(this,b,e))});"string"!==typeof a&&(a=c(a).detach());return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}return this.length?this.pushStack(c(c.isFunction(a)?
a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,b,d){a=[].concat.apply([],a);var e,f,g,h=0,k=a[0],l=[],m=this.length;if(!c.support.checkClone&&1<m&&"string"===typeof k&&nb.test(k))return this.each(function(){c(this).domManip(a,b,d)});if(c.isFunction(k))return this.each(function(e){var f=c(this);a[0]=k.call(this,e,b?f.html():void 0);f.domManip(a,b,d)});if(this[0]){e=c.buildFragment(a,this,l);g=e.fragment;f=g.firstChild;1===g.childNodes.length&&(g=f);if(f)for(b=
b&&c.nodeName(f,"tr"),e=e.cacheable||m-1;h<m;h++)d.call(b&&c.nodeName(this[h],"table")?Db(this[h],"tbody"):this[h],h===e?g:c.clone(g,!0,!0));g=f=null;l.length&&c.each(l,function(a,b){b.src?c.ajax?c.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):c.error("no ajax"):c.globalEval((b.text||b.textContent||b.innerHTML||"").replace(pc,""));b.parentNode&&b.parentNode.removeChild(b)})}return this}});c.buildFragment=function(a,b,d){var e,f,g,h=a[0];b=b||q;b=(b[0]||b).ownerDocument||
b[0]||b;"undefined"===typeof b.createDocumentFragment&&(b=q);!(1===a.length&&"string"===typeof h&&512>h.length&&b===q&&"\x3c"===h.charAt(0))||nc.test(h)||!c.support.checkClone&&nb.test(h)||!c.support.html5Clone&&ua.test(h)||(f=!0,e=c.fragments[h],g=void 0!==e);e||(e=b.createDocumentFragment(),c.clean(a,b,e,d),f&&(c.fragments[h]=g&&e));return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,
b){c.fn[a]=function(d){var e,f=0,g=[];d=c(d);var h=d.length;e=1===this.length&&this[0].parentNode;if((null==e||e&&11===e.nodeType&&1===e.childNodes.length)&&1===h)return d[b](this[0]),this;for(;f<h;f++)e=(0<f?this.clone(!0):this).get(),c(d[f])[b](e),g=g.concat(e);return this.pushStack(g,a,d.selector)}});c.extend({clone:function(a,b,d){var e,f,g,h;c.support.html5Clone||c.isXMLDoc(a)||!ua.test("\x3c"+a.nodeName+"\x3e")?h=a.cloneNode(!0):(va.innerHTML=a.outerHTML,va.removeChild(h=va.firstChild));if(!(c.support.noCloneEvent&&
c.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||c.isXMLDoc(a)))for(Fa(a,h),e=U(a),f=U(h),g=0;e[g];++g)f[g]&&Fa(e[g],f[g]);if(b&&(Ea(a,h),d))for(e=U(a),f=U(h),g=0;e[g];++g)Ea(e[g],f[g]);return h},clean:function(a,b,d,e){var f,g,h,k,l,m,p=0,n=[];b&&"undefined"!==typeof b.createDocumentFragment||(b=q);for(g=b===q&&ob;null!=(h=a[p]);p++)if("number"===typeof h&&(h+=""),h){if("string"===typeof h)if(lc.test(h)){g=g||Ca(b);m=m||g.appendChild(b.createElement("div"));h=h.replace(lb,"\x3c$1\x3e\x3c/$2\x3e");
f=(mb.exec(h)||["",""])[1].toLowerCase();k=B[f]||B._default;l=k[0];for(m.innerHTML=k[1]+h+k[2];l--;)m=m.lastChild;if(!c.support.tbody)for(l=kc.test(h),k="table"!==f||l?"\x3ctable\x3e"!==k[1]||l?[]:m.childNodes:m.firstChild&&m.firstChild.childNodes,f=k.length-1;0<=f;--f)c.nodeName(k[f],"tbody")&&!k[f].childNodes.length&&k[f].parentNode.removeChild(k[f]);!c.support.leadingWhitespace&&ta.test(h)&&m.insertBefore(b.createTextNode(ta.exec(h)[0]),m.firstChild);h=m.childNodes;m=g.lastChild}else h=b.createTextNode(h);
h.nodeType?n.push(h):n=c.merge(n,h)}m&&(g.removeChild(m),h=m=g=null);if(!c.support.appendChecked)for(p=0;null!=(h=n[p]);p++)c.nodeName(h,"input")?Ha(h):"undefined"!==typeof h.getElementsByTagName&&c.grep(h.getElementsByTagName("input"),Ha);if(d)for(a=function(a){if(!a.type||oc.test(a.type))return e?e.push(a.parentNode?a.parentNode.removeChild(a):a):d.appendChild(a)},p=0;null!=(h=n[p]);p++)c.nodeName(h,"script")&&a(h)||(d.appendChild(h),"undefined"!==typeof h.getElementsByTagName&&(h=c.grep(c.merge([],
h.getElementsByTagName("script")),a),n.splice.apply(n,[p+1,0].concat(h)),p+=h.length));return n},cleanData:function(a,b){for(var d,e,f,g,h=0,k=c.expando,l=c.cache,m=c.support.deleteExpando,p=c.event.special;null!=(f=a[h]);h++)if(b||c.acceptData(f))if(d=(e=f[k])&&l[e]){if(d.events)for(g in d.events)p[g]?c.event.remove(f,g):c.removeEvent(f,g,d.handle);l[e]&&(delete l[e],m?delete f[k]:f.removeAttribute?f.removeAttribute(k):f[k]=null,c.deletedIds.push(e))}}});(function(){var a,b;c.uaMatch=function(a){a=
a.toLowerCase();a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}};a=c.uaMatch(Jb.userAgent);b={};a.browser&&(b[a.browser]=!0,b.version=a.version);b.webkit&&(b.safari=!0);c.browser=b;c.sub=function(){function a(b,c){return new a.fn.init(b,c)}c.extend(!0,a,this);a.superclass=this;a.fn=a.prototype=
this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(f,g){g&&g instanceof c&&!(g instanceof a)&&(g=a(g));return c.fn.init.call(this,f,g,b)};a.fn.init.prototype=a.fn;var b=a(q);return a}})();var u,P,Z,wa=/alpha\([^)]*\)/i,qc=/opacity=([^)]*)/,rc=/^(top|right|bottom|left)$/,pb=/^margin/,Eb=new RegExp("^("+ga+")(.*)$","i"),aa=new RegExp("^("+ga+")(?!px)[a-z%]+$","i"),sc=new RegExp("^([-+])\x3d("+ga+")","i"),ma={},tc={position:"absolute",visibility:"hidden",display:"block"},qb={letterSpacing:0,
fontWeight:400,lineHeight:1},O=["Top","Right","Bottom","Left"],Ja=["Webkit","O","Moz","ms"],uc=c.fn.toggle;c.fn.extend({css:function(a,b){return c.access(this,function(a,b,f){return void 0!==f?c.style(a,b,f):c.css(a,b)},a,b,1<arguments.length)},show:function(){return Ka(this,!0)},hide:function(){return Ka(this)},toggle:function(a,b){var d="boolean"===typeof a;return c.isFunction(a)&&c.isFunction(b)?uc.apply(this,arguments):this.each(function(){(d?a:$(this))?c(this).show():c(this).hide()})}});c.extend({cssHooks:{opacity:{get:function(a,
b){if(b){var c=u(a,"opacity");return""===c?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g,h,k=c.camelCase(b),l=a.style;b=c.cssProps[k]||(c.cssProps[k]=Ia(l,k));h=c.cssHooks[b]||c.cssHooks[k];if(void 0!==d){if(g=typeof d,"string"===g&&(f=sc.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(c.css(a,b)),g=
"number"),!(null==d||"number"===g&&isNaN(d)||("number"!==g||c.cssNumber[k]||(d+="px"),h&&"set"in h&&void 0===(d=h.set(a,d,e)))))try{l[b]=d}catch(m){}}else return h&&"get"in h&&void 0!==(f=h.get(a,!1,e))?f:l[b]}},css:function(a,b,d,e){var f,g;g=c.camelCase(b);b=c.cssProps[g]||(c.cssProps[g]=Ia(a.style,g));(g=c.cssHooks[b]||c.cssHooks[g])&&"get"in g&&(f=g.get(a,!0,e));void 0===f&&(f=u(a,b));"normal"===f&&b in qb&&(f=qb[b]);return d||void 0!==e?(a=parseFloat(f),d||c.isNumeric(a)?a||0:f):f},swap:function(a,
b,c){var e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];c=c.call(a);for(e in b)a.style[e]=f[e];return c}});r.getComputedStyle?u=function(a,b){var d,e,f,g,h=getComputedStyle(a,null),k=a.style;h&&(d=h[b],""!==d||c.contains(a.ownerDocument.documentElement,a)||(d=c.style(a,b)),aa.test(d)&&pb.test(b)&&(e=k.width,f=k.minWidth,g=k.maxWidth,k.minWidth=k.maxWidth=k.width=d,d=h.width,k.width=e,k.minWidth=f,k.maxWidth=g));return d}:q.documentElement.currentStyle&&(u=function(a,b){var c,e,f=a.currentStyle&&
a.currentStyle[b],g=a.style;null==f&&g&&g[b]&&(f=g[b]);if(aa.test(f)&&!rc.test(b)){c=g.left;if(e=a.runtimeStyle&&a.runtimeStyle.left)a.runtimeStyle.left=a.currentStyle.left;g.left="fontSize"===b?"1em":f;f=g.pixelLeft+"px";g.left=c;e&&(a.runtimeStyle.left=e)}return""===f?"auto":f});c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(a,e,f){if(e)return 0!==a.offsetWidth||"none"!==u(a,"display")?Oa(a,b,f):c.swap(a,tc,function(){return Oa(a,b,f)})},set:function(a,e,f){return Ma(a,e,f?
Na(a,b,f,c.support.boxSizing&&"border-box"===c.css(a,"boxSizing")):0)}}});c.support.opacity||(c.cssHooks.opacity={get:function(a,b){return qc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var d=a.style,e=a.currentStyle,f=c.isNumeric(b)?"alpha(opacity\x3d"+100*b+")":"",g=e&&e.filter||d.filter||"";d.zoom=1;if(1<=b&&""===c.trim(g.replace(wa,""))&&d.removeAttribute&&(d.removeAttribute("filter"),e&&!e.filter))return;d.filter=
wa.test(g)?g.replace(wa,f):g+" "+f}});c(function(){c.support.reliableMarginRight||(c.cssHooks.marginRight={get:function(a,b){return c.swap(a,{display:"inline-block"},function(){if(b)return u(a,"marginRight")})}});!c.support.pixelPosition&&c.fn.position&&c.each(["top","left"],function(a,b){c.cssHooks[b]={get:function(a,e){if(e){var f=u(a,b);return aa.test(f)?c(a).position()[b]+"px":f}}}})});c.expr&&c.expr.filters&&(c.expr.filters.hidden=function(a){return 0===a.offsetWidth&&0===a.offsetHeight||!c.support.reliableHiddenOffsets&&
"none"===(a.style&&a.style.display||u(a,"display"))},c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)});c.each({margin:"",padding:"",border:"Width"},function(a,b){c.cssHooks[a+b]={expand:function(c){var e="string"===typeof c?c.split(" "):[c],f={};for(c=0;4>c;c++)f[a+O[c]+b]=e[c]||e[c-2]||e[0];return f}};pb.test(a)||(c.cssHooks[a+b].set=Ma)});var vc=/%20/g,Fb=/\[\]$/,rb=/\r?\n/g,wc=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
xc=/^(?:select|textarea)/i;c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||xc.test(this.nodeName)||wc.test(this.type))}).map(function(a,b){var d=c(this).val();return null==d?null:c.isArray(d)?c.map(d,function(a,c){return{name:b.name,value:a.replace(rb,"\r\n")}}):{name:b.name,value:d.replace(rb,"\r\n")}}).get()}});
c.param=function(a,b){var d,e=[],f=function(a,b){b=c.isFunction(b)?b():null==b?"":b;e[e.length]=encodeURIComponent(a)+"\x3d"+encodeURIComponent(b)};void 0===b&&(b=c.ajaxSettings&&c.ajaxSettings.traditional);if(c.isArray(a)||a.jquery&&!c.isPlainObject(a))c.each(a,function(){f(this.name,this.value)});else for(d in a)na(d,a[d],b,f);return e.join("\x26").replace(vc,"+")};var R,S,yc=/#.*$/,zc=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Ac=/^(?:GET|HEAD)$/,Bc=/^\/\//,sb=/\?/,Cc=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
Dc=/([?&])_=[^&]*/,tb=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ub=c.fn.load,oa={},vb={},wb=["*/"]+["*"];try{R=Ib.href}catch(Lc){R=q.createElement("a"),R.href="",R=R.href}S=tb.exec(R.toLowerCase())||[];c.fn.load=function(a,b,d){if("string"!==typeof a&&ub)return ub.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,k=a.indexOf(" ");0<=k&&(e=a.slice(k,a.length),a=a.slice(0,k));c.isFunction(b)?(d=b,b=void 0):"object"===typeof b&&(f="POST");c.ajax({url:a,type:f,dataType:"html",
data:b,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments;h.html(e?c("\x3cdiv\x3e").append(a.replace(Cc,"")).find(e):a)});return this};c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(a){return this.on(b,a)}});c.each(["get","post"],function(a,b){c[b]=function(a,e,f,g){c.isFunction(e)&&(g=g||f,f=e,e=void 0);return c.ajax({type:b,url:a,data:e,success:f,dataType:g})}});c.extend({getScript:function(a,
b){return c.get(a,void 0,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},ajaxSetup:function(a,b){b?Qa(a,c.ajaxSettings):(b=a,a=c.ajaxSettings);Qa(a,b);return a},ajaxSettings:{url:R,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(S[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset\x3dUTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",
"*":wb},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":r.String,"text html":!0,"text json":c.parseJSON,"text xml":c.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Pa(oa),ajaxTransport:Pa(vb),ajax:function(a,b){function d(a,b,d,g){var l,p,x,y,G=b;if(2!==D){D=2;k&&clearTimeout(k);h=void 0;f=g||"";s.readyState=0<a?4:0;if(d){y=n;g=s;var z,A,E,H,I=y.contents,K=y.dataTypes,J=y.responseFields;for(A in J)A in d&&(g[J[A]]=
d[A]);for(;"*"===K[0];)K.shift(),void 0===z&&(z=y.mimeType||g.getResponseHeader("content-type"));if(z)for(A in I)if(I[A]&&I[A].test(z)){K.unshift(A);break}if(K[0]in d)E=K[0];else{for(A in d){if(!K[0]||y.converters[A+" "+K[0]]){E=A;break}H||(H=A)}E=E||H}E?(E!==K[0]&&K.unshift(E),y=d[E]):y=void 0}if(200<=a&&300>a||304===a)if(n.ifModified&&((d=s.getResponseHeader("Last-Modified"))&&(c.lastModified[e]=d),(d=s.getResponseHeader("Etag"))&&(c.etag[e]=d)),304===a)G="notmodified",l=!0;else{a:{p=n;x=y;var F,
L,G=p.dataTypes.slice();z=G[0];A={};E=0;p.dataFilter&&(x=p.dataFilter(x,p.dataType));if(G[1])for(F in p.converters)A[F.toLowerCase()]=p.converters[F];for(;d=G[++E];)if("*"!==d){if("*"!==z&&z!==d){F=A[z+" "+d]||A["* "+d];if(!F)for(L in A)if(l=L.split(" "),l[1]===d&&(F=A[z+" "+l[0]]||A["* "+l[0]])){!0===F?F=A[L]:!0!==A[L]&&(d=l[0],G.splice(E--,0,d));break}if(!0!==F)if(F&&p["throws"])x=F(x);else try{x=F(x)}catch(M){l={state:"parsererror",error:F?M:"No conversion from "+z+" to "+d};break a}}z=d}l={state:"success",
data:x}}G=l.state;p=l.data;x=l.error;l=!x}else if(x=G,!G||a)G="error",0>a&&(a=0);s.status=a;s.statusText=""+(b||G);l?u.resolveWith(q,[p,G,s]):u.rejectWith(q,[s,G,x]);s.statusCode(B);B=void 0;m&&r.trigger("ajax"+(l?"Success":"Error"),[s,n,l?p:x]);C.fireWith(q,[s,G]);m&&(r.trigger("ajaxComplete",[s,n]),--c.active||c.event.trigger("ajaxStop"))}}"object"===typeof a&&(b=a,a=void 0);b=b||{};var e,f,g,h,k,l,m,p,n=c.ajaxSetup({},b),q=n.context||n,r=q!==n&&(q.nodeType||q instanceof c)?c(q):c.event,u=c.Deferred(),
C=c.Callbacks("once memory"),B=n.statusCode||{},x={},y={},D=0,z="canceled",s={readyState:0,setRequestHeader:function(a,b){if(!D){var c=a.toLowerCase();a=y[c]=y[c]||a;x[a]=b}return this},getAllResponseHeaders:function(){return 2===D?f:null},getResponseHeader:function(a){var b;if(2===D){if(!g)for(g={};b=zc.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return void 0===b?null:b},overrideMimeType:function(a){D||(n.mimeType=a);return this},abort:function(a){a=a||z;h&&h.abort(a);d(0,a);return this}};
u.promise(s);s.success=s.done;s.error=s.fail;s.complete=C.add;s.statusCode=function(a){if(a){var b;if(2>D)for(b in a)B[b]=[B[b],a[b]];else b=a[s.status],s.always(b)}return this};n.url=((a||n.url)+"").replace(yc,"").replace(Bc,S[1]+"//");n.dataTypes=c.trim(n.dataType||"*").toLowerCase().split(I);null==n.crossDomain&&(l=tb.exec(n.url.toLowerCase()),n.crossDomain=!(!l||l[1]==S[1]&&l[2]==S[2]&&(l[3]||("http:"===l[1]?80:443))==(S[3]||("http:"===S[1]?80:443))));n.data&&n.processData&&"string"!==typeof n.data&&
(n.data=c.param(n.data,n.traditional));ba(oa,n,b,s);if(2===D)return s;m=n.global;n.type=n.type.toUpperCase();n.hasContent=!Ac.test(n.type);m&&0===c.active++&&c.event.trigger("ajaxStart");if(!n.hasContent&&(n.data&&(n.url+=(sb.test(n.url)?"\x26":"?")+n.data,delete n.data),e=n.url,!1===n.cache)){l=c.now();var H=n.url.replace(Dc,"$1_\x3d"+l);n.url=H+(H===n.url?(sb.test(n.url)?"\x26":"?")+"_\x3d"+l:"")}(n.data&&n.hasContent&&!1!==n.contentType||b.contentType)&&s.setRequestHeader("Content-Type",n.contentType);
n.ifModified&&(e=e||n.url,c.lastModified[e]&&s.setRequestHeader("If-Modified-Since",c.lastModified[e]),c.etag[e]&&s.setRequestHeader("If-None-Match",c.etag[e]));s.setRequestHeader("Accept",n.dataTypes[0]&&n.accepts[n.dataTypes[0]]?n.accepts[n.dataTypes[0]]+("*"!==n.dataTypes[0]?", "+wb+"; q\x3d0.01":""):n.accepts["*"]);for(p in n.headers)s.setRequestHeader(p,n.headers[p]);if(n.beforeSend&&(!1===n.beforeSend.call(q,s,n)||2===D))return s.abort();z="abort";for(p in{success:1,error:1,complete:1})s[p](n[p]);
if(h=ba(vb,n,b,s)){s.readyState=1;m&&r.trigger("ajaxSend",[s,n]);n.async&&0<n.timeout&&(k=setTimeout(function(){s.abort("timeout")},n.timeout));try{D=1,h.send(x,d)}catch(J){if(2>D)d(-1,J);else throw J;}}else d(-1,"No Transport");return s},active:0,lastModified:{},etag:{}});var xb=[],Ec=/\?/,ja=/(=)\?(?=&|$)|\?\?/,Fc=c.now();c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=xb.pop()||c.expando+"_"+Fc++;this[a]=!0;return a}});c.ajaxPrefilter("json jsonp",function(a,b,d){var e,f,g,h=a.data,
k=a.url,l=!1!==a.jsonp,m=l&&ja.test(k),p=l&&!m&&"string"===typeof h&&!(a.contentType||"").indexOf("application/x-www-form-urlencoded")&&ja.test(h);if("jsonp"===a.dataTypes[0]||m||p)return e=a.jsonpCallback=c.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,f=r[e],m?a.url=k.replace(ja,"$1"+e):p?a.data=h.replace(ja,"$1"+e):l&&(a.url+=(Ec.test(k)?"\x26":"?")+a.jsonp+"\x3d"+e),a.converters["script json"]=function(){g||c.error(e+" was not called");return g[0]},a.dataTypes[0]="json",r[e]=function(){g=
arguments},d.always(function(){r[e]=f;a[e]&&(a.jsonpCallback=b.jsonpCallback,xb.push(e));g&&c.isFunction(f)&&f(g[0]);g=f=void 0}),"script"});c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){c.globalEval(a);return a}}});c.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1);a.crossDomain&&(a.type="GET",a.global=!1)});c.ajaxTransport("script",
function(a){if(a.crossDomain){var b,c=q.head||q.getElementsByTagName("head")[0]||q.documentElement;return{send:function(e,f){b=q.createElement("script");b.async="async";a.scriptCharset&&(b.charset=a.scriptCharset);b.src=a.url;b.onload=b.onreadystatechange=function(a,e){if(e||!b.readyState||/loaded|complete/.test(b.readyState))b.onload=b.onreadystatechange=null,c&&b.parentNode&&c.removeChild(b),b=void 0,e||f(200,"success")};c.insertBefore(b,c.firstChild)},abort:function(){if(b)b.onload(0,1)}}}});var M,
xa=r.ActiveXObject?function(){for(var a in M)M[a](0,1)}:!1,Gc=0;c.ajaxSettings.xhr=r.ActiveXObject?function(){var a;if(!(a=!this.isLocal&&Ra()))a:{try{a=new r.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:Ra;(function(a){c.extend(c.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})})(c.ajaxSettings.xhr());c.support.ajax&&c.ajaxTransport(function(a){if(!a.crossDomain||c.support.cors){var b;return{send:function(d,e){var f,g,h=a.xhr();a.username?h.open(a.type,a.url,a.async,
a.username,a.password):h.open(a.type,a.url,a.async);if(a.xhrFields)for(g in a.xhrFields)h[g]=a.xhrFields[g];a.mimeType&&h.overrideMimeType&&h.overrideMimeType(a.mimeType);a.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");try{for(g in d)h.setRequestHeader(g,d[g])}catch(k){}h.send(a.hasContent&&a.data||null);b=function(d,g){var k,n,q,r,u;try{if(b&&(g||4===h.readyState))if(b=void 0,f&&(h.onreadystatechange=c.noop,xa&&delete M[f]),g)4!==h.readyState&&h.abort();else{k=h.status;
q=h.getAllResponseHeaders();r={};(u=h.responseXML)&&u.documentElement&&(r.xml=u);try{r.text=h.responseText}catch(x){}try{n=h.statusText}catch(y){n=""}k||!a.isLocal||a.crossDomain?1223===k&&(k=204):k=r.text?200:404}}catch(B){g||e(-1,B)}r&&e(k,n,r,q)};a.async?4===h.readyState?setTimeout(b,0):(f=++Gc,xa&&(M||(M={},c(r).unload(xa)),M[f]=b),h.onreadystatechange=b):b()},abort:function(){b&&b(0,1)}}}});var ca,ka,Hc=/^(?:toggle|show|hide)$/,Ic=new RegExp("^(?:([-+])\x3d|)("+ga+")([a-z%]*)$","i"),Jc=/queueHooks$/,
da=[function(a,b,d){var e,f,g,h,k,l,m=this,p=a.style,n={},q=[],r=a.nodeType&&$(a);d.queue||(k=c._queueHooks(a,"fx"),null==k.unqueued&&(k.unqueued=0,l=k.empty.fire,k.empty.fire=function(){k.unqueued||l()}),k.unqueued++,m.always(function(){m.always(function(){k.unqueued--;c.queue(a,"fx").length||k.empty.fire()})}));1===a.nodeType&&("height"in b||"width"in b)&&(d.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===c.css(a,"display")&&"none"===c.css(a,"float")&&(c.support.inlineBlockNeedsLayout&&
"inline"!==La(a.nodeName)?p.zoom=1:p.display="inline-block"));d.overflow&&(p.overflow="hidden",c.support.shrinkWrapBlocks||m.done(function(){p.overflow=d.overflow[0];p.overflowX=d.overflow[1];p.overflowY=d.overflow[2]}));for(e in b)f=b[e],Hc.exec(f)&&(delete b[e],f!==(r?"hide":"show")&&q.push(e));if(f=q.length)for(g=c._data(a,"fxshow")||c._data(a,"fxshow",{}),r?c(a).show():m.done(function(){c(a).hide()}),m.done(function(){var b;c.removeData(a,"fxshow",!0);for(b in n)c.style(a,b,n[b])}),e=0;e<f;e++)b=
q[e],h=m.createTween(b,r?g[b]:0),n[b]=g[b]||c.style(a,b),b in g||(g[b]=h.start,r&&(h.end=h.start,h.start="width"===b||"height"===b?1:0))}],Q={"*":[function(a,b){var d,e,f,g=this.createTween(a,b),h=Ic.exec(b),k=g.cur(),l=+k||0,m=1;if(h){d=+h[2];e=h[3]||(c.cssNumber[a]?"":"px");if("px"!==e&&l){l=c.css(g.elem,a,!0)||d||1;do f=m=m||".5",l/=m,c.style(g.elem,a,l+e),m=g.cur()/k;while(1!==m&&m!==f)}g.unit=e;g.start=l;g.end=h[1]?l+(h[1]+1)*d:d}return g}]};c.Animation=c.extend(Ta,{tweener:function(a,b){c.isFunction(a)?
(b=a,a=["*"]):a=a.split(" ");for(var d,e=0,f=a.length;e<f;e++)d=a[e],Q[d]=Q[d]||[],Q[d].unshift(b)},prefilter:function(a,b){b?da.unshift(a):da.push(a)}});c.Tween=C;C.prototype={constructor:C,init:function(a,b,d,e,f,g){this.elem=a;this.prop=d;this.easing=f||"swing";this.options=b;this.start=this.now=this.cur();this.end=e;this.unit=g||(c.cssNumber[d]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b=C.propHooks[this.prop];
this.pos=a=c.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration);this.now=(this.end-this.start)*a+this.start;this.options.step&&this.options.step.call(this.elem,this.now,this);b&&b.set?b.set(this):C.propHooks._default.set(this);return this}};C.prototype.init.prototype=C.prototype;C.propHooks={_default:{get:function(a){return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(a=c.css(a.elem,a.prop,!1,""))&&"auto"!==a?a:0:a.elem[a.prop]},set:function(a){if(c.fx.step[a.prop])c.fx.step[a.prop](a);
else a.elem.style&&(null!=a.elem.style[c.cssProps[a.prop]]||c.cssHooks[a.prop])?c.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}};C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}};c.each(["toggle","show","hide"],function(a,b){var d=c.fn[b];c.fn[b]=function(e,f,g){return null==e||"boolean"===typeof e||!a&&c.isFunction(e)&&c.isFunction(f)?d.apply(this,arguments):this.animate(ea(b,!0),e,f,g)}});c.fn.extend({fadeTo:function(a,
b,c,e){return this.filter($).css("opacity",0).show().end().animate({opacity:b},a,c,e)},animate:function(a,b,d,e){var f=c.isEmptyObject(a),g=c.speed(b,d,e);b=function(){var b=Ta(this,c.extend({},a),g);f&&b.stop(!0)};return f||!1===g.queue?this.each(b):this.queue(g.queue,b)},stop:function(a,b,d){var e=function(a){var b=a.stop;delete a.stop;b(d)};"string"!==typeof a&&(d=b,b=a,a=void 0);b&&!1!==a&&this.queue(a||"fx",[]);return this.each(function(){var b=!0,g=null!=a&&a+"queueHooks",h=c.timers,k=c._data(this);
if(g)k[g]&&k[g].stop&&e(k[g]);else for(g in k)k[g]&&k[g].stop&&Jc.test(g)&&e(k[g]);for(g=h.length;g--;)h[g].elem!==this||null!=a&&h[g].queue!==a||(h[g].anim.stop(d),b=!1,h.splice(g,1));!b&&d||c.dequeue(this,a)})}});c.each({slideDown:ea("show"),slideUp:ea("hide"),slideToggle:ea("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(a,c,f){return this.animate(b,a,c,f)}});c.speed=function(a,b,d){var e=a&&"object"===typeof a?c.extend({},
a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:"number"===typeof e.duration?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;if(null==e.queue||!0===e.queue)e.queue="fx";e.old=e.complete;e.complete=function(){c.isFunction(e.old)&&e.old.call(this);e.queue&&c.dequeue(this,e.queue)};return e};c.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}};c.timers=[];c.fx=C.prototype.init;
c.fx.tick=function(){for(var a,b=c.timers,d=0;d<b.length;d++)a=b[d],a()||b[d]!==a||b.splice(d--,1);b.length||c.fx.stop()};c.fx.timer=function(a){a()&&c.timers.push(a)&&!ka&&(ka=setInterval(c.fx.tick,c.fx.interval))};c.fx.interval=13;c.fx.stop=function(){clearInterval(ka);ka=null};c.fx.speeds={slow:600,fast:200,_default:400};c.fx.step={};c.expr&&c.expr.filters&&(c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length});var yb=/^(?:body|html)$/i;c.fn.offset=
function(a){if(arguments.length)return void 0===a?this:this.each(function(b){c.offset.setOffset(this,a,b)});var b,d,e,f,g,h;if(g=(b=this[0])&&b.ownerDocument){if((e=g.body)===b)return c.offset.bodyOffset(b);d=g.documentElement;if(!c.contains(d,b))return{top:0,left:0};b=b.getBoundingClientRect();f=Ua(g);g=d.clientTop||e.clientTop||0;e=d.clientLeft||e.clientLeft||0;h=f.pageYOffset||d.scrollTop;d=f.pageXOffset||d.scrollLeft;g=b.top+h-g;b=b.left+d-e;return{top:g,left:b}}};c.offset={bodyOffset:function(a){var b=
a.offsetTop,d=a.offsetLeft;c.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(c.css(a,"marginTop"))||0,d+=parseFloat(c.css(a,"marginLeft"))||0);return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");"static"===e&&(a.style.position="relative");var f=c(a),g=f.offset(),h=c.css(a,"top"),k=c.css(a,"left"),l={},m={};("absolute"===e||"fixed"===e)&&-1<c.inArray("auto",[h,k])?(m=f.position(),e=m.top,k=m.left):(e=parseFloat(h)||0,k=parseFloat(k)||0);c.isFunction(b)&&(b=b.call(a,d,
g));null!=b.top&&(l.top=b.top-g.top+e);null!=b.left&&(l.left=b.left-g.left+k);"using"in b?b.using.call(a,l):f.css(l)}};c.fn.extend({position:function(){if(this[0]){var a=this[0],b=this.offsetParent(),d=this.offset(),e=yb.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}}},
offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||q.body;a&&!yb.test(a.nodeName)&&"static"===c.css(a,"position");)a=a.offsetParent;return a||q.body})}});c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var d=/Y/.test(b);c.fn[a]=function(e){return c.access(this,function(a,e,h){var k=Ua(a);if(void 0===h)return k?b in k?k[b]:k.document.documentElement[e]:a[e];k?k.scrollTo(d?c(k).scrollLeft():h,d?h:c(k).scrollTop()):a[e]=h},a,e,arguments.length,null)}});
c.each({Height:"height",Width:"width"},function(a,b){c.each({padding:"inner"+a,content:b,"":"outer"+a},function(d,e){c.fn[e]=function(e,g){var h=arguments.length&&(d||"boolean"!==typeof e),k=d||(!0===e||!0===g?"margin":"border");return c.access(this,function(b,d,e){return c.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(d=b.documentElement,Math.max(b.body["scroll"+a],d["scroll"+a],b.body["offset"+a],d["offset"+a],d["client"+a])):void 0===e?c.css(b,d,e,k):c.style(b,d,e,k)},b,h?
e:void 0,h)}})});r.jQuery=r.$=c;"function"===typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return c})})(window);

define("es6", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 156);
/******/ })
/************************************************************************/
/******/ ({

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * All shims needed to make IE8 and IE9 support the ES5 spec as well as is possible.
 * The full list of shim libraries provided is:
 * es5-shim
 * es5-sham
 * console-polyfill
 * a small subset of es6 utility functions. most of the es6 spec is shimmable only in IE9+
 * (available via conditional comment in layout.jsp) html5shiv
 */

/*
 * es5-shim and es5-sham
 */
(function () {
  /**
   * Brings an environment as close to ECMAScript 5 compliance
   * as is possible with the facilities of erstwhile engines.
   *
   * Annotated ES5: http://es5.github.com/ (specific links below)
   * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
   * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
   */

  // Shortcut to an often accessed properties, in order to avoid multiple
  // dereference that costs universally.
  var ArrayPrototype = Array.prototype;
  var ObjectPrototype = Object.prototype;
  var FunctionPrototype = Function.prototype;
  var StringPrototype = String.prototype;
  var NumberPrototype = Number.prototype;
  var array_slice = ArrayPrototype.slice;
  var array_splice = ArrayPrototype.splice;
  var array_push = ArrayPrototype.push;
  var array_unshift = ArrayPrototype.unshift;
  var call = FunctionPrototype.call;

  // Having a toString local variable name breaks in Opera so use _toString.
  var _toString = ObjectPrototype.toString;

  var isFunction = function isFunction(val) {
    return ObjectPrototype.toString.call(val) === '[object Function]';
  };
  var isRegex = function isRegex(val) {
    return ObjectPrototype.toString.call(val) === '[object RegExp]';
  };
  var isArray = function isArray(obj) {
    return _toString.call(obj) === "[object Array]";
  };
  var isString = function isString(obj) {
    return _toString.call(obj) === "[object String]";
  };
  var isArguments = function isArguments(value) {
    var str = _toString.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) {
      isArgs = !isArray(value) && value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.length === 'number' && value.length >= 0 && isFunction(value.callee);
    }
    return isArgs;
  };

  var supportsDescriptors = Object.defineProperty && function () {
    try {
      Object.defineProperty({}, 'x', {});
      return true;
    } catch (e) {
      /* this is ES3 */
      return false;
    }
  }();

  // Define configurable, writable and non-enumerable props
  // if they don't exist.
  var defineProperty;
  if (supportsDescriptors) {
    defineProperty = function defineProperty(object, name, method, forceAssign) {
      if (!forceAssign && name in object) {
        return;
      }
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: method
      });
    };
  } else {
    defineProperty = function defineProperty(object, name, method, forceAssign) {
      if (!forceAssign && name in object) {
        return;
      }
      object[name] = method;
    };
  }
  var defineProperties = function defineProperties(object, map, forceAssign) {
    for (var name in map) {
      if (ObjectPrototype.hasOwnProperty.call(map, name)) {
        defineProperty(object, name, map[name], forceAssign);
      }
    }
  };

  //
  // Util
  // ======
  //

  // ES5 9.4
  // http://es5.github.com/#x9.4
  // http://jsperf.com/to-integer

  function toInteger(n) {
    n = +n;
    if (n !== n) {
      // isNaN
      n = 0;
    } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
      n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
  }

  function isPrimitive(input) {
    var type = typeof input === 'undefined' ? 'undefined' : _typeof(input);
    return input === null || type === "undefined" || type === "boolean" || type === "number" || type === "string";
  }

  function toPrimitive(input) {
    var val, valueOf, toStr;
    if (isPrimitive(input)) {
      return input;
    }
    valueOf = input.valueOf;
    if (isFunction(valueOf)) {
      val = valueOf.call(input);
      if (isPrimitive(val)) {
        return val;
      }
    }
    toStr = input.toString;
    if (isFunction(toStr)) {
      val = toStr.call(input);
      if (isPrimitive(val)) {
        return val;
      }
    }
    throw new TypeError();
  }

  // ES5 9.9
  // http://es5.github.com/#x9.9
  var toObject = function toObject(o) {
    if (o == null) {
      // this matches both null and undefined
      throw new TypeError("can't convert " + o + " to object");
    }
    return Object(o);
  };

  var ToUint32 = function ToUint32(x) {
    return x >>> 0;
  };

  //
  // Function
  // ========
  //

  // ES-5 15.3.4.5
  // http://es5.github.com/#x15.3.4.5

  function Empty() {}

  defineProperties(FunctionPrototype, {
    bind: function bind(that) {
      // .length is 1
      // 1. Let Target be the this value.
      var target = this;
      // 2. If IsCallable(Target) is false, throw a TypeError exception.
      if (!isFunction(target)) {
        throw new TypeError("Function.prototype.bind called on incompatible " + target);
      }
      // 3. Let A be a new (possibly empty) internal list of all of the
      //   argument values provided after thisArg (arg1, arg2 etc), in order.
      // XXX slicedArgs will stand in for "A" if used
      var args = array_slice.call(arguments, 1); // for normal call
      // 4. Let F be a new native ECMAScript object.
      // 11. Set the [[Prototype]] internal property of F to the standard
      //   built-in Function prototype object as specified in 15.3.3.1.
      // 12. Set the [[Call]] internal property of F as described in
      //   15.3.4.5.1.
      // 13. Set the [[Construct]] internal property of F as described in
      //   15.3.4.5.2.
      // 14. Set the [[HasInstance]] internal property of F as described in
      //   15.3.4.5.3.
      var binder = function binder() {

        if (this instanceof bound) {
          // 15.3.4.5.2 [[Construct]]
          // When the [[Construct]] internal method of a function object,
          // F that was created using the bind function is called with a
          // list of arguments ExtraArgs, the following steps are taken:
          // 1. Let target be the value of F's [[TargetFunction]]
          //   internal property.
          // 2. If target has no [[Construct]] internal method, a
          //   TypeError exception is thrown.
          // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
          //   property.
          // 4. Let args be a new list containing the same values as the
          //   list boundArgs in the same order followed by the same
          //   values as the list ExtraArgs in the same order.
          // 5. Return the result of calling the [[Construct]] internal
          //   method of target providing args as the arguments.

          var result = target.apply(this, args.concat(array_slice.call(arguments)));
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          // 15.3.4.5.1 [[Call]]
          // When the [[Call]] internal method of a function object, F,
          // which was created using the bind function is called with a
          // this value and a list of arguments ExtraArgs, the following
          // steps are taken:
          // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
          //   property.
          // 2. Let boundThis be the value of F's [[BoundThis]] internal
          //   property.
          // 3. Let target be the value of F's [[TargetFunction]] internal
          //   property.
          // 4. Let args be a new list containing the same values as the
          //   list boundArgs in the same order followed by the same
          //   values as the list ExtraArgs in the same order.
          // 5. Return the result of calling the [[Call]] internal method
          //   of target providing boundThis as the this value and
          //   providing args as the arguments.

          // equiv: target.call(this, ...boundArgs, ...args)
          return target.apply(that, args.concat(array_slice.call(arguments)));
        }
      };

      // 15. If the [[Class]] internal property of Target is "Function", then
      //     a. Let L be the length property of Target minus the length of A.
      //     b. Set the length own property of F to either 0 or L, whichever is
      //       larger.
      // 16. Else set the length own property of F to 0.

      var boundLength = Math.max(0, target.length - args.length);

      // 17. Set the attributes of the length own property of F to the values
      //   specified in 15.3.5.1.
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }

      // XXX Build a dynamic function with desired amount of arguments is the only
      // way to set the length property of a function.
      // In environments where Content Security Policies enabled (Chrome extensions,
      // for ex.) all use of eval or Function costructor throws an exception.
      // However in all of these environments Function.prototype.bind exists
      // and so this code will never be executed.
      var bound = Function("binder", "return function (" + boundArgs.join(",") + "){return binder.apply(this,arguments)}")(binder);

      if (target.prototype) {
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        // Clean up dangling references.
        Empty.prototype = null;
      }

      // TODO
      // 18. Set the [[Extensible]] internal property of F to true.

      // TODO
      // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
      // 20. Call the [[DefineOwnProperty]] internal method of F with
      //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
      //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
      //   false.
      // 21. Call the [[DefineOwnProperty]] internal method of F with
      //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
      //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
      //   and false.

      // TODO
      // NOTE Function objects created using Function.prototype.bind do not
      // have a prototype property or the [[Code]], [[FormalParameters]], and
      // [[Scope]] internal properties.
      // XXX can't delete prototype in pure-js.

      // 22. Return F.
      return bound;
    }
  });

  // _Please note: Shortcuts are defined after `Function.prototype.bind` as we
  // us it in defining shortcuts.
  var owns = call.bind(ObjectPrototype.hasOwnProperty);

  // If JS engine supports accessors creating shortcuts.
  var defineGetter;
  var defineSetter;
  var lookupGetter;
  var lookupSetter;
  var supportsAccessors;
  if (supportsAccessors = owns(ObjectPrototype, "__defineGetter__")) {
    defineGetter = call.bind(ObjectPrototype.__defineGetter__);
    defineSetter = call.bind(ObjectPrototype.__defineSetter__);
    lookupGetter = call.bind(ObjectPrototype.__lookupGetter__);
    lookupSetter = call.bind(ObjectPrototype.__lookupSetter__);
  }

  //
  // Array
  // =====
  //

  // ES5 15.4.4.12
  // http://es5.github.com/#x15.4.4.12
  var spliceNoopReturnsEmptyArray = function () {
    var a = [1, 2];
    var result = a.splice();
    return a.length === 2 && isArray(result) && result.length === 0;
  }();
  defineProperties(ArrayPrototype, {
    // Safari 5.0 bug where .splice() returns undefined
    splice: function splice(start, deleteCount) {
      if (arguments.length === 0) {
        return [];
      } else {
        return array_splice.apply(this, arguments);
      }
    }
  }, spliceNoopReturnsEmptyArray);

  var spliceWorksWithEmptyObject = function () {
    var obj = {};
    ArrayPrototype.splice.call(obj, 0, 0, 1);
    return obj.length === 1;
  }();
  defineProperties(ArrayPrototype, {
    splice: function splice(start, deleteCount) {
      if (arguments.length === 0) {
        return [];
      }
      var args = arguments;
      this.length = Math.max(toInteger(this.length), 0);
      if (arguments.length > 0 && typeof deleteCount !== 'number') {
        args = array_slice.call(arguments);
        if (args.length < 2) {
          args.push(this.length - start);
        } else {
          args[1] = toInteger(deleteCount);
        }
      }
      return array_splice.apply(this, args);
    }
  }, !spliceWorksWithEmptyObject);

  // ES5 15.4.4.12
  // http://es5.github.com/#x15.4.4.13
  // Return len+argCount.
  // [bugfix, ielt8]
  // IE < 8 bug: [].unshift(0) === undefined but should be "1"
  var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
  defineProperties(ArrayPrototype, {
    unshift: function unshift() {
      array_unshift.apply(this, arguments);
      return this.length;
    }
  }, hasUnshiftReturnValueBug);

  // ES5 15.4.3.2
  // http://es5.github.com/#x15.4.3.2
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
  defineProperties(Array, { isArray: isArray });

  // The IsCallable() check in the Array functions
  // has been replaced with a strict check on the
  // internal class of the object to trap cases where
  // the provided function was actually a regular
  // expression literal, which in V8 and
  // JavaScriptCore is a typeof "function".  Only in
  // V8 are regular expression literals permitted as
  // reduce parameters, so it is desirable in the
  // general case for the shim to match the more
  // strict and common behavior of rejecting regular
  // expressions.

  // ES5 15.4.4.18
  // http://es5.github.com/#x15.4.4.18
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

  // Check failure of by-index access of string characters (IE < 9)
  // and failure of `0 in boxedString` (Rhino)
  var boxedString = Object("a");
  var splitString = boxedString[0] !== "a" || !(0 in boxedString);

  var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
      method.call('foo', function (_, __, context) {
        if ((typeof context === 'undefined' ? 'undefined' : _typeof(context)) !== 'object') {
          properlyBoxesNonStrict = false;
        }
      });

      method.call([1], function () {
        'use strict';

        properlyBoxesStrict = typeof this === 'string';
      }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
  };

  defineProperties(ArrayPrototype, {
    forEach: function forEach(fun /*, thisp*/) {
      var object = toObject(this),
          self = splitString && isString(this) ? this.split('') : object,
          thisp = arguments[1],
          i = -1,
          length = self.length >>> 0;

      // If no callback function or if callback is not a callable function
      if (!isFunction(fun)) {
        throw new TypeError(); // TODO message
      }

      while (++i < length) {
        if (i in self) {
          // Invoke the callback function with call, passing arguments:
          // context, property value, property key, thisArg object
          // context
          fun.call(thisp, self[i], i, object);
        }
      }
    }
  }, !properlyBoxesContext(ArrayPrototype.forEach));

  // ES5 15.4.4.19
  // http://es5.github.com/#x15.4.4.19
  // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
  defineProperties(ArrayPrototype, {
    map: function map(fun /*, thisp*/) {
      var object = toObject(this),
          self = splitString && isString(this) ? this.split('') : object,
          length = self.length >>> 0,
          result = Array(length),
          thisp = arguments[1];

      // If no callback function or if callback is not a callable function
      if (!isFunction(fun)) {
        throw new TypeError(fun + " is not a function");
      }

      for (var i = 0; i < length; i++) {
        if (i in self) {
          result[i] = fun.call(thisp, self[i], i, object);
        }
      }
      return result;
    }
  }, !properlyBoxesContext(ArrayPrototype.map));

  // ES5 15.4.4.20
  // http://es5.github.com/#x15.4.4.20
  // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
  defineProperties(ArrayPrototype, {
    filter: function filter(fun /*, thisp */) {
      var object = toObject(this),
          self = splitString && isString(this) ? this.split('') : object,
          length = self.length >>> 0,
          result = [],
          value,
          thisp = arguments[1];

      // If no callback function or if callback is not a callable function
      if (!isFunction(fun)) {
        throw new TypeError(fun + " is not a function");
      }

      for (var i = 0; i < length; i++) {
        if (i in self) {
          value = self[i];
          if (fun.call(thisp, value, i, object)) {
            result.push(value);
          }
        }
      }
      return result;
    }
  }, !properlyBoxesContext(ArrayPrototype.filter));

  // ES5 15.4.4.16
  // http://es5.github.com/#x15.4.4.16
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
  defineProperties(ArrayPrototype, {
    every: function every(fun /*, thisp */) {
      var object = toObject(this),
          self = splitString && isString(this) ? this.split('') : object,
          length = self.length >>> 0,
          thisp = arguments[1];

      // If no callback function or if callback is not a callable function
      if (!isFunction(fun)) {
        throw new TypeError(fun + " is not a function");
      }

      for (var i = 0; i < length; i++) {
        if (i in self && !fun.call(thisp, self[i], i, object)) {
          return false;
        }
      }
      return true;
    }
  }, !properlyBoxesContext(ArrayPrototype.every));

  // ES5 15.4.4.17
  // http://es5.github.com/#x15.4.4.17
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
  defineProperties(ArrayPrototype, {
    some: function some(fun /*, thisp */) {
      var object = toObject(this),
          self = splitString && isString(this) ? this.split('') : object,
          length = self.length >>> 0,
          thisp = arguments[1];

      // If no callback function or if callback is not a callable function
      if (!isFunction(fun)) {
        throw new TypeError(fun + " is not a function");
      }

      for (var i = 0; i < length; i++) {
        if (i in self && fun.call(thisp, self[i], i, object)) {
          return true;
        }
      }
      return false;
    }
  }, !properlyBoxesContext(ArrayPrototype.some));

  // ES5 15.4.4.21
  // http://es5.github.com/#x15.4.4.21
  // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
  var reduceCoercesToObject = false;
  if (ArrayPrototype.reduce) {
    reduceCoercesToObject = _typeof(ArrayPrototype.reduce.call('es5', function (_, __, ___, list) {
      return list;
    })) === 'object';
  }
  defineProperties(ArrayPrototype, {
    reduce: function reduce(fun /*, initial*/) {
      var object = toObject(this),
          self = splitString && isString(this) ? this.split('') : object,
          length = self.length >>> 0;

      // If no callback function or if callback is not a callable function
      if (!isFunction(fun)) {
        throw new TypeError(fun + " is not a function");
      }

      // no value to return if no initial value and an empty array
      if (!length && arguments.length === 1) {
        throw new TypeError("reduce of empty array with no initial value");
      }

      var i = 0;
      var result;
      if (arguments.length >= 2) {
        result = arguments[1];
      } else {
        do {
          if (i in self) {
            result = self[i++];
            break;
          }

          // if array contains no values, no initial value to return
          if (++i >= length) {
            throw new TypeError("reduce of empty array with no initial value");
          }
        } while (true);
      }

      for (; i < length; i++) {
        if (i in self) {
          result = fun.call(void 0, result, self[i], i, object);
        }
      }

      return result;
    }
  }, !reduceCoercesToObject);

  // ES5 15.4.4.22
  // http://es5.github.com/#x15.4.4.22
  // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
  var reduceRightCoercesToObject = false;
  if (ArrayPrototype.reduceRight) {
    reduceRightCoercesToObject = _typeof(ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) {
      return list;
    })) === 'object';
  }
  defineProperties(ArrayPrototype, {
    reduceRight: function reduceRight(fun /*, initial*/) {
      var object = toObject(this),
          self = splitString && isString(this) ? this.split('') : object,
          length = self.length >>> 0;

      // If no callback function or if callback is not a callable function
      if (!isFunction(fun)) {
        throw new TypeError(fun + " is not a function");
      }

      // no value to return if no initial value, empty array
      if (!length && arguments.length === 1) {
        throw new TypeError("reduceRight of empty array with no initial value");
      }

      var result,
          i = length - 1;
      if (arguments.length >= 2) {
        result = arguments[1];
      } else {
        do {
          if (i in self) {
            result = self[i--];
            break;
          }

          // if array contains no values, no initial value to return
          if (--i < 0) {
            throw new TypeError("reduceRight of empty array with no initial value");
          }
        } while (true);
      }

      if (i < 0) {
        return result;
      }

      do {
        if (i in self) {
          result = fun.call(void 0, result, self[i], i, object);
        }
      } while (i--);

      return result;
    }
  }, !reduceRightCoercesToObject);

  // ES5 15.4.4.14
  // http://es5.github.com/#x15.4.4.14
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
  var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
  defineProperties(ArrayPrototype, {
    indexOf: function indexOf(sought /*, fromIndex */) {
      var self = splitString && isString(this) ? this.split('') : toObject(this),
          length = self.length >>> 0;

      if (!length) {
        return -1;
      }

      var i = 0;
      if (arguments.length > 1) {
        i = toInteger(arguments[1]);
      }

      // handle negative indices
      i = i >= 0 ? i : Math.max(0, length + i);
      for (; i < length; i++) {
        if (i in self && self[i] === sought) {
          return i;
        }
      }
      return -1;
    }
  }, hasFirefox2IndexOfBug);

  // ES5 15.4.4.15
  // http://es5.github.com/#x15.4.4.15
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
  var hasFirefox2LastIndexOfBug = Array.prototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
  defineProperties(ArrayPrototype, {
    lastIndexOf: function lastIndexOf(sought /*, fromIndex */) {
      var self = splitString && isString(this) ? this.split('') : toObject(this),
          length = self.length >>> 0;

      if (!length) {
        return -1;
      }
      var i = length - 1;
      if (arguments.length > 1) {
        i = Math.min(i, toInteger(arguments[1]));
      }
      // handle negative indices
      i = i >= 0 ? i : length - Math.abs(i);
      for (; i >= 0; i--) {
        if (i in self && sought === self[i]) {
          return i;
        }
      }
      return -1;
    }
  }, hasFirefox2LastIndexOfBug);

  //
  // Object
  // ======
  //

  // ES5 15.2.3.14
  // http://es5.github.com/#x15.2.3.14

  // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
  var hasDontEnumBug = !{ 'toString': null }.propertyIsEnumerable('toString'),
      hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype'),
      dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
      dontEnumsLength = dontEnums.length;

  defineProperties(Object, {
    keys: function keys(object) {
      var isFn = isFunction(object),
          isArgs = isArguments(object),
          isObject = object !== null && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object',
          isStr = isObject && isString(object);

      if (!isObject && !isFn && !isArgs) {
        throw new TypeError("Object.keys called on a non-object");
      }

      var theKeys = [];
      var skipProto = hasProtoEnumBug && isFn;
      if (isStr || isArgs) {
        for (var i = 0; i < object.length; ++i) {
          theKeys.push(String(i));
        }
      } else {
        for (var name in object) {
          if (!(skipProto && name === 'prototype') && owns(object, name)) {
            theKeys.push(String(name));
          }
        }
      }

      if (hasDontEnumBug) {
        var ctor = object.constructor,
            skipConstructor = ctor && ctor.prototype === object;
        for (var j = 0; j < dontEnumsLength; j++) {
          var dontEnum = dontEnums[j];
          if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
            theKeys.push(dontEnum);
          }
        }
      }
      return theKeys;
    }
  });

  var keysWorksWithArguments = Object.keys && function () {
    // Safari 5.0 bug
    return Object.keys(arguments).length === 2;
  }(1, 2);
  var originalKeys = Object.keys;
  defineProperties(Object, {
    keys: function keys(object) {
      if (isArguments(object)) {
        return originalKeys(ArrayPrototype.slice.call(object));
      } else {
        return originalKeys(object);
      }
    }
  }, !keysWorksWithArguments);

  //
  // Date
  // ====
  //

  // ES5 15.9.5.43
  // http://es5.github.com/#x15.9.5.43
  // This function returns a String value represent the instance in time
  // represented by this Date object. The format of the String is the Date Time
  // string format defined in 15.9.1.15. All fields are present in the String.
  // The time zone is always UTC, denoted by the suffix Z. If the time value of
  // this object is not a finite Number a RangeError exception is thrown.
  var negativeDate = -62198755200000;
  var negativeYearString = "-000001";
  var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;

  defineProperties(Date.prototype, {
    toISOString: function toISOString() {
      var result, length, value, year, month;
      if (!isFinite(this)) {
        throw new RangeError("Date.prototype.toISOString called on non-finite value.");
      }

      year = this.getUTCFullYear();

      month = this.getUTCMonth();
      // see https://github.com/es-shims/es5-shim/issues/111
      year += Math.floor(month / 12);
      month = (month % 12 + 12) % 12;

      // the date time string format is specified in 15.9.1.15.
      result = [month + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
      year = (year < 0 ? "-" : year > 9999 ? "+" : "") + ("00000" + Math.abs(year)).slice(0 <= year && year <= 9999 ? -4 : -6);

      length = result.length;
      while (length--) {
        value = result[length];
        // pad months, days, hours, minutes, and seconds to have two
        // digits.
        if (value < 10) {
          result[length] = "0" + value;
        }
      }
      // pad milliseconds to have three digits.
      return year + "-" + result.slice(0, 2).join("-") + "T" + result.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z";
    }
  }, hasNegativeDateBug);

  // ES5 15.9.5.44
  // http://es5.github.com/#x15.9.5.44
  // This function provides a String representation of a Date object for use by
  // JSON.stringify (15.12.3).
  var dateToJSONIsSupported = false;
  try {
    dateToJSONIsSupported = Date.prototype.toJSON && new Date(NaN).toJSON() === null && new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 && Date.prototype.toJSON.call({ // generic
      toISOString: function toISOString() {
        return true;
      }
    });
  } catch (e) {}
  if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
      // When the toJSON method is called with argument key, the following
      // steps are taken:

      // 1.  Let O be the result of calling ToObject, giving it the this
      // value as its argument.
      // 2. Let tv be toPrimitive(O, hint Number).
      var o = Object(this),
          tv = toPrimitive(o),
          toISO;
      // 3. If tv is a Number and is not finite, return null.
      if (typeof tv === "number" && !isFinite(tv)) {
        return null;
      }
      // 4. Let toISO be the result of calling the [[Get]] internal method of
      // O with argument "toISOString".
      toISO = o.toISOString;
      // 5. If IsCallable(toISO) is false, throw a TypeError exception.
      if (typeof toISO !== "function") {
        throw new TypeError("toISOString property is not callable");
      }
      // 6. Return the result of calling the [[Call]] internal method of
      //  toISO with O as the this value and an empty argument list.
      return toISO.call(o);

      // NOTE 1 The argument is ignored.

      // NOTE 2 The toJSON function is intentionally generic; it does not
      // require that its this value be a Date object. Therefore, it can be
      // transferred to other kinds of objects for use as a method. However,
      // it does require that any such object have a toISOString method. An
      // object is free to use the argument key to filter its
      // stringification.
    };
  }

  // ES5 15.9.4.2
  // http://es5.github.com/#x15.9.4.2
  // based on work shared by Daniel Friesen (dantman)
  // http://gist.github.com/303249
  var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
  var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z'));
  var doesNotParseY2KNewYear = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
  if (!Date.parse || doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    Date = function (NativeDate) {

      // Date.length === 7
      function Date(Y, M, D, h, m, s, ms) {
        var length = arguments.length;
        if (this instanceof NativeDate) {
          var date = length === 1 && String(Y) === Y ? // isString(Y)
          // We explicitly pass it through parse:
          new NativeDate(Date.parse(Y)) :
          // We have to manually make calls depending on argument
          // length here
          length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) : length >= 6 ? new NativeDate(Y, M, D, h, m, s) : length >= 5 ? new NativeDate(Y, M, D, h, m) : length >= 4 ? new NativeDate(Y, M, D, h) : length >= 3 ? new NativeDate(Y, M, D) : length >= 2 ? new NativeDate(Y, M) : length >= 1 ? new NativeDate(Y) : new NativeDate();
          // Prevent mixups with unfixed Date object
          date.constructor = Date;
          return date;
        }
        return NativeDate.apply(this, arguments);
      }

      // 15.9.1.15 Date Time String Format.
      var isoDateExpression = new RegExp("^" + "(\\d{4}|[\+\-]\\d{6})" + // four-digit year capture or sign +
      // 6-digit extended year
      "(?:-(\\d{2})" + // optional month capture
      "(?:-(\\d{2})" + // optional day capture
      "(?:" + // capture hours:minutes:seconds.milliseconds
      "T(\\d{2})" + // hours capture
      ":(\\d{2})" + // minutes capture
      "(?:" + // optional :seconds.milliseconds
      ":(\\d{2})" + // seconds capture
      "(?:(\\.\\d{1,}))?" + // milliseconds capture
      ")?" + "(" + // capture UTC offset component
      "Z|" + // UTC capture
      "(?:" + // offset specifier +/-hours:minutes
      "([-+])" + // sign capture
      "(\\d{2})" + // hours offset capture
      ":(\\d{2})" + // minutes offset capture
      ")" + ")?)?)?)?" + "$");

      var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

      function dayFromMonth(year, month) {
        var t = month > 1 ? 1 : 0;
        return months[month] + Math.floor((year - 1969 + t) / 4) - Math.floor((year - 1901 + t) / 100) + Math.floor((year - 1601 + t) / 400) + 365 * (year - 1970);
      }

      function toUTC(t) {
        return Number(new NativeDate(1970, 0, 1, 0, 0, 0, t));
      }

      // Copy any custom methods a 3rd party library may have added
      for (var key in NativeDate) {
        Date[key] = NativeDate[key];
      }

      // Copy "native" methods explicitly; they may be non-enumerable
      Date.now = NativeDate.now;
      Date.UTC = NativeDate.UTC;
      Date.prototype = NativeDate.prototype;
      Date.prototype.constructor = Date;

      // Upgrade Date.parse to handle simplified ISO 8601 strings
      Date.parse = function parse(string) {
        var match = isoDateExpression.exec(string);
        if (match) {
          // parse months, days, hours, minutes, seconds, and milliseconds
          // provide default values if necessary
          // parse the UTC offset component
          var year = Number(match[1]),
              month = Number(match[2] || 1) - 1,
              day = Number(match[3] || 1) - 1,
              hour = Number(match[4] || 0),
              minute = Number(match[5] || 0),
              second = Number(match[6] || 0),
              millisecond = Math.floor(Number(match[7] || 0) * 1000),

          // When time zone is missed, local offset should be used
          // (ES 5.1 bug)
          // see https://bugs.ecmascript.org/show_bug.cgi?id=112
          isLocalTime = Boolean(match[4] && !match[8]),
              signOffset = match[9] === "-" ? 1 : -1,
              hourOffset = Number(match[10] || 0),
              minuteOffset = Number(match[11] || 0),
              result;
          if (hour < (minute > 0 || second > 0 || millisecond > 0 ? 24 : 25) && minute < 60 && second < 60 && millisecond < 1000 && month > -1 && month < 12 && hourOffset < 24 && minuteOffset < 60 && // detect invalid offsets
          day > -1 && day < dayFromMonth(year, month + 1) - dayFromMonth(year, month)) {
            result = ((dayFromMonth(year, month) + day) * 24 + hour + hourOffset * signOffset) * 60;
            result = ((result + minute + minuteOffset * signOffset) * 60 + second) * 1000 + millisecond;
            if (isLocalTime) {
              result = toUTC(result);
            }
            if (-8.64e15 <= result && result <= 8.64e15) {
              return result;
            }
          }
          return NaN;
        }
        return NativeDate.parse.apply(this, arguments);
      };

      return Date;
    }(Date);
  }

  // ES5 15.9.4.4
  // http://es5.github.com/#x15.9.4.4
  if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }

  //
  // Number
  // ======
  //

  // ES5.1 15.7.4.5
  // http://es5.github.com/#x15.7.4.5
  var hasToFixedBugs = NumberPrototype.toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128 .toFixed(0) !== "1000000000000000128");

  var toFixedHelpers = {
    base: 1e7,
    size: 6,
    data: [0, 0, 0, 0, 0, 0],
    multiply: function multiply(n, c) {
      var i = -1;
      while (++i < toFixedHelpers.size) {
        c += n * toFixedHelpers.data[i];
        toFixedHelpers.data[i] = c % toFixedHelpers.base;
        c = Math.floor(c / toFixedHelpers.base);
      }
    },
    divide: function divide(n) {
      var i = toFixedHelpers.size,
          c = 0;
      while (--i >= 0) {
        c += toFixedHelpers.data[i];
        toFixedHelpers.data[i] = Math.floor(c / n);
        c = c % n * toFixedHelpers.base;
      }
    },
    numToString: function numToString() {
      var i = toFixedHelpers.size;
      var s = '';
      while (--i >= 0) {
        if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
          var t = String(toFixedHelpers.data[i]);
          if (s === '') {
            s = t;
          } else {
            s += '0000000'.slice(0, 7 - t.length) + t;
          }
        }
      }
      return s;
    },
    pow: function pow(x, n, acc) {
      return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    },
    log: function log(x) {
      var n = 0;
      while (x >= 4096) {
        n += 12;
        x /= 4096;
      }
      while (x >= 2) {
        n += 1;
        x /= 2;
      }
      return n;
    }
  };

  defineProperties(NumberPrototype, {
    toFixed: function toFixed(fractionDigits) {
      var f, x, s, m, e, z, j, k;

      // Test for NaN and round fractionDigits down
      f = Number(fractionDigits);
      f = f !== f ? 0 : Math.floor(f);

      if (f < 0 || f > 20) {
        throw new RangeError("Number.toFixed called with invalid number of decimals");
      }

      x = Number(this);

      // Test for NaN
      if (x !== x) {
        return "NaN";
      }

      // If it is too big or small, return the string value of the number
      if (x <= -1e21 || x >= 1e21) {
        return String(x);
      }

      s = "";

      if (x < 0) {
        s = "-";
        x = -x;
      }

      m = "0";

      if (x > 1e-21) {
        // 1e-21 < x < 1e21
        // -70 < log2(x) < 70
        e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
        z = e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1);
        z *= 0x10000000000000; // Math.pow(2, 52);
        e = 52 - e;

        // -18 < e < 122
        // x = z / 2 ^ e
        if (e > 0) {
          toFixedHelpers.multiply(0, z);
          j = f;

          while (j >= 7) {
            toFixedHelpers.multiply(1e7, 0);
            j -= 7;
          }

          toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
          j = e - 1;

          while (j >= 23) {
            toFixedHelpers.divide(1 << 23);
            j -= 23;
          }

          toFixedHelpers.divide(1 << j);
          toFixedHelpers.multiply(1, 1);
          toFixedHelpers.divide(2);
          m = toFixedHelpers.numToString();
        } else {
          toFixedHelpers.multiply(0, z);
          toFixedHelpers.multiply(1 << -e, 0);
          m = toFixedHelpers.numToString() + '0.00000000000000000000'.slice(2, 2 + f);
        }
      }

      if (f > 0) {
        k = m.length;

        if (k <= f) {
          m = s + '0.0000000000000000000'.slice(0, f - k + 2) + m;
        } else {
          m = s + m.slice(0, k - f) + '.' + m.slice(k - f);
        }
      } else {
        m = s + m;
      }

      return m;
    }
  }, hasToFixedBugs);

  //
  // String
  // ======
  //

  // ES5 15.5.4.14
  // http://es5.github.com/#x15.5.4.14

  // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
  // Many browsers do not split properly with regular expressions or they
  // do not perform the split correctly under obscure conditions.
  // See http://blog.stevenlevithan.com/archives/cross-browser-split
  // I've tested in many browsers and this seems to cover the deviant ones:
  //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
  //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
  //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
  //       [undefined, "t", undefined, "e", ...]
  //    ''.split(/.?/) should be [], not [""]
  //    '.'.split(/()()/) should be ["."], not ["", "", "."]

  var string_split = StringPrototype.split;
  if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === "t" || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) {
    (function () {
      var compliantExecNpcg = /()??/.exec("")[1] === void 0; // NPCG: nonparticipating capturing group

      StringPrototype.split = function (separator, limit) {
        var string = this;
        if (separator === void 0 && limit === 0) {
          return [];
        }

        // If `separator` is not a regex, use native split
        if (_toString.call(separator) !== "[object RegExp]") {
          return string_split.call(this, separator, limit);
        }

        var output = [],
            flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + ( // Proposed for ES6
        separator.sticky ? "y" : ""),
            // Firefox 3+
        lastLastIndex = 0,

        // Make `global` and avoid `lastIndex` issues by working with a copy
        separator2,
            match,
            lastIndex,
            lastLength;
        separator = new RegExp(separator.source, flags + "g");
        string += ""; // Type-convert
        if (!compliantExecNpcg) {
          // Doesn't need flags gy, but they don't hurt
          separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
        }
        /* Values for `limit`, per the spec:
         * If undefined: 4294967295 // Math.pow(2, 32) - 1
         * If 0, Infinity, or NaN: 0
         * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
         * If negative number: 4294967296 - Math.floor(Math.abs(limit))
         * If other: Type-convert, then use the above rules
         */
        limit = limit === void 0 ? -1 >>> 0 : // Math.pow(2, 32) - 1
        ToUint32(limit);
        while (match = separator.exec(string)) {
          // `separator.lastIndex` is not reliable cross-browser
          lastIndex = match.index + match[0].length;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            // Fix browsers whose `exec` methods don't consistently return `undefined` for
            // nonparticipating capturing groups
            if (!compliantExecNpcg && match.length > 1) {
              match[0].replace(separator2, function () {
                for (var i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === void 0) {
                    match[i] = void 0;
                  }
                }
              });
            }
            if (match.length > 1 && match.index < string.length) {
              ArrayPrototype.push.apply(output, match.slice(1));
            }
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= limit) {
              break;
            }
          }
          if (separator.lastIndex === match.index) {
            separator.lastIndex++; // Avoid an infinite loop
          }
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separator.test("")) {
            output.push("");
          }
        } else {
          output.push(string.slice(lastLastIndex));
        }
        return output.length > limit ? output.slice(0, limit) : output;
      };
    })();

    // [bugfix, chrome]
    // If separator is undefined, then the result array contains just one String,
    // which is the this value (converted to a String). If limit is not undefined,
    // then the output array is truncated so that it contains no more than limit
    // elements.
    // "0".split(undefined, 0) -> []
  } else if ("0".split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
      if (separator === void 0 && limit === 0) {
        return [];
      }
      return string_split.call(this, separator, limit);
    };
  }

  var str_replace = StringPrototype.replace;
  var replaceReportsGroupsCorrectly = function () {
    var groups = [];
    'x'.replace(/x(.)?/g, function (match, group) {
      groups.push(group);
    });
    return groups.length === 1 && typeof groups[0] === 'undefined';
  }();

  if (!replaceReportsGroupsCorrectly) {
    StringPrototype.replace = function replace(searchValue, replaceValue) {
      var isFn = isFunction(replaceValue);
      var hasCapturingGroups = isRegex(searchValue) && /\)[*?]/.test(searchValue.source);
      if (!isFn || !hasCapturingGroups) {
        return str_replace.call(this, searchValue, replaceValue);
      } else {
        var wrappedReplaceValue = function wrappedReplaceValue(match) {
          var length = arguments.length;
          var originalLastIndex = searchValue.lastIndex;
          searchValue.lastIndex = 0;
          var args = searchValue.exec(match);
          searchValue.lastIndex = originalLastIndex;
          args.push(arguments[length - 2], arguments[length - 1]);
          return replaceValue.apply(this, args);
        };
        return str_replace.call(this, searchValue, wrappedReplaceValue);
      }
    };
  }

  // ECMA-262, 3rd B.2.3
  // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
  // non-normative section suggesting uniform semantics and it should be
  // normalized across all browsers
  // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
  var string_substr = StringPrototype.substr;
  var hasNegativeSubstrBug = "".substr && "0b".substr(-1) !== "b";
  defineProperties(StringPrototype, {
    substr: function substr(start, length) {
      return string_substr.call(this, start < 0 ? (start = this.length + start) < 0 ? 0 : start : start, length);
    }
  }, hasNegativeSubstrBug);

  // ES5 15.5.4.20
  // whitespace from: http://es5.github.io/#x15.5.4.20
  var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
  var zeroWidth = '\u200B';
  var wsRegexChars = "[" + ws + "]";
  var trimBeginRegexp = new RegExp("^" + wsRegexChars + wsRegexChars + "*");
  var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + "*$");
  var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
  defineProperties(StringPrototype, {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    trim: function trim() {
      if (this === void 0 || this === null) {
        throw new TypeError("can't convert " + this + " to object");
      }
      return String(this).replace(trimBeginRegexp, "").replace(trimEndRegexp, "");
    }
  }, hasTrimWhitespaceBug);

  // ES-5 15.1.2.2
  if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
    parseInt = function (origParseInt) {
      var hexRegex = /^0[xX]/;
      return function parseIntES5(str, radix) {
        str = String(str).trim();
        if (!Number(radix)) {
          radix = hexRegex.test(str) ? 16 : 10;
        }
        return origParseInt(str, radix);
      };
    }(parseInt);
  }

  // ES5 Shams

  /*!
   * https://github.com/es-shims/es5-shim
   * @license es5-shim Copyright 2009-2014 by contributors, MIT License
   * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
   */
  (function () {

    var call = Function.prototype.call;
    var prototypeOfObject = Object.prototype;
    var owns = call.bind(prototypeOfObject.hasOwnProperty);

    // If JS engine supports accessors creating shortcuts.
    var defineGetter;
    var defineSetter;
    var lookupGetter;
    var lookupSetter;
    var supportsAccessors = owns(prototypeOfObject, "__defineGetter__");
    if (supportsAccessors) {
      defineGetter = call.bind(prototypeOfObject.__defineGetter__);
      defineSetter = call.bind(prototypeOfObject.__defineSetter__);
      lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
      lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
    }

    // ES5 15.2.3.2
    // http://es5.github.com/#x15.2.3.2
    if (!Object.getPrototypeOf) {
      // https://github.com/es-shims/es5-shim/issues#issue/2
      // http://ejohn.org/blog/objectgetprototypeof/
      // recommended by fschaefer on github
      //
      // sure, and webreflection says ^_^
      // ... this will nerever possibly return null
      // ... Opera Mini breaks here with infinite loops
      Object.getPrototypeOf = function getPrototypeOf(object) {
        var proto = object.__proto__;
        if (proto || proto === null) {
          return proto;
        } else if (object.constructor) {
          return object.constructor.prototype;
        } else {
          return prototypeOfObject;
        }
      };
    }

    //ES5 15.2.3.3
    //http://es5.github.com/#x15.2.3.3

    function doesGetOwnPropertyDescriptorWork(object) {
      try {
        object.sentinel = 0;
        return Object.getOwnPropertyDescriptor(object, "sentinel").value === 0;
      } catch (exception) {
        // returns falsy
      }
    }

    //check whether getOwnPropertyDescriptor works if it's given. Otherwise,
    //shim partially.
    if (Object.defineProperty) {
      var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
      var getOwnPropertyDescriptorWorksOnDom = typeof document === "undefined" || doesGetOwnPropertyDescriptorWork(document.createElement("div"));
      if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
        var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
      }
    }

    if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
      var ERR_NON_OBJECT = "Object.getOwnPropertyDescriptor called on a non-object: ";

      Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
        if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== "object" && typeof object !== "function" || object === null) {
          throw new TypeError(ERR_NON_OBJECT + object);
        }

        // make a valiant attempt to use the real getOwnPropertyDescriptor
        // for I8's DOM elements.
        if (getOwnPropertyDescriptorFallback) {
          try {
            return getOwnPropertyDescriptorFallback.call(Object, object, property);
          } catch (exception) {
            // try the shim if the real one doesn't work
          }
        }

        // If object does not owns property return undefined immediately.
        if (!owns(object, property)) {
          return;
        }

        // If object has a property then it's for sure both `enumerable` and
        // `configurable`.
        var descriptor = { enumerable: true, configurable: true };

        // If JS engine supports accessor properties then property may be a
        // getter or setter.
        if (supportsAccessors) {
          // Unfortunately `__lookupGetter__` will return a getter even
          // if object has own non getter property along with a same named
          // inherited getter. To avoid misbehavior we temporary remove
          // `__proto__` so that `__lookupGetter__` will return getter only
          // if it's owned by an object.
          var prototype = object.__proto__;
          var notPrototypeOfObject = object !== prototypeOfObject;
          // avoid recursion problem, breaking in Opera Mini when
          // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
          // or any other Object.prototype accessor
          if (notPrototypeOfObject) {
            object.__proto__ = prototypeOfObject;
          }

          var getter = lookupGetter(object, property);
          var setter = lookupSetter(object, property);

          if (notPrototypeOfObject) {
            // Once we have getter and setter we can put values back.
            object.__proto__ = prototype;
          }

          if (getter || setter) {
            if (getter) {
              descriptor.get = getter;
            }
            if (setter) {
              descriptor.set = setter;
            }
            // If it was accessor property we're done and return here
            // in order to avoid adding `value` to the descriptor.
            return descriptor;
          }
        }

        // If we got this far we know that object has an own property that is
        // not an accessor so we set it as a value and return descriptor.
        descriptor.value = object[property];
        descriptor.writable = true;
        return descriptor;
      };
    }

    // ES5 15.2.3.4
    // http://es5.github.com/#x15.2.3.4
    if (!Object.getOwnPropertyNames) {
      Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
        return Object.keys(object);
      };
    }

    // ES5 15.2.3.5
    // http://es5.github.com/#x15.2.3.5
    if (!Object.create) {

      // Contributed by Brandon Benvie, October, 2012
      var _createEmpty;
      var supportsProto = !({ __proto__: null } instanceof Object);
      // the following produces false positives
      // in Opera Mini => not a reliable check
      // Object.prototype.__proto__ === null
      if (supportsProto || typeof document === 'undefined') {
        _createEmpty = function createEmpty() {
          return { "__proto__": null };
        };
      } else {
        // In old IE __proto__ can't be used to manually set `null`, nor does
        // any other method exist to make an object that inherits from nothing,
        // aside from Object.prototype itself. Instead, create a new global
        // object and *steal* its Object.prototype and strip it bare. This is
        // used as the prototype to create nullary objects.
        _createEmpty = function createEmpty() {
          var iframe = document.createElement('iframe');
          var parent = document.body || document.documentElement;
          iframe.style.display = 'none';
          parent.appendChild(iframe);
          iframe.src = 'javascript:';
          var empty = iframe.contentWindow.Object.prototype;
          parent.removeChild(iframe);
          iframe = null;
          delete empty.constructor;
          delete empty.hasOwnProperty;
          delete empty.propertyIsEnumerable;
          delete empty.isPrototypeOf;
          delete empty.toLocaleString;
          delete empty.toString;
          delete empty.valueOf;
          empty.__proto__ = null;

          function Empty() {}
          Empty.prototype = empty;
          // short-circuit future calls
          _createEmpty = function createEmpty() {
            return new Empty();
          };
          return new Empty();
        };
      }

      Object.create = function create(prototype, properties) {

        var object;
        function Type() {} // An empty constructor.

        if (prototype === null) {
          object = _createEmpty();
        } else {
          if ((typeof prototype === 'undefined' ? 'undefined' : _typeof(prototype)) !== "object" && typeof prototype !== "function") {
            // In the native implementation `parent` can be `null`
            // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
            // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
            // like they are in modern browsers. Using `Object.create` on DOM elements
            // is...err...probably inappropriate, but the native version allows for it.
            throw new TypeError("Object prototype may only be an Object or null"); // same msg as Chrome
          }
          Type.prototype = prototype;
          object = new Type();
          // IE has no built-in implementation of `Object.getPrototypeOf`
          // neither `__proto__`, but this manually setting `__proto__` will
          // guarantee that `Object.getPrototypeOf` will work as expected with
          // objects created using `Object.create`
          object.__proto__ = prototype;
        }

        if (properties !== void 0) {
          Object.defineProperties(object, properties);
        }

        return object;
      };
    }

    // ES5 15.2.3.6
    // http://es5.github.com/#x15.2.3.6

    // Patch for WebKit and IE8 standard mode
    // Designed by hax <hax.github.com>
    // related issue: https://github.com/es-shims/es5-shim/issues#issue/5
    // IE8 Reference:
    //     http://msdn.microsoft.com/en-us/library/dd282900.aspx
    //     http://msdn.microsoft.com/en-us/library/dd229916.aspx
    // WebKit Bugs:
    //     https://bugs.webkit.org/show_bug.cgi?id=36423

    function doesDefinePropertyWork(object) {
      try {
        Object.defineProperty(object, "sentinel", {});
        return "sentinel" in object;
      } catch (exception) {
        // returns falsy
      }
    }

    // check whether defineProperty works if it's given. Otherwise,
    // shim partially.
    if (Object.defineProperty) {
      var definePropertyWorksOnObject = doesDefinePropertyWork({});
      var definePropertyWorksOnDom = typeof document === "undefined" || doesDefinePropertyWork(document.createElement("div"));
      if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
        var definePropertyFallback = Object.defineProperty,
            definePropertiesFallback = Object.defineProperties;
      }
    }

    if (!Object.defineProperty || definePropertyFallback) {
      var ERR_NON_OBJECT_DESCRIPTOR = "Property description must be an object: ";
      var ERR_NON_OBJECT_TARGET = "Object.defineProperty called on non-object: ";
      var ERR_ACCESSORS_NOT_SUPPORTED = "getters & setters can not be defined " + "on this javascript engine";

      Object.defineProperty = function defineProperty(object, property, descriptor) {
        if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== "object" && typeof object !== "function" || object === null) {
          throw new TypeError(ERR_NON_OBJECT_TARGET + object);
        }
        if ((typeof descriptor === 'undefined' ? 'undefined' : _typeof(descriptor)) !== "object" && typeof descriptor !== "function" || descriptor === null) {
          throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
        }
        // make a valiant attempt to use the real defineProperty
        // for I8's DOM elements.
        if (definePropertyFallback) {
          try {
            return definePropertyFallback.call(Object, object, property, descriptor);
          } catch (exception) {
            // try the shim if the real one doesn't work
          }
        }

        // If it's a data property.
        if (owns(descriptor, "value")) {
          // fail silently if "writable", "enumerable", or "configurable"
          // are requested but not supported
          /*
           // alternate approach:
           if ( // can't implement these features; allow false but not true
           !(owns(descriptor, "writable") ? descriptor.writable : true) ||
           !(owns(descriptor, "enumerable") ? descriptor.enumerable : true) ||
           !(owns(descriptor, "configurable") ? descriptor.configurable : true)
           )
           throw new RangeError(
           "This implementation of Object.defineProperty does not " +
           "support configurable, enumerable, or writable."
           );
           */

          if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
            // As accessors are supported only on engines implementing
            // `__proto__` we can safely override `__proto__` while defining
            // a property to make sure that we don't hit an inherited
            // accessor.
            var prototype = object.__proto__;
            object.__proto__ = prototypeOfObject;
            // Deleting a property anyway since getter / setter may be
            // defined on object itself.
            delete object[property];
            object[property] = descriptor.value;
            // Setting original `__proto__` back now.
            object.__proto__ = prototype;
          } else {
            object[property] = descriptor.value;
          }
        } else {
          if (!supportsAccessors) {
            throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
          }
          // If we got that far then getters and setters can be defined !!
          if (owns(descriptor, "get")) {
            defineGetter(object, property, descriptor.get);
          }
          if (owns(descriptor, "set")) {
            defineSetter(object, property, descriptor.set);
          }
        }
        return object;
      };
    }

    // ES5 15.2.3.7
    // http://es5.github.com/#x15.2.3.7
    if (!Object.defineProperties || definePropertiesFallback) {
      Object.defineProperties = function defineProperties(object, properties) {
        // make a valiant attempt to use the real defineProperties
        if (definePropertiesFallback) {
          try {
            return definePropertiesFallback.call(Object, object, properties);
          } catch (exception) {
            // try the shim if the real one doesn't work
          }
        }

        for (var property in properties) {
          if (owns(properties, property) && property !== "__proto__") {
            Object.defineProperty(object, property, properties[property]);
          }
        }
        return object;
      };
    }

    // ES5 15.2.3.8
    // http://es5.github.com/#x15.2.3.8
    if (!Object.seal) {
      Object.seal = function seal(object) {
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
      };
    }

    // ES5 15.2.3.9
    // http://es5.github.com/#x15.2.3.9
    if (!Object.freeze) {
      Object.freeze = function freeze(object) {
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
      };
    }

    // detect a Rhino bug and patch it
    try {
      Object.freeze(function () {});
    } catch (exception) {
      Object.freeze = function freeze(freezeObject) {
        return function freeze(object) {
          if (typeof object === "function") {
            return object;
          } else {
            return freezeObject(object);
          }
        };
      }(Object.freeze);
    }

    // ES5 15.2.3.10
    // http://es5.github.com/#x15.2.3.10
    if (!Object.preventExtensions) {
      Object.preventExtensions = function preventExtensions(object) {
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
      };
    }

    // ES5 15.2.3.11
    // http://es5.github.com/#x15.2.3.11
    if (!Object.isSealed) {
      Object.isSealed = function isSealed(object) {
        return false;
      };
    }

    // ES5 15.2.3.12
    // http://es5.github.com/#x15.2.3.12
    if (!Object.isFrozen) {
      Object.isFrozen = function isFrozen(object) {
        return false;
      };
    }

    // ES5 15.2.3.13
    // http://es5.github.com/#x15.2.3.13
    if (!Object.isExtensible) {
      Object.isExtensible = function isExtensible(object) {
        // 1. If Type(O) is not Object throw a TypeError exception.
        if (Object(object) !== object) {
          throw new TypeError(); // TODO message
        }
        // 2. Return the Boolean value of the [[Extensible]] internal property of O.
        var name = '';
        while (owns(object, name)) {
          name += '?';
        }
        object[name] = true;
        var returnValue = owns(object, name);
        delete object[name];
        return returnValue;
      };
    }
  })();
})();

/*
 * Console-polyfill. MIT license.
 * https://github.com/paulmillr/console-polyfill
 * Make it safe to do console.log() always.
 */
(function (global) {
  'use strict';

  global.console = global.console || {};
  var con = global.console;
  var prop, method;
  var empty = {};
  var dummy = function dummy() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) {
    if (!con[prop]) con[prop] = empty;
  }while (method = methods.pop()) {
    if (!con[method]) con[method] = dummy;
  }
})(typeof window === 'undefined' ? undefined : window);
// Using `this` for web workers while maintaining compatibility with browser
// targeted script loaders such as Browserify or Webpack where the only way to
// get to the global object is via `window`.

/*!
 * https://github.com/paulmillr/es6-shim
 * @license es6-shim Copyright 2013-2015 by Paul Miller (http://paulmillr.com)
 *   and contributors,  MIT License
 * es6-shim: v0.32.2
 * see https://github.com/paulmillr/es6-shim/blob/0.32.2/LICENSE
 * Details and documentation:
 * https://github.com/paulmillr/es6-shim/
 */
(function (root, factory) {
  factory();
})(undefined, function () {
  'use strict';

  var _apply = Function.call.bind(Function.apply);
  var _call = Function.call.bind(Function.call);

  var not = function notThunker(func) {
    return function notThunk() {
      return !_apply(func, this, arguments);
    };
  };
  var throwsError = function throwsError(func) {
    try {
      func();
      return false;
    } catch (e) {
      return true;
    }
  };
  var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
    try {
      return func();
    } catch (e) {
      return false;
    }
  };

  var isCallableWithoutNew = not(throwsError);
  var arePropertyDescriptorsSupported = function arePropertyDescriptorsSupported() {
    // if Object.defineProperty exists but throws, it's IE 8
    return !throwsError(function () {
      Object.defineProperty({}, 'x', {});
    });
  };
  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();

  var _forEach = Function.call.bind(Array.prototype.forEach);
  var _reduce = Function.call.bind(Array.prototype.reduce);
  var _filter = Function.call.bind(Array.prototype.filter);
  var _every = Function.call.bind(Array.prototype.every);

  var defineProperty = function defineProperty(object, name, value, force) {
    if (!force && name in object) {
      return;
    }
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  // Define configurable, writable and non-enumerable props
  // if they don’t exist.
  var defineProperties = function defineProperties(object, map) {
    _forEach(Object.keys(map), function (name) {
      var method = map[name];
      defineProperty(object, name, method, false);
    });
  };

  // Simple shim for Object.create on ES3 browsers
  // (unlike real shim, no attempt to support `prototype === null`)
  var create = Object.create || function (prototype, properties) {
    var Prototype = function Prototype() {};
    Prototype.prototype = prototype;
    var object = new Prototype();
    if (typeof properties !== 'undefined') {
      Object.keys(properties).forEach(function (key) {
        Value.defineByDescriptor(object, key, properties[key]);
      });
    }
    return object;
  };

  var supportsSubclassing = function supportsSubclassing(C, f) {
    if (!Object.setPrototypeOf) {
      return false; /* skip test on IE < 11 */
    }
    return valueOrFalseIfThrows(function () {
      var Sub = function Subclass(arg) {
        var o = new C(arg);
        Object.setPrototypeOf(o, Subclass.prototype);
        return o;
      };
      Object.setPrototypeOf(Sub, C);
      Sub.prototype = create(C.prototype, {
        constructor: { value: Sub }
      });
      return f(Sub);
    });
  };

  var startsWithRejectsRegex = function startsWithRejectsRegex() {
    return String.prototype.startsWith && throwsError(function () {
      /* throws if spec-compliant */
      '/a/'.startsWith(/a/);
    });
  };
  var startsWithHandlesInfinity = function () {
    return String.prototype.startsWith && 'abc'.startsWith('a', Infinity) === false;
  }();

  /*jshint evil: true */
  var getGlobal = new Function('return this;');
  /*jshint evil: false */

  var globals = getGlobal();
  var globalIsFinite = globals.isFinite;
  var hasStrictMode = function () {
    return this === null;
  }.call(null);
  var startsWithIsCompliant = startsWithRejectsRegex() && startsWithHandlesInfinity;
  var _indexOf = Function.call.bind(String.prototype.indexOf);
  var _toString = Function.call.bind(Object.prototype.toString);
  var _concat = Function.call.bind(Array.prototype.concat);
  var _strSlice = Function.call.bind(String.prototype.slice);
  var _push = Function.call.bind(Array.prototype.push);
  var _pushApply = Function.apply.bind(Array.prototype.push);
  var _shift = Function.call.bind(Array.prototype.shift);
  var _max = Math.max;
  var _min = Math.min;
  var _floor = Math.floor;
  var _abs = Math.abs;
  var _log = Math.log;
  var _sqrt = Math.sqrt;
  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
  var ArrayIterator; // make our implementation private
  var noop = function noop() {};

  var _Symbol = globals.Symbol || {};
  var symbolSpecies = _Symbol.species || '@@species';
  var defaultSpeciesGetter = function defaultSpeciesGetter() {
    return this;
  };
  var addDefaultSpecies = function addDefaultSpecies(C) {
    if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {
      Value.getter(C, symbolSpecies, defaultSpeciesGetter);
    }
  };
  var Type = {
    object: function object(x) {
      return x !== null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object';
    },
    string: function string(x) {
      return _toString(x) === '[object String]';
    },
    regex: function regex(x) {
      return _toString(x) === '[object RegExp]';
    },
    symbol: function symbol(x) {
      return typeof globals.Symbol === 'function' && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'symbol';
    }
  };

  var numberIsNaN = Number.isNaN || function isNaN(value) {
    // NaN !== NaN, but they are identical.
    // NaNs are the only non-reflexive value, i.e., if x !== x,
    // then x is NaN.
    // isNaN is broken: it converts its argument to number, so
    // isNaN('foo') => true
    return value !== value;
  };
  var numberIsFinite = Number.isFinite || function isFinite(value) {
    return typeof value === 'number' && globalIsFinite(value);
  };

  var Value = {
    getter: function getter(object, name, _getter) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        get: _getter
      });
    },
    proxy: function proxy(originalObject, key, targetObject) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
      Object.defineProperty(targetObject, key, {
        configurable: originalDescriptor.configurable,
        enumerable: originalDescriptor.enumerable,
        get: function getKey() {
          return originalObject[key];
        },
        set: function setKey(value) {
          originalObject[key] = value;
        }
      });
    },
    redefine: function redefine(object, property, newValue) {
      if (supportsDescriptors) {
        var descriptor = Object.getOwnPropertyDescriptor(object, property);
        descriptor.value = newValue;
        Object.defineProperty(object, property, descriptor);
      } else {
        object[property] = newValue;
      }
    },
    defineByDescriptor: function defineByDescriptor(object, property, descriptor) {
      if (supportsDescriptors) {
        Object.defineProperty(object, property, descriptor);
      } else if ('value' in descriptor) {
        object[property] = descriptor.value;
      }
    },
    preserveToString: function preserveToString(target, source) {
      defineProperty(target, 'toString', source.toString.bind(source), true);
    }
  };

  var overrideNative = function overrideNative(object, property, replacement) {
    var original = object[property];
    defineProperty(object, property, replacement, true);
    Value.preserveToString(object[property], original);
  };

  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
  // we're going to use an arbitrary _-prefixed name to make our shims
  // work properly with each other, even though we don't have full Iterator
  // support.  That is, `Array.from(map.keys())` will work, but we don't
  // pretend to export a "real" Iterator interface.
  var $iterator$ = Type.symbol(_Symbol.iterator) ? _Symbol.iterator : '_es6-shim iterator_';
  // Firefox ships a partial implementation using the name @@iterator.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
  // So use that name if we detect it.
  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
    $iterator$ = '@@iterator';
  }
  var addIterator = function addIterator(prototype, impl) {
    var implementation = impl || function iterator() {
      return this;
    };
    var o = {};
    o[$iterator$] = implementation;
    defineProperties(prototype, o);
    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
      // implementations are buggy when $iterator$ is a Symbol
      prototype[$iterator$] = implementation;
    }
  };

  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
  // can be replaced with require('is-arguments') if we ever use a build process instead
  var isArguments = function isArguments(value) {
    var str = _toString(value);
    var result = str === '[object Arguments]';
    if (!result) {
      result = str !== '[object Array]' && value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.length === 'number' && value.length >= 0 && _toString(value.callee) === '[object Function]';
    }
    return result;
  };

  var ES = {
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
    Call: function Call(F, V) {
      var args = arguments.length > 2 ? arguments[2] : [];
      if (!ES.IsCallable(F)) {
        throw new TypeError(F + ' is not a function');
      }
      return _apply(F, V, args);
    },

    RequireObjectCoercible: function RequireObjectCoercible(x, optMessage) {
      /* jshint eqnull:true */
      if (x == null) {
        throw new TypeError(optMessage || 'Cannot call method on ' + x);
      }
    },

    TypeIsObject: function TypeIsObject(x) {
      /* jshint eqnull:true */
      // this is expensive when it returns false; use this function
      // when you expect it to return true in the common case.
      return x != null && Object(x) === x;
    },

    ToObject: function ToObject(o, optMessage) {
      ES.RequireObjectCoercible(o, optMessage);
      return Object(o);
    },

    IsCallable: function IsCallable(x) {
      // some versions of IE say that typeof /abc/ === 'function'
      return typeof x === 'function' && _toString(x) === '[object Function]';
    },

    IsConstructor: function IsConstructor(x) {
      // We can't tell callables from constructors in ES5
      return ES.IsCallable(x);
    },

    ToInt32: function ToInt32(x) {
      return ES.ToNumber(x) >> 0;
    },

    ToUint32: function ToUint32(x) {
      return ES.ToNumber(x) >>> 0;
    },

    ToNumber: function ToNumber(value) {
      if (_toString(value) === '[object Symbol]') {
        throw new TypeError('Cannot convert a Symbol value to a number');
      }
      return +value;
    },

    ToInteger: function ToInteger(value) {
      var number = ES.ToNumber(value);
      if (numberIsNaN(number)) {
        return 0;
      }
      if (number === 0 || !numberIsFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * _floor(_abs(number));
    },

    ToLength: function ToLength(value) {
      var len = ES.ToInteger(value);
      if (len <= 0) {
        return 0;
      } // includes converting -0 to +0
      if (len > Number.MAX_SAFE_INTEGER) {
        return Number.MAX_SAFE_INTEGER;
      }
      return len;
    },

    SameValue: function SameValue(a, b) {
      if (a === b) {
        // 0 === -0, but they are not identical.
        if (a === 0) {
          return 1 / a === 1 / b;
        }
        return true;
      }
      return numberIsNaN(a) && numberIsNaN(b);
    },

    SameValueZero: function SameValueZero(a, b) {
      // same as SameValue except for SameValueZero(+0, -0) == true
      return a === b || numberIsNaN(a) && numberIsNaN(b);
    },

    IsIterable: function IsIterable(o) {
      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
    },

    GetIterator: function GetIterator(o) {
      if (isArguments(o)) {
        // special case support for `arguments`
        return new ArrayIterator(o, 'value');
      }
      var itFn = ES.GetMethod(o, $iterator$);
      if (!ES.IsCallable(itFn)) {
        // Better diagnostics if itFn is null or undefined
        throw new TypeError('value is not an iterable');
      }
      var it = _call(itFn, o);
      if (!ES.TypeIsObject(it)) {
        throw new TypeError('bad iterator');
      }
      return it;
    },

    GetMethod: function GetMethod(o, p) {
      var func = ES.ToObject(o)[p];
      if (func === void 0 || func === null) {
        return void 0;
      }
      if (!ES.IsCallable(func)) {
        throw new TypeError('Method not callable: ' + p);
      }
      return func;
    },

    IteratorComplete: function IteratorComplete(iterResult) {
      return !!iterResult.done;
    },

    IteratorClose: function IteratorClose(iterator, completionIsThrow) {
      var returnMethod = ES.GetMethod(iterator, 'return');
      if (returnMethod === void 0) {
        return;
      }
      var innerResult, innerException;
      try {
        innerResult = _call(returnMethod, iterator);
      } catch (e) {
        innerException = e;
      }
      if (completionIsThrow) {
        return;
      }
      if (innerException) {
        throw innerException;
      }
      if (!ES.TypeIsObject(innerResult)) {
        throw new TypeError("Iterator's return method returned a non-object.");
      }
    },

    IteratorNext: function IteratorNext(it) {
      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
      if (!ES.TypeIsObject(result)) {
        throw new TypeError('bad iterator');
      }
      return result;
    },

    IteratorStep: function IteratorStep(it) {
      var result = ES.IteratorNext(it);
      var done = ES.IteratorComplete(result);
      return done ? false : result;
    },

    Construct: function Construct(C, args, newTarget, isES6internal) {
      if (newTarget === void 0) {
        newTarget = C;
      }
      if (!isES6internal) {
        // Try to use Reflect.construct if available
        return Reflect.construct(C, args, newTarget);
      }
      // OK, we have to fake it.  This will only work if the
      // C.[[ConstructorKind]] == "base" -- but that's the only
      // kind we can make in ES5 code anyway.

      // OrdinaryCreateFromConstructor(newTarget, "%ObjectPrototype%")
      var proto = newTarget.prototype;
      if (!ES.TypeIsObject(proto)) {
        proto = Object.prototype;
      }
      var obj = create(proto);
      // Call the constructor.
      var result = ES.Call(C, obj, args);
      return ES.TypeIsObject(result) ? result : obj;
    },

    SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
      var C = O.constructor;
      if (C === void 0) {
        return defaultConstructor;
      }
      if (!ES.TypeIsObject(C)) {
        throw new TypeError('Bad constructor');
      }
      var S = C[symbolSpecies];
      if (S === void 0 || S === null) {
        return defaultConstructor;
      }
      if (!ES.IsConstructor(S)) {
        throw new TypeError('Bad @@species');
      }
      return S;
    },

    CreateHTML: function CreateHTML(string, tag, attribute, value) {
      var S = String(string);
      var p1 = '<' + tag;
      if (attribute !== '') {
        var V = String(value);
        var escapedV = V.replace(/"/g, '&quot;');
        p1 += ' ' + attribute + '="' + escapedV + '"';
      }
      var p2 = p1 + '>';
      var p3 = p2 + S;
      return p3 + '</' + tag + '>';
    }
  };

  var emulateES6construct = function emulateES6construct(o, defaultNewTarget, defaultProto, slots) {
    // This is an es5 approximation to es6 construct semantics.  in es6,
    // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)
    // just sets the internal variable NewTarget (in es6 syntax `new.target`)
    // to Foo and then returns Foo().

    // Many ES6 object then have constructors of the form:
    // 1. If NewTarget is undefined, throw a TypeError exception
    // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)

    // So we're going to emulate those first two steps.
    if (!ES.TypeIsObject(o)) {
      throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
    }
    var proto = defaultNewTarget.prototype;
    if (!ES.TypeIsObject(proto)) {
      proto = defaultProto;
    }
    o = create(proto);
    for (var name in slots) {
      if (_hasOwnProperty(slots, name)) {
        var value = slots[name];
        defineProperty(o, name, value, true);
      }
    }
    return o;
  };

  // Firefox 31 reports this function's length as 0
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
  if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
    var originalFromCodePoint = String.fromCodePoint;
    overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) {
      return _apply(originalFromCodePoint, this, arguments);
    });
  }

  var StringShims = {
    fromCodePoint: function fromCodePoint(codePoints) {
      var result = [];
      var next;
      for (var i = 0, length = arguments.length; i < length; i++) {
        next = Number(arguments[i]);
        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
          throw new RangeError('Invalid code point ' + next);
        }

        if (next < 0x10000) {
          _push(result, String.fromCharCode(next));
        } else {
          next -= 0x10000;
          _push(result, String.fromCharCode((next >> 10) + 0xD800));
          _push(result, String.fromCharCode(next % 0x400 + 0xDC00));
        }
      }
      return result.join('');
    },

    raw: function raw(callSite) {
      var cooked = ES.ToObject(callSite, 'bad callSite');
      var rawString = ES.ToObject(cooked.raw, 'bad raw value');
      var len = rawString.length;
      var literalsegments = ES.ToLength(len);
      if (literalsegments <= 0) {
        return '';
      }

      var stringElements = [];
      var nextIndex = 0;
      var nextKey, next, nextSeg, nextSub;
      while (nextIndex < literalsegments) {
        nextKey = String(nextIndex);
        nextSeg = String(rawString[nextKey]);
        _push(stringElements, nextSeg);
        if (nextIndex + 1 >= literalsegments) {
          break;
        }
        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
        nextSub = String(next);
        _push(stringElements, nextSub);
        nextIndex++;
      }
      return stringElements.join('');
    }
  };
  defineProperties(String, StringShims);
  if (String.raw({ raw: { 0: 'x', 1: 'y', length: 2 } }) !== 'xy') {
    // IE 11 TP has a broken String.raw implementation
    overrideNative(String, 'raw', StringShims.raw);
  }

  // Fast repeat, uses the `Exponentiation by squaring` algorithm.
  // Perf: http://jsperf.com/string-repeat2/2
  var stringRepeat = function repeat(s, times) {
    if (times < 1) {
      return '';
    }
    if (times % 2) {
      return repeat(s, times - 1) + s;
    }
    var half = repeat(s, times / 2);
    return half + half;
  };
  var stringMaxLength = Infinity;

  var StringPrototypeShims = {
    repeat: function repeat(times) {
      ES.RequireObjectCoercible(this);
      var thisStr = String(this);
      var numTimes = ES.ToInteger(times);
      if (numTimes < 0 || numTimes >= stringMaxLength) {
        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
      }
      return stringRepeat(thisStr, numTimes);
    },

    startsWith: function startsWith(searchString) {
      ES.RequireObjectCoercible(this);
      var thisStr = String(this);
      if (Type.regex(searchString)) {
        throw new TypeError('Cannot call method "startsWith" with a regex');
      }
      var searchStr = String(searchString);
      var startArg = arguments.length > 1 ? arguments[1] : void 0;
      var start = _max(ES.ToInteger(startArg), 0);
      return _strSlice(thisStr, start, start + searchStr.length) === searchStr;
    },

    endsWith: function endsWith(searchString) {
      ES.RequireObjectCoercible(this);
      var thisStr = String(this);
      if (Type.regex(searchString)) {
        throw new TypeError('Cannot call method "endsWith" with a regex');
      }
      var searchStr = String(searchString);
      var thisLen = thisStr.length;
      var posArg = arguments.length > 1 ? arguments[1] : void 0;
      var pos = typeof posArg === 'undefined' ? thisLen : ES.ToInteger(posArg);
      var end = _min(_max(pos, 0), thisLen);
      return _strSlice(thisStr, end - searchStr.length, end) === searchStr;
    },

    includes: function includes(searchString) {
      if (Type.regex(searchString)) {
        throw new TypeError('"includes" does not accept a RegExp');
      }
      var position;
      if (arguments.length > 1) {
        position = arguments[1];
      }
      // Somehow this trick makes method 100% compat with the spec.
      return _indexOf(this, searchString, position) !== -1;
    },

    codePointAt: function codePointAt(pos) {
      ES.RequireObjectCoercible(this);
      var thisStr = String(this);
      var position = ES.ToInteger(pos);
      var length = thisStr.length;
      if (position >= 0 && position < length) {
        var first = thisStr.charCodeAt(position);
        var isEnd = position + 1 === length;
        if (first < 0xD800 || first > 0xDBFF || isEnd) {
          return first;
        }
        var second = thisStr.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) {
          return first;
        }
        return (first - 0xD800) * 1024 + (second - 0xDC00) + 0x10000;
      }
    }
  };
  defineProperties(String.prototype, StringPrototypeShims);

  if ('a'.includes('a', Infinity) !== false) {
    overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
  }

  var hasStringTrimBug = '\x85'.trim().length !== 1;
  if (hasStringTrimBug) {
    delete String.prototype.trim;
    // whitespace from: http://es5.github.io/#x15.5.4.20
    // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
    var ws = ['\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003', '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028', '\u2029\uFEFF'].join('');
    var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
    defineProperties(String.prototype, {
      trim: function trim() {
        if (typeof this === 'undefined' || this === null) {
          throw new TypeError("can't convert " + this + ' to object');
        }
        return String(this).replace(trimRegexp, '');
      }
    });
  }

  // see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype-@@iterator
  var StringIterator = function StringIterator(s) {
    ES.RequireObjectCoercible(s);
    this._s = String(s);
    this._i = 0;
  };
  StringIterator.prototype.next = function () {
    var s = this._s,
        i = this._i;
    if (typeof s === 'undefined' || i >= s.length) {
      this._s = void 0;
      return { value: void 0, done: true };
    }
    var first = s.charCodeAt(i),
        second,
        len;
    if (first < 0xD800 || first > 0xDBFF || i + 1 === s.length) {
      len = 1;
    } else {
      second = s.charCodeAt(i + 1);
      len = second < 0xDC00 || second > 0xDFFF ? 1 : 2;
    }
    this._i = i + len;
    return { value: s.substr(i, len), done: false };
  };
  addIterator(StringIterator.prototype);
  addIterator(String.prototype, function () {
    return new StringIterator(this);
  });

  if (!startsWithIsCompliant) {
    // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
    overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
    overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
  }

  var ArrayShims = {
    from: function from(items) {
      var C = this;
      var mapFn = arguments.length > 1 ? arguments[1] : void 0;
      var mapping, T;
      if (mapFn === void 0) {
        mapping = false;
      } else {
        if (!ES.IsCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        T = arguments.length > 2 ? arguments[2] : void 0;
        mapping = true;
      }

      // Note that that Arrays will use ArrayIterator:
      // https://bugs.ecmascript.org/show_bug.cgi?id=2416
      var usingIterator = isArguments(items) || ES.GetMethod(items, $iterator$);

      var length, result, i;
      if (usingIterator !== void 0) {
        result = ES.IsConstructor(C) ? Object(new C()) : [];
        var iterator = ES.GetIterator(items);
        var next, nextValue;

        for (i = 0;; ++i) {
          next = ES.IteratorStep(iterator);
          if (next === false) {
            break;
          }
          nextValue = next.value;
          try {
            if (mapping) {
              nextValue = T !== undefined ? _call(mapFn, T, nextValue, i) : mapFn(nextValue, i);
            }
            result[i] = nextValue;
          } catch (e) {
            ES.IteratorClose(iterator, true);
            throw e;
          }
        }
        length = i;
      } else {
        var arrayLike = ES.ToObject(items);
        length = ES.ToLength(arrayLike.length);
        result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
        var value;
        for (i = 0; i < length; ++i) {
          value = arrayLike[i];
          if (mapping) {
            value = T !== undefined ? _call(mapFn, T, value, i) : mapFn(value, i);
          }
          result[i] = value;
        }
      }

      result.length = length;
      return result;
    },

    of: function of() {
      return _call(Array.from, this, arguments);
    }
  };
  defineProperties(Array, ArrayShims);
  addDefaultSpecies(Array);

  // Given an argument x, it will return an IteratorResult object,
  // with value set to x and done to false.
  // Given no arguments, it will return an iterator completion object.
  var iteratorResult = function iteratorResult(x) {
    return { value: x, done: arguments.length === 0 };
  };

  // Our ArrayIterator is private; see
  // https://github.com/paulmillr/es6-shim/issues/252
  ArrayIterator = function ArrayIterator(array, kind) {
    this.i = 0;
    this.array = array;
    this.kind = kind;
  };

  defineProperties(ArrayIterator.prototype, {
    next: function next() {
      var i = this.i,
          array = this.array;
      if (!(this instanceof ArrayIterator)) {
        throw new TypeError('Not an ArrayIterator');
      }
      if (typeof array !== 'undefined') {
        var len = ES.ToLength(array.length);
        for (; i < len; i++) {
          var kind = this.kind;
          var retval;
          if (kind === 'key') {
            retval = i;
          } else if (kind === 'value') {
            retval = array[i];
          } else if (kind === 'entry') {
            retval = [i, array[i]];
          }
          this.i = i + 1;
          return { value: retval, done: false };
        }
      }
      this.array = void 0;
      return { value: void 0, done: true };
    }
  });
  addIterator(ArrayIterator.prototype);

  var ObjectIterator = function ObjectIterator(object, kind) {
    this.object = object;
    // Don't generate keys yet.
    this.array = null;
    this.kind = kind;
  };

  var getAllKeys = function getAllKeys(object) {
    var keys = [];

    for (var key in object) {
      _push(keys, key);
    }

    return keys;
  };

  defineProperties(ObjectIterator.prototype, {
    next: function next() {
      var key,
          array = this.array;

      if (!(this instanceof ObjectIterator)) {
        throw new TypeError('Not an ObjectIterator');
      }

      // Keys not generated
      if (array === null) {
        array = this.array = getAllKeys(this.object);
      }

      // Find next key in the object
      while (ES.ToLength(array.length) > 0) {
        key = _shift(array);

        // The candidate key isn't defined on object.
        // Must have been deleted, or object[[Prototype]]
        // has been modified.
        if (!(key in this.object)) {
          continue;
        }

        if (this.kind === 'key') {
          return iteratorResult(key);
        } else if (this.kind === 'value') {
          return iteratorResult(this.object[key]);
        } else {
          return iteratorResult([key, this.object[key]]);
        }
      }

      return iteratorResult();
    }
  });
  addIterator(ObjectIterator.prototype);

  // note: this is positioned here because it depends on ArrayIterator
  var arrayOfSupportsSubclassing = function () {
    // Detects a bug in Webkit nightly r181886
    var Foo = function Foo(len) {
      this.length = len;
    };
    Foo.prototype = [];
    var fooArr = Array.of.apply(Foo, [1, 2]);
    return fooArr instanceof Foo && fooArr.length === 2;
  }();
  if (!arrayOfSupportsSubclassing) {
    overrideNative(Array, 'of', ArrayShims.of);
  }

  var ArrayPrototypeShims = {
    copyWithin: function copyWithin(target, start) {
      var end = arguments[2]; // copyWithin.length must be 2
      var o = ES.ToObject(this);
      var len = ES.ToLength(o.length);
      var relativeTarget = ES.ToInteger(target);
      var relativeStart = ES.ToInteger(start);
      var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
      var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
      end = typeof end === 'undefined' ? len : ES.ToInteger(end);
      var fin = end < 0 ? _max(len + end, 0) : _min(end, len);
      var count = _min(fin - from, len - to);
      var direction = 1;
      if (from < to && to < from + count) {
        direction = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count > 0) {
        if (_hasOwnProperty(o, from)) {
          o[to] = o[from];
        } else {
          delete o[from];
        }
        from += direction;
        to += direction;
        count -= 1;
      }
      return o;
    },

    fill: function fill(value) {
      var start = arguments.length > 1 ? arguments[1] : void 0;
      var end = arguments.length > 2 ? arguments[2] : void 0;
      var O = ES.ToObject(this);
      var len = ES.ToLength(O.length);
      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
      end = ES.ToInteger(typeof end === 'undefined' ? len : end);

      var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
      var relativeEnd = end < 0 ? len + end : end;

      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
        O[i] = value;
      }
      return O;
    },

    find: function find(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#find: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0, value; i < length; i++) {
        value = list[i];
        if (thisArg) {
          if (_call(predicate, thisArg, value, i, list)) {
            return value;
          }
        } else if (predicate(value, i, list)) {
          return value;
        }
      }
    },

    findIndex: function findIndex(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#findIndex: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0; i < length; i++) {
        if (thisArg) {
          if (_call(predicate, thisArg, list[i], i, list)) {
            return i;
          }
        } else if (predicate(list[i], i, list)) {
          return i;
        }
      }
      return -1;
    },

    keys: function keys() {
      return new ArrayIterator(this, 'key');
    },

    values: function values() {
      return new ArrayIterator(this, 'value');
    },

    entries: function entries() {
      return new ArrayIterator(this, 'entry');
    }
  };
  // Safari 7.1 defines Array#keys and Array#entries natively,
  // but the resulting ArrayIterator objects don't have a "next" method.
  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
    delete Array.prototype.keys;
  }
  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
    delete Array.prototype.entries;
  }

  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
    defineProperties(Array.prototype, {
      values: Array.prototype[$iterator$]
    });
    if (Type.symbol(_Symbol.unscopables)) {
      Array.prototype[_Symbol.unscopables].values = true;
    }
  }
  // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
  if (Array.prototype.values && Array.prototype.values.name !== 'values') {
    var originalArrayPrototypeValues = Array.prototype.values;
    overrideNative(Array.prototype, 'values', function values() {
      return _call(originalArrayPrototypeValues, this);
    });
    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
  }
  defineProperties(Array.prototype, ArrayPrototypeShims);

  addIterator(Array.prototype, function () {
    return this.values();
  });
  // Chrome defines keys/values/entries on Array, but doesn't give us
  // any way to identify its iterator.  So add our own shimmed field.
  if (Object.getPrototypeOf) {
    addIterator(Object.getPrototypeOf([].values()));
  }

  // note: this is positioned here because it relies on Array#entries
  var arrayFromSwallowsNegativeLengths = function () {
    // Detects a Firefox bug in v32
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
    return valueOrFalseIfThrows(function () {
      return Array.from({ length: -1 }).length === 0;
    });
  }();
  var arrayFromHandlesIterables = function () {
    // Detects a bug in Webkit nightly r181886
    var arr = Array.from([0].entries());
    return arr.length === 1 && arr[0][0] === 0 && arr[0][1] === 1;
  }();
  if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {
    overrideNative(Array, 'from', ArrayShims.from);
  }

  var toLengthsCorrectly = function toLengthsCorrectly(method, reversed) {
    var obj = { length: -1 };
    obj[reversed ? (-1 >>> 0) - 1 : 0] = true;
    return valueOrFalseIfThrows(function () {
      _call(method, obj, function () {
        // note: in nonconforming browsers, this will be called
        // -1 >>> 0 times, which is 4294967295, so the throw matters.
        throw new RangeError('should not reach here');
      }, []);
    });
  };
  if (!toLengthsCorrectly(Array.prototype.forEach)) {
    var originalForEach = Array.prototype.forEach;
    overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
      return _apply(originalForEach, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.map)) {
    var originalMap = Array.prototype.map;
    overrideNative(Array.prototype, 'map', function map(callbackFn) {
      return _apply(originalMap, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.filter)) {
    var originalFilter = Array.prototype.filter;
    overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
      return _apply(originalFilter, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.some)) {
    var originalSome = Array.prototype.some;
    overrideNative(Array.prototype, 'some', function some(callbackFn) {
      return _apply(originalSome, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.every)) {
    var originalEvery = Array.prototype.every;
    overrideNative(Array.prototype, 'every', function every(callbackFn) {
      return _apply(originalEvery, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.reduce)) {
    var originalReduce = Array.prototype.reduce;
    overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
      return _apply(originalReduce, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
    var originalReduceRight = Array.prototype.reduceRight;
    overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
      return _apply(originalReduceRight, this.length >= 0 ? this : [], arguments);
    }, true);
  }

  var maxSafeInteger = Math.pow(2, 53) - 1;
  defineProperties(Number, {
    MAX_SAFE_INTEGER: maxSafeInteger,
    MIN_SAFE_INTEGER: -maxSafeInteger,
    EPSILON: 2.220446049250313e-16,

    parseInt: globals.parseInt,
    parseFloat: globals.parseFloat,

    isFinite: numberIsFinite,

    isInteger: function isInteger(value) {
      return numberIsFinite(value) && ES.ToInteger(value) === value;
    },

    isSafeInteger: function isSafeInteger(value) {
      return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
    },

    isNaN: numberIsNaN
  });
  // Firefox 37 has a conforming Number.parseInt, but it's not === to the global parseInt (fixed in v40)
  defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);

  // Work around bugs in Array#find and Array#findIndex -- early
  // implementations skipped holes in sparse arrays. (Note that the
  // implementations of find/findIndex indirectly use shimmed
  // methods of Number, so this test has to happen down here.)
  /*jshint elision: true */
  if (![, 1].find(function (item, idx) {
    return idx === 0;
  })) {
    overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
  }
  if ([, 1].findIndex(function (item, idx) {
    return idx === 0;
  }) !== 0) {
    overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
  }
  /*jshint elision: false */

  var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
  var sliceArgs = function sliceArgs() {
    // per https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    // and https://gist.github.com/WebReflection/4327762cb87a8c634a29
    var initial = Number(this);
    var len = arguments.length;
    var desiredArgCount = len - initial;
    var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
    for (var i = initial; i < len; ++i) {
      args[i - initial] = arguments[i];
    }
    return args;
  };
  var assignTo = function assignTo(source) {
    return function assignToSource(target, key) {
      target[key] = source[key];
      return target;
    };
  };
  var assignReducer = function assignReducer(target, source) {
    var keys = Object.keys(Object(source));
    var symbols;
    if (ES.IsCallable(Object.getOwnPropertySymbols)) {
      symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
    }
    return _reduce(_concat(keys, symbols || []), assignTo(source), target);
  };

  var ObjectShims = {
    // 19.1.3.1
    assign: function assign(target, source) {
      var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
      return _reduce(_apply(sliceArgs, 1, arguments), assignReducer, to);
    },

    // Added in WebKit in https://bugs.webkit.org/show_bug.cgi?id=143865
    is: function is(a, b) {
      return ES.SameValue(a, b);
    }
  };
  var assignHasPendingExceptions = Object.assign && Object.preventExtensions && function () {
    // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
    // which is 72% slower than our shim, and Firefox 40's native implementation.
    var thrower = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(thrower, 'xy');
    } catch (e) {
      return thrower[1] === 'y';
    }
  }();
  if (assignHasPendingExceptions) {
    overrideNative(Object, 'assign', ObjectShims.assign);
  }
  defineProperties(Object, ObjectShims);

  if (supportsDescriptors) {
    var ES5ObjectShims = {
      // 19.1.3.9
      // shim from https://gist.github.com/WebReflection/5593554
      setPrototypeOf: function (Object, magic) {
        var set;

        var checkArgs = function checkArgs(O, proto) {
          if (!ES.TypeIsObject(O)) {
            throw new TypeError('cannot set prototype on a non-object');
          }
          if (!(proto === null || ES.TypeIsObject(proto))) {
            throw new TypeError('can only set prototype to an object or null' + proto);
          }
        };

        var setPrototypeOf = function setPrototypeOf(O, proto) {
          checkArgs(O, proto);
          _call(set, O, proto);
          return O;
        };

        try {
          // this works already in Firefox and Safari
          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
          _call(set, {}, null);
        } catch (e) {
          if (Object.prototype !== {}[magic]) {
            // IE < 11 cannot be shimmed
            return;
          }
          // probably Chrome or some old Mobile stock browser
          set = function set(proto) {
            this[magic] = proto;
          };
          // please note that this will **not** work
          // in those browsers that do not inherit
          // __proto__ by mistake from Object.prototype
          // in these cases we should probably throw an error
          // or at least be informed about the issue
          setPrototypeOf.polyfill = setPrototypeOf(setPrototypeOf({}, null), Object.prototype) instanceof Object;
          // setPrototypeOf.polyfill === true means it works as meant
          // setPrototypeOf.polyfill === false means it's not 100% reliable
          // setPrototypeOf.polyfill === undefined
          // or
          // setPrototypeOf.polyfill ==  null means it's not a polyfill
          // which means it works as expected
          // we can even delete Object.prototype.__proto__;
        }
        return setPrototypeOf;
      }(Object, '__proto__')
    };

    defineProperties(Object, ES5ObjectShims);
  }

  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
  // but Object.create(null) does.
  if (Object.setPrototypeOf && Object.getPrototypeOf && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null && Object.getPrototypeOf(Object.create(null)) === null) {
    (function () {
      var FAKENULL = Object.create(null);
      var gpo = Object.getPrototypeOf,
          spo = Object.setPrototypeOf;
      Object.getPrototypeOf = function (o) {
        var result = gpo(o);
        return result === FAKENULL ? null : result;
      };
      Object.setPrototypeOf = function (o, p) {
        var proto = p === null ? FAKENULL : p;
        return spo(o, proto);
      };
      Object.setPrototypeOf.polyfill = false;
    })();
  }

  var objectKeysAcceptsPrimitives = !throwsError(function () {
    Object.keys('foo');
  });
  if (!objectKeysAcceptsPrimitives) {
    var originalObjectKeys = Object.keys;
    overrideNative(Object, 'keys', function keys(value) {
      return originalObjectKeys(ES.ToObject(value));
    });
  }

  if (Object.getOwnPropertyNames) {
    var objectGOPNAcceptsPrimitives = !throwsError(function () {
      Object.getOwnPropertyNames('foo');
    });
    if (!objectGOPNAcceptsPrimitives) {
      var cachedWindowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? Object.getOwnPropertyNames(window) : [];
      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
      overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
        var val = ES.ToObject(value);
        if (_toString(val) === '[object Window]') {
          try {
            return originalObjectGetOwnPropertyNames(val);
          } catch (e) {
            // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
            return _concat([], cachedWindowNames);
          }
        }
        return originalObjectGetOwnPropertyNames(val);
      });
    }
  }
  if (Object.getOwnPropertyDescriptor) {
    var objectGOPDAcceptsPrimitives = !throwsError(function () {
      Object.getOwnPropertyDescriptor('foo', 'bar');
    });
    if (!objectGOPDAcceptsPrimitives) {
      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
      });
    }
  }
  if (Object.seal) {
    var objectSealAcceptsPrimitives = !throwsError(function () {
      Object.seal('foo');
    });
    if (!objectSealAcceptsPrimitives) {
      var originalObjectSeal = Object.seal;
      overrideNative(Object, 'seal', function seal(value) {
        if (!Type.object(value)) {
          return value;
        }
        return originalObjectSeal(value);
      });
    }
  }
  if (Object.isSealed) {
    var objectIsSealedAcceptsPrimitives = !throwsError(function () {
      Object.isSealed('foo');
    });
    if (!objectIsSealedAcceptsPrimitives) {
      var originalObjectIsSealed = Object.isSealed;
      overrideNative(Object, 'isSealed', function isSealed(value) {
        if (!Type.object(value)) {
          return true;
        }
        return originalObjectIsSealed(value);
      });
    }
  }
  if (Object.freeze) {
    var objectFreezeAcceptsPrimitives = !throwsError(function () {
      Object.freeze('foo');
    });
    if (!objectFreezeAcceptsPrimitives) {
      var originalObjectFreeze = Object.freeze;
      overrideNative(Object, 'freeze', function freeze(value) {
        if (!Type.object(value)) {
          return value;
        }
        return originalObjectFreeze(value);
      });
    }
  }
  if (Object.isFrozen) {
    var objectIsFrozenAcceptsPrimitives = !throwsError(function () {
      Object.isFrozen('foo');
    });
    if (!objectIsFrozenAcceptsPrimitives) {
      var originalObjectIsFrozen = Object.isFrozen;
      overrideNative(Object, 'isFrozen', function isFrozen(value) {
        if (!Type.object(value)) {
          return true;
        }
        return originalObjectIsFrozen(value);
      });
    }
  }
  if (Object.preventExtensions) {
    var objectPreventExtensionsAcceptsPrimitives = !throwsError(function () {
      Object.preventExtensions('foo');
    });
    if (!objectPreventExtensionsAcceptsPrimitives) {
      var originalObjectPreventExtensions = Object.preventExtensions;
      overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
        if (!Type.object(value)) {
          return value;
        }
        return originalObjectPreventExtensions(value);
      });
    }
  }
  if (Object.isExtensible) {
    var objectIsExtensibleAcceptsPrimitives = !throwsError(function () {
      Object.isExtensible('foo');
    });
    if (!objectIsExtensibleAcceptsPrimitives) {
      var originalObjectIsExtensible = Object.isExtensible;
      overrideNative(Object, 'isExtensible', function isExtensible(value) {
        if (!Type.object(value)) {
          return false;
        }
        return originalObjectIsExtensible(value);
      });
    }
  }
  if (Object.getPrototypeOf) {
    var objectGetProtoAcceptsPrimitives = !throwsError(function () {
      Object.getPrototypeOf('foo');
    });
    if (!objectGetProtoAcceptsPrimitives) {
      var originalGetProto = Object.getPrototypeOf;
      overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
        return originalGetProto(ES.ToObject(value));
      });
    }
  }

  var hasFlags = supportsDescriptors && function () {
    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
    return desc && ES.IsCallable(desc.get);
  }();
  if (supportsDescriptors && !hasFlags) {
    var regExpFlagsGetter = function flags() {
      if (!ES.TypeIsObject(this)) {
        throw new TypeError('Method called on incompatible type: must be an object.');
      }
      var result = '';
      if (this.global) {
        result += 'g';
      }
      if (this.ignoreCase) {
        result += 'i';
      }
      if (this.multiline) {
        result += 'm';
      }
      if (this.unicode) {
        result += 'u';
      }
      if (this.sticky) {
        result += 'y';
      }
      return result;
    };

    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
  }

  var regExpSupportsFlagsWithRegex = valueOrFalseIfThrows(function () {
    return String(new RegExp(/a/g, 'i')) === '/a/i';
  });

  if (!regExpSupportsFlagsWithRegex && supportsDescriptors) {
    var OrigRegExp = RegExp;
    var RegExpShim = function RegExp(pattern, flags) {
      var calledWithNew = this instanceof RegExp;
      if (!calledWithNew && (Type.regex(pattern) || pattern && pattern.constructor === RegExp)) {
        return pattern;
      }
      if (Type.regex(pattern) && Type.string(flags)) {
        return new RegExp(pattern.source, flags);
      }
      return new OrigRegExp(pattern, flags);
    };
    Value.preserveToString(RegExpShim, OrigRegExp);
    if (Object.setPrototypeOf) {
      // sets up proper prototype chain where possible
      Object.setPrototypeOf(OrigRegExp, RegExpShim);
    }
    _forEach(Object.getOwnPropertyNames(OrigRegExp), function (key) {
      if (key === '$input') {
        return;
      } // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
      if (key in noop) {
        return;
      }
      Value.proxy(OrigRegExp, key, RegExpShim);
    });
    RegExpShim.prototype = OrigRegExp.prototype;
    Value.redefine(OrigRegExp.prototype, 'constructor', RegExpShim);
    /*globals RegExp: true */
    RegExp = RegExpShim;
    Value.redefine(globals, 'RegExp', RegExpShim);
    /*globals RegExp: false */
  }

  if (supportsDescriptors) {
    var regexGlobals = {
      input: '$_',
      lastMatch: '$&',
      lastParen: '$+',
      leftContext: '$`',
      rightContext: '$\''
    };
    _forEach(Object.keys(regexGlobals), function (prop) {
      if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {
        Value.getter(RegExp, regexGlobals[prop], function get() {
          return RegExp[prop];
        });
      }
    });
  }
  addDefaultSpecies(RegExp);

  var inverseEpsilon = 1 / Number.EPSILON;
  var roundTiesToEven = function roundTiesToEven(n) {
    // Even though this reduces down to `return n`, it takes advantage of built-in rounding.
    return n + inverseEpsilon - inverseEpsilon;
  };
  var BINARY_32_EPSILON = Math.pow(2, -23);
  var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
  var BINARY_32_MIN_VALUE = Math.pow(2, -126);
  var numberCLZ = Number.prototype.clz;
  delete Number.prototype.clz; // Safari 8 has Number#clz

  var MathShims = {
    acosh: function acosh(value) {
      var x = Number(value);
      if (Number.isNaN(x) || value < 1) {
        return NaN;
      }
      if (x === 1) {
        return 0;
      }
      if (x === Infinity) {
        return x;
      }
      return _log(x / Math.E + _sqrt(x + 1) * _sqrt(x - 1) / Math.E) + 1;
    },

    asinh: function asinh(value) {
      var x = Number(value);
      if (x === 0 || !globalIsFinite(x)) {
        return x;
      }
      return x < 0 ? -Math.asinh(-x) : _log(x + _sqrt(x * x + 1));
    },

    atanh: function atanh(value) {
      var x = Number(value);
      if (Number.isNaN(x) || x < -1 || x > 1) {
        return NaN;
      }
      if (x === -1) {
        return -Infinity;
      }
      if (x === 1) {
        return Infinity;
      }
      if (x === 0) {
        return x;
      }
      return 0.5 * _log((1 + x) / (1 - x));
    },

    cbrt: function cbrt(value) {
      var x = Number(value);
      if (x === 0) {
        return x;
      }
      var negate = x < 0,
          result;
      if (negate) {
        x = -x;
      }
      if (x === Infinity) {
        result = Infinity;
      } else {
        result = Math.exp(_log(x) / 3);
        // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
        result = (x / (result * result) + 2 * result) / 3;
      }
      return negate ? -result : result;
    },

    clz32: function clz32(value) {
      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
      var x = Number(value);
      var number = ES.ToUint32(x);
      if (number === 0) {
        return 32;
      }
      return numberCLZ ? _call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * Math.LOG2E);
    },

    cosh: function cosh(value) {
      var x = Number(value);
      if (x === 0) {
        return 1;
      } // +0 or -0
      if (Number.isNaN(x)) {
        return NaN;
      }
      if (!globalIsFinite(x)) {
        return Infinity;
      }
      if (x < 0) {
        x = -x;
      }
      if (x > 21) {
        return Math.exp(x) / 2;
      }
      return (Math.exp(x) + Math.exp(-x)) / 2;
    },

    expm1: function expm1(value) {
      var x = Number(value);
      if (x === -Infinity) {
        return -1;
      }
      if (!globalIsFinite(x) || x === 0) {
        return x;
      }
      if (_abs(x) > 0.5) {
        return Math.exp(x) - 1;
      }
      // A more precise approximation using Taylor series expansion
      // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
      var t = x;
      var sum = 0;
      var n = 1;
      while (sum + t !== sum) {
        sum += t;
        n += 1;
        t *= x / n;
      }
      return sum;
    },

    hypot: function hypot(x, y) {
      var result = 0;
      var largest = 0;
      for (var i = 0; i < arguments.length; ++i) {
        var value = _abs(Number(arguments[i]));
        if (largest < value) {
          result *= largest / value * (largest / value);
          result += 1;
          largest = value;
        } else {
          result += value > 0 ? value / largest * (value / largest) : value;
        }
      }
      return largest === Infinity ? Infinity : largest * _sqrt(result);
    },

    log2: function log2(value) {
      return _log(value) * Math.LOG2E;
    },

    log10: function log10(value) {
      return _log(value) * Math.LOG10E;
    },

    log1p: function log1p(value) {
      var x = Number(value);
      if (x < -1 || Number.isNaN(x)) {
        return NaN;
      }
      if (x === 0 || x === Infinity) {
        return x;
      }
      if (x === -1) {
        return -Infinity;
      }

      return 1 + x - 1 === 0 ? x : x * (_log(1 + x) / (1 + x - 1));
    },

    sign: function sign(value) {
      var number = Number(value);
      if (number === 0) {
        return number;
      }
      if (Number.isNaN(number)) {
        return number;
      }
      return number < 0 ? -1 : 1;
    },

    sinh: function sinh(value) {
      var x = Number(value);
      if (!globalIsFinite(x) || x === 0) {
        return x;
      }

      if (_abs(x) < 1) {
        return (Math.expm1(x) - Math.expm1(-x)) / 2;
      }
      return (Math.exp(x - 1) - Math.exp(-x - 1)) * Math.E / 2;
    },

    tanh: function tanh(value) {
      var x = Number(value);
      if (Number.isNaN(x) || x === 0) {
        return x;
      }
      if (x === Infinity) {
        return 1;
      }
      if (x === -Infinity) {
        return -1;
      }
      var a = Math.expm1(x);
      var b = Math.expm1(-x);
      if (a === Infinity) {
        return 1;
      }
      if (b === Infinity) {
        return -1;
      }
      return (a - b) / (Math.exp(x) + Math.exp(-x));
    },

    trunc: function trunc(value) {
      var x = Number(value);
      return x < 0 ? -_floor(-x) : _floor(x);
    },

    imul: function imul(x, y) {
      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
      var a = ES.ToUint32(x);
      var b = ES.ToUint32(y);
      var ah = a >>> 16 & 0xffff;
      var al = a & 0xffff;
      var bh = b >>> 16 & 0xffff;
      var bl = b & 0xffff;
      // the shift by 0 fixes the sign on the high part
      // the final |0 converts the unsigned value into a signed value
      return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
    },

    fround: function fround(x) {
      var v = Number(x);
      if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {
        return v;
      }
      var sign = Math.sign(v);
      var abs = _abs(v);
      if (abs < BINARY_32_MIN_VALUE) {
        return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
      }
      // Veltkamp's splitting (?)
      var a = (1 + BINARY_32_EPSILON / Number.EPSILON) * abs;
      var result = a - (a - abs);
      if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {
        return sign * Infinity;
      }
      return sign * result;
    }
  };
  defineProperties(Math, MathShims);
  // IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0
  defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);
  // IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)
  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
  // Chrome 40 has an imprecise Math.tanh with very small numbers
  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
  // Chrome 40 loses Math.acosh precision with high numbers
  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
  // Firefox 38 on Windows
  defineProperty(Math, 'cbrt', MathShims.cbrt, Math.abs(1 - Math.cbrt(1e-300) / 1e-100) / Number.EPSILON > 8);
  // node 0.11 has an imprecise Math.sinh with very small numbers
  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
  // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
  var expm1OfTen = Math.expm1(10);
  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);

  var origMathRound = Math.round;
  // breaks in e.g. Safari 8, Internet Explorer 11, Opera 12
  var roundHandlesBoundaryConditions = Math.round(0.5 - Number.EPSILON / 4) === 0 && Math.round(-0.5 + Number.EPSILON / 3.99) === 1;

  // When engines use Math.floor(x + 0.5) internally, Math.round can be buggy for large integers.
  // This behavior should be governed by "round to nearest, ties to even mode"
  // see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-number-type
  // These are the boundary cases where it breaks.
  var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
  var largestPositiveNumberWhereRoundBreaks = 2 * inverseEpsilon - 1;
  var roundDoesNotIncreaseIntegers = [smallestPositiveNumberWhereRoundBreaks, largestPositiveNumberWhereRoundBreaks].every(function (num) {
    return Math.round(num) === num;
  });
  defineProperty(Math, 'round', function round(x) {
    var floor = _floor(x);
    var ceil = floor === -1 ? -0 : floor + 1;
    return x - floor < 0.5 ? floor : ceil;
  }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
  Value.preserveToString(Math.round, origMathRound);

  var origImul = Math.imul;
  if (Math.imul(0xffffffff, 5) !== -5) {
    // Safari 6.1, at least, reports "0" for this value
    Math.imul = MathShims.imul;
    Value.preserveToString(Math.imul, origImul);
  }
  if (Math.imul.length !== 2) {
    // Safari 8.0.4 has a length of 1
    // fixed in https://bugs.webkit.org/show_bug.cgi?id=143658
    overrideNative(Math, 'imul', function imul(x, y) {
      return _apply(origImul, Math, arguments);
    });
  }

  // Promises
  // Simplest possible implementation; use a 3rd-party library if you
  // want the best possible speed and/or long stack traces.
  var PromiseShim = function () {

    ES.IsPromise = function (promise) {
      if (!ES.TypeIsObject(promise)) {
        return false;
      }
      if (typeof promise._promise === 'undefined') {
        return false; // uninitialized, or missing our hidden field.
      }
      return true;
    };

    // "PromiseCapability" in the spec is what most promise implementations
    // call a "deferred".
    var PromiseCapability = function PromiseCapability(C) {
      if (!ES.IsConstructor(C)) {
        throw new TypeError('Bad promise constructor');
      }
      var capability = this;
      var resolver = function resolver(resolve, reject) {
        if (capability.resolve !== void 0 || capability.reject !== void 0) {
          throw new TypeError('Bad Promise implementation!');
        }
        capability.resolve = resolve;
        capability.reject = reject;
      };
      capability.promise = new C(resolver);
      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
        throw new TypeError('Bad promise constructor');
      }
    };

    // find an appropriate setImmediate-alike
    var setTimeout = globals.setTimeout;
    var makeZeroTimeout;
    /*global window */
    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
      makeZeroTimeout = function makeZeroTimeout() {
        // from http://dbaron.org/log/20100309-faster-timeouts
        var timeouts = [];
        var messageName = 'zero-timeout-message';
        var setZeroTimeout = function setZeroTimeout(fn) {
          _push(timeouts, fn);
          window.postMessage(messageName, '*');
        };
        var handleMessage = function handleMessage(event) {
          if (event.source === window && event.data === messageName) {
            event.stopPropagation();
            if (timeouts.length === 0) {
              return;
            }
            var fn = _shift(timeouts);
            fn();
          }
        };
        window.addEventListener('message', handleMessage, true);
        return setZeroTimeout;
      };
    }
    var makePromiseAsap = function makePromiseAsap() {
      // An efficient task-scheduler based on a pre-existing Promise
      // implementation, which we can use even if we override the
      // global Promise below (in order to workaround bugs)
      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
      var P = globals.Promise;
      return P && P.resolve && function (task) {
        return P.resolve().then(task);
      };
    };
    /*global process */
    var enqueue = ES.IsCallable(globals.setImmediate) ? globals.setImmediate.bind(globals) : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && process.nextTick ? process.nextTick : makePromiseAsap() || (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() : function (task) {
      setTimeout(task, 0);
    }); // fallback

    // Constants for Promise implementation
    var PROMISE_IDENTITY = 1;
    var PROMISE_THROWER = 2;
    var PROMISE_PENDING = 3;
    var PROMISE_FULFILLED = 4;
    var PROMISE_REJECTED = 5;

    var promiseReactionJob = function promiseReactionJob(reaction, argument) {
      var promiseCapability = reaction.capabilities;
      var handler = reaction.handler;
      var handlerResult,
          handlerException = false,
          f;
      if (handler === PROMISE_IDENTITY) {
        handlerResult = argument;
      } else if (handler === PROMISE_THROWER) {
        handlerResult = argument;
        handlerException = true;
      } else {
        try {
          handlerResult = handler(argument);
        } catch (e) {
          handlerResult = e;
          handlerException = true;
        }
      }
      f = handlerException ? promiseCapability.reject : promiseCapability.resolve;
      f(handlerResult);
    };

    var triggerPromiseReactions = function triggerPromiseReactions(reactions, argument) {
      _forEach(reactions, function (reaction) {
        enqueue(function () {
          promiseReactionJob(reaction, argument);
        });
      });
    };

    var fulfillPromise = function fulfillPromise(promise, value) {
      var _promise = promise._promise;
      var reactions = _promise.fulfillReactions;
      _promise.result = value;
      _promise.fulfillReactions = void 0;
      _promise.rejectReactions = void 0;
      _promise.state = PROMISE_FULFILLED;
      triggerPromiseReactions(reactions, value);
    };

    var rejectPromise = function rejectPromise(promise, reason) {
      var _promise = promise._promise;
      var reactions = _promise.rejectReactions;
      _promise.result = reason;
      _promise.fulfillReactions = void 0;
      _promise.rejectReactions = void 0;
      _promise.state = PROMISE_REJECTED;
      triggerPromiseReactions(reactions, reason);
    };

    var createResolvingFunctions = function createResolvingFunctions(promise) {
      var alreadyResolved = false;
      var resolve = function resolve(resolution) {
        var then;
        if (alreadyResolved) {
          return;
        }
        alreadyResolved = true;
        if (resolution === promise) {
          return rejectPromise(promise, new TypeError('Self resolution'));
        }
        if (!ES.TypeIsObject(resolution)) {
          return fulfillPromise(promise, resolution);
        }
        try {
          then = resolution.then;
        } catch (e) {
          return rejectPromise(promise, e);
        }
        if (!ES.IsCallable(then)) {
          return fulfillPromise(promise, resolution);
        }
        enqueue(function () {
          promiseResolveThenableJob(promise, resolution, then);
        });
      };
      var reject = function reject(reason) {
        if (alreadyResolved) {
          return;
        }
        alreadyResolved = true;
        return rejectPromise(promise, reason);
      };
      return { resolve: resolve, reject: reject };
    };

    var promiseResolveThenableJob = function promiseResolveThenableJob(promise, thenable, then) {
      var resolvingFunctions = createResolvingFunctions(promise);
      var resolve = resolvingFunctions.resolve;
      var reject = resolvingFunctions.reject;
      try {
        _call(then, thenable, resolve, reject);
      } catch (e) {
        reject(e);
      }
    };

    // This is a common step in many Promise methods
    var getPromiseSpecies = function getPromiseSpecies(C) {
      if (!ES.TypeIsObject(C)) {
        throw new TypeError('Promise is not object');
      }
      var S = C[symbolSpecies];
      if (S !== void 0 && S !== null) {
        return S;
      }
      return C;
    };

    var Promise = function Promise(resolver) {
      if (!(this instanceof Promise)) {
        throw new TypeError('Constructor Promise requires "new"');
      }
      if (this && this._promise) {
        throw new TypeError('Bad construction');
      }
      // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
      if (!ES.IsCallable(resolver)) {
        throw new TypeError('not a valid resolver');
      }
      var promise = emulateES6construct(this, Promise, Promise$prototype, {
        _promise: {
          result: void 0,
          state: PROMISE_PENDING,
          fulfillReactions: [],
          rejectReactions: []
        }
      });
      var resolvingFunctions = createResolvingFunctions(promise);
      var reject = resolvingFunctions.reject;
      try {
        resolver(resolvingFunctions.resolve, reject);
      } catch (e) {
        reject(e);
      }
      return promise;
    };
    var Promise$prototype = Promise.prototype;

    var _promiseAllResolver = function _promiseAllResolver(index, values, capability, remaining) {
      var alreadyCalled = false;
      return function (x) {
        if (alreadyCalled) {
          return;
        }
        alreadyCalled = true;
        values[index] = x;
        if (--remaining.count === 0) {
          var resolve = capability.resolve;
          resolve(values); // call w/ this===undefined
        }
      };
    };

    var performPromiseAll = function performPromiseAll(iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator;
      var values = [],
          remaining = { count: 1 },
          next,
          nextValue;
      for (var index = 0;; index++) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        values[index] = void 0;
        var nextPromise = C.resolve(nextValue);
        var resolveElement = _promiseAllResolver(index, values, resultCapability, remaining);
        remaining.count++;
        nextPromise.then(resolveElement, resultCapability.reject);
      }
      if (--remaining.count === 0) {
        var resolve = resultCapability.resolve;
        resolve(values); // call w/ this===undefined
      }
      return resultCapability.promise;
    };

    var performPromiseRace = function performPromiseRace(iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator,
          next,
          nextValue,
          nextPromise;
      while (true) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            // NOTE: If iterable has no items, resulting promise will never
            // resolve; see:
            // https://github.com/domenic/promises-unwrapping/issues/75
            // https://bugs.ecmascript.org/show_bug.cgi?id=2515
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        nextPromise = C.resolve(nextValue);
        nextPromise.then(resultCapability.resolve, resultCapability.reject);
      }
      return resultCapability.promise;
    };

    defineProperties(Promise, {
      all: function all(iterable) {
        var C = getPromiseSpecies(this);
        var capability = new PromiseCapability(C);
        var iterator, iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = { iterator: iterator, done: false };
          return performPromiseAll(iteratorRecord, C, capability);
        } catch (e) {
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              e = ee;
            }
          }
          var reject = capability.reject;
          reject(e);
          return capability.promise;
        }
      },

      race: function race(iterable) {
        var C = getPromiseSpecies(this);
        var capability = new PromiseCapability(C);
        var iterator, iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = { iterator: iterator, done: false };
          return performPromiseRace(iteratorRecord, C, capability);
        } catch (e) {
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              e = ee;
            }
          }
          var reject = capability.reject;
          reject(e);
          return capability.promise;
        }
      },

      reject: function reject(reason) {
        var C = this;
        var capability = new PromiseCapability(C);
        var rejectFunc = capability.reject;
        rejectFunc(reason); // call with this===undefined
        return capability.promise;
      },

      resolve: function resolve(v) {
        // See https://esdiscuss.org/topic/fixing-promise-resolve for spec
        var C = this;
        if (ES.IsPromise(v)) {
          var constructor = v.constructor;
          if (constructor === C) {
            return v;
          }
        }
        var capability = new PromiseCapability(C);
        var resolveFunc = capability.resolve;
        resolveFunc(v); // call with this===undefined
        return capability.promise;
      }
    });

    defineProperties(Promise$prototype, {
      'catch': function _catch(onRejected) {
        return this.then(void 0, onRejected);
      },

      then: function then(onFulfilled, onRejected) {
        var promise = this;
        if (!ES.IsPromise(promise)) {
          throw new TypeError('not a promise');
        }
        var C = ES.SpeciesConstructor(promise, Promise);
        var resultCapability = new PromiseCapability(C);
        // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)
        if (!ES.IsCallable(onFulfilled)) {
          onFulfilled = PROMISE_IDENTITY;
        }
        if (!ES.IsCallable(onRejected)) {
          onRejected = PROMISE_THROWER;
        }
        var fulfillReaction = { capabilities: resultCapability, handler: onFulfilled };
        var rejectReaction = { capabilities: resultCapability, handler: onRejected };
        var _promise = promise._promise,
            value;
        switch (_promise.state) {
          case PROMISE_PENDING:
            _push(_promise.fulfillReactions, fulfillReaction);
            _push(_promise.rejectReactions, rejectReaction);
            break;
          case PROMISE_FULFILLED:
            value = _promise.result;
            enqueue(function () {
              promiseReactionJob(fulfillReaction, value);
            });
            break;
          case PROMISE_REJECTED:
            value = _promise.result;
            enqueue(function () {
              promiseReactionJob(rejectReaction, value);
            });
            break;
          default:
            throw new TypeError('unexpected');
        }
        return resultCapability.promise;
      }
    });

    return Promise;
  }();

  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
  if (globals.Promise) {
    delete globals.Promise.accept;
    delete globals.Promise.defer;
    delete globals.Promise.prototype.chain;
  }

  // export the Promise constructor.
  defineProperties(globals, { Promise: PromiseShim });
  // In Chrome 33 (and thereabouts) Promise is defined, but the
  // implementation is buggy in a number of ways.  Let's check subclassing
  // support to see if we have a buggy implementation.
  var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
    return S.resolve(42).then(function () {}) instanceof S;
  });
  var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function () {
    globals.Promise.reject(42).then(null, 5).then(null, noop);
  });
  var promiseRequiresObjectContext = throwsError(function () {
    globals.Promise.call(3, noop);
  });
  // Promise.resolve() was errata'ed late in the ES6 process.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742
  //      https://code.google.com/p/v8/issues/detail?id=4161
  // It serves as a proxy for a number of other bugs in early Promise
  // implementations.
  var promiseResolveBroken = function (Promise) {
    var p = Promise.resolve(5);
    p.constructor = {};
    var p2 = Promise.resolve(p);
    return p === p2; // This *should* be false!
  }(globals.Promise);
  if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks || !promiseRequiresObjectContext || promiseResolveBroken) {
    /*globals Promise: true */
    Promise = PromiseShim;
    /*globals Promise: false */
    overrideNative(globals, 'Promise', PromiseShim);
  }
  addDefaultSpecies(Promise);

  // Map and Set require a true ES5 environment
  // Their fast path also requires that the environment preserve
  // property insertion order, which is not guaranteed by the spec.
  var testOrder = function testOrder(a) {
    var b = Object.keys(_reduce(a, function (o, k) {
      o[k] = true;
      return o;
    }, {}));
    return a.join(':') === b.join(':');
  };
  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
  // some engines (eg, Chrome) only preserve insertion order for string keys
  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);

  if (supportsDescriptors) {

    var fastkey = function fastkey(key) {
      if (!preservesInsertionOrder) {
        return null;
      }
      var type = typeof key === 'undefined' ? 'undefined' : _typeof(key);
      if (type === 'undefined' || key === null) {
        return '^' + String(key);
      } else if (type === 'string') {
        return '$' + key;
      } else if (type === 'number') {
        // note that -0 will get coerced to "0" when used as a property key
        if (!preservesNumericInsertionOrder) {
          return 'n' + key;
        }
        return key;
      } else if (type === 'boolean') {
        return 'b' + key;
      }
      return null;
    };

    var emptyObject = function emptyObject() {
      // accomodate some older not-quite-ES5 browsers
      return Object.create ? Object.create(null) : {};
    };

    var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
      if (Array.isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function (entry) {
          map.set(entry[0], entry[1]);
        });
      } else if (iterable instanceof MapConstructor) {
        _call(MapConstructor.prototype.forEach, iterable, function (value, key) {
          map.set(key, value);
        });
      } else {
        var iter, adder;
        if (iterable !== null && typeof iterable !== 'undefined') {
          adder = map.set;
          if (!ES.IsCallable(adder)) {
            throw new TypeError('bad map');
          }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) {
              break;
            }
            var nextItem = next.value;
            try {
              if (!ES.TypeIsObject(nextItem)) {
                throw new TypeError('expected iterable of pairs');
              }
              _call(adder, map, nextItem[0], nextItem[1]);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };
    var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
      if (Array.isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function (value) {
          set.add(value);
        });
      } else if (iterable instanceof SetConstructor) {
        _call(SetConstructor.prototype.forEach, iterable, function (value) {
          set.add(value);
        });
      } else {
        var iter, adder;
        if (iterable !== null && typeof iterable !== 'undefined') {
          adder = set.add;
          if (!ES.IsCallable(adder)) {
            throw new TypeError('bad set');
          }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) {
              break;
            }
            var nextValue = next.value;
            try {
              _call(adder, set, nextValue);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };

    var collectionShims = {
      Map: function () {

        var empty = {};

        var MapEntry = function MapEntry(key, value) {
          this.key = key;
          this.value = value;
          this.next = null;
          this.prev = null;
        };

        MapEntry.prototype.isRemoved = function isRemoved() {
          return this.key === empty;
        };

        var isMap = function isMap(map) {
          return !!map._es6map;
        };

        var requireMapSlot = function requireMapSlot(map, method) {
          if (!ES.TypeIsObject(map) || !isMap(map)) {
            throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + String(map));
          }
        };

        var MapIterator = function MapIterator(map, kind) {
          requireMapSlot(map, '[[MapIterator]]');
          this.head = map._head;
          this.i = this.head;
          this.kind = kind;
        };

        MapIterator.prototype = {
          next: function next() {
            var i = this.i,
                kind = this.kind,
                head = this.head,
                result;
            if (typeof this.i === 'undefined') {
              return { value: void 0, done: true };
            }
            while (i.isRemoved() && i !== head) {
              // back up off of removed entries
              i = i.prev;
            }
            // advance to next unreturned element.
            while (i.next !== head) {
              i = i.next;
              if (!i.isRemoved()) {
                if (kind === 'key') {
                  result = i.key;
                } else if (kind === 'value') {
                  result = i.value;
                } else {
                  result = [i.key, i.value];
                }
                this.i = i;
                return { value: result, done: false };
              }
            }
            // once the iterator is done, it is done forever.
            this.i = void 0;
            return { value: void 0, done: true };
          }
        };
        addIterator(MapIterator.prototype);

        var MapShim = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          if (this && this._es6map) {
            throw new TypeError('Bad construction');
          }
          var map = emulateES6construct(this, Map, Map$prototype, {
            _es6map: true,
            _head: null,
            _storage: emptyObject(),
            _size: 0
          });

          var head = new MapEntry(null, null);
          // circular doubly-linked list.
          head.next = head.prev = head;
          map._head = head;

          // Optionally initialize map from iterable
          if (arguments.length > 0) {
            addIterableToMap(Map, map, arguments[0]);
          }
          return map;
        };
        var Map$prototype = MapShim.prototype;

        Value.getter(Map$prototype, 'size', function () {
          if (typeof this._size === 'undefined') {
            throw new TypeError('size method called on incompatible Map');
          }
          return this._size;
        });

        defineProperties(Map$prototype, {
          get: function get(key) {
            requireMapSlot(this, 'get');
            var fkey = fastkey(key);
            if (fkey !== null) {
              // fast O(1) path
              var entry = this._storage[fkey];
              if (entry) {
                return entry.value;
              } else {
                return;
              }
            }
            var head = this._head,
                i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return i.value;
              }
            }
          },

          has: function has(key) {
            requireMapSlot(this, 'has');
            var fkey = fastkey(key);
            if (fkey !== null) {
              // fast O(1) path
              return typeof this._storage[fkey] !== 'undefined';
            }
            var head = this._head,
                i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return true;
              }
            }
            return false;
          },

          set: function set(key, value) {
            requireMapSlot(this, 'set');
            var head = this._head,
                i = head,
                entry;
            var fkey = fastkey(key);
            if (fkey !== null) {
              // fast O(1) path
              if (typeof this._storage[fkey] !== 'undefined') {
                this._storage[fkey].value = value;
                return this;
              } else {
                entry = this._storage[fkey] = new MapEntry(key, value);
                i = head.prev;
                // fall through
              }
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.value = value;
                return this;
              }
            }
            entry = entry || new MapEntry(key, value);
            if (ES.SameValue(-0, key)) {
              entry.key = +0; // coerce -0 to +0 in entry
            }
            entry.next = this._head;
            entry.prev = this._head.prev;
            entry.prev.next = entry;
            entry.next.prev = entry;
            this._size += 1;
            return this;
          },

          'delete': function _delete(key) {
            requireMapSlot(this, 'delete');
            var head = this._head,
                i = head;
            var fkey = fastkey(key);
            if (fkey !== null) {
              // fast O(1) path
              if (typeof this._storage[fkey] === 'undefined') {
                return false;
              }
              i = this._storage[fkey].prev;
              delete this._storage[fkey];
              // fall through
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.key = i.value = empty;
                i.prev.next = i.next;
                i.next.prev = i.prev;
                this._size -= 1;
                return true;
              }
            }
            return false;
          },

          clear: function clear() {
            requireMapSlot(this, 'clear');
            this._size = 0;
            this._storage = emptyObject();
            var head = this._head,
                i = head,
                p = i.next;
            while ((i = p) !== head) {
              i.key = i.value = empty;
              p = i.next;
              i.next = i.prev = head;
            }
            head.next = head.prev = head;
          },

          keys: function keys() {
            requireMapSlot(this, 'keys');
            return new MapIterator(this, 'key');
          },

          values: function values() {
            requireMapSlot(this, 'values');
            return new MapIterator(this, 'value');
          },

          entries: function entries() {
            requireMapSlot(this, 'entries');
            return new MapIterator(this, 'key+value');
          },

          forEach: function forEach(callback) {
            requireMapSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var it = this.entries();
            for (var entry = it.next(); !entry.done; entry = it.next()) {
              if (context) {
                _call(callback, context, entry.value[1], entry.value[0], this);
              } else {
                callback(entry.value[1], entry.value[0], this);
              }
            }
          }
        });
        addIterator(Map$prototype, Map$prototype.entries);

        return MapShim;
      }(),

      Set: function () {
        var isSet = function isSet(set) {
          return set._es6set && typeof set._storage !== 'undefined';
        };
        var requireSetSlot = function requireSetSlot(set, method) {
          if (!ES.TypeIsObject(set) || !isSet(set)) {
            // https://github.com/paulmillr/es6-shim/issues/176
            throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + String(set));
          }
        };

        // Creating a Map is expensive.  To speed up the common case of
        // Sets containing only string or numeric keys, we use an object
        // as backing storage and lazily create a full Map only when
        // required.
        var SetShim = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          if (this && this._es6set) {
            throw new TypeError('Bad construction');
          }
          var set = emulateES6construct(this, Set, Set$prototype, {
            _es6set: true,
            '[[SetData]]': null,
            _storage: emptyObject()
          });
          if (!set._es6set) {
            throw new TypeError('bad set');
          }

          // Optionally initialize Set from iterable
          if (arguments.length > 0) {
            addIterableToSet(Set, set, arguments[0]);
          }
          return set;
        };
        var Set$prototype = SetShim.prototype;

        // Switch from the object backing storage to a full Map.
        var ensureMap = function ensureMap(set) {
          if (!set['[[SetData]]']) {
            var m = set['[[SetData]]'] = new collectionShims.Map();
            _forEach(Object.keys(set._storage), function (k) {
              if (k === '^null') {
                k = null;
              } else if (k === '^undefined') {
                k = void 0;
              } else {
                var first = k.charAt(0);
                if (first === '$') {
                  k = _strSlice(k, 1);
                } else if (first === 'n') {
                  k = +_strSlice(k, 1);
                } else if (first === 'b') {
                  k = k === 'btrue';
                } else {
                  k = +k;
                }
              }
              m.set(k, k);
            });
            set._storage = null; // free old backing storage
          }
        };

        Value.getter(SetShim.prototype, 'size', function () {
          requireSetSlot(this, 'size');
          ensureMap(this);
          return this['[[SetData]]'].size;
        });

        defineProperties(SetShim.prototype, {
          has: function has(key) {
            requireSetSlot(this, 'has');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              return !!this._storage[fkey];
            }
            ensureMap(this);
            return this['[[SetData]]'].has(key);
          },

          add: function add(key) {
            requireSetSlot(this, 'add');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              this._storage[fkey] = true;
              return this;
            }
            ensureMap(this);
            this['[[SetData]]'].set(key, key);
            return this;
          },

          'delete': function _delete(key) {
            requireSetSlot(this, 'delete');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              var hasFKey = _hasOwnProperty(this._storage, fkey);
              return delete this._storage[fkey] && hasFKey;
            }
            ensureMap(this);
            return this['[[SetData]]']['delete'](key);
          },

          clear: function clear() {
            requireSetSlot(this, 'clear');
            if (this._storage) {
              this._storage = emptyObject();
            } else {
              this['[[SetData]]'].clear();
            }
          },

          values: function values() {
            requireSetSlot(this, 'values');
            ensureMap(this);
            return this['[[SetData]]'].values();
          },

          entries: function entries() {
            requireSetSlot(this, 'entries');
            ensureMap(this);
            return this['[[SetData]]'].entries();
          },

          forEach: function forEach(callback) {
            requireSetSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var entireSet = this;
            ensureMap(entireSet);
            this['[[SetData]]'].forEach(function (value, key) {
              if (context) {
                _call(callback, context, key, key, entireSet);
              } else {
                callback(key, key, entireSet);
              }
            });
          }
        });
        defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
        addIterator(SetShim.prototype, SetShim.prototype.values);

        return SetShim;
      }()
    };
    defineProperties(globals, collectionShims);

    if (globals.Map || globals.Set) {
      // Safari 8, for example, doesn't accept an iterable.
      var mapAcceptsArguments = valueOrFalseIfThrows(function () {
        return new Map([[1, 2]]).get(1) === 2;
      });
      if (!mapAcceptsArguments) {
        var OrigMapNoArgs = globals.Map;
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMapNoArgs();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          Object.setPrototypeOf(m, globals.Map.prototype);
          defineProperty(m, 'constructor', Map, true);
          return m;
        };
        globals.Map.prototype = create(OrigMapNoArgs.prototype);
        Value.preserveToString(globals.Map, OrigMapNoArgs);
      }
      var testMap = new Map();
      var mapUsesSameValueZero = function (m) {
        m['delete'](0);
        m['delete'](-0);
        m.set(0, 3);
        m.get(-0, 4);
        return m.get(0) === 3 && m.get(-0) === 4;
      }(testMap);
      var mapSupportsChaining = testMap.set(1, 2) === testMap;
      if (!mapUsesSameValueZero || !mapSupportsChaining) {
        var origMapSet = Map.prototype.set;
        overrideNative(Map.prototype, 'set', function set(k, v) {
          _call(origMapSet, this, k === 0 ? 0 : k, v);
          return this;
        });
      }
      if (!mapUsesSameValueZero) {
        var origMapGet = Map.prototype.get;
        var origMapHas = Map.prototype.has;
        defineProperties(Map.prototype, {
          get: function get(k) {
            return _call(origMapGet, this, k === 0 ? 0 : k);
          },
          has: function has(k) {
            return _call(origMapHas, this, k === 0 ? 0 : k);
          }
        }, true);
        Value.preserveToString(Map.prototype.get, origMapGet);
        Value.preserveToString(Map.prototype.has, origMapHas);
      }
      var testSet = new Set();
      var setUsesSameValueZero = function (s) {
        s['delete'](0);
        s.add(-0);
        return !s.has(0);
      }(testSet);
      var setSupportsChaining = testSet.add(1) === testSet;
      if (!setUsesSameValueZero || !setSupportsChaining) {
        var origSetAdd = Set.prototype.add;
        Set.prototype.add = function add(v) {
          _call(origSetAdd, this, v === 0 ? 0 : v);
          return this;
        };
        Value.preserveToString(Set.prototype.add, origSetAdd);
      }
      if (!setUsesSameValueZero) {
        var origSetHas = Set.prototype.has;
        Set.prototype.has = function has(v) {
          return _call(origSetHas, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype.has, origSetHas);
        var origSetDel = Set.prototype['delete'];
        Set.prototype['delete'] = function SetDelete(v) {
          return _call(origSetDel, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype['delete'], origSetDel);
      }
      var mapSupportsSubclassing = supportsSubclassing(globals.Map, function (M) {
        var m = new M([]);
        // Firefox 32 is ok with the instantiating the subclass but will
        // throw when the map is used.
        m.set(42, 42);
        return m instanceof M;
      });
      var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing; // without Object.setPrototypeOf, subclassing is not possible
      var mapRequiresNew = function () {
        try {
          return !(globals.Map() instanceof globals.Map);
        } catch (e) {
          return e instanceof TypeError;
        }
      }();
      if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
        var OrigMap = globals.Map;
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMap();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          Object.setPrototypeOf(m, Map.prototype);
          defineProperty(m, 'constructor', Map, true);
          return m;
        };
        globals.Map.prototype = OrigMap.prototype;
        Value.preserveToString(globals.Map, OrigMap);
      }
      var setSupportsSubclassing = supportsSubclassing(globals.Set, function (S) {
        var s = new S([]);
        s.add(42, 42);
        return s instanceof S;
      });
      var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing; // without Object.setPrototypeOf, subclassing is not possible
      var setRequiresNew = function () {
        try {
          return !(globals.Set() instanceof globals.Set);
        } catch (e) {
          return e instanceof TypeError;
        }
      }();
      if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
        var OrigSet = globals.Set;
        globals.Set = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          var s = new OrigSet();
          if (arguments.length > 0) {
            addIterableToSet(Set, s, arguments[0]);
          }
          Object.setPrototypeOf(s, Set.prototype);
          defineProperty(s, 'constructor', Set, true);
          return s;
        };
        globals.Set.prototype = OrigSet.prototype;
        Value.preserveToString(globals.Set, OrigSet);
      }
      var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function () {
        return new Map().keys().next().done;
      });
      /*
       - In Firefox < 23, Map#size is a function.
       - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
       - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
       - In Firefox 24, Map and Set do not implement forEach
       - In Firefox 25 at least, Map and Set are callable without "new"
       */
      if (typeof globals.Map.prototype.clear !== 'function' || new globals.Set().size !== 0 || new globals.Map().size !== 0 || typeof globals.Map.prototype.keys !== 'function' || typeof globals.Set.prototype.keys !== 'function' || typeof globals.Map.prototype.forEach !== 'function' || typeof globals.Set.prototype.forEach !== 'function' || isCallableWithoutNew(globals.Map) || isCallableWithoutNew(globals.Set) || typeof new globals.Map().keys().next !== 'function' || // Safari 8
      mapIterationThrowsStopIterator || // Firefox 25
      !mapSupportsSubclassing) {
        delete globals.Map; // necessary to overwrite in Safari 8
        delete globals.Set; // necessary to overwrite in Safari 8
        defineProperties(globals, {
          Map: collectionShims.Map,
          Set: collectionShims.Set
        }, true);
      }
    }
    if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
      // Fixed in WebKit with https://bugs.webkit.org/show_bug.cgi?id=144190
      defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
    }
    // Shim incomplete iterator implementations.
    addIterator(Object.getPrototypeOf(new globals.Map().keys()));
    addIterator(Object.getPrototypeOf(new globals.Set().keys()));
  }
  addDefaultSpecies(Map);
  addDefaultSpecies(Set);

  // Reflect
  if (!globals.Reflect) {
    defineProperty(globals, 'Reflect', {});
  }
  var Reflect = globals.Reflect;

  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
    if (!ES.TypeIsObject(target)) {
      throw new TypeError('target must be an object');
    }
  };

  // Some Reflect methods are basically the same as
  // those on the Object global, except that a TypeError is thrown if
  // target isn't an object. As well as returning a boolean indicating
  // the success of the operation.
  defineProperties(globals.Reflect, {
    // Apply method in a functional form.
    apply: function apply() {
      return _apply(ES.Call, null, arguments);
    },

    // New operator in a functional form.
    construct: function construct(constructor, args) {
      if (!ES.IsConstructor(constructor)) {
        throw new TypeError('First argument must be a constructor.');
      }
      var newTarget = arguments.length < 3 ? constructor : arguments[2];
      if (!ES.IsConstructor(newTarget)) {
        throw new TypeError('new.target must be a constructor.');
      }
      return ES.Construct(constructor, args, newTarget, 'internal');
    },

    // When deleting a non-existent or configurable property,
    // true is returned.
    // When attempting to delete a non-configurable property,
    // it will return false.
    deleteProperty: function deleteProperty(target, key) {
      throwUnlessTargetIsObject(target);
      if (supportsDescriptors) {
        var desc = Object.getOwnPropertyDescriptor(target, key);

        if (desc && !desc.configurable) {
          return false;
        }
      }

      // Will return true.
      return delete target[key];
    },

    enumerate: function enumerate(target) {
      throwUnlessTargetIsObject(target);
      return new ObjectIterator(target, 'key');
    },

    has: function has(target, key) {
      throwUnlessTargetIsObject(target);
      return key in target;
    }
  });

  if (Object.getOwnPropertyNames) {
    defineProperties(globals.Reflect, {
      // Basically the result of calling the internal [[OwnPropertyKeys]].
      // Concatenating propertyNames and propertySymbols should do the trick.
      // This should continue to work together with a Symbol shim
      // which overrides Object.getOwnPropertyNames and implements
      // Object.getOwnPropertySymbols.
      ownKeys: function ownKeys(target) {
        throwUnlessTargetIsObject(target);
        var keys = Object.getOwnPropertyNames(target);

        if (ES.IsCallable(Object.getOwnPropertySymbols)) {
          _pushApply(keys, Object.getOwnPropertySymbols(target));
        }

        return keys;
      }
    });
  }

  var callAndCatchException = function ConvertExceptionToBoolean(func) {
    return !throwsError(func);
  };

  if (Object.preventExtensions) {
    defineProperties(globals.Reflect, {
      isExtensible: function isExtensible(target) {
        throwUnlessTargetIsObject(target);
        return Object.isExtensible(target);
      },
      preventExtensions: function preventExtensions(target) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function () {
          Object.preventExtensions(target);
        });
      }
    });
  }

  if (supportsDescriptors) {
    var internalGet = function get(target, key, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);

      if (!desc) {
        var parent = Object.getPrototypeOf(target);

        if (parent === null) {
          return undefined;
        }

        return internalGet(parent, key, receiver);
      }

      if ('value' in desc) {
        return desc.value;
      }

      if (desc.get) {
        return _call(desc.get, receiver);
      }

      return undefined;
    };

    var internalSet = function set(target, key, value, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);

      if (!desc) {
        var parent = Object.getPrototypeOf(target);

        if (parent !== null) {
          return internalSet(parent, key, value, receiver);
        }

        desc = {
          value: void 0,
          writable: true,
          enumerable: true,
          configurable: true
        };
      }

      if ('value' in desc) {
        if (!desc.writable) {
          return false;
        }

        if (!ES.TypeIsObject(receiver)) {
          return false;
        }

        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);

        if (existingDesc) {
          return Reflect.defineProperty(receiver, key, {
            value: value
          });
        } else {
          return Reflect.defineProperty(receiver, key, {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }

      if (desc.set) {
        _call(desc.set, receiver, value);
        return true;
      }

      return false;
    };

    defineProperties(globals.Reflect, {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function () {
          Object.defineProperty(target, propertyKey, attributes);
        });
      },

      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        throwUnlessTargetIsObject(target);
        return Object.getOwnPropertyDescriptor(target, propertyKey);
      },

      // Syntax in a functional form.
      get: function get(target, key) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 2 ? arguments[2] : target;

        return internalGet(target, key, receiver);
      },

      set: function set(target, key, value) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 3 ? arguments[3] : target;

        return internalSet(target, key, value, receiver);
      }
    });
  }

  if (Object.getPrototypeOf) {
    var objectDotGetPrototypeOf = Object.getPrototypeOf;
    defineProperties(globals.Reflect, {
      getPrototypeOf: function getPrototypeOf(target) {
        throwUnlessTargetIsObject(target);
        return objectDotGetPrototypeOf(target);
      }
    });
  }

  if (Object.setPrototypeOf) {
    var willCreateCircularPrototype = function willCreateCircularPrototype(object, proto) {
      while (proto) {
        if (object === proto) {
          return true;
        }
        proto = Reflect.getPrototypeOf(proto);
      }
      return false;
    };

    defineProperties(globals.Reflect, {
      // Sets the prototype of the given object.
      // Returns true on success, otherwise false.
      setPrototypeOf: function setPrototypeOf(object, proto) {
        throwUnlessTargetIsObject(object);
        if (proto !== null && !ES.TypeIsObject(proto)) {
          throw new TypeError('proto must be an object or null');
        }

        // If they already are the same, we're done.
        if (proto === Reflect.getPrototypeOf(object)) {
          return true;
        }

        // Cannot alter prototype if object not extensible.
        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
          return false;
        }

        // Ensure that we do not create a circular prototype chain.
        if (willCreateCircularPrototype(object, proto)) {
          return false;
        }

        Object.setPrototypeOf(object, proto);

        return true;
      }
    });
  }

  if (String(new Date(NaN)) !== 'Invalid Date') {
    var dateToString = Date.prototype.toString;
    var shimmedDateToString = function toString() {
      var valueOf = +this;
      if (valueOf !== valueOf) {
        return 'Invalid Date';
      }
      return _call(dateToString, this);
    };
    overrideNative(Date.prototype, 'toString', shimmedDateToString);
  }

  // Annex B HTML methods
  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additional-properties-of-the-string.prototype-object
  var stringHTMLshims = {
    anchor: function anchor(name) {
      return ES.CreateHTML(this, 'a', 'name', name);
    },
    big: function big() {
      return ES.CreateHTML(this, 'big', '', '');
    },
    blink: function blink() {
      return ES.CreateHTML(this, 'blink', '', '');
    },
    bold: function bold() {
      return ES.CreateHTML(this, 'b', '', '');
    },
    fixed: function fixed() {
      return ES.CreateHTML(this, 'tt', '', '');
    },
    fontcolor: function fontcolor(color) {
      return ES.CreateHTML(this, 'font', 'color', color);
    },
    fontsize: function fontsize(size) {
      return ES.CreateHTML(this, 'font', 'size', size);
    },
    italics: function italics() {
      return ES.CreateHTML(this, 'i', '', '');
    },
    link: function link(url) {
      return ES.CreateHTML(this, 'a', 'href', url);
    },
    small: function small() {
      return ES.CreateHTML(this, 'small', '', '');
    },
    strike: function strike() {
      return ES.CreateHTML(this, 'strike', '', '');
    },
    sub: function sub() {
      return ES.CreateHTML(this, 'sub', '', '');
    },
    sup: function sub() {
      return ES.CreateHTML(this, 'sup', '', '');
    }
  };
  _forEach(Object.keys(stringHTMLshims), function (key) {
    var method = String.prototype[key];
    var shouldOverwrite = false;
    if (ES.IsCallable(method)) {
      var output = _call(method, '', ' " ');
      var quotesCount = _concat([], output.match(/"/g)).length;
      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
    } else {
      shouldOverwrite = true;
    }
    if (shouldOverwrite) {
      defineProperty(String.prototype, key, stringHTMLshims[key], true);
    }
  });

  return globals;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ })});;
define("common", ["jquery"], function(__WEBPACK_EXTERNAL_MODULE_71__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 181);
/******/ })
/************************************************************************/
/******/ ({

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
};

var escapeHTML = exports.escapeHTML = function escapeHTML(string) {
  return String(string).replace(/[&<>"']/g, function (s) {
    return escapeMap[s] || s;
  });
};

/**
 * Escapes the provided string such that it can be interpolated into a RegExp and
 * be matched literally.
 *
 * (Retrieved from
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
 * on 2014-07-14.)
 *
 * @param {String} string the string to escape
 * @return {String} the escaped string
 */
var escapeRegExp = exports.escapeRegExp = function escapeRegExp(string) {
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
};

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domainFromEmail = exports.isMobile = exports.getQueryParamByName = exports.onAllPopulated = exports.serializeForm = exports.sanitizeFilename = exports.sanitizeFilenameRegexes = exports.loadCss = exports.addUrlParameters = exports.multilineOverflow = exports.centerElement = exports.isIPad = exports.removeGlobalErrors = exports.clearErrorFields = exports.disableSelectOptions = exports.escapeRegExp = exports.escapeHTML = exports.forceContainerRefresh = exports.addPlaceholderText = exports.isIE = exports.isIE11 = exports.isIE10 = exports.isIE9 = exports.isIE8 = exports.isIE7 = exports.isPlaceholderSupported = exports.PLACEHOLDER_INPUT_CLASS = exports.center = exports.unblockDoubleClick = exports.blockDoubleClick = exports.resetBlockDoubleSubmit = exports.unblockDoubleSubmit = exports.blockDoubleSubmit = exports.addClickOut = exports.MAX_FILENAME_LENGTH = exports.FADE_SPEED = undefined;

var _jquery = __webpack_require__(71);

var _jquery2 = _interopRequireDefault(_jquery);

var _escape = __webpack_require__(115);

var escape = _interopRequireWildcard(_escape);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env browser */
var DOUBLE_SUBMIT_BLOCK_KEY = 'blockDoubleSubmit_submitPressed';

// Object to hold values that should be cached.
var cache = {};

var FADE_SPEED = exports.FADE_SPEED = 300;
// Arbitrary, but reasonable filename length. See WEB-13618
var MAX_FILENAME_LENGTH = exports.MAX_FILENAME_LENGTH = 32;

/*
 * Calls hook function when the user clicks *outside* of the given object.
 *
 * jObj: jQuery object or string hook: the function to call when clicks
 * happen partners: an optional list of elements clicks on which should
 * not invoke the hook
 */
var addClickOut = exports.addClickOut = function addClickOut(jObj, hook, partners) {
  jObj = (0, _jquery2.default)(jObj);

  function isTarget(event, j) {
    return (0, _jquery2.default)(event.target).parents().andSelf().is(j);
  }

  /* Global document click handler */
  (0, _jquery2.default)(document).click(function (event) {
    if (isTarget(event, jObj) || !jObj.is(':visible')) {
      return;
    } else if (partners !== null && partners !== undefined) {
      var matched = false;

      (0, _jquery2.default)(partners).each(function () {
        if (isTarget(event, (0, _jquery2.default)(this))) {
          matched = true;
          return false;
        }
        return true;
      });

      if (matched) {
        return;
      }
    }

    hook();
  });
};

/*
 * Stop an event (such as submit or click) from happening multiple times
 */
var blockDoubleEvent = function blockDoubleEvent(jObj, eventName) {
  jObj = (0, _jquery2.default)(jObj);
  jObj.on(eventName, function () {
    if ((0, _jquery2.default)(this).data(DOUBLE_SUBMIT_BLOCK_KEY)) {
      return false;
    }
    (0, _jquery2.default)(this).data(DOUBLE_SUBMIT_BLOCK_KEY, true);
    return true;
  });
};

/*
 * Unblock an event (such as submit or click) from happening multiple
 * times
 */
var unblockDoubleEvent = function unblockDoubleEvent(jObj, eventName) {
  jObj = (0, _jquery2.default)(jObj);
  jObj.off(eventName);
};

/*
 * Block against submitting a form twice with two successive clicks
 * formObj: form DOM object or jQuery object
 */
var blockDoubleSubmit = exports.blockDoubleSubmit = function blockDoubleSubmit(formObj) {
  blockDoubleEvent(formObj, 'submit.blockDoubleSubmit');
};

/*
 * unblock against submitting a form twice with two successive clicks
 * formObj: form DOM object or jQuery object
 */
var unblockDoubleSubmit = exports.unblockDoubleSubmit = function unblockDoubleSubmit(formObj) {
  unblockDoubleEvent(formObj, 'submit.blockDoubleSubmit');
};

/*
 * reset double-submit block on the form
 */
var resetBlockDoubleSubmit = exports.resetBlockDoubleSubmit = function resetBlockDoubleSubmit(formObj) {
  (0, _jquery2.default)(formObj).data(DOUBLE_SUBMIT_BLOCK_KEY, false);
};

/*
 * Block against clicking a link twice
 */
var blockDoubleClick = exports.blockDoubleClick = function blockDoubleClick(jObj) {
  blockDoubleEvent(jObj, 'click.blockDoubleClick');
};

/*
 * Block against clicking a link twice
 */
var unblockDoubleClick = exports.unblockDoubleClick = function unblockDoubleClick(jObj) {
  unblockDoubleEvent(jObj, 'click.blockDoubleClick');
};

/*
 * Center element on the screen via absolute positioning
 *
 * jObj: jQuery object or string keepCentered: true/false for whether we
 * should register a resize handler
 */
var center = exports.center = function center(jObj, keepCentered) {
  jObj = (0, _jquery2.default)(jObj);

  if (keepCentered === null || keepCentered === undefined) {
    keepCentered = false;
  }

  if (keepCentered) {
    (0, _jquery2.default)(window).resize(function () {
      center(jObj, false);
    });
  }

  jObj.css('position', 'absolute');
  jObj.css('left', ((0, _jquery2.default)(window).width() - jObj.outerWidth()) / 2 + (0, _jquery2.default)(window).scrollLeft() + 'px');

  /* We change behaviour when we run out of space */
  if (jObj.height() >= (0, _jquery2.default)(window).height()) {
    jObj.css('top', '0px');
    /* A necessary hack to ensure scrolling is possible */
    (0, _jquery2.default)('body').css('min-height', jObj.height() + 'px');
  } else {
    jObj.css('top', ((0, _jquery2.default)(window).height() - jObj.outerHeight()) / 2 + (0, _jquery2.default)(window).scrollTop() + 'px');
  }

  return jObj;
};

var PLACEHOLDER_INPUT_CLASS = exports.PLACEHOLDER_INPUT_CLASS = 'placeholder-input';
// Detect support for HTML placeholder attribute
var isPlaceholderSupported = exports.isPlaceholderSupported = function isPlaceholderSupported() {
  if (typeof cache.placeholderSupported === 'undefined') {
    var fakeInput = document.createElement('input');
    cache.placeholderSupported = 'placeholder' in fakeInput;
  }
  return cache.placeholderSupported;
};

var isIE7 = false;
var isIE8 = false;
var isIE9 = false;
var isIE10 = false;
var isIE11 = false;
var isIE = false;

try {
  // detect IE
  exports.isIE7 = isIE7 = (0, _jquery2.default)('html.ie7').length || (0, _jquery2.default)('html.ie7', window.parent.document).length;
  exports.isIE8 = isIE8 = (0, _jquery2.default)('html.ie8').length || (0, _jquery2.default)('html.ie8', window.parent.document).length;
  exports.isIE9 = isIE9 = (0, _jquery2.default)('html.ie9').length || (0, _jquery2.default)('html.ie9', window.parent.document).length;
  exports.isIE = isIE = isIE7 || isIE8 || isIE9;

  // Note: `isIE` does not check for IE 10, currently. Hopefully there is no need to.
  exports.isIE10 = isIE10 = (0, _jquery2.default)('html.ie10').length || (0, _jquery2.default)('html.ie10', window.parent.document).length;

  // Looks like we need to be able to special-case ie11 in some contexts
  exports.isIE11 = isIE11 = !window.ActiveXObject && 'ActiveXObject' in window;
} catch (err) {
  // Accessing window.parent.document from within an iframe can fail in Firefox
}

exports.isIE7 = isIE7;
exports.isIE8 = isIE8;
exports.isIE9 = isIE9;
exports.isIE10 = isIE10;
exports.isIE11 = isIE11;
exports.isIE = isIE;
var addPlaceholderText = exports.addPlaceholderText = function addPlaceholderText(textArea, msg, ignoreBlurReplace) {

  // Adapted from
  // http://robertnyman.com/2010/06/17/adding-html5-placeholder-attribute-support-through-progressive-enhancement/
  if (isPlaceholderSupported()) {
    textArea.attr('placeholder', msg);
  } else if (!textArea.is(':focus')) {
    // Fallback implementation for browsers that don't support placeholder
    // natively
    // This tends not to work if the area already has focus,
    // so we don't apply it in those cases
    var clearValue = function clearValue() {
      if (isIE && textArea.attr('type') === 'password') {
        var $pass = (0, _jquery2.default)('#passwordInputDummy');
        if ($pass.length) {
          $pass.remove();
          textArea.show();
          textArea.focus();
        }
      } else if (textArea.val() === msg) {
        textArea.val('');
      }
    };
    var setValue = function setValue() {
      if (textArea.val().length === 0) {
        if (isIE && textArea.attr('type') === 'password') {
          textArea.after('<input id="passwordInputDummy" class="text" type="text"></input>');
          textArea.hide();
          var $pass = (0, _jquery2.default)('#passwordInputDummy');
          $pass.attr('class', textArea.attr('class'));
          $pass.bind('focus', function () {
            clearValue();
          });
          $pass.val(msg);
          $pass.addClass(PLACEHOLDER_INPUT_CLASS);
        } else {
          textArea.val(msg);
          textArea.addClass(PLACEHOLDER_INPUT_CLASS);
        }
      }
    };

    setValue();

    if (!(isIE && textArea.attr('type') === 'password')) {
      textArea.bind('focus', function () {
        textArea.removeClass(PLACEHOLDER_INPUT_CLASS);
        clearValue();
      });
    }

    if (!ignoreBlurReplace) {
      textArea.bind('blur', setValue);
    }

    // Clear the placeholder text on form submit
    textArea.parents('form').bind('submit', function () {
      clearValue();
    });

    // Clear on reload to prevent the browser from storing the placeholder
    // for autocomplete
    (0, _jquery2.default)(window).bind('unload', function () {
      clearValue();
    });
  }
};

// (IE8 bug) force a DOM re-evaluation and redraw
var forceContainerRefresh = exports.forceContainerRefresh = function forceContainerRefresh(container) {
  container.each(function () {
    this.className = this.className;
  });
};

var escapeHTML = exports.escapeHTML = escape.escapeHTML;
var escapeRegExp = exports.escapeRegExp = escape.escapeRegExp;

var disableSelectOptions = exports.disableSelectOptions = function disableSelectOptions(selectElem) {
  selectElem = (0, _jquery2.default)(selectElem);
  var selectDom = selectElem.get(0);
  (0, _jquery2.default)('option[disabled]', selectElem).css({
    'color': '#cccccc'
  });
  selectElem.change(function () {
    if (this.selectedIndex === -1) {
      do {
        this.selectedIndex++;
        if (this.selectedIndex === this.options.length) {
          this.selectedIndex = 0;
          return;
        }
      } while (this.options[this.selectedIndex].disabled);
    }
    if (this.options[this.selectedIndex].disabled) {
      if (this.options.length === 0) {
        this.selectedIndex = -1;
      } else {
        this.selectedIndex--;
      }
      (0, _jquery2.default)(this).trigger('change');
    }
  });
  if (selectDom.selectedIndex >= 0 && selectDom.options[selectDom.selectedIndex].disabled) {
    selectDom.onchange();
  }
};

/**
 * Clear the content of all error fields on the page.
 */
var clearErrorFields = exports.clearErrorFields = function clearErrorFields(scope) {
  if (scope) {
    (0, _jquery2.default)(scope).find('input').removeClass('error');
    (0, _jquery2.default)(scope).find('[error-field]').children('.error-status').remove();
  } else {
    (0, _jquery2.default)('input').removeClass('error');
    (0, _jquery2.default)('[error-field]').children('.error-status').remove();
  }
};

/**
 * remove the global error div from the layout of the page.
 */
var removeGlobalErrors = exports.removeGlobalErrors = function removeGlobalErrors() {
  (0, _jquery2.default)('.error-global-list').remove();
};

// detect iPad
var isIPad = exports.isIPad = window.navigator.userAgent.indexOf('iPad') !== -1;

/*
 * Javascript workaround to center an element for browsers where `margin:
 * auto` does not work (e.g. IE7).
 */
var centerElement = exports.centerElement = function centerElement(element) {
  element = (0, _jquery2.default)(element);
  element.css({
    top: '50%',
    left: '50%',
    'margin-top': element.height() / -2,
    'margin-left': element.width() / -2
  });
};

/*
 * Resizes an element's string content for multi line text overflow
 * Specify a height and the function will trim the content word by word so
 * that its height will fit into this and leave an ellipsis.
 *
 * @param elem the element you would like to shrink the content of @param
 * height the height to which you would like to shrink the content @param
 * selector optional param for specifying an internal element that should
 * be trimmed (if encompassing element has a max height that should be
 * followed instead)
 */
var multilineOverflow = exports.multilineOverflow = function multilineOverflow(elem, height, selector) {
  var initial = selector ? (0, _jquery2.default)(elem).find(selector).text() : (0, _jquery2.default)(elem).text();
  if (!initial) {
    return;
  }
  var failSafe = initial.length;
  while (elem.scrollHeight > height) {
    if (failSafe <= 0) {
      if (selector) {
        (0, _jquery2.default)(elem).find(selector).text(initial);
      } else {
        (0, _jquery2.default)(elem).text(initial);
      }
      return;
    }
    var content = selector ? (0, _jquery2.default)(elem).find(selector).text() : (0, _jquery2.default)(elem).text();
    content = content.substring(0, content.lastIndexOf(' '));
    if (selector) {
      (0, _jquery2.default)(elem).find(selector).text(content + '...');
    } else {
      (0, _jquery2.default)(elem).text(content + '...');
    }
    failSafe--;
  }
};

/*
 * Add the url parameters specified in params to the passed url, and
 * return the updated url. params can be anything accepted by $.param
 * http://api.jquery.com/jQuery.param/
 */
var addUrlParameters = exports.addUrlParameters = function addUrlParameters(url, params) {
  /*
   * If there is already an existing query string, add the parameters,
   * otherwise create the query string with the passed parameters
   */
  var queryString = url.indexOf('?') === -1 ? '?' : '&';
  queryString += _jquery2.default.param(params);
  return url + queryString;
};

/**
 * A workaround css loader while we figure out how to make css!
 * work for older IE. Will make a best-effort to wait for the
 * css to load, or in IE will start the css loading and will
 * resolve the loaded deferred.
 */
var loadCss = exports.loadCss = function loadCss(url) {
  var deferred = _jquery2.default.Deferred();
  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
  // hack to wait some small amout of time for css to load before
  // resolving as 'loaded'
  setTimeout(function () {
    deferred.resolve();
  }, 500);
  return deferred.promise();
};

// from https://github.com/parshap/node-sanitize-filename/blob/master/index.js
var sanitizeFilenameRegexes = exports.sanitizeFilenameRegexes = {
  illegalRe: /[\/\?<>\\:\*\|":]/g,
  controlRe: /[\x00-\x1f\x80-\x9f]/g,
  reservedRe: /^\.+$/,
  windowsReservedRe: /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i
};

/**
 * Removes illegal characters from a filename.
 * @param filename: the proposed name to sanitize
 * @returns a string representing the sanitized filename, with max length 32
 */
var sanitizeFilename = exports.sanitizeFilename = function sanitizeFilename(filename) {
  var sanitizedFilename = filename.trim().replace(this.sanitizeFilenameRegexes.illegalRe, '').replace(this.sanitizeFilenameRegexes.controlRe, '').replace(this.sanitizeFilenameRegexes.reservedRe, '').replace(this.sanitizeFilenameRegexes.windowsReservedRe, '');
  // WEB-13618: Truncate filename at 32 characters
  if (sanitizedFilename.length > MAX_FILENAME_LENGTH) {
    return sanitizedFilename.substring(0, MAX_FILENAME_LENGTH);
  } else {
    return sanitizedFilename;
  }
};

/**
 * serializes a form into an object which can be passed
 * in an ajax request
 */
var serializeForm = exports.serializeForm = function serializeForm(form) {
  var o = {};
  var a = form.serializeArray();
  _jquery2.default.each(a, function () {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

/**
 * fire a callback when all the given fields have been filled
 */
var onAllPopulated = exports.onAllPopulated = function onAllPopulated(fieldNames, callback) {
  var fields = [];
  fieldNames.forEach(function (name) {
    var field = (0, _jquery2.default)('[name="' + name + '"]');
    if (field.get(0)) {
      fields.push((0, _jquery2.default)(field.get(0)));
    }
  });
  fields.forEach(function (field) {
    field.on('blur', function () {
      var allPopulated = true;
      fields.forEach(function (fieldIter) {
        if (!fieldIter.val()) {
          allPopulated = false;
          return false;
        }
        return true;
      });
      if (allPopulated) {
        callback();
      }
      return true;
    });
  });
};

/**
 * get the uri decoded value for the given parameter.
 *
 * source from: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 */
var getQueryParamByName = exports.getQueryParamByName = function getQueryParamByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null || results === undefined ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/**
 * @return whether we think the client is mobile
 *
 * source from: http://stackoverflow.com/questions/11381673/javascript-solution-to-detect-mobile-browser
 */
var isMobile = exports.isMobile = function isMobile() {
  if (window.navigator && window.navigator.userAgent) {
    return window.navigator.userAgent.match(/Android/i) || window.navigator.userAgent.match(/webOS/i) || window.navigator.userAgent.match(/iPhone/i) || window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iPod/i) || window.navigator.userAgent.match(/BlackBerry/i) || window.navigator.userAgent.match(/Windows Phone/i);
  } else {
    return false;
  }
};

/**
 * Given an email, returns the domain. Does not check if email is valid.
 * If there is no '@' symbol in the email returns null;
 */
var domainFromEmail = exports.domainFromEmail = function domainFromEmail(email) {
  if (!email) {
    return null;
  }
  var at = email.indexOf('@');
  return at === -1 ? null : email.substr(at + 1);
};

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ })

/******/ })});;
!function(b){b.matchMedia=b.matchMedia||function(b){var a,g=b.documentElement,k=g.firstElementChild||g.firstChild,e=b.createElement("body"),n=b.createElement("div");return n.id="mq-test-1",n.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(n),function(b){return n.innerHTML='\x26shy;\x3cstyle media\x3d"'+b+'"\x3e #mq-test-1 { width: 42px; }\x3c/style\x3e',g.insertBefore(e,k),a=42===n.offsetWidth,g.removeChild(e),{matches:a,media:b}}}(b.document)}(this);
(function(b){if(b.matchMedia&&b.matchMedia("all").addListener)return!1;var t=b.matchMedia,a=t("only all").matches,g=!1,k=0,e=[],n=function(){b.clearTimeout(k);k=b.setTimeout(function(){for(var a=0,g=e.length;g>a;a++){var l=e[a].mql,f=e[a].listeners||[],h=t(l.media).matches;if(h!==l.matches){l.matches=h;for(var h=0,u=f.length;u>h;h++)f[h].call(b,l)}}},30)};b.matchMedia=function(k){var s=t(k),l=[],f=0;return s.addListener=function(h){a&&(g||(g=!0,b.addEventListener("resize",n,!0)),0===f&&(f=e.push({mql:s,
listeners:l})),l.push(h))},s.removeListener=function(b){for(var a=0,f=l.length;f>a;a++)l[a]===b&&l.splice(a,1)},s}})(this);
(function(b){function t(){z(!0)}var a={};b.respond=a;a.update=function(){};var g=[],k=function(){var a=!1;try{a=new b.XMLHttpRequest}catch(d){a=new b.ActiveXObject("Microsoft.XMLHTTP")}return function(){return a}}(),e=function(a,b){var c=k();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},n=function(b){return b.replace(a.regex.minmaxwh,"").match(a.regex.other)};if(a.ajax=e,a.queue=g,a.unsupportedmq=
n,a.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
other:/\([^\)]*\)/g},a.mediaQueriesSupported=b.matchMedia&&null!==b.matchMedia("only all")&&b.matchMedia("only all").matches,!a.mediaQueriesSupported){var y,s,l,f=b.document,h=f.documentElement,u=[],v=[],q=[],A={},w=f.getElementsByTagName("head")[0]||h,G=f.getElementsByTagName("base")[0],x=w.getElementsByTagName("link"),B=function(){var b,a=f.createElement("div"),c=f.body,g=h.style.fontSize,p=c&&c.style.fontSize,m=!1;return a.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=m=f.createElement("body"),
c.style.background="none"),h.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(a),m&&h.insertBefore(c,h.firstChild),b=a.offsetWidth,m?h.removeChild(c):c.removeChild(a),h.style.fontSize=g,p&&(c.style.fontSize=p),l=parseFloat(b)},z=function(a){var d=h.clientWidth,c="CSS1Compat"===f.compatMode&&d||f.body.clientWidth||d,d={},g=x[x.length-1],p=(new Date).getTime();if(a&&y&&30>p-y)return b.clearTimeout(s),s=b.setTimeout(z,30),void 0;y=p;for(var m in u)if(u.hasOwnProperty(m)){a=u[m];var p=a.minw,
e=a.maxw,n=null===p,C=null===e;p&&(p=parseFloat(p)*(-1<p.indexOf("em")?l||B():1));e&&(e=parseFloat(e)*(-1<e.indexOf("em")?l||B():1));a.hasquery&&(n&&C||!(n||c>=p)||!(C||e>=c))||(d[a.media]||(d[a.media]=[]),d[a.media].push(v[a.rules]))}for(var r in q)q.hasOwnProperty(r)&&q[r]&&q[r].parentNode===w&&w.removeChild(q[r]);q.length=0;for(var k in d)d.hasOwnProperty(k)&&(m=f.createElement("style"),r=d[k].join("\n"),m.type="text/css",m.media=k,w.insertBefore(m,g.nextSibling),m.styleSheet?m.styleSheet.cssText=
r:m.appendChild(f.createTextNode(r)),q.push(m))},D=function(b,d,c){var e=b.replace(a.regex.comments,"").replace(a.regex.keyframes,"").match(a.regex.media),g=e&&e.length||0;d=d.substring(0,d.lastIndexOf("/"));var f=!g&&c;d.length&&(d+="/");f&&(g=1);for(var h=0;g>h;h++){var l,k,r,s;f?(l=c,v.push(b.replace(a.regex.urls,"$1"+d+"$2$3"))):(l=e[h].match(a.regex.findStyles)&&RegExp.$1,v.push(RegExp.$2&&RegExp.$2.replace(a.regex.urls,"$1"+d+"$2$3")));r=l.split(",");s=r.length;for(var q=0;s>q;q++)k=r[q],n(k)||
u.push({media:k.split("(")[0].match(a.regex.only)&&RegExp.$2||"all",rules:v.length-1,hasquery:-1<k.indexOf("("),minw:k.match(a.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(a.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}z()},E=function(){if(g.length){var a=g.shift();e(a.href,function(d){D(d,a.href,a.media);A[a.href]=!0;b.setTimeout(function(){E()},0)})}},F=function(){for(var a=0;a<x.length;a++){var d=x[a],c=d.href,e=d.media,f=d.rel&&"stylesheet"===d.rel.toLowerCase();c&&
f&&!A[c]&&(d.styleSheet&&d.styleSheet.rawCssText?(D(d.styleSheet.rawCssText,c,e),A[c]=!0):(!/^([a-zA-Z:]*\/\/)/.test(c)&&!G||c.replace(RegExp.$1,"").split("/")[0]===b.location.host)&&("//"===c.substring(0,2)&&(c=b.location.protocol+c),g.push({href:c,media:e})))}E()};F();a.update=F;a.getEmValue=B;b.addEventListener?b.addEventListener("resize",t,!1):b.attachEvent&&b.attachEvent("onresize",t)}})(this);

