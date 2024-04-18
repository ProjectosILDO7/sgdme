import{j as M,br as _,bs as Ge,bt as xt,a as Ht,bc as Ct,d as qt,f as kt,bu as Ot,r as A,b0 as It,w as ne,s as g,ak as re,v as jt,y as Tt,bv as Vt,n as ze,W as N}from"./index.7da21d26.js";import{u as $t}from"./use-render-cache.1a7235d4.js";const L=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Ft(e,r,c){return Object.prototype.toString.call(e)==="[object Date]"&&(c=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),Zt(qe(e,r,c))}function Le(e,r,c){return pe(Nt(e,r,c))}function Et(e){return At(e)===0}function fe(e,r){return r<=6?31:r<=11||Et(e)?30:29}function At(e){const r=L.length;let c=L[0],i,d,l,D,s;if(e<c||e>=L[r-1])throw new Error("Invalid Jalaali year "+e);for(s=1;s<r&&(i=L[s],d=i-c,!(e<i));s+=1)c=i;return D=e-c,d-D<6&&(D=D-d+S(d+4,33)*33),l=I(I(D+1,33)-1,4),l===-1&&(l=4),l}function Ke(e,r){const c=L.length,i=e+621;let d=-14,l=L[0],D,s,m,x,f;if(e<l||e>=L[c-1])throw new Error("Invalid Jalaali year "+e);for(f=1;f<c&&(D=L[f],s=D-l,!(e<D));f+=1)d=d+S(s,33)*8+S(I(s,33),4),l=D;x=e-l,d=d+S(x,33)*8+S(I(x,33)+3,4),I(s,33)===4&&s-x===4&&(d+=1);const b=S(i,4)-S((S(i,100)+1)*3,4)-150,F=20+d-b;return r||(s-x<6&&(x=x-s+S(s+4,33)*33),m=I(I(x+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:i,march:F}}function Nt(e,r,c){const i=Ke(e,!0);return qe(i.gy,3,i.march)+(r-1)*31-S(r,7)*(r-7)+c-1}function Zt(e){const r=pe(e).gy;let c=r-621,i,d,l;const D=Ke(c,!1),s=qe(r,3,D.march);if(l=e-s,l>=0){if(l<=185)return d=1+S(l,31),i=I(l,31)+1,{jy:c,jm:d,jd:i};l-=186}else c-=1,l+=179,D.leap===1&&(l+=1);return d=7+S(l,30),i=I(l,30)+1,{jy:c,jm:d,jd:i}}function qe(e,r,c){let i=S((e+S(r-8,6)+100100)*1461,4)+S(153*I(r+9,12)+2,5)+c-34840408;return i=i-S(S(e+100100+S(r-8,6),100)*3,4)+752,i}function pe(e){let r=4*e+139361631;r=r+S(S(4*e+183187720,146097)*3,4)*4-3908;const c=S(I(r,1461),4)*5+308,i=S(I(c,153),5)+1,d=I(S(c,153),12)+1;return{gy:S(r,1461)-100100+S(8-d,6),gm:d,gd:i}}function S(e,r){return~~(e/r)}function I(e,r){return e-~~(e/r)*r}const Bt=["gregorian","persian"],Rt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Bt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},zt=["update:modelValue"];function R(e){return e.year+"/"+_(e.month)+"/"+_(e.day)}function Lt(e,r){const c=M(()=>e.disable!==!0&&e.readonly!==!0),i=M(()=>c.value===!0?0:-1),d=M(()=>{const s=[];return e.color!==void 0&&s.push(`bg-${e.color}`),e.textColor!==void 0&&s.push(`text-${e.textColor}`),s.join(" ")});function l(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function D(s){const m=new Date,x=s===!0?null:0;if(e.calendar==="persian"){const f=Ft(m);return{year:f.jy,month:f.jm,day:f.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:x,minute:x,second:x,millisecond:x}}return{editable:c,tabindex:i,headerClass:d,getLocale:l,getCurrentDate:D}}const et=864e5,Qt=36e5,Ce=6e4,tt="YYYY-MM-DDTHH:mm:ss.SSSZ",Xt=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Pt=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,xe={};function Wt(e,r){const c="("+r.days.join("|")+")",i=e+c;if(xe[i]!==void 0)return xe[i];const d="("+r.daysShort.join("|")+")",l="("+r.months.join("|")+")",D="("+r.monthsShort.join("|")+")",s={};let m=0;const x=e.replace(Pt,b=>{switch(m++,b){case"YY":return s.YY=m,"(-?\\d{1,2})";case"YYYY":return s.YYYY=m,"(-?\\d{1,4})";case"M":return s.M=m,"(\\d{1,2})";case"MM":return s.M=m,"(\\d{2})";case"MMM":return s.MMM=m,D;case"MMMM":return s.MMMM=m,l;case"D":return s.D=m,"(\\d{1,2})";case"Do":return s.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return s.D=m,"(\\d{2})";case"H":return s.H=m,"(\\d{1,2})";case"HH":return s.H=m,"(\\d{2})";case"h":return s.h=m,"(\\d{1,2})";case"hh":return s.h=m,"(\\d{2})";case"m":return s.m=m,"(\\d{1,2})";case"mm":return s.m=m,"(\\d{2})";case"s":return s.s=m,"(\\d{1,2})";case"ss":return s.s=m,"(\\d{2})";case"S":return s.S=m,"(\\d{1})";case"SS":return s.S=m,"(\\d{2})";case"SSS":return s.S=m,"(\\d{3})";case"A":return s.A=m,"(AM|PM)";case"a":return s.a=m,"(am|pm)";case"aa":return s.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return c;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return s.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return s.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return s.X=m,"(-?\\d+)";case"x":return s.x=m,"(-?\\d{4,})";default:return m--,b[0]==="["&&(b=b.substring(1,b.length-1)),b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),f={map:s,regex:new RegExp("^"+x)};return xe[i]=f,f}function at(e,r){return e!==void 0?e:r!==void 0?r.date:xt.date}function Qe(e,r=""){const c=e>0?"-":"+",i=Math.abs(e),d=Math.floor(i/60),l=i%60;return c+_(d)+r+_(l)}function Jt(e,r,c,i,d){const l={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(l,d),e==null||e===""||typeof e!="string")return l;r===void 0&&(r=tt);const D=at(c,Ge.props),s=D.months,m=D.monthsShort,{regex:x,map:f}=Wt(r,D),b=e.match(x);if(b===null)return l;let F="";if(f.X!==void 0||f.x!==void 0){const T=parseInt(b[f.X!==void 0?f.X:f.x],10);if(isNaN(T)===!0||T<0)return l;const V=new Date(T*(f.X!==void 0?1e3:1));l.year=V.getFullYear(),l.month=V.getMonth()+1,l.day=V.getDate(),l.hour=V.getHours(),l.minute=V.getMinutes(),l.second=V.getSeconds(),l.millisecond=V.getMilliseconds()}else{if(f.YYYY!==void 0)l.year=parseInt(b[f.YYYY],10);else if(f.YY!==void 0){const T=parseInt(b[f.YY],10);l.year=T<0?T:2e3+T}if(f.M!==void 0){if(l.month=parseInt(b[f.M],10),l.month<1||l.month>12)return l}else f.MMM!==void 0?l.month=m.indexOf(b[f.MMM])+1:f.MMMM!==void 0&&(l.month=s.indexOf(b[f.MMMM])+1);if(f.D!==void 0){if(l.day=parseInt(b[f.D],10),l.year===null||l.month===null||l.day<1)return l;const T=i!=="persian"?new Date(l.year,l.month,0).getDate():fe(l.year,l.month);if(l.day>T)return l}f.H!==void 0?l.hour=parseInt(b[f.H],10)%24:f.h!==void 0&&(l.hour=parseInt(b[f.h],10)%12,(f.A&&b[f.A]==="PM"||f.a&&b[f.a]==="pm"||f.aa&&b[f.aa]==="p.m.")&&(l.hour+=12),l.hour=l.hour%24),f.m!==void 0&&(l.minute=parseInt(b[f.m],10)%60),f.s!==void 0&&(l.second=parseInt(b[f.s],10)%60),f.S!==void 0&&(l.millisecond=parseInt(b[f.S],10)*10**(3-b[f.S].length)),(f.Z!==void 0||f.ZZ!==void 0)&&(F=f.Z!==void 0?b[f.Z].replace(":",""):b[f.ZZ],l.timezoneOffset=(F[0]==="+"?-1:1)*(60*F.slice(1,3)+1*F.slice(3,5)))}return l.dateHash=_(l.year,6)+"/"+_(l.month)+"/"+_(l.day),l.timeHash=_(l.hour)+":"+_(l.minute)+":"+_(l.second)+F,l}function Xe(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const c=new Date(r.getFullYear(),0,4);c.setDate(c.getDate()-(c.getDay()+6)%7+3);const i=r.getTimezoneOffset()-c.getTimezoneOffset();r.setHours(r.getHours()-i);const d=(r-c)/(et*7);return 1+Math.floor(d)}function Z(e,r,c){const i=new Date(e),d=`set${c===!0?"UTC":""}`;switch(r){case"year":case"years":i[`${d}Month`](0);case"month":case"months":i[`${d}Date`](1);case"day":case"days":case"date":i[`${d}Hours`](0);case"hour":case"hours":i[`${d}Minutes`](0);case"minute":case"minutes":i[`${d}Seconds`](0);case"second":case"seconds":i[`${d}Milliseconds`](0)}return i}function ve(e,r,c){return(e.getTime()-e.getTimezoneOffset()*Ce-(r.getTime()-r.getTimezoneOffset()*Ce))/c}function nt(e,r,c="days"){const i=new Date(e),d=new Date(r);switch(c){case"years":case"year":return i.getFullYear()-d.getFullYear();case"months":case"month":return(i.getFullYear()-d.getFullYear())*12+i.getMonth()-d.getMonth();case"days":case"day":case"date":return ve(Z(i,"day"),Z(d,"day"),et);case"hours":case"hour":return ve(Z(i,"hour"),Z(d,"hour"),Qt);case"minutes":case"minute":return ve(Z(i,"minute"),Z(d,"minute"),Ce);case"seconds":case"second":return ve(Z(i,"second"),Z(d,"second"),1e3)}}function Pe(e){return nt(e,Z(e,"year"),"days")+1}function We(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const Je={YY(e,r,c){const i=this.YYYY(e,r,c)%100;return i>=0?_(i):"-"+_(Math.abs(i))},YYYY(e,r,c){return c!=null?c:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return _(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return We(this.Q(e))},D(e){return e.getDate()},Do(e){return We(e.getDate())},DD(e){return _(e.getDate())},DDD(e){return Pe(e)},DDDD(e){return _(Pe(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return Xe(e)},ww(e){return _(Xe(e))},H(e){return e.getHours()},HH(e){return _(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return _(this.h(e))},m(e){return e.getMinutes()},mm(e){return _(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return _(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return _(Math.floor(e.getMilliseconds()/10))},SSS(e){return _(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,c,i){const d=i==null?e.getTimezoneOffset():i;return Qe(d,":")},ZZ(e,r,c,i){const d=i==null?e.getTimezoneOffset():i;return Qe(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function Ut(e,r,c,i,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const l=new Date(e);if(isNaN(l))return;r===void 0&&(r=tt);const D=at(c,Ge.props);return r.replace(Xt,(s,m)=>s in Je?Je[s](l,D,i,d):m===void 0?s:m.split("\\]").join("]"))}const W=20,Gt=["Calendar","Years","Months"],Ue=e=>Gt.includes(e),He=e=>/^-?[\d]+\/[0-1]\d$/.test(e),p=" \u2014 ";function z(e){return e.year+"/"+_(e.month)}var ea=Ht({name:"QDate",props:{...Rt,...Ct,...qt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:He},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:He},navigationMaxYearMonth:{type:String,validator:He},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ue}},emits:[...zt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:c}){const{proxy:i}=Tt(),{$q:d}=i,l=kt(e,d),{getCache:D}=$t(),{tabindex:s,headerClass:m,getLocale:x,getCurrentDate:f}=Lt(e,d);let b;const F=Ot(e),T=Vt(F),V=A(null),Q=A(Fe()),H=A(x()),rt=M(()=>Fe()),lt=M(()=>x()),E=M(()=>f()),h=A(Ee(Q.value,H.value)),O=A(e.defaultView),ke=d.lang.rtl===!0?"right":"left",le=A(ke.value),me=A(ke.value),he=h.value.year,oe=A(he-he%W-(he<0?W:0)),k=A(null),ot=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(l.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),X=M(()=>e.color||"primary"),J=M(()=>e.textColor||"white"),ue=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),ge=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),$=M(()=>ge.value.filter(t=>typeof t=="string").map(t=>be(t,Q.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),U=M(()=>{const t=a=>be(a,Q.value,H.value);return ge.value.filter(a=>It(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ie=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Le(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ye=M(()=>e.calendar==="persian"?R:(t,a,n)=>Ut(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?Q.value:a,n===void 0?H.value:n,t.year,t.timezoneOffset)),ee=M(()=>$.value.length+U.value.reduce((t,a)=>t+1+nt(ie.value(a.to),ie.value(a.from)),0)),Oe=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(k.value!==null){const n=k.value.init,o=ie.value(n);return H.value.daysShort[o.getDay()]+", "+H.value.monthsShort[n.month-1]+" "+n.day+p+"?"}if(ee.value===0)return p;if(ee.value>1)return`${ee.value} ${H.value.pluralDay}`;const t=$.value[0],a=ie.value(t);return isNaN(a.valueOf())===!0?p:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),ut=M(()=>$.value.concat(U.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),it=M(()=>$.value.concat(U.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Ie=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(ee.value===0)return p;if(ee.value>1){const t=ut.value,a=it.value,n=H.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+p+n[a.month-1]+" ":t.month!==a.month?p+n[a.month-1]:"")+" "+a.year}return $.value[0].year}),se=M(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),je=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),st=M(()=>{const t=H.value.daysShort,a=je.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),B=M(()=>{const t=h.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():fe(t.year,t.month)}),ct=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),C=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),q=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),Me=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return C.value!==null&&C.value.year>=h.value.year&&(t.year.prev=!1,C.value.year===h.value.year&&C.value.month>=h.value.month&&(t.month.prev=!1)),q.value!==null&&q.value.year<=h.value.year&&(t.year.next=!1,q.value.year===h.value.year&&q.value.month<=h.value.month&&(t.month.next=!1)),t}),ce=M(()=>{const t={};return $.value.forEach(a=>{const n=z(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Te=M(()=>{const t={};return U.value.forEach(a=>{const n=z(a.from),o=z(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===o?a.to.day:void 0,range:a}),n<o){let u;const{year:Y,month:v}=a.from,y=v<12?{year:Y,month:v+1}:{year:Y+1,month:1};for(;(u=z(y))<=o;)t[u]===void 0&&(t[u]=[]),t[u].push({from:void 0,to:u===o?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),te=M(()=>{if(k.value===null)return;const{init:t,initHash:a,final:n,finalHash:o}=k.value,[u,Y]=a<=o?[t,n]:[n,t],v=z(u),y=z(Y);if(v!==j.value&&y!==j.value)return;const w={};return v===j.value?(w.from=u.day,w.includeFrom=!0):w.from=1,y===j.value?(w.to=Y.day,w.includeTo=!0):w.to=B.value,w}),j=M(()=>z(h.value)),dt=M(()=>{const t={};if(e.options===void 0){for(let n=1;n<=B.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=B.value;n++){const o=j.value+"/"+_(n);t[n]=a(o)}return t}),vt=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=B.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=B.value;n++){const o=j.value+"/"+_(n);t[n]=a(o)===!0&&ct.value(o)}}return t}),ft=M(()=>{let t,a;const{year:n,month:o}=h.value;if(e.calendar!=="persian")t=new Date(n,o-1,1),a=new Date(n,o-1,0).getDate();else{const u=Le(n,o,1);t=new Date(u.gy,u.gm-1,u.gd);let Y=o-1,v=n;Y===0&&(Y=12,v--),a=fe(v,Y)}return{days:t.getDay()-je.value-1,endDay:a}}),Ve=M(()=>{const t=[],{days:a,endDay:n}=ft.value,o=a<0?a+7:a;if(o<6)for(let v=n-o;v<=n;v++)t.push({i:v,fill:!0});const u=t.length;for(let v=1;v<=B.value;v++){const y={i:v,event:vt.value[v],classes:[]};dt.value[v]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(ce.value[j.value]!==void 0&&ce.value[j.value].forEach(v=>{const y=u+v-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:X.value,textColor:J.value})}),Te.value[j.value]!==void 0&&Te.value[j.value].forEach(v=>{if(v.from!==void 0){const y=u+v.from-1,w=u+(v.to||B.value)-1;for(let ae=y;ae<=w;ae++)Object.assign(t[ae],{range:v.range,unelevated:!0,color:X.value,textColor:J.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),v.to!==void 0&&Object.assign(t[w],{rangeTo:!0,flat:!1})}else if(v.to!==void 0){const y=u+v.to-1;for(let w=u;w<=y;w++)Object.assign(t[w],{range:v.range,unelevated:!0,color:X.value,textColor:J.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=u+B.value-1;for(let w=u;w<=y;w++)Object.assign(t[w],{range:v.range,unelevated:!0,color:X.value,textColor:J.value})}}),te.value!==void 0){const v=u+te.value.from-1,y=u+te.value.to-1;for(let w=v;w<=y;w++)t[w].color=X.value,t[w].editRange=!0;te.value.includeFrom===!0&&(t[v].editRangeFrom=!0),te.value.includeTo===!0&&(t[y].editRangeTo=!0)}h.value.year===E.value.year&&h.value.month===E.value.month&&(t[u+E.value.day-1].today=!0);const Y=t.length%7;if(Y>0){const v=7-Y;for(let y=1;y<=v;y++)t.push({i:y,fill:!0})}return t.forEach(v=>{let y="q-date__calendar-item ";v.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${v.in===!0?"in":"out"}`,v.range!==void 0&&(y+=` q-date__range${v.rangeTo===!0?"-to":v.rangeFrom===!0?"-from":""}`),v.editRange===!0&&(y+=` q-date__edit-range${v.editRangeFrom===!0?"-from":""}${v.editRangeTo===!0?"-to":""}`),(v.range!==void 0||v.editRange===!0)&&(y+=` text-${v.color}`)),v.classes=y}),t}),mt=M(()=>e.disable===!0?{"aria-disabled":"true"}:{});ne(()=>e.modelValue,t=>{if(b===t)b=0;else{const a=Ee(Q.value,H.value);G(a.year,a.month,a)}}),ne(O,()=>{V.value!==null&&i.$el.contains(document.activeElement)===!0&&V.value.focus()}),ne(()=>h.value.year+"|"+h.value.month,()=>{c("navigation",{year:h.value.year,month:h.value.month})}),ne(rt,t=>{Re(t,H.value,"mask"),Q.value=t}),ne(lt,t=>{Re(Q.value,t,"locale"),H.value=t});function $e(){const{year:t,month:a,day:n}=E.value,o={...h.value,year:t,month:a,day:n},u=ce.value[z(o)];(u===void 0||u.includes(o.day)===!1)&&_e(o),De(o.year,o.month)}function ht(t){Ue(t)===!0&&(O.value=t)}function gt(t,a){["month","year"].includes(t)&&(t==="month"?Ne:Ye)(a===!0?-1:1)}function De(t,a){O.value="Calendar",G(t,a)}function yt(t,a){if(e.range===!1||!t){k.value=null;return}const n=Object.assign({...h.value},t),o=a!==void 0?Object.assign({...h.value},a):n;k.value={init:n,initHash:R(n),final:o,finalHash:R(o)},De(n.year,n.month)}function Fe(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function be(t,a,n){return Jt(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ee(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ae();const o=n[n.length-1],u=be(o.from!==void 0?o.from:o,t,a);return u.dateHash===null?Ae():u}function Ae(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=E.value!==void 0?E.value:f();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+_(a)+"/01"}}function Ne(t){let a=h.value.year,n=Number(h.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),G(a,n),ue.value===!0&&de("month")}function Ye(t){const a=Number(h.value.year)+t;G(a,h.value.month),ue.value===!0&&de("year")}function Mt(t){G(t,h.value.month),O.value=e.defaultView==="Years"?"Months":"Calendar",ue.value===!0&&de("year")}function Dt(t){G(h.value.year,t),O.value="Calendar",ue.value===!0&&de("month")}function bt(t,a){const n=ce.value[a];(n!==void 0&&n.includes(t.day)===!0?we:_e)(t)}function P(t){return{year:t.year,month:t.month,day:t.day}}function G(t,a,n){if(C.value!==null&&t<=C.value.year&&((a<C.value.month||t<C.value.year)&&(a=C.value.month),t=C.value.year),q.value!==null&&t>=q.value.year&&((a>q.value.month||t>q.value.year)&&(a=q.value.month),t=q.value.year),n!==void 0){const{hour:u,minute:Y,second:v,millisecond:y,timezoneOffset:w,timeHash:ae}=n;Object.assign(h.value,{hour:u,minute:Y,second:v,millisecond:y,timezoneOffset:w,timeHash:ae})}const o=t+"/"+_(a)+"/01";o!==h.value.dateHash&&(le.value=h.value.dateHash<o==(d.lang.rtl!==!0)?"left":"right",t!==h.value.year&&(me.value=le.value),ze(()=>{oe.value=t-t%W-(t<0?W:0),Object.assign(h.value,{year:t,month:a,day:1,dateHash:o})}))}function Ze(t,a,n){const o=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;b=o;const{reason:u,details:Y}=Be(a,n);c("update:modelValue",o,u,Y)}function de(t){const a=$.value[0]!==void 0&&$.value[0].dateHash!==null?{...$.value[0]}:{...h.value};ze(()=>{a.year=h.value.year,a.month=h.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():fe(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const o=K(a);b=o;const{details:u}=Be("",a);c("update:modelValue",o,t,u)})}function Be(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...P(a.target),from:P(a.from),to:P(a.to)}}:{reason:`${t}-day`,details:P(a)}}function K(t,a,n){return t.from!==void 0?{from:ye.value(t.from,a,n),to:ye.value(t.to,a,n)}:ye.value(t,a,n)}function _e(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=R(t.from),o=R(t.to),u=$.value.filter(v=>v.dateHash<n||v.dateHash>o),Y=U.value.filter(({from:v,to:y})=>y.dateHash<n||v.dateHash>o);a=u.concat(Y).concat(t).map(v=>K(v))}else{const n=ge.value.slice();n.push(K(t)),a=n}else a=K(t);Ze(a,"add",t)}function we(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=K(t);t.from!==void 0?a=e.modelValue.filter(o=>o.from!==void 0?o.from!==n.from&&o.to!==n.to:!0):a=e.modelValue.filter(o=>o!==n),a.length===0&&(a=null)}Ze(a,"remove",t)}function Re(t,a,n){const o=$.value.concat(U.value).map(u=>K(u,t,a)).filter(u=>u.from!==void 0?u.from.dateHash!==null&&u.to.dateHash!==null:u.dateHash!==null);c("update:modelValue",(e.multiple===!0?o:o[0])||null,n)}function Yt(){if(e.minimal!==!0)return g("div",{class:"q-date__header "+m.value},[g("div",{class:"relative-position"},[g(re,{name:"q-transition--fade"},()=>g("div",{key:"h-yr-"+Ie.value,class:"q-date__header-subtitle q-date__header-link "+(O.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...D("vY",{onClick(){O.value="Years"},onKeyup(t){t.keyCode===13&&(O.value="Years")}})},[Ie.value]))]),g("div",{class:"q-date__header-title relative-position flex no-wrap"},[g("div",{class:"relative-position col"},[g(re,{name:"q-transition--fade"},()=>g("div",{key:"h-sub"+Oe.value,class:"q-date__header-title-label q-date__header-link "+(O.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...D("vC",{onClick(){O.value="Calendar"},onKeyup(t){t.keyCode===13&&(O.value="Calendar")}})},[Oe.value]))]),e.todayBtn===!0?g(N,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:s.value,onClick:$e}):null])])}function Se({label:t,type:a,key:n,dir:o,goTo:u,boundaries:Y,cls:v}){return[g("div",{class:"row items-center q-date__arrow"},[g(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:se.value[0],tabindex:s.value,disable:Y.prev===!1,...D("go-#"+a,{onClick(){u(-1)}})})]),g("div",{class:"relative-position overflow-hidden flex flex-center"+v},[g(re,{name:"q-transition--jump-"+o},()=>g("div",{key:n},[g(N,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:s.value,...D("view#"+a,{onClick:()=>{O.value=a}})})]))]),g("div",{class:"row items-center q-date__arrow"},[g(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:se.value[1],tabindex:s.value,disable:Y.next===!1,...D("go+#"+a,{onClick(){u(1)}})})])]}const _t={Calendar:()=>[g("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[g("div",{class:"q-date__navigation row items-center no-wrap"},Se({label:H.value.months[h.value.month-1],type:"Months",key:h.value.month,dir:le.value,goTo:Ne,boundaries:Me.value.month,cls:" col"}).concat(Se({label:h.value.year,type:"Years",key:h.value.year,dir:me.value,goTo:Ye,boundaries:Me.value.year,cls:""}))),g("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},st.value.map(t=>g("div",{class:"q-date__calendar-item"},[g("div",t)]))),g("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[g(re,{name:"q-transition--slide-"+le.value},()=>g("div",{key:j.value,class:"q-date__calendar-days fit"},Ve.value.map(t=>g("div",{class:t.classes},[t.in===!0?g(N,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:s.value,...D("day#"+t.i,{onClick:()=>{wt(t.i)},onMouseover:()=>{St(t.i)}})},t.event!==!1?()=>g("div",{class:"q-date__event bg-"+t.event}):null):g("div",""+t.i)]))))])])],Months(){const t=h.value.year===E.value.year,a=o=>C.value!==null&&h.value.year===C.value.year&&C.value.month>o||q.value!==null&&h.value.year===q.value.year&&q.value.month<o,n=H.value.monthsShort.map((o,u)=>{const Y=h.value.month===u+1;return g("div",{class:"q-date__months-item flex flex-center"},[g(N,{class:t===!0&&E.value.month===u+1?"q-date__today":null,flat:Y!==!0,label:o,unelevated:Y,color:Y===!0?X.value:null,textColor:Y===!0?J.value:null,tabindex:s.value,disable:a(u+1),...D("month#"+u,{onClick:()=>{Dt(u+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(g("div",{class:"row no-wrap full-width"},[Se({label:h.value.year,type:"Years",key:h.value.year,dir:me.value,goTo:Ye,boundaries:Me.value.year,cls:" col"})])),g("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=oe.value,a=t+W,n=[],o=u=>C.value!==null&&C.value.year>u||q.value!==null&&q.value.year<u;for(let u=t;u<=a;u++){const Y=h.value.year===u;n.push(g("div",{class:"q-date__years-item flex flex-center"},[g(N,{key:"yr"+u,class:E.value.year===u?"q-date__today":null,flat:!Y,label:u,dense:!0,unelevated:Y,color:Y===!0?X.value:null,textColor:Y===!0?J.value:null,tabindex:s.value,disable:o(u),...D("yr#"+u,{onClick:()=>{Mt(u)}})})]))}return g("div",{class:"q-date__view q-date__years flex flex-center"},[g("div",{class:"col-auto"},[g(N,{round:!0,dense:!0,flat:!0,icon:se.value[0],tabindex:s.value,disable:o(t),...D("y-",{onClick:()=>{oe.value-=W}})})]),g("div",{class:"q-date__years-content col self-stretch row items-center"},n),g("div",{class:"col-auto"},[g(N,{round:!0,dense:!0,flat:!0,icon:se.value[1],tabindex:s.value,disable:o(a),...D("y+",{onClick:()=>{oe.value+=W}})})])])}};function wt(t){const a={...h.value,day:t};if(e.range===!1){bt(a,j.value);return}if(k.value===null){const n=Ve.value.find(u=>u.fill!==!0&&u.i===t);if(e.noUnset!==!0&&n.range!==void 0){we({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){we(a);return}const o=R(a);k.value={init:a,initHash:o,final:a,finalHash:o},c("rangeStart",P(a))}else{const n=k.value.initHash,o=R(a),u=n<=o?{from:k.value.init,to:a}:{from:a,to:k.value.init};k.value=null,_e(n===o?a:{target:a,...u}),c("rangeEnd",{from:P(u.from),to:P(u.to)})}}function St(t){if(k.value!==null){const a={...h.value,day:t};Object.assign(k.value,{final:a,finalHash:R(a)})}}return Object.assign(i,{setToday:$e,setView:ht,offsetCalendar:gt,setCalendarTo:De,setEditingRange:yt}),()=>{const t=[g("div",{class:"q-date__content col relative-position"},[g(re,{name:"q-transition--fade"},_t[O.value])])],a=jt(r.default);return a!==void 0&&t.push(g("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&T(t,"push"),g("div",{class:ot.value,...mt.value},[Yt(),g("div",{ref:V,class:"q-date__main col column",tabindex:-1},t)])}}});export{ea as Q};
