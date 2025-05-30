javascript
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetBtn');
const statusDisplay = document.getElementById('status');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(event) {
    const cellIndex = event.target.id.split('-')[1];
if (gameBoard[cellIndex] !== '' || !gameActive) return;
    
    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    
    if (checkWinner()) {
        statusDisplay.textContent = ⁠ ${currentPlayer} wins! ⁠;
        gameActive = false;
        return;
    }
    
    if (!gameBoard.includes('')) {
        statusDisplay.textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winningPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c] && gameBoard[a] !== '';
    });
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.textContent = '';
    cells.forEach(cell => cell.textContent = '');
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);