var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function c(t,e){t.appendChild(e)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function l(){return s(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function p(t){d=t}"WeakMap"in("undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global)&&new WeakMap,new Map;const h=[],m=[];let $=[];const g=[],y=Promise.resolve();let b=!1;function _(t){$.push(t)}const w=new Set;let x=0;function v(){if(0!==x)return;const t=d;do{try{for(;x<h.length;){const t=h[x];x++,p(t),k(t.$$)}}catch(t){throw h.length=0,x=0,t}for(p(null),h.length=0,x=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];w.has(e)||(w.add(e),e())}$.length=0}while(h.length);for(;g.length;)g.pop()();b=!1,w.clear(),p(t)}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const A=new Set;function E(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];$.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),$=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(h.push(t),b||(b=!0,y.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(a,c,i,s,l,f,h,m=[-1]){const $=d;p(a);const g=a.$$={fragment:null,ctx:[],props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||($?$.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:c.target||$.$$.root};h&&h(g.root);let y=!1;if(g.ctx=i?i(a,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&M(a,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();c.intro&&((b=a.$$.fragment)&&b.i&&(A.delete(b),b.i(w))),function(t,n,a,c){const{fragment:u,after_update:i}=t.$$;u&&u.m(n,a),c||_((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(_)}(a,c.target,c.anchor,c.customElement),v()}var b,w;p($)}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);class N{$destroy(){E(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function O(e){let n,o,r,a,d,p,h,m,$;return{c(){n=i("main"),o=i("h1"),r=s("This is "),a=s(e[0]),d=s(' or --\x3e "Aight Bet"'),p=l(),h=i("p"),h.innerHTML='Visit the AI bot or helper at <a href="https://bruvai.com" target="_blank">bruvAI</a> to learn more about this server and any help with your milestone achievement',m=l(),$=i("p"),$.innerHTML='Visit aytbet.com <a href="https://aytbet.com" target="_blank">aytbet.com</a> the aytbet.com home page',f(o,"class","svelte-1dy6lu6"),f(n,"class","svelte-1dy6lu6")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),c(n,o),c(o,r),c(o,a),c(o,d),c(n,p),c(n,h),c(n,m),c(n,$)},p(t,[e]){1&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(a,t[0])},i:t,o:t,d(t){t&&u(n)}}}function S(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends N{constructor(t){super(),T(this,t,S,O,a,{name:0})}}({target:document.body,props:{name:"AytBet"}})}();
//# sourceMappingURL=bundle.js.map
