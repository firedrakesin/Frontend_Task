import React, { useState } from 'react';
import './Checkbox.css'

const Chessbox = () => {
  const [highlightedCell, setHighlightedCell] = useState(null);

  const createChessboard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 0;
        const cellStyle = {
          backgroundColor: isBlack ? 'black' : 'white',
          border: '1px solid gray',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
        };
        if (highlightedCell === `${row}-${col}`) {
          cellStyle.backgroundColor = 'red';
        }
        board.push(
          <div
            key={`${row}-${col}`}
            style={cellStyle}
            onClick={() => setHighlightedCell(`${row}-${col}`)}
          ></div>
        );
      }
    }
    return board;
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 50px)' }}>
      {createChessboard()}
    </div>
  );
};

export default Chessbox;
