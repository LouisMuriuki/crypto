import React from 'react'
import {useLoaderData} from "react-router-dom "
const homedata=useLoaderData()
function Home() {
  return (
    <div>Home</div>
  )
}

export default Home

export const homeLoader=async()=>{
    const res =await fetch("")
    return res.json()

}