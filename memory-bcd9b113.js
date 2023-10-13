import{errors as c,isChunkObject as y}from"./util-5f573b50.js";import"./app.js";let n=globalThis.File,p=globalThis.Blob;const m=o=>{n=o},g=o=>{p=o},{INVALID:z,GONE:s,MISMATCH:w,MOD_ERR:E,SYNTAX:l,DISALLOWED:O}=c;class D{constructor(e,i){this.fileHandle=e,this.file=i?e.file:new n([],e.file.name,e.file),this.size=i?e.file.size:0,this.position=0}async write(e){if(!this.fileHandle.file)throw new DOMException(...s);let i=this.file;if(y(e)){if(e.type==="write"){if(typeof e.position=="number"&&e.position>=0&&(this.position=e.position,this.size<e.position&&(this.file=new n([this.file,new ArrayBuffer(e.position-this.size)],this.file.name,this.file))),!("data"in e))throw new DOMException(...l("write requires a data argument"));e=e.data}else if(e.type==="seek")if(Number.isInteger(e.position)&&e.position>=0){if(this.size<e.position)throw new DOMException(...z);this.position=e.position;return}else throw new DOMException(...l("seek requires a position argument"));else if(e.type==="truncate")if(Number.isInteger(e.size)&&e.size>=0){i=e.size<this.size?new n([i.slice(0,e.size)],i.name,i):new n([i,new Uint8Array(e.size-this.size)],i.name,i),this.size=i.size,this.position>i.size&&(this.position=i.size),this.file=i;return}else throw new DOMException(...l("truncate requires a size argument"))}e=new p([e]);let t=this.file;const a=t.slice(0,this.position),d=t.slice(this.position+e.size);let r=this.position-a.size;r<0&&(r=0),t=new n([a,new Uint8Array(r),e,d],t.name),this.size=t.size,this.position+=e.size,this.file=t}async close(){if(!this.fileHandle.file)throw new DOMException(...s);this.fileHandle.file=this.file,this.file=this.position=this.size=null,this.fileHandle.onclose&&this.fileHandle.onclose(this.fileHandle)}}class f{constructor(e="",i=new n([],e),t=!0){this.kind="file",this.deleted=!1,this.file=i,this.name=e,this.writable=t}async getFile(){if(this.deleted||this.file===null)throw new DOMException(...s);return this.file}async createWritable(e){if(!this.writable)throw new DOMException(...O);if(this.deleted)throw new DOMException(...s);return new D(this,!!e?.keepExistingData)}async isSameEntry(e){return this===e}destroy(){this.deleted=!0,this.file=null}}class h{constructor(e,i=!0){this.kind="directory",this.deleted=!1,this._entries={},this.name=e,this.writable=i}async*entries(){if(this.deleted)throw new DOMException(...s);yield*Object.entries(this._entries)}async isSameEntry(e){return this===e}async getDirectoryHandle(e,i={}){if(this.deleted)throw new DOMException(...s);const t=this._entries[e];if(t){if(t instanceof f)throw new DOMException(...w);return t}else{if(i.create)return this._entries[e]=new h(e);throw new DOMException(...s)}}async getFileHandle(e,i={}){const t=this._entries[e];if(t){if(t instanceof f)return t;throw new DOMException(...w)}else{if(i.create)return this._entries[e]=new f(e);throw new DOMException(...s)}}async removeEntry(e,i={}){const t=this._entries[e];if(!t)throw new DOMException(...s);t.destroy(i.recursive),delete this._entries[e]}destroy(e){for(let i of Object.values(this._entries)){if(!e)throw new DOMException(...E);i.destroy(e)}this._entries={},this.deleted=!0}}const M=new h(""),u=()=>M;export{f as FileHandle,h as FolderHandle,u as default,g as setBlobImpl,m as setFileImpl};
