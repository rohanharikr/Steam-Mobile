import{_ as t,a as r,b as n,c as e,i as a,s as c,d as i,S as s,e as o,f as u,t as f,g as l,h,j as d,k as v,l as g,m,n as p,o as $,p as y,q as b,r as R,u as D,v as w,w as x,x as E,y as I,z as S,A as V,B as j}from"./client.a1c507c4.js";import{N as k,T as z}from"./Tabbar.26511522.js";import{u as A}from"./stores.7dbdbca3.js";function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=r(t);if(e){var i=r(this).constructor;a=Reflect.construct(c,arguments,i)}else a=c.apply(this,arguments);return n(this,a)}}function q(t){var r,n,e,a,c,i,s,w,x,E,I=(t[1]||t[3]())+"";return{c:function(){r=o("div"),n=o("div"),e=u(),a=o("div"),c=u(),i=o("div"),s=f(I),w=u(),x=o("div"),E=f(t[2]),this.h()},l:function(o){r=l(o,"DIV",{id:!0,class:!0});var u=h(r);n=l(u,"DIV",{class:!0,style:!0}),h(n).forEach(d),e=v(u),a=l(u,"DIV",{class:!0}),h(a).forEach(d),c=v(u),i=l(u,"DIV",{id:!0,style:!0,class:!0});var f=h(i);s=g(f,I),f.forEach(d),w=v(u),x=l(u,"DIV",{id:!0,class:!0});var m=h(x);E=g(m,t[2]),m.forEach(d),u.forEach(d),this.h()},h:function(){m(n,"class","timerbar svelte-e6vlhl"),p(n,"width",100-10*t[0]+"%"),p(n,"background-image",t[0]>=7?"linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)":"linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)"),p(n,"z-index","9999"),m(a,"class","timerbar trail svelte-e6vlhl"),m(i,"id","code"),p(i,"color",t[0]>=7?"#AD2821":"white"),m(i,"class","svelte-e6vlhl"),m(x,"id","username"),m(x,"class","svelte-e6vlhl"),m(r,"id","wrapper"),m(r,"class","svelte-e6vlhl")},m:function(t,o){$(t,r,o),y(r,n),y(r,e),y(r,a),y(r,c),y(r,i),y(i,s),y(r,w),y(r,x),y(x,E)},p:function(t,r){var e=b(r,1)[0];1&e&&p(n,"width",100-10*t[0]+"%"),1&e&&p(n,"background-image",t[0]>=7?"linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)":"linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)"),2&e&&I!==(I=(t[1]||t[3]())+"")&&R(s,I),1&e&&p(i,"color",t[0]>=7?"#AD2821":"white"),4&e&&R(E,t[2])},i:D,o:D,d:function(t){t&&d(r)}}}function G(t,r,n){var e,a,c=0;function i(){n(1,e=Math.random().toString(36).slice(-5).toUpperCase())}setInterval((function(){c<9?n(0,++c):(n(0,c=0),i())}),1e3);A.subscribe((function(t){n(2,a=t)}));return[c,e,a,i]}var M=function(r){t(o,s);var n=P(o);function o(t){var r;return e(this,o),r=n.call(this),a(i(r),t,G,q,c,{}),r}return o}();function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=r(t);if(e){var i=r(this).constructor;a=Reflect.construct(c,arguments,i)}else a=c.apply(this,arguments);return n(this,a)}}var B=function(r){t(o,s);var n=T(o);function o(t){var r;return e(this,o),r=n.call(this),a(i(r),t,null,null,c,{}),r}return o}();function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=r(t);if(e){var i=r(this).constructor;a=Reflect.construct(c,arguments,i)}else a=c.apply(this,arguments);return n(this,a)}}function N(t){var r,n,e,a,c,i,s=new k({props:{title:"Guard"}}),f=new M({}),g=new B({}),p=new z({props:{location:3}});return{c:function(){r=u(),w(s.$$.fragment),n=u(),e=o("div"),w(f.$$.fragment),a=u(),w(g.$$.fragment),c=u(),w(p.$$.fragment),this.h()},l:function(t){x('[data-svelte="svelte-xql9z2"]',document.head).forEach(d),r=v(t),E(s.$$.fragment,t),n=v(t),e=l(t,"DIV",{id:!0,class:!0});var i=h(e);E(f.$$.fragment,i),a=v(i),E(g.$$.fragment,i),i.forEach(d),c=v(t),E(p.$$.fragment,t),this.h()},h:function(){document.title="Guard :: Steam Mobile",m(e,"id","guard"),m(e,"class","svelte-1w0j7dt")},m:function(t,o){$(t,r,o),I(s,t,o),$(t,n,o),$(t,e,o),I(f,e,null),y(e,a),I(g,e,null),$(t,c,o),I(p,t,o),i=!0},p:D,i:function(t){i||(S(s.$$.fragment,t),S(f.$$.fragment,t),S(g.$$.fragment,t),S(p.$$.fragment,t),i=!0)},o:function(t){V(s.$$.fragment,t),V(f.$$.fragment,t),V(g.$$.fragment,t),V(p.$$.fragment,t),i=!1},d:function(t){t&&d(r),j(s,t),t&&d(n),t&&d(e),j(f),j(g),t&&d(c),j(p,t)}}}var U=function(r){t(o,s);var n=C(o);function o(t){var r;return e(this,o),r=n.call(this),a(i(r),t,null,N,c,{}),r}return o}();export default U;