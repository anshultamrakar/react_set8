import React from 'react'
import { useParams } from 'react-router-dom'

const SingleToDo = ({items}) => {
   let { id } = useParams()
  
  return (
    <div>
        <h2>Todo Description</h2>
        <ul className='App'>
        {items.map(item => item.id === Number(id) ? 
        <>
        <h3> Title : {item.title}</h3>
        <p> Description : {item.description}</p>
        <p> Status : {item.isCompleted ? "Done" : "Not Done"}</p>
        <hr/>
        </> 
        : "")}
        </ul>
        
    </div>
  )
}

export default SingleToDo