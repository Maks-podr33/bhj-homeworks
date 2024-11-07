let btnDropdown__value = document.querySelector('.dropdown__value');
let dropdown__list = document.querySelector('.dropdown__list');
let dropdown__items = document.querySelectorAll('a');

btnDropdown__value.addEventListener('click', () => {
	dropdown__list.classList.toggle('dropdown__list_active');
});

for (let dropdown__item of dropdown__items) {
	dropdown__item.addEventListener('click', replaceDropdown);
};

function replaceDropdown (event) {
	event.preventDefault();
	btnDropdown__value.textContent = this.innerText;
	dropdown__list.classList.remove('dropdown__list_active');
};