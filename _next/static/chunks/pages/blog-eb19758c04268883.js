(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4637:function(t){var n,e,s,i,r,o,a,u,l,c,d,h,f,_,g,v,$,m,y,p,M;t.exports=(n="millisecond",e="second",s="minute",i="hour",r="week",o="month",a="quarter",u="year",l="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,n,e){var s=String(t);return!s||s.length>=n?t:""+Array(n+1-s.length).join(e)+t},(g={})[_="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],e=t%100;return"["+t+(n[(e-20)%10]||n[e]||"th")+"]"}},v=function(t){return t instanceof p},$=function t(n,e,s){var i;if(!n)return _;if("string"==typeof n){var r=n.toLowerCase();g[r]&&(i=r),e&&(g[r]=e,i=r);var o=n.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=n.name;g[a]=n,i=a}return!s&&i&&(_=i),i||!s&&_},m=function(t,n){if(v(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new p(e)},(y={s:f,z:function(t){var n=-t.utcOffset(),e=Math.abs(n);return(n<=0?"+":"-")+f(Math.floor(e/60),2,"0")+":"+f(e%60,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var s=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(s,o),r=e-i<0,a=n.clone().add(s+(r?-1:1),o);return+(-(s+(e-i)/(r?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:o,y:u,w:r,d:"day",D:l,h:i,m:s,s:e,ms:n,Q:a})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=$,y.i=v,y.w=function(t,n){return m(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})},M=(p=function(){function t(t){this.$L=$(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(y.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var s=n.match(d);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return e?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(t,n){var e=m(t);return this.startOf(n)<=e&&e<=this.endOf(n)},f.isAfter=function(t,n){return m(t)<this.startOf(n)},f.isBefore=function(t,n){return this.endOf(n)<m(t)},f.$g=function(t,n,e){return y.u(t)?this[n]:this.set(e,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,n){var a=this,c=!!y.u(n)||n,d=y.p(t),h=function(t,n){var e=y.w(a.$u?Date.UTC(a.$y,n,t):new Date(a.$y,n,t),a);return c?e:e.endOf("day")},f=function(t,n){return y.w(a.toDate()[t].apply(a.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(n)),a)},_=this.$W,g=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case u:return c?h(1,0):h(31,11);case o:return c?h(1,g):h(0,g+1);case r:var m=this.$locale().weekStart||0,p=(_<m?_+7:_)-m;return h(c?v-p:v+(6-p),g);case"day":case l:return f($+"Hours",0);case i:return f($+"Minutes",1);case s:return f($+"Seconds",2);case e:return f($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,r){var a,c=y.p(t),d="set"+(this.$u?"UTC":""),h=((a={}).day=d+"Date",a[l]=d+"Date",a[o]=d+"Month",a[u]=d+"FullYear",a[i]=d+"Hours",a[s]=d+"Minutes",a[e]=d+"Seconds",a[n]=d+"Milliseconds",a)[c],f="day"===c?this.$D+(r-this.$W):r;if(c===o||c===u){var _=this.clone().set(l,1);_.$d[h](f),_.init(),this.$d=_.set(l,Math.min(this.$D,_.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(t,n){return this.clone().$set(t,n)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,n){var a,l=this;t=Number(t);var c=y.p(n),d=function(n){var e=m(l);return y.w(e.date(e.date()+Math.round(n*t)),l)};if(c===o)return this.set(o,this.$M+t);if(c===u)return this.set(u,this.$y+t);if("day"===c)return d(1);if(c===r)return d(7);var h=((a={})[s]=6e4,a[i]=36e5,a[e]=1e3,a)[c]||1,f=this.$d.getTime()+t*h;return y.w(f,this)},f.subtract=function(t,n){return this.add(-1*t,n)},f.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||c;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),r=this.$H,o=this.$m,a=this.$M,u=e.weekdays,l=e.months,d=function(t,e,i,r){return t&&(t[e]||t(n,s))||i[e].slice(0,r)},f=function(t){return y.s(r%12||12,t,"0")},_=e.meridiem||function(t,n,e){var s=t<12?"AM":"PM";return e?s.toLowerCase():s},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:y.s(a+1,2,"0"),MMM:d(e.monthsShort,a,l,3),MMMM:d(l,a),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:d(e.weekdaysMin,this.$W,u,2),ddd:d(e.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:y.s(r,2,"0"),h:f(1),hh:f(2),a:_(r,o,!0),A:_(r,o,!1),m:String(o),mm:y.s(o,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return s.replace(h,function(t,n){return n||g[t]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,n,l){var c,d=y.p(n),h=m(t),f=(h.utcOffset()-this.utcOffset())*6e4,_=this-h,g=y.m(this,h);return g=((c={})[u]=g/12,c[o]=g,c[a]=g/3,c[r]=(_-f)/6048e5,c.day=(_-f)/864e5,c[i]=_/36e5,c[s]=_/6e4,c[e]=_/1e3,c)[d]||_,l?g:y.a(g)},f.daysInMonth=function(){return this.endOf(o).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),s=$(t,n,!0);return s&&(e.$L=s),e},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,m.prototype=M,[["$ms",n],["$s",e],["$m",s],["$H",i],["$W","day"],["$M",o],["$y",u],["$D",l]].forEach(function(t){M[t[1]]=function(n){return this.$g(n,t[0],t[1])}}),m.extend=function(t,n){return t.$i||(t(n,p,m),t.$i=!0),m},m.locale=$,m.isDayjs=v,m.unix=function(t){return m(1e3*t)},m.en=g[_],m.Ls=g,m.p={},m)},5242:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e(1723)}])},1723:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return y},default:function(){return p}});var s=e(1527),i=e(8925),r=e.n(i),o=e(5754),a=e(959),u=e(4637),l=e.n(u),c=e(7012),d=e.n(c),h=e(6751),f=e.n(h),_=e(6114),g=e(7739),v=e.n(g),$=function(t){var n,e=(0,o._)((0,a.useState)(null==t?void 0:t.blogs),1)[0];return(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.length)?(0,s.jsx)("div",{className:v().listBlog,children:e.data.map(function(t){var n,e,i,r,o,a,u,c;return(0,s.jsx)("div",{className:v().blogItem,children:(0,s.jsxs)(f(),{href:"/blog/".concat(t.fields.slug,"-").concat(t.sys.id),children:[(0,s.jsx)("div",{className:v().img,children:(null==t?void 0:null===(n=t.fields)||void 0===n?void 0:null===(e=n.thumbnail)||void 0===e?void 0:null===(i=e.fields)||void 0===i?void 0:null===(r=i.file)||void 0===r?void 0:r.url)&&(0,s.jsx)(d(),{src:"https:"+(null==t?void 0:null===(o=t.fields)||void 0===o?void 0:null===(a=o.thumbnail)||void 0===a?void 0:null===(u=a.fields)||void 0===u?void 0:null===(c=u.file)||void 0===c?void 0:c.url),alt:"",fill:!0,className:"object-contain"})}),(0,s.jsxs)("div",{className:v().content,children:[(0,s.jsx)("h2",{children:t.fields.title}),(0,s.jsxs)("p",{className:v().date,children:["Date: ",l()(t.fields.publishedDate).format("DD MMM YYYY")]}),(0,s.jsx)(_.Z,{tags:t.metadata.tags})]})]})},t.fields.slug)})}):(0,s.jsx)(s.Fragment,{})},m=e(5845),y=!0,p=function(t){var n=t.blogs;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"Blogs"})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)($,{blogs:n})})]})}},6114:function(t,n,e){"use strict";var s=e(1527);e(959);var i=e(7739),r=e.n(i);n.Z=function(t){var n=t.tags;return(0,s.jsx)("div",{className:r().tags,children:null==n?void 0:n.map(function(t,n){var e,i;return(0,s.jsx)("div",{className:"blogTag ".concat(r().tagItem," ").concat(r()[null==t?void 0:null===(e=t.sys)||void 0===e?void 0:e.id]),children:null==t?void 0:null===(i=t.sys)||void 0===i?void 0:i.id},n)})})}},5845:function(t,n,e){"use strict";var s=e(1527);e(959);var i=e(7657),r=e.n(i);n.Z=function(t){var n=t.children;return(0,s.jsx)("div",{className:r().containerBlog,children:n})}},7739:function(t){t.exports={tags:"Blogs_tags__XOvZF",tagItem:"Blogs_tagItem__rX9ml",javascript:"Blogs_javascript__z0_nP",css:"Blogs_css__t9ad1",html:"Blogs_html__xwsyR",docker:"Blogs_docker__y6b_x",git:"Blogs_git__HD2Gk",nginx:"Blogs_nginx__LgvVF",tips:"Blogs_tips__tHjed",nodejs:"Blogs_nodejs___i6_5",reactjs:"Blogs_reactjs__6CwUT",scss:"Blogs_scss__sRGWo",typescript:"Blogs_typescript__2Ftnl",vitejs:"Blogs_vitejs__N3Fns",webpack:"Blogs_webpack__ObgEX",solidjs:"Blogs_solidjs__lUmX6",sveltejs:"Blogs_sveltejs__GtKtV",vuejs:"Blogs_vuejs__AQTOa",nextjs:"Blogs_nextjs__LamCS",listBlog:"Blogs_listBlog__Ic96o",blogItem:"Blogs_blogItem__kHf8X",img:"Blogs_img__DD5vn",content:"Blogs_content__VBFNb",date:"Blogs_date___u7rR"}},7657:function(t){t.exports={containerBlog:"LayoutBlog_containerBlog__MGhjT"}}},function(t){t.O(0,[12,774,888,179],function(){return t(t.s=5242)}),_N_E=t.O()}]);