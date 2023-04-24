import React from 'react'
import {Link} from "react-router-dom"


const OpenTodo = ({items}) => {
   
  return (
    <div>
       <h2>Open todos</h2>
       <ul style = {{listStyleType : "none"}} className='App'>
            {items.map(item => !item.isCompleted ? (
                <li key = {item.id}>
                 <h3>{item.title}</h3>
                 <p>{item.description}</p>
                 <Link to = {`/opentodo/${item.id}`}>Expand to do</Link>
                 <hr/>
                </li>
            ): "")}
       </ul>
    </div>
  )
}

export default OpenTodo