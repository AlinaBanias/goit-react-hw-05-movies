"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[422],{2961:function(e,r,n){n.d(r,{Z:function(){return a}});var t=n(184),a=function(e){var r=e.errorMessage;return(0,t.jsxs)("h1",{children:["Ooops!",r]})}},4422:function(e,r,n){n.r(r),n.d(r,{default:function(){return Z}});var t,a,i,s=n(5861),c=n(9439),o=n(168),u=n(7757),p=n.n(u),l=n(2791),d=n(1087),f=n(7689),v=n(9599),h=n(8966),x=n(4926),g=x.Z.div(t||(t=(0,o.Z)(["\n  display: flex;\n  margin-bottom: 15px;\n"]))),m=x.Z.div(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 10px;\n"]))),w=n(9128),b=n(2961),j=n(184),k=(0,x.Z)(d.rU)(i||(i=(0,o.Z)(["\n  display: block;\n  width: 100px;\n  padding: 5px;\n  margin-bottom: 5px;\n  text-align: center;\n  text-decoration: none;\n  color: currentColor;\n  border: 1px solid #c9c9c9;\n  border-radius: 3px;\n  :hover,\n  :focus {\n    background-color: #f7eded;\n    border-color: #0f86c8;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  }\n"]))),Z=function(){var e=(0,l.useState)([]),r=(0,c.Z)(e,2),n=r[0],t=r[1],a=(0,f.UO)().movieId,i=(0,f.TH)(),o=(0,l.useState)(!1),u=(0,c.Z)(o,2),x=u[0],Z=u[1],y=(0,l.useState)(""),_=(0,c.Z)(y,2),C=_[0],S=_[1],U=(0,l.useState)(null),L=(0,c.Z)(U,2),M=L[0],P=L[1];(0,l.useEffect)((function(){var e,r;if(!M){var n=null!==(e=null===(r=i.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/goit-react-hw-05-movies";P(n)}}),[M,i.state]),(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)(p().mark((function e(){var r,n,i,s,c,o;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,(0,v.Pg)(a);case 4:r=e.sent,n=r.genres,i=r.vote_average,s=r.overview,c=r.original_title,o=r.poster_path,t({genres:n,vote_average:i,overview:s,original_title:c,poster_path:o}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),S(e.t0.message);case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var R=n.genres,A=n.vote_average,O=n.overview,F=n.original_title,q=n.poster_path;return(0,j.jsxs)(j.Fragment,{children:[x&&(0,j.jsx)(h.Ll,{height:"40",width:"40",color:"#280232",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),Object.keys(n).length>0&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(k,{to:M,children:[(0,j.jsx)(w.C4H,{})," Go back"]}),(0,j.jsxs)(g,{children:[q?(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(q),alt:F,width:"200"}):(0,j.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",width:"200",alt:F}),(0,j.jsxs)(m,{children:[(0,j.jsx)("h2",{children:F}),(0,j.jsxs)("p",{children:["User score: ",A]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:O}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:R.map((function(e){return e.name})).join(" ")})]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]})]}),C&&(0,j.jsx)(b.Z,{errorMessage:C}),(0,j.jsx)(l.Suspense,{fallback:(0,j.jsx)(h.Ll,{height:"40",width:"40",color:"#280232",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),children:(0,j.jsx)(f.j3,{})})]})]})}},9599:function(e,r,n){n.d(r,{AR:function(){return t.AR},M1:function(){return t.M1},Pg:function(){return t.Pg}});var t=n(9818)},9818:function(e,r,n){n.d(r,{AR:function(){return p},M1:function(){return d},Pg:function(){return l},qF:function(){return v},tx:function(){return f}});var t=n(5861),a=n(7757),i=n.n(a),s=n(1243),c="6251e629c61bceaf56a3d45f05637256",o=s.Z.create({baseURL:"https://api.themoviedb.org/3"}),u={params:{api_key:c}},p=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/trending/movie/day",u);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/movie/".concat(r),u);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/movie/".concat(r,"/credits"),u);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/movie/".concat(r,"/reviews"),u);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:c,query:r}},e.next=3,o("/search/movie",n);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=422.2655dfbf.chunk.js.map