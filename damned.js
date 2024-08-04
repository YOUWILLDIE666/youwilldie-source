function loop(e) {
    requestAnimationFrame(() => {
        const rHex = Math.floor(Math.random() * 0x900000).toString(16).padStart(6, '0');
        const Shadow = `${Math.floor(Math.random() / Math.PI * 25)}px ${Math.floor(Math.random() ** Math.PI + 5) / 1.5}px #${rHex}`;
        e.style.textShadow = Shadow;
        e.style.opacity = `${Math.floor(Math.random() * 100)}%`; // changed to 100 instead of 1000
        loop(e);
    });
}

document.querySelectorAll("#void").forEach((e) => { loop(e); });
