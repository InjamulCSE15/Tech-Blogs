(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();function be(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ne={exports:{}},L={},oe={exports:{}},f={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=Symbol.for("react.element"),je=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),Ne=Symbol.for("react.provider"),Oe=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Se=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),G=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,ie={};function O(e,t,r){this.props=e,this.context=t,this.refs=ie,this.updater=r||se}O.prototype.isReactComponent={};O.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function le(){}le.prototype=O.prototype;function W(e,t,r){this.props=e,this.context=t,this.refs=ie,this.updater=r||se}var J=W.prototype=new le;J.constructor=W;ae(J,O.prototype);J.isPureReactComponent=!0;var Q=Array.isArray,ce=Object.prototype.hasOwnProperty,K={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function de(e,t,r){var o,n={},s=null,a=null;if(t!=null)for(o in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)ce.call(t,o)&&!ue.hasOwnProperty(o)&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=r;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];n.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return{$$typeof:$,type:e,key:s,ref:a,props:n,_owner:K.current}}function Re(e,t){return{$$typeof:$,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Y(e){return typeof e=="object"&&e!==null&&e.$$typeof===$}function Ie(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Z=/\/+/g;function V(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ie(""+e.key):t.toString(36)}function R(e,t,r,o,n){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case $:case je:a=!0}}if(a)return a=e,n=n(a),e=o===""?"."+V(a,0):o,Q(n)?(r="",e!=null&&(r=e.replace(Z,"$&/")+"/"),R(n,t,r,"",function(u){return u})):n!=null&&(Y(n)&&(n=Re(n,r+(!n.key||a&&a.key===n.key?"":(""+n.key).replace(Z,"$&/")+"/")+e)),t.push(n)),1;if(a=0,o=o===""?".":o+":",Q(e))for(var i=0;i<e.length;i++){s=e[i];var l=o+V(s,i);a+=R(s,t,r,l,n)}else if(l=Ce(e),typeof l=="function")for(e=l.call(e),i=0;!(s=e.next()).done;)s=s.value,l=o+V(s,i++),a+=R(s,t,r,l,n);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function S(e,t,r){if(e==null)return e;var o=[],n=0;return R(e,o,"","",function(s){return t.call(r,s,n++)}),o}function Be(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var g={current:null},I={transition:null},Te={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:I,ReactCurrentOwner:K};f.Children={map:S,forEach:function(e,t,r){S(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return S(e,function(){t++}),t},toArray:function(e){return S(e,function(t){return t})||[]},only:function(e){if(!Y(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};f.Component=O;f.Fragment=we;f.Profiler=_e;f.PureComponent=W;f.StrictMode=ke;f.Suspense=Ee;f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Te;f.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ae({},e.props),n=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=K.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)ce.call(t,l)&&!ue.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&i!==void 0?i[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=r;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];o.children=i}return{$$typeof:$,type:e.type,key:n,ref:s,props:o,_owner:a}};f.createContext=function(e){return e={$$typeof:Oe,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ne,_context:e},e.Consumer=e};f.createElement=de;f.createFactory=function(e){var t=de.bind(null,e);return t.type=e,t};f.createRef=function(){return{current:null}};f.forwardRef=function(e){return{$$typeof:$e,render:e}};f.isValidElement=Y;f.lazy=function(e){return{$$typeof:Pe,_payload:{_status:-1,_result:e},_init:Be}};f.memo=function(e,t){return{$$typeof:Se,type:e,compare:t===void 0?null:t}};f.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}};f.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};f.useCallback=function(e,t){return g.current.useCallback(e,t)};f.useContext=function(e){return g.current.useContext(e)};f.useDebugValue=function(){};f.useDeferredValue=function(e){return g.current.useDeferredValue(e)};f.useEffect=function(e,t){return g.current.useEffect(e,t)};f.useId=function(){return g.current.useId()};f.useImperativeHandle=function(e,t,r){return g.current.useImperativeHandle(e,t,r)};f.useInsertionEffect=function(e,t){return g.current.useInsertionEffect(e,t)};f.useLayoutEffect=function(e,t){return g.current.useLayoutEffect(e,t)};f.useMemo=function(e,t){return g.current.useMemo(e,t)};f.useReducer=function(e,t,r){return g.current.useReducer(e,t,r)};f.useRef=function(e){return g.current.useRef(e)};f.useState=function(e){return g.current.useState(e)};f.useSyncExternalStore=function(e,t,r){return g.current.useSyncExternalStore(e,t,r)};f.useTransition=function(){return g.current.useTransition()};f.version="18.2.0";oe.exports=f;var p=oe.exports;const k=be(p);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=p,De=Symbol.for("react.element"),Ae=Symbol.for("react.fragment"),ze=Object.prototype.hasOwnProperty,Le=Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fe={key:!0,ref:!0,__self:!0,__source:!0};function fe(e,t,r){var o,n={},s=null,a=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(o in t)ze.call(t,o)&&!Fe.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)n[o]===void 0&&(n[o]=t[o]);return{$$typeof:De,type:e,key:s,ref:a,props:n,_owner:Le.current}}L.Fragment=Ae;L.jsx=fe;L.jsxs=fe;ne.exports=L;var c=ne.exports;let Ve={data:""},He=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ve,Ue=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,qe=/\/\*[^]*?\*\/|  +/g,X=/\n+/g,w=(e,t)=>{let r="",o="",n="";for(let s in e){let a=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+a+";":o+=s[1]=="f"?w(a,s):s+"{"+w(a,s[1]=="k"?"":t)+"}":typeof a=="object"?o+=w(a,t?t.replace(/([^,])+/g,i=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=w.p?w.p(s,a):s+":"+a+";")}return r+(t&&n?t+"{"+n+"}":n)+o},b={},pe=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+pe(e[r]);return t}return e},We=(e,t,r,o,n)=>{let s=pe(e),a=b[s]||(b[s]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(s));if(!b[a]){let l=s!==e?e:(u=>{let d,h,y=[{}];for(;d=Ue.exec(u.replace(qe,""));)d[4]?y.shift():d[3]?(h=d[3].replace(X," ").trim(),y.unshift(y[0][h]=y[0][h]||{})):y[0][d[1]]=d[2].replace(X," ").trim();return y[0]})(e);b[a]=w(n?{["@keyframes "+a]:l}:l,r?"":"."+a)}let i=r&&b.g?b.g:null;return r&&(b.g=b[a]),((l,u,d,h)=>{h?u.data=u.data.replace(h,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(b[a],t,o,i),a},Je=(e,t,r)=>e.reduce((o,n,s)=>{let a=t[s];if(a&&a.call){let i=a(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=l?"."+l:i&&typeof i=="object"?i.props?"":w(i,""):i===!1?"":i}return o+n+(a??"")},"");function F(e){let t=this||{},r=e.call?e(t.p):e;return We(r.unshift?r.raw?Je(r,[].slice.call(arguments,1),t.p):r.reduce((o,n)=>Object.assign(o,n&&n.call?n(t.p):n),{}):r,He(t.target),t.g,t.o,t.k)}let me,H,U;F.bind({g:1});let j=F.bind({k:1});function Ke(e,t,r,o){w.p=t,me=e,H=r,U=o}function _(e,t){let r=this||{};return function(){let o=arguments;function n(s,a){let i=Object.assign({},s),l=i.className||n.className;r.p=Object.assign({theme:H&&H()},i),r.o=/ *go\d+/.test(l),i.className=F.apply(r,o)+(l?" "+l:""),t&&(i.ref=a);let u=e;return e[0]&&(u=i.as||e,delete i.as),U&&u[0]&&U(i),me(u,i)}return t?t(n):n}}var Ye=e=>typeof e=="function",D=(e,t)=>Ye(e)?e(t):e,Ge=(()=>{let e=0;return()=>(++e).toString()})(),he=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Qe=20,B=new Map,Ze=1e3,ee=e=>{if(B.has(e))return;let t=setTimeout(()=>{B.delete(e),N({type:4,toastId:e})},Ze);B.set(e,t)},Xe=e=>{let t=B.get(e);t&&clearTimeout(t)},q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Qe)};case 1:return t.toast.id&&Xe(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return e.toasts.find(s=>s.id===r.id)?q(e,{type:1,toast:r}):q(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?ee(o):e.toasts.forEach(s=>{ee(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===o||o===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+n}))}}},T=[],M={toasts:[],pausedAt:void 0},N=e=>{M=q(M,e),T.forEach(t=>{t(M)})},et={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},tt=(e={})=>{let[t,r]=p.useState(M);p.useEffect(()=>(T.push(r),()=>{let n=T.indexOf(r);n>-1&&T.splice(n,1)}),[t]);let o=t.toasts.map(n=>{var s,a;return{...e,...e[n.type],...n,duration:n.duration||((s=e[n.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||et[n.type],style:{...e.style,...(a=e[n.type])==null?void 0:a.style,...n.style}}});return{...t,toasts:o}},rt=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Ge()}),E=e=>(t,r)=>{let o=rt(t,e,r);return N({type:2,toast:o}),o.id},x=(e,t)=>E("blank")(e,t);x.error=E("error");x.success=E("success");x.loading=E("loading");x.custom=E("custom");x.dismiss=e=>{N({type:3,toastId:e})};x.remove=e=>N({type:4,toastId:e});x.promise=(e,t,r)=>{let o=x.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(n=>(x.success(D(t.success,n),{id:o,...r,...r==null?void 0:r.success}),n)).catch(n=>{x.error(D(t.error,n),{id:o,...r,...r==null?void 0:r.error})}),e};var nt=(e,t)=>{N({type:1,toast:{id:e,height:t}})},ot=()=>{N({type:5,time:Date.now()})},st=e=>{let{toasts:t,pausedAt:r}=tt(e);p.useEffect(()=>{if(r)return;let s=Date.now(),a=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(s-i.createdAt);if(l<0){i.visible&&x.dismiss(i.id);return}return setTimeout(()=>x.dismiss(i.id),l)});return()=>{a.forEach(i=>i&&clearTimeout(i))}},[t,r]);let o=p.useCallback(()=>{r&&N({type:6,time:Date.now()})},[r]),n=p.useCallback((s,a)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:u}=a||{},d=t.filter(m=>(m.position||u)===(s.position||u)&&m.height),h=d.findIndex(m=>m.id===s.id),y=d.filter((m,v)=>v<h&&m.visible).length;return d.filter(m=>m.visible).slice(...i?[y+1]:[0,y]).reduce((m,v)=>m+(v.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:nt,startPause:ot,endPause:o,calculateOffset:n}}},at=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,it=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lt=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ct=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${at} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${it} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${lt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ut=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,dt=_("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ut} 1s linear infinite;
`,ft=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,pt=j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,mt=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ft} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${pt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ht=_("div")`
  position: absolute;
`,yt=_("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,gt=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xt=_("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${gt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,vt=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?p.createElement(xt,null,t):t:r==="blank"?null:p.createElement(yt,null,p.createElement(dt,{...o}),r!=="loading"&&p.createElement(ht,null,r==="error"?p.createElement(ct,{...o}):p.createElement(mt,{...o})))},bt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,jt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,wt="0%{opacity:0;} 100%{opacity:1;}",kt="0%{opacity:1;} 100%{opacity:0;}",_t=_("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Nt=_("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ot=(e,t)=>{let r=e.includes("top")?1:-1,[o,n]=he()?[wt,kt]:[bt(r),jt(r)];return{animation:t?`${j(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$t=p.memo(({toast:e,position:t,style:r,children:o})=>{let n=e.height?Ot(e.position||t||"top-center",e.visible):{opacity:0},s=p.createElement(vt,{toast:e}),a=p.createElement(Nt,{...e.ariaProps},D(e.message,e));return p.createElement(_t,{className:e.className,style:{...n,...r,...e.style}},typeof o=="function"?o({icon:s,message:a}):p.createElement(p.Fragment,null,s,a))});Ke(p.createElement);var Et=({id:e,className:t,style:r,onHeightUpdate:o,children:n})=>{let s=p.useCallback(a=>{if(a){let i=()=>{let l=a.getBoundingClientRect().height;o(e,l)};i(),new MutationObserver(i).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return p.createElement("div",{ref:s,className:t,style:r},n)},St=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:he()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...n}},Pt=F`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,P=16,Ct=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:n,containerStyle:s,containerClassName:a})=>{let{toasts:i,handlers:l}=st(r);return p.createElement("div",{style:{position:"fixed",zIndex:9999,top:P,left:P,right:P,bottom:P,pointerEvents:"none",...s},className:a,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(u=>{let d=u.position||t,h=l.calculateOffset(u,{reverseOrder:e,gutter:o,defaultPosition:t}),y=St(d,h);return p.createElement(Et,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?Pt:"",style:y},u.type==="custom"?D(u.message,u):n?n(u):p.createElement($t,{toast:u,position:d}))}))},C=x;const Rt="/assets/avatar-1-DBjV8m-b.jpg";function It(){return c.jsx("header",{className:"bg-white",children:c.jsx("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  border-gray-100 border-b-2 ",children:c.jsxs("div",{className:"flex h-16 items-center justify-between",children:[c.jsx("div",{className:"flex-1 md:flex md:items-center md:gap-12",children:c.jsxs("a",{className:"block text-indigo-600 font-bold text-2xl",href:"#",children:[c.jsx("span",{className:"sr-only",children:"Home"}),"Tech-Blogs"]})}),c.jsx("div",{className:"md:flex md:items-center md:gap-12",children:c.jsx("div",{className:"flex items-center gap-4",children:c.jsxs("a",{href:"https://www.facebook.com/injamulcse15",target:"_blank",className:"flex items-center ",children:[c.jsx("span",{className:"text-xs px-4 hidden md:inline-block",children:"InjamulCSE15"}),c.jsx("img",{alt:"Injamul Alam",src:Rt,className:"relative inline-block h-12 w-12 rounded-full object-cover object-center"})]})})})]})})})}var ye={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},te=k.createContext&&k.createContext(ye),Bt=["attr","size","title"];function Tt(e,t){if(e==null)return{};var r=Mt(e,t),o,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function Mt(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,s;for(s=0;s<o.length;s++)n=o[s],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},A.apply(this,arguments)}function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?re(Object(r),!0).forEach(function(o){Dt(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Dt(e,t,r){return t=At(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function At(e){var t=zt(e,"string");return typeof t=="symbol"?t:String(t)}function zt(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ge(e){return e&&e.map((t,r)=>k.createElement(t.tag,z({key:r},t.attr),ge(t.child)))}function xe(e){return t=>k.createElement(Lt,A({attr:z({},e.attr)},t),ge(e.child))}function Lt(e){var t=r=>{var{attr:o,size:n,title:s}=e,a=Tt(e,Bt),i=n||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),k.createElement("svg",A({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,a,{className:l,style:z(z({color:e.color||r.color},r.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),s&&k.createElement("title",null,s),e.children)};return te!==void 0?k.createElement(te.Consumer,null,r=>t(r)):t(ye)}function Ft(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"},child:[]}]})(e)}function Vt(e){return xe({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"},child:[]}]})(e)}function Ht({blog:e,handleMarkAsRead:t,handleAddBookmark:r}){const{id:o,title:n,cover_img:s,blog_details:a,isRead:i,author:l,author_img:u,reading_time:d,hashtags:h,posted_date:y}=e;return c.jsxs("article",{className:"group mb-6",children:[c.jsx("img",{alt:n,src:s,className:"h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"}),c.jsxs("div",{className:"flex items-center justify-between mt-4",children:[c.jsxs("div",{className:"flex",children:[c.jsx("img",{className:"inline-block h-12 w-12 rounded-full ring-2 ring-white",src:u,alt:""}),c.jsxs("div",{children:[c.jsx("h3",{className:"px-4 text-dark font-bold text-xl",children:l}),c.jsx("small",{className:"px-4 text-sm text-gray-400",children:y})]})]}),c.jsxs("div",{className:"flex items-center",children:[c.jsxs("h5",{className:"text-sm text-gray-400",children:[d," min read"]}),c.jsx("button",{className:"ms-4",onClick:()=>r(e),children:c.jsx(Vt,{})})]})]}),c.jsxs("div",{className:"p-4 border-b-2",children:[c.jsx("h3",{className:"text-4xl font-medium text-gray-900",children:n}),c.jsx("div",{className:"flex",children:h.map((m,v)=>c.jsxs("small",{className:"inline-block px-2 text-gray-400",children:["#",m]},v))}),c.jsx("button",{onClick:()=>t(o),className:"text-indigo-600 bg-indigo-100 px-2 border border-indigo-200 rounded-md hover:bg-indigo-200 mt-1",children:i?"Marked as unread    ":"Mark as read"}),c.jsx("p",{className:"mt-2 line-clamp-3 text-sm/relaxed text-gray-600",children:a})]})]})}function Ut({bookmarkBlog:e}){const{title:t,author:r}=e;return c.jsxs("div",{className:"bg-white rounded-lg p-2 my-2",children:[c.jsx("h5",{children:t}),c.jsx("small",{className:"block text-end text-sm py-1 text-gray-400 me-2",children:r})]})}const qt=e=>{const t=JSON.stringify(e);localStorage.setItem("markedBooked",t)},Wt=e=>{const t=ve();t.push(e),qt(t)},ve=()=>{const e=localStorage.getItem("markedBooked");return e?JSON.parse(e):[]};function Jt(){const[e,t]=p.useState([]),[r,o]=p.useState(0),[n,s]=p.useState([]),[a,i]=p.useState(!0);p.useEffect(()=>{fetch("../../../public/blogs.json").then(d=>d.json()).then(d=>{t(d),i(!1)})},[]),p.useEffect(()=>{if(e.length){const d=ve(),h=[];for(const y of d){const m=e.find(v=>v.id===y);m&&h.push(m)}s(h)}},[e]);const l=d=>{const h=e.map(m=>m.id===d?{...m,isRead:!m.isRead}:m);t(h);const y=h.reduce((m,v)=>m+(v.isRead?v.reading_time:0),0);o(y),h.find(m=>m.id===d).isRead?C.success("Blog has been marked as read."):C.success("Blog marked as unread.")},u=d=>{n.find(y=>y.id===d.id)?C.error("This blog is already bookmarked."):(s([...n,d]),Wt(d.id``),C.success("Blog has been bookmarked!"))};return c.jsx("div",{className:"container mx-auto mt-5",children:a?c.jsxs("div",{className:"flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row",children:[c.jsx("div",{className:"bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"}),c.jsxs("div",{className:"flex flex-col flex-1 gap-5 sm:p-2",children:[c.jsxs("div",{className:"flex flex-col flex-1 gap-3",children:[c.jsx("div",{className:"w-full bg-gray-200 animate-pulse h-14 rounded-2xl"}),c.jsx("div",{className:"w-full h-3 bg-gray-200 animate-pulse rounded-2xl"}),c.jsx("div",{className:"w-full h-3 bg-gray-200 animate-pulse rounded-2xl"}),c.jsx("div",{className:"w-full h-3 bg-gray-200 animate-pulse rounded-2xl"}),c.jsx("div",{className:"w-full h-3 bg-gray-200 animate-pulse rounded-2xl"})]}),c.jsxs("div",{className:"flex gap-3 mt-auto",children:[c.jsx("div",{className:"w-20 h-8 bg-gray-200 rounded-full animate-pulse"}),c.jsx("div",{className:"w-20 h-8 bg-gray-200 rounded-full animate-pulse"}),c.jsx("div",{className:"w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"})]})]})]}):c.jsxs("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3",children:[c.jsxs("div",{className:"rounded-lg lg:col-span-2",children:[c.jsxs("h4",{className:"ps-4 py-2 text-xl text-gray-600",children:["Latest blogs: ",e.length]}),e.map(d=>c.jsx(Ht,{blog:d,handleMarkAsRead:l,handleAddBookmark:u},d.id))]}),c.jsxs("div",{children:[c.jsxs("div",{className:"border border-indigo-500 text-indigo-500 text-center rounded-lg p-4 flex justify-center items-center",children:[c.jsx(Ft,{}),c.jsxs("span",{className:"ps-1",children:["Spent time on read : ",r," min"]})]}),c.jsxs("div",{className:"bg-gray-100 rounded-lg p-2 mt-4",children:[c.jsxs("h3",{className:"p-2 text-2xl font-medium",children:["Blog bookmarked: ",n.length]}),n.map(d=>c.jsx(Ut,{bookmarkBlog:d},d.id))]})]})]})})}function Kt(){return c.jsxs("div",{children:[c.jsx(It,{}),c.jsx(Jt,{}),c.jsx(Ct,{})]})}ReactDOM.createRoot(document.getElementById("root")).render(c.jsx(k.StrictMode,{children:c.jsx(BrowserRouter,{children:c.jsx(Kt,{})})}));
