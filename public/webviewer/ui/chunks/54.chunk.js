(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1514:function(e,t,n){var o=n(30),a=n(1515);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const o=[];return n.querySelectorAll(t).forEach(e=>o.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&o.push(...e(t,n.shadowRoot))}),o}("apryse-webviewer"));const n=[];for(let o=0;o<t.length;o++){const a=t[o];if(0===o)a.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);a.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};o(a,r);e.exports=a.locals||{}},1515:function(e,t,n){(t=e.exports=n(31)(!1)).push([e.i,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.BookmarksPanel{display:flex;flex-direction:column;flex:1;font-size:var(--font-size-default)}.BookmarksPanel .bookmark-switch{-webkit-font-smoothing:antialiased;margin-top:var(--padding-medium);padding-left:4px}.BookmarksPanel .bookmark-outline-single-container{margin-top:var(--padding-medium)}.BookmarksPanel .msg-no-bookmark-outline{margin-top:var(--padding)}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1562:function(e,t,n){"use strict";n.r(t);n(40),n(33),n(127),n(23),n(8),n(24),n(45),n(51),n(32),n(34),n(87),n(19),n(12),n(14),n(13),n(9),n(10),n(11),n(16),n(15),n(20),n(17),n(26),n(27),n(25),n(22);var o=n(0),a=n.n(o),r=n(6),i=n(409),l=(n(143),n(82),n(18)),c=n.n(l),u=n(1),m=n(4),s=n.n(m),d=n(49),b=n(69),f=n(1412),p=n(207);n(1389);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,r,i,l=[],c=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=r.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var h={text:s.a.string.isRequired,label:s.a.string.isRequired,defaultLabel:s.a.string,pageIndex:s.a.number.isRequired,isAdding:s.a.bool,isMultiSelectionMode:s.a.bool,setSelected:s.a.func,onSave:s.a.func.isRequired,onRemove:s.a.func,onCancel:s.a.func,panelSelector:s.a.string},g=function(e){var t=e.text,n=e.label,r=e.defaultLabel,l=e.pageIndex,m=e.isAdding,s=e.isMultiSelectionMode,y=e.setSelected,h=e.onSave,g=e.onRemove,v=e.onCancel,E=e.panelSelector,w=k(Object(i.a)(),1)[0],S=k(Object(o.useState)(!1),2),x=S[0],O=S[1],A=k(Object(o.useState)(!1),2),C=A[0],N=A[1],j=k(Object(o.useState)(t),2),T=j[0],B=j[1],I=k(Object(o.useState)(!1),2),P=I[0],R=I[1],M=k(Object(o.useState)(void 0),2),_=M[0],D=M[1],K=Object(o.useRef)(),L=function(){return!T||t===T},H=function(){O(!1),h(""===T.trim()?w("message.untitled"):T)},U=function(){O(!1),x&&B(t),m&&v()},W=function(e){u.a.setCurrentPage(e+1)};return Object(o.useEffect)((function(){T!==t&&B(t)}),[t]),Object(o.useEffect)((function(){(m||x)&&(K.current.focus(),K.current.select()),N(!m&&!x)}),[x]),a.a.createElement(b.a,{className:c()({"bookmark-outline-single-container":!0,editing:m||x,default:C,hover:P}),tabIndex:0,onKeyDown:function(e){"Enter"===e.key&&W(l)},onClick:function(e){C&&1===e.detail&&D(setTimeout((function(){W(l)}),300))},onDoubleClick:function(){C&&clearTimeout(_)}},s&&a.a.createElement(p.a,{type:"checkbox",className:"bookmark-outline-checkbox",id:"bookmark-checkbox-".concat(l+1),onClick:function(e){return e.stopPropagation()},onChange:function(e){return y(l,e.target.checked)}}),a.a.createElement("div",{className:"bookmark-outline-label-row"},a.a.createElement("div",{className:"bookmark-outline-label"},m||x?n:r),C&&a.a.createElement(a.a.Fragment,null,s&&a.a.createElement(d.a,{className:"bookmark-outline-more-button",dataElement:"bookmark-more-button-".concat(l),img:"icon-pencil-line",onClick:function(e){e.stopPropagation(),O(!0)},tabIndex:-1}),!s&&a.a.createElement(d.a,{className:"bookmark-outline-more-button",dataElement:"bookmark-more-button-".concat(E,"-").concat(l),img:"icon-tool-more",onClick:function(e){e.stopPropagation(),R(!0)},tabIndex:-1}),P&&a.a.createElement(f.a,{type:"bookmark",anchorButton:"bookmark-more-button-".concat(E,"-").concat(l),shouldDisplayDeleteButton:!0,onClosePopup:function(){return R(!1)},onRenameClick:function(){R(!1),O(!0)},onDeleteClick:function(){R(!1),g(l)}}),a.a.createElement("div",{className:"bookmark-outline-text bookmark-text-input",onDoubleClick:function(){return O(!0)}},t)),(m||x)&&a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"text",name:"bookmark",ref:K,className:"bookmark-outline-input bookmark-text-input",placeholder:w("component.bookmarkTitle"),"aria-label":w("action.name"),value:T,onKeyDown:function(e){"Enter"===e.key&&(e.stopPropagation(),(m||x&&!L())&&H()),"Escape"===e.key&&U()},onChange:function(e){return B(e.target.value)}}),a.a.createElement("div",{className:"bookmark-outline-editing-controls"},a.a.createElement(d.a,{className:"bookmark-outline-cancel-button",label:w("action.cancel"),onClick:U}),m&&a.a.createElement(d.a,{className:"bookmark-outline-save-button",label:w("action.add"),isSubmitType:!0,onClick:H}),x&&a.a.createElement(d.a,{className:"bookmark-outline-save-button",label:w("action.save"),isSubmitType:!0,disabled:L(),onClick:H})))))};g.propTypes=h;var v=g,E=n(5),w=n(2),S=n(3);n(1514);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==x(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,r,i,l=[],c=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=r.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||N(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var T=function(e){var t,n,l=e.panelSelector,m=C(Object(r.e)((function(e){return[S.a.isElementDisabled(e,E.a.BOOKMARK_PANEL),S.a.getBookmarks(e),S.a.getCurrentPage(e)-1,S.a.getPageLabels(e),S.a.isBookmarkIconShortcutVisible(e),S.a.getFeatureFlags(e)]}),r.c),6),s=m[0],f=m[1],k=m[2],y=m[3],h=m[4],g=m[5],x=C(Object(o.useState)(!1),2),N=x[0],j=x[1],T=C(Object(o.useState)(!1),2),B=T[0],I=T[1],P=C(Object(o.useState)([]),2),R=P[0],M=P[1],_=g.customizableUI,D=C(Object(i.a)(),1)[0],K=Object(r.d)();Object(o.useEffect)((function(){h&&!s?u.a.setBookmarkIconShortcutVisibility(!0):u.a.setBookmarkIconShortcutVisibility(!1)}),[s,h]);var L=Object.keys(f).map((function(e){return parseInt(e,10)}));Object(o.useEffect)((function(){R.forEach((function(e){L.includes(e)||M(R.filter((function(t){return t!==e})))})),0===L.length&&I(!1)}),[f]);var H=function(e){var t=D("warning.deleteBookmark.title"),n={message:D("warning.deleteBookmark.message"),title:t,onConfirm:function(){e.forEach((function(e){return K(w.a.removeBookmark(e))})),M([])},confirmBtnText:D("action.delete")};K(w.a.showWarningMessage(n))};return s?null:a.a.createElement("div",{className:c()((t={Panel:!0,BookmarksPanel:!0,"bookmark-outline-panel":!0},A(t,l,!0),A(t,"custom-panel",_),t)),"data-element":E.a.BOOKMARK_PANEL},a.a.createElement("div",{className:"bookmark-outline-panel-header"},a.a.createElement("div",{className:"header-title"},D("component.bookmarksPanel")),!B&&a.a.createElement(d.a,{className:"bookmark-outline-control-button",dataElement:E.a.BOOKMARK_MULTI_SELECT,label:D("action.edit"),disabled:N||0===L.length,onClick:function(){return I(!0)}}),B&&a.a.createElement(d.a,{className:"bookmark-outline-control-button",dataElement:E.a.BOOKMARK_MULTI_SELECT,label:D("option.bookmarkOutlineControls.done"),disabled:N,onClick:function(){I(!1),M([])}})),a.a.createElement(p.a,{dataElement:E.a.BOOKMARK_SHORTCUT_OPTION,type:"checkbox",isSwitch:!0,id:"bookmark-view-option",className:"bookmark-switch",label:D("message.viewBookmark"),checked:h,onChange:function(e){return K(w.a.setBookmarkIconShortcutVisibility(e.target.checked))}}),!N&&0===L.length&&a.a.createElement("div",{className:"msg msg-no-bookmark-outline"},D("message.noBookmarks")),a.a.createElement("div",{className:"bookmark-outline-row"},N&&a.a.createElement(v,{isAdding:!0,label:"".concat(D("component.bookmarkPage")," ").concat(y[k]," - ").concat(D("component.bookmarkTitle")),text:null!==(n=f[k])&&void 0!==n?n:"",pageIndex:k,onSave:function(e){K(w.a.addBookmark(k,e)),j(!1)},onCancel:function(){return j(!1)},panelSelector:l}),L.map((function(e){return a.a.createElement(v,{key:e,panelSelector:l,isMultiSelectionMode:B,label:"".concat(D("component.bookmarkPage")," ").concat(y[e]," - ").concat(D("component.bookmarkTitle")),defaultLabel:"".concat(D("component.bookmarkPage")," ").concat(y[e]),text:f[e],pageIndex:e,onSave:function(t){return K(w.a.editBookmark(e,t))},onRemove:function(e){return H([e])},setSelected:function(e,t){R.find((function(t){return t===e}))?t||M(R.filter((function(t){return t!==e}))):t&&M([].concat(O(R),[e]))}})}))),a.a.createElement(b.a,{className:"bookmark-outline-footer",dataElement:E.a.BOOKMARK_ADD_NEW_BUTTON_CONTAINER},B?a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{className:"multi-selection-button",img:"icon-menu-add",disabled:R.length>0||!!f[k]||N,onClick:function(){return j(!0)}}),a.a.createElement(d.a,{className:"multi-selection-button",img:"icon-delete-line",disabled:0===R.length,onClick:function(){return H(R)}})):a.a.createElement(d.a,{className:"bookmark-outline-control-button add-new-button",img:"icon-menu-add",dataElement:E.a.BOOKMARK_ADD_NEW_BUTTON,label:"".concat(D("action.add")," ").concat(D("component.bookmarkPanel")),disabled:N||!!f[k],onClick:function(){return j(!0)}})))};t.default=T}}]);
//# sourceMappingURL=54.chunk.js.map