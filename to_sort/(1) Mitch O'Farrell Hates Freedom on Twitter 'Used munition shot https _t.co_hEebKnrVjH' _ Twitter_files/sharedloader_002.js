(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3EFP":function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return r})),s.d(t,"c",(function(){return i})),s.d(t,"d",(function(){return n})),s.d(t,"e",(function(){return a})),s.d(t,"f",(function(){return c}));const o="ArrowDown",r="ArrowUp",i="Enter",n="Escape",a="ESC",c="Tab"},"4e/K":function(e,t,s){"use strict";s.r(t),s.d(t,"TypeaheadInput",(function(){return S})),s.d(t,"styles",(function(){return O}));var o=s("KEM+"),r=s.n(o),i=s("3EFP"),n=s("ERkP"),a=s("3XMw"),c=s.n(a),l=s("VwDm"),d=s("oQhu"),h=s("WPfJ"),u=s("Es6L"),p=s("OEYw"),m=s("GZwR"),f=s("rHpw"),_=f.a.create({initial:{alignItems:"stretch",borderWidth:0,borderStyle:"solid",boxSizing:"border-box",display:"flex",flexDirection:"column",margin:0,padding:0,position:"relative",zIndex:0,minHeight:0,minWidth:0}}),y=s("k/Ka"),g=s("MWbm"),b=s("xoZN"),w=s("6OUF"),I=s("pf9B"),v=s("cHvH"),x=s("oEoC");const E=c.a.f065ba8c,D=Object(d.a)((e=>({bottom:0,paddingBottom:`calc(2.5 * ${f.a.theme.spaces.space64})`,position:"fixed",top:`${e}px`,transform:[{translate3d:"0,0,0"}]}))),C=e=>Object(y.a)("form",{...e,action:"#",style:[_.initial,O.wrapper]});let R=1;class S extends n.Component{constructor(e,t){super(e,t),r()(this,"_render",(({windowWidth:e})=>{const{alwaysOpen:t,disableClearButton:s,inputStyle:o,placeholder:r,rounded:i,renderInSearchField:a,shouldAutoFocus:c,shouldFocusOnClear:d,style:h,testID:u}=this.props,p=this.state.showTypeaheadDropdown||t;return n.createElement(g.a,{onLayout:this._handleLayout,ref:this._setRootContainerNode,style:[O.root,h]},n.createElement(b.a,{onKeyDown:this._handleKeyDown,style:O.keydownInputListener},n.createElement(C,{accessibilityLabel:r,accessibilityRole:"search",onSubmit:this._handleFormSubmit},n.createElement(g.a,{ref:this._setInputContainerNode,style:o},n.createElement(w.a,{Icon:l.a,ariaActiveDescendant:this.state.ariaDescendantId,ariaAutocomplete:"list",ariaExpanded:p,ariaLabel:E,ariaOwns:this._dropdownDomId,ariaRole:"combobox",autoComplete:"off",autoCorrect:!1,autoFocus:c,contentBelow:a&&a(),focusOnClear:d,onChange:this._handleInputChange,onClear:this._handleInputClear,onFocus:this._handleInputFocus,onLayout:this._handleInputLayoutChanged,placeholder:r,ref:this._setInputRef,returnKeyType:"search",spellCheck:"false",styleType:i?"pill":"selection",testID:u,value:this.state.query,withClearButton:!s&&this.state.showTypeaheadDropdown})),n.createElement(g.a,{style:[O.typeaheadContainer,!i&&O.topBorder]},p?this._renderDropdown(e):null))))})),r()(this,"_renderDropdown",(e=>{const{filter:t,getItemDisabledMessage:s,getItemIsDisabled:o,getTopicExactMatch:r,getUserExactMatch:i,injectedItems:a,isModal:c,maxEvents:l,maxTopics:d,renderEmptyState:h,renderUserDecoration:m,selectedItems:_,shouldDeferPrefetch:y,source:g,withFixedPositioning:b,withSectionDivider:w,onItemsChanged:I}=this.props,v=e>=f.a.theme.breakpoints.medium||Object(u.a)(),{dropdownOffset:x,query:E}=this.state,C=c?O.modalDropdown:[O.dropdown,!v&&b&&x?D(x):null,v&&O.wideModeDropdown],R={ariaDescendantId:this.state.ariaDescendantId,domId:this._dropdownDomId,onDismiss:this._handleOnEmptyStateDismiss,onItemFocusChanged:this._handleItemFocusChanged,ref:this._handleDropdownRef,style:C};return h&&!E?h(R):n.createElement(p.a,{ariaDescendantId:this.state.ariaDescendantId,domId:this._dropdownDomId,filter:t,getItemDisabledMessage:s,getItemIsDisabled:o,getTopicExactMatch:r,getUserExactMatch:i,injectedItems:a,maxEvents:l,maxTopics:d,onItemClick:this._handleItemClick,onItemFocusChanged:this._handleItemFocusChanged,onItemsChanged:I,query:E,ref:this._handleDropdownRef,renderUserDecoration:m,selectedItems:_,shouldDeferPrefetch:y,source:g,style:C,withSectionDivider:w})})),r()(this,"_dismissDropdown",(()=>{this.setState({showTypeaheadDropdown:!1}),this.props.onDismiss&&this.props.onDismiss()})),r()(this,"_handleOnEmptyStateDismiss",(()=>{this._dismissDropdown(),this._inputRef&&this._inputRef.blur()})),r()(this,"_handleLayout",(()=>{this._updatePosition()})),r()(this,"_handleInputLayoutChanged",(()=>{this._updatePosition()})),r()(this,"_updatePosition",(()=>{if(!this._inputContainerNode)return;const{bottom:e}=this._inputContainerNode.getBoundingClientRect();e!==this.state.dropdownOffset&&this.setState({dropdownOffset:e})})),r()(this,"_handleDropdownRef",(e=>{this._dropdownRef=e})),r()(this,"_setRootContainerNode",(e=>{this._rootContainerNode=e||null})),r()(this,"_setInputRef",(e=>{this._inputRef=e})),r()(this,"_setInputContainerNode",(e=>{this._inputContainerNode=e||null,this._inputContainerNode&&this._updatePosition()})),r()(this,"_handleFocusChange",(e=>{const t=I.a.getCount()>0;this._rootContainerNode&&this._rootContainerNode.contains(e.target)||t||this.state.showTypeaheadDropdown&&this._dismissDropdown()})),r()(this,"_handleKeyDown",(e=>{const{key:t}=e,{showTypeaheadDropdown:s}=this.state;if(Object(x.e)(e)){if(t===i.a)return this._focusNext(),void e.preventDefault();if(t===i.b)return this._focusPrevious(),void e.preventDefault();if(t===i.d)return this._dismissDropdown(),void e.preventDefault();if(t!==i.f)return t===i.c&&this._hasFocusedItem()?(this._selectFocusedItem(),void e.preventDefault()):void(s||this.setState({showTypeaheadDropdown:!0}));this._dismissDropdown()}})),r()(this,"_handleItemFocusChanged",(()=>{this.setState({ariaDescendantId:Object(x.b)()})})),r()(this,"_handleInputClear",(()=>{this.setQuery("")})),r()(this,"_handleInputFocus",(()=>{this.setState({showTypeaheadDropdown:!0}),this._updatePosition(),this.props.onFocus&&this.props.onFocus()})),r()(this,"_handleInputChange",(e=>{this.setQuery(e.target.value),this._updatePosition()})),r()(this,"_handleFormSubmit",(e=>{e.preventDefault(),e.stopPropagation(),this._inputRef&&this._inputRef.blur(),this.setState({showTypeaheadDropdown:!1}),this.props.onDismiss&&this.props.onDismiss(),this.props.onSubmit&&this.props.onSubmit()})),r()(this,"_handleItemClick",((e,t)=>{const{shouldClearOnSelect:s,shouldFocusOnClear:o,onDismiss:r,onItemClick:i}=this.props,n=s?"":this.state.query;this.setState({showTypeaheadDropdown:!1}),this._inputRef&&(s&&o?this._inputRef.focus():this._inputRef.blur()),this.setQuery(n),r&&r(),i&&i(e,t)})),r()(this,"_hasFocusedItem",(()=>this._dropdownRef&&this._dropdownRef.hasFocusedItem())),r()(this,"_selectFocusedItem",(()=>{this._dropdownRef&&this._dropdownRef.selectFocusedItem()})),r()(this,"_focusNext",(()=>{this._dropdownRef&&this._dropdownRef.focusNext()})),r()(this,"_focusPrevious",(()=>{this._dropdownRef&&this._dropdownRef.focusPrevious()})),this.state={ariaDescendantId:Object(x.b)(),query:e.initialValue,showTypeaheadDropdown:!1},this._dropdownDomId=`typeaheadDropdown-${R}`,R+=1}UNSAFE_componentWillReceiveProps(e){this.props.initialValue!==e.initialValue&&this.setQuery(e.initialValue)}componentDidMount(){window.document.addEventListener("click",this._handleFocusChange,!0)}componentWillUnmount(){window.document.removeEventListener("click",this._handleFocusChange,!0)}render(){return n.createElement(v.a,null,this._render)}focus(){this._inputRef&&this._inputRef.focus()}setQuery(e){this.setState({query:e}),this.props.onQueryChange&&this.props.onQueryChange(e)}}r()(S,"defaultProps",{disableClearButton:!1,filter:[m.a.Users,m.a.Topics],initialValue:"",withSectionDivider:!0});const O=f.a.create((e=>({root:{flex:1,flexDirection:"column",position:"relative",zIndex:h.d+1},typeaheadContainer:{flex:1,position:"relative"},keydownInputListener:{flex:1},dropdown:{backgroundColor:e.colors.cellBackground,left:0,right:0,overflowY:"auto",overscrollBehavior:"contain",position:"absolute",top:0,WebkitOverflowScrolling:"touch"},modalDropdown:{backgroundColor:e.colors.cellBackground,flex:1,minHeight:300,position:"relative",overflowY:"auto",overscrollBehavior:"auto",WebkitOverflowScrolling:"touch"},wideModeDropdown:{borderRadius:e.borderRadii.small,boxShadow:e.boxShadows.medium,minHeight:100,maxHeight:`calc(80vh - ${e.componentDimensions.appBarHeight})`},wrapper:{alignItems:"stretch",flex:1},topBorder:{borderTopColor:e.colors.gray200,borderTopStyle:"solid",borderTopWidth:e.borderWidths.small}})));t.default=S},AQOc:function(e,t,s){"use strict";s.d(t,"b",(function(){return l})),s.d(t,"a",(function(){return d}));s("kYxP");var o=s("lnti"),r=s("aWyx");const i={entries:{},entryIdsByConversationId:{},reactionsByMessageId:{}},n=(e=[],t={})=>e.map((e=>{if(e.proof_type===r.d.MUTUAL_FRIENDS){const{users:s,...r}=e;return{...r,users:Object(o.a)(s.map((e=>t[e])))}}return e})),a=(e=[],t={})=>e.reduce(((e,s)=>{const o=s.user_id,r=t[o]||{id_str:o};return e[o]={...s,user:r},e}),{}),c=(e,{entries:t,entryIdsByConversationId:s})=>(s[e]||[]).map((e=>t[e]&&t[e].data)).filter(Boolean),l=(e,t=i,s)=>{const{conversation_id:o,participants:r,...n}=e;return{conversation_id:o,...n,entries:t.entryIdsByConversationId[o]||[],participants:a(r,s)}},d=(e,t,s)=>{const{conversation_id:o,participants:r,social_proof:i,...l}=e;return{conversation_id:o,...l,entries:c(o,t),participants:a(r,s),...i?{social_proof:n(i,s)}:{}}}},LbZ7:function(e,t,s){"use strict";var o=s("97Jx"),r=s.n(o),i=s("KEM+"),n=s.n(i),a=s("ERkP"),c=s("rHpw"),l=s("MWbm");class d extends a.Component{render(){const{children:e,style:t,withGutter:s,...o}=this.props,i=a.Children.map(e,(e=>e&&a.cloneElement(e,{style:[e.props.style,h.column,s&&h.withGutterColumn]})));return a.createElement(l.a,r()({style:[t,h.root,s&&h.withGutter]},o),i)}}n()(d,"defaultProps",{withGutter:!1});const h=c.a.create((e=>({root:{flexDirection:"row"},column:{flexBasis:0,minWidth:0},withGutter:{marginHorizontal:`-${e.spaces.space4}`},withGutterColumn:{marginHorizontal:e.spaces.space4}})));t.a=d},OEYw:function(e,t,s){"use strict";var o=s("97Jx"),r=s.n(o),i=s("KEM+"),n=s.n(i),a=s("ERkP"),c=(s("kYxP"),s("rxPX")),l=s("0KEI"),d=s("hqKg"),h=s("oEoC"),u=s("o52z"),p=s("kGix"),m=s("Qyxo"),f=s("lnti"),_=(s("MvUL"),s("vy4g")),y=s("3A2y"),g=s("Y6L+"),b=s("Ssj5"),w=s("oEOe"),I=s("GZwR");const v="typeaheadV2",x=[],E=Object(w.a)("rweb/typeaheadV2","FETCH"),D=({q:e,result_type:t,src:s})=>`${e}_${t}_${s}`,C={remoteResults:{},cachedIds:[]};const R=e=>e.map((({tokens:e,rounded_score:t,...s})=>{const{topic:o,topic_type:r}=s,i=r||I.b.Topic;return{id:`${i}_${o.replace(" ","_")}`,type:i,tokens:e,rounded_score:t,data:s}})),S=e=>e.map((({tokens:e,rounded_score:t,...s})=>{var o;const r=s.topic_type||I.b.Event;return{id:(null==s||null==(o=s.url)?void 0:o.match(g.u.id)[0])||"",type:r,tokens:e,rounded_score:t,data:s}})),O=(e,t)=>e.typeaheadV2.remoteResults[t],T=e=>(t,s)=>{const o=O(s(),D(e));return o&&o.timestamp&&Date.now()-o.timestamp<=3e5?Promise.resolve():t(P(e))},P=e=>(t,s,{api:o})=>{if(!e||!e.q||""===e.q.trim())return Promise.resolve();const r={queryId:D(e)};return Object(w.b)(t,{params:e,request:o.Typeahead.fetch})({actionTypes:E,context:"FETCH_TYPEAHEAD",meta:r})};b.a.register({[v]:function(e=C,t){switch(t.type){case E.REQUEST:{const{meta:{queryId:s}}=t;return{...e,remoteResults:{...e.remoteResults,[s]:{...e.remoteResults[s],fetchStatus:p.a.LOADING}}}}case E.SUCCESS:{const{meta:{queryId:s},payload:o}=t,r=e.cachedIds.filter((e=>e!==s)),i=r.length>=25?Object(y.a)(e.remoteResults,r.splice(0,1)):e.remoteResults,n=o.users.map((e=>Object(_.a)(e,I.c.Remote)));return{...e,cachedIds:[...r,s],remoteResults:{...i,[s]:{fetchStatus:p.a.LOADED,id:s,orderedSections:o.ordered_sections,events:S(o.events),topics:R(o.topics),users:Object(I.f)(n),timestamp:Date.now()}}}}case E.FAILURE:{const{meta:{queryId:s}}=t;return{...e,remoteResults:{...e.remoteResults,[s]:{...e.remoteResults[s],fetchStatus:p.a.FAILED}}}}default:return e}}});var F=s("UQTn");const k=[I.a.Users],j=e=>{const{filter:t,query:s,source:o}=e;return D({q:s,result_type:(t||k).join(","),src:o})},A=(e,t)=>((e,t)=>{const s=O(e,t);return s&&s.fetchStatus})(e,j(t)),N=(e,t)=>((e,t)=>{const s=O(e,t);return s&&s.users||x})(e,j(t)),L=(e,t)=>((e,t)=>{const s=O(e,t);return s&&s.topics||x})(e,j(t)),U=(e,t)=>((e,t)=>{const s=O(e,t);return s&&s.events||x})(e,j(t)),M=(e,t)=>(t.rounded_graph_weight||0)-(e.rounded_graph_weight||0),W=()=>Object(d.createSelector)(N,Object(d.createSelector)(((e,t)=>t.query),((e,t)=>t.filter),F.d,F.e,((e,t,s,o)=>{if(!e||!t||t.indexOf(I.a.Users)<0)return Object(u.a)();const r=Object(F.f)(s,e);return Object(I.f)(r.map((e=>o[e])).sort(M).slice(0,10))})),A,((e,t)=>t.injectedItems),((e,t)=>t.query),((e,t)=>t.getUserExactMatch),((e,t,s,o,r,i)=>{const n=Object(m.a)(o||[],(e=>e.type===I.b.User?e.data.id_str:void 0)),a=t.filter((e=>n.indexOf(e.id)<0)),c=e.filter((e=>n.indexOf(e.id)<0)),l=Object(h.a)(a,c).slice(0,10),d=s===p.a.LOADED,f=i&&i({query:r,hasResults:!!e.length,isLoaded:d}),_=f?[...l,f]:l;return _.length?_:Object(u.a)()})),q=()=>Object(d.createSelector)(W(),Object(d.createSelector)(L,A,((e,t)=>t.query),((e,t)=>t.maxTopics),((e,t)=>t.getTopicExactMatch),((e,t,s,o,r)=>{const i=t===p.a.LOADED,n=r&&r({query:s,hasResults:!!e.length,isLoaded:i}),a=e.slice(0,o||3);return n&&a.push(n),a.length?a:Object(u.a)()})),Object(d.createSelector)(U,A,((e,t)=>t.query),((e,t)=>t.maxEvents),((e,t)=>t.filter),((e,t,s,o,r)=>{const i=s&&r&&r.indexOf(I.a.Events)>=0,n=e.slice(0,o||1);return n.length&&i?n:Object(u.a)()})),((e,t)=>t.injectedItems),((e,t,s,o)=>{const r=o&&o.length?o:null;return t.length||e.length||s.length?Object(f.a)([r,s.length?s:void 0,t.length?t:void 0,e.length?e:void 0]):r?[r]:Object(u.a)()}));var H=Object(c.a)().propsFromState((()=>({fetchStatus:A,items:q()}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(l.d)("TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT"),fetchTypeaheadIfNeeded:T,prefetchTypeaheadUsersIfNeeded:F.b}))).withAnalytics({element:"typeahead"}),B=s("VY6S"),G=s("kIAd"),V=s("Rp9C"),z=s("w6IS"),Y=s("7nmT"),$=s.n(Y),Q=s("ZcYN"),X=s("MWbm"),K=s("I7xG"),Z=s("JYMr"),J=s("0yYu"),ee=s("rHpw"),te=s("MXDK");class se extends a.Component{constructor(e,t){super(e),n()(this,"_setFocusedItemRef",(e=>{this._shouldScrollToFocusedItem&&e&&(Object(te.c)(this._getScrollParent(),e),this._shouldScrollToFocusedItem=!1)})),n()(this,"_resetScroll",(()=>{const e=this._getScrollParent();e&&(e.scrollTop=0)})),n()(this,"_handleItemClick",((e,t)=>{const{onItemClick:s}=this.props,o=this._getFlattenedItems().indexOf(e);e&&!t&&!this._shouldBlockInteractivity&&s(e,o),this._resetFocus()})),n()(this,"_getResultCount",(()=>this._getFlattenedItems().length)),n()(this,"_getFlattenedItems",Object(K.a)(this,(e=>e.items),(e=>Object(z.a)(e)))),n()(this,"_setFocusIndex",((e,t)=>{const{onItemFocusChanged:s}=this.props;this._shouldScrollToFocusedItem=t,this.setState({focusIndex:e}),s&&s(this._getFlattenedItems()[e])})),n()(this,"_resetFocus",(()=>{this._setFocusIndex(this.props.withItemAlwaysSelected?0:-1)})),n()(this,"focusNext",(()=>{const{focusIndex:e}=this.state,t=this._getResultCount();if(0===t)return;const s=e+1>=t?0:e+1;this._setFocusIndex(s,!0)})),n()(this,"focusPrevious",(()=>{const{focusIndex:e}=this.state,t=this._getResultCount();if(0===t)return;const s=e-1<0?t-1:e-1;this._setFocusIndex(s,!0)})),n()(this,"hasFocusedItem",(()=>{const{focusIndex:e}=this.state,t=this._getFlattenedItems();return e>=0&&t.length>e})),n()(this,"selectFocusedItem",(()=>{const{focusIndex:e}=this.state,{getItemIsDisabled:t}=this.props;if(this.hasFocusedItem()){const s=this._getFlattenedItems()[e],o=!!t&&t(s,s.data);this._handleItemClick(s,o)}})),this.state={focusIndex:e.withItemAlwaysSelected?0:-1,showProgressBar:!1}}componentDidMount(){this._resetFocus()}componentWillUnmount(){clearTimeout(this._interactivityTimeout),clearTimeout(this._delayedProgressTimeout)}UNSAFE_componentWillReceiveProps(e){!this.props.isLoading&&e.isLoading&&(this._delayedProgressTimeout=setTimeout((()=>this.setState({showProgressBar:!0})),G.a)),this.props.isLoading&&!e.isLoading&&(clearTimeout(this._delayedProgressTimeout),this.setState({showProgressBar:!1}))}componentDidUpdate(e){e.items!==this.props.items&&(this._resetFocus(),this._resetScroll(),this._interactivityTimeout&&clearTimeout(this._interactivityTimeout),this._shouldBlockInteractivity=!0,this._interactivityTimeout=setTimeout((()=>{this._shouldBlockInteractivity=!1}),500))}render(){const{domId:e,isLoading:t,items:s,selectedItems:o,style:r}=this.props,{showProgressBar:i}=this.state,n=t||s.length;let c=0;const l=!!o;return n?a.createElement(X.a,{accessibilityRole:"listbox","aria-multiselectable":l,nativeID:e,style:r},a.createElement(Z.a,{ariaValueText:i?"Loading results":"",indeterminate:i,style:!i&&oe.hidden}),s.length?s.map(((e,t)=>{const o=!Array.isArray(s[t-1])&&t>0,r=t<s.length-1,i=Array.isArray(e)?this._renderTypeaheadGroup(e,c,o,r):this._renderTypeaheadItem(e,c);return c+=Array.isArray(e)?e.length:1,i})):null):null}_renderTypeaheadGroup(e,t,s,o){const{withSectionDivider:r}=this.props;return a.createElement(a.Fragment,{key:`typeaheadGroup-${t}`},r&&s?a.createElement(J.a,{key:`typeaheadDividerTop-${t}`}):null,e.map(((e,s)=>this._renderTypeaheadItem(e,t+s))),r&&o?a.createElement(J.a,{key:`typeaheadDividerBottom-${t}`}):null)}_renderTypeaheadItem(e,t){const{ariaDescendantId:s,getItemDisabledMessage:o,getItemIsDisabled:r,renderUserDecoration:i,selectedItems:n}=this.props,{focusIndex:c}=this.state,l=!(!n||!e.id)&&n.indexOf(e.id)>=0,d=!!n,h=c===t,u=r&&r(e,e.data),p=o&&o(e,e.data);return a.createElement(Q.b,{disabledMessage:p,domId:h?s:void 0,isDisabled:u,isFocused:h,isInMultiSelect:d,isSelected:l,item:e,key:`typeaheadItem-${t}-${e.id||""}`,onClick:this._handleItemClick,onRef:h?this._setFocusedItemRef:void 0,renderUserDecoration:i})}_getScrollParent(){if(!this._scrollParent){const e=Object(te.a)($.a.findDOMNode(this));this._scrollParent=e===window?null:e}return this._scrollParent}}const oe=ee.a.create((e=>({hidden:{visibility:"hidden"}})));class re extends a.Component{constructor(e,t){super(e,t),n()(this,"_fetchTypeaheadResultsIfNeeded",(e=>{e.query&&e.fetchTypeaheadIfNeeded({q:e.query,src:e.source,result_type:e.filter.join(","),context_text:e.contextText,topic_type:e.topicType}).catch(e.createLocalApiErrorHandler({}))})),n()(this,"_handleItemClick",((e,t)=>{const{analytics:s,onItemClick:o,query:r}=this.props;o(e,t),s.scribe({action:"click",data:{search_details:{query:r},targets:[V.a.forTypeaheadResult(e,t)]}})})),n()(this,"_scribeResults",(()=>{const{analytics:e,items:t,query:s}=this.props;e.scribe({action:"impression",data:{items:V.a.forTypeaheadResults(t),search_details:{query:s}}})})),this._debouncedFetchTypeaheadResultsIfNeeded=Object(B.a)(this._fetchTypeaheadResultsIfNeeded,250),this.state={shouldShowPrefetchResults:!0}}componentDidMount(){const{createLocalApiErrorHandler:e,prefetchTypeaheadUsersIfNeeded:t}=this.props;this._debouncedFetchTypeaheadResultsIfNeeded(this.props),t().catch(e({}))}componentWillUnmount(){clearTimeout(this._prefetchResultsTimer)}UNSAFE_componentWillReceiveProps(e){const{query:t,filter:s,source:o}=this.props,{query:r,filter:i,source:n}=e;r===t&&i===s&&n===o||(this._debouncedFetchTypeaheadResultsIfNeeded(e),e.shouldDeferPrefetch&&(clearTimeout(this._prefetchResultsTimer),this.setState({shouldShowPrefetchResults:!1}),this._prefetchResultsTimer=setTimeout((()=>{this.props.query&&this.props.fetchStatus!==p.a.LOADED&&this.setState({shouldShowPrefetchResults:!0})}),G.a)))}componentDidUpdate(e){const{items:t,onItemsChanged:s}=this.props;null!=t&&t.length&&t!==e.items&&(this._scribeResults(),s&&s(t))}render(){const{analytics:e,contextText:t,dropdownRef:s,filter:o,getTopicExactMatch:i,getUserExactMatch:n,injectedItems:c,items:l,onItemClick:d,onItemsChanged:h,query:u,shouldDeferPrefetch:m,source:f,topicType:_,fetchStatus:y,createLocalApiErrorHandler:g,fetchTypeaheadIfNeeded:b,maxEvents:w,maxTopics:I,prefetchTypeaheadUsersIfNeeded:v,...x}=this.props,E=u&&y!==p.a.LOADED,D=E&&!this.state.shouldShowPrefetchResults?c:l;return a.createElement(se,r()({},x,{isLoading:!!E,items:D,onItemClick:this._handleItemClick,ref:s}))}}n()(re,"defaultProps",{filter:[I.a.Users],injectedItems:[],maxEvents:3,maxTopics:1});const ie=a.forwardRef(((e,t)=>a.createElement(re,r()({},e,{dropdownRef:t})))),ne=H.forwardRef(ie);t.a=ne},OhSZ:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));s("kYxP");var o=s("ERkP"),r=s("aWyx"),i=s("XnpN"),n=s("jV+4"),a=s("t62R"),c=s("p9G8");const l=(e=[])=>e.map((({data:e})=>e)),d=({conversation:e,newConversationParticipants:t,perspective:s})=>{if(e){if(e.type===r.a.ONE_TO_ONE){const[t]=Object(i.a)(e,s).map((({user:e})=>e));return t.name}return Object(c.a)(e,s)}{const e=l(t);return Object(c.b)(e,s)}};t.b=({conversation:e,newConversationParticipants:t,perspective:s,titleWeight:d="bold",textColor:h="normal",withScreenName:u=!0})=>{if(e){if(e.type===r.a.ONE_TO_ONE){const[t]=Object(i.a)(e,s).map((({user:e})=>e));return o.createElement(n.a,{color:h,isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,weight:d,withLink:!1,withScreenName:u})}return o.createElement(a.c,{color:h,numberOfLines:1,weight:d},Object(c.a)(e,s))}{const e=l(t);return o.createElement(a.c,{color:h,numberOfLines:1,weight:d},Object(c.b)(e,s))}}},XnpN:function(e,t,s){"use strict";s("kYxP");var o=s("aWyx"),r=s("t0aI");const i=(e=0)=>new Date(Number(e)),n=(e,t)=>i(e.join_time)-i(t.join_time),a=({user:e},{user:t})=>Object(r.a)(e.id_str,t.id_str);var c=s("tn7R"),l=s("VIKJ");t.a=(e,t)=>{const{participants:s,type:r,created_by_user_id:i}=e,d=Object(c.a)(s),[h,u]=Object(l.a)(d,(({user:e})=>e.id_str===t));return u.length?r===o.a.GROUP&&1===u.length?[...h,...u]:i?u.sort(((...e)=>(t,s)=>e.map((e=>e(t,s))).filter((e=>!!e))[0]||0)((e=>({user:t},{user:s})=>{switch(e){case t.id_str:return-1;case s.id_str:return 1;default:return 0}})(i),n,a)):u:h}},ZcYN:function(e,t,s){"use strict";s.d(t,"a",(function(){return Q}));var o=s("KEM+"),r=s.n(o),i=(s("kYxP"),s("ERkP")),n=s("v6aA"),a=s("ZNx0"),c=s("IMYl"),l=s("rxPX"),d=s("AQOc"),h=s("V5Qi"),u=s("G6rE");const p=(e,t)=>t.conversationId,m=(e,t)=>Object(h.a)(e,p(0,t));var f=Object(l.a)().propsFromState((()=>({conversationId:p,conversation:m,users:u.e.selectAll}))).adjustStateProps((({conversationId:e,conversation:t,users:s})=>({conversation:t&&Object(d.b)(t.data,void 0,s)}))),_=s("aA19"),y=s("OhSZ"),g=s("5mJL"),b=s("rHpw");const w=b.a.create((e=>({root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical,width:"100%"},avatarColumn:{flexGrow:1,maxWidth:e.spaces.space40,minWidth:"32px"},bodyColumn:{flexGrow:7,alignItems:"center",flexDirection:"row",justifyContent:"space-between"},disabled:{opacity:.6,backgroundColor:e.colors.gray0}})));var I=f((({conversation:e,perspective:t,isDisabled:s,isSelected:o})=>e?i.createElement(g.a,{avatarCell:i.createElement(_.a,{conversation:e,perspective:t,size:"xLarge"}),avatarCellStyle:w.avatarColumn,avatarSize:"xLarge",cellStyle:w.bodyColumn,style:[w.root,!o&&s&&w.disabled]},i.createElement(y.b,{conversation:e,perspective:t}),Q({isSelected:o})):null)),v=s("MWbm"),x=s("LbZ7"),E=s("t62R"),D=s("9Xij"),C=s("TIdA"),R=s("A91F");class S extends i.PureComponent{render(){const{image:e,event:t,supportText:s}=this.props;return i.createElement(v.a,{style:T.root},i.createElement(x.a,{withGutter:!0},i.createElement(v.a,{style:T.bodyColumn},s?i.createElement(E.c,{color:"gray600",size:"small"},s):null,i.createElement(E.c,{numberOfLines:1},t)),e?i.createElement(v.a,{style:T.coverContainer},i.createElement(D.a,{ratio:1},i.createElement(C.a,{accessibilityLabel:"",aspectMode:R.a.SQUARE,image:e}))):null))}}const O="100px",T=b.a.create((e=>({root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.spaces.space16},bodyColumn:{flexGrow:7,justifyContent:"center"},coverContainer:{backgroundColor:e.colors.gray200,borderRadius:e.borderRadii.small,flexGrow:1,justifyContent:"flex-end",maxHeight:O,maxWidth:O,overflow:"hidden",width:"25%"}})));var P=S,F=s("GZwR"),k=s("EHV7");class j extends i.PureComponent{render(){const{isDisabled:e,resultContext:t,topic:s}=this.props;return i.createElement(v.a,{style:[A.root,e&&A.disabled]},i.createElement(E.c,{weight:"bold",withHashflags:!0},s),t?i.createElement(v.a,{style:A.context},this._renderIcon(),i.createElement(E.c,{color:"gray600"},t.display_string)):null)}_renderIcon(){const{resultContext:e}=this.props;return e&&e.types[0]&&"followable_topic"===e.types[0].type?i.createElement(k.a,{style:A.icon}):null}}const A=b.a.create((e=>({root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.spaces.space16},context:{alignItems:"center",flexDirection:"row"},icon:{color:e.colors.primary,height:e.fontSizes.small,paddingRight:e.spaces.space4,width:e.fontSizes.small},disabled:{backgroundColor:e.colors.gray0}})));var N=j,L=s("3XMw"),U=s.n(L),M=s("tocL"),W="TypeaheadUser",q=s("IMA+");const H=U.a.ae2205d1,B=U.a.d960b55b;class G extends i.PureComponent{render(){const{avatarUri:e,disabledMessage:t,isDisabled:s,isProtected:o,isVerified:r,name:n,screenName:a,decoration:c,userId:l}=this.props,d=this._getSocialContext(),h=this._getResultContext(),u=d||h;return i.createElement(q.a,{avatarSize:"xLarge",avatarUri:e,decoration:c,disabledMessage:s?t:void 0,displayMode:"UserCompact",isProtected:o,isVerified:r,name:n,screenName:a,socialContext:u,testID:W,userId:l,withLink:!1})}_getSocialContext(){const{socialContext:e}=this.props;if(!e||!e.following)return;const t=e.followed_by?H:B;return{contextType:M.a.Follow,text:t}}_getResultContext(){const{resultContext:e}=this.props;if(!e||!e.display_string||!e.types)return;return{contextType:"num_tweets"===e.types[0].type?M.a.NewTweets:M.a.Follow,text:e.display_string}}}var V=G,z=s("htQn");class Y extends i.Component{constructor(...e){super(...e),r()(this,"_onViewRef",(e=>{this._viewRef=e;const{onRef:t}=this.props;t&&t(e)})),r()(this,"_handleClick",(()=>{const{item:e}=this.props;this.props.onClick&&this.props.onClick(e,this.isDisabled)}))}componentDidMount(){this._loaded=!0,this._viewRef&&(this._rafId=window.requestAnimationFrame((()=>{this._viewRef&&this._viewRef.setNativeProps({style:{opacity:1}})})))}componentDidUpdate(e){const{onRef:t}=this.props;t&&t!==e.onRef&&this._viewRef&&t(this._viewRef)}componentWillUnmount(){this._rafId&&window.cancelAnimationFrame(this._rafId)}render(){const{domId:e,isDisabled:t,isFocused:s,isInMultiSelect:o,isSelected:r,style:n}=this.props;return i.createElement(a.a,{viewType:"typeahead_result"},i.createElement(v.a,{accessibilityRole:"option",accessibilityState:{checked:!(!o||!r)||void 0,selected:t?void 0:o&&r||!o&&!!s},nativeID:e},i.createElement(z.a,{accessibilityRole:o?"checkbox":"button",accessible:!0,disabled:t,onPress:this._handleClick,style:[$.root,s&&$.focused,$.transitionStyles,this._loaded&&$.loaded,n],viewRef:this._onViewRef},this._renderResult())))}_renderResult(){const{item:e,disabledMessage:t,isDisabled:s,isSelected:o,renderUserDecoration:r}=this.props;switch(e.type){case F.b.User:{const{data:n}=e,a=r?r({userId:n.id_str,isSelected:o}):void 0;return i.createElement(V,{avatarUri:n.profile_image_url_https,canDm:!!n.can_dm,canMediaTag:!!n.can_media_tag,decoration:a||void 0,disabledMessage:t,isDisabled:s,isProtected:!!n.protected,isVerified:!!n.verified,name:n.name,resultContext:n.result_context,screenName:n.screen_name,socialContext:n.social_context,userId:n.id_str})}case F.b.Event:{const{data:t}=e;return i.createElement(P,{event:t.topic,image:t.primary_image&&t.primary_image.original_info,supportText:t.supporting_text})}case F.b.Hashtag:case F.b.Topic:{const{data:t}=e;return i.createElement(N,{isDisabled:s,resultContext:t.result_context,topic:t.topic})}case F.b.DMConversation:return!!this.context.loggedInUserId&&i.createElement(I,{conversationId:e.id,isDisabled:s,isSelected:o,perspective:this.context.loggedInUserId});case F.b.NoResult:{const{data:t}=e,{text:s}=t;return i.createElement(E.c,{style:$.noResult},s)}default:return null}}get isDisabled(){return!!this.props.isDisabled}}r()(Y,"contextType",n.a);const $=b.a.create((e=>({root:{borderBottomColor:e.colors.borderColor,borderBottomStyle:"solid",borderBottomWidth:e.borderWidths.small},checkIcon:{color:e.colors.primary},noResult:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.spaces.space16},loaded:{opacity:1},focused:{backgroundColor:e.colors.gray0},transitionStyles:{transitionProperty:"opacity",transitionDuration:"250ms",opacity:0}}))),Q=({isSelected:e})=>e?i.createElement(c.a,{importantForAccessibility:"no-hide-descendants",style:$.checkIcon}):null;t.b=Y},aA19:function(e,t,s){"use strict";var o=s("ERkP"),r=s("aWyx"),i=s("XnpN"),n=s("rHpw"),a=s("9Xij"),c=s("cm6r"),l=s("TIdA"),d=s("A91F"),h=s("oSwX"),u=s("U+bB"),p=s("MWbm");const m=n.a.create((e=>({root:{borderRadius:e.borderRadii.infinite,overflow:"hidden"},container:{height:"auto",overflow:"hidden",width:"100%"},image:{borderRadius:e.borderRadii.none}}))),f=n.a.create((e=>({container:{flexDirection:"row"},left:{flex:1},right:{flex:1,marginLeft:e.borderWidths.small,marginRight:`calc(-1 * ${e.borderWidths.small})`}}))),_=n.a.create((e=>({container:{flexDirection:"column"},top:{flex:1,marginBottom:e.borderWidths.small},bottom:{flex:1}}))),y=({left:e,right:t})=>o.createElement(p.a,{style:f.container},o.createElement(p.a,{style:f.left},e),o.createElement(p.a,{style:f.right},t)),g=({top:e,bottom:t})=>o.createElement(p.a,{style:_.container},o.createElement(p.a,{style:_.top},e),o.createElement(p.a,{style:_.bottom},t));class b extends o.Component{render(){const{link:e,conversation:t,perspective:s}=this.props,r=t&&t.avatar_image_https,n=t?Object(i.a)(t,s).map((({user:e})=>e)):[],l=n.slice(0,3),d=this._avatarFromGroup(t)||this._avatarFromSrc(r)||this._avatarFromParticipants(l),h=e||this._defaultLink(t,n);return d?o.createElement(a.a,{ratio:1,style:m.root},h?o.createElement(c.a,{interactiveStyles:null,link:h},d):d):null}_defaultLink(e,t){if(e)return e.type===r.a.GROUP?`/messages/${e.conversation_id}/participants`:e.type===r.a.ONE_TO_ONE?`/${t[0].screen_name}`:void 0}_avatarFromGroup(e){const t=e&&e.avatar&&e.avatar.image&&e.avatar.image.original_info;return t?o.createElement(l.a,{accessibilityLabel:"",aspectMode:d.a.SQUARE,backgroundColor:n.a.theme.colors.gray50,image:t,rounded:!0}):null}_avatarFromSrc(e){return e?o.createElement(u.a,{source:e}):null}_avatarFromParticipants(e){const t=e.length;return 0===t?null:1===t?this._singleParticipantAvatar(e[0]):this._multipleParticipantAvatar(e)}_singleParticipantAvatar(e){const{size:t}=this.props;return o.createElement(p.a,{key:e.id_str,style:m.container},o.createElement(h.default,{importantForAccessibility:"no-hide-descendants",size:t||"xxLarge",style:m.image,uri:e.profile_image_url_https}))}_multipleParticipantAvatar(e){const t=e.length,s=e.map(((e,s)=>{const r=2===t||3===t&&0===s?.5:1;return o.createElement(p.a,{key:e.id_str,style:m.container},o.createElement(h.default,{aspectRatio:r,circle:!1,importantForAccessibility:"no-hide-descendants",size:"custom",style:m.image,uri:e.profile_image_url_https}))}));if(2===t)return o.createElement(y,{left:s[1],right:s[0]});{const e=o.createElement(g,{bottom:s[2],top:s[1]}),t=s[0];return o.createElement(y,{left:e,right:t})}}}t.a=b},o52z:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var o=s("VPAj");const r=Object(o.a)([]);Object(o.a)({})},p9G8:function(e,t,s){"use strict";s.d(t,"b",(function(){return d}));s("kYxP");var o=s("Xrkv"),r=s("aWyx"),i=s("XnpN"),n=s("3XMw"),a=s.n(n);const c=a.a.g755fcde,l=a.a.f6b1ff81;t.a=(e,t)=>{const{type:s,name:o,participants:n={}}=e;if(s===r.a.GROUP&&o)return o;if(!Object.keys(n).length)return;const a=Object(i.a)(e,t).map((({user:e})=>e));return d(a,t,s)};const d=(e=[],t,s=r.a.GROUP)=>{const i=e.filter((e=>e.id_str!==t)).map((e=>e.name));switch(i.length){case 0:return c;case 1:{const[e]=i;return s===r.a.GROUP?l({name:e}):e}default:{const e=!0;return Object(o.a)(i,e)}}}}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Typeahead~bundle.UserLists.e2031dc5.js.map