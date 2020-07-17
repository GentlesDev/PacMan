// const canvas = document.querySelector('.game-map');
// const context = canvas.getContext('2d');
// const hitCanvas = document.createElement('canvas');
// const hitCtx = hitCanvas.getContext('2d');

// (function () {
//     window.addEventListener('resize', resizeCanvas, false);

//     function resizeCanvas() {
//         canvas.width = '500';
//         canvas.height = '250';
//         hitCanvas.width = '500';
//         hitCanvas.height = '250';
//         //drawBorders();
//         return canvas.width, canvas.height, hitCanvas.width, hitCanvas.height;
//     }
//     resizeCanvas();
//     // console.log((2 / 3) * canvas.width + (1 / 4) * canvas.width);
//     // drawStuff(0, 0, ((1 / 3) * canvas.width), ((1 / 32) * canvas.height));
// })();
// // console.log(canvas);
// // console.log(context);


// const rectangles = [
//     {},
//     //TOP LEFT (DIRECTION RIGHT)
//     {
//         id: 0, x: 0, y: 0, width: ((2 / 3) * canvas.width), height: 10
//     },
//     //TOP RIGHT (DIRECTION LEFT)
//     {
//         id: 1, x: canvas.width, y: 0, width: (-(1 / 4) * canvas.width), height: 10
//     },
//     //TOP LEFT (DIRECTION BOTTOM)
//     {
//         id: 2, x: 0, y: 0, width: 10, height: (1 / 4) * canvas.height
//     },
//     //BOTTOM LEFT (DIRECTION TOP)
//     {
//         id: 3, x: 0, y: canvas.height, width: 10, height: -(1 / 2) * canvas.height
//     },
//     //BOTTOM LEFT (DIRECTION RIGHT)
//     {
//         id: 4, x: 0, y: canvas.height - 10, width: ((2 / 3) * canvas.width), height: 10
//     },
//     //BOTTOM RIGHT (DIRECTION LEFT)
//     {
//         id: 5, x: canvas.width, y: canvas.height - 10, width: (-(1 / 4) * canvas.width), height: 10
//     },
//     //TOP RIGHT (DIRECTION BOTTOM)
//     {
//         id: 6, x: canvas.width - 10, y: 0, width: 10, height: (1 / 4) * canvas.height
//     },
//     //BOTTOM RIGHT (DIRECTION BOTTOM)
//     {
//         id: 7, x: canvas.width - 10, y: canvas.height, width: 10, height: -(1 / 2) * canvas.height
//     }
// ];


// rectangles.forEach(rectangle => {
//     context.beginPath();
//     context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
//     context.fillStyle = 'yellow';
//     context.fill();

//     hitCtx.beginPath();
//     hitCtx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
//     hitCtx.fillStyle = 'yellow';
//     hitCtx.fill();
// });

// function drawBorders() {

//     rectangles.forEach(rectangle => {
//         context.beginPath();
//         context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
//         context.fillStyle = 'yellow';
//         context.fill();

//         hitCtx.beginPath();
//         hitCtx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
//         hitCtx.fillStyle = 'yellow';
//         hitCtx.fill();
//     });
// }


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
    ctx.fillStyle = '#050a31';
    ctx.fill();
    // ctx.lineWidth = "5";
    // ctx.strokeStyle = "red";
    // ctx.stroke();
    ctx.stroke();
}

// function drawGentles() {

//     //                   x    y  l   h   r
//     rectArrondi(context, -(canvas.width - (canvas.width * 8)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(context, -(canvas.width - (canvas.width * 19.1)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(context, -(canvas.width - (canvas.width * 30.2)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);


//     rectArrondi(context, -(canvas.width - (canvas.width * 12)) / 100, -(canvas.height - (canvas.height * 28.6)) / 100, (canvas.width - (canvas.width * 2.6)) / 100, -(canvas.height - (canvas.height * 42.69)) / 100, 10);


//     rectArrondi(context, -(canvas.width - (canvas.width * 8)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(context, -(canvas.width - (canvas.width * 19.1)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(context, -(canvas.width - (canvas.width * 30.2)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);

//     rectArrondi(context, -(canvas.width - (canvas.width * 26.66)) / 100, (canvas.height / 2) + (canvas.height - (canvas.height * 7.47)) / 100, -(canvas.width - (canvas.width * 17.19)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);

//     rectArrondi(context, -(canvas.width - (canvas.width * 40.198)) / 100, (canvas.height / 2) - (canvas.height - (canvas.height * 5)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, -(canvas.height - (canvas.height * 23.27)) / 100, 10);





