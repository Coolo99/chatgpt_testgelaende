// Simple placeholder setup for a 10x10 board
// This does not include full game logic yet

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const template = document.getElementById('tile-template');

    for (let i = 0; i < 100; i++) {
        const tile = template.content.firstElementChild.cloneNode(true);
        board.appendChild(tile);
    }

    // Demo icons
    board.children[5].classList.add('mine');
    board.children[10].classList.add('flag');
});
