import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Axios = () => {
const [data, setData] = useState([])
// const [isloading, setIsloading] = useState("")
    useEffect(() => {
        async function getData() {
         const res = await axios.get("https://northwind.vercel.app/api/categories")
            setData(res.data)
            // setIsloading()
        }
        getData()
    }, [])
    
    
    
  return (
    <div>{data.map((x)=><li key={x.id}>{x.name}</li>)}</div>
  )
}

export default Axios