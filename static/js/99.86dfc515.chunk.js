"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[99],{23099:function(t,e,i){i.r(e),i.d(e,{default:function(){return O}});var n=i(15671),o=i(43144),r=i(97326),a=i(60136),l=i(29388),s=i(72791),d=i(60364),c=i(85650),u=i(94003),p=i(1413),h=i(79335),m=i(96710),_=i(26958),v=i(4763),g=i(80184),f=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(t){var o;return(0,n.Z)(this,i),(o=e.call(this,t)).updateMediaSize=function(t){(0,o.props.setMediaSize)({mediaHeight:t.target.offsetHeight,mediaWidth:t.target.offsetHeight}),o.setState({mediaLoaded:!0})},o.state={isHotspot:!1,loadedImg:!1,mediaLoaded:!1,videoLoaded:!1,imgUrl:t.ImageUrl},o.myRef=s.createRef(),o}return(0,o.Z)(i,[{key:"UNSAFE_componentWillReceiveProps",value:function(t){var e=t.ImageUrl;this.state.imgUrl!==e&&this.setState({imgUrl:e,mediaLoaded:!1})}},{key:"render",value:function(){var t=this,e=this.props,i=e.item,n=(e.instaImg,e.ugc_products),o=(e.isVideoError,e.wall),r=(e.custmClass,e.ImageUrl),a=e.videoUrl,l=e.active,s=e.showHotspot,d=e.mediaWidth,c=e.mediaHeight,p=e.handleProgress,h=e.muted,_=this.state,f=_.loadedImg,x=_.mediaLoaded,y=_.videoLoaded;return(0,g.jsx)("div",{className:"tb_media_holder",children:l?(0,g.jsx)(g.Fragment,{children:2===i.type||4===i.type?(0,g.jsxs)("div",{className:"tb_img_holder",ref:this.myRef,onMouseEnter:function(){return s({showAll:!0})},onMouseLeave:function(){return s({showAll:!1})},style:{minHeight:x?null:c,minWidth:x?null:d},children:[2!=i.type&&4!=i.type||1!=i.hotspot||1!=i.ugc_personalizaion.UgcSetting.status?null:(0,g.jsx)(v.Z,{item:i,ugc_products:n,UgcSetting:i.ugc_personalizaion.UgcSetting}),(0,g.jsx)("img",{loading:"lazy",src:r,"data-src":r,onLoad:function(e){return t.setState({loadedImg:!0},(function(){return t.updateMediaSize(e)}))},onError:function(t){return(0,u.bO)(t,(function(){}))},"data-network":i.networkId,"data-filter-id":i.filterId,"data-stories":i.stories,"data-load":"0","data-item-id":i.id,"data-wall-id":o.Wall.id,alt:"popupImg"}),f?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)("div",{className:"sk_loader_product",children:(0,g.jsx)("div",{})})]}):1===i.type?(0,g.jsx)(g.Fragment,{}):3===i.type||5===i.type?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"tb_img_holder",style:{minHeight:x?null:c,minWidth:x?null:d},children:(0,g.jsx)("img",{loading:"lazy",src:r,style:y?{opacity:0}:{},onLoad:function(e){return t.setState({loadedImg:!0},(function(){return t.updateMediaSize(e)}))}})}),(0,g.jsx)("div",{className:"tb_video_holder",style:{minHeight:x?null:c,minWidth:x?null:d},children:(0,g.jsx)(m.Z,{style:{display:"contents"},className:"tb-detail-image-iframe",url:a,"data-type":"video",config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},progressInterval:100,"data-stories":i.stories,"data-filter-id":i.filterId,"data-network":i.networkId,"data-link":i.link,"data-wall-id":o.Wall.id,"data-item-id":i.id,"data-load":0,onError:function(t){(0,u.b3)(t)},autoPlay:!0,muted:h,onReady:function(e){return t.setState({videoLoaded:!0})},playsinline:!0,loop:!0,playing:!0,height:"100%",width:"auto",onProgress:function(t){return p(t)}})})]}):(0,g.jsx)(g.Fragment,{})}):(0,g.jsxs)("div",{className:"tb_img_holder",ref:this.myRef,children:[(0,g.jsx)("img",{loading:"lazy",src:r,"data-src":r,onLoad:function(e){return t.setState({loadedImg:!0},(function(){return t.updateMediaSize(e)}))},onError:function(t){return(0,u.bO)(t,(function(){}))},"data-network":i.networkId,"data-filter-id":i.filterId,"data-stories":i.stories,"data-load":"0","data-item-id":i.id,"data-wall-id":o.Wall.id,alt:"popupImg"}),2!=i.type&&4!=i.type||1!=i.hotspot||1!=i.ugc_personalizaion.UgcSetting.status?null:(0,g.jsx)(v.Z,{item:i,ugc_products:n,UgcSetting:i.ugc_personalizaion.UgcSetting})]})},"postID".concat(i.id))}}]),i}(s.Component),x=(0,d.$j)((function(t){return{mediaHeight:t.modalPop.mediaHeight,mediaWidth:t.modalPop.mediaWidth}}),(function(t){return{setMediaSize:function(e){return t({type:_.x0,payload:e})},showHotspot:function(e){return t((0,c.EG)(e))}}}))(f),y=i(72426),w=i.n(y),b=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),e.apply(this,arguments)}return(0,o.Z)(i,[{key:"render",value:function(){var t,e,i,n,o=this.props,r=o.item,a=o.personalization,l=o.wall,s=o.networkData,d=(t="#ffffff",e=l.ThemeRule.authorColor,i="#000000",(n=l.ThemeRule.cardColor)===t?t==e?i:e:n===i?i==e?t:e:t==e?i:e),c=r.author.isInstaUser,u=a.postAuthor,p=505==l.ThemeRule.iconType?s.color:"#ffffff"==l.ThemeRule.iconColor?"rgba(63, 66, 72, 0.3)":l.ThemeRule.iconColor,h={color:d,textDecoration:"none"};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"tb_post_author",children:[0!=u||4==a.commerceTheme?c?"":(0,g.jsxs)("div",{className:"tb_author_details",children:[(0,g.jsx)("div",{className:"tb_sc_author_profile",children:(0,g.jsx)("img",{src:r.author.picture,onError:function(t){t.target.onerror=null,t.target.src=r.author.errorPic},alt:""})}),(0,g.jsxs)("div",{className:"tb_author_detail_outer",children:[(0,g.jsx)("div",{className:"tb_author_usrname",style:h,children:(0,g.jsx)("a",{href:r.link,target:"_blank",className:"m_post_title",rel:"noreferrer",style:h,children:r.author.name})}),(0,g.jsx)("div",{className:"tb_author_info",children:(0,g.jsx)("div",{className:"tb_post_time",style:h,children:w()(new Date(1e3*r.createdAt)).fromNow()})})]})]}):"",(0,g.jsx)("div",{className:"tb_social_ico","data-network":s.name,children:(0,g.jsx)("div",{className:"tb__icon tb-".concat(s.icon.replace("fa-","")),style:{color:p},children:(0,g.jsx)("div",{})})})]})})}}]),i}(s.Component),j=b,k=i(92381),P=i(54261),C=i(34867),N=i(80844),I=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){var t;(0,n.Z)(this,i);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={isTrimEnable:!1},t.onClickReadText=function(e){var i=t.state.isTrimEnable;t.setState({isTrimEnable:!i})},t}return(0,o.Z)(i,[{key:"render",value:function(){var t,e,i,n,o,r,a,l,s,d,c,p,h,m,_,v,f,x=this.props,y=x.item,w=x.wall,b=this.state.isTrimEnable,j={backgroundImage:"url(".concat(k.KA).concat(y.networkId,"/").concat(y.rating,".png)")},I={fontFamily:null===w||void 0===w||null===(t=w.ThemeRule)||void 0===t?void 0:t.css_font,fontSize:1==y.type?1==(null===w||void 0===w||null===(e=w.Personalization)||void 0===e?void 0:e.textDecorate)?null===w||void 0===w||null===(i=w.ThemeRule)||void 0===i?void 0:i.fontSizeDecorate:null===w||void 0===w||null===(n=w.ThemeRule)||void 0===n?void 0:n.fontSizeNormal:null===w||void 0===w||null===(o=w.ThemeRule)||void 0===o?void 0:o.fontSize,color:(m="#ffffff",_=null===w||void 0===w||null===(r=w.ThemeRule)||void 0===r?void 0:r.fontColor,v="#000000",f=null===w||void 0===w||null===(a=w.ThemeRule)||void 0===a?void 0:a.cardColor,f===m?m==_?v:_:f===v?v==_?m:_:m==_?v:_)},S=(0,u.Fx)(y.content),U=String(S).substring(0,200),Z=b?S:U;return w&&w.ThemeRule&&Object.keys(w.ThemeRule).length>0&&(0,g.jsxs)("div",{className:"tb_post_content",children:[null!=y.rating&&0!=y.rating&&(0,g.jsxs)("div",{className:"tb_post_rating_wrap",children:[" ",(0,g.jsx)("div",{className:"tb_post_rating",style:j,children:(0,g.jsx)("div",{})})," "]}),(0,g.jsx)("div",{className:"tb_post_rating_wrap",children:" "}),null!==w&&void 0!==w&&null!==(l=w.ThemeRule)&&void 0!==l&&l.popupContent?(0,g.jsxs)("div",{className:"tb_post_content001 ".concat(1===(null===w||void 0===w||null===(s=w.Personalization)||void 0===s?void 0:s.textDecorate)&&1===y.type?y.textDecoClass:"","   tb-cTSfont-").concat(null===w||void 0===w||null===(d=w.ThemeRule)||void 0===d?void 0:d.font_varient),style:I,children:[0!==(null===w||void 0===w||null===(c=w.Personalization)||void 0===c?void 0:c.hashtag_highlight)?1===(null===w||void 0===w||null===(p=w.Personalization)||void 0===p?void 0:p.hashtag_all)?N((0,C.ZP)(Z),/#(\w+)/g,(function(t,e){var i;return(0,g.jsxs)("div",{className:"ts_popup_hash_tag",style:{color:null===w||void 0===w||null===(i=w.Personalization)||void 0===i?void 0:i.hashtag_color,fontWeight:"bold"},children:["#",t]},(0,P.Z)())})):1===(null===w||void 0===w||null===(h=w.Personalization)||void 0===h?void 0:h.hashtag_feed)?N((0,C.ZP)(Z),y.hash.hashString,(function(t,e){var i;return(0,g.jsx)("div",{className:"ts_popup_hash_tag",style:{color:null===w||void 0===w||null===(i=w.Personalization)||void 0===i?void 0:i.hashtag_color,fontWeight:"bold"},children:t},(0,P.Z)())})):(0,C.ZP)(Z):(0,C.ZP)(Z),Z.length>199?this.state.isTrimEnable?(0,g.jsx)("a",{className:"lesslink",onClick:this.onClickReadText,children:" Read Less"}):(0,g.jsx)("a",{className:"morelink",onClick:this.onClickReadText,children:" Read More..."}):""]}):""]})}}]),i}(s.Component),S=I,U=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){var t;(0,n.Z)(this,i);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).onShareFacebook=function(e){var i="https://www.facebook.com/sharer/sharer.php?display=popup&u="+t.props.item.share.facebook;window.open(i,"sharer","toolbar=0,status=0,resizable=1,width=626,height=436")},t.onTwitterClick=function(e){var i=t.props,n=i.item,o=i.wall;e&&(0,c.S5)({type:2,action:2,wall:o.Wall.id,feed:n.feedId,post:n.referenceId})},t.linkedinShareCount=function(e){var i=t.props,n=i.item,o=i.wall;(0,c.S5)({type:2,action:2,wall:o.Wall.id,feed:n.feedId,post:n.referenceId})},t}return(0,o.Z)(i,[{key:"render",value:function(){var t=this.props,e=t.wall,i=t.item,n={color:505==e.ThemeRule.iconType?"":"#ffffff"==e.ThemeRule.iconColor?"rgba(63, 66, 72, 0.3)":e.ThemeRule.iconColor};505==e.ThemeRule.iconType||"#ffffff"==e.ThemeRule.iconColor||e.ThemeRule.iconColor;return(0,g.jsx)("div",{className:"tb_post_footer",style:{backgroundColor:e.ThemeRule.cardColor},children:(0,g.jsxs)("div",{className:"tb_share_ico",children:[(0,g.jsx)("div",{className:"tb_share_ico_list",children:(0,g.jsx)("a",{onClick:this.onShareFacebook,className:"fbPanel",children:(0,g.jsx)("div",{className:"tb__icon tb-facebook-f",style:n,children:(0,g.jsx)("div",{})})})}),(0,g.jsx)("div",{className:"tb_share_ico_list",children:(0,g.jsx)("a",{onClick:this.onTwitterClick,href:i.share.twitter,className:"twPanel",target:"_blank",children:(0,g.jsx)("div",{className:"tb__icon tb-twitter",style:n,children:(0,g.jsx)("div",{})})})}),(0,g.jsx)("div",{className:"tb_share_ico_list",children:(0,g.jsx)("a",{onClick:this.linkedinShareCount,href:i.share.linkedin,target:"_blank",children:(0,g.jsx)("div",{className:"tb__icon tb-linkedin",style:n,children:(0,g.jsx)("div",{})})})}),i.networkId&&null!=i.link?(0,g.jsx)("div",{className:"tb_share_ico_list",children:(0,g.jsxs)("a",{href:i.link,className:"linkedinPanel",target:"_blank",children:[(0,g.jsx)("div",{className:"tb__icon tb-link",style:n,children:(0,g.jsx)("div",{})})," "]})}):null]})})}}]),i}(s.PureComponent),Z=i(54270),z=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),e.apply(this,arguments)}return(0,o.Z)(i,[{key:"render",value:function(){var t=this.props,e=t.networkData,i=t.ctaSetting;return i&&Object.keys(i).length>0?(0,g.jsxs)(Z.q,{children:[null!==i&&void 0!==i&&i.title_link_font?(0,g.jsx)("link",{href:"".concat(k.jN,"/").concat(null===i||void 0===i?void 0:i.title_link_font,".css"),rel:"stylesheet"}):null,null!==i&&void 0!==i&&i.price_link_font?(0,g.jsx)("link",{href:"".concat(k.jN,"/").concat(null===i||void 0===i?void 0:i.price_link_font,".css"),rel:"stylesheet"}):null,null!==i&&void 0!==i&&i.feature_link_font?(0,g.jsx)("link",{href:"".concat(k.jN,"/").concat(null===i||void 0===i?void 0:i.feature_link_font,".css"),rel:"stylesheet"}):null,null!==i&&void 0!==i&&i.discount_link_font?(0,g.jsx)("link",{href:"".concat(k.jN,"/").concat(null===i||void 0===i?void 0:i.discount_link_font,".css"),rel:"stylesheet"}):null,null!==i&&void 0!==i&&i.feature_link_font?(0,g.jsx)("link",{href:"".concat(k.jN,"/").concat(null===i||void 0===i?void 0:i.feature_link_font,".css"),rel:"stylesheet"}):null,null!==i&&void 0!==i&&i.button_link_font?(0,g.jsx)("link",{href:"".concat(k.jN,"/").concat(null===i||void 0===i?void 0:i.button_link_font,".css"),rel:"stylesheet"}):null,(0,g.jsx)("style",{children:"\n        .tb_pro_title_user {font-family: ".concat(null===i||void 0===i?void 0:i.feature_css_font,"; font-size: ").concat(null===i||void 0===i?void 0:i.feature_font_size,"; color: ").concat(null===i||void 0===i?void 0:i.feature_text_color,"}\n        .tb_author_avatar0012{background: ").concat(e.color,"!important}\n        .ugc-product-title{ font-family: ").concat(null===i||void 0===i?void 0:i.title_css_font,"!important; color: ").concat(null===i||void 0===i?void 0:i.product_title_color,"!important; font-size:").concat(null===i||void 0===i?void 0:i.product_title_font_size,"px!important}\n        .tb_pro_discount_price{ font-family: ").concat(null===i||void 0===i?void 0:i.discount_css_font,"!important; color: ").concat(null===i||void 0===i?void 0:i.discount_price_color,"!important; font-size:").concat(null===i||void 0===i?void 0:i.discount_price_font_size,"px!important}\n        .tb_pro_price{ font-family: ").concat(null===i||void 0===i?void 0:i.price_css_font,"!important; color: ").concat(null===i||void 0===i?void 0:i.original_price_color,"!important; font-size:").concat(null===i||void 0===i?void 0:i.original_price_font_size,"px!important}\n        .ugc-product-link a{ font-family: ").concat(null===i||void 0===i?void 0:i.button_css_font,"!important; color: ").concat(null===i||void 0===i?void 0:i.buy_now_color,"!important; font-size:").concat(i.buy_font_size,"px!important; background:").concat(i.buy_now_background,"!important;}\n        ")})]}):""}}]),i}(s.Component),T=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){var t;(0,n.Z)(this,i);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={prdImgLoaded:!1,noImg:!1},t}return(0,o.Z)(i,[{key:"render",value:function(){var t=this,e=this.props.imgUrl,i=this.state,n=i.prdImgLoaded,o=i.noImg;return(0,g.jsxs)("div",{className:"ugc-product-images ".concat(o?"tb_popup_image":""),style:{display:o?"none":"block"},children:[(0,g.jsx)("img",{src:e,style:{height:"0%",display:"none"},onLoad:function(){return t.setState({prdImgLoaded:!0})},onError:function(){return t.setState({noImg:!0})},alt:""}),n?(0,g.jsxs)("div",{className:"ugc_pro_img_holder ",style:{backgroundImage:"url(".concat(e,")")},children:[(0,g.jsx)("div",{})," "]}):(0,g.jsx)("div",{className:"sk_loader_product_thumb",children:(0,g.jsx)("div",{})})]})}}]),i}(s.Component),L=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){var t;(0,n.Z)(this,i);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={prdImgLoaded:!1,noImg:!1},t.openUrl=function(e){return function(i){var n=t.props.ctaSetting;2==parseInt(null===n||void 0===n?void 0:n.tab_target)?window.parent.location.href=e:window.open(e,"_blank")}},t}return(0,o.Z)(i,[{key:"render",value:function(){var t=this,e=this.props,i=e.item,n=e.ugc_products,o=e.wall,r=e.showHotspot,a=this.props.ctaSetting;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"tb_shop_cont",children:[(0,g.jsx)("div",{className:"tb_pro_title tb_pro_title_user tb-cTSfont-".concat(null===a||void 0===a?void 0:a.feature_font_varient),style:{fontSize:null===a||void 0===a?void 0:a.feature_font_size},children:(0,C.ZP)(null===a||void 0===a?void 0:a.feature_text)}),(0,g.jsx)("div",{className:"ts_modal_product tb_modal_pro",children:n.map((function(e,n){return(0,g.jsx)("div",{className:"tb_pro_item",children:(0,g.jsxs)("div",{className:"tb_pro_wrapp product-item-".concat(n),onMouseEnter:function(){return r({showHotspot:!0,index:n,hotspotId:e.id})},onMouseLeave:function(){return r({showHotspot:!1,index:n,hotspotId:e.id})},children:[(0,g.jsx)(T,{imgUrl:e.UgcProduct.product_image}),i.ugc_personalizaion&&a&&e.UgcProduct.product_title?(0,g.jsxs)("div",{className:"ugc-product-title tb-cTSfont-".concat(null===a||void 0===a?void 0:a.title_font_varient),children:[" ",e.UgcProduct.product_title]}):null,e.UgcProduct.product_price>0||e.UgcProduct.product_discount>0?(0,g.jsx)("div",{className:"ugc-product-price",children:(0,g.jsxs)("div",{className:"tb_pro_price tb-cTSfont-".concat(null===a||void 0===a?void 0:a.price_font_varient),children:[" ",e.UgcProduct.price_currency_symbol," ",Math.trunc(100*(e.UgcProduct.product_discount>0?e.UgcProduct.product_discount:e.UgcProduct.product_price))/100]})}):null,e.UgcProduct.product_discount>0&&e.UgcProduct.product_discount!=e.UgcProduct.product_price?(0,g.jsxs)("div",{className:"tb_pro_discount_price  tb-cTSfont-".concat(null===a||void 0===a?void 0:a.discount_font_varient),children:[e.UgcProduct.price_currency_symbol," ",Math.trunc(100*e.UgcProduct.product_price)/100]}):null,(0,g.jsx)("div",{className:"ugc-product-link",children:(0,g.jsx)("a",{onClick:t.openUrl(e.UgcProduct.product_url),className:"tb-cTSfont-".concat(null===a||void 0===a?void 0:a.button_font_varient),target:o&&o.User&&"102810"!=o.User.id?"_blank":"",children:null===a||void 0===a?void 0:a.buy_now_text})})]})},n)}))})]})})}}]),i}(s.Component),R=(0,d.$j)((function(t){return{ctaSetting:t.appData.ctaSetting}}),(function(t){return{showHotspot:function(e){return t((0,c.EG)(e))}}}))(L),A=i(84579);function E(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important")}var D=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),e.apply(this,arguments)}return(0,o.Z)(i,[{key:"render",value:function(){return(0,g.jsxs)("a",{href:k.Cx,target:"_blank",rel:"noreferrer",ref:function(t){t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-40px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding","4px 0","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("font-family","Inter","important"),t.style.setProperty("text-decoration","none","important"),E(t))},children:[(0,g.jsx)("div",{ref:function(t){t&&(t.style.setProperty("font-size","14px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","6px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","Inter","important"),E(t))},children:"Powered By"}),(0,g.jsx)("div",{ref:function(t){t&&(t.style.setProperty("background-image","url(https://cloud.taggbox.com/taggshop/assets/images/home-page/tagshop-logo-white.svg)","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","35px","important"),t.style.setProperty("min-height","35px","important"),t.style.setProperty("width","102px","important"),t.style.setProperty("min-width","102px","important"),E(t))}})]})}}]),i}(s.PureComponent),M=(i(71180),i(48282)),W=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){var t;(0,n.Z)(this,i);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={activeSlider:0},t.changeActive=function(e){t.setState({activeSlider:e})},t}return(0,o.Z)(i,[{key:"render",value:function(){var t=this,e=this.props,i=e.item,n=e.instaImg,o=e.ugc_products,r=e.isVideoError,a=e.wall,l=this.state.activeSlider;return(0,g.jsx)("div",{className:"tb_post_modal_media_wrapper___",children:(0,g.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,g.jsxs)(M.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!0,speed:1e3,gap:0,autoplay:!1,padding:0,pagination:!0,arrows:!0,focus:"center",Slide:"123456",classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.myRef,onMove:function(e,i){t.changeActive(i)},children:[(0,g.jsx)(M.Gj,{children:i.imageList.map((function(t,e){return(0,g.jsx)(M.jw,{style:{margin:0,padding:0},children:(0,g.jsx)("div",{className:"tb_post_modal_slide_list",children:(0,g.jsx)(x,{wall:a,item:t,instaImg:n,ugc_products:o,isVideoError:r,custmClass:"ts_popup_slider",ImageUrl:t.postFile,videoUrl:t.mediaFile,active:e==l})})},"psId".concat(e))}))}),(0,g.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,g.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-chevron-left",children:(0,g.jsx)("div",{})}),(0,g.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon  tb-chevron-right",children:(0,g.jsx)("div",{})})]})]})})})}}]),i}(s.PureComponent),H=function(t){var e=t.item,i=t.personalization,n=t.currentIndex,o=t.ugc_products,r=t.wall;return(0,g.jsx)(g.Fragment,{children:e.ugc_personalizaion.UgcSetting&&1==e.ugc_personalizaion.UgcSetting.status&&1==i.themeType&&e.ugc_products&&Object.keys(e.ugc_products).length>0?(0,g.jsxs)("div",{className:"tb_post_wrap_in",children:[(0,g.jsx)(R,{wall:r,item:e,personalization:i,currentIndex:n,ugc_products:o})," "]}):null})},F=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){var t;(0,n.Z)(this,i);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={currentIndex:t.props.currentIndex,item:t.props.item,isVideoError:!1,windowWidth:window.innerWidth,isAuthorImagevalid:!0,instaImg:(0,u.TI)(t.props.imgData,t.props.item.link),isHotspot:!1},t.onErrorVideo=function(e){return t.setState({isVideoError:!0})},t.onMediaUpdate=function(e){return t.setState({isAuthorImagevalid:!1})},t}return(0,o.Z)(i,[{key:"componentDidMount",value:function(){var t=this.props,e=t.currentIndex,i=t.item,n=t.slideWithArrowKeys,o=(0,u.uB)(i.author.picture);this.setState({currentIndex:e,item:i,isAuthorImagevalid:o,instaImg:(0,u.TI)(this.props.imgData,this.props.item.link)});var r=document.querySelector("#modalPost0");r&&r.focus(),document.addEventListener("keydown",n)}},{key:"componentWillReceiveProps",value:function(t){var e=t.currentIndex,i=t.item,n=(0,u.uB)(i.author.picture);this.setState({currentIndex:e,item:i,isVideoError:!1,isAuthorImagevalid:n,instaImg:(0,u.TI)(this.props.imgData,this.props.item.link)})}},{key:"render",value:function(){var t=this.props,e=t.personalization,i=t.onClosePopUp,n=t.featuredPopSliderChangeIndex,o=t.slideWithArrowKeys,r=t.ctaSetting,a=t.viewOnText,l=t.wall,s=t.webFilters,d=this.state,c=d.currentIndex,m=d.item,_=d.isVideoError,v=d.windowWidth,f=d.instaImg,y=(0,u.HS)(m.ugc_products),w=(0,u.EH)(m.network,s),b={backgroundColor:l.ThemeRule.cardColor};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(z,{wall:l,item:m,networkData:w,ctaSetting:r}),(0,g.jsx)("div",{className:"modalId".concat(m.id," tb_modal_001 tb_fade ").concat(4==m.type||5==m.type||m.ugc_products&&Object.keys(m.ugc_products).length>0?"modal-text-image":2==m.type||3==m.type?"modal-only-image":"modal-only-text"),onKeyDown:o,onKeyPress:o,onLoad:o,onClick:function(t){return t.currentTarget==t.target&&i(t)},children:(0,g.jsx)("div",{className:"tb_modal_dialog taggModal",children:(0,g.jsxs)("div",{className:"tb_conetent",children:[(0,g.jsxs)("div",{className:"tb_modal_head",children:[(0,g.jsxs)("div",{className:"tb_modal_header",children:[(0,g.jsx)("div",{className:"tb_post_link_small",children:(0,g.jsx)("div",{className:"tb_post_address",children:(0,g.jsxs)("a",{className:"Instagram Business",rel:"noreferrer",target:"_blank",href:m.link,children:[(0,g.jsxs)("span",{children:[a," ",w.name]}),(0,g.jsxs)("svg",{id:"Group_4485","data-name":"Group 4485",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,g.jsx)("rect",{id:"Rectangle_2094","data-name":"Rectangle 2094",width:"48",height:"48",fill:"none",opacity:"0"}),(0,g.jsx)("g",{id:"Group",transform:"translate(7.954 4.094)",children:(0,g.jsx)("path",{id:"Path",d:"M33.729,21.333a1.094,1.094,0,0,1,1.559,0l6.837,6.837a1.094,1.094,0,0,1,0,1.559l-6.837,6.837a1.1,1.1,0,0,1-1.559-1.559l6.044-6.072-6.044-6.072a1.094,1.094,0,0,1,0-1.53Z",transform:"translate(-33.407 -21.007)",fill:"#545454"})})]})]})})}),(0,g.jsx)("div",{className:"tb_close_wrap",children:(0,g.jsx)("div",{className:"tb_close_btn","data-dismiss":"modal",onClick:i,children:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:(0,g.jsx)("path",{d:"M19.457 18.8906C19.1055 19.2422 18.4609 19.2422 18.1094 18.8906L10.375 11.0977L2.58203 18.8906C2.23047 19.2422 1.58594 19.2422 1.23438 18.8906C0.882812 18.5391 0.882812 17.8945 1.23438 17.543L9.02734 9.75L1.23438 2.01562C0.882812 1.66406 0.882812 1.01953 1.23438 0.667969C1.58594 0.316406 2.23047 0.316406 2.58203 0.667969L10.375 8.46094L18.1094 0.667969C18.4609 0.316406 19.1055 0.316406 19.457 0.667969C19.8086 1.01953 19.8086 1.66406 19.457 2.01562L11.6641 9.75L19.457 17.543C19.8086 17.8945 19.8086 18.5391 19.457 18.8906Z",fill:"white"})})})})]}),1==l.Personalization.popupSlideShow?(0,g.jsxs)("div",{className:"tb_navigation tb_nav_content",children:[(0,g.jsx)("div",{className:"tb_nav tb_prev_btn",onClick:n(c-1),children:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"27",viewBox:"0 0 15 27",fill:"none",children:(0,g.jsx)("path",{d:"M13.7109 0.917964C13.9453 1.09375 14.0039 1.32812 14.0039 1.5625C14.0039 1.79687 13.9453 2.03125 13.7695 2.20703L3.10547 13.75L13.7109 25.3516C14.0625 25.7031 14.0625 26.2891 13.6523 26.6406C13.3008 26.9922 12.7148 26.9922 12.3633 26.582L1.11328 14.3945C0.761719 14.043 0.761719 13.5156 1.11328 13.1641L12.3633 0.976558C12.7734 0.566402 13.3594 0.566402 13.7109 0.917964Z",fill:"white"})})}),(0,g.jsx)("div",{className:"tb_nav tb_nxt_btn",id:"wq12",onClick:n(c+1),children:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"27",viewBox:"0 0 14 27",fill:"none",children:(0,g.jsx)("path",{d:"M0.980469 26.6406C0.746094 26.4648 0.628906 26.2305 0.628906 25.9961C0.628906 25.7617 0.746094 25.5273 0.921875 25.3516L11.5273 13.8086L0.921875 2.20703C0.570312 1.85546 0.570312 1.26953 0.980469 0.917964C1.33203 0.566402 1.91797 0.566402 2.26953 0.976558L13.5195 13.1641C13.8711 13.5156 13.8711 14.043 13.5195 14.3945L2.26953 26.582C1.91797 26.9922 1.33203 26.9922 0.980469 26.6406Z",fill:"white"})})})]}):null]}),(0,g.jsx)("div",{className:"tb_modal_body",style:b,children:(0,g.jsxs)("div",{className:"tb_modal_body_wrap",children:[(0,g.jsxs)("div",{className:"tb_details_left tb_modal_network-".concat(m.networkId),children:[1==l.Personalization.popupSlideShow?(0,g.jsxs)("div",{className:"tb_navigation tb_nav_img",children:[(0,g.jsx)("div",{className:"tb_nav tb_prev_btn",onClick:n(c-1),children:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"27",viewBox:"0 0 15 27",fill:"none",children:(0,g.jsx)("path",{d:"M13.7109 0.917964C13.9453 1.09375 14.0039 1.32812 14.0039 1.5625C14.0039 1.79687 13.9453 2.03125 13.7695 2.20703L3.10547 13.75L13.7109 25.3516C14.0625 25.7031 14.0625 26.2891 13.6523 26.6406C13.3008 26.9922 12.7148 26.9922 12.3633 26.582L1.11328 14.3945C0.761719 14.043 0.761719 13.5156 1.11328 13.1641L12.3633 0.976558C12.7734 0.566402 13.3594 0.566402 13.7109 0.917964Z",fill:"white"})})}),(0,g.jsx)("div",{className:"tb_nav tb_nxt_btn ",onClick:n(c+1),children:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"27",viewBox:"0 0 14 27",fill:"none",children:(0,g.jsx)("path",{d:"M0.980469 26.6406C0.746094 26.4648 0.628906 26.2305 0.628906 25.9961C0.628906 25.7617 0.746094 25.5273 0.921875 25.3516L11.5273 13.8086L0.921875 2.20703C0.570312 1.85546 0.570312 1.26953 0.980469 0.917964C1.33203 0.566402 1.91797 0.566402 2.26953 0.976558L13.5195 13.1641C13.8711 13.5156 13.8711 14.043 13.5195 14.3945L2.26953 26.582C1.91797 26.9922 1.33203 26.9922 0.980469 26.6406Z",fill:"white"})})})]}):null,m.file?m.imageList&&m.imageList.length>0?(0,g.jsx)(W,{wall:l,item:m,instaImg:f,ugc_products:y,isVideoError:_}):(0,g.jsx)(x,{wall:l,item:m,instaImg:f,ugc_products:y,isVideoError:_,custmClass:"tb_media_wrap_002",ImageUrl:m.filename,videoUrl:m.mediaUrl,active:!0}):""]}),(0,g.jsx)("div",{className:"tb_details_right",style:b,children:(0,g.jsx)("div",{className:"tb_content_wrap",children:(0,g.jsxs)("div",{className:"tb_post_detail_wrap",children:[v<991?(0,g.jsx)("div",{className:"tb_post_wrapper",children:(0,g.jsxs)("div",{className:"tb_modal_content_001",children:[(0,g.jsx)(H,{item:m,wall:l,personalization:e,currentIndex:c,ugc_products:y}),(0,g.jsx)(j,{item:m,personalization:e,isAuthorImagevalid:this.state.isAuthorImagevalid,onMediaUpdate:this.onMediaUpdate,wall:l,networkData:w}),(0,g.jsx)(A.Z,{children:(0,g.jsx)(S,{item:m,personalization:e,currentIndex:c,wall:l})})]})}):(0,g.jsx)(h.$B,{autoHide:!0,autoHeightMax:200,className:"tb_post_wrapper",renderTrackHorizontal:function(t){return(0,g.jsx)("div",(0,p.Z)((0,p.Z)({},t),{},{className:"track-horizontal",style:{display:"none"}}))},children:(0,g.jsxs)("div",{className:"tb_modal_content_001",children:[(0,g.jsx)(H,{item:m,wall:l,personalization:e,currentIndex:c,ugc_products:y}),(0,g.jsx)(j,{item:m,personalization:e,isAuthorImagevalid:this.state.isAuthorImagevalid,onMediaUpdate:this.onMediaUpdate,wall:l,networkData:w}),(0,g.jsx)(A.Z,{children:(0,g.jsx)(S,{item:m,personalization:e,currentIndex:c,wall:l})})]})}),l.ThemeRule.socialAction?(0,g.jsx)(U,{wall:l,item:m}):""]})})})]})}),l&&l.UserRule&&"1"==l.UserRule.taggBranding?(0,g.jsx)(D,{}):""]})})})]})}}]),i}(s.PureComponent),B=(0,s.lazy)((function(){return i.e(91).then(i.bind(i,57091))})),K=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(){var t;(0,n.Z)(this,i);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))).state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,platform:null,imgData:[],type:""},t.closeCommercePopUP=function(e){(0,u.st)("remove"),t.setState({isEnable:0,currentIndex:null,type:""}),t.props.closePopUP();var i=document.getElementsByTagName("html");i&&i[0]&&(i[0].style.overflow="")},t.getCommercePopUPEvent=function(e){void 0!==e&&""!==e&&e.card&&("post"===e.type?t.setState({url:"",isEnable:1,eventData:e,currentIndex:e.index,completeData:e.idArray,viewOnText:e.viewOnText,shareText:e.shareText,windowParent:e,imgData:e.imgData,personalization:null===e||void 0===e?void 0:e.personalization,type:e.type},(function(){return t.CommercePopUPSlideWithArrowKey()})):"submit-pic"===e.type&&t.setState({isEnable:1,type:e.type,windowParent:e}))},t.featuredPopSliderChangeIndex=function(e){return function(i){var n=t.state.eventData;-1===e?t.setState({currentIndex:n.idArray.length-1}):t.setState({currentIndex:n.idArray.length===e?0:e})}},t.SliderWithKey=function(e){var i=t.state.eventData;-1===e?t.setState({currentIndex:i.idArray.length-1}):t.setState({currentIndex:i.idArray.length===e?0:e})},t.CommercePopUPSlideWithArrowKey=function(e){var i=t.state.personalization;if(i&&1===i.popupSlideShow){e=e||window.event;var n=(0,r.Z)(t);e&&e.keyCode&&void 0!==e.keyCode&&(37===e.keyCode?n.SliderWithKey(n.state.currentIndex-1):39===e.keyCode?n.SliderWithKey(n.state.currentIndex+1):27===e.keyCode&&t.closeCommercePopUP())}},t}return(0,o.Z)(i,[{key:"componentDidMount",value:function(){var t=this.props.data;this.getCommercePopUPEvent(t);var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="hidden")}},{key:"render",value:function(){var t=this.state,e=t.viewOnText,i=t.isEnable,n=t.currentIndex,o=t.personalization,r=t.completeData,a=t.eventData,l=t.url,d=t.platform,c=t.imgData,u=t.type,p=null;"post"===u&&(p=-1===n?r[a.idArray.length-1]:r[n]);var h=this.props,m=h.wall,_=h.webFilters;return 1===i&&m&&"submit-pic"===u?(0,g.jsx)(s.Suspense,{fallback:null,children:(0,g.jsx)(B,{wall:m,wallId:m.Wall.id,onClosePopUp:this.closeCommercePopUP})}):1===i&&"post"===u?(0,g.jsx)(F,{ctaSetting:this.props.ctaSetting,webFilters:_,wall:m,item:p,onClosePopUp:this.closeCommercePopUP,currentIndex:n,personalization:o,viewOnText:e,slideWithArrowKeys:this.CommercePopUPSlideWithArrowKey,featuredPopSliderChangeIndex:this.featuredPopSliderChangeIndex,hostUrl:l,platform:d,imgData:c}):null}}]),i}(s.PureComponent),O=(0,d.$j)((function(t){return{wall:t.appData.wall,webFilters:t.appData.webFilters,ctaSetting:t.appData.ctaSetting}}),(function(t){return{closePopUP:function(e){return t((0,c.zj)(e))}}}))(K)}}]);
//# sourceMappingURL=99.86dfc515.chunk.js.map