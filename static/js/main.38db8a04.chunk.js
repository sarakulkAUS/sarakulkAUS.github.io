/*! For license information please see main.38db8a04.chunk.js.LICENSE.txt */
(this["webpackJsonpaem-guides-wknd-app"]=this["webpackJsonpaem-guides-wknd-app"]||[]).push([[0],{100:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(41),i=r.n(o),c=r(8),l=r(1),u=r(14),s=r(17),m=r.n(s),d=r(31),p=r.n(d),f=r(18),v=r(19),h=r(21),E=r(20),y=function(e){Object(h.a)(r,e);var t=Object(E.a)(r);function r(){return Object(f.a)(this,r),t.apply(this,arguments)}return Object(v.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"error"},a.a.createElement("span",{className:"error-message"},"Error: ".concat(this.props.errorMessage)))}}]),r}(n.Component),g=r(42),b=r.n(g),_=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URI,O=function(e){Object(h.a)(r,e);var t=Object(E.a)(r);function r(){return Object(f.a)(this,r),t.apply(this,arguments)}return Object(v.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"loading"},a.a.createElement("img",{src:_+"/"+b.a,alt:"Loading..."}))}}]),r}(n.Component);r(11);r(54);var T=r(15),w=r(55).AEMHeadless,x=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}),L=x.REACT_APP_HOST_URI,P=x.REACT_APP_GRAPHQL_ENDPOINT,N=x.REACT_APP_USE_PROXY,S=x.REACT_APP_AUTH_METHOD,j=x.REACT_APP_DEV_TOKEN,C=x.REACT_APP_BASIC_AUTH_USER,A=x.REACT_APP_BASIC_AUTH_PASS,k=new w({serviceURL:"true"===N?"/":L,endpoint:P,auth:"basic"===S?[C,A]:"dev-token"===S?j:void 0}),I=function(e){return e.map((function(e){return e.message})).join(",")};function R(){R=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new T(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var s={};function m(){}function d(){}function p(){}var f={};c(f,a,(function(){return this}));var v=Object.getPrototypeOf,h=v&&v(v(w([])));h&&h!==t&&r.call(h,a)&&(f=h);var E=p.prototype=m.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function w(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=p,c(E,"constructor",p),c(p,"constructor",d),d.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(g.prototype),c(g.prototype,o,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new g(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(E),c(E,i,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=w,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:w(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var M=function(){var e=Object(T.a)(R().mark((function e(){return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",D("wknd-app/adventures-all"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(T.a)(R().mark((function e(t){var r;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={activity:t},e.abrupt("return",D("wknd-app/adventures-by-activity",r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(T.a)(R().mark((function e(t){var r;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={adventurePath:t},e.abrupt("return",D("wknd-app/adventure-by-path",r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(T.a)(R().mark((function e(t,r){var n,a,o;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.runPersistedQuery(t,r);case 3:o=e.sent,n=o.data,a=o.errors?I(o.errors):void 0,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.toJSON()),a=e.t0;case 12:return e.abrupt("return",{data:n,errors:a});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),B=r(2),V="wcm/foundation/components/responsivegrid",K={emptyLabel:"Layout Container",isEmpty:function(e){return null==e.cqItemsOrder||0===e.cqItemsOrder.length},resourceType:V};Object(B.MapTo)(V)(B.ResponsiveGrid,K);var G=Object(B.withMappable)(B.ResponsiveGrid,K),W=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URI;function F(e){var t=e._path,r=e.title,n=e.primaryImage,o=e.activity,i=e.adventureType,c=e.tripLength,l=e.groupSize,u=e.difficulty,s=e.price,d=e.description,f=e.itinerary,v=(e.contributor,e.history),h=t.split("/").pop();return a.a.createElement("div",{className:"adventure-detail"},a.a.createElement("button",{className:"adventure-detail-close-button",onClick:function(){return v.goBack()}},a.a.createElement("img",{className:"Backbutton-icon",src:W+"/"+p.a,alt:"Return"})),a.a.createElement("h1",{className:"adventure-detail-title"},r),a.a.createElement("div",{className:"adventure-detail-info"},a.a.createElement("div",{className:"adventure-detail-info-label"},"Activity"),a.a.createElement("div",{className:"adventure-detail-info-description"},o),a.a.createElement("div",{className:"adventure-detail-info-label"},"Type"),a.a.createElement("div",{className:"adventure-detail-info-description"},i),a.a.createElement("div",{className:"adventure-detail-info-label"},"Trip Length"),a.a.createElement("div",{className:"adventure-detail-info-description"},c),a.a.createElement("div",{className:"adventure-detail-info-label"},"Group Size"),a.a.createElement("div",{className:"adventure-detail-info-description"},l),a.a.createElement("div",{className:"adventure-detail-info-label"},"Difficulty"),a.a.createElement("div",{className:"adventure-detail-info-description"},u),a.a.createElement("div",{className:"adventure-detail-info-label"},"Price"),a.a.createElement("div",{className:"adventure-detail-info-description"},a.a.createElement(m.a,{value:s,displayType:"text",thousandSeparator:!0,prefix:"$"}))),a.a.createElement("div",{className:"adventure-detail-content"},a.a.createElement("img",{className:"adventure-detail-primaryimage",src:n._path,alt:r}),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.html}}),a.a.createElement(G,{pagePath:"/content/wknd-app/us/en/home/adventure/".concat(h),itemPath:"root/responsivegrid"}),a.a.createElement("h2",null,"Itinerary"),a.a.createElement("hr",null),a.a.createElement("div",{className:"adventure-detail-itinerary",dangerouslySetInnerHTML:{__html:f.html}})))}function z(){return a.a.createElement("div",{className:"adventure-detail"},a.a.createElement(c.Link,{className:"adventure-detail-close-button",to:"/"},a.a.createElement("img",{className:"Backbutton-icon",src:W+"/"+p.a,alt:"Return"})),a.a.createElement(y,{errorMessage:"Missing data, adventure could not be rendered."}))}var J=function(){var e=Object(l.l)().pathname.substring("/adventure:".length),t=Object(l.k)(),r=Object(n.useState)(),o=Object(u.a)(r,2),i=o[0],c=o[1];if(Object(n.useEffect)((function(){c(),U(e).then((function(e){return c(e)}))}),[e]),!i)return a.a.createElement(O,null);if(i&&i.errors)return a.a.createElement(y,{errorMessage:i.errors});var s=function(e){if(e&&e.data&&e.data.adventureByPath&&e.data.adventureByPath.item)return e.data.adventureByPath.item;return}(i);return s?a.a.createElement(F,Object.assign({},s,{history:t})):a.a.createElement(z,null)};r(97);function Y(e){var t=e.title,r=e._path,n=e.primaryImage,o=e.tripLength,i=e.price;return t&&r&&n?a.a.createElement("li",{className:"adventure-item"},a.a.createElement(c.Link,{to:"/adventure:".concat(r)},a.a.createElement("img",{className:"adventure-item-image",src:n._path,alt:t})),a.a.createElement("div",{className:"adventure-item-length-price"},a.a.createElement("div",{className:"adventure-item-length"},o),a.a.createElement("div",{className:"adventure-item-price"},a.a.createElement(m.a,{value:i,displayType:"text",thousandSeparator:!0,prefix:"$"}))),a.a.createElement("div",{className:"adventure-item-title"},t)):null}var q=function(e){var t=e.adventureActivity,r=Object(n.useState)(),o=Object(u.a)(r,2),i=o[0],c=o[1];return Object(n.useEffect)((function(){c(),t&&""!==t?H(t).then((function(e){return c(e)})):M().then((function(e){return c(e)}))}),[t]),i?i&&i.errors?a.a.createElement(y,{errorMessage:i.errors}):a.a.createElement("div",{className:"adventures"},a.a.createElement("ul",{className:"adventure-items"},i.data.adventureList.items.map((function(e){return a.a.createElement(Y,Object.assign({key:e.slug},e))})))):a.a.createElement(O,null)},Q=r(7),$={emptyLabel:"Title",isEmpty:Q.TitleV2IsEmptyFn,resourceType:"foxtelremotespademo/components/title"};Object(B.MapTo)("foxtelremotespademo/components/title")(Q.TitleV2,$);var X=Object(B.withMappable)(Q.TitleV2,$),Z={emptyLabel:"Text",isEmpty:Q.TextV2IsEmptyFn,resourceType:"foxtelremotespademo/components/text"};Object(B.MapTo)("foxtelremotespademo/components/text")(Q.TextV2,Z);Object(B.withMappable)(Q.TextV2,Z),r(98);var ee={emptyLabel:"Image",isEmpty:Q.ImageV2IsEmptyFn,resourceType:"foxtelremotespademo/components/image"};Object(B.MapTo)("foxtelremotespademo/components/image")(Q.ImageV2,ee);Object(B.withMappable)(Q.ImageV2,ee);var te={emptyLabel:"Edit HTML",isEmpty:function(e){return!e||!e.html||e.html.trim().length<1},resourceType:"foxtelremotespademo/components/htmlContainer"},re=function(e){var t=e.html;return a.a.createElement("div",{class:"AEM-html",dangerouslySetInnerHTML:{__html:t}})},ne=re;Object(B.MapTo)("foxtelremotespademo/components/htmlContainer")(re,te);Object(B.withMappable)(re,te);var ae={emptyLabel:"Edit Content Tile",isEmpty:function(e){return!e},resourceType:"foxtelremotespademo/components/contenttile"},oe=function(e){var t=e.fileReference,r=e.titleText,n=e.rteText,o=e.buttonLabel,i=e.link;return a.a.createElement("div",{className:"aemContentTile"},a.a.createElement("h3",null,r),a.a.createElement("div",{class:"img"},a.a.createElement("img",{src:t,width:"100%",height:"300px"})),a.a.createElement("hr",null),a.a.createElement("div",{class:"desc"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})),a.a.createElement("div",{class:"btn-label"},a.a.createElement("button",{link:i},o)),a.a.createElement("hr",null))},ie=oe;Object(B.MapTo)("foxtelremotespademo/components/contenttile")(oe,ae);Object(B.withMappable)(oe,ae);var ce=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],o=t[1];return a.a.createElement("div",{className:"Home"},a.a.createElement(G,{pagePath:"/content/foxtelremotespademo/us/en/home",itemPath:"root/responsivegrid"}),a.a.createElement(X,{pagePath:"/content/foxtelremotespademo/us/en/home",itemPath:"root/title"}),a.a.createElement(ne,{pagePath:"/content/foxtelremotespademo/us/en/home",itemPath:"root/htmlContainer"}),a.a.createElement(ie,{pagePath:"/content/foxtelremotespademo/us/en/home",itemPath:"root/contenttile"}),a.a.createElement("div",{className:"adventure-nav"},a.a.createElement("button",{onClick:function(){return o("")}},"All"),a.a.createElement("button",{onClick:function(){return o("Camping")}},"Camping"),a.a.createElement("button",{onClick:function(){return o("Surfing")}},"Surfing")),a.a.createElement(q,{adventureActivity:r}))},le=r(45),ue=r.n(le),se=(r(99),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URI);var me=function(){return a.a.createElement(c.BrowserRouter,null,a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement(c.Link,{to:"/"},a.a.createElement("img",{src:se+"/"+ue.a,className:"logo",alt:"Foxtel Logo"})),a.a.createElement("hr",null)),a.a.createElement(l.g,null,a.a.createElement(l.d,{path:"/adventure:path"},a.a.createElement(J,null)),a.a.createElement(l.d,{path:"/"},a.a.createElement(ce,null)))))};r(30).ModelManager.initializeAsync(),i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(me,null)),document.getElementById("root"))},31:function(e,t,r){e.exports=r.p+"static/media/icon-close.f227c489.svg"},42:function(e,t,r){e.exports=r.p+"static/media/icon-loading.c507a81b.svg"},45:function(e,t,r){e.exports=r.p+"static/media/foxtel.17260a1f.svg"},46:function(e,t,r){e.exports=r(100)},54:function(e,t,r){},97:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){}},[[46,1,2]]]);
//# sourceMappingURL=main.38db8a04.chunk.js.map