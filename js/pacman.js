// let move1 = 166;
// let move3 = 166;
// let move2 = 156;
// let move4 = 156;
// let slider;
// let limit;
// let reduce1;
// let mouthMove1;
// let step1;
// let step2;
// let reduce2;
// let mouthMove2;

// function right() {
//     limit = 0;
//     reduce1 = 0.5;
//     mouthMove1 = 0.5;
//     step1 = 0.1;
//     step2 = 0.1;
//     reduce2 = -0.5;
//     mouthMove2 = -0.5;
//     slider = setInterval(() => {
//         const pixel = hitCtx.getImageData(move1 + 30, move2, 100, 100).data;
//         //console.log(pixel);
//         if (pixel[0] == 255) {
//             //clearInterval(slider);
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             drawBorders();
//             drawGentles();
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.round(mouthMove1 * 10) / 10);
//             context.arc(move1, move2, 10, (Math.round(mouthMove1 * 10) / 10), Math.PI);
//             mouthMove1 -= step1;
//             if (Math.round(mouthMove1 * 10) / 10 === reduce1 || Math.round(mouthMove1 * 10) / 10 === limit) {
//                 step1 = -step1;
//                 //console.log('aug');
//                 //console.log(Math.round(mouthMove1 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.round(mouthMove1 * 10) / 10);
//                 context.arc(move1, move2, 10, (Math.round(mouthMove1 * 10) / 10), Math.PI);
//             }
//             //console.log(move1, move2);

//             context.fill();


//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.round(mouthMove2 * 10) / 10);
//             context.arc(move3, move4, 10, Math.PI, (Math.round(mouthMove2 * 10) / 10));
//             mouthMove2 += step2;
//             if (Math.round(mouthMove2 * 10) / 10 === reduce2 || Math.round(mouthMove2 * 10) / 10 === limit) {
//                 step2 = -step2;
//                 //console.log('aug');
//                 //console.log(Math.round(mouthMove2 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.round(mouthMove2 * 10) / 10);
//                 context.arc(move3, move4, 10, Math.PI, (Math.round(mouthMove2 * 10) / 10));
//             }
//             context.fill();
//             return move1, move2, move3, move4;
//         } else {
//             if (move1 > canvas.width || move3 > canvas.width) {
//                 move1 = -10;
//                 move3 = -10;
//             }
//             //console.log(move1, move3);
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             drawBorders();
//             drawGentles();
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.round(mouthMove1 * 10) / 10);
//             context.arc(move1 += 10, move2, 10, (Math.round(mouthMove1 * 10) / 10), Math.PI);
//             mouthMove1 -= step1;
//             if (Math.round(mouthMove1 * 10) / 10 === reduce1 || Math.round(mouthMove1 * 10) / 10 === limit) {
//                 step1 = -step1;
//                 //console.log('aug');
//                 //console.log(Math.round(mouthMove1 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.round(mouthMove1 * 10) / 10);
//                 context.arc(move1 += 10, move2, 10, (Math.round(mouthMove1 * 10) / 10), Math.PI);
//             }
//             //console.log(move1, move2);

//             context.fill();


//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.round(mouthMove2 * 10) / 10);
//             context.arc(move3 += 10, move4, 10, Math.PI, (Math.round(mouthMove2 * 10) / 10));
//             mouthMove2 += step2;
//             if (Math.round(mouthMove2 * 10) / 10 === reduce2 || Math.round(mouthMove2 * 10) / 10 === limit) {
//                 step2 = -step2;
//                 //console.log('aug');
//                 //console.log(Math.round(mouthMove2 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.round(mouthMove2 * 10) / 10);
//                 context.arc(move3 += 10, move4, 10, Math.PI, (Math.round(mouthMove2 * 10) / 10));
//             }
//             context.fill();
//         }
//         return move1, move2, move3, move4;
//     }, 50)
// }

