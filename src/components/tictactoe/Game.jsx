import React, { useReducer } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helper";

// Initial game state
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

// Reducer function
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { index } = action.payload;
      const board = [...state.board];

      // Nếu đã có người thắng hoặc ô đã được đánh thì không làm gì
      if (calculateWinner(board) || board[index]) {
        return state;
      }

      // Đánh dấu ô với 'X' hoặc 'O'
      board[index] = state.xIsNext ? "X" : "O";

      return {
        board,
        xIsNext: !state.xIsNext,
      };
    }

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: { index },
    });
  };

  const handleResetGame = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick} />
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
