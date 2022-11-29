import React,{useState} from 'react'
import ShowTodo from '../ShowTodo'

export default function Todolist() {
    const[task,setTask]=useState("add some task")
    const[data,setData]=useState([])


    const onchangehandler=(e)=>{
        setTask(e.target.value)
    }


    const submithandler=(e)=>{
        e.preventdefault();
        const newData=task;
        setData([...data,newData])

        setTask('')
    }
  return (   
    <div>
      
      <form className="d-flex" role="search" onSubmit={submithandler}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onchangehandler}/>
        <button className="btn btn-outline-success" type="submit">Add</button>
      </form>
      { data.map(( value , index)=>(
      < ShowTodo
      key={index}
      id={index}
      task={value}
    />

    )) 
   }
    </div>
  
  
  )
}
