function loop(e) {
    setTimeout(() => {
        let y = Math.floor(Math.random() / Math.PI * 25) + "px " + Math.floor(Math.random() ** Math.PI + 5) / 1.5 + "px " + `#${Math.floor(Math.random() * 0x900000).toString(16).padStart(6, '0')}`
        e.style.textShadow = y.toString();
        e.style.opacity = Math.floor(Math.random() * 1000) + "%";
        loop(e);
    }, 35);
}

document.querySelectorAll("#void").forEach((e) => { loop(e); });
