"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[7375],{37170:(e,s,t)=>{t.d(s,{A:()=>r});var n=t(65043),a=t(61072),l=t(78602),o=t(14282),d=t(70579);class i extends n.Component{render(){const{title:e,desc:s,method:t,methodTitle:n,subTitle:i,subMethod:r}=this.props;return(0,d.jsxs)("div",{className:"f-center py-4 h-100 w-100 flex-column",style:{minHeight:200},children:[(0,d.jsx)("div",{className:"d-flex flex-column align-items-center w-100",children:(0,d.jsx)(a.A,{className:"mb-2 text-center justify-content-center gx-0 w-100",children:(0,d.jsxs)(l.A,{xxl:8,xl:10,children:[(0,d.jsx)("h4",{className:"text-gray-dark fw-semibold text-center",children:e}),s?(0,d.jsx)("p",{children:s}):null]})})}),t?(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)(o.A,{variant:"primary",className:"m-2 btn-min-w",onClick:()=>t(),children:n}),i?(0,d.jsx)(o.A,{variant:"secondary",className:"m-2 btn-min-w",onClick:()=>r(),children:i}):null]}):null]})}}const r=i},47375:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var n=t(65043),a=t(22019),l=t(38628),o=t(61072),d=t(78602),i=t(97508),r=t(37170),c=t(90166),p=t(73955),h=t(70579);class m extends n.Component{constructor(e){super(e),this.onLoadBrandUGC=e=>{this.setState((s=>({ugcContent:e[0],brand:e[1],series:e,options:{...s.options,plotOptions:{...s.options.plotOptions,pie:{...s.options.plotOptions.pie,donut:{...s.options.plotOptions.pie.donut,labels:{show:!0,total:{label:"UGC vs Branded",showAlways:!0,show:!0},value:{show:!0}}}}},tooltip:{enabled:!0}},loader:0!=e[0]||0!=e[1]})))},this.state={series:[1,1],options:{dataLabels:{enabled:!1},legend:{show:!1},colors:["#4e69ed","#00e396"],chart:{type:"donut"},plotOptions:{pie:{donut:{stroke:0,legend:{show:!1},labels:{show:!0,total:{label:"Loading...",showAlways:!0,show:!0},value:{show:!1}}}}},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:2e3},dynamicAnimation:{enabled:!0,speed:350}}},tooltip:{enabled:!1},labels:["UGC","Branded"]},brand:0,ugcContent:0,loader:!0}}componentDidMount(){const{ugc:e}=this.props;e&&this.onLoadBrandUGC(e[0].data)}componentWillReceiveProps(e){e.ugc!=this.props.ugc&&this.onLoadBrandUGC(e.ugc[0].data)}render(){const{options:e,series:s,brand:t,ugcContent:n,loader:i,wallId:c}=this.state;return(0,h.jsxs)(l.A,{className:"card-stretch gutter-b",children:[(0,h.jsx)("div",{className:"f-between p-3 py-2 py-sm-3 p-sm-5 border-bottom",children:(0,h.jsx)("span",{className:"h5 mb-0",children:"UGC V/S Branded content"})}),(0,h.jsx)(l.A.Body,{children:(0,h.jsx)("div",{style:{minHeight:300},children:i?(0,h.jsxs)(o.A,{className:"justify-content-center",children:[(0,h.jsx)(d.A,{lg:9,xl:7,children:(0,h.jsx)("div",{style:{minHeight:295},children:(0,h.jsx)(a.A,{options:e,series:s,type:"donut",className:"assetsType w-100 m-auto",style:{maxWidth:350}})})}),(0,h.jsx)(d.A,{lg:12,xl:5,className:"f-center justify-content-xl-start",children:(0,h.jsxs)("div",{className:"px-3 w-100",style:{maxWidth:200},children:[(0,h.jsxs)("div",{className:"f-between py-2",children:[(0,h.jsxs)("p",{className:"fs-9 fw-medium d-flex align-items-center mb-0",children:[(0,h.jsx)("span",{className:"h-16px w-16px rounded-1 me-2",style:{backgroundColor:"#4e69ed"}}),"UGC posts"]}),(0,h.jsx)("span",{className:"fw-bolder fs-8",children:n})]}),(0,h.jsxs)("div",{className:"f-between py-2",children:[(0,h.jsxs)("p",{className:"fs-9 fw-medium d-flex align-items-center mb-0",children:[(0,h.jsx)("span",{className:"h-16px w-16px rounded-1 me-2",style:{backgroundColor:"#00e396"}}),"Branded content"]}),(0,h.jsx)("span",{className:"fw-bolder fs-8",children:t})]})]})})]}):(0,h.jsx)(r.A,{title:"Need More UGC",desc:"UGC performs 56% better than branded content on-site. Leverage Snapup to collect reviews & ratings.",methodTitle:"Add content",method:()=>(0,p.Yj)("networkManager","manageFeed",!0)?this.props.navigate(`/content/addfeed/${localStorage.getItem("wallId")}`):{}})})})]})}}const x=(0,i.Ng)((e=>({ugc:e.dashboardData.ugc})))((0,c.A)(m))}}]);
//# sourceMappingURL=7375.addbdf65.chunk.js.map