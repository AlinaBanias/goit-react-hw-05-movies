"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{2961:function(r,t,e){e.d(t,{Z:function(){return a}});var n=e(184),a=function(r){var t=r.errorMessage;return(0,n.jsxs)("h1",{children:["Ooops!",t]})}},1996:function(r,t,e){e.d(t,{Z:function(){return c}});e(2791);var n=e(1087),a=e(184),u=function(r){var t=r.id,e=r.title,u=r.state;return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/goit-react-hw-05-movies/movies/".concat(t),state:u,children:e})})},c=function(r){var t=r.movies,e=r.state;return(0,a.jsx)("ul",{children:t.map((function(r){var t=r.id,n=r.title;return(0,a.jsx)(u,{id:t,title:n,state:e},t)}))})}},4859:function(r,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(5861),a=e(9439),u=e(7757),c=e.n(u),i=e(2791),s=e(9599),o=e(7689),f=e(8966),p=e(1996),v=e(2961),d=e(184),l=function(){var r=(0,i.useState)([]),t=(0,a.Z)(r,2),e=t[0],u=t[1],l=(0,o.TH)(),h=(0,i.useState)(!1),m=(0,a.Z)(h,2),x=m[0],w=m[1],k=(0,i.useState)(""),b=(0,a.Z)(k,2),Z=b[0],g=b[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t,e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return w(!0),r.prev=1,r.next=4,(0,s.AR)();case 4:t=r.sent,e=t.data,n=e.results.map((function(r){return{id:r.id,title:r.title}})),u(n),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),g(r.t0.message);case 13:return r.prev=13,w(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,10,13,16]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,d.jsxs)("main",{children:[(0,d.jsx)("h2",{children:"Trending today"}),x?(0,d.jsx)(f.Ll,{height:"40",width:"40",color:"#280232",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0}):(0,d.jsx)(p.Z,{movies:e,state:{from:l}}),Z&&(0,d.jsx)(v.Z,{errorMessage:Z})]})}},9599:function(r,t,e){e.d(t,{AR:function(){return n.AR},M1:function(){return n.M1},Pg:function(){return n.Pg}});var n=e(9818)},9818:function(r,t,e){e.d(t,{AR:function(){return f},M1:function(){return v},Pg:function(){return p},qF:function(){return l},tx:function(){return d}});var n=e(5861),a=e(7757),u=e.n(a),c=e(1243),i="6251e629c61bceaf56a3d45f05637256",s=c.Z.create({baseURL:"https://api.themoviedb.org/3"}),o={params:{api_key:i}},f=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/trending/movie/day",o);case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/movie/".concat(t),o);case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/movie/".concat(t,"/credits"),o);case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/movie/".concat(t,"/reviews"),o);case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={params:{api_key:i,query:t}},r.next=3,s("/search/movie",e);case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=859.fa493ba9.chunk.js.map