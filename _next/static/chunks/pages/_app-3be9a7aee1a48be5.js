(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3188:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},o=e.split(";"),a=(t||{}).decode||n,i=0;i<o.length;i++){var c=o[i],l=c.indexOf("=");if(!(l<0)){var s=c.substring(0,l).trim();if(void 0==r[s]){var u=c.substring(l+1,c.length).trim();'"'===u[0]&&(u=u.slice(1,-1)),r[s]=function(e,t){try{return t(e)}catch(t){return e}}(u,a)}}}return r},t.serialize=function(e,t,n){var a=n||{},i=a.encode||r;if("function"!=typeof i)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var c=i(t);if(c&&!o.test(c))throw TypeError("argument val is invalid");var l=e+"="+c;if(null!=a.maxAge){var s=a.maxAge-0;if(isNaN(s)||!isFinite(s))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(s)}if(a.domain){if(!o.test(a.domain))throw TypeError("option domain is invalid");l+="; Domain="+a.domain}if(a.path){if(!o.test(a.path))throw TypeError("option path is invalid");l+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var n=decodeURIComponent,r=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},6998:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};Object.defineProperty(t,"__esModule",{value:!0}),t.checkCookies=t.hasCookie=t.removeCookies=t.deleteCookie=t.setCookies=t.setCookie=t.getCookie=t.getCookies=void 0;var a=n(3188),i=function(){return"undefined"!=typeof window},c=function(e){void 0===e&&(e="");try{var t=JSON.stringify(e);return/^[\{\[]/.test(t)?t:e}catch(t){return e}};t.getCookies=function(e){if(e&&(t=e.req),!i())return t&&t.cookies?t.cookies:t&&t.headers&&t.headers.cookie?(0,a.parse)(t.headers.cookie):{};for(var t,n={},r=document.cookie?document.cookie.split("; "):[],o=0,c=r.length;o<c;o++){var l=r[o].split("="),s=l.slice(1).join("=");n[l[0]]=s}return n},t.getCookie=function(e,n){var r,o=(0,t.getCookies)(n)[e];if(void 0!==o)return"true"===(r=o?o.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):o)||"false"!==r&&("undefined"!==r?"null"===r?null:r:void 0)},t.setCookie=function(e,t,n){if(n){var l,s,u,d=n.req,f=n.res,h=o(n,["req","res"]);s=d,u=f,l=h}var p=(0,a.serialize)(e,c(t),r({path:"/"},l));if(i())document.cookie=p;else if(u&&s){var v=u.getHeader("Set-Cookie");if(Array.isArray(v)||(v=v?[String(v)]:[]),u.setHeader("Set-Cookie",v.concat(p)),s&&s.cookies){var m=s.cookies;""===t?delete m[e]:m[e]=c(t)}if(s&&s.headers&&s.headers.cookie){var m=(0,a.parse)(s.headers.cookie);""===t?delete m[e]:m[e]=c(t),s.headers.cookie=Object.entries(m).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.setCookies=function(e,n,r){return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."),(0,t.setCookie)(e,n,r)},t.deleteCookie=function(e,n){return(0,t.setCookie)(e,"",r(r({},n),{maxAge:-1}))},t.removeCookies=function(e,n){return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."),(0,t.deleteCookie)(e,n)},t.hasCookie=function(e,n){return!!e&&(0,t.getCookies)(n).hasOwnProperty(e)},t.checkCookies=function(e,n){return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."),(0,t.hasCookie)(e,n)}},8166:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4614)}])},339:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return c},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return u}});var n,r,o="refresh",a="navigate",i="restore",c="server-patch",l="prefetch",s="fast-refresh",u="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6173:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5166),o=n(1040),a=n(5754);n(7994),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});var i=n(8266)._(n(959)),c=n(4512),l=n(3486),s=n(9310),u=n(5634),d=n(1674),f=n(665),h=n(3883),p=n(6619),v=n(6173),m=n(9560),g=n(339),_=new Set;function b(e,t,n,r,o,a){if(a||(0,l.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){var i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(_.has(i))return;_.add(i)}Promise.resolve(a?e.prefetch(t,o):e.prefetch(t,n,r)).catch(function(e){})}}function x(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}var y=i.default.forwardRef(function(e,t){var n,s,_=e.href,y=e.as,j=e.children,w=e.prefetch,k=void 0===w?null:w,C=e.passHref,S=e.replace,T=e.shallow,N=e.scroll,I=e.locale,O=e.onClick,E=e.onMouseEnter,M=e.onTouchStart,A=e.legacyBehavior,P=void 0!==A&&A,D=o._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=j,P&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));var L=!1!==k,R=null===k?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,B=i.default.useContext(f.RouterContext),Z=i.default.useContext(h.AppRouterContext),H=null!=B?B:Z,V=!B,z=i.default.useMemo(function(){if(!B){var e=x(_);return{href:e,as:y?x(y):e}}var t=a._((0,c.resolveHref)(B,_,!0),2),n=t[0],r=t[1];return{href:n,as:y?(0,c.resolveHref)(B,y):r||n}},[B,_,y]),F=z.href,U=z.as,G=i.default.useRef(F),W=i.default.useRef(U);P&&(s=i.default.Children.only(n));var q=P?s&&"object"==typeof s&&s.ref:t,K=a._((0,p.useIntersection)({rootMargin:"200px"}),3),X=K[0],Y=K[1],J=K[2],Q=i.default.useCallback(function(e){(W.current!==U||G.current!==F)&&(J(),W.current=U,G.current=F),X(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[U,q,F,J,X]);i.default.useEffect(function(){H&&Y&&L&&b(H,F,U,{locale:I},{kind:R},V)},[U,F,Y,I,L,null==B?void 0:B.locale,H,V,R]);var $={ref:Q,onClick:function(e){P||"function"!=typeof O||O(e),P&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e),H&&!e.defaultPrevented&&function(e,t,n,r,o,a,c,s,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(f=e.currentTarget.getAttribute("target"))||"_self"===f)&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&(!e.nativeEvent||2!==e.nativeEvent.which)&&(u||(0,l.isLocalURL)(n))){e.preventDefault();var f,h=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?i.default.startTransition(h):h()}}(e,H,F,U,S,T,N,I,V,L)},onMouseEnter:function(e){P||"function"!=typeof E||E(e),P&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),H&&(L||!V)&&b(H,F,U,{locale:I,priority:!0,bypassPrefetchedCheck:!0},{kind:R},V)},onTouchStart:function(e){P||"function"!=typeof M||M(e),P&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),H&&(L||!V)&&b(H,F,U,{locale:I,priority:!0,bypassPrefetchedCheck:!0},{kind:R},V)}};if((0,u.isAbsoluteUrl)(U))$.href=U;else if(!P||C||"a"===s.type&&!("href"in s.props)){var ee=void 0!==I?I:null==B?void 0:B.locale,et=(null==B?void 0:B.isLocaleDomain)&&(0,v.getDomainLocale)(U,ee,null==B?void 0:B.locales,null==B?void 0:B.domainLocales);$.href=et||(0,m.addBasePath)((0,d.addLocale)(U,ee,null==B?void 0:B.defaultLocale))}return P?i.default.cloneElement(s,$):i.default.createElement("a",r._({},D,$),n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5754);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});var o=n(959),a=n(7393),i="function"==typeof IntersectionObserver,c=new Map,l=[];function s(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!i,u=r._((0,o.useState)(!1),2),d=u[0],f=u[1],h=(0,o.useRef)(null),p=(0,o.useCallback)(function(e){h.current=e},[]);return(0,o.useEffect)(function(){if(i){if(!s&&!d){var e,r,o,u,p=h.current;if(p&&p.tagName)return r=(e=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=c.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),c.set(n,t),t}({root:null==t?void 0:t.current,rootMargin:n})).id,o=e.observer,(u=e.elements).set(p,function(e){return e&&f(e)}),o.observe(p),function(){if(u.delete(p),o.unobserve(p),0===u.size){o.disconnect(),c.delete(r);var e=l.findIndex(function(e){return e.root===r.root&&e.margin===r.margin});e>-1&&l.splice(e,1)}}}}else if(!d){var v=(0,a.requestIdleCallback)(function(){return f(!0)});return function(){return(0,a.cancelIdleCallback)(v)}}},[s,n,t,d,h.current]),[p,d,(0,o.useCallback)(function(){f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5166),o=n(8703);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return l},default:function(){return s}});var a=n(8266),i=(n(959),a._(n(3014)));function c(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}function s(e,t){var n=i.default,a={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof Promise?a.loader=function(){return e}:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r._({},a,e));var s=(a=r._({},a,t)).loader;return(a.loadableGenerated&&(a=r._({},a,a.loadableGenerated),delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?n(o._(r._({},a),{loader:function(){return null!=s?s().then(c):Promise.resolve(c(function(){return null}))}})):(delete a.webpack,delete a.modules,l(n,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});var r=n(8266)._(n(959)).default.createContext(null)},3014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7871),o=n(3232),a=n(5166),i=n(8703);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});var c=n(8266)._(n(959)),l=n(2278),s=[],u=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var h=function(){function e(t,n){r._(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o._(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=a._(i._(a._({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading}),e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=function(){if(!i){var t=new h(e,a);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=function(){n();var e=c.default.useContext(l.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(function(t){e(t)})},o=function(e,t){r();var n=c.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return c.default.useImperativeHandle(t,function(){return{retry:i.retry}},[]),c.default.useMemo(function(){var t;return n.loading||n.error?c.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:i.retry}):n.loaded?c.default.createElement((t=n.loaded)&&t.default?t.default:t,e):null},[e,n])},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;if(!d){var s=a.webpack?a.webpack():a.modules;s&&u.push(function(e){var t=!0,r=!1,o=void 0;try{for(var a,i=s[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var c=a.value;if(e.includes(c))return n()}}catch(e){r=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw o}}})}return o.preload=function(){return n()},o.displayName="LoadableComponent",c.default.forwardRef(o)}(f,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return v(e,t)})}p.preloadAll=function(){return new Promise(function(e,t){v(s).then(e,t)})},p.preloadReady=function(e){return void 0===e&&(e=[]),new Promise(function(t){var n=function(){return d=!0,t()};v(u,e).then(n,n)})},window.__NEXT_PRELOADREADY=p.preloadReady;var m=p},4614:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(5166),o=n(1527),a=n(6425),i=n.n(a),c=n(8925),l=n.n(c),s=n(5754),u=n(959),d=n(6998),f=n(1588),h=n(5938),p=n.n(h);function v(){var e=(0,s._)((0,u.useState)(!1),2),t=e[0],n=e[1];return(0,u.useEffect)(function(){window.addEventListener("scroll",function(){window.scrollY>0?n(!0):n(!1)})},[t]),(0,o.jsx)("div",{className:"".concat(p().btnScrollTop," ").concat(t?p().btnScrollTopActive:""),children:(0,o.jsx)("button",{type:"button",onClick:function(){n(!1),(0,f.VA)("header")},"aria-label":"Button Scroll Top",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{fill:"currentColor",d:"M6.7 14.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 8.425q.2 0 .388.075t.312.2l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275Z"})})})})}var m=n(6751),g=n.n(m),_=n(3934),b=n(2265),x=n.n(b);function y(e){var t=u.useRef(null),n=e.id,r=e.handleToggle,a=e.isChecked;return u.useEffect(function(){if(a){t&&t.current&&(t.current.checked=!0);return}t&&t.current&&(t.current.checked=!1)},[a]),(0,o.jsxs)("div",{className:x().checkboxIos,children:[(0,o.jsx)("input",{type:"checkbox",ref:t,id:"cbios-".concat(n),className:x().cbios,onChange:r}),(0,o.jsxs)("label",{htmlFor:"cbios-".concat(n),className:x().cbiosLabel,children:[(0,o.jsxs)("span",{className:x().btnToggleCircle,children:[(0,o.jsx)("span",{className:"".concat(x().btnCircle," ").concat(x().circle1)}),(0,o.jsx)("span",{className:"".concat(x().btnCircle," ").concat(x().circle2)}),(0,o.jsx)("span",{className:"".concat(x().btnCircle," ").concat(x().circle3)})]}),(0,o.jsx)("span",{className:"".concat(x().btnToggleStar," ").concat(x().star1)}),(0,o.jsx)("span",{className:"".concat(x().btnToggleStar," ").concat(x().star2)}),(0,o.jsx)("span",{className:"".concat(x().btnToggleStar," ").concat(x().star3)}),(0,o.jsx)("span",{className:"".concat(x().btnToggleStar," ").concat(x().star4)}),(0,o.jsx)("span",{className:"".concat(x().btnToggleStar," ").concat(x().star5)})]})]})}var j=n(5077),w=n(2999),k=n(4571),C=n.n(k),S=u.memo(function(e){var t=e.handleToggleDarkTheme,n=e.toggle,r=(0,_.useRouter)();return(0,o.jsx)("nav",{className:C().navBar,children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("ul",{className:C().navList,children:[(0,o.jsx)("li",{className:"".concat(C().navItem," ").concat(C().navItemLogo),onClick:function(){return r.push("/")},children:(0,o.jsx)(w.Z,{children:(0,o.jsx)(j.Z,{})})}),(0,o.jsx)("li",{className:C().navItem,children:(0,o.jsx)(g(),{href:"/projects","aria-label":"Projects",children:"Projects"})}),(0,o.jsx)("li",{className:C().navItem,children:(0,o.jsx)(g(),{href:"/blog","aria-label":"Blog",children:"Blog"})}),(0,o.jsx)("li",{className:C().navItem,children:(0,o.jsx)("a",{href:"https://github.com/hunghg255",target:"_blank",rel:"noreferrer","aria-label":"Github",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{fill:"currentColor",d:"M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377a5.39 5.39 0 0 0 .09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z"})})})}),(0,o.jsx)("li",{className:C().navItem,children:(0,o.jsx)("a",{href:"https://twitter.com/hunghg255",target:"_blank",rel:"noreferrer","aria-label":"Twitter",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 15 15",children:(0,o.jsx)("path",{fill:"currentColor",d:"m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z"})})})}),(0,o.jsx)("li",{className:C().navItem,children:(0,o.jsx)(g(),{href:"/sitemap-0.xml","aria-label":"RSS",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16",children:(0,o.jsxs)("g",{fill:"currentColor",children:[(0,o.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),(0,o.jsx)("path",{d:"M5.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0a8 8 0 0 0-8-8a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1a6 6 0 0 1 6 6a1 1 0 1 1-2 0a4 4 0 0 0-4-4a1 1 0 0 1-1-1z"})]})})})}),(0,o.jsx)("li",{className:C().navItem,children:(0,o.jsx)(y,{id:2,isChecked:n,handleToggle:t})})]})})})}),T=n(1411),N=n.n(T);function I(e){return(0,o.jsxs)("div",{className:"".concat(N().btnBurger," ").concat(e.isToggle?N().btnBurgerActive:""),onClick:e.toggle,children:[(0,o.jsx)("div",{className:N().btnBurgerLine}),(0,o.jsx)("div",{className:N().btnBurgerLine}),(0,o.jsx)("div",{className:N().btnBurgerLine})]})}var O=n(2865),E=n.n(O),M=u.memo(function(e){var t=e.toggle,n=e.handleToggleDarkTheme,r=(0,_.useRouter)(),a=(0,s._)((0,u.useState)(!1),2),i=a[0],c=a[1];return(0,u.useEffect)(function(){c(!1)},[r.pathname]),(0,u.useEffect)(function(){window.addEventListener("resize",function(){window.innerHeight>600&&c(!1)})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("nav",{className:"".concat(E().navSideDraw," ").concat(i?E().navSideDrawActive:""),children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("ul",{className:E().navSideDrawList,children:[(0,o.jsx)("li",{className:"".concat(E().navSideDrawItem," ").concat(E().navSideDrawLogo),onClick:function(){return r.push("/")},children:(0,o.jsx)(w.Z,{children:(0,o.jsx)(j.Z,{})})}),(0,o.jsx)("li",{className:E().navSideDrawItem,children:(0,o.jsx)(I,{isToggle:i,toggle:function(){c(!i)}})})]})})}),(0,o.jsxs)("div",{className:"".concat(E().navSide," ").concat(i?E().navSideActive:""),children:[(0,o.jsxs)("ul",{className:"Nav__side--list",children:[(0,o.jsx)("li",{className:E().navSideItem,children:(0,o.jsx)(g(),{href:"/projects","aria-label":"Projects",children:"Projects"})}),(0,o.jsx)("li",{className:E().navSideItem,children:(0,o.jsx)(g(),{href:"/blog","aria-label":"Blog",children:"Blog"})}),(0,o.jsx)("li",{className:E().navSideItem,children:(0,o.jsx)("a",{href:"https://github.com/hunghg255",target:"_blank",rel:"noreferrer","aria-label":"Github",children:"Github"})}),(0,o.jsx)("li",{className:E().navSideItem,children:(0,o.jsx)("a",{href:"https://twitter.com/hunghg255",target:"_blank",rel:"noreferrer","aria-label":"Github",children:"Twitter"})}),(0,o.jsx)("li",{className:E().navSideItem,children:(0,o.jsx)(g(),{href:"/sitemap-0.xml","aria-label":"RSS",children:"RSS"})})]}),(0,o.jsx)("div",{className:E().btnToggle,children:(0,o.jsx)(y,{id:1,isChecked:t,handleToggle:n})})]})]})});function A(e){var t=(0,s._)((0,u.useState)("dark"===(0,d.getCookie)("data-theme")),2),n=t[0],r=t[1];(0,u.useEffect)(function(){"dark"===(0,d.getCookie)("data-theme")&&(document.documentElement.dataset.theme="dark",r(!0))},[]);var a=function(e){(0,f.VF)(e.nativeEvent)};return(0,o.jsxs)("div",{className:"Wrapper",id:"header",children:[(0,o.jsx)(S,{handleToggleDarkTheme:a,toggle:n}),(0,o.jsx)(M,{handleToggleDarkTheme:a,toggle:n}),(0,o.jsx)("main",{children:e.children}),(0,o.jsx)(v,{})]})}n(3770);var P=i()(function(){return n.e(923).then(n.bind(n,2923))},{loadableGenerated:{webpack:function(){return[2923]}},ssr:!1}),D=i()(function(){return n.e(479).then(n.bind(n,4479))},{loadableGenerated:{webpack:function(){return[4479]}},ssr:!1}),L=i()(function(){return n.e(562).then(n.bind(n,5347))},{loadableGenerated:{webpack:function(){return[5347]}},ssr:!1}),R=i()(function(){return n.e(402).then(n.bind(n,1402))},{loadableGenerated:{webpack:function(){return[1402]}},ssr:!1}),B=i()(function(){return n.e(119).then(n.bind(n,119))},{loadableGenerated:{webpack:function(){return[119]}},ssr:!1}),Z=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("title",{children:"Hunghg | Front-end Developer"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,o.jsx)("meta",{name:"title",content:"Hunghg | Front-end Developer"}),(0,o.jsx)("meta",{name:"description",content:"I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"https://hunghg.vercel.app/"}),(0,o.jsx)("meta",{property:"og:title",content:"Hunghg | Front-end Developer"}),(0,o.jsx)("meta",{property:"og:description",content:"I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"}),(0,o.jsx)("meta",{property:"og:image",content:"https://cdn.jsdelivr.net/gh/hunghg255/static/og-img.png"}),(0,o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:url",content:"https://hunghg.vercel.app/"}),(0,o.jsx)("meta",{property:"twitter:title",content:"Hunghg | Front-end Developer"}),(0,o.jsx)("meta",{property:"twitter:description",content:"I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"}),(0,o.jsx)("meta",{property:"twitter:image",content:"https://cdn.jsdelivr.net/gh/hunghg255/static/og-img.png"}),(0,o.jsx)("meta",{property:"og:image:type",content:"image/jpeg"})]}),(0,o.jsx)(A,{children:(0,o.jsx)(t,(0,r._)({},n))}),(0,o.jsx)(P,{}),(0,o.jsx)(D,{}),(0,o.jsx)(L,{}),(0,o.jsx)(R,{}),(0,o.jsx)(B,{})]})}},5077:function(e,t,n){"use strict";var r=n(1527);n(959),t.Z=function(){return(0,r.jsx)("div",{className:"icon-logo",children:(0,r.jsxs)("svg",{viewBox:"0 0 304 304",width:60,fill:"none",children:[(0,r.jsx)("path",{className:"logo_circle__6ao4W",d:"M7 152C7 71.88 71.88 7 152 7c80.01 0 145 64.88 145 145 0 80.01-64.88 145-145 145C71.99 297 7 232.01 7 152Z",strokeWidth:14}),(0,r.jsx)("path",{className:"logo_letters__1_W2_",d:"M134.53 76v111.49a35.08 35.08 0 0 1-35.21 35.01C79.83 222.5 64 206.76 64 187.49c0-19.27 15.83-35.1 35.32-35.1h30.22l40.98.09h34.26c19.48 0 35.22-16.6 35.22-35.97a35.08 35.08 0 0 0-35.22-35.01c-19.48 0-35.22 15.74-35.22 35.01V229",strokeWidth:12})]})})}},2999:function(e,t,n){"use strict";var r=n(5754),o=n(1527),a=n(959),i=n(5631),c=n.n(i),l=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},s=["#4da1ff","#ffc24e","#59aa43","#ba53ff","#56acb8","#7764ed","#16d5ff","#00dfb7","#1d297f","#476055","#ee7420","#06c270","#ffb800","#ff3b3b"],u=function(){return s[Math.floor(Math.random()*s.length)]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC700";return{id:String(l(1e4,99999)),createdAt:Date.now(),color:e,size:l(15,30),style:{position:"absolute",top:l(0,100)+"%",left:l(0,100)+"%",zIndex:2}}},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];void 0===t&&(t=e,e=0);for(var o=e;o<t;o+=n)r.push(o);return r},h=function(e,t,n){var r=a.useRef(null),o=a.useRef(e);return a.useEffect(function(){o.current=e},[e]),a.useEffect(function(){if("number"==typeof t&&"number"==typeof n){var e=function(){var a=l(t,n);r.current=window.setTimeout(function(){o.current(),e()},a)};e()}return function(){return window.clearTimeout(r.current)}},[t,n]),a.useCallback(function(){window.clearTimeout(r.current)},[])};function p(e){var t=e.color,n=e.size,r=e.style;return(0,o.jsx)("span",{className:c().svgWrap,style:r,children:(0,o.jsx)("svg",{width:n,height:n,viewBox:"0 0 68 68",fill:"none",style:r,className:c().svg,children:(0,o.jsx)("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:t})})})}t.Z=function(e){var t=e.children,n=(0,r._)(a.useState(function(){return f(0,3).map(function(){return d(u())})}),2),i=n[0],c=n[1];return h(function(){var e=Date.now(),t=d(u()),n=i.filter(function(t){return e-t.createdAt<1e3});n.push(t),c(n)},50,500),(0,o.jsxs)("span",{style:{position:"relative",display:"inline-block"},children:[i.map(function(e){return(0,o.jsx)(p,{color:e.color,size:e.size,style:e.style},e.id)}),(0,o.jsx)("strong",{style:{position:"relative",zIndex:1,fontWeight:"bold"},children:t})]})}},1588:function(e,t,n){"use strict";n.d(t,{Tj:function(){return c},VA:function(){return i},VF:function(){return l}});var r=n(2057),o=n(6998),a=function(e){var t=e.getBoundingClientRect().top-40,n=window.pageYOffset,r=0;requestAnimationFrame(function e(o){r||(r=o);var a=o-r;window.scrollTo(0,-t/2*(Math.cos(Math.PI*a/500)-1)+n),a<500&&requestAnimationFrame(e)})},i=function(e){var t=document.querySelector("#".concat(e));t&&a(t)};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return[e+n*Math.cos(r),t+n*Math.sin(r)]}function l(e){var t=document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,n="dark"===(0,o.getCookie)("data-theme"),a=function(){!1===n?(null==localStorage||localStorage.setItem("data-theme","dark"),(0,o.setCookie)("data-theme","dark",{maxAge:2147483647}),document.documentElement.dataset.theme="dark"):((0,o.setCookie)("data-theme","light",{maxAge:2147483647}),delete document.documentElement.dataset.theme)};if(!t){a();return}var i=e.clientX,c=e.clientY,l=Math.hypot(Math.max(i,innerWidth-i),Math.max(c,innerHeight-c));document.startViewTransition(a).ready.then(function(){var e=["circle(0px at ".concat(i,"px ").concat(c,"px)"),"circle(".concat(l,"px at ").concat(i,"px ").concat(c,"px)")];document.documentElement.animate({clipPath:n?e:(0,r._)(e).reverse()},{duration:400,easing:"ease-out",pseudoElement:n?"::view-transition-new(root)":"::view-transition-old(root)"})})}},3770:function(){},1411:function(e){e.exports={btnBurger:"ButtonBurger_btnBurger__izZJ4",btnBurgerLine:"ButtonBurger_btnBurgerLine__6wfzH",btnBurgerActive:"ButtonBurger_btnBurgerActive__6iVwG"}},2265:function(e){e.exports={checkboxIos:"CheckboxIos_checkboxIos__jpLKA",cbios:"CheckboxIos_cbios__hcuCl",cbiosLabel:"CheckboxIos_cbiosLabel__nv728",btnToggleCircle:"CheckboxIos_btnToggleCircle__rNEGr",btnCircle:"CheckboxIos_btnCircle__EMWxa",circle1:"CheckboxIos_circle1__MxklN",circle2:"CheckboxIos_circle2__XItVC",circle3:"CheckboxIos_circle3__IMgsu",btnToggleStar:"CheckboxIos_btnToggleStar__7AK5y",star1:"CheckboxIos_star1__11ScE",star2:"CheckboxIos_star2__aZWUu",star3:"CheckboxIos_star3__x4zQX",star4:"CheckboxIos_star4__pQU4z",star5:"CheckboxIos_star5__PQOGK",star6:"CheckboxIos_star6__NzsM_"}},5631:function(e){e.exports={svg:"Sparkles_svg__Tz5Nx",spin:"Sparkles_spin__zV_LX",svgWrap:"Sparkles_svgWrap__HzKAz",comeInOut:"Sparkles_comeInOut__5hm3c"}},5938:function(e){e.exports={btnScrollTop:"ButtonScrollTop_btnScrollTop__U59uG",btnScrollTopActive:"ButtonScrollTop_btnScrollTopActive__rINpS"}},4571:function(e){e.exports={navBar:"Navbar_navBar__h81mJ",navList:"Navbar_navList__YpOkh",navItemLogo:"Navbar_navItemLogo__iWnXn",navItem:"Navbar_navItem__Vns02"}},2865:function(e){e.exports={navSideDraw:"SideDraw_navSideDraw__fN7x7",navSideDrawActive:"SideDraw_navSideDrawActive__ZqOfJ",navSideDrawList:"SideDraw_navSideDrawList__7dW_Q",navSideDrawLogo:"SideDraw_navSideDrawLogo__OjlDj",navSide:"SideDraw_navSide__uONzf",navSideActive:"SideDraw_navSideActive__DQVCh",navSideItem:"SideDraw_navSideItem__LAHJd",btnToggle:"SideDraw_btnToggle__vSAku"}},6425:function(e,t,n){e.exports=n(3222)},8925:function(e,t,n){e.exports=n(7830)},6751:function(e,t,n){e.exports=n(1943)},3934:function(e,t,n){e.exports=n(1300)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(8166),t(1300)}),_N_E=e.O()}]);