import React from 'react'
import useDecrease from '../../hook'
const HookCounter = () => {

    const[count,decrease]=useDecrease(1)
  return (
    <div>
         <h1>My Counter</h1>
    <hr />
    <button onClick={decrease}>+</button>
        <h2>{count}</h2>
    </div>
  )
}

export default HookCounter