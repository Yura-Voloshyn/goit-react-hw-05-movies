"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[757],{6507:function(n,t,e){var r=e(6871),a=e(501),c=e(184),u=function(n){var t=n.items,e=(0,r.TH)(),u=t.map((function(n){var t=n.id,r=n.title,u=n.name;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{state:{from:e},to:"/movies/".concat(t),children:null!==r&&void 0!==r?r:u})},t)}));return(0,c.jsx)("ul",{children:u})};t.Z=u,u.defaultProps={items:[]}},4757:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),i=e(2959),s=e(2791),o=e(3521),f=e(6507),p=e(184),v=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],v=(0,s.useState)(!1),l=(0,a.Z)(v,2),d=l[0],h=l[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,i.Df)();case 4:t=n.sent,c(t),h(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)(p.Fragment,{children:[" ",d&&(0,p.jsx)(o.Z,{}),(0,p.jsx)(f.Z,{items:e})]})},l=function(){return(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending Today"}),(0,p.jsx)(v,{})]})}},2959:function(n,t,e){e.d(t,{Df:function(){return f},Ij:function(){return l},Pg:function(){return p},ZF:function(){return v}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),s="https://api.themoviedb.org/3/",o="b28dcafbfbdc99f3059a27aaeb93fed6",f=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"movie/").concat(t,"/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=757.4ce5397c.chunk.js.map