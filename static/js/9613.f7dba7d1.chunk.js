"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[9613,5623],{89613:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var t=a(9950),i=a(73878),r=a(45358),n=a(5216),l=a(51960),o=a(75623),c=a(17595),d=a(51362),m=a(52867),u=a(1391),h=a(54810),x=a(44414);const p=new BroadcastChannel("connect");class f extends t.Component{constructor(){super(...arguments),this.isVerified=e=>{const{getUserInfo:s,navigate:a}=this.props;s(a)},this.reSendEmailCall=()=>{var e=localStorage.getItem("emailId");(0,m.k1)("Verification link successfully sent"),(0,d._3)(e),setTimeout((()=>{(0,m.b)()}),2e3)},this.onSignOut=()=>{localStorage.clear(),this.props.navigate("/accounts/register")}}componentWillMount(){const{navigate:e,authorized:s,getUserInfo:a}=this.props;this.reSendEmailCall(),p.addEventListener("message",this.isVerified)}componentWillUnmount(){p.removeEventListener("message",this.isVerified)}render(){return(0,x.jsx)(r.A,{children:(0,x.jsx)("div",{className:"f-center h-100vh",children:(0,x.jsx)(n.A,{className:"p-lg-8",style:{maxWidth:700},children:(0,x.jsxs)(n.A.Body,{className:"f-center flex-column",children:[(0,x.jsx)(l.A,{className:"mb-4",src:(0,h.pc)("media/images/email-verification.svg"),height:185,width:276,alt:"",fluid:!0}),(0,x.jsx)("h2",{className:"text-center mb-5 h1",children:"You're just a step away."}),(0,x.jsxs)("p",{className:"fw-medium text-muted text-center",children:["We have sent an email to ",(0,x.jsxs)("span",{className:"fw-bold ",children:[localStorage.getItem("emailId")," "]}),"with the verification link. Please go to your email account to verify. If you don't see the email in your inbox or spam folder, try resending the email here:"]}),(0,x.jsx)("div",{className:"mx-auto w-100",style:{maxWidth:420},children:(0,x.jsxs)(o.A,{className:"mb-3",children:[(0,x.jsx)(c.A.Control,{size:"lg",placeholder:"example@mail.com",name:"emailId",defaultValue:localStorage.getItem("emailId"),readOnly:!0}),(0,x.jsx)(o.A.Text,{id:"basic-addon2",className:"bg-primary cursor-pointer text-gray-100 fw-medium border-primary",onClick:()=>this.reSendEmailCall(),children:"Resend Email"})]})})]})})})})}}const g=(0,i.Ng)((e=>({})),(e=>({getUserInfo:s=>e((0,d.ug)(s))})))((0,u.A)(f))},51960:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(48738),i=a.n(t),r=a(9950),n=a(11942),l=a.n(n),o=a(44089),c=a(44414);l().string,l().bool,l().bool,l().bool,l().bool;const d=r.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,fluid:r=!1,rounded:n=!1,roundedCircle:l=!1,thumbnail:d=!1,...m}=e;return a=(0,o.oU)(a,"img"),(0,c.jsx)("img",{ref:s,...m,className:i()(t,r&&`${a}-fluid`,n&&"rounded",l&&"rounded-circle",d&&`${a}-thumbnail`)})}));d.displayName="Image";const m=d},75623:(e,s,a)=>{a.d(s,{A:()=>h});var t=a(48738),i=a.n(t),r=a(9950),n=a(44089),l=a(14531),o=a(77328),c=a(44414);const d=r.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:r="span",...l}=e;return t=(0,n.oU)(t,"input-group-text"),(0,c.jsx)(r,{ref:s,className:i()(a,t),...l})}));d.displayName="InputGroupText";const m=d,u=r.forwardRef(((e,s)=>{let{bsPrefix:a,size:t,hasValidation:l,className:d,as:m="div",...u}=e;a=(0,n.oU)(a,"input-group");const h=(0,r.useMemo)((()=>({})),[]);return(0,c.jsx)(o.A.Provider,{value:h,children:(0,c.jsx)(m,{ref:s,...u,className:i()(d,a,t&&`${a}-${t}`,l&&"has-validation")})})}));u.displayName="InputGroup";const h=Object.assign(u,{Text:m,Radio:e=>(0,c.jsx)(m,{children:(0,c.jsx)(l.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(m,{children:(0,c.jsx)(l.A,{type:"checkbox",...e})})})},77328:(e,s,a)=>{a.d(s,{A:()=>i});const t=a(9950).createContext(null);t.displayName="InputGroupContext";const i=t}}]);