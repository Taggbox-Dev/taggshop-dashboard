"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[3887],{85608:(e,t,r)=>{r.d(t,{$r:()=>n,E5:()=>o,GG:()=>s});const o="466192424702-c542t25gv7ju9bjvpee935oo9b1enscm.apps.googleusercontent.com",s="https://cloud.tagshop.ai/",n=`${s}tmp/`},17538:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(9950),s=r(85608),n=r(85923),a=r(44414);const i=e=>{let{loginAction:t}=e;const r=()=>{window.google&&Object.keys(window.google).length>0&&window.google.accounts&&(window.google.accounts.id.initialize({client_id:s.E5,callback:e=>{if(e.credential)try{const r=(e=>{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(window.atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)})(e.credential);t(r)}catch(r){n.oR.error("Something went wrong.",{autoClose:3e3})}}}),window.google.accounts.id.prompt())};return(0,o.useEffect)((()=>{const e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,document.body.appendChild(e),r(),()=>{document.body.removeChild(e)}}),[]),(0,a.jsx)(a.Fragment,{})}},77941:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(42074),s=r(44414);const n=e=>{let{text:t,link:r,linkText:n}=e;return(0,s.jsxs)("div",{className:" text-center fw-normal fs-8 mt-lg-5 mt-1 f-center mb-5",children:[t,(0,s.jsx)(o.N_,{to:r,className:"btn btn-link text-decoration-none fw-bold fs-8 p-0 ms-1",children:n})]})}},73887:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var o=r(9950),s=r(73878),n=r(42074),a=r(28981),i=r(10261),l=r(77941),c=r(52867),d=r(54810),u=r(41181),m=r(19360),p=r(17595),g=r(97937),h=r(85861),f=r(9697),y=r(74283),b=r(17538),w=r(41225),x=r(9638),j=r(44414);const v=new u.A;class k extends o.Component{constructor(e){super(e),this.state={accountEmail:null,accountPassword:null,emailError:null,passwordError:null,loginLoader:!1,loginMailError:null,memberRemember:!0,showPassword:!1,resetAlert:0,loginPwdError:null},this.handleMessage=async e=>{try{const t=JSON.parse(e.data),{code:r,type:o}=t;if(/tagshop\.ai|localhost/.test(e.origin)&&"sign-login"==o&&r){const{data:{access_token:e}}=await(0,h.LY)(r),{data:t}=await(0,h.I9)(e);(0,f.cO)(),this.socialLogin({accountFullName:t.name,accountEmailId:t.email,createFrom:"google",picture:(null===t||void 0===t?void 0:t.picture)||"",authId:t.sub})}}catch(t){}},this.readAuthentication=e=>{const t=JSON.parse(e.data);this.socialLogin(t)},this.emailTextChange=e=>this.setState({accountEmail:e.target.value,emailError:null,loginMailError:null}),this.passwordTextChange=e=>this.setState({accountPassword:e.target.value,passwordError:null,loginPwdError:null}),this.clickOnLogin=e=>{var t,r;const{accountEmail:o,accountPassword:s,memberRemember:n}=this.state;if(this.setState({loginLoader:!0}),localStorage.setItem("socialLogin",0),(null===(t=String(o))||void 0===t?void 0:t.trim().length)>0&&(0,c.DT)(o)&&(null===(r=String(s))||void 0===r?void 0:r.trim().length)>0){const e={emailId:o,password:s,countryCode:"US",loginType:"web"},t={email:o,password:s,status:!0};this.props.loginUser(e,n,t,"",this.props.history,this.callBackError)}else o&&0!=String(o).trim().length&&(0,c.DT)(o)||this.setState({emailError:!0}),s&&0!=String(s).trim().length||this.setState({passwordError:!0}),this.setState({loginLoader:!1})},this.getGoogleUserDetails=e=>{(0,w.JW)(e).then((e=>this.onGSocialLogin("google",e.data)))},this.onGSocialLogin=(e,t)=>{const r=(0,c.UM)("tracking_URL"),o=(0,c.UM)("landing_URL");if(t&&Object.keys(t).length>0){var s=t.picture?t.picture:"";this.props.userSignUp({fullName:t.name,emailId:t.email,password:"",trackingPage:r,landingPage:o,activeProduct:"0",createFrom:e,picture:s,oauth_uid:t.sub,countryCode:"US",utm_source:e},this.props.history,(()=>this.setState({loginLoader:!1})))}},this.socialLogin=e=>{var{accountFullName:t,accountEmailId:r,createFrom:o,picture:s,authId:n}=e;localStorage.setItem("socialLogin",1);const a=(0,c.UM)("tracking_URL"),i=(0,c.UM)("landing_URL");this.props.userSignUp({fullName:t,emailId:r,password:"",trackingPage:a,landingPage:i,activeProduct:"0",createFrom:o,picture:s,oauth_uid:n,countryCode:"US",utm_source:"facebook"==o?"facebook_ads":o},this.props.history,(()=>{}))},this.callBackError=e=>this.setState({loginMailError:String(e).toLowerCase().includes("email")?e:"",loginLoader:!1,emailError:!!String(e).toLowerCase().includes("email"),passwordError:!!String(e).toLowerCase().includes("password"),loginPwdError:String(e).toLowerCase().includes("password")?e:""},(()=>{String(e).includes("email")||String(e).toLowerCase().includes("email")||String(e).toLowerCase().includes("password")||(0,c.r$)(e)}))}componentDidMount(){window.addEventListener("message",this.handleMessage);const e=y.A.parse(window.location.search),{email:t,password:r,status:o}=v.get("__RememberDetails")||{};this.setState({accountEmail:t||"",accountPassword:r||"",memberRemember:o||!1}),e&&Object.keys(e.length>0)&&this.setState({resetAlert:e.reset})}componentWillUnmount(){window.removeEventListener("message",this.handleMessage)}render(){const{accountEmail:e,accountPassword:t,emailError:r,passwordError:o,loginLoader:s,loginPwdError:a,memberRemember:c,showPassword:u,resetAlert:h,loginMailError:f}=this.state;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"w-100 mb-lg-0 mb-3",children:[(0,j.jsx)(b.A,{loginAction:e=>this.onGSocialLogin("google",e)},window.location.href),h?(0,j.jsx)(m.A,{variant:1==h?"success":"danger",className:"fs-7 rounded-2",dismissible:!0,children:1==h?"You have successfully updated your password. You can login now with your new password.":"Link expired, please try again."}):null,(0,j.jsxs)("div",{className:"text-start",children:[(0,j.jsx)("h1",{className:" mb-0 display-2 fw-bold mb-5",children:"Welcome back"}),(0,j.jsx)(i.A,{socialLogin:this.socialLogin,text:"Log in with Google"})]}),(0,j.jsxs)("form",{autoComplete:"on",onKeyPress:e=>"Enter"==e.key?this.clickOnLogin():"",children:[(0,j.jsxs)("div",{className:"mb-8",children:[(0,j.jsxs)(p.A.Group,{className:"mb-4 mb-xl-5",children:[(0,j.jsx)(p.A.Label,{className:"fw-bold ",htmlFor:"email_",children:"Email"}),(0,j.jsx)(p.A.Control,{type:"email",size:"lg",placeholder:"you@yourcompany.com",className:(r?"is-invalid":"")+" mb-1",value:e||"",onChange:this.emailTextChange,title:"Please enter email."}),r?(0,j.jsx)("span",{className:"invalid-feedback",children:f||(null!==e&&void 0!==e&&e.length?"Enter valid email.":"Email is required.")}):null]}),(0,j.jsxs)(p.A.Group,{className:"mb-4 mb-xl-5",children:[(0,j.jsx)(p.A.Label,{className:"fw-bold ",htmlFor:"password_",children:"Password"}),(0,j.jsxs)("span",{className:"position-relative d-block "+(o?"is-invalid":""),children:[(0,j.jsx)(p.A.Control,{type:""+(u?"text":"password"),placeholder:"Password",size:"lg",className:(o?"is-invalid":"")+" mb-1",onChange:this.passwordTextChange,value:t||"",title:"Please enter password."}),(0,j.jsx)("span",{className:"view_pass fs-7 btn btn-icon bg-transparent border-0 text-gray-500 position-absolute translate-middle top-50",onClick:e=>this.setState({showPassword:!u}),children:(0,j.jsx)(d.gc,{icon:u?"eye":"eye-slash"})})]}),o?(0,j.jsx)("div",{className:"invalid-feedback",children:a||"Password is required."}):null]}),(0,j.jsxs)("div",{className:"d-flex justify-content-between align-items-center fw-semibold mb-4 mb-xl-5 pt-1",children:[(0,j.jsxs)("label",{className:"form-check align-items-center mb-0",children:[(0,j.jsx)("input",{className:"form-check-input",name:"remember",type:"checkbox",checked:c,onChange:e=>this.setState({memberRemember:e.target.checked})}),(0,j.jsx)("span",{className:"form-check-label fw-semibold",children:"Remember Me"})]}),(0,j.jsx)(n.N_,{className:"pull-right forgot_password",to:"/accounts/forgotpassword",children:"Forgot Password?"})]})]}),(0,j.jsx)("div",{className:"d-grid mb-3",children:(0,j.jsxs)(g.A,{variant:"primary",size:"lg",className:""+(s?" disabled":""),onClick:s?null:this.clickOnLogin,children:[(0,j.jsx)("span",{className:"indicator-label",style:{display:s?"none":"block"},children:"Log in with Email"}),(0,j.jsxs)("span",{className:"indicator-progress",style:{display:s?"block":"none"},children:[" Please wait...",(0,j.jsx)("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]})})]}),(0,j.jsx)(l.A,{text:"Not a member yet?",link:"/accounts/register",linkText:"Sign up"})]}),(0,j.jsx)(x.A,{})]})}}const N=(0,s.Ng)((e=>({})),(e=>({userSignUp:(t,r,o)=>e((0,a.Ei)(t,r,o)),loginUser:(t,r,o,s,n,i)=>e((0,a.Lx)(t,r,o,s,n,i))})))(k)},10261:(e,t,r)=>{r.d(t,{A:()=>l});r(9950);var o=r(97937),s=r(51960),n=r(54810),a=r(41225),i=r(44414);const l=e=>{let{text:t}=e;return(0,i.jsxs)("div",{className:"login_socials text-center",children:[(0,i.jsxs)(o.A,{variant:"light",size:"lg",id:"googleplusSignIn",onClick:()=>{localStorage.setItem("connectionType","sign-login"),(0,a.jf)()},style:{minWidth:120},className:"w-100 border-0 fw-bold ",children:[(0,i.jsx)(s.A,{className:"me-2 h-20px w-20px",src:(0,n.pc)("media/icons/social-icons/google.svg"),width:"20",height:"20",alt:"Google"}),t||"Log in with Google"]}),(0,i.jsx)("div",{className:"d-flex align-items-center flex-column justify-content-between py-4 w-100",children:(0,i.jsx)("div",{className:"separator separator-content my-2 my-md-3 w-100",children:(0,i.jsx)("span",{className:"text-muted fw-semibold fs-6 f-center text-nowrap",style:{width:50},children:"Or"})})})]})}},74283:(e,t,r)=>{r.d(t,{A:()=>C});var o={};r.r(o),r.d(o,{exclude:()=>L,extract:()=>j,parse:()=>v,parseUrl:()=>N,pick:()=>E,stringify:()=>k,stringifyUrl:()=>S});const s="%[a-f0-9]{2}",n=new RegExp("("+s+")|([^%]+?)","gi"),a=new RegExp("("+s+")+","gi");function i(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),o=e.slice(t);return Array.prototype.concat.call([],i(r),i(o))}function l(e){try{return decodeURIComponent(e)}catch{let t=e.match(n)||[];for(let r=1;r<t.length;r++)t=(e=i(t,r).join("")).match(n)||[];return e}}function c(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"};let r=a.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=l(r[0]);e!==r[0]&&(t[r[0]]=e)}r=a.exec(e)}t["%C2"]="\ufffd";const o=Object.keys(t);for(const s of o)e=e.replace(new RegExp(s,"g"),t[s]);return e}(e)}}function d(e,t){const r={};if(Array.isArray(t))for(const o of t){const t=Object.getOwnPropertyDescriptor(e,o);t?.enumerable&&Object.defineProperty(r,o,t)}else for(const o of Reflect.ownKeys(e)){const s=Object.getOwnPropertyDescriptor(e,o);if(s.enumerable){t(o,e[o],e)&&Object.defineProperty(r,o,s)}}return r}function u(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}const m=e=>null===e||void 0===e,p=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),g=Symbol("encodeFragmentIdentifier");function h(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(e,t){return t.encode?t.strict?p(e):encodeURIComponent(e):e}function y(e,t){return t.decode?c(e):e}function b(e){return Array.isArray(e)?e.sort():"object"===typeof e?b(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function w(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function x(e,t,r){return"string"===r&&"string"===typeof e?e:"function"===typeof r&&"string"===typeof e?r(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()?"number"!==r||Number.isNaN(Number(e))||"string"!==typeof e||""===e.trim()?t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?Number(e):e:Number(e):"true"===e.toLowerCase()}function j(e){const t=(e=w(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function v(e,t){h((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,o)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=r):o[e]=r};case"bracket":return(e,r,o)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==o[e]?o[e]=[...o[e],r]:o[e]=[r]:o[e]=r};case"colon-list-separator":return(e,r,o)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==o[e]?o[e]=[...o[e],r]:o[e]=[r]:o[e]=r};case"comma":case"separator":return(t,r,o)=>{const s="string"===typeof r&&r.includes(e.arrayFormatSeparator),n="string"===typeof r&&!s&&y(r,e).includes(e.arrayFormatSeparator);r=n?y(r,e):r;const a=s||n?r.split(e.arrayFormatSeparator).map((t=>y(t,e))):null===r?r:y(r,e);o[t]=a};case"bracket-separator":return(t,r,o)=>{const s=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!s)return void(o[t]=r?y(r,e):r);const n=null===r?[]:y(r,e).split(e.arrayFormatSeparator);void 0!==o[t]?o[t]=[...o[t],...n]:o[t]=n};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;for(const s of e.split("&")){if(""===s)continue;const e=t.decode?s.replaceAll("+"," "):s;let[n,a]=u(e,"=");void 0===n&&(n=e),a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:y(a,t),r(y(n,t),a,o)}for(const[s,n]of Object.entries(o))if("object"===typeof n&&null!==n&&"string"!==t.types[s])for(const[e,r]of Object.entries(n)){const o=t.types[s]?t.types[s].replace("[]",""):void 0;n[e]=x(r,t,o)}else"object"===typeof n&&null!==n&&"string"===t.types[s]?o[s]=Object.values(n).join(t.arrayFormatSeparator):o[s]=x(n,t,t.types[s]);return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce(((e,t)=>{const r=o[t];return e[t]=Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?b(r):r,e}),Object.create(null))}function k(e,t){if(!e)return"";h((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&m(e[r])||t.skipEmptyString&&""===e[r],o=function(e){switch(e.arrayFormat){case"index":return t=>(r,o)=>{const s=r.length;return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[f(t,e),"[",s,"]"].join("")]:[...r,[f(t,e),"[",f(s,e),"]=",f(o,e)].join("")]};case"bracket":return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[f(t,e),"[]"].join("")]:[...r,[f(t,e),"[]=",f(o,e)].join("")];case"colon-list-separator":return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[f(t,e),":list="].join("")]:[...r,[f(t,e),":list=",f(o,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(o,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?o:(s=null===s?"":s,0===o.length?[[f(r,e),t,f(s,e)].join("")]:[[o,f(s,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,f(t,e)]:[...r,[f(t,e),"=",f(o,e)].join("")]}}(t),s={};for(const[a,i]of Object.entries(e))r(a)||(s[a]=i);const n=Object.keys(s);return!1!==t.sort&&n.sort(t.sort),n.map((r=>{const s=e[r];return void 0===s?"":null===s?f(r,t):Array.isArray(s)?0===s.length&&"bracket-separator"===t.arrayFormat?f(r,t)+"[]":s.reduce(o(r),[]).join("&"):f(r,t)+"="+f(s,t)})).filter((e=>e.length>0)).join("&")}function N(e,t){t={decode:!0,...t};let[r,o]=u(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:v(j(e),t),...t&&t.parseFragmentIdentifier&&o?{fragmentIdentifier:y(o,t)}:{}}}function S(e,t){t={encode:!0,strict:!0,[g]:!0,...t};const r=w(e.url).split("?")[0]||"";let o=k({...v(j(e.url),{sort:!1}),...e.query},t);o&&=`?${o}`;let s=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if("string"===typeof e.fragmentIdentifier){const o=new URL(r);o.hash=e.fragmentIdentifier,s=t[g]?o.hash:`#${e.fragmentIdentifier}`}return`${r}${o}${s}`}function E(e,t,r){r={parseFragmentIdentifier:!0,[g]:!1,...r};const{url:o,query:s,fragmentIdentifier:n}=N(e,r);return S({url:o,query:d(s,t),fragmentIdentifier:n},r)}function L(e,t,r){return E(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}const C=o}}]);