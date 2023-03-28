const bodyEl = document.querySelector("body");
const scriptEl = document.querySelector("script");

bodyEl.addEventListener("mousemove", (event) => {
	const xC = event.offsetX;
	const yC = event.offsetY;
	if (xC % 2 === 0 || yC % 2 === 0) {
		const spanEl = document.createElement("span");
		spanEl.style.left = xC / 10 + "rem";
		spanEl.style.top = yC / 10 + "rem";
		const size = Math.floor(Math.random() * 12);
		spanEl.style.width = size + "rem";
		spanEl.style.height = size + "rem";
		bodyEl.insertBefore(spanEl, scriptEl);
		setTimeout(() => {
			spanEl.remove();
		}, 6000);
	}
});