// function left() {
//     limit = Math.PI;
//     reduce1 = 2.60;
//     mouthMove1 = 2.60;
//     mouthMove2 = -2.60;
//     reduce2 = -2.60;
//     step1 = 0.1;
//     step2 = 0.1;
//     slider = setInterval(() => {
//         const pixel = hitCtx.getImageData(move1 - 30, move2, 1, 1).data;
//         //console.log(pixel);
//         if (pixel[0] == 255) {
//             //console.log('tomare');
//             // clearInterval(slider);
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             drawBorders();
//             drawGentles();
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.round(mouthMove1 * 10) / 10);
//             context.arc(move1, move2, 10, (Math.floor(mouthMove1 * 10) / 10), 0, true);
//             mouthMove1 += step1;
//             if (Math.floor(mouthMove1 * 10) / 10 === Math.floor(reduce1 * 10) / 10 || Math.floor(mouthMove1 * 10) / 10 === Math.floor(limit * 10) / 10) {
//                 step1 = -step1;
//                 //console.log('aug');
//                 //console.log('aug' + Math.floor(mouthMove1 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.arc(move1, move2, 10, (Math.floor(mouthMove1 * 10) / 10), 0, true);
//             }
//             context.fill();

//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.floor(mouthMove2 * 10) / 10);
//             context.arc(move3, move4, 10, 0, (Math.floor(mouthMove2 * 10) / 10), true);
//             mouthMove2 -= step2;
//             if (Math.floor(mouthMove2 * 10) / 10 === Math.floor(reduce2 * 10) / 10 || Math.floor(mouthMove2 * 10) / 10 === Math.floor(-limit * 10) / 10) {
//                 step2 = -step2;
//                 //console.log('aug');
//                 //console.log('aug' + Math.floor(mouthMove2 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.arc(move3, move4, 10, 0, (Math.floor(mouthMove2 * 10) / 10), true);
//             }
//             context.fill();
//             return move1, move2, move3, move4;
//         } else {
//             if (move1 < 0) {
//                 move1 = canvas.width + 10;
//                 move3 = canvas.width + 10;
//             }
//             //console.log(move1, move3);

//             context.clearRect(0, 0, canvas.width, canvas.height);
//             drawBorders();
//             drawGentles();
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.round(mouthMove1 * 10) / 10);
//             context.arc(move1 -= 10, move2, 10, (Math.floor(mouthMove1 * 10) / 10), 0, true);
//             mouthMove1 += step1;
//             if (Math.floor(mouthMove1 * 10) / 10 === Math.floor(reduce1 * 10) / 10 || Math.floor(mouthMove1 * 10) / 10 === Math.floor(limit * 10) / 10) {
//                 step1 = -step1;
//                 //console.log('aug');
//                 //console.log('aug' + Math.floor(mouthMove1 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.arc(move1 -= 10, move2, 10, (Math.floor(mouthMove1 * 10) / 10), 0, true);
//             }
//             context.fill();

//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.floor(mouthMove2 * 10) / 10);
//             context.arc(move3 -= 10, move4, 10, 0, (Math.floor(mouthMove2 * 10) / 10), true);
//             mouthMove2 -= step2;
//             if (Math.floor(mouthMove2 * 10) / 10 === Math.floor(reduce2 * 10) / 10 || Math.floor(mouthMove2 * 10) / 10 === Math.floor(-limit * 10) / 10) {
//                 step2 = -step2;
//                 //console.log('aug');
//                 //console.log('aug' + Math.floor(mouthMove2 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.arc(move3 -= 10, move4, 10, 0, (Math.floor(mouthMove2 * 10) / 10), true);
//             }
//             context.fill();
//         }
//         return move1, move2, move3, move4;

//     }, 50)
// }

