/**
 * WinBox.js v0.0.5 (Bundle)
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
(function(){'use strict';var e,f=document.createElement("style");f.innerHTML=".bar-n,.bar-nw,.bar-s{height:5px}.bar-e,.bar-nw,.bar-w{width:5px;top:0}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .2s ease-out,height .2s ease-out,transform .2s ease-out;will-change:transform,width,height;contain:strict;z-index:10}.bar-e,.bar-n,.bar-s,.bar-w{z-index:11;position:absolute}.winbox:-webkit-full-screen{transition:none!important}.winbox:fullscreen{transition:none!important}.bar-n{top:0;left:0;right:0;cursor:n-resize}.bar-e{right:0;bottom:0;cursor:w-resize}.bar-s,.bar-w{left:0;bottom:0}.bar-s{right:0;cursor:n-resize}.bar-w{cursor:w-resize}.bar-ne,.bar-nw,.bar-sw{z-index:11;position:absolute}.bar-nw{left:0;cursor:nw-resize}.bar-ne,.bar-sw{cursor:ne-resize;width:5px;height:5px}.bar-ne{top:0;right:0}.bar-sw{bottom:0;left:0}.bar-se{position:absolute;bottom:0;right:0;width:5px;height:5px;cursor:nw-resize;z-index:11}.winbox-title{display:table-cell;font-size:14px;text-align:left;padding-left:10px;cursor:move;width:100%;height:35px;vertical-align:middle}.winbox-title span{display:block;width:calc(100% - 120px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.winbox.min .winbox-title span{width:calc(100% - 65px)}.winbox-icon{position:absolute;top:0;bottom:0;right:0;padding-right:2px}.winbox-icon span{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer}span.icon-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMDEwIDJIMWExIDEgMCAwMTAtMmg3eiIvPjwvc3ZnPg==);background-position:center bottom 5px;background-size:14px 14px}.winbox .winbox-hide,.winbox.min .icon-fullscreen,.winbox.min .icon-min{display:none}.icon-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:18px 18px}.icon-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMS42MTMuMjFsLjA5NC4wODNMOCA2LjU4NSAxNC4yOTMuMjkzbC4wOTQtLjA4M2ExIDEgMCAwMTEuNDAzIDEuNDAzbC0uMDgzLjA5NEw5LjQxNSA4bDYuMjkyIDYuMjkzYTEgMSAwIDAxLTEuMzIgMS40OTdsLS4wOTQtLjA4M0w4IDkuNDE1bC02LjI5MyA2LjI5Mi0uMDk0LjA4M0ExIDEgMCAwMS4yMSAxNC4zODdsLjA4My0uMDk0TDYuNTg1IDggLjI5MyAxLjcwN0ExIDEgMCAwMTEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px 15px}.icon-fullscreen{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMDAtMiAydjNtMTggMFY1YTIgMiAwIDAwLTItMmgtM20wIDE4aDNhMiAyIDAgMDAyLTJ2LTNNMyAxNnYzYTIgMiAwIDAwMiAyaDMiLz48L3N2Zz4=);background-size:17px 17px}.winbox-body,.winbox-header{position:absolute;left:0;right:0}.winbox-header{display:table;table-layout:fixed;width:100%;top:0;height:35px;color:#fff;vertical-align:middle;z-index:10}.winbox-body{top:35px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:scroll-position;background-color:#fff;margin-top:0!important}.winbox.max .winbox-title,.winbox.max>div,.winbox.min .winbox-title,.winbox.min>div{cursor:default}.winbox iframe{position:absolute;width:100%;height:100%;border:0}";
var k=document.getElementsByTagName("head")[0];k.firstChild?k.insertBefore(f,k.firstChild):k.appendChild(f);var l=document.createElement("div");l.innerHTML="<div class=winbox><div class=bar-n></div><div class=bar-s></div><div class=bar-w></div><div class=bar-e></div><div class=bar-nw></div><div class=bar-ne></div><div class=bar-se></div><div class=bar-sw></div><div class=winbox-header><div class=winbox-title><span> </span></div><div class=winbox-icon><span class=icon-min></span><span class=icon-max></span><span class=icon-fullscreen></span><span class=icon-close></span></div></div><div class=winbox-body></div></div>";
l=l.firstChild;function q(a,b,c){a.addEventListener(b,c)}function t(a,b,c){a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)}function u(a){a.preventDefault();a.stopImmediatePropagation()};var v=[],w=0,C=0,D,G,H,I;
function J(a){if(!(this instanceof J))return new J(a);if(!w){var b=document.body;b[H="requestFullscreen"]||b[H="msRequestFullscreen"]||b[H="webkitRequestFullscreen"]||b[H="mozRequestFullscreen"]||(H="");I=H&&H.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit")}this.g=l.cloneNode(!0);this.body=this.g.getElementsByClassName("winbox-body")[0];if(a)if("string"===typeof a)var c=a;else{var x=a.id;var y=a.root;c=a.title;var E=a.mount;var z=a.html;var A=a.url;var d=a.width;
var r=a.height;var m=a.x;var n=a.y;var B=a.max;var g=a.top;var h=a.left;var p=a.bottom;var F=a.right;var Q=a.onclose;var R=a.onfocus;var S=a.onblur;var T=a.onmove;var U=a.onresize;b=a.background;var M=a.border;a=a["class"];b&&this.setBackground(b);M&&t(this.body,"margin",M+"px");a&&this.g.classList.add(a)}this.init().setTitle(c||"");c=this.i;a=this.h;g=g?K(g,a):0;p=p?K(p,a):0;h=h?K(h,c):0;F=F?K(F,c):0;c-=h+F;a-=g+p;d=d?K(d,c):c/2;r=r?K(r,a):a/2;m=m?K(m,c,d):h;n=n?K(n,a,r):g;this.g.id=this.id=x||"winbox-"+
++C;this.x=m;this.y=n;this.width=d;this.height=r;this.top=g;this.right=F;this.bottom=p;this.left=h;this.max=this.min=!1;this.m=Q;this.o=R;this.l=S;this.u=T;this.s=U;B?this.maximize().focus():this.move().resize().focus();E?this.mount(E):z?this.body.innerHTML=z:A&&this.setUrl(A);L(this);(y||document.body).appendChild(this.g)}J["new"]=function(a){return new J(a)};
function K(a,b,c){"center"===a?a=(b-c)/2:"string"===typeof a&&(c=parseFloat(a),a="%"===(""+c!==a&&a.substring((""+c).length))?b/100*c:c);return a}
function L(a){N(a,"winbox-title");N(a,"bar-n");N(a,"bar-s");N(a,"bar-w");N(a,"bar-e");N(a,"bar-nw");N(a,"bar-ne");N(a,"bar-se");N(a,"bar-sw");q(a.g.getElementsByClassName("icon-min")[0],"click",function(b){a.init().minimize();u(b)});q(a.g.getElementsByClassName("icon-max")[0],"click",function(b){a.init().maximize();u(b)});H?q(a.g.getElementsByClassName("icon-fullscreen")[0],"click",function(b){a.fullscreen();u(b)}):t(a.g.getElementsByClassName("icon-fullscreen")[0],"display","none");q(a.g.getElementsByClassName("icon-close")[0],
"click",function(b){a.close();a=null;u(b)});q(a.g,"mousedown",function(){a.focus()})}function O(a){v.splice(v.indexOf(a),1);P(a);a.g.classList.remove("min");a.min=!1;a.g.title=""}function P(a){for(var b=Math.min(a.i/v.length,250),c=0;c<v.length;c++)v[c].resize(b,35,!0).move(a.left+c*b,a.h-a.bottom-35,!0)}
function N(a,b){function c(d){u(d);a.min?(O(a),a.resize().move()):(d.touches&&(d=d.touches[0]||d),a.min||a.max||(t(a.g,"transition","none"),window.addEventListener("mousemove",x),window.addEventListener("mouseup",y),window.addEventListener("touchmove",x),window.addEventListener("touchend",y),z=d.pageX,A=d.pageY,a.init().focus()))}function x(d){d.touches?d=d.touches[0]||d:u(d);var r=d.pageX;d=d.pageY;var m=r-z,n=d-A,B;if("winbox-title"===b){a.x+=m;a.y+=n;var g=B=1}else{if("bar-e"===b||"bar-se"===b||
"bar-ne"===b){a.width+=m;var h=1}else if("bar-w"===b||"bar-sw"===b||"bar-nw"===b)a.x+=m,a.width-=m,g=h=1;if("bar-s"===b||"bar-se"===b||"bar-sw"===b){a.height+=n;var p=1}else if("bar-n"===b||"bar-ne"===b||"bar-nw"===b)a.y+=n,a.height-=n,B=p=1}if(h||p)h&&(a.width=Math.max(Math.min(a.width,a.i-a.x-a.right),250)),p&&(a.height=Math.max(Math.min(a.height,a.h-a.y-a.bottom-1),35)),a.resize();if(g||B)g&&(a.x=Math.max(Math.min(a.x,a.i-a.width-a.right),a.left)),B&&(a.y=Math.max(Math.min(a.y,a.h-a.height-a.bottom-
1),a.top)),a.move();z=r;A=d}function y(d){t(a.g,"transition","");window.removeEventListener("mousemove",x);window.removeEventListener("mouseup",y);window.removeEventListener("touchmove",x);window.removeEventListener("touchend",y);u(d)}var E=a.g.getElementsByClassName(b)[0],z,A;E.addEventListener("mousedown",c);E.addEventListener("touchstart",c)}e=J.prototype;e.init=function(){var a=document.documentElement;this.i=a.clientWidth;this.h=a.clientHeight;return this};
e.mount=function(a){a.j||(a.j=a.parentNode);this.body.textContent="";this.body.appendChild(a);return this};e.unmount=function(a){var b=this.body.firstChild;if(b){var c=a||b.j;c&&c.appendChild(b);b.j=a}return this};e.setTitle=function(a){var b=this.g.getElementsByClassName("winbox-title")[0].firstChild;a=this.title=a;b.v!==a&&(b.firstChild.nodeValue=a,b.v=a);return this};e.setBackground=function(a){t(this.g,"background",a);return this};
e.setUrl=function(a){this.body.innerHTML='<iframe src="'+a+'"></iframe>';return this};e.focus=function(){G!==this&&(t(this.g,"z-index",++w),G&&G.l&&G.l(),G=this,this.o&&this.o());return this};e.minimize=function(a){D&&V();!a&&this.min?(O(this),this.resize().move()):!1===a||this.min||(v.push(this),P(this),this.g.classList.add("min"),this.g.title=this.title,this.min=!0);this.max&&(this.g.classList.remove("max"),this.max=!1);return this};
e.maximize=function(a){if("undefined"===typeof a||a!==this.max)this.min&&O(this),(this.max=!this.max)?(this.resize(this.i-this.left-this.right,this.h-this.top-this.bottom-1,!0).move(this.left,this.top,!0),this.g.classList.add("max")):(this.resize().move(),this.g.classList.remove("max"));return this};e.fullscreen=function(a){if("undefined"===typeof a||a!==D)this.min&&(this.resize().move(),O(this)),D&&V()||(this.body[H](),D=!0);return this};
function V(){D=!1;if(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[I](),!0}e.close=function(){this.min&&O(this);this.m&&this.m();this.unmount();this.g.parentNode.removeChild(this.g);G===this&&(G=null)};
e.move=function(a,b,c){"undefined"===typeof a?(a=this.x,b=this.y):c||(this.x=a?a=K(a,this.i-this.left-this.right,this.width):0,this.y=b?b=K(b,this.h-this.top-this.bottom,this.height):0);t(this.g,"transform","translate("+a+"px,"+b+"px)");this.u&&this.u(a,b);return this};
e.resize=function(a,b,c){"undefined"===typeof a?(a=this.width,b=this.height):c||(this.width=a?a=K(a,this.i-this.left-this.right):0,this.height=b?b=K(b,this.h-this.top-this.bottom):0);t(this.g,"width",a+"px");t(this.g,"height",b+"px");this.s&&this.s(a,b);return this};window.WinBox=J;}).call(this);
