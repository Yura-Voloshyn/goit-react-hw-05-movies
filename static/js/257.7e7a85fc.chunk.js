"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{9257:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,c,i=e(885),s=e(2959),u=e(501),o=e(6871),f=e(2791),l=e(168),p=e(6444),d=p.ZP.main(r||(r=(0,l.Z)(["\n  /* display: flex; */\n"]))),h=p.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n"]))),v=p.ZP.img(c||(c=(0,l.Z)(["\n  width: 200px;\n  height: 300px;\n  margin-right: 10px;\n"]))),x=e(184),g=function(){var n,t=(0,o.UO)().id,e=(0,o.s0)(),r=(null===(n=(0,o.TH)().state)||void 0===n?void 0:n.from)||"/",a=(0,f.useState)([]),c=(0,i.Z)(a,2),l=c[0],p=c[1];(0,f.useEffect)((function(){!function(n){try{(0,s.Pg)(n).then((function(n){return p(n)}))}catch(t){console.log(t)}}(t)}),[t]);var g=l.original_title,m=l.genres,j=l.overview,w=l.poster_path,_=l.vote_average,b=m?m.map((function(n){return n.name})).join(", "):null,k=w?"https://image.tmdb.org/t/p/w300/".concat(w):"https://stringfixer.com/files/951711496.jpg",y=100*_/10;return(0,x.jsxs)(d,{children:[(0,x.jsx)("button",{onClick:function(){return e(r)},children:"Go back"}),(0,x.jsxs)(h,{children:[(0,x.jsx)(v,{src:k,alt:g}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:g}),(0,x.jsxs)("p",{children:["User Score: ",y.toFixed()," %"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:j}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:null!==b&&b})]})]}),(0,x.jsx)("p",{children:"Additional Information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{state:{from:r},to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{state:{from:r},to:"reviews",children:"Reviews"})})]}),(0,x.jsx)(o.j3,{})]})}},2959:function(n,t,e){e.d(t,{Df:function(){return f},Ij:function(){return d},Pg:function(){return l},ZF:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),i=e(4569),s=e.n(i),u="https://api.themoviedb.org/3/",o="b28dcafbfbdc99f3059a27aaeb93fed6",f=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(u,"trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(u,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(u,"movie/").concat(t,"/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(u,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.7e7a85fc.chunk.js.map