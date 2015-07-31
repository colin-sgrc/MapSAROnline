//>>built
require({cache:{"dojo/NodeList-manipulate":function(){define("./query ./_base/lang ./_base/array ./dom-construct ./dom-attr ./NodeList-dom".split(" "),function(m,g,k,c,n){function l(b){for(;b.childNodes[0]&&1==b.childNodes[0].nodeType;)b=b.childNodes[0];return b}function d(b,d){"string"==typeof b?(b=c.toDom(b,d&&d.ownerDocument),11==b.nodeType&&(b=b.childNodes[0])):1==b.nodeType&&b.parentNode&&(b=b.cloneNode(!1));return b}var f=m.NodeList;g.extend(f,{_placeMultiple:function(b,d){for(var p="string"==
typeof b||b.nodeType?m(b):b,h=[],f=0;f<p.length;f++)for(var g=p[f],a=this.length,e=a-1,q;q=this[e];e--)0<f&&(q=this._cloneNode(q),h.unshift(q)),e==a-1?c.place(q,g,d):g.parentNode.insertBefore(q,g),g=q;h.length&&(h.unshift(0),h.unshift(this.length-1),Array.prototype.splice.apply(this,h));return this},innerHTML:function(b){return arguments.length?this.addContent(b,"only"):this[0].innerHTML},text:function(b){if(arguments.length){for(var d=0,c;c=this[d];d++)1==c.nodeType&&n.set(c,"textContent",b);return this}for(var h=
"",d=0;c=this[d];d++)h+=n.get(c,"textContent");return h},val:function(b){if(arguments.length){for(var d=g.isArray(b),c=0,h;h=this[c];c++){var f=h.nodeName.toUpperCase(),l=h.type,a=d?b[c]:b;if("SELECT"==f){f=h.options;for(l=0;l<f.length;l++){var e=f[l];e.selected=h.multiple?-1!=k.indexOf(b,e.value):e.value==a}}else"checkbox"==l||"radio"==l?h.checked=h.value==a:h.value=a}return this}if((h=this[0])&&1==h.nodeType){b=h.value||"";if("SELECT"==h.nodeName.toUpperCase()&&h.multiple){b=[];f=h.options;for(l=
0;l<f.length;l++)e=f[l],e.selected&&b.push(e.value);b.length||(b=null)}return b}},append:function(b){return this.addContent(b,"last")},appendTo:function(b){return this._placeMultiple(b,"last")},prepend:function(b){return this.addContent(b,"first")},prependTo:function(b){return this._placeMultiple(b,"first")},after:function(b){return this.addContent(b,"after")},insertAfter:function(b){return this._placeMultiple(b,"after")},before:function(b){return this.addContent(b,"before")},insertBefore:function(b){return this._placeMultiple(b,
"before")},remove:f.prototype.orphan,wrap:function(b){if(this[0]){b=d(b,this[0]);for(var c=0,f;f=this[c];c++){var h=this._cloneNode(b);f.parentNode&&f.parentNode.replaceChild(h,f);l(h).appendChild(f)}}return this},wrapAll:function(b){if(this[0]){b=d(b,this[0]);this[0].parentNode.replaceChild(b,this[0]);b=l(b);for(var c=0,f;f=this[c];c++)b.appendChild(f)}return this},wrapInner:function(b){if(this[0]){b=d(b,this[0]);for(var c=0;c<this.length;c++){var f=this._cloneNode(b);this._wrap(g._toArray(this[c].childNodes),
null,this._NodeListCtor).wrapAll(f)}}return this},replaceWith:function(b){b=this._normalize(b,this[0]);for(var d=0,c;c=this[d];d++)this._place(b,c,"before",0<d),c.parentNode.removeChild(c);return this},replaceAll:function(b){b=m(b);for(var d=this._normalize(this,this[0]),c=0,f;f=b[c];c++)this._place(d,f,"before",0<c),f.parentNode.removeChild(f);return this},clone:function(){for(var b=[],d=0;d<this.length;d++)b.push(this._cloneNode(this[d]));return this._wrap(b,this,this._NodeListCtor)}});f.prototype.html||
(f.prototype.html=f.prototype.innerHTML);return f})},"dojo/NodeList-fx":function(){define(["./query","./_base/lang","./aspect","./_base/fx","./fx"],function(m,g,k,c,n){m=m.NodeList;g.extend(m,{_anim:function(c,d,f){f=f||{};var b=n.combine(this.map(function(b){b={node:b};g.mixin(b,f);return c[d](b)}));return f.auto?b.play()&&this:b},wipeIn:function(c){return this._anim(n,"wipeIn",c)},wipeOut:function(c){return this._anim(n,"wipeOut",c)},slideTo:function(c){return this._anim(n,"slideTo",c)},fadeIn:function(g){return this._anim(c,
"fadeIn",g)},fadeOut:function(g){return this._anim(c,"fadeOut",g)},animateProperty:function(g){return this._anim(c,"animateProperty",g)},anim:function(g,d,f,b,m){var p=n.combine(this.map(function(b){return c.animateProperty({node:b,properties:g,duration:d||350,easing:f})}));b&&k.after(p,"onEnd",b,!0);return p.play(m||0)}});return m})},"themes/TabTheme/widgets/SidebarController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],
function(){})},"url:themes/TabTheme/widgets/SidebarController/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"min-pane" data-dojo-attach-point\x3d"minStateNode"\x3e\r\n    \r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"max-pane" data-dojo-attach-point\x3d"maxStateNode"\x3e\r\n    \x3cdiv class\x3d"title-list" data-dojo-attach-point\x3d"titleListNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"content-list" data-dojo-attach-point\x3d"contentListNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"other-group-pane" data-dojo-attach-point\x3d"otherGroupNode"\x3e\x3c/div\x3e\r\n\t\r\n  \x3cdiv class\x3d"tab-resizer jimu-widget-bg" data-dojo-attach-point\x3d"resizerNode"\x3e\r\n    \x3cdiv class\x3d"action-node jimu-float-trailing" data-dojo-attach-event\x3d"click:_doResize" data-dojo-attach-point\x3d"doResizeNode"\x3e\r\n      \x3cdiv class\x3d"left-arrow"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\t\r\n\x3c/div\x3e\r\n',
"url:themes/TabTheme/widgets/SidebarController/css/style.css":'.jimu-widget-sidebar-controller{overflow: hidden;}.jimu-widget-sidebar-controller .title-list{position: absolute; left: 0; right: 0; top: 0; height: 44px; border-top: 1px solid #3a3a3a; border-top: 1px solid rgba(255,255,255,0.08);}.jimu-widget-sidebar-controller .title-node{height: 44px; cursor: pointer; margin-top: -2px;}.jimu-widget-sidebar-controller .max-pane{position: absolute; top: 0; left: 0; right: 0; bottom: 26px; border: 1px solid #111111;}.jimu-widget-sidebar-controller .max-pane .title-node{}.jimu-widget-sidebar-controller .min-pane .title-node:nth-child(1){margin-top: -2px; border-top: 1px solid rgba(255, 255, 255, 0.08);}.jimu-widget-sidebar-controller .max-pane .title-node:nth-child(1){margin-left: 0;}.jimu-widget-sidebar-controller .title-node img{margin: 11px 29.62962962962963%; width: 40.74074074074074%; height: auto;}.jimu-widget-sidebar-controller .tab-indicator{width: 0px; height: 2px; margin: auto;}.jimu-widget-sidebar-controller .title-node:nth-child(1) .tab-indicator{background-color: #ec7655;}.jimu-widget-sidebar-controller .title-node:nth-child(2) .tab-indicator{background-color: #fac15a;}.jimu-widget-sidebar-controller .title-node:nth-child(3) .tab-indicator{background-color: #a3ca4b;}.jimu-widget-sidebar-controller .title-node:nth-child(4) .tab-indicator{background-color: #5eb4e6;}.jimu-widget-sidebar-controller .title-node:nth-child(5) .tab-indicator{background-color: #b996d5;}.jimu-widget-sidebar-controller .content-list{position: absolute; left: 0; top: 45px; right: 0; bottom: 0;}.jimu-widget-sidebar-controller .content-node{position: absolute; left: 0; right: 0; top: 0; bottom: 0; outline: 1px solid rgba(0,0,0, 0.3); border-top: 1px solid rgba(255,255,255, 0.08);}.jimu-widget-sidebar-controller .content-title-bg{position: absolute; left: 0; right: 0; top: -1px; height: 18px; opacity: 0.2;}.jimu-widget-sidebar-controller .content-title{position: absolute; left: 14px; top: 2px; color: #888; font: 10px Arial;}.jimu-widget-sidebar-controller .content-pane{position: absolute; left: 0; top: 18px; right: 0; bottom: 0; overflow: hidden;}.jimu-widget-sidebar-controller .content-pane .more-group-pane{position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden;}.jimu-widget-sidebar-controller .tab-resizer{left: 0; right: 0; bottom: 0; height: 24px; position: absolute; border: 1px solid #111111; border-top: 1px solid #333333; border-top: 1px solid rgba(255,255,255,0.08);}.jimu-widget-sidebar-controller .tab-resizer .action-node{width: 50px; overflow: hidden; height: 100%; cursor: pointer;}.jimu-widget-sidebar-controller .tab-resizer .action-node div{width: 11px; height: 24px; margin-left: auto; margin-right: auto; background-repeat: no-repeat; background-position: center;}.jimu-widget-sidebar-controller .tab-resizer .left-arrow{background-image: url(images/arrow_left.png);}.jimu-widget-sidebar-controller .tab-resizer .left-arrow:hover{background-image: url(images/arrow_left_hover.png);}.jimu-widget-sidebar-controller .tab-resizer .right-arrow{background-image: url(images/arrow_right.png);}.jimu-widget-sidebar-controller .tab-resizer .right-arrow:hover{background-image: url(images/arrow_right_hover.png);}.jimu-widget-sidebar-controller .min-pane{position: absolute; top: 0; bottom: 26px; left: 0; right: 0; border: 1px solid #111111;}.jimu-widget-sidebar-controller .other-group-pane{border: 1px solid #111111; border-left: none; position: absolute; left: 365px; top: 0; right: 0; bottom: 16px; overflow-y: auto;}.jimu-widget-sidebar-controller .other-group:hover{background-color: #333;}.jimu-widget-sidebar-controller .other-group-pane .jimu-state-active{background-color: #292929;}.jimu-widget-sidebar-controller .other-group-pane-title{width: 100%; height: 18px; position: relative;}.jimu-widget-sidebar-controller .other-group-pane-title .bg{position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: #666; opacity: 0.3;}.jimu-widget-sidebar-controller .other-group-pane-title .text{position: absolute; left: 14px; top: 1px; color: #888; font: 10px Arial;}.jimu-widget-sidebar-controller .other-group-pane-title .close{position: absolute; right: 5px; top: 3px; height: 11px; width: 35px; cursor: pointer; background: center center no-repeat url(images/close.png);}.jimu-widget-sidebar-controller .other-group{cursor: pointer; width: 100%; height: 45px; overflow: hidden;}.jimu-widget-sidebar-controller .other-group-icon{margin: 11px 24px; width: 22px; height: 22px;}.jimu-widget-sidebar-controller .other-group-title{margin: 15px 0; color: #666; font: 12px Arial bold;}.jimu-widget-sidebar-controller .other-group-choose{margin: 15px 30px;}.jimu-widget-sidebar-controller .wp{border: 1px solid transparent;}.jimu-widget-sidebar-controller .wp-title{overflow: hidden;}.jimu-widget-sidebar-controller .wp-title .title-text{width: 57px; height: 20px; padding: 5px 13px; background-color: white; float: left; border-top-left-radius: 4px; color: #222; font: 12px Arial bold;}.jimu-widget-sidebar-controller .wp-title .title-angle{width: 21px; height: 20px; background: url(images/tab_triangle.png); float: left;}.jimu-widget-sidebar-controller .wp-pane{background-color: white; overflow: hidden; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-right-radius: 4px; position: relative;}.jimu-widget-sidebar-controller .min-pane .title-node:first-child{border-top: 1px solid #3a3a3a;}.jimu-widget-sidebar-controller .max-pane .title-node:first-child{margin-left: 0;}.jimu-widget-sidebar-controller .title-node:first-child .tab-indicator{background-color: #ec7655;}.jimu-widget-sidebar-controller .title-node:first-child+.title-node .tab-indicator{background-color: #fac15a;}.jimu-widget-sidebar-controller .title-node:first-child+.title-node+.title-node .tab-indicator{background-color: #a3ca4b;}.jimu-widget-sidebar-controller .title-node:first-child+.title-node+.title-node+.title-node .tab-indicator{background-color: #5eb4e6;}.jimu-widget-sidebar-controller .title-node:first-child+.title-node+.title-node+.title-node+.title-node .tab-indicator{background-color: #b996d5;}.jimu-widget-sidebar-controller .content-title-bg{filter: alpha(opacity\x3d12); -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d12)"; filter: progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d12);}.jimu-widget-sidebar-controller .other-group-pane-title .bg{filter: alpha(opacity\x3d30); -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d30)"; filter: progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d30);}.jimu-rtl .jimu-widget-sidebar-controller .other-group-pane-title .text{right: 14px; left: auto;}.jimu-rtl .jimu-widget-sidebar-controller .other-group-pane-title .close{left: 5px; right: auto;}',
"*now":function(m){m(['dojo/i18n!*preload*themes/TabTheme/widgets/SidebarController/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/topic dojo/aspect dojo/query dojo/on dojo/mouse dojo/fx dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/utils dojo/NodeList-manipulate dojo/NodeList-fx".split(" "),function(m,g,k,c,n,l,d,f,b,r,p,h,t,s){return m([h,t],{baseClass:"jimu-widget-sidebar-controller jimu-main-background",maxWidth:365,minWidth:55,animTime:200,stateNode:null,currentTab:null,moreTab:!1,moreTabOpened:!1,currentOtherGroup:null,lastSelectedIndex:-1,
constructor:function(){this.tabs=[]},postMixInProperties:function(){this.inherited(arguments);this.nls.more=this.nls.more||"more";this.nls.otherPanels=this.nls.otherPanels||"Other Panels"},startup:function(){this.inherited(arguments);this.createTabs();this.widgetManager.minimizeWidget(this)},getOpenedIds:function(){this.inherited(arguments);var a=[];this.currentTab&&this.currentTab.config&&this.currentTab.config.id?a.push(this.currentTab.config.id):this.currentOtherGroup&&this.currentOtherGroup.id&&
a.push(this.currentOtherGroup.id);return a},setOpenedIds:function(a){this._openLastTab(a)},onMinimize:function(){this._resizeToMin()},onMaximize:function(){this._resizeToMax()},getWidth:function(){var a=c.getContentBox(window.jimuConfig.layoutId);return 0.8*a.w>this.maxWidth?this.maxWidth:0.8*a.w},resize:function(){"minimized"===this.windowState?this._resizeMinTitleNode():this._resizeToMax()},_resizePanels:function(){k.forEach(this.tabs,function(a){a.selected&&a.panel&&a.panel.resize()},this)},_resizeTitleNode:function(){var a=
(this.getWidth()-2-21-72)/5;k.forEach(d(".title-node",this.maxStateNode),function(e){c.setStyle(e,"width",a+"px")},this)},_resizeMinTitleNode:function(){var a=c.getContentBox(this.minStateNode),e=34;390>a.h&&(e=a.h/5-44);e+=2;k.forEach(d(".title-node",this.minStateNode),function(a){c.setStyle(a,"marginBottom",e+"px")},this)},setPosition:function(a){this.position=a;a=s.getPositionStyle(this.position);a.position="absolute";c.place(this.domNode,window.jimuConfig.layoutId);c.setStyle(this.domNode,a);
this.started&&this.widgetManager.minimizeWidget(this)},createTabs:function(){var a=this.getAllConfigs(),e=[];5>=a.length?(e=a,this.moreTab=!1):(e=a.splice(0,4),this.moreTab=!0);k.forEach(e,function(a){this.createTab(a)},this);this.moreTab&&this.createTab({label:this.nls.more,flag:"more",icon:this.folderUrl+"images/more_tab_icon.png",groups:a})},createTab:function(a){var e=this._createContentNode(a);a={title:this._createTitleNode(a),content:e,contentPane:d(".content-pane",e)[0],config:a,selected:!1,
flag:a.flag,moreGroupWidgets:[],panels:[]};this.tabs.push(a);return a},onSelect:function(a){a=parseInt(d(a.currentTarget).attr("i")[0],10);this.selectTab(a)},selectTab:function(a){var e;if(!(this.tabs[a].selected&&"more"!==this.tabs[a].flag)){if(void 0===this.tabs[this.getSelectedIndex()]||"more"!==this.tabs[this.getSelectedIndex()].flag)this.lastSelectedIndex=this.getSelectedIndex();this._showIndicator(a);e=this._getIndicatorNodeByIndex(a).style("backgroundColor");d(".content-title-bg",this.tabs[a].content).style({background:e});
k.forEach(this.tabs,function(e,b){a===b?e.selected=!0:e.selected&&(e.selected=!1)},this);"more"===this.tabs[a].flag?this.showMoreTabContent(this.tabs[a]):(d(".content-node",this.domNode).style({display:"none"}),d(this.tabs[a].content).style({display:"block"}),0===d(".jimu-wc-tpc",this.tabs[a].content).length&&this.showTabContent(this.tabs[a]));this._resizePanels()}},onAction:function(a,e){if("highLight"===a&&e){var b=d('div[settingid\x3d"'+e.widgetId+'"]',this.stateNode)[0];this._highLight(b)}"removeHighLight"===
a&&this._removeHighLight()},_openLastTab:function(a){if(a&&a.length&&0<a.length){var e=this.getAllConfigs(),b=k.map(e,function(a){return a&&a.id?a.id:null});k.forEach(a,g.hitch(this,function(a){a=b.indexOf(a);-1!==a&&(4>a?this.selectTab(a):this._addGroupToMoreTab(e[a]))}))}},_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var e=c.getMarginBox(a),b=c.getContentBox(a);a.parentElement.firstElementChild!==a&&!window.isRTL&&(e.l=e.l+e.w-b.w);this.hlDiv=c.create("div",{style:{position:"absolute",
left:e.l+"px",top:e.t+"px",width:b.w+"px",height:b.h+"px"},"class":"icon-highlight"},a,"after")}},_removeHighLight:function(){this.hlDiv&&(c.destroy(this.hlDiv),this.hlDiv=null)},_getTitleNodeByIndex:function(a){return d(".title-node:nth-child("+(a+1)+")","maximized"===this.windowState?this.maxStateNode:this.minStateNode)},_onMouseEnter:function(a){a=parseInt(d(a.currentTarget).attr("i")[0],10);"maximized"===this.windowState&&this.tabs[a].selected&&"more"!==this.tabs[a].flag||this._showIndicator(a)},
_onMouseLeave:function(a){a=parseInt(d(a.currentTarget).attr("i")[0],10);"maximized"===this.windowState&&this.tabs[a].selected&&(this.moreTabOpened&&"more"===this.tabs[a].flag||!this.moreTabOpened&&"more"!==this.tabs[a].flag)||this._hideIndicator(a)},_getIndicatorNodeByIndex:function(a){return d(".tab-indicator",this._getTitleNodeByIndex(a)[0])},_showIndicator:function(a){d(".tab-indicator",this.domNode).style({width:"0"});var e=c.getContentBox(this._getTitleNodeByIndex(a)[0]).w;this._getIndicatorNodeByIndex(a).animateProperty({properties:{width:e},
duration:this.animTime,auto:!0})},_hideIndicator:function(a){this._getIndicatorNodeByIndex(a).animateProperty({properties:{width:0},duration:this.animTime,auto:!0})},getSelectedIndex:function(){for(var a=0,a=0;a<this.tabs.length;a++)if(this.tabs[a].selected)return a;return-1},showTabContent:function(a){var e=a.config;this.showGroupContent(e,a);this.currentTab=!1===e.inPanel?null:a},showGroupContent:function(a,e){var b;a.widgets&&1<a.widgets.length&&d(".content-title",e.content).text(a.label);!1===
a.inPanel?this.widgetManager.loadWidget(a).then(g.hitch(this,function(b){var d;d="more"===e.flag?"undefined":a.id;this._resizeToMin();d=this._getOffPanelPosition(d,this.widgetManager.getWidgetMarginBox(b));b.setPosition(d);this.widgetManager.openWidget(b)})):this.panelManager.showPanel(a).then(g.hitch(this,function(c){d(c.domNode).style(s.getPositionStyle({left:0,right:0,top:0,bottom:0}));"more"===e.flag?(b=d('.more-group-pane[label\x3d"'+a.label+'"]',e.contentPane),b.append(c.domNode)):d(e.contentPane).append(c.domNode);
-1===k.indexOf(e.panels,c)&&e.panels.push(c);e.panel=c}))},_getOffPanelPosition:function(a,e){var b={},c=d('div[settingid\x3d"'+a+'"]',this.stateNode)[0],c=p.position(c);b.top=c.y;window.isRTL?b.right=c.x-e.w-10:b.left=c.x+c.w+10;return b},showMoreTabContent:function(a){a=a.config.groups;var b=null,c=null;d(this.otherGroupNode).empty();this._createOtherGroupPaneTitle();k.forEach(a,function(a){this._createMoreGroupNode(a)},this);window.isRTL?(b={left:this.getWidth()-this.minWidth,right:this.minWidth-
this.getWidth()},c={left:0,right:this.minWidth}):(b={left:this.minWidth-this.getWidth(),right:this.getWidth()-this.minWidth},c={left:this.minWidth,right:0});r.combine([d(this.maxStateNode).animateProperty({properties:b,duration:this.animTime}),d(this.otherGroupNode).animateProperty({properties:c,duration:this.animTime})]).play();this.moreTabOpened=!0},_createOtherGroupPaneTitle:function(){var a=c.create("div",{"class":"other-group-pane-title"},this.otherGroupNode),b;c.create("div",{"class":"bg"},
a);c.create("div",{"class":"text",innerHTML:this.nls.otherPanels},a);b=c.create("div",{"class":"close"},a);this.own(f(b,"click",g.hitch(this,function(){this._hideOtherGroupPane();-1!==this.lastSelectedIndex&&this.selectTab(this.lastSelectedIndex)})));return a},_createMoreGroupNode:function(a){var e=c.create("div",{"class":"other-group"},this.otherGroupNode),h;c.create("img",{src:a.icon,"class":"other-group-icon jimu-float-leading"},e);c.create("div",{"class":"other-group-title jimu-float-leading",
innerHTML:a.label},e);h=c.create("img",{"class":"other-group-choose jimu-float-trailing",style:{opacity:0},src:this.folderUrl+(window.isRTL?"images/arrow_choose_rtl.png":"images/arrow_choose.png")},e);this.own(f(e,"click",g.hitch(this,this._onOtherGroupClick,a)));this.own(f(e,"mousedown",g.hitch(this,function(){d(e).addClass("jimu-state-active")})));this.own(f(e,"mouseup",g.hitch(this,function(){d(e).removeClass("jimu-state-active")})));this.own(f(e,b.enter,g.hitch(this,function(){d(h).style({opacity:1})})));
this.own(f(e,b.leave,g.hitch(this,function(){d(h).style({opacity:0})})));return e},_hideOtherGroupPane:function(){var a=null,a=window.isRTL?{left:0-this.getWidth(),right:this.getWidth()}:{left:this.getWidth(),right:0-this.getWidth()};r.combine([d(this.maxStateNode).animateProperty({properties:{left:0,right:0}}),d(this.otherGroupNode).animateProperty({properties:a})]).play();this.moreTabOpened=!1;(a=this.tabs[this.getSelectedIndex()])&&"more"===a.flag&&this._hideIndicator(this.getSelectedIndex())},
_onOtherGroupClick:function(a){if(null===this.currentOtherGroup||this.currentOtherGroup.label!==a.label){var b=null,b=window.isRTL?{left:this.getWidth(),right:0-this.getWidth()}:{left:0-this.getWidth(),right:this.getWidth()},b=r.combine([d(this.maxStateNode).animateProperty({properties:b,duration:this.animTime}),d(this.otherGroupNode).animateProperty({properties:{left:0,right:0},duration:this.animTime})]);this.own(l.after(b,"onEnd",g.hitch(this,this._addGroupToMoreTab,a)));b.play()}else this._addGroupToMoreTab(a)},
_addGroupToMoreTab:function(a){var b=this.tabs[4];d(".content-node",this.domNode).style({display:"none"});d(b.content).style({display:"block"});if(null===this._getGroupFromMoreTab(b,a)){var f=c.create("div",{"class":"more-group-pane",label:a.label},b.contentPane);d(b.contentPane).append(f);b.moreGroupWidgets.push({glabel:a.label,widgets:[]})}this.currentTab=null;this.currentOtherGroup=a;this.showGroupContent(a,b);d(".more-group-pane",b.contentPane).style({display:"none"});d('.more-group-pane[label\x3d"'+
a.label+'"]',b.contentPane).style({display:"block"});this._hideOtherGroupPane();this._resizePanels()},_getGroupFromMoreTab:function(a,b){for(var c=0;c<a.moreGroupWidgets.length;c++)if(a.moreGroupWidgets[c].glabel===b.label)return a.moreGroupWidgets[c];return null},_createTitleNode:function(a){var e=(this.getWidth()-2-21-72)/5,d=a.label,h=a.icon,e=c.create("div",{title:d,"class":"title-node jimu-float-leading jimu-leading-margin15",settingid:a.id,i:this.tabs.length,style:{width:e+"px"}},this.titleListNode);
c.create("div",{"class":"tab-indicator"},e);c.create("img",{src:h},e);a=c.create("div",{title:d,"class":"title-node",settingid:a.id,i:this.tabs.length},this.minStateNode);c.create("div",{"class":"tab-indicator"},a);c.create("img",{src:h},a);this.own(f(e,"click",g.hitch(this,this.onSelect)));this.own(f(e,b.enter,g.hitch(this,this._onMouseEnter)));this.own(f(e,b.leave,g.hitch(this,this._onMouseLeave)));this.own(f(a,"click",g.hitch(this,this._onMinIconClick,a)));this.own(f(a,b.enter,g.hitch(this,this._onMouseEnter)));
this.own(f(a,b.leave,g.hitch(this,this._onMouseLeave)));return e},_onMinIconClick:function(a){a=d(a).attr("i")[0];var b=this.tabs[a],c=b.config;!1===c.inPanel?b.selected?(b.selected=!1,this.widgetManager.closeWidget(c.id)):(this._hideOffPanelWidgets(),this.selectTab(parseInt(a,10))):(this._hideOffPanelWidgets(),this.widgetManager.maximizeWidget(this),this.selectTab(parseInt(a,10)))},_hideOffPanelWidgets:function(){k.forEach(this.tabs,function(a){"more"!==a.flag?a.config.inPanel||(a.selected=!1,this.widgetManager.closeWidget(a.config.id)):
k.forEach(a.config.groups,function(b){b.inPanel||(a.selected=!1,this.widgetManager.closeWidget(b.id))},this)},this)},_createContentNode:function(a){var b=c.create("div",{"class":"content-node"},this.contentListNode);c.create("div",{"class":"content-title-bg"},b);c.create("div",{"class":"content-title",innerHTML:a.widgets&&1<a.widgets.length?a.label:""},b);c.create("div",{"class":"content-pane"},b);this.own(f(b,"click",g.hitch(this,function(){this.moreTabOpened&&(this._hideOtherGroupPane(),-1!==this.lastSelectedIndex&&
this.selectTab(this.lastSelectedIndex))})));return b},_doResize:function(){"maximized"===this.windowState?this.widgetManager.minimizeWidget(this.id):(this._hideOffPanelWidgets(),this.widgetManager.maximizeWidget(this.id))},_resizeToMin:function(){d(this.domNode).style("width",this.minWidth+"px");d(this.minStateNode).style("display","block");d(this.maxStateNode).style("display","none");window.isRTL?d("div",this.doResizeNode).removeClass("right-arrow").addClass("left-arrow"):d("div",this.doResizeNode).removeClass("left-arrow").addClass("right-arrow");
this._resizeMinTitleNode();n.publish("changeMapPosition",{left:this.minWidth});this.stateNode=this.minStateNode},_resizeToMax:function(){d(this.domNode).style("width",this.getWidth()+"px");this._resizeTitleNode();d(this.minStateNode).style("display","none");d(this.maxStateNode).style("display","block");window.isRTL?d("div",this.doResizeNode).removeClass("left-arrow").addClass("right-arrow"):d("div",this.doResizeNode).removeClass("right-arrow").addClass("left-arrow");this._resizePanels();n.publish("changeMapPosition",
{left:this.getWidth()});this.currentTab&&this.showGroupContent(this.currentTab.config,this.currentTab);k.every(this.tabs,function(a){return!a.panel})&&this.tabs&&this.selectTab(0);this.stateNode=this.maxStateNode}})});