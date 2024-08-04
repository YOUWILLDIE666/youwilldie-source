sigmas = ["https://media1.tenor.com/m/NeYLaiQPbpAAAAAd","https://media1.tenor.com/m/8nZXTDzCQjYAAAAd"]

function random(max) {
  return Math.floor(Math.random() * max);
}

function i() {
  const index = random(sigmas.length);
  const img = sigmas[index];
  return img;
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("domcl successfully")
  const imgElement = document.getElementById('ph');
  imgElement.src = i();
});
