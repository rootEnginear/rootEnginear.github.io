import{S as g,i as y,s as k,h as b,f as M,n as E,d,o as q,e as A,c as F,a as I,b as S,m as n,r}from"./index.2c8f3814.js";function L(t){let s;return{c(){s=A("div"),this.h()},l(e){s=F(e,"DIV",{class:!0}),I(s).forEach(d),this.h()},h(){S(s,"class","h-48 w-48 border border-accent transform-gpu ease-out fixed top-0 left-0 z-20 mix-blend-difference pointer-events-none transition-all"),n(s,"duration-200",t[1]),n(s,"border-2",t[5]),n(s,"rotate-45",t[5]),r(s,"--tw-translate-x","calc(var(--mouse-x)*1px - 50%)"),r(s,"--tw-translate-y","calc(var(--mouse-y)*1px - 50%)"),r(s,"--mouse-x",t[2]),r(s,"--mouse-y",t[3]),r(s,"--tw-scale-x",t[4]&&t[1]?t[5]?.5:1:0),r(s,"--tw-scale-y",t[4]&&t[1]?t[5]?.5:1:0),r(s,"--rounded",+!t[5]*48),r(s,"border-radius","calc(var(--rounded)*1px)")},m(e,o){M(e,s,o)},p(e,o){o&2&&n(s,"duration-200",e[1]),o&32&&n(s,"border-2",e[5]),o&32&&n(s,"rotate-45",e[5]),o&4&&r(s,"--mouse-x",e[2]),o&8&&r(s,"--mouse-y",e[3]),o&50&&r(s,"--tw-scale-x",e[4]&&e[1]?e[5]?.5:1:0),o&50&&r(s,"--tw-scale-y",e[4]&&e[1]?e[5]?.5:1:0),o&32&&r(s,"--rounded",+!e[5]*48)},d(e){e&&d(s)}}}function C(t){let s,e=t[0]&&L(t);return{c(){e&&e.c(),s=b()},l(o){e&&e.l(o),s=b()},m(o,a){e&&e.m(o,a),M(o,s,a)},p(o,[a]){o[0]?e?e.p(o,a):(e=L(o),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i:E,o:E,d(o){e&&e.d(o),o&&d(s)}}}const T=50;function V(t,s,e){let o=!1,a=!1,p=0,c=0,u=!1,i=!1;const h=l=>requestAnimationFrame(()=>{l&&(window.getComputedStyle(l.target).cursor==="pointer"?i===!1&&e(5,i=!0):e(5,i=!1),e(2,p=l.clientX),e(3,c=l.clientY),a||requestAnimationFrame(()=>{e(1,a=!0)}))});let v=null,f=!0,m=null,_=l=>{f?(f=!1,u||e(4,u=!0),h(l),setTimeout(()=>{f=!0,m&&clearTimeout(m),m=setTimeout(()=>{h(v)},T)},T)):v=l},w=()=>{e(4,u=!1)};return q(()=>(window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(e(0,o=!0),document.addEventListener("mousemove",_),document.addEventListener("mouseleave",w)),()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseleave",w)})),[o,a,p,c,u,i]}class D extends g{constructor(s){super(),y(this,s,V,C,k,{})}}export{D as default};
