//>>built
require({cache:{"dojo/NodeList-manipulate":function(){define("./query ./_base/lang ./_base/array ./dom-construct ./dom-attr ./NodeList-dom".split(" "),function(m,f,s,b,h){function n(a){for(;a.childNodes[0]&&1==a.childNodes[0].nodeType;)a=a.childNodes[0];return a}function r(a,p){"string"==typeof a?(a=b.toDom(a,p&&p.ownerDocument),11==a.nodeType&&(a=a.childNodes[0])):1==a.nodeType&&a.parentNode&&(a=a.cloneNode(!1));return a}var l=m.NodeList;f.extend(l,{_placeMultiple:function(a,p){for(var c="string"==
typeof a||a.nodeType?m(a):a,d=[],g=0;g<c.length;g++)for(var e=c[g],q=this.length,k=q-1,f;f=this[k];k--)0<g&&(f=this._cloneNode(f),d.unshift(f)),k==q-1?b.place(f,e,p):e.parentNode.insertBefore(f,e),e=f;d.length&&(d.unshift(0),d.unshift(this.length-1),Array.prototype.splice.apply(this,d));return this},innerHTML:function(a){return arguments.length?this.addContent(a,"only"):this[0].innerHTML},text:function(a){if(arguments.length){for(var b=0,c;c=this[b];b++)1==c.nodeType&&h.set(c,"textContent",a);return this}for(var d=
"",b=0;c=this[b];b++)d+=h.get(c,"textContent");return d},val:function(a){if(arguments.length){for(var b=f.isArray(a),c=0,d;d=this[c];c++){var g=d.nodeName.toUpperCase(),e=d.type,q=b?a[c]:a;if("SELECT"==g){g=d.options;for(e=0;e<g.length;e++){var k=g[e];k.selected=d.multiple?-1!=s.indexOf(a,k.value):k.value==q}}else"checkbox"==e||"radio"==e?d.checked=d.value==q:d.value=q}return this}if((d=this[0])&&1==d.nodeType){a=d.value||"";if("SELECT"==d.nodeName.toUpperCase()&&d.multiple){a=[];g=d.options;for(e=
0;e<g.length;e++)k=g[e],k.selected&&a.push(k.value);a.length||(a=null)}return a}},append:function(a){return this.addContent(a,"last")},appendTo:function(a){return this._placeMultiple(a,"last")},prepend:function(a){return this.addContent(a,"first")},prependTo:function(a){return this._placeMultiple(a,"first")},after:function(a){return this.addContent(a,"after")},insertAfter:function(a){return this._placeMultiple(a,"after")},before:function(a){return this.addContent(a,"before")},insertBefore:function(a){return this._placeMultiple(a,
"before")},remove:l.prototype.orphan,wrap:function(a){if(this[0]){a=r(a,this[0]);for(var b=0,c;c=this[b];b++){var d=this._cloneNode(a);c.parentNode&&c.parentNode.replaceChild(d,c);n(d).appendChild(c)}}return this},wrapAll:function(a){if(this[0]){a=r(a,this[0]);this[0].parentNode.replaceChild(a,this[0]);a=n(a);for(var b=0,c;c=this[b];b++)a.appendChild(c)}return this},wrapInner:function(a){if(this[0]){a=r(a,this[0]);for(var b=0;b<this.length;b++){var c=this._cloneNode(a);this._wrap(f._toArray(this[b].childNodes),
null,this._NodeListCtor).wrapAll(c)}}return this},replaceWith:function(a){a=this._normalize(a,this[0]);for(var b=0,c;c=this[b];b++)this._place(a,c,"before",0<b),c.parentNode.removeChild(c);return this},replaceAll:function(a){a=m(a);for(var b=this._normalize(this,this[0]),c=0,d;d=a[c];c++)this._place(b,d,"before",0<c),d.parentNode.removeChild(d);return this},clone:function(){for(var b=[],f=0;f<this.length;f++)b.push(this._cloneNode(this[f]));return this._wrap(b,this,this._NodeListCtor)}});l.prototype.html||
(l.prototype.html=l.prototype.innerHTML);return l})},"themes/TabTheme/widgets/Header/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/TabTheme/widgets/Header/Widget.html":'\x3cdiv\x3e\r\n  \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode"\x3e\r\n  \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n    \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"links jimu-float-trailing jimu-trailing-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n    \x3cspan class\x3d"dynamic-section" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/span\x3e\r\n    \x3ca class\x3d"link" href\x3d"#" data-dojo-attach-point\x3d"aboutNode" data-dojo-attach-event\x3d"onclick:_onAboutClick"\x3e${nls.about}\x3c/a\x3e\r\n    \x3cspan class\x3d"signin-section" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n      \x3ca href\x3d"#" class\x3d"link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n      data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n      \x3ca href\x3d"#" target\x3d"_blank" class\x3d"link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n      \x3ca href\x3d"#" class\x3d"link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n    \x3c/span\x3e\r\n    \r\n  \x3c/div\x3e    \r\n\x3c/div\x3e',
"url:themes/TabTheme/widgets/Header/css/style.css":".jimu-widget-header .header-section{height: 100%; float: left;}.jimu-widget-header .container-section{height: 100%; float: left;}.jimu-widget-header .hide-logo{display: none;}.jimu-widget-header .titles{height: 100%;}.jimu-widget-header .jimu-title{text-align: center; height: 100%;}.jimu-widget-header .jimu-subtitle{text-align: center; height: 100%;}.jimu-widget-header .links{height: 100%;}.jimu-widget-header .links .link{margin-left: 12px; height: 100%; display: inline-block;}.jimu-rtl .jimu-widget-header .links .link{margin-left: auto; margin-right: 12px;}.jimu-widget-header .signin-section .link{color: #d9dde0;}.jimu-widget-header .group-icon-node{float: right; cursor: pointer; opacity: 0.4; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header .group-icon-node:first-child{border: none;}.jimu-widget-header .group-icon-node:hover{opacity: 1;}.jimu-widget-header .group-icon-node.jimu-state-selected{background-color: #697a8c; opacity: 1; border: none; border-top: 2px solid #8491a1;}.popup-links{background-color: #252824; position: absolute; z-index: 100;}.popup-links .popup-title{}.popup-links .title{color:#fff; text-align: center; font-size: 24px;}.popup-links .line{width: 100%; height: 4px; border-top: 1px solid #14161a; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px; background-color: #252824;}.popup-links a{color: #6d7685; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; display: inline-block;}.jimu-rtl .popup-links a {margin-right: 20px; margin-left: auto;}.popup-links .link-section.signin a{color: #d9dde0;}",
"*now":function(m){m(['dojo/i18n!*preload*themes/TabTheme/widgets/Header/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/query dojo/on dojo/topic jimu/BaseWidget jimu/tokenUtils jimu/portalUtils jimu/utils jimu/dijit/Message dojo/NodeList-dom dojo/NodeList-manipulate".split(" "),function(m,f,s,b,h,n,r,l,a,p,c,d){return m([l],{baseClass:"jimu-widget-header jimu-main-background",name:"Header",switchableElements:{},constructor:function(){this.height=this.getHeaderHeight()+"px"},postCreate:function(){this.inherited(arguments);var a=this.getLogoHeight()+
"px";this.position&&this.position.height&&(this.height=this.position.height);this.switchableElements.logo=h(".logo",this.domNode);this.switchableElements.title=h(".jimu-title",this.domNode);this.switchableElements.links=h(".links",this.domNode);this.switchableElements.subtitle=h(".jimu-subtitle",this.domNode);this.switchableElements.logo.style({height:a});b.setStyle(this.signInSectionNode,"display","none");this._setElementsSize();this.own(r.subscribe("changeMapPosition",f.hitch(this,this._onMapResize)))},
startup:function(){this.inherited(arguments);this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,b.removeClass(this.logoNode,"hide-logo")):(this.logoNode.src="",b.addClass(this.logoNode,"hide-logo"));this.switchableElements.title.innerHTML(this.appConfig.title?this.appConfig.title:"");this.switchableElements.subtitle.innerHTML(this.appConfig.subtitle?this.appConfig.subtitle:"");this._createDynamicLinks(this.appConfig.links);this.appConfig.about?b.setStyle(this.aboutNode,"display",
""):b.setStyle(this.aboutNode,"display","none")},onAppConfigChanged:function(b,a,c){switch(a){case "attributeChange":this._onAttributeChange(b,c);break;default:return}this.appConfig=b;this.resize()},_onMapResize:function(){if(window.appInfo.isRunInMobile){var a=this.widgetManager.getWidgetsByName("SidebarController");0!==a.length&&(a=a[0],this.width="minimized"===a.windowState?a.minWidth:a.getWidth(),b.setStyle(this.domNode,"width",this.width+"px"),this.resize())}},_onAttributeChange:function(a,e){"title"in
e&&e.title!==this.appConfig.title&&this.switchableElements.title.innerHTML(e.title);"subtitle"in e&&e.subtitle!==this.appConfig.subtitle&&this.switchableElements.subtitle.innerHTML(e.subtitle);"logo"in e&&e.logo!==this.appConfig.logo&&(e.logo?(b.setAttr(this.logoNode,"src",e.logo),b.removeClass(this.logoNode,"hide-logo")):(b.removeAttr(this.logoNode,"src"),b.setStyle(this.logoNode,"display",""),b.addClass(this.logoNode,"hide-logo")));"links"in e&&this._createDynamicLinks(e.links)},_setElementsSize:function(){b.setStyle(this.logoNode,
{height:"30px",marginTop:(this.height-30)/2+"px"});b.setStyle(this.titleNode,{lineHeight:this.height+"px"});b.setStyle(this.subtitleNode,{lineHeight:this.height+"px"});h(".link",this.domNode).style({lineHeight:this.height+"px"})},_createDynamicLinks:function(a){b.empty(this.dynamicLinksNode);s.forEach(a,function(a){b.create("a",{href:a.url,target:"_blank",innerHTML:a.label,"class":"link",style:{lineHeight:this.height+"px"}},this.dynamicLinksNode)},this)},onSignIn:function(a){this.inherited(arguments);
b.setStyle(this.signinLinkNode,"display","none");b.setStyle(this.userNameLinkNode,"display","inline");b.setStyle(this.signoutLinkNode,"display","inline");this.userNameLinkNode.innerHTML=a.userId;b.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(b.setStyle(this.popupSigninNode,"display","none"),b.setStyle(this.popupUserNameNode,"display","block"),b.setStyle(this.popupSignoutNode,"display","block"),h("a",this.popupUserNameNode).html(a.userId).attr("href",
this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(a){this.inherited(arguments);this._onSignOut(a);p.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(f.hitch(this,function(a){this._onSignOut(this.nls.signInTo+" "+a.name)}),f.hitch(this,function(a){console.error(a)}))},_onSignOut:function(a){b.setStyle(this.signinLinkNode,"display","inline");b.setAttr(this.signinLinkNode,"innerHTML",a);b.setStyle(this.userNameLinkNode,"display","none");b.setStyle(this.signoutLinkNode,
"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(b.setStyle(this.popupSigninNode,"display","block"),b.setAttr(this.popupSigninNode,"innerHTML",a),b.setStyle(this.popupUserNameNode,"display","none"),b.setStyle(this.popupSignoutNode,"display","none"),h("a",this.popupUserNameNode).html(""));this.resize()},switchElements:function(a){var e=this.switchableElements,c;for(c in e)e.hasOwnProperty(c)&&("logo"===c?e[c].style("display","block"):-1<a.indexOf(c)?e[c].style("display","block"):
e[c].style("display","none"));this.logoClickHandle&&(this.logoClickHandle.remove(),b.setStyle(this.logoNode,"cursor","default"));0>a.indexOf("links")?(this.linksVisible=!1,this.logoClickHandle=n(e.logo[0],"click",f.hitch(this,this.switchPopupLinks)),b.setStyle(this.logoNode,"cursor","pointer")):this.linksVisible&&this.switchPopupLinks()},switchSignin:function(){var c=a.getPortalCredential(this.appConfig.portalUrl);if(c)this.onSignIn(c);else this.onSignOut();b.setStyle(this.signInSectionNode,"display",
"none")},switchPopupLinks:function(){this.appConfig.links&&0!==this.appConfig.links.length&&(b.destroy(this.popupLinkNode),this.popupLinkNode=this.createPopupLinkNode(),b.setStyle(this.popupSigninNode,"display","none"),b.setStyle(this.popupUserNameNode,"display","none"),b.setStyle(this.popupSignoutNode,"display","none"),this.linksVisible?(this.linksVisible=!1,b.setStyle(this.popupLinkNode,"display","none")):(this.linksVisible=!0,b.setStyle(this.popupLinkNode,"display","block")))},createPopupLinkNode:function(){var a,
e=b.getContentBox(jimuConfig.layoutId);a=b.create("div",{"class":"popup-links",style:{top:0,width:e.w-this.width+"px"}},this.domNode);window.isRTL?b.setStyle(a,"right",this.width+"px"):b.setStyle(a,"left",this.width+"px");s.forEach(this.appConfig.links,function(b){this.createLinkNode(a,b,!1)},this);this.popupSigninNode=this.createLinkNode(a,{label:"SignIn",url:"#"},!0);this.popupUserNameNode=this.createLinkNode(a,{label:"",url:"#"},!0);this.popupSignoutNode=this.createLinkNode(a,{label:"SignOut",
url:"#"},!0);this.own(n(this.popupSigninNode,"click",f.hitch(this,"_onSigninClick")));this.own(n(this.popupSignoutNode,"click",f.hitch(this,"_onSignoutClick")));c.setVerticalCenter(a);this.createLinkNode(a,{label:"",url:"#"},!1);return a},createLinkNode:function(a,c,d){a=b.place('\x3cdiv class\x3d"link"\x3e\x3c/div\x3e',a);b.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',a);d=b.place('\x3cdiv class\x3d"'+(d?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',a);b.create("a",{href:c.url,target:"_blank",
innerHTML:c.label,"class":"jimu-vcenter-text jimu-ellipsis",title:c.label},d);return a},_onSigninClick:function(){a.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new d({message:this.nls.cantSignOutTip}):a.signOutAll()},_onUserNameClick:function(){},_onAboutClick:function(){this.widgetManager.loadWidget({id:this.appConfig.about+"_1",uri:this.appConfig.about,label:"About"}).then(f.hitch(this,function(a){b.place(a.domNode,jimuConfig.layoutId);
a.startup()}))},resize:function(){this.switchElements(["title","links","subtitle"]);var a=b.getContentBox(this.domNode),c=b.getMarginBox(this.logoNode),d=b.getMarginBox(this.titlesNode),f=b.getMarginBox(this.linksNode);this.width=a.w;a.w<=d.w+f.w+c.w&&(this.switchElements(["title","links"]),d=b.getMarginBox(this.titlesNode),a.w<=d.w+f.w+c.w&&(this.switchElements(["title"]),a.w<=d.w+c.w&&this.switchElements([])))},getHeaderHeight:function(){return 44},getHeaderEmptyWidth:function(){return 0.125*b.getMarginBox(this.domNode).w},
getLogoHeight:function(){return 34},destroy:function(){this.inherited(arguments);this.popupLinkNode&&this.linksVisible&&this.switchPopupLinks();b.destroy(this.popupLinkNode)}})});