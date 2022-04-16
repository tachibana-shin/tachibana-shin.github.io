---
title: Notes - Tachibana Shin
display: Notes
subtitle: Quick notes / tips
description: Quick notes / tips
---

[RSS Feed](https://shin.is-a.dev/notes/feed.xml)


<article>

## `plutil` in PongoOS, iOS

_2021/09/13_

```bash
plutil -key MCMMetadataIdentifier "$APP_FOLDER/$metadata" 2> /dev/null #get value
plutil -key CFBundleIdentifier -string $BUNDLE_ID_NEW $INFO_ROOT #set value
```

</article>
<article>

## Clean npm & yarn cache

_2021/09/08_

My disk is full today :(

```bash
npm cache clean --force
yarn cache clean
```

</article>
<article>

## isomorphic-git on Ionic, Capacitor

_2021/08/31_

Use [capacitor-fs](https://npmjs.org/package/capacitor-fs)
```ts
import { createFileSystem } from "capacitor-fs"
import { Filesystem, Directory } from "@capacitor/filesystem"

const fs = createFileSystem(Filesystem, {
   rootDir: "/",
   directory: Directory.Documents,
   base64Alway: true, 
})

git.clone({
  fs,
  // ...
})
```
</article>
<article>

## Host free

_2021/07/01_

webhost000, heroku, firebase, netflix

</article>