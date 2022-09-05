import{_ as r}from"./Post.b712303a.js";import{u as i,c as l,w as s,o as m,a as e,d as t}from"./app.1097d439.js";const c=e("div",{class:"prose m-auto"},[e("p",null,[t("Saw "),e("a",{href:"https://twitter.com/youyuxi/status/1272932071749619712",target:"_blank",rel:"noopener"},"a tweet from Evan You"),t(" about the "),e("a",{href:"https://hey.com/",target:"_blank",rel:"noopener"},"hey.com"),t(" mail service recently. I got interested in having a short and nice email address. My current one in Hotmail is just too long to even being spell out in talk. "),e("code",null,"hey.com"),t(" looks very nice but $99/year is not a very good deal to me. I decide to use my own domain for receiving emails.")]),e("p",null,[t("I did this a couple years ago for another domain, I kinda remember an open-source tool allowing forwarding emails by just adding DNS record. I took some time to search for it but I didn\u2019t find the page matches with my memory. I went GitHub to search in my stared projects, it turns out the tool now becomes and Freemium SaaS "),e("a",{href:"https://forwardemail.net/",target:"_blank",rel:"noopener"},"forwardemail.net"),t(" with a fresh new logo and website design that I can\u2019t even recognize it.")]),e("p",null,"The DNS forwarding feature just works the same, but it requires you to log in and register your domain now. I am glad it now being more well documented and charging for premium supports which can help it sustain."),e("p",null,"The config is quite simple as usual, just 3 DNS record:"),e("pre",{class:"language-html"},[e("code",{class:"language-html"},`MX   @  mx1.forwardemail.net  10
MX   @  mx2.forwardemail.net  20
TXT  @  forward-email=youremail@example.com
`)]),e("p",null,[t("That\u2019s it! It also provides some advanced configs, you can check "),e("a",{href:"https://forwardemail.net/en/faq",target:"_blank",rel:"noopener"},"the doc here"),t(".")]),e("p",null,[t("While setting up and reading the docs, I learned that you can explicitly purge the cache for "),e("a",{href:"https://1.1.1.1/purge-cache/",target:"_blank",rel:"noopener"},"Cloudflare DNS"),t(" and "),e("a",{href:"https://developers.google.com/speed/public-dns/cache",target:"_blank",rel:"noopener"},"Google DNS"),t(". That\u2019s a very good-to-know tip!")])],-1),w="Domain Email",y="2020-06-17T16:00:00.000Z",_="en",b="2min",k=[{property:"og:title",content:"Domain Email"}],v={__name:"domain-email",setup(d,{expose:a}){const o={title:"Domain Email",date:"2020-06-17T16:00:00.000Z",lang:"en",duration:"2min",meta:[{property:"og:title",content:"Domain Email"}]};return a({frontmatter:o}),i({title:"Domain Email",meta:[{property:"og:title",content:"Domain Email"}]}),(h,p)=>{const n=r;return m(),l(n,{frontmatter:o},{default:s(()=>[c]),_:1})}}};export{y as date,v as default,b as duration,_ as lang,k as meta,w as title};