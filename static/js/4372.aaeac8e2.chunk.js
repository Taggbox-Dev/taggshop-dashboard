"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[4372],{94372:function(e,n,r){r.d(n,{Z:function(){return I}});var o=r(1413),t=r(45987),i=r(42982),a=r(70885),l=r(46106),u=r(47313),s=r(77901),c=r(72891),p=Math.pow(2,31)-1;function f(e,n,r){var o=r-Date.now();e.current=o<=p?setTimeout(n,o):setTimeout((function(){return f(e,n,r)}),p)}function d(){var e=(0,s.Z)(),n=(0,u.useRef)();return(0,c.Z)((function(){return clearTimeout(n.current)})),(0,u.useMemo)((function(){var r=function(){return clearTimeout(n.current)};return{set:function(o,t){void 0===t&&(t=0),e()&&(r(),t<=p?n.current=setTimeout(o,t):f(n,o,Date.now()+t))},clear:r}}),[])}r(21024);var v=r(79859),h=r(21369),Z=r(46123),w=r.n(Z),m=r(1168),g=r(6994),y=r(16141),E=r(89190),b=r(14987),C=r(29650),x=r(94965),P=function(){};var k=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.disabled,t=r.clickTrigger,i=n||P;(0,x.Z)(e,i,{disabled:o,clickTrigger:t});var a=(0,C.Z)((function(e){27===e.keyCode&&i(e)}));(0,u.useEffect)((function(){if(!o&&null!=e){var n=(0,b.Z)((0,x.f)(e)),r=(n.defaultView||window).event,t=(0,E.Z)(n,"keyup",(function(e){e!==r?a(e):r=void 0}));return function(){t()}}}),[e,o,a])},O=r(76350),T=r(14395),j=r(62633),R=u.forwardRef((function(e,n){var r=e.flip,o=e.offset,t=e.placement,i=e.containerPadding,l=e.popperConfig,s=void 0===l?{}:l,c=e.transition,p=e.runTransition,f=(0,g.Z)(),d=(0,a.Z)(f,2),v=d[0],Z=d[1],w=(0,g.Z)(),E=(0,a.Z)(w,2),b=E[0],C=E[1],x=(0,h.Z)(Z,n),P=(0,O.Z)(e.container),R=(0,O.Z)(e.target),F=(0,u.useState)(!e.show),_=(0,a.Z)(F,2),N=_[0],S=_[1],U=(0,y.Z)(R,v,(0,T.ZP)({placement:t,enableEvents:!!e.show,containerPadding:i||5,flip:r,offset:o,arrowElement:b,popperConfig:s}));e.show&&N&&S(!1);var D=e.show||!N;if(k(v,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!D)return null;var M=e.onExit,B=e.onExiting,H=e.onEnter,z=e.onEntering,A=e.onEntered,V=e.children(Object.assign({},U.attributes.popper,{style:U.styles.popper,ref:x}),{popper:U,placement:t,show:!!e.show,arrowProps:Object.assign({},U.attributes.arrow,{style:U.styles.arrow,ref:C})});return V=(0,j.sD)(c,p,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:V,onExit:M,onExiting:B,onExited:function(){S(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:H,onEntering:z,onEntered:A}),P?m.createPortal(V,P):null}));R.displayName="Overlay";var F=R,_=r(81444),N=r(67742),S=r(68524),U=r(80035);var D=r(22868),M=r(27200),B=r(46417),H=["children","transition","popperConfig"],z={transition:D.Z,rootClose:!1,show:!1,placement:"top"};var A=u.forwardRef((function(e,n){var r=e.children,i=e.transition,l=e.popperConfig,s=void 0===l?{}:l,c=(0,t.Z)(e,H),p=(0,u.useRef)({}),f=(0,g.Z)(),d=(0,a.Z)(f,2),v=d[0],Z=d[1],m=function(e){var n=(0,u.useRef)(null),r=(0,S.vE)(void 0,"popover"),o=(0,u.useMemo)((function(){return{name:"offset",options:{offset:function(){return n.current&&(0,N.Z)(n.current,r)?e||U.Z.POPPER_OFFSET:e||[0,0]}}}}),[e,r]);return[n,[o]]}(c.offset),y=(0,a.Z)(m,2),E=y[0],b=y[1],x=(0,h.Z)(n,E),P=!0===i?D.Z:i||void 0,k=(0,C.Z)((function(e){Z(e),null==s||null==s.onFirstUpdate||s.onFirstUpdate(e)}));return(0,_.Z)((function(){v&&(null==p.current.scheduleUpdate||p.current.scheduleUpdate())}),[v]),(0,B.jsx)(F,(0,o.Z)((0,o.Z)({},c),{},{ref:x,popperConfig:(0,o.Z)((0,o.Z)({},s),{},{modifiers:b.concat(s.modifiers||[]),onFirstUpdate:k}),transition:P,children:function(e,n){var t,a,l=n.arrowProps,s=n.popper,c=n.show;!function(e,n){var r=e.ref,o=n.ref;e.ref=r.__wrapped||(r.__wrapped=function(e){return r((0,M.Z)(e))}),n.ref=o.__wrapped||(o.__wrapped=function(e){return o((0,M.Z)(e))})}(e,l);var f=null==s?void 0:s.placement,d=Object.assign(p.current,{state:null==s?void 0:s.state,scheduleUpdate:null==s?void 0:s.update,placement:f,outOfBoundaries:(null==s||null==(t=s.state)||null==(a=t.modifiersData.hide)?void 0:a.isReferenceHidden)||!1});return"function"===typeof r?r((0,o.Z)((0,o.Z)((0,o.Z)({},e),{},{placement:f,show:c},!i&&c&&{className:"show"}),{},{popper:d,arrowProps:l})):u.cloneElement(r,(0,o.Z)((0,o.Z)({},e),{},{placement:f,arrowProps:l,popper:d,className:w()(r.props.className,!i&&c&&"show"),style:(0,o.Z)((0,o.Z)({},r.props.style),e.style)}))}}))}));A.displayName="Overlay",A.defaultProps=z;var V=A,$=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"];function q(e,n,r){var o=(0,a.Z)(n,1)[0],t=o.currentTarget,u=o.relatedTarget||o.nativeEvent[r];u&&u===t||(0,l.Z)(t,u)||e.apply(void 0,(0,i.Z)(n))}function G(e){var n=e.trigger,r=e.overlay,i=e.children,l=e.popperConfig,s=void 0===l?{}:l,c=e.show,p=e.defaultShow,f=void 0!==p&&p,Z=e.onToggle,w=e.delay,m=e.placement,g=e.flip,y=void 0===g?m&&-1!==m.indexOf("auto"):g,E=(0,t.Z)(e,$),b=(0,u.useRef)(null),C=(0,h.Z)(b,i.ref),x=d(),P=(0,u.useRef)(""),k=(0,v.$c)(c,f,Z),O=(0,a.Z)(k,2),T=O[0],j=O[1],R=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(w),F="function"!==typeof i?u.Children.only(i).props:{},_=F.onFocus,N=F.onBlur,S=F.onClick,U=(0,u.useCallback)((function(){x.clear(),P.current="show",R.show?x.set((function(){"show"===P.current&&j(!0)}),R.show):j(!0)}),[R.show,j,x]),D=(0,u.useCallback)((function(){x.clear(),P.current="hide",R.hide?x.set((function(){"hide"===P.current&&j(!1)}),R.hide):j(!1)}),[R.hide,j,x]),H=(0,u.useCallback)((function(){U(),null==_||_.apply(void 0,arguments)}),[U,_]),z=(0,u.useCallback)((function(){D(),null==N||N.apply(void 0,arguments)}),[D,N]),A=(0,u.useCallback)((function(){j(!T),null==S||S.apply(void 0,arguments)}),[S,j,T]),G=(0,u.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];q(U,n,"fromElement")}),[U]),I=(0,u.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];q(D,n,"toElement")}),[D]),J=null==n?[]:[].concat(n),K={ref:function(e){C((0,M.Z)(e))}};return-1!==J.indexOf("click")&&(K.onClick=A),-1!==J.indexOf("focus")&&(K.onFocus=H,K.onBlur=z),-1!==J.indexOf("hover")&&(K.onMouseOver=G,K.onMouseOut=I),(0,B.jsxs)(B.Fragment,{children:["function"===typeof i?i(K):(0,u.cloneElement)(i,K),(0,B.jsx)(V,(0,o.Z)((0,o.Z)({},E),{},{show:T,onHide:D,flip:y,placement:m,popperConfig:s,target:b.current,children:r}))]})}G.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var I=G},80035:function(e,n,r){r.d(n,{Z:function(){return w}});var o=r(1413),t=r(70885),i=r(45987),a=r(46123),l=r.n(a),u=r(47313),s=r(68524),c=r(28864),p=(0,c.Z)("popover-header"),f=(0,c.Z)("popover-body"),d=r(94494),v=r(46417),h=["bsPrefix","placement","className","style","children","body","arrowProps","popper","show"],Z=u.forwardRef((function(e,n){var r=e.bsPrefix,a=e.placement,u=e.className,c=e.style,p=e.children,Z=e.body,w=e.arrowProps,m=(e.popper,e.show,(0,i.Z)(e,h)),g=(0,s.vE)(r,"popover"),y=(0,s.SC)(),E=(null==a?void 0:a.split("-"))||[],b=(0,t.Z)(E,1)[0],C=(0,d.z)(b,y);return(0,v.jsxs)("div",(0,o.Z)((0,o.Z)({ref:n,role:"tooltip",style:c,"x-placement":b,className:l()(u,g,b&&"bs-popover-".concat(C))},m),{},{children:[(0,v.jsx)("div",(0,o.Z)({className:"popover-arrow"},w)),Z?(0,v.jsx)(f,{children:p}):p]}))}));Z.defaultProps={placement:"right"};var w=Object.assign(Z,{Header:p,Body:f,POPPER_OFFSET:[0,8]})},94494:function(e,n,r){r.d(n,{z:function(){return l}});var o=r(43144),t=r(15671),i=r(60136),a=r(29388);r(47313).Component;function l(e,n){var r=e;return"left"===e?r=n?"end":"start":"right"===e&&(r=n?"start":"end"),r}}}]);