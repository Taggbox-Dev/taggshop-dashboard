"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[3459],{6021:(e,s,a)=>{a.d(s,{A:()=>r});var c=a(9950),t=a(41118),n=a(66345),o=a(52867),l=a(44414);class r extends c.Component{constructor(){super(...arguments),this.onAddAccount=e=>{(0,o.go)(e,!1,!1),this.props.openAddAccountPopup()}}render(){const{addAccountPopup:e,openAddAccountPopup:s,addAccountData:a,authorized:c}=this.props;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(t.A,{size:"md",dialogClassName:"modal-dialog-centered",show:e,onHide:s,children:[(0,l.jsxs)(t.A.Header,{children:[(0,l.jsx)(t.A.Title,{children:"Pick a source"}),(0,l.jsx)("button",{type:"button",className:"close","data-bs-dismiss":"modal",onClick:s,children:(0,l.jsx)("i",{"aria-hidden":"true",className:"ki ki-close"})})]}),(0,l.jsx)(t.A.Body,{className:"body-bg",children:(0,l.jsx)("ul",{className:"networks modal_networks",children:a?a.map((e=>(0,l.jsx)("li",{className:"twitter",onClick:()=>this.onAddAccount(e),children:(0,l.jsxs)("a",{className:"tooltips popUp noLoader",children:[(0,l.jsx)("img",{className:"img-fluid",src:"".concat(n.he2,"taggshop/app/assets/media/square-icons/").concat(e.icon,".svg?ver=1")}),(0,l.jsx)("span",{children:e.name})]})}))):""})})]})})}}},7990:(e,s,a)=>{a.d(s,{A:()=>h});var c=a(59051),t=a.n(c),n=a(9950),o=a(66345),l=a(54344),r=a(44414);class d extends n.Component{render(){return(0,r.jsx)("span",{className:"svg-icon-sm svg-icon m-0 me-1",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsxs)("g",{id:"Group_4474","data-name":"Group 4474",transform:"translate(10951 -4712)",children:[(0,r.jsx)("rect",{id:"Rectangle_2094","data-name":"Rectangle 2094",width:"24",height:"24",transform:"translate(-10951 4712)",fill:"none",opacity:"0"}),(0,r.jsxs)("g",{id:"Group_1","data-name":"Group 1",transform:"translate(-10950 4715)",children:[(0,r.jsx)("path",{id:"Path_17","data-name":"Path 17",d:"M17.617,40.968a6.864,6.864,0,0,1-3.843,1.155,6.966,6.966,0,0,1-6.929-6.059H8a1.027,1.027,0,0,0,.869-.474.9.9,0,0,0,0-.967L6.656,30.974a1,1,0,0,0-.869-.474h0a1.027,1.027,0,0,0-.869.474c-.778,1.25-1.933,3.277-2.122,3.556a1.344,1.344,0,0,0-.189.566.916.916,0,0,0,.961.967H4.814a8.994,8.994,0,0,0,8.962,7.993,8.833,8.833,0,0,0,4.9-1.438.955.955,0,0,0,.283-1.344,1.02,1.02,0,0,0-1.342-.307Z",transform:"translate(-2.605 -26.138)",fill:"#545454"}),(0,r.jsx)("path",{id:"Path_18","data-name":"Path 18",d:"M42.874,19.993h-1.25A8.993,8.993,0,0,0,32.666,12a8.833,8.833,0,0,0-4.9,1.438.971.971,0,1,0,1.061,1.626,6.864,6.864,0,0,1,3.843-1.155A6.966,6.966,0,0,1,39.6,19.969H38.444a1.027,1.027,0,0,0-.869.474.9.9,0,0,0,0,.967l2.213,3.654a1,1,0,0,0,.869.474h0a1.027,1.027,0,0,0,.869-.474c.778-1.25,1.933-3.277,2.122-3.556a1.344,1.344,0,0,0,.189-.566.923.923,0,0,0-.963-.949Z",transform:"translate(-21.494 -12)",fill:"#545454"})]})]})})})}}var i=a(52867);class h extends n.Component{render(){const{item:e,index:s,deleteSocialAccount:a,authorized:c,fromShareAccount:n}=this.props,h=e.Network.description.toLowerCase().replace(" ","-"),m=e.ConnectedAccounts.profilePicture,x=t().unix(e.ConnectedAccounts.validity).format("DD MMM YYYY"),p=e.ConnectedAccounts.child;return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"conn_table connectedAccounts_list",children:(0,r.jsxs)("div",{className:"row align-items-center m-0",children:[(0,r.jsx)("figure",{className:"col-3 card-header ",children:(0,r.jsxs)("div",{className:"d-flex align-items-center flex-nowrap card-title collapsed",children:[(0,r.jsx)("div",{className:"flex-shrink-0 mr-4 mt-lg-0 mt-3 d-flex align-items-center",children:(0,r.jsx)("div",{className:"symbol symbol-35",children:(0,r.jsx)("img",{className:"img-fluid",src:"".concat(o.he2,"taggshop/app/assets/media/square-icons/").concat(h,".svg?ver=1"),alt:""})})}),(0,r.jsx)("div",{className:"d-flex flex-column",children:(0,r.jsx)("p",{className:"font-weight-normal text-dark mb-0 text-nowrap",children:e.Network.name})}),p&&p.length>0?(0,r.jsx)("span",{className:"svg-icon ms-3","data-bs-toggle":"collapse","data-bs-target":"#Network_id".concat(e.ConnectedAccounts.id),"aria-expanded":"false",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",children:(0,r.jsxs)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("polygon",{points:"0 0 24 0 24 24 0 24"}),(0,r.jsx)("path",{d:"M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z",fill:"#545454",fillRule:"nonzero",transform:"translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999) "})]})})}):""]})}),(0,r.jsx)("figure",{className:"col-2",children:(0,r.jsxs)("div",{className:"d-flex align-items-center flex-nowrap",children:[(0,r.jsx)("div",{className:"flex-shrink-0 mr-4 mt-lg-0 mt-3",children:(0,r.jsx)("div",{className:"symbol symbol-circle connected_user_p",style:{backgroundImage:"url(".concat(m.replace(/\s/g,""),"),url(").concat((0,i.aG)(e.ConnectedAccounts.accountName,e.Network.color),")")}})}),(0,r.jsx)("div",{className:"d-flex flex-column",children:(0,r.jsx)("p",{className:"text-dark mb-0",children:e.ConnectedAccounts.accountName})})]})}),(0,r.jsx)("figure",{className:"col-2",children:x}),(0,r.jsx)("figure",{className:"col-2",children:(0,r.jsxs)("div",{className:"d-flex align-items-center",children:[2==e.ConnectedAccounts.api?(0,r.jsx)("span",{className:"label font-weight-bold label-xl label-inline label-light-success acc_status",children:"Connected"}):(0,r.jsx)("span",{className:"label font-weight-bold label-xl label-inline label-light-danger acc_status",children:"Disconnected"}),(0,r.jsx)(l.A,{effect:"solid"}),2!==e.ConnectedAccounts.api&&e.ConnectedAccounts.cronStatus?(0,r.jsx)("div",{className:"d-flex mx-2 align-items-center","data-tip":e.ConnectedAccounts.cronStatus,"data-theme":"dark",title:"",children:(0,r.jsx)("span",{className:"svg-icon svg-icon-secondary svg-icon-md",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",children:(0,r.jsxs)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("rect",{x:"0",y:"0",width:"24",height:"24"}),(0,r.jsx)("circle",{fill:"#545454",opacity:"0.3",cx:"12",cy:"12",r:"10"}),(0,r.jsx)("rect",{fill:"#ffffff",x:"11",y:"10",width:"2",height:"7",rx:"1"}),(0,r.jsx)("rect",{fill:"#ffffff",x:"11",y:"7",width:"2",height:"2",rx:"1"})]})})})}):""]})}),(0,r.jsx)("figure",{className:"col-2",children:2==e.ConnectedAccounts.api?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("a",{className:"btn btn-primary btn-sm",onClick:()=>(0,i.go)(e.Network,!0),children:[(0,r.jsx)(d,{})," Refresh"]})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("a",{className:"btn btn-primary btn-sm",onClick:()=>(0,i.go)(e.Network,!0),children:[(0,r.jsx)(d,{})," Reconnect"]})})}),n?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("figure",{className:"col-1 text-right",children:(0,r.jsx)("div",{className:"btn btn-link btn-icon btn-clean",onClick:a(e),children:(0,r.jsx)("span",{className:"svg-icon-lg svg-icon-dark-75",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsxs)("g",{"data-name":"Group 4331",transform:"translate(10956 -4533)",children:[(0,r.jsx)("rect",{id:"Rectangle_2069","data-name":"Rectangle 2069",width:"24",height:"24",transform:"translate(-10956 4533)",fill:"none",opacity:"0"}),(0,r.jsx)("g",{id:"Group_4324","data-name":"Group 4324",transform:"translate(-10952 4536)",children:(0,r.jsx)("path",{id:"Path_5188","data-name":"Path 5188",d:"M2.722,16.328A2,2,0,0,0,4.694,18h6.612a2,2,0,0,0,1.972-1.672L14,6H2ZM9,9.5A.5.5,0,0,1,9.5,9h1a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5Zm-4,0A.5.5,0,0,1,5.5,9h1a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5ZM15,2H11A2,2,0,0,0,9,0H7A2,2,0,0,0,5,2H1A1,1,0,0,0,1,4H15a1,1,0,0,0,0-2Z",fill:"#545454",fillRule:"evenodd"})})]})})})})})]})}),(0,r.jsx)("div",{id:"Network_id".concat(e.ConnectedAccounts.id),className:"accordion-collapse collapse","data-bs-parent":"#connectedAccounts",children:(0,r.jsx)("div",{className:"card-body conn_acc_more",children:(0,r.jsx)("div",{className:"table-responsive",children:(0,r.jsxs)("table",{className:"table table-vertical-center",id:"example70046",children:[(0,r.jsx)("thead",{className:"bg-gray-100",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"#"}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("span",{children:"Page profile"})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("span",{children:"User Name"})})]})}),(0,r.jsx)("tbody",{children:p&&p.length>0?p.map(((e,s)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:s+1}),(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:"symbol symbol-circle connected_user_p",style:{backgroundImage:"url(".concat(e.ConnectedAccounts.profilePicture.replace(/\s/g,""),"),url(").concat((0,i.aG)(e.ConnectedAccounts.value2,e.Network.color),")")}})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{className:"font-weight-bold",children:e.ConnectedAccounts.value2})})]},s))):""})]})})})})]})}}},23459:(e,s,a)=>{a.r(s),a.d(s,{default:()=>w});var c=a(9950),t=a(28429),n=(a(96011),a(66345)),o=(a(88749),a(59074));var l=a(66586),r=a(73878),d=a(6021),i=(a(54344),a(7990)),h=a(4695),m=a.n(h),x=a(44414);class p extends c.Component{constructor(){super(...arguments),this.state={allSocialAcc:this.props.socialAccounts,addAccountPopup:!1,shareAccount:!1,errorShareAccount:null},this.deleteSocialAccount=e=>e=>{m().fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((e=>{e.value||e.dismiss}))},this.openAddAccountPopup=()=>{const{addAccountPopup:e}=this.state;this.setState({addAccountPopup:!e}),this.props.TAGGBOX_SOCIAL_ACCOUNT_ADD_ACCOUNT_DATA()}}render(){const{addAccountData:e}=this.props,{allSocialAcc:s,addAccountPopup:a,shareAccount:c,errorShareAccount:t}=this.state,o=!!(s&&s.accountInformations&&s.accountInformations.length>0);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"d-flex flex-column-fluid main_content account_info_wrap subheader_content",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("div",{className:"screen_wrapper pb-10 pt-5",children:(0,x.jsx)("div",{className:"tab-content",children:(0,x.jsxs)("div",{id:"connectedAccounts",className:"tab-pane fade active show",children:[(0,x.jsx)("h4",{className:"text-dark font-weight-bold my-1 mb-4",children:"Social Accounts"}),(0,x.jsxs)("div",{className:"card card-custom",children:[(0,x.jsx)("div",{className:"card-header flex-wrap py-6 justify-content-end",children:(0,x.jsx)("div",{className:"card-toolbar",children:(0,x.jsxs)("button",{className:"btn btn-primary","data-bs-toggle":"modal",id:"addAccount","data-target":"#addAccount",onClick:this.openAddAccountPopup,children:[(0,x.jsx)("span",{className:"svg-icon svg-icon-md",children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,x.jsxs)("g",{id:"Group_4424","data-name":"Group 4424",transform:"translate(10922 -4685)",children:[(0,x.jsx)("rect",{id:"Rectangle_2094","data-name":"Rectangle 2094",width:"24",height:"24",transform:"translate(-10922 4685)",fill:"none",opacity:"0"}),(0,x.jsx)("path",{id:"Path_5219","data-name":"Path 5219",d:"M-15.382,10.935h-6.172V4.765A1.065,1.065,0,0,0-22.618,3.7a1.065,1.065,0,0,0-1.064,1.064v6.17h-6.174a1.058,1.058,0,0,0-.751.317,1.056,1.056,0,0,0-.305.756,1.068,1.068,0,0,0,1.058,1.055h6.172v6.169a1.059,1.059,0,0,0,.311.754,1.021,1.021,0,0,0,.755.313,1.055,1.055,0,0,0,.749-.309,1.059,1.059,0,0,0,.313-.756V13.063h6.175a1.066,1.066,0,0,0,1.057-1.072A1.069,1.069,0,0,0-15.382,10.935Z",transform:"translate(-10887.383 4685)",fill:"#545454"})]})})}),"Add Account"]})})}),(0,x.jsx)("div",{className:"card-body p-5",children:o?(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)("div",{className:"accordion accordion-light accordion-svg-toggle conn_accounts_wrap",id:"connectedAccounts",children:[(0,x.jsx)("div",{className:"connectedAccounts_thead",children:(0,x.jsxs)("ul",{className:"list-inline row m-0",children:[(0,x.jsx)("li",{className:"col-3",children:(0,x.jsx)("p",{className:"font-weight-bolder text-dark",children:"Network"})}),(0,x.jsx)("li",{className:"col-2",children:(0,x.jsx)("p",{className:"font-weight-bolder text-dark",children:"Account"})}),(0,x.jsx)("li",{className:"col-2",children:(0,x.jsx)("p",{className:"font-weight-bolder text-dark",children:"Token Validity"})}),(0,x.jsx)("li",{className:"col-2",children:(0,x.jsx)("p",{className:"font-weight-bolder text-dark",children:"Status"})}),(0,x.jsx)("li",{className:"col-2",children:(0,x.jsx)("p",{className:"font-weight-bolder text-dark",children:"Refresh"})})]})}),(0,x.jsx)("div",{className:"connectedAccounts",children:s.accountInformations.map(((e,s)=>(0,x.jsx)(i.A,{item:e,index:s,deleteSocialAccount:this.deleteSocialAccount,fromShareAccount:!0},s)))})]})}):(0,x.jsxs)("div",{className:"no_connected_acc",children:[(0,x.jsx)("img",{src:"".concat(n.ZJW,"/app/assets/media/products/product-empty.svg"),className:"mb-10 img-fluid"}),(0,x.jsx)("h4",{className:"h1 mb-4",children:"Account Not Connected"})]})}),(0,x.jsx)("div",{className:"mt-10 pt-10 pb-5 border-top",children:(0,x.jsx)("div",{className:"col-sm-12 px-3",children:(0,x.jsx)("p",{className:"font-size-sm bg-light p-3",children:"NOTE: Tagshop does not have the option to access, store, or view personal information and passwords that you may use to connect your social media accounts."})})})]}),(0,x.jsx)(d.A,{openAddAccountPopup:this.openAddAccountPopup,addAccountPopup:a,addAccountData:e})]})})})})})})})})}}const u=(0,r.Ng)((e=>({addAccountData:e.userAccountData.addAccount,socialAccounts:e.userAccountData.socialAccounts})),(e=>({DELETE_USER_SOCIAL_ACCOUNT:(s,a,c)=>e((0,o.Cv)(s,a,c)),TAGGBOX_SOCIAL_ACCOUNT_ADD_ACCOUNT_DATA:()=>e((0,o.uz)())})))(p);var g=a(9697),j=a(52867);const A=new AbortController,w=()=>{const e=(0,t.g)(),s=(0,r.wA)(),[a,n]=(0,c.useState)(!0),d=async a=>{console.log(a);const c=(0,j.lL)("networkId");console.log("networkId",c);const{error:t,code:l}=a.data;(a.origin.includes("tagshop.ai")||a.origin.includes("localhost"))&&l&&await(0,g.CJ)(c,l,s((0,o.xv)(atob(e.id).split("'").join(""),n)))};return(0,c.useEffect)((()=>{const a=A.signal;return window.addEventListener("message",d,{signal:a}),s((0,o.xv)(atob(e.id).split("'").join(""),n)),localStorage.setItem("ownerId",atob(e.id).split("'").join("")),localStorage.setItem("shareAccount",!0),localStorage.setItem("url_redirect",window.location.pathname.replace("/v2","")),()=>{A.abort()}}),[]),a?(0,x.jsx)(l.A,{}):(0,x.jsx)(u,{})}},9697:(e,s,a)=>{a.d(s,{CJ:()=>o});var c=a(91615),t=a(52867),n=a(85861);const o=async(e,s,a)=>{const c={1:i,2:d,3:r,18:r,8:h,4:l}[e];c&&await c(s,a)},l=async(e,s)=>{try{const a=await(0,n.A8)(e),{access_token:o,expires_in:l,refresh_token:r,token_type:d,id_token:i}=a.data,h={networkId:4,token:o,expires_in:l,refresh_token:r,scope:n.HB,token_type:d,id_token:i,created:1675254640,reconnectAccount:0,wallId:localStorage.getItem("wallId")},m=await(0,c.Pz)(h),{responseCode:x,resposneMessage:p}=m.data;200===x?(0,t.k1)(p):(0,t.r$)(p),s()}catch(a){console.error("Error adding Google Account:",a)}},r=async(e,s)=>{try{const{data:a}=await(0,n.rt)(e);if(a){const{access_token:e,expires_in:n}=a,o=(0,t.lL)("feedId"),l=(0,t.lL)("refresh"),r={token:e||"",networkId:(0,t.lL)("networkId"),validity:n||34656,reconnectAccount:l?1:0,wallId:localStorage.getItem("wallId")};o&&(r.feedId=o);const d=await(0,c.Pz)(r),{responseCode:i,resposneMessage:h}=d.data;200===i?(0,t.k1)(h):(0,t.r$)(h),localStorage.removeItem("feedId"),s()}}catch(a){console.error("Error adding Account:",a)}},d=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{};const a=(0,t.lL)("feedId")||null,o=(0,t.lL)("refresh");try{const l=await(0,n.X)(e),{access_token:r}=l.data,d={token:r||"",networkId:2,validity:34656,wallId:localStorage.getItem("wallId")};a&&(d.feedId=a),d.reconnectAccount=o?1:0;const{data:i}=await(0,c.Pz)(d),{responseCode:h,resposneMessage:m}=i;200===h?(0,t.k1)(m):(0,t.r$)(m),localStorage.removeItem("feedId"),s()}catch(l){console.error("Error adding Instagram Account:",l)}},i=async(e,s)=>{try{const a={networkId:(0,t.lL)("networkId"),grant_type:"authorization_code",code_verifier:"challenge",created:1675254640,client_id:n.a8,redirect_uri:n._,code:e},{data:o}=await(0,c.Pz)(a),{responseCode:l,resposneMessage:r}=o;200===l?(0,t.k1)(r):(0,t.r$)(r),s()}catch(a){(0,t.r$)("Error adding Twitter Account"),console.error("Error adding Twitter Account:",a)}},h=async(e,s)=>{const a=(0,t.lL)("feedId"),n={token:"w",networkId:8,code:e,reconnectAccount:(0,t.lL)("refresh")?1:0,wallId:localStorage.getItem("wallId")};a&&(n.feedId=a);try{const{data:e}=await(0,c.Pz)(n),{responseCode:a,resposneMessage:o}=e;200===a?(0,t.k1)(o):(0,t.r$)(o),localStorage.removeItem("feedId"),s()}catch(o){console.error("Error adding Vimeo Account:",o)}}}}]);