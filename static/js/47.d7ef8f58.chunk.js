"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[47],{9355:function(n,e,t){t.r(e),t.d(e,{onMovieCasts:function(){return p},onMovieDetails:function(){return f},onMovieReviews:function(){return v},onMovieSearch:function(){return o},onMovieTrending:function(){return s}});var r=t(5861),a=t(7757),u=t.n(a),c=t(3263);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="e6343f2aadc575b1d7088cbe8f702b7d",o=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5047:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(9439),a=t(9355),u=t(2791),c=t(7689),i=t(184),o=function(){var n=(0,c.UO)().id,e=(0,u.useState)([]),t=(0,r.Z)(e,2),o=t[0],s=t[1];return(0,u.useEffect)((function(){(0,a.onMovieReviews)(n).then((function(n){return s(n.results)}))}),[n]),0===o.length?(0,i.jsx)("h3",{children:"No reviews..."}):(0,i.jsx)("ul",{children:o.map((function(n){var e=n.id,t=n.content,r=n.author;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:[r," :"]}),(0,i.jsx)("p",{children:t})]},e)}))})},s=function(){return(0,i.jsx)("div",{children:(0,i.jsx)(o,{})})}}}]);
//# sourceMappingURL=47.d7ef8f58.chunk.js.map