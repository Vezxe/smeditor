if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const u=e=>s(e,n),t={module:{uri:n},exports:o,require:u};i[n]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app.js",revision:"a3aab771495ab580a95432e7459ab251"},{url:"app/index.html",revision:"913c38d4adf5d57b8c8d70d5d20023c0"},{url:"assets/index-17b4b05e.css",revision:null},{url:"assets/index-61da728f.css",revision:null},{url:"assets/SafariFileWorker-557e53c3.js",revision:null},{url:"downloader-499c94f5.js",revision:null},{url:"FileSystemWritableFileStream-e4c13ad9.js",revision:null},{url:"index.html",revision:"35013c17e42435b280cc6ab564b51ebd"},{url:"memory-bcd9b113.js",revision:null},{url:"NodeFileHandler-058bbf90.js",revision:null},{url:"OggDec-2941c3fd.js",revision:null},{url:"registerSW.js",revision:"21684c117fd68cc7dc1643829ea87c07"},{url:"util-5f573b50.js",revision:null},{url:"web-streams-ponyfill-4a0f4950.js",revision:null},{url:"assets/icon/icon_512.png",revision:"1a4014fcbfaa08050ff38cabb8235165"},{url:"manifest.json",revision:"1d72161daa4e530e15d85baf4906bf4c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
