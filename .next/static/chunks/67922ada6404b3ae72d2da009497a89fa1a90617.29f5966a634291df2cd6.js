(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"7/uR":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("nKUr"),a=n("8Kt/"),o=n.n(a),c=n("YFqc"),i=n.n(c),s=n("nOHt");n("GZFD");function u(e){var t="barLine set--";return t+=e.split("/")[1]}function l(e){var t=Object(s.useRouter)();return Object(r.jsxs)("nav",{className:"NavbarItems",children:[Object(r.jsx)("span",{className:"nav_logo"}),Object(r.jsx)("input",{type:"checkbox",className:"menuBtn",id:"menuBtn"}),Object(r.jsx)("label",{className:"menuIcon",htmlFor:"menuBtn",children:Object(r.jsx)("span",{className:"bars"})}),Object(r.jsxs)("ul",{className:"nav_link",children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/news",children:"Noticias"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/artists",children:"Artistas"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"potcast",children:"Podcasts"})}),Object(r.jsx)("li",{className:u(t.pathname),id:"lineNav"})]})]})}var f=[{social:"Twitter",url:"https://twitter.com/CosmereLatam",cName:"tw",cIcon:"tw_icon"},{social:"Facebook",url:"https://www.facebook.com/cosmerelatam",cName:"fb",cIcon:"fb_icon"},{social:"Instagram",url:"https://www.instagram.com/cosmerelatam/",cName:"ig",cIcon:"ig_icon"},{social:"Discord",url:"#",cName:"dc",cIcon:"dc_icon"},{social:"Youtube",url:"https://www.youtube.com/channel/UCjnXHtHI0L4rfvTWccLuebQ",cName:"yt",cIcon:"yt_icon"}];n("t25L");function d(e){return Object(r.jsx)("section",{className:"Footer",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("ul",{className:"social",children:f.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.url,className:e.cName,target:"_blank",rel:"noopener",children:Object(r.jsx)("div",{className:e.cIcon})})},t)}))}),Object(r.jsx)("hr",{className:"line_1"}),Object(r.jsx)("p",{className:"copyright",children:"\xa92020 dise\xf1ado y programado por Neodoom Xardax."})]})})}function p(e){return Object(r.jsxs)("main",{children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("meta",{charSet:"UTF-8"}),Object(r.jsx)("meta",{"http-equiv":"content-type",content:"charset=UTF-8"}),Object(r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),Object(r.jsx)("title",{children:"Cosmere-latam"}),Object(r.jsx)("meta",{name:"description",content:"Web del fandom de Brandon Sanderson en latinoamerica."}),Object(r.jsx)("meta",{name:"Keywords",content:"cosmere; cosmere latam; latinoamerica; fandom; brandon; sanderson; fanderson; mistbotn; nacidos de la bruma; stormlight archive; archivo de las tormentas; warbreker; el aliento de los dioces"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.png"}),Object(r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),Object(r.jsx)("meta",{name:"theme-color",content:"#317EFB"}),Object(r.jsx)("link",{rel:"apple-touch-icon",href:"/images/icon.png"})]}),Object(r.jsx)(l,{}),e.children,Object(r.jsx)(d,{})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,s=d.length;i<s;i++){var u=d[i];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],f=r[u]||new Set;f.has(l)?o=!1:(f.add(l),r[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},GZFD:function(e,t,n){},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,c=a(n("q1tI")),i=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),a=r(n,2),o=a[0],u=a[1],h=(0,s.useRouter)(),m=h&&h.pathname||"/",b=c.default.useMemo((function(){var t=(0,i.resolveHref)(m,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,i.resolveHref)(m,e.as):o||a}}),[m,e.href,e.as]),v=b.href,j=b.as;c.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,i.isLocalURL)(v)&&!f[v+"%"+j])return d(o,(function(){p(h,v,j)}))}),[t,o,v,j,h]);var y=e.children,x=e.replace,g=e.shallow,O=e.scroll;"string"===typeof y&&(y=c.default.createElement("a",null,y));var w=c.Children.only(y),_={ref:function(e){e&&u(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,v,j,x,g,O)}};return t&&(_.onMouseEnter=function(e){(0,i.isLocalURL)(v)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),p(h,v,j,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(_.href=(0,i.addBasePath)((0,i.addLocale)(j,h&&h.locale,h&&h.defaultLocale))),c.default.cloneElement(w,_)};t.default=h},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},t25L:function(e,t,n){}}]);