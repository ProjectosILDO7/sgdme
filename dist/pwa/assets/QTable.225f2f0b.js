import{a as E,j as u,s as n,v as N,y as z,a0 as ct,Q as $e,d as be,f as me,r as H,w as A,aX as dt,o as vt,aI as ft,aH as gt,p as bt,ai as mt,a6 as xe,E as De,aY as St,aZ as yt,a_ as ge,a$ as Be,b0 as ht,n as Me,b1 as _t,b2 as fe,b3 as Q,W as J,X as wt}from"./index.7da21d26.js";import{Q as qt}from"./QList.5aa8713a.js";import{u as Pt,a as Ct,c as Ve,Q as kt}from"./QSelect.4dd9846d.js";import{u as Rt,a as Tt,b as xt}from"./use-fullscreen.9289527c.js";var nl=E({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const r=z(),g=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return n("td",{class:g.value},N(l.default));const i=r.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[i]:null)||e.props.col;if(f===void 0)return;const{row:s}=e.props;return n("td",{class:g.value+f.__tdClass(s),style:f.__tdStyle(s)},N(l.default))}}}),Bt=E({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:r}){const g=z(),{proxy:{$q:i}}=g,f=s=>{r("click",s)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},N(l.default));let s,d;const c=g.vnode.key;if(c){if(s=e.props.colsMap[c],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const a=s.align==="right"?"unshift":"push";d=ct(l.default,[]),d[a](n($e,{class:s.__iconClass,name:i.iconSet.table.arrowUp}))}else d=N(l.default);const h={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:a=>{s.sortable===!0&&e.props.sort(s),f(a)}};return n("th",h,d)}}});const Ot=["horizontal","vertical","cell","none"];var Ft=E({name:"QMarkupTable",props:{...be,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ot.includes(e)}},setup(e,{slots:l}){const r=z(),g=me(e,r.proxy.$q),i=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(g.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:i.value},[n("table",{class:"q-table"},N(l.default))])}});function je(e,l){return n("div",e,[n("table",{class:"q-table"},l)])}const Lt={list:qt,table:Ft},$t=["list","table","__qtable"];var Dt=E({name:"QVirtualScroll",props:{...Pt,type:{type:String,default:"list",validator:e=>$t.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:r}){let g;const i=H(null),f=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:d,padVirtualScroll:c,onVirtualScrollEvt:h}=Ct({virtualScrollLength:f,getVirtualScrollTarget:P,getVirtualScrollEl:q}),a=u(()=>{if(f.value===0)return[];const O=(F,R)=>({index:s.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),m=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});A(f,()=>{d()}),A(()=>e.scrollTarget,()=>{S(),_()});function q(){return i.value.$el||i.value}function P(){return g}function _(){g=mt(q(),e.scrollTarget),g.addEventListener("scroll",h,xe.passive)}function S(){g!==void 0&&(g.removeEventListener("scroll",h,xe.passive),g=void 0)}function B(){let O=c(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),De(l.after,O)}return dt(()=>{d()}),vt(()=>{_()}),ft(()=>{_()}),gt(()=>{S()}),bt(()=>{S()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?je({ref:i,class:"q-table__middle "+m.value},B()):n(Lt[e.type],{...r,ref:i,class:[r.class,m.value],...w.value},B)}}});const Mt={xs:2,sm:4,md:6,lg:10,xl:14};function Oe(e,l,r){return{transform:l===!0?`translateX(${r.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Vt=E({name:"QLinearProgress",props:{...be,...St,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:r}=z(),g=me(e,r.$q),i=yt(e,Mt),f=u(()=>e.indeterminate===!0||e.query===!0),s=u(()=>e.reverse!==e.query),d=u(()=>({...i.value!==null?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),h=u(()=>Oe(e.buffer!==void 0?e.buffer:1,s.value,r.$q)),a=u(()=>`with${e.instantFeedback===!0?"out":""}-transition`),m=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${g.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=u(()=>Oe(f.value===!0?1:e.value,s.value,r.$q)),q=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),P=u(()=>({width:`${e.value*100}%`})),_=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const S=[n("div",{class:m.value,style:h.value}),n("div",{class:q.value,style:w.value})];return e.stripe===!0&&f.value===!1&&S.push(n("div",{class:_.value,style:P.value})),n("div",{class:c.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},De(l.default,S))}}});function jt(e,l){return new Date(e)-new Date(l)}const At={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Et(e,l,r,g){const i=u(()=>{const{sortBy:d}=l.value;return d&&r.value.find(c=>c.name===d)||null}),f=u(()=>e.sortMethod!==void 0?e.sortMethod:(d,c,h)=>{const a=r.value.find(q=>q.name===c);if(a===void 0||a.field===void 0)return d;const m=h===!0?-1:1,w=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return d.sort((q,P)=>{let _=w(q),S=w(P);return a.rawSort!==void 0?a.rawSort(_,S,q,P)*m:_==null?-1*m:S==null?1*m:a.sort!==void 0?a.sort(_,S,q,P)*m:ge(_)===!0&&ge(S)===!0?(_-S)*m:Be(_)===!0&&Be(S)===!0?jt(_,S)*m:typeof _=="boolean"&&typeof S=="boolean"?(_-S)*m:([_,S]=[_,S].map(B=>(B+"").toLocaleString().toLowerCase()),_<S?-1*m:_===S?0:m)})});function s(d){let c=e.columnSortOrder;if(ht(d)===!0)d.sortOrder&&(c=d.sortOrder),d=d.name;else{const m=r.value.find(w=>w.name===d);m!==void 0&&m.sortOrder&&(c=m.sortOrder)}let{sortBy:h,descending:a}=l.value;h!==d?(h=d,a=c==="da"):e.binaryStateSort===!0?a=!a:a===!0?c==="ad"?h=null:a=!1:c==="ad"?a=!0:h=null,g({sortBy:h,descending:a,page:1})}return{columnToSort:i,computedSortMethod:f,sort:s}}const Qt={filter:[String,Object],filterMethod:Function};function Nt(e,l){const r=u(()=>e.filterMethod!==void 0?e.filterMethod:(g,i,f,s)=>{const d=i?i.toLowerCase():"";return g.filter(c=>f.some(h=>{const a=s(h,c)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(d)!==-1}))});return A(()=>e.filter,()=>{Me(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:r}}function Ht(e,l){for(const r in l)if(l[r]!==e[r])return!1;return!0}function Fe(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const zt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Ut(e,l){const{props:r,emit:g}=e,i=H(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:r.rowsPerPageOptions.length!==0?r.rowsPerPageOptions[0]:5},r.pagination)),f=u(()=>{const a=r["onUpdate:pagination"]!==void 0?{...i.value,...r.pagination}:i.value;return Fe(a)}),s=u(()=>f.value.rowsNumber!==void 0);function d(a){c({pagination:a,filter:r.filter})}function c(a={}){Me(()=>{g("request",{pagination:a.pagination||f.value,filter:a.filter||r.filter,getCellValue:l})})}function h(a,m){const w=Fe({...f.value,...a});if(Ht(f.value,w)===!0){s.value===!0&&m===!0&&d(w);return}if(s.value===!0){d(w);return}r.pagination!==void 0&&r["onUpdate:pagination"]!==void 0?g("update:pagination",w):i.value=w}return{innerPagination:i,computedPagination:f,isServerSide:s,requestServerInteraction:c,setPagination:h}}function It(e,l,r,g,i,f){const{props:s,emit:d,proxy:{$q:c}}=e,h=u(()=>g.value===!0?r.value.rowsNumber||0:f.value),a=u(()=>{const{page:R,rowsPerPage:T}=r.value;return(R-1)*T}),m=u(()=>{const{page:R,rowsPerPage:T}=r.value;return R*T}),w=u(()=>r.value.page===1),q=u(()=>r.value.rowsPerPage===0?1:Math.max(1,Math.ceil(h.value/r.value.rowsPerPage))),P=u(()=>m.value===0?!0:r.value.page>=q.value),_=u(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(T=>({label:T===0?c.lang.table.allRows:""+T,value:T})));A(q,(R,T)=>{if(R===T)return;const U=r.value.page;R&&!U?i({page:1}):R<U&&i({page:R})});function S(){i({page:1})}function B(){const{page:R}=r.value;R>1&&i({page:R-1})}function O(){const{page:R,rowsPerPage:T}=r.value;m.value>0&&R*T<h.value&&i({page:R+1})}function F(){i({page:q.value})}return s["onUpdate:pagination"]!==void 0&&d("update:pagination",{...r.value}),{firstRowIndex:a,lastRowIndex:m,isFirstPage:w,isLastPage:P,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:h,firstPage:S,prevPage:B,nextPage:O,lastPage:F}}const pt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Wt=["update:selected","selection"];function Kt(e,l,r,g){const i=u(()=>{const P={};return e.selected.map(g.value).forEach(_=>{P[_]=!0}),P}),f=u(()=>e.selection!=="none"),s=u(()=>e.selection==="single"),d=u(()=>e.selection==="multiple"),c=u(()=>r.value.length!==0&&r.value.every(P=>i.value[g.value(P)]===!0)),h=u(()=>c.value!==!0&&r.value.some(P=>i.value[g.value(P)]===!0)),a=u(()=>e.selected.length);function m(P){return i.value[P]===!0}function w(){l("update:selected",[])}function q(P,_,S,B){l("selection",{rows:_,added:S,keys:P,evt:B});const O=s.value===!0?S===!0?_:[]:S===!0?e.selected.concat(_):e.selected.filter(F=>P.includes(g.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:f,singleSelection:s,multipleSelection:d,allRowsSelected:c,someRowsSelected:h,rowsSelectedNumber:a,isRowSelected:m,clearSelection:w,updateSelection:q}}function Le(e){return Array.isArray(e)?e.slice():[]}const Xt={expanded:Array},Gt=["update:expanded"];function Yt(e,l){const r=H(Le(e.expanded));A(()=>e.expanded,s=>{r.value=Le(s)});function g(s){return r.value.includes(s)}function i(s){e.expanded!==void 0?l("update:expanded",s):r.value=s}function f(s,d){const c=r.value.slice(),h=c.indexOf(s);d===!0?h===-1&&(c.push(s),i(c)):h!==-1&&(c.splice(h,1),i(c))}return{isRowExpanded:g,setExpanded:i,updateExpanded:f}}const Zt={visibleColumns:Array};function Jt(e,l,r){const g=u(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(c=>({name:c,label:c.toUpperCase(),field:c,align:ge(d[c])?"right":"left",sortable:!0})):[]}),i=u(()=>{const{sortBy:d,descending:c}=l.value;return(e.visibleColumns!==void 0?g.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):g.value).map(a=>{const m=a.align||"right",w=`text-${m}`;return{...a,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:w+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===d?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>w+" "+a.classes:q=>w+" "+a.classes(q):()=>w}})}),f=u(()=>{const d={};return i.value.forEach(c=>{d[c.name]=c}),d}),s=u(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(r.value===!0?1:0));return{colList:g,computedCols:i,computedColsMap:f,computedColspan:s}}const ee="q-table__bottom row items-center",Ae={};Ve.forEach(e=>{Ae[e]={}});var rl=E({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ae,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...be,...Rt,...Zt,...Qt,...zt,...Xt,...pt,...At},emits:["request","virtualScroll",...Tt,...Gt,...Wt],setup(e,{slots:l,emit:r}){const g=z(),{proxy:{$q:i}}=g,f=me(e,i),{inFullscreen:s,toggleFullscreen:d}=xt(),c=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),h=H(null),a=H(null),m=u(()=>e.grid!==!0&&e.virtualScroll===!0),w=u(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),P=u(()=>q.value+(e.loading===!0?" q-table--loading":""));A(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{m.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:_,computedPagination:S,isServerSide:B,requestServerInteraction:O,setPagination:F}=Ut(g,V),{computedFilterMethod:R}=Nt(e,F),{isRowExpanded:T,setExpanded:U,updateExpanded:Ee}=Yt(e,r),te=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:o,descending:v}=S.value;return e.filter&&(t=R.value(t,e.filter,L.value,V)),Ue.value!==null&&(t=Ie.value(e.rows===t?t.slice():t,o,v)),t}),Se=u(()=>te.value.length),D=u(()=>{let t=te.value;if(B.value===!0)return t;const{rowsPerPage:o}=S.value;return o!==0&&(p.value===0&&e.rows!==t?t.length>W.value&&(t=t.slice(0,W.value)):t=t.slice(p.value,W.value)),t}),{hasSelectionMode:M,singleSelection:Qe,multipleSelection:ye,allRowsSelected:Ne,someRowsSelected:he,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:He,updateSelection:I}=Kt(e,r,D,c),{colList:ze,computedCols:L,computedColsMap:_e,computedColspan:we}=Jt(e,S,M),{columnToSort:Ue,computedSortMethod:Ie,sort:ne}=Et(e,S,ze,F),{firstRowIndex:p,lastRowIndex:W,isFirstPage:re,isLastPage:oe,pagesNumber:K,computedRowsPerPageOptions:pe,computedRowsNumber:X,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce}=It(g,_,S,B,F,Se),We=u(()=>D.value.length===0),Ke=u(()=>{const t={};return Ve.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Xe(){m.value===!0&&a.value.reset()}function Ge(){if(e.grid===!0)return st();const t=e.hideHeader!==!0?Re:null;if(m.value===!0){const v=l["top-row"],b=l["bottom-row"],y={default:k=>Pe(k.item,l.body,k.index)};if(v!==void 0){const k=n("tbody",v({cols:L.value}));y.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(y.before=t);return b!==void 0&&(y.after=()=>n("tbody",b({cols:L.value}))),n(Dt,{ref:a,class:e.tableClass,style:e.tableStyle,...Ke.value,scrollTarget:e.virtualScrollTarget,items:D.value,type:"__qtable",tableColspan:we.value,onVirtualScroll:Ze},y)}const o=[Je()];return t!==null&&o.unshift(t()),je({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function Ye(t,o){if(a.value!==null){a.value.scrollTo(t,o);return}t=parseInt(t,10);const v=h.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(v!==null){const b=h.value.querySelector(".q-table__middle.scroll"),y=v.offsetTop-e.virtualScrollStickySizeStart,k=y<b.scrollTop?"decrease":"increase";b.scrollTop=y,r("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function Ze(t){r("virtualScroll",t)}function qe(){return[n(Vt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,o,v){const b=c.value(t),y=ae(b);if(o!==void 0)return o(Ce({key:b,row:t,pageIndex:v,__trClass:y?"selected":""}));const k=l["body-cell"],C=L.value.map(x=>{const Y=l[`body-cell-${x.name}`],Z=Y!==void 0?Y:k;return Z!==void 0?Z(et({key:b,row:t,pageIndex:v,col:x})):n("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},V(x,t))});if(M.value===!0){const x=l["body-selection"],Y=x!==void 0?x(tt({key:b,row:t,pageIndex:v})):[n(fe,{modelValue:y,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(Z,ut)=>{I([b],[t],Z,ut)}})];C.unshift(n("td",{class:"q-table--col-auto-width"},Y))}const $={key:b,class:{selected:y}};return e.onRowClick!==void 0&&($.class["cursor-pointer"]=!0,$.onClick=x=>{r("RowClick",x,t,v)}),e.onRowDblclick!==void 0&&($.class["cursor-pointer"]=!0,$.onDblclick=x=>{r("RowDblclick",x,t,v)}),e.onRowContextmenu!==void 0&&($.class["cursor-pointer"]=!0,$.onContextmenu=x=>{r("RowContextmenu",x,t,v)}),n("tr",$,C)}function Je(){const t=l.body,o=l["top-row"],v=l["bottom-row"];let b=D.value.map((y,k)=>Pe(y,t,k));return o!==void 0&&(b=o({cols:L.value}).concat(b)),v!==void 0&&(b=b.concat(v({cols:L.value}))),n("tbody",b)}function Ce(t){return de(t),t.cols=t.cols.map(o=>Q({...o},"value",()=>V(o,t.row))),t}function et(t){return de(t),Q(t,"value",()=>V(t.col,t.row)),t}function tt(t){return de(t),t}function de(t){Object.assign(t,{cols:L.value,colsMap:_e.value,sort:ne,rowIndex:p.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),M.value===!0&&Q(t,"selected",()=>ae(t.key),(o,v)=>{I([t.key],[t.row],o,v)}),Q(t,"expand",()=>T(t.key),o=>{Ee(t.key,o)})}function V(t,o){const v=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(v,o):v}const j=u(()=>({pagination:S.value,pagesNumber:K.value,isFirstPage:re.value,isLastPage:oe.value,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,inFullscreen:s.value,toggleFullscreen:d}));function lt(){const t=l.top,o=l["top-left"],v=l["top-right"],b=l["top-selection"],y=M.value===!0&&b!==void 0&&le.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:k},[t(j.value)]);let C;if(y===!0?C=b(j.value).slice():(C=[],o!==void 0?C.push(n("div",{class:"q-table__control"},[o(j.value)])):e.title&&C.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),v!==void 0&&(C.push(n("div",{class:"q-table__separator col"})),C.push(n("div",{class:"q-table__control"},[v(j.value)]))),C.length!==0)return n("div",{class:k},C)}const ke=u(()=>he.value===!0?null:Ne.value);function Re(){const t=at();return e.loading===!0&&l.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:we.value},qe())])),n("thead",t)}function at(){const t=l.header,o=l["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const v=L.value.map(b=>{const y=l[`header-cell-${b.name}`],k=y!==void 0?y:o,C=ve({col:b});return k!==void 0?k(C):n(Bt,{key:b.name,props:C},()=>b.label)});if(Qe.value===!0&&e.grid!==!0)v.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(ye.value===!0){const b=l["header-selection"],y=b!==void 0?b(ve({})):[n(fe,{color:e.color,modelValue:ke.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":Te})];v.unshift(n("th",{class:"q-table--col-auto-width"},y))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},v)]}function ve(t){return Object.assign(t,{cols:L.value,sort:ne,colsMap:_e.value,color:e.color,dark:f.value,dense:e.dense}),ye.value===!0&&Q(t,"selected",()=>ke.value,Te),t}function Te(t){he.value===!0&&(t=!1),I(D.value.map(c.value),D.value,t)}const G=u(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function nt(){if(e.hideBottom===!0)return;if(We.value===!0){if(e.hideNoData===!0)return;const v=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,b=l["no-data"],y=b!==void 0?[b({message:v,icon:i.iconSet.table.warning,filter:e.filter})]:[n($e,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),v];return n("div",{class:ee+" q-table__bottom--nodata"},y)}const t=l.bottom;if(t!==void 0)return n("div",{class:ee},[t(j.value)]);const o=e.hideSelectedBanner!==!0&&M.value===!0&&le.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:ee+" justify-end"},ot(o));if(o.length!==0)return n("div",{class:ee},o)}function rt(t){F({page:1,rowsPerPage:t.value})}function ot(t){let o;const{rowsPerPage:v}=S.value,b=e.paginationLabel||i.lang.table.pagination,y=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),k===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),n(kt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:v,options:pe.value,displayValue:v===0?i.lang.table.allRows:v,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":rt})])),y!==void 0)o=y(j.value);else if(o=[n("span",v!==0?{class:"q-table__bottom-item"}:{},[v?b(p.value+1,Math.min(W.value,X.value),X.value):b(1,Se.value,X.value)])],v!==0&&K.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),K.value>2&&o.push(n(J,{key:"pgFirst",...C,icon:G.value[0],disable:re.value,onClick:ie})),o.push(n(J,{key:"pgPrev",...C,icon:G.value[1],disable:re.value,onClick:se}),n(J,{key:"pgNext",...C,icon:G.value[2],disable:oe.value,onClick:ue})),K.value>2&&o.push(n(J,{key:"pgLast",...C,icon:G.value[3],disable:oe.value,onClick:ce}))}return t.push(n("div",{class:"q-table__control"},o)),t}function it(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Re()])]:e.loading===!0&&l.loading===void 0?qe():void 0;return n("div",{class:"q-table__middle"},t)}function st(){const t=l.item!==void 0?l.item:o=>{const v=o.cols.map(y=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[y.label]),n("div",{class:"q-table__grid-item-value"},[y.value])]));if(M.value===!0){const y=l["body-selection"],k=y!==void 0?y(o):[n(fe,{modelValue:o.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(C,$)=>{I([o.key],[o.row],C,$)}})];v.unshift(n("div",{class:"q-table__grid-item-row"},k),n(wt,{dark:f.value}))}const b={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=y=>{r("RowClick",y,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=y=>{r("RowDblclick",y,o.row,o.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[n("div",b,v)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},D.value.map((o,v)=>t(Ce({key:c.value(o),row:o,pageIndex:v}))))}return Object.assign(g.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,isRowSelected:ae,clearSelection:He,isRowExpanded:T,setExpanded:U,sort:ne,resetVirtualScroll:Xe,scrollTo:Ye,getCellValue:V}),_t(g.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>D.value,computedRowsNumber:()=>X.value}),()=>{const t=[lt()],o={ref:h,class:P.value};return e.grid===!0?t.push(it()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(Ge(),nt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),n("div",o,t)}}});export{rl as Q,nl as a,Bt as b};
