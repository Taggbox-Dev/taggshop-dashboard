(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[4862],{34862:function(e,i,r){"use strict";var n,o=r(47313),t=(n=o)&&"object"===typeof n&&"default"in n?n.default:n,a=r(61663),s=new a,u=s.getBrowser(),b=s.getCPU(),c=s.getDevice(),l=s.getEngine(),w=s.getOS(),d=s.getUA(),f=function(e){return s.setUA(e)},m=function(e){if(e){var i=new a(e);return{UA:i,browser:i.getBrowser(),cpu:i.getCPU(),device:i.getDevice(),engine:i.getEngine(),os:i.getOS(),ua:i.getUA(),setUserAgent:function(e){return i.setUA(e)}}}console.error("No userAgent string was provided")},p=Object.freeze({ClientUAInstance:s,browser:u,cpu:b,device:c,engine:l,os:w,ua:d,setUa:f,parseUserAgent:m});function v(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,n)}return r}function g(e){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function h(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function x(){return x=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function O(e,i){return O=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e},O(e,i)}function S(e,i){if(null==e)return{};var r,n,o=function(e,i){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],i.indexOf(r)>=0||(o[r]=e[r]);return o}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,t=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(t.push(n.value),!i||t.length!==i);a=!0);}catch(u){s=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return t}(e,i)||function(e,i){if(!e)return;if("string"===typeof e)return _(e,i);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,i)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,i){(null==i||i>e.length)&&(i=e.length);for(var r=0,n=new Array(i);r<i;r++)n[r]=e[r];return n}var j="mobile",C="tablet",E="smarttv",T="console",I="wearable",M="embedded",U=void 0,N={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},B={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},q={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},z=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},V=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},D=function(e){var i=V();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},W=function(e,i,r,n){return function(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?v(Object(r),!0).forEach((function(i){y(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}({},e,{vendor:z(i.vendor),model:z(i.model),os:z(r.name),osVersion:z(r.version),ua:z(n)})};var R=function(e){return e.type===j},F=function(e){return e.type===C},L=function(e){var i=e.type;return i===j||i===C},G=function(e){return e.type===E},H=function(e){return e.type===U},Y=function(e){return e.type===I},Z=function(e){return e.type===T},$=function(e){return e.type===M},X=function(e){var i=e.vendor;return z(i)},K=function(e){var i=e.model;return z(i)},Q=function(e){var i=e.type;return z(i,"browser")},J=function(e){return e.name===B.Android},ee=function(e){return e.name===B.Windows},ie=function(e){return e.name===B.MAC_OS},re=function(e){return e.name===B.WindowsPhone},ne=function(e){return e.name===B.IOS},oe=function(e){var i=e.version;return z(i)},te=function(e){var i=e.name;return z(i)},ae=function(e){return e.name===N.Chrome},se=function(e){return e.name===N.Firefox},ue=function(e){return e.name===N.Chromium},be=function(e){return e.name===N.Edge},ce=function(e){return e.name===N.Yandex},le=function(e){var i=e.name;return i===N.Safari||i===N.MobileSafari},we=function(e){return e.name===N.MobileSafari},de=function(e){return e.name===N.Opera},fe=function(e){var i=e.name;return i===N.InternetExplorer||i===N.Ie},me=function(e){return e.name===N.MIUI},pe=function(e){return e.name===N.SamsungBrowser},ve=function(e){var i=e.version;return z(i)},ge=function(e){var i=e.major;return z(i)},he=function(e){var i=e.name;return z(i)},ye=function(e){var i=e.name;return z(i)},xe=function(e){var i=e.version;return z(i)},ke=function(){var e=V(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)},Oe=function(e){return"string"===typeof e&&-1!==e.indexOf("Edg/")},Se=function(){var e=V();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},Ae=function(){return D("iPad")},Pe=function(){return D("iPhone")},_e=function(){return D("iPod")},je=function(e){return z(e)};function Ce(e){var i=e||p,r=i.device,n=i.browser,o=i.os,t=i.engine,a=i.ua;return{isSmartTV:G(r),isConsole:Z(r),isWearable:Y(r),isEmbedded:$(r),isMobileSafari:we(n)||Ae(),isChromium:ue(n),isMobile:L(r)||Ae(),isMobileOnly:R(r),isTablet:F(r)||Ae(),isBrowser:H(r),isDesktop:H(r),isAndroid:J(o),isWinPhone:re(o),isIOS:ne(o)||Ae(),isChrome:ae(n),isFirefox:se(n),isSafari:le(n),isOpera:de(n),isIE:fe(n),osVersion:oe(o),osName:te(o),fullBrowserVersion:ve(n),browserVersion:ge(n),browserName:he(n),mobileVendor:X(r),mobileModel:K(r),engineName:ye(t),engineVersion:xe(t),getUA:je(a),isEdge:be(n)||Oe(a),isYandex:ce(n),deviceType:Q(r),isIOS13:Se(),isIPad13:Ae(),isIPhone13:Pe(),isIPod13:_e(),isElectron:ke(),isEdgeChromium:Oe(a),isLegacyEdge:be(n)&&!Oe(a),isWindows:ee(o),isMacOs:ie(o),isMIUI:me(n),isSamsungBrowser:pe(n)}}var Ee=G(c),Te=Z(c),Ie=Y(c),Me=$(c),Ue=we(u)||Ae(),Ne=ue(u),Be=L(c)||Ae(),qe=R(c),ze=F(c)||Ae(),Ve=H(c),De=H(c),We=J(w),Re=re(w),Fe=ne(w)||Ae(),Le=ae(u),Ge=se(u),He=le(u),Ye=de(u),Ze=fe(u),$e=oe(w),Xe=te(w),Ke=ve(u),Qe=ge(u),Je=he(u),ei=X(c),ii=K(c),ri=ye(l),ni=xe(l),oi=je(d),ti=be(u)||Oe(d),ai=ce(u),si=Q(c),ui=Se(),bi=Ae(),ci=Pe(),li=_e(),wi=ke(),di=Oe(d),fi=be(u)&&!Oe(d),mi=ee(w),pi=ie(w),vi=me(u),gi=pe(u);function hi(e){var i=e||window.navigator.userAgent;return m(i)}i.KC=Je,i.x_=Qe},61663:function(e,i,r){var n;!function(o,t){"use strict";var a="function",s="undefined",u="object",b="string",c="major",l="model",w="name",d="type",f="vendor",m="version",p="architecture",v="console",g="mobile",h="tablet",y="smarttv",x="wearable",k="embedded",O="Amazon",S="Apple",A="ASUS",P="BlackBerry",_="Firefox",j="Google",C="Huawei",E="LG",T="Microsoft",I="Motorola",M="Opera",U="Samsung",N="Sharp",B="Sony",q="Xiaomi",z="Zebra",V="Facebook",D="Chromium OS",W="Mac OS",R=function(e){for(var i={},r=0;r<e.length;r++)i[e[r].toUpperCase()]=e[r];return i},F=function(e,i){return typeof e===b&&-1!==L(i).indexOf(L(e))},L=function(e){return e.toLowerCase()},G=function(e,i){if(typeof e===b)return e=e.replace(/^\s\s*/,""),typeof i===s?e:e.substring(0,350)},H=function(e,i){for(var r,n,o,s,b,c,l=0;l<i.length&&!b;){var w=i[l],d=i[l+1];for(r=n=0;r<w.length&&!b&&w[r];)if(b=w[r++].exec(e))for(o=0;o<d.length;o++)c=b[++n],typeof(s=d[o])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):t:this[s[0]]=c?s[1].call(this,c,s[2]):t:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):t):this[s]=c||t;l+=2}},Y=function(e,i){for(var r in i)if(typeof i[r]===u&&i[r].length>0){for(var n=0;n<i[r].length;n++)if(F(i[r][n],e))return"?"===r?t:r}else if(F(i[r],e))return"?"===r?t:r;return e},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},$={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[w,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[w,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[w,m],[/opios[\/ ]+([\w\.]+)/i],[m,[w,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[m,[w,M]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[w,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[w,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[m,[w,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[w,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[w,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[w,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[w,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[w,/(.+)/,"$1 Secure Browser"],m],[/\bfocus\/([\w\.]+)/i],[m,[w,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[m,[w,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[w,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[w,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[w,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[w,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[m,[w,_]],[/\bqihu|(qi?ho?o?|360)browser/i],[[w,"360 Browser"]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[w,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[w,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[w,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[w],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[w,V],m],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[w,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[w,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[w,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[w,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[w,"Chrome WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[w,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[w,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[w,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,w],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[w,[m,Y,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[w,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[w,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[w,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[w,m],[/(cobalt)\/([\w\.]+)/i],[w,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,L]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",L]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,L]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[f,U],[d,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[f,U],[d,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[f,S],[d,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[f,S],[d,h]],[/(macintosh);/i],[l,[f,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[f,N],[d,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[f,C],[d,h]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[f,C],[d,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[f,q],[d,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[f,q],[d,h]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[f,"OPPO"],[d,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[f,"Vivo"],[d,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[l,[f,"Realme"],[d,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[f,I],[d,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[f,I],[d,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[f,E],[d,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[f,E],[d,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[f,"Lenovo"],[d,h]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[f,"Nokia"],[d,g]],[/(pixel c)\b/i],[l,[f,j],[d,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[f,j],[d,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[f,B],[d,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[f,B],[d,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[f,"OnePlus"],[d,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[f,O],[d,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[f,O],[d,g]],[/(playbook);[-\w\),; ]+(rim)/i],[l,f,[d,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[f,P],[d,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[f,A],[d,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[f,A],[d,g]],[/(nexus 9)/i],[l,[f,"HTC"],[d,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[f,[l,/_/g," "],[d,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[f,"Acer"],[d,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[f,"Meizu"],[d,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,l,[d,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,l,[d,h]],[/(surface duo)/i],[l,[f,T],[d,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[f,"Fairphone"],[d,g]],[/(u304aa)/i],[l,[f,"AT&T"],[d,g]],[/\bsie-(\w*)/i],[l,[f,"Siemens"],[d,g]],[/\b(rct\w+) b/i],[l,[f,"RCA"],[d,h]],[/\b(venue[\d ]{2,7}) b/i],[l,[f,"Dell"],[d,h]],[/\b(q(?:mv|ta)\w+) b/i],[l,[f,"Verizon"],[d,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[f,"Barnes & Noble"],[d,h]],[/\b(tm\d{3}\w+) b/i],[l,[f,"NuVision"],[d,h]],[/\b(k88) b/i],[l,[f,"ZTE"],[d,h]],[/\b(nx\d{3}j) b/i],[l,[f,"ZTE"],[d,g]],[/\b(gen\d{3}) b.+49h/i],[l,[f,"Swiss"],[d,g]],[/\b(zur\d{3}) b/i],[l,[f,"Swiss"],[d,h]],[/\b((zeki)?tb.*\b) b/i],[l,[f,"Zeki"],[d,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],l,[d,h]],[/\b(ns-?\w{0,9}) b/i],[l,[f,"Insignia"],[d,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[f,"NextBook"],[d,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],l,[d,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],l,[d,g]],[/\b(ph-1) /i],[l,[f,"Essential"],[d,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[f,"Envizen"],[d,h]],[/\b(trio[-\w\. ]+) b/i],[l,[f,"MachSpeed"],[d,h]],[/\btu_(1491) b/i],[l,[f,"Rotor"],[d,h]],[/(shield[\w ]+) b/i],[l,[f,"Nvidia"],[d,h]],[/(sprint) (\w+)/i],[f,l,[d,g]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[f,T],[d,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[f,z],[d,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[f,z],[d,g]],[/smart-tv.+(samsung)/i],[f,[d,y]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[f,U],[d,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,E],[d,y]],[/(apple) ?tv/i],[f,[l,"Apple TV"],[d,y]],[/crkey/i],[[l,"Chromecast"],[f,j],[d,y]],[/droid.+aft(\w)( bui|\))/i],[l,[f,O],[d,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[f,N],[d,y]],[/(bravia[\w ]+)( bui|\))/i],[l,[f,B],[d,y]],[/(mitv-\w{5}) bui/i],[l,[f,q],[d,y]],[/Hbbtv.*(technisat) (.*);/i],[f,l,[d,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[f,G],[l,G],[d,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,l,[d,v]],[/droid.+; (shield) bui/i],[l,[f,"Nvidia"],[d,v]],[/(playstation [345portablevi]+)/i],[l,[f,B],[d,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[f,T],[d,v]],[/((pebble))app/i],[f,l,[d,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[f,S],[d,x]],[/droid.+; (glass) \d/i],[l,[f,j],[d,x]],[/droid.+; (wt63?0{2,3})\)/i],[l,[f,z],[d,x]],[/(quest( 2| pro)?)/i],[l,[f,V],[d,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[d,k]],[/(aeobc)\b/i],[l,[f,O],[d,k]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[l,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[d,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,h]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,g]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[w,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[w,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[w,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,w]],os:[[/microsoft (windows) (vista|xp)/i],[w,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[w,[m,Y,Z]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[w,"Windows"],[m,Y,Z]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[w,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[w,W],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,w],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[w,m],[/\(bb(10);/i],[m,[w,P]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[w,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[w,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[w,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[w,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[w,"Chromecast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[w,D],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[w,m],[/(sunos) ?([\w\.\d]*)/i],[[w,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[w,m]]},X=function e(i,r){if(typeof i===u&&(r=i,i=t),!(this instanceof e))return new e(i,r).getResult();var n=typeof o!==s&&o.navigator?o.navigator:t,c=i||(n&&n.userAgent?n.userAgent:""),l=n&&n.userAgentData?n.userAgentData:t,w=r?function(e,i){var r={};for(var n in e)i[n]&&i[n].length%2===0?r[n]=i[n].concat(e[n]):r[n]=e[n];return r}($,r):$,d=n&&n.userAgent==c;return this.getBrowser=function(){var e,i={};return i.name=t,i.version=t,H.call(i,c,w.browser),i.major=typeof(e=i.version)===b?e.replace(/[^\d\.]/g,"").split(".")[0]:t,d&&n&&n.brave&&typeof n.brave.isBrave==a&&(i.name="Brave"),i},this.getCPU=function(){var e={};return e.architecture=t,H.call(e,c,w.cpu),e},this.getDevice=function(){var e={};return e.vendor=t,e.model=t,e.type=t,H.call(e,c,w.device),d&&!e.type&&l&&l.mobile&&(e.type=g),d&&"Macintosh"==e.model&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e.model="iPad",e.type=h),e},this.getEngine=function(){var e={};return e.name=t,e.version=t,H.call(e,c,w.engine),e},this.getOS=function(){var e={};return e.name=t,e.version=t,H.call(e,c,w.os),d&&!e.name&&l&&"Unknown"!=l.platform&&(e.name=l.platform.replace(/chrome os/i,D).replace(/macos/i,W)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return c},this.setUA=function(e){return c=typeof e===b&&e.length>350?G(e,350):e,this},this.setUA(c),this};X.VERSION="1.0.35",X.BROWSER=R([w,m,c]),X.CPU=R([p]),X.DEVICE=R([l,f,d,v,g,y,h,x,k]),X.ENGINE=X.OS=R([w,m]),typeof i!==s?(e.exports&&(i=e.exports=X),i.UAParser=X):r.amdO?(n=function(){return X}.call(i,r,i,e))===t||(e.exports=n):typeof o!==s&&(o.UAParser=X);var K=typeof o!==s&&(o.jQuery||o.Zepto);if(K&&!K.ua){var Q=new X;K.ua=Q.getResult(),K.ua.get=function(){return Q.getUA()},K.ua.set=function(e){Q.setUA(e);var i=Q.getResult();for(var r in i)K.ua[r]=i[r]}}}("object"===typeof window?window:this)}}]);