import{s as me,f as C,a as P,l as le,g as E,h as I,c as M,d as h,m as oe,j as k,i as q,I as p,p as de,K as he,n as Z,e as ae,W as _e}from"../chunks/scheduler.b3c879a1.js";import{S as ue,i as pe,b as D,d as V,m as y,a as _,t as w,e as L,g as re,c as ne}from"../chunks/index.50170cf9.js";import{e as J,U as W,u as ve,o as we}from"../chunks/UIcon.32c9a790.js";import{c as be,d as se,g as O,e as xe}from"../chunks/params.fa111159.js";import{C as ke}from"../chunks/Card.92a4917b.js";import{C as Ce}from"../chunks/CardLogo.c1ccdcd2.js";import{C as Ee,a as G}from"../chunks/ChipIcon.389d6ae7.js";import{b as Q}from"../chunks/paths.f3143912.js";import{S as Ie}from"../chunks/SearchPage.3330e8e9.js";import{i as De}from"../chunks/index.97b3c5e0.js";function ie(a,t,r){const e=a.slice();return e[5]=t[r],e}function Ve(a){let t,r;return t=new W({props:{icon:"i-carbon-building"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ye(a){let t,r;return t=new W({props:{icon:"i-carbon-location"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Le(a){let t,r;return t=new W({props:{icon:"i-carbon-hourglass"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ce(a){let t,r;return t=new G({props:{logo:O(a[5].logo),name:a[5].name,href:`${Q}/skills/${a[5].slug}`}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,n){const s={};n&1&&(s.logo=O(e[5].logo)),n&1&&(s.name=e[5].name),n&1&&(s.href=`${Q}/skills/${e[5].slug}`),t.$set(s)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Se(a){let t,r,e,n,s,c,$,o,l,f,d,B,g,x,S,F,ee,R,A=a[0].description+"",X,te,N,H;r=new Ce({props:{src:O(a[0].logo),alt:a[0].company,size:75}}),c=new Ee({props:{title:a[0].name}}),l=new G({props:{name:`Company: ${a[0].company}`,$$slots:{default:[Ve]},$$scope:{ctx:a}}}),d=new G({props:{name:`Location: ${a[0].location}`,$$slots:{default:[ye]},$$scope:{ctx:a}}}),g=new G({props:{name:`Contract: ${a[0].contract}`,$$slots:{default:[Le]},$$scope:{ctx:a}}});let U=J(a[0].skills),u=[];for(let i=0;i<U.length;i+=1)u[i]=ce(ie(a,U,i));const ge=i=>w(u[i],1,1,()=>{u[i]=null});return{c(){t=C("div"),D(r.$$.fragment),e=P(),n=C("div"),s=C("h3"),D(c.$$.fragment),$=P(),o=C("div"),D(l.$$.fragment),f=P(),D(d.$$.fragment),B=P(),D(g.$$.fragment),x=P(),S=C("div"),F=le(a[1]),ee=P(),R=C("div"),X=le(A),te=P(),N=C("div");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){t=E(i,"DIV",{class:!0});var m=I(t);V(r.$$.fragment,m),e=M(m),n=E(m,"DIV",{class:!0});var v=I(n);s=E(v,"H3",{class:!0});var K=I(s);V(c.$$.fragment,K),K.forEach(h),$=M(v),o=E(v,"DIV",{class:!0});var j=I(o);V(l.$$.fragment,j),f=M(j),V(d.$$.fragment,j),B=M(j),V(g.$$.fragment,j),j.forEach(h),x=M(v),S=E(v,"DIV",{class:!0});var T=I(S);F=oe(T,a[1]),T.forEach(h),ee=M(v),R=E(v,"DIV",{class:!0});var Y=I(R);X=oe(Y,A),Y.forEach(h),te=M(v),N=E(v,"DIV",{class:!0});var b=I(N);for(let z=0;z<u.length;z+=1)u[z].l(b);b.forEach(h),v.forEach(h),m.forEach(h),this.h()},h(){k(s,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(o,"class","row flex-wrap m-b-2 gap-1 text-0.9em font-300"),k(S,"class","text-[var(--accent-text)] text-[0.9em] font-200"),k(R,"class","experience-description"),k(N,"class","flex flex-row flex-wrap mt-5"),k(n,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,m){q(i,t,m),y(r,t,null),p(t,e),p(t,n),p(n,s),y(c,s,null),p(n,$),p(n,o),y(l,o,null),p(o,f),y(d,o,null),p(o,B),y(g,o,null),p(n,x),p(n,S),p(S,F),p(n,ee),p(n,R),p(R,X),p(n,te),p(n,N);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(N,null);H=!0},p(i,m){const v={};m&1&&(v.src=O(i[0].logo)),m&1&&(v.alt=i[0].company),r.$set(v);const K={};m&1&&(K.title=i[0].name),c.$set(K);const j={};m&1&&(j.name=`Company: ${i[0].company}`),m&256&&(j.$$scope={dirty:m,ctx:i}),l.$set(j);const T={};m&1&&(T.name=`Location: ${i[0].location}`),m&256&&(T.$$scope={dirty:m,ctx:i}),d.$set(T);const Y={};if(m&1&&(Y.name=`Contract: ${i[0].contract}`),m&256&&(Y.$$scope={dirty:m,ctx:i}),g.$set(Y),(!H||m&1)&&A!==(A=i[0].description+"")&&de(X,A),m&1){U=J(i[0].skills);let b;for(b=0;b<U.length;b+=1){const z=ie(i,U,b);u[b]?(u[b].p(z,m),_(u[b],1)):(u[b]=ce(z),u[b].c(),_(u[b],1),u[b].m(N,null))}for(re(),b=U.length;b<u.length;b+=1)ge(b);ne()}},i(i){if(!H){_(r.$$.fragment,i),_(c.$$.fragment,i),_(l.$$.fragment,i),_(d.$$.fragment,i),_(g.$$.fragment,i);for(let m=0;m<U.length;m+=1)_(u[m]);H=!0}},o(i){w(r.$$.fragment,i),w(c.$$.fragment,i),w(l.$$.fragment,i),w(d.$$.fragment,i),w(g.$$.fragment,i),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)w(u[m]);H=!1},d(i){i&&h(t),L(r),L(c),L(l),L(d),L(g),he(u,i)}}}function Pe(a){let t,r;return t=new ke({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${Q}/experience/${a[0].slug}`,color:a[0].color,$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const s={};n&1&&(s.href=`${Q}/experience/${e[0].slug}`),n&1&&(s.color=e[0].color),n&257&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Me(a,t,r){let{experience:e}=t;const n=be(e.period.from,e.period.to),s=`${se(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,c=e.period.to?`${se(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",$=`${s} - ${c} · ${n}`;return a.$$set=o=>{"experience"in o&&r(0,e=o.experience)},[e,$]}class je extends ue{constructor(t){super(),pe(this,t,Me,Pe,me,{experience:0})}}function fe(a,t,r){const e=a.slice();return e[4]=t[r],e[6]=r,e}function Be(a){let t,r,e=[],n=new Map,s,c,$=J(a[0]);const o=l=>l[4].slug;for(let l=0;l<$.length;l+=1){let f=fe(a,$,l),d=o(f);n.set(d,e[l]=$e(d,f))}return{c(){t=C("div"),r=P();for(let l=0;l<e.length;l+=1)e[l].c();s=ae(),this.h()},l(l){t=E(l,"DIV",{class:!0}),I(t).forEach(h),r=M(l);for(let f=0;f<e.length;f+=1)e[f].l(l);s=ae(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,f){q(l,t,f),q(l,r,f);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(l,f);q(l,s,f),c=!0},p(l,f){f&1&&($=J(l[0]),re(),e=ve(e,f,o,1,l,$,n,s.parentNode,we,$e,s,fe),ne())},i(l){if(!c){for(let f=0;f<$.length;f+=1)_(e[f]);c=!0}},o(l){for(let f=0;f<e.length;f+=1)w(e[f]);c=!1},d(l){l&&(h(t),h(r),h(s));for(let f=0;f<e.length;f+=1)e[f].d(l)}}}function Ne(a){let t,r,e,n,s="Could not find anything...",c;return r=new W({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),D(r.$$.fragment),e=P(),n=C("p"),n.textContent=s,this.h()},l($){t=E($,"DIV",{class:!0});var o=I(t);V(r.$$.fragment,o),e=M(o),n=E(o,"P",{class:!0,["data-svelte-h"]:!0}),_e(n)!=="svelte-1jyyf6v"&&(n.textContent=s),o.forEach(h),this.h()},h(){k(n,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m($,o){q($,t,o),y(r,t,null),p(t,e),p(t,n),c=!0},p:Z,i($){c||(_(r.$$.fragment,$),c=!0)},o($){w(r.$$.fragment,$),c=!1},d($){$&&h(t),L(r)}}}function $e(a,t){let r,e,n,s,c,$,o,l,f,d,B;return c=new W({props:{icon:"i-carbon-condition-point",classes:""}}),l=new je({props:{experience:t[4]}}),{key:a,first:null,c(){r=C("div"),e=C("div"),n=P(),s=C("div"),D(c.$$.fragment),$=P(),o=C("div"),D(l.$$.fragment),f=P(),this.h()},l(g){r=E(g,"DIV",{class:!0});var x=I(r);e=E(x,"DIV",{class:!0}),I(e).forEach(h),n=M(x),s=E(x,"DIV",{class:!0});var S=I(s);V(c.$$.fragment,S),S.forEach(h),$=M(x),o=E(x,"DIV",{class:!0});var F=I(o);V(l.$$.fragment,F),F.forEach(h),f=M(x),x.forEach(h),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(s,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(o,"class","flex-1 col items-stretch"),k(r,"class",d=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(g,x){q(g,r,x),p(r,e),p(r,n),p(r,s),y(c,s,null),p(r,$),p(r,o),y(l,o,null),p(r,f),B=!0},p(g,x){t=g;const S={};x&1&&(S.experience=t[4]),l.$set(S),(!B||x&1&&d!==(d=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",d)},i(g){B||(_(c.$$.fragment,g),_(l.$$.fragment,g),B=!0)},o(g){w(c.$$.fragment,g),w(l.$$.fragment,g),B=!1},d(g){g&&h(r),L(c),L(l)}}}function Ue(a){let t,r,e,n;const s=[Ne,Be],c=[];function $(o,l){return o[0].length===0?0:1}return r=$(a),e=c[r]=s[r](a),{c(){t=C("div"),e.c(),this.h()},l(o){t=E(o,"DIV",{class:!0});var l=I(t);e.l(l),l.forEach(h),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(o,l){q(o,t,l),c[r].m(t,null),n=!0},p(o,l){let f=r;r=$(o),r===f?c[r].p(o,l):(re(),w(c[f],1,1,()=>{c[f]=null}),ne(),e=c[r],e?e.p(o,l):(e=c[r]=s[r](o),e.c()),_(e,1),e.m(t,null))},i(o){n||(_(e),n=!0)},o(o){w(e),n=!1},d(o){o&&h(t),c[r].d()}}}function qe(a){let t,r;return t=new Ie({props:{title:a[1],$$slots:{default:[Ue]},$$scope:{ctx:a}}}),t.$on("search",a[2]),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const s={};n&129&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Fe(a,t,r){const{items:e,title:n}=xe;let s=[...e];return[s,n,$=>{const o=$.detail.search;if(De(o)){r(0,s=e);return}r(0,s=e.filter(l=>l.name.toLowerCase().includes(o)||l.company.toLowerCase().includes(o)||l.description.toLowerCase().includes(o)))}]}class Je extends ue{constructor(t){super(),pe(this,t,Fe,qe,me,{})}}export{Je as component};
