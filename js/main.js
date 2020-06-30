context.beginPath();
context.fillStyle = 'yellow';
context.arc(20, 100, 15, 0, 2 * Math.PI);
context.fill();
$(document).on('keyup', (key) => {
    clearInterval(slider);
    if (key.keyCode === 39) {
        right();
    } else if (key.keyCode === 37) {
        left();
    } else if (key.keyCode === 38) {
        up();
    } else if (key.keyCode === 40) {
        down();
    }
})