import{t as I,o as T,p as E,S as P,G as R}from"./ChartManager-5a16a8de.js";const m=new Set;document.addEventListener("DOMContentLoaded",()=>{const c=document.getElementById("output-url"),w=document.getElementById("output-iframe"),o=document.getElementById("sm-url"),b=document.getElementById("chart-container");let r=document.getElementById("loading-output");const f=document.getElementById("option-grid");let h,p,k="",d,u;I.setDefaultProps({duration:[200,100]}),I(c,{content:"Click to copy to clipboard",placement:"bottom"});function i(e,t){const n=r.cloneNode(!0);r.parentNode.replaceChild(n,r),r=n,r.innerText=e,t=="error"?r.style.color="rgba(222, 44, 44, 0.9)":r.style.color=""}function s(){const e=new URL(`${location.origin}/smeditor/app/`);p!==void 0&&e.searchParams.set("url",p),u!==void 0&&e.searchParams.set("chartType",u),d!==void 0&&e.searchParams.set("chartIndex",d+""),m.size>0&&e.searchParams.set("flags",[...m.values()].join("")),c.value=e.toString(),k!=e.toString()&&(w.src=e.toString()),k=e.toString()}s(),c.onclick=e=>{e.preventDefault(),c.blur(),navigator.clipboard.writeText(c.value),setTimeout(()=>c.select(),10)},c.onselect=e=>{e.preventDefault(),setTimeout(()=>c.select(),10)},c.ondblclick=e=>{e.preventDefault(),setTimeout(()=>c.select(),10)};let g;function L(){if(!o.checkValidity())return;p=void 0,s();const e=o.value;if(e===""){o.classList.remove("invalid","ok"),i("");return}o.classList.remove("invalid","ok"),i("Loading...");const t=new AbortController,n=setTimeout(()=>{o.classList.add("invalid"),t.abort(),i("Failed to load the specified URL!","error")},5e3);fetch(e,{signal:t.signal}).then(a=>{if(!a.ok){o.classList.add("invalid"),i("Failed to load the specified URL!","error");return}clearTimeout(n),a.text().then(async S=>{const B=new URL(e),D=new File([S],B.pathname.split("/").pop()??"song.sm");i("Loading charts...");const y=new P(D);await y.loaded,y.properties.TITLE===void 0&&i("Invalid file provided!","error"),h=y,p=e,d=void 0,u=void 0,i(""),s(),C()}),o.classList.add("ok")}).catch(()=>{o.classList.add("invalid"),i("Failed to load the specified URL!","error")})}o.onkeydown=e=>{o.classList.remove("invalid"),o.classList.remove("ok"),i(""),clearTimeout(g),g=setTimeout(()=>L(),1e3),(e.key=="Enter"||e.key=="Escape")&&o.blur()},o.onblur=()=>{o.checkValidity()&&(clearInterval(g),L())};const v=T.create([]);v.onChange(e=>{const t=e.split(" ")?.[0]??"dance-single",n=h?.charts[t]??[];l.setItems(n.map(a=>`${a.difficulty} ${a.meter}`)),l.setSelected(l.getItems().at(-1)),n.length!=0&&(console.log(n.length),t!="dance-single"?u=t:u=void 0,s())});const l=T.create([]);l.onChange((e,t)=>{d!=l.getItems().length-1?d=t:d=void 0,s()}),b.appendChild(v.view),b.appendChild(l.view);function C(){v.setItems(R.getPriority().map(t=>{const n=h.charts[t.id]??[];return t.id+" ("+n.length+")"}));const e=h?.charts["dance-single"]??[];l.setItems(e.map(t=>`${t.difficulty} ${t.meter}`)),l.setSelected(l.getItems().at(-1))}Object.entries(E).forEach(([e,t])=>{const n=document.createElement("label");n.classList.add("option");const a=document.createElement("input");a.type="checkbox",n.replaceChildren(a,document.createTextNode(t.name)),a.onchange=()=>{a.checked?m.add(t.char):m.delete(t.char),s()},f.appendChild(n)});const U=document.getElementById("enable-all");U.onclick=()=>{for(const e of f.children){const t=e.childNodes[0];t.checked=!0}for(const e of Object.values(E).map(t=>t.char))m.add(e);s()};const x=document.getElementById("disable-all");x.onclick=()=>{for(const e of f.children){const t=e.childNodes[0];t.checked=!1}m.clear(),s()}});
