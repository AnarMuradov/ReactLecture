import React, { useState } from 'react'

function useDecrease(val=0){
    const [count, setCount] = useState(val)
    function decrease() {
        setCount(count+1)
    }
  return [count,decrease]
}

export default useDecrease