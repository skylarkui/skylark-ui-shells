/**
 * skylark-widgets-shells - The skylark shells widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-shells/
 * @license MIT
 */
!function(t,e){var n=e.define,i=e.require,r="function"==typeof n&&n.amd,s=!r&&"undefined"!=typeof exports;if(!r&&!n){var l={};n=e.define=function(t,e,n){"function"==typeof n?(l[t]={factory:n,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var n=e.split("/"),i=t.split("/");n.pop();for(var r=0;r<i.length;r++)"."!=i[r]&&(".."==i[r]?n.pop():n.push(i[r]));return n.join("/")}(e,t)}),resolved:!1,exports:null},i(t)):l[t]={factory:null,resolved:!0,exports:n}},i=e.require=function(t){if(!l.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var n=l[t];if(!n.resolved){var r=[];n.deps.forEach(function(t){r.push(i(t))}),n.exports=n.factory.apply(e,r)||null,n.resolved=!0}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,e){t("skylark-widgets-shells/shells",["skylark-langx/skylark"],function(t){return t.attach("widgets.shells",{})}),t("skylark-widgets-shells/Shell",["skylark-langx/langx","skylark-domx-css","skylark-domx-scripter","skylark-domx-finder","skylark-domx-query","skylark-widgets-swt/Widget","skylark-nprogress","skylark-bootbox4","skylark-visibility","skylark-tinycon","./shells"],function(t,e,n,i,r,s,l,o,a,c,u){function d(t,e){t.find("strong").html(e.title),t.find("p").html(e.message),t.attr("class","alert alert-dismissable alert-"+e.type+" clearfix"),clearTimeout(parseInt(t.attr("timeoutId"),10)),e.timeout&&p(t,e.timeout),t.children().fadeOut(100),e.translate(t.html(),function(e){t.children().fadeIn(100),t.html(e)}),t.off("click").removeClass("pointer"),"function"==typeof e.clickfn&&t.addClass("pointer").on("click",function(n){r(n.target).is(".close")||e.clickfn(),f(t)})}function f(t){t.fadeOut(500,function(){r(this).remove()})}function p(t,e){var n=setTimeout(function(){f(t)},e);t.attr("timeoutId",n),t.css("transition-property","none"),t.removeClass("animate"),setTimeout(function(){t.css("transition-property",""),t.css("transition","width "+(e+450)+"ms linear, background-color "+(e+450)+"ms ease-in"),t.addClass("animate")},50),t.on("mouseenter",function(){r(this).css("transition-duration",0)})}var k=s.inherit({options:{i18n:{locale:"en",translate:function(e){return t.Deferred.resolve(e)}},alerts:{container:"",titles:{success:"[[global:alert.success]]",error:"[[global:alert.error]]"}},templator:{parse:null},skins:{}},_construct:function(t){this.overrided(document.body,t),this._titleObj={active:!1,interval:void 0,titles:[]};var e=this;e.isFocused=!0,a.change(function(t,n){"visible"===n?(e.isFocused=!0,e.alternatingTitle("")):"hidden"===n&&(e.isFocused=!1)})},progress:function(){return l},alert:function(t){t.alert_id="alert_button_"+(t.alert_id?t.alert_id:(new Date).getTime()),t.title=t.title&&t.title.trim()||"",t.message=t.message?t.message.trim():"",t.type=t.type||"info";var e=r("#"+t.alert_id);t.translate=t.translate||this.option("i18n.translate"),e.length?d(e,t):(t.parseTemplate=t.parseTemplate||this.option("templator.parse"),t.container=t.container||this.option("alerts.container"),function(t,e){t.parseTemplate("alert",t,function(e){t.translate(e,function(e){var n=r("#"+t.alert_id);if(n.length)return d(n,t);(n=r(e)).fadeIn(200),t.container.prepend(n),"function"==typeof t.closefn&&n.find("button").on("click",function(){return t.closefn(),f(n),!1}),t.timeout&&p(n,t.timeout),"function"==typeof t.clickfn&&n.addClass("pointer").on("click",function(e){r(e.target).is(".close")||t.clickfn(),f(n)})})})}(t))},removeAlert:function(t){r("#alert_button_"+t).remove()},alertSuccess:function(t,e){this.alert({title:this.option("alerts.titles.success"),message:t,type:"success",timeout:e||5e3})},alertError:function(t,e){t=t.message||t,this.alert({title:this.option("alerts.titles.error"),message:t,type:"danger",timeout:e||1e4})},alternatingTitle:function(t){if("string"==typeof t){var e=this._titleObj;if(t.length>0&&!app.isFocused){e.titles[0]||(e.titles[0]=window.document.title);var n=this.option("i18n.translate");n(t,function(t){e.titles[1]=t,e.interval&&clearInterval(e.interval),e.interval=setInterval(function(){var t=e.titles[1^e.titles.indexOf(window.document.title)];t&&(window.document.title=r("<div/>").html(t).text())},2e3)})}else e.interval&&clearInterval(e.interval),e.titles[0]&&(window.document.title=r("<div/>").html(e.titles[0]).text())}},refreshTitle:function(t){var e=this,n=this.option("i18n.translate"),i=this._titleObj;n(t,function(t){i.titles[0]=t,e.alternatingTitle("")})},tinycon:function(e,n){t.isUndefined(n)&&t.isPlainObject(e)&&(n=e,e=void 0),t.isDefined(n)&&c.setOptions(n),t.isDefined(e)&&c.setBubble(e)},reskin:function(t,e,n){if(n||(n=document.getElementById("skinSheet"))){var i=r("body").attr("class").split(/\s+/).filter(function(t){return t.startsWith("skin-")}),s=i[0].slice(5);if(t!==(s="noskin"!==s?s:"")){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.href=e,l.onload=function(){n.parentNode.removeChild(n),r("body").removeClass(i.join(" ")),r("body").addClass("skin-"+(t||"noskin"))},document.head.appendChild(l)}}},loadStyleSheet:function(t,n,i,r){return e.loadStyleSheet(t,n,i,r)},removeStyleSheet:function(t){return e.removeStyleSheet(t)},loadScript:function(t,e,i){return n.loadJavaScript(t,e,i)},removeScript:function(t){return n.deleteJavaScript(t)}});return u.Shell=k}),t("skylark-widgets-shells/main",["./shells","./Shell","skylark-langx","skylark-utils-dom","skylark-bootstrap3","skylark-widgets-swt","skylark-visibility"],function(t){return t}),t("skylark-widgets-shells",["skylark-widgets-shells/main"],function(t){return t})}(n),!r){var o=i("skylark-langx/skylark");s?module.exports=o:e.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-widgets-shells.js.map
