"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[852],{2961:function(r,e,t){t.d(e,{Z:function(){return a}});var n=t(184),a=function(r){var e=r.errorMessage;return(0,n.jsxs)("h1",{children:["Ooops!",e]})}},4290:function(r,e,t){t.d(e,{Z:function(){return u}});var n=t(8966),a=t(184),u=function(r){var e=r.isLoading;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Ll,{height:"40",width:"40",color:"#280232",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:e})})}},1996:function(r,e,t){t.d(e,{Z:function(){return o}});t(2791);var n=t(7689),a=t(1087),u=t(184),c=n.TH,s=function(r){var e=r.id,t=r.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e),state:{state:c},children:t})})},i=n.TH,o=function(r){var e=r.movies;return(0,u.jsx)("ul",{children:e.map((function(r){var e=r.id,t=r.title;return(0,u.jsx)(s,{id:e,title:t,state:{from:i}},e)}))})}},5852:function(r,e,t){t.r(e),t.d(e,{default:function(){return w}});var n,a=t(5861),u=t(9439),c=t(7757),s=t.n(c),i=t(2791),o=t(1087),f=t(9818),p=t(1996),v=t(4290),l=t(2961),h=t(168),d=t(4926).Z.input(n||(n=(0,h.Z)(["\n  margin-right: 5px;\n"]))),m=t(184),x=function(r){var e=r.searchForm;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:"Search movies"}),(0,m.jsxs)("form",{onSubmit:e,children:[(0,m.jsx)(d,{name:"query",type:"text"}),(0,m.jsx)("button",{type:"submit",children:"Search"})]})]})},w=function(){var r,e=(0,o.lr)(),t=(0,u.Z)(e,2),n=t[0],c=t[1],h=(0,i.useState)([]),d=(0,u.Z)(h,2),w=d[0],Z=d[1],b=(0,i.useState)(!1),g=(0,u.Z)(b,2),j=g[0],y=g[1],k=(0,i.useState)(""),q=(0,u.Z)(k,2),S=q[0],F=q[1],_=null!==(r=n.get("query"))&&void 0!==r?r:"";return(0,i.useEffect)((function(){if(_){var r=function(){var r=(0,a.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return y(!0),r.prev=1,r.next=4,(0,f.qF)(_);case 4:e=r.sent,Z(e.data.results),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),F(r.t0.message);case 11:return r.prev=11,y(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}}),[_]),(0,m.jsxs)("main",{children:[(0,m.jsx)(x,{searchForm:function(r){r.preventDefault();var e=r.target.elements.query.value;c({query:e}),r.target.reset()}}),j&&(0,m.jsx)(v.Z,{isLoading:j}),w.length>0&&(0,m.jsx)(p.Z,{movies:w}),S&&(0,m.jsx)(l.Z,{})]})}},9818:function(r,e,t){t.d(e,{AR:function(){return f},M1:function(){return v},Pg:function(){return p},qF:function(){return h},tx:function(){return l}});var n=t(5861),a=t(7757),u=t.n(a),c=t(1243),s="6251e629c61bceaf56a3d45f05637256",i=c.Z.create({baseURL:"https://api.themoviedb.org/3"}),o={params:{api_key:s}},f=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i("/trending/movie/day",o);case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i("/movie/".concat(e),o);case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i("/movie/".concat(e,"/credits"),o);case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i("/movie/".concat(e,"/reviews"),o);case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={params:{api_key:s,query:e}},r.next=3,i("/search/movie",t);case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=852.99fadb55.chunk.js.map