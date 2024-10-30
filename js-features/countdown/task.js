let currentSeconds = parseInt(document.getElementById('timer').textContent);
let newSeconds = document.getElementById('timer');
let idInterval = setInterval(() => {
    currentSeconds -= 1;
    if (currentSeconds >= 0) {
        newSeconds.textContent = currentSeconds;
    } else {
        clearInterval(idInterval);
    	alert('Вы победили в конкурсе!'); 
    }
}, 1000);