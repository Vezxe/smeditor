if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"app.js",revision:"dfbc9ca8a0f4b742f23bb7b6e9c3c894"},{url:"app/index.html",revision:"bd739c0327a673f351e34c00930a7cbd"},{url:"assets/ChartManager-00dfcf8b.css",revision:null},{url:"assets/index-8a1528ec.css",revision:null},{url:"assets/index-8c6c3f75.css",revision:null},{url:"assets/index-a3dfc1ac.css",revision:null},{url:"assets/SafariFileWorker-557e53c3.js",revision:null},{url:"ChartManager-5a16a8de.js",revision:null},{url:"downloader-1bfef0dc.js",revision:null},{url:"embed.js",revision:"8477746d18262eb80568e305fc0bd4f3"},{url:"embed/index.html",revision:"3e4c0f5c81e05a2ad3152495ea0d55ea"},{url:"FileSystemWritableFileStream-e4c13ad9.js",revision:null},{url:"index.html",revision:"1017ad538ab1cfab7596f6a15a8a7b95"},{url:"memory-2718bf03.js",revision:null},{url:"NodeFileHandler-6e08cebf.js",revision:null},{url:"OggDec-2941c3fd.js",revision:null},{url:"registerSW.js",revision:"21684c117fd68cc7dc1643829ea87c07"},{url:"web-streams-ponyfill-4a0f4950.js",revision:null},{url:"assets/app/versions.json",revision:"4ba536c7c2aa91a3e28b6af8a0f19d9d"},{url:"assets/assist_tick-b8aada2a.ogg",revision:null},{url:"assets/av-05878b27.mp4",revision:null},{url:"assets/banner-fa29dd27.png",revision:null},{url:"assets/body-614d0188.png",revision:null},{url:"assets/decent-f3f8a110.png",revision:null},{url:"assets/embed-8c85cbda.png",revision:null},{url:"assets/eq-6befbaef.mp4",revision:null},{url:"assets/excellent-84718ac0.png",revision:null},{url:"assets/exportlua-6de45f3b.png",revision:null},{url:"assets/fantastic-1755e773.png",revision:null},{url:"assets/font/Assistant-Hebrew.woff2",revision:"e99c63e8dcd7799e8adf32df82b46376"},{url:"assets/font/Assistant-Latin.woff2",revision:"a416191c7641acf049f804b685235d3d"},{url:"assets/font/Assistant-LatinExt.woff2",revision:"2423d82cdbc6a34b99d5bbacf82623c7"},{url:"assets/frame-d599a2fe.png",revision:null},{url:"assets/git-67477794.png",revision:null},{url:"assets/great-0e864574.png",revision:null},{url:"assets/highpass-d9d7cfcb.svg",revision:null},{url:"assets/highshelf-11ccf64e.svg",revision:null},{url:"assets/hold_judgment-82934f15.png",revision:null},{url:"assets/hold-7b947e11.png",revision:null},{url:"assets/icon/favicon.ico",revision:"7bcbdd2344641a21b0f6f9393b491d65"},{url:"assets/icon/icon_512.png",revision:"1a4014fcbfaa08050ff38cabb8235165"},{url:"assets/icon/logo.png",revision:"3170c21a8539047fffea9eb4bd912d8e"},{url:"assets/icon/mac.icns",revision:"ac52a49fb658a942abeaa019bd05e9aa"},{url:"assets/judgmentITG-5390eacd.png",revision:null},{url:"assets/judgmentWaterfall-5bb3f994.png",revision:null},{url:"assets/lowpass-ff013247.svg",revision:null},{url:"assets/lowshelf-2b031328.svg",revision:null},{url:"assets/metronome_high-6fa54e52.ogg",revision:null},{url:"assets/metronome_low-4db4e760.ogg",revision:null},{url:"assets/mine-590d445e.png",revision:null},{url:"assets/mine-b65ce42d.ogg",revision:null},{url:"assets/mode-cac62e2a.png",revision:null},{url:"assets/mouse-ef7f3cf3.mp4",revision:null},{url:"assets/parts-0c8fa692.png",revision:null},{url:"assets/parts-9668caec.png",revision:null},{url:"assets/parts-b37af2cf.png",revision:null},{url:"assets/peaking-eec48769.svg",revision:null},{url:"assets/playtest-f34f5856.mp4",revision:null},{url:"assets/popup-b6da9784.mp4",revision:null},{url:"assets/pref-fdc09174.mp4",revision:null},{url:"assets/scrolls-a04758c8.mp4",revision:null},{url:"assets/timesig-9e28e1f2.png",revision:null},{url:"assets/way_off-8bc3fd65.png",revision:null},{url:"assets/white_fantastic-b65b4f11.png",revision:null},{url:"assets/icon/icon_512.png",revision:"1a4014fcbfaa08050ff38cabb8235165"},{url:"manifest.json",revision:"1d72161daa4e530e15d85baf4906bf4c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
