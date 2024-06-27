const t = ["tuhmb.png", "haskell2.png", "hell.png"];

function i() {
  const randomIndex = Math.floor(Math.random() * t.length);
  const randomImage = t[randomIndex];
  return `./${randomImage}`;
}

document.addEventListener("DOMContentLoaded", function() {
  const linkElement = document.querySelector('link[rel="icon"]');
  linkElement.href = i();
});
