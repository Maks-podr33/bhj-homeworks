let tabs = document.querySelectorAll('.tab');
let tab__contents = document.querySelectorAll('.tab__content');

document.addEventListener('click', navigation);

function navigation(event) {
	if (event.target.className.includes('tab')) {
		let indexSelectedTab = Array.from(tabs).indexOf(event.target);
		if (indexSelectedTab !== -1) {
			tabs.forEach(item => item.classList.remove('tab_active'));
			tab__contents.forEach(item => item.classList.remove('tab__content_active'));
			tabs[indexSelectedTab].classList.add('tab_active');
			tab__contents[indexSelectedTab].classList.add('tab__content_active');
		}
	}
}