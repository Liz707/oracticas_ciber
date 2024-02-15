let board = Array(9).fill(null);
let currentPlayer = 'X';

function drawBoard() {
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';
    board.forEach((cell, index) => {
        boardDiv.innerHTML += `<div class="${cell}" onclick="makeMove(${index})">${cell ? cell : ''}</div>`;
    });
    if (checkWin()) {
        setTimeout(() => {
            alert(`${currentPlayer === 'X' ? 'O' : 'X'} ha ganado!`);
            resetBoard();
        }, 100);
    }
}

function makeMove(index) {
    if (!board[index]) {
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        drawBoard();
    }
}

function resetBoard() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    drawBoard();
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let condition of winConditions) {
        if (board[condition[0]] && board[condition[0]] === board[condition[1]] && board[condition[0]] === board[condition[2]]) {
            return true;
        }
    }
    return false;
}

drawBoard();
