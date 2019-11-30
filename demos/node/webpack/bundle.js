/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* @author: Xavier Damman (@xdamman) - http://github.com/xdamman/selection-sharer - @license: MIT */!function(a){function b(a,b){b&&b.length<0||b.forEach(function(b){a.find(b.query).click(b.action)})}function c(a){return a.replace(/<p[^>]*>/gi,"\n").replace(/<\/p>| {2}/gi,"").trim()}var d=function(d){var e=this;d=d||{},"string"==typeof d&&(d={elements:d}),this.sel=null,this.textSelection="",this.htmlSelection="",this.optionalShare=["telegram"],this.appId=a('meta[property="fb:app_id"]').attr("content")||a('meta[property="fb:app_id"]').attr("value"),this.url2share=a('meta[property="og:url"]').attr("content")||a('meta[property="og:url"]').attr("value")||window.location.href,this.getSelectionText=function(a){var b="",c="";if(a=a||window.getSelection(),a.rangeCount){for(var d=document.createElement("div"),f=0,g=a.rangeCount;g>f;++f)d.appendChild(a.getRangeAt(f).cloneContents());c=d.textContent,b=d.innerHTML}return e.textSelection=c,e.htmlSelection=b||c,c},this.selectionDirection=function(a){var b=a||window.getSelection(),c=document.createRange();if(!b.anchorNode)return 0;c.setStart(b.anchorNode,b.anchorOffset),c.setEnd(b.focusNode,b.focusOffset);var d=c.collapsed?"backward":"forward";return c.detach(),d},this.showPopunder=function(){e.popunder=e.popunder||document.getElementById("selectionSharerPopunder");var a=window.getSelection(),b=e.getSelectionText(a);if(a.isCollapsed||b.length<10||!b.match(/ /))return e.hidePopunder();if(e.popunder.classList.contains("fixed"))return e.popunder.style.bottom=0,e.popunder.style.bottom;var c=a.getRangeAt(0),d=c.endContainer.parentNode;if(e.popunder.classList.contains("show")){if(Math.ceil(e.popunder.getBoundingClientRect().top)==Math.ceil(d.getBoundingClientRect().bottom))return;return e.hidePopunder(e.showPopunder)}if(d.nextElementSibling)e.pushSiblings(d);else{e.placeholder||(e.placeholder=document.createElement("div"),e.placeholder.className="selectionSharerPlaceholder");var f=window.getComputedStyle(d).marginBottom;e.placeholder.style.height=f,e.placeholder.style.marginBottom=-2*parseInt(f,10)+"px",d.parentNode.insertBefore(e.placeholder)}var g=window.pageYOffset+d.getBoundingClientRect().bottom;e.popunder.style.top=Math.ceil(g)+"px",setTimeout(function(){e.placeholder&&e.placeholder.classList.add("show"),e.popunder.classList.add("show")},0)},this.pushSiblings=function(a){for(;a=a.nextElementSibling;)a.classList.add("selectionSharer"),a.classList.add("moveDown")},this.hidePopunder=function(a){if(a=a||function(){},"fixed"==e.popunder)return e.popunder.style.bottom="-50px",a();e.popunder.classList.remove("show"),e.placeholder&&e.placeholder.classList.remove("show");for(var b,c=document.getElementsByClassName("moveDown");b=c[0];)b.classList.remove("moveDown");setTimeout(function(){e.placeholder&&document.body.insertBefore(e.placeholder),a()},600)},this.show=function(a){setTimeout(function(){var b=window.getSelection(),c=e.getSelectionText(b);if(!b.isCollapsed&&c&&c.length>10&&c.match(/ /)){var d=b.getRangeAt(0),f=d.getBoundingClientRect().top-5,g=f+e.getPosition().y-e.$popover.height(),h=0;if(a)h=a.pageX;else{var i=b.anchorNode.parentNode;h+=i.offsetWidth/2;do h+=i.offsetLeft;while(i=i.offsetParent)}switch(e.selectionDirection(b)){case"forward":h-=e.$popover.width();break;case"backward":h+=e.$popover.width();break;default:return}e.$popover.removeClass("anim").css("top",g+10).css("left",h).show(),setTimeout(function(){e.$popover.addClass("anim").css("top",g)},0)}},10)},this.hide=function(){e.$popover.hide()},this.smart_truncate=function(a,b){if(!a||!a.length)return a;var c=a.length>b,d=c?a.substr(0,b-1):a;return d=c?d.substr(0,d.lastIndexOf(" ")):d,c?d+"...":d},this.getRelatedTwitterAccounts=function(){var b=[],c=a('meta[name="twitter:creator"]').attr("content")||a('meta[name="twitter:creator"]').attr("value");c&&b.push(c);for(var d=document.getElementsByTagName("a"),e=0,f=d.length;f>e;e++)if(d[e].attributes.href&&"string"==typeof d[e].attributes.href.value){var g=d[e].attributes.href.value.match(/^https?:\/\/twitter\.com\/([a-z0-9_]{1,20})/i);g&&g.length>1&&-1==["widgets","intent"].indexOf(g[1])&&b.push(g[1])}return b.length>0?b.join(","):""},this.shareTwitter=function(a){a.preventDefault();var b="“"+e.smart_truncate(e.textSelection.trim(),114)+"”",c="http://twitter.com/intent/tweet?text="+encodeURIComponent(b)+"&related="+e.getRelatedTwitterAccounts()+"&url="+encodeURIComponent(e.url2share);e.viaTwitterAccount&&b.length<114-e.viaTwitterAccount.length&&(c+="&via="+e.viaTwitterAccount);var d=640,f=440,g=screen.width/2-d/2,h=screen.height/2-f/2-100;return window.open(c,"share_twitter","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+d+", height="+f+", top="+h+", left="+g),e.hide(),!1},this.shareFacebook=function(a){a.preventDefault();var b=c(e.htmlSelection),d="https://www.facebook.com/dialog/feed?app_id="+e.appId+"&display=popup&caption="+encodeURIComponent(b)+"&link="+encodeURIComponent(e.url2share)+"&href="+encodeURIComponent(e.url2share)+"&redirect_uri="+encodeURIComponent(e.url2share),f=640,g=440,h=screen.width/2-f/2,i=screen.height/2-g/2-100;window.open(d,"share_facebook","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+f+", height="+g+", top="+i+", left="+h)},this.shareLinkedIn=function(a){a.preventDefault();var b=c(e.htmlSelection),d="https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(e.url2share)+"&title="+encodeURIComponent(b),f=640,g=440,h=screen.width/2-f/2,i=screen.height/2-g/2-100;window.open(d,"share_linkedin","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+f+", height="+g+", top="+i+", left="+h)},this.shareTelegram=function(a){a.preventDefault();var b=c(e.htmlSelection),d="https://www.telegram.me/share/share/?url="+encodeURIComponent(e.url2share)+"&text="+encodeURIComponent(b),f=640,g=440,h=screen.width/2-f/2,i=screen.height/2-g/2-100;window.open(d,"share_telegram","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+f+", height="+g+", top="+i+", left="+h)},this.shareEmail=function(){var b=c(e.textSelection),d={};return d.subject=encodeURIComponent("Quote from "+document.title),d.body=encodeURIComponent("“"+b+"”")+"%0D%0A%0D%0AFrom: "+document.title+"%0D%0A"+window.location.href,a(this).attr("href","mailto:?subject="+d.subject+"&body="+d.body),e.hide(),!0},this.render=function(){var b=function(a){var b=a.charAt(0).toUpperCase()+a.substring(1);return'<li><a class="action '+a+'" href="" title="Share this selection on '+b+'" target="_blank">'+b+"</a></li>"},c={telegram:{icon:b("telegram"),query:"a.telegram",action:this.shareTelegram}},d=this.optionalShare.map(function(a){return c[a]}),f=d.reduce(function(a,b){return a.concat(b.icon).concat("\n")},""),g='    <ul>      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>      <li><a class="action linkedin" href="" title="Share this selection on LinkedIn" target="_blank">LinkedIn</a></li>'+f+'      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="%23FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>    </ul>  </div>',h='<div class="selectionSharer" id="selectionSharerPopover" style="position:absolute;">  <div id="selectionSharerPopover-inner">'+g+'  <div class="selectionSharerPopover-clip"><span class="selectionSharerPopover-arrow"></span></div></div>',i='<div id="selectionSharerPopunder" class="selectionSharer">  <div id="selectionSharerPopunder-inner">'+g+"  </div></div>";e.$popover=a(h),e.$popunder=a(i);var j=d.map(function(a){return{query:a.query,action:a.action}});e.attachHandlers([e.$popover,e.$popunder],[{query:"a.tweet",action:e.shareTwitter},{query:"a.facebook",action:e.shareFacebook},{query:"a.linkedin",action:e.shareLinkedIn},{query:"a.email",action:e.shareEmail}].concat(j)),a("body").append(e.$popover),a("body").append(e.$popunder),e.appId&&e.url2share&&a(".selectionSharer a.facebook").css("display","inline-block")},this.attachHandlers=function(a,c){a&&a.length<0||a.forEach(function(a){b(a,c)})},this.setElements=function(b){"string"==typeof b&&(b=a(b)),e.$elements=b instanceof a?b:a(b),e.$elements.mouseup(e.show).mousedown(e.hide).addClass("selectionShareable"),e.$elements.bind("touchstart",function(){e.isMobile=!0}),document.onselectionchange=e.selectionChanged},this.selectionChanged=function(a){e.isMobile&&(e.lastSelectionChanged&&clearTimeout(e.lastSelectionChanged),e.lastSelectionChanged=setTimeout(function(){e.showPopunder(a)},300))},this.getPosition=function(){var a=void 0!==window.pageXOffset,b="CSS1Compat"===(document.compatMode||""),c=a?window.pageXOffset:b?document.documentElement.scrollLeft:document.body.scrollLeft,d=a?window.pageYOffset:b?document.documentElement.scrollTop:document.body.scrollTop;return{x:c,y:d}},this.render(),d.elements&&this.setElements(d.elements)};a.fn.selectionSharer=function(){var a=arguments,b=new d.apply(null,a);return b.setElements(this),this}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return d.load=function(a,b,c){var e=new d;e.setElements("p"),c()},d}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=d:window.SelectionSharer=d}(jQuery);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Selection = __webpack_require__(0);

var selection = new Selection('p');



/***/ })
/******/ ]);