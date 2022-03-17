import React, {useState} from "react";
import {TodoForm} from "./TodoForm";
import {Todo} from "./Todo";

export const TodoList = (props) => {

    const [todos,setTodos] = useState([])

    const addTodo = (todo) =>{
        if(!todo.text){
            return
        }
        const newTodos = [todo,...todos]
        setTodos(newTodos)
    }
    const completeTodo = (id) =>{
        let updateTodo = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updateTodo)
    }
    const importantTodo = (id) =>{
        let updateTodo = todos.map(todo =>{
            if(todo.id === id){
                todo.isImportant = !todo.isImportant
            }
            return todo
        })
        setTodos(updateTodo)
    }
    const removeTodo = (id) =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }
    const updateTodo = (id, newValue) =>{
        if(!newValue.text){
            return
        }
        setTodos(prev=>prev.map(item => (item.id === id ? newValue : item)))
    }

    return(
        <div>
            <p>
                Todo List
            </p>
            <TodoForm onSubmitTodo={addTodo}/>
            <Todo todos={todos}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  completeTodo={completeTodo}
                  importantTodo={importantTodo}/>
        </div>
    )
}