import{az as Oe,a8 as j,as as je,aA as Qe,a4 as H,aB as ee,a3 as ye,ar as te,af as ie,a5 as ne,a2 as le,i as We,h as ae,r as R,j as p,p as qe,o as Ke,aC as pe,q as Ne,aD as Xe,s as S,a1 as He,aE as Ve,Q as U,E as Ue,y as _e,aF as Ye,aG as Ge,a as Je,ab as re,g as Ce,w as V,at as Ze,aH as et,aI as tt,v as nt}from"./index.a4d1c877.js";import{c as at}from"./selection.9385b8be.js";import{Q as rt}from"./QLayout.f07b5e25.js";import{r as ot}from"./rtl.b51694b1.js";const ue={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},it=Object.keys(ue);ue.all=!0;function Te(t){const r={};for(const l of it)t[l]===!0&&(r[l]=!0);return Object.keys(r).length===0?ue:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const lt=["INPUT","TEXTAREA"];function we(t,r){return r.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof r.handler=="function"&&lt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(r.uid)===-1)}function oe(t,r,l){const f=ie(t);let e,a=f.left-r.event.x,s=f.top-r.event.y,m=Math.abs(a),h=Math.abs(s);const d=r.direction;d.horizontal===!0&&d.vertical!==!0?e=a<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?e=s<0?"up":"down":d.up===!0&&s<0?(e="up",m>h&&(d.left===!0&&a<0?e="left":d.right===!0&&a>0&&(e="right"))):d.down===!0&&s>0?(e="down",m>h&&(d.left===!0&&a<0?e="left":d.right===!0&&a>0&&(e="right"))):d.left===!0&&a<0?(e="left",m<h&&(d.up===!0&&s<0?e="up":d.down===!0&&s>0&&(e="down"))):d.right===!0&&a>0&&(e="right",m<h&&(d.up===!0&&s<0?e="up":d.down===!0&&s>0&&(e="down")));let k=!1;if(e===void 0&&l===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,k=!0,e==="left"||e==="right"?(f.left-=a,m=0,a=0):(f.top-=s,h=0,s=0)}return{synthetic:k,payload:{evt:t,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:f,direction:e,isFirst:r.event.isFirst,isFinal:l===!0,duration:Date.now()-r.event.time,distance:{x:m,y:h},offset:{x:a,y:s},delta:{x:f.left-r.event.lastX,y:f.top-r.event.lastY}}}}let ut=0;var mt=Oe({name:"touch-pan",beforeMount(t,{value:r,modifiers:l}){if(l.mouse!==!0&&j.has.touch!==!0)return;function f(a,s){l.mouse===!0&&s===!0?le(a):(l.stop===!0&&te(a),l.prevent===!0&&ye(a))}const e={uid:"qvtp_"+ut++,handler:r,modifiers:l,direction:Te(l),noop:je,mouseStart(a){we(a,e)&&Qe(a)&&(H(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(we(a,e)){const s=a.target;H(e,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,s){if(j.is.firefox===!0&&ee(t,!0),e.lastEvt=a,s===!0||l.stop===!0){if(e.direction.all!==!0&&(s!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const d=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ye(d),a.cancelBubble===!0&&te(d),Object.assign(d,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:d}}te(a)}const{left:m,top:h}=ie(a);e.event={x:m,y:h,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:h}},move(a){if(e.event===void 0)return;const s=ie(a),m=s.left-e.event.x,h=s.top-e.event.y;if(m===0&&h===0)return;e.lastEvt=a;const d=e.event.mouse===!0,k=()=>{f(a,d);let b;l.preserveCursor!==!0&&l.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),at(),e.styleCleanup=C=>{if(e.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),d===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};C!==void 0?setTimeout(()=>{E(),C()},50):E()}else C!==void 0&&C()}};if(e.event.detected===!0){e.event.isFirst!==!0&&f(a,e.event.mouse);const{payload:b,synthetic:C}=oe(a,e,!1);b!==void 0&&(e.handler(b)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&k(),e.event.lastX=b.position.left,e.event.lastY=b.position.top,e.event.lastDir=C===!0?void 0:b.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||d===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){k(),e.event.detected=!0,e.move(a);return}const P=Math.abs(m),T=Math.abs(h);P!==T&&(e.direction.horizontal===!0&&P>T||e.direction.vertical===!0&&P<T||e.direction.up===!0&&P<T&&h<0||e.direction.down===!0&&P<T&&h>0||e.direction.left===!0&&P>T&&m<0||e.direction.right===!0&&P>T&&m>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,s){if(e.event!==void 0){if(ne(e,"temp"),j.is.firefox===!0&&ee(t,!1),s===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(oe(a===void 0?e.lastEvt:a,e).payload);const{payload:m}=oe(a===void 0?e.lastEvt:a,e,!0),h=()=>{e.handler(m)};e.styleCleanup!==void 0?e.styleCleanup(h):h()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";H(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}j.has.touch===!0&&H(e,"main",[[t,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,r){const l=t.__qtouchpan;l!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&l.end(),l.handler=r.value),l.direction=Te(r.modifiers))},beforeUnmount(t){const r=t.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),ne(r,"main"),ne(r,"temp"),j.is.firefox===!0&&ee(t,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete t.__qtouchpan)}});let st=0;const gt=["click","keydown"],yt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${st++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ct(t,r,l,f){const e=We(pe,ae);if(e===ae)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ae;const{proxy:a}=_e(),s=R(null),m=R(null),h=R(null),d=p(()=>t.disable===!0||t.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},t.ripple===!0?{}:t.ripple)),k=p(()=>e.currentModel.value===t.name),P=p(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(k.value===!0?" q-tab--active"+(e.tabProps.value.activeClass?" "+e.tabProps.value.activeClass:"")+(e.tabProps.value.activeColor?` text-${e.tabProps.value.activeColor}`:"")+(e.tabProps.value.activeBgColor?` bg-${e.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(t.icon&&t.label&&e.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(t.noCaps===!0||e.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(t.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(f!==void 0?f.linkClass.value:"")),T=p(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(e.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(t.contentClass!==void 0?` ${t.contentClass}`:"")),b=p(()=>t.disable===!0||e.hasFocus.value===!0||k.value===!1&&e.hasActiveTab.value===!0?-1:t.tabindex||0);function C(u,_){if(_!==!0&&s.value!==null&&s.value.focus(),t.disable===!0){f!==void 0&&f.hasRouterLink.value===!0&&le(u);return}if(f===void 0){e.updateModel({name:t.name}),l("click",u);return}if(f.hasRouterLink.value===!0){const L=(w={})=>{let A;const B=w.to===void 0||Ye(w.to,t.to)===!0?e.avoidRouteWatcher=Ge():null;return f.navigateToRouterLink(u,{...w,returnRouterError:!0}).catch(M=>{A=M}).then(M=>{if(B===e.avoidRouteWatcher&&(e.avoidRouteWatcher=!1,A===void 0&&(M===void 0||M.message!==void 0&&M.message.startsWith("Avoided redundant navigation")===!0)&&e.updateModel({name:t.name})),w.returnRouterError===!0)return A!==void 0?Promise.reject(A):M})};l("click",u,L),u.defaultPrevented!==!0&&L();return}l("click",u)}function E(u){He(u,[13,32])?C(u,!0):Ve(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&e.onKbdNavigate(u.keyCode,a.$el)===!0&&le(u),l("keydown",u)}function O(){const u=e.tabProps.value.narrowIndicator,_=[],L=S("div",{ref:h,class:["q-tab__indicator",e.tabProps.value.indicatorClass]});t.icon!==void 0&&_.push(S(U,{class:"q-tab__icon",name:t.icon})),t.label!==void 0&&_.push(S("div",{class:"q-tab__label"},t.label)),t.alert!==!1&&_.push(t.alertIcon!==void 0?S(U,{class:"q-tab__alert-icon",color:t.alert!==!0?t.alert:void 0,name:t.alertIcon}):S("div",{class:"q-tab__alert"+(t.alert!==!0?` text-${t.alert}`:"")})),u===!0&&_.push(L);const w=[S("div",{class:"q-focus-helper",tabindex:-1,ref:s}),S("div",{class:T.value},Ue(r.default,_))];return u===!1&&w.push(L),w}const D={name:p(()=>t.name),rootRef:m,tabIndicatorRef:h,routeData:f};qe(()=>{e.unregisterTab(D)}),Ke(()=>{e.registerTab(D)});function Q(u,_){const L={ref:m,class:P.value,tabindex:b.value,role:"tab","aria-selected":k.value===!0?"true":"false","aria-disabled":t.disable===!0?"true":void 0,onClick:C,onKeydown:E,..._};return Ne(S(u,L,O()),[[Xe,d.value]])}return{renderTab:Q,$tabs:e}}function ct(t,r,l){const f=l===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?f[0]:f[1]}${t?` text-${t}`:""}`}const dt=["left","center","right","justify"];var Tt=Je({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:t=>dt.includes(t)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(t,{slots:r,emit:l}){const{proxy:f}=_e(),{$q:e}=f,{registerTick:a}=re(),{registerTick:s}=re(),{registerTick:m}=re(),{registerTimeout:h,removeTimeout:d}=Ce(),{registerTimeout:k,removeTimeout:P}=Ce(),T=R(null),b=R(null),C=R(t.modelValue),E=R(!1),O=R(!0),D=R(!1),Q=R(!1),u=[],_=R(0),L=R(!1);let w=null,A=null,B;const M=p(()=>({activeClass:t.activeClass,activeColor:t.activeColor,activeBgColor:t.activeBgColor,indicatorClass:ct(t.indicatorColor,t.switchIndicator,t.vertical),narrowIndicator:t.narrowIndicator,inlineLabel:t.inlineLabel,noCaps:t.noCaps})),Se=p(()=>{const n=_.value,o=C.value;for(let i=0;i<n;i++)if(u[i].name.value===o)return!0;return!1}),ke=p(()=>`q-tabs__content--align-${E.value===!0?"left":Q.value===!0?"justify":t.align}`),Le=p(()=>`q-tabs row no-wrap items-center q-tabs--${E.value===!0?"":"not-"}scrollable q-tabs--${t.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${t.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${t.mobileArrows===!0?"":"out"}-arrows`+(t.dense===!0?" q-tabs--dense":"")+(t.shrink===!0?" col-shrink":"")+(t.stretch===!0?" self-stretch":"")),Re=p(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ke.value+(t.contentClass!==void 0?` ${t.contentClass}`:"")),W=p(()=>t.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=p(()=>t.vertical!==!0&&e.lang.rtl===!0),Y=p(()=>ot===!1&&K.value===!0);V(K,z),V(()=>t.modelValue,n=>{G({name:n,setCurrent:!0,skipEmit:!0})}),V(()=>t.outsideArrows,N);function G({name:n,setCurrent:o,skipEmit:i}){C.value!==n&&(i!==!0&&t["onUpdate:modelValue"]!==void 0&&l("update:modelValue",n),(o===!0||t["onUpdate:modelValue"]===void 0)&&(Pe(C.value,n),C.value=n))}function N(){a(()=>{se({width:T.value.offsetWidth,height:T.value.offsetHeight})})}function se(n){if(W.value===void 0||b.value===null)return;const o=n[W.value.container],i=Math.min(b.value[W.value.scroll],Array.prototype.reduce.call(b.value.children,(y,v)=>y+(v[W.value.content]||0),0)),g=o>0&&i>o;E.value=g,g===!0&&s(z),Q.value=o<parseInt(t.breakpoint,10)}function Pe(n,o){const i=n!=null&&n!==""?u.find(y=>y.name.value===n):null,g=o!=null&&o!==""?u.find(y=>y.name.value===o):null;if(i&&g){const y=i.tabIndicatorRef.value,v=g.tabIndicatorRef.value;w!==null&&(clearTimeout(w),w=null),y.style.transition="none",y.style.transform="none",v.style.transition="none",v.style.transform="none";const c=y.getBoundingClientRect(),q=v.getBoundingClientRect();v.style.transform=t.vertical===!0?`translate3d(0,${c.top-q.top}px,0) scale3d(1,${q.height?c.height/q.height:1},1)`:`translate3d(${c.left-q.left}px,0,0) scale3d(${q.width?c.width/q.width:1},1,1)`,m(()=>{w=setTimeout(()=>{w=null,v.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",v.style.transform="none"},70)})}g&&E.value===!0&&F(g.rootRef.value)}function F(n){const{left:o,width:i,top:g,height:y}=b.value.getBoundingClientRect(),v=n.getBoundingClientRect();let c=t.vertical===!0?v.top-g:v.left-o;if(c<0){b.value[t.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(c),z();return}c+=t.vertical===!0?v.height-y:v.width-i,c>0&&(b.value[t.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(c),z())}function z(){const n=b.value;if(n===null)return;const o=n.getBoundingClientRect(),i=t.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);K.value===!0?(O.value=Math.ceil(i+o.width)<n.scrollWidth-1,D.value=i>0):(O.value=i>0,D.value=t.vertical===!0?Math.ceil(i+o.height)<n.scrollHeight:Math.ceil(i+o.width)<n.scrollWidth)}function ce(n){A!==null&&clearInterval(A),A=setInterval(()=>{Be(n)===!0&&$()},5)}function de(){ce(Y.value===!0?Number.MAX_SAFE_INTEGER:0)}function fe(){ce(Y.value===!0?0:Number.MAX_SAFE_INTEGER)}function $(){A!==null&&(clearInterval(A),A=null)}function Ee(n,o){const i=Array.prototype.filter.call(b.value.children,q=>q===o||q.matches&&q.matches(".q-tab.q-focusable")===!0),g=i.length;if(g===0)return;if(n===36)return F(i[0]),i[0].focus(),!0;if(n===35)return F(i[g-1]),i[g-1].focus(),!0;const y=n===(t.vertical===!0?38:37),v=n===(t.vertical===!0?40:39),c=y===!0?-1:v===!0?1:void 0;if(c!==void 0){const q=K.value===!0?-1:1,I=i.indexOf(o)+c*q;return I>=0&&I<g&&(F(i[I]),i[I].focus({preventScroll:!0})),!0}}const Ae=p(()=>Y.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,o)=>{n.scrollLeft=-o}}:t.vertical===!0?{get:n=>n.scrollTop,set:(n,o)=>{n.scrollTop=o}}:{get:n=>n.scrollLeft,set:(n,o)=>{n.scrollLeft=o}});function Be(n){const o=b.value,{get:i,set:g}=Ae.value;let y=!1,v=i(o);const c=n<v?-1:1;return v+=c*5,v<0?(y=!0,v=0):(c===-1&&v<=n||c===1&&v>=n)&&(y=!0,v=n),g(o,v),z(),y}function ve(n,o){for(const i in n)if(n[i]!==o[i])return!1;return!0}function Ie(){let n=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const i=u.filter(c=>c.routeData!==void 0&&c.routeData.hasRouterLink.value===!0),{hash:g,query:y}=f.$route,v=Object.keys(y).length;for(const c of i){const q=c.routeData.exact.value===!0;if(c.routeData[q===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:I,query:J,matched:Fe,href:ze}=c.routeData.resolvedLink.value,Z=Object.keys(J).length;if(q===!0){if(I!==g||Z!==v||ve(y,J)===!1)continue;n=c.name.value;break}if(I!==""&&I!==g||Z!==0&&ve(J,y)===!1)continue;const x={matchedLen:Fe.length,queryDiff:v-Z,hrefLen:ze.length-I.length};if(x.matchedLen>o.matchedLen){n=c.name.value,o=x;continue}else if(x.matchedLen!==o.matchedLen)continue;if(x.queryDiff<o.queryDiff)n=c.name.value,o=x;else if(x.queryDiff!==o.queryDiff)continue;x.hrefLen>o.hrefLen&&(n=c.name.value,o=x)}n===null&&u.some(c=>c.routeData===void 0&&c.name.value===C.value)===!0||G({name:n,setCurrent:!0})}function Me(n){if(d(),L.value!==!0&&T.value!==null&&n.target&&typeof n.target.closest=="function"){const o=n.target.closest(".q-tab");o&&T.value.contains(o)===!0&&(L.value=!0,E.value===!0&&F(o))}}function $e(){h(()=>{L.value=!1},30)}function X(){be.avoidRouteWatcher===!1?k(Ie):P()}function he(){if(B===void 0){const n=V(()=>f.$route.fullPath,X);B=()=>{n(),B=void 0}}}function xe(n){u.push(n),_.value++,N(),n.routeData===void 0||f.$route===void 0?k(()=>{if(E.value===!0){const o=C.value,i=o!=null&&o!==""?u.find(g=>g.name.value===o):null;i&&F(i.rootRef.value)}}):(he(),n.routeData.hasRouterLink.value===!0&&X())}function De(n){u.splice(u.indexOf(n),1),_.value--,N(),B!==void 0&&n.routeData!==void 0&&(u.every(o=>o.routeData===void 0)===!0&&B(),X())}const be={currentModel:C,tabProps:M,hasFocus:L,hasActiveTab:Se,registerTab:xe,unregisterTab:De,verifyRouteModel:X,updateModel:G,onKbdNavigate:Ee,avoidRouteWatcher:!1};Ze(pe,be);function me(){w!==null&&clearTimeout(w),$(),B!==void 0&&B()}let ge;return qe(me),et(()=>{ge=B!==void 0,me()}),tt(()=>{ge===!0&&he(),N()}),()=>S("div",{ref:T,class:Le.value,role:"tablist",onFocusin:Me,onFocusout:$e},[S(rt,{onResize:se}),S("div",{ref:b,class:Re.value,onScroll:z},nt(r.default)),S(U,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(O.value===!0?"":" q-tabs__arrow--faded"),name:t.leftIcon||e.iconSet.tabs[t.vertical===!0?"up":"left"],onMousedownPassive:de,onTouchstartPassive:de,onMouseupPassive:$,onMouseleavePassive:$,onTouchendPassive:$}),S(U,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:t.rightIcon||e.iconSet.tabs[t.vertical===!0?"down":"right"],onMousedownPassive:fe,onTouchstartPassive:fe,onMouseupPassive:$,onMouseleavePassive:$,onTouchendPassive:$})])}});export{Tt as Q,mt as T,gt as a,Ct as b,Te as g,we as s,yt as u};