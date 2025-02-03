
let gameBoard = [
	"", "", "",
	"", "", "",
	"", "", ""
];

let currentPlayer = "X";

const cellElements = document.querySelectorAll(".cell");
const resultElement = document.getElementById("result");

cellElements.forEach((cell, index) => {
	cell.addEventListener("click", () => {
		if (gameBoard[index] === "") {
			gameBoard[index] = currentPlayer;
			cell.textContent = currentPlayer;
			checkWinner();
			switchPlayer();
		}
	});
});

function checkWinner() {
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	
	winningCombinations.forEach(combination => {
		const [a, b, c] = combination;
		if (gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c] && gameBoard[a] !== "") {
			resultElement.textContent = `Player ${gameBoard[a]} wins!`;
			disableCells();
		}
	});
}

function switchPlayer() {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function disableCells() {
	cellElements.forEach(cell => {
		cell.disabled = true;
	});
}
