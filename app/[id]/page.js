"use client"
import React, { useState ,useEffect}from 'react'
import axios from 'axios'


const page = ({params}) => {
  const {id} = params;

const [topic ,setTopic]=useState([]);
const getTopics = async()=>{
   const {data} =await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
   console.log(data);
   setTopic(data)
   
}


useEffect(()=>{
    getTopics()
},[])
  
  return (
    <>
      {JSON.stringify(topic)}
    </>
  )
}

export default page;
