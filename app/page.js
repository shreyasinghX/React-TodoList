// "use client"
// import React, { useState ,useEffect}from 'react'
// import axios from 'axios'
// // import Todo from './Components/Todo'
// import Topics from './Components/Topics'
// import Link from 'next/link'

// const page = () => {
// const [topic ,setTopic]=useState([]);
// const getTopics = async()=>{
//    const {data} =await axios.get("https://jsonplaceholder.typicode.com/users ");
//    // console.log(data);
//    setTopic(data)
// }


// useEffect(()=>{
//     getTopics()
// },[])
//   return (
//     <>
//       <button className='bg-green-600 text-white px-4 py-2 rounded font-bold' onClick={getTopics} >Get Data</button>
//       <div className='p-8 bg-slate-100 mt-5'>
//          <ul>
//             {topic.map((e)=>{
//                return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
//             })}
//          </ul>
           
//       </div>
//     </>
//   )
// }

// export default page
"use client"
import React,{useContext} from 'react'
import { MyContext } from './Helper/Context'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from './Components/Todo';



const page = () => {
  // const user=useContext(MyContext)
  // console.log(user)
  // const notify =()=>{
  //   toast.success('🦄 Wow so easy!', {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark"
      
  //     });
  // }
  return (
    <div>
      
      <Todo/>
    </div>
  )
}

export default page

// import React,{useState} from 'react'
// import Header from './Components/Header'

// const page = () => {
   
//    const [num,setNum]=useState(10)
  
//    return (
//     <div>
//       This is home page
//       <Header num={num}/>
//     </div>
//   )
// }

// export default page



