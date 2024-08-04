const sigmas = [
    "https://media1.tenor.com/m/NeYLaiQPbpAAAAAd",
    "https://media1.tenor.com/m/8nZXTDzCQjYAAAAd"
];

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded successfully");
    document.getElementById('ph').src = sigmas[Math.floor(Math.random() * sigmas.length)];
});