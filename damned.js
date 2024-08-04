function loop(e) {
    requestAnimationFrame(() => {
        const randomHex = Math.floor(Math.random() * 0x900000).toString(16).padStart(6, '0');
        const textShadow = `${Math.floor(Math.random() / Math.PI * 25)}px ${Math.floor(Math.random() ** Math.PI + 5) / 1.5}px #${randomHex}`;
        e.style.textShadow = textShadow;
        e.style.opacity = `${Math.floor(Math.random() * 100)}%`; // changed to 100 instead of 1000
        loop(e);
    });
}

document.querySelectorAll("#void").forEach((e) => { loop(e); });
