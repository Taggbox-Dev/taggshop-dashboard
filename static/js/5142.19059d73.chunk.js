"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[5142],{15142:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var s=a(9950),n=a(28429),l=a(56463),c=a(40143),o=a(66345),i=a(51362),r=a(18633),h=a(47039),d=a(16522),x=a(85731),p=a(73878),j=a(44414);const m=e=>{let{history:t,isInstall:a}=e;const l=(()=>{const e=(0,n.zy)(),t=new URLSearchParams(e.search);return{app_load_id:t.get("app_load_id"),code:t.get("code"),embedded:t.get("embedded"),hmac:t.get("hmac"),host:t.get("host"),id_token:t.get("id_token"),locale:t.get("locale"),session:t.get("session"),shop:t.get("shop"),timestamp:t.get("timestamp")}})(),c=(o=l,Object.fromEntries(Object.entries(o).filter((e=>{let[t,a]=e;return null!==a&&void 0!==a}))));var o;const h=(0,p.wA)();return(0,s.useEffect)((()=>{a?c.embedded?h((0,i.AZ)(c,t)):(0,i.cW)(c.shop):h((0,i.AZ)(c,t))}),[]),(0,j.jsx)("div",{className:"h-100vh w-100 f-center",children:(0,j.jsx)(r.a,{})})};var u=a(7751),f=a(7103);const y=s.lazy((()=>a.e(3887).then(a.bind(a,73887)))),g=s.lazy((()=>a.e(72).then(a.bind(a,20072)))),w=s.lazy((()=>a.e(7562).then(a.bind(a,57562)))),b=s.lazy((()=>a.e(7996).then(a.bind(a,67996)))),k=s.lazy((()=>Promise.all([a.e(6957),a.e(899)]).then(a.bind(a,60899)))),S=s.lazy((()=>a.e(5565).then(a.bind(a,95565)))),q=s.lazy((()=>a.e(9613).then(a.bind(a,89613)))),v=s.lazy((()=>Promise.all([a.e(8265),a.e(6447)]).then(a.bind(a,76447)))),_=s.lazy((()=>a.e(1978).then(a.bind(a,61978)))),P=s.lazy((()=>Promise.all([a.e(8265),a.e(3035),a.e(5066)]).then(a.bind(a,46615)))),z=e=>{const t=(0,n.g)();return(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(b,{prefix:e.prefix,params:t})})},A=e=>{const t=(0,n.g)();return(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(S,{prefix:e.prefix,params:t,history:e.history})})},I=e=>{const t=(0,n.zy)(),a=new URLSearchParams(t.search).get("token"),s=new URLSearchParams(t.search).get("callback");return a&&(localStorage.setItem("token",a),window.location.href=s),(0,j.jsx)("div",{className:"h-100vh w-100 f-center",children:(0,j.jsx)(r.a,{})})},L=e=>{localStorage.clear();const t=(0,n.g)();return window.location.href.includes("admin")?localStorage.setItem("isAdmin",1):localStorage.setItem("isAdmin",0),t.token&&(localStorage.setItem("token",atob(t.token)),window.location.href=`${o.btP}home`),(0,j.jsx)("div",{className:"h-100vh w-100 f-center",children:(0,j.jsx)(r.a,{})})},R=e=>{let{history:t}=e;const a=(0,n.zy)(),l=new URLSearchParams(a.search).get("code"),c=new URLSearchParams(a.search).get("account_uuid"),o=new URLSearchParams(a.search).get("context"),h=new URLSearchParams(a.search).get("scope");return(0,s.useEffect)((()=>{(0,i.bG)({code:l,account_uuid:c,context:o,scope:h},t)}),[]),(0,j.jsx)("div",{className:"h-100vh w-100 f-center",children:(0,j.jsx)(r.a,{})})},U=()=>{const e=(0,n.zy)(),t=new URLSearchParams(e.search).get("signed_payload"),a=new URLSearchParams(e.search).get("signed_payload_jwt");return(0,s.useEffect)((()=>{(0,i.HN)({signed_payload:t,signed_payload_jwt:a})}),[]),(0,j.jsx)("div",{className:"h-100vh w-100 f-center",children:(0,j.jsx)(r.a,{})})};function E(e){const t=(0,n.Zp)();return(0,s.useEffect)((()=>{localStorage.getItem("token")||window.location.pathname.includes("/accounts")||window.location.pathname.includes("/connection")||window.location.pathname.includes("/bigcommerce")||window.location.pathname.includes("/Shopify")||window.location.pathname.includes("/autologin")||window.location.pathname.includes("/redirectlogin")||window.location.pathname.includes("/ugc_right")||window.location.pathname.includes("/feeds/authCallback")||window.location.pathname.includes("/collaborator/request")||t("/")}),[]),(0,j.jsxs)(c.A,{children:[(0,j.jsx)(h.A,{}),(0,j.jsxs)(n.BV,{children:[(0,j.jsx)(n.qh,{exact:!0,path:"/autologin",element:(0,j.jsx)(I,{history:e.history})}),(0,j.jsx)(n.qh,{exact:!0,path:"/redirectlogin/:token/:isAdmin",element:(0,j.jsx)(L,{})}),(0,j.jsx)(n.qh,{exact:!0,path:"/redirectlogin/:token",element:(0,j.jsx)(L,{})}),(0,j.jsx)(n.qh,{exact:!0,path:"/",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(_,{children:(0,j.jsx)(y,{prefix:"/",history:t})})})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/register",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(_,{children:(0,j.jsx)(g,{prefix:"/",history:t})})})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/login",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(_,{children:(0,j.jsx)(y,{prefix:"/",history:t})})})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/forgotpassword",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(_,{children:(0,j.jsx)(w,{prefix:"/",activeProduct:"0"})})})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/resetpassword/:userId/:token",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(_,{children:(0,j.jsx)(z,{prefix:"/"})})})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/otherinfo",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(_,{children:(0,j.jsx)(k,{prefix:"/",addEmail:!1,history:e.history})})})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/extemail",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(_,{children:(0,j.jsx)(k,{addEmail:!0,prefix:"/",history:e.history})})})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/price",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(v,{history:e.history})})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/verifyemail/:id",element:(0,j.jsx)(A,{prefix:"/",history:e.history})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/verify",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(q,{prefix:"/",history:e.history})})}),(0,j.jsx)(n.qh,{exact:!0,path:"/feeds/authCallback",element:(0,j.jsx)(d.A,{})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/paymentPaidCallback",element:(0,j.jsx)(l.A,{})}),(0,j.jsx)(n.qh,{exact:!0,path:"/ugc_right/:id",element:(0,j.jsx)(x.A,{})}),(0,j.jsx)(n.qh,{path:"/Shopify/token",element:(0,j.jsx)(m,{history:t,isInstall:!1})}),(0,j.jsx)(n.qh,{path:"/Shopify/install",element:(0,j.jsx)(m,{history:t,isInstall:!0})}),(0,j.jsx)(n.qh,{path:"/bigcommerce/oauth",element:(0,j.jsx)(R,{history:t})}),(0,j.jsx)(n.qh,{path:"/bigcommerce/load",element:(0,j.jsx)(U,{})}),(0,j.jsx)(n.qh,{exact:!0,path:"/connection/:id",element:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(P,{})})}),(0,j.jsx)(n.qh,{path:"*",element:(0,j.jsx)(n.C5,{to:"/accounts/login"})}),(0,j.jsx)(n.qh,{exact:!0,path:"/accounts/shopifypaymentcomplete",element:(0,j.jsx)(u.A,{})}),(0,j.jsx)(n.qh,{path:"/collaborator/request/:ownerToken/:collaboratorToken",element:(0,j.jsx)(_,{children:(0,j.jsx)(f.A,{history:t})})})]})]})}}}]);