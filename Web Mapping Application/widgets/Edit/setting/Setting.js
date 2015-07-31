//>>built
require({cache:{"widgets/Edit/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Edit/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"secondPageDiv" style\x3d"display:none"\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"button" data-dojo-attach-event\x3d"click:backToFirstPage"\x3e${nls.back}\x3c/button\x3e\x3clabel data-dojo-attach-point\x3d"layername"\x3e\x3c/label\x3e\x3cbr\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"tableFieldInfos"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"firstPageDiv"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.toolbarVisible}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"toolbarVisible" \r\n              data-dojo-attach-event\x3d"click:onToolbarSelected"\r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"toolbarOptionsTr"\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.toolbarOptions}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading"\x3e${nls.mergeVisible}\x3c/span\x3e\r\n            \x3cdiv class\x3d"jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cinput   data-dojo-attach-point\x3d"mergeVisible" \r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading" \x3e${nls.cutVisible}\x3c/span\x3e\r\n            \x3cdiv class\x3d"jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"cutVisible" \r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading" \x3e${nls.reshapeVisible}\x3c/span\x3e\r\n            \x3cdiv class\x3d"jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"reshapeVisible" \r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading" \x3e${nls.enableUndoRedo}\x3c/span\x3e\r\n             \x3cdiv class\x3d"jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cinput  data-dojo-attach-point\x3d"enableUndoRedo" \r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\x3cbr\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"tableLayerInfosError" style\x3d"display:none; padding: 5px;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Edit/setting/css/style.css":".jimu-widget-edit-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-edit-setting .editable{width: 100px;}.jimu-widget-edit-setting .update{width: 200px;}.jimu-widget-edit-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-edit-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right;}.jimu-rtl .jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .first{text-align: left;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second{width:500px;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second \x3e span{display: inline-block; height: 40px; line-height: 40px;}.jimu-widget-edit-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-edit-setting .dijitSelect{height: 30px; width: 100%;}",
"*now":function(f){f(['dojo/i18n!*preload*widgets/Edit/setting/nls/Setting*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/lang dojo/_base/html dojo/on dojo/_base/array dojo/dom-style dojo/query".split(" "),function(f,n,p,k,q,l,r,s,h,t){return f([p,n],{baseClass:"jimu-widget-edit-setting",selectLayer:null,tooltipDialog:null,featurelayers:[],indexLayer:-1,startup:function(){this.inherited(arguments);this.featurelayers.length=0;this.config.editor||(this.config.editor={});this.enableUndoRedo.set("checked",this.config.editor.enableUndoRedo);
this.toolbarVisible.set("checked",this.config.editor.toolbarVisible);this.mergeVisible.set("checked",this.config.editor.toolbarOptions.mergeVisible);this.cutVisible.set("checked",this.config.editor.toolbarOptions.cutVisible);this.reshapeVisible.set("checked",this.config.editor.toolbarOptions.reshapeVisible);this.onToolbarSelected();this.displayLayersTable=new k({fields:[{name:"edit",title:this.nls.edit,type:"checkbox","class":"editable"},{name:"label",title:this.nls.label,type:"text"},{name:"disableGeometryUpdate",
title:this.nls.update,type:"checkbox","class":"update",width:"300px"},{name:"actions",title:this.nls.fields,type:"actions","class":"editable",actions:["edit"]}],selectable:!1});this.displayLayersTable.placeAt(this.tableLayerInfos);this.displayLayersTable.startup();this.displayFieldsTable=new k({fields:[{name:"isEditable",title:this.nls.edit,type:"checkbox","class":"editable"},{name:"fieldName",title:this.nls.editpageName,type:"text"},{name:"label",title:this.nls.editpageAlias,type:"text",editable:!0},
{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down"],"class":"editable"}],selectable:!1});this.displayFieldsTable.placeAt(this.tableFieldInfos);this.displayFieldsTable.startup();this.own(r(this.displayLayersTable,"actions-edit",q.hitch(this,this.showLayerFields)));this.setConfig(this.config)},backToFirstPage:function(){h.set(this.secondPageDiv,"display","none");h.set(this.firstPageDiv,"display","");this.resetFeaturelayers(this.indexLayer);this.indexLayer=-1},showLayerFields:function(c){var b=
t(".action-item-parent",c);if(b&&b.length&&(b=this.displayLayersTable.getRowData(c),b.edit)){this.displayFieldsTable.clear();h.set(this.firstPageDiv,"display","none");h.set(this.secondPageDiv,"display","");var d=this.featurelayers.length;for(c=0;c<d;c++)if(b.label.toLowerCase()===this.featurelayers[c].label.toLowerCase()){this.indexLayer=c;b=this.featurelayers[c].fields.length;for(d=0;d<b;d++){var a=this.featurelayers[c].fields[d];this.displayFieldsTable.addRow({fieldName:a.fieldName,isEditable:a.isEditable,
label:a.label})}break}}},onToolbarSelected:function(){this.toolbarVisible.checked?l.setStyle(this.toolbarOptionsTr,"display","table-row"):l.setStyle(this.toolbarOptionsTr,"display","none")},setConfig:function(c){this.config=c;this.displayLayersTable.clear();this.featurelayers.length=0;c.editor.layerInfos||(c.editor.layerInfos=[]);this.initSelectLayer()},initSelectLayer:function(){for(var c=0,c="",b=this.map.graphicsLayerIds.length,d=!1,a=!1,m=s.map(this.config.editor.layerInfos,function(a){return a.featureLayer.url}),
b=b-1;0<=b;b--){var e=this.map.getLayer(this.map.graphicsLayerIds[b]);if("Feature Layer"===e.type&&e.url&&e.isEditable()){var f=[],a=d=!0;0<m.length&&-1===m.indexOf(e.url)&&(a=!1);if(c=this.getAllFieldsInfo(e))f=c;else for(var c=e.fields.length,g=0;g<c;g++)e.fields[g].alias||(e.fields[g].alias=e.fields[g].name),f.push({fieldName:e.fields[g].name,label:e.fields[g].alias,isEditable:!0});c=this.getOperationalLayerTitle(e);this.featurelayers.push({label:c,layer:e,fields:f,edit:a});this.displayLayersTable.addRow({label:c,
edit:a,disableGeometryUpdate:this.getGeometryUpdate(e)})}}d?h.set(this.tableLayerInfosError,"display","none"):(h.set(this.tableLayerInfosError,"display",""),this.tableLayerInfosError.innerHTML=this.nls.noLayers)},isLayerInConfig:function(c){if(this.config.editor.layerInfos)for(var b=this.config.editor.layerInfos,d=b.length,a=0;a<d;a++)if(b[a].featureLayer&&b[a].featureLayer.url&&b[a].featureLayer.url.toLowerCase()===c.url.toLowerCase())return!0;return!1},getGeometryUpdate:function(c){if(this.config.editor.layerInfos)for(var b=
this.config.editor.layerInfos,d=b.length,a=0;a<d;a++)if(b[a].featureLayer&&b[a].featureLayer.url&&b[a].featureLayer.url.toLowerCase()===c.url.toLowerCase())return b[a].disableGeometryUpdate;return!1},getAllFieldsInfo:function(c){if(this.config.editor.layerInfos)for(var b=this.config.editor.layerInfos,d=b.length,a=0;a<d;a++)if(b[a].featureLayer&&b[a].featureLayer.url&&b[a].featureLayer.url.toLowerCase()===c.url.toLowerCase())return b[a].fieldInfos;return null},getOperationalLayerTitle:function(c){var b=
"";if(this.appConfig.map&&this.appConfig.map.operationallayers)for(var d=this.appConfig.map.operationallayers.length,a=0;a<d;a++)if(this.appConfig.map.operationallayers[a].url.toLowerCase()===c.url.toLowerCase()){b=this.appConfig.map.operationallayers[a].label;break}b||(b=c.name);b||(b=c.url);return b},resetFeaturelayers:function(c){var b=[],d=this.displayFieldsTable.getData();if(-1<this.indexLayer&&this.indexLayer===c){c=d.length;for(var a=0;a<c;a++){var f={};f.fieldName=d[a].fieldName;f.label=d[a].label;
f.isEditable=d[a].isEditable;b.push(f)}this.featurelayers[this.indexLayer].fields=b}else-1<c&&(b=this.featurelayers[c].fields);return b},getConfig:function(){this.config.editor.enableUndoRedo=this.enableUndoRedo.checked;this.config.editor.toolbarVisible=this.toolbarVisible.checked;this.config.editor.toolbarOptions.mergeVisible=this.mergeVisible.checked;this.config.editor.toolbarOptions.cutVisible=this.cutVisible.checked;this.config.editor.toolbarOptions.reshapeVisible=this.reshapeVisible.checked;
var c=this.displayLayersTable.getData(),b=this.featurelayers.length;this.config.editor.layerInfos=[];for(var d=0;d<b;d++)if(c[d].edit){var a={featureLayer:{}};a.featureLayer.url=this.featurelayers[d].layer.url;a.disableGeometryUpdate=c[d].disableGeometryUpdate;a.fieldInfos=[];a.fieldInfos=this.resetFeaturelayers(d);(!a.fieldInfos||!a.fieldInfos.length)&&delete a.fieldInfos;this.config.editor.layerInfos.push(a)}0===this.config.editor.layerInfos.length&&(this.config.editor.layerInfos=null);return this.config}})});