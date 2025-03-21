import{P as et}from"../chunks/projects.1PfCAae5.js";import{s as at,e as rt,t as $,a,b as _,c as y,d as st}from"../chunks/disclose-version.D_0R5w7p.js";import{p as ot,a as it,g as o,f as w,t as n,d as L,c as j,n as P,s as i,r as m}from"../chunks/utils.6KhQ9vBw.js";import{i as H}from"../chunks/index-client.CzxfyyCv.js";import{e as O,i as dt,d as lt}from"../chunks/stores.CqQqwbCj.js";import{s as k,h as nt}from"../chunks/base.CsaPJnZ_.js";import{B as mt}from"../chunks/base-page.CWF0aVa4.js";import{E as ct}from"../chunks/empty-result._fiS_zJH.js";import{F as vt,M as ft,E as _t}from"../chunks/markdown.ClH90Sje.js";import{S as gt}from"../chunks/screenshot-card.D5P-IXDw.js";import{B as Q}from"../chunks/badge.D1f2vONJ.js";import{S as z}from"../chunks/separator.B2gFRvIC.js";import{H as ut}from"../chunks/h1.XIOoTwWa.js";import{M as D,A as pt}from"../chunks/assets.PSoCgv3F.js";import"../chunks/legacy.WUkXPhl2.js";function ht({params:b}){if(b.slug)return{item:et.items.find(S=>S.slug===b.slug)}}const Ct=Object.freeze(Object.defineProperty({__proto__:null,load:ht},Symbol.toStringTag,{value:"Module"}));var xt=_('<a target="_blank"><!></a>'),$t=_('<img class="h-[20px] w-[20px]"> <!>',1),Pt=_("<a><!></a>"),bt=_('<div class="flex w-full flex-col items-center justify-center gap-4"><!> <!> <!> <div class="flex flex-row flex-wrap justify-center gap-2"></div> <div class="flex flex-row flex-wrap justify-center gap-2"></div></div>'),yt=_('<!> <div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>',1),wt=_('<!> <!> <!> <!> <div class="flex flex-col gap-2 px-4 pt-4"><!></div>',1);function Gt(b,t){ot(t,!0);const S=at(),N=()=>st(lt,"$mode",S);let R=L(()=>{var d,c;return`${((c=(d=t.data)==null?void 0:d.item)==null?void 0:c.name)??"Not Found"} - Projects`}),V=L(()=>{var d,c,g;return(N()=="dark"?(c=(d=t.data)==null?void 0:d.item)==null?void 0:c.logo.dark:(g=t.data.item)==null?void 0:g.logo.light)??pt.Unknown.light});mt(b,{get title(){return o(R)},children:(d,c)=>{var g=rt(),W=w(g);H(W,()=>!t.data.item,M=>{ct(M)},M=>{var T=wt(),U=w(T);vt(U,{get img(){return o(V)},children:(l,B)=>{var v=bt(),u=j(v);ut(u,{children:(r,s)=>{P();var e=$();n(()=>y(e,t.data.item.name)),a(r,e)},$$slots:{default:!0}});var f=i(u,2);D(f,{children:(r,s)=>{P();var e=$();n(()=>y(e,t.data.item.type)),a(r,e)},$$slots:{default:!0}});var p=i(f,2);z(p,{});var h=i(p,2);O(h,21,()=>t.data.item.links,r=>r.to,(r,s)=>{var e=xt(),E=j(e);Q(E,{variant:"destructive",children:(F,Y)=>{P();var x=$();n(()=>y(x,o(s).label)),a(F,x)},$$slots:{default:!0}}),m(e),n(()=>k(e,"href",o(s).to)),a(r,e)}),m(h);var J=i(h,2);O(J,21,()=>t.data.item.skills,r=>r.slug,(r,s)=>{var e=Pt();n(()=>k(e,"href",nt(`/skills/${o(s).slug}`)));var E=j(e);Q(E,{variant:"outline",class:"flex flex-row items-center justify-center gap-2",children:(F,Y)=>{var x=$t(),A=w(x),Z=i(A,2);D(Z,{children:(tt,jt)=>{P();var K=$();n(()=>y(K,o(s).name)),a(tt,K)},$$slots:{default:!0}}),n(()=>{k(A,"src",N()==="dark"?o(s).logo.dark:o(s).logo.light),k(A,"alt",o(s).name)}),a(F,x)},$$slots:{default:!0}}),m(e),a(r,e)}),m(J),m(v),a(l,v)},$$slots:{default:!0}});var q=i(U,2);z(q,{});var C=i(q,2);H(C,()=>t.data.item.description.trim(),l=>{ft(l,{get content(){return t.data.item.description}})},l=>{_t(l)});var G=i(C,2);z(G,{});var I=i(G,2),X=j(I);H(X,()=>t.data.item.screenshots&&t.data.item.screenshots.length>0,l=>{var B=yt(),v=w(B);D(v,{children:(f,p)=>{P();var h=$("Screenshots");a(f,h)},$$slots:{default:!0}});var u=i(v,2);O(u,21,()=>t.data.item.screenshots,dt,(f,p)=>{gt(f,{get item(){return o(p)}})}),m(u),a(l,B)}),m(I),a(M,T)}),a(d,g)},$$slots:{default:!0}}),it()}export{Gt as component,Ct as universal};
