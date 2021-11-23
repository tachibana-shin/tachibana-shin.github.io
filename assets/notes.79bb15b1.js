import{_ as o}from"./Post.b0f0fa3f.js";import{j as c,k as i,h as l,o as p,a as n,b as a}from"./vendor.9568775f.js";import"./app.70c567c0.js";const r=n("div",{class:"prose m-auto"},[n("p",null,[n("a",{href:"https://tachibana-shin.github.io/notes/feed.xml",target:"_blank",rel:"noopener"},"RSS Feed")]),n("article",null,[n("h2",{id:"plutil-in-pongoos-ios",tabindex:"-1"},[n("code",null,"plutil"),a(" in PongoOS, iOS "),n("a",{class:"header-anchor",href:"#plutil-in-pongoos-ios","aria-hidden":"true"},"#")]),n("p",null,[n("em",null,"2021/09/13")]),n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[a("plutil -key MCMMetadataIdentifier "),n("span",{class:"token string"},[a('"'),n("span",{class:"token variable"},"$APP_FOLDER"),a("/"),n("span",{class:"token variable"},"$metadata"),a('"')]),a(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),a(">")]),a(" /dev/null "),n("span",{class:"token comment"},"#get value"),a(`
plutil -key CFBundleIdentifier -string `),n("span",{class:"token variable"},"$BUNDLE_ID_NEW"),a(),n("span",{class:"token variable"},"$INFO_ROOT"),a(),n("span",{class:"token comment"},"#set value"),a(`
`)])])]),n("article",null,[n("h2",{id:"clean-npm-yarn-cache",tabindex:"-1"},[a("Clean npm & yarn cache "),n("a",{class:"header-anchor",href:"#clean-npm-yarn-cache","aria-hidden":"true"},"#")]),n("p",null,[n("em",null,"2021/09/08")]),n("p",null,"My disk is full today :("),n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[n("span",{class:"token function"},"npm"),a(` cache clean --force
`),n("span",{class:"token function"},"yarn"),a(` cache clean
`)])])]),n("article",null,[n("h2",{id:"isomorphic-git-on-ionic-capacitor",tabindex:"-1"},[a("isomorphic-git on Ionic, Capacitor "),n("a",{class:"header-anchor",href:"#isomorphic-git-on-ionic-capacitor","aria-hidden":"true"},"#")]),n("p",null,[n("em",null,"2021/08/31")]),n("p",null,[a("Use "),n("a",{href:"https://npmjs.org/package/capacitor-fs",target:"_blank",rel:"noopener"},"capacitor-fs")]),n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" createFileSystem "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"capacitor-fs"'),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Filesystem"),n("span",{class:"token punctuation"},","),a(" Directory "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@capacitor/filesystem"'),a(`

`),n("span",{class:"token keyword"},"const"),a(" fs "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"createFileSystem"),n("span",{class:"token punctuation"},"("),a("Filesystem"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
   rootDir`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"/"'),n("span",{class:"token punctuation"},","),a(`
   directory`),n("span",{class:"token operator"},":"),a(" Directory"),n("span",{class:"token punctuation"},"."),a("Documents"),n("span",{class:"token punctuation"},","),a(`
   base64Alway`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(` 
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

git`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  fs`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])])]),n("article",null,[n("h2",{id:"host-free",tabindex:"-1"},[a("Host free "),n("a",{class:"header-anchor",href:"#host-free","aria-hidden":"true"},"#")]),n("p",null,[n("em",null,"2021/07/01")]),n("p",null,"webhost000, heroku, firebase, netflix")])],-1),b={setup(u,{expose:t}){const s={title:"Notes - Tachibana Shin",display:"Notes",subtitle:"Quick notes / tips",description:"Quick notes / tips",meta:[{property:"og:title",content:"Notes - Tachibana Shin"},{property:"og:description",content:"Quick notes / tips"},{name:"description",content:"Quick notes / tips"}]};return t({frontmatter:s}),c({title:"Notes - Tachibana Shin",meta:[{property:"og:title",content:"Notes - Tachibana Shin"},{property:"og:description",content:"Quick notes / tips"},{name:"description",content:"Quick notes / tips"}]}),(d,h)=>{const e=o;return p(),i(e,{frontmatter:s},{default:l(()=>[r]),_:1})}}};export{b as default};
