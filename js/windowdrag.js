function draggable(elem) {
    const target = elem.querySelector('.titlebar');

    let dragged = false;
    let offsetX = 0;
    let offsetY = 0

    console.log(target)
    target.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.windowbuttons')) {
            return;
        }
        dragged = true;
        const rect = elem.getBoundingClientRect();

        offsetX = e.clientX - rect.x;
        offsetY = e.clientY - rect.y;
        target.setPointerCapture(e.pointerId);
    });
    document.addEventListener('pointermove', (e) => {
        if (!dragged) return;

        elem.style.left = `${e.clientX - offsetX}px`
        elem.style.top = `${e.clientY - offsetY}px`
    });
    document.addEventListener('pointerup', (e) => {
        dragged = false;
        target.releasePointerCapture(e.pointerId);
    });
}
