var startTime = 0;
var timeLeft = 1;
var running = false;

const initialFlashRadius = 5;
const endFlashRadius = 60;
const initialFlashOpacity = 0.5;

function tickClock() {
    let progress = Math.min(1, (Date.now() - startTime) / timeLeft);

    let hand = document.getElementById('clockhand');
    let flash = document.getElementById('flash');

    if (hand && flash) {
        hand.setAttribute('transform', `rotate(${360 * progress} 50 50)`);
        let radius = initialFlashRadius + (endFlashRadius - initialFlashRadius) * progress;
        flash.setAttribute('rx', radius);
        flash.setAttribute('ry', radius);
        flash.style.opacity = initialFlashOpacity - (progress * initialFlashOpacity);
    }

    requestAnimationFrame(tickClock);
}

export default function clockCycle(newStartTime=startTime, newTimeLeft=timeLeft) {
    startTime = newStartTime;
    timeLeft = newTimeLeft;

    if (!running) {
        tickClock();
        running = true;
    }
}