let popped = 0;

function balloonHandler(e) {
    if (e.target.className === "balloon") {
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        popped++;
        e.target.removeEventListener('mouseover', balloonHandler); // Remove the event listener
        checkAllPopped();
    }
}

document.addEventListener('mouseover', balloonHandler);

function checkAllPopped() {
    if (popped === 25) {
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
}
