"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[9720],{26806:(e,t,s)=>{s.d(t,{A:()=>c});var n=s(51960),a=s(97937),l=s(54810),i=s(44414);const c=e=>{let{title:t,desc:s,button:c,icon:o,isFullScreen:d}=e;const r=d?86:66;return(0,i.jsx)("div",{className:"mx-auto f-center w-100",children:(0,i.jsx)("div",{className:"py-5 text-center w-100 justify-content-center",children:(0,i.jsxs)("div",{className:"mx-auto px-4",style:{maxWidth:520},children:[o?(0,i.jsx)(n.A,{className:"mb-4",src:(0,l.pc)("media/icons/color-icons/".concat(o,".svg")),height:r,width:r,alt:"",fluid:!0}):null,t?(0,i.jsx)("h2",{className:"text-center h3",children:t}):null,s?(0,i.jsx)("p",{className:"fs-8 text-muted fw-medium",children:s}):null,c?(0,i.jsx)(a.A,{onClick:()=>c.action(),size:d?"lg":"md",className:"my-3",children:c.text}):null]})})})}},49720:(e,t,s)=>{s.r(t),s.d(t,{default:()=>F});var n=s(9950),a=s(73878),l=s(45358),i=s(5216),c=s(97937),o=s(1093),d=s(64323),r=s(21432),h=s(95942),m=s(34483),u=s(17595),x=s(36431),p=s(42074),g=(s(30615),s(52867)),f=s(44414);n.Component;var j=s(25984),A=s(54810);class w extends n.Component{constructor(e){super(e),this.getConnectAccount=()=>{const{accountList:e,connectedAccount:t}=this.props.feed,s=e.length>0?e.filter((e=>e.id===t)):[];return s.length>0?s[0]:e.length>0?e[0]:{}},this.onModerationSwitch=e=>{const{feed:t,changeStatus:s}=this.props;s(t.id,Number(e),"moderation"),this.setState({moderation:Number(e)})},this.onFeedStatusSwitch=e=>{const{feed:t,changeStatus:s}=this.props;s(t.id,Number(e),"status"),this.setState({status:Number(e)})},this.connectAccount=(e,t)=>{const s={id:e.networkId,name:e.networkName.toLowerCase()};localStorage.setItem("feedId",e.id),t&&localStorage.setItem("refresh",!0),localStorage.setItem("connectionType","manageFeed"),(0,g.go)(s,t,!0)},this.state={moderation:this.props.feed.moderation,status:this.props.feed.status,connectedAccount:this.getConnectAccount()}}componentDidMount(){const{feed:e}=this.props;this.setState({status:e.status,moderation:e.moderation})}componentDidUpdate(e){e.accountChanged!=this.props.accountChanged&&this.setState({connectedAccount:this.getConnectAccount()})}render(){const{feed:e,onFeedDelete:t,changeAccount:s}=this.props,{status:n,moderation:a,connectedAccount:l}=this.state,{filterId:i,networkId:o,accountList:d,isBtntext:w}=e;return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"d-flex align-items-center",children:[(0,f.jsx)("span",{className:"h-34px w-34px me-2 d-flex flex-shrink-0",children:(0,f.jsx)("img",{className:"img-fluid h-100",src:(0,A.pc)("media/icons/social-icons-square/".concat((0,g.EC)(e.networkId),".svg")),height:43,width:43,alt:""})}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("p",{className:"text-gray-800 mb-0 d-flex fw-semibold",children:[(0,j.Ay)(e.name)," ",e.socialLink?(0,f.jsx)(r.A,{placement:"top",overlay:(0,f.jsx)(h.A,{children:e.tooltip}),children:(0,f.jsx)(p.N_,{className:"ms-2 text-muted",to:8!==e.networkId?e.socialLink:"https://vimeo.com/user".concat(e.accountId),target:"_blank",children:(0,f.jsx)(A.gc,{icon:"arrow-up-right-from-square"})})}):null]}),(0,f.jsx)("small",{className:"mb-0 text-gray-600",children:e.networkName})]})]})}),(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"d-flex align-items-center",children:[[1,2,3,4,5,8,65,67,26].includes(i)&&2!=o&&d&&d.length>0?(0,f.jsxs)(m.A,{style:{minWidth:220},children:[(0,f.jsxs)(m.A.Toggle,{variant:"secondary",size:"sm",className:"d-flex align-items-center w-100 justify-content-between bg-white",children:[(0,f.jsxs)("div",{className:"d-flex align-items-center flex-grow-1",children:[(0,f.jsx)(x.A,{className:"symbol symbol-26 symbol-circle bg-light flex-shrink-0 me-2",imageSize:26,symbolClass:"symbol-label text-light-alt fw-bold text-uppercase fs-8",name:l.accountName,profileUrl:l.profilePicture,networkId:o}),(0,f.jsx)("div",{className:"overflow-hidden",style:{maxWidth:130},children:(0,f.jsx)("p",{className:"text-gray-800 fw-medium mb-0 text-ellipsis fs-9",children:l.accountName})})]}),"Reconnect"==w||"Connect"==w?(0,f.jsx)(r.A,{overlay:(0,f.jsx)(h.A,{children:"Feed disconnected as the social media account's user name got changed since your last connection with Tagbox. Kindly click on the button below to connect."}),children:(0,f.jsx)("span",{className:"me-1 fs-5 text-danger h-14px w-14px",children:(0,f.jsx)(A.gc,{icon:"circle-info"})})}):null]}),(0,f.jsx)(m.A.Menu,{className:"w-100",children:d.map((t=>{const{id:n,profilePicture:a,accountName:l}=t;return(0,f.jsx)(m.A.Item,{onClick:()=>s(n,e.id),children:(0,f.jsxs)("div",{className:"d-flex align-items-center",children:[(0,f.jsx)(x.A,{className:"symbol symbol-26 symbol-circle bg-light flex-shrink-0 me-2",imageSize:26,symbolClass:"symbol-label text-light-alt fw-bold text-uppercase fs-8",name:l,profileUrl:a,networkId:o}),(0,f.jsx)("div",{className:"overflow-hidden",style:{maxWidth:130},children:(0,f.jsx)("p",{className:"text-gray-800 fw-medium mb-0 text-ellipsis fs-9",children:l})})]})},n)}))})]}):"--",(0,f.jsxs)("div",{className:"d-flex ms-3",children:["Reconnect"==w?(0,f.jsx)(r.A,{placement:"top",overlay:(0,f.jsx)(h.A,{children:"Reconnect"}),children:(0,f.jsx)(c.A,{variant:"icon",size:"sm",className:"btn-active-primary",onClick:()=>this.connectAccount(e,!0),children:(0,f.jsx)(A.gc,{type:"solid",icon:"rotate"})})}):"","Connect"==w?(0,f.jsx)(r.A,{placement:"top",overlay:(0,f.jsx)(h.A,{children:"Connect"}),children:(0,f.jsx)(c.A,{variant:"icon",size:"sm",className:"btn-active-primary",onClick:()=>this.connectAccount(e,!1),children:(0,f.jsx)(A.gc,{type:"solid",icon:"rotate"})})}):""]})]})}),(0,f.jsxs)("td",{children:[(0,f.jsx)("p",{className:"fs-7 text-gray-800 fw-semibold mb-0","data-id":"post",children:e.postCount?e.postCount:0}),(0,f.jsxs)("span",{className:"fs-8 text-gray-600",children:["Approved ",e.postCount>1?"Posts":"Post"]})]}),(0,f.jsx)("td",{children:(0,f.jsx)(u.A.Check,{type:"switch",checked:a,"data-id":"moderation",onChange:()=>this.onModerationSwitch(!a)})}),(0,f.jsx)("td",{children:(0,f.jsx)(u.A.Check,{type:"switch",checked:n,"data-id":"status",onChange:()=>this.onFeedStatusSwitch(!n)})}),(0,f.jsx)("td",{className:"pr-0 text-end",children:(0,f.jsx)("div",{className:"d-flex align-items-center justify-content-end",onClick:()=>t(e.id,e.networkId),children:(0,f.jsx)(r.A,{placement:"top",overlay:(0,f.jsx)(h.A,{children:"Delete"}),children:(0,f.jsx)(c.A,{variant:"icon",size:"sm","data-id":"delete",className:"btn-active-primary",children:(0,f.jsx)(A.gc,{type:"solid",icon:"trash-can"})})})})})]})}}const N=(0,a.Ng)(null,(e=>({GET_FEEDS:()=>e((0,d.LF)())})))(w);var v=s(18633),y=s(4695),b=s.n(y),C=s(9697),S=s(14919),E=s(1391),I=s(26806),P=s(54480),k=s(91615);const T=new BroadcastChannel("connect");class D extends n.Component{constructor(){super(...arguments),this.controller=new AbortController,this.state={currentPage:1,showPost:30,totalPage:1,allFeeds:[],currentPageFeeds:null,accountChanged:!1},this.changeTotalPost=e=>{this.setState({showPost:parseInt(e.target.value),currentPage:1},(()=>this.countAllPage()))},this.nextPrev=e=>{this.setState({currentPage:e},(()=>this.countAllPage()))},this.countAllPage=()=>{const{manageFeeds:e}=this.props,t=null===e||void 0===e?void 0:e.feeds;this.setState({allFeeds:t,totalPage:Math.ceil((t&&t.length>0?t.length:0)/this.state.showPost)})},this.changeStatus=(e,t,s)=>{this.props.ACTION_FEED_STATUS(e,t,s,this.onSuccessUpdateRedux)},this.changeAccount=(e,t)=>{this.props.ACTION_UPDATE_SOCIAL_ACCOUNT(e,t,this.onSuccessUpdateRedux)},this.onSuccessUpdateRedux=e=>{this.props.getModeration(),this.countAllPage(),"account"==e&&this.setState({accountChanged:!this.state.accountChanged})},this.onFeedDelete=(e,t)=>{b().fire({icon:"warning",title:"Are you sure?",showCloseButton:!0,showCancelButton:!0,focusConfirm:!0,confirmButtonText:"Yes",confirmButtonAriaLabel:"Yes",cancelButtonText:"No",cancelButtonAriaLabel:"Thumbs down"}).then((s=>{s.value&&this.props.ACTION_DELETE_FEED(e,this.onDeleteUpdateRedux(t))}))},this.onDeleteUpdateRedux=e=>{this.props.getModeration(),this.countAllPage(),29==e&&this.props.SNAPUP_DETAILS_ACTION()},this.handleMessage=async e=>{try{const{GET_FEEDS:t}=this.props,s=JSON.parse(e.data),{code:n}=s,a=localStorage.getItem("networkId"),l=localStorage.getItem("connectionType");(e.origin.includes("tagshop.ai")||e.origin.includes("localhost"))&&"manageFeed"==l&&n&&await(0,C.CJ)(parseInt(a),n,t)}catch(t){}},this.getPagination=()=>{const{currentPage:e,totalPage:t}=this.state,s=[];if(t<=5)for(let n=1;n<=t;n++)s.push(n);else e<=3?s.push(1,2,3,4,"...",t):e>t-3?s.push(1,"...",t-3,t-2,t-1,t):s.push(1,"...",e-1,e,e+1,"...",t);return s}}componentDidMount(){window.addEventListener("message",this.handleMessage,{signal:this.controller.signal}),T.addEventListener("message",this.handleMessage),this.props.GET_FEEDS(),this.countAllPage()}componentDidUpdate(e,t){var s,n,a;if((null===(s=this.props.manageFeeds)||void 0===s||!s.loading)&&!this.props.wallsLoader&&(null===(n=this.props.manageFeeds)||void 0===n||null===(a=n.feeds)||void 0===a||!a.length)){const e=localStorage.getItem("wallId");e&&this.props.navigate("/content/addfeed/".concat(e))}}componentWillUnmount(){window.removeEventListener("message",this.handleMessage,{signal:this.controller.signal}),T.removeEventListener("message",this.handleMessage),this.controller.abort()}render(){const{currentPage:e,showPost:t,totalPage:s,allFeeds:n,accountChanged:a}=this.state,{manageFeeds:d,wallsLoader:r,allWalls:h}=this.props,m=(this.getPagination(),(e-1)*t);n>0&&n.slice(m,m+t);return(0,f.jsx)("div",{className:"d-flex flex-column flex-column-fluid w-100 flex-position-center full-content",children:(0,f.jsx)(l.A,{fluid:!0,children:(0,f.jsxs)(i.A,{children:[(0,f.jsx)(i.A.Header,{children:(0,f.jsxs)("div",{className:"f-between flex-wrap w-100",children:[(0,f.jsx)("div",{className:"d-flex align-items-center flex-wrap my-2",children:(0,f.jsx)("h1",{className:"text-dark font-weight-bold me-4 fs-6 mb-0",children:"Manage Feeds"})}),d.loading||r?null:h&&h.length>0?(0,f.jsxs)(p.N_,{to:"/content/addfeed/".concat(localStorage.getItem("wallId")),className:"btn btn-primary text-nowrap btn-min-w",children:[(0,f.jsx)(A.gc,{icon:"plus",iconClass:"me-1"}),"Add Feed"]}):(0,f.jsxs)(c.A,{variant:"primary",className:"text-nowrap btn-min-w",onClick:()=>this.props.TOGGLE_ADD_GALLERY(!0),children:[(0,f.jsx)(A.gc,{icon:"plus",iconClass:"me-1"}),"Add Gallery"]})]})}),(0,f.jsx)(i.A.Body,{children:(0,f.jsx)("div",{className:"mb-xl-5 mb-4 d-flex flex-column justify-content-between p-3 position-relative",style:{minHeight:"calc(100vh - 210px)"},children:d.loading||r?(0,f.jsx)("div",{style:{minHeight:"calc(100vh - 500px)"},children:(0,f.jsx)(v.a,{})}):h&&h.length>0?(0,f.jsx)("div",{className:"table-responsive",style:{minHeight:"calc(100vh - 276px)"},children:(0,f.jsxs)(o.A,{size:"lg",className:"pb-10",children:[(0,f.jsx)("thead",{className:"thead-light",children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:"fw-bold text-nowrap",style:{minWidth:150},children:"Name"}),(0,f.jsx)("th",{className:"fw-bold text-nowrap",style:{minWidth:150},children:"Account"}),(0,f.jsx)("th",{className:"fw-bold text-nowrap",style:{minWidth:120},children:"Posts"}),(0,f.jsx)("th",{className:"fw-bold text-nowrap",style:{minWidth:50},children:"Moderation"}),(0,f.jsx)("th",{className:"fw-bold text-nowrap",style:{minWidth:50},children:"Status"}),(0,f.jsx)("th",{className:"fw-bold text-nowrap text-end",style:{minWidth:70},children:"Actions"})]})}),(0,f.jsx)("tbody",{children:null!==d&&void 0!==d&&d.feeds&&null!==d&&void 0!==d&&d.feeds.length?null===d||void 0===d?void 0:d.feeds.map((e=>(0,f.jsx)(N,{feed:e,changeStatus:this.changeStatus,onFeedDelete:this.onFeedDelete,changeAccount:this.changeAccount,accountChanged:a},"tr_".concat(e.id)))):null})]})}):(0,f.jsx)("div",{className:"f-center",style:{minHeight:"calc(100vh - 225px)"},children:(0,f.jsx)(I.A,{title:"Create a Gallery, to add feed! \u231b",desc:"Oops! Looks like you have deleted your gallery, create one by simply clicking on the button below.",icon:"media",button:{action:()=>this.props.TOGGLE_ADD_GALLERY(!0),text:"Create Gallery"},isFullScreen:!1})})})})]})})})}}const F=(0,a.Ng)((e=>{var t,s,n;return{manageFeeds:e.manageFeeds,wallsLoader:null===e||void 0===e||null===(t=e.dashboardData)||void 0===t?void 0:t.wallsLoader,allWalls:null===e||void 0===e||null===(s=e.dashboardData)||void 0===s||null===(n=s.dashboarddata)||void 0===n?void 0:n.allWalls}}),(e=>({GET_FEEDS:()=>e((0,d.LF)()),ACTION_DELETE_FEED:(t,s)=>e((0,d.sP)(t,s)),ACTION_FEED_STATUS:(t,s,n,a)=>e((0,d.X)(t,s,n,a)),ACTION_UPDATE_SOCIAL_ACCOUNT:(t,s,n)=>e((0,d.ZA)(t,s,n)),getModeration:()=>e((0,S.zI)()),TOGGLE_ADD_GALLERY:t=>e({type:P.GSH,payload:t}),SNAPUP_DETAILS_ACTION:t=>e((0,k.QR)(t))})))((0,E.A)(D))}}]);