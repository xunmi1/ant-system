(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["VTagSelect"],{"00d9":function(e,t,l){},8807:function(e,t,l){"use strict";l("00d9")},"9d29":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"tag-select",class:{expandable:e.expandable,expand:!e.isFold}},[e.hideCheckAll?e._e():l("ACheckableTag",{key:"tag-select-all",attrs:{checked:e.checkAll},on:{change:e.changeAll}},[l("span",[e._v("全部")])]),e._l(e.options,(function(t){return[l("ACheckableTag",{key:t.value,attrs:{checked:e.isSelect(t.value)},on:{change:function(l){return e.change(t.value,l)}}},[e._t("default",(function(){return[l("span",[e._v(e._s(t.label))])]}),null,t)],2)]})),e.expandable?l("div",{staticClass:"tag-select-trigger",on:{click:e.changeFold}},[l("a",{directives:[{name:"show",rawName:"v-show",value:e.isFold,expression:"isFold"}]},[l("span",{staticClass:"label"},[e._v("展开")]),l("AIcon",{attrs:{type:"down"}})],1),l("a",{directives:[{name:"show",rawName:"v-show",value:!e.isFold,expression:"!isFold"}]},[l("span",{staticClass:"label"},[e._v("收起")]),l("AIcon",{attrs:{type:"up"}})],1)]):e._e()],2)},s=[];const i=Array.isArray,n=(e,t)=>i(e)&&t.every(t=>e.some(e=>e===t));var c={name:"TagSelect",model:{prop:"value",event:"change"},props:{value:[Array,Number,String,Boolean],expandable:Boolean,options:Array,multiple:Boolean,hideCheckAll:Boolean},data(){return{isFold:!0}},computed:{valueList(){return this.options.map(e=>e.value)},checkAll(){if(!this.hideCheckAll)return this.multiple?n(this.value,this.valueList):null==this.value}},methods:{isSelect(e){return this.multiple?!!i(this.value)&&this.value.includes(e):this.value===e},change(e,t){this.multiple?this.changeMultiple(e,t):this.changeNotMultiple(e,t)},changeMultiple(e,t){const l=i(this.value)?[...this.value]:[];t?l.push(e):l.splice(l.indexOf(e),1),this.$emit("change",l)},changeNotMultiple(e,t){this.$emit("change",t?e:void 0)},changeAll(e){this.multiple?this.$emit("change",e?this.options.map(e=>e.value):[]):this.changeNotMultiple(this.value,!e)},changeFold(){this.isFold=!this.isFold}}},o=c,h=(l("8807"),l("2877")),u=Object(h["a"])(o,a,s,!1,null,"758f653e",null);t["default"]=u.exports}}]);