"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[122],{99973:(e,s,i)=>{i.d(s,{A:()=>h});var t=i(65043),n=i(35475),o=i(53519),a=i(21467),l=i(90166),c=i(57267),r=i(70579);class d extends t.Component{isActive(e){return window.location.href.includes(e)?"active":""}render(){const{websiteUrl:e,navigate:s}=this.props;return(0,r.jsx)("div",{className:"subheader",children:(0,r.jsxs)(o.A,{fluid:!0,children:[(0,r.jsxs)("div",{className:"nav nav-underline d-none d-lg-flex",children:[(0,r.jsx)("div",{className:"nav-item",children:(0,r.jsxs)(n.N_,{to:`/website/${e}/${localStorage.getItem("website_id")||""}`,className:`nav-link ${this.isActive("website")}`,children:[(0,r.jsx)(c.gc,{icon:"browser",iconClass:"me-1"}),"Website"]})}),(0,r.jsx)("div",{className:"nav-item",children:(0,r.jsxs)(n.N_,{to:`/shopon-bio/preview/${localStorage.getItem("shopOn_id")||""}`,className:`nav-link ${this.isActive("shopon-bio")}`,children:[(0,r.jsx)(c.gc,{icon:"link",iconClass:"me-1"}),"Shopon.bio"]})}),(0,r.jsx)("div",{className:"nav-item",children:(0,r.jsxs)(n.N_,{to:`/email-campaign/publish/${localStorage.getItem("emailCamp_id")||""}`,className:`nav-link ${this.isActive("email-campaign")}`,children:[(0,r.jsx)(c.gc,{icon:"bullhorn",iconClass:"me-1"}),"Email Campaign"]})}),(0,r.jsx)("div",{className:"nav-item",children:(0,r.jsxs)(n.N_,{to:"/more-publish/",className:`nav-link ${this.isActive("more-publish")}`,children:[(0,r.jsx)(c.gc,{icon:"ellipsis",iconClass:"me-1"}),"More"]})})]}),(0,r.jsxs)(a.A,{className:"d-flex d-lg-none",style:{marginTop:"5px"},children:[(0,r.jsx)(a.A.Toggle,{variant:"secondary",id:"subheader-tabs",children:window.location.href.includes("website")?"Website":window.location.href.includes("shopon-bio")?"Shopon.bio":window.location.href.includes("email-campaign")?"Email Campaign":window.location.href.includes("more-publish")?"More":""}),(0,r.jsxs)(a.A.Menu,{children:[(0,r.jsxs)(a.A.Item,{onClick:()=>s(`/website/${e}/${localStorage.getItem("website_id")||""}`),className:this.isActive("website"),children:[(0,r.jsx)(c.gc,{icon:"browser",iconClass:"me-1"}),"Website"]}),(0,r.jsxs)(a.A.Item,{onClick:()=>s(`/shopon-bio/preview/${localStorage.getItem("shopOn_id")||""}`),className:this.isActive("shopon-bio"),children:[(0,r.jsx)(c.gc,{icon:"link",iconClass:"me-1"}),"Shopon.bio"]}),(0,r.jsxs)(a.A.Item,{onClick:()=>s(`/email-campaign/publish/${localStorage.getItem("emailCamp_id")||""}`),className:this.isActive("email-campaign"),children:[(0,r.jsx)(c.gc,{icon:"bullhorn",iconClass:"me-1"}),"Email Campaign"]}),(0,r.jsxs)(a.A.Item,{onClick:()=>s("/more-publish/"),className:this.isActive("more-publish"),children:[(0,r.jsx)(c.gc,{icon:"ellipsis",iconClass:"me-1"}),"More"]})]})]})]})})}}const h=(0,l.A)(d)},20122:(e,s,i)=>{i.r(s),i.d(s,{default:()=>x});var t=i(65043),n=i(53519),o=i(78602),a=i(61072),l=i(38628),c=i(33637),r=i(57267),d=i(16287),h=i(90166),m=i(99973),u=i(70579);const p=[{id:"1",title:"Buffer",icon:"buffer",text:"Connect with Buffer to seamlessly schedule and post user-generated content (UGC) across your social media platforms. Build trust and engage your audience with authentic content."},{id:"2",title:"Hubspot",icon:"hubspot",text:"Enrich your email campaigns by featuring UGC through HubSpot. Showcase customer reviews and authentic content to boost trust and enhance conversions."},{id:"3",title:"Hootsuite",icon:"hootsuite",text:"Plan and post user-generated content effortlessly with Hootsuite. Elevate your brand\u2019s presence by maintaining a consistent and trustworthy voice on social media."},{id:"4",title:"Zapier",icon:"zapier",text:"Automate workflows and connect with thousands of apps using Zapier. Repurpose UGC with ease and integrate it into your existing tools and processes seamlessly."},{id:"5",title:"Facebook Ads",icon:"facebook",text:"Enhance your ad campaigns on Facebook with engaging UGC. Boost performance and connect with your audience authentically. Got ideas? We\u2019re ready to listen!"},{id:"6",title:"Tiktok Ads",icon:"tiktok",text:"Create captivating TikTok Ads by integrating user-generated content. Deliver ads that stand out and engage your audience effectively. Have feedback? Share it with us\u2014we value your input!"},{id:"7",title:"Request an Integration",icon:"integration",text:"Looking for an integration that\u2019s not here? Let us know your requirements, and we\u2019ll explore how we can make it happen to suit your needs."}];class g extends t.Component{constructor(){super(...arguments),this.state={showContactUs:!1,selectedTab:"More"},this.showContactUsFun=()=>{this.setState({showContactUs:!0})}}render(){var e;const{navigate:s}=this.props,{showContactUs:i}=this.state,{allWalls:t,shopOnData:h,userData:g}=this.props,x=null===g||void 0===g||null===(e=g.user_data)||void 0===e?void 0:e.sessionData,b="shopify"==(null===x||void 0===x?void 0:x.createFrom.toLowerCase())?"shopify":"bigcommerce"==(null===x||void 0===x?void 0:x.createFrom.toLowerCase())?"bigcommerce":"publish",{selectedTab:w}=this.state;return(0,u.jsxs)("div",{className:"d-flex flex-column flex-column-fluid full-content",children:[(0,u.jsx)("div",{className:"subheader",children:(0,u.jsx)(m.A,{websiteUrl:b})}),(0,u.jsx)(n.A,{fluid:!0,children:(0,u.jsxs)(o.A,{lg:12,className:"w-100",children:[(0,u.jsx)(a.A,{className:"gx-3 w-100",children:null!==p&&void 0!==p&&p.length?p.map(((e,s)=>(0,u.jsx)(o.A,{sm:6,md:3,xxl:2,children:(0,u.jsx)(l.A,{className:"card-stretch gutter-b cursor-pointer",onClick:this.showContactUsFun,children:(0,u.jsxs)(l.A.Body,{className:"flex-column px-4",children:[(0,u.jsx)(c.A,{className:"mb-3 h-50px w-auto object-fit-contain",src:(0,r.pc)(`media/icons/more-publish/${e.icon}.svg`),height:50,width:4==e.id?101:50,alt:e.title,fluid:!0}),(0,u.jsx)("h5",{className:"fs-6",children:e.title}),(0,u.jsx)("p",{children:e.text})]})})}))):null}),(0,u.jsx)(d.A,{show:i,onCloseModel:()=>this.setState({showContactUs:!1})})]})})]})}}const x=(0,h.A)(g)}}]);
//# sourceMappingURL=122.fbf495b2.chunk.js.map