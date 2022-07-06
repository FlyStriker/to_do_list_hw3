import React, { useState}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList';
import {Container} from 'react-bootstrap'


function App() {

  const [todo,setTodo] = useState([
    {
      id:1,
      title:'First todo',
      status:true
    },
    {
      id:2,
      title:'Second todo',
      status:true
    },
    {
      id:3,
      title:'Third todo',
      status:true
    },
  ])

  return (
   <Container>
         <Header/>
         <TodoList todo={todo} setTodo={setTodo} /> 
         <AddTodo todo={todo} setTodo={setTodo} />
   </Container>
  )
}

export default App;
