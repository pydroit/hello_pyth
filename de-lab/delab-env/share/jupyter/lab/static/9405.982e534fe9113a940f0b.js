(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9405],{79405:(e,t,r)=>{"use strict";r.r(t);r.d(t,{FixedSizeGrid:()=>Q,FixedSizeList:()=>X,VariableSizeGrid:()=>k,VariableSizeList:()=>J,areEqual:()=>te,shouldComponentUpdate:()=>re});var n=r(22122);var o=r(63349);var a=r(41788);var i=Number.isNaN||function e(t){return typeof t==="number"&&t!==t};function l(e,t){if(e===t){return true}if(i(e)&&i(t)){return true}return false}function s(e,t){if(e.length!==t.length){return false}for(var r=0;r<e.length;r++){if(!l(e[r],t[r])){return false}}return true}function c(e,t){if(t===void 0){t=s}var r;var n=[];var o;var a=false;function i(){var i=[];for(var l=0;l<arguments.length;l++){i[l]=arguments[l]}if(a&&r===this&&t(i,n)){return o}o=e.apply(this,i);a=true;r=this;n=i;return o}return i}const u=c;var f=r(77865);var d=r(19756);var h=typeof performance==="object"&&typeof performance.now==="function";var v=h?function(){return performance.now()}:function(){return Date.now()};function m(e){cancelAnimationFrame(e.id)}function p(e,t){var r=v();function n(){if(v()-r>=t){e.call(null)}else{o.id=requestAnimationFrame(n)}}var o={id:requestAnimationFrame(n)};return o}var g=-1;function S(e){if(e===void 0){e=false}if(g===-1||e){var t=document.createElement("div");var r=t.style;r.width="50px";r.height="50px";r.overflow="scroll";document.body.appendChild(t);g=t.offsetWidth-t.clientWidth;document.body.removeChild(t)}return g}var I=null;function w(e){if(e===void 0){e=false}if(I===null||e){var t=document.createElement("div");var r=t.style;r.width="50px";r.height="50px";r.overflow="scroll";r.direction="rtl";var n=document.createElement("div");var o=n.style;o.width="100px";o.height="100px";t.appendChild(n);document.body.appendChild(t);if(t.scrollLeft>0){I="positive-descending"}else{t.scrollLeft=1;if(t.scrollLeft===0){I="negative"}else{I="positive-ascending"}}document.body.removeChild(t);return I}return I}var M=150;var x=function e(t){var r=t.columnIndex,n=t.data,o=t.rowIndex;return o+":"+r};var _=null;var C=null;var R=null;if(false){}function y(e){var t;var r=e.getColumnOffset,i=e.getColumnStartIndexForOffset,l=e.getColumnStopIndexForStartIndex,s=e.getColumnWidth,c=e.getEstimatedTotalHeight,d=e.getEstimatedTotalWidth,h=e.getOffsetForColumnAndAlignment,v=e.getOffsetForRowAndAlignment,g=e.getRowHeight,I=e.getRowOffset,_=e.getRowStartIndexForOffset,C=e.getRowStopIndexForStartIndex,R=e.initInstanceProps,y=e.shouldResetStyleCacheOnItemSizeChange,z=e.validateProps;return t=function(e){(0,a.Z)(t,e);function t(t){var n;n=e.call(this,t)||this;n._instanceProps=R(n.props,(0,o.Z)(n));n._resetIsScrollingTimeoutId=null;n._outerRef=void 0;n.state={instance:(0,o.Z)(n),isScrolling:false,horizontalScrollDirection:"forward",scrollLeft:typeof n.props.initialScrollLeft==="number"?n.props.initialScrollLeft:0,scrollTop:typeof n.props.initialScrollTop==="number"?n.props.initialScrollTop:0,scrollUpdateWasRequested:false,verticalScrollDirection:"forward"};n._callOnItemsRendered=void 0;n._callOnItemsRendered=u((function(e,t,r,o,a,i,l,s){return n.props.onItemsRendered({overscanColumnStartIndex:e,overscanColumnStopIndex:t,overscanRowStartIndex:r,overscanRowStopIndex:o,visibleColumnStartIndex:a,visibleColumnStopIndex:i,visibleRowStartIndex:l,visibleRowStopIndex:s})}));n._callOnScroll=void 0;n._callOnScroll=u((function(e,t,r,o,a){return n.props.onScroll({horizontalScrollDirection:r,scrollLeft:e,scrollTop:t,verticalScrollDirection:o,scrollUpdateWasRequested:a})}));n._getItemStyle=void 0;n._getItemStyle=function(e,t){var o=n.props,a=o.columnWidth,i=o.direction,l=o.rowHeight;var c=n._getItemStyleCache(y&&a,y&&i,y&&l);var u=e+":"+t;var f;if(c.hasOwnProperty(u)){f=c[u]}else{var d=r(n.props,t,n._instanceProps);var h=i==="rtl";c[u]=f={position:"absolute",left:h?undefined:d,right:h?d:undefined,top:I(n.props,e,n._instanceProps),height:g(n.props,e,n._instanceProps),width:s(n.props,t,n._instanceProps)}}return f};n._getItemStyleCache=void 0;n._getItemStyleCache=u((function(e,t,r){return{}}));n._onScroll=function(e){var t=e.currentTarget,r=t.clientHeight,o=t.clientWidth,a=t.scrollLeft,i=t.scrollTop,l=t.scrollHeight,s=t.scrollWidth;n.setState((function(e){if(e.scrollLeft===a&&e.scrollTop===i){return null}var t=n.props.direction;var c=a;if(t==="rtl"){switch(w()){case"negative":c=-a;break;case"positive-descending":c=s-o-a;break}}c=Math.max(0,Math.min(c,s-o));var u=Math.max(0,Math.min(i,l-r));return{isScrolling:true,horizontalScrollDirection:e.scrollLeft<a?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:e.scrollTop<i?"forward":"backward",scrollUpdateWasRequested:false}}),n._resetIsScrollingDebounced)};n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e;if(typeof t==="function"){t(e)}else if(t!=null&&typeof t==="object"&&t.hasOwnProperty("current")){t.current=e}};n._resetIsScrollingDebounced=function(){if(n._resetIsScrollingTimeoutId!==null){m(n._resetIsScrollingTimeoutId)}n._resetIsScrollingTimeoutId=p(n._resetIsScrolling,M)};n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null;n.setState({isScrolling:false},(function(){n._getItemStyleCache(-1)}))};return n}t.getDerivedStateFromProps=function e(t,r){T(t,r);z(t);return null};var O=t.prototype;O.scrollTo=function e(t){var r=t.scrollLeft,n=t.scrollTop;if(r!==undefined){r=Math.max(0,r)}if(n!==undefined){n=Math.max(0,n)}this.setState((function(e){if(r===undefined){r=e.scrollLeft}if(n===undefined){n=e.scrollTop}if(e.scrollLeft===r&&e.scrollTop===n){return null}return{horizontalScrollDirection:e.scrollLeft<r?"forward":"backward",scrollLeft:r,scrollTop:n,scrollUpdateWasRequested:true,verticalScrollDirection:e.scrollTop<n?"forward":"backward"}}),this._resetIsScrollingDebounced)};O.scrollToItem=function e(t){var r=t.align,n=r===void 0?"auto":r,o=t.columnIndex,a=t.rowIndex;var i=this.props,l=i.columnCount,s=i.height,u=i.rowCount,f=i.width;var m=this.state,p=m.scrollLeft,g=m.scrollTop;var I=S();if(o!==undefined){o=Math.max(0,Math.min(o,l-1))}if(a!==undefined){a=Math.max(0,Math.min(a,u-1))}var w=c(this.props,this._instanceProps);var M=d(this.props,this._instanceProps);var x=M>f?I:0;var _=w>s?I:0;this.scrollTo({scrollLeft:o!==undefined?h(this.props,o,n,p,this._instanceProps,_):p,scrollTop:a!==undefined?v(this.props,a,n,g,this._instanceProps,x):g})};O.componentDidMount=function e(){var t=this.props,r=t.initialScrollLeft,n=t.initialScrollTop;if(this._outerRef!=null){var o=this._outerRef;if(typeof r==="number"){o.scrollLeft=r}if(typeof n==="number"){o.scrollTop=n}}this._callPropsCallbacks()};O.componentDidUpdate=function e(){var t=this.props.direction;var r=this.state,n=r.scrollLeft,o=r.scrollTop,a=r.scrollUpdateWasRequested;if(a&&this._outerRef!=null){var i=this._outerRef;if(t==="rtl"){switch(w()){case"negative":i.scrollLeft=-n;break;case"positive-ascending":i.scrollLeft=n;break;default:var l=i.clientWidth,s=i.scrollWidth;i.scrollLeft=s-l-n;break}}else{i.scrollLeft=Math.max(0,n)}i.scrollTop=Math.max(0,o)}this._callPropsCallbacks()};O.componentWillUnmount=function e(){if(this._resetIsScrollingTimeoutId!==null){m(this._resetIsScrollingTimeoutId)}};O.render=function e(){var t=this.props,r=t.children,o=t.className,a=t.columnCount,i=t.direction,l=t.height,s=t.innerRef,u=t.innerElementType,h=t.innerTagName,v=t.itemData,m=t.itemKey,p=m===void 0?x:m,g=t.outerElementType,S=t.outerTagName,I=t.rowCount,w=t.style,M=t.useIsScrolling,_=t.width;var C=this.state.isScrolling;var R=this._getHorizontalRangeToRender(),y=R[0],T=R[1];var z=this._getVerticalRangeToRender(),O=z[0],b=z[1];var P=[];if(a>0&&I){for(var W=O;W<=b;W++){for(var D=y;D<=T;D++){P.push((0,f.createElement)(r,{columnIndex:D,data:v,isScrolling:M?C:undefined,key:p({columnIndex:D,data:v,rowIndex:W}),rowIndex:W,style:this._getItemStyle(W,D)}))}}}var F=c(this.props,this._instanceProps);var L=d(this.props,this._instanceProps);return(0,f.createElement)(g||S||"div",{className:o,onScroll:this._onScroll,ref:this._outerRefSetter,style:(0,n.Z)({position:"relative",height:l,width:_,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},w)},(0,f.createElement)(u||h||"div",{children:P,ref:s,style:{height:F,pointerEvents:C?"none":undefined,width:L}}))};O._callPropsCallbacks=function e(){var t=this.props,r=t.columnCount,n=t.onItemsRendered,o=t.onScroll,a=t.rowCount;if(typeof n==="function"){if(r>0&&a>0){var i=this._getHorizontalRangeToRender(),l=i[0],s=i[1],c=i[2],u=i[3];var f=this._getVerticalRangeToRender(),d=f[0],h=f[1],v=f[2],m=f[3];this._callOnItemsRendered(l,s,d,h,c,u,v,m)}}if(typeof o==="function"){var p=this.state,g=p.horizontalScrollDirection,S=p.scrollLeft,I=p.scrollTop,w=p.scrollUpdateWasRequested,M=p.verticalScrollDirection;this._callOnScroll(S,I,g,M,w)}};O._getHorizontalRangeToRender=function e(){var t=this.props,r=t.columnCount,n=t.overscanColumnCount,o=t.overscanColumnsCount,a=t.overscanCount,s=t.rowCount;var c=this.state,u=c.horizontalScrollDirection,f=c.isScrolling,d=c.scrollLeft;var h=n||o||a||1;if(r===0||s===0){return[0,0,0,0]}var v=i(this.props,d,this._instanceProps);var m=l(this.props,v,d,this._instanceProps);var p=!f||u==="backward"?Math.max(1,h):1;var g=!f||u==="forward"?Math.max(1,h):1;return[Math.max(0,v-p),Math.max(0,Math.min(r-1,m+g)),v,m]};O._getVerticalRangeToRender=function e(){var t=this.props,r=t.columnCount,n=t.overscanCount,o=t.overscanRowCount,a=t.overscanRowsCount,i=t.rowCount;var l=this.state,s=l.isScrolling,c=l.verticalScrollDirection,u=l.scrollTop;var f=o||a||n||1;if(r===0||i===0){return[0,0,0,0]}var d=_(this.props,u,this._instanceProps);var h=C(this.props,d,u,this._instanceProps);var v=!s||c==="backward"?Math.max(1,f):1;var m=!s||c==="forward"?Math.max(1,f):1;return[Math.max(0,d-v),Math.max(0,Math.min(i-1,h+m)),d,h]};return t}(f.PureComponent),t.defaultProps={direction:"ltr",itemData:undefined,useIsScrolling:false},t}var T=function e(t,r){var n=t.children,o=t.direction,a=t.height,i=t.innerTagName,l=t.outerTagName,s=t.overscanColumnsCount,c=t.overscanCount,u=t.overscanRowsCount,f=t.width;var d=r.instance;if(false){}};var z=50;var O=function e(t,r){var n=t.rowCount;var o=r.rowMetadataMap,a=r.estimatedRowHeight,i=r.lastMeasuredRowIndex;var l=0;if(i>=n){i=n-1}if(i>=0){var s=o[i];l=s.offset+s.size}var c=n-i-1;var u=c*a;return l+u};var b=function e(t,r){var n=t.columnCount;var o=r.columnMetadataMap,a=r.estimatedColumnWidth,i=r.lastMeasuredColumnIndex;var l=0;if(i>=n){i=n-1}if(i>=0){var s=o[i];l=s.offset+s.size}var c=n-i-1;var u=c*a;return l+u};var P=function e(t,r,n,o){var a,i,l;if(t==="column"){a=o.columnMetadataMap;i=r.columnWidth;l=o.lastMeasuredColumnIndex}else{a=o.rowMetadataMap;i=r.rowHeight;l=o.lastMeasuredRowIndex}if(n>l){var s=0;if(l>=0){var c=a[l];s=c.offset+c.size}for(var u=l+1;u<=n;u++){var f=i(u);a[u]={offset:s,size:f};s+=f}if(t==="column"){o.lastMeasuredColumnIndex=n}else{o.lastMeasuredRowIndex=n}}return a[n]};var W=function e(t,r,n,o){var a,i;if(t==="column"){a=n.columnMetadataMap;i=n.lastMeasuredColumnIndex}else{a=n.rowMetadataMap;i=n.lastMeasuredRowIndex}var l=i>0?a[i].offset:0;if(l>=o){return D(t,r,n,i,0,o)}else{return F(t,r,n,Math.max(0,i),o)}};var D=function e(t,r,n,o,a,i){while(a<=o){var l=a+Math.floor((o-a)/2);var s=P(t,r,l,n).offset;if(s===i){return l}else if(s<i){a=l+1}else if(s>i){o=l-1}}if(a>0){return a-1}else{return 0}};var F=function e(t,r,n,o,a){var i=t==="column"?r.columnCount:r.rowCount;var l=1;while(o<i&&P(t,r,o,n).offset<a){o+=l;l*=2}return D(t,r,n,Math.min(o,i-1),Math.floor(o/2),a)};var L=function e(t,r,n,o,a,i,l){var s=t==="column"?r.width:r.height;var c=P(t,r,n,i);var u=t==="column"?b(r,i):O(r,i);var f=Math.max(0,Math.min(u-s,c.offset));var d=Math.max(0,c.offset-s+l+c.size);if(o==="smart"){if(a>=d-s&&a<=f+s){o="auto"}else{o="center"}}switch(o){case"start":return f;case"end":return d;case"center":return Math.round(d+(f-d)/2);case"auto":default:if(a>=d&&a<=f){return a}else if(d>f){return d}else if(a<d){return d}else{return f}}};var k=y({getColumnOffset:function e(t,r,n){return P("column",t,r,n).offset},getColumnStartIndexForOffset:function e(t,r,n){return W("column",t,n,r)},getColumnStopIndexForStartIndex:function e(t,r,n,o){var a=t.columnCount,i=t.width;var l=P("column",t,r,o);var s=n+i;var c=l.offset+l.size;var u=r;while(u<a-1&&c<s){u++;c+=P("column",t,u,o).size}return u},getColumnWidth:function e(t,r,n){return n.columnMetadataMap[r].size},getEstimatedTotalHeight:O,getEstimatedTotalWidth:b,getOffsetForColumnAndAlignment:function e(t,r,n,o,a,i){return L("column",t,r,n,o,a,i)},getOffsetForRowAndAlignment:function e(t,r,n,o,a,i){return L("row",t,r,n,o,a,i)},getRowOffset:function e(t,r,n){return P("row",t,r,n).offset},getRowHeight:function e(t,r,n){return n.rowMetadataMap[r].size},getRowStartIndexForOffset:function e(t,r,n){return W("row",t,n,r)},getRowStopIndexForStartIndex:function e(t,r,n,o){var a=t.rowCount,i=t.height;var l=P("row",t,r,o);var s=n+i;var c=l.offset+l.size;var u=r;while(u<a-1&&c<s){u++;c+=P("row",t,u,o).size}return u},initInstanceProps:function e(t,r){var n=t,o=n.estimatedColumnWidth,a=n.estimatedRowHeight;var i={columnMetadataMap:{},estimatedColumnWidth:o||z,estimatedRowHeight:a||z,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};r.resetAfterColumnIndex=function(e,t){if(t===void 0){t=true}r.resetAfterIndices({columnIndex:e,shouldForceUpdate:t})};r.resetAfterRowIndex=function(e,t){if(t===void 0){t=true}r.resetAfterIndices({rowIndex:e,shouldForceUpdate:t})};r.resetAfterIndices=function(e){var t=e.columnIndex,n=e.rowIndex,o=e.shouldForceUpdate,a=o===void 0?true:o;if(typeof t==="number"){i.lastMeasuredColumnIndex=Math.min(i.lastMeasuredColumnIndex,t-1)}if(typeof n==="number"){i.lastMeasuredRowIndex=Math.min(i.lastMeasuredRowIndex,n-1)}r._getItemStyleCache(-1);if(a){r.forceUpdate()}};return i},shouldResetStyleCacheOnItemSizeChange:false,validateProps:function e(t){var r=t.columnWidth,n=t.rowHeight;if(false){}}});var H=150;var A=function e(t,r){return t};var E=null;var U=null;if(false){}function q(e){var t;var r=e.getItemOffset,i=e.getEstimatedTotalSize,l=e.getItemSize,s=e.getOffsetForIndexAndAlignment,c=e.getStartIndexForOffset,d=e.getStopIndexForStartIndex,h=e.initInstanceProps,v=e.shouldResetStyleCacheOnItemSizeChange,g=e.validateProps;return t=function(e){(0,a.Z)(t,e);function t(t){var n;n=e.call(this,t)||this;n._instanceProps=h(n.props,(0,o.Z)(n));n._outerRef=void 0;n._resetIsScrollingTimeoutId=null;n.state={instance:(0,o.Z)(n),isScrolling:false,scrollDirection:"forward",scrollOffset:typeof n.props.initialScrollOffset==="number"?n.props.initialScrollOffset:0,scrollUpdateWasRequested:false};n._callOnItemsRendered=void 0;n._callOnItemsRendered=u((function(e,t,r,o){return n.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:r,visibleStopIndex:o})}));n._callOnScroll=void 0;n._callOnScroll=u((function(e,t,r){return n.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:r})}));n._getItemStyle=void 0;n._getItemStyle=function(e){var t=n.props,o=t.direction,a=t.itemSize,i=t.layout;var s=n._getItemStyleCache(v&&a,v&&i,v&&o);var c;if(s.hasOwnProperty(e)){c=s[e]}else{var u=r(n.props,e,n._instanceProps);var f=l(n.props,e,n._instanceProps);var d=o==="horizontal"||i==="horizontal";var h=o==="rtl";var m=d?u:0;s[e]=c={position:"absolute",left:h?undefined:m,right:h?m:undefined,top:!d?u:0,height:!d?f:"100%",width:d?f:"100%"}}return c};n._getItemStyleCache=void 0;n._getItemStyleCache=u((function(e,t,r){return{}}));n._onScrollHorizontal=function(e){var t=e.currentTarget,r=t.clientWidth,o=t.scrollLeft,a=t.scrollWidth;n.setState((function(e){if(e.scrollOffset===o){return null}var t=n.props.direction;var i=o;if(t==="rtl"){switch(w()){case"negative":i=-o;break;case"positive-descending":i=a-r-o;break}}i=Math.max(0,Math.min(i,a-r));return{isScrolling:true,scrollDirection:e.scrollOffset<o?"forward":"backward",scrollOffset:i,scrollUpdateWasRequested:false}}),n._resetIsScrollingDebounced)};n._onScrollVertical=function(e){var t=e.currentTarget,r=t.clientHeight,o=t.scrollHeight,a=t.scrollTop;n.setState((function(e){if(e.scrollOffset===a){return null}var t=Math.max(0,Math.min(a,o-r));return{isScrolling:true,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:false}}),n._resetIsScrollingDebounced)};n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e;if(typeof t==="function"){t(e)}else if(t!=null&&typeof t==="object"&&t.hasOwnProperty("current")){t.current=e}};n._resetIsScrollingDebounced=function(){if(n._resetIsScrollingTimeoutId!==null){m(n._resetIsScrollingTimeoutId)}n._resetIsScrollingTimeoutId=p(n._resetIsScrolling,H)};n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null;n.setState({isScrolling:false},(function(){n._getItemStyleCache(-1,null)}))};return n}t.getDerivedStateFromProps=function e(t,r){N(t,r);g(t);return null};var I=t.prototype;I.scrollTo=function e(t){t=Math.max(0,t);this.setState((function(e){if(e.scrollOffset===t){return null}return{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:true}}),this._resetIsScrollingDebounced)};I.scrollToItem=function e(t,r){if(r===void 0){r="auto"}var n=this.props,o=n.itemCount,a=n.layout;var i=this.state.scrollOffset;t=Math.max(0,Math.min(t,o-1));var l=0;if(this._outerRef){var c=this._outerRef;if(a==="vertical"){l=c.scrollWidth>c.clientWidth?S():0}else{l=c.scrollHeight>c.clientHeight?S():0}}this.scrollTo(s(this.props,t,r,i,this._instanceProps,l))};I.componentDidMount=function e(){var t=this.props,r=t.direction,n=t.initialScrollOffset,o=t.layout;if(typeof n==="number"&&this._outerRef!=null){var a=this._outerRef;if(r==="horizontal"||o==="horizontal"){a.scrollLeft=n}else{a.scrollTop=n}}this._callPropsCallbacks()};I.componentDidUpdate=function e(){var t=this.props,r=t.direction,n=t.layout;var o=this.state,a=o.scrollOffset,i=o.scrollUpdateWasRequested;if(i&&this._outerRef!=null){var l=this._outerRef;if(r==="horizontal"||n==="horizontal"){if(r==="rtl"){switch(w()){case"negative":l.scrollLeft=-a;break;case"positive-ascending":l.scrollLeft=a;break;default:var s=l.clientWidth,c=l.scrollWidth;l.scrollLeft=c-s-a;break}}else{l.scrollLeft=a}}else{l.scrollTop=a}}this._callPropsCallbacks()};I.componentWillUnmount=function e(){if(this._resetIsScrollingTimeoutId!==null){m(this._resetIsScrollingTimeoutId)}};I.render=function e(){var t=this.props,r=t.children,o=t.className,a=t.direction,l=t.height,s=t.innerRef,c=t.innerElementType,u=t.innerTagName,d=t.itemCount,h=t.itemData,v=t.itemKey,m=v===void 0?A:v,p=t.layout,g=t.outerElementType,S=t.outerTagName,I=t.style,w=t.useIsScrolling,M=t.width;var x=this.state.isScrolling;var _=a==="horizontal"||p==="horizontal";var C=_?this._onScrollHorizontal:this._onScrollVertical;var R=this._getRangeToRender(),y=R[0],T=R[1];var z=[];if(d>0){for(var O=y;O<=T;O++){z.push((0,f.createElement)(r,{data:h,key:m(O,h),index:O,isScrolling:w?x:undefined,style:this._getItemStyle(O)}))}}var b=i(this.props,this._instanceProps);return(0,f.createElement)(g||S||"div",{className:o,onScroll:C,ref:this._outerRefSetter,style:(0,n.Z)({position:"relative",height:l,width:M,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},I)},(0,f.createElement)(c||u||"div",{children:z,ref:s,style:{height:_?"100%":b,pointerEvents:x?"none":undefined,width:_?b:"100%"}}))};I._callPropsCallbacks=function e(){if(typeof this.props.onItemsRendered==="function"){var t=this.props.itemCount;if(t>0){var r=this._getRangeToRender(),n=r[0],o=r[1],a=r[2],i=r[3];this._callOnItemsRendered(n,o,a,i)}}if(typeof this.props.onScroll==="function"){var l=this.state,s=l.scrollDirection,c=l.scrollOffset,u=l.scrollUpdateWasRequested;this._callOnScroll(s,c,u)}};I._getRangeToRender=function e(){var t=this.props,r=t.itemCount,n=t.overscanCount;var o=this.state,a=o.isScrolling,i=o.scrollDirection,l=o.scrollOffset;if(r===0){return[0,0,0,0]}var s=c(this.props,l,this._instanceProps);var u=d(this.props,s,l,this._instanceProps);var f=!a||i==="backward"?Math.max(1,n):1;var h=!a||i==="forward"?Math.max(1,n):1;return[Math.max(0,s-f),Math.max(0,Math.min(r-1,u+h)),s,u]};return t}(f.PureComponent),t.defaultProps={direction:"ltr",itemData:undefined,layout:"vertical",overscanCount:2,useIsScrolling:false},t}var N=function e(t,r){var n=t.children,o=t.direction,a=t.height,i=t.layout,l=t.innerTagName,s=t.outerTagName,c=t.width;var u=r.instance;if(false){var f}};var Z=50;var V=function e(t,r,n){var o=t,a=o.itemSize;var i=n.itemMetadataMap,l=n.lastMeasuredIndex;if(r>l){var s=0;if(l>=0){var c=i[l];s=c.offset+c.size}for(var u=l+1;u<=r;u++){var f=a(u);i[u]={offset:s,size:f};s+=f}n.lastMeasuredIndex=r}return i[r]};var j=function e(t,r,n){var o=r.itemMetadataMap,a=r.lastMeasuredIndex;var i=a>0?o[a].offset:0;if(i>=n){return G(t,r,a,0,n)}else{return K(t,r,Math.max(0,a),n)}};var G=function e(t,r,n,o,a){while(o<=n){var i=o+Math.floor((n-o)/2);var l=V(t,i,r).offset;if(l===a){return i}else if(l<a){o=i+1}else if(l>a){n=i-1}}if(o>0){return o-1}else{return 0}};var K=function e(t,r,n,o){var a=t.itemCount;var i=1;while(n<a&&V(t,n,r).offset<o){n+=i;i*=2}return G(t,r,Math.min(n,a-1),Math.floor(n/2),o)};var B=function e(t,r){var n=t.itemCount;var o=r.itemMetadataMap,a=r.estimatedItemSize,i=r.lastMeasuredIndex;var l=0;if(i>=n){i=n-1}if(i>=0){var s=o[i];l=s.offset+s.size}var c=n-i-1;var u=c*a;return l+u};var J=q({getItemOffset:function e(t,r,n){return V(t,r,n).offset},getItemSize:function e(t,r,n){return n.itemMetadataMap[r].size},getEstimatedTotalSize:B,getOffsetForIndexAndAlignment:function e(t,r,n,o,a,i){var l=t.direction,s=t.height,c=t.layout,u=t.width;var f=l==="horizontal"||c==="horizontal";var d=f?u:s;var h=V(t,r,a);var v=B(t,a);var m=Math.max(0,Math.min(v-d,h.offset));var p=Math.max(0,h.offset-d+h.size+i);if(n==="smart"){if(o>=p-d&&o<=m+d){n="auto"}else{n="center"}}switch(n){case"start":return m;case"end":return p;case"center":return Math.round(p+(m-p)/2);case"auto":default:if(o>=p&&o<=m){return o}else if(o<p){return p}else{return m}}},getStartIndexForOffset:function e(t,r,n){return j(t,n,r)},getStopIndexForStartIndex:function e(t,r,n,o){var a=t.direction,i=t.height,l=t.itemCount,s=t.layout,c=t.width;var u=a==="horizontal"||s==="horizontal";var f=u?c:i;var d=V(t,r,o);var h=n+f;var v=d.offset+d.size;var m=r;while(m<l-1&&v<h){m++;v+=V(t,m,o).size}return m},initInstanceProps:function e(t,r){var n=t,o=n.estimatedItemSize;var a={itemMetadataMap:{},estimatedItemSize:o||Z,lastMeasuredIndex:-1};r.resetAfterIndex=function(e,t){if(t===void 0){t=true}a.lastMeasuredIndex=Math.min(a.lastMeasuredIndex,e-1);r._getItemStyleCache(-1);if(t){r.forceUpdate()}};return a},shouldResetStyleCacheOnItemSizeChange:false,validateProps:function e(t){var r=t.itemSize;if(false){}}});var Q=y({getColumnOffset:function e(t,r){var n=t.columnWidth;return r*n},getColumnWidth:function e(t,r){var n=t.columnWidth;return n},getRowOffset:function e(t,r){var n=t.rowHeight;return r*n},getRowHeight:function e(t,r){var n=t.rowHeight;return n},getEstimatedTotalHeight:function e(t){var r=t.rowCount,n=t.rowHeight;return n*r},getEstimatedTotalWidth:function e(t){var r=t.columnCount,n=t.columnWidth;return n*r},getOffsetForColumnAndAlignment:function e(t,r,n,o,a,i){var l=t.columnCount,s=t.columnWidth,c=t.width;var u=Math.max(0,l*s-c);var f=Math.min(u,r*s);var d=Math.max(0,r*s-c+i+s);if(n==="smart"){if(o>=d-c&&o<=f+c){n="auto"}else{n="center"}}switch(n){case"start":return f;case"end":return d;case"center":var h=Math.round(d+(f-d)/2);if(h<Math.ceil(c/2)){return 0}else if(h>u+Math.floor(c/2)){return u}else{return h}case"auto":default:if(o>=d&&o<=f){return o}else if(d>f){return d}else if(o<d){return d}else{return f}}},getOffsetForRowAndAlignment:function e(t,r,n,o,a,i){var l=t.rowHeight,s=t.height,c=t.rowCount;var u=Math.max(0,c*l-s);var f=Math.min(u,r*l);var d=Math.max(0,r*l-s+i+l);if(n==="smart"){if(o>=d-s&&o<=f+s){n="auto"}else{n="center"}}switch(n){case"start":return f;case"end":return d;case"center":var h=Math.round(d+(f-d)/2);if(h<Math.ceil(s/2)){return 0}else if(h>u+Math.floor(s/2)){return u}else{return h}case"auto":default:if(o>=d&&o<=f){return o}else if(d>f){return d}else if(o<d){return d}else{return f}}},getColumnStartIndexForOffset:function e(t,r){var n=t.columnWidth,o=t.columnCount;return Math.max(0,Math.min(o-1,Math.floor(r/n)))},getColumnStopIndexForStartIndex:function e(t,r,n){var o=t.columnWidth,a=t.columnCount,i=t.width;var l=r*o;var s=Math.ceil((i+n-l)/o);return Math.max(0,Math.min(a-1,r+s-1))},getRowStartIndexForOffset:function e(t,r){var n=t.rowHeight,o=t.rowCount;return Math.max(0,Math.min(o-1,Math.floor(r/n)))},getRowStopIndexForStartIndex:function e(t,r,n){var o=t.rowHeight,a=t.rowCount,i=t.height;var l=r*o;var s=Math.ceil((i+n-l)/o);return Math.max(0,Math.min(a-1,r+s-1))},initInstanceProps:function e(t){},shouldResetStyleCacheOnItemSizeChange:true,validateProps:function e(t){var r=t.columnWidth,n=t.rowHeight;if(false){}}});var X=q({getItemOffset:function e(t,r){var n=t.itemSize;return r*n},getItemSize:function e(t,r){var n=t.itemSize;return n},getEstimatedTotalSize:function e(t){var r=t.itemCount,n=t.itemSize;return n*r},getOffsetForIndexAndAlignment:function e(t,r,n,o,a,i){var l=t.direction,s=t.height,c=t.itemCount,u=t.itemSize,f=t.layout,d=t.width;var h=l==="horizontal"||f==="horizontal";var v=h?d:s;var m=Math.max(0,c*u-v);var p=Math.min(m,r*u);var g=Math.max(0,r*u-v+u+i);if(n==="smart"){if(o>=g-v&&o<=p+v){n="auto"}else{n="center"}}switch(n){case"start":return p;case"end":return g;case"center":{var S=Math.round(g+(p-g)/2);if(S<Math.ceil(v/2)){return 0}else if(S>m+Math.floor(v/2)){return m}else{return S}}case"auto":default:if(o>=g&&o<=p){return o}else if(o<g){return g}else{return p}}},getStartIndexForOffset:function e(t,r){var n=t.itemCount,o=t.itemSize;return Math.max(0,Math.min(n-1,Math.floor(r/o)))},getStopIndexForStartIndex:function e(t,r,n){var o=t.direction,a=t.height,i=t.itemCount,l=t.itemSize,s=t.layout,c=t.width;var u=o==="horizontal"||s==="horizontal";var f=r*l;var d=u?c:a;var h=Math.ceil((d+n-f)/l);return Math.max(0,Math.min(i-1,r+h-1))},initInstanceProps:function e(t){},shouldResetStyleCacheOnItemSizeChange:true,validateProps:function e(t){var r=t.itemSize;if(false){}}});function Y(e,t){for(var r in e){if(!(r in t)){return true}}for(var n in t){if(e[n]!==t[n]){return true}}return false}var $=["style"],ee=["style"];function te(e,t){var r=e.style,n=(0,d.Z)(e,$);var o=t.style,a=(0,d.Z)(t,ee);return!Y(r,o)&&!Y(n,a)}function re(e,t){return!te(this.props,e)||Y(this.state,t)}}}]);
//# sourceMappingURL=9405.982e534fe9113a940f0b.js.map?v=982e534fe9113a940f0b