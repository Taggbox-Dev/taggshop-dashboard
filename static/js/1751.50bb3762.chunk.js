"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[1751,6615],{46615:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var r=s(9950),a=s(73878),n=s(28429),o=s(59074),i=s(9697),c=s(18633),l=s(33035),d=s(44414);const g=new AbortController,p=new BroadcastChannel("connect"),v=()=>{const e=(0,n.g)(),t=(0,a.wA)(),[s,v]=(0,r.useState)(!0),u=async s=>{try{const r=JSON.parse(s.data),{code:a}=r,n=localStorage.getItem("networkId"),c=localStorage.getItem("connectionType");(s.origin.includes("tagshop.ai")||s.origin.includes("localhost"))&&"connectAccount"==c&&a&&await(0,i.CJ)(parseInt(n),a,(()=>t((0,o.xv)(atob(e.id).split("'").join(""),v))))}catch(r){}};return(0,r.useEffect)((()=>{const s=g.signal;return window.addEventListener("message",u,{signal:s}),p.addEventListener("message",u),t((0,o.xv)(atob(e.id).split("'").join(""),v)),localStorage.setItem("ownerId",atob(e.id).split("'").join("")),localStorage.setItem("shareAccount",!0),localStorage.setItem("url_redirect",window.location.pathname.replace("/v2","")),()=>{window.removeEventListener("message",u,{signal:s}),p.removeEventListener("message",u),g.abort(),p.close()}}),[]),s?(0,d.jsx)(c.a,{}):(0,d.jsx)(l.A,{isSharing:!0})}},1093:(e,t,s)=>{s.d(t,{A:()=>c});var r=s(48738),a=s.n(r),n=s(9950),o=s(44089),i=s(44414);const c=n.forwardRef(((e,t)=>{let{bsPrefix:s,className:r,striped:n,bordered:c,borderless:l,hover:d,size:g,variant:p,responsive:v,...u}=e;const m=(0,o.oU)(s,"table"),w=a()(r,m,p&&`${m}-${p}`,g&&`${m}-${g}`,n&&`${m}-${"string"===typeof n?`striped-${n}`:"striped"}`,c&&`${m}-bordered`,l&&`${m}-borderless`,d&&`${m}-hover`),b=(0,i.jsx)("table",{...u,className:w,ref:t});if(v){let e=`${m}-responsive`;return"string"===typeof v&&(e=`${e}-${v}`),(0,i.jsx)("div",{className:e,children:b})}return b}))}}]);