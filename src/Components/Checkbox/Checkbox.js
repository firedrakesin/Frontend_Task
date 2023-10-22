import React, { useState } from 'react';
import './Checkbox.css';

const Checkbox = () => {
  // Defined a state variable 'highlightedCell' and a function 'setHighlightedCell' to manage the highlighted cell.
  const [highlightedCell, setHighlightedCell] = useState(null);

  // Created a function 'createChessboard' to generate the chessboard grid.
  const createChessboard = () => {
    const board = [];

    // Loop through rows and columns to create the chessboard cells.
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        // Determined if the cell should be black or white based on row and column indices.
        const isBlack = (row + col) % 2 === 0;

        // Defined CSS classes for the cell, including 'black' or 'white' for coloring and 'red' for highlighting.
        const cellClasses = `cell ${isBlack ? 'black' : 'white'} ${
          highlightedCell === `${row}-${col}` ? 'red' : ''
        }`;

        // Created a cell element with a unique key, CSS classes, and an onClick handler to toggle cell highlighting.
        board.push(
          <div
            key={`${row}-${col}`}
            className={cellClasses}
            onClick={() => setHighlightedCell(`${row}-${col}`)}
          ></div>
        );
      }
    }

    return board;
  };

  return (
    <div className='board'>
      <div className='chess'>
        {createChessboard()}
      </div>
    </div>
  );
};

export default Checkbox;
