"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[4305],{10845:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(65043);function o(){const[,e]=(0,r.useReducer)((e=>!e),!1);return e}},49048:(e,n,t)=>{t.d(n,{A:()=>o});const r=t(65043).createContext(null);r.displayName="NavContext";const o=r},92644:(e,n,t)=>{t.d(n,{A:()=>x,M:()=>v});var r=t(65043),o=t(71456),i=t(49048),a=t(35901),l=t(14140),s=t(5425),u=t(38466),c=t(70579);const d=["as","active","eventKey"];function v(e){let{key:n,onClick:t,active:l,id:c,role:d,disabled:v}=e;const f=(0,r.useContext)(a.A),x=(0,r.useContext)(i.A),E=(0,r.useContext)(u.A);let m=l;const y={role:d};if(x){d||"tablist"!==x.role||(y.role="tab");const e=x.getControllerId(null!=n?n:null),t=x.getControlledId(null!=n?n:null);y[(0,s.sE)("event-key")]=n,y.id=e||c,m=null==l&&null!=n?x.activeKey===n:l,!m&&(null!=E&&E.unmountOnExit||null!=E&&E.mountOnEnter)||(y["aria-controls"]=t)}return"tab"===y.role&&(y["aria-selected"]=m,m||(y.tabIndex=-1),v&&(y.tabIndex=-1,y["aria-disabled"]=!0)),y.onClick=(0,o.A)((e=>{v||(null==t||t(e),null!=n&&f&&!e.isPropagationStopped()&&f(n,e))})),[y,{isActive:m}]}const f=r.forwardRef(((e,n)=>{let{as:t=l.Ay,active:r,eventKey:o}=e,i=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,d);const[u,f]=v(Object.assign({key:(0,a.u)(o,i.href),active:r},i));return u[(0,s.sE)("active")]=f.isActive,(0,c.jsx)(t,Object.assign({},i,u,{ref:n}))}));f.displayName="NavItem";const x=f},35901:(e,n,t)=>{t.d(n,{A:()=>i,u:()=>o});var r=t(65043);const o=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):n||null},i=r.createContext(null)},38466:(e,n,t)=>{t.d(n,{A:()=>r});const r=t(65043).createContext(null)},75763:(e,n,t)=>{t.d(n,{A:()=>x,J:()=>v});var r=t(65043),o=t(38466),i=t(35901),a=t(78187),l=t(70579);const s=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],u=["activeKey","getControlledId","getControllerId"],c=["as"];function d(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function v(e){let{active:n,eventKey:t,mountOnEnter:a,transition:l,unmountOnExit:c,role:v="tabpanel",onEnter:f,onEntering:x,onEntered:E,onExit:m,onExiting:y,onExited:A}=e,b=d(e,s);const g=(0,r.useContext)(o.A);if(!g)return[Object.assign({},b,{role:v}),{eventKey:t,isActive:n,mountOnEnter:a,transition:l,unmountOnExit:c,onEnter:f,onEntering:x,onEntered:E,onExit:m,onExiting:y,onExited:A}];const{activeKey:p,getControlledId:C,getControllerId:O}=g,h=d(g,u),w=(0,i.u)(t);return[Object.assign({},b,{role:v,id:C(t),"aria-labelledby":O(t)}),{eventKey:t,isActive:null==n&&null!=w?(0,i.u)(p)===w:n,transition:l||h.transition,mountOnEnter:null!=a?a:h.mountOnEnter,unmountOnExit:null!=c?c:h.unmountOnExit,onEnter:f,onEntering:x,onEntered:E,onExit:m,onExiting:y,onExited:A}]}const f=r.forwardRef(((e,n)=>{let{as:t="div"}=e,r=d(e,c);const[s,{isActive:u,onEnter:f,onEntering:x,onEntered:E,onExit:m,onExiting:y,onExited:A,mountOnEnter:b,unmountOnExit:g,transition:p=a.A}]=v(r);return(0,l.jsx)(o.A.Provider,{value:null,children:(0,l.jsx)(i.A.Provider,{value:null,children:(0,l.jsx)(p,{in:u,onEnter:f,onEntering:x,onEntered:E,onExit:m,onExiting:y,onExited:A,mountOnEnter:b,unmountOnExit:g,children:(0,l.jsx)(t,Object.assign({},s,{ref:n,hidden:!u,"aria-hidden":!u}))})})})}));f.displayName="TabPanel";const x=f},23612:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(65043),o=t(96350),i=t(80060),a=t(38466),l=t(35901),s=t(75763),u=t(70579);const c=e=>{const{id:n,generateChildId:t,onSelect:s,activeKey:c,defaultActiveKey:d,transition:v,mountOnEnter:f,unmountOnExit:x,children:E}=e,[m,y]=(0,o.iC)(c,d,s),A=(0,i.Cc)(n),b=(0,r.useMemo)((()=>t||((e,n)=>A?`${A}-${n}-${e}`:null)),[A,t]),g=(0,r.useMemo)((()=>({onSelect:y,activeKey:m,transition:v,mountOnEnter:f||!1,unmountOnExit:x||!1,getControlledId:e=>b(e,"tabpane"),getControllerId:e=>b(e,"tab")})),[y,m,v,f,x,b]);return(0,u.jsx)(a.A.Provider,{value:g,children:(0,u.jsx)(l.A.Provider,{value:y||null,children:E})})};c.Panel=s.A;const d=c},96350:(e,n,t)=>{t.d(n,{iC:()=>o});var r=t(65043);function o(e,n,t){const o=(0,r.useRef)(void 0!==e),[i,a]=(0,r.useState)(n),l=void 0!==e,s=o.current;return o.current=l,!l&&s&&i!==n&&a(n),[l?e:i,(0,r.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const[o,...i]=n;let l=null==t?void 0:t(o,...i);return a(o),l}),[t])]}},79197:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,i.default)((function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=null;return n.forEach((function(e){if(null==o){var n=e.apply(void 0,t);null!=n&&(o=n)}})),o}))};var r,o=t(73534),i=(r=o)&&r.__esModule?r:{default:r};e.exports=n.default},73534:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){function n(n,t,r,o,i,a){var l=o||"<<anonymous>>",s=a||r;if(null==t[r])return n?new Error("Required "+i+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),d=6;d<u;d++)c[d-6]=arguments[d];return e.apply(void 0,[t,r,l,i,s].concat(c))}var t=n.bind(null,!1);return t.isRequired=n.bind(null,!0),t},e.exports=n.default},326:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(98139),o=t.n(r),i=(t(79197),t(65043)),a=t(97121),l=t(93818),s=t(10845),u=t(38293),c=t(49048),d=t(35901),v=t(38466),f=t(5425),x=t(92644),E=t(70579);const m=["as","onSelect","activeKey","role","onKeyDown"];const y=()=>{},A=(0,f.sE)("event-key"),b=i.forwardRef(((e,n)=>{let{as:t="div",onSelect:r,activeKey:o,role:a,onKeyDown:x}=e,b=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,m);const g=(0,s.A)(),p=(0,i.useRef)(!1),C=(0,i.useContext)(d.A),O=(0,i.useContext)(v.A);let h,w;O&&(a=a||"tablist",o=O.activeKey,h=O.getControlledId,w=O.getControllerId);const j=(0,i.useRef)(null),N=e=>{const n=j.current;if(!n)return null;const t=(0,l.A)(n,`[${A}]:not([aria-disabled=true])`),r=n.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const o=t.indexOf(r);if(-1===o)return null;let i=o+e;return i>=t.length&&(i=0),i<0&&(i=t.length-1),t[i]},P=(e,n)=>{null!=e&&(null==r||r(e,n),null==C||C(e,n))};(0,i.useEffect)((()=>{if(j.current&&p.current){const e=j.current.querySelector(`[${A}][aria-selected=true]`);null==e||e.focus()}p.current=!1}));const I=(0,u.A)(n,j);return(0,E.jsx)(d.A.Provider,{value:P,children:(0,E.jsx)(c.A.Provider,{value:{role:a,activeKey:(0,d.u)(o),getControlledId:h||y,getControllerId:w||y},children:(0,E.jsx)(t,Object.assign({},b,{onKeyDown:e=>{if(null==x||x(e),!O)return;let n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=N(-1);break;case"ArrowRight":case"ArrowDown":n=N(1);break;default:return}n&&(e.preventDefault(),P(n.dataset[(0,f.y)("EventKey")]||null,e),p.current=!0,g())},ref:I,role:a}))})})}));b.displayName="Nav";const g=Object.assign(b,{Item:x.A});var p=t(67852),C=t(19125),O=t(11778),h=t(54522),w=t(64541);const j=i.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:r,variant:l,fill:s=!1,justify:u=!1,navbar:c,navbarScroll:d,className:v,activeKey:f,...x}=(0,a.Zw)(e,{activeKey:"onSelect"}),m=(0,p.oU)(r,"nav");let y,A,b=!1;const h=(0,i.useContext)(C.A),w=(0,i.useContext)(O.A);return h?(y=h.bsPrefix,b=null==c||c):w&&({cardHeaderBsPrefix:A}=w),(0,E.jsx)(g,{as:t,ref:n,activeKey:f,className:o()(v,{[m]:!b,[`${y}-nav`]:b,[`${y}-nav-scroll`]:b&&d,[`${A}-${l}`]:!!A,[`${m}-${l}`]:!!l,[`${m}-fill`]:s,[`${m}-justified`]:u}),...x})}));j.displayName="Nav";const N=Object.assign(j,{Item:h.A,Link:w.A})},54522:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(65043),o=t(98139),i=t.n(o),a=t(67852),l=t(70579);const s=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...s}=e;return r=(0,a.oU)(r,"nav-item"),(0,l.jsx)(o,{ref:n,className:i()(t,r),...s})}));s.displayName="NavItem";const u=s},64541:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(98139),o=t.n(r),i=t(65043),a=t(56161),l=t(92644),s=t(35901),u=t(67852),c=t(70579);const d=i.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,as:i=a.A,active:d,eventKey:v,disabled:f=!1,...x}=e;t=(0,u.oU)(t,"nav-link");const[E,m]=(0,l.M)({key:(0,s.u)(v,x.href),active:d,disabled:f,...x});return(0,c.jsx)(i,{...x,...E,ref:n,disabled:f,className:o()(r,t,f&&"disabled",m.isActive&&"active")})}));d.displayName="NavLink";const v=d},19125:(e,n,t)=>{t.d(n,{A:()=>o});const r=t(65043).createContext(null);r.displayName="NavbarContext";const o=r},5328:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(65173),o=t.n(r),i=(t(65043),t(23612)),a=t(63599),l=t(70579);const s=e=>{let{transition:n,...t}=e;return(0,l.jsx)(i.A,{...t,transition:(0,a.A)(n)})};s.displayName="TabContainer";const u=s;var c=t(20706),d=t(86429);const v={eventKey:o().oneOfType([o().string,o().number]),title:o().node.isRequired,disabled:o().bool,tabClassName:o().string,tabAttrs:o().object},f=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};f.propTypes=v;const x=Object.assign(f,{Container:u,Content:c.A,Pane:d.A})},20706:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(65043),o=t(98139),i=t.n(o),a=t(67852),l=t(70579);const s=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...s}=e;return r=(0,a.oU)(r,"tab-content"),(0,l.jsx)(o,{ref:n,className:i()(t,r),...s})}));s.displayName="TabContent";const u=s},86429:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(98139),o=t.n(r),i=t(65043),a=t(35901),l=t(38466),s=t(75763),u=t(67852),c=t(18072),d=t(63599),v=t(70579);const f=i.forwardRef(((e,n)=>{let{bsPrefix:t,transition:r,...i}=e;const[{className:f,as:x="div",...E},{isActive:m,onEnter:y,onEntering:A,onEntered:b,onExit:g,onExiting:p,onExited:C,mountOnEnter:O,unmountOnExit:h,transition:w=c.A}]=(0,s.J)({...i,transition:(0,d.A)(r)}),j=(0,u.oU)(t,"tab-pane");return(0,v.jsx)(l.A.Provider,{value:null,children:(0,v.jsx)(a.A.Provider,{value:null,children:(0,v.jsx)(w,{in:m,onEnter:y,onEntering:A,onEntered:b,onExit:g,onExiting:p,onExited:C,mountOnEnter:O,unmountOnExit:h,children:(0,v.jsx)(x,{...E,ref:n,className:o()(f,j,m&&"active")})})})})}));f.displayName="TabPane";const x=f},63599:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(78187),o=t(18072);function i(e){return"boolean"===typeof e?e?o.A:r.A:e}},80060:(e,n,t)=>{t.d(n,{Cc:()=>c});var r=t(65043);const o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o),a=r.createContext(!1);let l=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),s=new WeakMap;function u(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,r.useContext)(i),t=(0,r.useRef)(null);if(null===t.current&&!e){var o,a;let e=null===(a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===a||null===(o=a.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let t=s.get(e);null==t?s.set(e,{id:n.current,state:e.memoizedState}):e.memoizedState!==t.state&&(n.current=t.id,s.delete(e))}t.current=++n.current}return t.current}const c="function"===typeof r.useId?function(e){let n=r.useId(),[t]=(0,r.useState)("function"===typeof r.useSyncExternalStore?r.useSyncExternalStore(f,d,v):(0,r.useContext)(a));return e||`${t?"react-aria":`react-aria${o.prefix}`}-${n}`}:function(e){let n=(0,r.useContext)(i);n!==o||l||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let t=u(!!e),a=`react-aria${n.prefix}`;return e||`${a}-${t}`};function d(){return!1}function v(){return!0}function f(e){return()=>{}}}}]);
//# sourceMappingURL=4305.2f450898.chunk.js.map