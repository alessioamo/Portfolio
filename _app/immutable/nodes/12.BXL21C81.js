import{S as C}from"../chunks/skills.PsIqJKa7.js";import{s as G,e as I,t as h,a as s,b as E,c as F,d as J}from"../chunks/disclose-version.D_0R5w7p.js";import{p as K,a as L,g as i,f as A,t as k,d as x,n as $,s as d,c as H,r as O}from"../chunks/utils.6KhQ9vBw.js";import{i as b}from"../chunks/index-client.CzxfyyCv.js";import{e as Q,i as V,d as W}from"../chunks/stores.Blzx26HP.js";import{s as X,h as Y}from"../chunks/base.BoltnvIE.js";import{B as Z}from"../chunks/base-page.CgAQKlo7.js";import{E as ee}from"../chunks/empty-result.Jjntl6m1.js";import{F as te,M as ae,E as re}from"../chunks/markdown.BofFXxzu.js";import"../chunks/index.DDVb_Ufb.js";import{S as z}from"../chunks/separator.V8KMUOmN.js";import{H as oe}from"../chunks/h1.DF0pBGes.js";import{M as se,A as le}from"../chunks/assets.BhC8iyjw.js";import{E as ne}from"../chunks/experience.j24o8aMB.js";import{P as ie}from"../chunks/projects.CZUfWjYY.js";import"../chunks/legacy.WUkXPhl2.js";import{B as me}from"../chunks/badge.C-ea-Z0l.js";function de({params:f}){if(f.slug)return{item:C.items.find(c=>c.slug===f.slug)}}const Fe=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"}));var fe=E("<a><!></a>"),ue=E('<div class="flex flex-row flex-wrap items-center gap-2 px-4 py-4"><!> <!></div>'),ge=E("<!> <!> <!> <!> <!>",1);function Ae(f,a){K(a,!0);const c=G(),p=()=>J(W,"$mode",c);let N=x(()=>{var t,r;return`${((r=(t=a.data)==null?void 0:t.item)==null?void 0:r.name)??"Not Found"} - Skills`}),R=x(()=>{var t,r,e;return(p()=="dark"?(r=(t=a.data)==null?void 0:t.item)==null?void 0:r.logo.dark:(e=a.data.item)==null?void 0:e.logo.light)??le.Unknown.light}),P=x(()=>(()=>{const t=a.data.item;if(!t)return[];const r=[];return ie.items.forEach(e=>{e.skills.find(m=>m.slug===t.slug)&&r.push({link:`/projects/${e.slug}`,logo:p()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),ne.items.forEach(e=>{e.skills.find(m=>m.slug===t.slug)&&r.push({link:`/experience/${e.slug}`,logo:p()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),r})());Z(f,{get title(){return i(N)},children:(t,r)=>{var e=I(),m=A(e);b(m,()=>!a.data.item,_=>{ee(_)},_=>{var S=ge(),y=A(S);te(y,{get img(){return i(R)},children:(o,u)=>{oe(o,{children:(g,B)=>{$();var l=h();k(()=>F(l,a.data.item.name)),s(g,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var M=d(y,2);z(M,{});var w=d(M,2);b(w,()=>a.data.item.description.trim(),o=>{ae(o,{get content(){return a.data.item.description}})},o=>{re(o)});var j=d(w,2);z(j,{});var T=d(j,2);b(T,()=>i(P).length!==0,o=>{var u=ue(),g=H(u);se(g,{children:(l,v)=>{$();var n=h("Related items");s(l,n)},$$slots:{default:!0}});var B=d(g,2);Q(B,17,()=>i(P),V,(l,v)=>{var n=fe();k(()=>X(n,"href",Y(i(v).link)));var U=H(n);me(U,{children:(q,ce)=>{$();var D=h();k(()=>F(D,i(v).name)),s(q,D)},$$slots:{default:!0}}),O(n),s(l,n)}),O(u),s(o,u)}),s(_,S)}),s(t,e)},$$slots:{default:!0}}),L()}export{Ae as component,Fe as universal};
