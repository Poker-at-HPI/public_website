import{n as F,a6 as st,x as it,s as ct,K as lt,w as ft}from"./scheduler.Bn8mxVcI.js";new URL("sveltekit-internal://");function ut(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function dt(e){return e.split("%25").map(decodeURI).join("%25")}function ht(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function le({href:e}){return e.split("#")[0]}const pt=["href","pathname","search","toString","toJSON"];function gt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of pt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const mt="/__data.json",_t=".html__data.json";function yt(e){return e.endsWith(".html")?e.replace(/\.html$/,_t):e.replace(/\/$/,"")+mt}function wt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function bt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const $e=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(ge(e)),$e(e,n));const q=new Map;function vt(e,n){const t=ge(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&q.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=bt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function Et(e,n,t){if(q.size>0){const r=ge(e,t),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(n,t)}function ge(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${wt(...a)}"]`}return r}const kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Rt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return fe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return fe(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=kt.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return fe(c)}).join("")}).join("")}/?$`),params:n}}function At(e){return!/^\([^)]+\)$/.test(e)}function Rt(e){return e.slice(1).split("/").filter(At)}function It(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function fe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Lt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=St(s),d={id:s,exec:m=>{const f=h.exec(m);if(f)return It(f,g,r)},errors:[1,...u||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function De(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ie(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const N=[];function Pt(e,n){return{subscribe:ne(e,n).subscribe}}function ne(e,n=F){let t;const r=new Set;function a(s){if(ct(e,s)&&(e=s,t)){const c=!N.length;for(const l of r)l[1](),N.push(l,e);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function o(s){a(s(e))}function i(s,c=F){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||F),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}function an(e,n,t){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=n.length<2;return Pt(t,(i,s)=>{let c=!1;const l=[];let u=0,h=F;const g=()=>{if(u)return;h();const m=n(r?l[0]:l,i,s);o?i(m):h=lt(m)?m:F},d=a.map((m,f)=>st(m,_=>{l[f]=_,u&=~(1<<f),c&&g()},()=>{u|=1<<f}));return c=!0,g(),function(){it(d),h(),c=!1}})}function rn(e){return{subscribe:e.subscribe.bind(e)}}var Oe;const I=((Oe=globalThis.__sveltekit_126si63)==null?void 0:Oe.base)??"/public_website";var je;const xt=((je=globalThis.__sveltekit_126si63)==null?void 0:je.assets)??I,Tt="1722000239374",Ce="sveltekit:snapshot",Ve="sveltekit:scroll",Fe="sveltekit:states",Ut="sveltekit:pageurl",$="sveltekit:history",G="sveltekit:navigation",Y={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},K=location.origin;function qe(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function me(){return{x:pageXOffset,y:pageYOffset}}function O(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Le={...Y,"":Y.hover};function Ge(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Me(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ge(e)}}function de(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||ae(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===K&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function J(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=O(s,"preload-code")),a===null&&(a=O(s,"preload-data")),n===null&&(n=O(s,"keepfocus")),t===null&&(t=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=Ge(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Le[r??"off"],preload_data:Le[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Pe(e){const n=ne(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Nt(){const{set:e,subscribe:n}=ne(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${xt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Tt;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function ae(e,n){return e.origin!==K||!e.pathname.startsWith(n)}const Ot=-1,jt=-2,$t=-3,Dt=-4,Ct=-5,Vt=-6;function Ft(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Ot)return;if(o===$t)return NaN;if(o===Dt)return 1/0;if(o===Ct)return-1/0;if(o===Vt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==jt&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const Be=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Be];const qt=new Set([...Be]);[...qt];function Gt(e){return e.filter(n=>n!=null)}class re{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class He{constructor(n,t){this.status=n,this.location=t}}class _e extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Mt="x-sveltekit-invalidated",Bt="x-sveltekit-trailing-slash";function W(e){return e instanceof re||e instanceof _e?e.status:500}function Ht(e){return e instanceof _e?e.text:"Internal Error"}const U=De(Ve)??{},M=De(Ce)??{},x={url:Pe({}),page:Pe({}),navigating:ne(null),updated:Nt()};function ye(e){U[e]=me()}function Kt(e,n){let t=e+1;for(;U[t];)delete U[t],t+=1;for(t=n+1;M[t];)delete M[t],t+=1}function D(e){return location.href=e.href,new Promise(()=>{})}function xe(){}let oe,he,X,L,pe,C;const Ke=[],Z=[];let P=null;const ze=[],zt=[];let j=[],w={branch:[],error:null,url:null},we=!1,Q=!1,Te=!0,B=!1,V=!1,Ye=!1,be=!1,ve,k,A,R,ee;async function on(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),C=e,oe=Lt(e),L=document.documentElement,pe=n,he=e.nodes[0],X=e.nodes[1],he(),X(),k=(a=history.state)==null?void 0:a[$],A=(o=history.state)==null?void 0:o[G],k||(k=A=Date.now(),history.replaceState({...history.state,[$]:k,[G]:A},""));const r=U[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await en(pe,t):Zt(location.href,{replaceState:!0}),Qt()}function Je(e){Z.some(n=>n==null?void 0:n.snapshot)&&(M[e]=Z.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function We(e){var n;(n=M[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=Z[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Ue(){ye(k),Ie(Ve,U),Je(A),Ie(Ce,M)}async function Xe(e,n,t,r){return z({type:"goto",url:qe(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(be=!0)}})}async function Yt(e){return P={id:e.id,promise:Qe(e).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function ue(e){const n=oe.find(t=>t.exec(et(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function Ze(e,n){var a;w=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),R=e.props.page,ve=new C.root({target:n,props:{...e.props,stores:x,components:Z},hydrate:!0}),We(A);const r={from:null,to:{params:w.params,route:{id:((a=w.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(o=>o(r)),Q=!0}async function te({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(I&&(e.pathname===I||e.pathname===I+"/"))s="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);e.pathname=ut(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Gt(t).map(d=>d.node.component),page:R}};i!==void 0&&(c.props.form=i);let l={},u=!R,h=0;for(let d=0;d<Math.max(t.length,w.branch.length);d+=1){const m=t[d],f=w.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==R.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:u?l:R.data}),c}async function Ee({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:b}=new URL(_,t);c.dependencies.add(b)}};const m={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:gt(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let b;f instanceof Request?(b=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):b=f;const S=new URL(b,t);return s&&d(S.href),S.origin===t.origin&&(b=S.href.slice(t.origin.length)),Q?Et(b,S.href,_):vt(b,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,n,t,r,a,o){if(be)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(Ke.some(s=>s(new URL(i))))return!0;return!1}function ke(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Jt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}async function Qe({id:e,invalidating:n,url:t,params:r,route:a}){if((P==null?void 0:P.id)===e)return P.promise;const{errors:o,layouts:i,leaf:s}=a,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=w.url?e!==w.url.pathname+w.url.search:!1,h=w.route?a.id!==w.route.id:!1,g=Jt(w.url,t);let d=!1;const m=c.map((p,y)=>{var T;const v=w.branch[y],E=!!(p!=null&&p[0])&&((v==null?void 0:v.loader)!==p[1]||Ne(d,h,u,g,(T=v.server)==null?void 0:T.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{l=await at(t,m)}catch(p){return se({status:W(p),error:await H(p,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const b=c.map(async(p,y)=>{var ie;if(!p)return;const v=w.branch[y],E=f==null?void 0:f[y];if((!E||E.type==="skip")&&p[1]===(v==null?void 0:v.loader)&&!Ne(_,h,u,g,(ie=v.universal)==null?void 0:ie.uses,r))return v;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Ee({loader:p[1],url:t,params:r,route:a,parent:async()=>{var Re;const Ae={};for(let ce=0;ce<y;ce+=1)Object.assign(Ae,(Re=await b[ce])==null?void 0:Re.data);return Ae},server_data_node:ke(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?v==null?void 0:v.server:void 0)})});for(const p of b)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await b[p])}catch(y){if(y instanceof He)return{type:"redirect",location:y.location};let v=W(y),E;if(f!=null&&f.includes(y))v=y.status??v,E=y.error;else if(y instanceof re)E=y.body;else{if(await x.updated.check())return await D(t);E=await H(y,{params:r,url:t,route:{id:a.id}})}const T=await Wt(p,S,o);return T?await te({url:t,params:r,branch:S.slice(0,T.idx).concat(T.node),status:v,error:E,route:a}):await nt(t,{id:a.id},E,v)}else S.push(void 0);return await te({url:t,params:r,branch:S,status:200,error:null,route:a,form:n?void 0:null})}async function Wt(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:n,url:t,route:r}){const a={};let o=null;if(C.server_loads[0]===0)try{const l=await at(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==K||t.pathname!==location.pathname||we)&&await D(t)}const s=await Ee({loader:he,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return await te({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function Se(e,n){if(!e||ae(e,I))return;let t;try{t=C.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=et(t);for(const a of oe){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:ht(o),url:e}}}function et(e){return dt(e.slice(I.length)||"/")}function tt({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ot(w,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return B||ze.forEach(s=>s(i)),a?null:o}async function z({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=xe,block:u=xe}){const h=Se(n,!1),g=tt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){u();return}const d=k,m=A;l(),B=!0,Q&&x.navigating.set(g.navigation),ee=c;let f=h&&await Qe(h);if(!f){if(ae(n,I))return await D(n);f=await nt(n,{id:null},await H(new _e(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ee!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await se({status:500,error:await H(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Xe(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await x.updated.check()&&await D(n);if(Ke.length=0,be=!1,ye(d),Je(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const p=o?0:1,y={[$]:k+=p,[G]:A+=p,[Fe]:i};(o?history.replaceState:history.pushState).call(history,y,"",n),o||Kt(k,A)}if(P=null,f.props.page.state=i,Q){w=f.state,f.props.page&&(f.props.page.url=n);const p=(await Promise.all(zt.map(y=>y(g.navigation)))).filter(y=>typeof y=="function");if(p.length>0){let y=function(){j=j.filter(v=>!p.includes(v))};p.push(y),j.push(...p)}ve.$set(f.props),Ye=!0}else Ze(f,pe);const{activeElement:_}=document;await ft();const b=t?t.scroll:a?me():null;if(Te){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&tn(),Te=!0,f.props.page&&(R=f.props.page),B=!1,e==="popstate"&&We(A),g.fulfil(void 0),j.forEach(p=>p(g.navigation)),x.navigating.set(null)}async function nt(e,n,t,r){return e.origin===K&&e.pathname===location.pathname&&!we?await se({status:r,error:t,url:e,route:n}):await D(e)}function Xt(){let e;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ue(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Me(o,L);if(!s)return;const{url:c,external:l,download:u}=de(s,I);if(l||u)return;const h=J(s);if(!h.reload)if(i<=h.preload_data){const g=Se(c,!1);g&&Yt(g)}else i<=h.preload_code&&ue(c.pathname)}function a(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=de(o,I);if(s||c)continue;const l=J(o);l.reload||(l.preload_code===Y.viewport&&t.observe(o),l.preload_code===Y.eager&&ue(i.pathname))}}j.push(a),a()}function H(e,n){if(e instanceof re)return e.body;const t=W(e),r=Ht(e);return C.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function Zt(e,n={}){return e=qe(e),e.origin!==K?Promise.reject(new Error("goto: invalid URL")):Xe(e,n,0)}function Qt(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ue(),!B){const a=ot(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ze.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ue()}),(n=navigator.connection)!=null&&n.saveData||Xt(),L.addEventListener("click",t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Me(t.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=de(r,I);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=J(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){tt({url:a,type:"link"})?B=!0:t.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===le(location)){const[,d]=w.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(V=!0,ye(k),e(a),!c.replace_state)return;V=!1}t.preventDefault(),z({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ae(i,I))return;const s=t.target,c=J(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),z({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[$]){const a=t.state[$];if(ee={},a===k)return;const o=U[a],i=t.state[Fe]??{},s=new URL(t.state[Ut]??location.href),c=t.state[G],l=le(location)===le(w.url);if(c===A&&(Ye||l)){e(s),U[k]=me(),o&&scrollTo(o.x,o.y),i!==R.state&&(R={...R,state:i},ve.$set({page:R})),k=a;return}const h=a-k;await z({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{k=a,A=c},block:()=>{history.go(-h)},nav_token:ee})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[$]:++k,[G]:A},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&x.navigating.set(null)});function e(t){w.url=t,x.page.set({...R,url:t}),x.page.notify()}}async function en(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){we=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Se(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=i[m];return f!=null&&f.uses&&(f.uses=rt(f.uses)),Ee({loader:C.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let b=0;b<m;b+=1)Object.assign(_,(await u[b]).data);return _},server_data_node:ke(f)})}),h=await Promise.all(u),g=oe.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await te({url:c,params:a,branch:h,status:n,error:t,form:s,route:g??null})}catch(u){if(u instanceof He){await D(new URL(u.location,location.href));return}l=await se({status:W(u),error:await H(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),Ze(l,e)}async function at(e,n){var a;const t=new URL(e);t.pathname=yt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Bt,"1"),t.searchParams.append(Mt,n.map(o=>o?"1":"0").join(""));const r=await $e(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new re(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Ft(g,{Promise:d=>new Promise((m,f)=>{i.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=rt(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:b,error:S}=f,p=i.get(_);i.delete(_),S?p.reject(l(S)):p.fulfil(l(b))}}}})}function rt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function tn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ot(e,n,t,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{xt as a,I as b,rn as c,an as d,on as e,Pt as r,x as s,ne as w};
