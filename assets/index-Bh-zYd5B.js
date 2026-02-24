(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))f(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const C of w.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&f(C)}).observe(document,{childList:!0,subtree:!0});function c(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(m){if(m.ep)return;m.ep=!0;const w=c(m);fetch(m.href,w)}})();function ih(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ms={exports:{}},ri={},As={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function oh(){if(od)return ne;od=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),C=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),B=Symbol.iterator;function Z(g){return g===null||typeof g!="object"?null:(g=B&&g[B]||g["@@iterator"],typeof g=="function"?g:null)}var se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,W={};function G(g,j,J){this.props=g,this.context=j,this.refs=W,this.updater=J||se}G.prototype.isReactComponent={},G.prototype.setState=function(g,j){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,j,"setState")},G.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function he(){}he.prototype=G.prototype;function ue(g,j,J){this.props=g,this.context=j,this.refs=W,this.updater=J||se}var te=ue.prototype=new he;te.constructor=ue,q(te,G.prototype),te.isPureReactComponent=!0;var O=Array.isArray,X=Object.prototype.hasOwnProperty,H={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function D(g,j,J){var ee,le={},ie=null,ce=null;if(j!=null)for(ee in j.ref!==void 0&&(ce=j.ref),j.key!==void 0&&(ie=""+j.key),j)X.call(j,ee)&&!z.hasOwnProperty(ee)&&(le[ee]=j[ee]);var ae=arguments.length-2;if(ae===1)le.children=J;else if(1<ae){for(var me=Array(ae),Ee=0;Ee<ae;Ee++)me[Ee]=arguments[Ee+2];le.children=me}if(g&&g.defaultProps)for(ee in ae=g.defaultProps,ae)le[ee]===void 0&&(le[ee]=ae[ee]);return{$$typeof:o,type:g,key:ie,ref:ce,props:le,_owner:H.current}}function ve(g,j){return{$$typeof:o,type:g.type,key:j,ref:g.ref,props:g.props,_owner:g._owner}}function Oe(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function oe(g){var j={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(J){return j[J]})}var ze=/\/+/g;function Ne(g,j){return typeof g=="object"&&g!==null&&g.key!=null?oe(""+g.key):j.toString(36)}function $e(g,j,J,ee,le){var ie=typeof g;(ie==="undefined"||ie==="boolean")&&(g=null);var ce=!1;if(g===null)ce=!0;else switch(ie){case"string":case"number":ce=!0;break;case"object":switch(g.$$typeof){case o:case a:ce=!0}}if(ce)return ce=g,le=le(ce),g=ee===""?"."+Ne(ce,0):ee,O(le)?(J="",g!=null&&(J=g.replace(ze,"$&/")+"/"),$e(le,j,J,"",function(Ee){return Ee})):le!=null&&(Oe(le)&&(le=ve(le,J+(!le.key||ce&&ce.key===le.key?"":(""+le.key).replace(ze,"$&/")+"/")+g)),j.push(le)),1;if(ce=0,ee=ee===""?".":ee+":",O(g))for(var ae=0;ae<g.length;ae++){ie=g[ae];var me=ee+Ne(ie,ae);ce+=$e(ie,j,J,me,le)}else if(me=Z(g),typeof me=="function")for(g=me.call(g),ae=0;!(ie=g.next()).done;)ie=ie.value,me=ee+Ne(ie,ae++),ce+=$e(ie,j,J,me,le);else if(ie==="object")throw j=String(g),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ce}function Xe(g,j,J){if(g==null)return g;var ee=[],le=0;return $e(g,ee,"","",function(ie){return j.call(J,ie,le++)}),ee}function Ve(g){if(g._status===-1){var j=g._result;j=j(),j.then(function(J){(g._status===0||g._status===-1)&&(g._status=1,g._result=J)},function(J){(g._status===0||g._status===-1)&&(g._status=2,g._result=J)}),g._status===-1&&(g._status=0,g._result=j)}if(g._status===1)return g._result.default;throw g._result}var xe={current:null},P={transition:null},A={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:P,ReactCurrentOwner:H};function T(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Xe,forEach:function(g,j,J){Xe(g,function(){j.apply(this,arguments)},J)},count:function(g){var j=0;return Xe(g,function(){j++}),j},toArray:function(g){return Xe(g,function(j){return j})||[]},only:function(g){if(!Oe(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ne.Component=G,ne.Fragment=c,ne.Profiler=m,ne.PureComponent=ue,ne.StrictMode=f,ne.Suspense=_,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,ne.act=T,ne.cloneElement=function(g,j,J){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var ee=q({},g.props),le=g.key,ie=g.ref,ce=g._owner;if(j!=null){if(j.ref!==void 0&&(ie=j.ref,ce=H.current),j.key!==void 0&&(le=""+j.key),g.type&&g.type.defaultProps)var ae=g.type.defaultProps;for(me in j)X.call(j,me)&&!z.hasOwnProperty(me)&&(ee[me]=j[me]===void 0&&ae!==void 0?ae[me]:j[me])}var me=arguments.length-2;if(me===1)ee.children=J;else if(1<me){ae=Array(me);for(var Ee=0;Ee<me;Ee++)ae[Ee]=arguments[Ee+2];ee.children=ae}return{$$typeof:o,type:g.type,key:le,ref:ie,props:ee,_owner:ce}},ne.createContext=function(g){return g={$$typeof:C,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},ne.createElement=D,ne.createFactory=function(g){var j=D.bind(null,g);return j.type=g,j},ne.createRef=function(){return{current:null}},ne.forwardRef=function(g){return{$$typeof:b,render:g}},ne.isValidElement=Oe,ne.lazy=function(g){return{$$typeof:V,_payload:{_status:-1,_result:g},_init:Ve}},ne.memo=function(g,j){return{$$typeof:Y,type:g,compare:j===void 0?null:j}},ne.startTransition=function(g){var j=P.transition;P.transition={};try{g()}finally{P.transition=j}},ne.unstable_act=T,ne.useCallback=function(g,j){return xe.current.useCallback(g,j)},ne.useContext=function(g){return xe.current.useContext(g)},ne.useDebugValue=function(){},ne.useDeferredValue=function(g){return xe.current.useDeferredValue(g)},ne.useEffect=function(g,j){return xe.current.useEffect(g,j)},ne.useId=function(){return xe.current.useId()},ne.useImperativeHandle=function(g,j,J){return xe.current.useImperativeHandle(g,j,J)},ne.useInsertionEffect=function(g,j){return xe.current.useInsertionEffect(g,j)},ne.useLayoutEffect=function(g,j){return xe.current.useLayoutEffect(g,j)},ne.useMemo=function(g,j){return xe.current.useMemo(g,j)},ne.useReducer=function(g,j,J){return xe.current.useReducer(g,j,J)},ne.useRef=function(g){return xe.current.useRef(g)},ne.useState=function(g){return xe.current.useState(g)},ne.useSyncExternalStore=function(g,j,J){return xe.current.useSyncExternalStore(g,j,J)},ne.useTransition=function(){return xe.current.useTransition()},ne.version="18.3.1",ne}var ld;function ia(){return ld||(ld=1,As.exports=oh()),As.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function lh(){if(sd)return ri;sd=1;var o=ia(),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,m=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function C(b,_,Y){var V,B={},Z=null,se=null;Y!==void 0&&(Z=""+Y),_.key!==void 0&&(Z=""+_.key),_.ref!==void 0&&(se=_.ref);for(V in _)f.call(_,V)&&!w.hasOwnProperty(V)&&(B[V]=_[V]);if(b&&b.defaultProps)for(V in _=b.defaultProps,_)B[V]===void 0&&(B[V]=_[V]);return{$$typeof:a,type:b,key:Z,ref:se,props:B,_owner:m.current}}return ri.Fragment=c,ri.jsx=C,ri.jsxs=C,ri}var ad;function sh(){return ad||(ad=1,Ms.exports=lh()),Ms.exports}var l=sh(),yo={},Bs={exports:{}},or={},Ws={exports:{}},Hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function ah(){return ud||(ud=1,(function(o){function a(P,A){var T=P.length;P.push(A);e:for(;0<T;){var g=T-1>>>1,j=P[g];if(0<m(j,A))P[g]=A,P[T]=j,T=g;else break e}}function c(P){return P.length===0?null:P[0]}function f(P){if(P.length===0)return null;var A=P[0],T=P.pop();if(T!==A){P[0]=T;e:for(var g=0,j=P.length,J=j>>>1;g<J;){var ee=2*(g+1)-1,le=P[ee],ie=ee+1,ce=P[ie];if(0>m(le,T))ie<j&&0>m(ce,le)?(P[g]=ce,P[ie]=T,g=ie):(P[g]=le,P[ee]=T,g=ee);else if(ie<j&&0>m(ce,T))P[g]=ce,P[ie]=T,g=ie;else break e}}return A}function m(P,A){var T=P.sortIndex-A.sortIndex;return T!==0?T:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;o.unstable_now=function(){return w.now()}}else{var C=Date,b=C.now();o.unstable_now=function(){return C.now()-b}}var _=[],Y=[],V=1,B=null,Z=3,se=!1,q=!1,W=!1,G=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(P){for(var A=c(Y);A!==null;){if(A.callback===null)f(Y);else if(A.startTime<=P)f(Y),A.sortIndex=A.expirationTime,a(_,A);else break;A=c(Y)}}function O(P){if(W=!1,te(P),!q)if(c(_)!==null)q=!0,Ve(X);else{var A=c(Y);A!==null&&xe(O,A.startTime-P)}}function X(P,A){q=!1,W&&(W=!1,he(D),D=-1),se=!0;var T=Z;try{for(te(A),B=c(_);B!==null&&(!(B.expirationTime>A)||P&&!oe());){var g=B.callback;if(typeof g=="function"){B.callback=null,Z=B.priorityLevel;var j=g(B.expirationTime<=A);A=o.unstable_now(),typeof j=="function"?B.callback=j:B===c(_)&&f(_),te(A)}else f(_);B=c(_)}if(B!==null)var J=!0;else{var ee=c(Y);ee!==null&&xe(O,ee.startTime-A),J=!1}return J}finally{B=null,Z=T,se=!1}}var H=!1,z=null,D=-1,ve=5,Oe=-1;function oe(){return!(o.unstable_now()-Oe<ve)}function ze(){if(z!==null){var P=o.unstable_now();Oe=P;var A=!0;try{A=z(!0,P)}finally{A?Ne():(H=!1,z=null)}}else H=!1}var Ne;if(typeof ue=="function")Ne=function(){ue(ze)};else if(typeof MessageChannel!="undefined"){var $e=new MessageChannel,Xe=$e.port2;$e.port1.onmessage=ze,Ne=function(){Xe.postMessage(null)}}else Ne=function(){G(ze,0)};function Ve(P){z=P,H||(H=!0,Ne())}function xe(P,A){D=G(function(){P(o.unstable_now())},A)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_continueExecution=function(){q||se||(q=!0,Ve(X))},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return Z},o.unstable_getFirstCallbackNode=function(){return c(_)},o.unstable_next=function(P){switch(Z){case 1:case 2:case 3:var A=3;break;default:A=Z}var T=Z;Z=A;try{return P()}finally{Z=T}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var T=Z;Z=P;try{return A()}finally{Z=T}},o.unstable_scheduleCallback=function(P,A,T){var g=o.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?g+T:g):T=g,P){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=T+j,P={id:V++,callback:A,priorityLevel:P,startTime:T,expirationTime:j,sortIndex:-1},T>g?(P.sortIndex=T,a(Y,P),c(_)===null&&P===c(Y)&&(W?(he(D),D=-1):W=!0,xe(O,T-g))):(P.sortIndex=j,a(_,P),q||se||(q=!0,Ve(X))),P},o.unstable_shouldYield=oe,o.unstable_wrapCallback=function(P){var A=Z;return function(){var T=Z;Z=A;try{return P.apply(this,arguments)}finally{Z=T}}}})(Hs)),Hs}var cd;function uh(){return cd||(cd=1,Ws.exports=ah()),Ws.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd;function ch(){if(dd)return or;dd=1;var o=ia(),a=uh();function c(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,m={};function w(e,r){C(e,r),C(e+"Capture",r)}function C(e,r){for(m[e]=r,e=0;e<r.length;e++)f.add(r[e])}var b=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),_=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},B={};function Z(e){return _.call(B,e)?!0:_.call(V,e)?!1:Y.test(e)?B[e]=!0:(V[e]=!0,!1)}function se(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,r,t,n){if(r===null||typeof r=="undefined"||se(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function W(e,r,t,n,i,s,u){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=u}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){G[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];G[r]=new W(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){G[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){G[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){G[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){G[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){G[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){G[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){G[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(he,ue);G[r]=new W(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(he,ue);G[r]=new W(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(he,ue);G[r]=new W(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),G.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,r,t,n){var i=G.hasOwnProperty(r)?G[r]:null;(i!==null?i.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(q(r,t,i,n)&&(t=null),n||i===null?Z(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(r=i.attributeName,n=i.attributeNamespace,t===null?e.removeAttribute(r):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,n?e.setAttributeNS(n,r,t):e.setAttribute(r,t))))}var O=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),H=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Oe=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),P=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,g;function j(e){if(g===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);g=r&&r[1]||""}return`
`+g+e}var J=!1;function ee(e,r){if(!e||J)return"";J=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var n=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){n=y}e.call(r.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),s=n.stack.split(`
`),u=i.length-1,d=s.length-1;1<=u&&0<=d&&i[u]!==s[d];)d--;for(;1<=u&&0<=d;u--,d--)if(i[u]!==s[d]){if(u!==1||d!==1)do if(u--,d--,0>d||i[u]!==s[d]){var p=`
`+i[u].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=u&&0<=d);break}}}finally{J=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?j(e):""}function le(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case H:return"Portal";case ve:return"Profiler";case D:return"StrictMode";case Ne:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oe:return(e.displayName||"Context")+".Consumer";case Oe:return(e._context.displayName||"Context")+".Provider";case ze:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xe:return r=e.displayName||null,r!==null?r:ie(e.type)||"Memo";case Ve:r=e._payload,e=e._init;try{return ie(e(r))}catch{}}return null}function ce(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ee(e){var r=me(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(u){n=""+u,s.call(this,u)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Xr(e){e._valueTracker||(e._valueTracker=Ee(e))}function yt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),n="";return e&&(n=me(e)?e.checked?"true":"false":e.value),e=n,e!==t?(r.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vo(e,r){var t=r.checked;return T({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function fa(e,r){var t=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;t=ae(r.value!=null?r.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function pa(e,r){r=r.checked,r!=null&&te(e,"checked",r,!1)}function Go(e,r){pa(e,r);var t=ae(r.value),n=r.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Qo(e,r.type,t):r.hasOwnProperty("defaultValue")&&Qo(e,r.type,ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function ha(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Qo(e,r,t){(r!=="number"||jr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gn=Array.isArray;function Mt(e,r,t,n){if(e=e.options,r){r={};for(var i=0;i<t.length;i++)r["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=r.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&n&&(e[t].defaultSelected=!0)}else{for(t=""+ae(t),r=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Yo(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(c(91));return T({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(c(92));if(gn(t)){if(1<t.length)throw Error(c(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:ae(t)}}function ga(e,r){var t=ae(r.value),n=ae(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function va(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function xa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ko(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?xa(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,ya=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,n,i){MSApp.execUnsafeLocalFunction(function(){return e(r,t,n,i)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function vn(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},af=["Webkit","ms","Moz","O"];Object.keys(xn).forEach(function(e){af.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),xn[r]=xn[e]})});function wa(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||xn.hasOwnProperty(e)&&xn[e]?(""+r).trim():r+"px"}function ja(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var n=t.indexOf("--")===0,i=wa(t,r[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,i):e[t]=i}}var uf=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qo(e,r){if(r){if(uf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(c(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(c(61))}if(r.style!=null&&typeof r.style!="object")throw Error(c(62))}}function Xo(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zo=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,At=null,Bt=null;function ka(e){if(e=Bn(e)){if(typeof el!="function")throw Error(c(280));var r=e.stateNode;r&&(r=Li(r),el(e.stateNode,e.type,r))}}function Sa(e){At?Bt?Bt.push(e):Bt=[e]:At=e}function Na(){if(At){var e=At,r=Bt;if(Bt=At=null,ka(e),r)for(e=0;e<r.length;e++)ka(r[e])}}function Ca(e,r){return e(r)}function Ea(){}var rl=!1;function _a(e,r,t){if(rl)return e(r,t);rl=!0;try{return Ca(e,r,t)}finally{rl=!1,(At!==null||Bt!==null)&&(Ea(),Na())}}function yn(e,r){var t=e.stateNode;if(t===null)return null;var n=Li(t);if(n===null)return null;t=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,r,typeof t));return t}var tl=!1;if(b)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){tl=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{tl=!1}function cf(e,r,t,n,i,s,u,d,p){var y=Array.prototype.slice.call(arguments,3);try{r.apply(t,y)}catch(S){this.onError(S)}}var jn=!1,di=null,fi=!1,nl=null,df={onError:function(e){jn=!0,di=e}};function ff(e,r,t,n,i,s,u,d,p){jn=!1,di=null,cf.apply(df,arguments)}function pf(e,r,t,n,i,s,u,d,p){if(ff.apply(this,arguments),jn){if(jn){var y=di;jn=!1,di=null}else throw Error(c(198));fi||(fi=!0,nl=y)}}function wt(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function Pa(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function za(e){if(wt(e)!==e)throw Error(c(188))}function hf(e){var r=e.alternate;if(!r){if(r=wt(e),r===null)throw Error(c(188));return r!==e?null:e}for(var t=e,n=r;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){t=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return za(i),e;if(s===n)return za(i),r;s=s.sibling}throw Error(c(188))}if(t.return!==n.return)t=i,n=s;else{for(var u=!1,d=i.child;d;){if(d===t){u=!0,t=i,n=s;break}if(d===n){u=!0,n=i,t=s;break}d=d.sibling}if(!u){for(d=s.child;d;){if(d===t){u=!0,t=s,n=i;break}if(d===n){u=!0,n=s,t=i;break}d=d.sibling}if(!u)throw Error(c(189))}}if(t.alternate!==n)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:r}function ba(e){return e=hf(e),e!==null?Oa(e):null}function Oa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Oa(e);if(r!==null)return r;e=e.sibling}return null}var Ta=a.unstable_scheduleCallback,La=a.unstable_cancelCallback,mf=a.unstable_shouldYield,gf=a.unstable_requestPaint,Te=a.unstable_now,vf=a.unstable_getCurrentPriorityLevel,il=a.unstable_ImmediatePriority,Ia=a.unstable_UserBlockingPriority,pi=a.unstable_NormalPriority,xf=a.unstable_LowPriority,Ra=a.unstable_IdlePriority,hi=null,Or=null;function yf(e){if(Or&&typeof Or.onCommitFiberRoot=="function")try{Or.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:kf,wf=Math.log,jf=Math.LN2;function kf(e){return e>>>=0,e===0?32:31-(wf(e)/jf|0)|0}var mi=64,gi=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,r){var t=e.pendingLanes;if(t===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,u=t&268435455;if(u!==0){var d=u&~i;d!==0?n=kn(d):(s&=u,s!==0&&(n=kn(s)))}else u=t&~i,u!==0?n=kn(u):s!==0&&(n=kn(s));if(n===0)return 0;if(r!==0&&r!==n&&(r&i)===0&&(i=n&-n,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if((n&4)!==0&&(n|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)t=31-kr(r),i=1<<t,n|=e[t],r&=~i;return n}function Sf(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nf(e,r){for(var t=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var u=31-kr(s),d=1<<u,p=i[u];p===-1?((d&t)===0||(d&n)!==0)&&(i[u]=Sf(d,r)):p<=r&&(e.expiredLanes|=d),s&=~d}}function ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fa(){var e=mi;return mi<<=1,(mi&4194240)===0&&(mi=64),e}function ll(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function Sn(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-kr(r),e[r]=t}function Cf(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-kr(t),s=1<<i;r[i]=0,n[i]=-1,e[i]=-1,t&=~s}}function sl(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var n=31-kr(t),i=1<<n;i&r|e[n]&r&&(e[n]|=r),t&=~i}}var ge=0;function Da(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ma,al,Aa,Ba,Wa,ul=!1,xi=[],Zr=null,Jr=null,et=null,Nn=new Map,Cn=new Map,rt=[],Ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ha(e,r){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":et=null;break;case"pointerover":case"pointerout":Nn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(r.pointerId)}}function En(e,r,t,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:t,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Bn(r),r!==null&&al(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function _f(e,r,t,n,i){switch(r){case"focusin":return Zr=En(Zr,e,r,t,n,i),!0;case"dragenter":return Jr=En(Jr,e,r,t,n,i),!0;case"mouseover":return et=En(et,e,r,t,n,i),!0;case"pointerover":var s=i.pointerId;return Nn.set(s,En(Nn.get(s)||null,e,r,t,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Cn.set(s,En(Cn.get(s)||null,e,r,t,n,i)),!0}return!1}function Ua(e){var r=jt(e.target);if(r!==null){var t=wt(r);if(t!==null){if(r=t.tag,r===13){if(r=Pa(t),r!==null){e.blockedOn=r,Wa(e.priority,function(){Aa(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=dl(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Zo=n,t.target.dispatchEvent(n),Zo=null}else return r=Bn(t),r!==null&&al(r),e.blockedOn=t,!1;r.shift()}return!0}function $a(e,r,t){yi(e)&&t.delete(r)}function Pf(){ul=!1,Zr!==null&&yi(Zr)&&(Zr=null),Jr!==null&&yi(Jr)&&(Jr=null),et!==null&&yi(et)&&(et=null),Nn.forEach($a),Cn.forEach($a)}function _n(e,r){e.blockedOn===r&&(e.blockedOn=null,ul||(ul=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Pf)))}function Pn(e){function r(i){return _n(i,e)}if(0<xi.length){_n(xi[0],e);for(var t=1;t<xi.length;t++){var n=xi[t];n.blockedOn===e&&(n.blockedOn=null)}}for(Zr!==null&&_n(Zr,e),Jr!==null&&_n(Jr,e),et!==null&&_n(et,e),Nn.forEach(r),Cn.forEach(r),t=0;t<rt.length;t++)n=rt[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<rt.length&&(t=rt[0],t.blockedOn===null);)Ua(t),t.blockedOn===null&&rt.shift()}var Wt=O.ReactCurrentBatchConfig,wi=!0;function zf(e,r,t,n){var i=ge,s=Wt.transition;Wt.transition=null;try{ge=1,cl(e,r,t,n)}finally{ge=i,Wt.transition=s}}function bf(e,r,t,n){var i=ge,s=Wt.transition;Wt.transition=null;try{ge=4,cl(e,r,t,n)}finally{ge=i,Wt.transition=s}}function cl(e,r,t,n){if(wi){var i=dl(e,r,t,n);if(i===null)Pl(e,r,n,ji,t),Ha(e,n);else if(_f(i,e,r,t,n))n.stopPropagation();else if(Ha(e,n),r&4&&-1<Ef.indexOf(e)){for(;i!==null;){var s=Bn(i);if(s!==null&&Ma(s),s=dl(e,r,t,n),s===null&&Pl(e,r,n,ji,t),s===i)break;i=s}i!==null&&n.stopPropagation()}else Pl(e,r,n,null,t)}}var ji=null;function dl(e,r,t,n){if(ji=null,e=Jo(n),e=jt(e),e!==null)if(r=wt(e),r===null)e=null;else if(t=r.tag,t===13){if(e=Pa(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return ji=e,null}function Va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vf()){case il:return 1;case Ia:return 4;case pi:case xf:return 16;case Ra:return 536870912;default:return 16}default:return 16}}var tt=null,fl=null,ki=null;function Ga(){if(ki)return ki;var e,r=fl,t=r.length,n,i="value"in tt?tt.value:tt.textContent,s=i.length;for(e=0;e<t&&r[e]===i[e];e++);var u=t-e;for(n=1;n<=u&&r[t-n]===i[s-n];n++);return ki=i.slice(e,1<n?1-n:void 0)}function Si(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Qa(){return!1}function sr(e){function r(t,n,i,s,u){this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ni:Qa,this.isPropagationStopped=Qa,this}return T(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),r}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=sr(Ht),zn=T({},Ht,{view:0,detail:0}),Of=sr(zn),hl,ml,bn,Ci=T({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(hl=e.screenX-bn.screenX,ml=e.screenY-bn.screenY):ml=hl=0,bn=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),Ya=sr(Ci),Tf=T({},Ci,{dataTransfer:0}),Lf=sr(Tf),If=T({},zn,{relatedTarget:0}),gl=sr(If),Rf=T({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=sr(Rf),Df=T({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=sr(Df),Af=T({},Ht,{data:0}),Ka=sr(Af),Bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uf(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Hf[e])?!!r[e]:!1}function vl(){return Uf}var $f=T({},zn,{key:function(e){if(e.key){var r=Bf[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vf=sr($f),Gf=T({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=sr(Gf),Qf=T({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),Yf=sr(Qf),Kf=T({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),qf=sr(Kf),Xf=T({},Ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=sr(Xf),Jf=[9,13,27,32],xl=b&&"CompositionEvent"in window,On=null;b&&"documentMode"in document&&(On=document.documentMode);var ep=b&&"TextEvent"in window&&!On,Xa=b&&(!xl||On&&8<On&&11>=On),Za=" ",Ja=!1;function eu(e,r){switch(e){case"keyup":return Jf.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function rp(e,r){switch(e){case"compositionend":return ru(r);case"keypress":return r.which!==32?null:(Ja=!0,Za);case"textInput":return e=r.data,e===Za&&Ja?null:e;default:return null}}function tp(e,r){if(Ut)return e==="compositionend"||!xl&&eu(e,r)?(e=Ga(),ki=fl=tt=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Xa&&r.locale!=="ko"?null:r.data;default:return null}}var np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!np[e.type]:r==="textarea"}function nu(e,r,t,n){Sa(n),r=bi(r,"onChange"),0<r.length&&(t=new pl("onChange","change",null,t,n),e.push({event:t,listeners:r}))}var Tn=null,Ln=null;function ip(e){ju(e,0)}function Ei(e){var r=Yt(e);if(yt(r))return e}function op(e,r){if(e==="change")return r}var iu=!1;if(b){var yl;if(b){var wl="oninput"in document;if(!wl){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),wl=typeof ou.oninput=="function"}yl=wl}else yl=!1;iu=yl&&(!document.documentMode||9<document.documentMode)}function lu(){Tn&&(Tn.detachEvent("onpropertychange",su),Ln=Tn=null)}function su(e){if(e.propertyName==="value"&&Ei(Ln)){var r=[];nu(r,Ln,e,Jo(e)),_a(ip,r)}}function lp(e,r,t){e==="focusin"?(lu(),Tn=r,Ln=t,Tn.attachEvent("onpropertychange",su)):e==="focusout"&&lu()}function sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(Ln)}function ap(e,r){if(e==="click")return Ei(r)}function up(e,r){if(e==="input"||e==="change")return Ei(r)}function cp(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Sr=typeof Object.is=="function"?Object.is:cp;function In(e,r){if(Sr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var i=t[n];if(!_.call(r,i)||!Sr(e[i],r[i]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,r){var t=au(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=r&&n>=r)return{node:t,offset:r-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=au(t)}}function cu(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?cu(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function du(){for(var e=window,r=jr();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=jr(e.document)}return r}function jl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function dp(e){var r=du(),t=e.focusedElem,n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&cu(t.ownerDocument.documentElement,t)){if(n!==null&&jl(t)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=uu(t,s);var u=uu(t,n);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(r),e.extend(u.node,u.offset)):(r.setEnd(u.node,u.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fp=b&&"documentMode"in document&&11>=document.documentMode,$t=null,kl=null,Rn=null,Sl=!1;function fu(e,r,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sl||$t==null||$t!==jr(n)||(n=$t,"selectionStart"in n&&jl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Rn&&In(Rn,n)||(Rn=n,n=bi(kl,"onSelect"),0<n.length&&(r=new pl("onSelect","select",null,r,t),e.push({event:r,listeners:n}),r.target=$t)))}function _i(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var Vt={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},Nl={},pu={};b&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function Pi(e){if(Nl[e])return Nl[e];if(!Vt[e])return e;var r=Vt[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in pu)return Nl[e]=r[t];return e}var hu=Pi("animationend"),mu=Pi("animationiteration"),gu=Pi("animationstart"),vu=Pi("transitionend"),xu=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nt(e,r){xu.set(e,r),w(r,[e])}for(var Cl=0;Cl<yu.length;Cl++){var El=yu[Cl],pp=El.toLowerCase(),hp=El[0].toUpperCase()+El.slice(1);nt(pp,"on"+hp)}nt(hu,"onAnimationEnd"),nt(mu,"onAnimationIteration"),nt(gu,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(vu,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function wu(e,r,t){var n=e.type||"unknown-event";e.currentTarget=t,pf(n,r,void 0,e),e.currentTarget=null}function ju(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],i=n.event;n=n.listeners;e:{var s=void 0;if(r)for(var u=n.length-1;0<=u;u--){var d=n[u],p=d.instance,y=d.currentTarget;if(d=d.listener,p!==s&&i.isPropagationStopped())break e;wu(i,d,y),s=p}else for(u=0;u<n.length;u++){if(d=n[u],p=d.instance,y=d.currentTarget,d=d.listener,p!==s&&i.isPropagationStopped())break e;wu(i,d,y),s=p}}}if(fi)throw e=nl,fi=!1,nl=null,e}function we(e,r){var t=r[Il];t===void 0&&(t=r[Il]=new Set);var n=e+"__bubble";t.has(n)||(ku(r,e,2,!1),t.add(n))}function _l(e,r,t){var n=0;r&&(n|=4),ku(t,e,n,r)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Dn(e){if(!e[zi]){e[zi]=!0,f.forEach(function(t){t!=="selectionchange"&&(mp.has(t)||_l(t,!1,e),_l(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[zi]||(r[zi]=!0,_l("selectionchange",!1,r))}}function ku(e,r,t,n){switch(Va(r)){case 1:var i=zf;break;case 4:i=bf;break;default:i=cl}t=i.bind(null,r,t,e),i=void 0,!tl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(r,t,{capture:!0,passive:i}):e.addEventListener(r,t,!0):i!==void 0?e.addEventListener(r,t,{passive:i}):e.addEventListener(r,t,!1)}function Pl(e,r,t,n,i){var s=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var d=n.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(u===4)for(u=n.return;u!==null;){var p=u.tag;if((p===3||p===4)&&(p=u.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;u=u.return}for(;d!==null;){if(u=jt(d),u===null)return;if(p=u.tag,p===5||p===6){n=s=u;continue e}d=d.parentNode}}n=n.return}_a(function(){var y=s,S=Jo(t),N=[];e:{var k=xu.get(e);if(k!==void 0){var L=pl,R=e;switch(e){case"keypress":if(Si(t)===0)break e;case"keydown":case"keyup":L=Vf;break;case"focusin":R="focus",L=gl;break;case"focusout":R="blur",L=gl;break;case"beforeblur":case"afterblur":L=gl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Yf;break;case hu:case mu:case gu:L=Ff;break;case vu:L=qf;break;case"scroll":L=Of;break;case"wheel":L=Zf;break;case"copy":case"cut":case"paste":L=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=qa}var F=(r&4)!==0,Le=!F&&e==="scroll",v=F?k!==null?k+"Capture":null:k;F=[];for(var h=y,x;h!==null;){x=h;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,v!==null&&(E=yn(h,v),E!=null&&F.push(Mn(h,E,x)))),Le)break;h=h.return}0<F.length&&(k=new L(k,R,null,t,S),N.push({event:k,listeners:F}))}}if((r&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",k&&t!==Zo&&(R=t.relatedTarget||t.fromElement)&&(jt(R)||R[Mr]))break e;if((L||k)&&(k=S.window===S?S:(k=S.ownerDocument)?k.defaultView||k.parentWindow:window,L?(R=t.relatedTarget||t.toElement,L=y,R=R?jt(R):null,R!==null&&(Le=wt(R),R!==Le||R.tag!==5&&R.tag!==6)&&(R=null)):(L=null,R=y),L!==R)){if(F=Ya,E="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(F=qa,E="onPointerLeave",v="onPointerEnter",h="pointer"),Le=L==null?k:Yt(L),x=R==null?k:Yt(R),k=new F(E,h+"leave",L,t,S),k.target=Le,k.relatedTarget=x,E=null,jt(S)===y&&(F=new F(v,h+"enter",R,t,S),F.target=x,F.relatedTarget=Le,E=F),Le=E,L&&R)r:{for(F=L,v=R,h=0,x=F;x;x=Gt(x))h++;for(x=0,E=v;E;E=Gt(E))x++;for(;0<h-x;)F=Gt(F),h--;for(;0<x-h;)v=Gt(v),x--;for(;h--;){if(F===v||v!==null&&F===v.alternate)break r;F=Gt(F),v=Gt(v)}F=null}else F=null;L!==null&&Su(N,k,L,F,!1),R!==null&&Le!==null&&Su(N,Le,R,F,!0)}}e:{if(k=y?Yt(y):window,L=k.nodeName&&k.nodeName.toLowerCase(),L==="select"||L==="input"&&k.type==="file")var M=op;else if(tu(k))if(iu)M=up;else{M=sp;var U=lp}else(L=k.nodeName)&&L.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(M=ap);if(M&&(M=M(e,y))){nu(N,M,t,S);break e}U&&U(e,k,y),e==="focusout"&&(U=k._wrapperState)&&U.controlled&&k.type==="number"&&Qo(k,"number",k.value)}switch(U=y?Yt(y):window,e){case"focusin":(tu(U)||U.contentEditable==="true")&&($t=U,kl=y,Rn=null);break;case"focusout":Rn=kl=$t=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,fu(N,t,S);break;case"selectionchange":if(fp)break;case"keydown":case"keyup":fu(N,t,S)}var $;if(xl)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Ut?eu(e,t)&&(Q="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Q="onCompositionStart");Q&&(Xa&&t.locale!=="ko"&&(Ut||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Ut&&($=Ga()):(tt=S,fl="value"in tt?tt.value:tt.textContent,Ut=!0)),U=bi(y,Q),0<U.length&&(Q=new Ka(Q,e,null,t,S),N.push({event:Q,listeners:U}),$?Q.data=$:($=ru(t),$!==null&&(Q.data=$)))),($=ep?rp(e,t):tp(e,t))&&(y=bi(y,"onBeforeInput"),0<y.length&&(S=new Ka("onBeforeInput","beforeinput",null,t,S),N.push({event:S,listeners:y}),S.data=$))}ju(N,r)})}function Mn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function bi(e,r){for(var t=r+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=yn(e,t),s!=null&&n.unshift(Mn(e,s,i)),s=yn(e,r),s!=null&&n.push(Mn(e,s,i))),e=e.return}return n}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Su(e,r,t,n,i){for(var s=r._reactName,u=[];t!==null&&t!==n;){var d=t,p=d.alternate,y=d.stateNode;if(p!==null&&p===n)break;d.tag===5&&y!==null&&(d=y,i?(p=yn(t,s),p!=null&&u.unshift(Mn(t,p,d))):i||(p=yn(t,s),p!=null&&u.push(Mn(t,p,d)))),t=t.return}u.length!==0&&e.push({event:r,listeners:u})}var gp=/\r\n?/g,vp=/\u0000|\uFFFD/g;function Nu(e){return(typeof e=="string"?e:""+e).replace(gp,`
`).replace(vp,"")}function Oi(e,r,t){if(r=Nu(r),Nu(e)!==r&&t)throw Error(c(425))}function Ti(){}var zl=null,bl=null;function Ol(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Tl=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu!="undefined"?function(e){return Cu.resolve(null).then(e).catch(wp)}:Tl;function wp(e){setTimeout(function(){throw e})}function Ll(e,r){var t=r,n=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(n===0){e.removeChild(i),Pn(r);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=i}while(t);Pn(r)}function it(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Eu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var Qt=Math.random().toString(36).slice(2),Tr="__reactFiber$"+Qt,An="__reactProps$"+Qt,Mr="__reactContainer$"+Qt,Il="__reactEvents$"+Qt,jp="__reactListeners$"+Qt,kp="__reactHandles$"+Qt;function jt(e){var r=e[Tr];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Mr]||t[Tr]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Eu(e);e!==null;){if(t=e[Tr])return t;e=Eu(e)}return r}e=t,t=e.parentNode}return null}function Bn(e){return e=e[Tr]||e[Mr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Li(e){return e[An]||null}var Rl=[],Kt=-1;function ot(e){return{current:e}}function je(e){0>Kt||(e.current=Rl[Kt],Rl[Kt]=null,Kt--)}function ye(e,r){Kt++,Rl[Kt]=e.current,e.current=r}var lt={},Ge=ot(lt),er=ot(!1),kt=lt;function qt(e,r){var t=e.type.contextTypes;if(!t)return lt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=r[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function rr(e){return e=e.childContextTypes,e!=null}function Ii(){je(er),je(Ge)}function _u(e,r,t){if(Ge.current!==lt)throw Error(c(168));ye(Ge,r),ye(er,t)}function Pu(e,r,t){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var i in n)if(!(i in r))throw Error(c(108,ce(e)||"Unknown",i));return T({},t,n)}function Ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||lt,kt=Ge.current,ye(Ge,e),ye(er,er.current),!0}function zu(e,r,t){var n=e.stateNode;if(!n)throw Error(c(169));t?(e=Pu(e,r,kt),n.__reactInternalMemoizedMergedChildContext=e,je(er),je(Ge),ye(Ge,e)):je(er),ye(er,t)}var Ar=null,Fi=!1,Fl=!1;function bu(e){Ar===null?Ar=[e]:Ar.push(e)}function Sp(e){Fi=!0,bu(e)}function st(){if(!Fl&&Ar!==null){Fl=!0;var e=0,r=ge;try{var t=Ar;for(ge=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Ar=null,Fi=!1}catch(i){throw Ar!==null&&(Ar=Ar.slice(e+1)),Ta(il,st),i}finally{ge=r,Fl=!1}}return null}var Xt=[],Zt=0,Di=null,Mi=0,hr=[],mr=0,St=null,Br=1,Wr="";function Nt(e,r){Xt[Zt++]=Mi,Xt[Zt++]=Di,Di=e,Mi=r}function Ou(e,r,t){hr[mr++]=Br,hr[mr++]=Wr,hr[mr++]=St,St=e;var n=Br;e=Wr;var i=32-kr(n)-1;n&=~(1<<i),t+=1;var s=32-kr(r)+i;if(30<s){var u=i-i%5;s=(n&(1<<u)-1).toString(32),n>>=u,i-=u,Br=1<<32-kr(r)+i|t<<i|n,Wr=s+e}else Br=1<<s|t<<i|n,Wr=e}function Dl(e){e.return!==null&&(Nt(e,1),Ou(e,1,0))}function Ml(e){for(;e===Di;)Di=Xt[--Zt],Xt[Zt]=null,Mi=Xt[--Zt],Xt[Zt]=null;for(;e===St;)St=hr[--mr],hr[mr]=null,Wr=hr[--mr],hr[mr]=null,Br=hr[--mr],hr[mr]=null}var ar=null,ur=null,Ce=!1,Nr=null;function Tu(e,r){var t=yr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function Lu(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ar=e,ur=it(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ar=e,ur=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=St!==null?{id:Br,overflow:Wr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=yr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,ar=e,ur=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bl(e){if(Ce){var r=ur;if(r){var t=r;if(!Lu(e,r)){if(Al(e))throw Error(c(418));r=it(t.nextSibling);var n=ar;r&&Lu(e,r)?Tu(n,t):(e.flags=e.flags&-4097|2,Ce=!1,ar=e)}}else{if(Al(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ce=!1,ar=e}}}function Iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ar=e}function Ai(e){if(e!==ar)return!1;if(!Ce)return Iu(e),Ce=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ol(e.type,e.memoizedProps)),r&&(r=ur)){if(Al(e))throw Ru(),Error(c(418));for(;r;)Tu(e,r),r=it(r.nextSibling)}if(Iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){ur=it(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}ur=null}}else ur=ar?it(e.stateNode.nextSibling):null;return!0}function Ru(){for(var e=ur;e;)e=it(e.nextSibling)}function Jt(){ur=ar=null,Ce=!1}function Wl(e){Nr===null?Nr=[e]:Nr.push(e)}var Np=O.ReactCurrentBatchConfig;function Wn(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var n=t.stateNode}if(!n)throw Error(c(147,e));var i=n,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(u){var d=i.refs;u===null?delete d[s]:d[s]=u},r._stringRef=s,r)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function Bi(e,r){throw e=Object.prototype.toString.call(r),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Fu(e){var r=e._init;return r(e._payload)}function Du(e){function r(v,h){if(e){var x=v.deletions;x===null?(v.deletions=[h],v.flags|=16):x.push(h)}}function t(v,h){if(!e)return null;for(;h!==null;)r(v,h),h=h.sibling;return null}function n(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=mt(v,h),v.index=0,v.sibling=null,v}function s(v,h,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<h?(v.flags|=2,h):x):(v.flags|=2,h)):(v.flags|=1048576,h)}function u(v){return e&&v.alternate===null&&(v.flags|=2),v}function d(v,h,x,E){return h===null||h.tag!==6?(h=Ts(x,v.mode,E),h.return=v,h):(h=i(h,x),h.return=v,h)}function p(v,h,x,E){var M=x.type;return M===z?S(v,h,x.props.children,E,x.key):h!==null&&(h.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ve&&Fu(M)===h.type)?(E=i(h,x.props),E.ref=Wn(v,h,x),E.return=v,E):(E=co(x.type,x.key,x.props,null,v.mode,E),E.ref=Wn(v,h,x),E.return=v,E)}function y(v,h,x,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=Ls(x,v.mode,E),h.return=v,h):(h=i(h,x.children||[]),h.return=v,h)}function S(v,h,x,E,M){return h===null||h.tag!==7?(h=Tt(x,v.mode,E,M),h.return=v,h):(h=i(h,x),h.return=v,h)}function N(v,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ts(""+h,v.mode,x),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case X:return x=co(h.type,h.key,h.props,null,v.mode,x),x.ref=Wn(v,null,h),x.return=v,x;case H:return h=Ls(h,v.mode,x),h.return=v,h;case Ve:var E=h._init;return N(v,E(h._payload),x)}if(gn(h)||A(h))return h=Tt(h,v.mode,x,null),h.return=v,h;Bi(v,h)}return null}function k(v,h,x,E){var M=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:d(v,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return x.key===M?p(v,h,x,E):null;case H:return x.key===M?y(v,h,x,E):null;case Ve:return M=x._init,k(v,h,M(x._payload),E)}if(gn(x)||A(x))return M!==null?null:S(v,h,x,E,null);Bi(v,x)}return null}function L(v,h,x,E,M){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(x)||null,d(h,v,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case X:return v=v.get(E.key===null?x:E.key)||null,p(h,v,E,M);case H:return v=v.get(E.key===null?x:E.key)||null,y(h,v,E,M);case Ve:var U=E._init;return L(v,h,x,U(E._payload),M)}if(gn(E)||A(E))return v=v.get(x)||null,S(h,v,E,M,null);Bi(h,E)}return null}function R(v,h,x,E){for(var M=null,U=null,$=h,Q=h=0,We=null;$!==null&&Q<x.length;Q++){$.index>Q?(We=$,$=null):We=$.sibling;var fe=k(v,$,x[Q],E);if(fe===null){$===null&&($=We);break}e&&$&&fe.alternate===null&&r(v,$),h=s(fe,h,Q),U===null?M=fe:U.sibling=fe,U=fe,$=We}if(Q===x.length)return t(v,$),Ce&&Nt(v,Q),M;if($===null){for(;Q<x.length;Q++)$=N(v,x[Q],E),$!==null&&(h=s($,h,Q),U===null?M=$:U.sibling=$,U=$);return Ce&&Nt(v,Q),M}for($=n(v,$);Q<x.length;Q++)We=L($,v,Q,x[Q],E),We!==null&&(e&&We.alternate!==null&&$.delete(We.key===null?Q:We.key),h=s(We,h,Q),U===null?M=We:U.sibling=We,U=We);return e&&$.forEach(function(gt){return r(v,gt)}),Ce&&Nt(v,Q),M}function F(v,h,x,E){var M=A(x);if(typeof M!="function")throw Error(c(150));if(x=M.call(x),x==null)throw Error(c(151));for(var U=M=null,$=h,Q=h=0,We=null,fe=x.next();$!==null&&!fe.done;Q++,fe=x.next()){$.index>Q?(We=$,$=null):We=$.sibling;var gt=k(v,$,fe.value,E);if(gt===null){$===null&&($=We);break}e&&$&&gt.alternate===null&&r(v,$),h=s(gt,h,Q),U===null?M=gt:U.sibling=gt,U=gt,$=We}if(fe.done)return t(v,$),Ce&&Nt(v,Q),M;if($===null){for(;!fe.done;Q++,fe=x.next())fe=N(v,fe.value,E),fe!==null&&(h=s(fe,h,Q),U===null?M=fe:U.sibling=fe,U=fe);return Ce&&Nt(v,Q),M}for($=n(v,$);!fe.done;Q++,fe=x.next())fe=L($,v,Q,fe.value,E),fe!==null&&(e&&fe.alternate!==null&&$.delete(fe.key===null?Q:fe.key),h=s(fe,h,Q),U===null?M=fe:U.sibling=fe,U=fe);return e&&$.forEach(function(nh){return r(v,nh)}),Ce&&Nt(v,Q),M}function Le(v,h,x,E){if(typeof x=="object"&&x!==null&&x.type===z&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case X:e:{for(var M=x.key,U=h;U!==null;){if(U.key===M){if(M=x.type,M===z){if(U.tag===7){t(v,U.sibling),h=i(U,x.props.children),h.return=v,v=h;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ve&&Fu(M)===U.type){t(v,U.sibling),h=i(U,x.props),h.ref=Wn(v,U,x),h.return=v,v=h;break e}t(v,U);break}else r(v,U);U=U.sibling}x.type===z?(h=Tt(x.props.children,v.mode,E,x.key),h.return=v,v=h):(E=co(x.type,x.key,x.props,null,v.mode,E),E.ref=Wn(v,h,x),E.return=v,v=E)}return u(v);case H:e:{for(U=x.key;h!==null;){if(h.key===U)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){t(v,h.sibling),h=i(h,x.children||[]),h.return=v,v=h;break e}else{t(v,h);break}else r(v,h);h=h.sibling}h=Ls(x,v.mode,E),h.return=v,v=h}return u(v);case Ve:return U=x._init,Le(v,h,U(x._payload),E)}if(gn(x))return R(v,h,x,E);if(A(x))return F(v,h,x,E);Bi(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(t(v,h.sibling),h=i(h,x),h.return=v,v=h):(t(v,h),h=Ts(x,v.mode,E),h.return=v,v=h),u(v)):t(v,h)}return Le}var en=Du(!0),Mu=Du(!1),Wi=ot(null),Hi=null,rn=null,Hl=null;function Ul(){Hl=rn=Hi=null}function $l(e){var r=Wi.current;je(Wi),e._currentValue=r}function Vl(e,r,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===t)break;e=e.return}}function tn(e,r){Hi=e,Hl=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(tr=!0),e.firstContext=null)}function gr(e){var r=e._currentValue;if(Hl!==e)if(e={context:e,memoizedValue:r,next:null},rn===null){if(Hi===null)throw Error(c(308));rn=e,Hi.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return r}var Ct=null;function Gl(e){Ct===null?Ct=[e]:Ct.push(e)}function Au(e,r,t,n){var i=r.interleaved;return i===null?(t.next=t,Gl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Hr(e,n)}function Hr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var at=!1;function Ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ur(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ut(e,r,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(de&2)!==0){var i=n.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),n.pending=r,Hr(e,t)}return i=n.interleaved,i===null?(r.next=r,Gl(n)):(r.next=i.next,i.next=r),n.interleaved=r,Hr(e,t)}function Ui(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,sl(e,t)}}function Wu(e,r){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=u:s=s.next=u,t=t.next}while(t!==null);s===null?i=s=r:s=s.next=r}else i=s=r;t={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function $i(e,r,t,n){var i=e.updateQueue;at=!1;var s=i.firstBaseUpdate,u=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var p=d,y=p.next;p.next=null,u===null?s=y:u.next=y,u=p;var S=e.alternate;S!==null&&(S=S.updateQueue,d=S.lastBaseUpdate,d!==u&&(d===null?S.firstBaseUpdate=y:d.next=y,S.lastBaseUpdate=p))}if(s!==null){var N=i.baseState;u=0,S=y=p=null,d=s;do{var k=d.lane,L=d.eventTime;if((n&k)===k){S!==null&&(S=S.next={eventTime:L,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var R=e,F=d;switch(k=r,L=t,F.tag){case 1:if(R=F.payload,typeof R=="function"){N=R.call(L,N,k);break e}N=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=F.payload,k=typeof R=="function"?R.call(L,N,k):R,k==null)break e;N=T({},N,k);break e;case 2:at=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[d]:k.push(d))}else L={eventTime:L,lane:k,tag:d.tag,payload:d.payload,callback:d.callback,next:null},S===null?(y=S=L,p=N):S=S.next=L,u|=k;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;k=d,d=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(S===null&&(p=N),i.baseState=p,i.firstBaseUpdate=y,i.lastBaseUpdate=S,r=i.shared.interleaved,r!==null){i=r;do u|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);Pt|=u,e.lanes=u,e.memoizedState=N}}function Hu(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],i=n.callback;if(i!==null){if(n.callback=null,n=t,typeof i!="function")throw Error(c(191,i));i.call(n)}}}var Hn={},Lr=ot(Hn),Un=ot(Hn),$n=ot(Hn);function Et(e){if(e===Hn)throw Error(c(174));return e}function Yl(e,r){switch(ye($n,r),ye(Un,e),ye(Lr,Hn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ko(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ko(r,e)}je(Lr),ye(Lr,r)}function nn(){je(Lr),je(Un),je($n)}function Uu(e){Et($n.current);var r=Et(Lr.current),t=Ko(r,e.type);r!==t&&(ye(Un,e),ye(Lr,t))}function Kl(e){Un.current===e&&(je(Lr),je(Un))}var _e=ot(0);function Vi(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ql=[];function Xl(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var Gi=O.ReactCurrentDispatcher,Zl=O.ReactCurrentBatchConfig,_t=0,Pe=null,Fe=null,Ae=null,Qi=!1,Vn=!1,Gn=0,Cp=0;function Qe(){throw Error(c(321))}function Jl(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Sr(e[t],r[t]))return!1;return!0}function es(e,r,t,n,i,s){if(_t=s,Pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Gi.current=e===null||e.memoizedState===null?zp:bp,e=t(n,i),Vn){s=0;do{if(Vn=!1,Gn=0,25<=s)throw Error(c(301));s+=1,Ae=Fe=null,r.updateQueue=null,Gi.current=Op,e=t(n,i)}while(Vn)}if(Gi.current=qi,r=Fe!==null&&Fe.next!==null,_t=0,Ae=Fe=Pe=null,Qi=!1,r)throw Error(c(300));return e}function rs(){var e=Gn!==0;return Gn=0,e}function Ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Pe.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function vr(){if(Fe===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var r=Ae===null?Pe.memoizedState:Ae.next;if(r!==null)Ae=r,Fe=e;else{if(e===null)throw Error(c(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ae===null?Pe.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Qn(e,r){return typeof r=="function"?r(e):r}function ts(e){var r=vr(),t=r.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var n=Fe,i=n.baseQueue,s=t.pending;if(s!==null){if(i!==null){var u=i.next;i.next=s.next,s.next=u}n.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,n=n.baseState;var d=u=null,p=null,y=s;do{var S=y.lane;if((_t&S)===S)p!==null&&(p=p.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var N={lane:S,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};p===null?(d=p=N,u=n):p=p.next=N,Pe.lanes|=S,Pt|=S}y=y.next}while(y!==null&&y!==s);p===null?u=n:p.next=d,Sr(n,r.memoizedState)||(tr=!0),r.memoizedState=n,r.baseState=u,r.baseQueue=p,t.lastRenderedState=n}if(e=t.interleaved,e!==null){i=e;do s=i.lane,Pe.lanes|=s,Pt|=s,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function ns(e){var r=vr(),t=r.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var n=t.dispatch,i=t.pending,s=r.memoizedState;if(i!==null){t.pending=null;var u=i=i.next;do s=e(s,u.action),u=u.next;while(u!==i);Sr(s,r.memoizedState)||(tr=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),t.lastRenderedState=s}return[s,n]}function $u(){}function Vu(e,r){var t=Pe,n=vr(),i=r(),s=!Sr(n.memoizedState,i);if(s&&(n.memoizedState=i,tr=!0),n=n.queue,is(Yu.bind(null,t,n,e),[e]),n.getSnapshot!==r||s||Ae!==null&&Ae.memoizedState.tag&1){if(t.flags|=2048,Yn(9,Qu.bind(null,t,n,i,r),void 0,null),Be===null)throw Error(c(349));(_t&30)!==0||Gu(t,r,i)}return i}function Gu(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Pe.updateQueue,r===null?(r={lastEffect:null,stores:null},Pe.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Qu(e,r,t,n){r.value=t,r.getSnapshot=n,Ku(r)&&qu(e)}function Yu(e,r,t){return t(function(){Ku(r)&&qu(e)})}function Ku(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Sr(e,t)}catch{return!0}}function qu(e){var r=Hr(e,1);r!==null&&Pr(r,e,1,-1)}function Xu(e){var r=Ir();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},r.queue=e,e=e.dispatch=Pp.bind(null,Pe,e),[r.memoizedState,e]}function Yn(e,r,t,n){return e={tag:e,create:r,destroy:t,deps:n,next:null},r=Pe.updateQueue,r===null?(r={lastEffect:null,stores:null},Pe.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,r.lastEffect=e)),e}function Zu(){return vr().memoizedState}function Yi(e,r,t,n){var i=Ir();Pe.flags|=e,i.memoizedState=Yn(1|r,t,void 0,n===void 0?null:n)}function Ki(e,r,t,n){var i=vr();n=n===void 0?null:n;var s=void 0;if(Fe!==null){var u=Fe.memoizedState;if(s=u.destroy,n!==null&&Jl(n,u.deps)){i.memoizedState=Yn(r,t,s,n);return}}Pe.flags|=e,i.memoizedState=Yn(1|r,t,s,n)}function Ju(e,r){return Yi(8390656,8,e,r)}function is(e,r){return Ki(2048,8,e,r)}function ec(e,r){return Ki(4,2,e,r)}function rc(e,r){return Ki(4,4,e,r)}function tc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function nc(e,r,t){return t=t!=null?t.concat([e]):null,Ki(4,4,tc.bind(null,r,e),t)}function os(){}function ic(e,r){var t=vr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&Jl(r,n[1])?n[0]:(t.memoizedState=[e,r],e)}function oc(e,r){var t=vr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&Jl(r,n[1])?n[0]:(e=e(),t.memoizedState=[e,r],e)}function lc(e,r,t){return(_t&21)===0?(e.baseState&&(e.baseState=!1,tr=!0),e.memoizedState=t):(Sr(t,r)||(t=Fa(),Pe.lanes|=t,Pt|=t,e.baseState=!0),r)}function Ep(e,r){var t=ge;ge=t!==0&&4>t?t:4,e(!0);var n=Zl.transition;Zl.transition={};try{e(!1),r()}finally{ge=t,Zl.transition=n}}function sc(){return vr().memoizedState}function _p(e,r,t){var n=pt(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},ac(e))uc(r,t);else if(t=Au(e,r,t,n),t!==null){var i=Je();Pr(t,e,n,i),cc(t,r,n)}}function Pp(e,r,t){var n=pt(e),i={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(ac(e))uc(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var u=r.lastRenderedState,d=s(u,t);if(i.hasEagerState=!0,i.eagerState=d,Sr(d,u)){var p=r.interleaved;p===null?(i.next=i,Gl(r)):(i.next=p.next,p.next=i),r.interleaved=i;return}}catch{}finally{}t=Au(e,r,i,n),t!==null&&(i=Je(),Pr(t,e,n,i),cc(t,r,n))}}function ac(e){var r=e.alternate;return e===Pe||r!==null&&r===Pe}function uc(e,r){Vn=Qi=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function cc(e,r,t){if((t&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,sl(e,t)}}var qi={readContext:gr,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},zp={readContext:gr,useCallback:function(e,r){return Ir().memoizedState=[e,r===void 0?null:r],e},useContext:gr,useEffect:Ju,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Yi(4194308,4,tc.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Yi(4194308,4,e,r)},useInsertionEffect:function(e,r){return Yi(4,2,e,r)},useMemo:function(e,r){var t=Ir();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var n=Ir();return r=t!==void 0?t(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=_p.bind(null,Pe,e),[n.memoizedState,e]},useRef:function(e){var r=Ir();return e={current:e},r.memoizedState=e},useState:Xu,useDebugValue:os,useDeferredValue:function(e){return Ir().memoizedState=e},useTransition:function(){var e=Xu(!1),r=e[0];return e=Ep.bind(null,e[1]),Ir().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var n=Pe,i=Ir();if(Ce){if(t===void 0)throw Error(c(407));t=t()}else{if(t=r(),Be===null)throw Error(c(349));(_t&30)!==0||Gu(n,r,t)}i.memoizedState=t;var s={value:t,getSnapshot:r};return i.queue=s,Ju(Yu.bind(null,n,s,e),[e]),n.flags|=2048,Yn(9,Qu.bind(null,n,s,t,r),void 0,null),t},useId:function(){var e=Ir(),r=Be.identifierPrefix;if(Ce){var t=Wr,n=Br;t=(n&~(1<<32-kr(n)-1)).toString(32)+t,r=":"+r+"R"+t,t=Gn++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=Cp++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},bp={readContext:gr,useCallback:ic,useContext:gr,useEffect:is,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:rc,useMemo:oc,useReducer:ts,useRef:Zu,useState:function(){return ts(Qn)},useDebugValue:os,useDeferredValue:function(e){var r=vr();return lc(r,Fe.memoizedState,e)},useTransition:function(){var e=ts(Qn)[0],r=vr().memoizedState;return[e,r]},useMutableSource:$u,useSyncExternalStore:Vu,useId:sc,unstable_isNewReconciler:!1},Op={readContext:gr,useCallback:ic,useContext:gr,useEffect:is,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:rc,useMemo:oc,useReducer:ns,useRef:Zu,useState:function(){return ns(Qn)},useDebugValue:os,useDeferredValue:function(e){var r=vr();return Fe===null?r.memoizedState=e:lc(r,Fe.memoizedState,e)},useTransition:function(){var e=ns(Qn)[0],r=vr().memoizedState;return[e,r]},useMutableSource:$u,useSyncExternalStore:Vu,useId:sc,unstable_isNewReconciler:!1};function Cr(e,r){if(e&&e.defaultProps){r=T({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function ls(e,r,t,n){r=e.memoizedState,t=t(n,r),t=t==null?r:T({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Xi={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var n=Je(),i=pt(e),s=Ur(n,i);s.payload=r,t!=null&&(s.callback=t),r=ut(e,s,i),r!==null&&(Pr(r,e,i,n),Ui(r,e,i))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var n=Je(),i=pt(e),s=Ur(n,i);s.tag=1,s.payload=r,t!=null&&(s.callback=t),r=ut(e,s,i),r!==null&&(Pr(r,e,i,n),Ui(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=Je(),n=pt(e),i=Ur(t,n);i.tag=2,r!=null&&(i.callback=r),r=ut(e,i,n),r!==null&&(Pr(r,e,n,t),Ui(r,e,n))}};function dc(e,r,t,n,i,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,u):r.prototype&&r.prototype.isPureReactComponent?!In(t,n)||!In(i,s):!0}function fc(e,r,t){var n=!1,i=lt,s=r.contextType;return typeof s=="object"&&s!==null?s=gr(s):(i=rr(r)?kt:Ge.current,n=r.contextTypes,s=(n=n!=null)?qt(e,i):lt),r=new r(t,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xi,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function pc(e,r,t,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,n),r.state!==e&&Xi.enqueueReplaceState(r,r.state,null)}function ss(e,r,t,n){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ql(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=gr(s):(s=rr(r)?kt:Ge.current,i.context=qt(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(ls(e,r,s,t),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Xi.enqueueReplaceState(i,i.state,null),$i(e,t,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,r){try{var t="",n=r;do t+=le(n),n=n.return;while(n);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function as(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function us(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var Tp=typeof WeakMap=="function"?WeakMap:Map;function hc(e,r,t){t=Ur(-1,t),t.tag=3,t.payload={element:null};var n=r.value;return t.callback=function(){io||(io=!0,Ns=n),us(e,r)},t}function mc(e,r,t){t=Ur(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=r.value;t.payload=function(){return n(i)},t.callback=function(){us(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){us(e,r),typeof n!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})}),t}function gc(e,r,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Tp;var i=new Set;n.set(r,i)}else i=n.get(r),i===void 0&&(i=new Set,n.set(r,i));i.has(t)||(i.add(t),e=Gp.bind(null,e,r,t),r.then(e,e))}function vc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function xc(e,r,t,n,i){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=Ur(-1,1),r.tag=2,ut(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Lp=O.ReactCurrentOwner,tr=!1;function Ze(e,r,t,n){r.child=e===null?Mu(r,null,t,n):en(r,e.child,t,n)}function yc(e,r,t,n,i){t=t.render;var s=r.ref;return tn(r,i),n=es(e,r,t,n,s,i),t=rs(),e!==null&&!tr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,$r(e,r,i)):(Ce&&t&&Dl(r),r.flags|=1,Ze(e,r,n,i),r.child)}function wc(e,r,t,n,i){if(e===null){var s=t.type;return typeof s=="function"&&!Os(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=s,jc(e,r,s,n,i)):(e=co(t.type,null,n,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,(e.lanes&i)===0){var u=s.memoizedProps;if(t=t.compare,t=t!==null?t:In,t(u,n)&&e.ref===r.ref)return $r(e,r,i)}return r.flags|=1,e=mt(s,n),e.ref=r.ref,e.return=r,r.child=e}function jc(e,r,t,n,i){if(e!==null){var s=e.memoizedProps;if(In(s,n)&&e.ref===r.ref)if(tr=!1,r.pendingProps=n=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(tr=!0);else return r.lanes=e.lanes,$r(e,r,i)}return cs(e,r,t,n,i)}function kc(e,r,t){var n=r.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(sn,cr),cr|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ye(sn,cr),cr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:t,ye(sn,cr),cr|=n}else s!==null?(n=s.baseLanes|t,r.memoizedState=null):n=t,ye(sn,cr),cr|=n;return Ze(e,r,i,t),r.child}function Sc(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function cs(e,r,t,n,i){var s=rr(t)?kt:Ge.current;return s=qt(r,s),tn(r,i),t=es(e,r,t,n,s,i),n=rs(),e!==null&&!tr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,$r(e,r,i)):(Ce&&n&&Dl(r),r.flags|=1,Ze(e,r,t,i),r.child)}function Nc(e,r,t,n,i){if(rr(t)){var s=!0;Ri(r)}else s=!1;if(tn(r,i),r.stateNode===null)Ji(e,r),fc(r,t,n),ss(r,t,n,i),n=!0;else if(e===null){var u=r.stateNode,d=r.memoizedProps;u.props=d;var p=u.context,y=t.contextType;typeof y=="object"&&y!==null?y=gr(y):(y=rr(t)?kt:Ge.current,y=qt(r,y));var S=t.getDerivedStateFromProps,N=typeof S=="function"||typeof u.getSnapshotBeforeUpdate=="function";N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==n||p!==y)&&pc(r,u,n,y),at=!1;var k=r.memoizedState;u.state=k,$i(r,n,u,i),p=r.memoizedState,d!==n||k!==p||er.current||at?(typeof S=="function"&&(ls(r,t,S,n),p=r.memoizedState),(d=at||dc(r,t,d,n,k,p,y))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(r.flags|=4194308)):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=p),u.props=n,u.state=p,u.context=y,n=d):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{u=r.stateNode,Bu(e,r),d=r.memoizedProps,y=r.type===r.elementType?d:Cr(r.type,d),u.props=y,N=r.pendingProps,k=u.context,p=t.contextType,typeof p=="object"&&p!==null?p=gr(p):(p=rr(t)?kt:Ge.current,p=qt(r,p));var L=t.getDerivedStateFromProps;(S=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==N||k!==p)&&pc(r,u,n,p),at=!1,k=r.memoizedState,u.state=k,$i(r,n,u,i);var R=r.memoizedState;d!==N||k!==R||er.current||at?(typeof L=="function"&&(ls(r,t,L,n),R=r.memoizedState),(y=at||dc(r,t,y,n,k,R,p)||!1)?(S||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,R,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,R,p)),typeof u.componentDidUpdate=="function"&&(r.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=R),u.props=n,u.state=R,u.context=p,n=y):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(r.flags|=1024),n=!1)}return ds(e,r,t,n,s,i)}function ds(e,r,t,n,i,s){Sc(e,r);var u=(r.flags&128)!==0;if(!n&&!u)return i&&zu(r,t,!1),$r(e,r,s);n=r.stateNode,Lp.current=r;var d=u&&typeof t.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&u?(r.child=en(r,e.child,null,s),r.child=en(r,null,d,s)):Ze(e,r,d,s),r.memoizedState=n.state,i&&zu(r,t,!0),r.child}function Cc(e){var r=e.stateNode;r.pendingContext?_u(e,r.pendingContext,r.pendingContext!==r.context):r.context&&_u(e,r.context,!1),Yl(e,r.containerInfo)}function Ec(e,r,t,n,i){return Jt(),Wl(i),r.flags|=256,Ze(e,r,t,n),r.child}var fs={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,r,t){var n=r.pendingProps,i=_e.current,s=!1,u=(r.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ye(_e,i&1),e===null)return Bl(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(u=n.children,e=n.fallback,s?(n=r.mode,s=r.child,u={mode:"hidden",children:u},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=u):s=fo(u,n,0,null),e=Tt(e,n,t,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=ps(t),r.memoizedState=fs,e):hs(r,u));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return Ip(e,r,u,n,d,i,t);if(s){s=n.fallback,u=r.mode,i=e.child,d=i.sibling;var p={mode:"hidden",children:n.children};return(u&1)===0&&r.child!==i?(n=r.child,n.childLanes=0,n.pendingProps=p,r.deletions=null):(n=mt(i,p),n.subtreeFlags=i.subtreeFlags&14680064),d!==null?s=mt(d,s):(s=Tt(s,u,t,null),s.flags|=2),s.return=r,n.return=r,n.sibling=s,r.child=n,n=s,s=r.child,u=e.child.memoizedState,u=u===null?ps(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},s.memoizedState=u,s.childLanes=e.childLanes&~t,r.memoizedState=fs,n}return s=e.child,e=s.sibling,n=mt(s,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=t),n.return=r,n.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=n,r.memoizedState=null,n}function hs(e,r){return r=fo({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Zi(e,r,t,n){return n!==null&&Wl(n),en(r,e.child,null,t),e=hs(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Ip(e,r,t,n,i,s,u){if(t)return r.flags&256?(r.flags&=-257,n=as(Error(c(422))),Zi(e,r,u,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=n.fallback,i=r.mode,n=fo({mode:"visible",children:n.children},i,0,null),s=Tt(s,i,u,null),s.flags|=2,n.return=r,s.return=r,n.sibling=s,r.child=n,(r.mode&1)!==0&&en(r,e.child,null,u),r.child.memoizedState=ps(u),r.memoizedState=fs,s);if((r.mode&1)===0)return Zi(e,r,u,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var d=n.dgst;return n=d,s=Error(c(419)),n=as(s,n,void 0),Zi(e,r,u,n)}if(d=(u&e.childLanes)!==0,tr||d){if(n=Be,n!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|u))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hr(e,i),Pr(n,e,i,-1))}return bs(),n=as(Error(c(421))),Zi(e,r,u,n)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=Qp.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,ur=it(i.nextSibling),ar=r,Ce=!0,Nr=null,e!==null&&(hr[mr++]=Br,hr[mr++]=Wr,hr[mr++]=St,Br=e.id,Wr=e.overflow,St=r),r=hs(r,n.children),r.flags|=4096,r)}function Pc(e,r,t){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),Vl(e.return,r,t)}function ms(e,r,t,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=t,s.tailMode=i)}function zc(e,r,t){var n=r.pendingProps,i=n.revealOrder,s=n.tail;if(Ze(e,r,n.children,t),n=_e.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,t,r);else if(e.tag===19)Pc(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ye(_e,n),(r.mode&1)===0)r.memoizedState=null;else switch(i){case"forwards":for(t=r.child,i=null;t!==null;)e=t.alternate,e!==null&&Vi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=r.child,r.child=null):(i=t.sibling,t.sibling=null),ms(r,!1,i,t,s);break;case"backwards":for(t=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Vi(e)===null){r.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ms(r,!0,t,null,s);break;case"together":ms(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ji(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function $r(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),Pt|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(c(153));if(r.child!==null){for(e=r.child,t=mt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=mt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function Rp(e,r,t){switch(r.tag){case 3:Cc(r),Jt();break;case 5:Uu(r);break;case 1:rr(r.type)&&Ri(r);break;case 4:Yl(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,i=r.memoizedProps.value;ye(Wi,n._currentValue),n._currentValue=i;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(ye(_e,_e.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?_c(e,r,t):(ye(_e,_e.current&1),e=$r(e,r,t),e!==null?e.sibling:null);ye(_e,_e.current&1);break;case 19:if(n=(t&r.childLanes)!==0,(e.flags&128)!==0){if(n)return zc(e,r,t);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(_e,_e.current),n)break;return null;case 22:case 23:return r.lanes=0,kc(e,r,t)}return $r(e,r,t)}var bc,gs,Oc,Tc;bc=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},gs=function(){},Oc=function(e,r,t,n){var i=e.memoizedProps;if(i!==n){e=r.stateNode,Et(Lr.current);var s=null;switch(t){case"input":i=Vo(e,i),n=Vo(e,n),s=[];break;case"select":i=T({},i,{value:void 0}),n=T({},n,{value:void 0}),s=[];break;case"textarea":i=Yo(e,i),n=Yo(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ti)}qo(t,n);var u;t=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var d=i[y];for(u in d)d.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?s||(s=[]):(s=s||[]).push(y,null));for(y in n){var p=n[y];if(d=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&p!==d&&(p!=null||d!=null))if(y==="style")if(d){for(u in d)!d.hasOwnProperty(u)||p&&p.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in p)p.hasOwnProperty(u)&&d[u]!==p[u]&&(t||(t={}),t[u]=p[u])}else t||(s||(s=[]),s.push(y,t)),t=p;else y==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(s=s||[]).push(y,p)):y==="children"?typeof p!="string"&&typeof p!="number"||(s=s||[]).push(y,""+p):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(p!=null&&y==="onScroll"&&we("scroll",e),s||d===p||(s=[])):(s=s||[]).push(y,p))}t&&(s=s||[]).push("style",t);var y=s;(r.updateQueue=y)&&(r.flags|=4)}},Tc=function(e,r,t,n){t!==n&&(r.flags|=4)};function Kn(e,r){if(!Ce)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ye(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(r)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=t,r}function Fp(e,r,t){var n=r.pendingProps;switch(Ml(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(r),null;case 1:return rr(r.type)&&Ii(),Ye(r),null;case 3:return n=r.stateNode,nn(),je(er),je(Ge),Xl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ai(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Nr!==null&&(_s(Nr),Nr=null))),gs(e,r),Ye(r),null;case 5:Kl(r);var i=Et($n.current);if(t=r.type,e!==null&&r.stateNode!=null)Oc(e,r,t,n,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(c(166));return Ye(r),null}if(e=Et(Lr.current),Ai(r)){n=r.stateNode,t=r.type;var s=r.memoizedProps;switch(n[Tr]=r,n[An]=s,e=(r.mode&1)!==0,t){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(i=0;i<Fn.length;i++)we(Fn[i],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":fa(n,s),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},we("invalid",n);break;case"textarea":ma(n,s),we("invalid",n)}qo(t,s),i=null;for(var u in s)if(s.hasOwnProperty(u)){var d=s[u];u==="children"?typeof d=="string"?n.textContent!==d&&(s.suppressHydrationWarning!==!0&&Oi(n.textContent,d,e),i=["children",d]):typeof d=="number"&&n.textContent!==""+d&&(s.suppressHydrationWarning!==!0&&Oi(n.textContent,d,e),i=["children",""+d]):m.hasOwnProperty(u)&&d!=null&&u==="onScroll"&&we("scroll",n)}switch(t){case"input":Xr(n),ha(n,s,!0);break;case"textarea":Xr(n),va(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ti)}n=i,r.updateQueue=n,n!==null&&(r.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=u.createElement(t,{is:n.is}):(e=u.createElement(t),t==="select"&&(u=e,n.multiple?u.multiple=!0:n.size&&(u.size=n.size))):e=u.createElementNS(e,t),e[Tr]=r,e[An]=n,bc(e,r,!1,!1),r.stateNode=e;e:{switch(u=Xo(t,n),t){case"dialog":we("cancel",e),we("close",e),i=n;break;case"iframe":case"object":case"embed":we("load",e),i=n;break;case"video":case"audio":for(i=0;i<Fn.length;i++)we(Fn[i],e);i=n;break;case"source":we("error",e),i=n;break;case"img":case"image":case"link":we("error",e),we("load",e),i=n;break;case"details":we("toggle",e),i=n;break;case"input":fa(e,n),i=Vo(e,n),we("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=T({},n,{value:void 0}),we("invalid",e);break;case"textarea":ma(e,n),i=Yo(e,n),we("invalid",e);break;default:i=n}qo(t,i),d=i;for(s in d)if(d.hasOwnProperty(s)){var p=d[s];s==="style"?ja(e,p):s==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ya(e,p)):s==="children"?typeof p=="string"?(t!=="textarea"||p!=="")&&vn(e,p):typeof p=="number"&&vn(e,""+p):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(m.hasOwnProperty(s)?p!=null&&s==="onScroll"&&we("scroll",e):p!=null&&te(e,s,p,u))}switch(t){case"input":Xr(e),ha(e,n,!1);break;case"textarea":Xr(e),va(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ae(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Mt(e,!!n.multiple,s,!1):n.defaultValue!=null&&Mt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ti)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ye(r),null;case 6:if(e&&r.stateNode!=null)Tc(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(c(166));if(t=Et($n.current),Et(Lr.current),Ai(r)){if(n=r.stateNode,t=r.memoizedProps,n[Tr]=r,(s=n.nodeValue!==t)&&(e=ar,e!==null))switch(e.tag){case 3:Oi(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oi(n.nodeValue,t,(e.mode&1)!==0)}s&&(r.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[Tr]=r,r.stateNode=n}return Ye(r),null;case 13:if(je(_e),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&ur!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ru(),Jt(),r.flags|=98560,s=!1;else if(s=Ai(r),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[Tr]=r}else Jt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ye(r),s=!1}else Nr!==null&&(_s(Nr),Nr=null),s=!0;if(!s)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(_e.current&1)!==0?De===0&&(De=3):bs())),r.updateQueue!==null&&(r.flags|=4),Ye(r),null);case 4:return nn(),gs(e,r),e===null&&Dn(r.stateNode.containerInfo),Ye(r),null;case 10:return $l(r.type._context),Ye(r),null;case 17:return rr(r.type)&&Ii(),Ye(r),null;case 19:if(je(_e),s=r.memoizedState,s===null)return Ye(r),null;if(n=(r.flags&128)!==0,u=s.rendering,u===null)if(n)Kn(s,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(u=Vi(e),u!==null){for(r.flags|=128,Kn(s,!1),n=u.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=t,t=r.child;t!==null;)s=t,e=n,s.flags&=14680066,u=s.alternate,u===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ye(_e,_e.current&1|2),r.child}e=e.sibling}s.tail!==null&&Te()>an&&(r.flags|=128,n=!0,Kn(s,!1),r.lanes=4194304)}else{if(!n)if(e=Vi(u),e!==null){if(r.flags|=128,n=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Kn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Ce)return Ye(r),null}else 2*Te()-s.renderingStartTime>an&&t!==1073741824&&(r.flags|=128,n=!0,Kn(s,!1),r.lanes=4194304);s.isBackwards?(u.sibling=r.child,r.child=u):(t=s.last,t!==null?t.sibling=u:r.child=u,s.last=u)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Te(),r.sibling=null,t=_e.current,ye(_e,n?t&1|2:t&1),r):(Ye(r),null);case 22:case 23:return zs(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(cr&1073741824)!==0&&(Ye(r),r.subtreeFlags&6&&(r.flags|=8192)):Ye(r),null;case 24:return null;case 25:return null}throw Error(c(156,r.tag))}function Dp(e,r){switch(Ml(r),r.tag){case 1:return rr(r.type)&&Ii(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return nn(),je(er),je(Ge),Xl(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Kl(r),null;case 13:if(je(_e),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(c(340));Jt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return je(_e),null;case 4:return nn(),null;case 10:return $l(r.type._context),null;case 22:case 23:return zs(),null;case 24:return null;default:return null}}var eo=!1,Ke=!1,Mp=typeof WeakSet=="function"?WeakSet:Set,I=null;function ln(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){be(e,r,n)}else t.current=null}function vs(e,r,t){try{t()}catch(n){be(e,r,n)}}var Lc=!1;function Ap(e,r){if(zl=wi,e=du(),jl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var u=0,d=-1,p=-1,y=0,S=0,N=e,k=null;r:for(;;){for(var L;N!==t||i!==0&&N.nodeType!==3||(d=u+i),N!==s||n!==0&&N.nodeType!==3||(p=u+n),N.nodeType===3&&(u+=N.nodeValue.length),(L=N.firstChild)!==null;)k=N,N=L;for(;;){if(N===e)break r;if(k===t&&++y===i&&(d=u),k===s&&++S===n&&(p=u),(L=N.nextSibling)!==null)break;N=k,k=N.parentNode}N=L}t=d===-1||p===-1?null:{start:d,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(bl={focusedElem:e,selectionRange:t},wi=!1,I=r;I!==null;)if(r=I,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,I=e;else for(;I!==null;){r=I;try{var R=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var F=R.memoizedProps,Le=R.memoizedState,v=r.stateNode,h=v.getSnapshotBeforeUpdate(r.elementType===r.type?F:Cr(r.type,F),Le);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=r.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(E){be(r,r.return,E)}if(e=r.sibling,e!==null){e.return=r.return,I=e;break}I=r.return}return R=Lc,Lc=!1,R}function qn(e,r,t){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&vs(r,t,s)}i=i.next}while(i!==n)}}function ro(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==r)}}function xs(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Ic(e){var r=e.alternate;r!==null&&(e.alternate=null,Ic(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Tr],delete r[An],delete r[Il],delete r[jp],delete r[kp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rc(e){return e.tag===5||e.tag===3||e.tag===4}function Fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Ti));else if(n!==4&&(e=e.child,e!==null))for(ys(e,r,t),e=e.sibling;e!==null;)ys(e,r,t),e=e.sibling}function ws(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ws(e,r,t),e=e.sibling;e!==null;)ws(e,r,t),e=e.sibling}var He=null,Er=!1;function ct(e,r,t){for(t=t.child;t!==null;)Dc(e,r,t),t=t.sibling}function Dc(e,r,t){if(Or&&typeof Or.onCommitFiberUnmount=="function")try{Or.onCommitFiberUnmount(hi,t)}catch{}switch(t.tag){case 5:Ke||ln(t,r);case 6:var n=He,i=Er;He=null,ct(e,r,t),He=n,Er=i,He!==null&&(Er?(e=He,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):He.removeChild(t.stateNode));break;case 18:He!==null&&(Er?(e=He,t=t.stateNode,e.nodeType===8?Ll(e.parentNode,t):e.nodeType===1&&Ll(e,t),Pn(e)):Ll(He,t.stateNode));break;case 4:n=He,i=Er,He=t.stateNode.containerInfo,Er=!0,ct(e,r,t),He=n,Er=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,u=s.destroy;s=s.tag,u!==void 0&&((s&2)!==0||(s&4)!==0)&&vs(t,r,u),i=i.next}while(i!==n)}ct(e,r,t);break;case 1:if(!Ke&&(ln(t,r),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(d){be(t,r,d)}ct(e,r,t);break;case 21:ct(e,r,t);break;case 22:t.mode&1?(Ke=(n=Ke)||t.memoizedState!==null,ct(e,r,t),Ke=n):ct(e,r,t);break;default:ct(e,r,t)}}function Mc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Mp),r.forEach(function(n){var i=Yp.bind(null,e,n);t.has(n)||(t.add(n),n.then(i,i))})}}function _r(e,r){var t=r.deletions;if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];try{var s=e,u=r,d=u;e:for(;d!==null;){switch(d.tag){case 5:He=d.stateNode,Er=!1;break e;case 3:He=d.stateNode.containerInfo,Er=!0;break e;case 4:He=d.stateNode.containerInfo,Er=!0;break e}d=d.return}if(He===null)throw Error(c(160));Dc(s,u,i),He=null,Er=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(y){be(i,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ac(r,e),r=r.sibling}function Ac(e,r){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_r(r,e),Rr(e),n&4){try{qn(3,e,e.return),ro(3,e)}catch(F){be(e,e.return,F)}try{qn(5,e,e.return)}catch(F){be(e,e.return,F)}}break;case 1:_r(r,e),Rr(e),n&512&&t!==null&&ln(t,t.return);break;case 5:if(_r(r,e),Rr(e),n&512&&t!==null&&ln(t,t.return),e.flags&32){var i=e.stateNode;try{vn(i,"")}catch(F){be(e,e.return,F)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,u=t!==null?t.memoizedProps:s,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&s.type==="radio"&&s.name!=null&&pa(i,s),Xo(d,u);var y=Xo(d,s);for(u=0;u<p.length;u+=2){var S=p[u],N=p[u+1];S==="style"?ja(i,N):S==="dangerouslySetInnerHTML"?ya(i,N):S==="children"?vn(i,N):te(i,S,N,y)}switch(d){case"input":Go(i,s);break;case"textarea":ga(i,s);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var L=s.value;L!=null?Mt(i,!!s.multiple,L,!1):k!==!!s.multiple&&(s.defaultValue!=null?Mt(i,!!s.multiple,s.defaultValue,!0):Mt(i,!!s.multiple,s.multiple?[]:"",!1))}i[An]=s}catch(F){be(e,e.return,F)}}break;case 6:if(_r(r,e),Rr(e),n&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(F){be(e,e.return,F)}}break;case 3:if(_r(r,e),Rr(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(F){be(e,e.return,F)}break;case 4:_r(r,e),Rr(e);break;case 13:_r(r,e),Rr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ss=Te())),n&4&&Mc(e);break;case 22:if(S=t!==null&&t.memoizedState!==null,e.mode&1?(Ke=(y=Ke)||S,_r(r,e),Ke=y):_r(r,e),Rr(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!S&&(e.mode&1)!==0)for(I=e,S=e.child;S!==null;){for(N=I=S;I!==null;){switch(k=I,L=k.child,k.tag){case 0:case 11:case 14:case 15:qn(4,k,k.return);break;case 1:ln(k,k.return);var R=k.stateNode;if(typeof R.componentWillUnmount=="function"){n=k,t=k.return;try{r=n,R.props=r.memoizedProps,R.state=r.memoizedState,R.componentWillUnmount()}catch(F){be(n,t,F)}}break;case 5:ln(k,k.return);break;case 22:if(k.memoizedState!==null){Hc(N);continue}}L!==null?(L.return=k,I=L):Hc(N)}S=S.sibling}e:for(S=null,N=e;;){if(N.tag===5){if(S===null){S=N;try{i=N.stateNode,y?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(d=N.stateNode,p=N.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=wa("display",u))}catch(F){be(e,e.return,F)}}}else if(N.tag===6){if(S===null)try{N.stateNode.nodeValue=y?"":N.memoizedProps}catch(F){be(e,e.return,F)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;S===N&&(S=null),N=N.return}S===N&&(S=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:_r(r,e),Rr(e),n&4&&Mc(e);break;case 21:break;default:_r(r,e),Rr(e)}}function Rr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Rc(t)){var n=t;break e}t=t.return}throw Error(c(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(vn(i,""),n.flags&=-33);var s=Fc(e);ws(e,s,i);break;case 3:case 4:var u=n.stateNode.containerInfo,d=Fc(e);ys(e,d,u);break;default:throw Error(c(161))}}catch(p){be(e,e.return,p)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Bp(e,r,t){I=e,Bc(e)}function Bc(e,r,t){for(var n=(e.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&n){var u=i.memoizedState!==null||eo;if(!u){var d=i.alternate,p=d!==null&&d.memoizedState!==null||Ke;d=eo;var y=Ke;if(eo=u,(Ke=p)&&!y)for(I=i;I!==null;)u=I,p=u.child,u.tag===22&&u.memoizedState!==null?Uc(i):p!==null?(p.return=u,I=p):Uc(i);for(;s!==null;)I=s,Bc(s),s=s.sibling;I=i,eo=d,Ke=y}Wc(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,I=s):Wc(e)}}function Wc(e){for(;I!==null;){var r=I;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ke||ro(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!Ke)if(t===null)n.componentDidMount();else{var i=r.elementType===r.type?t.memoizedProps:Cr(r.type,t.memoizedProps);n.componentDidUpdate(i,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Hu(r,s,n);break;case 3:var u=r.updateQueue;if(u!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Hu(r,u,t)}break;case 5:var d=r.stateNode;if(t===null&&r.flags&4){t=d;var p=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&t.focus();break;case"img":p.src&&(t.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var S=y.memoizedState;if(S!==null){var N=S.dehydrated;N!==null&&Pn(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ke||r.flags&512&&xs(r)}catch(k){be(r,r.return,k)}}if(r===e){I=null;break}if(t=r.sibling,t!==null){t.return=r.return,I=t;break}I=r.return}}function Hc(e){for(;I!==null;){var r=I;if(r===e){I=null;break}var t=r.sibling;if(t!==null){t.return=r.return,I=t;break}I=r.return}}function Uc(e){for(;I!==null;){var r=I;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{ro(4,r)}catch(p){be(r,t,p)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var i=r.return;try{n.componentDidMount()}catch(p){be(r,i,p)}}var s=r.return;try{xs(r)}catch(p){be(r,s,p)}break;case 5:var u=r.return;try{xs(r)}catch(p){be(r,u,p)}}}catch(p){be(r,r.return,p)}if(r===e){I=null;break}var d=r.sibling;if(d!==null){d.return=r.return,I=d;break}I=r.return}}var Wp=Math.ceil,to=O.ReactCurrentDispatcher,js=O.ReactCurrentOwner,xr=O.ReactCurrentBatchConfig,de=0,Be=null,Ie=null,Ue=0,cr=0,sn=ot(0),De=0,Xn=null,Pt=0,no=0,ks=0,Zn=null,nr=null,Ss=0,an=1/0,Vr=null,io=!1,Ns=null,dt=null,oo=!1,ft=null,lo=0,Jn=0,Cs=null,so=-1,ao=0;function Je(){return(de&6)!==0?Te():so!==-1?so:so=Te()}function pt(e){return(e.mode&1)===0?1:(de&2)!==0&&Ue!==0?Ue&-Ue:Np.transition!==null?(ao===0&&(ao=Fa()),ao):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Va(e.type)),e)}function Pr(e,r,t,n){if(50<Jn)throw Jn=0,Cs=null,Error(c(185));Sn(e,t,n),((de&2)===0||e!==Be)&&(e===Be&&((de&2)===0&&(no|=t),De===4&&ht(e,Ue)),ir(e,n),t===1&&de===0&&(r.mode&1)===0&&(an=Te()+500,Fi&&st()))}function ir(e,r){var t=e.callbackNode;Nf(e,r);var n=vi(e,e===Be?Ue:0);if(n===0)t!==null&&La(t),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(t!=null&&La(t),r===1)e.tag===0?Sp(Vc.bind(null,e)):bu(Vc.bind(null,e)),yp(function(){(de&6)===0&&st()}),t=null;else{switch(Da(n)){case 1:t=il;break;case 4:t=Ia;break;case 16:t=pi;break;case 536870912:t=Ra;break;default:t=pi}t=Jc(t,$c.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function $c(e,r){if(so=-1,ao=0,(de&6)!==0)throw Error(c(327));var t=e.callbackNode;if(un()&&e.callbackNode!==t)return null;var n=vi(e,e===Be?Ue:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=uo(e,n);else{r=n;var i=de;de|=2;var s=Qc();(Be!==e||Ue!==r)&&(Vr=null,an=Te()+500,bt(e,r));do try{$p();break}catch(d){Gc(e,d)}while(!0);Ul(),to.current=s,de=i,Ie!==null?r=0:(Be=null,Ue=0,r=De)}if(r!==0){if(r===2&&(i=ol(e),i!==0&&(n=i,r=Es(e,i))),r===1)throw t=Xn,bt(e,0),ht(e,n),ir(e,Te()),t;if(r===6)ht(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Hp(i)&&(r=uo(e,n),r===2&&(s=ol(e),s!==0&&(n=s,r=Es(e,s))),r===1))throw t=Xn,bt(e,0),ht(e,n),ir(e,Te()),t;switch(e.finishedWork=i,e.finishedLanes=n,r){case 0:case 1:throw Error(c(345));case 2:Ot(e,nr,Vr);break;case 3:if(ht(e,n),(n&130023424)===n&&(r=Ss+500-Te(),10<r)){if(vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Tl(Ot.bind(null,e,nr,Vr),r);break}Ot(e,nr,Vr);break;case 4:if(ht(e,n),(n&4194240)===n)break;for(r=e.eventTimes,i=-1;0<n;){var u=31-kr(n);s=1<<u,u=r[u],u>i&&(i=u),n&=~s}if(n=i,n=Te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Wp(n/1960))-n,10<n){e.timeoutHandle=Tl(Ot.bind(null,e,nr,Vr),n);break}Ot(e,nr,Vr);break;case 5:Ot(e,nr,Vr);break;default:throw Error(c(329))}}}return ir(e,Te()),e.callbackNode===t?$c.bind(null,e):null}function Es(e,r){var t=Zn;return e.current.memoizedState.isDehydrated&&(bt(e,r).flags|=256),e=uo(e,r),e!==2&&(r=nr,nr=t,r!==null&&_s(r)),e}function _s(e){nr===null?nr=e:nr.push.apply(nr,e)}function Hp(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var i=t[n],s=i.getSnapshot;i=i.value;try{if(!Sr(s(),i))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ht(e,r){for(r&=~ks,r&=~no,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-kr(r),n=1<<t;e[t]=-1,r&=~n}}function Vc(e){if((de&6)!==0)throw Error(c(327));un();var r=vi(e,0);if((r&1)===0)return ir(e,Te()),null;var t=uo(e,r);if(e.tag!==0&&t===2){var n=ol(e);n!==0&&(r=n,t=Es(e,n))}if(t===1)throw t=Xn,bt(e,0),ht(e,r),ir(e,Te()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Ot(e,nr,Vr),ir(e,Te()),null}function Ps(e,r){var t=de;de|=1;try{return e(r)}finally{de=t,de===0&&(an=Te()+500,Fi&&st())}}function zt(e){ft!==null&&ft.tag===0&&(de&6)===0&&un();var r=de;de|=1;var t=xr.transition,n=ge;try{if(xr.transition=null,ge=1,e)return e()}finally{ge=n,xr.transition=t,de=r,(de&6)===0&&st()}}function zs(){cr=sn.current,je(sn)}function bt(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,xp(t)),Ie!==null)for(t=Ie.return;t!==null;){var n=t;switch(Ml(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ii();break;case 3:nn(),je(er),je(Ge),Xl();break;case 5:Kl(n);break;case 4:nn();break;case 13:je(_e);break;case 19:je(_e);break;case 10:$l(n.type._context);break;case 22:case 23:zs()}t=t.return}if(Be=e,Ie=e=mt(e.current,null),Ue=cr=r,De=0,Xn=null,ks=no=Pt=0,nr=Zn=null,Ct!==null){for(r=0;r<Ct.length;r++)if(t=Ct[r],n=t.interleaved,n!==null){t.interleaved=null;var i=n.next,s=t.pending;if(s!==null){var u=s.next;s.next=i,n.next=u}t.pending=n}Ct=null}return e}function Gc(e,r){do{var t=Ie;try{if(Ul(),Gi.current=qi,Qi){for(var n=Pe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Qi=!1}if(_t=0,Ae=Fe=Pe=null,Vn=!1,Gn=0,js.current=null,t===null||t.return===null){De=1,Xn=r,Ie=null;break}e:{var s=e,u=t.return,d=t,p=r;if(r=Ue,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var y=p,S=d,N=S.tag;if((S.mode&1)===0&&(N===0||N===11||N===15)){var k=S.alternate;k?(S.updateQueue=k.updateQueue,S.memoizedState=k.memoizedState,S.lanes=k.lanes):(S.updateQueue=null,S.memoizedState=null)}var L=vc(u);if(L!==null){L.flags&=-257,xc(L,u,d,s,r),L.mode&1&&gc(s,y,r),r=L,p=y;var R=r.updateQueue;if(R===null){var F=new Set;F.add(p),r.updateQueue=F}else R.add(p);break e}else{if((r&1)===0){gc(s,y,r),bs();break e}p=Error(c(426))}}else if(Ce&&d.mode&1){var Le=vc(u);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),xc(Le,u,d,s,r),Wl(on(p,d));break e}}s=p=on(p,d),De!==4&&(De=2),Zn===null?Zn=[s]:Zn.push(s),s=u;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var v=hc(s,p,r);Wu(s,v);break e;case 1:d=p;var h=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(dt===null||!dt.has(x)))){s.flags|=65536,r&=-r,s.lanes|=r;var E=mc(s,d,r);Wu(s,E);break e}}s=s.return}while(s!==null)}Kc(t)}catch(M){r=M,Ie===t&&t!==null&&(Ie=t=t.return);continue}break}while(!0)}function Qc(){var e=to.current;return to.current=qi,e===null?qi:e}function bs(){(De===0||De===3||De===2)&&(De=4),Be===null||(Pt&268435455)===0&&(no&268435455)===0||ht(Be,Ue)}function uo(e,r){var t=de;de|=2;var n=Qc();(Be!==e||Ue!==r)&&(Vr=null,bt(e,r));do try{Up();break}catch(i){Gc(e,i)}while(!0);if(Ul(),de=t,to.current=n,Ie!==null)throw Error(c(261));return Be=null,Ue=0,De}function Up(){for(;Ie!==null;)Yc(Ie)}function $p(){for(;Ie!==null&&!mf();)Yc(Ie)}function Yc(e){var r=Zc(e.alternate,e,cr);e.memoizedProps=e.pendingProps,r===null?Kc(e):Ie=r,js.current=null}function Kc(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Fp(t,r,cr),t!==null){Ie=t;return}}else{if(t=Dp(t,r),t!==null){t.flags&=32767,Ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Ie=null;return}}if(r=r.sibling,r!==null){Ie=r;return}Ie=r=e}while(r!==null);De===0&&(De=5)}function Ot(e,r,t){var n=ge,i=xr.transition;try{xr.transition=null,ge=1,Vp(e,r,t,n)}finally{xr.transition=i,ge=n}return null}function Vp(e,r,t,n){do un();while(ft!==null);if((de&6)!==0)throw Error(c(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Cf(e,s),e===Be&&(Ie=Be=null,Ue=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||oo||(oo=!0,Jc(pi,function(){return un(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=xr.transition,xr.transition=null;var u=ge;ge=1;var d=de;de|=4,js.current=null,Ap(e,t),Ac(t,e),dp(bl),wi=!!zl,bl=zl=null,e.current=t,Bp(t),gf(),de=d,ge=u,xr.transition=s}else e.current=t;if(oo&&(oo=!1,ft=e,lo=i),s=e.pendingLanes,s===0&&(dt=null),yf(t.stateNode),ir(e,Te()),r!==null)for(n=e.onRecoverableError,t=0;t<r.length;t++)i=r[t],n(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,e=Ns,Ns=null,e;return(lo&1)!==0&&e.tag!==0&&un(),s=e.pendingLanes,(s&1)!==0?e===Cs?Jn++:(Jn=0,Cs=e):Jn=0,st(),null}function un(){if(ft!==null){var e=Da(lo),r=xr.transition,t=ge;try{if(xr.transition=null,ge=16>e?16:e,ft===null)var n=!1;else{if(e=ft,ft=null,lo=0,(de&6)!==0)throw Error(c(331));var i=de;for(de|=4,I=e.current;I!==null;){var s=I,u=s.child;if((I.flags&16)!==0){var d=s.deletions;if(d!==null){for(var p=0;p<d.length;p++){var y=d[p];for(I=y;I!==null;){var S=I;switch(S.tag){case 0:case 11:case 15:qn(8,S,s)}var N=S.child;if(N!==null)N.return=S,I=N;else for(;I!==null;){S=I;var k=S.sibling,L=S.return;if(Ic(S),S===y){I=null;break}if(k!==null){k.return=L,I=k;break}I=L}}}var R=s.alternate;if(R!==null){var F=R.child;if(F!==null){R.child=null;do{var Le=F.sibling;F.sibling=null,F=Le}while(F!==null)}}I=s}}if((s.subtreeFlags&2064)!==0&&u!==null)u.return=s,I=u;else e:for(;I!==null;){if(s=I,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:qn(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,I=v;break e}I=s.return}}var h=e.current;for(I=h;I!==null;){u=I;var x=u.child;if((u.subtreeFlags&2064)!==0&&x!==null)x.return=u,I=x;else e:for(u=h;I!==null;){if(d=I,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:ro(9,d)}}catch(M){be(d,d.return,M)}if(d===u){I=null;break e}var E=d.sibling;if(E!==null){E.return=d.return,I=E;break e}I=d.return}}if(de=i,st(),Or&&typeof Or.onPostCommitFiberRoot=="function")try{Or.onPostCommitFiberRoot(hi,e)}catch{}n=!0}return n}finally{ge=t,xr.transition=r}}return!1}function qc(e,r,t){r=on(t,r),r=hc(e,r,1),e=ut(e,r,1),r=Je(),e!==null&&(Sn(e,1,r),ir(e,r))}function be(e,r,t){if(e.tag===3)qc(e,e,t);else for(;r!==null;){if(r.tag===3){qc(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(dt===null||!dt.has(n))){e=on(t,e),e=mc(r,e,1),r=ut(r,e,1),e=Je(),r!==null&&(Sn(r,1,e),ir(r,e));break}}r=r.return}}function Gp(e,r,t){var n=e.pingCache;n!==null&&n.delete(r),r=Je(),e.pingedLanes|=e.suspendedLanes&t,Be===e&&(Ue&t)===t&&(De===4||De===3&&(Ue&130023424)===Ue&&500>Te()-Ss?bt(e,0):ks|=t),ir(e,r)}function Xc(e,r){r===0&&((e.mode&1)===0?r=1:(r=gi,gi<<=1,(gi&130023424)===0&&(gi=4194304)));var t=Je();e=Hr(e,r),e!==null&&(Sn(e,r,t),ir(e,t))}function Qp(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Xc(e,t)}function Yp(e,r){var t=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(c(314))}n!==null&&n.delete(r),Xc(e,t)}var Zc;Zc=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||er.current)tr=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return tr=!1,Rp(e,r,t);tr=(e.flags&131072)!==0}else tr=!1,Ce&&(r.flags&1048576)!==0&&Ou(r,Mi,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;Ji(e,r),e=r.pendingProps;var i=qt(r,Ge.current);tn(r,t),i=es(null,r,n,e,i,t);var s=rs();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,rr(n)?(s=!0,Ri(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ql(r),i.updater=Xi,r.stateNode=i,i._reactInternals=r,ss(r,n,e,t),r=ds(null,r,n,!0,s,t)):(r.tag=0,Ce&&s&&Dl(r),Ze(null,r,i,t),r=r.child),r;case 16:n=r.elementType;e:{switch(Ji(e,r),e=r.pendingProps,i=n._init,n=i(n._payload),r.type=n,i=r.tag=qp(n),e=Cr(n,e),i){case 0:r=cs(null,r,n,e,t);break e;case 1:r=Nc(null,r,n,e,t);break e;case 11:r=yc(null,r,n,e,t);break e;case 14:r=wc(null,r,n,Cr(n.type,e),t);break e}throw Error(c(306,n,""))}return r;case 0:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:Cr(n,i),cs(e,r,n,i,t);case 1:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:Cr(n,i),Nc(e,r,n,i,t);case 3:e:{if(Cc(r),e===null)throw Error(c(387));n=r.pendingProps,s=r.memoizedState,i=s.element,Bu(e,r),$i(r,n,null,t);var u=r.memoizedState;if(n=u.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=on(Error(c(423)),r),r=Ec(e,r,n,t,i);break e}else if(n!==i){i=on(Error(c(424)),r),r=Ec(e,r,n,t,i);break e}else for(ur=it(r.stateNode.containerInfo.firstChild),ar=r,Ce=!0,Nr=null,t=Mu(r,null,n,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Jt(),n===i){r=$r(e,r,t);break e}Ze(e,r,n,t)}r=r.child}return r;case 5:return Uu(r),e===null&&Bl(r),n=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,u=i.children,Ol(n,i)?u=null:s!==null&&Ol(n,s)&&(r.flags|=32),Sc(e,r),Ze(e,r,u,t),r.child;case 6:return e===null&&Bl(r),null;case 13:return _c(e,r,t);case 4:return Yl(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=en(r,null,n,t):Ze(e,r,n,t),r.child;case 11:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:Cr(n,i),yc(e,r,n,i,t);case 7:return Ze(e,r,r.pendingProps,t),r.child;case 8:return Ze(e,r,r.pendingProps.children,t),r.child;case 12:return Ze(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(n=r.type._context,i=r.pendingProps,s=r.memoizedProps,u=i.value,ye(Wi,n._currentValue),n._currentValue=u,s!==null)if(Sr(s.value,u)){if(s.children===i.children&&!er.current){r=$r(e,r,t);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var d=s.dependencies;if(d!==null){u=s.child;for(var p=d.firstContext;p!==null;){if(p.context===n){if(s.tag===1){p=Ur(-1,t&-t),p.tag=2;var y=s.updateQueue;if(y!==null){y=y.shared;var S=y.pending;S===null?p.next=p:(p.next=S.next,S.next=p),y.pending=p}}s.lanes|=t,p=s.alternate,p!==null&&(p.lanes|=t),Vl(s.return,t,r),d.lanes|=t;break}p=p.next}}else if(s.tag===10)u=s.type===r.type?null:s.child;else if(s.tag===18){if(u=s.return,u===null)throw Error(c(341));u.lanes|=t,d=u.alternate,d!==null&&(d.lanes|=t),Vl(u,t,r),u=s.sibling}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===r){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}Ze(e,r,i.children,t),r=r.child}return r;case 9:return i=r.type,n=r.pendingProps.children,tn(r,t),i=gr(i),n=n(i),r.flags|=1,Ze(e,r,n,t),r.child;case 14:return n=r.type,i=Cr(n,r.pendingProps),i=Cr(n.type,i),wc(e,r,n,i,t);case 15:return jc(e,r,r.type,r.pendingProps,t);case 17:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:Cr(n,i),Ji(e,r),r.tag=1,rr(n)?(e=!0,Ri(r)):e=!1,tn(r,t),fc(r,n,i),ss(r,n,i,t),ds(null,r,n,!0,e,t);case 19:return zc(e,r,t);case 22:return kc(e,r,t)}throw Error(c(156,r.tag))};function Jc(e,r){return Ta(e,r)}function Kp(e,r,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(e,r,t,n){return new Kp(e,r,t,n)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qp(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ze)return 11;if(e===Xe)return 14}return 2}function mt(e,r){var t=e.alternate;return t===null?(t=yr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function co(e,r,t,n,i,s){var u=2;if(n=e,typeof e=="function")Os(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case z:return Tt(t.children,i,s,r);case D:u=8,i|=8;break;case ve:return e=yr(12,t,r,i|2),e.elementType=ve,e.lanes=s,e;case Ne:return e=yr(13,t,r,i),e.elementType=Ne,e.lanes=s,e;case $e:return e=yr(19,t,r,i),e.elementType=$e,e.lanes=s,e;case xe:return fo(t,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:u=10;break e;case oe:u=9;break e;case ze:u=11;break e;case Xe:u=14;break e;case Ve:u=16,n=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return r=yr(u,t,r,i),r.elementType=e,r.type=n,r.lanes=s,r}function Tt(e,r,t,n){return e=yr(7,e,n,r),e.lanes=t,e}function fo(e,r,t,n){return e=yr(22,e,n,r),e.elementType=xe,e.lanes=t,e.stateNode={isHidden:!1},e}function Ts(e,r,t){return e=yr(6,e,null,r),e.lanes=t,e}function Ls(e,r,t){return r=yr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Xp(e,r,t,n,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Is(e,r,t,n,i,s,u,d,p){return e=new Xp(e,r,t,d,p),r===1?(r=1,s===!0&&(r|=8)):r=0,s=yr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(s),e}function Zp(e,r,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:n==null?null:""+n,children:e,containerInfo:r,implementation:t}}function ed(e){if(!e)return lt;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(c(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(rr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(rr(t))return Pu(e,t,r)}return r}function rd(e,r,t,n,i,s,u,d,p){return e=Is(t,n,!0,e,i,s,u,d,p),e.context=ed(null),t=e.current,n=Je(),i=pt(t),s=Ur(n,i),s.callback=r!=null?r:null,ut(t,s,i),e.current.lanes=i,Sn(e,i,n),ir(e,n),e}function po(e,r,t,n){var i=r.current,s=Je(),u=pt(i);return t=ed(t),r.context===null?r.context=t:r.pendingContext=t,r=Ur(s,u),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=ut(i,r,u),e!==null&&(Pr(e,i,u,s),Ui(e,i,u)),u}function ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function td(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function Rs(e,r){td(e,r),(e=e.alternate)&&td(e,r)}function Jp(){return null}var nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fs(e){this._internalRoot=e}mo.prototype.render=Fs.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(c(409));po(e,r,null,null)},mo.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;zt(function(){po(null,e,null,null)}),r[Mr]=null}};function mo(e){this._internalRoot=e}mo.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ba();e={blockedOn:null,target:e,priority:r};for(var t=0;t<rt.length&&r!==0&&r<rt[t].priority;t++);rt.splice(t,0,e),t===0&&Ua(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function eh(e,r,t,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var y=ho(u);s.call(y)}}var u=rd(r,n,e,0,null,!1,!1,"",id);return e._reactRootContainer=u,e[Mr]=u.current,Dn(e.nodeType===8?e.parentNode:e),zt(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var d=n;n=function(){var y=ho(p);d.call(y)}}var p=Is(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=p,e[Mr]=p.current,Dn(e.nodeType===8?e.parentNode:e),zt(function(){po(r,p,t,n)}),p}function vo(e,r,t,n,i){var s=t._reactRootContainer;if(s){var u=s;if(typeof i=="function"){var d=i;i=function(){var p=ho(u);d.call(p)}}po(r,u,e,i)}else u=eh(t,r,e,i,n);return ho(u)}Ma=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=kn(r.pendingLanes);t!==0&&(sl(r,t|1),ir(r,Te()),(de&6)===0&&(an=Te()+500,st()))}break;case 13:zt(function(){var n=Hr(e,1);if(n!==null){var i=Je();Pr(n,e,1,i)}}),Rs(e,1)}},al=function(e){if(e.tag===13){var r=Hr(e,134217728);if(r!==null){var t=Je();Pr(r,e,134217728,t)}Rs(e,134217728)}},Aa=function(e){if(e.tag===13){var r=pt(e),t=Hr(e,r);if(t!==null){var n=Je();Pr(t,e,r,n)}Rs(e,r)}},Ba=function(){return ge},Wa=function(e,r){var t=ge;try{return ge=e,r()}finally{ge=t}},el=function(e,r,t){switch(r){case"input":if(Go(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var n=t[r];if(n!==e&&n.form===e.form){var i=Li(n);if(!i)throw Error(c(90));yt(n),Go(n,i)}}}break;case"textarea":ga(e,t);break;case"select":r=t.value,r!=null&&Mt(e,!!t.multiple,r,!1)}},Ca=Ps,Ea=zt;var rh={usingClientEntryPoint:!1,Events:[Bn,Yt,Li,Sa,Na,Ps]},ei={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},th={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ba(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||Jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{hi=xo.inject(th),Or=xo}catch{}}return or.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh,or.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(r))throw Error(c(200));return Zp(e,r,null,t)},or.createRoot=function(e,r){if(!Ds(e))throw Error(c(299));var t=!1,n="",i=nd;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Is(e,1,!1,null,null,t,!1,n,i),e[Mr]=r.current,Dn(e.nodeType===8?e.parentNode:e),new Fs(r)},or.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ba(r),e=e===null?null:e.stateNode,e},or.flushSync=function(e){return zt(e)},or.hydrate=function(e,r,t){if(!go(r))throw Error(c(200));return vo(null,e,r,!0,t)},or.hydrateRoot=function(e,r,t){if(!Ds(e))throw Error(c(405));var n=t!=null&&t.hydratedSources||null,i=!1,s="",u=nd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),r=rd(r,null,e,1,t!=null?t:null,i,!1,s,u),e[Mr]=r.current,Dn(e),n)for(e=0;e<n.length;e++)t=n[e],i=t._getVersion,i=i(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,i]:r.mutableSourceEagerHydrationData.push(t,i);return new mo(r)},or.render=function(e,r,t){if(!go(r))throw Error(c(200));return vo(null,e,r,!1,t)},or.unmountComponentAtNode=function(e){if(!go(e))throw Error(c(40));return e._reactRootContainer?(zt(function(){vo(null,null,e,!1,function(){e._reactRootContainer=null,e[Mr]=null})}),!0):!1},or.unstable_batchedUpdates=Ps,or.unstable_renderSubtreeIntoContainer=function(e,r,t,n){if(!go(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return vo(e,r,t,!1,n)},or.version="18.3.1-next-f1338f8080-20240426",or}var fd;function dh(){if(fd)return Bs.exports;fd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),Bs.exports=ch(),Bs.exports}var pd;function fh(){if(pd)return yo;pd=1;var o=dh();return yo.createRoot=o.createRoot,yo.hydrateRoot=o.hydrateRoot,yo}var ph=fh(),qe=ia();const fr=ih(qe);var lr=function(){return lr=Object.assign||function(a){for(var c,f=1,m=arguments.length;f<m;f++){c=arguments[f];for(var w in c)Object.prototype.hasOwnProperty.call(c,w)&&(a[w]=c[w])}return a},lr.apply(this,arguments)};function Io(o,a,c){if(c||arguments.length===2)for(var f=0,m=a.length,w;f<m;f++)(w||!(f in a))&&(w||(w=Array.prototype.slice.call(a,0,f)),w[f]=a[f]);return o.concat(w||Array.prototype.slice.call(a))}var ke="-ms-",ii="-moz-",pe="-webkit-",Fd="comm",Bo="rule",oa="decl",hh="@import",mh="@namespace",Dd="@keyframes",gh="@layer",Md=Math.abs,la=String.fromCharCode,Ks=Object.assign;function vh(o,a){return Me(o,0)^45?(((a<<2^Me(o,0))<<2^Me(o,1))<<2^Me(o,2))<<2^Me(o,3):0}function Ad(o){return o.trim()}function Gr(o,a){return(o=a.exec(o))?o[0]:o}function re(o,a,c){return o.replace(a,c)}function zo(o,a,c){return o.indexOf(a,c)}function Me(o,a){return o.charCodeAt(a)|0}function Dt(o,a,c){return o.slice(a,c)}function zr(o){return o.length}function Bd(o){return o.length}function ti(o,a){return a.push(o),o}function xh(o,a){return o.map(a).join("")}function hd(o,a){return o.filter(function(c){return!Gr(c,a)})}var Wo=1,dn=1,Wd=0,wr=0,Re=0,mn="";function Ho(o,a,c,f,m,w,C,b){return{value:o,root:a,parent:c,type:f,props:m,children:w,line:Wo,column:dn,length:C,return:"",siblings:b}}function vt(o,a){return Ks(Ho("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},a)}function cn(o){for(;o.root;)o=vt(o.root,{children:[o]});ti(o,o.siblings)}function yh(){return Re}function wh(){return Re=wr>0?Me(mn,--wr):0,dn--,Re===10&&(dn=1,Wo--),Re}function br(){return Re=wr<Wd?Me(mn,wr++):0,dn++,Re===10&&(dn=1,Wo++),Re}function xt(){return Me(mn,wr)}function bo(){return wr}function Uo(o,a){return Dt(mn,o,a)}function li(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jh(o){return Wo=dn=1,Wd=zr(mn=o),wr=0,[]}function kh(o){return mn="",o}function Us(o){return Ad(Uo(wr-1,qs(o===91?o+2:o===40?o+1:o)))}function Sh(o){for(;(Re=xt())&&Re<33;)br();return li(o)>2||li(Re)>3?"":" "}function Nh(o,a){for(;--a&&br()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Uo(o,bo()+(a<6&&xt()==32&&br()==32))}function qs(o){for(;br();)switch(Re){case o:return wr;case 34:case 39:o!==34&&o!==39&&qs(Re);break;case 40:o===41&&qs(o);break;case 92:br();break}return wr}function Ch(o,a){for(;br()&&o+Re!==57;)if(o+Re===84&&xt()===47)break;return"/*"+Uo(a,wr-1)+"*"+la(o===47?o:br())}function Eh(o){for(;!li(xt());)br();return Uo(o,wr)}function _h(o){return kh(Oo("",null,null,null,[""],o=jh(o),0,[0],o))}function Oo(o,a,c,f,m,w,C,b,_){for(var Y=0,V=0,B=C,Z=0,se=0,q=0,W=1,G=1,he=1,ue=0,te="",O=m,X=w,H=f,z=te;G;)switch(q=ue,ue=br()){case 40:if(q!=108&&Me(z,B-1)==58){zo(z+=re(Us(ue),"&","&\f"),"&\f",Md(Y?b[Y-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:z+=Us(ue);break;case 9:case 10:case 13:case 32:z+=Sh(q);break;case 92:z+=Nh(bo()-1,7);continue;case 47:switch(xt()){case 42:case 47:ti(Ph(Ch(br(),bo()),a,c,_),_),(li(q||1)==5||li(xt()||1)==5)&&zr(z)&&Dt(z,-1,void 0)!==" "&&(z+=" ");break;default:z+="/"}break;case 123*W:b[Y++]=zr(z)*he;case 125*W:case 59:case 0:switch(ue){case 0:case 125:G=0;case 59+V:he==-1&&(z=re(z,/\f/g,"")),se>0&&(zr(z)-B||W===0&&q===47)&&ti(se>32?gd(z+";",f,c,B-1,_):gd(re(z," ","")+";",f,c,B-2,_),_);break;case 59:z+=";";default:if(ti(H=md(z,a,c,Y,V,m,b,te,O=[],X=[],B,w),w),ue===123)if(V===0)Oo(z,a,H,H,O,w,B,b,X);else{switch(Z){case 99:if(Me(z,3)===110)break;case 108:if(Me(z,2)===97)break;default:V=0;case 100:case 109:case 115:}V?Oo(o,H,H,f&&ti(md(o,H,H,0,0,m,b,te,m,O=[],B,X),X),m,X,B,b,f?O:X):Oo(z,H,H,H,[""],X,0,b,X)}}Y=V=se=0,W=he=1,te=z="",B=C;break;case 58:B=1+zr(z),se=q;default:if(W<1){if(ue==123)--W;else if(ue==125&&W++==0&&wh()==125)continue}switch(z+=la(ue),ue*W){case 38:he=V>0?1:(z+="\f",-1);break;case 44:b[Y++]=(zr(z)-1)*he,he=1;break;case 64:xt()===45&&(z+=Us(br())),Z=xt(),V=B=zr(te=z+=Eh(bo())),ue++;break;case 45:q===45&&zr(z)==2&&(W=0)}}return w}function md(o,a,c,f,m,w,C,b,_,Y,V,B){for(var Z=m-1,se=m===0?w:[""],q=Bd(se),W=0,G=0,he=0;W<f;++W)for(var ue=0,te=Dt(o,Z+1,Z=Md(G=C[W])),O=o;ue<q;++ue)(O=Ad(G>0?se[ue]+" "+te:re(te,/&\f/g,se[ue])))&&(_[he++]=O);return Ho(o,a,c,m===0?Bo:b,_,Y,V,B)}function Ph(o,a,c,f){return Ho(o,a,c,Fd,la(yh()),Dt(o,2,-2),0,f)}function gd(o,a,c,f,m){return Ho(o,a,c,oa,Dt(o,0,f),Dt(o,f+1,-1),f,m)}function Hd(o,a,c){switch(vh(o,a)){case 5103:return pe+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return pe+o+o;case 4855:return pe+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return ii+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+o+ii+o+ke+o+o;case 5936:switch(Me(o,a+11)){case 114:return pe+o+ke+re(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return pe+o+ke+re(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return pe+o+ke+re(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return pe+o+ke+o+o;case 6165:return pe+o+ke+"flex-"+o+o;case 5187:return pe+o+re(o,/(\w+).+(:[^]+)/,pe+"box-$1$2"+ke+"flex-$1$2")+o;case 5443:return pe+o+ke+"flex-item-"+re(o,/flex-|-self/g,"")+(Gr(o,/flex-|baseline/)?"":ke+"grid-row-"+re(o,/flex-|-self/g,""))+o;case 4675:return pe+o+ke+"flex-line-pack"+re(o,/align-content|flex-|-self/g,"")+o;case 5548:return pe+o+ke+re(o,"shrink","negative")+o;case 5292:return pe+o+ke+re(o,"basis","preferred-size")+o;case 6060:return pe+"box-"+re(o,"-grow","")+pe+o+ke+re(o,"grow","positive")+o;case 4554:return pe+re(o,/([^-])(transform)/g,"$1"+pe+"$2")+o;case 6187:return re(re(re(o,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),o,"")+o;case 5495:case 3959:return re(o,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return re(re(o,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+pe+o+o;case 4200:if(!Gr(o,/flex-|baseline/))return ke+"grid-column-align"+Dt(o,a)+o;break;case 2592:case 3360:return ke+re(o,"template-","")+o;case 4384:case 3616:return c&&c.some(function(f,m){return a=m,Gr(f.props,/grid-\w+-end/)})?~zo(o+(c=c[a].value),"span",0)?o:ke+re(o,"-start","")+o+ke+"grid-row-span:"+(~zo(c,"span",0)?Gr(c,/\d+/):+Gr(c,/\d+/)-+Gr(o,/\d+/))+";":ke+re(o,"-start","")+o;case 4896:case 4128:return c&&c.some(function(f){return Gr(f.props,/grid-\w+-start/)})?o:ke+re(re(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return re(o,/(.+)-inline(.+)/,pe+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zr(o)-1-a>6)switch(Me(o,a+1)){case 109:if(Me(o,a+4)!==45)break;case 102:return re(o,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+ii+(Me(o,a+3)==108?"$3":"$2-$3"))+o;case 115:return~zo(o,"stretch",0)?Hd(re(o,"stretch","fill-available"),a,c)+o:o}break;case 5152:case 5920:return re(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,m,w,C,b,_,Y){return ke+m+":"+w+Y+(C?ke+m+"-span:"+(b?_:+_-+w)+Y:"")+o});case 4949:if(Me(o,a+6)===121)return re(o,":",":"+pe)+o;break;case 6444:switch(Me(o,Me(o,14)===45?18:11)){case 120:return re(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(Me(o,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+ke+"$2box$3")+o;case 100:return re(o,":",":"+ke)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(o,"scroll-","scroll-snap-")+o}return o}function Ro(o,a){for(var c="",f=0;f<o.length;f++)c+=a(o[f],f,o,a)||"";return c}function zh(o,a,c,f){switch(o.type){case gh:if(o.children.length)break;case hh:case mh:case oa:return o.return=o.return||o.value;case Fd:return"";case Dd:return o.return=o.value+"{"+Ro(o.children,f)+"}";case Bo:if(!zr(o.value=o.props.join(",")))return""}return zr(c=Ro(o.children,f))?o.return=o.value+"{"+c+"}":""}function bh(o){var a=Bd(o);return function(c,f,m,w){for(var C="",b=0;b<a;b++)C+=o[b](c,f,m,w)||"";return C}}function Oh(o){return function(a){a.root||(a=a.return)&&o(a)}}function Th(o,a,c,f){if(o.length>-1&&!o.return)switch(o.type){case oa:o.return=Hd(o.value,o.length,c);return;case Dd:return Ro([vt(o,{value:re(o.value,"@","@"+pe)})],f);case Bo:if(o.length)return xh(c=o.props,function(m){switch(Gr(m,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(vt(o,{props:[re(m,/:(read-\w+)/,":"+ii+"$1")]})),cn(vt(o,{props:[m]})),Ks(o,{props:hd(c,f)});break;case"::placeholder":cn(vt(o,{props:[re(m,/:(plac\w+)/,":"+pe+"input-$1")]})),cn(vt(o,{props:[re(m,/:(plac\w+)/,":"+ii+"$1")]})),cn(vt(o,{props:[re(m,/:(plac\w+)/,ke+"input-$1")]})),cn(vt(o,{props:[m]})),Ks(o,{props:hd(c,f)});break}return""})}}var Lh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dr={},fn=typeof process!="undefined"&&dr!==void 0&&(dr.REACT_APP_SC_ATTR||dr.SC_ATTR)||"data-styled",Ud="active",$d="data-styled-version",$o="6.3.10",sa=`/*!sc*/
`,oi=typeof window!="undefined"&&typeof document!="undefined",Ih=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==""?dr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.SC_DISABLE_SPEEDY!==void 0&&dr.SC_DISABLE_SPEEDY!==""&&dr.SC_DISABLE_SPEEDY!=="false"&&dr.SC_DISABLE_SPEEDY);function ai(o){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var To=new Map,Fo=new Map,Lo=1,ni=function(o){if(To.has(o))return To.get(o);for(;Fo.has(Lo);)Lo++;var a=Lo++;return To.set(o,a),Fo.set(a,o),a},Rh=function(o,a){Lo=a+1,To.set(o,a),Fo.set(a,o)},aa=Object.freeze([]),pn=Object.freeze({});function Fh(o,a,c){return c===void 0&&(c=pn),o.theme!==c.theme&&o.theme||a||c.theme}var Vd=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Dh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mh=/(^-|-$)/g;function vd(o){return o.replace(Dh,"-").replace(Mh,"")}var Ah=/(a)(d)/gi,xd=function(o){return String.fromCharCode(o+(o>25?39:97))};function Xs(o){var a,c="";for(a=Math.abs(o);a>52;a=a/52|0)c=xd(a%52)+c;return(xd(a%52)+c).replace(Ah,"$1-$2")}var $s,Lt=function(o,a){for(var c=a.length;c;)o=33*o^a.charCodeAt(--c);return o},Gd=function(o){return Lt(5381,o)};function Bh(o){return Xs(Gd(o)>>>0)}function Wh(o){return o.displayName||o.name||"Component"}function Vs(o){return typeof o=="string"&&!0}var Qd=typeof Symbol=="function"&&Symbol.for,Yd=Qd?Symbol.for("react.memo"):60115,Hh=Qd?Symbol.for("react.forward_ref"):60112,Uh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$h={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vh=(($s={})[Hh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$s[Yd]=Kd,$s);function yd(o){return("type"in(a=o)&&a.type.$$typeof)===Yd?Kd:"$$typeof"in o?Vh[o.$$typeof]:Uh;var a}var Gh=Object.defineProperty,Qh=Object.getOwnPropertyNames,wd=Object.getOwnPropertySymbols,Yh=Object.getOwnPropertyDescriptor,Kh=Object.getPrototypeOf,jd=Object.prototype;function qd(o,a,c){if(typeof a!="string"){if(jd){var f=Kh(a);f&&f!==jd&&qd(o,f,c)}var m=Qh(a);wd&&(m=m.concat(wd(a)));for(var w=yd(o),C=yd(a),b=0;b<m.length;++b){var _=m[b];if(!(_ in $h||c&&c[_]||C&&_ in C||w&&_ in w)){var Y=Yh(a,_);try{Gh(o,_,Y)}catch{}}}}return o}function hn(o){return typeof o=="function"}function ua(o){return typeof o=="object"&&"styledComponentId"in o}function Rt(o,a){return o&&a?"".concat(o," ").concat(a):o||a||""}function kd(o,a){return o.join("")}function si(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Zs(o,a,c){if(c===void 0&&(c=!1),!c&&!si(o)&&!Array.isArray(o))return a;if(Array.isArray(a))for(var f=0;f<a.length;f++)o[f]=Zs(o[f],a[f]);else if(si(a))for(var f in a)o[f]=Zs(o[f],a[f]);return o}function ca(o,a){Object.defineProperty(o,"toString",{value:a})}var qh=(function(){function o(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a,this._cGroup=0,this._cIndex=0}return o.prototype.indexOfGroup=function(a){if(a===this._cGroup)return this._cIndex;var c=this._cIndex;if(a>this._cGroup)for(var f=this._cGroup;f<a;f++)c+=this.groupSizes[f];else for(f=this._cGroup-1;f>=a;f--)c-=this.groupSizes[f];return this._cGroup=a,this._cIndex=c,c},o.prototype.insertRules=function(a,c){if(a>=this.groupSizes.length){for(var f=this.groupSizes,m=f.length,w=m;a>=w;)if((w<<=1)<0)throw ai(16,"".concat(a));this.groupSizes=new Uint32Array(w),this.groupSizes.set(f),this.length=w;for(var C=m;C<w;C++)this.groupSizes[C]=0}for(var b=this.indexOfGroup(a+1),_=0,Y=(C=0,c.length);C<Y;C++)this.tag.insertRule(b,c[C])&&(this.groupSizes[a]++,b++,_++);_>0&&this._cGroup>a&&(this._cIndex+=_)},o.prototype.clearGroup=function(a){if(a<this.length){var c=this.groupSizes[a],f=this.indexOfGroup(a),m=f+c;this.groupSizes[a]=0;for(var w=f;w<m;w++)this.tag.deleteRule(f);c>0&&this._cGroup>a&&(this._cIndex-=c)}},o.prototype.getGroup=function(a){var c="";if(a>=this.length||this.groupSizes[a]===0)return c;for(var f=this.groupSizes[a],m=this.indexOfGroup(a),w=m+f,C=m;C<w;C++)c+=this.tag.getRule(C)+sa;return c},o})(),Xh="style[".concat(fn,"][").concat($d,'="').concat($o,'"]'),Zh=new RegExp("^".concat(fn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sd=function(o){return typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11},Js=function(o){if(!o)return document;if(Sd(o))return o;if("getRootNode"in o){var a=o.getRootNode();if(Sd(a))return a}return document},Jh=function(o,a,c){for(var f,m=c.split(","),w=0,C=m.length;w<C;w++)(f=m[w])&&o.registerName(a,f)},em=function(o,a){for(var c,f=((c=a.textContent)!==null&&c!==void 0?c:"").split(sa),m=[],w=0,C=f.length;w<C;w++){var b=f[w].trim();if(b){var _=b.match(Zh);if(_){var Y=0|parseInt(_[1],10),V=_[2];Y!==0&&(Rh(V,Y),Jh(o,V,_[3]),o.getTag().insertRules(Y,m)),m.length=0}else m.push(b)}}},Gs=function(o){for(var a=Js(o.options.target).querySelectorAll(Xh),c=0,f=a.length;c<f;c++){var m=a[c];m&&m.getAttribute(fn)!==Ud&&(em(o,m),m.parentNode&&m.parentNode.removeChild(m))}};function rm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Xd=function(o){var a=document.head,c=o||a,f=document.createElement("style"),m=(function(b){var _=Array.from(b.querySelectorAll("style[".concat(fn,"]")));return _[_.length-1]})(c),w=m!==void 0?m.nextSibling:null;f.setAttribute(fn,Ud),f.setAttribute($d,$o);var C=rm();return C&&f.setAttribute("nonce",C),c.insertBefore(f,w),f},tm=(function(){function o(a){this.element=Xd(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){var f;if(c.sheet)return c.sheet;for(var m=(f=c.getRootNode().styleSheets)!==null&&f!==void 0?f:document.styleSheets,w=0,C=m.length;w<C;w++){var b=m[w];if(b.ownerNode===c)return b}throw ai(17)})(this.element),this.length=0}return o.prototype.insertRule=function(a,c){try{return this.sheet.insertRule(c,a),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},o.prototype.getRule=function(a){var c=this.sheet.cssRules[a];return c&&c.cssText?c.cssText:""},o})(),nm=(function(){function o(a){this.element=Xd(a),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(a,c){if(a<=this.length&&a>=0){var f=document.createTextNode(c);return this.element.insertBefore(f,this.nodes[a]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},o.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},o})(),im=(function(){function o(a){this.rules=[],this.length=0}return o.prototype.insertRule=function(a,c){return a<=this.length&&(a===this.length?this.rules.push(c):this.rules.splice(a,0,c),this.length++,!0)},o.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},o.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},o})(),Nd=oi,om={isServer:!oi,useCSSOMInjection:!Ih},Zd=(function(){function o(a,c,f){a===void 0&&(a=pn),c===void 0&&(c={});var m=this;this.options=lr(lr({},om),a),this.gs=c,this.names=new Map(f),this.server=!!a.isServer,!this.server&&oi&&Nd&&(Nd=!1,Gs(this)),ca(this,function(){return(function(w){for(var C=w.getTag(),b=C.length,_="",Y=function(B){var Z=(function(he){return Fo.get(he)})(B);if(Z===void 0)return"continue";var se=w.names.get(Z);if(se===void 0||!se.size)return"continue";var q=C.getGroup(B);if(q.length===0)return"continue";var W=fn+".g"+B+'[id="'+Z+'"]',G="";se.forEach(function(he){he.length>0&&(G+=he+",")}),_+=q+W+'{content:"'+G+'"}'+sa},V=0;V<b;V++)Y(V);return _})(m)})}return o.registerId=function(a){return ni(a)},o.prototype.rehydrate=function(){!this.server&&oi&&Gs(this)},o.prototype.reconstructWithOptions=function(a,c){c===void 0&&(c=!0);var f=new o(lr(lr({},this.options),a),this.gs,c&&this.names||void 0);return!this.server&&oi&&a.target!==this.options.target&&Js(this.options.target)!==Js(a.target)&&Gs(f),f},o.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(c){var f=c.useCSSOMInjection,m=c.target;return c.isServer?new im(m):f?new tm(m):new nm(m)})(this.options),new qh(a)));var a},o.prototype.hasNameForId=function(a,c){var f,m;return(m=(f=this.names.get(a))===null||f===void 0?void 0:f.has(c))!==null&&m!==void 0&&m},o.prototype.registerName=function(a,c){ni(a);var f=this.names.get(a);f?f.add(c):this.names.set(a,new Set([c]))},o.prototype.insertRules=function(a,c,f){this.registerName(a,c),this.getTag().insertRules(ni(a),f)},o.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},o.prototype.clearRules=function(a){this.getTag().clearGroup(ni(a)),this.clearNames(a)},o.prototype.clearTag=function(){this.tag=void 0},o})(),lm=/&/g,Qr=47,It=42;function Cd(o){if(o.indexOf("}")===-1)return!1;for(var a=o.length,c=0,f=0,m=!1,w=0;w<a;w++){var C=o.charCodeAt(w);if(f!==0||m||C!==Qr||o.charCodeAt(w+1)!==It)if(m)C===It&&o.charCodeAt(w+1)===Qr&&(m=!1,w++);else if(C!==34&&C!==39||w!==0&&o.charCodeAt(w-1)===92){if(f===0){if(C===123)c++;else if(C===125&&--c<0)return!0}}else f===0?f=C:f===C&&(f=0);else m=!0,w++}return c!==0||f!==0}function Jd(o,a){return o.map(function(c){return c.type==="rule"&&(c.value="".concat(a," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(a," ")),c.props=c.props.map(function(f){return"".concat(a," ").concat(f)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Jd(c.children,a)),c})}function sm(o){var a,c,f,m=pn,w=m.options,C=w===void 0?pn:w,b=m.plugins,_=b===void 0?aa:b,Y=function(q,W,G){return G.startsWith(c)&&G.endsWith(c)&&G.replaceAll(c,"").length>0?".".concat(a):q},V=_.slice();V.push(function(q){q.type===Bo&&q.value.includes("&")&&(f||(f=new RegExp("\\".concat(c,"\\b"),"g")),q.props[0]=q.props[0].replace(lm,c).replace(f,Y))}),C.prefix&&V.push(Th),V.push(zh);var B=[],Z=bh(V.concat(Oh(function(q){return B.push(q)}))),se=function(q,W,G,he){W===void 0&&(W=""),G===void 0&&(G=""),he===void 0&&(he="&"),a=he,c=W,f=void 0;var ue=(function(O){if(!Cd(O))return O;for(var X=O.length,H="",z=0,D=0,ve=0,Oe=!1,oe=0;oe<X;oe++){var ze=O.charCodeAt(oe);if(ve!==0||Oe||ze!==Qr||O.charCodeAt(oe+1)!==It)if(Oe)ze===It&&O.charCodeAt(oe+1)===Qr&&(Oe=!1,oe++);else if(ze!==34&&ze!==39||oe!==0&&O.charCodeAt(oe-1)===92){if(ve===0)if(ze===123)D++;else if(ze===125){if(--D<0){for(var Ne=oe+1;Ne<X;){var $e=O.charCodeAt(Ne);if($e===59||$e===10)break;Ne++}Ne<X&&O.charCodeAt(Ne)===59&&Ne++,D=0,oe=Ne-1,z=Ne;continue}D===0&&(H+=O.substring(z,oe+1),z=oe+1)}else ze===59&&D===0&&(H+=O.substring(z,oe+1),z=oe+1)}else ve===0?ve=ze:ve===ze&&(ve=0);else Oe=!0,oe++}if(z<X){var Xe=O.substring(z);Cd(Xe)||(H+=Xe)}return H})((function(O){if(O.indexOf("//")===-1)return O;for(var X=O.length,H=[],z=0,D=0,ve=0,Oe=0;D<X;){var oe=O.charCodeAt(D);if(oe!==34&&oe!==39||D!==0&&O.charCodeAt(D-1)===92)if(ve===0)if(oe===Qr&&D+1<X&&O.charCodeAt(D+1)===It){for(D+=2;D+1<X&&(O.charCodeAt(D)!==It||O.charCodeAt(D+1)!==Qr);)D++;D+=2}else if(oe===40&&D>=3&&(32|O.charCodeAt(D-1))==108&&(32|O.charCodeAt(D-2))==114&&(32|O.charCodeAt(D-3))==117)Oe=1,D++;else if(Oe>0)oe===41?Oe--:oe===40&&Oe++,D++;else if(oe===It&&D+1<X&&O.charCodeAt(D+1)===Qr)D>z&&H.push(O.substring(z,D)),z=D+=2;else if(oe===Qr&&D+1<X&&O.charCodeAt(D+1)===Qr){for(D>z&&H.push(O.substring(z,D));D<X&&O.charCodeAt(D)!==10;)D++;z=D}else D++;else D++;else ve===0?ve=oe:ve===oe&&(ve=0),D++}return z===0?O:(z<X&&H.push(O.substring(z)),H.join(""))})(q)),te=_h(G||W?"".concat(G," ").concat(W," { ").concat(ue," }"):ue);return C.namespace&&(te=Jd(te,C.namespace)),B=[],Ro(te,Z),B};return se.hash=_.length?_.reduce(function(q,W){return W.name||ai(15),Lt(q,W.name)},5381).toString():"",se}var am=new Zd,ea=sm(),ef=fr.createContext({shouldForwardProp:void 0,styleSheet:am,stylis:ea});ef.Consumer;fr.createContext(void 0);function Ed(){return fr.useContext(ef)}var um=(function(){function o(a,c){var f=this;this.inject=function(m,w){w===void 0&&(w=ea);var C=f.name+w.hash;m.hasNameForId(f.id,C)||m.insertRules(f.id,C,w(f.rules,C,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=c,ca(this,function(){throw ai(12,String(f.name))})}return o.prototype.getName=function(a){return a===void 0&&(a=ea),this.name+a.hash},o})();function cm(o,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||o in Lh||o.startsWith("--")?String(a).trim():"".concat(a,"px")}var dm=function(o){return o>="A"&&o<="Z"};function _d(o){for(var a="",c=0;c<o.length;c++){var f=o[c];if(c===1&&f==="-"&&o[0]==="-")return o;dm(f)?a+="-"+f.toLowerCase():a+=f}return a.startsWith("ms-")?"-"+a:a}var rf=function(o){return o==null||o===!1||o===""},tf=function(o){var a=[];for(var c in o){var f=o[c];o.hasOwnProperty(c)&&!rf(f)&&(Array.isArray(f)&&f.isCss||hn(f)?a.push("".concat(_d(c),":"),f,";"):si(f)?a.push.apply(a,Io(Io(["".concat(c," {")],tf(f),!1),["}"],!1)):a.push("".concat(_d(c),": ").concat(cm(c,f),";")))}return a};function Ft(o,a,c,f,m){if(m===void 0&&(m=[]),typeof o=="string")return o&&m.push(o),m;if(rf(o))return m;if(ua(o))return m.push(".".concat(o.styledComponentId)),m;if(hn(o)){if(!hn(C=o)||C.prototype&&C.prototype.isReactComponent||!a)return m.push(o),m;var w=o(a);return Ft(w,a,c,f,m)}var C;if(o instanceof um)return c?(o.inject(c,f),m.push(o.getName(f))):m.push(o),m;if(si(o)){for(var b=tf(o),_=0;_<b.length;_++)m.push(b[_]);return m}if(!Array.isArray(o))return m.push(o.toString()),m;for(_=0;_<o.length;_++)Ft(o[_],a,c,f,m);return m}function fm(o){for(var a=0;a<o.length;a+=1){var c=o[a];if(hn(c)&&!ua(c))return!1}return!0}var pm=Gd($o),hm=(function(){function o(a,c,f){this.rules=a,this.staticRulesId="",this.isStatic=(f===void 0||f.isStatic)&&fm(a),this.componentId=c,this.baseHash=Lt(pm,c),this.baseStyle=f,Zd.registerId(c)}return o.prototype.generateAndInjectStyles=function(a,c,f){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,c,f).className:"";if(this.isStatic&&!f.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))m=Rt(m,this.staticRulesId);else{var w=kd(Ft(this.rules,a,c,f)),C=Xs(Lt(this.baseHash,w)>>>0);if(!c.hasNameForId(this.componentId,C)){var b=f(w,".".concat(C),void 0,this.componentId);c.insertRules(this.componentId,C,b)}m=Rt(m,C),this.staticRulesId=C}else{for(var _=Lt(this.baseHash,f.hash),Y="",V=0;V<this.rules.length;V++){var B=this.rules[V];if(typeof B=="string")Y+=B;else if(B){var Z=kd(Ft(B,a,c,f));_=Lt(Lt(_,String(V)),Z),Y+=Z}}if(Y){var se=Xs(_>>>0);if(!c.hasNameForId(this.componentId,se)){var q=f(Y,".".concat(se),void 0,this.componentId);c.insertRules(this.componentId,se,q)}m=Rt(m,se)}}return{className:m,css:typeof window=="undefined"?c.getTag().getGroup(ni(this.componentId)):""}},o})(),nf=fr.createContext(void 0);nf.Consumer;var Qs={};function mm(o,a,c){var f=ua(o),m=o,w=!Vs(o),C=a.attrs,b=C===void 0?aa:C,_=a.componentId,Y=_===void 0?(function(O,X){var H=typeof O!="string"?"sc":vd(O);Qs[H]=(Qs[H]||0)+1;var z="".concat(H,"-").concat(Bh($o+H+Qs[H]));return X?"".concat(X,"-").concat(z):z})(a.displayName,a.parentComponentId):_,V=a.displayName,B=V===void 0?(function(O){return Vs(O)?"styled.".concat(O):"Styled(".concat(Wh(O),")")})(o):V,Z=a.displayName&&a.componentId?"".concat(vd(a.displayName),"-").concat(a.componentId):a.componentId||Y,se=f&&m.attrs?m.attrs.concat(b).filter(Boolean):b,q=a.shouldForwardProp;if(f&&m.shouldForwardProp){var W=m.shouldForwardProp;if(a.shouldForwardProp){var G=a.shouldForwardProp;q=function(O,X){return W(O,X)&&G(O,X)}}else q=W}var he=new hm(c,Z,f?m.componentStyle:void 0);function ue(O,X){return(function(H,z,D){var ve=H.attrs,Oe=H.componentStyle,oe=H.defaultProps,ze=H.foldedComponentIds,Ne=H.styledComponentId,$e=H.target,Xe=fr.useContext(nf),Ve=Ed(),xe=H.shouldForwardProp||Ve.shouldForwardProp,P=Fh(z,Xe,oe)||pn,A=(function(ie,ce,ae){for(var me,Ee=lr(lr({},ce),{className:void 0,theme:ae}),Xr=0;Xr<ie.length;Xr+=1){var yt=hn(me=ie[Xr])?me(Ee):me;for(var jr in yt)jr==="className"?Ee.className=Rt(Ee.className,yt[jr]):jr==="style"?Ee.style=lr(lr({},Ee.style),yt[jr]):Ee[jr]=yt[jr]}return"className"in ce&&typeof ce.className=="string"&&(Ee.className=Rt(Ee.className,ce.className)),Ee})(ve,z,P),T=A.as||$e,g={};for(var j in A)A[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&A.theme===P||(j==="forwardedAs"?g.as=A.forwardedAs:xe&&!xe(j,T)||(g[j]=A[j]));var J=(function(ie,ce){var ae=Ed(),me=ie.generateAndInjectStyles(ce,ae.styleSheet,ae.stylis);return me})(Oe,A),ee=J.className,le=Rt(ze,Ne);return ee&&(le+=" "+ee),A.className&&(le+=" "+A.className),g[Vs(T)&&!Vd.has(T)?"class":"className"]=le,D&&(g.ref=D),qe.createElement(T,g)})(te,O,X)}ue.displayName=B;var te=fr.forwardRef(ue);return te.attrs=se,te.componentStyle=he,te.displayName=B,te.shouldForwardProp=q,te.foldedComponentIds=f?Rt(m.foldedComponentIds,m.styledComponentId):"",te.styledComponentId=Z,te.target=f?m.target:o,Object.defineProperty(te,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=f?(function(X){for(var H=[],z=1;z<arguments.length;z++)H[z-1]=arguments[z];for(var D=0,ve=H;D<ve.length;D++)Zs(X,ve[D],!0);return X})({},m.defaultProps,O):O}}),ca(te,function(){return".".concat(te.styledComponentId)}),w&&qd(te,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),te}function Pd(o,a){for(var c=[o[0]],f=0,m=a.length;f<m;f+=1)c.push(a[f],o[f+1]);return c}var zd=function(o){return Object.assign(o,{isCss:!0})};function gm(o){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];if(hn(o)||si(o))return zd(Ft(Pd(aa,Io([o],a,!0))));var f=o;return a.length===0&&f.length===1&&typeof f[0]=="string"?Ft(f):zd(Ft(Pd(f,a)))}function ra(o,a,c){if(c===void 0&&(c=pn),!a)throw ai(1,a);var f=function(m){for(var w=[],C=1;C<arguments.length;C++)w[C-1]=arguments[C];return o(a,c,gm.apply(void 0,Io([m],w,!1)))};return f.attrs=function(m){return ra(o,a,lr(lr({},c),{attrs:Array.prototype.concat(c.attrs,m).filter(Boolean)}))},f.withConfig=function(m){return ra(o,a,lr(lr({},c),m))},f}var of=function(o){return ra(mm,o)},K=of;Vd.forEach(function(o){K[o]=of(o)});const Ys={Wrapper:K.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:K.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:K.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},bd={Wrapper:K.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:K.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},vm="/algoritms-core-notes/images/transparentLogo.png";var lf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Od=fr.createContext&&fr.createContext(lf),xm=["attr","size","title"];function ym(o,a){if(o==null)return{};var c=wm(o,a),f,m;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(o);for(m=0;m<w.length;m++)f=w[m],!(a.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(o,f)&&(c[f]=o[f])}return c}function wm(o,a){if(o==null)return{};var c={};for(var f in o)if(Object.prototype.hasOwnProperty.call(o,f)){if(a.indexOf(f)>=0)continue;c[f]=o[f]}return c}function Do(){return Do=Object.assign?Object.assign.bind():function(o){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(o[f]=c[f])}return o},Do.apply(this,arguments)}function Td(o,a){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);a&&(f=f.filter(function(m){return Object.getOwnPropertyDescriptor(o,m).enumerable})),c.push.apply(c,f)}return c}function Mo(o){for(var a=1;a<arguments.length;a++){var c=arguments[a]!=null?arguments[a]:{};a%2?Td(Object(c),!0).forEach(function(f){jm(o,f,c[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):Td(Object(c)).forEach(function(f){Object.defineProperty(o,f,Object.getOwnPropertyDescriptor(c,f))})}return o}function jm(o,a,c){return a=km(a),a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}function km(o){var a=Sm(o,"string");return typeof a=="symbol"?a:a+""}function Sm(o,a){if(typeof o!="object"||!o)return o;var c=o[Symbol.toPrimitive];if(c!==void 0){var f=c.call(o,a);if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(o)}function sf(o){return o&&o.map((a,c)=>fr.createElement(a.tag,Mo({key:c},a.attr),sf(a.child)))}function Se(o){return a=>fr.createElement(Nm,Do({attr:Mo({},o.attr)},a),sf(o.child))}function Nm(o){var a=c=>{var{attr:f,size:m,title:w}=o,C=ym(o,xm),b=m||c.size||"1em",_;return c.className&&(_=c.className),o.className&&(_=(_?_+" ":"")+o.className),fr.createElement("svg",Do({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,f,C,{className:_,style:Mo(Mo({color:o.color||c.color},c.style),o.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),w&&fr.createElement("title",null,w),o.children)};return Od!==void 0?fr.createElement(Od.Consumer,null,c=>a(c)):a(lf)}function ta(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function Cm(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function Em(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(o)}function na(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(o)}function Kr(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function qr(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(o)}function _m(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function Pm(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},child:[]}]})(o)}function ui(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function zm(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(o)}function bm(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"},child:[]},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"},child:[]}]})(o)}function da(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(o)}function Om(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function Fr(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function Tm(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function Lm(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function Ld(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"5 9 2 12 5 15"},child:[]},{tag:"polyline",attr:{points:"9 5 12 2 15 5"},child:[]},{tag:"polyline",attr:{points:"15 19 12 22 9 19"},child:[]},{tag:"polyline",attr:{points:"19 9 22 12 19 15"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"22"},child:[]}]})(o)}function Ao(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(o)}function Id(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(o)}function Im(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(o)}function Dr(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(o)}function Rm(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function Yr(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(o)}function pr(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function Fm(o){return Se({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}const Dm=()=>{const[o,a]=qe.useState(!1),[c,f]=qe.useState("dark");qe.useEffect(()=>{const b=localStorage.getItem("app-theme")||"dark";f(b),b==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),qe.useEffect(()=>{c==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",c)},[c]);const m=qe.useMemo(()=>c==="light"?"dark":"light",[c]),w=()=>{f(m)};return l.jsx(bd.Wrapper,{children:l.jsx(bd.Main,{children:l.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[l.jsxs("div",{className:"logoNameWrapper",children:[l.jsxs("div",{className:"logoWrapper",children:[!o&&l.jsx("div",{className:"logoSkeleton"}),l.jsx("img",{src:vm,alt:"algorithms-core-notes",onLoad:()=>a(!0),style:{opacity:o?1:0}})]}),l.jsxs("div",{className:"nameWrapper",children:[l.jsx("div",{className:"title",children:"algorithms-core-notes"}),l.jsx("div",{className:"subTitle",children:"At-a-glance algorithms revision"})]})]}),l.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:w,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[l.jsx("span",{className:"icon",children:c==="light"?l.jsx(Lm,{}):l.jsx(Rm,{})}),l.jsx("span",{className:"label",children:c==="light"?"Light":"Dark"})]})]})})})},Mm={Wrapper:K.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},Am=()=>l.jsxs(Mm.Wrapper,{children:[l.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),l.jsxs("div",{className:"right",children:["By ",l.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Rd={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        padding: 48px;
        box-shadow: 0 14px 40px var(--color-shadow);
        position: relative;
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 22px 55px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        .top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 18px;
            margin-bottom: 26px;
            flex-wrap: wrap;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 260px;
        }

        .iconBox {
            width: 46px;
            height: 46px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                var(--color-primary)
            );
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;

            svg {
                font-size: 20px;
            }
        }

        &:hover .iconBox {
            transform: scale(1.06) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 32px;
            font-weight: 800;
            letter-spacing: 0.4px;
            color: var(--color-primary);
            line-height: 1.1;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.4;
        }

        .pillRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            padding: 8px 12px;
            border-radius: 999px;
            font-size: 12px;
            color: var(--color-text-secondary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;

            svg {
                color: var(--color-accent);
            }

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                color: var(--color-text-primary);
            }
        }

        .body {
            p {
                font-size: 16px;
                line-height: 1.85;
                margin-bottom: 18px;
                color: var(--color-text-secondary);
            }
        }

        .metaBar {
            margin-top: 26px;
            padding-top: 18px;
            border-top: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            flex-wrap: wrap;
        }

        .metaLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .metaIcon {
            width: 26px;
            height: 26px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            display: grid;
            place-items: center;

            svg {
                font-size: 14px;
            }
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
            letter-spacing: 0.2px;
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 7px 10px;
            border-radius: 999px;
            white-space: nowrap;
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }
        }

        @media (max-width: 768px) {
            padding: 28px;

            .title {
                font-size: 24px;
            }

            .pillRow {
                justify-content: flex-start;
            }
        }
    `},Bm=()=>{const o="2026-02-24T07:20:47.431Z",a=new Date(o).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return l.jsx(Rd.Wrapper,{children:l.jsxs(Rd.Container,{children:[l.jsxs("div",{className:"top",children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"iconBox",children:l.jsx(Dr,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{className:"title",children:"About Algorithms"}),l.jsx("p",{className:"subtitle",children:"Patterns, correctness, and performance thinking"})]})]}),l.jsxs("div",{className:"pillRow",children:[l.jsxs("span",{className:"pill",children:[l.jsx(Yr,{})," Correctness"]}),l.jsxs("span",{className:"pill",children:[l.jsx(ui,{})," Efficiency"]}),l.jsxs("span",{className:"pill",children:[l.jsx(pr,{})," Patterns"]})]})]}),l.jsxs("div",{className:"body",children:[l.jsx("p",{children:"Algorithms are step-by-step procedures for solving problems. They transform an input into an output through a clear sequence of operations. A good algorithm is not just one that works, but one that is correct under all valid inputs and efficient under realistic constraints."}),l.jsx("p",{children:"Algorithmic thinking is about choosing the right approach. Sometimes a brute force solution works. Often it does not. Patterns like binary search, sliding window, two pointers, recursion, greedy, dynamic programming, and graph traversal let you solve large problem spaces without guessing."}),l.jsx("p",{children:"This project is a single-page revision system for core algorithms using clean JavaScript examples. Each topic highlights the idea, the pattern, the time and space cost, and the common mistakes. The goal is fast recall and stronger decision-making during interviews and real development work."})]}),l.jsxs("div",{className:"metaBar",children:[l.jsxs("span",{className:"metaLeft",children:[l.jsx("span",{className:"metaIcon",children:l.jsx(_m,{})}),l.jsx("span",{className:"metaLabel",children:"Last updated"})]}),l.jsx("span",{className:"metaValue",children:a})]})]})})},wo={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:K.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:K.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `},Wm=()=>{const[o,a]=qe.useState(!1);return l.jsx(wo.Wrapper,{children:l.jsxs(wo.Container,{className:o?"open":"",children:[l.jsxs(wo.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Fr,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{children:"Foundation Layer"}),l.jsx("p",{children:"Non negotiable thinking tools"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(qr,{}):l.jsx(Kr,{})})]}),o&&l.jsxs(wo.Content,{children:[l.jsx("div",{className:"intro",children:"Algorithms are not “code tricks”. They are ways of thinking. This section builds the mental tools you need before patterns like binary search, sliding window, greedy, or dynamic programming. If this layer is strong, you stop guessing and start choosing the right approach."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dr,{}),l.jsx("h3",{children:"What is an Algorithm"})]}),l.jsx("p",{children:"An algorithm is a step-by-step procedure that transforms an input into an output. It must be correct, finite, and repeatable."}),l.jsx("pre",{children:`// "Find max" is an algorithm:
// input: array
// output: maximum value

function maxOf(arr) {
  let best = -Infinity;
  for (const x of arr) best = Math.max(best, x);
  return best;
}`}),l.jsx("p",{className:"mini",children:"Key idea: same input always gives same output (deterministic case)."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ta,{}),l.jsx("h3",{children:"Input → Process → Output"})]}),l.jsx("p",{children:"Every problem can be viewed as: data comes in, work happens, result comes out. This helps you avoid messy thinking."}),l.jsx("pre",{children:`// Input: [2, 4, 6]
// Process: sum them
// Output: 12

function sum(arr) {
  let s = 0;
  for (const x of arr) s += x;
  return s;
}`}),l.jsx("p",{className:"mini",children:"If you cannot clearly define input/output, the problem is not understood yet."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yr,{}),l.jsx("h3",{children:"Correctness vs Efficiency"})]}),l.jsx("p",{children:"Correctness means the algorithm works for all valid inputs. Efficiency means it performs well as input grows."}),l.jsx("pre",{children:`// Correct but inefficient (O(n^2))
function hasDuplicateSlow(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// Correct and faster average (O(n))
function hasDuplicateFast(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}`}),l.jsx("p",{className:"mini",children:"First make it correct. Then make it fast."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Time Complexity Recap"})]}),l.jsx("p",{children:"Time complexity describes how runtime grows with input size (n)."}),l.jsx("pre",{children:`// O(1)
function getFirst(arr) {
  return arr[0];
}

// O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// O(n^2)
function allPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // work
    }
  }
}`}),l.jsx("p",{className:"mini",children:"Watch for nested loops, repeated scanning, and hidden loops."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ui,{}),l.jsx("h3",{children:"Space Complexity Recap"})]}),l.jsx("p",{children:"Space complexity describes extra memory usage (not counting the input itself)."}),l.jsx("pre",{children:`// O(1) extra space
function sumInPlace(arr) {
  let s = 0;
  for (const x of arr) s += x;
  return s;
}

// O(n) extra space
function copyArray(arr) {
  const out = [];
  for (const x of arr) out.push(x);
  return out;
}`}),l.jsx("p",{className:"mini",children:"Space often buys speed (like using Set/Map)."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Big O Refresher"})]}),l.jsx("p",{children:"Big O gives an upper bound on growth. In interviews, treat it as “how bad can it get”."}),l.jsx("pre",{children:`// Common orders:
O(1)    constant
O(log n)  binary search, balanced trees
O(n)    single pass
O(n log n) efficient sorting (merge/quick avg)
O(n^2)  nested loops
O(2^n)  subsets/backtracking`}),l.jsx("p",{className:"mini",children:"Focus on the dominant term, ignore constants."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Fr,{}),l.jsx("h3",{children:"Recursion Mental Model"})]}),l.jsx("p",{children:"Recursion means a function calls itself. It requires a base case to stop."}),l.jsx("pre",{children:`// Factorial: n! = n * (n-1)!
function factorial(n) {
  if (n <= 1) return 1;   // base case
  return n * factorial(n - 1);
}`}),l.jsx("p",{className:"mini",children:"Each call adds a frame to the call stack. Deep recursion can overflow."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dr,{}),l.jsx("h3",{children:"Iterative vs Recursive Trade-offs"})]}),l.jsx("p",{children:"Iteration is often more memory safe. Recursion is often more readable for trees/DFS."}),l.jsx("pre",{children:`// Fibonacci (iterative) - O(1) space
function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return a;
}

// Fibonacci (recursive) - exponential without memoization
function fibSlow(n) {
  if (n <= 1) return n;
  return fibSlow(n - 1) + fibSlow(n - 2);
}`}),l.jsx("p",{className:"mini",children:"Recursion without memoization can explode."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Master Theorem (Intuitive Intro)"})]}),l.jsx("p",{children:"Master theorem helps estimate runtime of divide-and-conquer recurrences like:"}),l.jsx("pre",{children:`T(n) = a * T(n/b) + f(n)

// Example: Merge sort
T(n) = 2*T(n/2) + O(n)
=> O(n log n)`}),l.jsx("p",{className:"mini",children:"You do not need full proof. You need the intuition: “split + combine cost”."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yr,{}),l.jsx("h3",{children:"Lower Bounds (Concept)"})]}),l.jsx("p",{children:"Lower bound means the best possible time any algorithm can achieve for a problem under a model."}),l.jsx("pre",{children:`// Comparison sorting lower bound:
// Any comparison-based sorting needs
// at least O(n log n) comparisons in worst case.

// That is why merge sort, heap sort are optimal
// in comparison model.`}),l.jsx("p",{className:"mini",children:"If you know lower bounds, you stop chasing impossible optimizations."})]})]})]})]})})},jo={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:K.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:K.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `},Hm=()=>{const[o,a]=qe.useState(!1);return l.jsx(jo.Wrapper,{children:l.jsxs(jo.Container,{className:o?"open":"",children:[l.jsxs(jo.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Id,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{children:"Searching"}),l.jsx("p",{children:"Find a target efficiently"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(qr,{}):l.jsx(Kr,{})})]}),o&&l.jsxs(jo.Content,{children:[l.jsx("div",{className:"intro",children:"Searching is about locating a target in data. The key decision is whether the data is unsorted or sorted. Unsorted data usually needs a linear scan. Sorted data enables logarithmic searching using binary search and its variations."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yr,{}),l.jsx("h3",{children:"Linear Search"})]}),l.jsx("p",{children:"Checks every element one by one until the target is found. Works on any array (sorted or unsorted)."}),l.jsx("pre",{children:`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Time: O(n)
// Space: O(1)`}),l.jsx("p",{className:"mini",children:"Best when the array is small or unsorted."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Binary Search"})]}),l.jsx("p",{children:"Works only on sorted data. Repeatedly cuts the search space in half."}),l.jsx("pre",{children:`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Time: O(log n)
// Space: O(1)`}),l.jsx("p",{className:"mini",children:"Requires sorted order. Most common searching tool."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dr,{}),l.jsx("h3",{children:"Binary Search Variations"})]}),l.jsx("p",{children:"Binary search can be modified to find boundaries like first occurrence, last occurrence, lower bound, and upper bound."}),l.jsx("pre",{children:`// First occurrence of target (sorted array)
function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      ans = mid;
      right = mid - 1; // keep searching left side
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

// Last occurrence of target (sorted array)
function lastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      ans = mid;
      left = mid + 1; // keep searching right side
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}`}),l.jsx("p",{className:"mini",children:"Variations are used heavily in interviews."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Id,{}),l.jsx("h3",{children:"Lower Bound and Upper Bound"})]}),l.jsx("p",{children:"Lower bound is the first index where value is not less than target. Upper bound is the first index where value is greater than target."}),l.jsx("pre",{children:`// Lower bound: first index i where arr[i] >= target
function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length; // notice: right is n (not n-1)

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }

  return left;
}

// Upper bound: first index i where arr[i] > target
function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }

  return left;
}`}),l.jsx("p",{className:"mini",children:"These are boundary-finding patterns."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Ternary Search (Brief)"})]}),l.jsx("p",{children:"Similar to binary search but splits range into three parts. Mostly used when searching for a maximum/minimum in a unimodal function."}),l.jsx("pre",{children:`// Ternary search on a unimodal function f(x)
// (conceptual, not common in daily interviews)

function ternarySearch(left, right, f, eps = 1e-6) {
  while (right - left > eps) {
    const m1 = left + (right - left) / 3;
    const m2 = right - (right - left) / 3;

    if (f(m1) < f(m2)) left = m1;
    else right = m2;
  }

  return left; // approximate best x
}`}),l.jsx("p",{className:"mini",children:"Rare for array search. More common in optimization problems."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yr,{}),l.jsx("h3",{children:"Mental Checklist"})]}),l.jsx("p",{children:"Before choosing a search method, ask:"}),l.jsx("pre",{children:`1) Is the data sorted?
2) Do I need exact value or boundary?
3) Is it a function optimization problem?
4) Can I reduce the search space each step?`}),l.jsx("p",{className:"mini",children:"If sorted → binary search family. If unsorted → linear search."})]})]})]})]})})},ko={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:K.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:K.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);
        }

        .grid {
            /* display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px; */
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `},Um=()=>{const[o,a]=qe.useState(!1);return l.jsx(ko.Wrapper,{children:l.jsxs(ko.Container,{className:o?"open":"",children:[l.jsxs(ko.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Em,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{children:"Sorting"}),l.jsx("p",{children:"Order data, reduce search cost, simplify logic"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(qr,{}):l.jsx(Kr,{})})]}),o&&l.jsxs(ko.Content,{children:[l.jsx("div",{className:"intro",children:"Sorting rearranges data into a predictable order. This unlocks faster searching, easier duplicate handling, and cleaner logic. The goal is not to memorize every sort, but to know when a sort is needed and which one fits the constraints."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dr,{}),l.jsx("h3",{children:"Bubble Sort"})]}),l.jsx("p",{children:"Repeatedly swap adjacent out-of-order elements. Easy to understand, slow in practice."}),l.jsx("pre",{children:`function bubbleSort(arr) {
  const a = arr.slice();
  for (let i = 0; i < a.length; i++) {
    let swapped = false;
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // early exit
  }
  return a;
}
// Time: O(n^2) worst, O(n) best (already sorted)
// Space: O(1) extra (if in-place), O(n) here due to copy`}),l.jsx("p",{className:"mini",children:"Useful for teaching, not for production."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Selection Sort"})]}),l.jsx("p",{children:"Select the smallest element and place it at the front, repeat."}),l.jsx("pre",{children:`function selectionSort(arr) {
  const a = arr.slice();
  for (let i = 0; i < a.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minIdx]) minIdx = j;
    }
    [a[i], a[minIdx]] = [a[minIdx], a[i]];
  }
  return a;
}
// Time: O(n^2) always
// Space: O(1) extra (if in-place), O(n) here due to copy`}),l.jsx("p",{className:"mini",children:"Minimal swaps, still quadratic."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Fr,{}),l.jsx("h3",{children:"Insertion Sort"})]}),l.jsx("p",{children:"Build a sorted prefix by inserting each new element into its correct position."}),l.jsx("pre",{children:`function insertionSort(arr) {
  const a = arr.slice();
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
}
// Time: O(n^2) worst, O(n) best (nearly sorted)
// Space: O(1) extra (if in-place), O(n) here due to copy`}),l.jsx("p",{className:"mini",children:"Great for small arrays and nearly-sorted data."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Fr,{}),l.jsx("h3",{children:"Merge Sort"})]}),l.jsx("p",{children:"Divide array into halves, sort each half, merge sorted halves."}),l.jsx("pre",{children:`function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(a, b) {
  const out = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) out.push(a[i++]);
    else out.push(b[j++]);
  }

  while (i < a.length) out.push(a[i++]);
  while (j < b.length) out.push(b[j++]);

  return out;
}
// Time: O(n log n)
// Space: O(n) extra
// Stable: Yes`}),l.jsx("p",{className:"mini",children:"Reliable, stable, but uses extra memory."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dr,{}),l.jsx("h3",{children:"Quick Sort"})]}),l.jsx("p",{children:"Pick a pivot, partition into < pivot and > pivot, then sort partitions."}),l.jsx("pre",{children:`function quickSort(arr) {
  const a = arr.slice();
  quickSortInPlace(a, 0, a.length - 1);
  return a;
}

function quickSortInPlace(a, lo, hi) {
  if (lo >= hi) return;

  const p = partition(a, lo, hi);
  quickSortInPlace(a, lo, p - 1);
  quickSortInPlace(a, p + 1, hi);
}

function partition(a, lo, hi) {
  const pivot = a[hi];
  let i = lo;

  for (let j = lo; j < hi; j++) {
    if (a[j] < pivot) {
      [a[i], a[j]] = [a[j], a[i]];
      i++;
    }
  }

  [a[i], a[hi]] = [a[hi], a[i]];
  return i;
}
// Time: O(n log n) avg, O(n^2) worst
// Space: O(log n) avg recursion stack
// Stable: No`}),l.jsx("p",{className:"mini",children:"Fast average, worst-case exists if pivot is bad."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Heap Sort"})]}),l.jsx("p",{children:"Build a heap, repeatedly extract max/min and rebuild heap property."}),l.jsx("pre",{children:`// Concept: use priority queue / heap structure
// Time: O(n log n)
// Space: O(1) extra (in-place heapify possible)
// Stable: No

// In JS, easiest is to implement a Heap class.
// For interviews: know the idea + complexity.`}),l.jsx("p",{className:"mini",children:"Good worst-case guarantee, not stable."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(na,{}),l.jsx("h3",{children:"Counting Sort"})]}),l.jsx("p",{children:"Count occurrences of each value (works when range is small)."}),l.jsx("pre",{children:`function countingSort(arr, maxVal) {
  const count = new Array(maxVal + 1).fill(0);
  for (const x of arr) count[x]++;

  const out = [];
  for (let v = 0; v <= maxVal; v++) {
    while (count[v] > 0) {
      out.push(v);
      count[v]--;
    }
  }
  return out;
}
// Time: O(n + k) where k = range
// Space: O(k)
// Stable: Can be stable if built using prefix sums`}),l.jsx("p",{className:"mini",children:"Great when values are small and non-negative."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(na,{}),l.jsx("h3",{children:"Radix Sort"})]}),l.jsx("p",{children:"Sort by digits (LSD/MSD) using a stable sub-sort (often counting sort per digit)."}),l.jsx("pre",{children:`// Concept:
// sort numbers by digit place: ones, tens, hundreds...
// uses stable sorting each pass

// Time: O(d*(n + k))
// d = number of digits
// k = base (10 for decimal)
// Space: depends on sub-sort (often O(n + k))`}),l.jsx("p",{className:"mini",children:"Works well for integers/strings with fixed length."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Fr,{}),l.jsx("h3",{children:"Stable vs Unstable"})]}),l.jsx("p",{children:"Stable sort keeps the relative order of equal elements. Unstable sort may change it."}),l.jsx("pre",{children:`// Example:
// [{name:"A", score:5}, {name:"B", score:5}]
// Stable sort by score keeps A before B.
// Unstable sort might swap them.

// Merge sort: stable
// Quick sort: not stable (typical)
// Heap sort: not stable
// Insertion sort: stable`}),l.jsx("p",{className:"mini",children:"Stability matters in multi-key sorting."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ui,{}),l.jsx("h3",{children:"In-place vs Extra Memory"})]}),l.jsx("p",{children:"In-place uses constant extra space. Some sorts need extra arrays to merge/build output."}),l.jsx("pre",{children:`// In-place (typical):
// bubble, selection, insertion, quick, heap

// Extra memory:
// merge (O(n)), counting (O(k)), radix (varies)

// Rule:
// If memory is limited -> prefer in-place.
// If stability required -> merge or stable method.`}),l.jsx("p",{className:"mini",children:"Always mention space in interviews."})]})]})]})]})})},So={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:K.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:K.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `},$m=()=>{const[o,a]=qe.useState(!1);return l.jsx(So.Wrapper,{children:l.jsxs(So.Container,{className:o?"open":"",children:[l.jsxs(So.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Ao,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{children:"Recursion Patterns"}),l.jsx("p",{children:"Backtracking, divide and conquer, subsets, permutations"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(qr,{}):l.jsx(Kr,{})})]}),o&&l.jsxs(So.Content,{children:[l.jsx("div",{className:"intro",children:"Recursion is a technique where a function solves a problem by calling itself on smaller inputs. The power of recursion comes from patterns. Once you understand these patterns, many “hard” problems become predictable."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yr,{}),l.jsx("h3",{children:"Backtracking (Intro)"})]}),l.jsx("p",{children:"Backtracking explores multiple choices, builds a partial solution, and undoes steps when a path fails. Think: “try, recurse, undo”."}),l.jsx("pre",{children:`// Backtracking skeleton
function backtrack(path, choices) {
  // 1) check if done
  // 2) loop over choices
  // 3) choose
  // 4) recurse
  // 5) undo
}`}),l.jsx("p",{className:"mini",children:"Used in: permutations, combinations, sudoku, n-queens, subsets."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(da,{}),l.jsx("h3",{children:"Divide and Conquer"})]}),l.jsx("p",{children:"Divide the problem into smaller subproblems, solve them recursively, then combine results."}),l.jsx("pre",{children:`// Example idea: Merge Sort
// divide: split array into two halves
// conquer: sort each half
// combine: merge two sorted halves`}),l.jsx("p",{className:"mini",children:"Common: merge sort, quick sort, binary search."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Fr,{}),l.jsx("h3",{children:"Subset Generation"})]}),l.jsx("p",{children:"For each element, you have two choices: include it or skip it. That creates a binary decision tree."}),l.jsx("pre",{children:`// Generate all subsets (power set)
function subsets(nums) {
  const res = [];

  function dfs(i, path) {
    if (i === nums.length) {
      res.push([...path]);
      return;
    }

    // choice 1: skip nums[i]
    dfs(i + 1, path);

    // choice 2: include nums[i]
    path.push(nums[i]);
    dfs(i + 1, path);
    path.pop(); // undo
  }

  dfs(0, []);
  return res;
}`}),l.jsx("p",{className:"mini",children:"Time: O(2^n) subsets. Space: recursion depth O(n)."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dr,{}),l.jsx("h3",{children:"Permutations"})]}),l.jsx("p",{children:"Permutations are about arranging elements. Backtracking picks one unused element at a time."}),l.jsx("pre",{children:`// Permutations of nums
function permutations(nums) {
  const res = [];
  const used = Array(nums.length).fill(false);

  function dfs(path) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);

      dfs(path);

      path.pop();     // undo
      used[i] = false;
    }
  }

  dfs([]);
  return res;
}`}),l.jsx("p",{className:"mini",children:"Time: O(n!) permutations. Space: O(n) recursion + used array."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ao,{}),l.jsx("h3",{children:"Tail Recursion (Concept)"})]}),l.jsx("p",{children:"Tail recursion happens when the recursive call is the last operation in the function. Some languages can optimize it, reducing stack usage. JavaScript engines usually do not rely on it."}),l.jsx("pre",{children:`// Tail recursion style (concept)
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTail(n - 1, acc * n);
}`}),l.jsx("p",{className:"mini",children:"In JS, prefer iterative approach when depth can be large."})]})]})]})]})})},No={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:K.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:K.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);
        }

        .grid {
            /* display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px; */
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `},Vm=()=>{const[o,a]=qe.useState(!1);return l.jsx(No.Wrapper,{children:l.jsxs(No.Container,{className:o?"open":"",children:[l.jsxs(No.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Ld,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{children:"Sliding Window"}),l.jsx("p",{children:"Fixed window, variable window, and two pointers"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(qr,{}):l.jsx(Kr,{})})]}),o&&l.jsxs(No.Content,{children:[l.jsx("div",{className:"intro",children:"Sliding Window is a pattern for problems where you need information about a continuous subarray / substring. Instead of recomputing from scratch, you reuse work by moving a window step-by-step. This converts many O(n²) solutions into O(n)."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ta,{}),l.jsx("h3",{children:"What is a Window"})]}),l.jsx("p",{children:"A window is a range inside an array/string represented by two pointers: left and right."}),l.jsx("pre",{children:`// window is [l..r]
let l = 0;
for (let r = 0; r < arr.length; r++) {
  // expand window by moving r
  // shrink window by moving l when needed
}`}),l.jsx("p",{className:"mini",children:"Mental model: expand, then shrink to maintain a condition."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yr,{}),l.jsx("h3",{children:"Fixed Window"})]}),l.jsx("p",{children:"Window size is constant (k). You slide by adding the new element and removing the old one."}),l.jsx("pre",{children:`// Max sum of subarray of size k
function maxSumFixedWindow(arr, k) {
  if (k <= 0 || k > arr.length) return null;

  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];

  let best = sum;

  for (let r = k; r < arr.length; r++) {
    sum += arr[r];        // add new
    sum -= arr[r - k];    // remove old
    best = Math.max(best, sum);
  }

  return best;
}

// Example:
console.log(maxSumFixedWindow([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)`}),l.jsx("p",{className:"mini",children:"Time: O(n), Space: O(1)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Variable Window"})]}),l.jsx("p",{children:"Window size changes. Typically used when you need the smallest or longest range satisfying a condition."}),l.jsx("pre",{children:`// Smallest subarray length with sum >= target
function minLenSubarraySum(arr, target) {
  let l = 0;
  let sum = 0;
  let best = Infinity;

  for (let r = 0; r < arr.length; r++) {
    sum += arr[r];

    while (sum >= target) {
      best = Math.min(best, r - l + 1);
      sum -= arr[l];
      l++;
    }
  }

  return best === Infinity ? 0 : best;
}

// Example:
console.log(minLenSubarraySum([2, 3, 1, 2, 4, 3], 7)); // 2 (4+3)`}),l.jsx("p",{className:"mini",children:"Pattern: expand until valid, shrink to minimize."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dr,{}),l.jsx("h3",{children:"Two Pointer Technique"})]}),l.jsx("p",{children:"Two pointers is a broader pattern. Sliding window is one type. Two pointers also works on sorted arrays and opposite-end scanning."}),l.jsx("pre",{children:`// Pair sum in sorted array (two pointers)
function hasPairWithSumSorted(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) return true;
    if (sum < target) l++;
    else r--;
  }

  return false;
}

// Example:
console.log(hasPairWithSumSorted([1, 2, 4, 7, 11, 15], 15)); // true (4+11)`}),l.jsx("p",{className:"mini",children:"Works best when array is sorted or condition is monotonic."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ld,{}),l.jsx("h3",{children:"Common Use Cases"})]}),l.jsx("p",{children:"Sliding window is common for:"}),l.jsx("pre",{children:`// Examples:
- longest substring without repeating characters
- max/min sum in range of size k
- smallest window meeting a condition
- count of distinct elements in a window
- frequency-based substring problems`}),l.jsx("p",{className:"mini",children:'If it says "subarray" / "substring", think window.'})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ta,{}),l.jsx("h3",{children:"Common Pitfalls"})]}),l.jsx("p",{children:"Sliding window works when the condition is maintainable as you move pointers. If the property is not monotonic, window logic can break."}),l.jsx("pre",{children:`// Pitfalls:
- forgetting to shrink with while(...)
- shrinking with if instead of while
- incorrect window size calculation (r - l + 1)
- using window for non-monotonic constraints`}),l.jsx("p",{className:"mini",children:'Use "while" when condition might need multiple shrinks.'})]})]})]})]})})},Co={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:K.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:K.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);

            strong {
                color: var(--color-text-primary);
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `},Gm=()=>{const[o,a]=qe.useState(!1);return l.jsx(Co.Wrapper,{children:l.jsxs(Co.Container,{className:o?"open":"",children:[l.jsxs(Co.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Fr,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{children:"Stack & Queue Based Problems"}),l.jsx("p",{children:"Classic interview patterns using LIFO and FIFO"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(qr,{}):l.jsx(Kr,{})})]}),o&&l.jsxs(Co.Content,{children:[l.jsxs("div",{className:"intro",children:["Stacks and queues show up everywhere: parsing, matching brackets, “next greater” problems, and graph traversals. The key is recognizing whether you need ",l.jsx("strong",{children:"LIFO"})," (stack) or"," ",l.jsx("strong",{children:"FIFO"})," (queue) behavior."]}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Monotonic Stack"})]}),l.jsxs("p",{children:["A monotonic stack keeps elements in increasing or decreasing order. It helps you find the next greater/smaller element in",l.jsx("strong",{children:" O(n)"}),"."]}),l.jsx("pre",{children:`// Monotonic decreasing stack (stores indices)
// Useful for next greater element problems
// Idea: keep stack values strictly decreasing

// While current element is greater,
// pop until stack top is greater again`}),l.jsx("p",{className:"mini",children:"Common trick: store indices, not values."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dr,{}),l.jsx("h3",{children:"Next Greater Element"})]}),l.jsx("p",{children:"For each element, find the next element to the right that is greater. Naive is O(n²). Monotonic stack solves it in O(n)."}),l.jsx("pre",{children:`function nextGreaterElements(nums) {
  const res = new Array(nums.length).fill(-1);
  const st = []; // stack of indices

  for (let i = 0; i < nums.length; i++) {
    while (st.length && nums[i] > nums[st[st.length - 1]]) {
      const idx = st.pop();
      res[idx] = nums[i];
    }
    st.push(i);
  }

  return res;
}

// Example:
// [2, 1, 2, 4, 3] -> [4, 2, 4, -1, -1]`}),l.jsx("p",{className:"mini",children:"Time: O(n) because each index is pushed and popped once."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(na,{}),l.jsx("h3",{children:"Valid Parentheses"})]}),l.jsx("p",{children:"Use a stack to match opening brackets. Every closing bracket must match the latest unmatched opener."}),l.jsx("pre",{children:`function isValid(s) {
  const st = [];
  const match = { ")": "(", "]": "[", "}": "{" };

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      st.push(ch);
    } else {
      if (!st.length) return false;
      const top = st.pop();
      if (top !== match[ch]) return false;
    }
  }

  return st.length === 0;
}

// Examples:
// "()[]{}" -> true
// "(]" -> false
// "([{}])" -> true`}),l.jsx("p",{className:"mini",children:"Time: O(n), Space: O(n) worst case."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(da,{}),l.jsx("h3",{children:"BFS vs DFS Mental Model"})]}),l.jsx("p",{children:"BFS uses a queue (FIFO) to explore level by level. DFS uses a stack/recursion (LIFO) to go deep first."}),l.jsx("pre",{children:`// BFS (queue) - level order
function bfs(start, adj) {
  const q = [start];
  const seen = new Set([start]);

  while (q.length) {
    const node = q.shift(); // queue pop front
    for (const nei of adj[node]) {
      if (!seen.has(nei)) {
        seen.add(nei);
        q.push(nei);
      }
    }
  }
}

// DFS (stack) - depth first
function dfs(start, adj) {
  const st = [start];
  const seen = new Set([start]);

  while (st.length) {
    const node = st.pop(); // stack pop last
    for (const nei of adj[node]) {
      if (!seen.has(nei)) {
        seen.add(nei);
        st.push(nei);
      }
    }
  }
}`}),l.jsx("p",{className:"mini",children:"BFS is great for shortest path in unweighted graphs. DFS is great for exploration, cycles, components."})]})]})]})]})})},Eo={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:K.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:K.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .grid {
            /* display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px; */
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        .list {
            display: grid;
            gap: 10px;
            margin: 12px 0 6px 0;

            li {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 13px;
                color: var(--color-text-secondary);
            }

            .dot {
                width: 7px;
                height: 7px;
                border-radius: 999px;
                background: var(--color-primary);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `},Qm=()=>{const[o,a]=qe.useState(!1);return l.jsx(Eo.Wrapper,{children:l.jsxs(Eo.Container,{className:o?"open":"",children:[l.jsxs(Eo.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Fm,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{children:"Greedy"}),l.jsx("p",{children:"Pick the best local choice and move forward"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(qr,{}):l.jsx(Kr,{})})]}),o&&l.jsxs(Eo.Content,{children:[l.jsxs("div",{className:"intro",children:["Greedy algorithms build the answer step-by-step by choosing the best option right now. They are fast and simple, but they only work when the problem has the"," ",l.jsx("span",{className:"mono",children:"greedy choice property"})," ","(a locally optimal choice leads to a globally optimal solution). When greedy fails, Dynamic Programming is usually the next stop."]}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yr,{}),l.jsx("h3",{children:"Activity Selection"})]}),l.jsx("p",{children:"Goal: select the maximum number of non-overlapping activities. Greedy rule: sort by end time and always pick the earliest finishing activity."}),l.jsx("pre",{children:`// Each activity: { start, end }
// Greedy: sort by end, pick compatible ones

function activitySelection(activities) {
  const sorted = [...activities].sort((a, b) => a.end - b.end);

  const picked = [];
  let lastEnd = -Infinity;

  for (const act of sorted) {
    if (act.start >= lastEnd) {
      picked.push(act);
      lastEnd = act.end;
    }
  }

  return picked;
}

// Example
const acts = [
  { start: 1, end: 2 },
  { start: 3, end: 4 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 8, end: 9 },
  { start: 5, end: 9 },
];

console.log(activitySelection(acts));
// picks max compatible set (by end time)`}),l.jsx("p",{className:"mini",children:"Time: O(n log n) for sorting, Space: O(n) for result"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(zm,{}),l.jsx("h3",{children:"Coin Change: Greedy vs DP"})]}),l.jsx("p",{children:"Greedy rule: take the largest coin possible repeatedly. This works for some coin systems (like typical currency), but fails for others."}),l.jsx("pre",{children:`// Greedy coin change (may fail depending on coins)
function coinChangeGreedy(coins, amount) {
  const sorted = [...coins].sort((a, b) => b - a);

  const used = [];
  let remaining = amount;

  for (const c of sorted) {
    while (remaining >= c) {
      used.push(c);
      remaining -= c;
    }
  }

  return remaining === 0 ? used : null;
}

// Case where greedy works (common currency)
console.log(coinChangeGreedy([1, 2, 5, 10], 18)); // 10,5,2,1

// Case where greedy fails
// coins: 1, 3, 4 amount: 6
// greedy: 4 + 1 + 1 (3 coins)
// optimal: 3 + 3 (2 coins)
console.log(coinChangeGreedy([1, 3, 4], 6));`}),l.jsx("p",{className:"mini",children:"Greedy is fast but not guaranteed optimal. DP guarantees optimal solution."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(bm,{}),l.jsx("h3",{children:"Huffman Coding Concept"})]}),l.jsx("p",{children:"Huffman coding builds an optimal prefix code for compression. Greedy idea: repeatedly merge the two least frequent nodes."}),l.jsx("pre",{children:`// Concept only (implementation uses min-heap):
// 1) put all (char, freq) in a min-heap
// 2) pop two smallest nodes
// 3) merge into a new node with freq = sum
// 4) push merged node back
// 5) repeat until one node remains (root)

// Result: shorter codes for frequent chars,
// longer codes for rare chars.

// Greedy choice: always combine two smallest frequencies.`}),l.jsx("p",{className:"mini",children:"Uses a priority queue (min-heap). Time: O(n log n)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"When Greedy Works"})]}),l.jsx("p",{children:"Greedy works when:"}),l.jsxs("ul",{className:"list",children:[l.jsxs("li",{children:[l.jsx("span",{className:"dot"}),"Greedy choice property holds"]}),l.jsxs("li",{children:[l.jsx("span",{className:"dot"}),"Optimal substructure exists"]}),l.jsxs("li",{children:[l.jsx("span",{className:"dot"}),"Local best leads to global best"]})]}),l.jsx("p",{className:"mini",children:"If you can produce a counterexample where greedy fails, you likely need DP."})]})]})]})]})})},_o={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:K.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:K.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);

            strong {
                color: var(--color-text-primary);
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `},Ym=()=>{const[o,a]=qe.useState(!1);return l.jsx(_o.Wrapper,{children:l.jsxs(_o.Container,{className:o?"open":"",children:[l.jsxs(_o.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Om,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{children:"Dynamic Programming"}),l.jsx("p",{children:"Turn exponential into polynomial"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(qr,{}):l.jsx(Kr,{})})]}),o&&l.jsxs(_o.Content,{children:[l.jsxs("div",{className:"intro",children:["Dynamic Programming (DP) is a technique for solving problems by breaking them into subproblems and reusing computed results. DP is usually used when a problem has ",l.jsx("strong",{children:"overlapping subproblems"})," ","and ",l.jsx("strong",{children:"optimal substructure"}),". The goal is simple: avoid recomputing the same work again and again."]}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ao,{}),l.jsx("h3",{children:"Overlapping Subproblems"})]}),l.jsx("p",{children:"If the same subproblem appears multiple times, naive recursion repeats work. DP stores results so each subproblem is solved once."}),l.jsx("pre",{children:`// Fibonacci overlap example:
// fib(5) calls fib(4) and fib(3)
// fib(4) again calls fib(3) and fib(2)
// fib(3) repeats multiple times`}),l.jsx("p",{className:"mini",children:"Repeated work is the main DP signal."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Fr,{}),l.jsx("h3",{children:"Memoization (Top-down)"})]}),l.jsx("p",{children:"Memoization keeps recursion but caches answers. If you ask for the same state again, return cached value."}),l.jsx("pre",{children:`// Fibonacci with memoization
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}`}),l.jsx("p",{className:"mini",children:"Same recursion structure, but faster."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ui,{}),l.jsx("h3",{children:"Tabulation (Bottom-up)"})]}),l.jsx("p",{children:"Tabulation builds answers iteratively from base cases to the final answer using a DP table."}),l.jsx("pre",{children:`// Fibonacci with tabulation
function fibTab(n) {
  if (n <= 1) return n;
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`}),l.jsx("p",{className:"mini",children:"Usually easier to control space usage."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yr,{}),l.jsx("h3",{children:"0/1 Knapsack (Core Idea)"})]}),l.jsxs("p",{children:["You either take an item or skip it (no partial items). DP state often uses"," ",l.jsx("strong",{children:"(index, remainingCapacity)"}),"."]}),l.jsx("pre",{children:`// 0/1 Knapsack (tabulation idea)
// dp[i][w] = max value using first i items with capacity w

// transition:
dp[i][w] = dp[i-1][w]  // skip item
dp[i][w] = max(dp[i][w], value[i] + dp[i-1][w-weight[i]]) // take item`}),l.jsx("p",{className:"mini",children:'Classic example of "choice" DP.'})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"LIS Concept"})]}),l.jsx("p",{children:"LIS = Longest Increasing Subsequence. The DP idea: for each position, find the best sequence ending there."}),l.jsx("pre",{children:`// LIS DP (O(n^2) idea)
dp[i] = length of LIS ending at i

dp[i] = 1 + max(dp[j]) for all j < i where arr[j] < arr[i]`}),l.jsx("p",{className:"mini",children:"Later optimized with binary search (O(n log n))."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ao,{}),l.jsx("h3",{children:"Fibonacci DP (Most Basic DP)"})]}),l.jsx("p",{children:"Fibonacci is the easiest way to understand DP. It shows overlap and caching clearly."}),l.jsx("pre",{children:`// Space optimized Fibonacci
function fibOpt(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}`}),l.jsx("p",{className:"mini",children:"Same DP, but O(1) extra space."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Fr,{}),l.jsx("h3",{children:"DP State Thinking"})]}),l.jsxs("p",{children:["DP is mostly about designing the right"," ",l.jsx("strong",{children:"state"}),"."]}),l.jsx("pre",{children:`DP checklist:
1) What changes during recursion? => state variables
2) What is the answer for that state?
3) What are the choices (transitions)?
4) What are base cases?
5) Can you reuse results for same state?`}),l.jsx("p",{className:"mini",children:"If state is wrong, DP becomes impossible."})]})]})]})]})})},Po={Wrapper:K.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:K.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:K.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:K.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);
        }

        .grid {
            /* display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px; */
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }

        .card {
            width: 100%;
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `},Km=()=>{const[o,a]=qe.useState(!1);return l.jsx(Po.Wrapper,{children:l.jsxs(Po.Container,{className:o?"open":"",children:[l.jsxs(Po.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(da,{})}),l.jsxs("div",{className:"titleBlock",children:[l.jsx("h2",{children:"Graph Algorithms"}),l.jsx("p",{children:"BFS, DFS, shortest paths, ordering, MST"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(qr,{}):l.jsx(Kr,{})})]}),o&&l.jsxs(Po.Content,{children:[l.jsx("div",{className:"intro",children:"Graph algorithms handle relationships: roads, networks, dependencies, friends, routes, and flows. Most graph problems reduce to traversal (BFS/DFS), ordering (topological sort), shortest path (Dijkstra/Bellman-Ford/Floyd), or connectivity building (MST/Union-Find)."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Fr,{}),l.jsx("h3",{children:"BFS"})]}),l.jsx("p",{children:"Breadth First Search explores level by level. Use BFS for shortest path in unweighted graphs."}),l.jsx("pre",{children:`// BFS (adjacency list)
function bfs(graph, start) {
  const q = [start];
  const visited = new Set([start]);
  const order = [];

  while (q.length) {
    const node = q.shift();
    order.push(node);

    for (const nei of (graph[node] || [])) {
      if (!visited.has(nei)) {
        visited.add(nei);
        q.push(nei);
      }
    }
  }

  return order;
}

// Example graph
const g = {
  A: ["B","C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: []
};

console.log(bfs(g, "A")); // A B C D E`}),l.jsx("p",{className:"mini",children:"Time: O(V+E), Space: O(V)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Im,{}),l.jsx("h3",{children:"DFS"})]}),l.jsx("p",{children:"Depth First Search explores deeply before backtracking. Useful for components, cycle checks, paths, topological sort."}),l.jsx("pre",{children:`// DFS (recursive)
function dfs(graph, start, visited = new Set(), order = []) {
  if (visited.has(start)) return order;
  visited.add(start);
  order.push(start);

  for (const nei of (graph[start] || [])) {
    if (!visited.has(nei)) dfs(graph, nei, visited, order);
  }

  return order;
}

console.log(dfs(g, "A")); // A B D C E (one possible order)`}),l.jsx("p",{className:"mini",children:"Time: O(V+E), Space: O(V) (stack/visited)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dr,{}),l.jsx("h3",{children:"Topological Sort"})]}),l.jsx("p",{children:"Works only on DAG (Directed Acyclic Graph). Gives an order where every edge u → v means u comes before v."}),l.jsx("pre",{children:`// Kahn's Algorithm (BFS using indegree)
function topoSort(graph) {
  const indeg = {};
  for (const u in graph) {
    indeg[u] = indeg[u] ?? 0;
    for (const v of graph[u]) {
      indeg[v] = (indeg[v] ?? 0) + 1;
    }
  }

  const q = [];
  for (const node in indeg) {
    if (indeg[node] === 0) q.push(node);
  }

  const order = [];
  while (q.length) {
    const u = q.shift();
    order.push(u);
    for (const v of (graph[u] || [])) {
      indeg[v]--;
      if (indeg[v] === 0) q.push(v);
    }
  }

  // If not all nodes processed, cycle exists
  return order.length === Object.keys(indeg).length ? order : [];
}

// Example DAG
const dag = {
  A: ["C"],
  B: ["C", "D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: []
};

console.log(topoSort(dag));`}),l.jsx("p",{className:"mini",children:"Time: O(V+E). Empty result can indicate a cycle."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Pm,{}),l.jsx("h3",{children:"Dijkstra"})]}),l.jsx("p",{children:"Shortest path for non-negative edge weights. Uses greedy: always expand current smallest distance."}),l.jsx("pre",{children:`// Dijkstra (simple version, O(V^2) without heap)
// graph: { node: [[nei, weight], ...] }
function dijkstra(graph, start) {
  const dist = {};
  const visited = new Set();

  for (const node in graph) dist[node] = Infinity;
  dist[start] = 0;

  const nodes = Object.keys(graph);

  for (let i = 0; i < nodes.length; i++) {
    let u = null;
    let best = Infinity;

    for (const n of nodes) {
      if (!visited.has(n) && dist[n] < best) {
        best = dist[n];
        u = n;
      }
    }

    if (u === null) break;
    visited.add(u);

    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
    }
  }

  return dist;
}

const wg = {
  A: [["B", 4], ["C", 2]],
  B: [["C", 5], ["D", 10]],
  C: [["E", 3]],
  D: [["F", 11]],
  E: [["D", 4]],
  F: []
};

console.log(dijkstra(wg, "A"));`}),l.jsx("p",{className:"mini",children:"Use a min-heap for O((V+E) log V) in production."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Cm,{}),l.jsx("h3",{children:"Bellman-Ford"})]}),l.jsx("p",{children:"Shortest path that supports negative weights. Can detect negative cycles."}),l.jsx("pre",{children:`// Bellman-Ford
// edges: [[u, v, w], ...]
function bellmanFord(nodes, edges, start) {
  const dist = {};
  for (const n of nodes) dist[n] = Infinity;
  dist[start] = 0;

  // Relax edges V-1 times
  for (let i = 0; i < nodes.length - 1; i++) {
    let changed = false;
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        changed = true;
      }
    }
    if (!changed) break;
  }

  // Detect negative cycle
  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      return { dist, hasNegativeCycle: true };
    }
  }

  return { dist, hasNegativeCycle: false };
}

const nodes = ["A","B","C","D"];
const edges = [
  ["A","B", 1],
  ["B","C", 2],
  ["A","C", 6],
  ["C","D", -3]
];

console.log(bellmanFord(nodes, edges, "A"));`}),l.jsx("p",{className:"mini",children:"Time: O(VE). Slower than Dijkstra but more flexible."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tm,{}),l.jsx("h3",{children:"Floyd-Warshall (conceptual)"})]}),l.jsx("p",{children:"All-pairs shortest paths. Works with negative edges (but not negative cycles). Best for dense graphs or small n."}),l.jsx("pre",{children:`// Floyd-Warshall idea (O(n^3))
// dist[i][j] = shortest distance i -> j
for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
    }
  }
}`}),l.jsx("p",{className:"mini",children:'Think: "try every node as an intermediate stop".'})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pr,{}),l.jsx("h3",{children:"Minimum Spanning Tree"})]}),l.jsx("p",{children:"MST connects all nodes with minimum total edge weight (undirected weighted graph). Common algorithms: Kruskal, Prim."}),l.jsx("pre",{children:`// Kruskal idea:
// 1) sort edges by weight
// 2) add edge if it does not form a cycle
// Union-Find helps detect cycle fast`}),l.jsx("p",{className:"mini",children:"Used in network design, clustering, wiring, road planning."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ui,{}),l.jsx("h3",{children:"Union-Find (Disjoint Set)"})]}),l.jsx("p",{children:"Tracks connected components and supports: find(x) and union(a,b). Very useful for Kruskal MST and cycle detection."}),l.jsx("pre",{children:`class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(a, b) {
    const ra = this.find(a);
    const rb = this.find(b);
    if (ra === rb) return false;

    if (this.rank[ra] < this.rank[rb]) this.parent[ra] = rb;
    else if (this.rank[ra] > this.rank[rb]) this.parent[rb] = ra;
    else {
      this.parent[rb] = ra;
      this.rank[ra]++;
    }
    return true;
  }
}

// Example: 5 nodes (0..4)
const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(1, 2);
console.log(uf.find(0) === uf.find(2)); // true`}),l.jsx("p",{className:"mini",children:"With path compression + union by rank: almost O(1) per operation."})]})]})]})]})})},qm=()=>l.jsxs(Ys.Wrapper,{children:[l.jsx(Ys.Header,{children:l.jsx(Dm,{})}),l.jsxs(Ys.Main,{children:[l.jsxs("div",{className:"contentWrapper",children:[l.jsx(Bm,{}),l.jsx(Wm,{}),l.jsx(Hm,{}),l.jsx(Um,{}),l.jsx($m,{}),l.jsx(Vm,{}),l.jsx(Gm,{}),l.jsx(Qm,{}),l.jsx(Ym,{}),l.jsx(Km,{})]}),l.jsx("div",{className:"footerWrapper",children:l.jsx(Am,{})})]})]});ph.createRoot(document.getElementById("root")).render(l.jsx(l.Fragment,{children:l.jsx(qm,{})}));
