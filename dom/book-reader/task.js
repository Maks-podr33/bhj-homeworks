let fontBtns = Array.from(document.querySelector('.book__control').children);

fontBtns.forEach(fontBtn => {
	fontBtn.addEventListener('click', rotatorFont)
})

function rotatorFont(event) {
	event.preventDefault();
	fontBtns.forEach(item => item.classList.remove('font-size_active'));
	this.classList.add('font-size_active');
	this.closest('.book').classList.remove('book_fs-small')
	this.closest('.book').classList.remove('book_fs-big')
	this.closest('.book').classList.add('book_fs-' + this.getAttribute('data-size'))
}