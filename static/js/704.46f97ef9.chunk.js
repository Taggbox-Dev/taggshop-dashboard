"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[704],{50704:(e,n,a)=>{a.r(n),a.d(n,{default:()=>d});var s=a(9950),t=a(45276),i=a(42074),c=a(54810),l=a(39610),o=a(44414);class m extends s.Component{constructor(){super(),this.state={support:!1}}render(){var e,n;const{support:a}=this.state,{authorized:s,navigate:m}=this.props,{menuActiveClass:d}=this,r=null===s||void 0===s||null===(e=s.userData)||void 0===e||null===(n=e.user_data)||void 0===n?void 0:n.sessionData,h="shopify"==(null===r||void 0===r?void 0:r.createFrom.toLowerCase())?"shopify":"bigcommerce"==(null===r||void 0===r?void 0:r.createFrom.toLowerCase())?"bigcommerce":"publish";return(0,o.jsxs)("div",{className:"sidebar-menu",children:[(0,o.jsx)("div",{className:"app-logo f-center mb-3",children:(0,o.jsx)(i.N_,{to:"/",className:"d-flex flex-shrink-1 header_logo",children:(0,o.jsx)("span",{className:"d-flex w-100",children:(0,o.jsx)(t.A,{className:"w-100",src:(0,c.pc)("media/logo/tagshop-icon.svg")})})})}),(0,o.jsxs)("ul",{className:"sidebar-menu-list list-unstyled mb-0 p-0",children:[(0,o.jsx)("li",{className:"sidebar-menu-items",children:(0,o.jsxs)("div",{className:"nav-menu-item f-center flex-lg-column text-decoration-none ".concat(window.location.pathname.includes("/home")?"active":""),onClick:()=>(0,l.m)((()=>m("/home"))),children:[(0,o.jsx)("span",{className:"menu-icon me-2 me-lg-0 mb-0 mb-lg-2",children:(0,o.jsx)(c.Ah,{icon:"home",width:"20",height:"20"})}),(0,o.jsx)("span",{className:"menu-text",children:"Home"})]})}),(0,o.jsx)("li",{className:"sidebar-menu-items",children:(0,o.jsxs)("div",{className:"nav-menu-item f-center flex-lg-column text-decoration-none ".concat(window.location.pathname.includes("/managefeed")||window.location.pathname.includes("/addfeed")?"active":""),onClick:()=>(0,l.m)((()=>m("/content/managefeed/".concat(localStorage.getItem("wallId")?localStorage.getItem("wallId"):"")))),children:[(0,o.jsx)("span",{className:"menu-icon me-2 me-lg-0 mb-0 mb-lg-2",children:(0,o.jsx)(c.Ah,{icon:"feeds",width:"20",height:"20"})}),(0,o.jsx)("span",{className:"menu-text",children:"Feeds"})]})}),(0,o.jsx)("li",{className:"sidebar-menu-items",children:(0,o.jsxs)("div",{className:"nav-menu-item f-center flex-lg-column text-decoration-none ".concat(window.location.pathname.includes("/moderation")?"active":""),onClick:()=>(0,l.m)((()=>m("/content/moderation/".concat(localStorage.getItem("wallId")?localStorage.getItem("wallId"):"")))),children:[(0,o.jsx)("span",{className:"menu-icon me-2 me-lg-0 mb-0 mb-lg-2",children:(0,o.jsx)(c.Ah,{icon:"content",width:"20",height:"20"})}),(0,o.jsx)("span",{className:"menu-text",children:"Content"})]})}),(0,o.jsx)("li",{className:"sidebar-menu-items",children:(0,o.jsxs)("div",{className:"nav-menu-item f-center flex-lg-column text-decoration-none ".concat(window.location.pathname.includes("/products")?"active":""),onClick:()=>(0,l.m)((()=>m("/content/products"))),children:[(0,o.jsx)("span",{className:"menu-icon me-2 me-lg-0 mb-0 mb-lg-2",children:(0,o.jsx)(c.Ah,{icon:"product",width:"20",height:"20"})}),(0,o.jsx)("span",{className:"menu-text",children:"Product Catalog"})]})}),(0,o.jsx)("li",{className:"sidebar-menu-items",children:(0,o.jsxs)("div",{className:"nav-menu-item f-center flex-lg-column text-decoration-none ".concat(/\/(website|email-campaign|shopon-bio)/.test(window.location.pathname)?"active":""),onClick:()=>(0,l.m)((()=>m("/website/".concat(h).concat(localStorage.getItem("website_id")?"/".concat(localStorage.getItem("website_id")):"")))),children:[(0,o.jsx)("span",{className:"menu-icon me-2 me-lg-0 mb-0 mb-lg-2",children:(0,o.jsx)(c.Ah,{icon:"publish",width:"20",height:"20"})}),(0,o.jsx)("span",{className:"menu-text",children:"Publish"})]})}),(0,o.jsx)("li",{className:"sidebar-menu-items",children:(0,o.jsxs)("div",{className:"nav-menu-item f-center flex-lg-column text-decoration-none ".concat(window.location.pathname.includes("/more-apps")?"active":""),onClick:()=>(0,l.m)((()=>m("/more-apps"))),children:[(0,o.jsx)("span",{className:"menu-icon me-2 me-lg-0 mb-0 mb-lg-2",children:(0,o.jsx)(c.Ah,{icon:"apps-more",width:"20",height:"20"})}),(0,o.jsx)("span",{className:"menu-text",children:"Apps & More"})]})}),(0,o.jsx)("hr",{className:"w-75 d-lg-flex d-none",style:{margin:"1vh auto"}}),(0,o.jsx)("li",{className:"sidebar-menu-items",children:(0,o.jsxs)("div",{className:"nav-menu-item f-center flex-lg-column text-decoration-none ".concat(window.location.pathname.includes("/creators")?"active":""),onClick:()=>(0,l.m)((()=>m("/creators"))),children:[(0,o.jsx)("span",{className:"menu-icon me-2 me-lg-0 mb-0 mb-lg-2",children:(0,o.jsx)(c.Ah,{icon:"creators",width:"20",height:"20"})}),(0,o.jsx)("span",{className:"menu-text",children:"Creators"})]})}),(0,o.jsx)("li",{className:"sidebar-menu-items",children:(0,o.jsxs)("div",{className:"nav-menu-item f-center flex-lg-column text-decoration-none ".concat(window.location.pathname.includes("/analytics")?"active":""),onClick:()=>(0,l.m)((()=>m("/analytics"))),children:[(0,o.jsx)("span",{className:"menu-icon me-2 me-lg-0 mb-0 mb-lg-2",children:(0,o.jsx)(c.Ah,{icon:"analytics",width:"20",height:"20"})}),(0,o.jsx)("span",{className:"menu-text",children:"Analytics"})]})})]})]})}}const d=m},39610:(e,n,a)=>{a.d(n,{m:()=>l});var s=a(4695),t=a.n(s),i=a(41709),c=a(54480);const l=e=>{const n=i.A.getState().appData,a=i.A.getState().websiteList;(null!==n&&void 0!==n&&n.is_themes_change||null!==n&&void 0!==n&&n.is_backgroun_change||null!==n&&void 0!==n&&n.is_banner_IMG_change||null!==n&&void 0!==n&&n.is_banner_change||null!==n&&void 0!==n&&n.is_card_style_change||null!==n&&void 0!==n&&n.is_theme_setting_change||null!==n&&void 0!==n&&n.is_custome_css_change||null!==n&&void 0!==n&&n.is_magic_upload_change||null!==n&&void 0!==n&&n.is_cta_setting_change||null!==n&&void 0!==n&&n.is_utm_tracker_change||null!==n&&void 0!==n&&n.is_wall_change)&&(null===a||void 0===a?void 0:a.websiteList.length)>0?t().fire({title:"Changes not saved!",icon:"warning",showCancelButton:!0,confirmButtonText:"Save & Continue",cancelButtonText:"Discard"}).then((n=>{"backdrop"!=n.dismiss&&(n.isConfirmed?(i.A.dispatch({type:c.A_O,payload:!0}),i.A.dispatch({type:c.thS,payload:!1}),setTimeout((()=>{e()}),500)):o(e))})):(null===a||void 0===a?void 0:a.websiteList.length)<=0?(i.A.dispatch({type:c.thS,payload:!1}),e()):e()},o=e=>{const n=document.querySelector("#discardSetting");n&&(n.setAttribute("data-nav","nav-click"),n.click()),e()}}}]);