"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{227:function(r,e,n){n.r(e);var t=n(861),a=n(439),c=n(757),u=n.n(c),o=n(791),s=n(689),i=n(126),p=n(713),f=n(184);e.default=function(){var r=(0,s.TH)(),e=(0,o.useState)(""),n=(0,a.Z)(e,2),c=n[0],h=n[1],l=(0,o.useState)([]),v=(0,a.Z)(l,2),d=v[0],m=v[1],w=(0,o.useCallback)(function(){var e=(0,t.Z)(u().mark((function e(n){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.vw)(n);case 2:t=e.sent,m(t),(a=new URLSearchParams(r.search)).set("query",n),window.history.pushState({},"","".concat(window.location.pathname,"?").concat(a.toString()));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[r.search]);(0,o.useEffect)((function(){var e=new URLSearchParams(r.search).get("query")||"";h(e),e&&w(e)}),[r.search,w]);return(0,f.jsxs)("div",{children:[(0,f.jsx)("input",{type:"text",value:c,onChange:function(r){return h(r.target.value)},onKeyPress:function(r){"Enter"===r.key&&w(c)}}),(0,f.jsx)("button",{onClick:function(){return w(c)},children:"Search"}),d.length>0&&(0,f.jsx)(i.Z,{movies:d})]})}},713:function(r,e,n){n.d(e,{Hx:function(){return h},Y5:function(){return f},uV:function(){return l},vw:function(){return i},wr:function(){return p}});var t=n(861),a=n(757),c=n.n(a),u="https://api.themoviedb.org/3/",o=function(){return{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4ZmNlODBkNWY2YWRhNDI2MmIyY2Q0OTQwNTY1MiIsInN1YiI6IjY1NDIzNzExMWFjMjkyMDBlMTE4NGQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z31pb3WMAG3QsgPH8x9AM27sCQZfGvUnbyhPmGdRJT0")}},s=function(r){if(!r.ok)throw new Error("the network response was not valid");return r.json()},i=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={method:"GET",headers:o()},r.prev=1,r.next=4,fetch("".concat(u,"search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),n);case 4:return t=r.sent,r.abrupt("return",s(t).then((function(r){return r.results})));case 8:return r.prev=8,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(c().mark((function r(){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={method:"GET",headers:o()},r.prev=1,r.next=4,fetch("".concat(u,"trending/all/day?language=en-US"),e);case 4:return n=r.sent,r.abrupt("return",s(n));case 8:return r.prev=8,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",null);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={method:"GET",headers:o()},r.prev=1,r.next=4,fetch("".concat(u,"movie/").concat(e,"?language=en-US"),n);case 4:return t=r.sent,r.abrupt("return",s(t));case 8:return r.prev=8,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{});case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={method:"GET",headers:o()},r.prev=1,r.next=4,fetch("".concat(u,"movie/").concat(e,"/reviews?language=en-US&page=1"),n);case 4:return t=r.sent,r.abrupt("return",s(t));case 8:return r.prev=8,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{});case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={method:"GET",headers:o()},r.prev=1,r.next=4,fetch("".concat(u,"movie/").concat(e,"/credits?language=en-US"),n);case 4:return t=r.sent,r.abrupt("return",s(t));case 8:return r.prev=8,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{});case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()},126:function(r,e,n){n(791);var t=n(689),a=n(87),c=n(184);e.Z=function(r){var e=r.movies,n=(0,t.TH)();return(0,c.jsx)("ul",{children:e.map((function(r){return(0,c.jsx)(a.rU,{to:"/movies/".concat(r.id),state:{from:n.pathname},style:{display:"block",marginBottom:20},children:r.title||r.name},r.id)}))})}},861:function(r,e,n){function t(r,e,n,t,a,c,u){try{var o=r[c](u),s=o.value}catch(i){return void n(i)}o.done?e(s):Promise.resolve(s).then(t,a)}function a(r){return function(){var e=this,n=arguments;return new Promise((function(a,c){var u=r.apply(e,n);function o(r){t(u,a,c,o,s,"next",r)}function s(r){t(u,a,c,o,s,"throw",r)}o(void 0)}))}}n.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=227.054939db.chunk.js.map