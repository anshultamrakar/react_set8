import React from 'react'
import {Link , useParams} from "react-router-dom"


const DoneTodo = ({items}) => {
 
 
  return (
    <div >
        <h2>Done todos</h2>
        <ul className='App'>
        {items.map(item => item.isCompleted ? (
            <li style = {{listStyleType : "none"}} key = {item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                 <Link to = {`/donetodo/${item.id}`}>Expand to do</Link>
                <hr/>
            </li>
        ) : "")}
        </ul>
   
    </div>
  )
}

export default DoneTodo