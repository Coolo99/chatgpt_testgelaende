document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running');
    const calcLink = document.querySelector('a[href="../calculator/index.html"], a[href="../../calculator/index.html"]');
    if (calcLink) {
        calcLink.addEventListener('click', () => {
            console.log('Opening calculator');
        });
    }

    const mineLink = document.querySelector('a[href="../minesweeper/index.html"], a[href="../../minesweeper/index.html"]');
    if (mineLink) {
        mineLink.addEventListener('click', () => {
            console.log('Opening minesweeper');
        });
    }
});
