var d=Object.defineProperty,h=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var i=(t,e,s)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,o=(t,e)=>{for(var s in e||(e={}))v.call(e,s)&&i(t,s,e[s]);if(a)for(var s of a(e))b.call(e,s)&&i(t,s,e[s]);return t},r=(t,e)=>h(t,f(e));import{b as y,a as g,d as C}from"./index.d328c175.js";import{A as $,T as A}from"./TitleDescription.01bda3b3.js";import{C as S}from"./Card.be971207.js";import{C as T}from"./Tabs.900c61c3.js";import{C as c,S as x}from"./Schema.96c42510.js";import{n as l}from"./vueComponentNormalizer.87056a83.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.a4a9229a.js";import"./ToolsSettings.004b222f.js";import"./helpers.db3922d1.js";import"./index.a4161053.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.a1b1778a.js";import"./cleanForSlug.e9a761bb.js";import"./Modal.1216ab78.js";import"./JsonValues.08065e69.js";import"./MaxCounts.5a7ca2fd.js";import"./RadioToggle.98e1e7ec.js";import"./RobotsMeta.e1063949.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./Row.13b6f3f1.js";import"./SettingsRow.eb71f07b.js";import"./GoogleSearchPreview.c269028d.js";import"./HtmlTagsEditor.9f04fc4c.js";import"./Editor.22528024.js";import"./UnfilteredHtml.35e34c73.js";import"./Index.cb0f42fe.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./TruSeoScore.98a47fd6.js";import"./Information.f4b75b56.js";import"./Textarea.d161fc2e.js";import"./Blur.8490ecd2.js";import"./Index.2f0c11d2.js";var j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-sa-ct-custom-fields-view"},[t.isUnlicensed?t._e():s("custom-fields",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}),t.isUnlicensed?s("custom-fields-lite",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}):t._e()],1)},k=[];const w={components:{CustomFields:c,CustomFieldsLite:c},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0},showBulk:Boolean},computed:o({},y(["isUnlicensed"]))},p={};var D=l(w,j,k,!1,F,null,null,null);function F(t){for(let e in p)this[e]=p[e]}var B=function(){return D.exports}(),M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-search-appearance-content-types"},t._l(t.postTypes,function(n,m){return s("core-card",{key:m,attrs:{slug:n.name+"SA"},scopedSlots:t._u([{key:"header",fn:function(){return[s("div",{staticClass:"icon dashicons",class:""+(n.icon||"dashicons-admin-post")}),s("div",{domProps:{innerHTML:t._s(n.label)}})]},proxy:!0},{key:"tabs",fn:function(){return[s("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[n.name+"SA"],internal:""},on:{changed:function(_){return t.processChangeTab(n.name,_)}}})]},proxy:!0}],null,!0)},[s("transition",{attrs:{name:"route-fade",mode:"out-in"}},[s(t.settings.internalTabs[n.name+"SA"],{tag:"component",attrs:{object:n,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[n.name],type:"postTypes"}})],1)],1)}),1)},L=[];const O={components:{Advanced:$,CoreCard:S,CoreMainTabs:T,CustomFields:B,Schema:x,TitleDescription:A},data(){return{internalDebounce:null,tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"custom-fields",name:this.$t.__("Custom Fields",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:r(o({},g(["options","dynamicOptions","settings"])),{postTypes(){return this.$aioseo.postData.postTypes.filter(t=>t.name!=="attachment")}}),methods:r(o({},C(["changeTab"])),{processChangeTab(t,e){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:e}),setTimeout(()=>{this.internalDebounce=!1},50))}})},u={};var U=l(O,M,L,!1,q,null,null,null);function q(t){for(let e in u)this[e]=u[e]}var $t=function(){return U.exports}();export{$t as default};