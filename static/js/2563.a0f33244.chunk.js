"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[2563],{28386:(e,n,t)=>{t.d(n,{A:()=>x,M:()=>v});var r=t(9950),o=t(19865),a=t(50599),i=t(1932),l=t(82111),s=t(95624),c=t(5669),u=t(44414);const d=["as","active","eventKey"];function v(e){let{key:n,onClick:t,active:l,id:u,role:d,disabled:v}=e;const f=(0,r.useContext)(i.A),x=(0,r.useContext)(a.A),E=(0,r.useContext)(c.A);let b=l;const m={role:d};if(x){d||"tablist"!==x.role||(m.role="tab");const e=x.getControllerId(null!=n?n:null),t=x.getControlledId(null!=n?n:null);m[(0,s.sE)("event-key")]=n,m.id=e||u,b=null==l&&null!=n?x.activeKey===n:l,!b&&(null!=E&&E.unmountOnExit||null!=E&&E.mountOnEnter)||(m["aria-controls"]=t)}return"tab"===m.role&&(m["aria-selected"]=b,b||(m.tabIndex=-1),v&&(m.tabIndex=-1,m["aria-disabled"]=!0)),m.onClick=(0,o.A)((e=>{v||(null==t||t(e),null!=n&&f&&!e.isPropagationStopped()&&f(n,e))})),[m,{isActive:b}]}const f=r.forwardRef(((e,n)=>{let{as:t=l.Ay,active:r,eventKey:o}=e,a=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,d);const[c,f]=v(Object.assign({key:(0,i.u)(o,a.href),active:r},a));return c[(0,s.sE)("active")]=f.isActive,(0,u.jsx)(t,Object.assign({},a,c,{ref:n}))}));f.displayName="NavItem";const x=f},5669:(e,n,t)=>{t.d(n,{A:()=>r});const r=t(9950).createContext(null)},78696:(e,n,t)=>{t.d(n,{A:()=>x,J:()=>v});var r=t(9950),o=t(5669),a=t(1932),i=t(5596),l=t(44414);const s=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],c=["activeKey","getControlledId","getControllerId"],u=["as"];function d(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function v(e){let{active:n,eventKey:t,mountOnEnter:i,transition:l,unmountOnExit:u,role:v="tabpanel",onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:m,onExited:y}=e,A=d(e,s);const g=(0,r.useContext)(o.A);if(!g)return[Object.assign({},A,{role:v}),{eventKey:t,isActive:n,mountOnEnter:i,transition:l,unmountOnExit:u,onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:m,onExited:y}];const{activeKey:p,getControlledId:O,getControllerId:h}=g,C=d(g,c),j=(0,a.u)(t);return[Object.assign({},A,{role:v,id:O(t),"aria-labelledby":h(t)}),{eventKey:t,isActive:null==n&&null!=j?(0,a.u)(p)===j:n,transition:l||C.transition,mountOnEnter:null!=i?i:C.mountOnEnter,unmountOnExit:null!=u?u:C.unmountOnExit,onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:m,onExited:y}]}const f=r.forwardRef(((e,n)=>{let{as:t="div"}=e,r=d(e,u);const[s,{isActive:c,onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:m,onExited:y,mountOnEnter:A,unmountOnExit:g,transition:p=i.A}]=v(r);return(0,l.jsx)(o.A.Provider,{value:null,children:(0,l.jsx)(a.A.Provider,{value:null,children:(0,l.jsx)(p,{in:c,onEnter:f,onEntering:x,onEntered:E,onExit:b,onExiting:m,onExited:y,mountOnEnter:A,unmountOnExit:g,children:(0,l.jsx)(t,Object.assign({},s,{ref:n,hidden:!c,"aria-hidden":!c}))})})})}));f.displayName="TabPanel";const x=f},41615:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(9950),o=t(56643),a=t(17743),i=t(5669),l=t(1932),s=t(78696),c=t(44414);const u=e=>{const{id:n,generateChildId:t,onSelect:s,activeKey:u,defaultActiveKey:d,transition:v,mountOnEnter:f,unmountOnExit:x,children:E}=e,[b,m]=(0,o.iC)(u,d,s),y=(0,a.Cc)(n),A=(0,r.useMemo)((()=>t||((e,n)=>y?"".concat(y,"-").concat(n,"-").concat(e):null)),[y,t]),g=(0,r.useMemo)((()=>({onSelect:m,activeKey:b,transition:v,mountOnEnter:f||!1,unmountOnExit:x||!1,getControlledId:e=>A(e,"tabpane"),getControllerId:e=>A(e,"tab")})),[m,b,v,f,x,A]);return(0,c.jsx)(i.A.Provider,{value:g,children:(0,c.jsx)(l.A.Provider,{value:m||null,children:E})})};u.Panel=s.A;const d=u},21946:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.default)((function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=null;return n.forEach((function(e){if(null==o){var n=e.apply(void 0,t);null!=n&&(o=n)}})),o}))};var r,o=t(44547),a=(r=o)&&r.__esModule?r:{default:r};e.exports=n.default},44547:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){function n(n,t,r,o,a,i){var l=o||"<<anonymous>>",s=i||r;if(null==t[r])return n?new Error("Required "+a+" `"+s+"` was not specified in `"+l+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[t,r,l,a,s].concat(u))}var t=n.bind(null,!1);return t.isRequired=n.bind(null,!0),t},e.exports=n.default},12524:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(48738),o=t.n(r),a=(t(21946),t(9950)),i=t(83529),l=t(22413),s=t(19272),c=t(76230),u=t(50599),d=t(1932),v=t(5669),f=t(95624),x=t(28386),E=t(44414);const b=["as","onSelect","activeKey","role","onKeyDown"];const m=()=>{},y=(0,f.sE)("event-key"),A=a.forwardRef(((e,n)=>{let{as:t="div",onSelect:r,activeKey:o,role:i,onKeyDown:x}=e,A=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,b);const g=(0,s.A)(),p=(0,a.useRef)(!1),O=(0,a.useContext)(d.A),h=(0,a.useContext)(v.A);let C,j;h&&(i=i||"tablist",o=h.activeKey,C=h.getControlledId,j=h.getControllerId);const K=(0,a.useRef)(null),N=e=>{const n=K.current;if(!n)return null;const t=(0,l.A)(n,"[".concat(y,"]:not([aria-disabled=true])")),r=n.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const o=t.indexOf(r);if(-1===o)return null;let a=o+e;return a>=t.length&&(a=0),a<0&&(a=t.length-1),t[a]},w=(e,n)=>{null!=e&&(null==r||r(e,n),null==O||O(e,n))};(0,a.useEffect)((()=>{if(K.current&&p.current){const e=K.current.querySelector("[".concat(y,"][aria-selected=true]"));null==e||e.focus()}p.current=!1}));const P=(0,c.A)(n,K);return(0,E.jsx)(d.A.Provider,{value:w,children:(0,E.jsx)(u.A.Provider,{value:{role:i,activeKey:(0,d.u)(o),getControlledId:C||m,getControllerId:j||m},children:(0,E.jsx)(t,Object.assign({},A,{onKeyDown:e=>{if(null==x||x(e),!h)return;let n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=N(-1);break;case"ArrowRight":case"ArrowDown":n=N(1);break;default:return}n&&(e.preventDefault(),w(n.dataset[(0,f.y)("EventKey")]||null,e),p.current=!0,g())},ref:P,role:i}))})})}));A.displayName="Nav";const g=Object.assign(A,{Item:x.A});var p=t(44089),O=t(34296);const h=a.createContext(null);h.displayName="CardHeaderContext";const C=h;var j=t(26743),K=t(76944);const N=a.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:r,variant:l,fill:s=!1,justify:c=!1,navbar:u,navbarScroll:d,className:v,activeKey:f,...x}=(0,i.Zw)(e,{activeKey:"onSelect"}),b=(0,p.oU)(r,"nav");let m,y,A=!1;const h=(0,a.useContext)(O.A),j=(0,a.useContext)(C);return h?(m=h.bsPrefix,A=null==u||u):j&&({cardHeaderBsPrefix:y}=j),(0,E.jsx)(g,{as:t,ref:n,activeKey:f,className:o()(v,{[b]:!A,["".concat(m,"-nav")]:A,["".concat(m,"-nav-scroll")]:A&&d,["".concat(y,"-").concat(l)]:!!y,["".concat(b,"-").concat(l)]:!!l,["".concat(b,"-fill")]:s,["".concat(b,"-justified")]:c}),...x})}));N.displayName="Nav";const w=Object.assign(N,{Item:j.A,Link:K.A})},26743:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(9950),o=t(48738),a=t.n(o),i=t(44089),l=t(44414);const s=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...s}=e;return r=(0,i.oU)(r,"nav-item"),(0,l.jsx)(o,{ref:n,className:a()(t,r),...s})}));s.displayName="NavItem";const c=s},76944:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(48738),o=t.n(r),a=t(9950),i=t(84622),l=t(28386),s=t(1932),c=t(44089),u=t(44414);const d=a.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,as:a=i.A,active:d,eventKey:v,disabled:f=!1,...x}=e;t=(0,c.oU)(t,"nav-link");const[E,b]=(0,l.M)({key:(0,s.u)(v,x.href),active:d,disabled:f,...x});return(0,u.jsx)(a,{...x,...E,ref:n,disabled:f,className:o()(r,t,f&&"disabled",b.isActive&&"active")})}));d.displayName="NavLink";const v=d},80409:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(11942),o=t.n(r),a=(t(9950),t(41615)),i=t(20262),l=t(44414);const s=e=>{let{transition:n,...t}=e;return(0,l.jsx)(a.A,{...t,transition:(0,i.A)(n)})};s.displayName="TabContainer";const c=s;var u=t(5221),d=t(53960);const v={eventKey:o().oneOfType([o().string,o().number]),title:o().node.isRequired,disabled:o().bool,tabClassName:o().string,tabAttrs:o().object},f=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};f.propTypes=v;const x=Object.assign(f,{Container:c,Content:u.A,Pane:d.A})},5221:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(9950),o=t(48738),a=t.n(o),i=t(44089),l=t(44414);const s=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...s}=e;return r=(0,i.oU)(r,"tab-content"),(0,l.jsx)(o,{ref:n,className:a()(t,r),...s})}));s.displayName="TabContent";const c=s},53960:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(48738),o=t.n(r),a=t(9950),i=t(1932),l=t(5669),s=t(78696),c=t(44089),u=t(30095),d=t(20262),v=t(44414);const f=a.forwardRef(((e,n)=>{let{bsPrefix:t,transition:r,...a}=e;const[{className:f,as:x="div",...E},{isActive:b,onEnter:m,onEntering:y,onEntered:A,onExit:g,onExiting:p,onExited:O,mountOnEnter:h,unmountOnExit:C,transition:j=u.A}]=(0,s.J)({...a,transition:(0,d.A)(r)}),K=(0,c.oU)(t,"tab-pane");return(0,v.jsx)(l.A.Provider,{value:null,children:(0,v.jsx)(i.A.Provider,{value:null,children:(0,v.jsx)(j,{in:b,onEnter:m,onEntering:y,onEntered:A,onExit:g,onExiting:p,onExited:O,mountOnEnter:h,unmountOnExit:C,children:(0,v.jsx)(x,{...E,ref:n,className:o()(f,K,b&&"active")})})})})}));f.displayName="TabPane";const x=f},4667:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(9950),o=t(83529),a=t(41615),i=t(12524),l=t(76944),s=t(26743),c=t(5221),u=t(53960);function d(e,n){let t=0;return r.Children.map(e,(e=>r.isValidElement(e)?n(e,t++):e))}var v=t(20262),f=t(44414);function x(e){let n;return function(e,n){let t=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&n(e,t++)}))}(e,(e=>{null==n&&(n=e.props.eventKey)})),n}function E(e){const{title:n,eventKey:t,disabled:r,tabClassName:o,tabAttrs:a,id:i}=e.props;return null==n?null:(0,f.jsx)(s.A,{as:"li",role:"presentation",children:(0,f.jsx)(l.A,{as:"button",type:"button",eventKey:t,disabled:r,id:i,className:o,...a,children:n})})}const b=e=>{const{id:n,onSelect:t,transition:r,mountOnEnter:l=!1,unmountOnExit:s=!1,variant:b="tabs",children:m,activeKey:y=x(m),...A}=(0,o.Zw)(e,{activeKey:"onSelect"});return(0,f.jsxs)(a.A,{id:n,activeKey:y,onSelect:t,transition:(0,v.A)(r),mountOnEnter:l,unmountOnExit:s,children:[(0,f.jsx)(i.A,{id:n,...A,role:"tablist",as:"ul",variant:b,children:d(m,E)}),(0,f.jsx)(c.A,{children:d(m,(e=>{const n={...e.props};return delete n.title,delete n.disabled,delete n.tabClassName,delete n.tabAttrs,(0,f.jsx)(u.A,{...n})}))})]})};b.displayName="Tabs";const m=b},20262:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(5596),o=t(30095);function a(e){return"boolean"===typeof e?e?o.A:r.A:e}}}]);