import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

function ToDoList({todos,onRemove,onToggle}){
    return(
        <div className="ToDoList">
            {   
                todos.map(todo=>(
                    <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
                )
                )
            }
        </div>
    )
};

export default ToDoList;