//drawBorders();
context.beginPath();
context.fillStyle = 'yellow';
context.arc(40, 100, 30, 0, 2 * Math.PI);
context.fill();
$(document).on('keyup', (key) => {
    clearInterval(slider);
    if (key.keyCode === 39) {
        //console.log(move1,move2);
        if (move1 > ((2 / 3) * canvas.width) && move1 < ((2 / 3) * canvas.width + (0.08333 * canvas.width)) && move2 <= 30) {
            //console.log('bloqué');
            
        }
        right();
    } else if (key.keyCode === 37) {
        left();
    } else if (key.keyCode === 38) {
        up();
    } else if (key.keyCode === 40) {
        down();
    }
})

