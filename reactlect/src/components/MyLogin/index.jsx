import React, { useState } from 'react'
import useLocalStorage from '../../hook/useLocal'

const MyLogin = () => {
// const [input, setInput] = useState(localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")) : "")
const [input,setInput] = useLocalStorage("username","")
function handleinput(e){
    setInput(e.target.value)
}
  return (
    <div>
        <input value={input} type="text" onChange={e=>handleinput(e)}/>
        <h2>{input}</h2>
    </div>
  )
}

export default MyLogin