//     rectArrondi(context, -(canvas.width - (canvas.width * 53)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(context, -(canvas.width - (canvas.width * 65)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(context, -(canvas.width - (canvas.width * 77)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);

//     rectArrondi(context, -(canvas.width - (canvas.width * 86)) / 100, -(canvas.height - (canvas.height * 28.6)) / 100, -(canvas.width - (canvas.width * 4)) / 100, -(canvas.height - (canvas.height * 42.69)) / 100, 10);


//     rectArrondi(context, -(canvas.width - (canvas.width * 60)) / 100, -(canvas.height - (canvas.height * 28.6)) / 100, (canvas.width - (canvas.width * 4)) / 100, -(canvas.height - (canvas.height * 19.21)) / 100, 10);
//     rectArrondi(context, -(canvas.width - (canvas.width * 60)) / 100, -(canvas.height - (canvas.height * 50)) / 100, (canvas.width - (canvas.width * 4)) / 100, -(canvas.height - (canvas.height * 19.21)) / 100, 10);


//     rectArrondi(context, -(canvas.width - (canvas.width * 53)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(context, -(canvas.width - (canvas.width * 65)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(context, -(canvas.width - (canvas.width * 77)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);




//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 8)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 19.1)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 30.2)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);


//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 12)) / 100, -(canvas.height - (canvas.height * 28.6)) / 100, (canvas.width - (canvas.width * 2.6)) / 100, -(canvas.height - (canvas.height * 42.69)) / 100, 10);


//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 8)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 19.1)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 30.2)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);

//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 26.66)) / 100, (canvas.height / 2) + (canvas.height - (canvas.height * 7.47)) / 100, -(canvas.width - (canvas.width * 17.19)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);

//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 40.198)) / 100, (canvas.height / 2) - (canvas.height - (canvas.height * 5)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, -(canvas.height - (canvas.height * 23.27)) / 100, 10);





//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 53)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 65)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 77)) / 100, -(canvas.height - (canvas.height * 18.68)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);

//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 86)) / 100, -(canvas.height - (canvas.height * 28.6)) / 100, -(canvas.width - (canvas.width * 4)) / 100, -(canvas.height - (canvas.height * 42.69)) / 100, 10);


//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 60)) / 100, -(canvas.height - (canvas.height * 28.6)) / 100, (canvas.width - (canvas.width * 4)) / 100, -(canvas.height - (canvas.height * 19.21)) / 100, 10);
//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 60)) / 100, -(canvas.height - (canvas.height * 50)) / 100, (canvas.width - (canvas.width * 4)) / 100, -(canvas.height - (canvas.height * 19.21)) / 100, 10);


//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 53)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 65)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);
//     rectArrondi(hitCtx, -(canvas.width - (canvas.width * 77)) / 100, -(canvas.height - (canvas.height * 73)) / 100, -(canvas.width - (canvas.width * 7.81)) / 100, -(canvas.height - (canvas.height * 7.47)) / 100, 10);

//     for (let i = 0; i < 23; i++) {
//         for (let y = 0; y < 10; y++) {
//             const pixel = hitCtx.getImageData(25 + i * 20, 35 + y * 20, 4, 4).data;
//             if (pixel[0] == 255) {
//                 //console.log('nope');
//             } else {
//                 context.fillStyle = 'white';
//                 context.fillRect(25 + i * 20, 35 + y * 20, 4, 4);
//             }
//         }
//     }

// }

