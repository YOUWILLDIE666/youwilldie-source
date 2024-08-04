const images = ["tuhmb.png", "haskell2.png", "hell.png"];

document.addEventListener("DOMContentLoaded", () => {
    const linkElement = document.querySelector('link[rel="icon"]');
    linkElement.href = `./${images[Math.floor(Math.random() * images.length)]}`;
});