---
title: onUpdate and onUnmount in ReactJS hooks.
---

`onUpdate` in Reactjs hooks:

```tsx
import { useEffect } from "react"

function App() {
  useEffect(() => {
    // on mount
    return () => {
      // call if component update
    }
  })

  return <div>App</div>
}
```

`onUnmount` in Reactjs hooks:

```tsx
import { useEffect } from "react"

function App() {
  useEffect(() => {
    // on mount
    return () => {
      // call if component unmount
    }
  }, [])

  return <div>App</div>
}
```