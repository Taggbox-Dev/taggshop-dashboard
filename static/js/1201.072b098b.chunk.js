"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[1201],{39812:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(44268),n=t(44414);const c=e=>(0,n.jsxs)(a.A,{size:"xl",className:"video_modal rounded-0",show:e.show,onHide:e.onClose,centered:!0,children:[(0,n.jsx)(a.A.Header,{className:"btn-close-light",closeButton:!0}),(0,n.jsx)(a.A.Body,{className:"p-0",children:(0,n.jsx)("div",{className:"position-relative",style:{paddingBottom:"55%"},children:(0,n.jsx)("div",{className:"position-absolute start-1 top-0 video_play w-100 h-100",children:(0,n.jsx)("iframe",{className:"w-100 h-100",src:e.link,width:"640",height:"355",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0})})})})]})},79372:(e,s,t)=>{t.r(s),t.d(s,{default:()=>S});var a=t(9950),n=t(45358),c=t(80409),r=t(5216),o=t(98361),l=t(97937),i=t(42074),d=t(8966),m=t(65513),p=t(54810),x=t(44414);function h(e){const{stepsLeft:s,markComplete:t,stepData:a}=e;return(0,x.jsx)(d.A,{defaultActiveKey:"0",children:(0,x.jsxs)(d.A.Item,{eventKey:"0",children:[(0,x.jsxs)(d.A.Header,{children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between w-100 flex-wrap",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center text-nowrap me-10",children:[(0,x.jsx)("span",{className:"text-primary",children:(0,x.jsx)(p.gc,{icon:"rectangle-vertical-history",iconClass:"me-2 display-5"})}),"Create Your Gallery"]}),s("gallery")?(0,x.jsxs)("p",{className:"text-gray-600 mb-0 f-center text-nowrap",children:[(0,x.jsx)("span",{className:"fw-bold me-1",children:"".concat(s("gallery")," Step Left")}),".",(0,x.jsx)("span",{className:"ms-1",children:"About 4 min."})]}):null]}),(0,x.jsx)(m.A,{className:"position-absolute bottom-0 start-0 w-100 rounded-0 h-2px",variant:"success",now:33.3*(3-s("gallery")),label:"".concat(33.3*(3-s("gallery")),"%"),visuallyHidden:!0})]}),(0,x.jsxs)(d.A.Body,{children:[(0,x.jsxs)("div",{className:"f-between mb-5 flex-wrap flex-sm-nowrap",children:[(0,x.jsx)("p",{className:"my-2 text-muted text-medium",children:"Connect your social account to source content from multiple platforms, curate your feed and make it shoppable."}),s("gallery")?(0,x.jsxs)(l.A,{variant:"secondary",size:"sm",className:"text-nowrap f-center",onClick:()=>t("gallery"),children:[(0,x.jsx)(p.gc,{icon:"circle-check",iconClass:"me-1"}),"Mark as Complete"]}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsxs)("div",{className:"d-flex flex-column",children:[(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 text-muted ".concat(a.FEED_CREATED?"border-primary":""),to:"/content/moderation/".concat(localStorage.getItem("wallId")?localStorage.getItem("wallId"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.FEED_CREATED?"border-success":""),children:(0,x.jsx)("span",{className:a.FEED_CREATED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-hashtag fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 fw-medium",children:"Connect any social media platform and connection type (#, @, etc) to source content in your gallery created by default."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 text-muted ".concat(a.PRODUCT_ADDED?"border-primary":""),to:"/content/products",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.PRODUCT_ADDED?"border-success":""),children:(0,x.jsx)("span",{className:a.PRODUCT_ADDED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-arrows-rotate fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 fw-medium",children:"Tag Products either manually or by syncing the Product catalogue to make them shoppable."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 text-muted ".concat(a.APPS_MORE_USED?"border-primary":""),to:"/more-apps",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.APPS_MORE_USED?"border-success":""),children:(0,x.jsx)("span",{className:a.APPS_MORE_USED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-square-user fs-2"})})}),(0,x.jsx)("p",{className:"mb-0  fw-medium",children:"To update your gallery with features like Auto-Moderation, Profanity Filter, etc., go to \u2018Apps & More\u2019 from the dropdown."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]})]})]})]})})}class u extends a.Component{constructor(){super(...arguments),this.state={activeTab:"0"},this.checkActiveTab=e=>{let s=e.WEBSITE_VISITED&&e.FEED_CUSTOMIZED&&e.CUSTOMIZATION_SAVED?e.EMAIL_VISITED&&e.EMAIL_PUBLISHED&&e.EMAIL_PLATFORM_SELECTED?e.SHOPON_VISITED&&e.SHOPON_BIO_ADDED?"-1":"2":"1":"0";"-1"==s&&this.props.markComplete("shopon"),this.setState({activeTab:s})}}componentWillReceiveProps(e){JSON.stringify(this.props.stepData)!=JSON.stringify(e.stepData)&&this.checkActiveTab(e.stepData)}componentWillMount(){this.checkActiveTab(this.props.stepData)}render(){const{activeTab:e}=this.state,{stepsLeft:s,markComplete:t,stepData:a,checkPublishStep:n}=this.props;return(0,x.jsxs)(d.A,{activeKey:e,onSelect:e=>this.setState({activeTab:e}),children:[(0,x.jsxs)(d.A.Item,{eventKey:"0",children:[(0,x.jsxs)(d.A.Header,{className:"overflow-hidden",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between w-100 flex-wrap",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center text-nowrap me-10",children:[(0,x.jsx)("span",{className:"text-primary",children:(0,x.jsx)(p.gc,{type:"light",icon:"browser",iconClass:"me-2 display-5"})}),"Website"]}),s("website")?(0,x.jsxs)("p",{className:"text-gray-600 mb-0 f-center text-nowrap",children:[(0,x.jsx)("span",{className:"fw-bold me-1",children:"".concat(s("website")," Step Left")}),".",(0,x.jsx)("span",{className:"ms-1",children:"About 4 min."})]}):null]}),(0,x.jsx)(m.A,{className:"position-absolute bottom-0 start-0 w-100 rounded-0 h-2px",variant:"success",now:33.3*(3-s("website")),label:"".concat(33.3*(3-s("website")),"%"),visuallyHidden:!0})]}),(0,x.jsxs)(d.A.Body,{children:[(0,x.jsxs)("div",{className:"f-between mb-5 flex-wrap flex-sm-nowrap",children:[(0,x.jsx)("p",{className:"my-2 text-muted text-medium",children:"Customize, preview and publish your shoppable gallery across your eCommerce store: Home page, product and category pages or review page."}),s("website")?(0,x.jsxs)(l.A,{variant:"secondary",size:"sm",className:"text-nowrap",onClick:()=>t("website"),children:[(0,x.jsx)(p.gc,{icon:"check-circle",iconClass:"me-1"}),"Mark as Complete"]}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsxs)("div",{className:"d-flex flex-column",children:[(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 text-muted w-100 mb-3 ".concat(a.WEBSITE_VISITED?"border-primary":""),to:"/website/publish".concat(localStorage.getItem("website_id")?"/".concat(localStorage.getItem("website_id")):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.WEBSITE_VISITED?"border-success":""),children:(0,x.jsx)("span",{className:a.WEBSITE_VISITED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-image fs-2"})})}),(0,x.jsx)("p",{className:"mb-0  fw-medium",children:"Choose the gallery to display on your eCommerce website"})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 text-muted w-100 mb-3 ".concat(a.FEED_CUSTOMIZED?"border-primary":""),to:"/website/publish/".concat(localStorage.getItem("website_id")),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.FEED_CUSTOMIZED?"border-success":""),children:(0,x.jsx)("span",{className:a.FEED_CUSTOMIZED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-browser fs-2"})})}),(0,x.jsx)("p",{className:"mb-0  fw-medium",children:"Next, customize your gallery by applying themes, and CTA buttons."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 text-muted w-100 mb-3 ".concat(a.CUSTOMIZATION_SAVED?"border-primary":""),to:"".concat(a.WEBSITE_VISITED&&a.FEED_CUSTOMIZED?"/website/publish/".concat(localStorage.getItem("website_id")):""),onClick:()=>{n("website")},children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.CUSTOMIZATION_SAVED?"border-success":""),children:(0,x.jsx)("span",{className:a.CUSTOMIZATION_SAVED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-rocket-launch fs-2"})})}),(0,x.jsx)("p",{className:"mb-0  fw-medium",children:"Save changes and click on \u2018Generate Code.\u2019 Choose where you want to display the gallery."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]})]})]})]}),(0,x.jsxs)(d.A.Item,{eventKey:"1",children:[(0,x.jsxs)(d.A.Header,{className:"overflow-hidden",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between w-100 flex-wrap",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center text-nowrap me-10",children:[(0,x.jsx)("span",{className:"text-primary",children:(0,x.jsx)(p.gc,{type:"light",icon:"bullhorn",iconClass:"me-2 display-5"})}),"Email Campaigns"]}),s("email")?(0,x.jsxs)("p",{className:"text-gray-600 mb-0 f-center text-nowrap",children:[(0,x.jsx)("span",{className:"fw-bold me-1",children:"".concat(s("email")," Step Left")}),".",(0,x.jsx)("span",{className:"ms-1",children:"About 4 min."})]}):null]}),(0,x.jsx)(m.A,{className:"position-absolute bottom-0 start-0 w-100 rounded-0 h-2px",variant:"success",now:33.3*(3-s("email")),label:"".concat(33.3*(3-s("email")),"%"),visuallyHidden:!0})]}),(0,x.jsxs)(d.A.Body,{children:[(0,x.jsxs)("div",{className:"f-between mb-5 flex-wrap flex-sm-nowrap",children:[(0,x.jsx)("p",{className:"my-2 text-muted text-medium",children:"From customization to publishing, host email campaigns in a few simple steps."}),s("email")?(0,x.jsxs)(l.A,{variant:"secondary",size:"sm",disabled:!!s("website"),className:"text-nowrap",onClick:()=>t("email"),children:[(0,x.jsx)(p.gc,{icon:"circle-check",iconClass:"me-1"}),"Mark as Complete"]}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsxs)("div",{className:"d-flex flex-column",children:[(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 text-muted w-100 mb-3 ".concat(a.EMAIL_VISITED?"border-primary":""),to:"/email-campaign/publish/".concat(localStorage.getItem("emailCamp_id")?localStorage.getItem("emailCamp_id"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.EMAIL_VISITED?"border-success":""),children:(0,x.jsx)("span",{className:a.EMAIL_VISITED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-image fs-2"})})}),(0,x.jsx)("p",{className:"mb-0  fw-medium",children:"Select the content gallery you want to showcase in your emails."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 text-muted w-100 mb-3 ".concat(a.EMAIL_PUBLISHED?"border-primary":""),to:"/email-campaign/publish/".concat(localStorage.getItem("emailCamp_id")?localStorage.getItem("emailCamp_id"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.EMAIL_PUBLISHED?"border-success":""),children:(0,x.jsx)("span",{className:a.EMAIL_PUBLISHED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-rocket-launch fs-2"})})}),(0,x.jsxs)("p",{className:"mb-0  fw-medium",children:["Choose a layout for your emails campaign ",">",' select the content you want to display and "Publish."']})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 text-muted w-100 mb-3 ".concat(a.EMAIL_PLATFORM_SELECTED?"border-primary":""),to:"".concat(a.EMAIL_VISITED&&a.EMAIL_PUBLISHED?"/email-campaign/publish/".concat(localStorage.getItem("emailCamp_id")?localStorage.getItem("emailCamp_id"):""):""),onClick:()=>n("email"),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.EMAIL_PLATFORM_SELECTED?"border-success":""),children:(0,x.jsx)("span",{className:a.EMAIL_PLATFORM_SELECTED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-envelope fs-2"})})}),(0,x.jsx)("p",{className:"mb-0  fw-medium",children:"Now, select your preferred email marketing platform and follow the steps provided."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]})]})]})]}),(0,x.jsxs)(d.A.Item,{eventKey:"2",children:[(0,x.jsxs)(d.A.Header,{className:"overflow-hidden",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between w-100 flex-wrap",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center text-nowrap me-10",children:[(0,x.jsx)("span",{className:"text-primary",children:(0,x.jsx)(p.gc,{type:"light",icon:"link",iconClass:"me-2 display-5"})}),"Shopon.Bio"]}),s("shopon")?(0,x.jsxs)("p",{className:"text-gray-600 mb-0 f-center text-nowrap",children:[(0,x.jsx)("span",{className:"fw-bold me-1",children:"".concat(s("shopon")," Step Left")}),".",(0,x.jsx)("span",{className:"ms-1",children:"About 4 min."})]}):null]}),(0,x.jsx)(m.A,{className:"position-absolute bottom-0 start-0 w-100 rounded-0 h-2px",variant:"success",now:33.3*(3-s("shopon")),label:"".concat(33.3*(3-s("shopon")),"%"),visuallyHidden:!0})]}),(0,x.jsxs)(d.A.Body,{children:[(0,x.jsxs)("div",{className:"f-between mb-5 flex-wrap flex-sm-nowrap",children:[(0,x.jsx)("p",{className:"my-2 text-muted text-medium",children:"Customize, preview and publish your shoppable gallery across your eCommerce store: Home page, product and category pages or review page."}),s("shopon")?(0,x.jsxs)(l.A,{variant:"secondary",size:"sm",className:"text-nowrap",onClick:()=>t("shopon"),disabled:!(!s("website")&&!s("email")),children:[(0,x.jsx)(p.gc,{icon:"circle-check",iconClass:"me-1"}),"Mark as Complete"]}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsxs)("div",{className:"d-flex flex-column",children:[(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 text-muted w-100 mb-3 ".concat(a.SHOPON_VISITED?"border-primary":""),to:"/shopon-bio/preview/".concat(localStorage.getItem("shopOn_id")?localStorage.getItem("shopOn_id"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.SHOPON_VISITED?"border-success":""),children:(0,x.jsx)("span",{className:a.SHOPON_VISITED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-image fs-2"})})}),(0,x.jsx)("p",{className:"mb-0  fw-medium",children:"Select the content gallery you want to collect content from."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 text-muted w-100 mb-3 ".concat(a.SHOPON_BIO_ADDED?"border-primary":""),to:"/shopon-bio/preview/".concat(localStorage.getItem("shopOn_id")?localStorage.getItem("shopOn_id"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.SHOPON_BIO_ADDED?"border-success":""),children:(0,x.jsx)("span",{className:a.SHOPON_BIO_ADDED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-memo-circle-info fs-2"})})}),(0,x.jsx)("p",{className:"mb-0  fw-medium",children:"Name your shop, add a small business description, and choose a unique username for your\xa0 Shopon Bio."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 text-muted w-100 mb-3 ".concat(a.SHOPON_BIO_ADDED&&a.SHOPON_VISITED?"border-primary":""),to:"".concat(a.SHOPON_BIO_ADDED&&a.SHOPON_VISITED?"/shopon-bio/preview/".concat(localStorage.getItem("shopOn_id")?localStorage.getItem("shopOn_id"):""):""),onClick:()=>n("shopon"),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(a.SHOPON_BIO_ADDED&&a.SHOPON_VISITED?"border-success":""),children:(0,x.jsx)("span",{className:a.SHOPON_BIO_ADDED&&a.SHOPON_VISITED?"text-success":"text-muted",children:(0,x.jsx)("i",{className:"fa-duotone fa-solid fa-copy fs-2"})})}),(0,x.jsx)("p",{className:"mb-0  fw-medium",children:"Copy the link, and voila! You can now add this shoppable link to your Instagram or TikTok bio."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]})]})]})]})]})}}var f=t(66345),b=t(73878),N=t(51362),j=t(52867),w=t(39812),g=t(1391);class y extends a.Component{constructor(){super(...arguments),this.state={showVideo:!1,activeTab:"",accordionTab:"0"},this.stepsLeft=e=>{const{stepData:s}=this.state;switch(e){case"gallery":var t=3;return s.FEED_CREATED&&(t-=1),s.PRODUCT_ADDED&&(t-=1),s.APPS_MORE_USED&&(t-=1),t;case"website":t=3;return s.WEBSITE_VISITED&&(t-=1),s.FEED_CUSTOMIZED&&(t-=1),s.CUSTOMIZATION_SAVED&&(t-=1),t;case"email":t=3;return s.EMAIL_VISITED&&(t-=1),s.EMAIL_PUBLISHED&&(t-=1),s.EMAIL_PLATFORM_SELECTED&&(t-=1),t;case"shopon":t=3;return s.SHOPON_VISITED&&(t-=1),s.SHOPON_BIO_ADDED&&(t-=1),s.SHOPON_LINK_COPIED&&(t-=1),t}},this.markComplete=e=>{switch(e){case"gallery":this.skipSteps({stepstype:"gallery"});break;case"website":this.skipSteps({stepstype:"website"});break;case"email":this.skipSteps({stepstype:"emailcampaigns"});break;case"shopon":this.skipSteps({stepstype:"shoponbio"})}},this.skipSteps=e=>{(0,N.zU)(e).then((e=>this.props.updateUserInfo((()=>{this.props.navigate("/home")}))))},this.checkPublishStep=e=>{const{stepData:s}=this.state;"website"==e&&(null!==s&&void 0!==s&&s.WEBSITE_VISITED&&null!==s&&void 0!==s&&s.FEED_CUSTOMIZED||(0,j.PZ)("To proceed, complete the second step")),"email"==e&&(null!==s&&void 0!==s&&s.EMAIL_VISITED&&null!==s&&void 0!==s&&s.EMAIL_PUBLISHED||(0,j.PZ)("To proceed, complete the second step")),"shopon"==e&&(null!==s&&void 0!==s&&s.SHOPON_VISITED&&null!==s&&void 0!==s&&s.SHOPON_BIO_ADDED||(0,j.PZ)("To proceed, complete the second step"))},this.updateExtraData=(e,s)=>{s&&("gallery"==s?this.setState({activeTab:"publish"}):this.props.navigate("/home"))},this.onClose=e=>this.setState({showVideo:!this.state.showVideo}),this.handleAccordion=e=>this.setState({accordionTab:e})}componentDidMount(){const{stepData:e}=this.props;e&&this.setState({stepData:e},(()=>this.setState({activeTab:0==this.stepsLeft("gallery")?"publish":"connect"})))}componentWillReceiveProps(e){const{stepData:s}=e;this.props.stepData!=s&&this.setState({stepData:s},(()=>this.setState({activeTab:0==this.stepsLeft("gallery")?"publish":"connect"})))}render(){const{showVideo:e,stepData:s,activeTab:t,accordionTab:a}=this.state;return(0,x.jsx)("div",{className:"d-flex flex-column flex-column-fluid align-items-center justify-content-center w-100 flex-position-center full-content",children:s?(0,x.jsxs)(n.A,{className:"onboard_step",children:[(0,x.jsxs)("div",{className:"mb-4 text-center",children:[(0,x.jsx)("h3",{children:"Gettings Started with first Shoppable Gallery"}),(0,x.jsx)("p",{children:"Complete these simple steps to get  your account up and running."})]}),(0,x.jsx)(c.A.Container,{defaultActiveKey:0!=this.stepsLeft("gallery")?"connect":"publish",activeKey:t,onSelect:e=>this.setState({activeTab:e}),children:(0,x.jsxs)(r.A,{className:"border-0 overflow-hidden",children:[(0,x.jsxs)(o.A,{variant:"tabs",className:"mb-4 d-flex",children:[(0,x.jsx)(o.A.Item,{className:"w-50",children:(0,x.jsxs)(o.A.Link,{className:"f-center fw-bold border-0 border-end",style:{borderTopRightRadius:0},eventKey:"connect",children:[(0,x.jsx)("div",{className:"f-center rounded-circle w-22px h-22px border me-2 fs-9",children:"1"}),"Connect"]})}),(0,x.jsx)(o.A.Item,{className:"w-50",children:(0,x.jsxs)(o.A.Link,{className:"f-center fw-bold border-0",style:{borderTopLeftRadius:0},eventKey:"publish",children:[(0,x.jsx)("div",{className:"f-center rounded-circle w-22px h-22px border me-2 fs-9",children:"2"}),"Publish"]})})]}),(0,x.jsx)(r.A.Body,{children:(0,x.jsxs)(c.A.Content,{children:[(0,x.jsx)(c.A.Pane,{eventKey:"connect",children:(0,x.jsx)(h,{stepsLeft:this.stepsLeft,markComplete:this.markComplete,stepData:s})}),(0,x.jsx)(c.A.Pane,{eventKey:"publish",children:(0,x.jsx)(u,{stepsLeft:this.stepsLeft,markComplete:this.markComplete,stepData:s,checkPublishStep:this.checkPublishStep,handleAccordion:this.handleAccordion,accordionTab:a})})]})}),(0,x.jsx)(r.A.Footer,{className:"border-0",children:(0,x.jsxs)("div",{className:"f-center justify-content-between flex-column flex-lg-row",children:[(0,x.jsx)("p",{className:"my-3 text-muted text-center text-lg-start",children:"If you have any questions then you can schedule a demo with our experts or explore the support center to get the step by step guide for Tagshop"}),(0,x.jsxs)("div",{className:"flex-nowrap d-flex flex-shrink-0 ms-lg-3",children:[(0,x.jsx)(l.A,{variant:"primary",onClick:()=>this.setState({showVideo:!0}),children:"Example Gallery"}),(0,x.jsx)(i.N_,{className:"btn btn-outline-primary ms-3",to:f.Sx3,target:"_blank",children:"Book A Demo"})]})]})})]})}),(0,x.jsx)(w.A,{show:e,link:"https://player.vimeo.com/video/977782960",onClose:this.onClose})]}):null})}}const S=(0,b.Ng)((e=>{var s,t;return{stepData:null===(s=e.dashboardData)||void 0===s||null===(t=s.dashboarddata)||void 0===t?void 0:t.extra_data}}),(e=>({updateUserInfo:s=>e((0,N.AW)(s)),onSkipSteps:s=>e((0,N.zU)(s))})))((0,g.A)(y))},19272:(e,s,t)=>{t.d(s,{A:()=>n});var a=t(9950);function n(){const[,e]=(0,a.useReducer)((e=>!e),!1);return e}},50599:(e,s,t)=>{t.d(s,{A:()=>n});const a=t(9950).createContext(null);a.displayName="NavContext";const n=a},1932:(e,s,t)=>{t.d(s,{A:()=>c,u:()=>n});var a=t(9950);const n=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):s||null},c=a.createContext(null)},56643:(e,s,t)=>{t.d(s,{iC:()=>n});var a=t(9950);function n(e,s,t){const n=(0,a.useRef)(void 0!==e),[c,r]=(0,a.useState)(s),o=void 0!==e,l=n.current;return n.current=o,!o&&l&&c!==s&&r(s),[o?e:c,(0,a.useCallback)((function(){for(var e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];const[n,...c]=s;let o=null==t?void 0:t(n,...c);return r(n),o}),[t])]}},34296:(e,s,t)=>{t.d(s,{A:()=>n});const a=t(9950).createContext(null);a.displayName="NavbarContext";const n=a},17743:(e,s,t)=>{t.d(s,{Cc:()=>d});var a=t(9950);const n={prefix:String(Math.round(1e10*Math.random())),current:0},c=a.createContext(n),r=a.createContext(!1);let o=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),l=new WeakMap;function i(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=(0,a.useContext)(c),t=(0,a.useRef)(null);if(null===t.current&&!e){var n,r;let e=null===(r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===r||null===(n=r.ReactCurrentOwner)||void 0===n?void 0:n.current;if(e){let t=l.get(e);null==t?l.set(e,{id:s.current,state:e.memoizedState}):e.memoizedState!==t.state&&(s.current=t.id,l.delete(e))}t.current=++s.current}return t.current}const d="function"===typeof a.useId?function(e){let s=a.useId(),[t]=(0,a.useState)("function"===typeof a.useSyncExternalStore?a.useSyncExternalStore(x,m,p):(0,a.useContext)(r)),c=t?"react-aria":"react-aria".concat(n.prefix);return e||"".concat(c,"-").concat(s)}:function(e){let s=(0,a.useContext)(c);s!==n||o||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let t=i(!!e),r="react-aria".concat(s.prefix);return e||"".concat(r,"-").concat(t)};function m(){return!1}function p(){return!0}function x(e){return()=>{}}}}]);