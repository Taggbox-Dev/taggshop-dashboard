"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[5318],{75318:(e,s,l)=>{l.r(s),l.d(s,{default:()=>f});var n=l(9950),a=l(45358),c=l(5216),d=l(86781),i=l(68459),t=l(97937),r=l(51960),o=l(42074),m=l(54810),x=l(52867),h=(l(29038),l(1391)),u=l(44414);class p extends n.Component{constructor(){super(...arguments),this.state={networkList:[{id:18},{id:28}],loader:!1}}render(){const{loader:e,networkList:s}=this.state,{onBoarding:l,setNetwork:n,navigate:h}=this.props;return(0,u.jsxs)("div",{className:"d-flex flex-column flex-column-fluid w-100 py-5 manual_upload_",children:[l?null:(0,u.jsx)("div",{className:"subheader",children:(0,u.jsx)(a.A,{fluid:!0,children:(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)(o.N_,{to:`/content/addfeed/${localStorage.getItem("wallId")}`,className:"btn btn-icon bg-gray-100 btn-sm me-2",children:(0,u.jsx)(m.gc,{icon:"angle-left",iconClass:"me-0"})}),(0,u.jsx)("h1",{className:"me-2 h4 my-3",children:"Upload Feed"})]})})}),(0,u.jsx)(a.A,{fluid:!0,children:(0,u.jsx)(c.A,{className:""+(l?"shadow-none border-0":""),children:(0,u.jsxs)(c.A.Body,{className:"f-center flex-column manual_upload_card",children:[(0,u.jsx)("h3",{className:"text-center mb-3",children:"Manual Uploads"}),(0,u.jsx)("p",{className:"text-center mb-8",children:"Upload content directly to the feed via device or by adding a post URL from Instagram or TikTok "}),(0,u.jsxs)("div",{className:"f-center flex-wrap w-100 flex-column",children:[e?(0,u.jsx)(d.A,{className:"w-100",style:{maxWidth:600},children:(0,x.OZ)(3).map(((e,s)=>(0,u.jsx)(i.A,{children:(0,u.jsxs)("div",{className:"btn btn-outline-secondary w-100 rounded-1 f-center flex-column p-7 mb-4 d-flex",children:[(0,u.jsx)("div",{className:"sk_rect h-40px w-40px mb-3"}),(0,u.jsx)("div",{className:"sk_line h-10px mb-1 w-75"})]},s)})))}):(0,u.jsxs)(d.A,{className:"w-100",style:{maxWidth:600},children:[(0,u.jsx)(i.A,{children:(0,u.jsxs)(t.A,{onClick:()=>l?n(0):h("/manual-upload/feed?network=0"),className:"btn btn-outline-secondary w-100 rounded-1 f-center flex-column p-7 mb-4",children:[(0,u.jsx)("p",{className:"display-2 mb-3",children:(0,u.jsx)(m.gc,{type:"light",icon:"laptop",iconClass:"me-0"})}),(0,u.jsx)("p",{className:"mb-0 fs-10 fw-medium",children:"My Device"})]})}),s.length>0?s.map((e=>(0,u.jsx)(i.A,{children:(0,u.jsxs)(t.A,{onClick:()=>l?n(e.id):h(`/manual-upload/feed?network=${e.id}`),className:"btn btn-outline-secondary w-100 rounded-1 f-center flex-column p-7 mb-4",children:[(0,u.jsx)("p",{className:"display-2 mb-3",children:(0,u.jsx)(r.A,{src:(0,m.pc)(`media/icons/social-icons-square/${(0,x.EC)(e.id)}.svg`),height:36,width:36,fluid:!0})}),(0,u.jsx)("p",{className:"mb-0 fs-10 fw-medium",children:(0,x.Oi)(e.id)})]})}))):null]}),l?(0,u.jsx)("div",{className:"f-center",children:(0,u.jsx)(t.A,{variant:"link",className:"text-decoration-underline",onClick:()=>this.props.onBack("c_n"),children:"Choose another Network"})}):null]})]})})})]})}}const f=(0,h.A)(p)}}]);