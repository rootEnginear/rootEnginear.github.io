import{S as M,i as g,s as k,h as w,f as T,n as b,d as m,o as q,e as A,c as F,a as I,b as S,t as y,j as l}from"./index.305b5983.js";function E(o){let s;return{c(){s=A("div"),this.h()},l(e){s=F(e,"DIV",{class:!0}),I(s).forEach(m),this.h()},h(){S(s,"class","h-48 w-48 border border-accent transform-gpu ease-out fixed top-0 left-0 rounded-full z-20 mix-blend-difference pointer-events-none"),y(s,"duration-200",o[1]),l(s,"--tw-translate-x","calc(var(--mouse-x)*1px - 50%)"),l(s,"--tw-translate-y","calc(var(--mouse-y)*1px - 50%)"),l(s,"--mouse-x",o[2]),l(s,"--mouse-y",o[3]),l(s,"--tw-scale-x",o[4]&&o[1]?o[5]?1.33:1:0),l(s,"--tw-scale-y",o[4]&&o[1]?o[5]?1.33:1:0)},m(e,t){T(e,s,t)},p(e,t){t&2&&y(s,"duration-200",e[1]),t&4&&l(s,"--mouse-x",e[2]),t&8&&l(s,"--mouse-y",e[3]),t&50&&l(s,"--tw-scale-x",e[4]&&e[1]?e[5]?1.33:1:0),t&50&&l(s,"--tw-scale-y",e[4]&&e[1]?e[5]?1.33:1:0)},d(e){e&&m(s)}}}function C(o){let s,e=o[0]&&E(o);return{c(){e&&e.c(),s=w()},l(t){e&&e.l(t),s=w()},m(t,n){e&&e.m(t,n),T(t,s,n)},p(t,[n]){t[0]?e?e.p(t,n):(e=E(t),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i:b,o:b,d(t){e&&e.d(t),t&&m(s)}}}const L=50;function V(o,s,e){let t=!1,n=!1,c=0,d=0,r=!1,u=!1;const p=a=>requestAnimationFrame(()=>{a&&(window.getComputedStyle(a.target).cursor==="pointer"?u===!1&&e(5,u=!0):e(5,u=!1),e(2,c=a.clientX),e(3,d=a.clientY),n||requestAnimationFrame(()=>{e(1,n=!0)}))});let h=null,i=!0,f=null,v=a=>{i?(i=!1,r||e(4,r=!0),p(a),setTimeout(()=>{i=!0,f&&clearTimeout(f),f=setTimeout(()=>{p(h)},L)},L)):h=a},_=()=>{e(4,r=!1)};return q(()=>(window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(e(0,t=!0),document.addEventListener("mousemove",v),document.addEventListener("mouseleave",_)),()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseleave",_)})),[t,n,c,d,r,u]}class z extends M{constructor(s){super(),g(this,s,V,C,k,{})}}export{z as default};