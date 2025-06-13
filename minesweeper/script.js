
document.addEventListener('DOMContentLoaded', () => {
    const boardEl = document.getElementById('board');
    const startBtn = document.getElementById('startBtn');
    const rowsInput = document.getElementById('rows');
    const colsInput = document.getElementById('cols');
    const minesInput = document.getElementById('mines');
    const timerEl = document.getElementById('timer');
    const highScoreEl = document.getElementById('highScore');

    let board = [];
    let rows = 0;
    let cols = 0;
    let mines = 0;
    let startTime = 0;
    let timer;

  
   const board = document.getElementById('board');
    const template = document.getElementById('tile-template');

    for (let i = 0; i < 100; i++) {
        const tile = template.content.firstElementChild.cloneNode(true);
        board.appendChild(tile);
    }

    // Demo icons
    board.children[5].classList.add('mine');
    board.children[10].classList.add('flag');
    function storageKey() {
        return `minesweeper-${rows}x${cols}-${mines}`;
    }

    function loadHighScore() {
        const val = localStorage.getItem(storageKey());
        highScoreEl.textContent = val ? val : '-';
    }

    function saveHighScore(time) {
        const key = storageKey();
        const current = parseFloat(localStorage.getItem(key));
        if (!current || time < current) {
            localStorage.setItem(key, time);
            highScoreEl.textContent = time;
        }
    }

    function setupBoard() {
        rows = parseInt(rowsInput.value);
        cols = parseInt(colsInput.value);
        mines = parseInt(minesInput.value);
        board = [];
        boardEl.style.gridTemplateColumns = `repeat(${cols}, 20px)`;
        boardEl.innerHTML = '';
        for (let r = 0; r < rows; r++) {
            board[r] = [];
            for (let c = 0; c < cols; c++) {
                const cellEl = document.createElement('div');
                cellEl.className = 'cell';
                cellEl.dataset.row = r;
                cellEl.dataset.col = c;
                cellEl.addEventListener('click', onReveal);
                boardEl.appendChild(cellEl);
                board[r][c] = { el: cellEl, mine: false, revealed: false, count: 0 };
            }
        }
        let placed = 0;
        while (placed < mines) {
            const r = Math.floor(Math.random() * rows);
            const c = Math.floor(Math.random() * cols);
            if (!board[r][c].mine) {
                board[r][c].mine = true;
                placed++;
            }
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c].mine) continue;
                let count = 0;
                for (let rr = r - 1; rr <= r + 1; rr++) {
                    for (let cc = c - 1; cc <= c + 1; cc++) {
                        if (rr >= 0 && rr < rows && cc >= 0 && cc < cols && board[rr][cc].mine) {
                            count++;
                        }
                    }
                }
                board[r][c].count = count;
            }
        }
        loadHighScore();
        startTime = Date.now();
        if (timer) clearInterval(timer);
        timer = setInterval(() => {
            timerEl.textContent = Math.floor((Date.now() - startTime) / 1000);
        }, 1000);
    }

    function onReveal(e) {
        const r = parseInt(this.dataset.row);
        const c = parseInt(this.dataset.col);
        reveal(r, c);
    }

    function reveal(r, c) {
        const cell = board[r][c];
        if (cell.revealed) return;
        cell.revealed = true;
        cell.el.classList.add('revealed');
        if (cell.mine) {
            cell.el.classList.add('mine');
            cell.el.textContent = '💣';
            endGame(false);
            return;
        }
        if (cell.count > 0) {
            cell.el.textContent = cell.count;
        } else {
            for (let rr = r - 1; rr <= r + 1; rr++) {
                for (let cc = c - 1; cc <= c + 1; cc++) {
                    if (rr >= 0 && rr < rows && cc >= 0 && cc < cols) {
                        reveal(rr, cc);
                    }
                }
            }
        }
        checkWin();
    }

    function checkWin() {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const cell = board[r][c];
                if (!cell.mine && !cell.revealed) {
                    return;
                }
            }
        }
        endGame(true);
    }

    function endGame(won) {
        clearInterval(timer);
        const time = Math.floor((Date.now() - startTime) / 1000);
        setTimeout(() => {
            alert(won ? `Gewonnen in ${time}s!` : 'Verloren!');
        }, 10);
        if (won) saveHighScore(time);
    }

    startBtn.addEventListener('click', setupBoard);

});
