document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".cell");
  const statusDisplay = document.getElementById("status");
  const resetBtn = document.getElementById("resetBtn");

  let currentPlayer = "X";
  let gameActive = true;
  let gameState = ["", "", "", "", "", "", "", "", ""];

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

    if (
      gameState[clickedCellIndex] !== "" ||
      !gameActive ||
      currentPlayer === "O"
    ) {
      return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add("taken");

    checkResult();
  }

  function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
      const winCondition = winningConditions[i];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];

      if (a === "" || b === "" || c === "") {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      statusDisplay.textContent =
        currentPlayer === "X" ? "You won!" : "Computer won!";
      gameActive = false;
      return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
      statusDisplay.textContent = "Game ended in a draw!";
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.textContent =
      currentPlayer === "X" ? "Your turn (X)" : "Computer is thinking...";

    // Jika giliran komputer (O), lakukan langkah otomatis
    if (currentPlayer === "O" && gameActive) {
      setTimeout(makeComputerMove, 500); // Delay 500ms untuk efek natural
    }
  }

  function makeComputerMove() {
    const bestMove = getBestMove();
    if (bestMove !== -1) {
      gameState[bestMove] = "O";
      cells[bestMove].textContent = "O";
      cells[bestMove].classList.add("taken");
      checkResult();
    }
  }

  function getBestMove() {
    // Minimax algorithm untuk menemukan langkah terbaik
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
      if (gameState[i] === "") {
        gameState[i] = "O";
        let score = minimax(gameState, 0, false);
        gameState[i] = "";

        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    return bestMove;
  }

  function minimax(board, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null) {
      if (result === "O") return 10 - depth;
      if (result === "X") return depth - 10;
      if (result === "draw") return 0;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
          board[i] = "O";
          let score = minimax(board, depth + 1, false);
          board[i] = "";
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
          board[i] = "X";
          let score = minimax(board, depth + 1, true);
          board[i] = "";
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  function checkWinner() {
    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }

    if (!gameState.includes("")) {
      return "draw";
    }

    return null;
  }

  function resetGame() {
    currentPlayer = "X";
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.textContent = "Your turn (X)";

    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("taken");
    });
  }

  cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
  resetBtn.addEventListener("click", resetGame);
});
