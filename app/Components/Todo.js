import React,{useState} from 'react'

const Todo = () => {
    const [title,setTitle]=useState("");
    const [desc, setdesc]= useState("");
    const [mainTask,setMainTask]=useState([]);
    const submitHandler=(e)=>{
       e.preventDefault()
       setMainTask([...mainTask, {title,desc}])
      
      setTitle("");
      setdesc("");
      console.log(mainTask)
    }
  
    const deleteHandler=(index)=>{
       let copytask=[...mainTask]
       copytask.splice(index,1)
       setMainTask(copytask)
    }
  
   let renderTask=<h2>No Task Available</h2>
   
    if(mainTask.length > 0){
       renderTask=  mainTask.map((task,index)=>{
        return (
        <li key={index} className='flex items-center justify-between mb-8'>
        <div className='flex justify-between  w-1/2'>
         <h5 className="text-2xl font-medium">{task.title}</h5>
         <h6 className='text-lg font-medium'>{task.desc}</h6>
        </div>
        <button className='bg-red-400 px-4 py-2 text-white rounded font-bold'
        onClick={()=>deleteHandler(index)}
        >Delete</button>
        </li>
        
        )
        })
    }
    return (
    <>
      <h1 className='bg-black text-white p-5 text-xl font-bold text-center'>Shreya's Todo List</h1>
      <form onSubmit={submitHandler}>
         <input 
           type="text"
           placeholder="Enter Title here"
           className='text-2xl border-zinc-800 border-3 m-8 px-4 py-2 '
           value={title}
           onChange={(e)=>{
              setTitle(e.target.value)
           }}
           />
         <input 
           type="text" 
           placeholder="Enter Description here" 
           className='text-2xl border-zinc-800 border-3 m-8 px-4 py-2 '
           value={desc}
           onChange={(e)=>{
              setdesc(e.target.value)
           }}
           />
         <button className='bg-black text-white px-4 py-2 font-bold text-xl rounded'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
         <ul>
          {renderTask}
         </ul>
      </div>
      

    </>
  )
}

export default Todo
