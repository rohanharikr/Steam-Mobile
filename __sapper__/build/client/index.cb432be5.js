import{S as a,i as e,s,e as t,a as r,t as n,c as i,b as l,d as c,f as o,g as d,h as g,j as f,k as m,l as u,m as h,n as $,o as v,q as p,p as b,r as w,u as D,v as E,w as I}from"./client.784edecb.js";import{N as z,T as V}from"./Tabbar.99c793c7.js";import{u as x}from"./stores.f1433f43.js";function j(a){let e,s,v,p,b,w,D,E,I,z,V=(a[1]||a[3]())+"";return{c(){e=t("div"),s=t("div"),v=r(),p=t("div"),b=r(),w=t("div"),D=n(V),E=r(),I=t("div"),z=n(a[2]),this.h()},l(t){e=i(t,"DIV",{id:!0,class:!0});var r=l(e);s=i(r,"DIV",{class:!0,style:!0}),l(s).forEach(c),v=o(r),p=i(r,"DIV",{class:!0}),l(p).forEach(c),b=o(r),w=i(r,"DIV",{id:!0,style:!0,class:!0});var n=l(w);D=d(n,V),n.forEach(c),E=o(r),I=i(r,"DIV",{id:!0,class:!0});var g=l(I);z=d(g,a[2]),g.forEach(c),r.forEach(c),this.h()},h(){g(s,"class","timerbar svelte-66zvu1"),f(s,"width",100-10*a[0]+"%"),f(s,"background-image",a[0]>=7?"linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)":"linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)"),f(s,"z-index","9999"),g(p,"class","timerbar trail svelte-66zvu1"),g(w,"id","code"),f(w,"color",a[0]>=7?"#AD2821":"white"),g(w,"class","svelte-66zvu1"),g(I,"id","username"),g(I,"class","svelte-66zvu1"),g(e,"id","wrapper"),g(e,"class","svelte-66zvu1")},m(a,t){m(a,e,t),u(e,s),u(e,v),u(e,p),u(e,b),u(e,w),u(w,D),u(e,E),u(e,I),u(I,z)},p(a,[e]){1&e&&f(s,"width",100-10*a[0]+"%"),1&e&&f(s,"background-image",a[0]>=7?"linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)":"linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)"),2&e&&V!==(V=(a[1]||a[3]())+"")&&h(D,V),1&e&&f(w,"color",a[0]>=7?"#AD2821":"white"),4&e&&h(z,a[2])},i:$,o:$,d(a){a&&c(e)}}}function y(a,e,s){let t,r=0;function n(){s(1,t=Math.random().toString(36).slice(-5).toUpperCase())}let i;setInterval((function(){r<9?s(0,++r):(s(0,r=0),n())}),1e3);x.subscribe(a=>{s(2,i=a)});return[r,t,i,n]}class S extends a{constructor(a){super(),e(this,a,y,j,s,{})}}function k(a){let e;return{c(){e=t("div"),this.h()},l(a){e=i(a,"DIV",{id:!0,class:!0}),l(e).forEach(c),this.h()},h(){g(e,"id","player"),g(e,"class","svelte-1ja8oyv")},m(a,s){m(a,e,s)},p:$,i:$,o:$,d(a){a&&c(e)}}}class q extends a{constructor(a){super(),e(this,a,null,k,s,{})}}function A(a){let e,s,n,d,f,h;const x=new z({props:{title:"Steam Guard"}}),j=new S({}),y=new q({}),k=new V({props:{location:3}});return{c(){e=r(),v(x.$$.fragment),s=r(),n=t("div"),v(j.$$.fragment),d=r(),v(y.$$.fragment),f=r(),v(k.$$.fragment),this.h()},l(a){p('[data-svelte="svelte-xql9z2"]',document.head).forEach(c),e=o(a),b(x.$$.fragment,a),s=o(a),n=i(a,"DIV",{id:!0,class:!0});var t=l(n);b(j.$$.fragment,t),d=o(t),b(y.$$.fragment,t),t.forEach(c),f=o(a),b(k.$$.fragment,a),this.h()},h(){document.title="Guard :: Steam Mobile",g(n,"id","guard"),g(n,"class","svelte-lmiees")},m(a,t){m(a,e,t),w(x,a,t),m(a,s,t),m(a,n,t),w(j,n,null),u(n,d),w(y,n,null),m(a,f,t),w(k,a,t),h=!0},p:$,i(a){h||(D(x.$$.fragment,a),D(j.$$.fragment,a),D(y.$$.fragment,a),D(k.$$.fragment,a),h=!0)},o(a){E(x.$$.fragment,a),E(j.$$.fragment,a),E(y.$$.fragment,a),E(k.$$.fragment,a),h=!1},d(a){a&&c(e),I(x,a),a&&c(s),a&&c(n),I(j),I(y),a&&c(f),I(k,a)}}}export default class extends a{constructor(a){super(),e(this,a,null,A,s,{})}}