(function () {
    let food = 123;
    let power = 15;
    let tileW = 40, tileH = 40;
    let mapW = 19, mapH = 12;
    let playerCol = 7;
    let playerRow = 7;
    let opponentCol = 6;
    let opponentRow = 14;
    let tileSize = 43;
    let step = 5;
    let playerXSpeed = 0;
    let playerYSpeed = 0;
    let opponentXSpeed = 0;
    let opponentYSpeed = 0;
    let leftPressed = false;
    let rightPressed = false;
    let upPressed = false;
    let downPressed = false;
    let playerPoints = 0;
    let opponentPoints = 0;

    let canvas = document.querySelector('.game-map');
    let ctx = null;
    ctx = document.querySelector('.game-map').getContext("2d");
    ctx.font = "bold 10pt sans-serif";
    let currentSecond = 0, frameCount = 0, framesLastSecond = 0;
    let gameMap = [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2],
        [2, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 2],
        [2, 3, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 2],
        [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 2],
        [2, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 2],
        [0, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 0],
        [0, 3, 1, 3, 3, 3, 1, 1, 1, 3, 3, 1, 3, 3, 0, 3, 1, 3, 0],
        [2, 3, 1, 3, 3, 3, 3, 0, 1, 3, 3, 1, 3, 3, 3, 3, 1, 3, 2],
        [2, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 2],
        [2, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 3, 3, 2],
        [2, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2]
    ];

    let playerX = playerRow * tileSize;
    let playerY = playerCol * tileSize;

    let opponentX = opponentRow * tileSize;
    let opponentY = opponentCol * tileSize;

    canvas.width = mapW * tileW;
    canvas.height = mapH * tileH;

    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 39:
                rightPressed = true;

                leftPressed = false;
                upPressed = false;
                downPressed = false;
                break;
            case 37:
                leftPressed = true;

                rightPressed = false;
                upPressed = false;
                downPressed = false;
                break;
            case 38:
                upPressed = true;

                leftPressed = false;
                rightPressed = false;
                downPressed = false;
                break;
            case 40:
                downPressed = true;

                leftPressed = false;
                upPressed = false;
                rightPressed = false;
                break;
        }
    }, false);

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
        ctx.fillStyle = '#050a31';
        ctx.fill();
        ctx.stroke();
    }


    function drawGame() {
        if (ctx == null) {
            return;
        }

        var sec = Math.floor(Date.now() / 1000);
        if (sec != currentSecond) {
            currentSecond = sec;
            framesLastSecond = frameCount;
            frameCount = 1;
        }
        else {
            frameCount++;
        }

        for (var y = 0; y < mapH; ++y) {
            for (var x = 0; x < mapW; ++x) {
                switch (gameMap[y][x]) {
                    case 0:
                        ctx.fillStyle = "black";
                        ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
                        break;
                    case 1:
                        ctx.fillStyle = "#050a31";
                        rectArrondi(ctx, x * tileW, y * tileH, tileW, tileH, 10);
                        break;
                    case 2:
                        ctx.fillStyle = "#050a31";
                        rectArrondi(ctx, x * tileW, y * tileH, tileW, tileH, 10);
                        //ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
                        break;
                    case 3:
                        ctx.fillStyle = "white";
                        ctx.fillRect(x * tileW + 20, y * tileH + 20, 5, 5);
                        break;
                    case 6:
                        ctx.fillStyle = "white";
                        ctx.fillRect(x * tileW + 15, y * tileH + 15, 10, 10);
                        break;
                }

            }
        }
        //console.log(gameMap);
        ctx.beginPath();
        ctx.fillStyle = 'yellow';
        ctx.arc(playerX, playerY, power, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(opponentX, opponentY, 15, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "#ff0000";
        ctx.fillText("FPS: " + framesLastSecond, 10, 20);

        ctx.fillStyle = "#ff0000";
        ctx.fillText("Player Points: " + playerPoints, 10, 470);

        ctx.fillStyle = "#ff0000";
        ctx.fillText("Opponent Point: " + opponentPoints, 650, 470);
    }

    window.requestAnimFrame = (function (callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    function updateGame() {
        playerXSpeed = 0;
        playerYSpeed = 0;

        opponentXSpeed = 0;
        opponentYSpeed = 0;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (playerX < 0) {
            playerX = canvas.width;
        }
        if (playerX > canvas.width) {
            playerX = 0;
        }
        if (playerY < 0) {
            playerY = canvas.height;
        }
        if (playerY > canvas.height) {
            playerY = 0;
        }

        if (opponentX < 0) {
            opponentX = canvas.width;
        }
        if (opponentX > canvas.width) {
            opponentX = 0;
        }
        if (opponentY < 0) {
            opponentY = canvas.height;
        }
        if (opponentY > canvas.height) {
            opponentY = 0;
        }

        if (rightPressed) {
            if (Math.round(playerX / 43) + 1 > gameMap[0].length) {
                playerXSpeed = step;
            } else {
                if (test(gameMap, Math.round(playerY / 43), Math.round(playerX / 43) + 1)) {
                    rightPressed = false;
                } else {
                    playerXSpeed = step;
                }
            }
        }
        else {
            if (leftPressed) {
                if (Math.round(playerX / 43) - 1 < 0) {
                    playerXSpeed = -step;
                } else {
                    if (test(gameMap, Math.round(playerY / 43), Math.round(playerX / 43) - 1)) {
                        leftPressed = false
                    } else {
                        playerXSpeed = -step;
                    }
                }
            }
            else {
                if (upPressed) {
                    if (Math.round(playerY / 43) - 1 < 0) {
                        playerYSpeed = -step;
                    } else {
                        if (test(gameMap, Math.round(playerY / 43) - 1, Math.round(playerX / 43))) {
                            upPressed = false
                        } else {
                            playerYSpeed = -step;
                        }
                    }
                }
                else {
                    if (downPressed) {
                        if (Math.round(playerY / 43) + 1 > gameMap.length - 1) {
                            playerYSpeed = step
                        } else {
                            if (test(gameMap, Math.round(playerY / 43) + 1, Math.round(playerX / 43))) {
                                downPressed = false
                            } else {
                                playerYSpeed = step
                            }
                        }
                    }
                }
            }
        }
        if (Math.round(opponentX / 43) + 1 > gameMap[0].length) {
            opponentXSpeed = step;
        } else {
            if (test(gameMap, Math.round(opponentY / 43), Math.round(opponentX / 43) + 1)) {
                opponentXSpeed = 0;
                opponentYSpeed = step;
            } else {
                opponentXSpeed = step;
            }
        }
        if (Math.round(opponentX / 43) - 1 < 0) {
            opponentXSpeed = -step;
        } else {
            if (test(gameMap, Math.round(opponentY / 43), Math.round(opponentX / 43) - 1)) {
                opponentXSpeed = 0;
                opponentYSpeed = - step;
            } else {
                opponentXSpeed = -step;
            }
        }
        if (Math.round(opponentY / 43) - 1 < 0) {
            opponentYSpeed = -step;
        } else {
            if (test(gameMap, Math.round(opponentY / 43) - 1, Math.round(opponentX / 43))) {
                opponentYSpeed = 0;
                opponentXSpeed = step;
            } else {
                opponentYSpeed = - step;
            }
        }
        if (Math.round(opponentY / 43) + 1 > gameMap.length - 1) {
            opponentYSpeed = step
        } else {
            if (test(gameMap, Math.round(opponentY / 43) + 1, Math.round(opponentX / 43))) {
                opponentYSpeed = 0;
                opponentXSpeed = -step;
            } else {
                opponentYSpeed = step;
            }
        }


        playerX += playerXSpeed;
        playerY += playerYSpeed;
        opponentX += opponentXSpeed;
        opponentY += opponentYSpeed;

        function test(map, y, x) {
            return map[y][x] == 1 || map[y][x] == 2
            //if (map[y][x] == 1 || map[y][x] == 2) {
            //     console.log('collision');
            // }
        }
        function eatPlayer(map, y, x) {
            if (map[y][x] == 3) {
                //console.log("manger");
                map[y][x] = 0;
                playerPoints += 10;
                food--;
                return food, playerPoints;
            } else if (map[y][x] == 6) {
                map[y][x] = 0;
                playerPoints += 100;
                //step = 10;
                return playerPoints;
            }
        }
        function eatOpponent(map, y, x) {
            if (map[y][x] == 3) {
                //console.log("manger");
                map[y][x] = 0;
                opponentPoints += 10;
                food--;
                return food, opponentPoints;
                //console.log(map);
            } else if (map[y][x] == 6) {
                map[y][x] = 0;
                opponentPoints += 100;
                //step = 10;
                return opponentPoints;
            }
        }

        eatPlayer(gameMap, Math.round(playerY / 43), Math.round(playerX / 43));
        eatOpponent(gameMap, Math.round(opponentY / 43), Math.round(opponentX / 43));
        console.log(food);
        if (food == 0) {
            step = 0;
            opponentYSpeed = 0;
            opponentXSpeed = 0;
            playerXSpeed = 0;
            playerYSpeed = 0;
            upPressed = false;
            leftPressed = false;
            rightPressed = false;
            downPressed = false;
            if (playerPoints > opponentPoints) {
                alert('YOU WIN !');
            } else if (playerPoints < opponentPoints) {
                alert('YOU LOOSE (LOSER) !');
            } else {
                alert('DRAW !')
            }
        }


        drawGame();
        //test(gameMap, Math.round(playerY / 43), Math.round(playerX / 43));
        //console.log(gameMap.length);
        //console.log(gameMap[-1][4]);

        //console.log("x:" + playerXSpeed, "y:" + playerY);
        //console.log("x:" + tileX, "y:" + tileY);
        requestAnimFrame(function () {
            updateGame();
        });

    }
    updateGame();
})();