import{n as b,s as p}from"./scheduler.b3c879a1.js";const e=[];function g(i,l=b){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const f=!e.length;for(const s of n)s[1](),e.push(s,i);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(i))}function _(t,f=b){const s=[t,f];return n.add(s),n.size===1&&(o=l(r,c)||b),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:c,subscribe:_}}var u;const d=((u=globalThis.__sveltekit_dpi4sf)==null?void 0:u.base)??"/Portfolio";var a;const q=((a=globalThis.__sveltekit_dpi4sf)==null?void 0:a.assets)??d;export{q as a,d as b,g as w};
