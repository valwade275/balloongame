const TOTAL_BALLOONS = 25;
let popped = 0;

function popBalloon(e) {
    const target = e.target;
    if (target.classList.contains("balloon")) {
        target.style.backgroundColor = "#ededed";
        target.textContent = "POP!";
        popped++;
        target.removeEventListener('mouseover', popBalloon);
        checkAllPopped();
    }
}

document.querySelector('#balloon-gallery').addEventListener('mouseover', popBalloon);

function checkAllPopped() {
    if (popped === TOTAL_BALLOONS) {
        console.log('all popped!');
        const gallery = document.querySelector('#balloon-gallery');
        const message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
}
