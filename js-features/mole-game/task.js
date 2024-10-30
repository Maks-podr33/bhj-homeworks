let dead__counter = document.getElementById('dead');
let lost__counter = document.getElementById('lost');

for (let index = 1; index <= 9; index += 1) {
	let clickHole = document.getElementById(`hole${index}`)
	clickHole.onclick = function() {
		if (clickHole.className.includes('hole_has-mole')) {
			dead__counter.textContent++;
			if (dead__counter.textContent == '10') {
				alert('Вы победили!');
				location.reload();
			}
		} else {
			lost__counter.textContent++;
			if (lost__counter.textContent == '5') {
				alert('Вы проиграли!');
				location.reload();
			}
		}
	}
}