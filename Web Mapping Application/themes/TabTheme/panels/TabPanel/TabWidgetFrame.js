//>>built
require({cache:{"url:themes/TabTheme/panels/TabPanel/TabWidgetFrame.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"title" data-dojo-attach-point\x3d"titleNode"\x3e\r\n    \x3cdiv class\x3d"title-label" data-dojo-attach-point\x3d"titleLabelNode" title\x3d"${label}"\x3e\r\n      ${label}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"title-angle"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-container" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_TemplatedMixin dojo/query dojo/dom-geometry dojo/text!./TabWidgetFrame.html jimu/BaseWidgetFrame".split(" "),function(b,d,e,c,f,g){return b([g,d],{baseClass:"jimu-widget-frame tab-widget-frame",templateString:f,borderWidth:1,resize:function(){var a=c.getMarginBox(this.domNode).h-2*this.borderWidth,b=c.getMarginBox(this.titleNode).h,a=a-b,a=0>=a?"100%":a+"px";e(this.containerNode).style({height:a});this.widget&&"closed"!==this.widget.state&&this.widget.resize()}})});