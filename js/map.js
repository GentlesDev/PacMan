const canvas = document.querySelector('.game-map');
const context = canvas.getContext('2d');
const hitCanvas = document.createElement('canvas');
const hitCtx = hitCanvas.getContext('2d');

(function () {
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        hitCanvas.width = window.innerWidth;
        hitCanvas.height = window.innerHeight;
        //drawBorders();
        return canvas.width, canvas.height, hitCanvas.width, hitCanvas.height;
    }
    resizeCanvas();
    context.font = '48px serif';
    context.strokeStyle = 'yellow';
    context.strokeText('G E N T L E S  D E V', 50, 200);
    // console.log((2 / 3) * canvas.width + (1 / 4) * canvas.width);
    // drawStuff(0, 0, ((1 / 3) * canvas.width), ((1 / 32) * canvas.height));
})();
// console.log(canvas);
// console.log(context);


const rectangles = [
    {},
    //TOP LEFT (DIRECTION RIGHT)
    {
        id: 0, x: 0, y: 0, width: ((2 / 3) * canvas.width), height: 15
        
    },    
    //TOP RIGHT (DIRECTION LEFT)
    {
        id: 1, x: canvas.width, y: 0, width: (-(1 / 4) * canvas.width), height: 15
    },
    //TOP LEFT (DIRECTION BOTTOM)
    {
        id: 2, x: 0, y: 0, width: 15, height: (1 / 4) * canvas.height
    },    
    //BOTTOM LEFT (DIRECTION TOP)
    {
        id: 3, x: 0, y: canvas.height, width: 15 , height: -(1 / 2) * canvas.height
    },    
    //BOTTOM LEFT (DIRECTION RIGHT)
    {
        id: 4, x: 0, y: canvas.height - 15, width: ((2 / 3) * canvas.width), height: 15 
    },    
    //BOTTOM RIGHT (DIRECTION LEFT)
    {
        id: 5, x: canvas.width, y: canvas.height - 15, width: (-(1 / 4) * canvas.width), height: 15
    },    
    //TOP RIGHT (DIRECTION BOTTOM)
    {
        id: 6, x: canvas.width - 15, y: 0, width: 15, height: (1 / 4) * canvas.height
    },    
    //BOTTOM RIGHT (DIRECTION BOTTOM)
    {
        id: 7, x: canvas.width - 15, y: canvas.height, width: 15, height: -(1 / 2) * canvas.height
    }    
];


rectangles.forEach(rectangle => {
    context.beginPath();
    context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fillStyle = 'yellow';
    context.fill();

    hitCtx.beginPath();
    hitCtx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    hitCtx.fillStyle = 'yellow';
    hitCtx.fill();
});

function drawBorders() {

rectangles.forEach(rectangle => {
    context.beginPath();
    context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fillStyle = 'yellow';
    context.fill();

    hitCtx.beginPath();
    hitCtx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    hitCtx.fillStyle = 'yellow';
    hitCtx.fill();
});
}


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
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
}

function drawGentles() {
    
    //                   x    y  l   h   r
    rectArrondi(context, 53, 33, 150, 70, 10);
    rectArrondi(context, 245, 33, 150, 70, 10);
    rectArrondi(context, 435, 33, 150, 70, 10);


    rectArrondi(context, 110, 125, -50, 400, 10);
    
    rectArrondi(context, 53, 565, 150, 70, 10);
    rectArrondi(context, 245, 565, 150, 70, 10);
    rectArrondi(context, 435, 565, 150, 70, 10); 
    
    rectArrondi(context, 435, 300, 330, 70, 10);
    
    rectArrondi(context, 695 , 380, 70, 218, 10);
    
    
    
    
    
    rectArrondi(context, 960, 33, 150, 70, 10);
    rectArrondi(context, 1150, 33, 150, 70, 10);
    rectArrondi(context, 1340, 33, 150, 70, 10);
    
    rectArrondi(context, 1530, 125, 50, 400, 10);
    
    
    rectArrondi(context, 1110, 125, -50, 180, 10);
    rectArrondi(context, 1110, 345, -50, 180, 10);
    
    
    rectArrondi(context, 960, 565, 150, 70, 10);
    rectArrondi(context, 1150, 565, 150, 70, 10);
    rectArrondi(context, 1340, 565, 150, 70, 10); 
    

    
    for (var i = 0; i < canvas.width; i++) {
        context.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < canvas.height; i++) {
        context.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < canvas.height; i++) {
        context.fillRect(51 + i * 16, 99, 4, 4);
    }







    rectArrondi(hitCtx, 53, 33, 150, 70, 10);
    rectArrondi(hitCtx, 245, 33, 150, 70, 10);
    rectArrondi(hitCtx, 435, 33, 150, 70, 10);


    rectArrondi(hitCtx, 53, 125, 50, 400, 10);

    rectArrondi(hitCtx, 53, 565, 150, 70, 10);
    rectArrondi(hitCtx, 245, 565, 150, 70, 10);
    rectArrondi(hitCtx, 435, 565, 150, 70, 10);

    rectArrondi(hitCtx, 435, 300, 330, 70, 10);

    rectArrondi(hitCtx, 695, 380, 70, 218, 10);





    rectArrondi(hitCtx, 960, 33, 150, 70, 10);
    rectArrondi(hitCtx, 1150, 33, 150, 70, 10);
    rectArrondi(hitCtx, 1340, 33, 150, 70, 10);

    rectArrondi(hitCtx, 1530, 125, 50, 400, 10);


    rectArrondi(hitCtx, 1110, 125, -50, 180, 10);
    rectArrondi(hitCtx, 1110, 345, -50, 180, 10);


    rectArrondi(hitCtx, 960, 565, 150, 70, 10);
    rectArrondi(hitCtx, 1150, 565, 150, 70, 10);
    rectArrondi(hitCtx, 1340, 565, 150, 70, 10); 
}

