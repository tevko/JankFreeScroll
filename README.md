# JankFreeScroll

JankFreeScroll uses [Request Animation Frame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) in order to help you run javascript on a page while a user is scrolling.

##How to Use

```html
<script src="jankfreescroll.js"></script>
```
```javascript
var s = jankfreescroll({
	onScrollDown() {
		console.log('down');
	},
	onScrollUp() {
		console.log('up');
	}
});

//to cancel

window.cancelAnimationFrame(s.frameID);
```

##Try it out
http://codepen.io/tevko/pen/dXzNrw
