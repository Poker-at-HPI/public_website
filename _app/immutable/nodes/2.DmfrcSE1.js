import{s as q,e as h,t as te,c as $,b as _,d as se,f as u,l as i,i as C,h as m,j as pe,n as j,q as ne,p as _e,a as y,m as O,g as I,$ as ce,o as ie,a0 as be}from"../chunks/scheduler.CAj9Y8_W.js";import{S as Q,i as W,g as $e,b as k,e as ge,t as b,c as E,a as D,m as M,d as N}from"../chunks/index.Aozpq-_l.js";import{a as J}from"../chunks/entry.CgOmwr3V.js";import{e as fe}from"../chunks/Toaster.svelte_svelte_type_style_lang.B2fhrhRL.js";import{C as ve}from"../chunks/MainNav.svelte_svelte_type_style_lang.Cs_GFNuK.js";import{R as ke,A as Ce}from"../chunks/About.C4Txkl9l.js";import{B as ue}from"../chunks/button.Cl5SI4S6.js";const xe="always",Re=Object.freeze(Object.defineProperty({__proto__:null,trailingSlash:xe},Symbol.toStringTag,{value:"Module"}));function we(c){let t,s;return{c(){t=h("span"),s=te(c[0]),this.h()},l(n){t=$(n,"SPAN",{class:!0});var e=_(t);s=se(e,c[0]),e.forEach(u),this.h()},h(){i(t,"class","countdown svelte-1vxdel8")},m(n,e){C(n,t,e),m(t,s)},p(n,[e]){e&1&&pe(s,n[0])},i:j,o:j,d(n){n&&u(t)}}}function ye(c,t,s){let{to:n}=t,e="",r;function a(){const o=new Date;if(!r){s(0,e="");return}const l=r.getTime()-o.getTime();if(l<=0){s(0,e="0h 0m 0s");return}const d=Math.floor(l/(1e3*60*60*24)),g=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),v=Math.floor(l%(1e3*60*60)/(1e3*60));d<2?s(0,e=`${g}h ${v}m`):s(0,e=`${d} days`)}return ne(()=>{a();const o=setInterval(a,1e3);return()=>clearInterval(o)}),_e(()=>{r=new Date(n),a()}),c.$$set=o=>{"to"in o&&s(1,n=o.to)},[e,n]}class Ie extends Q{constructor(t){super(),W(this,t,ye,we,q,{to:1})}}function Ee(c){let t,s,n,e=`<img src="${J}/cards/BACK.svg" alt="Back" class="svelte-5f4dcv"/>`,r,a,o,l,d;return{c(){t=h("div"),s=h("div"),n=h("div"),n.innerHTML=e,r=y(),a=h("div"),o=h("img"),this.h()},l(g){t=$(g,"DIV",{class:!0});var v=_(t);s=$(v,"DIV",{class:!0,id:!0});var V=_(s);n=$(V,"DIV",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-1yudmkc"&&(n.innerHTML=e),r=I(V),a=$(V,"DIV",{class:!0});var w=_(a);o=$(w,"IMG",{src:!0,alt:!0,class:!0}),w.forEach(u),V.forEach(u),v.forEach(u),this.h()},h(){i(n,"class","game-card-back svelte-5f4dcv"),ce(o.src,l=J+"/cards/"+c[0])||i(o,"src",l),i(o,"alt","Card"),i(o,"class","svelte-5f4dcv"),i(a,"class","game-card-front svelte-5f4dcv"),i(s,"class","game-card-inner svelte-5f4dcv"),i(s,"id",d="game-card-inner-"+c[1]),i(t,"class","game-card svelte-5f4dcv")},m(g,v){C(g,t,v),m(t,s),m(s,n),m(s,r),m(s,a),m(a,o)},p(g,[v]){v&1&&!ce(o.src,l=J+"/cards/"+g[0])&&i(o,"src",l),v&2&&d!==(d="game-card-inner-"+g[1])&&i(s,"id",d)},i:j,o:j,d(g){g&&u(t)}}}function De(c,t,s){let{cardName:n}=t,{cardKey:e}=t;const r=2e3+(e+1)*500+Math.max(0,(e-2)*1350);return ne(()=>{const a=document.getElementById(`game-card-inner-${e}`);setTimeout(()=>{a==null||a.style.setProperty("transform","rotateY(180deg)")},r)}),c.$$set=a=>{"cardName"in a&&s(0,n=a.cardName),"cardKey"in a&&s(1,e=a.cardKey)},[n,e]}class Me extends Q{constructor(t){super(),W(this,t,De,Ee,q,{cardName:0,cardKey:1})}}function de(c,t,s){const n=c.slice();return n[3]=t[s],n[5]=s,n}function me(c){let t,s;return t=new Me({props:{cardName:c[3],cardKey:c[5]}}),{c(){E(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,e){M(t,n,e),s=!0},p(n,e){const r={};e&2&&(r.cardName=n[3]),t.$set(r)},i(n){s||(b(t.$$.fragment,n),s=!0)},o(n){k(t.$$.fragment,n),s=!1},d(n){N(t,n)}}}function Ne(c){let t,s,n=fe(c[1]),e=[];for(let a=0;a<n.length;a+=1)e[a]=me(de(c,n,a));const r=a=>k(e[a],1,1,()=>{e[a]=null});return{c(){t=h("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=$(a,"DIV",{class:!0});var o=_(t);for(let l=0;l<e.length;l+=1)e[l].l(o);o.forEach(u),this.h()},h(){i(t,"class","cards-container svelte-cgoxcm")},m(a,o){C(a,t,o);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null);s=!0},p(a,o){if(o&2){n=fe(a[1]);let l;for(l=0;l<n.length;l+=1){const d=de(a,n,l);e[l]?(e[l].p(d,o),b(e[l],1)):(e[l]=me(d),e[l].c(),b(e[l],1),e[l].m(t,null))}for($e(),l=n.length;l<e.length;l+=1)r(l);ge()}},i(a){if(!s){for(let o=0;o<n.length;o+=1)b(e[o]);s=!0}},o(a){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)k(e[o]);s=!1},d(a){a&&u(t),be(e,a)}}}function he(c){let t,s;return t=new ve({props:{$$slots:{default:[Ne]},$$scope:{ctx:c}}}),{c(){E(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,e){M(t,n,e),s=!0},p(n,e){const r={};e&66&&(r.$$scope={dirty:e,ctx:n}),t.$set(r)},i(n){s||(b(t.$$.fragment,n),s=!0)},o(n){k(t.$$.fragment,n),s=!1},d(n){N(t,n)}}}function Ve(c){let t=c[0],s,n,e=he(c);return{c(){e.c(),s=ie()},l(r){e.l(r),s=ie()},m(r,a){e.m(r,a),C(r,s,a),n=!0},p(r,[a]){a&1&&q(t,t=r[0])?($e(),k(e,1,1,j),ge(),e=he(r),e.c(),b(e,1),e.m(s.parentNode,s)):e.p(r,a)},i(r){n||(b(e),n=!0)},o(r){k(e),n=!1},d(r){r&&u(s),e.d(r)}}}function Pe(c,t,s){let n=0,e=[];const r=()=>{s(1,e=[]);const a=["CLUB","DIAMOND","HEART","SPADE"],o=["1","2","3","4","5","6","7","8","9","10","11-JACK","12-QUEEN","13-KING"];for(let l=0;l<5;++l){let d=0,g,v;do d++,g=a[Math.floor(Math.random()*a.length)],v=o[Math.floor(Math.random()*o.length)];while(e.includes(`${g}-${v}.svg`)&&d<100);e.push(`${g}-${v}.svg`)}s(0,n+=1)};return ne(()=>{r()}),[n,e]}class Se extends Q{constructor(t){super(),W(this,t,Pe,Ve,q,{})}}function Te(c){let t,s,n="11th - 18th October 2024";return{c(){t=h("i"),s=h("a"),s.textContent=n,this.h()},l(e){t=$(e,"I",{class:!0}),_(t).forEach(u),s=$(e,"A",{class:!0,href:!0,download:!0,"data-svelte-h":!0}),O(s)!=="svelte-oster0"&&(s.textContent=n),this.h()},h(){i(t,"class","fas fa-calendar-alt svelte-hgnu5s"),i(s,"class","cta link svelte-hgnu5s"),i(s,"href",J+"/kickoff.ics"),i(s,"download","kickoff.ics")},m(e,r){C(e,t,r),C(e,s,r)},p:j,d(e){e&&(u(t),u(s))}}}function Ae(c){let t,s,n="HPI Potsdam";return{c(){t=h("i"),s=h("a"),s.textContent=n,this.h()},l(e){t=$(e,"I",{class:!0}),_(t).forEach(u),s=$(e,"A",{class:!0,href:!0,target:!0,rel:!0,"data-svelte-h":!0}),O(s)!=="svelte-1spoudn"&&(s.textContent=n),this.h()},h(){i(t,"class","fas fa-map-marker-alt svelte-hgnu5s"),i(s,"class","cta link svelte-hgnu5s"),i(s,"href","https://maps.app.goo.gl/nLGsGgRTVf5egqfT8"),i(s,"target","_blank"),i(s,"rel","noopener noreferrer")},m(e,r){C(e,t,r),C(e,s,r)},p:j,d(e){e&&(u(t),u(s))}}}function Ke(c){let t,s,n="Welcome to the HPI Pokerbot Competition!",e,r,a="Join us for an exciting hackathon-style event with competitions and prizes!",o,l,d,g,v,V,w,P,Y,G,S,F,T,X,A,Z,ee,L,K,z,B,R;return v=new ke({}),P=new ue({props:{size:"lg",$$slots:{default:[Te]},$$scope:{ctx:c}}}),S=new ue({props:{size:"lg",$$slots:{default:[Ae]},$$scope:{ctx:c}}}),A=new Ie({props:{to:"2024-10-11T14:00:00"}}),K=new Se({}),B=new Ce({}),{c(){t=h("section"),s=h("h1"),s.textContent=n,e=y(),r=h("p"),r.textContent=a,o=y(),l=h("div"),d=h("div"),g=h("div"),E(v.$$.fragment),V=y(),w=h("div"),E(P.$$.fragment),Y=y(),G=h("div"),E(S.$$.fragment),F=y(),T=h("p"),X=te("See you in "),E(A.$$.fragment),Z=te("!"),ee=y(),L=h("div"),E(K.$$.fragment),z=y(),E(B.$$.fragment),this.h()},l(f){t=$(f,"SECTION",{id:!0,class:!0});var p=_(t);s=$(p,"H1",{class:!0,"data-svelte-h":!0}),O(s)!=="svelte-17wal07"&&(s.textContent=n),e=I(p),r=$(p,"P",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-11cy1cc"&&(r.textContent=a),o=I(p),l=$(p,"DIV",{class:!0});var H=_(l);d=$(H,"DIV",{class:!0});var x=_(d);g=$(x,"DIV",{class:!0});var re=_(g);D(v.$$.fragment,re),re.forEach(u),V=I(x),w=$(x,"DIV",{class:!0});var ae=_(w);D(P.$$.fragment,ae),ae.forEach(u),Y=I(x),G=$(x,"DIV",{class:!0});var le=_(G);D(S.$$.fragment,le),le.forEach(u),F=I(x),T=$(x,"P",{class:!0});var U=_(T);X=se(U,"See you in "),D(A.$$.fragment,U),Z=se(U,"!"),U.forEach(u),x.forEach(u),ee=I(H),L=$(H,"DIV",{class:!0});var oe=_(L);D(K.$$.fragment,oe),oe.forEach(u),H.forEach(u),p.forEach(u),z=I(f),D(B.$$.fragment,f),this.h()},h(){i(s,"class","font-bold text-4xl"),i(r,"class","mt-4 svelte-hgnu5s"),i(g,"class","flex mt-7 mb-2"),i(w,"class","flex mb-2"),i(G,"class","flex mb-2"),i(T,"class","mt-5 svelte-hgnu5s"),i(d,"class","flex-1 svelte-hgnu5s"),i(L,"class","flex-1 svelte-hgnu5s"),i(l,"class","content-wrapper svelte-hgnu5s"),i(t,"id","home"),i(t,"class","home-section svelte-hgnu5s")},m(f,p){C(f,t,p),m(t,s),m(t,e),m(t,r),m(t,o),m(t,l),m(l,d),m(d,g),M(v,g,null),m(d,V),m(d,w),M(P,w,null),m(d,Y),m(d,G),M(S,G,null),m(d,F),m(d,T),m(T,X),M(A,T,null),m(T,Z),m(l,ee),m(l,L),M(K,L,null),C(f,z,p),M(B,f,p),R=!0},p(f,p){const H={};p&1&&(H.$$scope={dirty:p,ctx:f}),P.$set(H);const x={};p&1&&(x.$$scope={dirty:p,ctx:f}),S.$set(x)},i(f){R||(b(v.$$.fragment,f),b(P.$$.fragment,f),b(S.$$.fragment,f),b(A.$$.fragment,f),b(K.$$.fragment,f),b(B.$$.fragment,f),R=!0)},o(f){k(v.$$.fragment,f),k(P.$$.fragment,f),k(S.$$.fragment,f),k(A.$$.fragment,f),k(K.$$.fragment,f),k(B.$$.fragment,f),R=!1},d(f){f&&(u(t),u(z)),N(v),N(P),N(S),N(A),N(K),N(B,f)}}}function Be(c){let t,s,n,e;return t=new ve({props:{$$slots:{default:[Ke]},$$scope:{ctx:c}}}),{c(){E(t.$$.fragment),s=y(),n=h("link"),this.h()},l(r){D(t.$$.fragment,r),s=I(r),n=$(r,"LINK",{rel:!0,href:!0}),this.h()},h(){i(n,"rel","stylesheet"),i(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css")},m(r,a){M(t,r,a),C(r,s,a),C(r,n,a),e=!0},p(r,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:r}),t.$set(o)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){r&&(u(s),u(n)),N(t,r)}}}class Ue extends Q{constructor(t){super(),W(this,t,null,Be,q,{})}}export{Ue as component,Re as universal};
