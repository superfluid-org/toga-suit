/*! For license information please see 3809.7733a43a.chunk.js.LICENSE.txt */
(self.webpackChunktoga_dashboard=self.webpackChunktoga_dashboard||[]).push([[3809],{90951:t=>{"use strict";var e={single_source_shortest_paths:function(t,o,i){var r={},n={};n[o]=0;var a,l,s,c,d,u,h,p=e.PriorityQueue.make();for(p.push(o,0);!p.empty();)for(s in l=(a=p.pop()).value,c=a.cost,d=t[l]||{})d.hasOwnProperty(s)&&(u=c+d[s],h=n[s],("undefined"===typeof n[s]||h>u)&&(n[s]=u,p.push(s,u),r[s]=l));if("undefined"!==typeof i&&"undefined"===typeof n[i]){var g=["Could not find a path from ",o," to ",i,"."].join("");throw new Error(g)}return r},extract_shortest_path_from_predecessor_list:function(t,e){for(var o=[],i=e;i;)o.push(i),t[i],i=t[i];return o.reverse(),o},find_path:function(t,o,i){var r=e.single_source_shortest_paths(t,o,i);return e.extract_shortest_path_from_predecessor_list(r,i)},PriorityQueue:{make:function(t){var o,i=e.PriorityQueue,r={};for(o in t=t||{},i)i.hasOwnProperty(o)&&(r[o]=i[o]);return r.queue=[],r.sorter=t.sorter||i.default_sorter,r},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var o={value:t,cost:e};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},10153:t=>{"use strict";t.exports=function(t){for(var e=[],o=t.length,i=0;i<o;i++){var r=t.charCodeAt(i);if(r>=55296&&r<=56319&&o>i+1){var n=t.charCodeAt(i+1);n>=56320&&n<=57343&&(r=1024*(r-55296)+n-56320+65536,i+=1)}r<128?e.push(r):r<2048?(e.push(r>>6|192),e.push(63&r|128)):r<55296||r>=57344&&r<65536?(e.push(r>>12|224),e.push(r>>6&63|128),e.push(63&r|128)):r>=65536&&r<=1114111?(e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(63&r|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},20741:(t,e,o)=>{const i=o(36887),r=o(5054),n=o(30416),a=o(63011);function l(t,e,o,n,a){const l=[].slice.call(arguments,1),s=l.length,c="function"===typeof l[s-1];if(!c&&!i())throw new Error("Callback required as last argument");if(!c){if(s<1)throw new Error("Too few arguments provided");return 1===s?(o=e,e=n=void 0):2!==s||e.getContext||(n=o,o=e,e=void 0),new Promise((function(i,a){try{const a=r.create(o,n);i(t(a,e,n))}catch(l){a(l)}}))}if(s<2)throw new Error("Too few arguments provided");2===s?(a=o,o=e,e=n=void 0):3===s&&(e.getContext&&"undefined"===typeof a?(a=n,n=void 0):(a=n,n=o,o=e,e=void 0));try{const i=r.create(o,n);a(null,t(i,e,n))}catch(d){a(d)}}e.create=r.create,e.toCanvas=l.bind(null,n.render),e.toDataURL=l.bind(null,n.renderToDataURL),e.toString=l.bind(null,(function(t,e,o){return a.render(t,o)}))},36887:t=>{t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},23234:(t,e,o)=>{const i=o(2338).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,o=i(t),r=145===o?26:2*Math.ceil((o-13)/(2*e-2)),n=[o-7];for(let i=1;i<e-1;i++)n[i]=n[i-1]-r;return n.push(6),n.reverse()},e.getPositions=function(t){const o=[],i=e.getRowColCoords(t),r=i.length;for(let e=0;e<r;e++)for(let t=0;t<r;t++)0===e&&0===t||0===e&&t===r-1||e===r-1&&0===t||o.push([i[e],i[t]]);return o}},28295:(t,e,o)=>{const i=o(91337),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(t){this.mode=i.ALPHANUMERIC,this.data=t}n.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let o=45*r.indexOf(this.data[e]);o+=r.indexOf(this.data[e+1]),t.put(o,11)}this.data.length%2&&t.put(r.indexOf(this.data[e]),6)},t.exports=n},75673:t=>{function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let o=0;o<e;o++)this.putBit(1===(t>>>e-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},32988:t=>{function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,o,i){const r=t*this.size+e;this.data[r]=o,i&&(this.reservedBit[r]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,o){this.data[t*this.size+e]^=o},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},40639:(t,e,o)=>{const i=o(10153),r=o(91337);function n(t){this.mode=r.BYTE,"string"===typeof t&&(t=i(t)),this.data=new Uint8Array(t)}n.getBitsLength=function(t){return 8*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){for(let e=0,o=this.data.length;e<o;e++)t.put(this.data[e],8)},t.exports=n},43180:(t,e,o)=>{const i=o(78955),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case i.L:return r[4*(t-1)+0];case i.M:return r[4*(t-1)+1];case i.Q:return r[4*(t-1)+2];case i.H:return r[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case i.L:return n[4*(t-1)+0];case i.M:return n[4*(t-1)+1];case i.Q:return n[4*(t-1)+2];case i.H:return n[4*(t-1)+3];default:return}}},78955:(t,e)=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,o){if(e.isValid(t))return t;try{return function(t){if("string"!==typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(i){return o}}},48947:(t,e,o)=>{const i=o(2338).getSymbolSize;e.getPositions=function(t){const e=i(t);return[[0,0],[e-7,0],[0,e-7]]}},27435:(t,e,o)=>{const i=o(2338),r=i.getBCHDigit(1335);e.getEncodedBits=function(t,e){const o=t.bit<<3|e;let n=o<<10;for(;i.getBCHDigit(n)-r>=0;)n^=1335<<i.getBCHDigit(n)-r;return 21522^(o<<10|n)}},81239:(t,e)=>{const o=new Uint8Array(512),i=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)o[e]=t,i[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)o[e]=o[e-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return i[t]},e.exp=function(t){return o[t]},e.mul=function(t,e){return 0===t||0===e?0:o[i[t]+i[e]]}},58588:(t,e,o)=>{const i=o(91337),r=o(2338);function n(t){this.mode=i.KANJI,this.data=t}n.getBitsLength=function(t){return 13*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let o=r.toSJIS(this.data[e]);if(o>=33088&&o<=40956)o-=33088;else{if(!(o>=57408&&o<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");o-=49472}o=192*(o>>>8&255)+(255&o),t.put(o,13)}},t.exports=n},66823:(t,e)=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const o=3,i=3,r=40,n=10;function a(t,o,i){switch(t){case e.Patterns.PATTERN000:return(o+i)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(o+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return o*i%2+o*i%3===0;case e.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case e.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let i=0,r=0,n=0,a=null,l=null;for(let s=0;s<e;s++){r=n=0,a=l=null;for(let c=0;c<e;c++){let e=t.get(s,c);e===a?r++:(r>=5&&(i+=o+(r-5)),a=e,r=1),e=t.get(c,s),e===l?n++:(n>=5&&(i+=o+(n-5)),l=e,n=1)}r>=5&&(i+=o+(r-5)),n>=5&&(i+=o+(n-5))}return i},e.getPenaltyN2=function(t){const e=t.size;let o=0;for(let i=0;i<e-1;i++)for(let r=0;r<e-1;r++){const e=t.get(i,r)+t.get(i,r+1)+t.get(i+1,r)+t.get(i+1,r+1);4!==e&&0!==e||o++}return o*i},e.getPenaltyN3=function(t){const e=t.size;let o=0,i=0,n=0;for(let r=0;r<e;r++){i=n=0;for(let a=0;a<e;a++)i=i<<1&2047|t.get(r,a),a>=10&&(1488===i||93===i)&&o++,n=n<<1&2047|t.get(a,r),a>=10&&(1488===n||93===n)&&o++}return o*r},e.getPenaltyN4=function(t){let e=0;const o=t.data.length;for(let i=0;i<o;i++)e+=t.data[i];return Math.abs(Math.ceil(100*e/o/5)-10)*n},e.applyMask=function(t,e){const o=e.size;for(let i=0;i<o;i++)for(let r=0;r<o;r++)e.isReserved(r,i)||e.xor(r,i,a(t,r,i))},e.getBestMask=function(t,o){const i=Object.keys(e.Patterns).length;let r=0,n=1/0;for(let a=0;a<i;a++){o(a),e.applyMask(a,t);const i=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),i<n&&(n=i,r=a)}return r}},91337:(t,e,o)=>{const i=o(78402),r=o(28650);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!i.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return r.testNumeric(t)?e.NUMERIC:r.testAlphanumeric(t)?e.ALPHANUMERIC:r.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,o){if(e.isValid(t))return t;try{return function(t){if("string"!==typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(i){return o}}},20320:(t,e,o)=>{const i=o(91337);function r(t){this.mode=i.NUMERIC,this.data=t.toString()}r.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(t){let e,o,i;for(e=0;e+3<=this.data.length;e+=3)o=this.data.substr(e,3),i=parseInt(o,10),t.put(i,10);const r=this.data.length-e;r>0&&(o=this.data.substr(e),i=parseInt(o,10),t.put(i,3*r+1))},t.exports=r},89203:(t,e,o)=>{const i=o(81239);e.mul=function(t,e){const o=new Uint8Array(t.length+e.length-1);for(let r=0;r<t.length;r++)for(let n=0;n<e.length;n++)o[r+n]^=i.mul(t[r],e[n]);return o},e.mod=function(t,e){let o=new Uint8Array(t);for(;o.length-e.length>=0;){const t=o[0];for(let n=0;n<e.length;n++)o[n]^=i.mul(e[n],t);let r=0;for(;r<o.length&&0===o[r];)r++;o=o.slice(r)}return o},e.generateECPolynomial=function(t){let o=new Uint8Array([1]);for(let r=0;r<t;r++)o=e.mul(o,new Uint8Array([1,i.exp(r)]));return o}},5054:(t,e,o)=>{const i=o(2338),r=o(78955),n=o(75673),a=o(32988),l=o(23234),s=o(48947),c=o(66823),d=o(43180),u=o(220),h=o(81265),p=o(27435),g=o(91337),w=o(72179);function f(t,e,o){const i=t.size,r=p.getEncodedBits(e,o);let n,a;for(n=0;n<15;n++)a=1===(r>>n&1),n<6?t.set(n,8,a,!0):n<8?t.set(n+1,8,a,!0):t.set(i-15+n,8,a,!0),n<8?t.set(8,i-n-1,a,!0):n<9?t.set(8,15-n-1+1,a,!0):t.set(8,15-n-1,a,!0);t.set(i-8,8,1,!0)}function b(t,e,o){const r=new n;o.forEach((function(e){r.put(e.mode.bit,4),r.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(r)}));const a=8*(i.getSymbolTotalCodewords(t)-d.getTotalCodewordsCount(t,e));for(r.getLengthInBits()+4<=a&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const l=(a-r.getLengthInBits())/8;for(let i=0;i<l;i++)r.put(i%2?17:236,8);return function(t,e,o){const r=i.getSymbolTotalCodewords(e),n=d.getTotalCodewordsCount(e,o),a=r-n,l=d.getBlocksCount(e,o),s=r%l,c=l-s,h=Math.floor(r/l),p=Math.floor(a/l),g=p+1,w=h-p,f=new u(w);let b=0;const v=new Array(l),m=new Array(l);let y=0;const x=new Uint8Array(t.buffer);for(let i=0;i<l;i++){const t=i<c?p:g;v[i]=x.slice(b,b+t),m[i]=f.encode(v[i]),b+=t,y=Math.max(y,t)}const C=new Uint8Array(r);let $,k,R=0;for($=0;$<y;$++)for(k=0;k<l;k++)$<v[k].length&&(C[R++]=v[k][$]);for($=0;$<w;$++)for(k=0;k<l;k++)C[R++]=m[k][$];return C}(r,t,e)}function v(t,e,o,r){let n;if(Array.isArray(t))n=w.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");{let i=e;if(!i){const e=w.rawSplit(t);i=h.getBestVersionForData(e,o)}n=w.fromString(t,i||40)}}const d=h.getBestVersionForData(n,o);if(!d)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<d)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+d+".\n")}else e=d;const u=b(e,o,n),p=i.getSymbolSize(e),g=new a(p);return function(t,e){const o=t.size,i=s.getPositions(e);for(let r=0;r<i.length;r++){const e=i[r][0],n=i[r][1];for(let i=-1;i<=7;i++)if(!(e+i<=-1||o<=e+i))for(let r=-1;r<=7;r++)n+r<=-1||o<=n+r||(i>=0&&i<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===i||6===i)||i>=2&&i<=4&&r>=2&&r<=4?t.set(e+i,n+r,!0,!0):t.set(e+i,n+r,!1,!0))}}(g,e),function(t){const e=t.size;for(let o=8;o<e-8;o++){const e=o%2===0;t.set(o,6,e,!0),t.set(6,o,e,!0)}}(g),function(t,e){const o=l.getPositions(e);for(let i=0;i<o.length;i++){const e=o[i][0],r=o[i][1];for(let o=-2;o<=2;o++)for(let i=-2;i<=2;i++)-2===o||2===o||-2===i||2===i||0===o&&0===i?t.set(e+o,r+i,!0,!0):t.set(e+o,r+i,!1,!0)}}(g,e),f(g,o,0),e>=7&&function(t,e){const o=t.size,i=h.getEncodedBits(e);let r,n,a;for(let l=0;l<18;l++)r=Math.floor(l/3),n=l%3+o-8-3,a=1===(i>>l&1),t.set(r,n,a,!0),t.set(n,r,a,!0)}(g,e),function(t,e){const o=t.size;let i=-1,r=o-1,n=7,a=0;for(let l=o-1;l>0;l-=2)for(6===l&&l--;;){for(let o=0;o<2;o++)if(!t.isReserved(r,l-o)){let i=!1;a<e.length&&(i=1===(e[a]>>>n&1)),t.set(r,l-o,i),n--,-1===n&&(a++,n=7)}if(r+=i,r<0||o<=r){r-=i,i=-i;break}}}(g,u),isNaN(r)&&(r=c.getBestMask(g,f.bind(null,g,o))),c.applyMask(r,g),f(g,o,r),{modules:g,version:e,errorCorrectionLevel:o,maskPattern:r,segments:n}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");let o,n,a=r.M;return"undefined"!==typeof e&&(a=r.from(e.errorCorrectionLevel,r.M),o=h.from(e.version),n=c.from(e.maskPattern),e.toSJISFunc&&i.setToSJISFunction(e.toSJISFunc)),v(t,o,a,n)}},220:(t,e,o)=>{const i=o(89203);function r(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(t){this.degree=t,this.genPoly=i.generateECPolynomial(this.degree)},r.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const o=i.mod(e,this.genPoly),r=this.degree-o.length;if(r>0){const t=new Uint8Array(this.degree);return t.set(o,r),t}return o},t.exports=r},28650:(t,e)=>{const o="[0-9]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";e.KANJI=new RegExp(i,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(r,"g"),e.NUMERIC=new RegExp(o,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const n=new RegExp("^"+i+"$"),a=new RegExp("^"+o+"$"),l=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return n.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return l.test(t)}},72179:(t,e,o)=>{const i=o(91337),r=o(20320),n=o(28295),a=o(40639),l=o(58588),s=o(28650),c=o(2338),d=o(90951);function u(t){return unescape(encodeURIComponent(t)).length}function h(t,e,o){const i=[];let r;for(;null!==(r=t.exec(o));)i.push({data:r[0],index:r.index,mode:e,length:r[0].length});return i}function p(t){const e=h(s.NUMERIC,i.NUMERIC,t),o=h(s.ALPHANUMERIC,i.ALPHANUMERIC,t);let r,n;c.isKanjiModeEnabled()?(r=h(s.BYTE,i.BYTE,t),n=h(s.KANJI,i.KANJI,t)):(r=h(s.BYTE_KANJI,i.BYTE,t),n=[]);return e.concat(o,r,n).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,e){switch(e){case i.NUMERIC:return r.getBitsLength(t);case i.ALPHANUMERIC:return n.getBitsLength(t);case i.KANJI:return l.getBitsLength(t);case i.BYTE:return a.getBitsLength(t)}}function w(t,e){let o;const s=i.getBestModeForData(t);if(o=i.from(e,s),o!==i.BYTE&&o.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+i.toString(o)+".\n Suggested mode is: "+i.toString(s));switch(o!==i.KANJI||c.isKanjiModeEnabled()||(o=i.BYTE),o){case i.NUMERIC:return new r(t);case i.ALPHANUMERIC:return new n(t);case i.KANJI:return new l(t);case i.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(w(e,null)):e.data&&t.push(w(e.data,e.mode)),t}),[])},e.fromString=function(t,o){const r=function(t){const e=[];for(let o=0;o<t.length;o++){const r=t[o];switch(r.mode){case i.NUMERIC:e.push([r,{data:r.data,mode:i.ALPHANUMERIC,length:r.length},{data:r.data,mode:i.BYTE,length:r.length}]);break;case i.ALPHANUMERIC:e.push([r,{data:r.data,mode:i.BYTE,length:r.length}]);break;case i.KANJI:e.push([r,{data:r.data,mode:i.BYTE,length:u(r.data)}]);break;case i.BYTE:e.push([{data:r.data,mode:i.BYTE,length:u(r.data)}])}}return e}(p(t,c.isKanjiModeEnabled())),n=function(t,e){const o={},r={start:{}};let n=["start"];for(let a=0;a<t.length;a++){const l=t[a],s=[];for(let t=0;t<l.length;t++){const c=l[t],d=""+a+t;s.push(d),o[d]={node:c,lastCount:0},r[d]={};for(let t=0;t<n.length;t++){const a=n[t];o[a]&&o[a].node.mode===c.mode?(r[a][d]=g(o[a].lastCount+c.length,c.mode)-g(o[a].lastCount,c.mode),o[a].lastCount+=c.length):(o[a]&&(o[a].lastCount=c.length),r[a][d]=g(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,e))}}n=s}for(let i=0;i<n.length;i++)r[n[i]].end=0;return{map:r,table:o}}(r,o),a=d.find_path(n.map,"start","end"),l=[];for(let e=1;e<a.length-1;e++)l.push(n.table[a[e]].node);return e.fromArray(function(t){return t.reduce((function(t,e){const o=t.length-1>=0?t[t.length-1]:null;return o&&o.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(l))},e.rawSplit=function(t){return e.fromArray(p(t,c.isKanjiModeEnabled()))}},2338:(t,e)=>{let o;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return i[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');o=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof o},e.toSJIS=function(t){return o(t)}},78402:(t,e)=>{e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},81265:(t,e,o)=>{const i=o(2338),r=o(43180),n=o(78955),a=o(91337),l=o(78402),s=i.getBCHDigit(7973);function c(t,e){return a.getCharCountIndicator(t,e)+4}function d(t,e){let o=0;return t.forEach((function(t){const i=c(t.mode,e);o+=i+t.getBitsLength()})),o}e.from=function(t,e){return l.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,o){if(!l.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof o&&(o=a.BYTE);const n=8*(i.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,e));if(o===a.MIXED)return n;const s=n-c(o,t);switch(o){case a.NUMERIC:return Math.floor(s/10*3);case a.ALPHANUMERIC:return Math.floor(s/11*2);case a.KANJI:return Math.floor(s/13);case a.BYTE:default:return Math.floor(s/8)}},e.getBestVersionForData=function(t,o){let i;const r=n.from(o,n.M);if(Array.isArray(t)){if(t.length>1)return function(t,o){for(let i=1;i<=40;i++)if(d(t,i)<=e.getCapacity(i,o,a.MIXED))return i}(t,r);if(0===t.length)return 1;i=t[0]}else i=t;return function(t,o,i){for(let r=1;r<=40;r++)if(o<=e.getCapacity(r,i,t))return r}(i.mode,i.getLength(),r)},e.getEncodedBits=function(t){if(!l.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;i.getBCHDigit(e)-s>=0;)e^=7973<<i.getBCHDigit(e)-s;return t<<12|e}},30416:(t,e,o)=>{const i=o(83605);e.render=function(t,e,o){let r=o,n=e;"undefined"!==typeof r||e&&e.getContext||(r=e,e=void 0),e||(n=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),r=i.getOptions(r);const a=i.getImageWidth(t.modules.size,r),l=n.getContext("2d"),s=l.createImageData(a,a);return i.qrToImageData(s.data,t,r),function(t,e,o){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=o,e.width=o,e.style.height=o+"px",e.style.width=o+"px"}(l,n,a),l.putImageData(s,0,0),n},e.renderToDataURL=function(t,o,i){let r=i;"undefined"!==typeof r||o&&o.getContext||(r=o,o=void 0),r||(r={});const n=e.render(t,o,r),a=r.type||"image/png",l=r.rendererOpts||{};return n.toDataURL(a,l.quality)}},63011:(t,e,o)=>{const i=o(83605);function r(t,e){const o=t.a/255,i=e+'="'+t.hex+'"';return o<1?i+" "+e+'-opacity="'+o.toFixed(2).slice(1)+'"':i}function n(t,e,o){let i=t+e;return"undefined"!==typeof o&&(i+=" "+o),i}e.render=function(t,e,o){const a=i.getOptions(e),l=t.modules.size,s=t.modules.data,c=l+2*a.margin,d=a.color.light.a?"<path "+r(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+r(a.color.dark,"stroke")+' d="'+function(t,e,o){let i="",r=0,a=!1,l=0;for(let s=0;s<t.length;s++){const c=Math.floor(s%e),d=Math.floor(s/e);c||a||(a=!0),t[s]?(l++,s>0&&c>0&&t[s-1]||(i+=a?n("M",c+o,.5+d+o):n("m",r,0),r=0,a=!1),c+1<e&&t[s+1]||(i+=n("h",l),l=0)):r++}return i}(s,l,a.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+d+u+"</svg>\n";return"function"===typeof o&&o(null,p),p}},83605:(t,e)=>{function o(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const o=parseInt(e.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:255&o,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,i=t.width&&t.width>=21?t.width:void 0,r=t.scale||4;return{width:i,scale:i?4:r,margin:e,color:{dark:o(t.color.dark||"#000000ff"),light:o(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,o){const i=e.getScale(t,o);return Math.floor((t+2*o.margin)*i)},e.qrToImageData=function(t,o,i){const r=o.modules.size,n=o.modules.data,a=e.getScale(r,i),l=Math.floor((r+2*i.margin)*a),s=i.margin*a,c=[i.color.light,i.color.dark];for(let e=0;e<l;e++)for(let o=0;o<l;o++){let d=4*(e*l+o),u=i.color.light;if(e>=s&&o>=s&&e<l-s&&o<l-s){u=c[n[Math.floor((e-s)/a)*r+Math.floor((o-s)/a)]?1:0]}t[d++]=u.r,t[d++]=u.g,t[d++]=u.b,t[d]=u.a}}},63809:(t,e,o)=>{"use strict";o.r(e),o.d(e,{W3mAllWalletsView:()=>Ge,W3mConnectingWcBasicView:()=>se,W3mDownloadsView:()=>oo});var i=o(66386),r=o(55112),n=o(82880),a=o(421),l=o(4324),s=o(48228),c=o(69046),d=(o(78330),o(54417)),u=o(53993),h=o(26367),p=o(8632),g=(o(22987),o(26576),o(99568),o(50745)),w=o(32603);o(19658),o(72738);const f=i.iv`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var b=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let v=class extends i.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),i.dy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?i.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?i.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:i.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};v.styles=[g.ZM,g.ET,f],b([(0,r.Cb)()],v.prototype,"size",void 0),b([(0,r.Cb)()],v.prototype,"name",void 0),b([(0,r.Cb)()],v.prototype,"imageSrc",void 0),b([(0,r.Cb)()],v.prototype,"walletIcon",void 0),b([(0,r.Cb)({type:Boolean})],v.prototype,"installed",void 0),b([(0,r.Cb)()],v.prototype,"badgeSize",void 0),v=b([(0,w.M)("wui-wallet-image")],v);const m=i.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var y=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let x=class extends i.oi{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<4;return i.dy`${this.walletImages.slice(0,4).map((t=>{let{src:e,walletName:o}=t;return i.dy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,d.o)(o)}
            ></wui-wallet-image>
          `}))}
      ${t?[...Array(4-this.walletImages.length)].map((()=>i.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};x.styles=[g.ET,m],y([(0,r.Cb)({type:Array})],x.prototype,"walletImages",void 0),x=y([(0,w.M)("wui-all-wallets-image")],x);o(79996);const C=i.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var $=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let k=class extends i.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return i.dy`
      <button ?disabled=${this.disabled} tabindex=${(0,d.o)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?i.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?i.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?i.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:i.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?i.dy`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?i.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?i.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};k.styles=[g.ET,g.ZM,C],$([(0,r.Cb)({type:Array})],k.prototype,"walletImages",void 0),$([(0,r.Cb)()],k.prototype,"imageSrc",void 0),$([(0,r.Cb)()],k.prototype,"name",void 0),$([(0,r.Cb)()],k.prototype,"tagLabel",void 0),$([(0,r.Cb)()],k.prototype,"tagVariant",void 0),$([(0,r.Cb)()],k.prototype,"icon",void 0),$([(0,r.Cb)()],k.prototype,"walletIcon",void 0),$([(0,r.Cb)()],k.prototype,"tabIdx",void 0),$([(0,r.Cb)({type:Boolean})],k.prototype,"installed",void 0),$([(0,r.Cb)({type:Boolean})],k.prototype,"disabled",void 0),$([(0,r.Cb)({type:Boolean})],k.prototype,"showAllWallets",void 0),$([(0,r.Cb)({type:Boolean})],k.prototype,"loading",void 0),$([(0,r.Cb)({type:String})],k.prototype,"loadingSpinnerColor",void 0),k=$([(0,w.M)("wui-list-wallet")],k);var R=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let E=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.count=a.ApiController.state.count,this.filteredCount=a.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=a.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)),a.ApiController.subscribeKey("count",(t=>this.count=t)),a.ApiController.subscribeKey("filteredWallets",(t=>this.filteredCount=t.length)),a.ApiController.subscribeKey("isFetchingRecommendedWallets",(t=>this.isFetchingRecommendedWallets=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.find((t=>"walletConnect"===t.id)),{allWallets:e}=l.OptionsController.state;if(!t||"HIDE"===e)return null;if("ONLY_MOBILE"===e&&!n.j.isMobile())return null;const o=a.ApiController.state.featured.length,r=this.count+o,s=r<10?r:10*Math.floor(r/10),c=this.filteredCount>0?this.filteredCount:s;let u=`${c}`;return this.filteredCount>0?u=`${this.filteredCount}`:c<r&&(u=`${c}+`),i.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${u}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,d.o)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){h.X.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),p.RouterController.push("AllWallets")}};R([(0,r.Cb)()],E.prototype,"tabIdx",void 0),R([(0,r.SB)()],E.prototype,"connectors",void 0),R([(0,r.SB)()],E.prototype,"count",void 0),R([(0,r.SB)()],E.prototype,"filteredCount",void 0),R([(0,r.SB)()],E.prototype,"isFetchingRecommendedWallets",void 0),E=R([(0,c.Mo)("w3m-all-wallets-widget")],E);var I=o(66107),S=o(56639),T=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let j=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.filter((t=>"ANNOUNCED"===t.type));return null!==t&&void 0!==t&&t.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(S.C.showConnector).map((t=>{var e;return i.dy`
              <wui-list-wallet
                imageSrc=${(0,d.o)(I.f.getConnectorImage(t))}
                name=${null!==(e=t.name)&&void 0!==e?e:"Unknown"}
                @click=${()=>this.onConnector(t)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${t.id}`}
                .installed=${!0}
                tabIdx=${(0,d.o)(this.tabIdx)}
              >
              </wui-list-wallet>
            `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){"walletConnect"===t.id?n.j.isMobile()?p.RouterController.push("AllWallets"):p.RouterController.push("ConnectingWalletConnect"):p.RouterController.push("ConnectingExternal",{connector:t})}};T([(0,r.Cb)()],j.prototype,"tabIdx",void 0),T([(0,r.SB)()],j.prototype,"connectors",void 0),j=T([(0,c.Mo)("w3m-connect-announced-widget")],j);var P=o(47624),B=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let O=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t))),n.j.isTelegram()&&n.j.isIos()&&(this.loading=!P.ConnectionController.state.wcUri,this.unsubscribe.push(P.ConnectionController.subscribeKey("wcUri",(t=>this.loading=!t))))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const{customWallets:t}=l.OptionsController.state;if(null===t||void 0===t||!t.length)return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return i.dy`<wui-flex flexDirection="column" gap="xs">
      ${e.map((t=>{var e;return i.dy`
          <wui-list-wallet
            imageSrc=${(0,d.o)(I.f.getWalletImage(t))}
            name=${null!==(e=t.name)&&void 0!==e?e:"Unknown"}
            @click=${()=>this.onConnectWallet(t)}
            data-testid=${`wallet-selector-${t.id}`}
            tabIdx=${(0,d.o)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `}))}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=s.M.getRecentWallets(),o=this.connectors.map((t=>{var e;return null===(e=t.info)||void 0===e?void 0:e.rdns})).filter(Boolean),i=e.map((t=>t.rdns)).filter(Boolean),r=o.concat(i);if(r.includes("io.metamask.mobile")&&n.j.isMobile()){const t=r.indexOf("io.metamask.mobile");r[t]="io.metamask"}return t.filter((t=>!r.includes(String(null===t||void 0===t?void 0:t.rdns))))}onConnectWallet(t){this.loading||p.RouterController.push("ConnectingWalletConnect",{wallet:t})}};B([(0,r.Cb)()],O.prototype,"tabIdx",void 0),B([(0,r.SB)()],O.prototype,"connectors",void 0),B([(0,r.SB)()],O.prototype,"loading",void 0),O=B([(0,c.Mo)("w3m-connect-custom-widget")],O);var A=o(46460),L=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let M=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.filter((t=>"EXTERNAL"===t.type)).filter(S.C.showConnector).filter((t=>t.id!==A.b.CONNECTOR_ID.COINBASE_SDK));return null!==t&&void 0!==t&&t.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>{var e;return i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(I.f.getConnectorImage(t))}
              .installed=${!0}
              name=${null!==(e=t.name)&&void 0!==e?e:"Unknown"}
              data-testid=${`wallet-selector-external-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){p.RouterController.push("ConnectingExternal",{connector:t})}};L([(0,r.Cb)()],M.prototype,"tabIdx",void 0),L([(0,r.SB)()],M.prototype,"connectors",void 0),M=L([(0,c.Mo)("w3m-connect-external-widget")],M);var z=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let W=class extends i.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((t=>{var e;return i.dy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,d.o)(I.f.getWalletImage(t))}
              name=${null!==(e=t.name)&&void 0!==e?e:"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){u.ConnectorController.selectWalletConnector(t)}};z([(0,r.Cb)()],W.prototype,"tabIdx",void 0),z([(0,r.Cb)()],W.prototype,"wallets",void 0),W=z([(0,c.Mo)("w3m-connect-featured-widget")],W);var D=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let N=class extends i.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const t=this.connectors.filter(S.C.showConnector);return 0===t.length?(this.style.cssText="display: none",null):i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>{var e;return i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(I.f.getConnectorImage(t))}
              .installed=${!0}
              name=${null!==(e=t.name)&&void 0!==e?e:"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `}onConnector(t){u.ConnectorController.setActiveConnector(t),p.RouterController.push("ConnectingExternal",{connector:t})}};D([(0,r.Cb)()],N.prototype,"tabIdx",void 0),D([(0,r.Cb)()],N.prototype,"connectors",void 0),N=D([(0,c.Mo)("w3m-connect-injected-widget")],N);var U=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let _=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.filter((t=>"MULTI_CHAIN"===t.type&&"WalletConnect"!==t.name));return null!==t&&void 0!==t&&t.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>{var e;return i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(I.f.getConnectorImage(t))}
              .installed=${!0}
              name=${null!==(e=t.name)&&void 0!==e?e:"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){u.ConnectorController.setActiveConnector(t),p.RouterController.push("ConnectingMultiChain")}};U([(0,r.Cb)()],_.prototype,"tabIdx",void 0),U([(0,r.SB)()],_.prototype,"connectors",void 0),_=U([(0,c.Mo)("w3m-connect-multi-chain-widget")],_);var q=o(83520),H=o(31471),K=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let V=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t))),n.j.isTelegram()&&n.j.isIos()&&(this.loading=!P.ConnectionController.state.wcUri,this.unsubscribe.push(P.ConnectionController.subscribeKey("wcUri",(t=>this.loading=!t))))}render(){const t=s.M.getRecentWallets().filter((t=>!H.J.isExcluded(t))).filter((t=>!this.hasWalletConnector(t))).filter((t=>this.isWalletCompatibleWithCurrentChain(t)));return t.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>{var e;return i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(I.f.getWalletImage(t))}
              name=${null!==(e=t.name)&&void 0!==e?e:"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,d.o)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||u.ConnectorController.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some((e=>e.id===t.id||e.name===t.name))}isWalletCompatibleWithCurrentChain(t){const e=q.R.state.activeChain;return!e||!t.chains||t.chains.some((t=>{const o=t.split(":")[0];return e===o}))}};K([(0,r.Cb)()],V.prototype,"tabIdx",void 0),K([(0,r.SB)()],V.prototype,"connectors",void 0),K([(0,r.SB)()],V.prototype,"loading",void 0),V=K([(0,c.Mo)("w3m-connect-recent-widget")],V);var F=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Y=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,n.j.isTelegram()&&n.j.isIos()&&(this.loading=!P.ConnectionController.state.wcUri,this.unsubscribe.push(P.ConnectionController.subscribeKey("wcUri",(t=>this.loading=!t))))}render(){const{connectors:t}=u.ConnectorController.state,{customWallets:e,featuredWalletIds:o}=l.OptionsController.state,r=s.M.getRecentWallets(),n=t.find((t=>"walletConnect"===t.id)),a=t.filter((t=>"INJECTED"===t.type||"ANNOUNCED"===t.type||"MULTI_CHAIN"===t.type)).filter((t=>"Browser Wallet"!==t.name));if(!n)return null;if(o||e||!this.wallets.length)return this.style.cssText="display: none",null;const c=a.length+r.length,h=Math.max(0,2-c),p=H.J.filterOutDuplicateWallets(this.wallets).slice(0,h);return p.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${p.map((t=>{var e;return i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(I.f.getWalletImage(t))}
              name=${null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=u.ConnectorController.getConnector(t.id,t.rdns);e?p.RouterController.push("ConnectingExternal",{connector:e}):p.RouterController.push("ConnectingWalletConnect",{wallet:t})}};F([(0,r.Cb)()],Y.prototype,"tabIdx",void 0),F([(0,r.Cb)()],Y.prototype,"wallets",void 0),F([(0,r.SB)()],Y.prototype,"loading",void 0),Y=F([(0,c.Mo)("w3m-connect-recommended-widget")],Y);var J=o(32751),X=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let G=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.connectorImages=J.W.state.connectorImages,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)),J.W.subscribeKey("connectorImages",(t=>this.connectorImages=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){var t,e;if(n.j.isMobile())return this.style.cssText="display: none",null;const o=this.connectors.find((t=>"walletConnect"===t.id));if(!o)return this.style.cssText="display: none",null;const r=o.imageUrl||this.connectorImages[null!==(t=null===o||void 0===o?void 0:o.imageId)&&void 0!==t?t:""];return i.dy`
      <wui-list-wallet
        imageSrc=${(0,d.o)(r)}
        name=${null!==(e=o.name)&&void 0!==e?e:"Unknown"}
        @click=${()=>this.onConnector(o)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,d.o)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){u.ConnectorController.setActiveConnector(t),p.RouterController.push("ConnectingWalletConnect")}};X([(0,r.Cb)()],G.prototype,"tabIdx",void 0),X([(0,r.SB)()],G.prototype,"connectors",void 0),X([(0,r.SB)()],G.prototype,"connectorImages",void 0),G=X([(0,c.Mo)("w3m-connect-walletconnect-widget")],G);const Z=i.iv`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Q=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let tt=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.recommended=a.ApiController.state.recommended,this.featured=a.ApiController.state.featured,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)),a.ApiController.subscribeKey("recommended",(t=>this.recommended=t)),a.ApiController.subscribeKey("featured",(t=>this.featured=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return i.dy`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:o,injected:r,multiChain:n,recommended:a,featured:l,external:s}=S.C.getConnectorsByType(this.connectors,this.recommended,this.featured);return S.C.getConnectorTypeOrder({custom:t,recent:e,announced:o,injected:r,multiChain:n,recommended:a,featured:l,external:s}).map((t=>{switch(t){case"injected":return i.dy`
            ${n.length?i.dy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,d.o)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${o.length?i.dy`<w3m-connect-announced-widget
                  tabIdx=${(0,d.o)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${r.length?i.dy`<w3m-connect-injected-widget
                  .connectors=${r}
                  tabIdx=${(0,d.o)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return i.dy`<w3m-connect-walletconnect-widget
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return i.dy`<w3m-connect-recent-widget
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return i.dy`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return i.dy`<w3m-connect-custom-widget
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return i.dy`<w3m-connect-external-widget
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return i.dy`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${t}`),null}}))}};tt.styles=Z,Q([(0,r.Cb)()],tt.prototype,"tabIdx",void 0),Q([(0,r.SB)()],tt.prototype,"connectors",void 0),Q([(0,r.SB)()],tt.prototype,"recommended",void 0),Q([(0,r.SB)()],tt.prototype,"featured",void 0),tt=Q([(0,c.Mo)("w3m-connector-list")],tt);var et=o(74860),ot=o(90891);const it=i.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var rt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let nt=class extends i.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((t,e)=>{var o;const r=e===this.activeTab;return i.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${r}
          data-testid="tab-${null===(o=t.label)||void 0===o?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(t){return t.icon?i.dy`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const o=this.buttons[this.activeTab],i=this.buttons[t],r=null===o||void 0===o?void 0:o.querySelector("wui-text"),n=null===i||void 0===i?void 0:i.querySelector("wui-text"),a=null===i||void 0===i?void 0:i.getBoundingClientRect(),l=null===n||void 0===n?void 0:n.getBoundingClientRect();o&&r&&!e&&t!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),o.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&n&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};nt.styles=[g.ET,g.ZM,it],rt([(0,r.Cb)({type:Array})],nt.prototype,"tabs",void 0),rt([(0,r.Cb)()],nt.prototype,"onTabChange",void 0),rt([(0,r.Cb)({type:Array})],nt.prototype,"buttons",void 0),rt([(0,r.Cb)({type:Boolean})],nt.prototype,"disabled",void 0),rt([(0,r.Cb)()],nt.prototype,"localTabWidth",void 0),rt([(0,r.SB)()],nt.prototype,"activeTab",void 0),rt([(0,r.SB)()],nt.prototype,"isDense",void 0),nt=rt([(0,w.M)("wui-tabs")],nt);var at=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let lt=class extends i.oi{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.generateTabs();return i.dy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map((t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=t.map((t=>{let{platform:e}=t;return e})),t}onTabChange(t){const e=this.platformTabs[t];var o;e&&(null===(o=this.onSelectPlatfrom)||void 0===o||o.call(this,e))}};at([(0,r.Cb)({type:Array})],lt.prototype,"platforms",void 0),at([(0,r.Cb)()],lt.prototype,"onSelectPlatfrom",void 0),lt=at([(0,c.Mo)("w3m-connecting-header")],lt);var st=o(86533);o(10216);const ct=i.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var dt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};const ut={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},ht={lg:"paragraph-600",md:"small-600"},pt={lg:"md",md:"md"};let gt=class extends i.oi{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){var t;this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=null!==(t=this.textVariant)&&void 0!==t?t:ht[this.size];return i.dy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=pt[this.size],e=this.disabled?ut.disabled:ut[this.variant];return i.dy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return i.dy``}};gt.styles=[g.ET,g.ZM,ct],dt([(0,r.Cb)()],gt.prototype,"size",void 0),dt([(0,r.Cb)({type:Boolean})],gt.prototype,"disabled",void 0),dt([(0,r.Cb)({type:Boolean})],gt.prototype,"fullWidth",void 0),dt([(0,r.Cb)({type:Boolean})],gt.prototype,"loading",void 0),dt([(0,r.Cb)()],gt.prototype,"variant",void 0),dt([(0,r.Cb)({type:Boolean})],gt.prototype,"hasIconLeft",void 0),dt([(0,r.Cb)({type:Boolean})],gt.prototype,"hasIconRight",void 0),dt([(0,r.Cb)()],gt.prototype,"borderRadius",void 0),dt([(0,r.Cb)()],gt.prototype,"textVariant",void 0),gt=dt([(0,w.M)("wui-button")],gt);o(75692);const wt=i.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var ft=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let bt=class extends i.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return i.dy`
      <button ?disabled=${this.disabled} tabindex=${(0,d.o)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};bt.styles=[g.ET,g.ZM,wt],ft([(0,r.Cb)()],bt.prototype,"tabIdx",void 0),ft([(0,r.Cb)({type:Boolean})],bt.prototype,"disabled",void 0),ft([(0,r.Cb)()],bt.prototype,"color",void 0),bt=ft([(0,w.M)("wui-link")],bt);const vt=i.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var mt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let yt=class extends i.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,o=116+e,r=245+e,n=360+1.75*e;return i.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${r}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};yt.styles=[g.ET,vt],mt([(0,r.Cb)({type:Number})],yt.prototype,"radius",void 0),yt=mt([(0,w.M)("wui-loading-thumbnail")],yt);o(43549);const xt=i.iv`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var Ct=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let $t=class extends i.oi{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return i.dy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?i.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};$t.styles=[g.ET,g.ZM,xt],Ct([(0,r.Cb)()],$t.prototype,"variant",void 0),Ct([(0,r.Cb)()],$t.prototype,"imageSrc",void 0),Ct([(0,r.Cb)({type:Boolean})],$t.prototype,"disabled",void 0),Ct([(0,r.Cb)()],$t.prototype,"icon",void 0),Ct([(0,r.Cb)()],$t.prototype,"size",void 0),Ct([(0,r.Cb)()],$t.prototype,"text",void 0),$t=Ct([(0,w.M)("wui-chip-button")],$t);const kt=i.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Rt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Et=class extends i.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return i.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Et.styles=[g.ET,g.ZM,kt],Rt([(0,r.Cb)({type:Boolean})],Et.prototype,"disabled",void 0),Rt([(0,r.Cb)()],Et.prototype,"label",void 0),Rt([(0,r.Cb)()],Et.prototype,"buttonLabel",void 0),Et=Rt([(0,w.M)("wui-cta-button")],Et);const It=i.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var St=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Tt=class extends i.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:o,chrome_store:r,homepage:a}=this.wallet,l=n.j.isMobile(),s=n.j.isIos(),d=n.j.isAndroid(),u=[e,o,a,r].filter(Boolean).length>1,h=c.Hg.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return u&&!l?i.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>p.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&a?i.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&s?i.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&d?i.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;null!==(t=this.wallet)&&void 0!==t&&t.app_store&&n.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;null!==(t=this.wallet)&&void 0!==t&&t.play_store&&n.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;null!==(t=this.wallet)&&void 0!==t&&t.homepage&&n.j.openHref(this.wallet.homepage,"_blank")}};Tt.styles=[It],St([(0,r.Cb)({type:Object})],Tt.prototype,"wallet",void 0),Tt=St([(0,c.Mo)("w3m-mobile-download-links")],Tt);const jt=i.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Pt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};class Bt extends i.oi{constructor(){var t,e,o,i,r,a,l,s;(super(),this.wallet=null===(t=p.RouterController.state.data)||void 0===t?void 0:t.wallet,this.connector=null===(e=p.RouterController.state.data)||void 0===e?void 0:e.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=null!==(o=I.f.getWalletImage(this.wallet))&&void 0!==o?o:I.f.getConnectorImage(this.connector),this.name=null!==(i=null!==(r=null===(a=this.wallet)||void 0===a?void 0:a.name)&&void 0!==r?r:null===(l=this.connector)||void 0===l?void 0:l.name)&&void 0!==i?i:"Wallet",this.isRetrying=!1,this.uri=P.ConnectionController.state.wcUri,this.error=P.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(P.ConnectionController.subscribeKey("wcUri",(t=>{var e;(this.uri=t,this.isRetrying&&this.onRetry)&&(this.isRetrying=!1,null===(e=this.onConnect)||void 0===e||e.call(this))})),P.ConnectionController.subscribeKey("wcError",(t=>this.error=t))),(n.j.isTelegram()||n.j.isSafari())&&n.j.isIos()&&P.ConnectionController.state.wcUri)&&(null===(s=this.onConnect)||void 0===s||s.call(this))}firstUpdated(){var t;null===(t=this.onAutoConnect)||void 0===t||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),P.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){var t;null===(t=this.onRender)||void 0===t||t.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let o=`Continue in ${this.name}`;return this.error&&(o="Connection declined"),i.dy`
      <wui-flex
        data-error=${(0,d.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,d.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${o}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?i.dy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?i.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){var t;this.showRetry=!0;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("wui-button");null===e||void 0===e||e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var t,e;(P.ConnectionController.setWcError(!1),this.onRetry)?(this.isRetrying=!0,null===(t=this.onRetry)||void 0===t||t.call(this)):null===(e=this.onConnect)||void 0===e||e.call(this)}loaderTemplate(){const t=st.ThemeController.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return i.dy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(n.j.copyToClopboard(this.uri),ot.SnackController.showSuccess("Link copied"))}catch{ot.SnackController.showError("Failed to copy")}}}Bt.styles=jt,Pt([(0,r.SB)()],Bt.prototype,"isRetrying",void 0),Pt([(0,r.SB)()],Bt.prototype,"uri",void 0),Pt([(0,r.SB)()],Bt.prototype,"error",void 0),Pt([(0,r.SB)()],Bt.prototype,"ready",void 0),Pt([(0,r.SB)()],Bt.prototype,"showRetry",void 0),Pt([(0,r.SB)()],Bt.prototype,"secondaryBtnLabel",void 0),Pt([(0,r.SB)()],Bt.prototype,"secondaryLabel",void 0),Pt([(0,r.SB)()],Bt.prototype,"isLoading",void 0),Pt([(0,r.Cb)({type:Boolean})],Bt.prototype,"isMobile",void 0),Pt([(0,r.Cb)()],Bt.prototype,"onRetry",void 0);var Ot=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let At=class extends Bt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),h.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{var t;this.error=!1;const{connectors:e}=u.ConnectorController.state,o=e.find((t=>{var e,o,i;return"ANNOUNCED"===t.type&&(null===(e=t.info)||void 0===e?void 0:e.rdns)===(null===(o=this.wallet)||void 0===o?void 0:o.rdns)||"INJECTED"===t.type||t.name===(null===(i=this.wallet)||void 0===i?void 0:i.name)}));if(!o)throw new Error("w3m-connecting-wc-browser: No connector found");await P.ConnectionController.connectExternal(o,o.chain),et.I.close(),h.X.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:(null===(t=this.wallet)||void 0===t?void 0:t.name)||"Unknown"}})}catch(o){var e;h.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(e=null===o||void 0===o?void 0:o.message)&&void 0!==e?e:"Unknown"}}),this.error=!0}}};At=Ot([(0,c.Mo)("w3m-connecting-wc-browser")],At);var Lt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Mt=class extends Bt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),h.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,null===(t=this.onConnect)||void 0===t||t.call(this))}onConnectProxy(){var t;if(null!==(t=this.wallet)&&void 0!==t&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:e}=this.wallet,{redirect:o,href:i}=n.j.formatNativeUrl(t,this.uri);P.ConnectionController.setWcLinking({name:e,href:i}),P.ConnectionController.setRecentWallet(this.wallet),n.j.openHref(o,"_blank")}catch{this.error=!0}}};Mt=Lt([(0,c.Mo)("w3m-connecting-wc-desktop")],Mt);var zt=o(89668),Wt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Dt=class extends Bt{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=l.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var t;if(null!==(t=this.wallet)&&void 0!==t&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,link_mode:e,name:o}=this.wallet,{redirect:i,redirectUniversalLink:r,href:a}=n.j.formatNativeUrl(t,this.uri,e);this.redirectDeeplink=i,this.redirectUniversalLink=r,this.target=n.j.isIframe()?"_top":"_self",P.ConnectionController.setWcLinking({name:o,href:a}),P.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?n.j.openHref(this.redirectUniversalLink,this.target):n.j.openHref(this.redirectDeeplink,this.target)}catch(he){h.X.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:he instanceof Error?he.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=zt.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(P.ConnectionController.subscribeKey("wcUri",(()=>{this.onHandleURI()}))),h.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var t;(this.isLoading=!this.uri,!this.ready&&this.uri)&&(this.ready=!0,null===(t=this.onConnect)||void 0===t||t.call(this))}onTryAgain(){var t;P.ConnectionController.setWcError(!1),null===(t=this.onConnect)||void 0===t||t.call(this)}};Wt([(0,r.SB)()],Dt.prototype,"redirectDeeplink",void 0),Wt([(0,r.SB)()],Dt.prototype,"redirectUniversalLink",void 0),Wt([(0,r.SB)()],Dt.prototype,"target",void 0),Wt([(0,r.SB)()],Dt.prototype,"preferUniversalLinks",void 0),Wt([(0,r.SB)()],Dt.prototype,"isLoading",void 0),Dt=Wt([(0,c.Mo)("w3m-connecting-wc-mobile")],Dt);var Nt=o(20741);function Ut(t,e,o){if(t===e)return!1;return(t-e<0?e-t:t-e)<=o+.1}const _t={generate(t){let{uri:e,size:o,logoSize:r,dotColor:n="#141414"}=t;const a=[],l=function(t,e){const o=Array.prototype.slice.call(Nt.create(t,{errorCorrectionLevel:e}).modules.data,0),i=Math.sqrt(o.length);return o.reduce(((t,e,o)=>(o%i===0?t.push([e]):t[t.length-1].push(e))&&t),[])}(e,"Q"),s=o/l.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach((t=>{let{x:e,y:o}=t;const r=(l.length-7)*s*e,d=(l.length-7)*s*o,u=.45;for(let l=0;l<c.length;l+=1){const t=s*(7-2*l);a.push(i.YP`
            <rect
              fill=${2===l?n:"transparent"}
              width=${0===l?t-5:t}
              rx= ${0===l?(t-5)*u:t*u}
              ry= ${0===l?(t-5)*u:t*u}
              stroke=${n}
              stroke-width=${0===l?5:0}
              height=${0===l?t-5:t}
              x= ${0===l?d+s*l+2.5:d+s*l}
              y= ${0===l?r+s*l+2.5:r+s*l}
            />
          `)}}));const d=Math.floor((r+25)/s),u=l.length/2-d/2,h=l.length/2+d/2-1,p=[];l.forEach(((t,e)=>{t.forEach(((t,o)=>{if(l[e][o]&&!(e<7&&o<7||e>l.length-8&&o<7||e<7&&o>l.length-8)&&!(e>u&&e<h&&o>u&&o<h)){const t=e*s+s/2,i=o*s+s/2;p.push([t,i])}}))}));const g={};return p.forEach((t=>{let[e,o]=t;var i;g[e]?null===(i=g[e])||void 0===i||i.push(o):g[e]=[o]})),Object.entries(g).map((t=>{let[e,o]=t;const i=o.filter((t=>o.every((e=>!Ut(t,e,s)))));return[Number(e),i]})).forEach((t=>{let[e,o]=t;o.forEach((t=>{a.push(i.YP`<circle cx=${e} cy=${t} fill=${n} r=${s/2.5} />`)}))})),Object.entries(g).filter((t=>{let[e,o]=t;return o.length>1})).map((t=>{let[e,o]=t;const i=o.filter((t=>o.some((e=>Ut(t,e,s)))));return[Number(e),i]})).map((t=>{let[e,o]=t;o.sort(((t,e)=>t<e?-1:1));const i=[];for(const r of o){const t=i.find((t=>t.some((t=>Ut(r,t,s)))));t?t.push(r):i.push([r])}return[e,i.map((t=>[t[0],t[t.length-1]]))]})).forEach((t=>{let[e,o]=t;o.forEach((t=>{let[o,r]=t;a.push(i.YP`
              <line
                x1=${e}
                x2=${e}
                y1=${o}
                y2=${r}
                stroke=${n}
                stroke-width=${s/1.25}
                stroke-linecap="round"
              />
            `)}))})),a}},qt=i.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Ht=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Kt=class extends i.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){var t;return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${null!==(t=this.color)&&void 0!==t?t:"#3396ff"}\n    `,i.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return i.YP`
      <svg height=${t} width=${t}>
        ${_t.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){var t;return this.imageSrc?i.dy`<wui-image src=${this.imageSrc} alt=${null!==(t=this.alt)&&void 0!==t?t:"logo"}></wui-image>`:this.farcaster?i.dy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:i.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Kt.styles=[g.ET,qt],Ht([(0,r.Cb)()],Kt.prototype,"uri",void 0),Ht([(0,r.Cb)({type:Number})],Kt.prototype,"size",void 0),Ht([(0,r.Cb)()],Kt.prototype,"theme",void 0),Ht([(0,r.Cb)()],Kt.prototype,"imageSrc",void 0),Ht([(0,r.Cb)()],Kt.prototype,"alt",void 0),Ht([(0,r.Cb)()],Kt.prototype,"color",void 0),Ht([(0,r.Cb)({type:Boolean})],Kt.prototype,"arenaClear",void 0),Ht([(0,r.Cb)({type:Boolean})],Kt.prototype,"farcaster",void 0),Kt=Ht([(0,w.M)("wui-qr-code")],Kt);const Vt=i.iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Ft=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Yt=class extends i.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,i.dy`<slot></slot>`}};Yt.styles=[Vt],Ft([(0,r.Cb)()],Yt.prototype,"width",void 0),Ft([(0,r.Cb)()],Yt.prototype,"height",void 0),Ft([(0,r.Cb)()],Yt.prototype,"borderRadius",void 0),Ft([(0,r.Cb)()],Yt.prototype,"variant",void 0),Yt=Ft([(0,w.M)("wui-shimmer")],Yt);const Jt=i.iv`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;var Xt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Gt=class extends i.oi{render(){return i.dy`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};Gt.styles=[g.ET,g.ZM,Jt],Gt=Xt([(0,w.M)("wui-ux-by-reown")],Gt);const Zt=i.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var Qt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let te=class extends Bt{constructor(){var t,e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),h.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:null!==(t=null===(e=this.wallet)||void 0===e?void 0:e.name)&&void 0!==t?t:"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.unsubscribe)||void 0===t||t.forEach((t=>t())),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return P.ConnectionController.setWcLinking(void 0),P.ConnectionController.setRecentWallet(this.wallet),i.dy` <wui-qr-code
      size=${t}
      theme=${st.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,d.o)(I.f.getWalletImage(this.wallet))}
      color=${(0,d.o)(st.ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,d.o)(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return i.dy`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};te.styles=Zt,te=Qt([(0,c.Mo)("w3m-connecting-wc-qrcode")],te);var ee=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let oe=class extends i.oi{constructor(){var t;if(super(),this.wallet=null===(t=p.RouterController.state.data)||void 0===t?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");h.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,d.o)(I.f.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};oe=ee([(0,c.Mo)("w3m-connecting-wc-unsupported")],oe);var ie=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let re=class extends Bt{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=zt.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(P.ConnectionController.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),h.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if(null!==(t=this.wallet)&&void 0!==t&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:e}=this.wallet,{redirect:o,href:i}=n.j.formatUniversalUrl(t,this.uri);P.ConnectionController.setWcLinking({name:e,href:i}),P.ConnectionController.setRecentWallet(this.wallet),n.j.openHref(o,"_blank")}catch{this.error=!0}}};ie([(0,r.SB)()],re.prototype,"isLoading",void 0),re=ie([(0,c.Mo)("w3m-connecting-wc-web")],re);var ne=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ae=class extends i.oi{constructor(){var t;super(),this.wallet=null===(t=p.RouterController.state.data)||void 0===t?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(l.OptionsController.state.siwx),this.remoteFeatures=l.OptionsController.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(l.OptionsController.subscribeKey("remoteFeatures",(t=>this.remoteFeatures=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return i.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return null!==(t=this.remoteFeatures)&&void 0!==t&&t.reownBranding?i.dy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("browser"!==this.platform&&(!l.OptionsController.state.manualWCControl||t))try{const{wcPairingExpiry:e,status:o}=P.ConnectionController.state;(t||l.OptionsController.state.enableEmbedded||n.j.isPairingExpired(e)||"connecting"===o)&&(await P.ConnectionController.connectWalletConnect(),this.isSiwxEnabled||et.I.close())}catch(i){var e,o;h.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(e=null===i||void 0===i?void 0:i.message)&&void 0!==e?e:"Unknown"}}),P.ConnectionController.setWcError(!0),ot.SnackController.showError(null!==(o=i.message)&&void 0!==o?o:"Connection error"),P.ConnectionController.resetWcConnection(),p.RouterController.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:o,injected:i,rdns:r}=this.wallet,a=null===i||void 0===i?void 0:i.map((t=>{let{injected_id:e}=t;return e})).filter(Boolean),s=[...r?[r]:null!==a&&void 0!==a?a:[]],c=!l.OptionsController.state.isUniversalProvider&&s.length,d=t,u=o,h=P.ConnectionController.checkInstalled(s),p=c&&h,g=e&&!n.j.isMobile();p&&!q.R.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(n.j.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),g&&this.platforms.push("desktop"),p||!c||q.R.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return i.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return i.dy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return i.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return i.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return i.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return i.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?i.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var e;const o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("div");o&&(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ne([(0,r.SB)()],ae.prototype,"platform",void 0),ne([(0,r.SB)()],ae.prototype,"platforms",void 0),ne([(0,r.SB)()],ae.prototype,"isSiwxEnabled",void 0),ne([(0,r.SB)()],ae.prototype,"remoteFeatures",void 0),ae=ne([(0,c.Mo)("w3m-connecting-wc-view")],ae);var le=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let se=class extends i.oi{constructor(){super(...arguments),this.isMobile=n.j.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=a.ApiController.state,{customWallets:o}=l.OptionsController.state,r=s.M.getRecentWallets(),n=t.length||e.length||(null===o||void 0===o?void 0:o.length)||r.length;return i.dy`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${n?i.dy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return i.dy`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};le([(0,r.SB)()],se.prototype,"isMobile",void 0),se=le([(0,c.Mo)("w3m-connecting-wc-basic-view")],se);var ce=o(48556),de=o(86098),ue=o(58516);const he=()=>new pe;class pe{}const ge=new WeakMap,we=(0,ue.XM)(class extends de.sR{render(t){return ce.Ld}update(t,e){var o;let[i]=e;const r=i!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=i,this.ht=null===(o=t.options)||void 0===o?void 0:o.host,this.rt(this.ct=t.element)),ce.Ld}rt(t){if(void 0!==this.G)if(this.isConnected||(t=void 0),"function"==typeof this.G){var e;const o=null!==(e=this.ht)&&void 0!==e?e:globalThis;let i=ge.get(o);void 0===i&&(i=new WeakMap,ge.set(o,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e,o;return"function"==typeof this.G?null===(t=ge.get(null!==(e=this.ht)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.G):null===(o=this.G)||void 0===o?void 0:o.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),fe=i.iv`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var be=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ve=class extends i.oi{constructor(){super(...arguments),this.inputElementRef=he(),this.checked=void 0}render(){return i.dy`
      <label>
        <input
          ${we(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,d.o)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:null===(t=this.inputElementRef.value)||void 0===t?void 0:t.checked,bubbles:!0,composed:!0}))}};ve.styles=[g.ET,g.ZM,g.Bp,fe],be([(0,r.Cb)({type:Boolean})],ve.prototype,"checked",void 0),ve=be([(0,w.M)("wui-switch")],ve);const me=i.iv`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var ye=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let xe=class extends i.oi{constructor(){super(...arguments),this.checked=void 0}render(){return i.dy`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,d.o)(this.checked)}></wui-switch>
      </button>
    `}};xe.styles=[g.ET,g.ZM,me],ye([(0,r.Cb)({type:Boolean})],xe.prototype,"checked",void 0),xe=ye([(0,w.M)("wui-certified-switch")],xe);const Ce=i.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var $e=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ke=class extends i.oi{constructor(){super(...arguments),this.icon="copy"}render(){return i.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ke.styles=[g.ET,g.ZM,Ce],$e([(0,r.Cb)()],ke.prototype,"icon",void 0),ke=$e([(0,w.M)("wui-input-element")],ke);var Re=o(57346);const Ee=i.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Ie=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Se=class extends i.oi{constructor(){super(...arguments),this.inputElementRef=he(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:Boolean(this.inputRightPadding)};return i.dy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${we(this.inputElementRef)}
        class=${(0,Re.$)(e)}
        type=${this.type}
        enterkeyhint=${(0,d.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,d.o)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?i.dy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:null===(t=this.inputElementRef.value)||void 0===t?void 0:t.value,bubbles:!0,composed:!0}))}};Se.styles=[g.ET,g.ZM,Ee],Ie([(0,r.Cb)()],Se.prototype,"size",void 0),Ie([(0,r.Cb)()],Se.prototype,"icon",void 0),Ie([(0,r.Cb)({type:Boolean})],Se.prototype,"disabled",void 0),Ie([(0,r.Cb)()],Se.prototype,"placeholder",void 0),Ie([(0,r.Cb)()],Se.prototype,"type",void 0),Ie([(0,r.Cb)()],Se.prototype,"keyHint",void 0),Ie([(0,r.Cb)()],Se.prototype,"value",void 0),Ie([(0,r.Cb)()],Se.prototype,"inputRightPadding",void 0),Ie([(0,r.Cb)()],Se.prototype,"tabIdx",void 0),Se=Ie([(0,w.M)("wui-input-text")],Se);const Te=i.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var je=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Pe=class extends i.oi{constructor(){super(...arguments),this.inputComponentRef=he()}render(){return i.dy`
      <wui-input-text
        ${we(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,e=null===t||void 0===t?void 0:t.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};Pe.styles=[g.ET,Te],Pe=je([(0,w.M)("wui-search-bar")],Pe);const Be=i.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Oe=i.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Ae=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Le=class extends i.oi{constructor(){super(...arguments),this.type="wallet"}render(){return i.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?i.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Be}`:i.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Le.styles=[g.ET,g.ZM,Oe],Ae([(0,r.Cb)()],Le.prototype,"type",void 0),Le=Ae([(0,w.M)("wui-card-select-loader")],Le);var Me=o(56409);const ze=i.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var We=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let De=class extends i.oi{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Me.H.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Me.H.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Me.H.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Me.H.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Me.H.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Me.H.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Me.H.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Me.H.getSpacingStyles(this.margin,3)};\n    `,i.dy`<slot></slot>`}};De.styles=[g.ET,ze],We([(0,r.Cb)()],De.prototype,"gridTemplateRows",void 0),We([(0,r.Cb)()],De.prototype,"gridTemplateColumns",void 0),We([(0,r.Cb)()],De.prototype,"justifyItems",void 0),We([(0,r.Cb)()],De.prototype,"alignItems",void 0),We([(0,r.Cb)()],De.prototype,"justifyContent",void 0),We([(0,r.Cb)()],De.prototype,"alignContent",void 0),We([(0,r.Cb)()],De.prototype,"columnGap",void 0),We([(0,r.Cb)()],De.prototype,"rowGap",void 0),We([(0,r.Cb)()],De.prototype,"gap",void 0),We([(0,r.Cb)()],De.prototype,"padding",void 0),We([(0,r.Cb)()],De.prototype,"margin",void 0),De=We([(0,w.M)("wui-grid")],De);const Ne=i.iv`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Ue=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let _e=class extends i.oi{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t,e;const o="certified"===(null===(t=this.wallet)||void 0===t?void 0:t.badge_type);return i.dy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,d.o)(o?"certified":void 0)}
            >${null===(e=this.wallet)||void 0===e?void 0:e.name}</wui-text
          >
          ${o?i.dy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,e;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():i.dy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,d.o)(this.imageSrc)}
        name=${null===(t=this.wallet)||void 0===t?void 0:t.name}
        .installed=${null===(e=this.wallet)||void 0===e?void 0:e.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return i.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=I.f.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await I.f.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};_e.styles=Ne,Ue([(0,r.SB)()],_e.prototype,"visible",void 0),Ue([(0,r.SB)()],_e.prototype,"imageSrc",void 0),Ue([(0,r.SB)()],_e.prototype,"imageLoading",void 0),Ue([(0,r.Cb)()],_e.prototype,"wallet",void 0),_e=Ue([(0,c.Mo)("w3m-all-wallets-list-item")],_e);const qe=i.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var He=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};const Ke="local-paginator";let Ve=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!a.ApiController.state.wallets.length,this.wallets=a.ApiController.state.wallets,this.recommended=a.ApiController.state.recommended,this.featured=a.ApiController.state.featured,this.filteredWallets=a.ApiController.state.filteredWallets,this.unsubscribe.push(a.ApiController.subscribeKey("wallets",(t=>this.wallets=t)),a.ApiController.subscribeKey("recommended",(t=>this.recommended=t)),a.ApiController.subscribeKey("featured",(t=>this.featured=t)),a.ApiController.subscribeKey("filteredWallets",(t=>this.filteredWallets=t)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach((t=>t())),null===(t=this.paginationObserver)||void 0===t||t.disconnect()}render(){return i.dy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;this.loading=!0;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("wui-grid");e&&(await a.ApiController.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map((()=>i.dy`
        <wui-card-select-loader type="wallet" id=${(0,d.o)(e)}></wui-card-select-loader>
      `))}walletsTemplate(){var t;const e=(null===(t=this.filteredWallets)||void 0===t?void 0:t.length)>0?n.j.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):n.j.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return H.J.markWalletsAsInstalled(e).map((t=>i.dy`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:o,count:i}=a.ApiController.state,r=window.innerWidth<352?3:4,n=t.length+e.length;let l=Math.ceil(n/r)*r-n+r;return l-=t.length?o.length%r:0,0===i&&o.length>0?null:0===i||[...o,...t,...e].length<i?this.shimmerTemplate(l,Ke):null}createPaginationObserver(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`#${Ke}`);e&&(this.paginationObserver=new IntersectionObserver((t=>{let[e]=t;if(null!==e&&void 0!==e&&e.isIntersecting&&!this.loading){const{page:t,count:e,wallets:o}=a.ApiController.state;o.length<e&&a.ApiController.fetchWalletsByPage({page:t+1})}})),this.paginationObserver.observe(e))}onConnectWallet(t){u.ConnectorController.selectWalletConnector(t)}};Ve.styles=qe,He([(0,r.SB)()],Ve.prototype,"loading",void 0),He([(0,r.SB)()],Ve.prototype,"wallets",void 0),He([(0,r.SB)()],Ve.prototype,"recommended",void 0),He([(0,r.SB)()],Ve.prototype,"featured",void 0),He([(0,r.SB)()],Ve.prototype,"filteredWallets",void 0),Ve=He([(0,c.Mo)("w3m-all-wallets-list")],Ve);const Fe=i.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ye=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Je=class extends i.oi{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?i.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await a.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=a.ApiController.state,e=H.J.markWalletsAsInstalled(t);return t.length?i.dy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map((t=>i.dy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(t)}
              .wallet=${t}
              data-testid="wallet-search-item-${t.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:i.dy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){u.ConnectorController.selectWalletConnector(t)}};Je.styles=Fe,Ye([(0,r.SB)()],Je.prototype,"loading",void 0),Ye([(0,r.Cb)()],Je.prototype,"query",void 0),Ye([(0,r.Cb)()],Je.prototype,"badge",void 0),Je=Ye([(0,c.Mo)("w3m-all-wallets-search")],Je);var Xe=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Ge=class extends i.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=n.j.debounce((t=>{this.search=t}))}render(){const t=this.search.length>=2;return i.dy`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?i.dy`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,d.o)(this.badge)}
          ></w3m-all-wallets-search>`:i.dy`<w3m-all-wallets-list badge=${(0,d.o)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",ot.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return n.j.isMobile()?i.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){p.RouterController.push("ConnectingWalletConnect")}};Xe([(0,r.SB)()],Ge.prototype,"search",void 0),Xe([(0,r.SB)()],Ge.prototype,"badge",void 0),Ge=Xe([(0,c.Mo)("w3m-all-wallets-view")],Ge);const Ze=i.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Qe=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let to=class extends i.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return i.dy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,d.o)(this.iconVariant)}
        tabindex=${(0,d.o)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){var t;if("image"===this.variant&&this.imageSrc)return i.dy`<wui-image src=${this.imageSrc} alt=${null!==(t=this.alt)&&void 0!==t?t:"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return i.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",o=this.iconSize?this.iconSize:e;return i.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${o}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?i.dy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:i.dy``}chevronTemplate(){return this.chevron?i.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};to.styles=[g.ET,g.ZM,Ze],Qe([(0,r.Cb)()],to.prototype,"icon",void 0),Qe([(0,r.Cb)()],to.prototype,"iconSize",void 0),Qe([(0,r.Cb)()],to.prototype,"tabIdx",void 0),Qe([(0,r.Cb)()],to.prototype,"variant",void 0),Qe([(0,r.Cb)()],to.prototype,"iconVariant",void 0),Qe([(0,r.Cb)({type:Boolean})],to.prototype,"disabled",void 0),Qe([(0,r.Cb)()],to.prototype,"imageSrc",void 0),Qe([(0,r.Cb)()],to.prototype,"alt",void 0),Qe([(0,r.Cb)({type:Boolean})],to.prototype,"chevron",void 0),Qe([(0,r.Cb)({type:Boolean})],to.prototype,"loading",void 0),to=Qe([(0,w.M)("wui-list-item")],to);var eo=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let oo=class extends i.oi{constructor(){var t;super(...arguments),this.wallet=null===(t=p.RouterController.state.data)||void 0===t?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return i.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return null!==(t=this.wallet)&&void 0!==t&&t.chrome_store?i.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return null!==(t=this.wallet)&&void 0!==t&&t.app_store?i.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return null!==(t=this.wallet)&&void 0!==t&&t.play_store?i.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return null!==(t=this.wallet)&&void 0!==t&&t.homepage?i.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;null!==(t=this.wallet)&&void 0!==t&&t.chrome_store&&n.j.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;null!==(t=this.wallet)&&void 0!==t&&t.app_store&&n.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;null!==(t=this.wallet)&&void 0!==t&&t.play_store&&n.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;null!==(t=this.wallet)&&void 0!==t&&t.homepage&&n.j.openHref(this.wallet.homepage,"_blank")}};oo=eo([(0,c.Mo)("w3m-downloads-view")],oo)}}]);
//# sourceMappingURL=3809.7733a43a.chunk.js.map