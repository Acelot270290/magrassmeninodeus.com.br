var f=Object.defineProperty,v=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(t,s,e)=>s in t?f(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,n=(t,s)=>{for(var e in s||(s={}))b.call(s,e)&&c(t,e,s[e]);if(o)for(var e of o(s))y.call(s,e)&&c(t,e,s[e]);return t},i=(t,s)=>v(t,$(s));import{a as A,d as T}from"./index.d328c175.js";import{n as a}from"./vueComponentNormalizer.87056a83.js";import{A as S,T as x}from"./TitleDescription.01bda3b3.js";import{B as h}from"./RadioToggle.98e1e7ec.js";import{C as k}from"./Card.be971207.js";import{C}from"./Tabs.900c61c3.js";import{C as P}from"./ProBadge.7c0de2f7.js";import{C as g}from"./SettingsRow.eb71f07b.js";import{C as U,S as O}from"./Schema.96c42510.js";import{C as R}from"./Blur.8490ecd2.js";import{C as F}from"./HtmlTagsEditor.9f04fc4c.js";import{R as L}from"./RequiredPlans.2936a9d7.js";import{C as w}from"./Index.2f0c11d2.js";import{A as B}from"./ToolsSettings.004b222f.js";import"./helpers.db3922d1.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.a4a9229a.js";import"./JsonValues.08065e69.js";import"./MaxCounts.5a7ca2fd.js";import"./RobotsMeta.e1063949.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./Row.13b6f3f1.js";import"./GoogleSearchPreview.c269028d.js";import"./Tooltip.3ec20ff5.js";import"./_commonjsHelpers.f40d732e.js";import"./index.a4161053.js";import"./client.94d919c5.js";import"./constants.a1b1778a.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./TruSeoScore.98a47fd6.js";import"./Information.f4b75b56.js";import"./Textarea.d161fc2e.js";import"./Editor.22528024.js";import"./UnfilteredHtml.35e34c73.js";import"./Index.cb0f42fe.js";import"./Modal.1216ab78.js";import"./cleanForSlug.e9a761bb.js";var E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")},I=[];const M={},l={};var D=a(M,E,I,!1,G,null,null,null);function G(t){for(let s in l)this[s]=l[s]}var j=function(){return D.exports}(),N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-blur",[e("core-settings-row",{attrs:{name:t.strings.titleAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","default-tags":["image_title","separator_sa","site_title","alt_tag"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesTitleTag)+" ")]},proxy:!0}])})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationTitleAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{value:!1,name:"stripTitlePunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.altTagAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","default-tags":["image_title","separator_sa","site_title","alt_tag"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesAltTag)+" ")]},proxy:!0}])})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationForAltAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{value:!1,name:"stripAltPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}})]},proxy:!0}])})],1)},H=[];const V={components:{BaseRadioToggle:h,CoreBlur:R,CoreHtmlTagsEditor:F,CoreSettingsRow:g},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$tdPro),stripPunctuationTitleAttribute:this.$t.__("Strip Punctuation for Title Attributes",this.$tdPro),clickToAddVariablesTitleTag:this.$t.__("Click on the tags below to insert variables into your title attribute.",this.$tdPro),altTagAttributeFormat:this.$t.__("Alt Tag Attribute Format",this.$tdPro),clickToAddVariablesAltTag:this.$t.__("Click on the tags below to insert variables into your alt tag attribute.",this.$tdPro),stripPunctuationForAltAttribute:this.$t.__("Strip Punctuation for Alt Attributes",this.$tdPro)}}}},u={};var q=a(V,N,H,!1,W,null,null,null);function W(t){for(let s in u)this[s]=u[s]}var z=function(){return q.exports}(),J=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("image-seo",null,"home"),"feature-list":[t.strings.setTitleAttributes,t.strings.setAltTagAttributes,t.strings.stripPunctuationTitles,t.strings.stripPunctuationAltTags]},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("required-plans",{attrs:{addon:"aioseo-image-seo"}}),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},K=[];const Q={components:{Blur:z,RequiredPlans:L,Cta:w},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$td),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the Title Attribute and Alt Text for attachment pages and images that are embedded in your content. These can be set based on a specified format, similar to the Title Format settings in the Global Settings menu.",this.$tdPro),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Image SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Image SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),setTitleAttributes:this.$t.__("Set title attributes",this.$td),setAltTagAttributes:this.$t.__("Set alt tag attributes",this.$td),stripPunctuationTitles:this.$t.__("Strip punctuation for titles",this.$td),stripPunctuationAltTags:this.$t.__("Strip punctuation for alt tags",this.$td)}}}},p={};var X=a(Q,J,K,!1,Y,"5a3a7186",null,null);function Y(t){for(let s in p)this[s]=p[s]}var _=function(){return X.exports}(),Z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")},tt=[];const et={},m={};var st=a(et,Z,tt,!1,at,null,null,null);function at(t){for(let s in m)this[s]=m[s]}var rt=function(){return st.exports}(),nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-search-appearance-content-types"},[e("core-card",{attrs:{slug:t.postType.name+"SA"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"icon dashicons",class:""+(t.postType.icon||"dashicons-admin-post")}),e("div",{domProps:{innerHTML:t._s(t.postType.label)}})]},proxy:!0},{key:"before-tabs",fn:function(){return[e("core-settings-row",{attrs:{name:t.strings.redirectAttachmentUrls,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"redirectAttachmentUrls",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:t.strings.attachment,value:"attachment"},{label:t.strings.attachmentParent,value:"attachment_parent"}]},model:{value:t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,callback:function(r){t.$set(t.dynamicOptions.searchAppearance.postTypes.attachment,"redirectAttachmentUrls",r)},expression:"dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.attachmentUrlsDescription)+" ")])]},proxy:!0}])})]},proxy:!0},t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[t.postType.name+"SA"],internal:""},on:{changed:function(r){return t.processChangeTab(t.postType.name,r)}}})]},proxy:!0}:null],null,!0)},[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?e("transition",{attrs:{name:"route-fade",mode:"out-in"}},[e(t.settings.internalTabs[t.postType.name+"SA"],{tag:"component",attrs:{object:t.postType,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[t.postType.name],type:"postTypes"}})],1):t._e()],1),e("core-card",{attrs:{slug:"imageSeo",noSlide:!t.shouldShowMain},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.imageSeo)+" "),e("core-pro-badge")]},proxy:!0}])},[t.shouldShowMain?e("image-seo"):t._e(),t.shouldShowActivate?e("activate"):t._e(),t.shouldShowUpdate?e("update"):t._e(),t.shouldShowLite?e("lite"):t._e()],1)],1)},it=[];const ot={mixins:[B],components:{Activate:j,Advanced:S,BaseRadioToggle:h,CoreCard:k,CoreMainTabs:C,CoreProBadge:P,CoreSettingsRow:g,CustomFields:U,ImageSeo:_,Lite:_,Schema:O,TitleDescription:x,Update:rt},data(){return{addonSlug:"aioseo-image-seo",internalDebounce:!1,strings:{redirectAttachmentUrls:this.$t.__("Redirect Attachment URLs",this.$td),attachment:this.$t.__("Attachment",this.$td),attachmentParent:this.$t.__("Attachment Parent",this.$td),attachmentUrlsDescription:this.$t.__("We recommended redirecting attachment URLs back to the attachment since the default WordPress attachment pages have little SEO value.",this.$td),imageSeo:this.$t.__("Image SEO",this.$td)},tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:i(n({},A(["options","dynamicOptions","settings"])),{postType(){return this.$aioseo.postData.postTypes.filter(t=>t.name==="attachment")[0]}}),methods:i(n({},T(["changeTab"])),{processChangeTab(t,s){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:s}),setTimeout(()=>{this.internalDebounce=!1},50))}})},d={};var ct=a(ot,nt,it,!1,lt,null,null,null);function lt(t){for(let s in d)this[s]=d[s]}var Qt=function(){return ct.exports}();export{Qt as default};
