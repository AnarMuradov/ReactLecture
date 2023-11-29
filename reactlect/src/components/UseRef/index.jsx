import React, { useRef } from 'react'

const Useref = () => {
    const myInp=useRef()
function click(){
    console.log(myInp.current);
    myInp.current.focus()
}
  return (
    <div>
        <button onClick={click}>Click</button>
        <br />
        <br />
        <br />
        <hr />
        <input type="text"  ref={myInp}/>

    </div>
  )
}

export default Useref