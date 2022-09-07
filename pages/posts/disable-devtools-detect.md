# Disable detect devtools

## devtoolsDetector

Embed this code:
```js
Object.defineProperty(window, "devtoolsDetector", {
	get() { return {} },
	set(v) {}
})
```
