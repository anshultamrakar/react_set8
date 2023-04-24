import React from 'react'
import Navbar from './Navbar'


const Home = ({items , isLoading}) => {

  return (
    <div>
        <h2>Todos</h2>
        <Navbar/>
        <ul>
        { isLoading ? <p>loading....</p> : items.map(item => (
            <li key = {item.id} style = {{listStyleType : "none"}}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Status : {item.isCompleted ? "Done" : "Not Done"} </p>
                <hr/>
            </li>
        ))}
        </ul>
        
    </div>
  )
}

export default Home