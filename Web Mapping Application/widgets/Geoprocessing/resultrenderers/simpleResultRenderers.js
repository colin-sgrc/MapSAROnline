//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/store/Memory dgrid/OnDemandGrid esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/graphicsUtils esri/renderers/SimpleRenderer esri/renderers/jsonUtils esri/InfoTemplate ../BaseResultRenderer ../LayerOrderUtil ./defaultSymbol".split(" "),function(d,m,h,c,n,p,q,r,s,t,k,u,v,e,w,l){var f={};f.UnsupportRenderer=d(e,{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-unsupport",postCreate:function(){this.inherited(arguments);
c.setAttr(this.domNode,"innerHTML",this.message)}});f.SimpleResultRenderer=d(e,{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-simple",postCreate:function(){this.inherited(arguments);c.setAttr(this.domNode,"innerHTML",this.message)}});f.ErrorResultRenderer=d(e,{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-error",postCreate:function(){this.inherited(arguments);c.setAttr(this.domNode,"innerHTML",this.message)}});f.RecordSetTable=d([e],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-table",
postCreate:function(){this.inherited(arguments);var a=[];if(this.value.fields)a=this.value.fields;else if(this.value.features&&0<this.value.features.length)for(var b in this.value.features[0].attributes)a.push({name:b});a=h.map(a,function(a){return{label:a.name,field:a.name}});b=h.map(this.value.features,function(a){return a.attributes});b=new p({data:b});this.table=new q({columns:a,store:b},this.domNode)},startup:function(){this.inherited(arguments);this.table.startup()}});f.DrawResultFeatureSet=
d(e,{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-draw-feature",postCreate:function(){this.inherited(arguments);this.value.features&&0<this.value.features.length&&(this._createDisplayText(),this._drawResultFeature(this.param,this.value))},destroy:function(){this.resultLayer&&this.map.removeLayer(this.resultLayer);this.inherited(arguments)},_createDisplayText:function(){c.create("span",{innerHTML:this.nls.drawnOnMap,style:{marginLeft:"15px"}},this.domNode);var a=c.create("a",{innerHTML:this.nls.clear,
href:"#",style:{"float":window.isRTL?"left":"right"}},this.domNode);this.own(n(a,"click",m.hitch(this,function(){this.resultLayer&&(this.map.infoWindow.isShowing&&this.map.infoWindow.hide(),this.resultLayer.clear(),this.map.removeLayer(this.resultLayer))})))},_drawResultFeature:function(a,b){if(this.config.shareResults){if(!a.defaultValue||!a.defaultValue.geometryType)throw Error("Output parameter default value does not provide enough information to draw feature layer.");a.defaultValue.name=a.name;
this.resultLayer=new s({layerDefinition:a.defaultValue,featureSet:null},{id:this.widgetUID+a.name})}else this.resultLayer=new r({id:this.widgetUID+a.name});this._addResultLayer(a.name);a.popup||(a.popup={enablePopup:!0,title:"",fields:[]});var f=b.features.length,g=a.renderer;g?g=u.fromJson(g):"esriGeometryPoint"===b.geometryType?g=new k(l.pointSymbol):"esriGeometryPolyline"===b.geometryType?g=new k(l.lineSymbol):"esriGeometryPolygon"===b.geometryType&&(g=new k(l.polygonSymbol));var d;a.popup.enablePopup&&
(d=new v(a.popup.title||"${Non-Exist-Field}",this._generatePopupContent(b)));for(var c=0;c<f;c++)d&&b.features[c].setInfoTemplate(d),this.resultLayer.add(b.features[c]);this.resultLayer.setRenderer(g);try{var e=t.graphicsExtent(b.features);e&&(this.resultLayer.fullExtent=e.expand(1.4))}catch(h){console.error(h)}},_addResultLayer:function(a){var b=new w(this.config,this.map);try{b.calculateLayerIndex(a,this.widgetUID).then(m.hitch(this,function(a){-1!==a?this.map.addLayer(this.resultLayer,a):this.map.addLayer(this.resultLayer)}))}catch(c){console.error(c.message),
console.warn("Draw result feature set on the top of map"),this.map.addLayer(this.resultLayer)}},_generatePopupContent:function(a){var b="";h.forEach(this.param.popup.fields&&0<this.param.popup.fields.length?this.param.popup.fields:a.fields,function(a){b+='\x3ctr valign\x3d"top"\x3e\x3ctd class\x3d"attr-name"\x3e'+a.alias+'\x3c/td\x3e\x3ctd class\x3d"attr-value"\x3e${'+a.name+"}\x3c/td\x3e\x3c/tr\x3e"});return'\x3cdiv class\x3d"geoprocessing-popup"\x3e\x3ctable class\x3d"geoprocessing-popup-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3ctbody\x3e'+
b+"\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e"}});return f});