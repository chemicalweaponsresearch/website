(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{u1Qz:function(e,t,a){"use strict";a.r(t),a.d(t,"TweetMediaDetailScreen",(function(){return he}));a("kYxP"),a("MvUL");var o=a("ERkP"),n=a("zh9S"),r=a("rxPX"),c=a("0KEI"),s=a("H9MA"),i=a("XOJV"),l=a("P1r1");const d=(e,t)=>t.match.params.screenName,u=(e,t)=>t.match.params.statusId,m=(e,t)=>{const{match:{params:{index:a}}}=t;return parseInt(a,10)-1},w=(e,t)=>i.a.selectFetchStatus(e,u(0,t)),h=(e,t)=>e.location&&e.location.state&&e.location.state[t],p=(e,t)=>h(t,"forwardPivotInfo"),f=(e,t)=>h(t,"promotedContent"),b=(e,t)=>h(t,"socialContext"),v=(e,t)=>h(t,"contextTweetId"),x=(e,t)=>{const a=u(0,t),o=i.a.select(e,a);return o&&o.conversation_id_str||void 0};var E=Object(r.a)().propsFromState((()=>({fetchStatus:w,forwardPivotInfo:p,index:m,screenName:d,tweetId:u,tweet:i.a.createHydratedTweetSelector(u),promotedContent:f,dataSaver:s.c,socialContext:b,contextTweetId:v,rootTweet:i.a.createHydratedTweetSelector(x),showTweetMediaDetailDrawer:l.w}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(c.d)("TWEET_MEDIA_DETAIL_SCREEN"),fetchTweetIfNeeded:i.a.fetchOneIfNeeded,googleAnalyticsPageView:n.a,updateSettings:l.G}))).withAnalytics({page:"tweet",section:"media"}),T=a("KEM+"),g=a.n(T),C=a("ymux"),I=a("rkhm"),y=a("ZUOq");const M=y.a.columnWidths.secondary.normal,_=y.a.columnWidths.primary;var S=a("AUxQ"),k=a("yw4N"),L=a("I7xG"),O=a("rHpw");class P extends o.Component{constructor(...e){super(...e),g()(this,"_getApiErrorHandlerMap",Object(L.a)(this,(e=>e.screenName),(e=>Object(I.a)(e)))),g()(this,"_getModule",Object(L.a)(this,(e=>e.tweetId),(e=>Object(C.a)({focalTweetId:e}))))}render(){const{contextTweetId:e,location:t,tweet:a,tweetId:n,promotedContent:r,rootTweet:c,socialContext:s}=this.props,i={selectedTweetId:n};return o.createElement(k.a,{"aria-expanded":"true",style:R.root},o.createElement(S.a,{apiErrorHandlerMap:this._getApiErrorHandlerMap(),contextTweetId:e,focalTweet:a,focalTweetId:n,location:t,module:this._getModule(),promotedContent:r,rootTweet:c,selectedTweet:i,socialContext:s,withFocalTweetMedia:!1}))}}const R=O.a.create((e=>({root:{backgroundColor:e.colors.cellBackground,overflow:"auto",width:M,borderLeftWidth:e.borderWidths.small,borderColor:e.colors.borderColor,borderStyle:"solid"}})));var j=P,A=a("v//M"),D=a("W5XZ"),H=a("3XMw"),N=a.n(H),B=a("2doW"),W=a("UPvq"),z=a("VTxf"),X=a("wiP2"),F=a("Rp9C"),U=a("xXop"),Z=a("lklz"),$=a("MWbm"),q=a("7N4s"),J=a("mjJ+"),V=a("/yvb"),G=a("rOXj"),K=a("cHvH"),Q=a("RCZO"),Y=a("Lsrn"),ee=a("shC7"),te=a("k/Ka");const ae=(e={})=>Object(te.a)("svg",{...e,style:[Y.a.root,e.style,ee.a.isRTL&&Y.a.iconRTL],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M21.185 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.145.146.337.22.53.22s.383-.073.53-.22l9.25-9.25c.293-.295.293-.77 0-1.062z"}),o.createElement("path",{d:"M13.376 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.146.145.337.218.53.218s.384-.073.53-.22l9.25-9.25c.293-.293.293-.767 0-1.06z"})));ae.metadata={width:24,height:24};var oe=ae;const ne=(e={})=>Object(te.a)("svg",{...e,style:[Y.a.root,e.style,ee.a.isRTL&&Y.a.iconRTL],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M4.656 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.655 12z"}),o.createElement("path",{d:"M12.465 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L12.464 12z"})));ne.metadata={width:24,height:24};var re=ne,ce=a("ACHU");const se=N.a.d132269b,ie=N.a.dd657211,le=N.a.h63a5c3b,de=N.a.f20b040d,ue=N.a.f1d9930c,me=N.a.a0e81a2e,we=e=>e-M<_,he=e=>{const{isModal:t}=o.useContext(q.a),{hideButtons:a,handleMediaDetailZoomed:n,handleMediaItemTapped:r}=Object(Q.h)(),[c,s]=o.useState(!1),{analytics:i,contextTweetId:l,createLocalApiErrorHandler:d,dataSaver:u,fetchStatus:m,fetchTweetIfNeeded:w,forwardPivotInfo:h,googleAnalyticsPageView:p,history:f,index:b,location:v,promotedContent:x,rootTweet:E,screenName:T,showTweetMediaDetailDrawer:g,socialContext:C,tweet:I,tweetId:y,updateSettings:M}=e,_=()=>{const{state:e}=v;if(!e)return;const t=e.mediaItems;return t&&"index"in t&&"items"in t?t:void 0},S=()=>{const e=_();return e?e.index:b},k=()=>{const e=_();return e?e.items:I?I.extended_entities&&I.extended_entities.media:void 0},L=()=>{const e=S(),t=k();return t&&t[e]},O=()=>null!=I&&I.user?`/${I.user.screen_name}/status/${I.id_str}`:"/",P=e=>{const t=_();return t?{...v.state,mediaItems:{...t,index:e}}:v.state},R=e=>e&&we(e)?c:g,H=o.useCallback((()=>{if(I&&I.user&&T.toLowerCase()!==I.user.screen_name.toLowerCase()){const e=I&&I.user?`/${I.user.screen_name}/status/${I.id_str}/photo/${b+1}`:null;e&&f.replace(e)}}),[f,b,T,I]),N=o.useCallback((()=>{if(I){const e=F.a.getTweetItem(I);p(i.contextualScribeNamespace),i.scribe({action:"show",data:{items:[e]}})}}),[i,p,I]),Y=()=>{const e=O();f.goBackToNonModalRoute({fallbackPath:e,location:v})},ee=o.useCallback((()=>{w(y).catch(d(D.a))}),[d,w,y]),te=e=>()=>{e&&we(e)?(i.scribe({component:"conversation_drawer",action:c?"collapse":"expand"}),s(!c)):(i.scribe({component:"conversation_drawer",action:g?"collapse":"expand"}),M({showTweetMediaDetailDrawer:!g}))},ae=e=>{const t=S(),a=k();if(e===t)return;i.scribe({component:"gallery",element:t<e?"next":"prev",action:"click",data:{event_value:e+1}});const o=a&&a[e];f.replace({state:P(e),pathname:o&&o.expanded_url})},ne=e=>o.createElement(J.a,{isFixed:!0,items:[{link:O(),text:ie}],onCloseRequested:e}),he=e=>{const a=L(),n=Object(Q.c)(a),r=e&&R(e);return t?o.createElement(V.a,{accessibilityLabel:r?de:ie,dominantColor:n.rgb,hoverLabel:{label:r?ue:me},icon:r?o.createElement(oe,null):o.createElement(re,null),onClick:te(e),type:"onMedia"}):I&&!t?o.createElement(V.a,{accessibilityLabel:le,dominantColor:a?n.rgb:void 0,icon:o.createElement(ce.a,null),renderMenu:ne,type:a?"onMedia":"invertedPrimary"}):void 0},fe=()=>{const e=S(),t=k();if(!t)return o.createElement(z.a,null);const a=t[e],c=Object(Q.c)(a).rgb;return o.createElement(B.a,{dataSaver:u,dominantColor:c,mediaIndex:e,mediaItems:t,onDismiss:Y,onMediaDetailZoomed:n,onMediaItemChanged:ae,onTap:r,promotedContent:x,videoId:1===t.length&&I?Z.b.forTweet(I.id_str):void 0})},be=e=>{const t=L(),n=Object(Q.c)(t),r=G.a.isTouchSupported()&&(()=>{const e=S(),t=k();if(!t)return!1;const a=t[e];return"photo"===(null==a?void 0:a.type)||!1})();return o.createElement(W.a,{backgroundColor:n,footerButtons:I?o.createElement(U.a,{actionSize:"large",activeColor:"white",color:"white",forwardPivotInfo:I.softIntervention||h,style:pe.actionsBar,tweet:I,withCount:!0}):void 0,hideButtons:a,mediaItem:t,onCloseButtonPress:Y,overlayFooter:r,topRightButton:he(e)},o.createElement(A.a,{accessibilityLabel:se,fetchStatus:m,onRequestRetry:ee,render:fe}))},ve=o.useRef(null);o.useEffect((()=>{ve.current!==y&&(ee(),ve.current=y)}),[ee,y]);const xe=o.useRef(null);return o.useEffect((()=>{var e;(null==(e=xe.current)?void 0:e.id_str)!==(null==I?void 0:I.id_str)&&(N(),xe.current=I)}),[N,I]),o.useEffect((()=>{H()}),[H]),o.createElement(X.a.Configure,{headerless:!0},t?o.createElement(K.a,null,(({windowWidth:e})=>o.createElement($.a,{style:pe.container},o.createElement($.a,{style:pe.neighbor},be(e)),R(e)?o.createElement(j,{contextTweetId:l,location:v,promotedContent:x,rootTweet:E,screenName:T,socialContext:C,tweet:I,tweetId:y}):null))):be())},pe=O.a.create((e=>({actionsBar:{height:e.spaces.space48,marginTop:0,maxWidth:"none",paddingHorizontal:e.spaces.space12},container:{flexDirection:"row",overflowX:"hidden",overflowY:"hidden",height:"100%",width:"100%",position:"relative"},neighbor:{flexGrow:1,flexShrink:1}}))),fe=E(he);t.default=fe}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetMediaDetail.e2037e45.js.map