const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const radius = 20;

let x = radius;
let y = radius;
let dx = 2; // reduced
let dy = 2; // reduced

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `hsl(${x}, 100%, 50%)`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    x += dx;
    y += dy;
    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
    }
    requestAnimationFrame(draw);
}

document.addEventListener('DOMContentLoaded', draw);