"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[3517,8433],{28386:(e,n,t)=>{t.d(n,{A:()=>x,M:()=>v});var r=t(9950),o=t(19865),i=t(50599),a=t(1932),l=t(82111),s=t(95624),u=t(5669),c=t(44414);const d=["as","active","eventKey"];function v(e){let{key:n,onClick:t,active:l,id:c,role:d,disabled:v}=e;const f=(0,r.useContext)(a.A),x=(0,r.useContext)(i.A),E=(0,r.useContext)(u.A);let b=l;const A={role:d};if(x){d||"tablist"!==x.role||(A.role="tab");const e=x.getControllerId(null!=n?n:null),t=x.getControlledId(null!=n?n:null);A[(0,s.sE)("event-key")]=n,A.id=e||c,b=null==l&&null!=n?x.activeKey===n:l,!b&&(null!=E&&E.unmountOnExit||null!=E&&E.mountOnEnter)||(A["aria-controls"]=t)}return"tab"===A.role&&(A["aria-selected"]=b,b||(A.tabIndex=-1),v&&(A.tabIndex=-1,A["aria-disabled"]=!0)),A.onClick=(0,o.A)((e=>{v||(null==t||t(e),null!=n&&f&&!e.isPropagationStopped()&&f(n,e))})),[A,{isActive:b}]}const f=r.forwardRef(((e,n)=>{let{as:t=l.Ay,active:r,eventKey:o}=e,i=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,d);const[u,f]=v(Object.assign({key:(0,a.u)(o,i.href),active:r},i));return u[(0,s.sE)("active")]=f.isActive,(0,c.jsx)(t,Object.assign({},i,u,{ref:n}))}));f.displayName="NavItem";const x=f},5669:(e,n,t)=>{t.d(n,{A:()=>r});const r=t(9950).createContext(null)},78696:(e,n,t)=>{t.d(n,{A:()=>x,J:()=>v});var r=t(9950),o=t(5669),i=t(1932),a=t(5596),l=t(44414);const s=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],u=["activeKey","getControlledId","getControllerId"],c=["as"];function d(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function v(e){let{active:n,eventKey:t,mountOnEnter:a,transition:l,unmountOnExit:c,role:v="tabpanel",onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:A,onExited:y}=e,m=d(e,s);const p=(0,r.useContext)(o.A);if(!p)return[Object.assign({},m,{role:v}),{eventKey:t,isActive:n,mountOnEnter:a,transition:l,unmountOnExit:c,onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:A,onExited:y}];const{activeKey:g,getControlledId:O,getControllerId:j}=p,h=d(p,u),C=(0,i.u)(t);return[Object.assign({},m,{role:v,id:O(t),"aria-labelledby":j(t)}),{eventKey:t,isActive:null==n&&null!=C?(0,i.u)(g)===C:n,transition:l||h.transition,mountOnEnter:null!=a?a:h.mountOnEnter,unmountOnExit:null!=c?c:h.unmountOnExit,onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:A,onExited:y}]}const f=r.forwardRef(((e,n)=>{let{as:t="div"}=e,r=d(e,c);const[s,{isActive:u,onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:A,onExited:y,mountOnEnter:m,unmountOnExit:p,transition:g=a.A}]=v(r);return(0,l.jsx)(o.A.Provider,{value:null,children:(0,l.jsx)(i.A.Provider,{value:null,children:(0,l.jsx)(g,{in:u,onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:A,onExited:y,mountOnEnter:m,unmountOnExit:p,children:(0,l.jsx)(t,Object.assign({},s,{ref:n,hidden:!u,"aria-hidden":!u}))})})})}));f.displayName="TabPanel";const x=f},41615:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(9950),o=t(56643),i=t(17743),a=t(5669),l=t(1932),s=t(78696),u=t(44414);const c=e=>{const{id:n,generateChildId:t,onSelect:s,activeKey:c,defaultActiveKey:d,transition:v,mountOnEnter:f,unmountOnExit:x,children:E}=e,[b,A]=(0,o.iC)(c,d,s),y=(0,i.Cc)(n),m=(0,r.useMemo)((()=>t||((e,n)=>y?`${y}-${n}-${e}`:null)),[y,t]),p=(0,r.useMemo)((()=>({onSelect:A,activeKey:b,transition:v,mountOnEnter:f||!1,unmountOnExit:x||!1,getControlledId:e=>m(e,"tabpane"),getControllerId:e=>m(e,"tab")})),[A,b,v,f,x,m]);return(0,u.jsx)(a.A.Provider,{value:p,children:(0,u.jsx)(l.A.Provider,{value:A||null,children:E})})};c.Panel=s.A;const d=c},21946:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,i.default)((function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=null;return n.forEach((function(e){if(null==o){var n=e.apply(void 0,t);null!=n&&(o=n)}})),o}))};var r,o=t(44547),i=(r=o)&&r.__esModule?r:{default:r};e.exports=n.default},44547:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){function n(n,t,r,o,i,a){var l=o||"<<anonymous>>",s=a||r;if(null==t[r])return n?new Error("Required "+i+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),d=6;d<u;d++)c[d-6]=arguments[d];return e.apply(void 0,[t,r,l,i,s].concat(c))}var t=n.bind(null,!1);return t.isRequired=n.bind(null,!0),t},e.exports=n.default},98361:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(48738),o=t.n(r),i=(t(21946),t(9950)),a=t(83529),l=t(22413),s=t(19272),u=t(76230),c=t(50599),d=t(1932),v=t(5669),f=t(95624),x=t(28386),E=t(44414);const b=["as","onSelect","activeKey","role","onKeyDown"];const A=()=>{},y=(0,f.sE)("event-key"),m=i.forwardRef(((e,n)=>{let{as:t="div",onSelect:r,activeKey:o,role:a,onKeyDown:x}=e,m=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,b);const p=(0,s.A)(),g=(0,i.useRef)(!1),O=(0,i.useContext)(d.A),j=(0,i.useContext)(v.A);let h,C;j&&(a=a||"tablist",o=j.activeKey,h=j.getControlledId,C=j.getControllerId);const K=(0,i.useRef)(null),N=e=>{const n=K.current;if(!n)return null;const t=(0,l.A)(n,`[${y}]:not([aria-disabled=true])`),r=n.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const o=t.indexOf(r);if(-1===o)return null;let i=o+e;return i>=t.length&&(i=0),i<0&&(i=t.length-1),t[i]},w=(e,n)=>{null!=e&&(null==r||r(e,n),null==O||O(e,n))};(0,i.useEffect)((()=>{if(K.current&&g.current){const e=K.current.querySelector(`[${y}][aria-selected=true]`);null==e||e.focus()}g.current=!1}));const P=(0,u.A)(n,K);return(0,E.jsx)(d.A.Provider,{value:w,children:(0,E.jsx)(c.A.Provider,{value:{role:a,activeKey:(0,d.u)(o),getControlledId:h||A,getControllerId:C||A},children:(0,E.jsx)(t,Object.assign({},m,{onKeyDown:e=>{if(null==x||x(e),!j)return;let n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=N(-1);break;case"ArrowRight":case"ArrowDown":n=N(1);break;default:return}n&&(e.preventDefault(),w(n.dataset[(0,f.y)("EventKey")]||null,e),g.current=!0,p())},ref:P,role:a}))})})}));m.displayName="Nav";const p=Object.assign(m,{Item:x.A});var g=t(44089),O=t(34296),j=t(22063),h=t(26743),C=t(76944);const K=i.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:r,variant:l,fill:s=!1,justify:u=!1,navbar:c,navbarScroll:d,className:v,activeKey:f,...x}=(0,a.Zw)(e,{activeKey:"onSelect"}),b=(0,g.oU)(r,"nav");let A,y,m=!1;const h=(0,i.useContext)(O.A),C=(0,i.useContext)(j.A);return h?(A=h.bsPrefix,m=null==c||c):C&&({cardHeaderBsPrefix:y}=C),(0,E.jsx)(p,{as:t,ref:n,activeKey:f,className:o()(v,{[b]:!m,[`${A}-nav`]:m,[`${A}-nav-scroll`]:m&&d,[`${y}-${l}`]:!!y,[`${b}-${l}`]:!!l,[`${b}-fill`]:s,[`${b}-justified`]:u}),...x})}));K.displayName="Nav";const N=Object.assign(K,{Item:h.A,Link:C.A})},26743:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(9950),o=t(48738),i=t.n(o),a=t(44089),l=t(44414);const s=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...s}=e;return r=(0,a.oU)(r,"nav-item"),(0,l.jsx)(o,{ref:n,className:i()(t,r),...s})}));s.displayName="NavItem";const u=s},76944:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(48738),o=t.n(r),i=t(9950),a=t(84622),l=t(28386),s=t(1932),u=t(44089),c=t(44414);const d=i.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,as:i=a.A,active:d,eventKey:v,disabled:f=!1,...x}=e;t=(0,u.oU)(t,"nav-link");const[E,b]=(0,l.M)({key:(0,s.u)(v,x.href),active:d,disabled:f,...x});return(0,c.jsx)(i,{...x,...E,ref:n,disabled:f,className:o()(r,t,f&&"disabled",b.isActive&&"active")})}));d.displayName="NavLink";const v=d},80409:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(11942),o=t.n(r),i=(t(9950),t(41615)),a=t(20262),l=t(44414);const s=e=>{let{transition:n,...t}=e;return(0,l.jsx)(i.A,{...t,transition:(0,a.A)(n)})};s.displayName="TabContainer";const u=s;var c=t(5221),d=t(53960);const v={eventKey:o().oneOfType([o().string,o().number]),title:o().node.isRequired,disabled:o().bool,tabClassName:o().string,tabAttrs:o().object},f=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};f.propTypes=v;const x=Object.assign(f,{Container:u,Content:c.A,Pane:d.A})},5221:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(9950),o=t(48738),i=t.n(o),a=t(44089),l=t(44414);const s=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...s}=e;return r=(0,a.oU)(r,"tab-content"),(0,l.jsx)(o,{ref:n,className:i()(t,r),...s})}));s.displayName="TabContent";const u=s},53960:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(48738),o=t.n(r),i=t(9950),a=t(1932),l=t(5669),s=t(78696),u=t(44089),c=t(30095),d=t(20262),v=t(44414);const f=i.forwardRef(((e,n)=>{let{bsPrefix:t,transition:r,...i}=e;const[{className:f,as:x="div",...E},{isActive:b,onEnter:A,onEntering:y,onEntered:m,onExit:p,onExiting:g,onExited:O,mountOnEnter:j,unmountOnExit:h,transition:C=c.A}]=(0,s.J)({...i,transition:(0,d.A)(r)}),K=(0,u.oU)(t,"tab-pane");return(0,v.jsx)(l.A.Provider,{value:null,children:(0,v.jsx)(a.A.Provider,{value:null,children:(0,v.jsx)(C,{in:b,onEnter:A,onEntering:y,onEntered:m,onExit:p,onExiting:g,onExited:O,mountOnEnter:j,unmountOnExit:h,children:(0,v.jsx)(x,{...E,ref:n,className:o()(f,K,b&&"active")})})})})}));f.displayName="TabPane";const x=f},83045:(e,n,t)=>{t.d(n,{A:()=>b});t(9950);var r=t(83529),o=t(41615),i=t(98361),a=t(76944),l=t(26743),s=t(5221),u=t(53960),c=t(22890),d=t(20262),v=t(44414);function f(e){let n;return(0,c.jJ)(e,(e=>{null==n&&(n=e.props.eventKey)})),n}function x(e){const{title:n,eventKey:t,disabled:r,tabClassName:o,tabAttrs:i,id:s}=e.props;return null==n?null:(0,v.jsx)(l.A,{as:"li",role:"presentation",children:(0,v.jsx)(a.A,{as:"button",type:"button",eventKey:t,disabled:r,id:s,className:o,...i,children:n})})}const E=e=>{const{id:n,onSelect:t,transition:a,mountOnEnter:l=!1,unmountOnExit:E=!1,variant:b="tabs",children:A,activeKey:y=f(A),...m}=(0,r.Zw)(e,{activeKey:"onSelect"});return(0,v.jsxs)(o.A,{id:n,activeKey:y,onSelect:t,transition:(0,d.A)(a),mountOnEnter:l,unmountOnExit:E,children:[(0,v.jsx)(i.A,{id:n,...m,role:"tablist",as:"ul",variant:b,children:(0,c.Tj)(A,x)}),(0,v.jsx)(s.A,{children:(0,c.Tj)(A,(e=>{const n={...e.props};return delete n.title,delete n.disabled,delete n.tabClassName,delete n.tabAttrs,(0,v.jsx)(u.A,{...n})}))})]})};E.displayName="Tabs";const b=E},20262:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(5596),o=t(30095);function i(e){return"boolean"===typeof e?e?o.A:r.A:e}}}]);