"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[773],{73773:function(t,e,a){a.r(e);var n=a(15671),s=a(43144),i=a(60136),o=a(29388),l=a(47313),r=a(1084),c=a(59799),u=a(97914),_=a(46417),d=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())},m=function(t){(0,i.Z)(a,t);var e=(0,o.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={isOpen:!1,step:1,wall_id:null,name:null,email:null,upload_image:[],receiveMail:!1,tandc:!0,nameError:!1,emailError:!1},t.onShowCloseSubmitPicPopUp=function(e){var a=t.props.wall;t.props.showPopUP({type:"submit-pic",card:{},personalization:null===a||void 0===a?void 0:a.Personalization,ThemeRule:a.ThemeRule,UserRule:a.UserRule,wall:a})},t.updateImageWithData=function(e){var a=t.state.upload_image;a&&a.length<5&&(a.push(e),t.setState({upload_image:a}))},t.onUpdateImageAddCaption=function(e){return function(a){var n=t.state.upload_image;n&&n.length>0&&n[e]&&(n[e].caption=a.target.value,n[e].review="",n[e].rating=0,t.setState({upload_image:n}))}},t.onUpdateImageAddReview=function(e){return function(a){var n=t.state.upload_image;n&&n.length>0&&n[e]&&(n[e].review=a.target.value,n[e].caption="",t.setState({upload_image:n}))}},t.onUpdateImageAddRatings=function(e,a){var n=t.state.upload_image;n&&n.length>0&&n[a]&&(n[a].caption="",n[a].rating=e,t.setState({upload_image:n}))},t.onUpdateStep=function(e){return function(a){t.setState({step:e})}},t.onTextName=function(e){t.setState({name:e.target.value,nameError:!1},(function(){null!=t.state.name&&0!=t.state.name.length||t.setState({nameError:!0})}))},t.onTextEmail=function(e){t.setState({email:e.target.value,emailError:!1},(function(){null!=t.state.email&&0!=t.state.email.length&&d(t.state.email)&&!t.state.email.includes("mailinator")||t.setState({emailError:!0})}))},t.onSubmitData=function(e){var a=t.state,n=a.name,s=a.email,i=a.upload_image,o=a.tandc,l=a.receiveMail,r=t.props.wallId;o&&n&&n.length>0&&s&&s.length>0&&d(s)&&!s.includes("mailinator")&&i&&i.length>0&&o?(0,c.uM)({wall_id:r,name:n,email:s,upload_image:i,receive_mail:l}).then((function(e){t.setState({step:3})})).catch((function(t){})):(null!=t.state.name&&0!=t.state.name.length||t.setState({nameError:!0}),null!=t.state.email&&0!=t.state.email.length&&d(t.state.email)&&!s.includes("mailinator")||t.setState({emailError:!0}))},t.onUpdatereceiveMail=function(e){var a=t.state.receiveMail;t.setState({receiveMail:!a})},t.onUpdatetandc=function(e){var a=t.state.tandc;t.setState({tandc:!a})},t.removeProductImage=function(e){return function(a){var n=t.state.upload_image;n&&n.length>0&&n.splice(e,1),t.setState({upload_image:n})}},t}return(0,s.Z)(a,[{key:"render",value:function(){var t,e,a=this.props,n=a.wall,s=a.onsite_status,i=n.UgcSettings,o=s?{backgroundColor:i.onsite_btn_color,borderColor:i.onsite_btn_color,color:i.onsite_btn_txt_color}:"",l={fontSize:n.UgcSettings.btn_fontSize+"px",fontFamily:n.UgcSettings.onsite_css_font_btn};return(0,_.jsx)(_.Fragment,{children:0!==s?(0,_.jsx)("div",{id:"tb_post_submit_container_button",className:"50"!=(null===n||void 0===n||null===(t=n.Personalization)||void 0===t?void 0:t.commerceTheme)?"tb_post_submit_container":"ts_gst__post_submit_container_button",children:"50"!=(null===n||void 0===n||null===(e=n.Personalization)||void 0===e?void 0:e.commerceTheme)?(0,_.jsx)("div",{className:"btn-scan",children:(0,_.jsxs)("div",{style:o,className:"tb_post_submit_btn",onClick:this.onShowCloseSubmitPicPopUp,children:[1==n.UgcSettings.onsite_qr_code_status?(0,_.jsx)("div",{className:"qr-image",children:(0,_.jsx)(u.Z,{level:"L",size:60,value:n.UgcSettings.onsite_popup_url})}):null,i.onsite_qr_code_btn_text?(0,_.jsxs)(_.Fragment,{children:[1==n.UgcSettings.onsite_qr_code_status?(0,_.jsx)("div",{className:"ts__qr_separator",children:(0,_.jsx)("div",{})}):"",(0,_.jsx)("div",{className:"ts_qr-text  tb-cTSfont-".concat(n.UgcSettings.onsite_font_varient_btn),style:l,children:(0,_.jsx)("div",{className:"ts_qr-text_wrap tb-cTSfont-".concat(n.UgcSettings.onsite_font_varient_btn),style:l,children:s||i.onsite_qr_code_status?i.onsite_qr_code_btn_text:s?i.onsite_btn_txt:"Submit a Post"})})]}):""]})}):(0,_.jsx)("div",{className:"ts_gst_btn-scan",style:o,children:(0,_.jsxs)("div",{className:"ts_gst_post_submit_btn",onClick:this.onShowCloseSubmitPicPopUp,children:[(0,_.jsxs)("div",{className:"ts_gst_qr-image",children:["1"==n.UgcSettings.onsite_qr_code_status?(0,_.jsx)(u.Z,{level:"L",size:60,value:n.UgcSettings.onsite_popup_url}):"",(0,_.jsx)("div",{className:"ts_gst_qr-text  tb-cTSfont-".concat(n.UgcSettings.font_varient),style:l,children:(0,_.jsx)("div",{className:"ts_gst_qr-text_wrap ".concat("1"==n.UgcSettings.onsite_qr_code_status?"wt_qrcode":"wo_qrcode"),children:i.onsite_qr_code_status&&s||i.onsite_qr_code_status?i.onsite_qr_code_btn_text:s?i.onsite_btn_txt:"Submit a Post"})})]}),(0,_.jsx)("div",{className:"ts_gst_qr-image_mobile",children:" Add Your Photo "})]})})}):""})}}]),a}(l.Component);e.default=(0,r.$j)((function(t){return{wallId:t.appData.wallID,onsite_status:t.appData.onsite_status}}),(function(t){return{showPopUP:function(e){return t((0,c.Bm)(e))}}}))(m)}}]);