import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [inp, setInp] = useState(0)
    
    const edvcalc = useMemo(() => Calculate(inp),[inp])
    function Calculate() {
        let value=parseFloat(inp)
        return value*0.18
    }
  return (
    <div>
        <input value={inp} type="text" onChange={e=>setInp(+e.target.value)}/>
        <h1>{edvcalc}</h1>
    </div>
    
  )
}

export default UseMemo