let canvas = document.querySelector('.game-map');
let context = canvas.getContext('2d');

(function () {
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawStuff();
        return canvas.width, canvas.height;
    }
    resizeCanvas();

    function drawStuff() {
    }
})();