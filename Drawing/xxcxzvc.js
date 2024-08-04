document.addEventListener('DOMContentLoaded', () => { // added
    const canvas = document.getElementById('drawing');
    if (!canvas) {
        console.error('DEATH');
        return;
    }
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    let drawing = false;
    let isEmpty = true;
    let actions = [];
    let undone = [];
    let highest = 1; // z-index

    canvas.addEventListener('mousedown', () => {
        drawing = true;
        ctx.beginPath();
    });

    canvas.addEventListener('mouseup', () => {
        drawing = false;
        actions.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        undone = [];
    });

    canvas.addEventListener('mousemove', (event) => {
        if (!drawing) return;
        isEmpty = false;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    });

    const saveb = document.getElementById('save');
    saveb.addEventListener('click', () => {
        if (isEmpty) {
            err("D-De canvas a-awe empty... P-Pwease dwaw somedin' befowe savin', t-thank you p-pookie w-wookie~ >w<");
        } else {
            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'MUGEN.png';
            link.click();
        }
    });

    const clrb = document.getElementById('clear');
    clrb.addEventListener('click', () => {
        actions.push({ type: 'clear', imageData: ctx.getImageData(0, 0, canvas.width, canvas.height) });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isEmpty = true;
        undone = [];
    });

    const helpb = document.getElementById('help');
    helpb.addEventListener('click', () => {
        showHelp();
    });

    function err(message) {
        const popup = document.createElement('div');
        popup.className = 'error-popup';
        popup.textContent = message;

        const clsb = document.createElement('span');
        clsb.className = 'close-button';
        clsb.textContent = 'x';
        clsb.addEventListener('click', () => {
            document.body.removeChild(popup);
        });

        popup.appendChild(clsb);
        document.body.appendChild(popup);

        setZIndex(popup);

        popup.style.left = '50%';
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.backgroundColor = '#f8d7da';
        popup.style.color = '#721c24';
        popup.style.border = '1px solid #f5c6cb';

        let isDragging = false;
        let offsetX, offsetY;

        popup.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - popup.offsetLeft;
            offsetY = e.clientY - popup.offsetTop;
            setZIndex(popup);
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                popup.style.left = `${e.clientX - offsetX}px`;
                popup.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    function showHelp() {
        const helpmsg = `
            <h2>Help</h2>
            <p>Use the mouse to draw on the canvas.</p>
            <p>Click "Save" to save your drawing as an image.</p>
            <p>Click "Clear" to clear the canvas.</p>
            <p>Press CTRL+Z to undo the last action (BUGGY).</p>
            <p>Press CTRL+X to redo the last undone action (BUGGY).</p>
        `;

        const popup = document.createElement('div');
        popup.className = 'help-popup';
        popup.innerHTML = helpmsg;

        const clsb = document.createElement('span');
        clsb.className = 'close-button';
        clsb.textContent = 'x';
        clsb.addEventListener('click', () => {
            document.body.removeChild(popup);
        });

        popup.appendChild(clsb);
        document.body.appendChild(popup);

        setZIndex(popup);

        popup.style.left = '50%';
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.backgroundColor = '#d1ecf1';
        popup.style.color = '#0c5460';
        popup.style.border = '1px solid #bee5eb';

        let isDragging = false;
        let offsetX, offsetY;

        popup.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - popup.offsetLeft;
            offsetY = e.clientY - popup.offsetTop;
            setZIndex(popup);
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                popup.style.left = `${e.clientX - offsetX}px`;
                popup.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    function setZIndex(popup) {
        highest++;
        popup.style.zIndex = highest;
    }

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'z') {
            undo();
        } else if (e.ctrlKey && e.key === 'x') {
            redo();
        }
    });

    function undo() {
        if (actions.length > 0) {
            const lAction = actions.pop();
            undone.push(lAction);
            if (lAction.type === 'clear') {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                isEmpty = true;
            } else if (lAction instanceof ImageData) {
                if (actions.length > 0) {
                    const pAction = actions[actions.length - 1];
                    if (pAction instanceof ImageData) {
                        ctx.putImageData(pAction, 0, 0);
                        isEmpty = false;
                    } else if (pAction.type === 'clear') {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        isEmpty = true;
                    }
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    isEmpty = true;
                }
            }
        }
    } // bro like what ?
    
    function redo() {
        if (undone.length > 0) {
            const luAction = undone.pop();
            actions.push(luAction);
            if (luAction.type === 'clear') {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                isEmpty = true;
            } else if (luAction instanceof ImageData) {
                ctx.putImageData(luAction, 0, 0);
                isEmpty = false;
            }
        }
    }
});
