import{n as b,s as h}from"./scheduler.b3c879a1.js";const e=[];function d(i,l=b){let o;const n=new Set;function r(t){if(h(i,t)&&(i=t,o)){const c=!e.length;for(const s of n)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(o=l(r,f)||b),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_1ihsxvc)==null?void 0:u.base)??"/Portfolio";var a;const q=((a=globalThis.__sveltekit_1ihsxvc)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};
