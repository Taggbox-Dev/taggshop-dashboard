"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[4063],{28386:(e,n,t)=>{t.d(n,{A:()=>f,M:()=>v});var r=t(9950),o=t(25061),i=t(50599),a=t(1932),s=t(82111),l=t(95624),c=t(5669),u=t(44414);const d=["as","active","eventKey"];function v(e){let{key:n,onClick:t,active:s,id:u,role:d,disabled:v}=e;const x=(0,r.useContext)(a.A),f=(0,r.useContext)(i.A),E=(0,r.useContext)(c.A);let m=s;const b={role:d};if(f){d||"tablist"!==f.role||(b.role="tab");const e=f.getControllerId(null!=n?n:null),t=f.getControlledId(null!=n?n:null);b[(0,l.sE)("event-key")]=n,b.id=e||u,m=null==s&&null!=n?f.activeKey===n:s,!m&&(null!=E&&E.unmountOnExit||null!=E&&E.mountOnEnter)||(b["aria-controls"]=t)}return"tab"===b.role&&(b["aria-selected"]=m,m||(b.tabIndex=-1),v&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=(0,o.A)((e=>{v||(null==t||t(e),null!=n&&x&&!e.isPropagationStopped()&&x(n,e))})),[b,{isActive:m}]}const x=r.forwardRef(((e,n)=>{let{as:t=s.Ay,active:r,eventKey:o}=e,i=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,d);const[c,x]=v(Object.assign({key:(0,a.u)(o,i.href),active:r},i));return c[(0,l.sE)("active")]=x.isActive,(0,u.jsx)(t,Object.assign({},i,c,{ref:n}))}));x.displayName="NavItem";const f=x},5669:(e,n,t)=>{t.d(n,{A:()=>r});const r=t(9950).createContext(null)},78696:(e,n,t)=>{t.d(n,{A:()=>f,J:()=>v});var r=t(9950),o=t(5669),i=t(1932),a=t(5596),s=t(44414);const l=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],c=["activeKey","getControlledId","getControllerId"],u=["as"];function d(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function v(e){let{active:n,eventKey:t,mountOnEnter:a,transition:s,unmountOnExit:u,role:v="tabpanel",onEnter:x,onEntering:f,onEntered:E,onExit:m,onExiting:b,onExited:A}=e,y=d(e,l);const g=(0,r.useContext)(o.A);if(!g)return[Object.assign({},y,{role:v}),{eventKey:t,isActive:n,mountOnEnter:a,transition:s,unmountOnExit:u,onEnter:x,onEntering:f,onEntered:E,onExit:m,onExiting:b,onExited:A}];const{activeKey:p,getControlledId:O,getControllerId:j}=g,h=d(g,c),C=(0,i.u)(t);return[Object.assign({},y,{role:v,id:O(t),"aria-labelledby":j(t)}),{eventKey:t,isActive:null==n&&null!=C?(0,i.u)(p)===C:n,transition:s||h.transition,mountOnEnter:null!=a?a:h.mountOnEnter,unmountOnExit:null!=u?u:h.unmountOnExit,onEnter:x,onEntering:f,onEntered:E,onExit:m,onExiting:b,onExited:A}]}const x=r.forwardRef(((e,n)=>{let{as:t="div"}=e,r=d(e,u);const[l,{isActive:c,onEnter:x,onEntering:f,onEntered:E,onExit:m,onExiting:b,onExited:A,mountOnEnter:y,unmountOnExit:g,transition:p=a.A}]=v(r);return(0,s.jsx)(o.A.Provider,{value:null,children:(0,s.jsx)(i.A.Provider,{value:null,children:(0,s.jsx)(p,{in:c,onEnter:x,onEntering:f,onEntered:E,onExit:m,onExiting:b,onExited:A,mountOnEnter:y,unmountOnExit:g,children:(0,s.jsx)(t,Object.assign({},l,{ref:n,hidden:!c,"aria-hidden":!c}))})})})}));x.displayName="TabPanel";const f=x},41615:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(9950),o=t(56643),i=t(17743),a=t(5669),s=t(1932),l=t(78696),c=t(44414);const u=e=>{const{id:n,generateChildId:t,onSelect:l,activeKey:u,defaultActiveKey:d,transition:v,mountOnEnter:x,unmountOnExit:f,children:E}=e,[m,b]=(0,o.iC)(u,d,l),A=(0,i.Cc)(n),y=(0,r.useMemo)((()=>t||((e,n)=>A?`${A}-${n}-${e}`:null)),[A,t]),g=(0,r.useMemo)((()=>({onSelect:b,activeKey:m,transition:v,mountOnEnter:x||!1,unmountOnExit:f||!1,getControlledId:e=>y(e,"tabpane"),getControllerId:e=>y(e,"tab")})),[b,m,v,x,f,y]);return(0,c.jsx)(a.A.Provider,{value:g,children:(0,c.jsx)(s.A.Provider,{value:b||null,children:E})})};u.Panel=l.A;const d=u},75623:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(48738),o=t.n(r),i=t(9950),a=t(44089),s=t(14531),l=t(77328),c=t(44414);const u=i.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:i="span",...s}=e;return r=(0,a.oU)(r,"input-group-text"),(0,c.jsx)(i,{ref:n,className:o()(t,r),...s})}));u.displayName="InputGroupText";const d=u,v=i.forwardRef(((e,n)=>{let{bsPrefix:t,size:r,hasValidation:s,className:u,as:d="div",...v}=e;t=(0,a.oU)(t,"input-group");const x=(0,i.useMemo)((()=>({})),[]);return(0,c.jsx)(l.A.Provider,{value:x,children:(0,c.jsx)(d,{ref:n,...v,className:o()(u,t,r&&`${t}-${r}`,s&&"has-validation")})})}));v.displayName="InputGroup";const x=Object.assign(v,{Text:d,Radio:e=>(0,c.jsx)(d,{children:(0,c.jsx)(s.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(d,{children:(0,c.jsx)(s.A,{type:"checkbox",...e})})})},98361:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(48738),o=t.n(r),i=t(9950),a=t(83529),s=t(22413),l=t(53700),c=t(15754),u=t(50599),d=t(1932),v=t(5669),x=t(95624),f=t(28386),E=t(44414);const m=["as","onSelect","activeKey","role","onKeyDown"];const b=()=>{},A=(0,x.sE)("event-key"),y=i.forwardRef(((e,n)=>{let{as:t="div",onSelect:r,activeKey:o,role:a,onKeyDown:f}=e,y=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,m);const g=(0,l.A)(),p=(0,i.useRef)(!1),O=(0,i.useContext)(d.A),j=(0,i.useContext)(v.A);let h,C;j&&(a=a||"tablist",o=j.activeKey,h=j.getControlledId,C=j.getControllerId);const N=(0,i.useRef)(null),w=e=>{const n=N.current;if(!n)return null;const t=(0,s.A)(n,`[${A}]:not([aria-disabled=true])`),r=n.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const o=t.indexOf(r);if(-1===o)return null;let i=o+e;return i>=t.length&&(i=0),i<0&&(i=t.length-1),t[i]},P=(e,n)=>{null!=e&&(null==r||r(e,n),null==O||O(e,n))};(0,i.useEffect)((()=>{if(N.current&&p.current){const e=N.current.querySelector(`[${A}][aria-selected=true]`);null==e||e.focus()}p.current=!1}));const K=(0,c.A)(n,N);return(0,E.jsx)(d.A.Provider,{value:P,children:(0,E.jsx)(u.A.Provider,{value:{role:a,activeKey:(0,d.u)(o),getControlledId:h||b,getControllerId:C||b},children:(0,E.jsx)(t,Object.assign({},y,{onKeyDown:e=>{if(null==f||f(e),!j)return;let n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=w(-1);break;case"ArrowRight":case"ArrowDown":n=w(1);break;default:return}n&&(e.preventDefault(),P(n.dataset[(0,x.y)("EventKey")]||null,e),p.current=!0,g())},ref:K,role:a}))})})}));y.displayName="Nav";const g=Object.assign(y,{Item:f.A});var p=t(44089),O=t(34296),j=t(22063),h=t(26743),C=t(76944);const N=i.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:r,variant:s,fill:l=!1,justify:c=!1,navbar:u,navbarScroll:d,className:v,activeKey:x,...f}=(0,a.Zw)(e,{activeKey:"onSelect"}),m=(0,p.oU)(r,"nav");let b,A,y=!1;const h=(0,i.useContext)(O.A),C=(0,i.useContext)(j.A);return h?(b=h.bsPrefix,y=null==u||u):C&&({cardHeaderBsPrefix:A}=C),(0,E.jsx)(g,{as:t,ref:n,activeKey:x,className:o()(v,{[m]:!y,[`${b}-nav`]:y,[`${b}-nav-scroll`]:y&&d,[`${A}-${s}`]:!!A,[`${m}-${s}`]:!!s,[`${m}-fill`]:l,[`${m}-justified`]:c}),...f})}));N.displayName="Nav";const w=Object.assign(N,{Item:h.A,Link:C.A})},26743:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(9950),o=t(48738),i=t.n(o),a=t(44089),s=t(44414);const l=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...l}=e;return r=(0,a.oU)(r,"nav-item"),(0,s.jsx)(o,{ref:n,className:i()(t,r),...l})}));l.displayName="NavItem";const c=l},76944:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(48738),o=t.n(r),i=t(9950),a=t(13763),s=t(28386),l=t(1932),c=t(44089),u=t(44414);const d=i.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,as:i=a.A,active:d,eventKey:v,disabled:x=!1,...f}=e;t=(0,c.oU)(t,"nav-link");const[E,m]=(0,s.M)({key:(0,l.u)(v,f.href),active:d,disabled:x,...f});return(0,u.jsx)(i,{...f,...E,ref:n,disabled:x,className:o()(r,t,x&&"disabled",m.isActive&&"active")})}));d.displayName="NavLink";const v=d},80409:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(11942),o=t.n(r),i=(t(9950),t(41615)),a=t(20262),s=t(44414);const l=e=>{let{transition:n,...t}=e;return(0,s.jsx)(i.A,{...t,transition:(0,a.A)(n)})};l.displayName="TabContainer";const c=l;var u=t(5221),d=t(53960);const v={eventKey:o().oneOfType([o().string,o().number]),title:o().node.isRequired,disabled:o().bool,tabClassName:o().string,tabAttrs:o().object},x=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};x.propTypes=v;const f=Object.assign(x,{Container:c,Content:u.A,Pane:d.A})},5221:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(9950),o=t(48738),i=t.n(o),a=t(44089),s=t(44414);const l=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...l}=e;return r=(0,a.oU)(r,"tab-content"),(0,s.jsx)(o,{ref:n,className:i()(t,r),...l})}));l.displayName="TabContent";const c=l},53960:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(48738),o=t.n(r),i=t(9950),a=t(1932),s=t(5669),l=t(78696),c=t(44089),u=t(30095),d=t(20262),v=t(44414);const x=i.forwardRef(((e,n)=>{let{bsPrefix:t,transition:r,...i}=e;const[{className:x,as:f="div",...E},{isActive:m,onEnter:b,onEntering:A,onEntered:y,onExit:g,onExiting:p,onExited:O,mountOnEnter:j,unmountOnExit:h,transition:C=u.A}]=(0,l.J)({...i,transition:(0,d.A)(r)}),N=(0,c.oU)(t,"tab-pane");return(0,v.jsx)(s.A.Provider,{value:null,children:(0,v.jsx)(a.A.Provider,{value:null,children:(0,v.jsx)(C,{in:m,onEnter:b,onEntering:A,onEntered:y,onExit:g,onExiting:p,onExited:O,mountOnEnter:j,unmountOnExit:h,children:(0,v.jsx)(f,{...E,ref:n,className:o()(x,N,m&&"active")})})})})}));x.displayName="TabPane";const f=x},20262:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(5596),o=t(30095);function i(e){return"boolean"===typeof e?e?o.A:r.A:e}}}]);