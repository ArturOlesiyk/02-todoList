import React, {useState} from "react";
import {FiEdit} from "react-icons/fi";
import {RiCloseCircleLine} from "react-icons/ri";
import {TodoForm} from "./TodoForm";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";

export const Todo = (props) => {

    const [edit,setEdit] = useState({
        id: null,
        value: ''
    })

    const onSubmitTodo = (value) => {
        props.updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })

    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmitTodo={onSubmitTodo}/>
    }
    return props.todos.map((todo, index) =>(
        <div className={todo.isComplete ? 'todo-row complete': 'todo-row'}
             key={index}>
            <div className='icons'>
                {todo.isImportant ?
                    <AiFillStar onClick={() => {props.importantTodo(todo.id)}}/>
                    : <AiOutlineStar onClick={() => {props.importantTodo(todo.id)}}/>}
            </div>
            <div key={todo.id} onClick={() => {props.completeTodo(todo.id)}}>
                {todo.text}
            </div>
            <div className='icons'>
                <FiEdit onClick={()=>{setEdit({id: todo.id, value: todo.text})}}/>
                <RiCloseCircleLine onClick={() => {props.removeTodo(todo.id)}}/>
            </div>
        </div>
    ))
}