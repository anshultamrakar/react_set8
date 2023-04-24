import React from 'react'
import "./App.css"
import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import { fakeFetch } from './api/fakefetch'
import {useState ,useEffect} from "react"
import DoneTodo from './pages/DoneTodo';
import OpenTodo from "./pages/OpenTodo"
import SingleToDo from './pages/SingleToDo'
import Summary from './pages/Summary'


function App() {
  const [items , setItems] = useState([])
  const [isLoading , setIsLoading] = useState(true)

 
  const getData = async() => {
      const {data , status } = await fakeFetch("https://example.com/api/todos")
      if(status === 200){
          setItems(data.todos)
          setIsLoading(false)
      }
  }

  useEffect(() => {
      getData()
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home items = {items} isLoading = {isLoading}/>}/>
        <Route path = "/donetodo" element = {<DoneTodo  items = {items} />}/>
        <Route path = "/opentodo" element = {<OpenTodo  items = {items}/>}/>
        <Route path = "/donetodo/:id" element = {<SingleToDo items = {items}/>}/>
        <Route path = "/opentodo/:id" element = {<SingleToDo items = {items}/>}/>
        <Route path = "/summary" element = {<Summary/>}/>
      </Routes>
    </div> 
  );
}

export default App;
