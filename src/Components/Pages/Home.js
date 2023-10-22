import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

const Home = () => {
    return (
        <>
          {/* This is the main component for the frontend task. */}

          <h1 className='heading'>Frontend Task</h1>
          {/* Render a heading with the class 'heading'. */}

          <p className='para'>
            Created a grid of 8x8, it has alternate colors of black and white, starting from black when clicked on any grid, it highlights in red.
          </p>
          {/* Render a paragraph with the class 'para', describing the task. */}

          <Checkbox />
          {/* Render the Checkbox component within the main component. */}
        </>
    );
}

export default Home;
