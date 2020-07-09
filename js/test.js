// const canvas = document.querySelector('.game-map');
// const ctx = canvas.getContext('2d');

// const hitCanvas = document.createElement('canvas');
// const hitCtx = hitCanvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// hitCanvas.width = window.innerWidth;
// hitCanvas.height = window.innerHeight;

// const rectangles = [
//     {},
//     //TOP LEFT (DIRECTION RIGHT)
//     {
//         id: '0', x: 0, y: 0, width: ((2 / 3) * canvas.width), height: (15 * canvas.height) / canvas.height
//     },
//     //TOP RIGHT (DIRECTION LEFT)
//     {
//         id: '1', x: canvas.width, y: 0, width: (-(1 / 4) * canvas.width), height: (15 * canvas.height) / canvas.height
//     },
//     //TOP LEFT (DIRECTION BOTTOM)
//     {
//         id: '2', x: 0, y: 0, width: (15 * canvas.width) / canvas.width, height: (1 / 4) * canvas.height
//     },
//     //BOTTOM LEFT (DIRECTION TOP)
//     {
//         id: '3', x: 0, y: canvas.height, width: (15 * canvas.width) / canvas.width, height: -(1 / 2) * canvas.height
//     },
//     //BOTTOM LEFT (DIRECTION RIGHT)
//     {
//         id: '4', x: 0, y: canvas.height - 15, width: ((2 / 3) * canvas.width), height: (15 * canvas.height) / canvas.height
//     },
//     //BOTTOM RIGHT (DIRECTION LEFT)
//     {
//         id: '5', x: canvas.width, y: canvas.height - 15, width: (-(1 / 4) * canvas.width), height: (15 * canvas.height) / canvas.height
//     },
//     //TOP RIGHT (DIRECTION BOTTOM)
//     {
//         id: '6', x: canvas.width - 15, y: 0, width: (15 * canvas.width) / canvas.width, height: (1 / 4) * canvas.height
//     },
//     // BOTTOM RIGHT (DIRECTION BOTTOM)
//     {
//         id: '7', x: canvas.width - 15, y: canvas.height, width: (15 * canvas.width) / canvas.width, height: -(1 / 2) * canvas.height
//     }
// ];

// rectangles.forEach(rectangle => {
//     ctx.beginPath();
//     ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
//     ctx.fillStyle = 'yellow';
//     ctx.fill();

//     hitCtx.beginPath();
//     hitCtx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
//     hitCtx.fillStyle = 'yellow';
//     hitCtx.fill();
// });

// function hasSameColor(color, shape) {
//     return shape.color === color;
// }

// canvas.addEventListener('click', (e) => {
//     const mousePos = {
//         x: e.clientX - canvas.offsetLeft,
//         y: e.clientY - canvas.offsetTop
//     };
//     const pixel = hitCtx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
//     console.log(pixel);

//     // if (shape) {
//     //     alert('click on circle: ' + shape.id);
//     // }
// });
var canevas = document.querySelector('.game-map');
var ctx = canevas.getContext('2d');
function dessiner() {
    var canevas = document.querySelector('.game-map');
    if (canevas.getContext) {
        var ctx = canevas.getContext('2d');











    }
}

// Une fonction utilitaire pour tracer des rectangles avec des coins arrondis

function rectArrondi(ctx, x, y, largeur, hauteur, rayon) {
    ctx.beginPath();
    ctx.moveTo(x, y + rayon);
    ctx.lineTo(x, y + hauteur - rayon);
    ctx.quadraticCurveTo(x, y + hauteur, x + rayon, y + hauteur);
    ctx.lineTo(x + largeur - rayon, y + hauteur);
    ctx.quadraticCurveTo(x + largeur, y + hauteur, x + largeur, y + hauteur - rayon);
    ctx.lineTo(x + largeur, y + rayon);
    ctx.quadraticCurveTo(x + largeur, y, x + largeur - rayon, y);
    ctx.lineTo(x + rayon, y);
    ctx.quadraticCurveTo(x, y, x, y + rayon);
    ctx.stroke();
}
//dessiner();




rectArrondi(ctx, 53, 53, 49, 33, 10);
rectArrondi(ctx, 53, 119, 49, 16, 6);
rectArrondi(ctx, 135, 53, 49, 33, 10);
rectArrondi(ctx, 135, 119, 25, 49, 10);

for (var i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4);
}

for (i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4);
}

for (i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4);
}

ctx.beginPath();
ctx.moveTo(83, 116);
ctx.lineTo(83, 102);
ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
ctx.lineTo(111, 116);
ctx.lineTo(106.333, 111.333);
ctx.lineTo(101.666, 116);
ctx.lineTo(97, 111.333);
ctx.lineTo(92.333, 116);
ctx.lineTo(87.666, 111.333);
ctx.lineTo(83, 116);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(91, 96);
ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
ctx.moveTo(103, 96);
ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
ctx.fill();