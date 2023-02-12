(()=>{"use strict";var e={417:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,".centeredOverlay {\n  width: 100vw;\n  height: 100vh;\n\n  position: absolute;\n  top: 0;\n\n  display: grid;\n  place-items: center;\n\n  background-color: rgba(0, 0, 0, 0.5);\n\n  transition: opacity 500ms ease-in-out;\n}\n\n.centeredOverlay.hidden {\n  opacity: 0;\n}",""]);const s=i},534:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,".basicForm {\n  padding: 1rem;\n\n  background-color: aliceblue;\n  border: 2px solid black;\n  border-radius: 15px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.buttonsRow {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n}\n\n.formRow {\n  display: flex;\n  flex-direction: column;\n}\n\n.basicForm label,\n.basicForm input,\n.basicForm button {\n  font-size: 0.6rem;\n  padding: 0.2rem;\n}\n\n.basicForm input:valid {\n  background-color: none;\n}\n\n.basicForm input:invalid {\n  background-color: pink;\n}",""]);const s=i},426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,":root {\n  box-sizing: border-box;\n\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 2rem;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n\n  display: grid;\n  place-items: center;\n  background-color: pink;\n}\n\nbutton {\n  font-size: 0.6rem;\n  padding: 0.2rem;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=t(417),b={};function h(e){e.classList.add("hidden"),e.addEventListener("transitionend",(()=>e.remove()))}b.styleTagTransform=p(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),n()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var y=t(534),g={};function x(e,n,t){let r=document.createElement("div");r.classList.add("formRow"),e.appendChild(r);let o=document.createElement("label");return o.innerText=n,o.for=t.id,r.appendChild(o),r.appendChild(t),r}function E(e){let n=document.createElement("input");return n.type=e,n}function C(e,n){let t=document.createElement("button");return t.type=n,t.innerText=e,t}g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals;const w=document.querySelector("body");let Z=C("Show Form","button");w.appendChild(Z),Z.addEventListener("click",(e=>{e.preventDefault(),function(e){let n=function(e){let n=document.createElement("div");return n.classList.add("centeredOverlay","hidden"),e.appendChild(n),n.addEventListener("click",(e=>{e.target===n&&h(n)})),n}(e),t=function(e){let n=document.createElement("form");return n.classList.add("basicForm"),e.appendChild(n),n}(n);x(t,"Email",E("email")),x(t,"Country",E("text"));let r=E("text");r.pattern="[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}",x(t,"Postcode",r),x(t,"Password",E("password")),x(t,"Confirm password",E("password")),function(e,t,r){let o=document.createElement("div");o.classList.add("buttonsRow"),e.appendChild(o);let a=C("Cancel","button");a.type="button",a.addEventListener("click",(e=>{e.preventDefault(),h(n)})),o.appendChild(a);let i=C("Submit","submit");i.type="submit",i.addEventListener("click",(e=>{e.preventDefault()})),o.appendChild(i)}(t),function(e){setTimeout((()=>{e.classList.remove("hidden")}),5)}(n)}(w)}))})()})();