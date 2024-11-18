import React from 'react'
import {useEffect} from "react"
import {useState} from 'react'

const GitHub = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
   fetch('https://api.github.com/users/Shubhamkumar8321')
   .then(response=>response.json())
   .then(data=>{
    setData(data)
   })
  },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
      GitHub Followers :{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default GitHub
