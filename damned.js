const PI = 3.141592653589793238;

function loop(e) {
    setTimeout(() => {
        var y = Math.floor(Math.random() / PI * 25) + "px " + Math.floor(Math.random() ** PI + 5) / 1.5 + "px " + `#${Math.floor(Math.random() * 0x900000).toString(16).padStart(6, '0')}`
        e.style.textShadow = y.toString();
        e.style.opacity = Math.floor(Math.random() * 1000) + "%";
        loop(e);
    }, 35);
}

document.querySelectorAll("#void").forEach((e) => {
    loop(e);
});

/*
// in case if id....args.....
document.querySelectorAll(".void").forEach((e) => {
    loop(e);
});*/
