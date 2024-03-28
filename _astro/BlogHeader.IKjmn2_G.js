import{S as At,i as St,s as Et,e as L,a as ht,t as Dt,c as B,b as Y,f as dt,m as Ot,d as w,h as g,x as it,j as H,k as W,w as Mt,n as st,o as Pt,y as nt,q as Rt}from"./index.Bmz4Zztr.js";import{i as Z,n as A,c as Ut,a as M,b as F,d as Ft,p as It,e as Vt,f as mt,r as jt,s as xt}from"./index.es.BxUwZI99.js";function Ct(t,e){t.indexOf(e)===-1&&t.push(e)}const p={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},gt=t=>Array.isArray(t)&&Z(t[0]),J=t=>typeof t=="object"&&!!t.createAnimation,I={ms:t=>t*1e3,s:t=>t/1e3},pt=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,qt=1e-7,zt=12;function Ht(t,e,i,s,o){let n,a,r=0;do a=e+(i-e)/2,n=pt(a,s,o)-t,n>0?i=a:e=a;while(Math.abs(n)>qt&&++r<zt);return a}function U(t,e,i,s){if(t===e&&i===s)return A;const o=n=>Ht(n,0,1,t,i);return n=>n===0||n===1?n:pt(o(n),e,s)}const Lt=(t,e="end")=>i=>{i=e==="end"?Math.min(i,.999):Math.max(i,.001);const s=i*t,o=e==="end"?Math.floor(s):Math.ceil(s);return Ut(0,1,o/t)},at={ease:U(.25,.1,.25,1),"ease-in":U(.42,0,1,1),"ease-in-out":U(.42,0,.58,1),"ease-out":U(0,0,.58,1)},Bt=/\((.*?)\)/;function rt(t){if(M(t))return t;if(gt(t))return U(...t);if(at[t])return at[t];if(t.startsWith("steps")){const e=Bt.exec(t);if(e){const i=e[1].split(",");return Lt(parseFloat(i[0]),i[1].trim())}}return A}class yt{constructor(e,i=[0,1],{easing:s,duration:o=p.duration,delay:n=p.delay,endDelay:a=p.endDelay,repeat:r=p.repeat,offset:u,direction:d="normal",autoplay:l=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=A,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((c,T)=>{this.resolve=c,this.reject=T}),s=s||p.easing,J(s)){const c=s.createAnimation(i);s=c.easing,i=c.keyframes||i,o=c.duration||o}this.repeat=r,this.easing=F(s)?A:rt(s),this.updateDuration(o);const S=Ft(i,u,F(s)?s.map(rt):A);this.tick=c=>{var T;n=n;let m=0;this.pauseTime!==void 0?m=this.pauseTime:m=(c-this.startTime)*this.rate,this.t=m,m/=1e3,m=Math.max(m-n,0),this.playState==="finished"&&this.pauseTime===void 0&&(m=this.totalDuration);const E=m/this.duration;let j=Math.floor(E),b=E%1;!b&&E>=1&&(b=1),b===1&&j--;const x=j%2;(d==="reverse"||d==="alternate"&&x||d==="alternate-reverse"&&!x)&&(b=1-b);const P=m>=this.totalDuration?1:Math.min(b,1),D=S(this.easing(P));e(D),this.pauseTime===void 0&&(this.playState==="finished"||m>=this.totalDuration+a)?(this.playState="finished",(T=this.resolve)===null||T===void 0||T.call(this,D)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},l&&this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}class Nt{setAnimation(e){this.animation=e,e?.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const k=new WeakMap;function bt(t){return k.has(t)||k.set(t,{transforms:[],values:new Map}),k.get(t)}function Kt(t,e){return t.has(e)||t.set(e,new Nt),t.get(e)}const Wt=["","X","Y","Z"],kt=["translate","scale","rotate","skew"],N={x:"translateX",y:"translateY",z:"translateZ"},ot={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Gt={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:ot,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:A},skew:ot},V=new Map,tt=t=>`--motion-${t}`,K=["x","y","z"];kt.forEach(t=>{Wt.forEach(e=>{K.push(t+e),V.set(tt(t+e),Gt[t])})});const Xt=(t,e)=>K.indexOf(t)-K.indexOf(e),Yt=new Set(K),vt=t=>Yt.has(t),Zt=(t,e)=>{N[e]&&(e=N[e]);const{transforms:i}=bt(t);Ct(i,e),t.style.transform=Jt(i)},Jt=t=>t.sort(Xt).reduce(Qt,"").trim(),Qt=(t,e)=>`${t} ${e}(var(${tt(e)}))`,Q=t=>t.startsWith("--"),lt=new Set;function $t(t){if(!lt.has(t)){lt.add(t);try{const{syntax:e,initialValue:i}=V.has(t)?V.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:i})}catch{}}}const G=(t,e)=>document.createElement("div").animate(t,e),ct={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{G({opacity:[1]})}catch{return!1}return!0},finished:()=>!!G({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{G({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},X={},O={};for(const t in ct)O[t]=()=>(X[t]===void 0&&(X[t]=ct[t]()),X[t]);const te=.015,ee=(t,e)=>{let i="";const s=Math.round(e/te);for(let o=0;o<s;o++)i+=t(It(0,s-1,o))+", ";return i.substring(0,i.length-2)},ut=(t,e)=>M(t)?O.linearEasing()?`linear(${ee(t,e)})`:p.easing:gt(t)?ie(t):t,ie=([t,e,i,s])=>`cubic-bezier(${t}, ${e}, ${i}, ${s})`;function se(t,e){for(let i=0;i<t.length;i++)t[i]===null&&(t[i]=i?t[i-1]:e());return t}const ne=t=>Array.isArray(t)?t:[t];function $(t){return N[t]&&(t=N[t]),vt(t)?tt(t):t}const z={get:(t,e)=>{e=$(e);let i=Q(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!i&&i!==0){const s=V.get(e);s&&(i=s.initialValue)}return i},set:(t,e,i)=>{e=$(e),Q(e)?t.style.setProperty(e,i):t.style[e]=i}};function Tt(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function ae(t,e){var i;let s=e?.toDefaultUnit||A;const o=t[t.length-1];if(Vt(o)){const n=((i=o.match(/(-?[\d.]+)([a-z%]*)/))===null||i===void 0?void 0:i[2])||"";n&&(s=a=>a+n)}return s}function re(){return window.__MOTION_DEV_TOOLS_RECORD}function oe(t,e,i,s={},o){const n=re(),a=s.record!==!1&&n;let r,{duration:u=p.duration,delay:d=p.delay,endDelay:l=p.endDelay,repeat:S=p.repeat,easing:c=p.easing,persist:T=!1,direction:m,offset:E,allowWebkitAcceleration:j=!1,autoplay:b=!0}=s;const x=bt(t),P=vt(e);let D=O.waapi();P&&Zt(t,e);const y=$(e),C=Kt(x.values,y),v=V.get(y);return Tt(C.animation,!(J(c)&&C.generator)&&s.record!==!1),()=>{const q=()=>{var f,R;return(R=(f=z.get(t,y))!==null&&f!==void 0?f:v?.initialValue)!==null&&R!==void 0?R:0};let h=se(ne(i),q);const et=ae(h,v);if(J(c)){const f=c.createAnimation(h,e!=="opacity",q,y,C);c=f.easing,h=f.keyframes||h,u=f.duration||u}if(Q(y)&&(O.cssRegisterProperty()?$t(y):D=!1),P&&!O.linearEasing()&&(M(c)||F(c)&&c.some(M))&&(D=!1),D){v&&(h=h.map(_=>Z(_)?v.toDefaultUnit(_):_)),h.length===1&&(!O.partialKeyframes()||a)&&h.unshift(q());const f={delay:I.ms(d),duration:I.ms(u),endDelay:I.ms(l),easing:F(c)?void 0:ut(c,u),direction:m,iterations:S+1,fill:"both"};r=t.animate({[y]:h,offset:E,easing:F(c)?c.map(_=>ut(_,u)):void 0},f),r.finished||(r.finished=new Promise((_,wt)=>{r.onfinish=_,r.oncancel=wt}));const R=h[h.length-1];r.finished.then(()=>{T||(z.set(t,y,R),r.cancel())}).catch(mt),j||(r.playbackRate=1.000001)}else if(o&&P)h=h.map(f=>typeof f=="string"?parseFloat(f):f),h.length===1&&h.unshift(parseFloat(q())),r=new o(f=>{z.set(t,y,et?et(f):f)},h,Object.assign(Object.assign({},s),{duration:u,easing:c}));else{const f=h[h.length-1];z.set(t,y,v&&Z(f)?v.toDefaultUnit(f):f)}return a&&n(t,e,h,{duration:u,delay:d,easing:c,repeat:S,offset:E},"motion-one"),C.setAnimation(r),r&&!b&&r.pause(),r}}const le=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t),ce=t=>t(),_t=(t,e,i=p.duration)=>new Proxy({animations:t.map(ce).filter(Boolean),duration:i,options:e},fe),ue=t=>t.animations[0],fe={get:(t,e)=>{const i=ue(t);switch(e){case"duration":return t.duration;case"currentTime":return I.s(i?.[e]||0);case"playbackRate":case"playState":return i?.[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(he)).catch(mt)),t.finished;case"stop":return()=>{t.animations.forEach(s=>Tt(s))};case"forEachNative":return s=>{t.animations.forEach(o=>s(o,t))};default:return typeof i?.[e]>"u"?void 0:()=>t.animations.forEach(s=>s[e]())}},set:(t,e,i)=>{switch(e){case"currentTime":i=I.ms(i);case"playbackRate":for(let s=0;s<t.animations.length;s++)t.animations[s][e]=i;return!0}return!1}},he=t=>t.finished;function de(t,e,i){return M(t)?t(e,i):t}function me(t){return function(i,s,o={}){i=jt(i);const n=i.length,a=[];for(let r=0;r<n;r++){const u=i[r];for(const d in s){const l=le(o,d);l.delay=de(l.delay,r,n);const S=oe(u,d,s[d],l,t);a.push(S)}}return _t(a,o,o.duration)}}const ge=me(yt);function pe(t,e={}){return _t([()=>{const i=new yt(t,[0,1],e);return i.finished.catch(()=>{}),i}],e,e.duration)}function ye(t,e,i){return(M(t)?pe:ge)(t,e,i)}function ft(t){let e,i,s,o,n;return{c(){e=L("img"),o=ht(),n=L("div"),this.h()},l(a){e=B(a,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0,loading:!0,decoding:!0}),o=dt(a),n=B(a,"DIV",{class:!0}),Y(n).forEach(w),this.h()},h(){g(e,"class",i="absolute top-0 left-0 object-cover w-full "+(t[3]?"h-full":"h-[75%]")),nt(e.src,s=t[1])||g(e,"src",s),g(e,"alt",""),g(e,"width","960"),g(e,"height","640"),g(e,"loading","eager"),g(e,"decoding","async"),g(n,"class","absolute inset-0 top-1/2 bg-gradient-to-t from-gray-950 to-transparent")},m(a,r){H(a,e,r),t[6](e),H(a,o,r),H(a,n,r)},p(a,r){r&8&&i!==(i="absolute top-0 left-0 object-cover w-full "+(a[3]?"h-full":"h-[75%]"))&&g(e,"class",i),r&2&&!nt(e.src,s=a[1])&&g(e,"src",s)},d(a){a&&(w(e),w(o),w(n)),t[6](null)}}}function be(t){let e,i,s,o,n=t[1]&&ft(t);return{c(){e=L("header"),n&&n.c(),i=ht(),s=L("h1"),o=Dt(t[2]),this.h()},l(a){e=B(a,"HEADER",{class:!0});var r=Y(e);n&&n.l(r),i=dt(r),s=B(r,"H1",{class:!0});var u=Y(s);o=Ot(u,t[2]),u.forEach(w),r.forEach(w),this.h()},h(){g(s,"class","absolute left-32 bottom-32 right-32 text-right blog-title"),g(e,"class","-m-32 mb-32 h-[50vh] rounded-16 bg-cover bg-center text-5xl font-black leading-normal overflow-hidden"),it(e,"background-image",t[0]?`url(${t[0]})`:"")},m(a,r){H(a,e,r),n&&n.m(e,null),W(e,i),W(e,s),W(s,o)},p(a,[r]){a[1]?n?n.p(a,r):(n=ft(a),n.c(),n.m(e,i)):n&&(n.d(1),n=null),r&4&&Mt(o,a[2]),r&1&&it(e,"background-image",a[0]?`url(${a[0]})`:"")},i:st,o:st,d(a){a&&w(e),n&&n.d()}}}function ve(t,e,i){Pt(()=>{u&&xt(ye(u,{transform:["translateY(0)",`translateY(${r?"-":""}640px)`]}))});let{bgUrl:s=""}=e,{fgUrl:o=""}=e,{title:n}=e,{fullHeaderFg:a=!1}=e,{reversed:r=!1}=e,u;function d(l){Rt[l?"unshift":"push"](()=>{u=l,i(4,u)})}return t.$$set=l=>{"bgUrl"in l&&i(0,s=l.bgUrl),"fgUrl"in l&&i(1,o=l.fgUrl),"title"in l&&i(2,n=l.title),"fullHeaderFg"in l&&i(3,a=l.fullHeaderFg),"reversed"in l&&i(5,r=l.reversed)},[s,o,n,a,u,r,d]}class we extends At{constructor(e){super(),St(this,e,ve,be,Et,{bgUrl:0,fgUrl:1,title:2,fullHeaderFg:3,reversed:5})}}export{we as default};
