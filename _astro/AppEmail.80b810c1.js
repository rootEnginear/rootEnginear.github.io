import{S as y,i as g,s as w,k as E,h as d,l as N,f as r,n as f,d as c,o as S,e as b,m as _,c as h,a as m,p as v,g as k,b as u,t as p,q,r as A}from"./index.305b5983.js";function M(n){let t,o;return{c(){t=b("span"),o=_(" ")},l(a){t=h(a,"SPAN",{});var i=m(t);o=v(i," "),i.forEach(c)},m(a,i){r(a,t,i),k(t,o)},p:f,d(a){a&&c(t)}}}function T(n){let t,o,a,i,s;return{c(){t=b("button"),o=_(n[2]),this.h()},l(e){t=h(e,"BUTTON",{type:!0,class:!0});var l=m(t);o=v(l,n[2]),l.forEach(c),this.h()},h(){u(t,"type","button"),u(t,"class",a=n[1]?"select-all cursor-auto":"underline decoration-accent decoration-dashed decoration-1 underline-offset-2 outline-0 hover:decoration-solid hover:decoration-2 focus-visible:bg-accent focus-visible:font-bold focus-visible:text-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-accent"),p(t,"cursor-pointer",n[0]&&!n[1])},m(e,l){r(e,t,l),k(t,o),i||(s=q(t,"dblclick",n[3]),i=!0)},p(e,l){l&4&&A(o,e[2]),l&2&&a!==(a=e[1]?"select-all cursor-auto":"underline decoration-accent decoration-dashed decoration-1 underline-offset-2 outline-0 hover:decoration-solid hover:decoration-2 focus-visible:bg-accent focus-visible:font-bold focus-visible:text-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-accent")&&u(t,"class",a),l&3&&p(t,"cursor-pointer",e[0]&&!e[1])},d(e){e&&c(t),i=!1,s()}}}function B(n){let t,o;function a(e,l){return e[0]?T:M}let i=a(n),s=i(n);return{c(){t=E(),s.c(),o=d()},l(e){t=N(e),s.l(e),o=d()},m(e,l){r(e,t,l),s.m(e,l),r(e,o,l)},p(e,[l]){i===(i=a(e))&&s?s.p(e,l):(s.d(1),s=i(e),s&&(s.c(),s.m(o.parentNode,o)))},i:f,o:f,d(e){e&&c(t),s.d(e),e&&c(o)}}}function C(n,t,o){let a,i=!1,s=!1;const e=()=>{o(1,s=!s)};return S(()=>o(0,i=!0)),n.$$.update=()=>{n.$$.dirty&3&&o(2,a=i?s?"suthep.chanchuphol@outlook.com":`Double ${window.matchMedia("(hover: hover) and (pointer: fine)").matches?"click":"tap"} to show email`:"")},[i,s,a,e]}class O extends y{constructor(t){super(),g(this,t,C,B,w,{})}}export{O as default};
