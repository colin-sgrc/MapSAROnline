//>>built
require({cache:{"widgets/GeoLookup/setting/layerDetails":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/request".split(" "),function(m,q,k,g,p,l,n){return q([m],{declaredClass:"layerDetails",map:null,layers:null,layerStore:null,fieldName:null,childList:null,validFieldTypes:"esriFieldTypeInteger esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeSingle esriFieldTypeString esriFieldTypeDate esriFieldTypeGeometry esriFieldTypeOID esriFieldTypeBlob esriFieldTypeGlobalID esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeXML".split(" "),
geometryTypes:null,layersOnly:!1,constructor:function(b){this.map=b;this.startup()},startup:function(){this.layerStore=null;this.layerStore=[]},getAllMapLayers:function(){var b=[],f=new p,d;g.forEach(this.map.itemInfo.itemData.operationalLayers,k.hitch(this,function(c){c.featureCollection||(c.layerObject.type&&"Feature Layer"===c.layerObject.type?(d={label:c.title,id:c.id,url:c.url,fieldName:this.fieldName,type:"Feature Layer",checked:!1,children:[]},b.push(this._getLayerInfo(d)),this.layerStore.push(d)):
c.layers?(this.childList=[],g.forEach(c.layerObject.layerInfos,k.hitch(this,function(e){e={label:e.name,id:c.id+"."+e.id,url:c.url+"/"+e.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[]};this.childList.push(e);b.push(this._getLayerInfo(e))})),d={label:c.title,id:c.id,url:c.url,type:"Service",checked:!1,children:this.childList},this.layerStore.push(d)):"ArcGISMapServiceLayer"===c.layerType&&(this.childList=[],g.forEach(c.layerObject.layerInfos,k.hitch(this,function(e){e={label:e.name,
id:c.id+"."+e.id,url:c.url+"/"+e.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[]};this.childList.push(e);b.push(this._getLayerInfo(e))})),d={label:c.title,id:c.id,url:c.url,type:"MapService",checked:!1,children:this.childList},this.layerStore.push(d)))}));l(b).then(k.hitch(this,function(){var b=this._controlComplete();this.emit("complete",b);f.resolve(b)}),k.hitch(this,function(){f.resolve(null)}));return f.promise},_getLayerInfo:function(b){var f=new p;b.url?0===b.url.length?f.resolve():
n({url:b.url,content:{f:"json"},callbackParamName:"callback"}).then(k.hitch(this,function(d){if(d.hasOwnProperty("fields")&&!1===this.layersOnly){var c=g.map(d.fields,k.hitch(this,function(c){return{label:c.alias,id:b.id+"."+c.name,name:c.name,type:"Field",fieldType:c.type,checked:!1}})),c=g.filter(c,k.hitch(this,function(b){return 0<=g.indexOf(this.validFieldTypes,b.fieldType)}));b.children=c}b.geometryType=d.geometryType;b.visible=!0;this.geometryTypes&&!g.some(this.geometryTypes,function(c){if(c===
b.geometryType)return!0})&&(b.visible=!1);f.resolve(d)}),function(){f.resolve(null)}):f.resolve();return f.promise},_controlComplete:function(){g.forEach(this.layerStore,function(b){if(b.children&&0<b.children.length){var f=g.filter(b.children,function(b){return b.hasOwnProperty("visible")?b.visible:!0});b.children=f;0===b.children.length&&(b.visible=!1)}});return this.store={data:{identifier:"id",label:"label",items:g.filter(this.layerStore,function(b){return b.hasOwnProperty("visible")?b.visible:
!0})}}}})})},"widgets/GeoLookup/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/GeoLookup/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"fieldsPage" title\x3d"Configure Layer Fields"\x3e\r\n    \t\x3cdiv class\x3d"dijitDialogPaneContent" data-dojo-attach-point\x3d"fieldsContainer"\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"layername"\x3e${nls.fieldTable.label}\x3c/label\x3e\x3cp style\x3d"height:15px;"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"tableFieldInfos"\x3e\x3c/div\x3e\r\n       \x3c/div\x3e\r\n\t    \x3cdiv class\x3d"dijitDialogPaneActionBar"\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"ok" data-dojo-attach-event\x3d"click:saveFields" \x3eOK\x3c/div\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"cancel" data-dojo-attach-event\x3d"click:cancelFields" \x3eCancel\x3c/div\x3e\r\n\t    \x3c/div\x3e        \r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"advSettingsPage" title\x3d"Advance Settings"\x3e\r\n\r\n        \x3ctable class\x3d"setting-adv-table" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                        \x3cspan class\x3d"adv-settings-subTitle"\x3e${nls.advSettings.subTitle}\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controlsMulti"\x3e\r\n\r\n                    \x3ctd\x3e\x3cspan\x3e${nls.advSettings.latFieldsDesc}\x3c/span\x3e\x3c/td\x3e\r\n\r\n                    \x3ctd\x3e\x3ctextarea class\x3d"textAreaCoord" data-dojo-attach-point\x3d"advSettingsLatValues" data-dojo-type\x3d"dijit/form/SimpleTextarea"\x3e\x3c/textarea\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controlsMulti"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.longFieldsDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3ctextarea class\x3d"textAreaCoord" data-dojo-attach-point\x3d"advSettingsLongValues" data-dojo-type\x3d"dijit/form/SimpleTextarea"\x3e\x3c/textarea\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.intersectFieldDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsIntersectField" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.intersectInDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsIntersectInValue" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                 \r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.intersectOutDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsIntersectOutValue" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.maxRowCount}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsMaxRowCount" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e                 \r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.cacheNumberDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsCacheNumber" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e                \r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n\t    \x3cdiv class\x3d"dijitDialogPaneActionBar"\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"ok" data-dojo-attach-event\x3d"click:saveAdv" \x3eOK\x3c/div\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"cancel" data-dojo-attach-event\x3d"click:cancelAdv" \x3eCancel\x3c/div\x3e\r\n\t    \x3c/div\x3e        \r\n    \x3c/div\x3e\r\n    \r\n\t\x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-id\x3d"symbolDial" data-dojo-attach-point\x3d"symbolDial" title\x3d"Choose a Symbol"\x3e\r\n\t    \x3ctable class\x3d"dijitDialogPaneContentArea"\x3e\r\n\t        \x3ctr\x3e\r\n\t            \x3ctd\x3e\x3cdiv data-dojo-attach-point\x3d"symbolPicker" data-dojo-type\x3d"jimu/dijit/SymbolChooser" data-dojo-props\x3d\'type:"marker"\'\x3e\x3c/div\x3e\x3c/td\x3e\r\n\t        \x3c/tr\x3e\r\n\t    \x3c/table\x3e\r\n\t    \t\r\n\t    \x3cdiv class\x3d"dijitDialogPaneActionBar"\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"ok" data-dojo-attach-event\x3d"click:saveSymbol" \x3eOK\x3c/div\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"cancel" data-dojo-attach-event\x3d"click:cancelSymbol" \x3eCancel\x3c/div\x3e\r\n\t    \x3c/div\x3e \r\n\t    \r\n\t\x3c/div\x3e    \r\n    \r\n    \r\n    \x3cdiv data-dojo-attach-point\x3d"mainPage" style\x3d"width:100%;"\x3e\r\n\r\n        \x3c!-- \x3cdiv class\x3d"settings-heading" data-dojo-attach-point\x3d"settingsHeader"\x3e${nls.settingsHeader}\x3c/div\x3e  --\x3e\r\n        \x3cdiv class\x3d"settings-description" data-dojo-attach-point\x3d"settingsDesc"\x3e${nls.settingsDesc}\x3c/div\x3e\r\n        \x3cdiv class\x3d"setting-layer-table" data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\x3cbr /\x3e\r\n        \x3cdiv class\x3d"settings-error" data-dojo-attach-point\x3d"tableLayerInfosError" style\x3d"display:none"\x3e${nls.noPolygonLayers}\x3c/div\x3e\x3cbr /\x3e\r\n        \x3ctable class\x3d"settings-symbol-area" data-dojo-attach-point\x3d"symbolArea" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n                \x3ctr \x3e\r\n                    \x3ctd class\x3d"symbolItemLeft"\x3e\r\n                        \x3clabel data-dojo-attach-point\x3d"symbolWithinLabel" for\x3d"symbolWithin"\x3e${nls.symbolArea.symbolLabelWithin}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                    \t\x3cspan class\x3d"symPreview" data-dojo-attach-point\x3d"symbolInPreview"\x3e\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e    \r\n                \x3ctr\x3e\r\n                    \x3ctd class\x3d"symbolItemLeft"\x3e\r\n                        \x3clabel data-dojo-attach-point\x3d"symbolOutsideLabel" for\x3d"symbolOutside"\x3e${nls.symbolArea.symbolLabelOutside}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                    \t\x3cspan class\x3d"symPreview" data-dojo-attach-point\x3d"symbolOutPreview"\x3e\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"btnAdvSettings2" data-dojo-attach-event\x3d"click:showAdvSettings"\x3e${nls.advSettingsBtn}\x3c/div\x3e\r\n        \r\n        \x3cdiv class\x3d\'settings-error hideGLItem\'  data-dojo-attach-point\x3d"btnErrorMsg"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/GeoLookup/setting/css/style.css":".solutions-widget-geolookup-setting .settings-heading {font-size: 1.35em; margin-top: 15px;}.solutions-widget-geolookup-setting .settings-description {font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679; margin-top: 15px;}.solutions-widget-geolookup-setting .settings-error {padding-top: 15px; font-size: 14px; color: orangered;}.solutions-widget-geolookup-setting .hideGLItem {display: none;}.solutions-widget-geolookup-setting .setting-layer-table {margin: 0px; padding-top: 15px;}.solutions-widget-geolookup-setting .enrich {width: 100px;}.solutions-widget-geolookup-setting .fieldselector {width: 140px;}.solutions-widget-geolookup-setting .settings-symbol-area \x3e tbody \x3e tr \x3e td {vertical-align: middle; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679; margin-right: 10px;}.solutions-widget-geolookup-setting .settings-symbol-area {padding-bottom: 8px;}.solutions-widget-geolookup-setting .symbolItemleft {width: 50%; float: left; vertical-align: middle; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679; margin-right: 10px;}.solutions-widget-geolookup-setting .symPreview {cursor: pointer;}.solutions-widget-geolookup-setting .appended {width: 100px;}.solutions-widget-geolookup-setting .setting-adv-table {margin-left: 15px;}.solutions-widget-geolookup-setting .controlsMulti {width: 100%; height: 130px; vertical-align: middle;}.solutions-widget-geolookup-setting .controls {width: 100%; vertical-align: middle;}.solutions-widget-geolookup-setting .setting-adv-table \x3e tbody \x3e tr \x3e td \x3e span {margin-left: 20px;}.solutions-widget-geolookup-setting .setting-adv-table \x3e tbody \x3e tr \x3e td \x3e input {margin-left: 5px;}.solutions-widget-geolookup-setting .setting-adv-table \x3e thead \x3e tr \x3e th,.solutions-widget-geolookup-setting .setting-adv-table \x3e tbody \x3e tr \x3e td {height: 40px; line-height: 40px; vertical-align: middle; font-size: 1em;}.solutions-widget-geolookup-setting .adv-settings-subTitle {font-family: 'Open Sans', sans-serif; font-size: 14px; font-style: bold; color: #596679;}.textAreaCoord {height: 130px; min-height: 100px; float: right; resize: none; width: 100%; font-size: 1em;}.solutions-widget-geolookup-setting .textBox {float: right; width: auto; margin-left: 5px; font-size: 1em;} .claro .dijitDialogTitleBar {background-color: #FFFFFF; font-family: 'Open Sans', sans-serif; font-style:Semibold; font-size: 14px; color: #596679;} .claro .dijitDialogPaneContent {font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679;} .claro .dijitDialogPaneActionBar {background-color: #FFFFFF; border-color: #FFFFFF;}",
"*now":function(m){m(['dojo/i18n!*preload*widgets/GeoLookup/setting/nls/Setting*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin jimu/dijit/SimpleTable dojo/query dojo/_base/html dojo/dom-style dojo/_base/array dojo/on dojo/_base/lang dojo/dom-construct jimu/symbolUtils esri/symbols/jsonUtils jimu/dijit/SymbolChooser ./layerDetails".split(" "),function(m,q,k,g,p,l,n,b,f,d,c,e,r,u,t){return m([q,k],{baseClass:"solutions-widget-geolookup-setting",layersTable:null,currentLayer:null,selectedFields:[],layerList:[],symbolEvent:null,startup:function(){this.inherited(arguments);
null===this.config&&(this.config={});void 0===this.config&&(this.config={});""===this.config&&(this.config={});this.setConfig(this.config);this.own(f(this.symbolInPreview,"click",d.hitch(this,function(){this.popSymbolChooser("Within");this.symbolDial.show()})));this.own(f(this.symbolOutPreview,"click",d.hitch(this,function(){this.popSymbolChooser("Outside");this.symbolDial.show()})));this.createLayerTable();this.createFieldsTable();this.layerList=[];if(0<this.map.itemInfo.itemData.operationalLayers.length){var a=
new t(this.map);this.own(f(a,"complete",d.hitch(this,this._completeLayerDetails)));a.getAllMapLayers()}else this._noLayersDisplay()},setConfig:function(a){this.config=a;b.forEach(this.config.enrichLayers,function(a){this.selectedFields[a.id]=a.fields},this);this.showInitSymbols()},getConfig:function(){this.config.SymbolWithin=this.config.SymbolWithin;this.config.SymbolOutside=this.config.SymbolOutside;var a=this.layersTable.getData();this.config.enrichLayers=[];var s=!1;return b.some(a,function(a){if(a.enrich){var b=
{};b.id=a.id;b.label=a.label;b.url=a.url;b.name=a.name;if(!this.selectedFields[b.id]||1>this.selectedFields[b.id].length)return!0;b.fields=this.selectedFields[b.id];this.config.enrichLayers.push(b);s=!0}},this)||!1===s?(this.showOKError(),!1):this.config},_completeLayerDetails:function(a){a?(b.forEach(a.data.items,d.hitch(this,function(a){"Feature Layer"===a.type?this.layerList.push(a):("Service"===a.type||"MapService"===a.type)&&b.forEach(a.children,d.hitch(this,function(a){"Layer"===a.type&&this.layerList.push(a)}))})),
1<=this.layerList.length?this.loadLayerTable():this._noLayersDisplay()):this._noLayersDisplay()},loadLayerTable:function(){var a="",c=!1,d=!1;b.forEach(this.layerList,function(h){if(null!==h.id&&void 0!==h.id&&("Feature Layer"===h.type||"Layer"===h.type)&&h.url&&"esriGeometryPolygon"===h.geometryType)a=h.label,d=!1,0<b.filter(this.config.enrichLayers,function(a){return a.id===h.id}).length&&(d=!0),this.layersTable.addRow({label:a,enrich:d,id:h.id,url:h.url}),c=!0},this);c?n.set(this.tableLayerInfosError,
"display","none"):n.set(this.tableLayerInfosError,"display","")},createLayerTable:function(){var a={fields:[{name:"enrich",title:this.nls.layerTable.colEnrich,type:"checkbox","class":"enrich"},{name:"label",title:this.nls.layerTable.colLabel,type:"text"},{name:"actions",title:this.nls.layerTable.colFieldSelector,type:"actions","class":"fieldselector",actions:["edit"]},{name:"id",type:"text",hidden:!0},{name:"url",type:"text",hidden:!0}],selectable:!1};c.empty(this.tableLayerInfos);this.layersTable=
new g(a);this.layersTable.placeAt(this.tableLayerInfos);this.layersTable.startup();this.own(f(this.layersTable,"actions-edit",d.hitch(this,function(a){this.showLayerFields(a);this.fieldsPage.show();this.resizeFieldsTable()})))},createFieldsTable:function(){this.layerFieldsTable=new g({fields:[{name:"isAppended",title:this.nls.fieldTable.colAppend,type:"checkbox","class":"appended"},{name:"fieldName",title:this.nls.fieldTable.colName,type:"text"},{name:"label",title:this.nls.fieldTable.colAlias,type:"text",
editable:!0}],selectable:!1});this.layerFieldsTable.placeAt(this.tableFieldInfos);this.layerFieldsTable.startup()},resizeFieldsTable:function(){this.layerFieldsTable.domNode.style.width="608px";this.layerFieldsTable.domNode.style.height="360px";this.fieldsPage.resize()},showLayerFields:function(a){this.currentLayer=null;var c=p(".action-item-parent",a);if(c&&c.length){var f=this.layersTable.getRowData(a);this.layerFieldsTable.clear();var h;b.forEach(this.layerList,d.hitch(this,function(a){a.id===
f.id&&(h=a)}));if(h&&h.children){a=this.selectedFields[f.id];var e,g,k,l;a&&(e=b.map(a,function(a){return a.fieldName}),g=b.map(a,function(a){return a.label}));a=h.children;b.forEach(a,function(a){l=a.label;k=!1;e&&0<=e.indexOf(a.name)&&(k=!0,l=g[e.indexOf(a.name)]);this.layerFieldsTable.addRow({fieldName:a.name,label:l,isAppended:k})},this);this.currentLayer=f.id}}},saveFields:function(){var a=this.layerFieldsTable.getData(),c=[],d;b.forEach(a,function(a){!0===a.isAppended&&(d={},d.fieldName=a.fieldName,
d.label=a.label,c.push(d))},this);this.selectedFields[this.currentLayer]=c;this.fieldsPage.hide()},cancelFields:function(){this.fieldsPage.hide()},cancelAdv:function(){this.advSettingsPage.hide()},saveAdv:function(){var a;a=this.advSettingsLatValues.get("value");a=a.split("\n");this.config.latFields=[];b.forEach(a,function(a){""!==a&&this.config.latFields.push(a)},this);a=this.advSettingsLongValues.get("value");a=a.split("\n");this.config.longFields=[];b.forEach(a,function(a){""!==a&&this.config.longFields.push(a)},
this);this.config.intersectField=this.advSettingsIntersectField.get("value");this.config.valueIn=this.advSettingsIntersectInValue.get("value");this.config.valueOut=this.advSettingsIntersectOutValue.get("value");this.config.cacheNumber=this.advSettingsCacheNumber.get("value");this.config.maxRowCount=this.advSettingsMaxRowCount.get("value");this.advSettingsPage.hide()},showAdvSettings:function(){var a="";b.forEach(this.config.latFields,function(b){a=a+b+"\n"},this);this.advSettingsLatValues.set("value",
a);a="";b.forEach(this.config.longFields,function(b){a=a+b+"\n"},this);this.advSettingsLongValues.set("value",a);this.advSettingsIntersectField.set("value",this.config.intersectField);this.advSettingsIntersectInValue.set("value",this.config.valueIn);this.advSettingsIntersectOutValue.set("value",this.config.valueOut);this.advSettingsCacheNumber.set("value",this.config.cacheNumber);this.advSettingsMaxRowCount.set("value",this.config.maxRowCount);this.advSettingsPage.show()},popSymbolChooser:function(a){this.symbolEvent=
a;(a=r.fromJson("Within"===a?this.config.SymbolWithin:this.config.SymbolOutside))&&this.symbolPicker.showBySymbol(a)},saveSymbol:function(){"Within"===this.symbolEvent?this.config.SymbolWithin=this.symbolPicker.getSymbol().toJson():this.config.SymbolOutside=this.symbolPicker.getSymbol().toJson();this.showInitSymbols();this.symbolDial.hide()},cancelSymbol:function(){this.symbolDial.hide()},showInitSymbols:function(){var a,b;if(this.config.SymbolWithin&&(a=r.fromJson(this.config.SymbolWithin)))b=this.symbolInPreview,
l.empty(b),(a=e.createSymbolNode(a))||(a=l.create("div")),l.place(a,this.symbolInPreview);if(this.config.SymbolOutside&&(a=r.fromJson(this.config.SymbolOutside)))b=this.symbolOutPreview,l.empty(b),(a=e.createSymbolNode(a))||(a=l.create("div")),l.place(a,this.symbolOutPreview)},showOKError:function(){this.btnErrorMsg.innerHTML=this.nls.errorOnOk;l.removeClass(this.btnErrorMsg,"hideGLItem")},hideOkError:function(){l.addClass(this.btnErrorMsg,"hideGLItem")},_noLayersDisplay:function(){n.set(this.tableLayerInfosError,
"display","")}})});