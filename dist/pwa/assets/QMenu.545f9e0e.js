import{a as D,j as k,s as L,v as se,d as re,B as Ce,f as ce,C as Te,r as M,y as Q,a1 as de,a2 as fe,a0 as Se,a3 as J,n as He,a4 as Z,w as W,o as We,p as O,a5 as Me,a6 as K,a7 as ee,a8 as Be,a9 as pe,u as Le,aa as Pe,e as Ae,ab as Re,g as $e,ac as Fe,k as _e,ad as ze,ae as Ke,af as je,ag as De,ah as te,ai as Qe,aj as Oe,ak as Ie,al as Ne,am as Ve,an as Ue}from"./index.7da21d26.js";import{c as Xe}from"./selection.9e1f0781.js";var it=D({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=k(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:l.value},se(n.default))}}),ut=D({name:"QItem",props:{...re,...Ce,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:t}}=Q(),o=ce(e,t),{hasLink:d,linkAttrs:i,linkClass:v,linkTag:h,navigateOnClick:c}=Te(),f=M(null),m=M(null),x=k(()=>e.clickable===!0||d.value===!0||e.tag==="label"),a=k(()=>e.disable!==!0&&x.value===!0),r=k(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=k(()=>{if(e.insetLevel===void 0)return null;const s=t.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function w(s){a.value===!0&&(m.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===f.value?m.value.focus():document.activeElement===m.value&&f.value.focus()),c(s))}function S(s){if(a.value===!0&&de(s,[13,32])===!0){fe(s),s.qKeyEvent=!0;const b=new MouseEvent("click",s);b.qKeyEvent=!0,f.value.dispatchEvent(b)}l("keyup",s)}function B(){const s=Se(n.default,[]);return a.value===!0&&s.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:m})),s}return()=>{const s={ref:f,class:r.value,style:T.value,role:"listitem",onClick:w,onKeyup:S};return a.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,i.value)):x.value===!0&&(s["aria-disabled"]="true"),L(h.value,s,B())}}});const Ye={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ge({showing:e,avoidEmit:n,configureAnchorEl:l}){const{props:t,proxy:o,emit:d}=Q(),i=M(null);let v=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};l===void 0&&(Object.assign(c,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){de(a,13)===!0&&c.toggle(a)},contextClick(a){o.hide(a),J(a),He(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:J,mobileTouch(a){if(c.mobileCleanup(a),h(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const r=a.target;Z(c,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),v=setTimeout(()=>{v=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),v!==null&&(clearTimeout(v),v=null),e.value===!0&&a!==void 0&&Xe()}}),l=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let r;a===!0?o.$q.platform.is.mobile===!0?r=[[i.value,"touchstart","mobileTouch","passive"]]:r=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:r=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],Z(c,"anchor",r)});function f(){Me(c,"anchor")}function m(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function x(){if(t.target===!1||t.target===""||o.$el.parentNode===null)i.value=null;else if(t.target===!0)m(o.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return W(()=>t.contextMenu,a=>{i.value!==null&&(f(),l(a))}),W(()=>t.target,()=>{i.value!==null&&f(),x()}),W(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?f():l())}),We(()=>{x(),n!==!0&&t.modelValue===!0&&i.value===null&&d("update:modelValue",!1)}),O(()=>{v!==null&&clearTimeout(v),f()}),{anchorEl:i,canShow:h,anchorEvents:c}}function Je(e,n){const l=M(null);let t;function o(v,h){const c=`${h!==void 0?"add":"remove"}EventListener`,f=h!==void 0?h:t;v!==window&&v[c]("scroll",f,K.passive),window[c]("scroll",f,K.passive),t=h}function d(){l.value!==null&&(o(l.value),l.value=null)}const i=W(()=>e.noParentEvent,()=>{l.value!==null&&(d(),n())});return O(i),{localScrollTarget:l,unconfigureScrollTarget:d,changeScrollEvent:o}}const{notPassiveCapture:P}=K,C=[];function A(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let l=ee.length-1;for(;l>=0;){const t=ee[l].$;if(t.type.name==="QTooltip"){l--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;l--}for(let t=C.length-1;t>=0;t--){const o=C[t];if((o.anchorEl.value===null||o.anchorEl.value.contains(n)===!1)&&(n===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(n)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Ze(e){C.push(e),C.length===1&&(document.addEventListener("mousedown",A,P),document.addEventListener("touchstart",A,P))}function ne(e){const n=C.findIndex(l=>l===e);n!==-1&&(C.splice(n,1),C.length===0&&(document.removeEventListener("mousedown",A,P),document.removeEventListener("touchstart",A,P)))}let le,ae;function oe(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function et(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const j={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{j[`${e}#ltr`]=e,j[`${e}#rtl`]=e});function ie(e,n){const l=e.split(" ");return{vertical:l[0],horizontal:j[`${l[1]}#${n===!0?"rtl":"ltr"}`]}}function tt(e,n){let{top:l,left:t,right:o,bottom:d,width:i,height:v}=e.getBoundingClientRect();return n!==void 0&&(l-=n[1],t-=n[0],d+=n[1],o+=n[0],i+=n[0],v+=n[1]),{top:l,bottom:d,height:v,left:t,right:o,width:i,middle:t+(o-t)/2,center:l+(d-l)/2}}function nt(e,n,l){let{top:t,left:o}=e.getBoundingClientRect();return t+=n.top,o+=n.left,l!==void 0&&(t+=l[1],o+=l[0]),{top:t,bottom:t+1,height:1,left:o,right:o+1,width:1,middle:o,center:t}}function lt(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function ue(e,n,l,t){return{top:e[l.vertical]-n[t.vertical],left:e[l.horizontal]-n[t.horizontal]}}function ve(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ve(e,n+1)},10);return}const{targetEl:l,offset:t,anchorEl:o,anchorOrigin:d,selfOrigin:i,absoluteOffset:v,fit:h,cover:c,maxHeight:f,maxWidth:m}=e;if(Be.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:y,offsetTop:q}=window.visualViewport;y!==le&&(H.setProperty("--q-pe-left",y+"px"),le=y),q!==ae&&(H.setProperty("--q-pe-top",q+"px"),ae=q)}const{scrollLeft:x,scrollTop:a}=l,r=v===void 0?tt(o,c===!0?[0,0]:t):nt(o,v,t);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:m||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:T,offsetHeight:w}=l,{elWidth:S,elHeight:B}=h===!0||c===!0?{elWidth:Math.max(r.width,T),elHeight:c===!0?Math.max(r.height,w):w}:{elWidth:T,elHeight:w};let s={maxWidth:m,maxHeight:f};(h===!0||c===!0)&&(s.minWidth=r.width+"px",c===!0&&(s.minHeight=r.height+"px")),Object.assign(l.style,s);const b=lt(S,B);let g=ue(r,b,d,i);if(v===void 0||t===void 0)z(g,r,b,d,i);else{const{top:H,left:y}=g;z(g,r,b,d,i);let q=!1;if(g.top!==H){q=!0;const E=2*t[1];r.center=r.top-=E,r.bottom-=E+2}if(g.left!==y){q=!0;const E=2*t[0];r.middle=r.left-=E,r.right-=E+2}q===!0&&(g=ue(r,b,d,i),z(g,r,b,d,i))}s={top:g.top+"px",left:g.left+"px"},g.maxHeight!==void 0&&(s.maxHeight=g.maxHeight+"px",r.height>g.maxHeight&&(s.minHeight=s.maxHeight)),g.maxWidth!==void 0&&(s.maxWidth=g.maxWidth+"px",r.width>g.maxWidth&&(s.minWidth=s.maxWidth)),Object.assign(l.style,s),l.scrollTop!==a&&(l.scrollTop=a),l.scrollLeft!==x&&(l.scrollLeft=x)}function z(e,n,l,t,o){const d=l.bottom,i=l.right,v=pe(),h=window.innerHeight-v,c=document.body.clientWidth;if(e.top<0||e.top+d>h)if(o.vertical==="center")e.top=n[t.vertical]>h/2?Math.max(0,h-d):0,e.maxHeight=Math.min(d,h);else if(n[t.vertical]>h/2){const f=Math.min(h,t.vertical==="center"?n.center:t.vertical===o.vertical?n.bottom:n.top);e.maxHeight=Math.min(d,f),e.top=Math.max(0,f-d)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===o.vertical?n.top:n.bottom),e.maxHeight=Math.min(d,h-e.top);if(e.left<0||e.left+i>c)if(e.maxWidth=Math.min(i,c),o.horizontal==="middle")e.left=n[t.horizontal]>c/2?Math.max(0,c-i):0;else if(n[t.horizontal]>c/2){const f=Math.min(c,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.right:n.left);e.maxWidth=Math.min(i,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.left:n.right),e.maxWidth=Math.min(i,c-e.left)}var st=D({name:"QMenu",inheritAttrs:!1,props:{...Ye,...Le,...re,...Pe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:et},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ae,"click","escapeKey"],setup(e,{slots:n,emit:l,attrs:t}){let o=null,d,i,v;const h=Q(),{proxy:c}=h,{$q:f}=c,m=M(null),x=M(!1),a=k(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=ce(e,f),{registerTick:T,removeTick:w}=Re(),{registerTimeout:S}=$e(),{transitionProps:B,transitionStyle:s}=Fe(e),{localScrollTarget:b,changeScrollEvent:g,unconfigureScrollTarget:H}=Je(e,Y),{anchorEl:y,canShow:q}=Ge({showing:x}),{hide:E}=_e({showing:x,canShow:q,handleShow:be,handleHide:ye,hideOnRouteChange:a,processOnMount:!0}),{showPortal:I,hidePortal:N,renderPortal:he}=ze(h,m,qe,"menu"),R={anchorEl:y,innerRef:m,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return E(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&fe(u),!0}},V=k(()=>ie(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),me=k(()=>e.cover===!0?V.value:ie(e.self||"top start",f.lang.rtl)),ge=k(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),xe=k(()=>e.autoClose===!0?{onClick:ke}:{}),U=k(()=>x.value===!0&&e.persistent!==!0);W(U,u=>{u===!0?(Ne(F),Ze(R)):(te(F),ne(R))});function $(){Ve(()=>{let u=m.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function be(u){if(o=e.noRefocus===!1?document.activeElement:null,Ke(G),I(),Y(),d=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const _=je(u);if(_.left!==void 0){const{top:Ee,left:we}=y.value.getBoundingClientRect();d={left:_.left-we,top:_.top-Ee}}}i===void 0&&(i=W(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,p)),e.noFocus!==!0&&document.activeElement.blur(),T(()=>{p(),e.noFocus!==!0&&$()}),S(()=>{f.platform.is.ios===!0&&(v=e.autoClose,m.value.click()),p(),I(!0),l("show",u)},e.transitionDuration)}function ye(u){w(),N(),X(!0),o!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),S(()=>{N(!0),l("hide",u)},e.transitionDuration)}function X(u){d=void 0,i!==void 0&&(i(),i=void 0),(u===!0||x.value===!0)&&(De(G),H(),ne(R),te(F)),u!==!0&&(o=null)}function Y(){(y.value!==null||e.scrollTarget!==void 0)&&(b.value=Qe(y.value,e.scrollTarget),g(b.value,p))}function ke(u){v!==!0?(Oe(c,u),l("click",u)):v=!1}function G(u){U.value===!0&&e.noFocus!==!0&&Ue(m.value,u.target)!==!0&&$()}function F(u){l("escapeKey"),E(u)}function p(){ve({targetEl:m.value,offset:e.offset,anchorEl:y.value,anchorOrigin:V.value,selfOrigin:me.value,absoluteOffset:d,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function qe(){return L(Ie,B.value,()=>x.value===!0?L("div",{role:"menu",...t,ref:m,tabindex:-1,class:["q-menu q-position-engine scroll"+ge.value,t.class],style:[t.style,s.value],...xe.value},se(n.default)):null)}return O(X),Object.assign(c,{focus:$,updatePosition:p}),he}});export{it as Q,ut as a,st as b,et as c,Je as d,Ge as e,Ze as f,ie as p,ne as r,ve as s,Ye as u,oe as v};