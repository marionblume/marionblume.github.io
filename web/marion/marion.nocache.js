function marion(){var U='bootstrap',V='begin',W='gwt.codesvr.marion=',X='gwt.codesvr=',Y='marion',Z='startup',$='DUMMY',_=0,ab=1,bb='iframe',cb='javascript:""',db='position:absolute; width:0; height:0; border:none; left: -1000px;',eb=' top: -1000px;',fb='CSS1Compat',gb='<!doctype html>',hb='',ib='<html><head><\/head><body><\/body><\/html>',jb='undefined',kb='DOMContentLoaded',lb=50,mb='Chrome',nb='eval("',ob='");',pb='script',qb='javascript',rb='moduleStartup',sb='moduleRequested',tb='Failed to load ',ub='head',vb='meta',wb='name',xb='marion::',yb='::',zb='gwt:property',Ab='content',Bb='=',Cb='gwt:onPropertyErrorFn',Db='Bad handler "',Eb='" for "gwt:onPropertyErrorFn"',Fb='gwt:onLoadErrorFn',Gb='" for "gwt:onLoadErrorFn"',Hb='#',Ib='?',Jb='/',Kb='img',Lb='clear.cache.gif',Mb='baseUrl',Nb='marion.nocache.js',Ob='base',Pb='//',Qb='locale',Rb='en_US',Sb='locale=',Tb=';',Ub=7,Vb='&',Wb='_',Xb='__gwt_Locale',Yb='Unexpected exception in locale detection, using default: ',Zb='user.agent',$b='webkit',_b='safari',ac='msie',bc=10,cc=11,dc='ie10',ec=9,fc='ie9',gc=8,hc='ie8',ic='gecko',jc='gecko1_8',kc=2,lc=3,mc=4,nc='selectingPermutation',oc='marion.devmode.js',pc='088D8AF25240DD2043169E0F20EFDE56',qc='default',rc='2C222BCBA58B7641A25EFCA42D0E137E',sc='498A4A5C27AC3A3CB714153B62BBA0D8',tc='4FBE22191AD493A4552FAE6D87D6DBC0',uc='5416BF1122A44EE522EE6F4890529395',vc='548150ED77FF9381219FD4C52CA1EEDA',wc='8677F18B11DE5BB360BA16EBE98E472F',xc='9F0E30418C4EED3A7AE6BC4CFDBDD44D',yc='CF5FF308FA3BB1BA4EF9C5042544F0BD',zc='F3A0F4BEB34C42136DE6B22AA217D29C',Ac=':',Bc='.cache.js',Cc='link',Dc='rel',Ec='stylesheet',Fc='href',Gc='loadExternalRefs',Hc='gwt/clean/clean.css',Ic='end',Jc='http:',Kc='file:',Lc='_gwt_dummy_',Mc='__gwtDevModeHook:marion',Nc='Ignoring non-whitelisted Dev Mode URL: ',Oc=':moduleBase';var u=window;var v=document;A(U,V);function w(){var a=u.location.search;return a.indexOf(W)!=-1||a.indexOf(X)!=-1}
function A(a,b){if(u.__gwtStatsEvent){u.__gwtStatsEvent({moduleName:Y,sessionId:u.__gwtStatsSessionId,subSystem:Z,evtGroup:a,millis:(new Date).getTime(),type:b})}}
marion.__sendStats=A;marion.__moduleName=Y;marion.__errFn=null;marion.__moduleBase=$;marion.__softPermutationId=_;marion.__computePropValue=null;marion.__getPropMap=null;marion.__installRunAsyncCode=function(){};marion.__gwtStartLoadingFragment=function(){return null};marion.__gwt_isKnownPropertyValue=function(){return false};marion.__gwt_getMetaProperty=function(){return null};var B=null;var C=u.__gwt_activeModules=u.__gwt_activeModules||{};C[Y]={moduleName:Y};marion.__moduleStartupDone=function(e){var f=C[Y].bindings;C[Y].bindings=function(){var a=f?f():{};var b=e[marion.__softPermutationId];for(var c=_;c<b.length;c++){var d=b[c];a[d[_]]=d[ab]}return a}};var D;function F(){G();return D}
function G(){if(D){return}var a=v.createElement(bb);a.src=cb;a.id=Y;a.style.cssText=db+eb;a.tabIndex=-1;v.body.appendChild(a);D=a.contentDocument;if(!D){D=a.contentWindow.document}D.open();var b=document.compatMode==fb?gb:hb;D.write(b+ib);D.close()}
function H(k){function l(a){function b(){if(typeof v.readyState==jb){return typeof v.body!=jb&&v.body!=null}return /loaded|complete/.test(v.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(v.removeEventListener){v.removeEventListener(kb,d,false)}if(e){clearInterval(e)}}}
if(v.addEventListener){v.addEventListener(kb,d,false)}var e=setInterval(function(){if(b()){d()}},lb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=F();var f=e.body;var g;if(navigator.userAgent.indexOf(mb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(nb));for(var i=_;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(ab,j.length-ab)))}h.appendChild(e.createTextNode(ob));g=e.createElement(pb);g.language=qb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=_;i<c.length;i++){g=e.createElement(pb);g.language=qb;g.text=c[i];f.appendChild(g);d(f,g)}}}
marion.onScriptDownloaded=function(a){l(function(){m(a)})};A(rb,sb);var n=v.createElement(pb);n.src=k;if(marion.__errFn){n.onerror=function(){marion.__errFn(Y,new Error(tb+code))}}v.getElementsByTagName(ub)[_].appendChild(n)}
marion.__startLoadingFragment=function(a){return K(a)};marion.__installRunAsyncCode=function(a){var b=F();var c=b.body;var d=b.createElement(pb);d.language=qb;d.text=a;c.appendChild(d);c.removeChild(d)};function I(){var c={};var d;var e;var f=v.getElementsByTagName(vb);for(var g=_,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(wb),k;if(j){j=j.replace(xb,hb);if(j.indexOf(yb)>=_){continue}if(j==zb){k=i.getAttribute(Ab);if(k){var l,m=k.indexOf(Bb);if(m>=_){j=k.substring(_,m);l=k.substring(m+ab)}else{j=k;l=hb}c[j]=l}}else if(j==Cb){k=i.getAttribute(Ab);if(k){try{d=eval(k)}catch(a){alert(Db+k+Eb)}}}else if(j==Fb){k=i.getAttribute(Ab);if(k){try{e=eval(k)}catch(a){alert(Db+k+Gb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};B=d;marion.__errFn=e}
function J(){function e(a){var b=a.lastIndexOf(Hb);if(b==-1){b=a.length}var c=a.indexOf(Ib);if(c==-1){c=a.length}var d=a.lastIndexOf(Jb,Math.min(c,b));return d>=_?a.substring(_,d+ab):hb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=v.createElement(Kb);b.src=a+Lb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Mb);if(a!=null){return a}return hb}
function h(){var a=v.getElementsByTagName(pb);for(var b=_;b<a.length;++b){if(a[b].src.indexOf(Nb)!=-1){return e(a[b].src)}}return hb}
function i(){var a=v.getElementsByTagName(Ob);if(a.length>_){return a[a.length-ab].href}return hb}
function j(){var a=v.location;return a.href==a.protocol+Pb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==hb){k=h()}if(k==hb){k=i()}if(k==hb&&j()){k=e(v.location.href)}k=f(k);return k}
function K(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return marion.__moduleBase+a}
function L(){var m=[];var n=_;function o(a,b){var c=m;for(var d=_,e=a.length-ab;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var p=[];var q=[];function r(a){var b=q[a](),c=p[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(B){B(a,d,b)}throw null}
q[Qb]=function(){var b=null;var c=Rb;try{if(!b){var d=v.cookie;var e=d.indexOf(Sb);if(e>=_){var f=d.indexOf(Tb,e);if(f<_){f=d.length}b=d.substring(e+Ub,f)}}if(!b){var g=location.search;var h=g.indexOf(Sb);if(h>=_){var i=g.substring(h+Ub);var f=g.indexOf(Vb,h);if(f<_){f=g.length}b=g.substring(h+Ub,f)}}if(!b){b=__gwt_getMetaProperty(Qb)}if(!b){var j=navigator.browserLanguage?navigator.browserLanguage:navigator.language;if(j){var k=j.split(/[-_]/);if(k.length>ab){k[ab]=k[ab].toUpperCase()}b=k.join(Wb)}}if(!b){b=u[Xb]}if(b){c=b}while(b&&!__gwt_isKnownPropertyValue(Qb,b)){var l=b.lastIndexOf(Wb);if(l<_){b=null;break}b=b.substring(_,l)}}catch(a){alert(Yb+a)}u[Xb]=c;return b||Rb};p[Qb]={'default':_,en_US:ab};q[Zb]=function(){var a=navigator.userAgent.toLowerCase();var b=v.documentMode;if(function(){return a.indexOf($b)!=-1}())return _b;if(function(){return a.indexOf(ac)!=-1&&(b>=bc&&b<cc)}())return dc;if(function(){return a.indexOf(ac)!=-1&&(b>=ec&&b<cc)}())return fc;if(function(){return a.indexOf(ac)!=-1&&(b>=gc&&b<cc)}())return hc;if(function(){return a.indexOf(ic)!=-1||b>=cc}())return jc;return hb};p[Zb]={gecko1_8:_,ie10:ab,ie8:kc,ie9:lc,safari:mc};__gwt_isKnownPropertyValue=function(a,b){return b in p[a]};marion.__getPropMap=function(){var a={};for(var b in p){if(p.hasOwnProperty(b)){a[b]=r(b)}}return a};marion.__computePropValue=r;u.__gwt_activeModules[Y].bindings=marion.__getPropMap;A(U,nc);if(w()){return K(oc)}var s;try{o([Rb,jc],pc);o([qc,_b],rc);o([qc,jc],sc);o([Rb,_b],tc);o([qc,dc],uc);o([Rb,fc],vc);o([qc,hc],wc);o([Rb,dc],xc);o([qc,fc],yc);o([Rb,hc],zc);s=m[r(Qb)][r(Zb)];var t=s.indexOf(Ac);if(t!=-1){n=parseInt(s.substring(t+ab),bc);s=s.substring(_,t)}}catch(a){}marion.__softPermutationId=n;return K(s+Bc)}
function M(){if(!u.__gwt_stylesLoaded){u.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=v.createElement(Cc);b.setAttribute(Dc,Ec);b.setAttribute(Fc,K(a));v.getElementsByTagName(ub)[_].appendChild(b);__gwt_stylesLoaded[a]=true}}
A(Gc,V);c(Hc);A(Gc,Ic)}
I();marion.__moduleBase=J();C[Y].moduleBase=marion.__moduleBase;var N=L();if(u){var O=!!(u.location.protocol==Jc||u.location.protocol==Kc);u.__gwt_activeModules[Y].canRedirect=O;function P(){var b=Lc;try{u.sessionStorage.setItem(b,b);u.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(O&&P()){var Q=Mc;var R=u.sessionStorage[Q];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(R)){if(R&&(window.console&&console.log)){console.log(Nc+R)}R=hb}if(R&&!u[Q]){u[Q]=true;u[Q+Oc]=J();var S=v.createElement(pb);S.src=R;var T=v.getElementsByTagName(ub)[_];T.insertBefore(S,T.firstElementChild||T.children[_]);return false}}}M();A(U,Ic);H(N);return true}
marion.succeeded=marion();