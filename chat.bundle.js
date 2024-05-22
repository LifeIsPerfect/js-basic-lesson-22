(()=>{"use strict";var n={631:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),a=t.n(r),o=t(314),s=t.n(o)()(a());s.push([n.id,".chat-message {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n\n  border-radius: 12px;\n  border: 2px solid black;\n  padding: 5px;\n\n  background-color: aliceblue;\n\n  flex-grow: 0;\n}\n\n.chat-message__header {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n\n  align-items: center;\n}\n\n.chat-message__author-img {\n  flex-shrink: 0;\n\n  border: 2px solid black;\n\n  width: 40px;\n\n  background-color: aquamarine;\n}\n.chat-message__author-name {\n  font-size: 18px;\n  width: 100%;\n  flex-shrink: 1;\n}\n\n.chat-message__footer {\n  text-align: right;\n}\n",""]);const i=s},261:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),a=t.n(r),o=t(314),s=t.n(o)()(a());s.push([n.id,".chat-messages-outter {\n  flex-direction: column;\n  display: flex;\n  overflow: auto;\n}\n\n.chat-messages {\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  gap: 10px;\n\n  align-items: start;\n  min-height: min-content;\n}\n\n.chat-messages__element {\n  flex-shrink: 1;\n\n  max-width: 300px;\n}\n",""]);const i=s},317:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),a=t.n(r),o=t(314),s=t.n(o)()(a());s.push([n.id,".chat-new-message-block {\n  height: 70px;\n\n  display: flex;\n  justify-content: space-between;\n  gap: 5px;\n\n  border-top: 2px solid black;\n  padding: 5px;\n}\n\n.chat-new-message-block__send-button {\n  height: 100%;\n  aspect-ratio: 1 / 1;\n}\n\n.chat-new-message-block__send-button-outter {\n  display: flex;\n  direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.chat-new-message-block__send-button {\n  border-radius: 12px;\n}\n\n.chat-new-message-block__message-text {\n  border-radius: 12px;\n  width: 100%;\n}\n",""]);const i=s},9:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),a=t.n(r),o=t(314),s=t.n(o)()(a());s.push([n.id,".chat-title {\n  height: 80px;\n\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  justify-content: space-between;\n  align-items: center;\n\n  border-bottom: 2px solid black;\n  padding: 5px;\n}\n\n.chat-title__image {\n  border: 2px solid black;\n  width: 60px;\n  background-color: yellow;\n}\n\n.chat-title__name {\n  font-size: 24px;\n}\n.chat-title__info {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  justify-content: center;\n}\n",""]);const i=s},639:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),a=t.n(r),o=t(314),s=t.n(o)()(a());s.push([n.id,".user-or-chat-image {\n  aspect-ratio: 1 / 1;\n  border-radius: 50%;\n}\n",""]);const i=s},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},s=[],i=0;i<n.length;i++){var c=n[i],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var i=t(o[s]);e[i].references--}for(var c=r(n,a),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),a=t.n(r),o=t(659),s=t.n(o),i=t(56),c=t.n(i),l=t(540),d=t.n(l),u=t(113),p=t.n(u),f=t(9),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;var h=t(317),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),e()(h.A,g),h.A&&h.A.locals&&h.A.locals;var x=t(261),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d(),e()(x.A,v),x.A&&x.A.locals&&x.A.locals;var b=t(639),y={};y.styleTagTransform=p(),y.setAttributes=c(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=d(),e()(b.A,y),b.A&&b.A.locals&&b.A.locals;var A=t(631),w={};w.styleTagTransform=p(),w.setAttributes=c(),w.insert=s().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=d(),e()(A.A,w),A.A&&A.A.locals&&A.A.locals,console.log("Chat test")})()})();