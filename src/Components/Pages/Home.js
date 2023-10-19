import React from 'react'
import Checkbox from '../Checkbox/Checkbox'

const Home = () => {
    return (
        <div className='home'>
          <h1>Frontend Task</h1>
          <p>1.Create a grid of 8x8, it must have alternate color of black and white, starting from black
            when clicked on any grid, it should highlight in red.
          </p>
          <Checkbox /> 
        </div>
    );
}

export default Home



