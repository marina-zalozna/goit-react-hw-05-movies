(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[591],{9355:function(n,e,t){"use strict";t.r(e),t.d(e,{onMovieCasts:function(){return d},onMovieDetails:function(){return u},onMovieReviews:function(){return f},onMovieSearch:function(){return s},onMovieTrending:function(){return p}});var r=t(5861),i=t(7757),a=t.n(i),o=t(3263);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="e6343f2aadc575b1d7088cbe8f702b7d",s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1591:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return M}});var r,i,a,o,c,s,p,u,d=t(9439),f=t(168),h=t(1087),x=t(6444),m=x.ZP.main(r||(r=(0,f.Z)(["\n  background-color: #f5f5f5;\n"]))),g=x.ZP.ul(i||(i=(0,f.Z)(["\n  list-style: none;\n  display: grid;\n  max-width: 280px;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-rows: auto;\n  padding-top: 20px;\n  padding-bottom: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 32px;\n    padding-top: 60px;\n    padding-bottom: 60px;\n    max-width: 700px;\n  }\n  @media screen and (min-width: 1280px) {\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 32px 16px;\n    max-width: 1200px;\n  }\n"]))),l=(0,x.ZP)(h.OL)(a||(a=(0,f.Z)(["\n  color: #212121;\n  width: 300px;\n"]))),v=x.ZP.li(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"]))),w=x.ZP.img(c||(c=(0,f.Z)(["\n  width: 300px;\n  height: 398px;\n  object-fit: cover;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  @media screen and (min-width: 768px) {\n    width: 336px;\n    height: 455px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 390px;\n    height: 574px;\n  }\n"]))),b=x.ZP.div(s||(s=(0,f.Z)(["\n  margin-right: auto;\n  padding: 10px 5px;\n  @media screen and (min-width: 768px) {\n    padding-top: 8px;\n  }\n  @media screen and (min-width: 1280px) {\n    padding-top: 12px;\n  }\n"]))),y=x.ZP.h3(p||(p=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 14px;\n  letter-spacing: 0.04em;\n  padding-bottom: 8px;\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: 20px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n"]))),Z=x.ZP.p(u||(u=(0,f.Z)(["\n  letter-spacing: 0.04em;\n  color: #ff6b08;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 16px;\n"]))),_=t(2007),k=t.n(_),j=t(184),P=t(9355).onMovieTrending,T=t(2791),O=T.useState,R=T.useEffect;g.propTypes={trendingMovies:k().arrayOf(k().shape({id:k().string.isRequired,title:k().string.isRequired,release_date:k().string,vote_average:k().string}))};var C=function(){var n=O([]),e=(0,d.Z)(n,2),t=e[0],r=e[1],i="https://image.tmdb.org/t/p/",a="w300";return R((function(){P().then((function(n){r(n.results)}))}),[]),(0,j.jsx)(m,{children:(0,j.jsx)(g,{children:t.map((function(n){var e=n.id,t=n.title,r=n.poster_path,o=n.release_date,c=n.vote_average;return(0,j.jsx)(v,{children:(0,j.jsxs)(l,{to:"/movies/".concat(e),children:[(0,j.jsxs)("div",{children:[" ",(0,j.jsx)(w,{alt:t,src:"".concat(i).concat(a).concat(r)})]}),(0,j.jsxs)(b,{children:[" ",(0,j.jsx)(y,{children:t}),(0,j.jsxs)(Z,{children:["Date: ",o," | ",c]})]})]})},e)}))})})},M=function(){return(0,j.jsx)("div",{children:(0,j.jsx)(C,{})})}},888:function(n,e,t){"use strict";var r=t(9047);function i(){}function a(){}a.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,a,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=591.dee37f81.chunk.js.map