import{e as T,n as u,C as $,D as W,x as j,E as D,o as F,c as N,a as V}from"./vendor.4d5da1af.js";const q={class:"fixed top-0 bottom-0 left-0 right-0 pointer-events-none",style:{"z-index":"-1"}},J=T({setup(A){const y=Math.PI,g=Math.PI/2,x=Math.PI/12;let w=0;const v=u(null),{random:a}=Math,n=$(W()),k=u(()=>{}),P=u(4),B=u(6),S=u(!1);function M(s,e=400,i=400,c){const t=s.getContext("2d"),r=window.devicePixelRatio||1,l=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,o=c||r/l;return s.style.width=`${e}px`,s.style.height=`${i}px`,s.width=o*e,s.height=o*i,t.scale(o,o),{ctx:t,dpi:o}}function b(s=0,e=0,i=0,c=0){const t=i*Math.cos(c),r=i*Math.sin(c);return[s+t,e+r]}return j(async()=>{const s=v.value,{ctx:e}=M(s,n.width,n.height),{width:i,height:c}=s;let t=[],r=[],l=0;const o=(f,_,m)=>{const C=a()*B.value,[h,d]=b(f,_,C,m);e.beginPath(),e.moveTo(f,_),e.lineTo(h,d),e.strokeStyle=`hsl(${w%360}, 50%, 50%)`,w+=.1,e.stroke();const E=m+a()*x,I=m-a()*x;h<-100||h>n.width+100||d<-100||d>n.height+100||((l<=P.value||a()>.5)&&t.push(()=>o(h,d,E)),(l<=P.value||a()>.5)&&t.push(()=>o(h,d,I)))};let R=performance.now();const z=1e3/40;let p;p=D(()=>{performance.now()-R<z||(l+=1,r=t,t=[],R=performance.now(),r.length||(p.pause(),S.value=!0),r.forEach(f=>f()))},{immediate:!1}),k.value=()=>{p.pause(),l=0,e.clearRect(0,0,i,c),e.lineWidth=1,e.strokeStyle="hsl(0, 50%, 50&)",r=[],t=[()=>o(a()*n.width,0,g),()=>o(a()*n.width,n.height,-g),()=>o(0,a()*n.height,0),()=>o(n.width,a()*n.height,y)],n.width<500&&(t=t.slice(0,2)),p.resume(),S.value=!1},k.value()}),(s,e)=>(F(),N("div",q,[V("canvas",{ref:(i,c)=>{c.el=i,v.value=i},width:"400",height:"400"},null,512)]))}});export{J as _};