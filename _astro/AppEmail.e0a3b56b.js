import{S as y,i as g,s as w,g as E,h as d,j as N,f as r,n as f,d as c,o as S,e as b,t as _,c as h,a as m,k as v,l as k,b as u,m as p,p as q,q as A}from"./index.ace916d0.js";function M(e){let o,s;return{c(){o=b("span"),s=_(" ")},l(e){o=h(e,"SPAN",{});var t=m(o);s=v(t," "),t.forEach(c)},m(e,c){r(e,o,c),k(o,s)},p:f,d(e){e&&c(o)}}}function T(e){let o,s,t,i,a;return{c(){o=b("button"),s=_(e[2]),this.h()},l(t){o=h(t,"BUTTON",{type:!0,class:!0});var i=m(o);s=v(i,e[2]),i.forEach(c),this.h()},h(){u(o,"type","button"),u(o,"class",t=e[1]?"select-all cursor-auto":"underline decoration-accent decoration-dashed decoration-1 underline-offset-2 outline-0 hover:decoration-solid hover:decoration-2 focus-visible:bg-accent focus-visible:font-bold focus-visible:text-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-accent"),p(o,"cursor-pointer",e[0]&&!e[1])},m(c,t){r(c,o,t),k(o,s),i||(a=q(o,"dblclick",e[3]),i=!0)},p(e,c){4&c&&A(s,e[2]),2&c&&t!==(t=e[1]?"select-all cursor-auto":"underline decoration-accent decoration-dashed decoration-1 underline-offset-2 outline-0 hover:decoration-solid hover:decoration-2 focus-visible:bg-accent focus-visible:font-bold focus-visible:text-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-accent")&&u(o,"class",t),3&c&&p(o,"cursor-pointer",e[0]&&!e[1])},d(e){e&&c(o),i=!1,a()}}}function j(e){let o,s;function t(e,o){return e[0]?T:M}let i=t(e),a=i(e);return{c(){o=E(),a.c(),s=d()},l(e){o=N(e),a.l(e),s=d()},m(e,c){r(e,o,c),a.m(e,c),r(e,s,c)},p(e,[o]){i===(i=t(e))&&a?a.p(e,o):(a.d(1),a=i(e),a&&(a.c(),a.m(s.parentNode,s)))},i:f,o:f,d(e){e&&c(o),a.d(e),e&&c(s)}}}function B(e,o,c){let s,t=!1,i=!1;return S((()=>c(0,t=!0))),e.$$.update=()=>{3&e.$$.dirty&&c(2,s=t?i?"suthep.chanchuphol@outlook.com":`Double ${window.matchMedia("(hover: hover) and (pointer: fine)").matches?"click":"tap"} to show email`:"")},[t,i,s,()=>{c(1,i=!i)}]}class D extends y{constructor(e){super(),g(this,e,B,j,w,{})}}export{D as default};