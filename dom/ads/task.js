let rotatorElements = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

setInterval(() => {
    showRotator()
}, rotatorElements[currentIndex].getAttribute('data-speed'));

function showRotator() {
    if (currentIndex <= rotatorElements.length - 1) {
        rotatorElements.forEach(item => item.classList.remove('rotator__case_active'));
        let currentRotator = rotatorElements[currentIndex]
        currentRotator.classList.add('rotator__case_active');
        currentRotator.style.color = currentRotator.getAttribute('data-color');
        currentIndex++;
    } else {
        currentIndex = 0;
    }
};