// function up() {
//     limit = -Math.PI / 2;
//     reduce1 = -2 * Math.PI / 3;
//     mouthMove1 = -2 * Math.PI / 3;
//     step1 = 0.1;
//     step2 = 0.1;
//     reduce2 = - Math.PI / 3;
//     mouthMove2 = - Math.PI / 3;
//     slider = setInterval(() => {
//         const pixel = hitCtx.getImageData(move1, move2 - 30, 1, 1).data;
//         //console.log(pixel);
//         if (pixel[0] == 255) {
//             //console.log('tomare');
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             drawBorders();
//             drawGentles();
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.round(mouthMove1 * 10) / 10);
//             context.arc(move1, move2, 10, Math.PI / 2, Math.floor(mouthMove1 * 10) / 10);
//             mouthMove1 += step1;
//             if (Math.floor(mouthMove1 * 10) / 10 === Math.floor(reduce1 * 10) / 10 || Math.floor(mouthMove1 * 10) / 10 === Math.floor(limit * 10) / 10) {
//                 step1 = -step1;
//                 //console.log('aug');
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.arc(move1, move2, 10, Math.PI / 2, Math.floor(mouthMove1 * 10) / 10);
//             }
//             context.fill();

//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.floor(mouthMove2 * 10) / 10);
//             context.arc(move3, move4, 10, Math.PI / 2, Math.floor(mouthMove2 * 10) / 10, true);
//             mouthMove2 -= step2;
//             if (Math.floor(mouthMove2 * 10) / 10 === (Math.floor(reduce2 * 10) / 10) || Math.floor(mouthMove2 * 10) / 10 === (Math.floor(limit * 10) / 10)) {
//                 step2 = -step2;
//                 //console.log('aug');
//                 //console.log('aug' + Math.floor(mouthMove2 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove2 * 10) / 10);
//                 context.arc(move3, move4, 10, Math.PI / 2, Math.floor(mouthMove2 * 10) / 10, true);
//             }
//             context.fill();
//             return move1, move2, move3, move4;
//         }

//         //clearInterval(slider);
//         else {
//             //console.log('bas');
//             //console.log(move2);
//             if (move2 < 0) {
//                 move2 = canvas.height + 10;
//                 move4 = canvas.height + 10;
//             }
//             //console.log(move1, move3);
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             drawBorders();
//             drawGentles();
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.round(mouthMove1 * 10) / 10);
//             context.arc(move1, move2 -= 10, 10, Math.PI / 2, Math.floor(mouthMove1 * 10) / 10);
//             mouthMove1 += step1;
//             if (Math.floor(mouthMove1 * 10) / 10 === Math.floor(reduce1 * 10) / 10 || Math.floor(mouthMove1 * 10) / 10 === Math.floor(limit * 10) / 10) {
//                 step1 = -step1;
//                 //console.log('aug');
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.arc(move1, move2 -= 10, 10, Math.PI / 2, Math.floor(mouthMove1 * 10) / 10);
//             }
//             context.fill();
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.floor(mouthMove2 * 10) / 10);
//             context.arc(move3, move4 -= 10, 10, Math.PI / 2, Math.floor(mouthMove2 * 10) / 10, true);
//             mouthMove2 -= step2;
//             if (Math.floor(mouthMove2 * 10) / 10 === (Math.floor(reduce2 * 10) / 10) || Math.floor(mouthMove2 * 10) / 10 === (Math.floor(limit * 10) / 10)) {
//                 step2 = -step2;
//                 //console.log('aug');
//                 //console.log('aug' + Math.floor(mouthMove2 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove2 * 10) / 10);
//                 context.arc(move3, move4 -= 10, 10, Math.PI / 2, Math.floor(mouthMove2 * 10) / 10, true);
//             }
//             context.fill();
//         }
//         return move1, move2, move3, move4;
//     }, 50)
// }

