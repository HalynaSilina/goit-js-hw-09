!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.delay,o=t.step,u=t.amount;console.log(e.currentTarget.elements);for(var a=Number(n.value),l=Number(o.value),c=Number(u.value),s=1;s<=c;s+=1)i(s,a).then((function(e){var t=e.position,n=e.delay;return r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"),{timeout:5e3,clickToClose:!0})})).catch((function(e){var t=e.position,n=e.delay;return r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"),{timeout:5e3,clickToClose:!0})})),a+=l;e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.9456fa3e.js.map
