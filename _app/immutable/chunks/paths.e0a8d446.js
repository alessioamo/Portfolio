import{n as b,s as d}from"./scheduler.b3c879a1.js";const e=[];function g(o,l=b){let i;const n=new Set;function r(t){if(d(o,t)&&(o=t,i)){const f=!e.length;for(const s of n)s[1](),e.push(s,o);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(o))}function _(t,f=b){const s=[t,f];return n.add(s),n.size===1&&(i=l(r,c)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:c,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_vudwqf)==null?void 0:u.base)??"/Portfolio";var a;const q=((a=globalThis.__sveltekit_vudwqf)==null?void 0:a.assets)??h;export{q as a,h as b,g as w};
