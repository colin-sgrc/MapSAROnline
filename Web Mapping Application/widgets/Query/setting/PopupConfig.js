//>>built
require({cache:{"url:widgets/Query/setting/PopupConfig.html":'\x3cdiv\x3e\r\n\t\x3cdiv style\x3d"margin-top:22px;font-size:12px;"\x3e${nls.resultSettingTip}\x3c/div\x3e\r\n\t\x3ctable class\x3d"title-sorting-table"\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t\t\x3ccol width\x3d"140px"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"24px"\x3e\x3c/col\x3e\r\n\t\t\x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.resultItemTitle}:\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"titleTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t\t\t\t\tdata-dojo-props\x3d\'required:true,trim:true\' style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"btnAddFields" data-dojo-attach-event\x3d"onclick:_onAddClicked"\r\n\t\t\t\t\t  class\x3d"btn-add-fields jimu-icon jimu-icon-add jimu-float-trailing"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.resultItemSorting}:\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd data-dojo-attach-point\x3d"tdSortFields"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"sortFieldsDiv" class\x3d"sort-fields-div jimu-ellipsis"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"btnSortFields" class\x3d"btn-sort-fields jimu-float-trailing"\r\n\t\t\t\t\tdata-dojo-attach-event\x3d"onclick:_onBtnSortFieldsClicked"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cdiv style\x3d"margin-top:10px;"\x3e${nls.resultItemContent}:\x3c/div\x3e\r\n\t\x3cdiv style\x3d"margin-top:7px;margin-bottom:8px;font-size:12px;"\x3e${nls.fieldsSetTip}\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"fieldsContainer"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./PopupConfig.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query jimu/dijit/SimpleTable jimu/dijit/Popup dijit/TooltipDialog dijit/Menu dijit/MenuItem dijit/popup ./SortFields".split(" "),function(n,p,q,r,s,c,f,e,t,k,u,v,w,x,l,h,y){return n([p,q,r],{baseClass:"jimu-query-setting-popup-config",templateString:s,_currentOrderByFields:null,_validSortFieldTypes:"esriFieldTypeOID esriFieldTypeString esriFieldTypeDate esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble".split(" "),
nls:null,sqs:null,config:null,postCreate:function(){this.inherited(arguments);this._currentOrderByFields=[];this._initFieldsTable();this._initAddFields();this.clear();this.config&&this.setConfig(this.config)},setConfig:function(a){this.clear();this.config=c.clone(a);this.config.title&&"string"===typeof this.config.title?this.titleTextBox.set("value",this.config.title||""):this.titleTextBox.set("value","");var b=this._getLayerDefinition();if(b){var g={};a=e.map(this.config.fields,c.hitch(this,function(a){var b=
a.name;g[b]=a;return b}));b=c.clone(b.fields);b=this._getSortedFieldInfos(a,b);e.forEach(b,c.hitch(this,function(a){a.visibility=!1;a.specialType="none";var b=g[a.name];b&&(a=c.mixin(a,b),a.visibility=!0)}));this._setFields(b)}else this._setFields([]);this._setOrderByFields(this.config.orderByFields)},_getSortedFieldInfos:function(a,b){var g=[],m={};e.forEach(b,c.hitch(this,function(a){m[a.name]=a}));var d=[],d=d.concat(a);e.forEach(b,c.hitch(this,function(a){a=a.name;0>d.indexOf(a)&&d.push(a)}));
return g=e.map(d,c.hitch(this,function(a){return m[a]}))},getConfig:function(){var a={title:"",fields:[],orderByFields:[]};if(!this.titleTextBox.validate())return this.sqs.showResultsSetting(),this.sqs.scrollToDom(this.titleTextBox.domNode),this.sqs.showValidationErrorTip(this.titleTextBox),null;a.title=this.titleTextBox.get("value");var b=this.fieldsTable.getRows(),g=[];e.forEach(b,c.hitch(this,function(a){a=this.fieldsTable.getRowData(a);a.visibility&&g.push({name:a.name,alias:a.alias||a.name,specialType:a.specialType})}));
a.fields=g;b=this._getLayerDefinition();this._shouldEnableSorting(b)&&(a.orderByFields=this._getOrderByFields());return a},clear:function(){f.removeClass(this.btnSortFields,"enabled");this._currentOrderByFields=[];this.titleTextBox.set("value","");this.fieldsTable.clear();this._resetMenu();this._addEmptyMenuItem()},destroy:function(){this.sqs=null;this.titleTextBox.focusNode.blur();this.inherited(arguments)},updateSortingIcon:function(a){this._shouldEnableSorting(a)?f.addClass(this.btnSortFields,
"enabled"):f.removeClass(this.btnSortFields,"enabled")},_getLayerDefinition:function(){return this.sqs._layerDefinition},_initFieldsTable:function(){var a={autoHeight:!1,style:"height:187px",fields:[{name:"visibility",title:this.nls.visibility,type:"checkbox"},{name:"name",title:this.nls.name,type:"text",editable:!1},{name:"alias",title:this.nls.alias,type:"text",editable:!0},{name:"specialType",title:this.nls.specialType,type:"extension",create:c.hitch(this,this._createSpecialType),setValue:c.hitch(this,
this._setValue4SpecialType),getValue:c.hitch(this,this._getValueOfSpecialType)},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down"]}]};this.fieldsTable=new u(a);this.fieldsTable.placeAt(this.fieldsContainer);this.fieldsTable.startup()},_createSpecialType:function(a){a=f.create("select",{},a);f.create("option",{value:"none",label:this.nls.none,selected:!0,innerHTML:this.nls.none},a);f.create("option",{value:"link",label:this.nls.link,innerHTML:this.nls.link},a);f.create("option",
{value:"image",label:this.nls.image,innerHTML:this.nls.image},a)},_setValue4SpecialType:function(a,b){k("select",a)[0].value=b},_getValueOfSpecialType:function(a){return k("select",a)[0].value},_initAddFields:function(){var a=f.create("div");this.tooltipDialog=new w({style:"cursor:pointer",content:a});this.menu=new x;this.menu.placeAt(a);this.own(t(document.body,"click",c.hitch(this,function(){h.close(this.tooltipDialog)})))},_onAddClicked:function(a){a.stopPropagation();a.preventDefault();h.close(this.tooltipDialog);
h.open({popup:this.tooltipDialog,around:this.btnAddFields})},_resetMenu:function(){var a=this.menu.getChildren();e.forEach(a,c.hitch(this,function(a){this.menu.removeChild(a)}))},_addEmptyMenuItem:function(){var a=new l({label:this.nls.noField,onClick:c.hitch(this,function(){var a=this.menu.getParent();f.setStyle(a.domNode.parentNode,"display","none")})});this.menu.addChild(a)},_setFields:function(a){this._resetMenu();a=e.filter(a,function(a){return"esriFieldTypeGeometry"!==a.type});0<a.length?e.forEach(a,
c.hitch(this,function(a){this._addMenuItem(a);this._addRow(a)})):this._addEmptyMenuItem()},_addMenuItem:function(a){var b=new l({label:a.name+" {"+a.name+"}",onClick:c.hitch(this,function(){var b=this.titleTextBox.get("value")+"${"+a.name+"}";this.titleTextBox.set("value",b);b=this.menu.getParent();f.setStyle(b.domNode.parentNode,"display","none")})});this.menu.addChild(b)},_addRow:function(a){a=c.clone(a);var b=this.fieldsTable.addRow(a);b.success&&(b.tr.fieldInfo=a)},_onBtnSortFieldsClicked:function(){var a=
this._getLayerDefinition();if(a&&this._shouldEnableSorting(a))var b=new y({nls:this.nls,layerDefinition:a,orderByFields:c.clone(this._currentOrderByFields),validSortFieldTypes:this._validSortFieldTypes}),g=new v({width:640,height:380,titleLabel:this.nls.setSortingFields,content:b,onClose:c.hitch(this,function(){b.destroy()}),buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){var a=b.getOrderByFields();this._setOrderByFields(a);g.close()})},{label:this.nls.cancel,onClick:c.hitch(this,function(){g.close()})}]})},
_shouldEnableSorting:function(a){return this._isServiceSupportsPagination(a)&&this._isServiceSupportsOrderBy(a)},_isServiceSupportsPagination:function(a){var b=!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsPagination&&(b=!0);return b},_isServiceSupportsOrderBy:function(a){var b=!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsOrderBy&&(b=!0);return b},_getOrderByFields:function(){return this._currentOrderByFields},_setOrderByFields:function(a){a=a||[];var b=
this.sortFieldsDiv.innerHTML="";a=e.map(a,c.hitch(this,function(c,f){var d=c.split(" "),e=d[0],h="ASC";d[1]&&"string"===typeof d[1]&&(d[1]=d[1].toUpperCase(),"DESC"===d[1]&&(h="DESC"));d=h.toLowerCase();d="\x3cspan\x3e"+e+'\x3c/span\x3e\x3cspan class\x3d"sort-arrow '+d+'"\x3e\x3c/span\x3e';f!==a.length-1&&(d+="\x3cspan\x3e,\x26nbsp;\x3c/span\x3e");b+=d;return e+" "+h}));b&&(b="\x3cspan\x3e\x26nbsp;\x26nbsp;\x3c/span\x3e"+b);this.sortFieldsDiv.innerHTML=b;this._currentOrderByFields=a}})});