(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BasicLayout"],{"07a1":function(t,e,s){"use strict";var i=function(t,e){var s=e._c;return s("section",{class:{placeholder:e.props.isFixed}},[s("ALayoutFooter",{class:["footer",{"footer-fixed":e.props.isFixed}],style:{width:"calc(100% - "+(e.props.isFixed?e.props.offsetLeft:0)+"px)"}},[s("span",[e._v("Copyright © ")]),null!=e.props.start?s("span",[e._v(e._s(e.props.start)+" - ")]):e._e(),s("span",[e._v(e._s(e.props.current)+" ")]),s("span",[e._v(e._s(e.parent.$app.org)+" All Rights Reserved.")])])],1)},a=[],r={name:"Footer",props:{isFixed:Boolean,width:{type:Number,default:0},start:Number,current:{type:Number,default:(new Date).getFullYear()}}},l=r,n=(s("6c97"),s("2877")),o=Object(n["a"])(l,i,a,!0,null,"ce2e37ba",null);e["a"]=o.exports},"1a1a":function(t,e){t.exports={functional:!0,render(t,e){const{_c:s,_v:i,data:a,children:r=[]}=e,{class:l,staticClass:n,style:o,staticStyle:c,attrs:u={},...h}=a;return s("svg",{class:[l,n],style:[o,c],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},u),...h},r.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"layout-light_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"layout-light_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})]),s("rect",{attrs:{id:"layout-light_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}})]),s("g",{attrs:{filter:"url(#layout-light_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"layout-light_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#layout-light_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#layout-light_svg__c)","xlink:href":"#layout-light_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#layout-light_svg__b"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#layout-light_svg__d)",d:"M0 0h16v44H0z"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#layout-light_svg__d)",d:"M-1 0h49v10H-1z"}})])]))}}},"231b":function(t,e){t.exports={functional:!0,render(t,e){const{_c:s,_v:i,data:a,children:r=[]}=e,{class:l,staticClass:n,style:o,staticStyle:c,attrs:u={},...h}=a;return s("svg",{class:[l,n],style:[o,c],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},u),...h},r.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"layout-vertical_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"layout-vertical_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})]),s("rect",{attrs:{id:"layout-vertical_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}})]),s("g",{attrs:{filter:"url(#layout-vertical_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"layout-vertical_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#layout-vertical_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#layout-vertical_svg__c)","xlink:href":"#layout-vertical_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#layout-vertical_svg__b"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#layout-vertical_svg__d)",d:"M-1 0h49v10H-1z"}}),s("path",{attrs:{fill:"#303648",mask:"url(#layout-vertical_svg__d)",d:"M0 0h16v44H0z"}})])]))}}},2455:function(t,e,s){},"2e19":function(t,e,s){"use strict";s("2455")},"312e":function(t,e,s){"use strict";s("f127")},"3e59":function(t,e,s){"use strict";s.r(e),s.d(e,"NOOP",(function(){return Tt}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ALayout",{staticClass:"container",class:t.isVertical?"vertical":"horizontal"},[s(t.layout.menuLayout,{tag:"Compontent",staticClass:"layout-sider layout-header",class:t.menuClass,attrs:{collapsible:"",breakpoint:"xl",theme:t.menuTheme,width:t.siderWidth},model:{value:t.collapsed,callback:function(e){t.collapsed=e},expression:"collapsed"}},[s("Logo",{attrs:{collapsed:t.collapsed,theme:t.menuTheme}}),s("Menu",{class:["menu-"+(t.isMenuRight?"right":"left"),"menu"],attrs:{"menu-data":t.menuList,"selected-keys":t.currentName,"open-keys":t.layout.openKeys,mode:t.layout.mode,theme:t.menuTheme},on:{click:t.navigate,openChange:t.changeOpenKeys}}),t.isVertical?t._e():s("HeaderToolBar",{attrs:{theme:t.menuTheme},on:{click:t.toggleSetting}})],1),s("ALayout",{staticClass:"layout-main",style:{marginLeft:t.layoutMainLeft+"px"}},[t.isVertical?s("ALayoutHeader",{staticClass:"layout-main-header",class:{"header-fixed":t.isFixedHeader},style:{paddingLeft:t.layoutMainHeaderLeft+"px"}},[s("div",{staticClass:"trigger v-icon-hover",on:{click:t.toggleCollapsed}},[s("AIcon",{attrs:{type:t.collapsed?"menu-unfold":"menu-fold"}})],1),t.isMobileDevice?t._e():s("Breadcrumb"),s("HeaderToolBar",{attrs:{theme:"light"},on:{click:t.toggleSetting}})],1):t._e(),s("ALayoutContent",{class:[{"content-fixed-top":t.isFixedHeader},"layout-main-content"]},[t.isVertical?t._e():s("div",{staticClass:"breadcrumb"},[s("Breadcrumb")],1),s("KeepAlive",{attrs:{include:t.getAlive("BasicLayout")}},[s("RouterView")],1)],1),s("div",{style:{marginLeft:t.routerLayout.offsetLeft+"px"}},[s("Footer",{attrs:{"offset-left":t.isVertical?t.siderWidth:0,start:2019}})],1)],1)],1),s("Setting",{model:{value:t.visibleOfSetting,callback:function(e){t.visibleOfSetting=e},expression:"visibleOfSetting"}}),s("BackTop")],1)},a=[],r=s("2f62"),l=s("ba41"),n=s("fd4e"),o=s("a18c");const c=t=>{var e;const s=Object(o["b"])(),i=Object(n["j"])(e=>e.key===t,s);return null!==(e=null===i||void 0===i?void 0:i.children)&&void 0!==e?e:[]},u={data(){return{screenTypeMixin:"xl",screenLevelMixin:6}},created(){this.breakpoints=[{minWidth:1600,type:"xxl",level:8},{minWidth:1400,type:"xl",level:7},{minWidth:1200,type:"xl",level:6},{minWidth:992,type:"lg",level:5},{minWidth:768,type:"md",level:3.8},{minWidth:576,type:"sm",level:2.8},{minWidth:0,type:"xs",level:0}],this.$_screen_change(),this.$_screen_change=Object(n["e"])(this.$_screen_change,160),window.addEventListener("resize",this.$_screen_change)},beforeDestroy(){window.removeEventListener("resize",this.$_screen_change)},methods:{$_screen_change(){const t=Math.min(window.screen.width,document.body.clientWidth);this.breakpoints.some(e=>e.minWidth<=t&&([this.screenTypeMixin,this.screenLevelMixin]=[e.type,e.level],this.$store.commit("app/setScreenType",e),!0))}}};var h,d,f,m=u,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("AMenu",t._g(t._b({},"AMenu",t.$attrs,!1),t.$listeners),[t._l(t.menuData,(function(e){return[e.children?s("SubMenu",{key:e.key||e.name,attrs:{item:e}}):s("AMenuItem",{key:e.key||e.name},[e.icon?s("AIcon",{attrs:{type:e.icon}}):t._e(),s("span",[t._v(t._s(e.title))])],1)]}))],2)},g=[],p=function(t,e){var s=e._c;return s("ASubMenu",e._g({key:e.data.key,scopedSlots:e._u([{key:"title",fn:function(){return[e.props.item.icon?s("AIcon",{attrs:{type:e.props.item.icon}}):e._e(),s("span",[e._v(e._s(e.props.item.title))])]},proxy:!0}])},e.listeners),[e._l(e.props.item.children,(function(t){return[t.children?s("SubMenu",{key:t.key||t.name,attrs:{item:t}}):s("AMenuItem",{key:t.key||t.name},[t.icon?s("AIcon",{attrs:{type:t.icon}}):e._e(),s("span",[e._v(e._s(t.title))])],1)]}))],2)},_=[],y=s("2877"),b={},x=Object(y["a"])(b,p,_,!0,null,null,null),w=x.exports,k={components:{SubMenu:w},model:{prop:"selectedKeys",event:"selectChange"},props:{menuData:{type:Array,required:!0}}},O=k,S=Object(y["a"])(O,v,g,!1,null,null,null),M=S.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{class:[t.isVertical?"logo-vertical":"logo-horizontal","logo-theme-"+t.theme]},[t.logoPath?t._m(0):t._e(),s("h1",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"title"},[t._v(t._s(t.title))])])},F=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("img",{attrs:{src:t.logoPath,alt:"图标",height:"36",width:"36"}})}],A={name:"Logo",props:{collapsed:Boolean,theme:{type:String,validator:t=>["dark","light"].includes(t),default:"light"}},data(){return{title:this.$app.title.small}},computed:Object(r["e"])("app",{isVertical:t=>t.layout.isVertical}),watch:{collapsed(t){if(this.isVertical)return t?this.title=null:void setTimeout(()=>this.title=this.$app.title.small,168)}},created(){const t="";this.logoPath=this.$app.logoPath&&t+this.$app.logoPath}},B=A,L=(s("81ac"),Object(y["a"])(B,C,F,!1,null,"3f26153e",null)),$=L.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-tool",class:"header-tool-theme-"+t.theme},[s("FullScreen",{staticClass:"action"}),s("SettingAction",{staticClass:"action",on:{click:t.openSetting}}),s("UserMenu",{staticClass:"action"})],1)},j=[],T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showAction?s("ATooltip",{attrs:{title:t.isFullScreen?"退出全屏":"全屏"}},[s("div",{staticClass:"full-screen v-icon-hover",on:{click:t.handleToggle}},[s("AIcon",{staticClass:"icon",attrs:{type:t.isFullScreen?"fullscreen-exit":"fullscreen"}})],1)]):t._e()},z=[];const D=window.navigator.userAgent.toLowerCase(),H=D&&/msie|trident/.test(D),N=document.documentElement,K=[{enabled:null!==(h=document.fullscreenEnabled)&&void 0!==h?h:document.fullscreen,listener:"fullscreenchange",exit:document.exitFullscreen,full:N.requestFullscreen},{enabled:document.mozFullScreen,listener:"mozfullscreenchange",exit:null!==(d=document.exitFullscreen)&&void 0!==d?d:document.mozCancelFullScreen,full:null!==(f=N.requestFullscreen)&&void 0!==f?f:N.mozRequestFullScreen},{enabled:document.webkitIsFullScreen,listener:"webkitfullscreenchange",exit:document.webkitCancelFullScreen,full:N.webkitRequestFullScreen}],I=K.find(t=>t.enabled);var E={name:"FullScreen",data(){return{showAction:!H&&I,isFullScreen:!1}},mounted(){this.showAction&&document.addEventListener(I.listener,this.changeFullScreen)},beforeDestroy(){this.showAction&&document.removeEventListener(I.listener,this.changeFullScreen)},methods:{handleToggle(){this.isFullScreen?I.exit.call(document):I.full.call(N)},changeFullScreen(){this.isFullScreen=!this.isFullScreen,this.$emit("change",this.isFullScreen)}}},R=E,G=(s("2e19"),Object(y["a"])(R,T,z,!1,null,"113f3042",null)),W=G.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ATooltip",{attrs:{title:"界面设置"}},[s("div",t._g({staticClass:"setting v-icon-hover"},t.$listeners),[s("AIcon",{staticClass:"icon",attrs:{type:"setting"}})],1)])}],P={name:"SettingAction"},Y=P,J=(s("d82b"),Object(y["a"])(Y,U,q,!1,null,"91970438",null)),Q=J.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user v-icon-hover"},[s("ADropdown",{scopedSlots:t._u([{key:"overlay",fn:function(){return[s("AMenu",{staticClass:"user-menu",on:{click:function(e){return t.dispatch(e.key)}}},[s("AMenuItem",{key:"logout"},[s("AIcon",{attrs:{type:"logout"}}),s("span",[t._v("退出登录")])],1)],1)]},proxy:!0}])},[s("div",[s("AAvatar",{staticClass:"user-avatar v-theme-bg",attrs:{alt:t.nickname,size:36,src:t.avatar}},[t._v(" "+t._s(t.nickname.slice(0,5))+" ")]),s("span",{staticClass:"user-nickname"},[t._v(t._s(t.nickname))])],1)])],1)},Z=[],tt=s("c24f"),et={name:"UserMenu",computed:{...Object(r["e"])("user",["avatar","nickname"])},methods:{dispatch(t){this[t]&&this[t]()},logout(){Object(tt["c"])().then(()=>Object(o["c"])())}}},st=et,it=(s("9fee"),Object(y["a"])(st,X,Z,!1,null,"0334b006",null)),at=it.exports,rt={name:"HeaderToolBar",components:{SettingAction:Q,UserMenu:at,FullScreen:W},props:{theme:{type:String,validator:t=>["dark","light"].includes(t),default:"light"}},methods:{openSetting(){this.$emit("click","setting")}}},lt=rt,nt=(s("f8eb"),Object(y["a"])(lt,V,j,!1,null,"0e26d27e",null)),ot=nt.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ADrawer",{staticClass:"setting",attrs:{visible:t.visible,width:286,title:"界面设置"},on:{close:t.onClose}},[s("div",{staticClass:"setting-option-mb"},[s("h4",{staticClass:"setting-title"},[t._v("导航菜单风格")]),s("ATooltip",{attrs:{title:"暗色"}},[s("div",{staticClass:"setting-layout",on:{click:function(e){return t.toggle("menuTheme","dark")}}},[t._m(0),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:"dark"===t.menuTheme,expression:"menuTheme === 'dark'"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)]),s("ATooltip",{attrs:{title:"亮色"}},[s("div",{staticClass:"setting-layout",on:{click:function(e){return t.toggle("menuTheme","light")}}},[t._m(1),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:"light"===t.menuTheme,expression:"menuTheme === 'light'"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)])],1),s("div",[s("h4",{staticClass:"setting-title"},[t._v("导航菜单布局")]),s("ATooltip",{attrs:{title:"侧边菜单"}},[s("div",{staticClass:"setting-layout",on:{click:function(e){return t.toggle("isVertical",!0)}}},[t._m(2),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:t.isVertical,expression:"isVertical"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)]),s("ATooltip",{attrs:{title:"顶部菜单"}},[s("div",{class:{"setting-layout":!0,"v-disabled":t.isMobileDevice},on:{click:function(e){!t.isMobileDevice&&t.toggle("isVertical",!1)}}},[t._m(3),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:!t.isVertical,expression:"!isVertical"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)]),s("ADivider")],1),s("div",{staticClass:"setting-option-mb"},[s("span",{staticClass:"setting-title"},[t._v("固定导航栏")]),s("ASwitch",{staticClass:"setting-switch",attrs:{checked:t.isFixedHeader},on:{change:function(e){return t.toggle("isFixedHeader",e)}}})],1),s("div",{staticClass:"setting-option-mb"},[s("ATooltip",{attrs:{title:t.isVertical?null:"侧边菜单时可配置",placement:"left"}},[s("span",{staticClass:"setting-title"},[t._v("固定左侧菜单")]),s("ASwitch",{staticClass:"setting-switch",attrs:{checked:t.isFixedSider,disabled:!t.isVertical},on:{change:function(e){return t.toggle("isFixedSider",e)}}})],1)],1),s("div",[s("ATooltip",{attrs:{title:t.isVertical?"顶部菜单时可配置":null,placement:"left"}},[s("span",{staticClass:"setting-title"},[t._v("水平菜单靠右")]),s("ASwitch",{staticClass:"setting-switch",attrs:{checked:t.isMenuRight,disabled:t.isVertical},on:{change:function(e){return t.toggle("isMenuRight",e)}}})],1)],1)])},ut=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("LayoutDarkSVG",{staticClass:"setting-svg"})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("LayoutLightSVG",{staticClass:"setting-svg"})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VerticalSVG",{staticClass:"setting-svg"})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("HorizontalSVG",{staticClass:"setting-svg"})}],ht=(s("13d5"),s("1a1a")),dt=s.n(ht),ft=s("852f"),mt=s.n(ft),vt=s("231b"),gt=s.n(vt),pt=s("e6a6"),_t=s.n(pt),yt={name:"Setting",components:{LayoutLightSVG:dt.a,LayoutDarkSVG:mt.a,VerticalSVG:gt.a,HorizontalSVG:_t.a},model:{prop:"visible",event:"change"},props:{visible:Boolean},computed:{...Object(r["e"])("app",{menuTheme:t=>t.layout.menuTheme,isVertical:t=>t.layout.isVertical,isFixedHeader:t=>t.layout.isFixedHeader,isFixedSider:t=>t.layout.isFixedSider,isMenuRight:t=>t.layout.isMenuRight,theme:t=>t.layout.theme}),...Object(r["c"])("app",["isMobileDevice"])},methods:{...Object(r["d"])("app",["setLayout"]),toggle(t,e){void 0!==this[t]&&this[t]!==e&&this.setLayout({[t]:e})},onClose(){const t=["menuTheme","isVertical","isFixedHeader","isFixedSider","isMenuRight","theme"],e=t.reduce((t,e)=>({...t,[e]:this[e]}),{});this.$emit("change",!1),l["b"].set(l["a"].BASIC_LAYOUT,e)}}},bt=yt,xt=(s("5db1"),Object(y["a"])(bt,ct,ut,!1,null,"5064d5f4",null)),wt=xt.exports,kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ABreadcrumb",{attrs:{routes:t.routes},scopedSlots:t._u([{key:"itemRender",fn:function(e){var i=e.route;return[t.isCurrentRoute(i)?s("span",[t._v(t._s(i.breadcrumbName))]):s("RouterLink",{attrs:{to:{name:i.path}}},[t._v(t._s(i.breadcrumbName))])]}}])})},Ot=[],St={name:"Breadcrumb",data(){return{routes:[]}},watch:{"$route.name":{handler(t){this.routes=this.getRoutes(t)},immediate:!0}},beforeCreate(){const t=t=>{var e;return{path:t.key,breadcrumbName:null===(e=t.meta)||void 0===e?void 0:e.title}};this.menuList=Object(n["t"])(t,c(this.$app.mainName))},created(){this.getRoutes=Object(n["d"])(this.getRoutes)},methods:{getRoutes(t){const e=Object(n["k"])(e=>e.path===t,this.menuList),s={path:t,breadcrumbName:this.$route.meta.title};return e.push(s),e},isCurrentRoute(t){return this.$route.name===t.path}}},Mt=St,Ct=Object(y["a"])(Mt,kt,Ot,!1,null,null,null),Ft=Ct.exports,At=s("07a1"),Bt=function(t,e){var s=e._c;return s("ABackTop",[s("div",{staticClass:"back-top"},[s("AIcon",{staticClass:"back-top-icon",attrs:{type:"up"}})],1)])},Lt=[],$t=(s("b5e2"),{}),Vt=Object(y["a"])($t,Bt,Lt,!0,null,"3383bbe4",null),jt=Vt.exports;const Tt=()=>{};var zt={name:"BasicLayout",components:{MenuDrawer:()=>s.e("MenuDrawer").then(s.bind(null,"2e02")),Menu:M,Logo:$,HeaderToolBar:ot,Setting:wt,Breadcrumb:Ft,Footer:At["a"],BackTop:jt},mixins:[m],data(){return{currentName:[this.$route.name],collapsed:!1,visibleOfSetting:!1,vertical:{openKeys:[],mode:"inline",menuLayout:"ALayoutSider"},horizontal:{openKeys:[],mode:"horizontal",menuLayout:"ALayoutHeader"},cacheOpenKeys:[],cacheIsVertical:this.isVertical,isOpenKeysLock:!1}},computed:{...Object(r["e"])("app",{menuTheme:t=>t.layout.menuTheme,isVertical:t=>t.layout.isVertical,isFixedHeader:t=>t.layout.isFixedHeader,isFixedSider:t=>t.layout.isFixedSider,isMenuRight:t=>t.layout.isMenuRight}),...Object(r["c"])("app",["getAlive","isMobileDevice"]),layout(){return this.isVertical?this.vertical:this.horizontal},routerLayout(){var t;return null!==(t=this.$route.meta.layout)&&void 0!==t?t:{}},siderWidth(){const t=this.isMobileDevice?0:80,e=16*Math.max(this.screenLevelMixin,5)+120;return this.collapsed?t:e},layoutMainLeft(){const t=this.isVertical&&this.isFixedSider&&!this.isMobileDevice?this.siderWidth:0;return this.setConstrainedBox({mainOffsetLeft:t}),t},layoutMainHeaderLeft(){return this.isFixedHeader&&!this.isMobileDevice?this.siderWidth:0},menuClass(){const{isVertical:t,isFixedHeader:e,isFixedSider:s,menuTheme:i}=this;return[{"header-fixed":e&&!t},{"sider-fixed":s&&t},"theme-"+i]}},watch:{"$route.name":{handler(){var t;if(this.redirect(),Object(n["q"])(null===(t=this.$route.meta)||void 0===t?void 0:t.hideInMenu)?this.currentName=[this.$route.meta.hideInMenu]:this.currentName.splice(0,1,this.$route.name),this.isOpenKeysLock)return this.isOpenKeysLock=!1;this.vertical.openKeys=this.getOpenKeys(this.currentName[0])},immediate:!0},collapsed(){[this.cacheOpenKeys,this.vertical.openKeys]=[this.vertical.openKeys,this.cacheOpenKeys]},isMobileDevice:{handler(t){t?(this.cacheIsVertical=this.isVertical,this.setLayout({isVertical:!0}),this.vertical.menuLayout="MenuDrawer",this.collapsed=!0):(this.setLayout({isVertical:this.cacheIsVertical}),this.vertical.menuLayout="ALayoutSider")},immediate:!0}},beforeCreate(){const t=t=>{var e,s;return{key:t.key,title:null===(e=t.meta)||void 0===e?void 0:e.title,icon:null===(s=t.meta)||void 0===s?void 0:s.icon}};this.menuList=Object(n["t"])(t,c(this.$app.mainName))},created(){this.setLayout(l["b"].get(l["a"].BASIC_LAYOUT)),this.getOpenKeys=Object(n["d"])(this.getOpenKeys),this.vertical.openKeys=this.getOpenKeys(this.$route.name)},methods:{...Object(r["d"])("app",["setLayout","setConstrainedBox"]),navigate({key:t}){this.$router.push({name:t}).catch(Tt).finally(()=>this.isOpenKeysLock=!0)},redirect(){const t=this.$route.name,e=this.menuList.find(e=>e.originalKey===t);e&&this.navigate({key:e.key})},getOpenKeys(t){return Object(n["k"])(e=>e.key===t,this.menuList).map(t=>t.key)},toggleCollapsed(){this.collapsed=!this.collapsed},toggleSetting(){this.visibleOfSetting=!0},changeOpenKeys(t){if(this.isVertical){const e=this.layout.openKeys;this.layout.openKeys=t.filter(t=>!e.includes(t))}else this.layout.openKeys=t}}},Dt=zt,Ht=(s("312e"),Object(y["a"])(Dt,i,a,!1,null,"2cad5df9",null));e["default"]=Ht.exports},"4f6a":function(t,e,s){},"5db1":function(t,e,s){"use strict";s("d453")},"6c97":function(t,e,s){"use strict";s("4f6a")},"81ac":function(t,e,s){"use strict";s("f33f")},"852f":function(t,e){t.exports={functional:!0,render(t,e){const{_c:s,_v:i,data:a,children:r=[]}=e,{class:l,staticClass:n,style:o,staticStyle:c,attrs:u={},...h}=a;return s("svg",{class:[l,n],style:[o,c],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},u),...h},r.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"layout-dark_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"layout-dark_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})]),s("rect",{attrs:{id:"layout-dark_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}})]),s("g",{attrs:{filter:"url(#layout-dark_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"layout-dark_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#layout-dark_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#layout-dark_svg__c)","xlink:href":"#layout-dark_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#layout-dark_svg__b"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#layout-dark_svg__d)",d:"M-1 0h49v10H-1z"}}),s("path",{attrs:{fill:"#303648",mask:"url(#layout-dark_svg__d)",d:"M0 0h16v44H0z"}})])]))}}},"9fee":function(t,e,s){"use strict";s("a411")},a411:function(t,e,s){},b5e2:function(t,e,s){"use strict";s("f808")},c69b:function(t,e,s){},d453:function(t,e,s){},d82b:function(t,e,s){"use strict";s("c69b")},e093:function(t,e,s){},e6a6:function(t,e){t.exports={functional:!0,render(t,e){const{_c:s,_v:i,data:a,children:r=[]}=e,{class:l,staticClass:n,style:o,staticStyle:c,attrs:u={},...h}=a;return s("svg",{class:[l,n],style:[o,c],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},u),...h},r.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"layout-horizontal_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"layout-horizontal_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})]),s("rect",{attrs:{id:"layout-horizontal_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}})]),s("g",{attrs:{filter:"url(#layout-horizontal_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"layout-horizontal_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#layout-horizontal_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#layout-horizontal_svg__c)","xlink:href":"#layout-horizontal_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#layout-horizontal_svg__b"}}),s("path",{attrs:{fill:"#303648",mask:"url(#layout-horizontal_svg__d)",d:"M-1 0h49v10H-1z"}})])]))}}},f127:function(t,e,s){},f33f:function(t,e,s){},f808:function(t,e,s){},f8eb:function(t,e,s){"use strict";s("e093")}}]);