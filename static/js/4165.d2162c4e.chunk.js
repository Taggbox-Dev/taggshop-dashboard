"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[4165,6216],{16216:(e,s,n)=>{n.r(s),n.d(s,{default:()=>m});var t=n(65043),r=n(97508),a=n(73216),o=n(92657),i=n(71214),l=n(27108),c=n(78894),d=n(70579);const f=new AbortController,v=new BroadcastChannel("connect"),m=()=>{const e=(0,a.g)(),s=(0,r.wA)(),[n,m]=(0,t.useState)(!0),u=async n=>{try{const t=JSON.parse(n.data),{code:r}=t,a=localStorage.getItem("networkId"),l=localStorage.getItem("connectionType");(n.origin.includes("tagshop.ai")||n.origin.includes("localhost"))&&"connectAccount"==l&&r&&await(0,i.CJ)(parseInt(a),r,(()=>s((0,o.xv)(e.id,m))),!0)}catch(t){}};return(0,t.useEffect)((()=>{const n=f.signal;return window.addEventListener("message",u,{signal:n}),v.addEventListener("message",u),s((0,o.xv)(e.id,m)),localStorage.setItem("shared_token",e.id),localStorage.setItem("ownerId",e.id),localStorage.setItem("shareAccount",!0),localStorage.setItem("url_redirect",window.location.pathname.replace("/v2","")),()=>{window.removeEventListener("message",u,{signal:n}),v.removeEventListener("message",u),f.abort(),v.close()}}),[]),n?(0,d.jsx)(l.a,{}):(0,d.jsx)(c.A,{isSharing:!0})}},9967:(e,s,n)=>{n.d(s,{A:()=>a});var t=n(65043),r=n(71456);function a(e,s,n){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const o=(0,r.A)(n);(0,t.useEffect)((()=>{const n="function"===typeof e?e():e;return n.addEventListener(s,o,a),()=>n.removeEventListener(s,o,a)}),[e])}},56161:(e,s,n)=>{n.d(s,{A:()=>c});var t=n(65043),r=(n(92667),n(18232),n(71456));n(9967);n(36723),n(61342);n(54723);new WeakMap;var a=n(14140),o=n(70579);const i=["onKeyDown"];const l=t.forwardRef(((e,s)=>{let{onKeyDown:n}=e,t=function(e,s){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(s.indexOf(t)>=0)continue;n[t]=e[t]}return n}(e,i);const[l]=(0,a.Am)(Object.assign({tagName:"a"},t)),c=(0,r.A)((e=>{l.onKeyDown(e),null==n||n(e)}));return(d=t.href)&&"#"!==d.trim()&&"button"!==t.role?(0,o.jsx)("a",Object.assign({ref:s},t,{onKeyDown:n})):(0,o.jsx)("a",Object.assign({ref:s},t,l,{onKeyDown:c}));var d}));l.displayName="Anchor";const c=l},91719:(e,s,n)=>{n.d(s,{A:()=>A});var t=n(98139),r=n.n(t),a=n(65043),o=n(97121),i=n(71456),l=n(67852),c=n(4488),d=n(70579);const f=(0,c.A)("h4");f.displayName="DivStyledAsH4";const v=a.forwardRef(((e,s)=>{let{className:n,bsPrefix:t,as:a=f,...o}=e;return t=(0,l.oU)(t,"alert-heading"),(0,d.jsx)(a,{ref:s,className:r()(n,t),...o})}));v.displayName="AlertHeading";const m=v;var u=n(56161);const g=a.forwardRef(((e,s)=>{let{className:n,bsPrefix:t,as:a=u.A,...o}=e;return t=(0,l.oU)(t,"alert-link"),(0,d.jsx)(a,{ref:s,className:r()(n,t),...o})}));g.displayName="AlertLink";const w=g;var h=n(18072),p=n(85632);const b=a.forwardRef(((e,s)=>{const{bsPrefix:n,show:t=!0,closeLabel:a="Close alert",closeVariant:c,className:f,children:v,variant:m="primary",onClose:u,dismissible:g,transition:w=h.A,...b}=(0,o.Zw)(e,{show:"onClose"}),A=(0,l.oU)(n,"alert"),x=(0,i.A)((e=>{u&&u(!1,e)})),y=!0===w?h.A:w,N=(0,d.jsxs)("div",{role:"alert",...y?void 0:b,ref:s,className:r()(f,A,m&&`${A}-${m}`,g&&`${A}-dismissible`),children:[g&&(0,d.jsx)(p.A,{onClick:x,"aria-label":a,variant:c}),v]});return y?(0,d.jsx)(y,{unmountOnExit:!0,...b,ref:void 0,in:t,children:N}):t?N:null}));b.displayName="Alert";const A=Object.assign(b,{Link:w,Heading:m})},64196:(e,s,n)=>{n.d(s,{A:()=>l});var t=n(98139),r=n.n(t),a=n(65043),o=n(67852),i=n(70579);const l=a.forwardRef(((e,s)=>{let{bsPrefix:n,className:t,striped:a,bordered:l,borderless:c,hover:d,size:f,variant:v,responsive:m,...u}=e;const g=(0,o.oU)(n,"table"),w=r()(t,g,v&&`${g}-${v}`,f&&`${g}-${f}`,a&&`${g}-${"string"===typeof a?`striped-${a}`:"striped"}`,l&&`${g}-bordered`,c&&`${g}-borderless`,d&&`${g}-hover`),h=(0,i.jsx)("table",{...u,className:w,ref:s});if(m){let e=`${g}-responsive`;return"string"===typeof m&&(e=`${e}-${m}`),(0,i.jsx)("div",{className:e,children:h})}return h}))}}]);
//# sourceMappingURL=4165.d2162c4e.chunk.js.map