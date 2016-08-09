(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.jankfreescroll = factory();
	}
}((this || window), function () {

	const jankfreescroll = config => {
		const self = {};
		const onScroll = ({onScrollDown, onScrollUp} = {}, lastScrollPos = window.pageYOffset) => {
			if (lastScrollPos < window.pageYOffset) {
				typeof onScrollDown !== 'undefined' && onScrollDown()
			} else if (lastScrollPos > window.pageYOffset) {
				typeof onScrollUp !== 'undefined' && onScrollUp();
			}
			self.frameID = window.requestAnimationFrame(onScroll.bind(this, {onScrollDown, onScrollUp}, window.pageYOffset));
		};
		//invoke outer function, masking ugly bind stuff and kicking off recursive inner function call
		window.requestAnimationFrame(onScroll.bind(this, config));
		//return object containing rAF ID
		return self
	};
	
	return jankfreescroll
}));
