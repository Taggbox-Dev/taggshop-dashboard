"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[3643],{33643:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var s=a(9950),r=a(73878),n=a(42074),o=a(11942),i=a.n(o);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},c.apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,a;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(l(t)),t.handleErrored=t.handleErrored.bind(l(t)),t.handleChange=t.handleChange.bind(l(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(l(t)),t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},n.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var e=this;return new Promise((function(t,a){e.executionResolve=t,e.executionReject=a,e.execute()}))},n.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},n.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},n.handleRecaptchaRef=function(e){this.captcha=e},n.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return s.createElement("div",c({},t,{ref:this.handleRecaptchaRef}))},r}(s.Component);d.displayName="ReCAPTCHA",d.propTypes={sitekey:i().string.isRequired,onChange:i().func,grecaptcha:i().object,theme:i().oneOf(["dark","light"]),type:i().oneOf(["image","audio"]),tabindex:i().number,onExpired:i().func,onErrored:i().func,size:i().oneOf(["compact","normal","invisible"]),stoken:i().string,hl:i().string,badge:i().oneOf(["bottomright","bottomleft","inline"])},d.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var p=a(23876),h=a.n(p);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},u.apply(this,arguments)}var m={},g=0;var v="onloadcallback";const f=(x=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+v+"&render=explicit"},w=(w={callbackName:v,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",a=function(t){var a,r;function n(e,a){var s;return(s=t.call(this,e,a)||this).state={},s.__scriptURL="",s}r=t,(a=n).prototype=Object.create(r.prototype),a.prototype.constructor=a,a.__proto__=r;var o=n.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+g++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"===typeof x?x():x,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=m[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[w.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),a=this.asyncScriptLoaderGetScriptLoaderID(),s=w,r=s.globalName,n=s.callbackName,o=s.scriptId;if(r&&"undefined"!==typeof window[r]&&(m[t]={loaded:!0,observers:{}}),m[t]){var i=m[t];return i&&(i.loaded||i.errored)?void this.asyncScriptLoaderHandleLoad(i):void(i.observers[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)},m[t]={loaded:!1,observers:c};var l=document.createElement("script");for(var d in l.src=t,l.async=!0,w.attributes)l.setAttribute(d,w.attributes[d]);o&&(l.id=o);var p=function(e){if(m[t]){var a=m[t].observers;for(var s in a)e(a[s])&&delete a[s]}};n&&"undefined"!==typeof window&&(window[n]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=m[t];e&&(e.loaded=!0,p((function(t){return!n&&(t(e),!0)})))},l.onerror=function(){var e=m[t];e&&(e.errored=!0,p((function(t){return t(e),!0})))},document.body.appendChild(l)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===w.removeOnUnmount)for(var t=document.getElementsByTagName("script"),a=0;a<t.length;a+=1)t[a].src.indexOf(e)>-1&&t[a].parentNode&&t[a].parentNode.removeChild(t[a]);var s=m[e];s&&(delete s.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===w.removeOnUnmount&&delete m[e])},o.render=function(){var t=w.globalName,a=this.props,r=(a.asyncScriptOnLoad,a.forwardedRef),n=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(a,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(n[t]="undefined"!==typeof window[t]?window[t]:void 0),n.ref=r,(0,s.createElement)(e,n)},n}(s.Component),r=(0,s.forwardRef)((function(e,t){return(0,s.createElement)(a,u({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:i().func},h()(r,e)})(d);var x,w;const b=f;var C=a(3302),y=a.n(C),j=a(88749),N=a(97751),_=a(66345),E=a(52867),S=a(59051),k=a.n(S),L=a(44414);const R=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),I=(k()().format("mm"),new BroadcastChannel("socialLogin"));class A extends s.Component{constructor(e){super(e),this.state={accountFullName:null,afNError:null,accountEmailId:null,aEmailError:null,aEmailMessageError:null,accountPassword:null,reCaptcha:null,loginLoader:!1,aEmailEncourager:null,strength:0},this.checkEmailFromUrl=()=>{const e=window.location.href;if(e.includes("email")){const t=e.split("?")[1].split("&")[0].split("=")[1];t&&this.setState({accountEmailId:decodeURIComponent(t)})}},this.readAuthentication=e=>{console.log("event",e);const t=JSON.parse(e.data);this.socialLogin(t)},this.onFullNameChange=e=>this.setState({accountFullName:e.target.value,afNError:!1}),this.onEmailChange=e=>{return this.setState({accountEmailId:e.target.value,aEmailMessageError:null,aEmailError:!1,aEmailEncourager:(t=e.target.value,1==["@yahoo","@gmail","@hotmail"].reduce(((e,a)=>e+t.includes(a)),0))});var t},this.onClickToCreateAccount=e=>{const{afNError:t,aEmailError:a,accountFullName:s,accountEmailId:r,accountPassword:n,reCaptcha:o}=this.state,{prefix:i,history:c}=this.props;R(r)&&!t&&!a&&s&&String(s).length>0&&r&&String(r).length>0&&n&&String(n).length>0&&o?(0,j.yM)().then((e=>{const{data:t}=e;this.setState({loginLoader:!0});const a=(0,E.UM)("tracking_URL"),o=(0,E.UM)("landing_URL");this.props.userSignUp({fullName:s,emailId:r,trackingPage:a,landingPage:o,password:n,activeProduct:"2",createFrom:"signup",picture:"",oauth_uid:"",countryCode:t.country},c,this.responseCallback)})):((!s||String(s).length<=1)&&this.setState({afNError:!0}),r&&0!=String(r).length&&R(r)||this.setState({aEmailError:!0}),null==o&&this.setState({reCaptcha:!1}))},this.onReCaptcha=e=>{this.setState({reCaptcha:e})},this.validatePassword=e=>{var t=e.target.value;y()("#register-submit-btn").attr("disabled",!0),y()("#popover-password").show();var a=0;t.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)?(a+=1,y()(".low-upper-case").parent().addClass("active"),y()("#popover-password-top").addClass("hide")):(y()(".low-upper-case").parent().removeClass("active"),y()("#popover-password-top").removeClass("hide")),t.match(/([0-9])/)?(a+=1,y()(".one-number").parent().addClass("active"),y()("#popover-password-top").addClass("hide")):(y()(".one-number").parent().removeClass("active"),y()("#popover-password-top").removeClass("hide")),t.match(/([!,%,&,@,#,$,^,*,?,_,~])/)?(a+=1,y()(".one-special-char").parent().addClass("active"),y()("#popover-password-top").addClass("hide")):(y()(".one-special-char").parent().removeClass("active"),y()("#popover-password-top").removeClass("hide")),t.length>7?(a+=1,y()(".eight-character").parent().addClass("active"),y()("#popover-password-top").addClass("hide")):(y()(".eight-character").parent().removeClass("active"),y()("#popover-password-top").removeClass("hide")),0==a?(y()("#result").removeClass(),y()("#password-strength").addClass("progress-bar-danger"),y()("#result").addClass("text-danger").text(""),y()("#password-strength").css("width","0%")):1==a?(y()("#result").removeClass(),y()("#password-strength").removeClass("progress-bar-warning"),y()("#password-strength").addClass("progress-bar-danger"),y()("#result").addClass("text-danger").text("Weak"),y()("#password-strength").css("width","10%")):2==a||3==a?(y()("#result").addClass("good"),y()("#password-strength").removeClass("progress-bar-danger"),y()("#password-strength").removeClass("progress-bar-success"),y()("#password-strength").addClass("progress-bar-warning"),y()("#result").addClass("text-warning").text("Average"),y()("#password-strength").css("width","60%")):4==a&&(y()("#register-submit-btn").attr("disabled",!1),y()("#result").removeClass(),y()("#result").addClass("strong"),y()("#password-strength").removeClass("progress-bar-warning"),y()("#password-strength").removeClass("progress-bar-danger"),y()("#password-strength").addClass("progress-bar-success"),y()("#result").addClass("text-success").text("Strong"),y()("#password-strength").css("width","100%")),this.setState({accountPassword:t,strength:a})},this.showPass=e=>{var t=document.getElementById("AccountPassword");document.getElementById("show_password_icon").classList.toggle("view_pass"),"password"===t.type?t.type="text":t.type="password"},this.responseCallback=e=>{e&&Object.keys(e).length>0&&this.setState({aEmailError:!0,loginLoader:!1,aEmailMessageError:e.message,reCaptcha:null},(()=>this.captcha.reset()))},this.socialLogin=e=>{var{accountFullName:t,accountEmailId:a,createFrom:s,picture:r,authId:n,activeProduct:o}=e;const{prefix:i,history:c}=this.props;var l=this,o="0";localStorage.setItem("socialLogin",1),i&&String(i).includes("widget")?o="6":i&&String(i).includes("display")&&(o="4"),(0,j.yM)().then((e=>{const{data:i}=e,c=(0,E.UM)("tracking_URL"),d=(0,E.UM)("landing_URL");this.props.userSignUp({fullName:t,emailId:a,password:"",trackingPage:c,landingPage:d,activeProduct:o,createFrom:s,picture:r,oauth_uid:n,countryCode:i&&i.country?i.country:"US",utm_source:"facebook"==s?"facebook_ads":s},l.props.history,(()=>{}))}))}}componentDidMount(){this.checkEmailFromUrl(),I.addEventListener("message",this.readAuthentication)}render(){const{prefix:e}=this.props,{reCaptcha:t,afNError:a,aEmailError:s,accountFullName:r,accountEmailId:o,aEmailMessageError:i,loginLoader:c,aEmailEncourager:l,strength:d}=this.state;return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)("div",{className:"loginFormSec registerFormSec formControlMin signup_wrapper",children:[(0,L.jsxs)("div",{className:"loginWithSocials",children:[(0,L.jsxs)("div",{className:"loginHead",children:[(0,L.jsx)("h2",{children:"Sign up for a free trial"}),(0,L.jsxs)("p",{children:["All Premium Features ",(0,L.jsx)("span",{className:"seprate_dot"}),"No card required"]})]}),(0,L.jsx)(N.e,{socialLogin:this.socialLogin})]}),(0,L.jsx)("div",{className:"loginBlock",children:(0,L.jsx)("div",{className:"loginInnSec",children:(0,L.jsx)("div",{children:(0,L.jsxs)("div",{className:"row",children:[(0,L.jsx)("div",{className:"col-sm-12",children:(0,L.jsxs)("div",{className:"form-group labelPosition",children:[(0,L.jsx)("label",{htmlFor:"AccountFullName",children:"Full Name"}),(0,L.jsx)("input",{name:"data[Account][fullName]",className:"form-control placeholder-no-fix ".concat(a?"form-error":""),type:"text",id:"AccountFullName","data-factors-input-id":"form-0.field-0",value:r,onChange:this.onFullNameChange}),a?(0,L.jsxs)("div",{className:"error-message",children:[r&&r.length>0&&(p=String(r),/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(p))?"Special characters are not allowed. ":String(r).length<3?"Full Name length must be at least 3 characters long.":""," Enter Proper Name"]}):null]})}),(0,L.jsxs)("div",{className:"col-sm-12",children:[(0,L.jsxs)("div",{className:"form-group labelPosition",children:[(0,L.jsx)("label",{htmlFor:"AccountEmailId",children:"Company Email"}),(0,L.jsx)("input",{name:"data[Account][emailId]",className:"form-control placeholder-no-fix",placeholder:"name@work-email.com",maxLength:"255",type:"email",id:"AccountEmailId","data-factors-input-id":"form-0.field-1",value:o,onChange:this.onEmailChange,required:!0}),l&&!s?(0,L.jsx)("div",{id:"flashFlushMessage",className:"alert alert-block alert-custom bg-light fade show in flashNotification mt-3",children:(0,L.jsx)("p",{className:"mb-0 text-start",children:"Swap personal emails with work emails for a better experience."})}):null,s?(0,L.jsx)("div",{className:"error-message",children:i&&i.length>0?i:"Email is not valid."}):null]}),(0,L.jsxs)("div",{className:"form-group labelPosition",children:[(0,L.jsx)("label",{htmlFor:"AccountPassword",children:"Password"}),(0,L.jsxs)("div",{className:"password_wrap",children:[(0,L.jsx)("input",{name:"data[Account][password]",className:"form-control placeholder-no-fix",minLength:"8",maxLength:"24",onChange:this.validatePassword,type:"password",id:"AccountPassword","aria-autoComplete":"list"})," ",(0,L.jsx)("button",{id:"show_password_icon",type:"button",className:"show_password_icon",onClick:this.showPass,"data-factors-form-bind":"true","data-factors-click-bind":"true",children:(0,L.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"18",viewBox:"0 0 24 15",children:[(0,L.jsx)("path",{id:"Path_5232","data-name":"Path 5232",d:"M21.87,11.5c-.64-1.11-4.16-6.68-10.14-6.5C6.2,5.14,3,10,2.13,11.5a1,1,0,0,0,0,1c.63,1.09,4,6.5,9.89,6.5h.25c5.53-.14,8.74-5,9.6-6.5A1,1,0,0,0,21.87,11.5ZM12.22,17c-4.31.1-7.12-3.59-8-5,1-1.61,3.61-4.9,7.61-5,4.29-.11,7.11,3.59,8,5-1.03,1.61-3.61,4.9-7.61,5Z",transform:"translate(-1.996 -4.996)",fill:"#d9d9d9"}),(0,L.jsx)("path",{id:"blank_path","data-name":"Path 5233",d:"M12,8.5A3.5,3.5,0,1,0,15.5,12,3.5,3.5,0,0,0,12,8.5Zm0,5A1.5,1.5,0,1,1,13.5,12,1.5,1.5,0,0,1,12,13.5Z",transform:"translate(-1.996 -4.996)",fill:"#d9d9d9"}),(0,L.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",id:"filled_path","data-name":"Path 5233",d:"M12,8.5A3.5,3.5,0,1,0,15.5,12,3.5,3.5,0,0,0,12,8.5Z",transform:"translate(-1.996 -4.996)",fill:"#545454"})]})})]}),(0,L.jsxs)("div",{id:"popover-password",style:{display:"none"},children:[(0,L.jsxs)("p",{style:{textAlign:"left"},children:["Strength: ",(0,L.jsx)("span",{id:"result"})]}),(0,L.jsx)("div",{className:"progress",children:(0,L.jsx)("div",{id:"password-strength",className:"progress-bar progress-bar-success",role:"progressbar","aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100",style:{width:"0%"}})}),(0,L.jsxs)("ul",{className:"list-unstyled verified_checkpoints",children:[(0,L.jsxs)("li",{children:[(0,L.jsx)("span",{className:"low-upper-case",children:(0,L.jsx)("i",{className:"point_ver__"})}),"Upper Case & Lower Case Alphabets (A-z)"]}),(0,L.jsxs)("li",{children:[(0,L.jsx)("span",{className:"one-number",children:(0,L.jsx)("i",{className:"point_ver__"})}),"1 Number (0-9)"]}),(0,L.jsxs)("li",{children:[(0,L.jsx)("span",{className:"one-special-char",children:(0,L.jsx)("i",{className:"point_ver__"})}),"1 Special symbol (!@#$&*)"]}),(0,L.jsxs)("li",{children:[(0,L.jsx)("span",{className:"eight-character",children:(0,L.jsx)("i",{className:"point_ver__"})}),"Minimum 8 Characters"]})]})]})]})]}),(0,L.jsxs)("div",{className:"col-sm-12",children:[(0,L.jsxs)("div",{className:"form-group recaptchaSec",children:[(0,L.jsx)(b,{ref:e=>this.captcha=e,sitekey:_.Lhm,theme:"light",onChange:this.onReCaptcha,size:"normal",className:"g-recaptcha"}),0==t?(0,L.jsx)("div",{className:"error-message",children:"Please verify that you are not a robot."}):null]}),(0,L.jsx)("div",{style:{clear:"both"}}),(0,L.jsx)("div",{className:"form-group",children:(0,L.jsxs)("button",{type:"submit",disabled:d<4,className:"btn btn-primary w-100".concat(c?" disabled":""),onClick:this.onClickToCreateAccount,children:[(0,L.jsx)("span",{className:"indicator-label",style:{display:c?"none":"block"},children:"Create Account"}),(0,L.jsxs)("span",{className:"indicator-progress",style:{display:c?"block":"none"},children:[" Please wait...",(0,L.jsx)("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]})}),(0,L.jsx)("div",{className:"form-group mb-0",children:(0,L.jsxs)("p",{children:["Already have an account? ",(0,L.jsx)(n.N_,{className:"btnSignUp",to:"".concat(e,"accounts/login"),children:"Login"})]})})]})]})})})}),(0,L.jsx)("div",{className:"clear"})]})});var p}}const P=(0,r.Ng)((e=>({})),(e=>({userSignUp:(t,a,s)=>e((0,j.Ei)(t,a,s))})))(A)},97751:(e,t,a)=>{a.d(t,{e:()=>c});a(9950);var s=a(16392),r=(a(66345),a(96011)),n=a.n(r),o=(a(36511),a(88749),a(41225)),i=(a(14313),a(44414));const c=e=>{let{socialLogin:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"loginSocials",children:[(0,i.jsx)("p",{className:"text-center",children:"Sign in with:"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)("button",{className:"ladda-button socialButtons connect-google",id:"googleplusSignIn",onClick:o.jf,children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 256 262",preserveAspectRatio:"xMidYMid",children:[(0,i.jsx)("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),(0,i.jsx)("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),(0,i.jsx)("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),(0,i.jsx)("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})]}),(0,i.jsx)("span",{children:"Google"})]})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.Lp,{appId:"117029975354072",onResolve:e=>{let{provider:a,data:s}=e;console.log("{ provider, data }",{provider:a,data:s}),(e=>{const a=(0,o.fz)(e.accessToken),s="https://graph.facebook.com/me?fields=id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender&limit=100&access_token="+e.accessToken+"&appsecret_proof="+a;n().get(s).then((e=>{const{id:a,name:s,email:r,picture:n}=e.data,o={accountFullName:s,accountEmailId:r,createFrom:"facebook",picture:n.data.url,authId:a};t(o)}))})(s)},onReject:e=>{},children:(0,i.jsxs)("button",{className:"ladda-button socialButtons connect-facebook",id:"facbookSignIn",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",version:"1.1",width:"23",height:"23",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 167.657 167.657",style:{enableBackground:"new 0 0 167.657 167.657"},space:"preserve",children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{style:{fill:"#1777F2"},d:"M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626   v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006   c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154   C167.657,37.881,130.125,0.349,83.829,0.349z"})})}),(0,i.jsx)("span",{children:"Facebook"})]})})})]}),(0,i.jsx)("h2",{children:(0,i.jsx)("span",{children:"or"})})]})})}}}]);