"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[472],{30472:(e,t,s)=>{s.r(t),s.d(t,{default:()=>T});var a=s(9950),n=s(73878),l=s(1391),i=s(42074),o=s(54810),r=s(58423),d=s(88749),c=s(52867),m=s(98361),h=s(45358),p=s(80409),f=s(5216),x=s(97937),u=s(86781),g=s(68459),y=s(66345),N=s(39812),j=s(44414);const b=[{id:1,title:"Homepage Gallery",desc:"Build trust and win faster checkouts with a shoppable UGC Gallery on the home page.",media:"home-gallery"},{id:2,title:"Product Page Gallery",desc:"Establish social proof with real product usage examples on PDPs to inspire & convert.",media:"product-gallery"},{id:3,title:"Category Gallery",desc:"Create and publish category-based UGC galleries to navigate users to products that capture attention.",media:"category-page"}];class w extends a.Component{constructor(){super(...arguments),this.state={addClass:!0}}render(){const{addClass:e}=this.state;return(0,j.jsx)("div",{className:"f-center m-auto add_feed_ flex-column py-2",children:(0,j.jsxs)("div",{className:"f-center flex-column",children:[(0,j.jsxs)("div",{className:"text-center mb-5",children:[(0,j.jsx)("h3",{children:"Let's start with the exact solution you want."}),(0,j.jsx)("p",{children:"Select any one from the below to start now!"})]}),(0,j.jsx)(u.A,{style:{maxWidth:780},children:b.map(((e,t)=>(0,j.jsx)(g.A,{sm:4,className:"mb-2",children:(0,j.jsxs)(f.A,{className:"btn btn-secondary shadow-none p-0 text-start overflow-hidden mb-0",onClick:this.props.galleryFun,children:[(0,j.jsx)("video",{className:"w-100 h-auto d-none d-sm-flex",width:"267",height:"455",poster:(0,o.pc)(`media/video/${e.media}.png`),controls:!1,autoPlay:!0,loop:!0,muted:!0,children:(0,j.jsx)("source",{src:(0,o.pc)(`media/video/${e.media}.mp4`),type:"video/mp4"})}),(0,j.jsxs)(f.A.Body,{style:{minHeight:130},children:[(0,j.jsx)(f.A.Title,{className:"text-dark mb-1",children:e.title}),(0,j.jsx)(f.A.Text,{children:e.desc})]})]})},t)))})]})})}}const v=w;var k=s(51960),C=s(4342);const A=[{id:1,title:"Import from instagram",networkId:18},{id:2,title:"Import from Tiktok",networkId:28},{id:3,title:"Upload from Device",networkId:0}];class _ extends a.Component{constructor(){super(...arguments),this.state={addClass:!0}}render(){const{onNetworkSelect:e}=this.props,{addClass:t}=this.state;return(0,j.jsx)("div",{className:"f-center m-auto add_feed_ flex-column",children:(0,j.jsxs)("div",{className:"f-center flex-column mb-5",children:[(0,j.jsx)("div",{className:"text-center mb-5",children:(0,j.jsx)("h3",{children:"\ud83d\udc4b Get Started with your Content"})}),(0,j.jsx)("div",{className:"w-100",children:(0,j.jsx)(u.A,{className:"f-center flex-wrap",children:A.map(((t,s)=>(0,j.jsx)(g.A,{className:"px-2 mb-4",children:(0,j.jsxs)(x.A,{variant:"secondary",className:"w-100 d-flex flex-column justify-content-center align-items-center py-7",onClick:()=>e(t.networkId),children:[(0,j.jsx)(k.A,{className:"mb-3",src:(0,o.pc)(`media/icons/social-icons/${(0,c.EC)(t.networkId)}.svg`),height:40,width:40,fluid:!0}),(0,j.jsx)(C.A,{bg:"",className:"badge-secondary text-nowrap",children:t.title})]})},s)))})})]})})}}const S=_;var H=s(86530);const U=e=>{let{eventKey:t,cssClass:s,elseValue:a,label:n,stepsCompleted:l}=e;return(0,j.jsx)(m.A.Item,{className:"mx-lg-3",children:(0,j.jsxs)(m.A.Link,{eventKey:t,className:"w-100 f-center fw-medium",children:[(0,j.jsx)("div",{className:`h-24px w-24px rounded-circle me-2 f-center text-gray-100 fs-8 ${s}`,children:l?(0,j.jsx)(o.gc,{icon:"check"}):a}),n]})})},I={18:{filters:[{feedtype:"handle",filter:23,feedName:"Handle(@)",icon:"at"},{feedtype:"hashtag",filter:26,feedName:"Hashtag(#)",icon:"hashtag"}],name:"Instagram",icon:"instagram-business"},28:{filters:[{feedtype:"Hashtag",filter:72,feedName:"# Hashtag",icon:"hashtag"},{feedtype:"Handle",filter:71,feedName:"@ Handle",icon:"at"},{feedtype:"Post Url",filter:70,feedName:"Post Url",icon:"link"}],name:"TikTok",icon:"tiktok"},1:{filters:[{feedtype:"hashtag",filter:2,feedName:"Hashtag(#)",icon:"hashtag"},{feedtype:"handle",filter:1,feedName:"Handle(@)",icon:"at"}],name:"Twitter",icon:"twitter"},3:{filters:[{feedtype:"Page",filter:8,feedName:"Page",icon:"flag"}],name:"Facebook",icon:"facebook"},4:{filters:[{feedtype:"Places",filter:33,feedName:"Places",icon:"globe"}],name:"Google Reviews",icon:"google"},29:{filters:[{feedtype:"Review & Rating",filter:2,feedName:"Review & Rating"}],name:"SnapUp",icon:"onsiteupload"},5:{filters:[{feedtype:"Handle",filter:1,feedName:"Handle(@)",icon:"at"},{feedtype:"User Board",filter:12,feedName:"User Board",icon:"flag"}],name:"Pinterest",icon:"pinterest"},7:{filters:[{feedtype:"Channel Url",filter:1,feedName:"Channel Url",icon:"at"},{feedtype:"Shorts",filter:75,feedName:"Shorts",icon:"at"},{feedtype:"Play List",filter:11,feedName:"Play List",icon:"list"},{feedtype:"Keywords",filter:4,feedName:"Keywords",icon:"font"},{feedtype:"Location",filter:32,feedName:"Location",icon:"globe"}],name:"YouTube",icon:"youtube"},6:{filters:[{feedtype:"Hashtag",filter:2,feedName:"Hashtag(#)",icon:"hashtag"},{feedtype:"Handle",filter:1,feedName:"Handle(@)",icon:"at"}],name:"Flickr",icon:"flickr"},8:{filters:[{feedtype:"Hashtag",filter:2,feedName:"Hashtag(#)",icon:"hashtag"},{feedtype:"Handle",filter:1,feedName:"Handle(@)",icon:"at"}],name:"Vimeo",icon:"vimeo"},23:{filters:[{feedtype:"Listing Url",filter:56,feedName:"Listing Url(#)",icon:"flag"}],name:"Airbnb Reviews",icon:"airbnb"},0:{filters:[{feedtype:"Upload",filter:56,feedName:"Upload",icon:"flag"}],name:"Upload",icon:"manual-upload"}};class P extends a.Component{constructor(){super(...arguments),this.state={addclass:!0,contentObject:null,activeTab:"s_g_t",feedCreated:!1,selectedNetworkId:null,stepsCompleted:[],showVideo:!1,currentStep:1},this.updateData=e=>{const{updateUserInfo:t}=this.props;(0,c.P0)()},this.onSkipSteps=()=>{const{updateUserInfo:e}=this.props;(0,d.zU)({stepstype:"onboardingskip"}).then((t=>{e((()=>{this.props.navigate("/home")}))}))},this.onNetworkSelect=e=>{this.setState({contentObject:I[e],activeTab:"a_c",selectedNetworkId:e,stepsCompleted:[...this.state.stepsCompleted,"chooseNetwork"]},(()=>this.updateData({CHOOSE_NETWORK:e})))},this.onClose=e=>this.setState({showVideo:!this.state.showVideo}),this.handleStep=e=>{this.setState({activeTab:e,contentObject:[],stepsCompleted:[]})},this.galleryFun=()=>{this.setState({activeTab:"c_n"})}}componentDidMount(){const{getNetworks:e}=this.props}render(){const{contentObject:e,selectedNetworkId:t,activeTab:s,stepsCompleted:a,showVideo:n}=this.state;return(0,j.jsx)("div",{className:"d-flex flex-column flex-column-fluid align-items-center justify-content-center w-100 flex-position-center full-content",children:(0,j.jsx)(h.A,{className:"onboard__",fluid:!0,children:(0,j.jsx)(p.A.Container,{defaultActiveKey:"s_g_t",activeKey:s,children:(0,j.jsxs)(f.A,{children:[(0,j.jsxs)(f.A.Header,{className:"pb-0 w-100 align-items-center",children:[(0,j.jsx)("div",{}),(0,j.jsxs)(m.A,{variant:"underline",className:"nav-lg flex-sm-row flex-column ms-sm-10",children:[(0,j.jsx)(U,{eventKey:"s_g_t",cssClass:"bg-primary fw-semibold "+("c_n"==s||"a_c"==s?"bg-primary":"bg-dark"),elseValue:"1",label:"Select Gallery Type",stepsCompleted:"c_n"==s||"a_c"==s}),(0,j.jsx)(U,{eventKey:"c_n",cssClass:"a_c"==s?"bg-primary":"bg-dark",elseValue:"2",label:"Choose network",stepsCompleted:"a_c"==s}),(0,j.jsx)(U,{eventKey:"a_c",cssClass:""==s?"bg-primary":"bg-dark",elseValue:"3",label:"Add Content",stepsCompleted:""==s})]}),(0,j.jsx)(x.A,{size:"sm",variant:"light",className:"d-none d-sm-inline-block",onClick:this.onSkipSteps,children:"Skip"})]}),(0,j.jsx)(f.A.Body,{children:(0,j.jsxs)(p.A.Content,{className:"onboard_tabs_",children:[(0,j.jsx)(p.A.Pane,{eventKey:"s_g_t",children:"s_g_t"==s?(0,j.jsx)(v,{galleryFun:this.galleryFun}):null}),(0,j.jsx)(p.A.Pane,{eventKey:"c_n",children:"c_n"==s?(0,j.jsx)(S,{onNetworkSelect:this.onNetworkSelect}):null}),(0,j.jsx)(p.A.Pane,{eventKey:"a_c",children:"a_c"==s&&e?(0,j.jsx)(H.A,{contentObject:e,selectedNetworkId:t,updateData:this.updateData,handleStep:this.handleStep,onNext:()=>this.setState({stepsCompleted:[...a,"addContent"]},(()=>setTimeout((()=>{this.props.navigate("/home")}),1e3)))}):null})]})}),(0,j.jsx)(f.A.Footer,{className:"border-0 bg-gray-100",children:(0,j.jsx)(h.A,{fluid:"sm",children:(0,j.jsx)(u.A,{className:"justify-content-center",children:(0,j.jsxs)(g.A,{lg:8,className:"f-center justify-content-between",children:[(0,j.jsx)("div",{children:(0,j.jsx)(x.A,{variant:"link",className:"d-inline-block d-sm-none py-2",onClick:this.onSkipSteps,children:"Skip"})}),(0,j.jsxs)("div",{className:"f-between flex-sm-grow-1",children:[(0,j.jsx)("span",{className:"me-5 d-sm-flex d-none",children:"In case of any query reach out to us at support@tagshop.ai or Talk to expert"}),(0,j.jsxs)("div",{className:"d-flex flex-nowrap",children:[(0,j.jsxs)(i.N_,{className:"btn btn-outline-primary text-nowrap",to:y.Sx3,target:"_blank",children:[(0,j.jsx)(o.gc,{icon:"phone",iconClass:"me-1"}),"Demo Call"]}),(0,j.jsxs)(x.A,{variant:"outline-primary text-nowrap",className:"ms-3",onClick:()=>{this.setState({showVideo:!0})},children:[(0,j.jsx)(o.gc,{icon:"circle-play",iconClass:"me-1"}),"Watch Video"]})]})]})]})})})}),(0,j.jsx)(N.A,{show:n,link:"https://player.vimeo.com/video/912907290?h=f28a39da95",onClose:this.onClose})]})})})})}}const T=(0,n.Ng)((e=>{var t,s;return{stepData:null===(t=e.dashboardData)||void 0===t||null===(s=t.dashboarddata)||void 0===s?void 0:s.extra_data}}),(e=>({getNetworks:t=>e((0,r.Ux)(t)),getModeration:()=>e((0,r.zI)()),updateUserInfo:t=>e((0,d.AW)(t))})))((0,l.A)(P))}}]);