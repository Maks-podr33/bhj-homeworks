let reveals = document.querySelectorAll('.reveal');
setInterval(() => {
	document.addEventListener('scroll', showBlock)
}, 1000);

function showBlock(event) {
	for (let reveal of reveals) {
		let topBlock = reveal.getBoundingClientRect().top;
		topBlock > window.innerHeight ? reveal.classList.remove('reveal_active') : reveal.classList.add('reveal_active');
	}
};