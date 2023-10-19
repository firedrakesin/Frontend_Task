import React, { useState } from 'react';
import './Checkbox.css'; 

const Checkbox = () => {
  const [highlightedCell, setHighlightedCell] = useState(null);

  const createChessboard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 0;
        const cellClasses = `cell ${isBlack ? 'black' : 'white'} ${
          highlightedCell === `${row}-${col}` ? 'red' : ''
        }`;

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
    <div className='chess'>
      {createChessboard()}
    </div>
  );
};

export default Checkbox;
