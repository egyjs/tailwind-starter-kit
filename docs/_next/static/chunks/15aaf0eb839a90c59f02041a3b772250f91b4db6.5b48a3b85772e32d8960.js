(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"33yf":function(e,r,t){(function(e){function t(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}function n(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}r.resolve=function(){for(var r="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var u=i>=0?arguments[i]:e.cwd();if("string"!==typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(r=u+"/"+r,o="/"===u.charAt(0))}return(o?"/":"")+(r=t(n(r.split("/"),(function(e){return!!e})),!o).join("/"))||"."},r.normalize=function(e){var i=r.isAbsolute(e),u="/"===o(e,-1);return(e=t(n(e.split("/"),(function(e){return!!e})),!i).join("/"))||i||(e="."),e&&u&&(e+="/"),(i?"/":"")+e},r.isAbsolute=function(e){return"/"===e.charAt(0)},r.join=function(){var e=Array.prototype.slice.call(arguments,0);return r.normalize(n(e,(function(e,r){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},r.relative=function(e,t){function n(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=r.resolve(e).substr(1),t=r.resolve(t).substr(1);for(var o=n(e.split("/")),i=n(t.split("/")),u=Math.min(o.length,i.length),c=u,a=0;a<u;a++)if(o[a]!==i[a]){c=a;break}var l=[];for(a=c;a<o.length;a++)l.push("..");return(l=l.concat(i.slice(c))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var r=e.charCodeAt(0),t=47===r,n=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(r=e.charCodeAt(i))){if(!o){n=i;break}}else o=!1;return-1===n?t?"/":".":t&&1===n?"/":e.slice(0,n)},r.basename=function(e,r){var t=function(e){"string"!==typeof e&&(e+="");var r,t=0,n=-1,o=!0;for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!o){t=r+1;break}}else-1===n&&(o=!1,n=r+1);return-1===n?"":e.slice(t,n)}(e);return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t},r.extname=function(e){"string"!==typeof e&&(e+="");for(var r=-1,t=0,n=-1,o=!0,i=0,u=e.length-1;u>=0;--u){var c=e.charCodeAt(u);if(47!==c)-1===n&&(o=!1,n=u+1),46===c?-1===r?r=u:1!==i&&(i=1):-1!==r&&(i=-1);else if(!o){t=u+1;break}}return-1===r||-1===n||0===i||1===i&&r===n-1&&r===t+1?"":e.slice(r,n)};var o="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)}}).call(this,t("8oxB"))},"7ljp":function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return v}));var n=t("q1tI"),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"===typeof e?e(r):c({},r,{},e)),t},f=function(e){var r=s(e.components);return(o.a.createElement(l.Provider,{value:r},e.children))},p="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(t),p=n,m=f["".concat(u,".").concat(p)]||f[p]||h[p]||i;return t?o.a.createElement(m,c({ref:r},l,{components:t})):o.a.createElement(m,c({ref:r},l))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"===typeof e||n){var i=t.length,u=new Array(i);u[0]=m;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c[p]="string"===typeof e?e:n,u[1]=c;for(var l=2;l<i;l++)u[l]=t[l];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},"8oxB":function(e,r){var t,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var a,l=[],s=!1,f=-1;function p(){s&&a&&(s=!1,a.length?l=a.concat(l):f=-1,l.length&&h())}function h(){if(!s){var e=c(p);s=!0;for(var r=l.length;r;){for(a=l,l=[];++f<r;)a&&a[f].run();f=-1,r=l.length}a=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function m(e,r){this.fun=e,this.array=r}function v(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];l.push(new m(e,r)),1!==l.length||s||c(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},Ff2n:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(r,"a",(function(){return n}))},j1un:function(e,r,t){"use strict";var n=t("q1tI"),o=t.n(n),i=t("Y038"),u=t("62q6"),c=t("0SXV"),a=t("33yf"),l=t.n(a),s=o.a.createElement;function f(e){return l.a.basename(e.__resourcePath,l.a.extname(e.__resourcePath))}r.a=function(e){return function(r){var t=r.children,o=Object(n.useState)(!1),a=o[0],l=o[1],p=a?"fixed max-w-full min-h-screen overflow-hidden lg:relative lg:w-3/4 xl:w-3/5 xl:pl-12 markdown mb-16":"max-w-full lg:relative lg:w-3/4 xl:w-3/5 xl:pl-12 markdown mb-16";return s("div",{className:"w-full px-6 mx-auto sm:max-w-screen-sm lg:max-w-screen-xl"},s(c.a,{title:e.title,url:"docs/".concat(f(e))}),s(i.a,{isOpen:a,setIsOpen:l}),s("div",{className:"flex mt-24"},s(u.a,{isOpen:a}),s("div",{className:p},t)))}}},wx14:function(e,r,t){"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,"a",(function(){return n}))}}]);