// function down() {
//     limit = -Math.PI / 2;
//     reduce1 = Math.PI / 3;
//     mouthMove1 = Math.PI / 3;
//     step1 = 0.1;
//     step2 = 0.1;
//     reduce2 = 2 * Math.PI / 3;
//     mouthMove2 = 2 * Math.PI / 3;
//     slider = setInterval(() => {
//         const pixel = hitCtx.getImageData(move1, move2 + 30, 1, 1).data;
//         //console.log(pixel);
//         if (pixel[0] == 255) {
//             //console.log('tomare');
//             //clearInterval(slider);
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             drawBorders();
//             drawGentles();
//             //console.log('bas');
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.floor(mouthMove1 * 10) / 10);
//             context.arc(move1, move2, 10, -Math.PI / 2, Math.floor(mouthMove1 * 10) / 10);
//             mouthMove1 += step1;
//             if (Math.floor(mouthMove1 * 10) / 10 === Math.floor(reduce1 * 10) / 10 || Math.floor(mouthMove1 * 10) / 10 === Math.floor(-limit * 10) / 10) {
//                 step1 = -step1;
//                 //console.log('aug');
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.arc(move1, move2, 10, -Math.PI / 2, Math.floor(mouthMove1 * 10) / 10);
//             }
//             context.fill();
//             //console.log(move2);
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.floor(mouthMove2 * 10) / 10);
//             context.arc(move3, move4, 10, Math.floor(mouthMove2 * 10) / 10, -Math.PI / 2);
//             mouthMove2 -= step2;
//             if (Math.floor(mouthMove2 * 10) / 10 === Math.floor(reduce2 * 10) / 10 || Math.floor(mouthMove2 * 10) / 10 === Math.floor(-limit * 10) / 10) {
//                 step2 = -step2;
//                 //console.log('aug');
//                 //console.log(Math.floor(mouthMove2 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove2 * 10) / 10);
//                 context.arc(move3, move4, 10, Math.floor(mouthMove2 * 10) / 10, -Math.PI / 2);
//             }
//             context.fill();
//             return move1, move2, move3, move4;
//         } else {
//             //console.log(move2);
//             if (move2 > canvas.height) {
//                 move2 = -10;
//                 move4 = -10;
//             }
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             drawBorders();
//             drawGentles();
//             //console.log('bas');
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.floor(mouthMove1 * 10) / 10);
//             context.arc(move1, move2 += 10, 10, -Math.PI / 2, Math.floor(mouthMove1 * 10) / 10);
//             mouthMove1 += step1;
//             if (Math.floor(mouthMove1 * 10) / 10 === Math.floor(reduce1 * 10) / 10 || Math.floor(mouthMove1 * 10) / 10 === Math.floor(-limit * 10) / 10) {
//                 step1 = -step1;
//                 //console.log('aug');
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove1 * 10) / 10);
//                 context.arc(move1, move2 += 10, 10, -Math.PI / 2, Math.floor(mouthMove1 * 10) / 10);
//             }
//             context.fill();
//             //console.log(move2);
//             context.beginPath();
//             context.fillStyle = 'yellow';
//             //console.log(Math.floor(mouthMove2 * 10) / 10);
//             context.arc(move3, move4 += 10, 10, Math.floor(mouthMove2 * 10) / 10, -Math.PI / 2);
//             mouthMove2 -= step2;
//             if (Math.floor(mouthMove2 * 10) / 10 === Math.floor(reduce2 * 10) / 10 || Math.floor(mouthMove2 * 10) / 10 === Math.floor(-limit * 10) / 10) {
//                 step2 = -step2;
//                 //console.log('aug');
//                 //console.log(Math.floor(mouthMove2 * 10) / 10);
//                 context.beginPath();
//                 context.fillStyle = 'yellow';
//                 //console.log(Math.floor(mouthMove2 * 10) / 10);
//                 context.arc(move3, move4 += 10, 10, Math.floor(mouthMove2 * 10) / 10, -Math.PI / 2);
//             }
//             context.fill();
//         }
//         return move1, move2, move3, move4;
//     }, 50)
// }