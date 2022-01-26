---
title: Get information device from JavaScript
lang: en
duration: 10min
description: My site is now powered by Vite!
---

[[toc]]

You can get v4 IP info using API: http://ip-api.com/json

Get IP info (v6 preferred if available) using: http://api.myip.com

and get all IP provider information by `https://api.iplocation.net/?ip=<IP v4 or v6>`

Try it:

``` ts
const [IPv4, IPv6] = await Promise.all([
  fetch("http://ip-api.com/json").then(res => res.json()),
  fetch("http://api.myip.com").then(res => res.json()),
])

console.log(IPv4, IPv6);

if (IPv4.query === IPv6.ip) {
  // not exists IP v6
  const info = await Promise.all([
    fetch(`https://api.iplocation.net/?ip=${IPv4.query}`).then(res => res.json()),
  ])
  
  console.log(Array.from(info));
} else {
  const info = await Promise.all([
    fetch(`https://api.iplocation.net/?ip=${IPv4.query}`).then(res => res.json()),
    fetch(`https://api.iplocation.net/?ip=${IPv6.ip}`).then(res => res.json()),
  ])
  
  console.log(Array.from(info));
}
```
