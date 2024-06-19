// yes
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
let y = 0;
let dx = 20;
let dy = 20;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `hsl(${x}, 100%, 50%)`;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
    x += dx;
    y += dy;
    if (x + 20 > canvas.width || x - 20 < 0) {
        dx = -dx;
    }
    if (y + 20 > canvas.height || y - 20 < 0) {
        dy = -dy;
    }
    requestAnimationFrame(draw);
}

draw();
