"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[5335],{75335:(e,l,s)=>{s.r(l),s.d(l,{default:()=>S});var a=s(9950),t=s(4695),n=s.n(t),i=s(52867);const d=e=>{n().fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((l=>{l.value?e():l.dismiss}))};var r=s(73878),c=s(28429),o=s(5216),m=s(86781),h=s(68459),x=s(8966),p=s(21432),u=s(95942),j=s(51960),f=s(90246),v=s(97937),w=s(54810),b=s(70804),g=s(1093),y=s(44414);function N(e){let{feeds:l,wallId:s,deleteExtraFeed:a}=e;return(0,y.jsxs)(g.A,{className:"mb-0 pb-3",size:"lg",responsive:!0,children:[(0,y.jsx)("thead",{className:"thead-light",children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{className:"fw-bold",children:"Feeds"}),(0,y.jsx)("th",{className:"fw-bold text-nowrap",style:{minWidth:50},children:"Total Posts"}),(0,y.jsx)("th",{className:"fw-bold text-nowrap pe-6 text-end",style:{minWidth:100},children:(0,y.jsxs)(v.A,{variant:"danger",size:"sm",onClick:()=>d((()=>a(s,(e=>{if((null===e||void 0===e?void 0:e.length)>0)return e.map((e=>`${e.id}`))})(l),(e=>{if((null===e||void 0===e?void 0:e.length)>0)return e.map((e=>`${e.Network.Networkid}`))})(l)))),wallid:s,children:[(0,y.jsx)(w.gc,{type:"solid",icon:"trash-can",iconClass:"me-1"}),"Delete All"]})})]})}),(0,y.jsx)("tbody",{children:l.length>0?l.map(((e,l)=>{return(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{className:"fw-bold text-nowrap",style:{minWidth:50},children:(0,y.jsxs)("p",{className:"mb-0 line-clamp-2 line-clamp",style:{maxWidth:300},children:[(t=e.feedsFilterprefix,t?t.includes("<i class")?(0,y.jsxs)(y.Fragment,{children:[(0,b.Ay)(t)," "]}):t:""),e.name," - ",e.feedsFiltername]})}),(0,y.jsx)("th",{className:"fw-bold text-nowrap",style:{minWidth:100},children:`${e.totalrecords>1?"Posts":"Post"}: ${e.totalrecords}`}),(0,y.jsx)("td",{className:"text-end pe-6",children:(0,y.jsx)("div",{className:"d-flex align-items-center justify-content-end",children:(0,y.jsx)(p.A,{placement:"top",overlay:(0,y.jsx)(u.A,{children:"Delete"}),children:(0,y.jsx)(v.A,{variant:"icon",className:"btn-active-primary border-0",onClick:()=>d((()=>{var l;return a(s,[`${e.id}`],[`${null===e||void 0===e||null===(l=e.Network)||void 0===l?void 0:l.Networkid}`])})),children:(0,y.jsx)(w.gc,{type:"solid",icon:"trash-can"})})})})})]},l);var t})):null})]})}var A=s(44268);const k=function(){const[e,l]=(0,a.useState)(!0),s=(0,c.Zp)(),t=()=>l(!1);return(0,r.wA)(),(0,y.jsx)(A.A,{show:e,onHide:t,backdrop:"static",size:"lg",keyboard:!1,centered:!0,children:(0,y.jsxs)(A.A.Body,{children:[(0,y.jsx)(v.A,{variant:"close",className:"position-absolute end-0 top-0 m-5",onClick:t}),(0,y.jsxs)("div",{className:"py-lg-8 py-5 text-center",children:[(0,y.jsx)(j.A,{className:"mb-6",src:(0,w.pc)("media/images/error/warning.svg"),width:"65",height:"65",fluid:!0}),(0,y.jsx)("h2",{className:"h3",children:"You're Running Extra Gallery/Feeds!"}),(0,y.jsx)("p",{className:"mb-6 fs-8 text-muted fw-medium",children:"To enjoy uninterrupted services,kindly revoke the additional gallery/feed or upgrade your plan."}),(0,y.jsxs)("div",{className:"text-center mb-4",children:[(0,y.jsx)(v.A,{variant:"primary",className:"m-2 btn-min-w",onClick:()=>{s("/price"),t()},children:"Upgrade Now"}),(0,y.jsx)(v.A,{variant:"outline-primary",className:"m-2 btn-min-w",onClick:t,children:"Revoke"})]}),(0,y.jsx)("div",{className:"f-center",children:(0,y.jsx)(v.A,{variant:"link",onClick:()=>{s(`/content/moderation/${localStorage.getItem("wallId")?localStorage.getItem("wallId"):""}`),t()},children:"Skip"})})]})]})})};var I=s(14313),F=s(66345),C=s(59074);const $=e=>{let{feedsList:l,deleteWall:s,deleteFeedFromWall:t,extraGallery:n,extraFeeds:b}=e;const g=(0,r.wA)(),A=(0,c.Zp)(),[$,W]=(0,a.useState)(0),_=(e,l,s)=>{(new I.A).delete(F.S_I,{data:{wallId:e,feedId:l,networkId:s}}).then((s=>{if(s.data&&Object.keys(s.data).length>0){const{message:a}=s.data;(0,i.k1)(a),t(e,l)}})).catch((e=>{}))};return(0,y.jsx)(o.A,{className:"limit_excced_ py-4",children:(0,y.jsxs)(o.A.Body,{children:[(0,y.jsx)(m.A,{className:"me-6 gx-0 px-3",children:["Gallery","Feeds","Network","Action"].map(((e,l)=>(0,y.jsx)(h.A,{children:(0,y.jsx)("p",{className:"fw-bold text-nowrap p-2 mb-0 "+("Action"===e?"text-end":""),children:e})},l)))}),(0,y.jsx)(x.A,{onChange:e=>W(e[0]),flush:!0,children:l.map(((e,l)=>{var a,t;const n=(null===e||void 0===e||null===(a=e.feed)||void 0===a?void 0:a.length)>0?e.feed.map((e=>{var l;return null===e||void 0===e||null===(l=e.Network)||void 0===l?void 0:l.Networkid})):[],r=(null===e||void 0===e||null===(t=e.feed)||void 0===t?void 0:t.length)>0||!1;return(0,y.jsxs)(x.A.Item,{eventKey:e.wallId,className:"mb-4",children:[(0,y.jsx)(x.A.Header,{className:r?"":"arrow_disabled",children:(0,y.jsxs)(m.A,{className:"w-100",children:[(0,y.jsx)(h.A,{children:(0,y.jsx)("div",{className:"overflow-hidden p-2",style:{maxWidth:200},children:(0,y.jsx)("p",{className:"fw-bold mb-0 line-clamp-2 line-clamp",children:e.wallname})})}),(0,y.jsx)(h.A,{children:(0,y.jsx)("p",{className:"fw-bold text-nowrap p-2 mb-0",children:e.feed.length})}),(0,y.jsx)(h.A,{children:(0,y.jsx)("p",{className:"fw-bold text-nowrap px-2 mb-0",children:n&&n.length>0?(0,y.jsxs)("div",{className:"symbol-group symbol-hover flex-nowrap",children:[n.slice(0,3).map(((e,l)=>(0,y.jsx)(p.A,{placement:"top",overlay:(0,y.jsx)(u.A,{children:(0,i.Oi)(e)}),children:(0,y.jsx)("div",{className:"symbol symbol-34 symbol-circle border",children:(0,y.jsx)("span",{className:"symbol-label bg-gray-200 fw-bold text-uppercase fs-8",children:(0,y.jsx)(j.A,{src:(0,w.pc)(`media/icons/social-icons/${(0,i.EC)(e)}.svg`),height:16,width:16,alt:(0,i.Oi)(e),fluid:!0})})})},l))),n.length>3?(0,y.jsx)(p.A,{placement:"top",overlay:(0,y.jsx)(f.A,{children:(0,y.jsx)("div",{className:"tooltip_symbol d-flex flex-wrap p-3",children:n.slice(3,n.length).map(((e,l)=>(0,y.jsx)("div",{className:"symbol symbol-34 symbol-circle border m-1",children:(0,y.jsx)("span",{className:"symbol-label bg-gray-200 fw-bold text-uppercase fs-8",children:(0,y.jsx)(j.A,{src:(0,w.pc)(`media/icons/social-icons/${(0,i.EC)(e)}.svg`),height:16,width:16,alt:(0,i.Oi)(e),fluid:!0})})},l)))})}),children:(0,y.jsx)("div",{className:"symbol symbol-34 symbol-circle cursor-pointer",children:(0,y.jsxs)("span",{className:"symbol-label bg-primary fs-9 fw-medium",children:["+",n.length-3]})})}):null]}):" -- "})}),(0,y.jsx)(h.A,{className:"text-end",children:(0,y.jsx)(p.A,{placement:"top",overlay:(0,y.jsx)(u.A,{children:"Delete"}),children:(0,y.jsx)(v.A,{variant:"icon",size:"sm",className:"btn-active-primary",onClick:()=>d((()=>{return l=e,g((0,C.kg)({action:3,name:l.wallname,status:0,autoUpdate:0,id:l.wallId,deleted:1},A,(()=>s(l.wallId))));var l})),children:(0,y.jsx)(w.gc,{type:"solid",icon:"trash-can"})})})})]})}),r?(0,y.jsx)(x.A.Body,{className:"px-0",children:(0,y.jsx)("div",{className:"border rounded-1 p-3 overflow-hidden",children:(0,y.jsx)(N,{feeds:e.feed,wallId:e.wallId,deleteExtraFeed:_})})}):null]},e.wallId)}))}),(0,y.jsx)(k,{}),(0,y.jsx)("div",{className:"mt-5",children:(0,y.jsxs)("p",{className:"fs-8 text-muted text-center mb-0",children:["You have exceeded your plan's limit. Delete extra ",(0,y.jsxs)("strong",{children:[n>0&&`Gallery (${n})`," ",b>0&&`Feeds (${b})`]})," for a seamless experience."]})})]})})};var W=s(45358),_=s(88749);const S=function(){const[e,l]=(0,a.useState)([]),[s,t]=(0,a.useState)(0),[n,i]=(0,a.useState)(0),d=(0,r.d4)((e=>{var l,s;return null===(l=e.authorized)||void 0===l||null===(s=l.userData)||void 0===s?void 0:s.user_data}),r.bN),o=(0,r.wA)(),m=(0,c.Zp)();(0,a.useEffect)((()=>{h()}),[]);const h=()=>{(new I.A).get(F.Npq).then((e=>{if(e.data&&Object.keys(e.data).length>0){const{responseData:s}=e.data;if(s&&Object.keys(s).length>0){const{wallList:e,delete_extra_feed:a,delete_extra_gallery:n}=s;n>0&&t(n),a>0&&i(a),e.length>0&&l(e)}}})).catch((e=>{}))};return(0,y.jsx)("div",{className:"d-flex flex-column flex-column-fluid align-items-center justify-content-center w-100 flex-position-center full-content",children:(0,y.jsxs)(W.A,{children:[(0,y.jsx)("div",{className:"mb-6 f-center",children:(0,y.jsx)(j.A,{src:(0,w.pc)("media/logo/tagshop-icon.svg"),height:50,width:50,alt:"Tagshop",fluid:!0})}),(0,y.jsx)($,{feedsList:e,extraFeeds:n,extraGallery:s,deleteWall:s=>{const a=e.filter((e=>e.wallId!=s));l(a),h(),o((0,_.ug)((()=>{}))),parseInt(null===d||void 0===d?void 0:d.feeds)<=a.length&&m("/home")},deleteFeedFromWall:(s,a)=>{const t=a.map((e=>Number(e))),n=e.map((e=>{if(e.wallId===s){const l=e.feed.filter((e=>-1===t.indexOf(e.id)));e.feed=l}return e}));l(n),h(),o((0,_.ug)((()=>{}))),parseInt(null===d||void 0===d?void 0:d.feeds)<=n.length&&m("/home")}})]})})}}}]);