import React, {useState} from "react"
import { nanoid } from 'nanoid'
import {Row , Col , Button, FormControl} from 'react-bootstrap'
import s from './AddTodo.module.css'


function AddTodo ({todo , setTodo}){

     const [value, setValue] = useState ('')


     function saveTodo(){
         if(value) {
             setTodo(
      [...todo, {
          id: nanoid(),
          title: value,
          status : true
      }]
  )
  setValue('') 
 }       
}


    return (
       <Row>
           <Col className={s.addTodoForm}>
           <FormControl placeholder="введите задачу" value={value} onChange={ (e)=>setValue(e.target.value)} />
            <Button variant="primary" className={s.btn}  onClick={saveTodo}>Сохранить</Button>
           </Col>
       </Row>
    )
}

export default AddTodo