import{_ as w,s as b}from"./ChartManager-5a16a8de.js";const{GONE:v}=b,E=/constructor/i.test(window.HTMLElement)||window.safari||window.WebKitPoint;class j{constructor(e="unknown"){this.kind="file",this.writable=!0,this.name=e}async getFile(){throw new DOMException(...v)}async createWritable(e={}){var t;if(e.keepExistingData)throw new TypeError("Option keepExistingData is not implemented");const h=globalThis.TransformStream||(await w(()=>import("./web-streams-ponyfill-4a0f4950.js"),[])).TransformStream,p=globalThis.WritableStream||(await w(()=>import("./web-streams-ponyfill-4a0f4950.js"),[])).WritableStream,s=await((t=navigator.serviceWorker)===null||t===void 0?void 0:t.getRegistration()),o=document.createElement("a"),i=new h,u=i.writable;if(o.download=this.name,E||!s){let a=[];i.readable.pipeTo(new p({write(r){a.push(new Blob([r]))},close(){const r=new Blob(a,{type:"application/octet-stream; charset=utf-8"});a=[],o.href=URL.createObjectURL(r),o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),1e4)}}))}else{const{writable:a,readablePort:r}=new k(p),n=encodeURIComponent(this.name).replace(/['()]/g,escape).replace(/\*/g,"%2A"),f={"content-disposition":"attachment; filename*=UTF-8''"+n,"content-type":"application/octet-stream; charset=utf-8",...e.size?{"content-length":e.size}:{}},g=setTimeout(()=>s.active.postMessage(0),1e4);i.readable.pipeThrough(new h({transform(l,_){if(l instanceof Uint8Array)return _.enqueue(l);const R=new Response(l).body.getReader(),m=W=>R.read().then(y=>y.done?0:m(_.enqueue(y.value)));return m()}})).pipeTo(a).finally(()=>{clearInterval(g)}),s.active.postMessage({url:s.scope+n,headers:f,readablePort:r},[r]);const c=document.createElement("iframe");c.hidden=!0,c.src=s.scope+n,document.body.appendChild(c)}return u.getWriter()}async isSameEntry(e){return this===e}}const P=0,T=0,M=1,S=1,L=2;class O{constructor(e){this._readyPending=!1,this._port=e,this._resetReady(),this._port.onmessage=t=>this._onMessage(t.data)}start(e){return this._controller=e,this._readyPromise}write(e){const t={type:P,chunk:e};return this._port.postMessage(t,[e.buffer]),this._resetReady(),this._readyPromise}close(){this._port.postMessage({type:L}),this._port.close()}abort(e){this._port.postMessage({type:S,reason:e}),this._port.close()}_onMessage(e){e.type===T&&this._resolveReady(),e.type===M&&this._onError(e.reason)}_onError(e){this._controller.error(e),this._rejectReady(e),this._port.close()}_resetReady(){this._readyPromise=new Promise((e,t)=>{this._readyResolve=e,this._readyReject=t}),this._readyPending=!0}_resolveReady(){this._readyResolve(),this._readyPending=!1}_rejectReady(e){this._readyPending||this._resetReady(),this._readyPromise.catch(()=>{}),this._readyReject(e),this._readyPending=!1}}class k{constructor(e){const t=new MessageChannel;this.readablePort=t.port1,this.writable=new e(new O(t.port2))}}export{j as FileHandle};
