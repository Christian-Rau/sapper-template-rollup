import{S as t,i as s,o as a,a as e,e as o,t as n,q as i,f as r,g as c,c as l,b as u,d as h,h as m,j as f,k as p,l as d,m as v}from"./client.02925c46.js";function g(t){let s,a,g,j,q,x,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=o("h1"),j=n(y),q=e(),x=o("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=u(g);j=h(s,y),s.forEach(r),q=c(t),x=l(t,"DIV",{class:!0}),u(x).forEach(r),this.h()},h(){m(x,"class","content svelte-1qsq2m9")},m(t,s){f(t,a,s),f(t,g,s),p(g,j),f(t,q,s),f(t,x,s),x.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&d(j,y),1&a&&E!==(E=t[0].html+"")&&(x.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(q),t&&r(x)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function q(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,q,g,a,{post:0})}}export{j as preload};
