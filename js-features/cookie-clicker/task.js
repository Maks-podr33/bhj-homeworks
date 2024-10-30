let image = document.getElementById('cookie');
let newClicker__counter = document.getElementById('clicker__counter');

function changeSizeClick() {
	newClicker__counter.textContent++;
	image.width = 250;
	setTimeout(() => image.width = 200, 50);
}

image.onclick = changeSizeClick;