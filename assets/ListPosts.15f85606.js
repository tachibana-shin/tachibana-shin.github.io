import{e as f,f as h,s as x,r as k,l as a,F as y,v as b,m,o as s,c as g,w as B,a as o,d as c,t as r,n as l,q as C}from"./app.f903ddad.js";const v={class:"no-underline"},w={class:"title text-lg"},D={key:0,class:"text-xs border border-current rounded px-1 pb-0.2"},N={class:"time opacity-50 text-sm -mt-1"},V={key:0,class:"opacity-50"},L=f({__name:"ListPosts",props:{type:{}},setup(i){const p=i,d=h().getRoutes().filter(t=>t.path.startsWith("/posts")).sort((t,n)=>+new Date(n.meta.frontmatter.date)-+new Date(t.meta.frontmatter.date)),u=x(()=>d.filter(t=>!t.path.endsWith(".html")&&t.meta.frontmatter.type===p.type));return(t,n)=>{const _=k("router-link");return s(),a("ul",null,[(s(!0),a(y,null,b(m(u),e=>(s(),g(_,{key:e.path,class:"item block font-normal mb-6 mt-2 no-underline",to:e.path},{default:B(()=>[o("li",v,[o("div",w,[c(r(e.meta.frontmatter.title)+" ",1),e.meta.frontmatter.lang==="jp"?(s(),a("sup",D,"\u65E5\u672C")):l("",!0)]),o("div",N,[c(r(m(C)(e.meta.frontmatter.date))+" ",1),e.meta.frontmatter.duration?(s(),a("span",V,"\xB7 "+r(e.meta.frontmatter.duration),1)):l("",!0)])])]),_:2},1032,["to"]))),128))])}}});export{L as _};
