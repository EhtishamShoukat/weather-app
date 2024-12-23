import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Game.css";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [Xturn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const renderSquare = (index) => {
    return (
      <button
        className="Square btn btn-outline-primary"
        onClick={() => handleClick(index)}
        disabled={winner || board[index] !== null}
      >
        {board[index]}
      </button>
    );
  };

  const handleClick = (index) => {
    if (board[index] != null || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = Xturn ? "X" : "O";
    setBoard(newBoard);
    setXTurn(!Xturn);

    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };

  const checkWinner = (board) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return combination[i];
      }
    }
    return null;
  };

  const resetHandle = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setXTurn(true);
  };

  return (
    <div className="Container">
      <h1 className="text-primary">Tic Tac Toe Game</h1>
      <div className="board">
        {board.map((_, index) => renderSquare(index))}
      </div>
      {winner && (
        <div className="winner alert alert-success mt-3">
          {winner} is the winner of the game!
        </div>
      )}
      <button className="btn btn-danger mt-3" onClick={resetHandle}>
        Reset Game
      </button>
    </div>
  );
}
