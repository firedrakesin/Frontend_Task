import React from 'react'
import Checkbox from '../Checkbox/Checkbox'

const Home = () => {
    return (
        < >
          <h1 className='heading'>Frontend Task</h1>
          <p className='para'>Created a grid of 8x8, it have alternate color of black and white, starting from black
            when clicked on any grid, it highlights in red.
          </p>
          <Checkbox /> 
        </>
    );
}
export default Home



